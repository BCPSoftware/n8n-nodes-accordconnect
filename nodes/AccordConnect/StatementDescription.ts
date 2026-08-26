import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0008 - 26/08/26 - do not edit by hand

export const statementsOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['statements'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'statements:get',
                description: 'Get a statement',
                action: 'Get a statement'
            },
            {
                name: 'List',
                value: 'statements:list',
                description: 'List many statements',
                action: 'List many statements'
            },
        ],
        default: 'statements:get',
    },
];


export const statementsReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the statement',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'companyCode,ledgerCode,slCode,statementDate',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Company Code',
                value: 'companyCode',
                description: 'Include company code in the response'
            },
            {
                name: 'Customer Code',
                value: 'customerCode',
                description: 'Include customer code in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Ledger Code',
                value: 'ledgerCode',
                description: 'Include ledger code in the response'
            },
            {
                name: 'Sl Code',
                value: 'slCode',
                description: 'Include sl code in the response'
            },
            {
                name: 'Statement Date',
                value: 'statementDate',
                description: 'Include statement date in the response'
            },
            {
                name: 'Statement Number',
                value: 'statementNumber',
                description: 'Include statement number in the response'
            },
            {
                name: 'Statement PDF',
                value: 'statementPDF',
                description: 'Include statement pdf in the response'
            },
            {
                name: 'Week Number',
                value: 'weekNumber',
                description: 'Include week number in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:get']
            },
            hide: {
                downloadPDFs: [true]
            }
        }
    },
    {
        displayName: 'Unwrap Response',
        name: 'unwrapResponse',
        type: 'boolean',
        default: true,
        description: 'Whether return the single record directly instead of wrapped in an array',
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:get']
            }
        }
    },
    {
        displayName: 'Download PDFs',
        name: 'downloadPDFs',
        type: 'boolean',
        default: false,
        description: 'Whether to automatically download statement PDF documents. When enabled, all fields will be returned (fields parameter is ignored) to ensure the statementPDF field is available.',
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:get']
            }
        }
    },
    {
        displayName: 'PDF Format',
        name: 'pdfFormat',
        type: 'options',
        default: 'binary',
        description: 'Format for PDF output - binary data (for file operations) or base64 string (for storage/APIs)',
        options: [
            {
                name: 'Binary Data',
                value: 'binary',
                description: 'Store as n8n binary data (standard for file handling)'
            },
            {
                name: 'Base64 String',
                value: 'base64',
                description: 'Store as base64 string in JSON (for storage/APIs)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:get'],
                downloadPDFs: [true]
            }
        }
    },
    {
        displayName: 'Nested',
        name: 'nested',
        type: 'boolean',
        default: true,
        description: 'Whether nest data when multiple resources requested',
        placeholder: 'false',
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['get']
            }
        }
    },
    {
        displayName: 'Hide Nested Keys',
        name: 'hideNestedKeys',
        type: 'boolean',
        default: false,
        description: 'Whether hide the nested keys in the response',
        placeholder: 'true',
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['get']
            }
        }
    },
    {
        displayName: 'Timeout',
        name: 'timeout',
        type: 'number',
        default: '',
        description: 'Seconds after which to timeout the request',
        typeOptions: {
            minValue: 1
        },
        placeholder: '60',
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['get']
            }
        }
    }
];

