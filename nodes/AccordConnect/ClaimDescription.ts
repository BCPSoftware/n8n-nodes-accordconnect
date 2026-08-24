import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0005 - 21/08/26 - do not edit by hand

export const claimsOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['claims'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'claims:create',
                description: 'Create a claim',
                action: 'Create a claim'
            },
            {
                name: 'Get',
                value: 'claims:get',
                description: 'Get a claim',
                action: 'Get a claim'
            },
            {
                name: 'List',
                value: 'claims:list',
                description: 'List many claims',
                action: 'List many claims'
            },
            {
                name: 'Update',
                value: 'claims:update',
                description: 'Update a claim',
                action: 'Update a claim'
            },
        ],
        default: 'claims:create',
    },
];


// IncludeLines URL mapping configuration
export const includeLinesConfig = {
    linesResource: 'claimLines',
    getEndpoint: '/claims/{id}/claimLines',
    listEndpoint: '/claims/claimLines',
    description: 'claim line items'
};


export const claimsReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the claim',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'depot,claimNumber,lastUpdate,claimDate',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Claim Date',
                value: 'claimDate',
                description: 'Include claim date in the response'
            },
            {
                name: 'Claim Message',
                value: 'claimMessage',
                description: 'Include claim message in the response'
            },
            {
                name: 'Claim Number',
                value: 'claimNumber',
                description: 'Include claim number in the response'
            },
            {
                name: 'Claim Status',
                value: 'claimStatus',
                description: 'Include claim status in the response'
            },
            {
                name: 'Claim Value',
                value: 'claimValue',
                description: 'Include claim value in the response'
            },
            {
                name: 'Cr Dr Date',
                value: 'crDrDate',
                description: 'Include cr dr date in the response'
            },
            {
                name: 'Customer Code',
                value: 'customerCode',
                description: 'Include customer code in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Discount Percentage',
                value: 'discountPercentage',
                description: 'Include discount percentage in the response'
            },
            {
                name: 'Discount Value',
                value: 'discountValue',
                description: 'Include discount value in the response'
            },
            {
                name: 'Drop',
                value: 'drop',
                description: 'Include drop in the response'
            },
            {
                name: 'External Order Ref',
                value: 'externalOrderRef',
                description: 'Include external order ref in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'New Order',
                value: 'newOrder',
                description: 'Include new order in the response'
            },
            {
                name: 'New Order Date',
                value: 'newOrderDate',
                description: 'Include new order date in the response'
            },
            {
                name: 'New Order ID',
                value: 'newOrderId',
                description: 'Include new order ID in the response'
            },
            {
                name: 'Order Type',
                value: 'orderType',
                description: 'Include order type in the response'
            },
            {
                name: 'Order Type Description',
                value: 'orderTypeDescription',
                description: 'Include order type description in the response'
            },
            {
                name: 'Original Customer Ref',
                value: 'originalCustomerRef',
                description: 'Include original customer ref in the response'
            },
            {
                name: 'Original Invoice',
                value: 'originalInvoice',
                description: 'Include original invoice in the response'
            },
            {
                name: 'Original Invoice Date',
                value: 'originalInvoiceDate',
                description: 'Include original invoice date in the response'
            },
            {
                name: 'Original Order',
                value: 'originalOrder',
                description: 'Include original order in the response'
            },
            {
                name: 'Original Order Date',
                value: 'originalOrderDate',
                description: 'Include original order date in the response'
            },
            {
                name: 'Original Order ID',
                value: 'originalOrderId',
                description: 'Include original order ID in the response'
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
            },
            {
                name: 'Route',
                value: 'route',
                description: 'Include route in the response'
            },
            {
                name: 'Surcharge Percentage',
                value: 'surchargePercentage',
                description: 'Include surcharge percentage in the response'
            },
            {
                name: 'Surcharge Value',
                value: 'surchargeValue',
                description: 'Include surcharge value in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:get']
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
                resource: ['claims'],
                operation: ['claims:get']
            }
        }
    },
    {
        displayName: 'Include Lines',
        name: 'includeLines',
        type: 'boolean',
        default: false,
        description: 'Whether include claim line items in the response',
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:get']
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
                resource: ['claims'],
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
                resource: ['claims'],
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
                resource: ['claims'],
                operation: ['get']
            }
        }
    }
];

