import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0006 - 24/08/26 - do not edit by hand

export const attributeGroupsOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'attributeGroups:create',
                description: 'Create a attributeGroup',
                action: 'Create a attribute group'
            },
            {
                name: 'Delete',
                value: 'attributeGroups:delete',
                description: 'Delete a attributeGroup',
                action: 'Delete a attribute group'
            },
            {
                name: 'Get',
                value: 'attributeGroups:get',
                description: 'Get a attributeGroup',
                action: 'Get a attribute group'
            },
            {
                name: 'List',
                value: 'attributeGroups:list',
                description: 'List many attributeGroups',
                action: 'List many attribute groups'
            },
            {
                name: 'Update',
                value: 'attributeGroups:update',
                description: 'Update a attributeGroup',
                action: 'Update a attribute group'
            },
        ],
        default: 'attributeGroups:create',
    },
];


export const attributeGroupsReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the attributeGroup',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'attributeGroup,description,keyTable,keyField',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Attribute Group',
                value: 'attributeGroup',
                description: 'Include attribute group in the response'
            },
            {
                name: 'Company Code',
                value: 'companyCode',
                description: 'Include company code in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Description',
                value: 'description',
                description: 'Include description in the response'
            },
            {
                name: 'Key Field',
                value: 'keyField',
                description: 'Include key field in the response'
            },
            {
                name: 'Key Table',
                value: 'keyTable',
                description: 'Include key table in the response'
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
            }
        ],
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:get']
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
                resource: ['attributeGroups'],
                operation: ['attributeGroups:get']
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
                resource: ['attributeGroups'],
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
                resource: ['attributeGroups'],
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
                resource: ['attributeGroups'],
                operation: ['get']
            }
        }
    }
];

export const attributeGroupsUpdateFields: INodeProperties[] = [
    {
        displayName: 'Attribute Group',
        name: 'attributeGroup',
        type: 'string',
        default: '',
        description: 'The attribute group value',
        required: true,
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:update']
            }
        }
    },
    {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        default: '',
        description: 'Group Description',
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:update']
            }
        }
    },
    {
        displayName: 'Key Table',
        name: 'keyTable',
        type: 'string',
        default: '',
        description: 'The key table value',
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:update']
            }
        }
    },
    {
        displayName: 'Key Field',
        name: 'keyField',
        type: 'string',
        default: '',
        description: 'The key field value',
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:update']
            }
        }
    },
    {
        displayName: 'Depot',
        name: 'depot',
        type: 'boolean',
        default: false,
        description: 'Whether the depot value',
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:update']
            }
        }
    },
    {
        displayName: 'Company Code',
        name: 'companyCode',
        type: 'boolean',
        default: false,
        description: 'Whether company',
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:update']
            }
        }
    },
    {
        displayName: 'Ledger Code',
        name: 'ledgerCode',
        type: 'boolean',
        default: false,
        description: 'Whether ledger',
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:update']
            }
        }
    }
];

