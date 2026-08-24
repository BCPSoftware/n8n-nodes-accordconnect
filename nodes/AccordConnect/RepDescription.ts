import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0006 - 24/08/26 - do not edit by hand

export const repsOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['reps'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'reps:get',
                description: 'Get a rep',
                action: 'Get a rep'
            },
            {
                name: 'List',
                value: 'reps:list',
                description: 'List many reps',
                action: 'List many reps'
            },
        ],
        default: 'reps:get',
    },
];


export const repsReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the rep',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['reps'],
                operation: ['reps:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'repCode,repName,lastUpdate',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Rep Code',
                value: 'repCode',
                description: 'Include rep code in the response'
            },
            {
                name: 'Rep Name',
                value: 'repName',
                description: 'Include rep name in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['reps'],
                operation: ['reps:get']
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
                resource: ['reps'],
                operation: ['reps:get']
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
                resource: ['reps'],
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
                resource: ['reps'],
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
                resource: ['reps'],
                operation: ['get']
            }
        }
    }
];

export const repsListFields: INodeProperties[] = [
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
                resource: ['reps'],
                operation: ['reps:list']
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
                resource: ['reps'],
                operation: ['reps:list'],
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
                resource: ['reps'],
                operation: ['reps:list'],
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
                resource: ['reps'],
                operation: ['reps:list'],
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
                                name: 'Rep Name',
                                value: 'repName'
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
                resource: ['reps'],
                operation: ['reps:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Rep Code',
        name: 'repCode',
        type: 'string',
        default: '',
        description: 'Rep Code (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: '10',
        displayOptions: {
            show: {
                resource: ['reps'],
                operation: ['reps:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Rep Name',
        name: 'repName',
        type: 'string',
        default: '',
        description: 'Rep Name (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'Mr Mark Rashford',
        displayOptions: {
            show: {
                resource: ['reps'],
                operation: ['reps:list'],
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
                resource: ['reps'],
                operation: ['reps:list'],
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
        placeholder: 'repCode,-repName',
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
                name: 'Rep Name (Ascending)',
                value: 'repName',
                description: 'Sort by Rep Name in ascending order'
            },
            {
                name: 'Rep Name (Descending)',
                value: '-repName',
                description: 'Sort by Rep Name in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['reps'],
                operation: ['reps:list'],
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
                resource: ['reps'],
                operation: ['reps:list'],
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
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Rep Code',
                value: 'repCode',
                description: 'Include rep code in the response'
            },
            {
                name: 'Rep Name',
                value: 'repName',
                description: 'Include rep name in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['reps'],
                operation: ['reps:list'],
                filterMode: ['common']
            }
        }
    }
];