export const claimsUpdateFields: INodeProperties[] = [
    {
        displayName: 'Depot',
        name: 'depot',
        type: 'string',
        default: '',
        description: 'Depot code',
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:update']
            }
        }
    },
    {
        displayName: 'Claim Number',
        name: 'claimNumber',
        type: 'number',
        default: '',
        description: 'Claim No',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:update']
            }
        }
    },
    {
        displayName: 'Claim Status',
        name: 'claimStatus',
        type: 'options',
        default: 'a:Approved',
        description: 'The claim status value',
        options: [
            {
                name: 'Approved',
                value: 'a:Approved',
                description: 'Approved (code: a)'
            },
            {
                name: 'Completed',
                value: 'c:Completed',
                description: 'Completed (code: c)'
            },
            {
                name: 'Destroyed',
                value: 'd:Destroyed',
                description: 'Destroyed (code: d)'
            },
            {
                name: 'Lost',
                value: 'l:Lost',
                description: 'Lost (code: l)'
            },
            {
                name: 'Refused',
                value: 'r:Refused',
                description: 'Refused (code: r)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:update']
            }
        }
    },
    {
        displayName: 'Completed Action',
        name: 'completedAction',
        type: 'options',
        default: 'a:AddToNextInvoice',
        description: 'Completed Invoicing Action',
        options: [
            {
                name: 'AddToNextInvoice',
                value: 'a:AddToNextInvoice',
                description: 'AddToNextInvoice (code: a)'
            },
            {
                name: 'Credit',
                value: 'c:Credit',
                description: 'Credit (code: c)'
            },
            {
                name: 'ImmediateInvoice',
                value: 'i:ImmediateInvoice',
                description: 'ImmediateInvoice (code: i)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:update']
            }
        }
    }
];

