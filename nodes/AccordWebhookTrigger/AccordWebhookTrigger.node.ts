import {
	IWebhookFunctions,
	IWebhookResponseData,
	INodeType,
	INodeTypeDescription,
	INodeProperties,
	IDataObject,
	NodeOperationError,
} from 'n8n-workflow';

import * as crypto from 'crypto';

export class AccordWebhookTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Accord Webhook (Verify) Trigger',
		name: 'accordWebhookTrigger',
		icon: 'file:accordConnect.svg',
		group: ['trigger'],
		version: 1,
		description: 'Receives Accord webhooks, verifies X-Signature-256 HMAC, and emits payload',
		defaults: {
			name: 'Accord Webhook (Verify)',
		},
		inputs: [],
		outputs: ['main'],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: '={{$parameter["path"] || "products"}}',
				basePath: 'accord',
			},
		],
		properties: <INodeProperties[]>[
			{
				displayName: 'Path',
				name: 'path',
				type: 'string',
				default: 'products',
				placeholder: 'products',
				description: 'Path appended to base webhook URL (/webhook/accord/{path})',
				required: true,
			},
			{
				displayName: 'Secret',
				name: 'secret',
				type: 'string',
				typeOptions: {
					password: true,
				},
				default: '',
				description: 'Secret key used for HMAC-SHA256 verification',
				required: true,
			},
			{
				displayName: 'Auto Respond',
				name: 'autoRespond',
				type: 'boolean',
				default: true,
				description: 'Whether to automatically send HTTP response (401 on failure, 200 on success)',
			},
			{
				displayName: 'Parse JSON',
				name: 'parseJson',
				type: 'boolean',
				default: true,
				description: 'Whether to attempt to parse request body as JSON',
			},
		],
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const secret = this.getNodeParameter('secret') as string;
		const autoRespond = this.getNodeParameter('autoRespond', true) as boolean;
		const parseJson = this.getNodeParameter('parseJson', true) as boolean;

		if (!secret) {
			throw new NodeOperationError(this.getNode(), 'Secret is required for webhook verification');
		}

		const req = this.getRequestObject();
		const rawBody = this.getBodyData();
		const headers = req.headers;

		// Get signature from header
		const receivedSignature = headers['x-signature-256'] as string;
		
		if (!receivedSignature) {
			const errorResponse = { error: 'Missing signature header' };
			
			if (autoRespond) {
				return {
					webhookResponse: {
						statusCode: 401,
						body: errorResponse,
					},
				};
			} else {
				return {
					workflowData: [
						[
							{
								json: {
									verified_signature: false,
									error: 'Missing signature header',
									rawHeaders: headers,
								},
							},
						],
					],
				};
			}
		}

		// Convert rawBody to Buffer for signature verification
		let bodyBuffer: Buffer;
		if (typeof rawBody === 'string') {
			bodyBuffer = Buffer.from(rawBody, 'utf8');
		} else {
			bodyBuffer = Buffer.from(JSON.stringify(rawBody), 'utf8');
		}

		// Verify signature
		const isValid = AccordWebhookTrigger.verifyHmacSignature(bodyBuffer, secret, receivedSignature);

		if (!isValid) {
			const errorResponse = { error: 'Invalid signature' };
			
			if (autoRespond) {
				return {
					webhookResponse: {
						statusCode: 401,
						body: errorResponse,
					},
				};
			} else {
				return {
					workflowData: [
						[
							{
								json: {
									verified_signature: false,
									error: 'Invalid signature',
									rawHeaders: headers,
								},
							},
						],
					],
				};
			}
		}

		// Signature is valid, process payload
		let parsedPayload: IDataObject | null = null;
		
		if (parseJson && typeof rawBody === 'string') {
			try {
				parsedPayload = JSON.parse(rawBody);
			} catch (error) {
				// JSON parsing failed, keep parsedPayload as null
			}
		} else if (parseJson && typeof rawBody === 'object') {
			parsedPayload = rawBody as IDataObject;
		}

		let finalPayload = parsedPayload || {};

		const responseData: IDataObject = {
			verified_signature: true,
			...finalPayload,
			rawHeaders: headers,
		};

		// Add action and id if they exist in parsed payload
		if (parsedPayload?.action) {
			responseData.action = parsedPayload.action;
		}
		if (parsedPayload?.id) {
			responseData.id = parsedPayload.id;
		}

		const successResponse = { status: 'processed' };

		return {
			webhookResponse: autoRespond ? {
				statusCode: 200,
				body: successResponse,
			} : undefined,
			workflowData: [
				[
					{
						json: responseData,
					},
				],
			],
		};
	}

	private static verifyHmacSignature(rawBody: Buffer, secret: string, receivedSignature: string): boolean {
		try {
			// Handle both formats: 'sha256=<hex>' or just '<hex>'
			let receivedHash: string;
			if (receivedSignature.startsWith('sha256=')) {
				receivedHash = receivedSignature.slice(7); // Remove 'sha256=' prefix
			} else {
				receivedHash = receivedSignature; // Use as-is (hex only)
			}

			const expectedHash = crypto.createHmac('sha256', secret).update(rawBody).digest('hex');

			// Use timing-safe comparison
			const receivedBuffer = Buffer.from(receivedHash, 'hex');
			const expectedBuffer = Buffer.from(expectedHash, 'hex');

			return receivedBuffer.length === expectedBuffer.length && 
				   crypto.timingSafeEqual(receivedBuffer, expectedBuffer);
		} catch (error) {
			return false;
		}
	}
}