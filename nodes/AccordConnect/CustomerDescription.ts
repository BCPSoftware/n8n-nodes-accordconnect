import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0007 - 25/08/26 - do not edit by hand

export const customersOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['customers'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'customers:create',
                description: 'Create a customer',
                action: 'Create a customer'
            },
            {
                name: 'Get',
                value: 'customers:get',
                description: 'Get a customer',
                action: 'Get a customer'
            },
            {
                name: 'List',
                value: 'customers:list',
                description: 'List many customers',
                action: 'List many customers'
            },
            {
                name: 'Update',
                value: 'customers:update',
                description: 'Update a customer',
                action: 'Update a customer'
            },
        ],
        default: 'customers:create',
    },
];


export const customersReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the customer',
        required: true,
        placeholder: 'e.g. 10001',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'customerCode,lastUpdate,customerStatus,ccDelBoth',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Accept Substitutes',
                value: 'acceptSubstitutes',
                description: 'Include accept substitutes in the response'
            },
            {
                name: 'Access Control ID',
                value: 'accessControlID',
                description: 'Include access control ID in the response'
            },
            {
                name: 'Account Type',
                value: 'accountType',
                description: 'Include account type in the response'
            },
            {
                name: 'Account Type Desc',
                value: 'accountTypeDesc',
                description: 'Include account type desc in the response'
            },
            {
                name: 'Allocation Category',
                value: 'allocationCategory',
                description: 'Include allocation category in the response'
            },
            {
                name: 'Area Code',
                value: 'areaCode',
                description: 'Include area code in the response'
            },
            {
                name: 'Area Name',
                value: 'areaName',
                description: 'Include area name in the response'
            },
            {
                name: 'Average Weekly Spend',
                value: 'averageWeeklySpend',
                description: 'Include average weekly spend in the response'
            },
            {
                name: 'Back Orders',
                value: 'backOrders',
                description: 'Include back orders in the response'
            },
            {
                name: 'Bonded',
                value: 'bonded',
                description: 'Include bonded in the response'
            },
            {
                name: 'Cc Checkout Prices',
                value: 'ccCheckoutPrices',
                description: 'Include cc checkout prices in the response'
            },
            {
                name: 'Cc Del Both',
                value: 'ccDelBoth',
                description: 'Include cc del both in the response'
            },
            {
                name: 'Cc Max Cheque',
                value: 'ccMaxCheque',
                description: 'Include cc max cheque in the response'
            },
            {
                name: 'Cc No Signature',
                value: 'ccNoSignature',
                description: 'Include cc no signature in the response'
            },
            {
                name: 'Cc Price Matrix',
                value: 'ccPriceMatrix',
                description: 'Include cc price matrix in the response'
            },
            {
                name: 'Cc Surch Indicator',
                value: 'ccSurchIndicator',
                description: 'Include cc surch indicator in the response'
            },
            {
                name: 'Central Credit Balance',
                value: 'centralCreditBalance',
                description: 'Include central credit balance in the response'
            },
            {
                name: 'Central Credit Limit',
                value: 'centralCreditLimit',
                description: 'Include central credit limit in the response'
            },
            {
                name: 'Comment1',
                value: 'comment1',
                description: 'Include comment1 in the response'
            },
            {
                name: 'Comment2',
                value: 'comment2',
                description: 'Include comment2 in the response'
            },
            {
                name: 'Comment3',
                value: 'comment3',
                description: 'Include comment3 in the response'
            },
            {
                name: 'Comment4',
                value: 'comment4',
                description: 'Include comment4 in the response'
            },
            {
                name: 'Comment5',
                value: 'comment5',
                description: 'Include comment5 in the response'
            },
            {
                name: 'Company Code',
                value: 'companyCode',
                description: 'Include company code in the response'
            },
            {
                name: 'Contact',
                value: 'contact',
                description: 'Include contact in the response'
            },
            {
                name: 'Contract Only',
                value: 'contractOnly',
                description: 'Include contract only in the response'
            },
            {
                name: 'Contract Prices',
                value: 'contractPrices',
                description: 'Include contract prices in the response'
            },
            {
                name: 'Core Range',
                value: 'coreRange',
                description: 'Include core range in the response'
            },
            {
                name: 'Country Code',
                value: 'countryCode',
                description: 'Include country code in the response'
            },
            {
                name: 'Credit Balance',
                value: 'creditBalance',
                description: 'Include credit balance in the response'
            },
            {
                name: 'Credit Limit',
                value: 'creditLimit',
                description: 'Include credit limit in the response'
            },
            {
                name: 'Credit Overdue',
                value: 'creditOverdue',
                description: 'Include credit overdue in the response'
            },
            {
                name: 'Credit Status',
                value: 'creditStatus',
                description: 'Include credit status in the response'
            },
            {
                name: 'Currency Code',
                value: 'currencyCode',
                description: 'Include currency code in the response'
            },
            {
                name: 'Customer ANA',
                value: 'customerANA',
                description: 'Include customer ana in the response'
            },
            {
                name: 'Customer Code',
                value: 'customerCode',
                description: 'Include customer code in the response'
            },
            {
                name: 'Customer Discount',
                value: 'customerDiscount',
                description: 'Include customer discount in the response'
            },
            {
                name: 'Customer Group',
                value: 'customerGroup',
                description: 'Include customer group in the response'
            },
            {
                name: 'Customer Name',
                value: 'customerName',
                description: 'Include customer name in the response'
            },
            {
                name: 'Customer Order Ref',
                value: 'customerOrderRef',
                description: 'Include customer order ref in the response'
            },
            {
                name: 'Customer Product Code',
                value: 'customerProductCode',
                description: 'Include customer product code in the response'
            },
            {
                name: 'Customer Status',
                value: 'customerStatus',
                description: 'Include customer status in the response'
            },
            {
                name: 'Customer Type',
                value: 'customerType',
                description: 'Include customer type in the response'
            },
            {
                name: 'Customer Type Desc',
                value: 'customerTypeDesc',
                description: 'Include customer type desc in the response'
            },
            {
                name: 'Delivery Address1',
                value: 'deliveryAddress1',
                description: 'Include delivery address1 in the response'
            },
            {
                name: 'Delivery Address2',
                value: 'deliveryAddress2',
                description: 'Include delivery address2 in the response'
            },
            {
                name: 'Delivery Address3',
                value: 'deliveryAddress3',
                description: 'Include delivery address3 in the response'
            },
            {
                name: 'Delivery Address4',
                value: 'deliveryAddress4',
                description: 'Include delivery address4 in the response'
            },
            {
                name: 'Delivery Address5',
                value: 'deliveryAddress5',
                description: 'Include delivery address5 in the response'
            },
            {
                name: 'Delivery Postcode',
                value: 'deliveryPostcode',
                description: 'Include delivery postcode in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Depot Name',
                value: 'depotName',
                description: 'Include depot name in the response'
            },
            {
                name: 'Destination ID',
                value: 'destinationID',
                description: 'Include destination ID in the response'
            },
            {
                name: 'Drop No',
                value: 'dropNo',
                description: 'Include drop no in the response'
            },
            {
                name: 'Drs Exempt',
                value: 'drsExempt',
                description: 'Include drs exempt in the response'
            },
            {
                name: 'Economic Operator ID',
                value: 'economicOperatorID',
                description: 'Include economic operator ID in the response'
            },
            {
                name: 'Email',
                value: 'email',
                description: 'Include email in the response'
            },
            {
                name: 'Entry Type',
                value: 'entryType',
                description: 'Include entry type in the response'
            },
            {
                name: 'Facility ID',
                value: 'facilityID',
                description: 'Include facility ID in the response'
            },
            {
                name: 'Head Office',
                value: 'headOffice',
                description: 'Include head office in the response'
            },
            {
                name: 'Head Sub Branch',
                value: 'headSubBranch',
                description: 'Include head sub branch in the response'
            },
            {
                name: 'Immediate Credit Release',
                value: 'immediateCreditRelease',
                description: 'Include immediate credit release in the response'
            },
            {
                name: 'Invoice Address1',
                value: 'invoiceAddress1',
                description: 'Include invoice address1 in the response'
            },
            {
                name: 'Invoice Address2',
                value: 'invoiceAddress2',
                description: 'Include invoice address2 in the response'
            },
            {
                name: 'Invoice Address3',
                value: 'invoiceAddress3',
                description: 'Include invoice address3 in the response'
            },
            {
                name: 'Invoice Address4',
                value: 'invoiceAddress4',
                description: 'Include invoice address4 in the response'
            },
            {
                name: 'Invoice Address5',
                value: 'invoiceAddress5',
                description: 'Include invoice address5 in the response'
            },
            {
                name: 'Invoice Msg',
                value: 'invoiceMsg',
                description: 'Include invoice msg in the response'
            },
            {
                name: 'Invoice Postcode',
                value: 'invoicePostcode',
                description: 'Include invoice postcode in the response'
            },
            {
                name: 'Invoice Splits',
                value: 'invoiceSplits',
                description: 'Include invoice splits in the response'
            },
            {
                name: 'Item Code Used',
                value: 'itemCodeUsed',
                description: 'Include item code used in the response'
            },
            {
                name: 'Last Call',
                value: 'lastCall',
                description: 'Include last call in the response'
            },
            {
                name: 'Last Order',
                value: 'lastOrder',
                description: 'Include last order in the response'
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
                name: 'Liquor Licensing',
                value: 'liquorLicensing',
                description: 'Include liquor licensing in the response'
            },
            {
                name: 'Model Range',
                value: 'modelRange',
                description: 'Include model range in the response'
            },
            {
                name: 'National Product Codes',
                value: 'nationalProductCodes',
                description: 'Include national product codes in the response'
            },
            {
                name: 'Offer Code',
                value: 'offerCode',
                description: 'Include offer code in the response'
            },
            {
                name: 'Offer Type',
                value: 'offerType',
                description: 'Include offer type in the response'
            },
            {
                name: 'Operator Code',
                value: 'operatorCode',
                description: 'Include operator code in the response'
            },
            {
                name: 'Operator Name',
                value: 'operatorName',
                description: 'Include operator name in the response'
            },
            {
                name: 'Oporteo',
                value: 'oporteo',
                description: 'Include oporteo in the response'
            },
            {
                name: 'Ordering Depot',
                value: 'orderingDepot',
                description: 'Include ordering depot in the response'
            },
            {
                name: 'Organisation ANA',
                value: 'organisationANA',
                description: 'Include organisation ana in the response'
            },
            {
                name: 'Other Merge Limit',
                value: 'otherMergeLimit',
                description: 'Include other merge limit in the response'
            },
            {
                name: 'Over Split Surcharge',
                value: 'overSplitSurcharge',
                description: 'Include over split surcharge in the response'
            },
            {
                name: 'Phone No',
                value: 'phoneNo',
                description: 'Include phone no in the response'
            },
            {
                name: 'Picking Msg',
                value: 'pickingMsg',
                description: 'Include picking msg in the response'
            },
            {
                name: 'Pickup Method',
                value: 'pickupMethod',
                description: 'Include pickup method in the response'
            },
            {
                name: 'Plof Type',
                value: 'plofType',
                description: 'Include plof type in the response'
            },
            {
                name: 'Preferred Stock Depot',
                value: 'preferredStockDepot',
                description: 'Include preferred stock depot in the response'
            },
            {
                name: 'Price By Date',
                value: 'priceByDate',
                description: 'Include price by date in the response'
            },
            {
                name: 'Price Depot',
                value: 'priceDepot',
                description: 'Include price depot in the response'
            },
            {
                name: 'Price Logging',
                value: 'PriceLogging',
                description: 'Include price logging in the response'
            },
            {
                name: 'Price Matrix',
                value: 'priceMatrix',
                description: 'Include price matrix in the response'
            },
            {
                name: 'Primary Merge Limit',
                value: 'primaryMergeLimit',
                description: 'Include primary merge limit in the response'
            },
            {
                name: 'Private Email',
                value: 'privateEmail',
                description: 'Include private email in the response'
            },
            {
                name: 'Private Phone No',
                value: 'privatePhoneNo',
                description: 'Include private phone no in the response'
            },
            {
                name: 'Product Code',
                value: 'productCode',
                description: 'Include product code in the response'
            },
            {
                name: 'Proprietor',
                value: 'proprietor',
                description: 'Include proprietor in the response'
            },
            {
                name: 'Real Time Balance',
                value: 'realTimeBalance',
                description: 'Include real time balance in the response'
            },
            {
                name: 'Reasonable Qty',
                value: 'reasonableQty',
                description: 'Include reasonable qty in the response'
            },
            {
                name: 'Registered',
                value: 'registered',
                description: 'Include registered in the response'
            },
            {
                name: 'Registered Depot',
                value: 'registeredDepot',
                description: 'Include registered depot in the response'
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
                name: 'Retain Split Price',
                value: 'retainSplitPrice',
                description: 'Include retain split price in the response'
            },
            {
                name: 'Route',
                value: 'route',
                description: 'Include route in the response'
            },
            {
                name: 'Sales Value',
                value: 'salesValue',
                description: 'Include sales value in the response'
            },
            {
                name: 'Salutation',
                value: 'salutation',
                description: 'Include salutation in the response'
            },
            {
                name: 'Scheme Type',
                value: 'schemeType',
                description: 'Include scheme type in the response'
            },
            {
                name: 'Seasonal Closure',
                value: 'seasonalClosure',
                description: 'Include seasonal closure in the response'
            },
            {
                name: 'Seasonal Reopen Date',
                value: 'seasonalReopenDate',
                description: 'Include seasonal reopen date in the response'
            },
            {
                name: 'Short Name',
                value: 'shortName',
                description: 'Include short name in the response'
            },
            {
                name: 'Sl Code',
                value: 'slCode',
                description: 'Include sl code in the response'
            },
            {
                name: 'Split Surcharge',
                value: 'splitSurcharge',
                description: 'Include split surcharge in the response'
            },
            {
                name: 'Subs Policy',
                value: 'subsPolicy',
                description: 'Include subs policy in the response'
            },
            {
                name: 'Subscription Balance',
                value: 'subscriptionBalance',
                description: 'Include subscription balance in the response'
            },
            {
                name: 'Telesales Notes',
                value: 'telesalesNotes',
                description: 'Include telesales notes in the response'
            },
            {
                name: 'Term Code',
                value: 'termCode',
                description: 'Include term code in the response'
            },
            {
                name: 'Term Description',
                value: 'termDescription',
                description: 'Include term description in the response'
            },
            {
                name: 'Title',
                value: 'title',
                description: 'Include title in the response'
            },
            {
                name: 'Turnover',
                value: 'turnover',
                description: 'Include turnover in the response'
            },
            {
                name: 'Vat Reg No',
                value: 'vatRegNo',
                description: 'Include vat reg no in the response'
            },
            {
                name: 'Vatable',
                value: 'vatable',
                description: 'Include vatable in the response'
            },
            {
                name: 'View Statements',
                value: 'viewStatements',
                description: 'Include view statements in the response'
            },
            {
                name: 'View Transactions',
                value: 'viewTransactions',
                description: 'Include view transactions in the response'
            },
            {
                name: 'Week',
                value: 'week',
                description: 'Include week in the response'
            },
            {
                name: 'Week Sequence',
                value: 'weekSequence',
                description: 'Include week sequence in the response'
            },
            {
                name: 'What3words',
                value: 'what3words',
                description: 'Include what3words in the response'
            },
            {
                name: 'Which Price',
                value: 'whichPrice',
                description: 'Include which price in the response'
            },
            {
                name: 'Year To Date Sales Last Year',
                value: 'yearToDateSalesLastYear',
                description: 'Include year to date sales last year in the response'
            },
            {
                name: 'Year To Date Sales This Year',
                value: 'yearToDateSalesThisYear',
                description: 'Include year to date sales this year in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:get']
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
                resource: ['customers'],
                operation: ['customers:get']
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
                resource: ['customers'],
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
                resource: ['customers'],
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
                resource: ['customers'],
                operation: ['get']
            }
        }
    }
];

