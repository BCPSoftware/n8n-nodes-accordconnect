import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0006 - 24/08/26 - do not edit by hand

export const salesTransactionsOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['salesTransactions'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'salesTransactions:get',
                description: 'Get a salesTransaction',
                action: 'Get a sales transaction'
            },
            {
                name: 'List',
                value: 'salesTransactions:list',
                description: 'List many salesTransactions',
                action: 'List many sales transactions'
            },
        ],
        default: 'salesTransactions:get',
    },
];


export const salesTransactionsReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the salesTransaction',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['salesTransactions'],
                operation: ['salesTransactions:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'companyCode,ledgerCode,batchRef,slCode',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Age Date',
                value: 'ageDate',
                description: 'Include age date in the response'
            },
            {
                name: 'Batch Ref',
                value: 'batchRef',
                description: 'Include batch ref in the response'
            },
            {
                name: 'Branch Code',
                value: 'branchCode',
                description: 'Include branch code in the response'
            },
            {
                name: 'Can Pay By Card',
                value: 'canPayByCard',
                description: 'Include can pay by card in the response'
            },
            {
                name: 'Company Code',
                value: 'companyCode',
                description: 'Include company code in the response'
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
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Discount Date',
                value: 'discountDate',
                description: 'Include discount date in the response'
            },
            {
                name: 'Discount Value',
                value: 'discountValue',
                description: 'Include discount value in the response'
            },
            {
                name: 'Document Ref',
                value: 'documentRef',
                description: 'Include document ref in the response'
            },
            {
                name: 'Document Type',
                value: 'documentType',
                description: 'Include document type in the response'
            },
            {
                name: 'Due Date',
                value: 'dueDate',
                description: 'Include due date in the response'
            },
            {
                name: 'External Order Ref',
                value: 'externalOrderRef',
                description: 'Include external order ref in the response'
            },
            {
                name: 'Head Code',
                value: 'headCode',
                description: 'Include head code in the response'
            },
            {
                name: 'Invoice Number',
                value: 'invoiceNumber',
                description: 'Include invoice number in the response'
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
                name: 'Outstanding Value',
                value: 'outstandingValue',
                description: 'Include outstanding value in the response'
            },
            {
                name: 'Paid Amount',
                value: 'paidAmount',
                description: 'Include paid amount in the response'
            },
            {
                name: 'Paid Date',
                value: 'paidDate',
                description: 'Include paid date in the response'
            },
            {
                name: 'Pay Type',
                value: 'payType',
                description: 'Include pay type in the response'
            },
            {
                name: 'Sl Code',
                value: 'slCode',
                description: 'Include sl code in the response'
            },
            {
                name: 'Statement Number',
                value: 'statementNumber',
                description: 'Include statement number in the response'
            },
            {
                name: 'Status',
                value: 'status',
                description: 'Include status in the response'
            },
            {
                name: 'Terms Code',
                value: 'termsCode',
                description: 'Include terms code in the response'
            },
            {
                name: 'Total Value',
                value: 'totalValue',
                description: 'Include total value in the response'
            },
            {
                name: 'Transaction Date',
                value: 'transactionDate',
                description: 'Include transaction date in the response'
            },
            {
                name: 'Vat Value',
                value: 'vatValue',
                description: 'Include vat value in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['salesTransactions'],
                operation: ['salesTransactions:get']
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
                resource: ['salesTransactions'],
                operation: ['salesTransactions:get']
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
                resource: ['salesTransactions'],
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
                resource: ['salesTransactions'],
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
                resource: ['salesTransactions'],
                operation: ['get']
            }
        }
    }
];

