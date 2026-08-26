import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0008 - 26/08/26 - do not edit by hand

export const listPricesOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['listPrices'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'listPrices:get',
                description: 'Get a listPrice',
                action: 'Get a list price'
            },
            {
                name: 'List',
                value: 'listPrices:list',
                description: 'List many listPrices',
                action: 'List many list prices'
            },
        ],
        default: 'listPrices:get',
    },
];


export const listPricesReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the listPrice',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['listPrices'],
                operation: ['listPrices:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'depot,productCode,priceDate,lastUpdate',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Bonus Description',
                value: 'bonusDescription',
                description: 'Include bonus description in the response'
            },
            {
                name: 'Bonus Exclusion',
                value: 'bonusExclusion',
                description: 'Include bonus exclusion in the response'
            },
            {
                name: 'Bonus Indicator',
                value: 'bonusIndicator',
                description: 'Include bonus indicator in the response'
            },
            {
                name: 'Bonus Line',
                value: 'bonusLine',
                description: 'Include bonus line in the response'
            },
            {
                name: 'Bonus Source',
                value: 'bonusSource',
                description: 'Include bonus source in the response'
            },
            {
                name: 'Bonus Symbol',
                value: 'bonusSymbol',
                description: 'Include bonus symbol in the response'
            },
            {
                name: 'Bonus Type',
                value: 'bonusType',
                description: 'Include bonus type in the response'
            },
            {
                name: 'Bonus Value',
                value: 'bonusValue',
                description: 'Include bonus value in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Gross Cost',
                value: 'grossCost',
                description: 'Include gross cost in the response'
            },
            {
                name: 'Invoice Cost',
                value: 'invoiceCost',
                description: 'Include invoice cost in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Margin Cost',
                value: 'marginCost',
                description: 'Include margin cost in the response'
            },
            {
                name: 'Nett Cost',
                value: 'nettCost',
                description: 'Include nett cost in the response'
            },
            {
                name: 'Online',
                value: 'online',
                description: 'Include online in the response'
            },
            {
                name: 'Payment Description',
                value: 'paymentDescription',
                description: 'Include payment description in the response'
            },
            {
                name: 'Payment Type',
                value: 'paymentType',
                description: 'Include payment type in the response'
            },
            {
                name: 'Price Date',
                value: 'priceDate',
                description: 'Include price date in the response'
            },
            {
                name: 'Product Code',
                value: 'productCode',
                description: 'Include product code in the response'
            },
            {
                name: 'Product Status',
                value: 'productStatus',
                description: 'Include product status in the response'
            },
            {
                name: 'Rrp1',
                value: 'rrp1',
                description: 'Include rrp1 in the response'
            },
            {
                name: 'Rrp2',
                value: 'rrp2',
                description: 'Include rrp2 in the response'
            },
            {
                name: 'Rrp3',
                value: 'rrp3',
                description: 'Include rrp3 in the response'
            },
            {
                name: 'Rrp4',
                value: 'rrp4',
                description: 'Include rrp4 in the response'
            },
            {
                name: 'Rrp5',
                value: 'rrp5',
                description: 'Include rrp5 in the response'
            },
            {
                name: 'Wsp1',
                value: 'wsp1',
                description: 'Include wsp1 in the response'
            },
            {
                name: 'Wsp2',
                value: 'wsp2',
                description: 'Include wsp2 in the response'
            },
            {
                name: 'Wsp3',
                value: 'wsp3',
                description: 'Include wsp3 in the response'
            },
            {
                name: 'Wsp4',
                value: 'wsp4',
                description: 'Include wsp4 in the response'
            },
            {
                name: 'Wsp5',
                value: 'wsp5',
                description: 'Include wsp5 in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['listPrices'],
                operation: ['listPrices:get']
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
                resource: ['listPrices'],
                operation: ['listPrices:get']
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
                resource: ['listPrices'],
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
                resource: ['listPrices'],
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
                resource: ['listPrices'],
                operation: ['get']
            }
        }
    }
];

