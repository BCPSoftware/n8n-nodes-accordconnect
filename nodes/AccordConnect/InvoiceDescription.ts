import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0006 - 24/08/26 - do not edit by hand

export const invoicesOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['invoices'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'invoices:get',
                description: 'Get a invoice',
                action: 'Get a invoice'
            },
            {
                name: 'List',
                value: 'invoices:list',
                description: 'List many invoices',
                action: 'List many invoices'
            },
        ],
        default: 'invoices:get',
    },
];


export const invoicesReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the invoice',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['invoices'],
                operation: ['invoices:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'depot,invoiceNumber,invoiceDate,weekNumber',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Customer Code',
                value: 'customerCode',
                description: 'Include customer code in the response'
            },
            {
                name: 'Customer Ref',
                value: 'customerRef',
                description: 'Include customer ref in the response'
            },
            {
                name: 'Delivery Date',
                value: 'deliveryDate',
                description: 'Include delivery date in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'External Order Ref',
                value: 'externalOrderRef',
                description: 'Include external order ref in the response'
            },
            {
                name: 'Invoice Date',
                value: 'invoiceDate',
                description: 'Include invoice date in the response'
            },
            {
                name: 'Invoice Number',
                value: 'invoiceNumber',
                description: 'Include invoice number in the response'
            },
            {
                name: 'Invoice PDF',
                value: 'invoicePDF',
                description: 'Include invoice pdf in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Order ID',
                value: 'orderID',
                description: 'Include order ID in the response'
            },
            {
                name: 'Order Number',
                value: 'orderNumber',
                description: 'Include order number in the response'
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
                name: 'Total Value',
                value: 'totalValue',
                description: 'Include total value in the response'
            },
            {
                name: 'Week Number',
                value: 'weekNumber',
                description: 'Include week number in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['invoices'],
                operation: ['invoices:get']
            },
            hide: {
                downloadPDFs: [true]
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
                resource: ['invoices'],
                operation: ['invoices:get']
            }
        }
    },
    {
        displayName: 'Download PDFs',
        name: 'downloadPDFs',
        type: 'boolean',
        default: false,
        description: 'Whether to automatically download invoice PDF documents. When enabled, all fields will be returned (fields parameter is ignored) to ensure the invoicePDF field is available.',
        displayOptions: {
            show: {
                resource: ['invoices'],
                operation: ['invoices:get']
            }
        }
    },
    {
        displayName: 'PDF Format',
        name: 'pdfFormat',
        type: 'options',
        default: 'binary',
        description: 'Format for PDF output - binary data (for file operations) or base64 string (for storage/APIs)',
        options: [
            {
                name: 'Binary Data',
                value: 'binary',
                description: 'Store as n8n binary data (standard for file handling)'
            },
            {
                name: 'Base64 String',
                value: 'base64',
                description: 'Store as base64 string in JSON (for storage/APIs)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['invoices'],
                operation: ['invoices:get'],
                downloadPDFs: [true]
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
                resource: ['invoices'],
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
                resource: ['invoices'],
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
                resource: ['invoices'],
                operation: ['get']
            }
        }
    }
];

