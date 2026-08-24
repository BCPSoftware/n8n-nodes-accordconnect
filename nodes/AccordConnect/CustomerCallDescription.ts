import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0006 - 24/08/26 - do not edit by hand

export const customerCallsOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['customerCalls'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'customerCalls:create',
                description: 'Create a customerCall',
                action: 'Create a customer call'
            },
            {
                name: 'Get',
                value: 'customerCalls:get',
                description: 'Get a customerCall',
                action: 'Get a customer call'
            },
            {
                name: 'List',
                value: 'customerCalls:list',
                description: 'List many customerCalls',
                action: 'List many customer calls'
            },
            {
                name: 'Update',
                value: 'customerCalls:update',
                description: 'Update a customerCall',
                action: 'Update a customer call'
            },
        ],
        default: 'customerCalls:create',
    },
];


export const customerCallsReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the customerCall',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'callReference,customerCode,callStatus,statusDescription',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Account Code',
                value: 'accountCode',
                description: 'Include account code in the response'
            },
            {
                name: 'Action Ref',
                value: 'actionRef',
                description: 'Include action ref in the response'
            },
            {
                name: 'Action Text',
                value: 'actionText',
                description: 'Include action text in the response'
            },
            {
                name: 'Allocated To',
                value: 'allocatedTo',
                description: 'Include allocated to in the response'
            },
            {
                name: 'Amended By',
                value: 'amendedBy',
                description: 'Include amended by in the response'
            },
            {
                name: 'Analysis Code',
                value: 'analysisCode',
                description: 'Include analysis code in the response'
            },
            {
                name: 'Call Reference',
                value: 'callReference',
                description: 'Include call reference in the response'
            },
            {
                name: 'Call Status',
                value: 'callStatus',
                description: 'Include call status in the response'
            },
            {
                name: 'Call Text',
                value: 'callText',
                description: 'Include call text in the response'
            },
            {
                name: 'Call Type',
                value: 'callType',
                description: 'Include call type in the response'
            },
            {
                name: 'Contract Group',
                value: 'contractGroup',
                description: 'Include contract group in the response'
            },
            {
                name: 'Created By',
                value: 'createdBy',
                description: 'Include created by in the response'
            },
            {
                name: 'Customer Code',
                value: 'customerCode',
                description: 'Include customer code in the response'
            },
            {
                name: 'Head Office Account Code',
                value: 'headOfficeAccountCode',
                description: 'Include head office account code in the response'
            },
            {
                name: 'Logged Date',
                value: 'loggedDate',
                description: 'Include logged date in the response'
            },
            {
                name: 'Operator',
                value: 'operator',
                description: 'Include operator in the response'
            },
            {
                name: 'Rep Code',
                value: 'repCode',
                description: 'Include rep code in the response'
            },
            {
                name: 'Solution Date',
                value: 'solutionDate',
                description: 'Include solution date in the response'
            },
            {
                name: 'Solution Text',
                value: 'solutionText',
                description: 'Include solution text in the response'
            },
            {
                name: 'Status Description',
                value: 'statusDescription',
                description: 'Include status description in the response'
            },
            {
                name: 'Type Description',
                value: 'typeDescription',
                description: 'Include type description in the response'
            },
            {
                name: 'Updated Date',
                value: 'updatedDate',
                description: 'Include updated date in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:get']
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
                resource: ['customerCalls'],
                operation: ['customerCalls:get']
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
                resource: ['customerCalls'],
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
                resource: ['customerCalls'],
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
                resource: ['customerCalls'],
                operation: ['get']
            }
        }
    }
];

export const customerCallsUpdateFields: INodeProperties[] = [
    {
        displayName: 'Call Reference',
        name: 'callReference',
        type: 'number',
        default: '',
        description: 'The call reference value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:update']
            }
        }
    },
    {
        displayName: 'Action Ref',
        name: 'actionRef',
        type: 'number',
        default: '',
        description: 'Action Reference',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:update']
            }
        }
    },
    {
        displayName: 'Created By',
        name: 'createdBy',
        type: 'string',
        default: '',
        description: 'The created by value',
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:update']
            }
        }
    },
    {
        displayName: 'Action Text',
        name: 'actionText',
        type: 'string',
        default: '',
        description: 'Action Details',
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:update']
            }
        }
    },
    {
        displayName: 'Allocated To',
        name: 'allocatedTo',
        type: 'string',
        default: '',
        description: 'Allocated ID',
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:update']
            }
        }
    },
    {
        displayName: 'Solution Date',
        name: 'solutionDate',
        type: 'string',
        default: '',
        description: 'Action solution date',
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:update']
            }
        }
    }
];

