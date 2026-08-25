import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0007 - 25/08/26 - do not edit by hand

export const allergensOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['allergens'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'allergens:create',
                description: 'Create a allergen',
                action: 'Create a allergen'
            },
            {
                name: 'Get',
                value: 'allergens:get',
                description: 'Get a allergen',
                action: 'Get a allergen'
            },
            {
                name: 'List',
                value: 'allergens:list',
                description: 'List many allergens',
                action: 'List many allergens'
            },
            {
                name: 'Update',
                value: 'allergens:update',
                description: 'Update a allergen',
                action: 'Update a allergen'
            },
        ],
        default: 'allergens:create',
    },
];


export const allergensReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the allergen',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['allergens'],
                operation: ['allergens:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'allergenCode,allergenName,allergenDescription,allergenQualifier',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Allergen Code',
                value: 'allergenCode',
                description: 'Include allergen code in the response'
            },
            {
                name: 'Allergen Description',
                value: 'allergenDescription',
                description: 'Include allergen description in the response'
            },
            {
                name: 'Allergen Name',
                value: 'allergenName',
                description: 'Include allergen name in the response'
            },
            {
                name: 'Allergen Qualifier',
                value: 'allergenQualifier',
                description: 'Include allergen qualifier in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Maximum Quantity',
                value: 'maximumQuantity',
                description: 'Include maximum quantity in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['allergens'],
                operation: ['allergens:get']
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
                resource: ['allergens'],
                operation: ['allergens:get']
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
                resource: ['allergens'],
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
                resource: ['allergens'],
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
                resource: ['allergens'],
                operation: ['get']
            }
        }
    }
];

export const allergensUpdateFields: INodeProperties[] = [
    {
        displayName: 'Allergen Code',
        name: 'allergenCode',
        type: 'string',
        default: '',
        description: 'The allergen code value',
        required: true,
        displayOptions: {
            show: {
                resource: ['allergens'],
                operation: ['allergens:update']
            }
        }
    },
    {
        displayName: 'Allergen Name',
        name: 'allergenName',
        type: 'string',
        default: '',
        description: 'The allergen name value',
        displayOptions: {
            show: {
                resource: ['allergens'],
                operation: ['allergens:update']
            }
        }
    },
    {
        displayName: 'Allergen Description',
        name: 'allergenDescription',
        type: 'string',
        default: '',
        description: 'The allergen description value',
        displayOptions: {
            show: {
                resource: ['allergens'],
                operation: ['allergens:update']
            }
        }
    },
    {
        displayName: 'Allergen Qualifier',
        name: 'allergenQualifier',
        type: 'options',
        default: 'a:Attribute',
        description: 'The allergen qualifier value',
        required: true,
        options: [
            {
                name: 'Attribute',
                value: 'a:Attribute',
                description: 'Attribute (code: a)'
            },
            {
                name: 'Contains',
                value: 'c:Contains',
                description: 'Contains (code: c)'
            },
            {
                name: 'Free From',
                value: 'f:Free from',
                description: 'Free from (code: f)'
            },
            {
                name: 'May Contain',
                value: 'm:May contain',
                description: 'May contain (code: m)'
            },
            {
                name: 'Produced in Factory that Uses',
                value: 'p:Produced in factory that uses',
                description: 'Produced in factory that uses (code: p)'
            },
            {
                name: 'Suitable for',
                value: 's:Suitable for',
                description: 'Suitable for (code: s)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['allergens'],
                operation: ['allergens:update']
            }
        }
    },
    {
        displayName: 'Maximum Quantity',
        name: 'maximumQuantity',
        type: 'number',
        default: '',
        description: 'Maximum Purchase Quantity',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['allergens'],
                operation: ['allergens:update']
            }
        }
    }
];

