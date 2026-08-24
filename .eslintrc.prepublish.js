module.exports = {
	extends: ['./.eslintrc.js'],
	rules: {
		// Stricter rules for publishing - only include rules that exist
		'n8n-nodes-base/community-package-json-name-still-default': 'error',
		'n8n-nodes-base/community-package-json-author-name-still-default': 'error',
		'n8n-nodes-base/community-package-json-author-email-still-default': 'error',
		'n8n-nodes-base/community-package-json-repository-url-still-default': 'error',
		'n8n-nodes-base/node-dirname-against-convention': 'error',
		'n8n-nodes-base/node-filename-against-convention': 'error',
		'n8n-nodes-base/cred-filename-against-convention': 'error',
		'n8n-nodes-base/node-class-description-credentials-name-unsuffixed': 'error',
		'n8n-nodes-base/node-class-description-display-name-unsuffixed-trigger-node': 'error',
		'n8n-nodes-base/node-class-description-name-unsuffixed-trigger-node': 'error',
		'n8n-nodes-base/node-class-description-missing-subtitle': 'error',
		'n8n-nodes-base/node-execute-block-wrong-error-thrown': 'error',
		'n8n-nodes-base/node-param-default-wrong-for-options': 'error',
		'no-console': 'error',
		'no-debugger': 'error'
	}
};