export const invoicesListFields: INodeProperties[] = [
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
                resource: ['invoices'],
                operation: ['invoices:list']
            }
        }
    },
    {
        displayName: '⚠️ At Least One of the Following Filters Is Required: Customer Code, Rep Code, or Head Office',
        name: 'invoicesListNotice',
        type: 'notice',
        default: '',
        displayOptions: {
            show: {
                resource: ['invoices'],
                operation: ['invoices:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Download PDFs',
        name: 'downloadPDFs',
        type: 'boolean',
        default: false,
        description: 'Whether to automatically download invoice PDF documents. When enabled, all fields will be returned (fields parameter is ignored) to ensure the invoicePDF field is available.',
        displayOptions: {
            show: {
                resource: ['invoices'],
                operation: ['invoices:list']
            }
        }
    },
    {
        displayName: 'PDF Format',
        name: 'pdfFormat',
        type: 'options',
        default: 'binary',
        description: 'Format for PDF output - binary data (for file operations) or base64 string (for storage/APIs)',
        options: [
            {
                name: 'Binary Data',
                value: 'binary',
                description: 'Store as n8n binary data (standard for file handling)'
            },
            {
                name: 'Base64 String',
                value: 'base64',
                description: 'Store as base64 string in JSON (for storage/APIs)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['invoices'],
                operation: ['invoices:list'],
                downloadPDFs: [true]
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
                resource: ['invoices'],
                operation: ['invoices:list'],
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
                resource: ['invoices'],
                operation: ['invoices:list'],
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
                resource: ['invoices'],
                operation: ['invoices:list'],
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
                        default: 'customerCode',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Customer Code',
                                value: 'customerCode'
                            },
                            {
                                name: 'Customer Ref',
                                value: 'customerRef'
                            },
                            {
                                name: 'Depot',
                                value: 'depot'
                            },
                            {
                                name: 'External Order Ref',
                                value: 'externalOrderRef'
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
                                name: 'Invoice Date',
                                value: 'invoiceDate'
                            },
                            {
                                name: 'Invoice Number',
                                value: 'invoiceNumber'
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
                                name: 'Order ID',
                                value: 'orderID'
                            },
                            {
                                name: 'Order Number',
                                value: 'orderNumber'
                            },
                            {
                                name: 'Order Type',
                                value: 'orderType'
                            },
                            {
                                name: 'Rep Code',
                                value: 'repCode'
                            },
                            {
                                name: 'Timeout',
                                value: 'timeout'
                            },
                            {
                                name: 'Total Value',
                                value: 'totalValue'
                            },
                            {
                                name: 'Week Number',
                                value: 'weekNumber'
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
                resource: ['invoices'],
                operation: ['invoices:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Customer Code',
        name: 'customerCode',
        type: 'string',
        default: '',
        description: 'Customer Code (=)',
        placeholder: '100002',
        displayOptions: {
            show: {
                resource: ['invoices'],
                operation: ['invoices:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Rep Code',
        name: 'repCode',
        type: 'string',
        default: '',
        description: 'Rep Code (=)',
        placeholder: '100',
        displayOptions: {
            show: {
                resource: ['invoices'],
                operation: ['invoices:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Head Office',
        name: 'headOffice',
        type: 'string',
        default: '',
        description: 'Company, ledger and head office account code (=)',
        placeholder: 'cap,100,100002',
        displayOptions: {
            show: {
                resource: ['invoices'],
                operation: ['invoices:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Depot',
        name: 'depot',
        type: 'string',
        default: '',
        description: 'Depot (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'a01',
        displayOptions: {
            show: {
                resource: ['invoices'],
                operation: ['invoices:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Invoice Number',
        name: 'invoiceNumber',
        type: 'number',
        default: '',
        description: 'Invoice Number (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        typeOptions: {
            minValue: 0
        },
        placeholder: '13141',
        displayOptions: {
            show: {
                resource: ['invoices'],
                operation: ['invoices:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Invoice Date',
        name: 'invoiceDate',
        type: 'string',
        default: '',
        description: 'Invoice Date (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        placeholder: '2020-03-17',
        displayOptions: {
            show: {
                resource: ['invoices'],
                operation: ['invoices:list'],
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
                resource: ['invoices'],
                operation: ['invoices:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Order Number',
        name: 'orderNumber',
        type: 'number',
        default: '',
        description: 'Order no. (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE).',
        typeOptions: {
            minValue: 0
        },
        placeholder: '13141',
        displayOptions: {
            show: {
                resource: ['invoices'],
                operation: ['invoices:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Order Type',
        name: 'orderType',
        type: 'number',
        default: '',
        description: 'Order type (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        typeOptions: {
            minValue: 0
        },
        placeholder: '1',
        displayOptions: {
            show: {
                resource: ['invoices'],
                operation: ['invoices:list'],
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
        placeholder: 'depot,-invoiceNumber',
        options: [
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
                name: 'Customer Ref (Ascending)',
                value: 'customerRef',
                description: 'Sort by Customer Ref in ascending order'
            },
            {
                name: 'Customer Ref (Descending)',
                value: '-customerRef',
                description: 'Sort by Customer Ref in descending order'
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
                name: 'External Order Ref (Ascending)',
                value: 'externalOrderRef',
                description: 'Sort by External Order Ref in ascending order'
            },
            {
                name: 'External Order Ref (Descending)',
                value: '-externalOrderRef',
                description: 'Sort by External Order Ref in descending order'
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
                name: 'Invoice Date (Ascending)',
                value: 'invoiceDate',
                description: 'Sort by Invoice Date in ascending order'
            },
            {
                name: 'Invoice Date (Descending)',
                value: '-invoiceDate',
                description: 'Sort by Invoice Date in descending order'
            },
            {
                name: 'Invoice Number (Ascending)',
                value: 'invoiceNumber',
                description: 'Sort by Invoice Number in ascending order'
            },
            {
                name: 'Invoice Number (Descending)',
                value: '-invoiceNumber',
                description: 'Sort by Invoice Number in descending order'
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
                name: 'Order ID (Ascending)',
                value: 'orderID',
                description: 'Sort by Order ID in ascending order'
            },
            {
                name: 'Order ID (Descending)',
                value: '-orderID',
                description: 'Sort by Order ID in descending order'
            },
            {
                name: 'Order Number (Ascending)',
                value: 'orderNumber',
                description: 'Sort by Order Number in ascending order'
            },
            {
                name: 'Order Number (Descending)',
                value: '-orderNumber',
                description: 'Sort by Order Number in descending order'
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
                name: 'Total Value (Ascending)',
                value: 'totalValue',
                description: 'Sort by Total Value in ascending order'
            },
            {
                name: 'Total Value (Descending)',
                value: '-totalValue',
                description: 'Sort by Total Value in descending order'
            },
            {
                name: 'Week Number (Ascending)',
                value: 'weekNumber',
                description: 'Sort by Week Number in ascending order'
            },
            {
                name: 'Week Number (Descending)',
                value: '-weekNumber',
                description: 'Sort by Week Number in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['invoices'],
                operation: ['invoices:list'],
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
                resource: ['invoices'],
                operation: ['invoices:list'],
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
                name: 'Customer Code',
                value: 'customerCode',
                description: 'Include customer code in the response'
            },
            {
                name: 'Customer Ref',
                value: 'customerRef',
                description: 'Include customer ref in the response'
            },
            {
                name: 'Delivery Date',
                value: 'deliveryDate',
                description: 'Include delivery date in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'External Order Ref',
                value: 'externalOrderRef',
                description: 'Include external order ref in the response'
            },
            {
                name: 'Invoice Date',
                value: 'invoiceDate',
                description: 'Include invoice date in the response'
            },
            {
                name: 'Invoice Number',
                value: 'invoiceNumber',
                description: 'Include invoice number in the response'
            },
            {
                name: 'Invoice PDF',
                value: 'invoicePDF',
                description: 'Include invoice pdf in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Order ID',
                value: 'orderID',
                description: 'Include order ID in the response'
            },
            {
                name: 'Order Number',
                value: 'orderNumber',
                description: 'Include order number in the response'
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
                name: 'Total Value',
                value: 'totalValue',
                description: 'Include total value in the response'
            },
            {
                name: 'Week Number',
                value: 'weekNumber',
                description: 'Include week number in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['invoices'],
                operation: ['invoices:list'],
                filterMode: ['common']
            },
            hide: {
                downloadPDFs: [true]
            }
        }
    }
];
