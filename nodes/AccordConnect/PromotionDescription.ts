import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0006 - 24/08/26 - do not edit by hand

export const promotionsOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['promotions'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'promotions:get',
                description: 'Get a promotion',
                action: 'Get a promotion'
            },
            {
                name: 'List',
                value: 'promotions:list',
                description: 'List many promotions',
                action: 'List many promotions'
            },
        ],
        default: 'promotions:get',
    },
];


// IncludeLines URL mapping configuration
export const includeLinesConfig = {
    linesResource: 'promotionLines',
    getEndpoint: '/promotions/{id}/promotionLines',
    listEndpoint: '/promotions/promotionLines',
    description: 'promotion line items'
};


export const promotionsReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the promotion',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['promotions'],
                operation: ['promotions:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'promotionCode,lastUpdate,promotionType,entryType',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'All Customers',
                value: 'allCustomers',
                description: 'Include all customers in the response'
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
                name: 'Conversion Date',
                value: 'conversionDate',
                description: 'Include conversion date in the response'
            },
            {
                name: 'Currency Code',
                value: 'currencyCode',
                description: 'Include currency code in the response'
            },
            {
                name: 'Customer Type',
                value: 'customerType',
                description: 'Include customer type in the response'
            },
            {
                name: 'Cutoff Date',
                value: 'cutoffDate',
                description: 'Include cutoff date in the response'
            },
            {
                name: 'Delivery Date1',
                value: 'deliveryDate1',
                description: 'Include delivery date1 in the response'
            },
            {
                name: 'Delivery Date2',
                value: 'deliveryDate2',
                description: 'Include delivery date2 in the response'
            },
            {
                name: 'Delivery Date3',
                value: 'deliveryDate3',
                description: 'Include delivery date3 in the response'
            },
            {
                name: 'Delivery Date4',
                value: 'deliveryDate4',
                description: 'Include delivery date4 in the response'
            },
            {
                name: 'Delivery Date5',
                value: 'deliveryDate5',
                description: 'Include delivery date5 in the response'
            },
            {
                name: 'Delivery Date6',
                value: 'deliveryDate6',
                description: 'Include delivery date6 in the response'
            },
            {
                name: 'Delivery Date7',
                value: 'deliveryDate7',
                description: 'Include delivery date7 in the response'
            },
            {
                name: 'Delivery Date8',
                value: 'deliveryDate8',
                description: 'Include delivery date8 in the response'
            },
            {
                name: 'Depot Code',
                value: 'depotCode',
                description: 'Include depot code in the response'
            },
            {
                name: 'En Primeur Ind',
                value: 'enPrimeurInd',
                description: 'Include en primeur ind in the response'
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
                name: 'Entry Type',
                value: 'entryType',
                description: 'Include entry type in the response'
            },
            {
                name: 'Input Date',
                value: 'inputDate',
                description: 'Include input date in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Listed Status',
                value: 'listedStatus',
                description: 'Include listed status in the response'
            },
            {
                name: 'Mandatory Qty1',
                value: 'mandatoryQty1',
                description: 'Include mandatory qty1 in the response'
            },
            {
                name: 'Mandatory Qty2',
                value: 'mandatoryQty2',
                description: 'Include mandatory qty2 in the response'
            },
            {
                name: 'Mandatory Qty3',
                value: 'mandatoryQty3',
                description: 'Include mandatory qty3 in the response'
            },
            {
                name: 'Mandatory Qty4',
                value: 'mandatoryQty4',
                description: 'Include mandatory qty4 in the response'
            },
            {
                name: 'Mandatory Qty5',
                value: 'mandatoryQty5',
                description: 'Include mandatory qty5 in the response'
            },
            {
                name: 'Mandatory Qty6',
                value: 'mandatoryQty6',
                description: 'Include mandatory qty6 in the response'
            },
            {
                name: 'Mandatory Qty7',
                value: 'mandatoryQty7',
                description: 'Include mandatory qty7 in the response'
            },
            {
                name: 'Mandatory Qty8',
                value: 'mandatoryQty8',
                description: 'Include mandatory qty8 in the response'
            },
            {
                name: 'National',
                value: 'national',
                description: 'Include national in the response'
            },
            {
                name: 'National Local',
                value: 'nationalLocal',
                description: 'Include national local in the response'
            },
            {
                name: 'Order Type',
                value: 'orderType',
                description: 'Include order type in the response'
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
                name: 'Promotion Code',
                value: 'promotionCode',
                description: 'Include promotion code in the response'
            },
            {
                name: 'Promotion Status',
                value: 'promotionStatus',
                description: 'Include promotion status in the response'
            },
            {
                name: 'Promotion Type',
                value: 'promotionType',
                description: 'Include promotion type in the response'
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
                name: 'Web Scheme',
                value: 'webScheme',
                description: 'Include web scheme in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['promotions'],
                operation: ['promotions:get']
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
                resource: ['promotions'],
                operation: ['promotions:get']
            }
        }
    },
    {
        displayName: 'Include Lines',
        name: 'includeLines',
        type: 'boolean',
        default: false,
        description: 'Whether include promotion line items in the response',
        displayOptions: {
            show: {
                resource: ['promotions'],
                operation: ['promotions:get']
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
                resource: ['promotions'],
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
                resource: ['promotions'],
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
                resource: ['promotions'],
                operation: ['get']
            }
        }
    }
];

