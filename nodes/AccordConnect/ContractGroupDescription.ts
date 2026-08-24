import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0005 - 21/08/26 - do not edit by hand

export const contractGroupsOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['contractGroups'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'contractGroups:get',
                description: 'Get a contractGroup',
                action: 'Get a contract group'
            },
            {
                name: 'List',
                value: 'contractGroups:list',
                description: 'List many contractGroups',
                action: 'List many contract groups'
            },
        ],
        default: 'contractGroups:get',
    },
];


export const contractGroupsReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the contractGroup',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['contractGroups'],
                operation: ['contractGroups:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'contractGroup,lastUpdate,contractGroupDescription,splitPremType',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Contract Group',
                value: 'contractGroup',
                description: 'Include contract group in the response'
            },
            {
                name: 'Contract Group Description',
                value: 'contractGroupDescription',
                description: 'Include contract group description in the response'
            },
            {
                name: 'End Date',
                value: 'endDate',
                description: 'Include end date in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Price Policy',
                value: 'pricePolicy',
                description: 'Include price policy in the response'
            },
            {
                name: 'Split Prem Amount',
                value: 'splitPremAmount',
                description: 'Include split prem amount in the response'
            },
            {
                name: 'Split Prem Type',
                value: 'splitPremType',
                description: 'Include split prem type in the response'
            },
            {
                name: 'Start Date',
                value: 'startDate',
                description: 'Include start date in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['contractGroups'],
                operation: ['contractGroups:get']
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
                resource: ['contractGroups'],
                operation: ['contractGroups:get']
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
                resource: ['contractGroups'],
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
                resource: ['contractGroups'],
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
                resource: ['contractGroups'],
                operation: ['get']
            }
        }
    }
];

export const contractGroupsListFields: INodeProperties[] = [
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
                resource: ['contractGroups'],
                operation: ['contractGroups:list']
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
                resource: ['contractGroups'],
                operation: ['contractGroups:list'],
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
                resource: ['contractGroups'],
                operation: ['contractGroups:list'],
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
                resource: ['contractGroups'],
                operation: ['contractGroups:list'],
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
                        default: 'contractGroup',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Contract Group',
                                value: 'contractGroup'
                            },
                            {
                                name: 'Contract Group Description',
                                value: 'contractGroupDescription'
                            },
                            {
                                name: 'End Date',
                                value: 'endDate'
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
                                name: 'Price Policy',
                                value: 'pricePolicy'
                            },
                            {
                                name: 'Split Prem Amount',
                                value: 'splitPremAmount'
                            },
                            {
                                name: 'Split Prem Type',
                                value: 'splitPremType'
                            },
                            {
                                name: 'Start Date',
                                value: 'startDate'
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
                resource: ['contractGroups'],
                operation: ['contractGroups:list'],
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
        placeholder: '2020-08-24T11:00:09.018',
        displayOptions: {
            show: {
                resource: ['contractGroups'],
                operation: ['contractGroups:list'],
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
        placeholder: 'contractGroup,-lastUpdate',
        options: [
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
                name: 'Contract Group Description (Ascending)',
                value: 'contractGroupDescription',
                description: 'Sort by Contract Group Description in ascending order'
            },
            {
                name: 'Contract Group Description (Descending)',
                value: '-contractGroupDescription',
                description: 'Sort by Contract Group Description in descending order'
            },
            {
                name: 'End Date (Ascending)',
                value: 'endDate',
                description: 'Sort by End Date in ascending order'
            },
            {
                name: 'End Date (Descending)',
                value: '-endDate',
                description: 'Sort by End Date in descending order'
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
                name: 'Price Policy (Ascending)',
                value: 'pricePolicy',
                description: 'Sort by Price Policy in ascending order'
            },
            {
                name: 'Price Policy (Descending)',
                value: '-pricePolicy',
                description: 'Sort by Price Policy in descending order'
            },
            {
                name: 'Split Prem Amount (Ascending)',
                value: 'splitPremAmount',
                description: 'Sort by Split Prem Amount in ascending order'
            },
            {
                name: 'Split Prem Amount (Descending)',
                value: '-splitPremAmount',
                description: 'Sort by Split Prem Amount in descending order'
            },
            {
                name: 'Split Prem Type (Ascending)',
                value: 'splitPremType',
                description: 'Sort by Split Prem Type in ascending order'
            },
            {
                name: 'Split Prem Type (Descending)',
                value: '-splitPremType',
                description: 'Sort by Split Prem Type in descending order'
            },
            {
                name: 'Start Date (Ascending)',
                value: 'startDate',
                description: 'Sort by Start Date in ascending order'
            },
            {
                name: 'Start Date (Descending)',
                value: '-startDate',
                description: 'Sort by Start Date in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['contractGroups'],
                operation: ['contractGroups:list'],
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
                resource: ['contractGroups'],
                operation: ['contractGroups:list'],
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
                name: 'Contract Group',
                value: 'contractGroup',
                description: 'Include contract group in the response'
            },
            {
                name: 'Contract Group Description',
                value: 'contractGroupDescription',
                description: 'Include contract group description in the response'
            },
            {
                name: 'End Date',
                value: 'endDate',
                description: 'Include end date in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Price Policy',
                value: 'pricePolicy',
                description: 'Include price policy in the response'
            },
            {
                name: 'Split Prem Amount',
                value: 'splitPremAmount',
                description: 'Include split prem amount in the response'
            },
            {
                name: 'Split Prem Type',
                value: 'splitPremType',
                description: 'Include split prem type in the response'
            },
            {
                name: 'Start Date',
                value: 'startDate',
                description: 'Include start date in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['contractGroups'],
                operation: ['contractGroups:list'],
                filterMode: ['common']
            }
        }
    }
];