export const customersUpdateFields: INodeProperties[] = [
    {
        displayName: 'Customer Code',
        name: 'customerCode',
        type: 'string',
        default: '',
        description: 'The customer code value',
        required: true,
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Customer Status',
        name: 'customerStatus',
        type: 'options',
        default: 'c:Cancelled',
        description: 'Status',
        options: [
            {
                name: 'Cancelled',
                value: 'c:Cancelled',
                description: 'Cancelled (code: c)'
            },
            {
                name: 'Locked',
                value: 'l:Locked',
                description: 'Locked (code: l)'
            },
            {
                name: 'Prospective',
                value: 'p:Prospective',
                description: 'Prospective (code: p)'
            },
            {
                name: 'Registered',
                value: 'r:Registered',
                description: 'Registered (code: r)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Cc Del Both',
        name: 'ccDelBoth',
        type: 'options',
        default: 'b:Both',
        description: 'Delivered/Cash & Carry/Both',
        options: [
            {
                name: 'Both',
                value: 'b:Both',
                description: 'Both (code: b)'
            },
            {
                name: 'CashCarry',
                value: 'c:CashCarry',
                description: 'CashCarry (code: c)'
            },
            {
                name: 'Delivered',
                value: 'd:Delivered',
                description: 'Delivered (code: d)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Title',
        name: 'title',
        type: 'string',
        default: '',
        description: 'The title value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Customer Name',
        name: 'customerName',
        type: 'string',
        default: '',
        description: 'Name',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Short Name',
        name: 'shortName',
        type: 'string',
        default: '',
        description: 'The short name value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Salutation',
        name: 'salutation',
        type: 'string',
        default: '',
        description: 'The salutation value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Delivery Address1',
        name: 'deliveryAddress1',
        type: 'string',
        default: '',
        description: 'Delivery Address Line 1',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Delivery Address2',
        name: 'deliveryAddress2',
        type: 'string',
        default: '',
        description: 'Delivery Address Line 2',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Delivery Address3',
        name: 'deliveryAddress3',
        type: 'string',
        default: '',
        description: 'Delivery Address Line 3',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Delivery Address4',
        name: 'deliveryAddress4',
        type: 'string',
        default: '',
        description: 'Delivery Address Line 4',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Delivery Address5',
        name: 'deliveryAddress5',
        type: 'string',
        default: '',
        description: 'Delivery Address Line 5',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Delivery Postcode',
        name: 'deliveryPostcode',
        type: 'string',
        default: '',
        description: 'Delivery Post Code',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'What3words',
        name: 'what3words',
        type: 'string',
        default: '',
        description: 'What3Words Address (Optional)',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Phone No',
        name: 'phoneNo',
        type: 'string',
        default: '',
        description: 'Telephone Number',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Email',
        name: 'email',
        type: 'string',
        default: '',
        description: 'Email Address',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        },
        placeholder: 'name@email.com'
    },
    {
        displayName: 'Registered',
        name: 'registered',
        type: 'string',
        default: '',
        description: 'Date customer registered',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Registered Depot',
        name: 'registeredDepot',
        type: 'string',
        default: '',
        description: 'Depot Customer Registered at',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Proprietor',
        name: 'proprietor',
        type: 'string',
        default: '',
        description: 'Proprietors Name',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Contact',
        name: 'contact',
        type: 'string',
        default: '',
        description: 'The contact value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Rep Code',
        name: 'repCode',
        type: 'string',
        default: '',
        description: 'The rep code value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Area Code',
        name: 'areaCode',
        type: 'string',
        default: '',
        description: 'The area code value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Customer Type',
        name: 'customerType',
        type: 'string',
        default: '',
        description: 'The customer type value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Account Type',
        name: 'accountType',
        type: 'string',
        default: '',
        description: 'The account type value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Customer Group',
        name: 'customerGroup',
        type: 'string',
        default: '',
        description: 'Group Reference',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Sl Code',
        name: 'slCode',
        type: 'string',
        default: '',
        description: 'Sales Ledger Code',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Ledger Code',
        name: 'ledgerCode',
        type: 'string',
        default: '',
        description: 'The ledger code value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Vatable',
        name: 'vatable',
        type: 'boolean',
        default: false,
        description: 'Whether vAT',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Private Phone No',
        name: 'privatePhoneNo',
        type: 'string',
        default: '',
        description: 'Private Telephone Number',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Vat Reg No',
        name: 'vatRegNo',
        type: 'string',
        default: '',
        description: 'VAT Registration number',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Credit Status',
        name: 'creditStatus',
        type: 'string',
        default: '',
        description: 'Customer credit status',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Credit Limit',
        name: 'creditLimit',
        type: 'number',
        default: '',
        description: 'The credit limit value',
        typeOptions: {
            minValue: -999999.99
        },
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Cc Max Cheque',
        name: 'ccMaxCheque',
        type: 'number',
        default: '',
        description: 'Maximum C&C Cheque allowed',
        typeOptions: {
            minValue: -99999.99
        },
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Cc No Signature',
        name: 'ccNoSignature',
        type: 'number',
        default: '',
        description: 'Number of signatures required',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Payment Method',
        name: 'paymentMethod',
        type: 'string',
        default: '',
        description: 'Payment Methods',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Price Depot',
        name: 'priceDepot',
        type: 'string',
        default: '',
        description: 'DT Price Depot',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Which Price',
        name: 'whichPrice',
        type: 'options',
        default: 'c:Contract',
        description: 'The which price value',
        options: [
            {
                name: 'Contract',
                value: 'c:Contract',
                description: 'Contract (code: c)'
            },
            {
                name: 'Lower of Contract/Promotion',
                value: 'l:Lower of Contract/Promotion',
                description: 'Lower of Contract/Promotion (code: l)'
            },
            {
                name: 'Standard System Price',
                value: ':Standard System Price',
                description: 'Standard System Price (code: )'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Price Matrix',
        name: 'priceMatrix',
        type: 'number',
        default: '',
        description: 'The price matrix value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Cc Price Matrix',
        name: 'ccPriceMatrix',
        type: 'number',
        default: '',
        description: 'C&C Pricing Policy',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Cc Checkout Prices',
        name: 'ccCheckoutPrices',
        type: 'options',
        default: '2:AskCustomer',
        description: 'Deliv Pricing Policy',
        options: [
            {
                name: 'AskCustomer',
                value: '2:AskCustomer',
                description: 'AskCustomer (code: 2)'
            },
            {
                name: 'C&C',
                value: '1:C&C',
                description: 'C&C (code: 1)'
            },
            {
                name: 'DeliveredTrade',
                value: '3:DeliveredTrade',
                description: 'DeliveredTrade (code: 3)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Promotion Types',
        name: 'promotionTypes',
        type: 'string',
        default: '',
        description: 'Promotion Type Code',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Contract Groups',
        name: 'contractGroups',
        type: 'string',
        default: '',
        description: 'The contract groups value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Contract Only',
        name: 'contractOnly',
        type: 'options',
        default: 'c:Confirm Contract Only',
        description: 'Order Contract products only',
        options: [
            {
                name: 'Confirm Contract Only',
                value: 'c:Confirm Contract Only',
                description: 'Confirm Contract Only (code: c)'
            },
            {
                name: 'No',
                value: 'n:No',
                description: 'No (code: n)'
            },
            {
                name: 'Yes',
                value: 'y:Yes',
                description: 'Yes (code: y)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Split Surcharge',
        name: 'splitSurcharge',
        type: 'options',
        default: ':No',
        description: 'Split Case Surcharges',
        options: [
            {
                name: 'No',
                value: ':No',
                description: 'No (code: )'
            },
            {
                name: 'No (N)',
                value: 'n:No',
                description: 'No (code: n)'
            },
            {
                name: 'Surcharge+InvoiceTotal',
                value: 't:Surcharge+InvoiceTotal',
                description: 'Surcharge+InvoiceTotal (code: t)'
            },
            {
                name: 'Yes',
                value: 'y:Yes',
                description: 'Yes (code: y)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Over Split Surcharge',
        name: 'overSplitSurcharge',
        type: 'number',
        default: '',
        description: 'Override Split Surcharges (%)',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Reasonable Qty',
        name: 'reasonableQty',
        type: 'number',
        default: '',
        description: 'Reasonable Order Qty',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Route',
        name: 'route',
        type: 'string',
        default: '',
        description: 'The route value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Drop No',
        name: 'dropNo',
        type: 'number',
        default: '',
        description: 'Drop',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Customer Order Ref',
        name: 'customerOrderRef',
        type: 'options',
        default: 'n:No',
        description: 'Customer Order Reference',
        options: [
            {
                name: 'No',
                value: 'n:No',
                description: 'No (code: n)'
            },
            {
                name: 'Yes',
                value: 'y:Yes',
                description: 'Yes (code: y)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Item Code Used',
        name: 'itemCodeUsed',
        type: 'options',
        default: 'n:No',
        description: 'Customer Item Codes',
        options: [
            {
                name: 'No',
                value: 'n:No',
                description: 'No (code: n)'
            },
            {
                name: 'Yes',
                value: 'y:Yes',
                description: 'Yes (code: y)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'National Product Codes',
        name: 'nationalProductCodes',
        type: 'options',
        default: 'n:No',
        description: 'The national product codes value',
        options: [
            {
                name: 'No',
                value: 'n:No',
                description: 'No (code: n)'
            },
            {
                name: 'Yes',
                value: 'y:Yes',
                description: 'Yes (code: y)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Accept Substitutes',
        name: 'acceptSubstitutes',
        type: 'boolean',
        default: false,
        description: 'Whether customer Accepts Substitutes',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Price By Date',
        name: 'priceByDate',
        type: 'options',
        default: 'D:DeliveryDate',
        description: 'Price by Order or Delivery Date',
        options: [
            {
                name: 'DeliveryDate',
                value: 'D:DeliveryDate',
                description: 'DeliveryDate (code: D)'
            },
            {
                name: 'OrderInputDate',
                value: 'O:OrderInputDate',
                description: 'OrderInputDate (code: O)'
            },
            {
                name: 'SystemDefault',
                value: 'S:SystemDefault',
                description: 'SystemDefault (code: S)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Product Category',
        name: 'productCategory',
        type: 'string',
        default: '',
        description: 'The product category value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Contract Prices',
        name: 'contractPrices',
        type: 'boolean',
        default: false,
        description: 'Whether the contract prices value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Back Orders',
        name: 'backOrders',
        type: 'boolean',
        default: false,
        description: 'Whether back Orders Enabled',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Invoice Splits',
        name: 'invoiceSplits',
        type: 'options',
        default: 'n:No',
        description: 'Convert cases into Splits as ordered',
        options: [
            {
                name: 'No',
                value: 'n:No',
                description: 'No (code: n)'
            },
            {
                name: 'Yes',
                value: 'y:Yes',
                description: 'Yes (code: y)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Oporteo',
        name: 'oporteo',
        type: 'options',
        default: 'n:No',
        description: 'Oporteo in use',
        options: [
            {
                name: 'No',
                value: 'n:No',
                description: 'No (code: n)'
            },
            {
                name: 'Yes',
                value: 'y:Yes',
                description: 'Yes (code: y)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Pickup Method',
        name: 'pickupMethod',
        type: 'options',
        default: 'b:Both',
        description: 'The pickup method value',
        options: [
            {
                name: 'Both',
                value: 'b:Both',
                description: 'Both (code: b)'
            },
            {
                name: 'Collection',
                value: 'c:Collection',
                description: 'Collection (code: c)'
            },
            {
                name: 'Delivery',
                value: 'd:Delivery',
                description: 'Delivery (code: d)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Customer Discount',
        name: 'customerDiscount',
        type: 'number',
        default: '',
        description: 'C&C Customer Discount % Off',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Seasonal Closure',
        name: 'seasonalClosure',
        type: 'boolean',
        default: false,
        description: 'Whether the seasonal closure value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Seasonal Reopen Date',
        name: 'seasonalReopenDate',
        type: 'string',
        default: '',
        description: 'Reopen Date After Seasonal Closure',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Retain Split Price',
        name: 'retainSplitPrice',
        type: 'options',
        default: 'n:No',
        description: 'The retain split price value',
        options: [
            {
                name: 'No',
                value: 'n:No',
                description: 'No (code: n)'
            },
            {
                name: 'Yes',
                value: 'y:Yes',
                description: 'Yes (code: y)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Plof Type',
        name: 'plofType',
        type: 'string',
        default: '',
        description: 'The plof type value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Telesales Notes',
        name: 'telesalesNotes',
        type: 'string',
        default: '',
        description: 'The telesales notes value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Picking Msg',
        name: 'pickingMsg',
        type: 'string',
        default: '',
        description: 'Picking Message',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Invoice Msg',
        name: 'invoiceMsg',
        type: 'string',
        default: '',
        description: 'Invoice Message',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Country Code',
        name: 'countryCode',
        type: 'string',
        default: '',
        description: 'The country code value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Bonded',
        name: 'bonded',
        type: 'options',
        default: 'n:No',
        description: 'Bonded Items',
        options: [
            {
                name: 'No',
                value: 'n:No',
                description: 'No (code: n)'
            },
            {
                name: 'Yes',
                value: 'y:Yes',
                description: 'Yes (code: y)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Immediate Credit Release',
        name: 'immediateCreditRelease',
        type: 'options',
        default: 'n:No',
        description: 'Force Immediate Credit Release',
        options: [
            {
                name: 'No',
                value: 'n:No',
                description: 'No (code: n)'
            },
            {
                name: 'Yes',
                value: 'y:Yes',
                description: 'Yes (code: y)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Cc Surch Indicator',
        name: 'ccSurchIndicator',
        type: 'options',
        default: 'n:No',
        description: 'C&C Surcharge',
        options: [
            {
                name: 'No',
                value: 'n:No',
                description: 'No (code: n)'
            },
            {
                name: 'Yes',
                value: 'y:Yes',
                description: 'Yes (code: y)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Access Control ID',
        name: 'accessControlID',
        type: 'number',
        default: '',
        description: 'The access control ID value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Allocation Category',
        name: 'allocationCategory',
        type: 'string',
        default: '',
        description: 'The allocation category value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Price Logging',
        name: 'PriceLogging',
        type: 'options',
        default: 'n:No',
        description: 'The price logging value',
        options: [
            {
                name: 'No',
                value: 'n:No',
                description: 'No (code: n)'
            },
            {
                name: 'Price Change Lists',
                value: 'y:Price change lists',
                description: 'Price change lists (code: y)'
            },
            {
                name: 'Price Change Lists & New Pack Lists',
                value: 'b:Price change lists & new pack lists',
                description: 'Price change lists & new pack lists (code: b)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Subs Policy',
        name: 'subsPolicy',
        type: 'options',
        default: '1:All',
        description: 'The subs policy value',
        options: [
            {
                name: 'All',
                value: '1:All',
                description: 'All (code: 1)'
            },
            {
                name: 'All Excluding OSTF',
                value: '6:All Excluding OSTF',
                description: 'All Excluding OSTF (code: 6)'
            },
            {
                name: 'Flash Packs',
                value: '2:Flash Packs',
                description: 'Flash Packs (code: 2)'
            },
            {
                name: 'Flash Packs & Pack Changes',
                value: '4:Flash Packs & Pack Changes',
                description: 'Flash Packs & Pack Changes (code: 4)'
            },
            {
                name: 'None',
                value: '5:None',
                description: 'None (code: 5)'
            },
            {
                name: 'Pack Changes',
                value: '3:Pack Changes',
                description: 'Pack Changes (code: 3)'
            },
            {
                name: 'Unused',
                value: '0:Unused',
                description: 'Unused (code: 0)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Model Range',
        name: 'modelRange',
        type: 'string',
        default: '',
        description: 'The model range value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Core Range',
        name: 'coreRange',
        type: 'string',
        default: '',
        description: 'Core Range Indicator',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Primary Merge Limit',
        name: 'primaryMergeLimit',
        type: 'string',
        default: '',
        description: 'The primary merge limit value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Other Merge Limit',
        name: 'otherMergeLimit',
        type: 'string',
        default: '',
        description: 'The other merge limit value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Invoice Address1',
        name: 'invoiceAddress1',
        type: 'string',
        default: '',
        description: 'Invoice Address Line 1',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Invoice Address2',
        name: 'invoiceAddress2',
        type: 'string',
        default: '',
        description: 'Invoice Address Line 2',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Invoice Address3',
        name: 'invoiceAddress3',
        type: 'string',
        default: '',
        description: 'Invoice Address Line 3',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Invoice Address4',
        name: 'invoiceAddress4',
        type: 'string',
        default: '',
        description: 'Invoice Address Line 4',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Invoice Address5',
        name: 'invoiceAddress5',
        type: 'string',
        default: '',
        description: 'Invoice Address Line 5',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Invoice Postcode',
        name: 'invoicePostcode',
        type: 'string',
        default: '',
        description: 'Invoice Post Code',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Economic Operator ID',
        name: 'economicOperatorID',
        type: 'string',
        default: '',
        description: 'The economic operator ID value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Facility ID',
        name: 'facilityID',
        type: 'string',
        default: '',
        description: 'The facility ID value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Destination ID',
        name: 'destinationID',
        type: 'string',
        default: '',
        description: 'Tobacco Destination Indicator',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    },
    {
        displayName: 'Drs Exempt',
        name: 'drsExempt',
        type: 'boolean',
        default: false,
        description: 'Whether dRS Exemption',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:update']
            }
        }
    }
];

export const customersListFields: INodeProperties[] = [
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
                resource: ['customers'],
                operation: ['customers:list']
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
                resource: ['customers'],
                operation: ['customers:list'],
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
                resource: ['customers'],
                operation: ['customers:list'],
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
                resource: ['customers'],
                operation: ['customers:list'],
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
                        default: 'acceptSubstitutes',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Accept Substitutes',
                                value: 'acceptSubstitutes'
                            },
                            {
                                name: 'Access Control ID',
                                value: 'accessControlID'
                            },
                            {
                                name: 'Account Type',
                                value: 'accountType'
                            },
                            {
                                name: 'Area Code',
                                value: 'areaCode'
                            },
                            {
                                name: 'Back Orders',
                                value: 'backOrders'
                            },
                            {
                                name: 'Bonded',
                                value: 'bonded'
                            },
                            {
                                name: 'Cc Checkout Prices',
                                value: 'ccCheckoutPrices'
                            },
                            {
                                name: 'Cc Del Both',
                                value: 'ccDelBoth'
                            },
                            {
                                name: 'Cc Max Cheque',
                                value: 'ccMaxCheque'
                            },
                            {
                                name: 'Cc No Signature',
                                value: 'ccNoSignature'
                            },
                            {
                                name: 'Cc Price Matrix',
                                value: 'ccPriceMatrix'
                            },
                            {
                                name: 'Cc Surch Indicator',
                                value: 'ccSurchIndicator'
                            },
                            {
                                name: 'Company Code',
                                value: 'companyCode'
                            },
                            {
                                name: 'Contact',
                                value: 'contact'
                            },
                            {
                                name: 'Contract Only',
                                value: 'contractOnly'
                            },
                            {
                                name: 'Contract Prices',
                                value: 'contractPrices'
                            },
                            {
                                name: 'Core Range',
                                value: 'coreRange'
                            },
                            {
                                name: 'Country Code',
                                value: 'countryCode'
                            },
                            {
                                name: 'Credit Limit',
                                value: 'creditLimit'
                            },
                            {
                                name: 'Customer ANA',
                                value: 'customerANA'
                            },
                            {
                                name: 'Customer Code',
                                value: 'customerCode'
                            },
                            {
                                name: 'Customer Discount',
                                value: 'customerDiscount'
                            },
                            {
                                name: 'Customer Group',
                                value: 'customerGroup'
                            },
                            {
                                name: 'Customer Name',
                                value: 'customerName'
                            },
                            {
                                name: 'Customer Order Ref',
                                value: 'customerOrderRef'
                            },
                            {
                                name: 'Customer Product Code',
                                value: 'customerProductCode'
                            },
                            {
                                name: 'Customer Status',
                                value: 'customerStatus'
                            },
                            {
                                name: 'Customer Type',
                                value: 'customerType'
                            },
                            {
                                name: 'Delivery Address1',
                                value: 'deliveryAddress1'
                            },
                            {
                                name: 'Delivery Address2',
                                value: 'deliveryAddress2'
                            },
                            {
                                name: 'Delivery Address3',
                                value: 'deliveryAddress3'
                            },
                            {
                                name: 'Delivery Address4',
                                value: 'deliveryAddress4'
                            },
                            {
                                name: 'Delivery Address5',
                                value: 'deliveryAddress5'
                            },
                            {
                                name: 'Delivery Postcode',
                                value: 'deliveryPostcode'
                            },
                            {
                                name: 'Depot',
                                value: 'depot'
                            },
                            {
                                name: 'Destination ID',
                                value: 'destinationID'
                            },
                            {
                                name: 'Drop No',
                                value: 'dropNo'
                            },
                            {
                                name: 'Drs Exempt',
                                value: 'drsExempt'
                            },
                            {
                                name: 'Economic Operator ID',
                                value: 'economicOperatorID'
                            },
                            {
                                name: 'Email',
                                value: 'email'
                            },
                            {
                                name: 'Entry Type',
                                value: 'entryType'
                            },
                            {
                                name: 'Facility ID',
                                value: 'facilityID'
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
                                name: 'Immediate Credit Release',
                                value: 'immediateCreditRelease'
                            },
                            {
                                name: 'Invoice Msg',
                                value: 'invoiceMsg'
                            },
                            {
                                name: 'Invoice Splits',
                                value: 'invoiceSplits'
                            },
                            {
                                name: 'Item Code Used',
                                value: 'itemCodeUsed'
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
                                name: 'Liquor Licensing',
                                value: 'liquorLicensing'
                            },
                            {
                                name: 'National Product Codes',
                                value: 'nationalProductCodes'
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
                                name: 'Offer Code',
                                value: 'offerCode'
                            },
                            {
                                name: 'Offer Type',
                                value: 'offerType'
                            },
                            {
                                name: 'Offset',
                                value: 'offset'
                            },
                            {
                                name: 'Operator Code',
                                value: 'operatorCode'
                            },
                            {
                                name: 'Oporteo',
                                value: 'oporteo'
                            },
                            {
                                name: 'Ordering Depot',
                                value: 'orderingDepot'
                            },
                            {
                                name: 'Organisation ANA',
                                value: 'organisationANA'
                            },
                            {
                                name: 'Over Split Surcharge',
                                value: 'overSplitSurcharge'
                            },
                            {
                                name: 'Phone No',
                                value: 'phoneNo'
                            },
                            {
                                name: 'Picking Msg',
                                value: 'pickingMsg'
                            },
                            {
                                name: 'Pickup Method',
                                value: 'pickupMethod'
                            },
                            {
                                name: 'Plof Type',
                                value: 'plofType'
                            },
                            {
                                name: 'Preferred Stock Depot',
                                value: 'preferredStockDepot'
                            },
                            {
                                name: 'Price By Date',
                                value: 'priceByDate'
                            },
                            {
                                name: 'Price Date',
                                value: 'priceDate'
                            },
                            {
                                name: 'Price Depot',
                                value: 'priceDepot'
                            },
                            {
                                name: 'Price Matrix',
                                value: 'priceMatrix'
                            },
                            {
                                name: 'Private Phone No',
                                value: 'privatePhoneNo'
                            },
                            {
                                name: 'Product Code',
                                value: 'productCode'
                            },
                            {
                                name: 'Proprietor',
                                value: 'proprietor'
                            },
                            {
                                name: 'Reasonable Qty',
                                value: 'reasonableQty'
                            },
                            {
                                name: 'Registered',
                                value: 'registered'
                            },
                            {
                                name: 'Registered Depot',
                                value: 'registeredDepot'
                            },
                            {
                                name: 'Rep Code',
                                value: 'repCode'
                            },
                            {
                                name: 'Retain Split Price',
                                value: 'retainSplitPrice'
                            },
                            {
                                name: 'Route',
                                value: 'route'
                            },
                            {
                                name: 'Salutation',
                                value: 'salutation'
                            },
                            {
                                name: 'Scheme Type',
                                value: 'schemeType'
                            },
                            {
                                name: 'Seasonal Closure',
                                value: 'seasonalClosure'
                            },
                            {
                                name: 'Seasonal Reopen Date',
                                value: 'seasonalReopenDate'
                            },
                            {
                                name: 'Short Name',
                                value: 'shortName'
                            },
                            {
                                name: 'Sl Code',
                                value: 'slCode'
                            },
                            {
                                name: 'Split Surcharge',
                                value: 'splitSurcharge'
                            },
                            {
                                name: 'Telesales Notes',
                                value: 'telesalesNotes'
                            },
                            {
                                name: 'Timeout',
                                value: 'timeout'
                            },
                            {
                                name: 'Title',
                                value: 'title'
                            },
                            {
                                name: 'Vat Reg No',
                                value: 'vatRegNo'
                            },
                            {
                                name: 'Vatable',
                                value: 'vatable'
                            },
                            {
                                name: 'What3words',
                                value: 'what3words'
                            },
                            {
                                name: 'Which Price',
                                value: 'whichPrice'
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
                resource: ['customers'],
                operation: ['customers:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Customer Code',
        name: 'customerCode',
        type: 'string',
        default: '',
        description: 'Customer Code (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: '10001',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:list'],
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
                resource: ['customers'],
                operation: ['customers:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Customer Status',
        name: 'customerStatus',
        type: 'multiOptions',
        default: [],
        description: 'Status (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        options: [
            {
                name: 'Cancelled',
                value: 'c:Cancelled',
                description: 'Cancelled (code: c)'
            },
            {
                name: 'Locked',
                value: 'l:Locked',
                description: 'Locked (code: l)'
            },
            {
                name: 'Prospective',
                value: 'p:Prospective',
                description: 'Prospective (code: p)'
            },
            {
                name: 'Registered',
                value: 'r:Registered',
                description: 'Registered (code: r)'
            }
        ],
        placeholder: 'r:Registered',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Customer Name',
        name: 'customerName',
        type: 'string',
        default: '',
        description: 'Name (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,contains,matches)',
        placeholder: 'David Smith',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Registered',
        name: 'registered',
        type: 'string',
        default: '',
        description: 'Date customer registered (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        placeholder: '2005-08-14',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Ordering Depot',
        name: 'orderingDepot',
        type: 'string',
        default: '',
        description: 'Depot (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'a01',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Customer Type',
        name: 'customerType',
        type: 'string',
        default: '',
        description: 'Customer Type (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 's',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Account Type',
        name: 'accountType',
        type: 'string',
        default: '',
        description: 'Account Type (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: '1',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Route',
        name: 'route',
        type: 'string',
        default: '',
        description: 'Route (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: '100005',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:list'],
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
        placeholder: 'customerCode,-lastUpdate',
        options: [
            {
                name: 'Accept Substitutes (Ascending)',
                value: 'acceptSubstitutes',
                description: 'Sort by Accept Substitutes in ascending order'
            },
            {
                name: 'Accept Substitutes (Descending)',
                value: '-acceptSubstitutes',
                description: 'Sort by Accept Substitutes in descending order'
            },
            {
                name: 'Access Control ID (Ascending)',
                value: 'accessControlID',
                description: 'Sort by Access Control ID in ascending order'
            },
            {
                name: 'Access Control ID (Descending)',
                value: '-accessControlID',
                description: 'Sort by Access Control ID in descending order'
            },
            {
                name: 'Account Type (Ascending)',
                value: 'accountType',
                description: 'Sort by Account Type in ascending order'
            },
            {
                name: 'Account Type (Descending)',
                value: '-accountType',
                description: 'Sort by Account Type in descending order'
            },
            {
                name: 'Area Code (Ascending)',
                value: 'areaCode',
                description: 'Sort by Area Code in ascending order'
            },
            {
                name: 'Area Code (Descending)',
                value: '-areaCode',
                description: 'Sort by Area Code in descending order'
            },
            {
                name: 'Back Orders (Ascending)',
                value: 'backOrders',
                description: 'Sort by Back Orders in ascending order'
            },
            {
                name: 'Back Orders (Descending)',
                value: '-backOrders',
                description: 'Sort by Back Orders in descending order'
            },
            {
                name: 'Bonded (Ascending)',
                value: 'bonded',
                description: 'Sort by Bonded in ascending order'
            },
            {
                name: 'Bonded (Descending)',
                value: '-bonded',
                description: 'Sort by Bonded in descending order'
            },
            {
                name: 'Cc Checkout Prices (Ascending)',
                value: 'ccCheckoutPrices',
                description: 'Sort by Cc Checkout Prices in ascending order'
            },
            {
                name: 'Cc Checkout Prices (Descending)',
                value: '-ccCheckoutPrices',
                description: 'Sort by Cc Checkout Prices in descending order'
            },
            {
                name: 'Cc Del Both (Ascending)',
                value: 'ccDelBoth',
                description: 'Sort by Cc Del Both in ascending order'
            },
            {
                name: 'Cc Del Both (Descending)',
                value: '-ccDelBoth',
                description: 'Sort by Cc Del Both in descending order'
            },
            {
                name: 'Cc Max Cheque (Ascending)',
                value: 'ccMaxCheque',
                description: 'Sort by Cc Max Cheque in ascending order'
            },
            {
                name: 'Cc Max Cheque (Descending)',
                value: '-ccMaxCheque',
                description: 'Sort by Cc Max Cheque in descending order'
            },
            {
                name: 'Cc No Signature (Ascending)',
                value: 'ccNoSignature',
                description: 'Sort by Cc No Signature in ascending order'
            },
            {
                name: 'Cc No Signature (Descending)',
                value: '-ccNoSignature',
                description: 'Sort by Cc No Signature in descending order'
            },
            {
                name: 'Cc Price Matrix (Ascending)',
                value: 'ccPriceMatrix',
                description: 'Sort by Cc Price Matrix in ascending order'
            },
            {
                name: 'Cc Price Matrix (Descending)',
                value: '-ccPriceMatrix',
                description: 'Sort by Cc Price Matrix in descending order'
            },
            {
                name: 'Cc Surch Indicator (Ascending)',
                value: 'ccSurchIndicator',
                description: 'Sort by Cc Surch Indicator in ascending order'
            },
            {
                name: 'Cc Surch Indicator (Descending)',
                value: '-ccSurchIndicator',
                description: 'Sort by Cc Surch Indicator in descending order'
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
                name: 'Contact (Ascending)',
                value: 'contact',
                description: 'Sort by Contact in ascending order'
            },
            {
                name: 'Contact (Descending)',
                value: '-contact',
                description: 'Sort by Contact in descending order'
            },
            {
                name: 'Contract Only (Ascending)',
                value: 'contractOnly',
                description: 'Sort by Contract Only in ascending order'
            },
            {
                name: 'Contract Only (Descending)',
                value: '-contractOnly',
                description: 'Sort by Contract Only in descending order'
            },
            {
                name: 'Contract Prices (Ascending)',
                value: 'contractPrices',
                description: 'Sort by Contract Prices in ascending order'
            },
            {
                name: 'Contract Prices (Descending)',
                value: '-contractPrices',
                description: 'Sort by Contract Prices in descending order'
            },
            {
                name: 'Core Range (Ascending)',
                value: 'coreRange',
                description: 'Sort by Core Range in ascending order'
            },
            {
                name: 'Core Range (Descending)',
                value: '-coreRange',
                description: 'Sort by Core Range in descending order'
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
                name: 'Credit Limit (Ascending)',
                value: 'creditLimit',
                description: 'Sort by Credit Limit in ascending order'
            },
            {
                name: 'Credit Limit (Descending)',
                value: '-creditLimit',
                description: 'Sort by Credit Limit in descending order'
            },
            {
                name: 'Customer ANA (Ascending)',
                value: 'customerANA',
                description: 'Sort by Customer ANA in ascending order'
            },
            {
                name: 'Customer ANA (Descending)',
                value: '-customerANA',
                description: 'Sort by Customer ANA in descending order'
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
                name: 'Customer Discount (Ascending)',
                value: 'customerDiscount',
                description: 'Sort by Customer Discount in ascending order'
            },
            {
                name: 'Customer Discount (Descending)',
                value: '-customerDiscount',
                description: 'Sort by Customer Discount in descending order'
            },
            {
                name: 'Customer Group (Ascending)',
                value: 'customerGroup',
                description: 'Sort by Customer Group in ascending order'
            },
            {
                name: 'Customer Group (Descending)',
                value: '-customerGroup',
                description: 'Sort by Customer Group in descending order'
            },
            {
                name: 'Customer Name (Ascending)',
                value: 'customerName',
                description: 'Sort by Customer Name in ascending order'
            },
            {
                name: 'Customer Name (Descending)',
                value: '-customerName',
                description: 'Sort by Customer Name in descending order'
            },
            {
                name: 'Customer Order Ref (Ascending)',
                value: 'customerOrderRef',
                description: 'Sort by Customer Order Ref in ascending order'
            },
            {
                name: 'Customer Order Ref (Descending)',
                value: '-customerOrderRef',
                description: 'Sort by Customer Order Ref in descending order'
            },
            {
                name: 'Customer Product Code (Ascending)',
                value: 'customerProductCode',
                description: 'Sort by Customer Product Code in ascending order'
            },
            {
                name: 'Customer Product Code (Descending)',
                value: '-customerProductCode',
                description: 'Sort by Customer Product Code in descending order'
            },
            {
                name: 'Customer Status (Ascending)',
                value: 'customerStatus',
                description: 'Sort by Customer Status in ascending order'
            },
            {
                name: 'Customer Status (Descending)',
                value: '-customerStatus',
                description: 'Sort by Customer Status in descending order'
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
                name: 'Delivery Address1 (Ascending)',
                value: 'deliveryAddress1',
                description: 'Sort by Delivery Address1 in ascending order'
            },
            {
                name: 'Delivery Address1 (Descending)',
                value: '-deliveryAddress1',
                description: 'Sort by Delivery Address1 in descending order'
            },
            {
                name: 'Delivery Address2 (Ascending)',
                value: 'deliveryAddress2',
                description: 'Sort by Delivery Address2 in ascending order'
            },
            {
                name: 'Delivery Address2 (Descending)',
                value: '-deliveryAddress2',
                description: 'Sort by Delivery Address2 in descending order'
            },
            {
                name: 'Delivery Address3 (Ascending)',
                value: 'deliveryAddress3',
                description: 'Sort by Delivery Address3 in ascending order'
            },
            {
                name: 'Delivery Address3 (Descending)',
                value: '-deliveryAddress3',
                description: 'Sort by Delivery Address3 in descending order'
            },
            {
                name: 'Delivery Address4 (Ascending)',
                value: 'deliveryAddress4',
                description: 'Sort by Delivery Address4 in ascending order'
            },
            {
                name: 'Delivery Address4 (Descending)',
                value: '-deliveryAddress4',
                description: 'Sort by Delivery Address4 in descending order'
            },
            {
                name: 'Delivery Address5 (Ascending)',
                value: 'deliveryAddress5',
                description: 'Sort by Delivery Address5 in ascending order'
            },
            {
                name: 'Delivery Address5 (Descending)',
                value: '-deliveryAddress5',
                description: 'Sort by Delivery Address5 in descending order'
            },
            {
                name: 'Delivery Postcode (Ascending)',
                value: 'deliveryPostcode',
                description: 'Sort by Delivery Postcode in ascending order'
            },
            {
                name: 'Delivery Postcode (Descending)',
                value: '-deliveryPostcode',
                description: 'Sort by Delivery Postcode in descending order'
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
                name: 'Destination ID (Ascending)',
                value: 'destinationID',
                description: 'Sort by Destination ID in ascending order'
            },
            {
                name: 'Destination ID (Descending)',
                value: '-destinationID',
                description: 'Sort by Destination ID in descending order'
            },
            {
                name: 'Drop No (Ascending)',
                value: 'dropNo',
                description: 'Sort by Drop No in ascending order'
            },
            {
                name: 'Drop No (Descending)',
                value: '-dropNo',
                description: 'Sort by Drop No in descending order'
            },
            {
                name: 'Drs Exempt (Ascending)',
                value: 'drsExempt',
                description: 'Sort by Drs Exempt in ascending order'
            },
            {
                name: 'Drs Exempt (Descending)',
                value: '-drsExempt',
                description: 'Sort by Drs Exempt in descending order'
            },
            {
                name: 'Economic Operator ID (Ascending)',
                value: 'economicOperatorID',
                description: 'Sort by Economic Operator ID in ascending order'
            },
            {
                name: 'Economic Operator ID (Descending)',
                value: '-economicOperatorID',
                description: 'Sort by Economic Operator ID in descending order'
            },
            {
                name: 'Email (Ascending)',
                value: 'email',
                description: 'Sort by Email in ascending order'
            },
            {
                name: 'Email (Descending)',
                value: '-email',
                description: 'Sort by Email in descending order'
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
                name: 'Facility ID (Ascending)',
                value: 'facilityID',
                description: 'Sort by Facility ID in ascending order'
            },
            {
                name: 'Facility ID (Descending)',
                value: '-facilityID',
                description: 'Sort by Facility ID in descending order'
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
                name: 'Immediate Credit Release (Ascending)',
                value: 'immediateCreditRelease',
                description: 'Sort by Immediate Credit Release in ascending order'
            },
            {
                name: 'Immediate Credit Release (Descending)',
                value: '-immediateCreditRelease',
                description: 'Sort by Immediate Credit Release in descending order'
            },
            {
                name: 'Invoice Msg (Ascending)',
                value: 'invoiceMsg',
                description: 'Sort by Invoice Msg in ascending order'
            },
            {
                name: 'Invoice Msg (Descending)',
                value: '-invoiceMsg',
                description: 'Sort by Invoice Msg in descending order'
            },
            {
                name: 'Invoice Splits (Ascending)',
                value: 'invoiceSplits',
                description: 'Sort by Invoice Splits in ascending order'
            },
            {
                name: 'Invoice Splits (Descending)',
                value: '-invoiceSplits',
                description: 'Sort by Invoice Splits in descending order'
            },
            {
                name: 'Item Code Used (Ascending)',
                value: 'itemCodeUsed',
                description: 'Sort by Item Code Used in ascending order'
            },
            {
                name: 'Item Code Used (Descending)',
                value: '-itemCodeUsed',
                description: 'Sort by Item Code Used in descending order'
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
                name: 'Liquor Licensing (Ascending)',
                value: 'liquorLicensing',
                description: 'Sort by Liquor Licensing in ascending order'
            },
            {
                name: 'Liquor Licensing (Descending)',
                value: '-liquorLicensing',
                description: 'Sort by Liquor Licensing in descending order'
            },
            {
                name: 'National Product Codes (Ascending)',
                value: 'nationalProductCodes',
                description: 'Sort by National Product Codes in ascending order'
            },
            {
                name: 'National Product Codes (Descending)',
                value: '-nationalProductCodes',
                description: 'Sort by National Product Codes in descending order'
            },
            {
                name: 'Offer Code (Ascending)',
                value: 'offerCode',
                description: 'Sort by Offer Code in ascending order'
            },
            {
                name: 'Offer Code (Descending)',
                value: '-offerCode',
                description: 'Sort by Offer Code in descending order'
            },
            {
                name: 'Offer Type (Ascending)',
                value: 'offerType',
                description: 'Sort by Offer Type in ascending order'
            },
            {
                name: 'Offer Type (Descending)',
                value: '-offerType',
                description: 'Sort by Offer Type in descending order'
            },
            {
                name: 'Operator Code (Ascending)',
                value: 'operatorCode',
                description: 'Sort by Operator Code in ascending order'
            },
            {
                name: 'Operator Code (Descending)',
                value: '-operatorCode',
                description: 'Sort by Operator Code in descending order'
            },
            {
                name: 'Oporteo (Ascending)',
                value: 'oporteo',
                description: 'Sort by Oporteo in ascending order'
            },
            {
                name: 'Oporteo (Descending)',
                value: '-oporteo',
                description: 'Sort by Oporteo in descending order'
            },
            {
                name: 'Ordering Depot (Ascending)',
                value: 'orderingDepot',
                description: 'Sort by Ordering Depot in ascending order'
            },
            {
                name: 'Ordering Depot (Descending)',
                value: '-orderingDepot',
                description: 'Sort by Ordering Depot in descending order'
            },
            {
                name: 'Organisation ANA (Ascending)',
                value: 'organisationANA',
                description: 'Sort by Organisation ANA in ascending order'
            },
            {
                name: 'Organisation ANA (Descending)',
                value: '-organisationANA',
                description: 'Sort by Organisation ANA in descending order'
            },
            {
                name: 'Over Split Surcharge (Ascending)',
                value: 'overSplitSurcharge',
                description: 'Sort by Over Split Surcharge in ascending order'
            },
            {
                name: 'Over Split Surcharge (Descending)',
                value: '-overSplitSurcharge',
                description: 'Sort by Over Split Surcharge in descending order'
            },
            {
                name: 'Phone No (Ascending)',
                value: 'phoneNo',
                description: 'Sort by Phone No in ascending order'
            },
            {
                name: 'Phone No (Descending)',
                value: '-phoneNo',
                description: 'Sort by Phone No in descending order'
            },
            {
                name: 'Picking Msg (Ascending)',
                value: 'pickingMsg',
                description: 'Sort by Picking Msg in ascending order'
            },
            {
                name: 'Picking Msg (Descending)',
                value: '-pickingMsg',
                description: 'Sort by Picking Msg in descending order'
            },
            {
                name: 'Pickup Method (Ascending)',
                value: 'pickupMethod',
                description: 'Sort by Pickup Method in ascending order'
            },
            {
                name: 'Pickup Method (Descending)',
                value: '-pickupMethod',
                description: 'Sort by Pickup Method in descending order'
            },
            {
                name: 'Plof Type (Ascending)',
                value: 'plofType',
                description: 'Sort by Plof Type in ascending order'
            },
            {
                name: 'Plof Type (Descending)',
                value: '-plofType',
                description: 'Sort by Plof Type in descending order'
            },
            {
                name: 'Preferred Stock Depot (Ascending)',
                value: 'preferredStockDepot',
                description: 'Sort by Preferred Stock Depot in ascending order'
            },
            {
                name: 'Preferred Stock Depot (Descending)',
                value: '-preferredStockDepot',
                description: 'Sort by Preferred Stock Depot in descending order'
            },
            {
                name: 'Price By Date (Ascending)',
                value: 'priceByDate',
                description: 'Sort by Price By Date in ascending order'
            },
            {
                name: 'Price By Date (Descending)',
                value: '-priceByDate',
                description: 'Sort by Price By Date in descending order'
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
                name: 'Price Depot (Ascending)',
                value: 'priceDepot',
                description: 'Sort by Price Depot in ascending order'
            },
            {
                name: 'Price Depot (Descending)',
                value: '-priceDepot',
                description: 'Sort by Price Depot in descending order'
            },
            {
                name: 'Price Matrix (Ascending)',
                value: 'priceMatrix',
                description: 'Sort by Price Matrix in ascending order'
            },
            {
                name: 'Price Matrix (Descending)',
                value: '-priceMatrix',
                description: 'Sort by Price Matrix in descending order'
            },
            {
                name: 'Private Phone No (Ascending)',
                value: 'privatePhoneNo',
                description: 'Sort by Private Phone No in ascending order'
            },
            {
                name: 'Private Phone No (Descending)',
                value: '-privatePhoneNo',
                description: 'Sort by Private Phone No in descending order'
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
                name: 'Proprietor (Ascending)',
                value: 'proprietor',
                description: 'Sort by Proprietor in ascending order'
            },
            {
                name: 'Proprietor (Descending)',
                value: '-proprietor',
                description: 'Sort by Proprietor in descending order'
            },
            {
                name: 'Reasonable Qty (Ascending)',
                value: 'reasonableQty',
                description: 'Sort by Reasonable Qty in ascending order'
            },
            {
                name: 'Reasonable Qty (Descending)',
                value: '-reasonableQty',
                description: 'Sort by Reasonable Qty in descending order'
            },
            {
                name: 'Registered (Ascending)',
                value: 'registered',
                description: 'Sort by Registered in ascending order'
            },
            {
                name: 'Registered (Descending)',
                value: '-registered',
                description: 'Sort by Registered in descending order'
            },
            {
                name: 'Registered Depot (Ascending)',
                value: 'registeredDepot',
                description: 'Sort by Registered Depot in ascending order'
            },
            {
                name: 'Registered Depot (Descending)',
                value: '-registeredDepot',
                description: 'Sort by Registered Depot in descending order'
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
                name: 'Retain Split Price (Ascending)',
                value: 'retainSplitPrice',
                description: 'Sort by Retain Split Price in ascending order'
            },
            {
                name: 'Retain Split Price (Descending)',
                value: '-retainSplitPrice',
                description: 'Sort by Retain Split Price in descending order'
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
                name: 'Salutation (Ascending)',
                value: 'salutation',
                description: 'Sort by Salutation in ascending order'
            },
            {
                name: 'Salutation (Descending)',
                value: '-salutation',
                description: 'Sort by Salutation in descending order'
            },
            {
                name: 'Scheme Type (Ascending)',
                value: 'schemeType',
                description: 'Sort by Scheme Type in ascending order'
            },
            {
                name: 'Scheme Type (Descending)',
                value: '-schemeType',
                description: 'Sort by Scheme Type in descending order'
            },
            {
                name: 'Seasonal Closure (Ascending)',
                value: 'seasonalClosure',
                description: 'Sort by Seasonal Closure in ascending order'
            },
            {
                name: 'Seasonal Closure (Descending)',
                value: '-seasonalClosure',
                description: 'Sort by Seasonal Closure in descending order'
            },
            {
                name: 'Seasonal Reopen Date (Ascending)',
                value: 'seasonalReopenDate',
                description: 'Sort by Seasonal Reopen Date in ascending order'
            },
            {
                name: 'Seasonal Reopen Date (Descending)',
                value: '-seasonalReopenDate',
                description: 'Sort by Seasonal Reopen Date in descending order'
            },
            {
                name: 'Short Name (Ascending)',
                value: 'shortName',
                description: 'Sort by Short Name in ascending order'
            },
            {
                name: 'Short Name (Descending)',
                value: '-shortName',
                description: 'Sort by Short Name in descending order'
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
                name: 'Split Surcharge (Ascending)',
                value: 'splitSurcharge',
                description: 'Sort by Split Surcharge in ascending order'
            },
            {
                name: 'Split Surcharge (Descending)',
                value: '-splitSurcharge',
                description: 'Sort by Split Surcharge in descending order'
            },
            {
                name: 'Telesales Notes (Ascending)',
                value: 'telesalesNotes',
                description: 'Sort by Telesales Notes in ascending order'
            },
            {
                name: 'Telesales Notes (Descending)',
                value: '-telesalesNotes',
                description: 'Sort by Telesales Notes in descending order'
            },
            {
                name: 'Title (Ascending)',
                value: 'title',
                description: 'Sort by Title in ascending order'
            },
            {
                name: 'Title (Descending)',
                value: '-title',
                description: 'Sort by Title in descending order'
            },
            {
                name: 'Vat Reg No (Ascending)',
                value: 'vatRegNo',
                description: 'Sort by Vat Reg No in ascending order'
            },
            {
                name: 'Vat Reg No (Descending)',
                value: '-vatRegNo',
                description: 'Sort by Vat Reg No in descending order'
            },
            {
                name: 'Vatable (Ascending)',
                value: 'vatable',
                description: 'Sort by Vatable in ascending order'
            },
            {
                name: 'Vatable (Descending)',
                value: '-vatable',
                description: 'Sort by Vatable in descending order'
            },
            {
                name: 'What3words (Ascending)',
                value: 'what3words',
                description: 'Sort by What3words in ascending order'
            },
            {
                name: 'What3words (Descending)',
                value: '-what3words',
                description: 'Sort by What3words in descending order'
            },
            {
                name: 'Which Price (Ascending)',
                value: 'whichPrice',
                description: 'Sort by Which Price in ascending order'
            },
            {
                name: 'Which Price (Descending)',
                value: '-whichPrice',
                description: 'Sort by Which Price in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:list'],
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
                resource: ['customers'],
                operation: ['customers:list'],
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
                name: 'Accept Substitutes',
                value: 'acceptSubstitutes',
                description: 'Include accept substitutes in the response'
            },
            {
                name: 'Access Control ID',
                value: 'accessControlID',
                description: 'Include access control ID in the response'
            },
            {
                name: 'Account Type',
                value: 'accountType',
                description: 'Include account type in the response'
            },
            {
                name: 'Account Type Desc',
                value: 'accountTypeDesc',
                description: 'Include account type desc in the response'
            },
            {
                name: 'Allocation Category',
                value: 'allocationCategory',
                description: 'Include allocation category in the response'
            },
            {
                name: 'Area Code',
                value: 'areaCode',
                description: 'Include area code in the response'
            },
            {
                name: 'Area Name',
                value: 'areaName',
                description: 'Include area name in the response'
            },
            {
                name: 'Average Weekly Spend',
                value: 'averageWeeklySpend',
                description: 'Include average weekly spend in the response'
            },
            {
                name: 'Back Orders',
                value: 'backOrders',
                description: 'Include back orders in the response'
            },
            {
                name: 'Bonded',
                value: 'bonded',
                description: 'Include bonded in the response'
            },
            {
                name: 'Cc Checkout Prices',
                value: 'ccCheckoutPrices',
                description: 'Include cc checkout prices in the response'
            },
            {
                name: 'Cc Del Both',
                value: 'ccDelBoth',
                description: 'Include cc del both in the response'
            },
            {
                name: 'Cc Max Cheque',
                value: 'ccMaxCheque',
                description: 'Include cc max cheque in the response'
            },
            {
                name: 'Cc No Signature',
                value: 'ccNoSignature',
                description: 'Include cc no signature in the response'
            },
            {
                name: 'Cc Price Matrix',
                value: 'ccPriceMatrix',
                description: 'Include cc price matrix in the response'
            },
            {
                name: 'Cc Surch Indicator',
                value: 'ccSurchIndicator',
                description: 'Include cc surch indicator in the response'
            },
            {
                name: 'Central Credit Balance',
                value: 'centralCreditBalance',
                description: 'Include central credit balance in the response'
            },
            {
                name: 'Central Credit Limit',
                value: 'centralCreditLimit',
                description: 'Include central credit limit in the response'
            },
            {
                name: 'Comment1',
                value: 'comment1',
                description: 'Include comment1 in the response'
            },
            {
                name: 'Comment2',
                value: 'comment2',
                description: 'Include comment2 in the response'
            },
            {
                name: 'Comment3',
                value: 'comment3',
                description: 'Include comment3 in the response'
            },
            {
                name: 'Comment4',
                value: 'comment4',
                description: 'Include comment4 in the response'
            },
            {
                name: 'Comment5',
                value: 'comment5',
                description: 'Include comment5 in the response'
            },
            {
                name: 'Company Code',
                value: 'companyCode',
                description: 'Include company code in the response'
            },
            {
                name: 'Contact',
                value: 'contact',
                description: 'Include contact in the response'
            },
            {
                name: 'Contract Only',
                value: 'contractOnly',
                description: 'Include contract only in the response'
            },
            {
                name: 'Contract Prices',
                value: 'contractPrices',
                description: 'Include contract prices in the response'
            },
            {
                name: 'Core Range',
                value: 'coreRange',
                description: 'Include core range in the response'
            },
            {
                name: 'Country Code',
                value: 'countryCode',
                description: 'Include country code in the response'
            },
            {
                name: 'Credit Balance',
                value: 'creditBalance',
                description: 'Include credit balance in the response'
            },
            {
                name: 'Credit Limit',
                value: 'creditLimit',
                description: 'Include credit limit in the response'
            },
            {
                name: 'Credit Overdue',
                value: 'creditOverdue',
                description: 'Include credit overdue in the response'
            },
            {
                name: 'Credit Status',
                value: 'creditStatus',
                description: 'Include credit status in the response'
            },
            {
                name: 'Currency Code',
                value: 'currencyCode',
                description: 'Include currency code in the response'
            },
            {
                name: 'Customer ANA',
                value: 'customerANA',
                description: 'Include customer ana in the response'
            },
            {
                name: 'Customer Code',
                value: 'customerCode',
                description: 'Include customer code in the response'
            },
            {
                name: 'Customer Discount',
                value: 'customerDiscount',
                description: 'Include customer discount in the response'
            },
            {
                name: 'Customer Group',
                value: 'customerGroup',
                description: 'Include customer group in the response'
            },
            {
                name: 'Customer Name',
                value: 'customerName',
                description: 'Include customer name in the response'
            },
            {
                name: 'Customer Order Ref',
                value: 'customerOrderRef',
                description: 'Include customer order ref in the response'
            },
            {
                name: 'Customer Product Code',
                value: 'customerProductCode',
                description: 'Include customer product code in the response'
            },
            {
                name: 'Customer Status',
                value: 'customerStatus',
                description: 'Include customer status in the response'
            },
            {
                name: 'Customer Type',
                value: 'customerType',
                description: 'Include customer type in the response'
            },
            {
                name: 'Customer Type Desc',
                value: 'customerTypeDesc',
                description: 'Include customer type desc in the response'
            },
            {
                name: 'Delivery Address1',
                value: 'deliveryAddress1',
                description: 'Include delivery address1 in the response'
            },
            {
                name: 'Delivery Address2',
                value: 'deliveryAddress2',
                description: 'Include delivery address2 in the response'
            },
            {
                name: 'Delivery Address3',
                value: 'deliveryAddress3',
                description: 'Include delivery address3 in the response'
            },
            {
                name: 'Delivery Address4',
                value: 'deliveryAddress4',
                description: 'Include delivery address4 in the response'
            },
            {
                name: 'Delivery Address5',
                value: 'deliveryAddress5',
                description: 'Include delivery address5 in the response'
            },
            {
                name: 'Delivery Postcode',
                value: 'deliveryPostcode',
                description: 'Include delivery postcode in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Depot Name',
                value: 'depotName',
                description: 'Include depot name in the response'
            },
            {
                name: 'Destination ID',
                value: 'destinationID',
                description: 'Include destination ID in the response'
            },
            {
                name: 'Drop No',
                value: 'dropNo',
                description: 'Include drop no in the response'
            },
            {
                name: 'Drs Exempt',
                value: 'drsExempt',
                description: 'Include drs exempt in the response'
            },
            {
                name: 'Economic Operator ID',
                value: 'economicOperatorID',
                description: 'Include economic operator ID in the response'
            },
            {
                name: 'Email',
                value: 'email',
                description: 'Include email in the response'
            },
            {
                name: 'Entry Type',
                value: 'entryType',
                description: 'Include entry type in the response'
            },
            {
                name: 'Facility ID',
                value: 'facilityID',
                description: 'Include facility ID in the response'
            },
            {
                name: 'Head Office',
                value: 'headOffice',
                description: 'Include head office in the response'
            },
            {
                name: 'Head Sub Branch',
                value: 'headSubBranch',
                description: 'Include head sub branch in the response'
            },
            {
                name: 'Immediate Credit Release',
                value: 'immediateCreditRelease',
                description: 'Include immediate credit release in the response'
            },
            {
                name: 'Invoice Address1',
                value: 'invoiceAddress1',
                description: 'Include invoice address1 in the response'
            },
            {
                name: 'Invoice Address2',
                value: 'invoiceAddress2',
                description: 'Include invoice address2 in the response'
            },
            {
                name: 'Invoice Address3',
                value: 'invoiceAddress3',
                description: 'Include invoice address3 in the response'
            },
            {
                name: 'Invoice Address4',
                value: 'invoiceAddress4',
                description: 'Include invoice address4 in the response'
            },
            {
                name: 'Invoice Address5',
                value: 'invoiceAddress5',
                description: 'Include invoice address5 in the response'
            },
            {
                name: 'Invoice Msg',
                value: 'invoiceMsg',
                description: 'Include invoice msg in the response'
            },
            {
                name: 'Invoice Postcode',
                value: 'invoicePostcode',
                description: 'Include invoice postcode in the response'
            },
            {
                name: 'Invoice Splits',
                value: 'invoiceSplits',
                description: 'Include invoice splits in the response'
            },
            {
                name: 'Item Code Used',
                value: 'itemCodeUsed',
                description: 'Include item code used in the response'
            },
            {
                name: 'Last Call',
                value: 'lastCall',
                description: 'Include last call in the response'
            },
            {
                name: 'Last Order',
                value: 'lastOrder',
                description: 'Include last order in the response'
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
                name: 'Liquor Licensing',
                value: 'liquorLicensing',
                description: 'Include liquor licensing in the response'
            },
            {
                name: 'Model Range',
                value: 'modelRange',
                description: 'Include model range in the response'
            },
            {
                name: 'National Product Codes',
                value: 'nationalProductCodes',
                description: 'Include national product codes in the response'
            },
            {
                name: 'Offer Code',
                value: 'offerCode',
                description: 'Include offer code in the response'
            },
            {
                name: 'Offer Type',
                value: 'offerType',
                description: 'Include offer type in the response'
            },
            {
                name: 'Operator Code',
                value: 'operatorCode',
                description: 'Include operator code in the response'
            },
            {
                name: 'Operator Name',
                value: 'operatorName',
                description: 'Include operator name in the response'
            },
            {
                name: 'Oporteo',
                value: 'oporteo',
                description: 'Include oporteo in the response'
            },
            {
                name: 'Ordering Depot',
                value: 'orderingDepot',
                description: 'Include ordering depot in the response'
            },
            {
                name: 'Organisation ANA',
                value: 'organisationANA',
                description: 'Include organisation ana in the response'
            },
            {
                name: 'Other Merge Limit',
                value: 'otherMergeLimit',
                description: 'Include other merge limit in the response'
            },
            {
                name: 'Over Split Surcharge',
                value: 'overSplitSurcharge',
                description: 'Include over split surcharge in the response'
            },
            {
                name: 'Phone No',
                value: 'phoneNo',
                description: 'Include phone no in the response'
            },
            {
                name: 'Picking Msg',
                value: 'pickingMsg',
                description: 'Include picking msg in the response'
            },
            {
                name: 'Pickup Method',
                value: 'pickupMethod',
                description: 'Include pickup method in the response'
            },
            {
                name: 'Plof Type',
                value: 'plofType',
                description: 'Include plof type in the response'
            },
            {
                name: 'Preferred Stock Depot',
                value: 'preferredStockDepot',
                description: 'Include preferred stock depot in the response'
            },
            {
                name: 'Price By Date',
                value: 'priceByDate',
                description: 'Include price by date in the response'
            },
            {
                name: 'Price Depot',
                value: 'priceDepot',
                description: 'Include price depot in the response'
            },
            {
                name: 'Price Logging',
                value: 'PriceLogging',
                description: 'Include price logging in the response'
            },
            {
                name: 'Price Matrix',
                value: 'priceMatrix',
                description: 'Include price matrix in the response'
            },
            {
                name: 'Primary Merge Limit',
                value: 'primaryMergeLimit',
                description: 'Include primary merge limit in the response'
            },
            {
                name: 'Private Email',
                value: 'privateEmail',
                description: 'Include private email in the response'
            },
            {
                name: 'Private Phone No',
                value: 'privatePhoneNo',
                description: 'Include private phone no in the response'
            },
            {
                name: 'Product Code',
                value: 'productCode',
                description: 'Include product code in the response'
            },
            {
                name: 'Proprietor',
                value: 'proprietor',
                description: 'Include proprietor in the response'
            },
            {
                name: 'Real Time Balance',
                value: 'realTimeBalance',
                description: 'Include real time balance in the response'
            },
            {
                name: 'Reasonable Qty',
                value: 'reasonableQty',
                description: 'Include reasonable qty in the response'
            },
            {
                name: 'Registered',
                value: 'registered',
                description: 'Include registered in the response'
            },
            {
                name: 'Registered Depot',
                value: 'registeredDepot',
                description: 'Include registered depot in the response'
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
                name: 'Retain Split Price',
                value: 'retainSplitPrice',
                description: 'Include retain split price in the response'
            },
            {
                name: 'Route',
                value: 'route',
                description: 'Include route in the response'
            },
            {
                name: 'Sales Value',
                value: 'salesValue',
                description: 'Include sales value in the response'
            },
            {
                name: 'Salutation',
                value: 'salutation',
                description: 'Include salutation in the response'
            },
            {
                name: 'Scheme Type',
                value: 'schemeType',
                description: 'Include scheme type in the response'
            },
            {
                name: 'Seasonal Closure',
                value: 'seasonalClosure',
                description: 'Include seasonal closure in the response'
            },
            {
                name: 'Seasonal Reopen Date',
                value: 'seasonalReopenDate',
                description: 'Include seasonal reopen date in the response'
            },
            {
                name: 'Short Name',
                value: 'shortName',
                description: 'Include short name in the response'
            },
            {
                name: 'Sl Code',
                value: 'slCode',
                description: 'Include sl code in the response'
            },
            {
                name: 'Split Surcharge',
                value: 'splitSurcharge',
                description: 'Include split surcharge in the response'
            },
            {
                name: 'Subs Policy',
                value: 'subsPolicy',
                description: 'Include subs policy in the response'
            },
            {
                name: 'Subscription Balance',
                value: 'subscriptionBalance',
                description: 'Include subscription balance in the response'
            },
            {
                name: 'Telesales Notes',
                value: 'telesalesNotes',
                description: 'Include telesales notes in the response'
            },
            {
                name: 'Term Code',
                value: 'termCode',
                description: 'Include term code in the response'
            },
            {
                name: 'Term Description',
                value: 'termDescription',
                description: 'Include term description in the response'
            },
            {
                name: 'Title',
                value: 'title',
                description: 'Include title in the response'
            },
            {
                name: 'Turnover',
                value: 'turnover',
                description: 'Include turnover in the response'
            },
            {
                name: 'Vat Reg No',
                value: 'vatRegNo',
                description: 'Include vat reg no in the response'
            },
            {
                name: 'Vatable',
                value: 'vatable',
                description: 'Include vatable in the response'
            },
            {
                name: 'View Statements',
                value: 'viewStatements',
                description: 'Include view statements in the response'
            },
            {
                name: 'View Transactions',
                value: 'viewTransactions',
                description: 'Include view transactions in the response'
            },
            {
                name: 'Week',
                value: 'week',
                description: 'Include week in the response'
            },
            {
                name: 'Week Sequence',
                value: 'weekSequence',
                description: 'Include week sequence in the response'
            },
            {
                name: 'What3words',
                value: 'what3words',
                description: 'Include what3words in the response'
            },
            {
                name: 'Which Price',
                value: 'whichPrice',
                description: 'Include which price in the response'
            },
            {
                name: 'Year To Date Sales Last Year',
                value: 'yearToDateSalesLastYear',
                description: 'Include year to date sales last year in the response'
            },
            {
                name: 'Year To Date Sales This Year',
                value: 'yearToDateSalesThisYear',
                description: 'Include year to date sales this year in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:list'],
                filterMode: ['common']
            }
        }
    }
];

export const customersCreateFields: INodeProperties[] = [
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
                resource: ['customers'],
                operation: ['customers:create']
            }
        }
    },
    {
        displayName: 'JSON Body',
        name: 'jsonBody',
        type: 'json',
        default: '{}',
        description: 'Raw JSON body for creating customer records. Provide the complete request payload.',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['json']
            }
        },
        placeholder: `{
  "customers": [
    {
      // Add your customer fields here
    }
  ]
}`
    },
    {
        displayName: 'Customer Code',
        name: 'customerCode',
        type: 'string',
        default: '',
        description: 'The customer code value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Template ID',
        name: 'templateID',
        type: 'string',
        default: '',
        description: 'Template Customer Code',
        required: true,
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Customer Name',
        name: 'customerName',
        type: 'string',
        default: '',
        description: 'Name',
        required: true,
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Delivery Address1',
        name: 'deliveryAddress1',
        type: 'string',
        default: '',
        description: 'Delivery Address Line 1',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Delivery Address2',
        name: 'deliveryAddress2',
        type: 'string',
        default: '',
        description: 'Delivery Address Line 2',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Delivery Address3',
        name: 'deliveryAddress3',
        type: 'string',
        default: '',
        description: 'Delivery Address Line 3',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Delivery Address4',
        name: 'deliveryAddress4',
        type: 'string',
        default: '',
        description: 'Delivery Address Line 4',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Delivery Address5',
        name: 'deliveryAddress5',
        type: 'string',
        default: '',
        description: 'Delivery Address Line 5',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Delivery Postcode',
        name: 'deliveryPostcode',
        type: 'string',
        default: '',
        description: 'Delivery Post Code',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Phone No',
        name: 'phoneNo',
        type: 'string',
        default: '',
        description: 'Telephone Number',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Email',
        name: 'email',
        type: 'string',
        default: '',
        description: 'Email Address',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['simple']
            }
        },
        placeholder: 'name@email.com'
    },
    {
        displayName: 'Return Get Response',
        name: 'returnGetResponse',
        type: 'boolean',
        default: false,
        description: 'Whether return full customer data instead of default create response',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Title',
        name: 'title',
        type: 'string',
        default: '',
        description: 'The title value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'What3words',
        name: 'what3words',
        type: 'string',
        default: '',
        description: 'What3Words Address (Optional)',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Private Phone No',
        name: 'privatePhoneNo',
        type: 'string',
        default: '',
        description: 'Private Telephone Number',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Vat Reg No',
        name: 'vatRegNo',
        type: 'string',
        default: '',
        description: 'VAT Registration number',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Vatable',
        name: 'vatable',
        type: 'boolean',
        default: false,
        description: 'Whether vAT',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Invoice Address1',
        name: 'invoiceAddress1',
        type: 'string',
        default: '',
        description: 'Invoice Address Line 1',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Invoice Address2',
        name: 'invoiceAddress2',
        type: 'string',
        default: '',
        description: 'Invoice Address Line 2',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Invoice Address3',
        name: 'invoiceAddress3',
        type: 'string',
        default: '',
        description: 'Invoice Address Line 3',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Invoice Address4',
        name: 'invoiceAddress4',
        type: 'string',
        default: '',
        description: 'Invoice Address Line 4',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Invoice Address5',
        name: 'invoiceAddress5',
        type: 'string',
        default: '',
        description: 'Invoice Address Line 5',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Invoice Postcode',
        name: 'invoicePostcode',
        type: 'string',
        default: '',
        description: 'Invoice Post Code',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Economic Operator ID',
        name: 'economicOperatorID',
        type: 'string',
        default: '',
        description: 'The economic operator ID value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Facility ID',
        name: 'facilityID',
        type: 'string',
        default: '',
        description: 'The facility ID value',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Destination ID',
        name: 'destinationID',
        type: 'string',
        default: '',
        description: 'Tobacco Destination Indicator',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Drs Exempt',
        name: 'drsExempt',
        type: 'boolean',
        default: false,
        description: 'Whether dRS Exemption',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Return Get Response',
        name: 'returnGetResponse',
        type: 'boolean',
        default: false,
        description: 'Whether return full customer data instead of default create response',
        displayOptions: {
            show: {
                resource: ['customers'],
                operation: ['customers:create'],
                createMode: ['advanced']
            }
        }
    }
];