export const customerCallsListFields: INodeProperties[] = [
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
                resource: ['customerCalls'],
                operation: ['customerCalls:list']
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
                resource: ['customerCalls'],
                operation: ['customerCalls:list'],
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
                resource: ['customerCalls'],
                operation: ['customerCalls:list'],
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
                resource: ['customerCalls'],
                operation: ['customerCalls:list'],
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
                        default: 'accountCode',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Account Code',
                                value: 'accountCode'
                            },
                            {
                                name: 'Action Ref',
                                value: 'actionRef'
                            },
                            {
                                name: 'Action Text',
                                value: 'actionText'
                            },
                            {
                                name: 'Allocated To',
                                value: 'allocatedTo'
                            },
                            {
                                name: 'Amended By',
                                value: 'amendedBy'
                            },
                            {
                                name: 'Analysis Code',
                                value: 'analysisCode'
                            },
                            {
                                name: 'Call Reference',
                                value: 'callReference'
                            },
                            {
                                name: 'Call Status',
                                value: 'callStatus'
                            },
                            {
                                name: 'Call Text',
                                value: 'callText'
                            },
                            {
                                name: 'Call Type',
                                value: 'callType'
                            },
                            {
                                name: 'Contract Group',
                                value: 'contractGroup'
                            },
                            {
                                name: 'Created By',
                                value: 'createdBy'
                            },
                            {
                                name: 'Customer Code',
                                value: 'customerCode'
                            },
                            {
                                name: 'Head Office Account Code',
                                value: 'headOfficeAccountCode'
                            },
                            {
                                name: 'Hide Nested Keys',
                                value: 'hideNestedKeys'
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
                                name: 'Operator',
                                value: 'operator'
                            },
                            {
                                name: 'Rep Code',
                                value: 'repCode'
                            },
                            {
                                name: 'Solution Text',
                                value: 'solutionText'
                            },
                            {
                                name: 'Timeout',
                                value: 'timeout'
                            }
                        ]
                    },
                    {
                        displayName: 'Operator',
                        name: 'operator',
                        type: 'options',
                        default: '=',
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
                                value: '='
                            },
                            {
                                name: 'Greater Than (>)',
                                value: '>'
                            },
                            {
                                name: 'Greater Than or Equal (>=)',
                                value: '>='
                            },
                            {
                                name: 'Less Than (<)',
                                value: '<'
                            },
                            {
                                name: 'Less Than or Equal (<=)',
                                value: '<='
                            },
                            {
                                name: 'Matches',
                                value: 'matches'
                            },
                            {
                                name: 'Not Equals (<>)',
                                value: '<>'
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
                resource: ['customerCalls'],
                operation: ['customerCalls:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Call Reference',
        name: 'callReference',
        type: 'number',
        default: '',
        description: 'Call Reference (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        typeOptions: {
            minValue: 0
        },
        placeholder: '12563',
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Customer Code',
        name: 'customerCode',
        type: 'string',
        default: '',
        description: 'Customer (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: '10001',
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Call Status',
        name: 'callStatus',
        type: 'number',
        default: '',
        description: 'Call Status (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        typeOptions: {
            minValue: 0
        },
        placeholder: '10',
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Call Type',
        name: 'callType',
        type: 'string',
        default: '',
        description: 'Call Type (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: '1',
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Rep Code',
        name: 'repCode',
        type: 'string',
        default: '',
        description: 'Rep. (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches).',
        placeholder: 're1',
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Operator',
        name: 'operator',
        type: 'string',
        default: '',
        description: 'Operator (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'bcp',
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:list'],
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
        placeholder: 'callReference,-customerCode',
        options: [
            {
                name: 'Account Code (Ascending)',
                value: 'accountCode',
                description: 'Sort by Account Code in ascending order'
            },
            {
                name: 'Account Code (Descending)',
                value: '-accountCode',
                description: 'Sort by Account Code in descending order'
            },
            {
                name: 'Action Ref (Ascending)',
                value: 'actionRef',
                description: 'Sort by Action Ref in ascending order'
            },
            {
                name: 'Action Ref (Descending)',
                value: '-actionRef',
                description: 'Sort by Action Ref in descending order'
            },
            {
                name: 'Action Text (Ascending)',
                value: 'actionText',
                description: 'Sort by Action Text in ascending order'
            },
            {
                name: 'Action Text (Descending)',
                value: '-actionText',
                description: 'Sort by Action Text in descending order'
            },
            {
                name: 'Allocated To (Ascending)',
                value: 'allocatedTo',
                description: 'Sort by Allocated To in ascending order'
            },
            {
                name: 'Allocated To (Descending)',
                value: '-allocatedTo',
                description: 'Sort by Allocated To in descending order'
            },
            {
                name: 'Amended By (Ascending)',
                value: 'amendedBy',
                description: 'Sort by Amended By in ascending order'
            },
            {
                name: 'Amended By (Descending)',
                value: '-amendedBy',
                description: 'Sort by Amended By in descending order'
            },
            {
                name: 'Analysis Code (Ascending)',
                value: 'analysisCode',
                description: 'Sort by Analysis Code in ascending order'
            },
            {
                name: 'Analysis Code (Descending)',
                value: '-analysisCode',
                description: 'Sort by Analysis Code in descending order'
            },
            {
                name: 'Call Reference (Ascending)',
                value: 'callReference',
                description: 'Sort by Call Reference in ascending order'
            },
            {
                name: 'Call Reference (Descending)',
                value: '-callReference',
                description: 'Sort by Call Reference in descending order'
            },
            {
                name: 'Call Status (Ascending)',
                value: 'callStatus',
                description: 'Sort by Call Status in ascending order'
            },
            {
                name: 'Call Status (Descending)',
                value: '-callStatus',
                description: 'Sort by Call Status in descending order'
            },
            {
                name: 'Call Text (Ascending)',
                value: 'callText',
                description: 'Sort by Call Text in ascending order'
            },
            {
                name: 'Call Text (Descending)',
                value: '-callText',
                description: 'Sort by Call Text in descending order'
            },
            {
                name: 'Call Type (Ascending)',
                value: 'callType',
                description: 'Sort by Call Type in ascending order'
            },
            {
                name: 'Call Type (Descending)',
                value: '-callType',
                description: 'Sort by Call Type in descending order'
            },
            {
                name: 'Contract Group (Ascending)',
                value: 'contractGroup',
                description: 'Sort by Contract Group in ascending order'
            },
            {
                name: 'Contract Group (Descending)',
                value: '-contractGroup',
                description: 'Sort by Contract Group in descending order'
            },
            {
                name: 'Created By (Ascending)',
                value: 'createdBy',
                description: 'Sort by Created By in ascending order'
            },
            {
                name: 'Created By (Descending)',
                value: '-createdBy',
                description: 'Sort by Created By in descending order'
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
                name: 'Head Office Account Code (Ascending)',
                value: 'headOfficeAccountCode',
                description: 'Sort by Head Office Account Code in ascending order'
            },
            {
                name: 'Head Office Account Code (Descending)',
                value: '-headOfficeAccountCode',
                description: 'Sort by Head Office Account Code in descending order'
            },
            {
                name: 'Operator (Ascending)',
                value: 'operator',
                description: 'Sort by Operator in ascending order'
            },
            {
                name: 'Operator (Descending)',
                value: '-operator',
                description: 'Sort by Operator in descending order'
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
                name: 'Solution Text (Ascending)',
                value: 'solutionText',
                description: 'Sort by Solution Text in ascending order'
            },
            {
                name: 'Solution Text (Descending)',
                value: '-solutionText',
                description: 'Sort by Solution Text in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:list'],
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
                resource: ['customerCalls'],
                operation: ['customerCalls:list'],
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
                name: 'Account Code',
                value: 'accountCode',
                description: 'Include account code in the response'
            },
            {
                name: 'Action Ref',
                value: 'actionRef',
                description: 'Include action ref in the response'
            },
            {
                name: 'Action Text',
                value: 'actionText',
                description: 'Include action text in the response'
            },
            {
                name: 'Allocated To',
                value: 'allocatedTo',
                description: 'Include allocated to in the response'
            },
            {
                name: 'Amended By',
                value: 'amendedBy',
                description: 'Include amended by in the response'
            },
            {
                name: 'Analysis Code',
                value: 'analysisCode',
                description: 'Include analysis code in the response'
            },
            {
                name: 'Call Reference',
                value: 'callReference',
                description: 'Include call reference in the response'
            },
            {
                name: 'Call Status',
                value: 'callStatus',
                description: 'Include call status in the response'
            },
            {
                name: 'Call Text',
                value: 'callText',
                description: 'Include call text in the response'
            },
            {
                name: 'Call Type',
                value: 'callType',
                description: 'Include call type in the response'
            },
            {
                name: 'Contract Group',
                value: 'contractGroup',
                description: 'Include contract group in the response'
            },
            {
                name: 'Created By',
                value: 'createdBy',
                description: 'Include created by in the response'
            },
            {
                name: 'Customer Code',
                value: 'customerCode',
                description: 'Include customer code in the response'
            },
            {
                name: 'Head Office Account Code',
                value: 'headOfficeAccountCode',
                description: 'Include head office account code in the response'
            },
            {
                name: 'Logged Date',
                value: 'loggedDate',
                description: 'Include logged date in the response'
            },
            {
                name: 'Operator',
                value: 'operator',
                description: 'Include operator in the response'
            },
            {
                name: 'Rep Code',
                value: 'repCode',
                description: 'Include rep code in the response'
            },
            {
                name: 'Solution Date',
                value: 'solutionDate',
                description: 'Include solution date in the response'
            },
            {
                name: 'Solution Text',
                value: 'solutionText',
                description: 'Include solution text in the response'
            },
            {
                name: 'Status Description',
                value: 'statusDescription',
                description: 'Include status description in the response'
            },
            {
                name: 'Type Description',
                value: 'typeDescription',
                description: 'Include type description in the response'
            },
            {
                name: 'Updated Date',
                value: 'updatedDate',
                description: 'Include updated date in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:list'],
                filterMode: ['common']
            }
        }
    }
];