export const listPricesListFields: INodeProperties[] = [
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
                resource: ['listPrices'],
                operation: ['listPrices:list']
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
                resource: ['listPrices'],
                operation: ['listPrices:list'],
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
                resource: ['listPrices'],
                operation: ['listPrices:list'],
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
                resource: ['listPrices'],
                operation: ['listPrices:list'],
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
                        default: 'depot',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Depot',
                                value: 'depot'
                            },
                            {
                                name: 'Gross Cost',
                                value: 'grossCost'
                            },
                            {
                                name: 'Hide Nested Keys',
                                value: 'hideNestedKeys'
                            },
                            {
                                name: 'Invoice Cost',
                                value: 'invoiceCost'
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
                                name: 'Margin Cost',
                                value: 'marginCost'
                            },
                            {
                                name: 'Nested',
                                value: 'nested'
                            },
                            {
                                name: 'Nett Cost',
                                value: 'nettCost'
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
                                name: 'Price Date',
                                value: 'priceDate'
                            },
                            {
                                name: 'Price On',
                                value: 'priceOn'
                            },
                            {
                                name: 'Product Code',
                                value: 'productCode'
                            },
                            {
                                name: 'Product Status',
                                value: 'productStatus'
                            },
                            {
                                name: 'Rrp1',
                                value: 'rrp1'
                            },
                            {
                                name: 'Rrp2',
                                value: 'rrp2'
                            },
                            {
                                name: 'Rrp3',
                                value: 'rrp3'
                            },
                            {
                                name: 'Rrp4',
                                value: 'rrp4'
                            },
                            {
                                name: 'Rrp5',
                                value: 'rrp5'
                            },
                            {
                                name: 'Timeout',
                                value: 'timeout'
                            },
                            {
                                name: 'Wsp1',
                                value: 'wsp1'
                            },
                            {
                                name: 'Wsp2',
                                value: 'wsp2'
                            },
                            {
                                name: 'Wsp3',
                                value: 'wsp3'
                            },
                            {
                                name: 'Wsp4',
                                value: 'wsp4'
                            },
                            {
                                name: 'Wsp5',
                                value: 'wsp5'
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
                resource: ['listPrices'],
                operation: ['listPrices:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Product Code',
        name: 'productCode',
        type: 'string',
        default: '',
        description: 'Product code (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: '000101',
        displayOptions: {
            show: {
                resource: ['listPrices'],
                operation: ['listPrices:list'],
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
                resource: ['listPrices'],
                operation: ['listPrices:list'],
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
        placeholder: 'depot,-productCode',
        options: [
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
                name: 'Gross Cost (Ascending)',
                value: 'grossCost',
                description: 'Sort by Gross Cost in ascending order'
            },
            {
                name: 'Gross Cost (Descending)',
                value: '-grossCost',
                description: 'Sort by Gross Cost in descending order'
            },
            {
                name: 'Invoice Cost (Ascending)',
                value: 'invoiceCost',
                description: 'Sort by Invoice Cost in ascending order'
            },
            {
                name: 'Invoice Cost (Descending)',
                value: '-invoiceCost',
                description: 'Sort by Invoice Cost in descending order'
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
                name: 'Margin Cost (Ascending)',
                value: 'marginCost',
                description: 'Sort by Margin Cost in ascending order'
            },
            {
                name: 'Margin Cost (Descending)',
                value: '-marginCost',
                description: 'Sort by Margin Cost in descending order'
            },
            {
                name: 'Nett Cost (Ascending)',
                value: 'nettCost',
                description: 'Sort by Nett Cost in ascending order'
            },
            {
                name: 'Nett Cost (Descending)',
                value: '-nettCost',
                description: 'Sort by Nett Cost in descending order'
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
                name: 'Price Date (Ascending)',
                value: 'priceDate',
                description: 'Sort by Price Date in ascending order'
            },
            {
                name: 'Price Date (Descending)',
                value: '-priceDate',
                description: 'Sort by Price Date in descending order'
            },
            {
                name: 'Price On (Ascending)',
                value: 'priceOn',
                description: 'Sort by Price On in ascending order'
            },
            {
                name: 'Price On (Descending)',
                value: '-priceOn',
                description: 'Sort by Price On in descending order'
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
                name: 'Product Status (Ascending)',
                value: 'productStatus',
                description: 'Sort by Product Status in ascending order'
            },
            {
                name: 'Product Status (Descending)',
                value: '-productStatus',
                description: 'Sort by Product Status in descending order'
            },
            {
                name: 'Rrp1 (Ascending)',
                value: 'rrp1',
                description: 'Sort by Rrp1 in ascending order'
            },
            {
                name: 'Rrp1 (Descending)',
                value: '-rrp1',
                description: 'Sort by Rrp1 in descending order'
            },
            {
                name: 'Rrp2 (Ascending)',
                value: 'rrp2',
                description: 'Sort by Rrp2 in ascending order'
            },
            {
                name: 'Rrp2 (Descending)',
                value: '-rrp2',
                description: 'Sort by Rrp2 in descending order'
            },
            {
                name: 'Rrp3 (Ascending)',
                value: 'rrp3',
                description: 'Sort by Rrp3 in ascending order'
            },
            {
                name: 'Rrp3 (Descending)',
                value: '-rrp3',
                description: 'Sort by Rrp3 in descending order'
            },
            {
                name: 'Rrp4 (Ascending)',
                value: 'rrp4',
                description: 'Sort by Rrp4 in ascending order'
            },
            {
                name: 'Rrp4 (Descending)',
                value: '-rrp4',
                description: 'Sort by Rrp4 in descending order'
            },
            {
                name: 'Rrp5 (Ascending)',
                value: 'rrp5',
                description: 'Sort by Rrp5 in ascending order'
            },
            {
                name: 'Rrp5 (Descending)',
                value: '-rrp5',
                description: 'Sort by Rrp5 in descending order'
            },
            {
                name: 'Wsp1 (Ascending)',
                value: 'wsp1',
                description: 'Sort by Wsp1 in ascending order'
            },
            {
                name: 'Wsp1 (Descending)',
                value: '-wsp1',
                description: 'Sort by Wsp1 in descending order'
            },
            {
                name: 'Wsp2 (Ascending)',
                value: 'wsp2',
                description: 'Sort by Wsp2 in ascending order'
            },
            {
                name: 'Wsp2 (Descending)',
                value: '-wsp2',
                description: 'Sort by Wsp2 in descending order'
            },
            {
                name: 'Wsp3 (Ascending)',
                value: 'wsp3',
                description: 'Sort by Wsp3 in ascending order'
            },
            {
                name: 'Wsp3 (Descending)',
                value: '-wsp3',
                description: 'Sort by Wsp3 in descending order'
            },
            {
                name: 'Wsp4 (Ascending)',
                value: 'wsp4',
                description: 'Sort by Wsp4 in ascending order'
            },
            {
                name: 'Wsp4 (Descending)',
                value: '-wsp4',
                description: 'Sort by Wsp4 in descending order'
            },
            {
                name: 'Wsp5 (Ascending)',
                value: 'wsp5',
                description: 'Sort by Wsp5 in ascending order'
            },
            {
                name: 'Wsp5 (Descending)',
                value: '-wsp5',
                description: 'Sort by Wsp5 in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['listPrices'],
                operation: ['listPrices:list'],
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
                resource: ['listPrices'],
                operation: ['listPrices:list'],
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
                name: 'Bonus Description',
                value: 'bonusDescription',
                description: 'Include bonus description in the response'
            },
            {
                name: 'Bonus Exclusion',
                value: 'bonusExclusion',
                description: 'Include bonus exclusion in the response'
            },
            {
                name: 'Bonus Indicator',
                value: 'bonusIndicator',
                description: 'Include bonus indicator in the response'
            },
            {
                name: 'Bonus Line',
                value: 'bonusLine',
                description: 'Include bonus line in the response'
            },
            {
                name: 'Bonus Source',
                value: 'bonusSource',
                description: 'Include bonus source in the response'
            },
            {
                name: 'Bonus Symbol',
                value: 'bonusSymbol',
                description: 'Include bonus symbol in the response'
            },
            {
                name: 'Bonus Type',
                value: 'bonusType',
                description: 'Include bonus type in the response'
            },
            {
                name: 'Bonus Value',
                value: 'bonusValue',
                description: 'Include bonus value in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Gross Cost',
                value: 'grossCost',
                description: 'Include gross cost in the response'
            },
            {
                name: 'Invoice Cost',
                value: 'invoiceCost',
                description: 'Include invoice cost in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Margin Cost',
                value: 'marginCost',
                description: 'Include margin cost in the response'
            },
            {
                name: 'Nett Cost',
                value: 'nettCost',
                description: 'Include nett cost in the response'
            },
            {
                name: 'Online',
                value: 'online',
                description: 'Include online in the response'
            },
            {
                name: 'Payment Description',
                value: 'paymentDescription',
                description: 'Include payment description in the response'
            },
            {
                name: 'Payment Type',
                value: 'paymentType',
                description: 'Include payment type in the response'
            },
            {
                name: 'Price Date',
                value: 'priceDate',
                description: 'Include price date in the response'
            },
            {
                name: 'Product Code',
                value: 'productCode',
                description: 'Include product code in the response'
            },
            {
                name: 'Product Status',
                value: 'productStatus',
                description: 'Include product status in the response'
            },
            {
                name: 'Rrp1',
                value: 'rrp1',
                description: 'Include rrp1 in the response'
            },
            {
                name: 'Rrp2',
                value: 'rrp2',
                description: 'Include rrp2 in the response'
            },
            {
                name: 'Rrp3',
                value: 'rrp3',
                description: 'Include rrp3 in the response'
            },
            {
                name: 'Rrp4',
                value: 'rrp4',
                description: 'Include rrp4 in the response'
            },
            {
                name: 'Rrp5',
                value: 'rrp5',
                description: 'Include rrp5 in the response'
            },
            {
                name: 'Wsp1',
                value: 'wsp1',
                description: 'Include wsp1 in the response'
            },
            {
                name: 'Wsp2',
                value: 'wsp2',
                description: 'Include wsp2 in the response'
            },
            {
                name: 'Wsp3',
                value: 'wsp3',
                description: 'Include wsp3 in the response'
            },
            {
                name: 'Wsp4',
                value: 'wsp4',
                description: 'Include wsp4 in the response'
            },
            {
                name: 'Wsp5',
                value: 'wsp5',
                description: 'Include wsp5 in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['listPrices'],
                operation: ['listPrices:list'],
                filterMode: ['common']
            }
        }
    }
];
