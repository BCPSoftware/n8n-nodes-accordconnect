import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AccordConnectApi implements ICredentialType {
	name = 'accordConnectApi';
	displayName = 'Accord Connect API';
	documentationUrl = 'https://api.accordconnect.com/docs';
	properties: INodeProperties[] = [

		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'https://accord.example.com/connect/rest/api/v1',
			description: 'Root URL of the Accord Connect API, including the API path. Resource paths such as /customers are appended to it. A trailing slash is ignored.',
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
		},
	];


};
