import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0006 - 24/08/26 - do not edit by hand

export const productDivisionsOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['productDivisions'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'productDivisions:create',
                description: 'Create a productDivision',
                action: 'Create a product division'
            },
            {
                name: 'Get',
                value: 'productDivisions:get',
                description: 'Get a productDivision',
                action: 'Get a product division'
            },
            {
                name: 'List',
                value: 'productDivisions:list',
                description: 'List many productDivisions',
                action: 'List many product divisions'
            },
            {
                name: 'Update',
                value: 'productDivisions:update',
                description: 'Update a productDivision',
                action: 'Update a product division'
            },
        ],
        default: 'productDivisions:create',
    },
];


export const productDivisionsReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the productDivision',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['productDivisions'],
                operation: ['productDivisions:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'productDivisionCode,lastUpdate,divisionDescription,consolidateChgSum',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Consolidate Chg Sum',
                value: 'consolidateChgSum',
                description: 'Include consolidate chg sum in the response'
            },
            {
                name: 'Division Description',
                value: 'divisionDescription',
                description: 'Include division description in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Product Division Code',
                value: 'productDivisionCode',
                description: 'Include product division code in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['productDivisions'],
                operation: ['productDivisions:get']
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
                resource: ['productDivisions'],
                operation: ['productDivisions:get']
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
                resource: ['productDivisions'],
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
                resource: ['productDivisions'],
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
                resource: ['productDivisions'],
                operation: ['get']
            }
        }
    }
];

export const productDivisionsUpdateFields: INodeProperties[] = [
    {
        displayName: 'Product Division Code',
        name: 'productDivisionCode',
        type: 'string',
        default: '',
        description: 'Division',
        required: true,
        displayOptions: {
            show: {
                resource: ['productDivisions'],
                operation: ['productDivisions:update']
            }
        }
    },
    {
        displayName: 'Division Description',
        name: 'divisionDescription',
        type: 'string',
        default: '',
        description: 'The division description value',
        displayOptions: {
            show: {
                resource: ['productDivisions'],
                operation: ['productDivisions:update']
            }
        }
    },
    {
        displayName: 'Consolidate Chg Sum',
        name: 'consolidateChgSum',
        type: 'options',
        default: 'n:No',
        description: 'Consolidate department on charging summary',
        options: [
            {
                name: 'No',
                value: 'n:No',
                description: 'No (code: n)'
            },
            {
                name: 'Yes',
                value: 'y:Yes',
                description: 'Yes (code: y)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['productDivisions'],
                operation: ['productDivisions:update']
            }
        }
    }
];

export const productDivisionsListFields: INodeProperties[] = [
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
                resource: ['productDivisions'],
                operation: ['productDivisions:list']
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
                resource: ['productDivisions'],
                operation: ['productDivisions:list'],
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
                resource: ['productDivisions'],
                operation: ['productDivisions:list'],
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
                resource: ['productDivisions'],
                operation: ['productDivisions:list'],
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
                        default: 'consolidateChgSum',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Consolidate Chg Sum',
                                value: 'consolidateChgSum'
                            },
                            {
                                name: 'Division Description',
                                value: 'divisionDescription'
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
                                name: 'Product Division Code',
                                value: 'productDivisionCode'
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
                resource: ['productDivisions'],
                operation: ['productDivisions:list'],
                filterMode: ['raw']
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
                resource: ['productDivisions'],
                operation: ['productDivisions:list'],
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
        placeholder: 'productDivisionCode,-lastUpdate',
        options: [
            {
                name: 'Consolidate Chg Sum (Ascending)',
                value: 'consolidateChgSum',
                description: 'Sort by Consolidate Chg Sum in ascending order'
            },
            {
                name: 'Consolidate Chg Sum (Descending)',
                value: '-consolidateChgSum',
                description: 'Sort by Consolidate Chg Sum in descending order'
            },
            {
                name: 'Division Description (Ascending)',
                value: 'divisionDescription',
                description: 'Sort by Division Description in ascending order'
            },
            {
                name: 'Division Description (Descending)',
                value: '-divisionDescription',
                description: 'Sort by Division Description in descending order'
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
                name: 'Product Division Code (Ascending)',
                value: 'productDivisionCode',
                description: 'Sort by Product Division Code in ascending order'
            },
            {
                name: 'Product Division Code (Descending)',
                value: '-productDivisionCode',
                description: 'Sort by Product Division Code in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['productDivisions'],
                operation: ['productDivisions:list'],
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
                resource: ['productDivisions'],
                operation: ['productDivisions:list'],
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
                name: 'Consolidate Chg Sum',
                value: 'consolidateChgSum',
                description: 'Include consolidate chg sum in the response'
            },
            {
                name: 'Division Description',
                value: 'divisionDescription',
                description: 'Include division description in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Product Division Code',
                value: 'productDivisionCode',
                description: 'Include product division code in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['productDivisions'],
                operation: ['productDivisions:list'],
                filterMode: ['common']
            }
        }
    }
];

export const productDivisionsCreateFields: INodeProperties[] = [
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
                resource: ['productDivisions'],
                operation: ['productDivisions:create']
            }
        }
    },
    {
        displayName: 'JSON Body',
        name: 'jsonBody',
        type: 'json',
        default: '{}',
        description: 'Raw JSON body for creating product division records. Provide the complete request payload.',
        displayOptions: {
            show: {
                resource: ['productDivisions'],
                operation: ['productDivisions:create'],
                createMode: ['json']
            }
        },
        placeholder: `{
  "productDivisions": [
    {
      // Add your product division fields here
    }
  ]
}`
    },
    {
        displayName: 'Product Division Code',
        name: 'productDivisionCode',
        type: 'string',
        default: '',
        description: 'Division',
        required: true,
        displayOptions: {
            show: {
                resource: ['productDivisions'],
                operation: ['productDivisions:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Division Description',
        name: 'divisionDescription',
        type: 'string',
        default: '',
        description: 'The division description value',
        displayOptions: {
            show: {
                resource: ['productDivisions'],
                operation: ['productDivisions:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Consolidate Chg Sum',
        name: 'consolidateChgSum',
        type: 'options',
        default: 'n:No',
        description: 'Consolidate department on charging summary',
        options: [
            {
                name: 'No',
                value: 'n:No',
                description: 'No (code: n)'
            },
            {
                name: 'Yes',
                value: 'y:Yes',
                description: 'Yes (code: y)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['productDivisions'],
                operation: ['productDivisions:create'],
                createMode: ['advanced']
            }
        }
    }
];