export const claimsListFields: INodeProperties[] = [
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
                resource: ['claims'],
                operation: ['claims:list']
            }
        }
    },
    {
        displayName: 'Include Lines',
        name: 'includeLines',
        type: 'boolean',
        default: false,
        description: 'Whether include claim line items in the response',
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:list']
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
                resource: ['claims'],
                operation: ['claims:list'],
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
                resource: ['claims'],
                operation: ['claims:list'],
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
                resource: ['claims'],
                operation: ['claims:list'],
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
                        default: 'claimDate',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Claim Date',
                                value: 'claimDate'
                            },
                            {
                                name: 'Claim Message',
                                value: 'claimMessage'
                            },
                            {
                                name: 'Claim Number',
                                value: 'claimNumber'
                            },
                            {
                                name: 'Claim Status',
                                value: 'claimStatus'
                            },
                            {
                                name: 'Claim Value',
                                value: 'claimValue'
                            },
                            {
                                name: 'Cr Dr Date',
                                value: 'crDrDate'
                            },
                            {
                                name: 'Customer Code',
                                value: 'customerCode'
                            },
                            {
                                name: 'Depot',
                                value: 'depot'
                            },
                            {
                                name: 'Discount Percentage',
                                value: 'discountPercentage'
                            },
                            {
                                name: 'Discount Value',
                                value: 'discountValue'
                            },
                            {
                                name: 'Drop',
                                value: 'drop'
                            },
                            {
                                name: 'Head Office',
                                value: 'headOffice'
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
                                name: 'New Order',
                                value: 'newOrder'
                            },
                            {
                                name: 'New Order Date',
                                value: 'newOrderDate'
                            },
                            {
                                name: 'New Order ID',
                                value: 'newOrderId'
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
                                name: 'Order Type Description',
                                value: 'orderTypeDescription'
                            },
                            {
                                name: 'Original Customer Ref',
                                value: 'originalCustomerRef'
                            },
                            {
                                name: 'Original Invoice',
                                value: 'originalInvoice'
                            },
                            {
                                name: 'Original Invoice Date',
                                value: 'originalInvoiceDate'
                            },
                            {
                                name: 'Original Order Date',
                                value: 'originalOrderDate'
                            },
                            {
                                name: 'Original Order ID',
                                value: 'originalOrderId'
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
                                name: 'Route',
                                value: 'route'
                            },
                            {
                                name: 'Surcharge Percentage',
                                value: 'surchargePercentage'
                            },
                            {
                                name: 'Surcharge Value',
                                value: 'surchargeValue'
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
                resource: ['claims'],
                operation: ['claims:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Claim Number',
        name: 'claimNumber',
        type: 'number',
        default: '',
        description: 'Claim Number (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        typeOptions: {
            minValue: 0
        },
        placeholder: '154',
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:list'],
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
        placeholder: '2020-08-24T11:00:09.018',
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Claim Date',
        name: 'claimDate',
        type: 'string',
        default: '',
        description: 'Claim Date (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        placeholder: '2014-10-30',
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Claim Status',
        name: 'claimStatus',
        type: 'multiOptions',
        default: [],
        description: 'Claim Status (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        options: [
            {
                name: 'Approved',
                value: 'a:Approved',
                description: 'Approved (code: a)'
            },
            {
                name: 'Completed',
                value: 'c:Completed',
                description: 'Completed (code: c)'
            },
            {
                name: 'Destroyed',
                value: 'd:Destroyed',
                description: 'Destroyed (code: d)'
            },
            {
                name: 'Lost',
                value: 'l:Lost',
                description: 'Lost (code: l)'
            },
            {
                name: 'Outstanding',
                value: ':Outstanding',
                description: 'Outstanding (code: )'
            },
            {
                name: 'Refused',
                value: 'r:Refused',
                description: 'Refused (code: r)'
            }
        ],
        placeholder: 'r:Refused',
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Customer Code',
        name: 'customerCode',
        type: 'string',
        default: '',
        description: 'Customer (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: '10001',
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:list'],
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
        placeholder: 'depot,-claimNumber',
        options: [
            {
                name: 'Claim Date (Ascending)',
                value: 'claimDate',
                description: 'Sort by Claim Date in ascending order'
            },
            {
                name: 'Claim Date (Descending)',
                value: '-claimDate',
                description: 'Sort by Claim Date in descending order'
            },
            {
                name: 'Claim Message (Ascending)',
                value: 'claimMessage',
                description: 'Sort by Claim Message in ascending order'
            },
            {
                name: 'Claim Message (Descending)',
                value: '-claimMessage',
                description: 'Sort by Claim Message in descending order'
            },
            {
                name: 'Claim Number (Ascending)',
                value: 'claimNumber',
                description: 'Sort by Claim Number in ascending order'
            },
            {
                name: 'Claim Number (Descending)',
                value: '-claimNumber',
                description: 'Sort by Claim Number in descending order'
            },
            {
                name: 'Claim Status (Ascending)',
                value: 'claimStatus',
                description: 'Sort by Claim Status in ascending order'
            },
            {
                name: 'Claim Status (Descending)',
                value: '-claimStatus',
                description: 'Sort by Claim Status in descending order'
            },
            {
                name: 'Claim Value (Ascending)',
                value: 'claimValue',
                description: 'Sort by Claim Value in ascending order'
            },
            {
                name: 'Claim Value (Descending)',
                value: '-claimValue',
                description: 'Sort by Claim Value in descending order'
            },
            {
                name: 'Cr Dr Date (Ascending)',
                value: 'crDrDate',
                description: 'Sort by Cr Dr Date in ascending order'
            },
            {
                name: 'Cr Dr Date (Descending)',
                value: '-crDrDate',
                description: 'Sort by Cr Dr Date in descending order'
            },
            {
                name: 'Customer Code (Ascending)',
                value: 'customerCode',
                description: 'Sort by Customer Code in ascending order'
            },
            {
                name: 'Customer Code (Descending)',
                value: '-customerCode',
                description: 'Sort by Customer Code in descending order'
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
                name: 'Discount Percentage (Ascending)',
                value: 'discountPercentage',
                description: 'Sort by Discount Percentage in ascending order'
            },
            {
                name: 'Discount Percentage (Descending)',
                value: '-discountPercentage',
                description: 'Sort by Discount Percentage in descending order'
            },
            {
                name: 'Discount Value (Ascending)',
                value: 'discountValue',
                description: 'Sort by Discount Value in ascending order'
            },
            {
                name: 'Discount Value (Descending)',
                value: '-discountValue',
                description: 'Sort by Discount Value in descending order'
            },
            {
                name: 'Drop (Ascending)',
                value: 'drop',
                description: 'Sort by Drop in ascending order'
            },
            {
                name: 'Drop (Descending)',
                value: '-drop',
                description: 'Sort by Drop in descending order'
            },
            {
                name: 'Head Office (Ascending)',
                value: 'headOffice',
                description: 'Sort by Head Office in ascending order'
            },
            {
                name: 'Head Office (Descending)',
                value: '-headOffice',
                description: 'Sort by Head Office in descending order'
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
                name: 'New Order (Ascending)',
                value: 'newOrder',
                description: 'Sort by New Order in ascending order'
            },
            {
                name: 'New Order (Descending)',
                value: '-newOrder',
                description: 'Sort by New Order in descending order'
            },
            {
                name: 'New Order Date (Ascending)',
                value: 'newOrderDate',
                description: 'Sort by New Order Date in ascending order'
            },
            {
                name: 'New Order Date (Descending)',
                value: '-newOrderDate',
                description: 'Sort by New Order Date in descending order'
            },
            {
                name: 'New Order ID (Ascending)',
                value: 'newOrderId',
                description: 'Sort by New Order ID in ascending order'
            },
            {
                name: 'New Order ID (Descending)',
                value: '-newOrderId',
                description: 'Sort by New Order ID in descending order'
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
                name: 'Order Type Description (Ascending)',
                value: 'orderTypeDescription',
                description: 'Sort by Order Type Description in ascending order'
            },
            {
                name: 'Order Type Description (Descending)',
                value: '-orderTypeDescription',
                description: 'Sort by Order Type Description in descending order'
            },
            {
                name: 'Original Customer Ref (Ascending)',
                value: 'originalCustomerRef',
                description: 'Sort by Original Customer Ref in ascending order'
            },
            {
                name: 'Original Customer Ref (Descending)',
                value: '-originalCustomerRef',
                description: 'Sort by Original Customer Ref in descending order'
            },
            {
                name: 'Original Invoice (Ascending)',
                value: 'originalInvoice',
                description: 'Sort by Original Invoice in ascending order'
            },
            {
                name: 'Original Invoice (Descending)',
                value: '-originalInvoice',
                description: 'Sort by Original Invoice in descending order'
            },
            {
                name: 'Original Invoice Date (Ascending)',
                value: 'originalInvoiceDate',
                description: 'Sort by Original Invoice Date in ascending order'
            },
            {
                name: 'Original Invoice Date (Descending)',
                value: '-originalInvoiceDate',
                description: 'Sort by Original Invoice Date in descending order'
            },
            {
                name: 'Original Order Date (Ascending)',
                value: 'originalOrderDate',
                description: 'Sort by Original Order Date in ascending order'
            },
            {
                name: 'Original Order Date (Descending)',
                value: '-originalOrderDate',
                description: 'Sort by Original Order Date in descending order'
            },
            {
                name: 'Original Order ID (Ascending)',
                value: 'originalOrderId',
                description: 'Sort by Original Order ID in ascending order'
            },
            {
                name: 'Original Order ID (Descending)',
                value: '-originalOrderId',
                description: 'Sort by Original Order ID in descending order'
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
            },
            {
                name: 'Route (Ascending)',
                value: 'route',
                description: 'Sort by Route in ascending order'
            },
            {
                name: 'Route (Descending)',
                value: '-route',
                description: 'Sort by Route in descending order'
            },
            {
                name: 'Surcharge Percentage (Ascending)',
                value: 'surchargePercentage',
                description: 'Sort by Surcharge Percentage in ascending order'
            },
            {
                name: 'Surcharge Percentage (Descending)',
                value: '-surchargePercentage',
                description: 'Sort by Surcharge Percentage in descending order'
            },
            {
                name: 'Surcharge Value (Ascending)',
                value: 'surchargeValue',
                description: 'Sort by Surcharge Value in ascending order'
            },
            {
                name: 'Surcharge Value (Descending)',
                value: '-surchargeValue',
                description: 'Sort by Surcharge Value in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:list'],
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
                resource: ['claims'],
                operation: ['claims:list'],
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
                name: 'Claim Date',
                value: 'claimDate',
                description: 'Include claim date in the response'
            },
            {
                name: 'Claim Message',
                value: 'claimMessage',
                description: 'Include claim message in the response'
            },
            {
                name: 'Claim Number',
                value: 'claimNumber',
                description: 'Include claim number in the response'
            },
            {
                name: 'Claim Status',
                value: 'claimStatus',
                description: 'Include claim status in the response'
            },
            {
                name: 'Claim Value',
                value: 'claimValue',
                description: 'Include claim value in the response'
            },
            {
                name: 'Cr Dr Date',
                value: 'crDrDate',
                description: 'Include cr dr date in the response'
            },
            {
                name: 'Customer Code',
                value: 'customerCode',
                description: 'Include customer code in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Discount Percentage',
                value: 'discountPercentage',
                description: 'Include discount percentage in the response'
            },
            {
                name: 'Discount Value',
                value: 'discountValue',
                description: 'Include discount value in the response'
            },
            {
                name: 'Drop',
                value: 'drop',
                description: 'Include drop in the response'
            },
            {
                name: 'External Order Ref',
                value: 'externalOrderRef',
                description: 'Include external order ref in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'New Order',
                value: 'newOrder',
                description: 'Include new order in the response'
            },
            {
                name: 'New Order Date',
                value: 'newOrderDate',
                description: 'Include new order date in the response'
            },
            {
                name: 'New Order ID',
                value: 'newOrderId',
                description: 'Include new order ID in the response'
            },
            {
                name: 'Order Type',
                value: 'orderType',
                description: 'Include order type in the response'
            },
            {
                name: 'Order Type Description',
                value: 'orderTypeDescription',
                description: 'Include order type description in the response'
            },
            {
                name: 'Original Customer Ref',
                value: 'originalCustomerRef',
                description: 'Include original customer ref in the response'
            },
            {
                name: 'Original Invoice',
                value: 'originalInvoice',
                description: 'Include original invoice in the response'
            },
            {
                name: 'Original Invoice Date',
                value: 'originalInvoiceDate',
                description: 'Include original invoice date in the response'
            },
            {
                name: 'Original Order',
                value: 'originalOrder',
                description: 'Include original order in the response'
            },
            {
                name: 'Original Order Date',
                value: 'originalOrderDate',
                description: 'Include original order date in the response'
            },
            {
                name: 'Original Order ID',
                value: 'originalOrderId',
                description: 'Include original order ID in the response'
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
            },
            {
                name: 'Route',
                value: 'route',
                description: 'Include route in the response'
            },
            {
                name: 'Surcharge Percentage',
                value: 'surchargePercentage',
                description: 'Include surcharge percentage in the response'
            },
            {
                name: 'Surcharge Value',
                value: 'surchargeValue',
                description: 'Include surcharge value in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:list'],
                filterMode: ['common']
            }
        }
    }
];