export const attributeGroupsListFields: INodeProperties[] = [
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
                resource: ['attributeGroups'],
                operation: ['attributeGroups:list']
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
                resource: ['attributeGroups'],
                operation: ['attributeGroups:list'],
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
                resource: ['attributeGroups'],
                operation: ['attributeGroups:list'],
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
                resource: ['attributeGroups'],
                operation: ['attributeGroups:list'],
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
                        default: 'attributeGroup',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Attribute Group',
                                value: 'attributeGroup'
                            },
                            {
                                name: 'Company Code',
                                value: 'companyCode'
                            },
                            {
                                name: 'Depot',
                                value: 'depot'
                            },
                            {
                                name: 'Description',
                                value: 'description'
                            },
                            {
                                name: 'Hide Nested Keys',
                                value: 'hideNestedKeys'
                            },
                            {
                                name: 'Key Field',
                                value: 'keyField'
                            },
                            {
                                name: 'Key Table',
                                value: 'keyTable'
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
                                name: 'Timeout',
                                value: 'timeout'
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
                resource: ['attributeGroups'],
                operation: ['attributeGroups:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        default: '',
        description: 'Group Description (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'Product attributes',
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:list'],
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
        placeholder: '2021-12-29T11:37:05.527',
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:list'],
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
        placeholder: 'attributeGroup,-description',
        options: [
            {
                name: 'Attribute Group (Ascending)',
                value: 'attributeGroup',
                description: 'Sort by Attribute Group in ascending order'
            },
            {
                name: 'Attribute Group (Descending)',
                value: '-attributeGroup',
                description: 'Sort by Attribute Group in descending order'
            },
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
                name: 'Depot (Ascending)',
                value: 'depot',
                description: 'Sort by Depot in ascending order'
            },
            {
                name: 'Depot (Descending)',
                value: '-depot',
                description: 'Sort by Depot in descending order'
            },
            {
                name: 'Description (Ascending)',
                value: 'description',
                description: 'Sort by Description in ascending order'
            },
            {
                name: 'Description (Descending)',
                value: '-description',
                description: 'Sort by Description in descending order'
            },
            {
                name: 'Key Field (Ascending)',
                value: 'keyField',
                description: 'Sort by Key Field in ascending order'
            },
            {
                name: 'Key Field (Descending)',
                value: '-keyField',
                description: 'Sort by Key Field in descending order'
            },
            {
                name: 'Key Table (Ascending)',
                value: 'keyTable',
                description: 'Sort by Key Table in ascending order'
            },
            {
                name: 'Key Table (Descending)',
                value: '-keyTable',
                description: 'Sort by Key Table in descending order'
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
            }
        ],
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:list'],
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
                resource: ['attributeGroups'],
                operation: ['attributeGroups:list'],
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
                name: 'Attribute Group',
                value: 'attributeGroup',
                description: 'Include attribute group in the response'
            },
            {
                name: 'Company Code',
                value: 'companyCode',
                description: 'Include company code in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Description',
                value: 'description',
                description: 'Include description in the response'
            },
            {
                name: 'Key Field',
                value: 'keyField',
                description: 'Include key field in the response'
            },
            {
                name: 'Key Table',
                value: 'keyTable',
                description: 'Include key table in the response'
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
            }
        ],
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:list'],
                filterMode: ['common']
            }
        }
    }
];

export const attributeGroupsCreateFields: INodeProperties[] = [
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
                resource: ['attributeGroups'],
                operation: ['attributeGroups:create']
            }
        }
    },
    {
        displayName: 'JSON Body',
        name: 'jsonBody',
        type: 'json',
        default: '{}',
        description: 'Raw JSON body for creating attribute group records. Provide the complete request payload.',
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:create'],
                createMode: ['json']
            }
        },
        placeholder: `{
  "attributeGroups": [
    {
      // Add your attribute group fields here
    }
  ]
}`
    },
    {
        displayName: 'Attribute Group',
        name: 'attributeGroup',
        type: 'string',
        default: '',
        description: 'The attribute group value',
        required: true,
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        default: '',
        description: 'Group Description',
        required: true,
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Key Table',
        name: 'keyTable',
        type: 'string',
        default: '',
        description: 'The key table value',
        required: true,
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Key Field',
        name: 'keyField',
        type: 'string',
        default: '',
        description: 'The key field value',
        required: true,
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Depot',
        name: 'depot',
        type: 'boolean',
        default: false,
        description: 'Whether the depot value',
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Company Code',
        name: 'companyCode',
        type: 'boolean',
        default: false,
        description: 'Whether company',
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Ledger Code',
        name: 'ledgerCode',
        type: 'boolean',
        default: false,
        description: 'Whether ledger',
        displayOptions: {
            show: {
                resource: ['attributeGroups'],
                operation: ['attributeGroups:create'],
                createMode: ['advanced']
            }
        }
    }
];
