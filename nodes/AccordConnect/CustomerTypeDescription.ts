import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0006 - 24/08/26 - do not edit by hand

export const customerTypesOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['customerTypes'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'customerTypes:get',
                description: 'Get a customerType',
                action: 'Get a customer type'
            },
            {
                name: 'List',
                value: 'customerTypes:list',
                description: 'List many customerTypes',
                action: 'List many customer types'
            },
        ],
        default: 'customerTypes:get',
    },
];


export const customerTypesReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the customerType',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['customerTypes'],
                operation: ['customerTypes:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'customerType,description,groupNumber,excludePromotions',
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
                name: 'Company Owned',
                value: 'companyOwned',
                description: 'Include company owned in the response'
            },
            {
                name: 'Customer Type',
                value: 'customerType',
                description: 'Include customer type in the response'
            },
            {
                name: 'Description',
                value: 'description',
                description: 'Include description in the response'
            },
            {
                name: 'Exclude Promotions',
                value: 'excludePromotions',
                description: 'Include exclude promotions in the response'
            },
            {
                name: 'Group Number',
                value: 'groupNumber',
                description: 'Include group number in the response'
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
                name: 'Minimum Order Qty',
                value: 'minimumOrderQty',
                description: 'Include minimum order qty in the response'
            },
            {
                name: 'Order Main Code',
                value: 'orderMainCode',
                description: 'Include order main code in the response'
            },
            {
                name: 'Override Minimum Qty',
                value: 'overrideMinimumQty',
                description: 'Include override minimum qty in the response'
            },
            {
                name: 'Presell Topup',
                value: 'presellTopup',
                description: 'Include presell topup in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customerTypes'],
                operation: ['customerTypes:get']
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
                resource: ['customerTypes'],
                operation: ['customerTypes:get']
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
                resource: ['customerTypes'],
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
                resource: ['customerTypes'],
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
                resource: ['customerTypes'],
                operation: ['get']
            }
        }
    }
];

export const customerTypesListFields: INodeProperties[] = [
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
                resource: ['customerTypes'],
                operation: ['customerTypes:list']
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
                resource: ['customerTypes'],
                operation: ['customerTypes:list'],
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
                resource: ['customerTypes'],
                operation: ['customerTypes:list'],
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
                resource: ['customerTypes'],
                operation: ['customerTypes:list'],
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
                                name: 'Company Owned',
                                value: 'companyOwned'
                            },
                            {
                                name: 'Customer Type',
                                value: 'customerType'
                            },
                            {
                                name: 'Description',
                                value: 'description'
                            },
                            {
                                name: 'Exclude Promotions',
                                value: 'excludePromotions'
                            },
                            {
                                name: 'Group Number',
                                value: 'groupNumber'
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
                                name: 'Minimum Order Qty',
                                value: 'minimumOrderQty'
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
                                name: 'Order Main Code',
                                value: 'orderMainCode'
                            },
                            {
                                name: 'Override Minimum Qty',
                                value: 'overrideMinimumQty'
                            },
                            {
                                name: 'Presell Topup',
                                value: 'presellTopup'
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
                resource: ['customerTypes'],
                operation: ['customerTypes:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Customer Type',
        name: 'customerType',
        type: 'string',
        default: '',
        description: 'Customer Type (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: '99',
        displayOptions: {
            show: {
                resource: ['customerTypes'],
                operation: ['customerTypes:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        default: '',
        description: 'Description (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'Third Party',
        displayOptions: {
            show: {
                resource: ['customerTypes'],
                operation: ['customerTypes:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Group Number',
        name: 'groupNumber',
        type: 'number',
        default: '',
        description: 'Group Number (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        typeOptions: {
            minValue: 0
        },
        placeholder: '1',
        displayOptions: {
            show: {
                resource: ['customerTypes'],
                operation: ['customerTypes:list'],
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
                resource: ['customerTypes'],
                operation: ['customerTypes:list'],
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
        placeholder: 'customerType,-description',
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
                name: 'Company Owned (Ascending)',
                value: 'companyOwned',
                description: 'Sort by Company Owned in ascending order'
            },
            {
                name: 'Company Owned (Descending)',
                value: '-companyOwned',
                description: 'Sort by Company Owned in descending order'
            },
            {
                name: 'Customer Type (Ascending)',
                value: 'customerType',
                description: 'Sort by Customer Type in ascending order'
            },
            {
                name: 'Customer Type (Descending)',
                value: '-customerType',
                description: 'Sort by Customer Type in descending order'
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
                name: 'Exclude Promotions (Ascending)',
                value: 'excludePromotions',
                description: 'Sort by Exclude Promotions in ascending order'
            },
            {
                name: 'Exclude Promotions (Descending)',
                value: '-excludePromotions',
                description: 'Sort by Exclude Promotions in descending order'
            },
            {
                name: 'Group Number (Ascending)',
                value: 'groupNumber',
                description: 'Sort by Group Number in ascending order'
            },
            {
                name: 'Group Number (Descending)',
                value: '-groupNumber',
                description: 'Sort by Group Number in descending order'
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
                name: 'Minimum Order Qty (Ascending)',
                value: 'minimumOrderQty',
                description: 'Sort by Minimum Order Qty in ascending order'
            },
            {
                name: 'Minimum Order Qty (Descending)',
                value: '-minimumOrderQty',
                description: 'Sort by Minimum Order Qty in descending order'
            },
            {
                name: 'Order Main Code (Ascending)',
                value: 'orderMainCode',
                description: 'Sort by Order Main Code in ascending order'
            },
            {
                name: 'Order Main Code (Descending)',
                value: '-orderMainCode',
                description: 'Sort by Order Main Code in descending order'
            },
            {
                name: 'Override Minimum Qty (Ascending)',
                value: 'overrideMinimumQty',
                description: 'Sort by Override Minimum Qty in ascending order'
            },
            {
                name: 'Override Minimum Qty (Descending)',
                value: '-overrideMinimumQty',
                description: 'Sort by Override Minimum Qty in descending order'
            },
            {
                name: 'Presell Topup (Ascending)',
                value: 'presellTopup',
                description: 'Sort by Presell Topup in ascending order'
            },
            {
                name: 'Presell Topup (Descending)',
                value: '-presellTopup',
                description: 'Sort by Presell Topup in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customerTypes'],
                operation: ['customerTypes:list'],
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
                resource: ['customerTypes'],
                operation: ['customerTypes:list'],
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
                name: 'Company Owned',
                value: 'companyOwned',
                description: 'Include company owned in the response'
            },
            {
                name: 'Customer Type',
                value: 'customerType',
                description: 'Include customer type in the response'
            },
            {
                name: 'Description',
                value: 'description',
                description: 'Include description in the response'
            },
            {
                name: 'Exclude Promotions',
                value: 'excludePromotions',
                description: 'Include exclude promotions in the response'
            },
            {
                name: 'Group Number',
                value: 'groupNumber',
                description: 'Include group number in the response'
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
                name: 'Minimum Order Qty',
                value: 'minimumOrderQty',
                description: 'Include minimum order qty in the response'
            },
            {
                name: 'Order Main Code',
                value: 'orderMainCode',
                description: 'Include order main code in the response'
            },
            {
                name: 'Override Minimum Qty',
                value: 'overrideMinimumQty',
                description: 'Include override minimum qty in the response'
            },
            {
                name: 'Presell Topup',
                value: 'presellTopup',
                description: 'Include presell topup in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customerTypes'],
                operation: ['customerTypes:list'],
                filterMode: ['common']
            }
        }
    }
];