export const claimsCreateFields: INodeProperties[] = [
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
                resource: ['claims'],
                operation: ['claims:create']
            }
        }
    },
    {
        displayName: 'JSON Body',
        name: 'jsonBody',
        type: 'json',
        default: '{}',
        description: 'Raw JSON body for creating claim records. Provide the complete request payload.',
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['json']
            }
        },
        placeholder: `{
  "claims": [
    {
      // Add your claim fields here
    }
  ]
}`
    },
    {
        displayName: 'Sent Quantity',
        name: 'sentQuantity',
        type: 'number',
        default: '',
        description: 'The sent quantity value',
        required: true,
        typeOptions: {
            minValue: -99999
        },
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Reason Code',
        name: 'reasonCode',
        type: 'number',
        default: '',
        description: 'The reason code value',
        required: true,
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Record ID',
        name: 'recordId',
        type: 'number',
        default: '',
        description: 'The record ID value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Depot',
        name: 'depot',
        type: 'string',
        default: '',
        description: 'The depot value',
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Claim Number',
        name: 'claimNumber',
        type: 'number',
        default: '',
        description: 'The claim number value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Claim Line',
        name: 'claimLine',
        type: 'number',
        default: '',
        description: 'The claim line value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Product Code',
        name: 'productCode',
        type: 'string',
        default: '',
        description: 'The product code value',
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Quantity Type',
        name: 'quantityType',
        type: 'options',
        default: 'c:Cases',
        description: 'The quantity type value',
        options: [
            {
                name: 'Cases',
                value: 'c:Cases',
                description: 'Cases (code: c)'
            },
            {
                name: 'Singles',
                value: 's:Singles',
                description: 'Singles (code: s)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Weight',
        name: 'weight',
        type: 'number',
        default: '',
        description: 'The weight value',
        typeOptions: {
            minValue: -9999.999
        },
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Debit Credit',
        name: 'debitCredit',
        type: 'options',
        default: 'c:Credit',
        description: 'Debit/Credit',
        options: [
            {
                name: 'Credit',
                value: 'c:Credit',
                description: 'Credit (code: c)'
            },
            {
                name: 'Debit',
                value: 'd:Debit',
                description: 'Debit (code: d)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Sent Product Code',
        name: 'sentProductCode',
        type: 'string',
        default: '',
        description: 'The sent product code value',
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Original Line Number',
        name: 'originalLineNumber',
        type: 'number',
        default: '',
        description: 'The original line number value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Assembler',
        name: 'assembler',
        type: 'string',
        default: '',
        description: 'Assembler Code',
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Driver',
        name: 'driver',
        type: 'string',
        default: '',
        description: 'The driver value',
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Correct Price',
        name: 'correctPrice',
        type: 'number',
        default: '',
        description: 'Price',
        typeOptions: {
            minValue: -99999.99
        },
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Quantity Discount',
        name: 'quantityDiscount',
        type: 'number',
        default: '',
        description: 'The quantity discount value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Cost',
        name: 'cost',
        type: 'number',
        default: '',
        description: 'The cost value',
        typeOptions: {
            minValue: -9999.99
        },
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Rsp',
        name: 'rsp',
        type: 'number',
        default: '',
        description: 'The rsp value',
        typeOptions: {
            minValue: -9999.99
        },
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Fighting Brand',
        name: 'fightingBrand',
        type: 'number',
        default: '',
        description: 'The fighting brand value',
        typeOptions: {
            minValue: -999.99
        },
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Override WSV',
        name: 'overrideWSV',
        type: 'number',
        default: '',
        description: 'WSV Override',
        typeOptions: {
            minValue: -999999.99
        },
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Line Message',
        name: 'lineMessage',
        type: 'string',
        default: '',
        description: 'The line message value',
        displayOptions: {
            show: {
                resource: ['claims'],
                operation: ['claims:create'],
                createMode: ['advanced']
            }
        }
    }
];
