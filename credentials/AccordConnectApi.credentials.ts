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
			displayName: 'BaseUrl',
			name: 'baseUrl',
			type: 'string',
			default: '',
			required: true,
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