export const customerCallsCreateFields: INodeProperties[] = [
    {
        displayName: 'Create Mode',
        name: 'createMode',
        type: 'options',
        default: 'simple',
        description: 'Choose how to provide the data for creating records',
        options: [
            {
                name: 'Simple',
                value: 'simple',
                description: 'Simplified interface with commonly used fields'
            },
            {
                name: 'Advanced',
                value: 'advanced',
                description: 'Advanced mode with access to all available fields'
            },
            {
                name: 'Raw JSON',
                value: 'json',
                description: 'Provide raw JSON body for maximum flexibility'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:create']
            }
        }
    },
    {
        displayName: 'JSON Body',
        name: 'jsonBody',
        type: 'json',
        default: '{}',
        description: 'Raw JSON body for creating customer call records. Provide the complete request payload.',
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:create'],
                createMode: ['json']
            }
        },
        placeholder: `{
  "customerCalls": [
    {
      // Add your customer call fields here
    }
  ]
}`
    },
    {
        displayName: 'Record ID',
        name: 'recordId',
        type: 'number',
        default: '',
        description: 'The record ID value',
        typeOptions: {
            minValue: -9999999
        },
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Call Reference',
        name: 'callReference',
        type: 'number',
        default: '',
        description: 'Should not be supplied, will be automatically generated and returned in the response',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Action Ref',
        name: 'actionRef',
        type: 'number',
        default: '',
        description: 'Action Reference',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Created By',
        name: 'createdBy',
        type: 'string',
        default: '',
        description: 'The created by value',
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Action Text',
        name: 'actionText',
        type: 'string',
        default: '',
        description: 'Action Details',
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Allocated To',
        name: 'allocatedTo',
        type: 'string',
        default: '',
        description: 'Allocated ID',
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Solution Date',
        name: 'solutionDate',
        type: 'string',
        default: '',
        description: 'Action solution date',
        displayOptions: {
            show: {
                resource: ['customerCalls'],
                operation: ['customerCalls:create'],
                createMode: ['advanced']
            }
        }
    }
];
