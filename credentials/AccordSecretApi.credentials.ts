import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AccordSecretApi implements ICredentialType {
	name = 'accordSecretApi';
	displayName = 'Accord Secret API';
	description = 'Secret key for Accord webhook verification';
	properties: INodeProperties[] = [
		{
			displayName: 'Secret Key',
			name: 'secret',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			description: 'The secret key used for HMAC-SHA256 verification',
		},
	];
}