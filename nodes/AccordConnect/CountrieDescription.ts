import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0006 - 24/08/26 - do not edit by hand

export const countriesOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['countries'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'countries:get',
                description: 'Get a countrie',
                action: 'Get a countrie'
            },
            {
                name: 'List',
                value: 'countries:list',
                description: 'List many countries',
                action: 'List many countries'
            },
        ],
        default: 'countries:get',
    },
];


export const countriesReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the countrie',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['countries'],
                operation: ['countries:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'countryCode,countryName,ecIndicator,eeaIndicator',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Country Code',
                value: 'countryCode',
                description: 'Include country code in the response'
            },
            {
                name: 'Country Name',
                value: 'countryName',
                description: 'Include country name in the response'
            },
            {
                name: 'Ec Indicator',
                value: 'ecIndicator',
                description: 'Include ec indicator in the response'
            },
            {
                name: 'Eea Indicator',
                value: 'eeaIndicator',
                description: 'Include eea indicator in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['countries'],
                operation: ['countries:get']
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
                resource: ['countries'],
                operation: ['countries:get']
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
                resource: ['countries'],
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
                resource: ['countries'],
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
                resource: ['countries'],
                operation: ['get']
            }
        }
    }
];

export const countriesListFields: INodeProperties[] = [
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
                resource: ['countries'],
                operation: ['countries:list']
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
                resource: ['countries'],
                operation: ['countries:list'],
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
                resource: ['countries'],
                operation: ['countries:list'],
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
                resource: ['countries'],
                operation: ['countries:list'],
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
                        default: 'countryCode',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Country Code',
                                value: 'countryCode'
                            },
                            {
                                name: 'Country Name',
                                value: 'countryName'
                            },
                            {
                                name: 'Ec Indicator',
                                value: 'ecIndicator'
                            },
                            {
                                name: 'Eea Indicator',
                                value: 'eeaIndicator'
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
                resource: ['countries'],
                operation: ['countries:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Country Code',
        name: 'countryCode',
        type: 'string',
        default: '',
        description: 'Country Code (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'GB',
        displayOptions: {
            show: {
                resource: ['countries'],
                operation: ['countries:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Country Name',
        name: 'countryName',
        type: 'string',
        default: '',
        description: 'Name of Country (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'Great Britain',
        displayOptions: {
            show: {
                resource: ['countries'],
                operation: ['countries:list'],
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
        placeholder: '2024-11-08',
        displayOptions: {
            show: {
                resource: ['countries'],
                operation: ['countries:list'],
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
        placeholder: 'countryCode,-countryName',
        options: [
            {
                name: 'Country Code (Ascending)',
                value: 'countryCode',
                description: 'Sort by Country Code in ascending order'
            },
            {
                name: 'Country Code (Descending)',
                value: '-countryCode',
                description: 'Sort by Country Code in descending order'
            },
            {
                name: 'Country Name (Ascending)',
                value: 'countryName',
                description: 'Sort by Country Name in ascending order'
            },
            {
                name: 'Country Name (Descending)',
                value: '-countryName',
                description: 'Sort by Country Name in descending order'
            },
            {
                name: 'Ec Indicator (Ascending)',
                value: 'ecIndicator',
                description: 'Sort by Ec Indicator in ascending order'
            },
            {
                name: 'Ec Indicator (Descending)',
                value: '-ecIndicator',
                description: 'Sort by Ec Indicator in descending order'
            },
            {
                name: 'Eea Indicator (Ascending)',
                value: 'eeaIndicator',
                description: 'Sort by Eea Indicator in ascending order'
            },
            {
                name: 'Eea Indicator (Descending)',
                value: '-eeaIndicator',
                description: 'Sort by Eea Indicator in descending order'
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
            }
        ],
        displayOptions: {
            show: {
                resource: ['countries'],
                operation: ['countries:list'],
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
                resource: ['countries'],
                operation: ['countries:list'],
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
                name: 'Country Code',
                value: 'countryCode',
                description: 'Include country code in the response'
            },
            {
                name: 'Country Name',
                value: 'countryName',
                description: 'Include country name in the response'
            },
            {
                name: 'Ec Indicator',
                value: 'ecIndicator',
                description: 'Include ec indicator in the response'
            },
            {
                name: 'Eea Indicator',
                value: 'eeaIndicator',
                description: 'Include eea indicator in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['countries'],
                operation: ['countries:list'],
                filterMode: ['common']
            }
        }
    }
];