export const statementsListFields: INodeProperties[] = [
    {
        displayName: 'Filter Mode',
        name: 'filterMode',
        type: 'options',
        default: 'common',
        description: 'Choose how to filter the results',
        options: [
            {
                name: 'Common Filters',
                value: 'common',
                description: 'Use predefined common filters'
            },
            {
                name: 'Advanced',
                value: 'advanced',
                description: 'Build custom filters with key/operation/value'
            },
            {
                name: 'Raw Query',
                value: 'raw',
                description: 'Provide raw query string for maximum flexibility'
            }
        ],
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:list']
            }
        }
    },
    {
        displayName: '⚠️ At Least One of the Following Filters Is Required: Customer Code, Rep Code, or Head Office',
        name: 'statementsListNotice',
        type: 'notice',
        default: '',
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Download PDFs',
        name: 'downloadPDFs',
        type: 'boolean',
        default: false,
        description: 'Whether to automatically download statement PDF documents. When enabled, all fields will be returned (fields parameter is ignored) to ensure the statementPDF field is available.',
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:list']
            }
        }
    },
    {
        displayName: 'PDF Format',
        name: 'pdfFormat',
        type: 'options',
        default: 'binary',
        description: 'Format for PDF output - binary data (for file operations) or base64 string (for storage/APIs)',
        options: [
            {
                name: 'Binary Data',
                value: 'binary',
                description: 'Store as n8n binary data (standard for file handling)'
            },
            {
                name: 'Base64 String',
                value: 'base64',
                description: 'Store as base64 string in JSON (for storage/APIs)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:list'],
                downloadPDFs: [true]
            }
        }
    },
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        default: false,
        description: 'Whether to return all results or only up to a given limit',
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        default: 50,
        description: 'Max number of results to return',
        typeOptions: {
            minValue: 1
        },
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:list'],
                filterMode: ['common'],
                returnAll: [false]
            }
        }
    },
    {
        displayName: 'Filters',
        name: 'filters',
        type: 'fixedCollection',
        typeOptions: {
            multipleValues: true
        },
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:list'],
                filterMode: ['advanced']
            }
        },
        description: 'Build complex filter queries using field names and operators',
        default: {},
        options: [
            {
                name: 'filterValues',
                displayName: 'Filter',
                values: [
                    {
                        displayName: 'Field',
                        name: 'field',
                        type: 'options',
                        default: 'companyCode',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Company Code',
                                value: 'companyCode'
                            },
                            {
                                name: 'Customer Code',
                                value: 'customerCode'
                            },
                            {
                                name: 'Head Office',
                                value: 'headOffice'
                            },
                            {
                                name: 'Hide Nested Keys',
                                value: 'hideNestedKeys'
                            },
                            {
                                name: 'Last Update',
                                value: 'lastUpdate'
                            },
                            {
                                name: 'Ledger Code',
                                value: 'ledgerCode'
                            },
                            {
                                name: 'Limit',
                                value: 'limit'
                            },
                            {
                                name: 'Nested',
                                value: 'nested'
                            },
                            {
                                name: 'Next ID',
                                value: 'nextID'
                            },
                            {
                                name: 'Offset',
                                value: 'offset'
                            },
                            {
                                name: 'Rep Code',
                                value: 'repCode'
                            },
                            {
                                name: 'Sl Code',
                                value: 'slCode'
                            },
                            {
                                name: 'Statement Date',
                                value: 'statementDate'
                            },
                            {
                                name: 'Statement Number',
                                value: 'statementNumber'
                            },
                            {
                                name: 'Timeout',
                                value: 'timeout'
                            },
                            {
                                name: 'Week Number',
                                value: 'weekNumber'
                            }
                        ]
                    },
                    {
                        displayName: 'Operator',
                        name: 'operator',
                        type: 'options',
                        default: 'equal',
                        description: 'Comparison operator for filtering',
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Begins With',
                                value: 'begins'
                            },
                            {
                                name: 'Contains',
                                value: 'contains'
                            },
                            {
                                name: 'Equals (=)',
                                value: 'equal'
                            },
                            {
                                name: 'Greater Than (>)',
                                value: 'gt'
                            },
                            {
                                name: 'Greater Than or Equal (>=)',
                                value: 'gte'
                            },
                            {
                                name: 'Less Than (<)',
                                value: 'lt'
                            },
                            {
                                name: 'Less Than or Equal (<=)',
                                value: 'lte'
                            },
                            {
                                name: 'Matches',
                                value: 'matches'
                            },
                            {
                                name: 'Not Equals (<>)',
                                value: 'notEqual'
                            }
                        ]
                    },
                    {
                        displayName: 'Value',
                        name: 'value',
                        type: 'string',
                        default: '',
                        placeholder: 'Enter filter value',
                        description: 'Value to filter by'
                    }
                ]
            }
        ]
    },
    {
        displayName: 'Raw Query',
        name: 'rawQuery',
        type: 'string',
        default: '',
        description: 'Raw query string for filtering results',
        placeholder: 'customerCode=10001&lastUpdate>2024-01-01',
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Customer Code',
        name: 'customerCode',
        type: 'string',
        default: '',
        description: 'Customer Code (=)',
        placeholder: '100002',
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Rep Code',
        name: 'repCode',
        type: 'string',
        default: '',
        description: 'Rep Code (=)',
        placeholder: '100',
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Head Office',
        name: 'headOffice',
        type: 'string',
        default: '',
        description: 'Company, ledger and head office account code (=)',
        placeholder: 'cap,100,100002',
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Statement Date',
        name: 'statementDate',
        type: 'string',
        default: '',
        description: 'Statement!Date (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        placeholder: '2020-04-06',
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Statement Number',
        name: 'statementNumber',
        type: 'number',
        default: '',
        description: 'Ref. (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE).',
        typeOptions: {
            minValue: 0
        },
        placeholder: '12345',
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Last Update',
        name: 'lastUpdate',
        type: 'string',
        default: '',
        description: 'Last Updated (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        placeholder: '2021-08-24T11:00:09.018',
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Sort',
        name: 'sort',
        type: 'multiOptions',
        default: [],
        description: 'Choose how to sort the results',
        placeholder: 'companyCode,-ledgerCode',
        options: [
            {
                name: 'Company Code (Ascending)',
                value: 'companyCode',
                description: 'Sort by Company Code in ascending order'
            },
            {
                name: 'Company Code (Descending)',
                value: '-companyCode',
                description: 'Sort by Company Code in descending order'
            },
            {
                name: 'Customer Code (Ascending)',
                value: 'customerCode',
                description: 'Sort by Customer Code in ascending order'
            },
            {
                name: 'Customer Code (Descending)',
                value: '-customerCode',
                description: 'Sort by Customer Code in descending order'
            },
            {
                name: 'Head Office (Ascending)',
                value: 'headOffice',
                description: 'Sort by Head Office in ascending order'
            },
            {
                name: 'Head Office (Descending)',
                value: '-headOffice',
                description: 'Sort by Head Office in descending order'
            },
            {
                name: 'Last Update (Ascending)',
                value: 'lastUpdate',
                description: 'Sort by Last Update in ascending order'
            },
            {
                name: 'Last Update (Descending)',
                value: '-lastUpdate',
                description: 'Sort by Last Update in descending order'
            },
            {
                name: 'Ledger Code (Ascending)',
                value: 'ledgerCode',
                description: 'Sort by Ledger Code in ascending order'
            },
            {
                name: 'Ledger Code (Descending)',
                value: '-ledgerCode',
                description: 'Sort by Ledger Code in descending order'
            },
            {
                name: 'Rep Code (Ascending)',
                value: 'repCode',
                description: 'Sort by Rep Code in ascending order'
            },
            {
                name: 'Rep Code (Descending)',
                value: '-repCode',
                description: 'Sort by Rep Code in descending order'
            },
            {
                name: 'Sl Code (Ascending)',
                value: 'slCode',
                description: 'Sort by Sl Code in ascending order'
            },
            {
                name: 'Sl Code (Descending)',
                value: '-slCode',
                description: 'Sort by Sl Code in descending order'
            },
            {
                name: 'Statement Date (Ascending)',
                value: 'statementDate',
                description: 'Sort by Statement Date in ascending order'
            },
            {
                name: 'Statement Date (Descending)',
                value: '-statementDate',
                description: 'Sort by Statement Date in descending order'
            },
            {
                name: 'Statement Number (Ascending)',
                value: 'statementNumber',
                description: 'Sort by Statement Number in ascending order'
            },
            {
                name: 'Statement Number (Descending)',
                value: '-statementNumber',
                description: 'Sort by Statement Number in descending order'
            },
            {
                name: 'Week Number (Ascending)',
                value: 'weekNumber',
                description: 'Sort by Week Number in ascending order'
            },
            {
                name: 'Week Number (Descending)',
                value: '-weekNumber',
                description: 'Sort by Week Number in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Count Only',
        name: 'countOnly',
        type: 'boolean',
        default: false,
        description: 'Whether record count only',
        placeholder: 'true',
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Company Code',
                value: 'companyCode',
                description: 'Include company code in the response'
            },
            {
                name: 'Customer Code',
                value: 'customerCode',
                description: 'Include customer code in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Ledger Code',
                value: 'ledgerCode',
                description: 'Include ledger code in the response'
            },
            {
                name: 'Sl Code',
                value: 'slCode',
                description: 'Include sl code in the response'
            },
            {
                name: 'Statement Date',
                value: 'statementDate',
                description: 'Include statement date in the response'
            },
            {
                name: 'Statement Number',
                value: 'statementNumber',
                description: 'Include statement number in the response'
            },
            {
                name: 'Statement PDF',
                value: 'statementPDF',
                description: 'Include statement pdf in the response'
            },
            {
                name: 'Week Number',
                value: 'weekNumber',
                description: 'Include week number in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['statements'],
                operation: ['statements:list'],
                filterMode: ['common']
            },
            hide: {
                downloadPDFs: [true]
            }
        }
    }
];
