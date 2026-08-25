import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0007 - 25/08/26 - do not edit by hand

export const mixMatchLinesOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['mixMatchLines'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'mixMatchLines:get',
                description: 'Get a mixMatchLine',
                action: 'Get a mix match line'
            },
            {
                name: 'List',
                value: 'mixMatchLines:list',
                description: 'List many mixMatchLines',
                action: 'List many mix match lines'
            },
        ],
        default: 'mixMatchLines:get',
    },
];


export const mixMatchLinesReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the mixMatchLine',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['mixMatchLines'],
                operation: ['mixMatchLines:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'mixMatchCode,productCode,lastUpdate,lineType',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Anchor',
                value: 'anchor',
                description: 'Include anchor in the response'
            },
            {
                name: 'Free Product',
                value: 'freeProduct',
                description: 'Include free product in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Line Type',
                value: 'lineType',
                description: 'Include line type in the response'
            },
            {
                name: 'Mix Match Code',
                value: 'mixMatchCode',
                description: 'Include mix match code in the response'
            },
            {
                name: 'Online',
                value: 'online',
                description: 'Include online in the response'
            },
            {
                name: 'Product Code',
                value: 'productCode',
                description: 'Include product code in the response'
            },
            {
                name: 'Product Web Description',
                value: 'productWebDescription',
                description: 'Include product web description in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['mixMatchLines'],
                operation: ['mixMatchLines:get']
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
                resource: ['mixMatchLines'],
                operation: ['mixMatchLines:get']
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
                resource: ['mixMatchLines'],
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
                resource: ['mixMatchLines'],
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
                resource: ['mixMatchLines'],
                operation: ['get']
            }
        }
    }
];

export const mixMatchLinesListFields: INodeProperties[] = [
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
                resource: ['mixMatchLines'],
                operation: ['mixMatchLines:list']
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
                resource: ['mixMatchLines'],
                operation: ['mixMatchLines:list'],
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
                resource: ['mixMatchLines'],
                operation: ['mixMatchLines:list'],
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
                resource: ['mixMatchLines'],
                operation: ['mixMatchLines:list'],
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
                        default: 'hideNestedKeys',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
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
                                name: 'Mix Match Code',
                                value: 'mixMatchCode'
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
                                name: 'Online',
                                value: 'online'
                            },
                            {
                                name: 'Product Code',
                                value: 'productCode'
                            },
                            {
                                name: 'Product Web Description',
                                value: 'productWebDescription'
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
                resource: ['mixMatchLines'],
                operation: ['mixMatchLines:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Product Code',
        name: 'productCode',
        type: 'string',
        default: '',
        description: 'Product Code (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: '100123',
        displayOptions: {
            show: {
                resource: ['mixMatchLines'],
                operation: ['mixMatchLines:list'],
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
                resource: ['mixMatchLines'],
                operation: ['mixMatchLines:list'],
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
        placeholder: 'mixMatchCode,-productCode',
        options: [
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
                name: 'Mix Match Code (Ascending)',
                value: 'mixMatchCode',
                description: 'Sort by Mix Match Code in ascending order'
            },
            {
                name: 'Mix Match Code (Descending)',
                value: '-mixMatchCode',
                description: 'Sort by Mix Match Code in descending order'
            },
            {
                name: 'Online (Ascending)',
                value: 'online',
                description: 'Sort by Online in ascending order'
            },
            {
                name: 'Online (Descending)',
                value: '-online',
                description: 'Sort by Online in descending order'
            },
            {
                name: 'Product Code (Ascending)',
                value: 'productCode',
                description: 'Sort by Product Code in ascending order'
            },
            {
                name: 'Product Code (Descending)',
                value: '-productCode',
                description: 'Sort by Product Code in descending order'
            },
            {
                name: 'Product Web Description (Ascending)',
                value: 'productWebDescription',
                description: 'Sort by Product Web Description in ascending order'
            },
            {
                name: 'Product Web Description (Descending)',
                value: '-productWebDescription',
                description: 'Sort by Product Web Description in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['mixMatchLines'],
                operation: ['mixMatchLines:list'],
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
                resource: ['mixMatchLines'],
                operation: ['mixMatchLines:list'],
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
                name: 'Anchor',
                value: 'anchor',
                description: 'Include anchor in the response'
            },
            {
                name: 'Free Product',
                value: 'freeProduct',
                description: 'Include free product in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Line Type',
                value: 'lineType',
                description: 'Include line type in the response'
            },
            {
                name: 'Mix Match Code',
                value: 'mixMatchCode',
                description: 'Include mix match code in the response'
            },
            {
                name: 'Online',
                value: 'online',
                description: 'Include online in the response'
            },
            {
                name: 'Product Code',
                value: 'productCode',
                description: 'Include product code in the response'
            },
            {
                name: 'Product Web Description',
                value: 'productWebDescription',
                description: 'Include product web description in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['mixMatchLines'],
                operation: ['mixMatchLines:list'],
                filterMode: ['common']
            }
        }
    }
];
