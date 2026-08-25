import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0007 - 25/08/26 - do not edit by hand

export const promotionLinesOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['promotionLines'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'promotionLines:get',
                description: 'Get a promotionLine',
                action: 'Get a promotion line'
            },
            {
                name: 'List',
                value: 'promotionLines:list',
                description: 'List many promotionLines',
                action: 'List many promotion lines'
            },
        ],
        default: 'promotionLines:get',
    },
];


export const promotionLinesReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the promotionLine',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['promotionLines'],
                operation: ['promotionLines:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'depot,promotionCode,productCode,lastUpdate',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Active',
                value: 'active',
                description: 'Include active in the response'
            },
            {
                name: 'All Customers',
                value: 'allCustomers',
                description: 'Include all customers in the response'
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
                name: 'Buy End Date',
                value: 'buyEndDate',
                description: 'Include buy end date in the response'
            },
            {
                name: 'Buy Start Date',
                value: 'buyStartDate',
                description: 'Include buy start date in the response'
            },
            {
                name: 'Capped Stock Cases',
                value: 'cappedStockCases',
                description: 'Include capped stock cases in the response'
            },
            {
                name: 'Claim Back',
                value: 'claimBack',
                description: 'Include claim back in the response'
            },
            {
                name: 'Comment',
                value: 'comment',
                description: 'Include comment in the response'
            },
            {
                name: 'Cost Retro Bonus',
                value: 'costRetroBonus',
                description: 'Include cost retro bonus in the response'
            },
            {
                name: 'Customer Code',
                value: 'customerCode',
                description: 'Include customer code in the response'
            },
            {
                name: 'Customer Type',
                value: 'customerType',
                description: 'Include customer type in the response'
            },
            {
                name: 'Default Customer Cap Sgl',
                value: 'defaultCustomerCapSgl',
                description: 'Include default customer cap sgl in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'End Date',
                value: 'endDate',
                description: 'Include end date in the response'
            },
            {
                name: 'End In Store Date',
                value: 'endInStoreDate',
                description: 'Include end in store date in the response'
            },
            {
                name: 'Gross Cost',
                value: 'grossCost',
                description: 'Include gross cost in the response'
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
                name: 'Nett Invoice',
                value: 'nettInvoice',
                description: 'Include nett invoice in the response'
            },
            {
                name: 'Online',
                value: 'online',
                description: 'Include online in the response'
            },
            {
                name: 'Override Customer Cap Sgl',
                value: 'overrideCustomerCapSgl',
                description: 'Include override customer cap sgl in the response'
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
                name: 'Plof Head',
                value: 'plofHead',
                description: 'Include plof head in the response'
            },
            {
                name: 'Price Type',
                value: 'priceType',
                description: 'Include price type in the response'
            },
            {
                name: 'Product Code',
                value: 'productCode',
                description: 'Include product code in the response'
            },
            {
                name: 'Promotion Code',
                value: 'promotionCode',
                description: 'Include promotion code in the response'
            },
            {
                name: 'Promotion Type',
                value: 'promotionType',
                description: 'Include promotion type in the response'
            },
            {
                name: 'Rebate',
                value: 'rebate',
                description: 'Include rebate in the response'
            },
            {
                name: 'Rebate Range',
                value: 'rebateRange',
                description: 'Include rebate range in the response'
            },
            {
                name: 'Rsp',
                value: 'rsp',
                description: 'Include rsp in the response'
            },
            {
                name: 'Rsp Bonus',
                value: 'rspBonus',
                description: 'Include rsp bonus in the response'
            },
            {
                name: 'Shelf Edge',
                value: 'shelfEdge',
                description: 'Include shelf edge in the response'
            },
            {
                name: 'Start Date',
                value: 'startDate',
                description: 'Include start date in the response'
            },
            {
                name: 'Start In Store Date',
                value: 'startInStoreDate',
                description: 'Include start in store date in the response'
            },
            {
                name: 'Surcharge',
                value: 'surcharge',
                description: 'Include surcharge in the response'
            },
            {
                name: 'Wsp',
                value: 'wsp',
                description: 'Include wsp in the response'
            },
            {
                name: 'Wsp Bonus',
                value: 'wspBonus',
                description: 'Include wsp bonus in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['promotionLines'],
                operation: ['promotionLines:get']
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
                resource: ['promotionLines'],
                operation: ['promotionLines:get']
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
                resource: ['promotionLines'],
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
                resource: ['promotionLines'],
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
                resource: ['promotionLines'],
                operation: ['get']
            }
        }
    }
];