export const allergensListFields: INodeProperties[] = [
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
                resource: ['allergens'],
                operation: ['allergens:list']
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
                resource: ['allergens'],
                operation: ['allergens:list'],
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
                resource: ['allergens'],
                operation: ['allergens:list'],
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
                resource: ['allergens'],
                operation: ['allergens:list'],
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
                        default: 'allergenCode',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Allergen Code',
                                value: 'allergenCode'
                            },
                            {
                                name: 'Allergen Description',
                                value: 'allergenDescription'
                            },
                            {
                                name: 'Allergen Name',
                                value: 'allergenName'
                            },
                            {
                                name: 'Allergen Qualifier',
                                value: 'allergenQualifier'
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
                                name: 'Limit',
                                value: 'limit'
                            },
                            {
                                name: 'Maximum Quantity',
                                value: 'maximumQuantity'
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
                resource: ['allergens'],
                operation: ['allergens:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Allergen Code',
        name: 'allergenCode',
        type: 'string',
        default: '',
        description: 'Allergen Code (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'SOY',
        displayOptions: {
            show: {
                resource: ['allergens'],
                operation: ['allergens:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Allergen Name',
        name: 'allergenName',
        type: 'string',
        default: '',
        description: 'Allergen Name (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'Soyabeans',
        displayOptions: {
            show: {
                resource: ['allergens'],
                operation: ['allergens:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Allergen Description',
        name: 'allergenDescription',
        type: 'string',
        default: '',
        description: 'Allergen Description (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'Soyabeans',
        displayOptions: {
            show: {
                resource: ['allergens'],
                operation: ['allergens:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Allergen Qualifier',
        name: 'allergenQualifier',
        type: 'multiOptions',
        default: [],
        description: 'Allergen Qualifier (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        options: [
            {
                name: 'Attribute',
                value: 'a:Attribute',
                description: 'Attribute (code: a)'
            },
            {
                name: 'Contains',
                value: 'c:Contains',
                description: 'Contains (code: c)'
            },
            {
                name: 'Free From',
                value: 'f:Free from',
                description: 'Free from (code: f)'
            },
            {
                name: 'May Contain',
                value: 'm:May contain',
                description: 'May contain (code: m)'
            },
            {
                name: 'Produced in Factory that Uses',
                value: 'p:Produced in factory that uses',
                description: 'Produced in factory that uses (code: p)'
            },
            {
                name: 'Suitable for',
                value: 's:Suitable for',
                description: 'Suitable for (code: s)'
            }
        ],
        placeholder: 'c:Contains',
        displayOptions: {
            show: {
                resource: ['allergens'],
                operation: ['allergens:list'],
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
                resource: ['allergens'],
                operation: ['allergens:list'],
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
        placeholder: 'allergenCode,-allergenName',
        options: [
            {
                name: 'Allergen Code (Ascending)',
                value: 'allergenCode',
                description: 'Sort by Allergen Code in ascending order'
            },
            {
                name: 'Allergen Code (Descending)',
                value: '-allergenCode',
                description: 'Sort by Allergen Code in descending order'
            },
            {
                name: 'Allergen Description (Ascending)',
                value: 'allergenDescription',
                description: 'Sort by Allergen Description in ascending order'
            },
            {
                name: 'Allergen Description (Descending)',
                value: '-allergenDescription',
                description: 'Sort by Allergen Description in descending order'
            },
            {
                name: 'Allergen Name (Ascending)',
                value: 'allergenName',
                description: 'Sort by Allergen Name in ascending order'
            },
            {
                name: 'Allergen Name (Descending)',
                value: '-allergenName',
                description: 'Sort by Allergen Name in descending order'
            },
            {
                name: 'Allergen Qualifier (Ascending)',
                value: 'allergenQualifier',
                description: 'Sort by Allergen Qualifier in ascending order'
            },
            {
                name: 'Allergen Qualifier (Descending)',
                value: '-allergenQualifier',
                description: 'Sort by Allergen Qualifier in descending order'
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
                name: 'Maximum Quantity (Ascending)',
                value: 'maximumQuantity',
                description: 'Sort by Maximum Quantity in ascending order'
            },
            {
                name: 'Maximum Quantity (Descending)',
                value: '-maximumQuantity',
                description: 'Sort by Maximum Quantity in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['allergens'],
                operation: ['allergens:list'],
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
                resource: ['allergens'],
                operation: ['allergens:list'],
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
                name: 'Allergen Code',
                value: 'allergenCode',
                description: 'Include allergen code in the response'
            },
            {
                name: 'Allergen Description',
                value: 'allergenDescription',
                description: 'Include allergen description in the response'
            },
            {
                name: 'Allergen Name',
                value: 'allergenName',
                description: 'Include allergen name in the response'
            },
            {
                name: 'Allergen Qualifier',
                value: 'allergenQualifier',
                description: 'Include allergen qualifier in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Maximum Quantity',
                value: 'maximumQuantity',
                description: 'Include maximum quantity in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['allergens'],
                operation: ['allergens:list'],
                filterMode: ['common']
            }
        }
    }
];

export const allergensCreateFields: INodeProperties[] = [
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
                resource: ['allergens'],
                operation: ['allergens:create']
            }
        }
    },
    {
        displayName: 'JSON Body',
        name: 'jsonBody',
        type: 'json',
        default: '{}',
        description: 'Raw JSON body for creating allergen records. Provide the complete request payload.',
        displayOptions: {
            show: {
                resource: ['allergens'],
                operation: ['allergens:create'],
                createMode: ['json']
            }
        },
        placeholder: `{
  "allergens": [
    {
      // Add your allergen fields here
    }
  ]
}`
    },
    {
        displayName: 'Allergen Code',
        name: 'allergenCode',
        type: 'string',
        default: '',
        description: 'The allergen code value',
        required: true,
        displayOptions: {
            show: {
                resource: ['allergens'],
                operation: ['allergens:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Allergen Qualifier',
        name: 'allergenQualifier',
        type: 'options',
        default: 'a:Attribute',
        description: 'The allergen qualifier value',
        required: true,
        options: [
            {
                name: 'Attribute',
                value: 'a:Attribute',
                description: 'Attribute (code: a)'
            },
            {
                name: 'Contains',
                value: 'c:Contains',
                description: 'Contains (code: c)'
            },
            {
                name: 'Free From',
                value: 'f:Free from',
                description: 'Free from (code: f)'
            },
            {
                name: 'May Contain',
                value: 'm:May contain',
                description: 'May contain (code: m)'
            },
            {
                name: 'Produced in Factory that Uses',
                value: 'p:Produced in factory that uses',
                description: 'Produced in factory that uses (code: p)'
            },
            {
                name: 'Suitable for',
                value: 's:Suitable for',
                description: 'Suitable for (code: s)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['allergens'],
                operation: ['allergens:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Allergen Name',
        name: 'allergenName',
        type: 'string',
        default: '',
        description: 'The allergen name value',
        displayOptions: {
            show: {
                resource: ['allergens'],
                operation: ['allergens:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Allergen Description',
        name: 'allergenDescription',
        type: 'string',
        default: '',
        description: 'The allergen description value',
        displayOptions: {
            show: {
                resource: ['allergens'],
                operation: ['allergens:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Maximum Quantity',
        name: 'maximumQuantity',
        type: 'number',
        default: '',
        description: 'Maximum Purchase Quantity',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['allergens'],
                operation: ['allergens:create'],
                createMode: ['advanced']
            }
        }
    }
];
