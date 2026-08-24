import type { INodeTypeDescription } from 'n8n-workflow';

import { AccordConnect } from './nodes/AccordConnect/AccordConnect.node';
import { AccordWebhookTrigger } from './nodes/AccordWebhookTrigger/AccordWebhookTrigger.node';

export { AccordConnect, AccordWebhookTrigger };

const nodes = [AccordConnect, AccordWebhookTrigger];

export const nodeTypes: { [key: string]: INodeTypeDescription } = {};

for (const node of nodes) {
	const nodeInstance = new node();
	nodeTypes[nodeInstance.description.name] = nodeInstance.description;
}