export const promotionsListFields: INodeProperties[] = [
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
                resource: ['promotions'],
                operation: ['promotions:list']
            }
        }
    },
    {
        displayName: 'Include Lines',
        name: 'includeLines',
        type: 'boolean',
        default: false,
        description: 'Whether include promotion line items in the response',
        displayOptions: {
            show: {
                resource: ['promotions'],
                operation: ['promotions:list']
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
                resource: ['promotions'],
                operation: ['promotions:list'],
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
                resource: ['promotions'],
                operation: ['promotions:list'],
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
                resource: ['promotions'],
                operation: ['promotions:list'],
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
                        default: 'allCustomers',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
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
                                name: 'Claim Back',
                                value: 'claimBack'
                            },
                            {
                                name: 'Comment',
                                value: 'comment'
                            },
                            {
                                name: 'Conversion Date',
                                value: 'conversionDate'
                            },
                            {
                                name: 'Customer Type',
                                value: 'customerType'
                            },
                            {
                                name: 'Cutoff Date',
                                value: 'cutoffDate'
                            },
                            {
                                name: 'Delivery Date1',
                                value: 'deliveryDate1'
                            },
                            {
                                name: 'Delivery Date2',
                                value: 'deliveryDate2'
                            },
                            {
                                name: 'Delivery Date3',
                                value: 'deliveryDate3'
                            },
                            {
                                name: 'Delivery Date4',
                                value: 'deliveryDate4'
                            },
                            {
                                name: 'Delivery Date5',
                                value: 'deliveryDate5'
                            },
                            {
                                name: 'Delivery Date6',
                                value: 'deliveryDate6'
                            },
                            {
                                name: 'Delivery Date7',
                                value: 'deliveryDate7'
                            },
                            {
                                name: 'Delivery Date8',
                                value: 'deliveryDate8'
                            },
                            {
                                name: 'Depot',
                                value: 'depot'
                            },
                            {
                                name: 'En Primeur Ind',
                                value: 'enPrimeurInd'
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
                                name: 'Entry Type',
                                value: 'entryType'
                            },
                            {
                                name: 'Hide Nested Keys',
                                value: 'hideNestedKeys'
                            },
                            {
                                name: 'Input Date',
                                value: 'inputDate'
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
                                name: 'Mandatory Qty1',
                                value: 'mandatoryQty1'
                            },
                            {
                                name: 'Mandatory Qty2',
                                value: 'mandatoryQty2'
                            },
                            {
                                name: 'Mandatory Qty3',
                                value: 'mandatoryQty3'
                            },
                            {
                                name: 'Mandatory Qty4',
                                value: 'mandatoryQty4'
                            },
                            {
                                name: 'Mandatory Qty5',
                                value: 'mandatoryQty5'
                            },
                            {
                                name: 'Mandatory Qty6',
                                value: 'mandatoryQty6'
                            },
                            {
                                name: 'Mandatory Qty7',
                                value: 'mandatoryQty7'
                            },
                            {
                                name: 'Mandatory Qty8',
                                value: 'mandatoryQty8'
                            },
                            {
                                name: 'National',
                                value: 'national'
                            },
                            {
                                name: 'National Local',
                                value: 'nationalLocal'
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
                                name: 'Order Type',
                                value: 'orderType'
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
                                name: 'Promotion Code',
                                value: 'promotionCode'
                            },
                            {
                                name: 'Promotion Status',
                                value: 'promotionStatus'
                            },
                            {
                                name: 'Promotion Type',
                                value: 'promotionType'
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
                                name: 'Timeout',
                                value: 'timeout'
                            },
                            {
                                name: 'Web Scheme',
                                value: 'webScheme'
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
                resource: ['promotions'],
                operation: ['promotions:list'],
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
        placeholder: '0017',
        displayOptions: {
            show: {
                resource: ['promotions'],
                operation: ['promotions:list'],
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
                resource: ['promotions'],
                operation: ['promotions:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Start Date',
        name: 'startDate',
        type: 'string',
        default: '',
        description: 'Promotion Start Date (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        placeholder: '2020-10-01',
        displayOptions: {
            show: {
                resource: ['promotions'],
                operation: ['promotions:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'End Date',
        name: 'endDate',
        type: 'string',
        default: '',
        description: 'Promotion End Date [null for open ended] (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        placeholder: '2021-01-01',
        displayOptions: {
            show: {
                resource: ['promotions'],
                operation: ['promotions:list'],
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
        placeholder: 'promotionCode,-lastUpdate',
        options: [
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
                name: 'Conversion Date (Ascending)',
                value: 'conversionDate',
                description: 'Sort by Conversion Date in ascending order'
            },
            {
                name: 'Conversion Date (Descending)',
                value: '-conversionDate',
                description: 'Sort by Conversion Date in descending order'
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
                name: 'Cutoff Date (Ascending)',
                value: 'cutoffDate',
                description: 'Sort by Cutoff Date in ascending order'
            },
            {
                name: 'Cutoff Date (Descending)',
                value: '-cutoffDate',
                description: 'Sort by Cutoff Date in descending order'
            },
            {
                name: 'Delivery Date1 (Ascending)',
                value: 'deliveryDate1',
                description: 'Sort by Delivery Date1 in ascending order'
            },
            {
                name: 'Delivery Date1 (Descending)',
                value: '-deliveryDate1',
                description: 'Sort by Delivery Date1 in descending order'
            },
            {
                name: 'Delivery Date2 (Ascending)',
                value: 'deliveryDate2',
                description: 'Sort by Delivery Date2 in ascending order'
            },
            {
                name: 'Delivery Date2 (Descending)',
                value: '-deliveryDate2',
                description: 'Sort by Delivery Date2 in descending order'
            },
            {
                name: 'Delivery Date3 (Ascending)',
                value: 'deliveryDate3',
                description: 'Sort by Delivery Date3 in ascending order'
            },
            {
                name: 'Delivery Date3 (Descending)',
                value: '-deliveryDate3',
                description: 'Sort by Delivery Date3 in descending order'
            },
            {
                name: 'Delivery Date4 (Ascending)',
                value: 'deliveryDate4',
                description: 'Sort by Delivery Date4 in ascending order'
            },
            {
                name: 'Delivery Date4 (Descending)',
                value: '-deliveryDate4',
                description: 'Sort by Delivery Date4 in descending order'
            },
            {
                name: 'Delivery Date5 (Ascending)',
                value: 'deliveryDate5',
                description: 'Sort by Delivery Date5 in ascending order'
            },
            {
                name: 'Delivery Date5 (Descending)',
                value: '-deliveryDate5',
                description: 'Sort by Delivery Date5 in descending order'
            },
            {
                name: 'Delivery Date6 (Ascending)',
                value: 'deliveryDate6',
                description: 'Sort by Delivery Date6 in ascending order'
            },
            {
                name: 'Delivery Date6 (Descending)',
                value: '-deliveryDate6',
                description: 'Sort by Delivery Date6 in descending order'
            },
            {
                name: 'Delivery Date7 (Ascending)',
                value: 'deliveryDate7',
                description: 'Sort by Delivery Date7 in ascending order'
            },
            {
                name: 'Delivery Date7 (Descending)',
                value: '-deliveryDate7',
                description: 'Sort by Delivery Date7 in descending order'
            },
            {
                name: 'Delivery Date8 (Ascending)',
                value: 'deliveryDate8',
                description: 'Sort by Delivery Date8 in ascending order'
            },
            {
                name: 'Delivery Date8 (Descending)',
                value: '-deliveryDate8',
                description: 'Sort by Delivery Date8 in descending order'
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
                name: 'En Primeur Ind (Ascending)',
                value: 'enPrimeurInd',
                description: 'Sort by En Primeur Ind in ascending order'
            },
            {
                name: 'En Primeur Ind (Descending)',
                value: '-enPrimeurInd',
                description: 'Sort by En Primeur Ind in descending order'
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
                name: 'Entry Type (Ascending)',
                value: 'entryType',
                description: 'Sort by Entry Type in ascending order'
            },
            {
                name: 'Entry Type (Descending)',
                value: '-entryType',
                description: 'Sort by Entry Type in descending order'
            },
            {
                name: 'Input Date (Ascending)',
                value: 'inputDate',
                description: 'Sort by Input Date in ascending order'
            },
            {
                name: 'Input Date (Descending)',
                value: '-inputDate',
                description: 'Sort by Input Date in descending order'
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
                name: 'Mandatory Qty1 (Ascending)',
                value: 'mandatoryQty1',
                description: 'Sort by Mandatory Qty1 in ascending order'
            },
            {
                name: 'Mandatory Qty1 (Descending)',
                value: '-mandatoryQty1',
                description: 'Sort by Mandatory Qty1 in descending order'
            },
            {
                name: 'Mandatory Qty2 (Ascending)',
                value: 'mandatoryQty2',
                description: 'Sort by Mandatory Qty2 in ascending order'
            },
            {
                name: 'Mandatory Qty2 (Descending)',
                value: '-mandatoryQty2',
                description: 'Sort by Mandatory Qty2 in descending order'
            },
            {
                name: 'Mandatory Qty3 (Ascending)',
                value: 'mandatoryQty3',
                description: 'Sort by Mandatory Qty3 in ascending order'
            },
            {
                name: 'Mandatory Qty3 (Descending)',
                value: '-mandatoryQty3',
                description: 'Sort by Mandatory Qty3 in descending order'
            },
            {
                name: 'Mandatory Qty4 (Ascending)',
                value: 'mandatoryQty4',
                description: 'Sort by Mandatory Qty4 in ascending order'
            },
            {
                name: 'Mandatory Qty4 (Descending)',
                value: '-mandatoryQty4',
                description: 'Sort by Mandatory Qty4 in descending order'
            },
            {
                name: 'Mandatory Qty5 (Ascending)',
                value: 'mandatoryQty5',
                description: 'Sort by Mandatory Qty5 in ascending order'
            },
            {
                name: 'Mandatory Qty5 (Descending)',
                value: '-mandatoryQty5',
                description: 'Sort by Mandatory Qty5 in descending order'
            },
            {
                name: 'Mandatory Qty6 (Ascending)',
                value: 'mandatoryQty6',
                description: 'Sort by Mandatory Qty6 in ascending order'
            },
            {
                name: 'Mandatory Qty6 (Descending)',
                value: '-mandatoryQty6',
                description: 'Sort by Mandatory Qty6 in descending order'
            },
            {
                name: 'Mandatory Qty7 (Ascending)',
                value: 'mandatoryQty7',
                description: 'Sort by Mandatory Qty7 in ascending order'
            },
            {
                name: 'Mandatory Qty7 (Descending)',
                value: '-mandatoryQty7',
                description: 'Sort by Mandatory Qty7 in descending order'
            },
            {
                name: 'Mandatory Qty8 (Ascending)',
                value: 'mandatoryQty8',
                description: 'Sort by Mandatory Qty8 in ascending order'
            },
            {
                name: 'Mandatory Qty8 (Descending)',
                value: '-mandatoryQty8',
                description: 'Sort by Mandatory Qty8 in descending order'
            },
            {
                name: 'National (Ascending)',
                value: 'national',
                description: 'Sort by National in ascending order'
            },
            {
                name: 'National (Descending)',
                value: '-national',
                description: 'Sort by National in descending order'
            },
            {
                name: 'National Local (Ascending)',
                value: 'nationalLocal',
                description: 'Sort by National Local in ascending order'
            },
            {
                name: 'National Local (Descending)',
                value: '-nationalLocal',
                description: 'Sort by National Local in descending order'
            },
            {
                name: 'Order Type (Ascending)',
                value: 'orderType',
                description: 'Sort by Order Type in ascending order'
            },
            {
                name: 'Order Type (Descending)',
                value: '-orderType',
                description: 'Sort by Order Type in descending order'
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
                name: 'Promotion Status (Ascending)',
                value: 'promotionStatus',
                description: 'Sort by Promotion Status in ascending order'
            },
            {
                name: 'Promotion Status (Descending)',
                value: '-promotionStatus',
                description: 'Sort by Promotion Status in descending order'
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
                name: 'Web Scheme (Ascending)',
                value: 'webScheme',
                description: 'Sort by Web Scheme in ascending order'
            },
            {
                name: 'Web Scheme (Descending)',
                value: '-webScheme',
                description: 'Sort by Web Scheme in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['promotions'],
                operation: ['promotions:list'],
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
                resource: ['promotions'],
                operation: ['promotions:list'],
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
                name: 'All Customers',
                value: 'allCustomers',
                description: 'Include all customers in the response'
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
                name: 'Conversion Date',
                value: 'conversionDate',
                description: 'Include conversion date in the response'
            },
            {
                name: 'Currency Code',
                value: 'currencyCode',
                description: 'Include currency code in the response'
            },
            {
                name: 'Customer Type',
                value: 'customerType',
                description: 'Include customer type in the response'
            },
            {
                name: 'Cutoff Date',
                value: 'cutoffDate',
                description: 'Include cutoff date in the response'
            },
            {
                name: 'Delivery Date1',
                value: 'deliveryDate1',
                description: 'Include delivery date1 in the response'
            },
            {
                name: 'Delivery Date2',
                value: 'deliveryDate2',
                description: 'Include delivery date2 in the response'
            },
            {
                name: 'Delivery Date3',
                value: 'deliveryDate3',
                description: 'Include delivery date3 in the response'
            },
            {
                name: 'Delivery Date4',
                value: 'deliveryDate4',
                description: 'Include delivery date4 in the response'
            },
            {
                name: 'Delivery Date5',
                value: 'deliveryDate5',
                description: 'Include delivery date5 in the response'
            },
            {
                name: 'Delivery Date6',
                value: 'deliveryDate6',
                description: 'Include delivery date6 in the response'
            },
            {
                name: 'Delivery Date7',
                value: 'deliveryDate7',
                description: 'Include delivery date7 in the response'
            },
            {
                name: 'Delivery Date8',
                value: 'deliveryDate8',
                description: 'Include delivery date8 in the response'
            },
            {
                name: 'Depot Code',
                value: 'depotCode',
                description: 'Include depot code in the response'
            },
            {
                name: 'En Primeur Ind',
                value: 'enPrimeurInd',
                description: 'Include en primeur ind in the response'
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
                name: 'Entry Type',
                value: 'entryType',
                description: 'Include entry type in the response'
            },
            {
                name: 'Input Date',
                value: 'inputDate',
                description: 'Include input date in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Listed Status',
                value: 'listedStatus',
                description: 'Include listed status in the response'
            },
            {
                name: 'Mandatory Qty1',
                value: 'mandatoryQty1',
                description: 'Include mandatory qty1 in the response'
            },
            {
                name: 'Mandatory Qty2',
                value: 'mandatoryQty2',
                description: 'Include mandatory qty2 in the response'
            },
            {
                name: 'Mandatory Qty3',
                value: 'mandatoryQty3',
                description: 'Include mandatory qty3 in the response'
            },
            {
                name: 'Mandatory Qty4',
                value: 'mandatoryQty4',
                description: 'Include mandatory qty4 in the response'
            },
            {
                name: 'Mandatory Qty5',
                value: 'mandatoryQty5',
                description: 'Include mandatory qty5 in the response'
            },
            {
                name: 'Mandatory Qty6',
                value: 'mandatoryQty6',
                description: 'Include mandatory qty6 in the response'
            },
            {
                name: 'Mandatory Qty7',
                value: 'mandatoryQty7',
                description: 'Include mandatory qty7 in the response'
            },
            {
                name: 'Mandatory Qty8',
                value: 'mandatoryQty8',
                description: 'Include mandatory qty8 in the response'
            },
            {
                name: 'National',
                value: 'national',
                description: 'Include national in the response'
            },
            {
                name: 'National Local',
                value: 'nationalLocal',
                description: 'Include national local in the response'
            },
            {
                name: 'Order Type',
                value: 'orderType',
                description: 'Include order type in the response'
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
                name: 'Promotion Code',
                value: 'promotionCode',
                description: 'Include promotion code in the response'
            },
            {
                name: 'Promotion Status',
                value: 'promotionStatus',
                description: 'Include promotion status in the response'
            },
            {
                name: 'Promotion Type',
                value: 'promotionType',
                description: 'Include promotion type in the response'
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
                name: 'Web Scheme',
                value: 'webScheme',
                description: 'Include web scheme in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['promotions'],
                operation: ['promotions:list'],
                filterMode: ['common']
            }
        }
    }
];