export const promotionLinesListFields: INodeProperties[] = [
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
                resource: ['promotionLines'],
                operation: ['promotionLines:list']
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
                resource: ['promotionLines'],
                operation: ['promotionLines:list'],
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
                resource: ['promotionLines'],
                operation: ['promotionLines:list'],
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
                resource: ['promotionLines'],
                operation: ['promotionLines:list'],
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
                        default: 'active',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Active',
                                value: 'active'
                            },
                            {
                                name: 'All Customers',
                                value: 'allCustomers'
                            },
                            {
                                name: 'Buy End Date',
                                value: 'buyEndDate'
                            },
                            {
                                name: 'Buy Start Date',
                                value: 'buyStartDate'
                            },
                            {
                                name: 'Capped Stock Cases',
                                value: 'cappedStockCases'
                            },
                            {
                                name: 'Claim Back',
                                value: 'claimBack'
                            },
                            {
                                name: 'Comment',
                                value: 'comment'
                            },
                            {
                                name: 'Cost Retro Bonus',
                                value: 'costRetroBonus'
                            },
                            {
                                name: 'Customer Type',
                                value: 'customerType'
                            },
                            {
                                name: 'Default Customer Cap Sgl',
                                value: 'defaultCustomerCapSgl'
                            },
                            {
                                name: 'Depot',
                                value: 'depot'
                            },
                            {
                                name: 'End Date',
                                value: 'endDate'
                            },
                            {
                                name: 'End In Store Date',
                                value: 'endInStoreDate'
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
                                name: 'Nett Invoice',
                                value: 'nettInvoice'
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
                                name: 'Override Customer Cap Sgl',
                                value: 'overrideCustomerCapSgl'
                            },
                            {
                                name: 'Plof Head',
                                value: 'plofHead'
                            },
                            {
                                name: 'Price Type',
                                value: 'priceType'
                            },
                            {
                                name: 'Product Code',
                                value: 'productCode'
                            },
                            {
                                name: 'Promotion Code',
                                value: 'promotionCode'
                            },
                            {
                                name: 'Promotion Type',
                                value: 'promotionType'
                            },
                            {
                                name: 'Rebate',
                                value: 'rebate'
                            },
                            {
                                name: 'Rebate Range',
                                value: 'rebateRange'
                            },
                            {
                                name: 'Rsp',
                                value: 'rsp'
                            },
                            {
                                name: 'Rsp Bonus',
                                value: 'rspBonus'
                            },
                            {
                                name: 'Shelf Edge',
                                value: 'shelfEdge'
                            },
                            {
                                name: 'Start Date',
                                value: 'startDate'
                            },
                            {
                                name: 'Start In Store Date',
                                value: 'startInStoreDate'
                            },
                            {
                                name: 'Surcharge',
                                value: 'surcharge'
                            },
                            {
                                name: 'Timeout',
                                value: 'timeout'
                            },
                            {
                                name: 'Wsp',
                                value: 'wsp'
                            },
                            {
                                name: 'Wsp Bonus',
                                value: 'wspBonus'
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
                resource: ['promotionLines'],
                operation: ['promotionLines:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Promotion Code',
        name: 'promotionCode',
        type: 'string',
        default: '',
        description: 'Promotion Code (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: '0030',
        displayOptions: {
            show: {
                resource: ['promotionLines'],
                operation: ['promotionLines:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Product Code',
        name: 'productCode',
        type: 'string',
        default: '',
        description: 'Product Code (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: '100001',
        displayOptions: {
            show: {
                resource: ['promotionLines'],
                operation: ['promotionLines:list'],
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
                resource: ['promotionLines'],
                operation: ['promotionLines:list'],
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
        placeholder: 'depot,-promotionCode',
        options: [
            {
                name: 'Active (Ascending)',
                value: 'active',
                description: 'Sort by Active in ascending order'
            },
            {
                name: 'Active (Descending)',
                value: '-active',
                description: 'Sort by Active in descending order'
            },
            {
                name: 'All Customers (Ascending)',
                value: 'allCustomers',
                description: 'Sort by All Customers in ascending order'
            },
            {
                name: 'All Customers (Descending)',
                value: '-allCustomers',
                description: 'Sort by All Customers in descending order'
            },
            {
                name: 'Buy End Date (Ascending)',
                value: 'buyEndDate',
                description: 'Sort by Buy End Date in ascending order'
            },
            {
                name: 'Buy End Date (Descending)',
                value: '-buyEndDate',
                description: 'Sort by Buy End Date in descending order'
            },
            {
                name: 'Buy Start Date (Ascending)',
                value: 'buyStartDate',
                description: 'Sort by Buy Start Date in ascending order'
            },
            {
                name: 'Buy Start Date (Descending)',
                value: '-buyStartDate',
                description: 'Sort by Buy Start Date in descending order'
            },
            {
                name: 'Capped Stock Cases (Ascending)',
                value: 'cappedStockCases',
                description: 'Sort by Capped Stock Cases in ascending order'
            },
            {
                name: 'Capped Stock Cases (Descending)',
                value: '-cappedStockCases',
                description: 'Sort by Capped Stock Cases in descending order'
            },
            {
                name: 'Claim Back (Ascending)',
                value: 'claimBack',
                description: 'Sort by Claim Back in ascending order'
            },
            {
                name: 'Claim Back (Descending)',
                value: '-claimBack',
                description: 'Sort by Claim Back in descending order'
            },
            {
                name: 'Comment (Ascending)',
                value: 'comment',
                description: 'Sort by Comment in ascending order'
            },
            {
                name: 'Comment (Descending)',
                value: '-comment',
                description: 'Sort by Comment in descending order'
            },
            {
                name: 'Cost Retro Bonus (Ascending)',
                value: 'costRetroBonus',
                description: 'Sort by Cost Retro Bonus in ascending order'
            },
            {
                name: 'Cost Retro Bonus (Descending)',
                value: '-costRetroBonus',
                description: 'Sort by Cost Retro Bonus in descending order'
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
                name: 'Default Customer Cap Sgl (Ascending)',
                value: 'defaultCustomerCapSgl',
                description: 'Sort by Default Customer Cap Sgl in ascending order'
            },
            {
                name: 'Default Customer Cap Sgl (Descending)',
                value: '-defaultCustomerCapSgl',
                description: 'Sort by Default Customer Cap Sgl in descending order'
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
                name: 'End In Store Date (Ascending)',
                value: 'endInStoreDate',
                description: 'Sort by End In Store Date in ascending order'
            },
            {
                name: 'End In Store Date (Descending)',
                value: '-endInStoreDate',
                description: 'Sort by End In Store Date in descending order'
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
                name: 'Nett Invoice (Ascending)',
                value: 'nettInvoice',
                description: 'Sort by Nett Invoice in ascending order'
            },
            {
                name: 'Nett Invoice (Descending)',
                value: '-nettInvoice',
                description: 'Sort by Nett Invoice in descending order'
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
                name: 'Override Customer Cap Sgl (Ascending)',
                value: 'overrideCustomerCapSgl',
                description: 'Sort by Override Customer Cap Sgl in ascending order'
            },
            {
                name: 'Override Customer Cap Sgl (Descending)',
                value: '-overrideCustomerCapSgl',
                description: 'Sort by Override Customer Cap Sgl in descending order'
            },
            {
                name: 'Plof Head (Ascending)',
                value: 'plofHead',
                description: 'Sort by Plof Head in ascending order'
            },
            {
                name: 'Plof Head (Descending)',
                value: '-plofHead',
                description: 'Sort by Plof Head in descending order'
            },
            {
                name: 'Price Type (Ascending)',
                value: 'priceType',
                description: 'Sort by Price Type in ascending order'
            },
            {
                name: 'Price Type (Descending)',
                value: '-priceType',
                description: 'Sort by Price Type in descending order'
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
                name: 'Promotion Code (Ascending)',
                value: 'promotionCode',
                description: 'Sort by Promotion Code in ascending order'
            },
            {
                name: 'Promotion Code (Descending)',
                value: '-promotionCode',
                description: 'Sort by Promotion Code in descending order'
            },
            {
                name: 'Promotion Type (Ascending)',
                value: 'promotionType',
                description: 'Sort by Promotion Type in ascending order'
            },
            {
                name: 'Promotion Type (Descending)',
                value: '-promotionType',
                description: 'Sort by Promotion Type in descending order'
            },
            {
                name: 'Rebate (Ascending)',
                value: 'rebate',
                description: 'Sort by Rebate in ascending order'
            },
            {
                name: 'Rebate (Descending)',
                value: '-rebate',
                description: 'Sort by Rebate in descending order'
            },
            {
                name: 'Rebate Range (Ascending)',
                value: 'rebateRange',
                description: 'Sort by Rebate Range in ascending order'
            },
            {
                name: 'Rebate Range (Descending)',
                value: '-rebateRange',
                description: 'Sort by Rebate Range in descending order'
            },
            {
                name: 'Rsp (Ascending)',
                value: 'rsp',
                description: 'Sort by Rsp in ascending order'
            },
            {
                name: 'Rsp (Descending)',
                value: '-rsp',
                description: 'Sort by Rsp in descending order'
            },
            {
                name: 'Rsp Bonus (Ascending)',
                value: 'rspBonus',
                description: 'Sort by Rsp Bonus in ascending order'
            },
            {
                name: 'Rsp Bonus (Descending)',
                value: '-rspBonus',
                description: 'Sort by Rsp Bonus in descending order'
            },
            {
                name: 'Shelf Edge (Ascending)',
                value: 'shelfEdge',
                description: 'Sort by Shelf Edge in ascending order'
            },
            {
                name: 'Shelf Edge (Descending)',
                value: '-shelfEdge',
                description: 'Sort by Shelf Edge in descending order'
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
            },
            {
                name: 'Start In Store Date (Ascending)',
                value: 'startInStoreDate',
                description: 'Sort by Start In Store Date in ascending order'
            },
            {
                name: 'Start In Store Date (Descending)',
                value: '-startInStoreDate',
                description: 'Sort by Start In Store Date in descending order'
            },
            {
                name: 'Surcharge (Ascending)',
                value: 'surcharge',
                description: 'Sort by Surcharge in ascending order'
            },
            {
                name: 'Surcharge (Descending)',
                value: '-surcharge',
                description: 'Sort by Surcharge in descending order'
            },
            {
                name: 'Wsp (Ascending)',
                value: 'wsp',
                description: 'Sort by Wsp in ascending order'
            },
            {
                name: 'Wsp (Descending)',
                value: '-wsp',
                description: 'Sort by Wsp in descending order'
            },
            {
                name: 'Wsp Bonus (Ascending)',
                value: 'wspBonus',
                description: 'Sort by Wsp Bonus in ascending order'
            },
            {
                name: 'Wsp Bonus (Descending)',
                value: '-wspBonus',
                description: 'Sort by Wsp Bonus in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['promotionLines'],
                operation: ['promotionLines:list'],
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
                resource: ['promotionLines'],
                operation: ['promotionLines:list'],
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
                name: 'Active',
                value: 'active',
                description: 'Include active in the response'
            },
            {
                name: 'All Customers',
                value: 'allCustomers',
                description: 'Include all customers in the response'
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
                name: 'Buy End Date',
                value: 'buyEndDate',
                description: 'Include buy end date in the response'
            },
            {
                name: 'Buy Start Date',
                value: 'buyStartDate',
                description: 'Include buy start date in the response'
            },
            {
                name: 'Capped Stock Cases',
                value: 'cappedStockCases',
                description: 'Include capped stock cases in the response'
            },
            {
                name: 'Claim Back',
                value: 'claimBack',
                description: 'Include claim back in the response'
            },
            {
                name: 'Comment',
                value: 'comment',
                description: 'Include comment in the response'
            },
            {
                name: 'Cost Retro Bonus',
                value: 'costRetroBonus',
                description: 'Include cost retro bonus in the response'
            },
            {
                name: 'Customer Code',
                value: 'customerCode',
                description: 'Include customer code in the response'
            },
            {
                name: 'Customer Type',
                value: 'customerType',
                description: 'Include customer type in the response'
            },
            {
                name: 'Default Customer Cap Sgl',
                value: 'defaultCustomerCapSgl',
                description: 'Include default customer cap sgl in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'End Date',
                value: 'endDate',
                description: 'Include end date in the response'
            },
            {
                name: 'End In Store Date',
                value: 'endInStoreDate',
                description: 'Include end in store date in the response'
            },
            {
                name: 'Gross Cost',
                value: 'grossCost',
                description: 'Include gross cost in the response'
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
                name: 'Nett Invoice',
                value: 'nettInvoice',
                description: 'Include nett invoice in the response'
            },
            {
                name: 'Online',
                value: 'online',
                description: 'Include online in the response'
            },
            {
                name: 'Override Customer Cap Sgl',
                value: 'overrideCustomerCapSgl',
                description: 'Include override customer cap sgl in the response'
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
                name: 'Plof Head',
                value: 'plofHead',
                description: 'Include plof head in the response'
            },
            {
                name: 'Price Type',
                value: 'priceType',
                description: 'Include price type in the response'
            },
            {
                name: 'Product Code',
                value: 'productCode',
                description: 'Include product code in the response'
            },
            {
                name: 'Promotion Code',
                value: 'promotionCode',
                description: 'Include promotion code in the response'
            },
            {
                name: 'Promotion Type',
                value: 'promotionType',
                description: 'Include promotion type in the response'
            },
            {
                name: 'Rebate',
                value: 'rebate',
                description: 'Include rebate in the response'
            },
            {
                name: 'Rebate Range',
                value: 'rebateRange',
                description: 'Include rebate range in the response'
            },
            {
                name: 'Rsp',
                value: 'rsp',
                description: 'Include rsp in the response'
            },
            {
                name: 'Rsp Bonus',
                value: 'rspBonus',
                description: 'Include rsp bonus in the response'
            },
            {
                name: 'Shelf Edge',
                value: 'shelfEdge',
                description: 'Include shelf edge in the response'
            },
            {
                name: 'Start Date',
                value: 'startDate',
                description: 'Include start date in the response'
            },
            {
                name: 'Start In Store Date',
                value: 'startInStoreDate',
                description: 'Include start in store date in the response'
            },
            {
                name: 'Surcharge',
                value: 'surcharge',
                description: 'Include surcharge in the response'
            },
            {
                name: 'Wsp',
                value: 'wsp',
                description: 'Include wsp in the response'
            },
            {
                name: 'Wsp Bonus',
                value: 'wspBonus',
                description: 'Include wsp bonus in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['promotionLines'],
                operation: ['promotionLines:list'],
                filterMode: ['common']
            }
        }
    }
];
