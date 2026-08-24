import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0005 - 21/08/26 - do not edit by hand

export const dutyCodesOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['dutyCodes'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'dutyCodes:get',
                description: 'Get a dutyCode',
                action: 'Get a duty code'
            },
            {
                name: 'List',
                value: 'dutyCodes:list',
                description: 'List many dutyCodes',
                action: 'List many duty codes'
            },
        ],
        default: 'dutyCodes:get',
    },
];


export const dutyCodesReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the dutyCode',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['dutyCodes'],
                operation: ['dutyCodes:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'depot,dutyCode,activationDate,activationTime',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Activation Date',
                value: 'activationDate',
                description: 'Include activation date in the response'
            },
            {
                name: 'Activation Time',
                value: 'activationTime',
                description: 'Include activation time in the response'
            },
            {
                name: 'Country Code',
                value: 'countryCode',
                description: 'Include country code in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Duty Code',
                value: 'dutyCode',
                description: 'Include duty code in the response'
            },
            {
                name: 'Duty Value',
                value: 'dutyValue',
                description: 'Include duty value in the response'
            },
            {
                name: 'Fixed Retail Percentage',
                value: 'fixedRetailPercentage',
                description: 'Include fixed retail percentage in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['dutyCodes'],
                operation: ['dutyCodes:get']
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
                resource: ['dutyCodes'],
                operation: ['dutyCodes:get']
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
                resource: ['dutyCodes'],
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
                resource: ['dutyCodes'],
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
                resource: ['dutyCodes'],
                operation: ['get']
            }
        }
    }
];

export const dutyCodesListFields: INodeProperties[] = [
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
                resource: ['dutyCodes'],
                operation: ['dutyCodes:list']
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
                resource: ['dutyCodes'],
                operation: ['dutyCodes:list'],
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
                resource: ['dutyCodes'],
                operation: ['dutyCodes:list'],
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
                resource: ['dutyCodes'],
                operation: ['dutyCodes:list'],
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
                        default: 'activationDate',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Activation Date',
                                value: 'activationDate'
                            },
                            {
                                name: 'Activation Time',
                                value: 'activationTime'
                            },
                            {
                                name: 'Country Code',
                                value: 'countryCode'
                            },
                            {
                                name: 'Depot',
                                value: 'depot'
                            },
                            {
                                name: 'Duty Code',
                                value: 'dutyCode'
                            },
                            {
                                name: 'Duty Value',
                                value: 'dutyValue'
                            },
                            {
                                name: 'Fixed Retail Percentage',
                                value: 'fixedRetailPercentage'
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
                resource: ['dutyCodes'],
                operation: ['dutyCodes:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Duty Code',
        name: 'dutyCode',
        type: 'string',
        default: '',
        description: 'Duty Code (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'EEFSA',
        displayOptions: {
            show: {
                resource: ['dutyCodes'],
                operation: ['dutyCodes:list'],
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
                resource: ['dutyCodes'],
                operation: ['dutyCodes:list'],
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
        placeholder: 'depot,-dutyCode',
        options: [
            {
                name: 'Activation Date (Ascending)',
                value: 'activationDate',
                description: 'Sort by Activation Date in ascending order'
            },
            {
                name: 'Activation Date (Descending)',
                value: '-activationDate',
                description: 'Sort by Activation Date in descending order'
            },
            {
                name: 'Activation Time (Ascending)',
                value: 'activationTime',
                description: 'Sort by Activation Time in ascending order'
            },
            {
                name: 'Activation Time (Descending)',
                value: '-activationTime',
                description: 'Sort by Activation Time in descending order'
            },
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
                name: 'Duty Code (Ascending)',
                value: 'dutyCode',
                description: 'Sort by Duty Code in ascending order'
            },
            {
                name: 'Duty Code (Descending)',
                value: '-dutyCode',
                description: 'Sort by Duty Code in descending order'
            },
            {
                name: 'Duty Value (Ascending)',
                value: 'dutyValue',
                description: 'Sort by Duty Value in ascending order'
            },
            {
                name: 'Duty Value (Descending)',
                value: '-dutyValue',
                description: 'Sort by Duty Value in descending order'
            },
            {
                name: 'Fixed Retail Percentage (Ascending)',
                value: 'fixedRetailPercentage',
                description: 'Sort by Fixed Retail Percentage in ascending order'
            },
            {
                name: 'Fixed Retail Percentage (Descending)',
                value: '-fixedRetailPercentage',
                description: 'Sort by Fixed Retail Percentage in descending order'
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
                resource: ['dutyCodes'],
                operation: ['dutyCodes:list'],
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
                resource: ['dutyCodes'],
                operation: ['dutyCodes:list'],
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
                name: 'Activation Date',
                value: 'activationDate',
                description: 'Include activation date in the response'
            },
            {
                name: 'Activation Time',
                value: 'activationTime',
                description: 'Include activation time in the response'
            },
            {
                name: 'Country Code',
                value: 'countryCode',
                description: 'Include country code in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Duty Code',
                value: 'dutyCode',
                description: 'Include duty code in the response'
            },
            {
                name: 'Duty Value',
                value: 'dutyValue',
                description: 'Include duty value in the response'
            },
            {
                name: 'Fixed Retail Percentage',
                value: 'fixedRetailPercentage',
                description: 'Include fixed retail percentage in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['dutyCodes'],
                operation: ['dutyCodes:list'],
                filterMode: ['common']
            }
        }
    }
];