export const salesTransactionsListFields: INodeProperties[] = [
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
                resource: ['salesTransactions'],
                operation: ['salesTransactions:list']
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
                resource: ['salesTransactions'],
                operation: ['salesTransactions:list'],
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
                resource: ['salesTransactions'],
                operation: ['salesTransactions:list'],
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
                resource: ['salesTransactions'],
                operation: ['salesTransactions:list'],
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
                        default: 'ageDate',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Age Date',
                                value: 'ageDate'
                            },
                            {
                                name: 'Batch Ref',
                                value: 'batchRef'
                            },
                            {
                                name: 'Branch Code',
                                value: 'branchCode'
                            },
                            {
                                name: 'Company Code',
                                value: 'companyCode'
                            },
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
                                name: 'Discount Date',
                                value: 'discountDate'
                            },
                            {
                                name: 'Discount Value',
                                value: 'discountValue'
                            },
                            {
                                name: 'Document Ref',
                                value: 'documentRef'
                            },
                            {
                                name: 'Document Type',
                                value: 'documentType'
                            },
                            {
                                name: 'Due Date',
                                value: 'dueDate'
                            },
                            {
                                name: 'External Order Ref',
                                value: 'externalOrderRef'
                            },
                            {
                                name: 'Head Code',
                                value: 'headCode'
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
                                name: 'Invoice Number',
                                value: 'invoiceNumber'
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
                                name: 'Outstanding Value',
                                value: 'outstandingValue'
                            },
                            {
                                name: 'Paid Amount',
                                value: 'paidAmount'
                            },
                            {
                                name: 'Paid Date',
                                value: 'paidDate'
                            },
                            {
                                name: 'Pay Type',
                                value: 'payType'
                            },
                            {
                                name: 'Rep Code',
                                value: 'repCode'
                            },
                            {
                                name: 'Sl Code',
                                value: 'slCode'
                            },
                            {
                                name: 'Statement Number',
                                value: 'statementNumber'
                            },
                            {
                                name: 'Status',
                                value: 'status'
                            },
                            {
                                name: 'Terms Code',
                                value: 'termsCode'
                            },
                            {
                                name: 'Timeout',
                                value: 'timeout'
                            },
                            {
                                name: 'Transaction Date',
                                value: 'transactionDate'
                            },
                            {
                                name: 'Vat Value',
                                value: 'vatValue'
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
                resource: ['salesTransactions'],
                operation: ['salesTransactions:list'],
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
                resource: ['salesTransactions'],
                operation: ['salesTransactions:list'],
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
                resource: ['salesTransactions'],
                operation: ['salesTransactions:list'],
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
                resource: ['salesTransactions'],
                operation: ['salesTransactions:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Document Type',
        name: 'documentType',
        type: 'multiOptions',
        default: [],
        description: 'Document Type (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        options: [
            {
                name: 'BankDoc',
                value: 'b:BankDoc',
                description: 'BankDoc (code: b)'
            },
            {
                name: 'CancelledPayment',
                value: 'u:CancelledPayment',
                description: 'CancelledPayment (code: u)'
            },
            {
                name: 'Credit',
                value: 'c:Credit',
                description: 'Credit (code: c)'
            },
            {
                name: 'Debit',
                value: 'd:Debit',
                description: 'Debit (code: d)'
            },
            {
                name: 'Invoice',
                value: 'i:Invoice',
                description: 'Invoice (code: i)'
            },
            {
                name: 'Payment',
                value: 'p:Payment',
                description: 'Payment (code: p)'
            }
        ],
        placeholder: 'i:Invoice',
        displayOptions: {
            show: {
                resource: ['salesTransactions'],
                operation: ['salesTransactions:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Document Ref',
        name: 'documentRef',
        type: 'string',
        default: '',
        description: 'Reference (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: '3628',
        displayOptions: {
            show: {
                resource: ['salesTransactions'],
                operation: ['salesTransactions:list'],
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
                resource: ['salesTransactions'],
                operation: ['salesTransactions:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Transaction Date',
        name: 'transactionDate',
        type: 'string',
        default: '',
        description: 'Document Date (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        placeholder: '2020-08-01',
        displayOptions: {
            show: {
                resource: ['salesTransactions'],
                operation: ['salesTransactions:list'],
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
        placeholder: 'companyCode,-ledgerCode',
        options: [
            {
                name: 'Age Date (Ascending)',
                value: 'ageDate',
                description: 'Sort by Age Date in ascending order'
            },
            {
                name: 'Age Date (Descending)',
                value: '-ageDate',
                description: 'Sort by Age Date in descending order'
            },
            {
                name: 'Batch Ref (Ascending)',
                value: 'batchRef',
                description: 'Sort by Batch Ref in ascending order'
            },
            {
                name: 'Batch Ref (Descending)',
                value: '-batchRef',
                description: 'Sort by Batch Ref in descending order'
            },
            {
                name: 'Branch Code (Ascending)',
                value: 'branchCode',
                description: 'Sort by Branch Code in ascending order'
            },
            {
                name: 'Branch Code (Descending)',
                value: '-branchCode',
                description: 'Sort by Branch Code in descending order'
            },
            {
                name: 'Company Code (Ascending)',
                value: 'companyCode',
                description: 'Sort by Company Code in ascending order'
            },
            {
                name: 'Company Code (Descending)',
                value: '-companyCode',
                description: 'Sort by Company Code in descending order'
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
                name: 'Discount Date (Ascending)',
                value: 'discountDate',
                description: 'Sort by Discount Date in ascending order'
            },
            {
                name: 'Discount Date (Descending)',
                value: '-discountDate',
                description: 'Sort by Discount Date in descending order'
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
                name: 'Document Ref (Ascending)',
                value: 'documentRef',
                description: 'Sort by Document Ref in ascending order'
            },
            {
                name: 'Document Ref (Descending)',
                value: '-documentRef',
                description: 'Sort by Document Ref in descending order'
            },
            {
                name: 'Document Type (Ascending)',
                value: 'documentType',
                description: 'Sort by Document Type in ascending order'
            },
            {
                name: 'Document Type (Descending)',
                value: '-documentType',
                description: 'Sort by Document Type in descending order'
            },
            {
                name: 'Due Date (Ascending)',
                value: 'dueDate',
                description: 'Sort by Due Date in ascending order'
            },
            {
                name: 'Due Date (Descending)',
                value: '-dueDate',
                description: 'Sort by Due Date in descending order'
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
                name: 'Head Code (Ascending)',
                value: 'headCode',
                description: 'Sort by Head Code in ascending order'
            },
            {
                name: 'Head Code (Descending)',
                value: '-headCode',
                description: 'Sort by Head Code in descending order'
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
                name: 'Outstanding Value (Ascending)',
                value: 'outstandingValue',
                description: 'Sort by Outstanding Value in ascending order'
            },
            {
                name: 'Outstanding Value (Descending)',
                value: '-outstandingValue',
                description: 'Sort by Outstanding Value in descending order'
            },
            {
                name: 'Paid Amount (Ascending)',
                value: 'paidAmount',
                description: 'Sort by Paid Amount in ascending order'
            },
            {
                name: 'Paid Amount (Descending)',
                value: '-paidAmount',
                description: 'Sort by Paid Amount in descending order'
            },
            {
                name: 'Paid Date (Ascending)',
                value: 'paidDate',
                description: 'Sort by Paid Date in ascending order'
            },
            {
                name: 'Paid Date (Descending)',
                value: '-paidDate',
                description: 'Sort by Paid Date in descending order'
            },
            {
                name: 'Pay Type (Ascending)',
                value: 'payType',
                description: 'Sort by Pay Type in ascending order'
            },
            {
                name: 'Pay Type (Descending)',
                value: '-payType',
                description: 'Sort by Pay Type in descending order'
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
                name: 'Sl Code (Ascending)',
                value: 'slCode',
                description: 'Sort by Sl Code in ascending order'
            },
            {
                name: 'Sl Code (Descending)',
                value: '-slCode',
                description: 'Sort by Sl Code in descending order'
            },
            {
                name: 'Statement Number (Ascending)',
                value: 'statementNumber',
                description: 'Sort by Statement Number in ascending order'
            },
            {
                name: 'Statement Number (Descending)',
                value: '-statementNumber',
                description: 'Sort by Statement Number in descending order'
            },
            {
                name: 'Status (Ascending)',
                value: 'status',
                description: 'Sort by Status in ascending order'
            },
            {
                name: 'Status (Descending)',
                value: '-status',
                description: 'Sort by Status in descending order'
            },
            {
                name: 'Terms Code (Ascending)',
                value: 'termsCode',
                description: 'Sort by Terms Code in ascending order'
            },
            {
                name: 'Terms Code (Descending)',
                value: '-termsCode',
                description: 'Sort by Terms Code in descending order'
            },
            {
                name: 'Transaction Date (Ascending)',
                value: 'transactionDate',
                description: 'Sort by Transaction Date in ascending order'
            },
            {
                name: 'Transaction Date (Descending)',
                value: '-transactionDate',
                description: 'Sort by Transaction Date in descending order'
            },
            {
                name: 'Vat Value (Ascending)',
                value: 'vatValue',
                description: 'Sort by Vat Value in ascending order'
            },
            {
                name: 'Vat Value (Descending)',
                value: '-vatValue',
                description: 'Sort by Vat Value in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['salesTransactions'],
                operation: ['salesTransactions:list'],
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
                resource: ['salesTransactions'],
                operation: ['salesTransactions:list'],
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
                name: 'Age Date',
                value: 'ageDate',
                description: 'Include age date in the response'
            },
            {
                name: 'Batch Ref',
                value: 'batchRef',
                description: 'Include batch ref in the response'
            },
            {
                name: 'Branch Code',
                value: 'branchCode',
                description: 'Include branch code in the response'
            },
            {
                name: 'Can Pay By Card',
                value: 'canPayByCard',
                description: 'Include can pay by card in the response'
            },
            {
                name: 'Company Code',
                value: 'companyCode',
                description: 'Include company code in the response'
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
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Discount Date',
                value: 'discountDate',
                description: 'Include discount date in the response'
            },
            {
                name: 'Discount Value',
                value: 'discountValue',
                description: 'Include discount value in the response'
            },
            {
                name: 'Document Ref',
                value: 'documentRef',
                description: 'Include document ref in the response'
            },
            {
                name: 'Document Type',
                value: 'documentType',
                description: 'Include document type in the response'
            },
            {
                name: 'Due Date',
                value: 'dueDate',
                description: 'Include due date in the response'
            },
            {
                name: 'External Order Ref',
                value: 'externalOrderRef',
                description: 'Include external order ref in the response'
            },
            {
                name: 'Head Code',
                value: 'headCode',
                description: 'Include head code in the response'
            },
            {
                name: 'Invoice Number',
                value: 'invoiceNumber',
                description: 'Include invoice number in the response'
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
                name: 'Outstanding Value',
                value: 'outstandingValue',
                description: 'Include outstanding value in the response'
            },
            {
                name: 'Paid Amount',
                value: 'paidAmount',
                description: 'Include paid amount in the response'
            },
            {
                name: 'Paid Date',
                value: 'paidDate',
                description: 'Include paid date in the response'
            },
            {
                name: 'Pay Type',
                value: 'payType',
                description: 'Include pay type in the response'
            },
            {
                name: 'Sl Code',
                value: 'slCode',
                description: 'Include sl code in the response'
            },
            {
                name: 'Statement Number',
                value: 'statementNumber',
                description: 'Include statement number in the response'
            },
            {
                name: 'Status',
                value: 'status',
                description: 'Include status in the response'
            },
            {
                name: 'Terms Code',
                value: 'termsCode',
                description: 'Include terms code in the response'
            },
            {
                name: 'Total Value',
                value: 'totalValue',
                description: 'Include total value in the response'
            },
            {
                name: 'Transaction Date',
                value: 'transactionDate',
                description: 'Include transaction date in the response'
            },
            {
                name: 'Vat Value',
                value: 'vatValue',
                description: 'Include vat value in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['salesTransactions'],
                operation: ['salesTransactions:list'],
                filterMode: ['common']
            }
        }
    }
];
