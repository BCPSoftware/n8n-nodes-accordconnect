import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0008 - 26/08/26 - do not edit by hand

export const depotsOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['depots'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'depots:get',
                description: 'Get a depot',
                action: 'Get a depot'
            },
            {
                name: 'List',
                value: 'depots:list',
                description: 'List many depots',
                action: 'List many depots'
            },
        ],
        default: 'depots:get',
    },
];


export const depotsReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the depot',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['depots'],
                operation: ['depots:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'depot,depotName,lastUpdate,companyCode',
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
                name: 'B2b Guest Customer',
                value: 'b2bGuestCustomer',
                description: 'Include b2b guest customer in the response'
            },
            {
                name: 'B2b Guest Pickup Method',
                value: 'b2bGuestPickupMethod',
                description: 'Include b2b guest pickup method in the response'
            },
            {
                name: 'B2c Guest Customer',
                value: 'b2cGuestCustomer',
                description: 'Include b2c guest customer in the response'
            },
            {
                name: 'B2c Guest Pickup Method',
                value: 'b2cGuestPickupMethod',
                description: 'Include b2c guest pickup method in the response'
            },
            {
                name: 'Base Contract Price',
                value: 'baseContractPrice',
                description: 'Include base contract price in the response'
            },
            {
                name: 'Base Contract Price Type',
                value: 'baseContractPriceType',
                description: 'Include base contract price type in the response'
            },
            {
                name: 'Base Contract Type',
                value: 'baseContractType',
                description: 'Include base contract type in the response'
            },
            {
                name: 'Bonded Depot',
                value: 'bondedDepot',
                description: 'Include bonded depot in the response'
            },
            {
                name: 'Cash Carry Depot',
                value: 'cashCarryDepot',
                description: 'Include cash carry depot in the response'
            },
            {
                name: 'Cc Booked',
                value: 'ccBooked',
                description: 'Include cc booked in the response'
            },
            {
                name: 'Cc Credit Card',
                value: 'ccCreditCard',
                description: 'Include cc credit card in the response'
            },
            {
                name: 'Cc Credit Limit',
                value: 'ccCreditLimit',
                description: 'Include cc credit limit in the response'
            },
            {
                name: 'Cc Exception Days',
                value: 'ccExceptionDays',
                description: 'Include cc exception days in the response'
            },
            {
                name: 'Cc Max Cheque',
                value: 'ccMaxCheque',
                description: 'Include cc max cheque in the response'
            },
            {
                name: 'Cc Notification Message',
                value: 'ccNotificationMessage',
                description: 'Include cc notification message in the response'
            },
            {
                name: 'Cc Notification Percentage',
                value: 'ccNotificationPercentage',
                description: 'Include cc notification percentage in the response'
            },
            {
                name: 'Cc Notification Value',
                value: 'ccNotificationValue',
                description: 'Include cc notification value in the response'
            },
            {
                name: 'Cc Pickup Type',
                value: 'ccPickupType',
                description: 'Include cc pickup type in the response'
            },
            {
                name: 'Cc Price Variance',
                value: 'ccPriceVariance',
                description: 'Include cc price variance in the response'
            },
            {
                name: 'Cc Reception',
                value: 'ccReception',
                description: 'Include cc reception in the response'
            },
            {
                name: 'Cc Threshold Message',
                value: 'ccThresholdMessage',
                description: 'Include cc threshold message in the response'
            },
            {
                name: 'Cc Threshold Value',
                value: 'ccThresholdValue',
                description: 'Include cc threshold value in the response'
            },
            {
                name: 'Cc Time Out',
                value: 'ccTimeOut',
                description: 'Include cc time out in the response'
            },
            {
                name: 'Cc Void Max Value',
                value: 'ccVoidMaxValue',
                description: 'Include cc void max value in the response'
            },
            {
                name: 'Company Code',
                value: 'companyCode',
                description: 'Include company code in the response'
            },
            {
                name: 'Cost Centre',
                value: 'costCentre',
                description: 'Include cost centre in the response'
            },
            {
                name: 'Country Code',
                value: 'countryCode',
                description: 'Include country code in the response'
            },
            {
                name: 'Credit Limit',
                value: 'creditLimit',
                description: 'Include credit limit in the response'
            },
            {
                name: 'Currency Code',
                value: 'currencyCode',
                description: 'Include currency code in the response'
            },
            {
                name: 'Days To Deliver',
                value: 'daysToDeliver',
                description: 'Include days to deliver in the response'
            },
            {
                name: 'De Vat Rsp',
                value: 'deVatRsp',
                description: 'Include de vat rsp in the response'
            },
            {
                name: 'Delivered Depot',
                value: 'deliveredDepot',
                description: 'Include delivered depot in the response'
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
                name: 'Delivery ANA',
                value: 'deliveryANA',
                description: 'Include delivery ana in the response'
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
                name: 'Division Code',
                value: 'divisionCode',
                description: 'Include division code in the response'
            },
            {
                name: 'Duty Trigger',
                value: 'dutyTrigger',
                description: 'Include duty trigger in the response'
            },
            {
                name: 'Email',
                value: 'email',
                description: 'Include email in the response'
            },
            {
                name: 'Euro Currency Code',
                value: 'euroCurrencyCode',
                description: 'Include euro currency code in the response'
            },
            {
                name: 'Export Reg No',
                value: 'exportRegNo',
                description: 'Include export reg no in the response'
            },
            {
                name: 'Grn Address1',
                value: 'grnAddress1',
                description: 'Include grn address1 in the response'
            },
            {
                name: 'Grn Address2',
                value: 'grnAddress2',
                description: 'Include grn address2 in the response'
            },
            {
                name: 'Grn Address3',
                value: 'grnAddress3',
                description: 'Include grn address3 in the response'
            },
            {
                name: 'Grn Address4',
                value: 'grnAddress4',
                description: 'Include grn address4 in the response'
            },
            {
                name: 'Grn Postcode',
                value: 'grnPostcode',
                description: 'Include grn postcode in the response'
            },
            {
                name: 'Grn Vat Reg No',
                value: 'grnVatRegNo',
                description: 'Include grn vat reg no in the response'
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
                name: 'Invoice Currency Code',
                value: 'invoiceCurrencyCode',
                description: 'Include invoice currency code in the response'
            },
            {
                name: 'Invoice Postcode',
                value: 'invoicePostcode',
                description: 'Include invoice postcode in the response'
            },
            {
                name: 'Invoice Vat Reg No',
                value: 'invoiceVatRegNo',
                description: 'Include invoice vat reg no in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Loyalty Depot',
                value: 'loyaltyDepot',
                description: 'Include loyalty depot in the response'
            },
            {
                name: 'Net Contract Price',
                value: 'netContractPrice',
                description: 'Include net contract price in the response'
            },
            {
                name: 'Pl Account Code',
                value: 'plAccountCode',
                description: 'Include pl account code in the response'
            },
            {
                name: 'Pl Cost Centre',
                value: 'plCostCentre',
                description: 'Include pl cost centre in the response'
            },
            {
                name: 'Pl Division Code',
                value: 'plDivisionCode',
                description: 'Include pl division code in the response'
            },
            {
                name: 'Pl Ledger Code',
                value: 'plLedgerCode',
                description: 'Include pl ledger code in the response'
            },
            {
                name: 'Price Depot',
                value: 'priceDepot',
                description: 'Include price depot in the response'
            },
            {
                name: 'Price Matrix',
                value: 'priceMatrix',
                description: 'Include price matrix in the response'
            },
            {
                name: 'Registered Pickup Method',
                value: 'registeredPickupMethod',
                description: 'Include registered pickup method in the response'
            },
            {
                name: 'Sl Ledger Code',
                value: 'slLedgerCode',
                description: 'Include sl ledger code in the response'
            },
            {
                name: 'Start Day',
                value: 'startDay',
                description: 'Include start day in the response'
            },
            {
                name: 'Telephone',
                value: 'telephone',
                description: 'Include telephone in the response'
            },
            {
                name: 'VAT Reg No',
                value: 'VATRegNo',
                description: 'Include vat reg no in the response'
            },
            {
                name: 'Work Days',
                value: 'workDays',
                description: 'Include work days in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['depots'],
                operation: ['depots:get']
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
                resource: ['depots'],
                operation: ['depots:get']
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
                resource: ['depots'],
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
                resource: ['depots'],
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
                resource: ['depots'],
                operation: ['get']
            }
        }
    }
];

export const depotsListFields: INodeProperties[] = [
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
                resource: ['depots'],
                operation: ['depots:list']
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
                resource: ['depots'],
                operation: ['depots:list'],
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
                resource: ['depots'],
                operation: ['depots:list'],
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
                resource: ['depots'],
                operation: ['depots:list'],
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
                                name: 'Base Contract Price',
                                value: 'baseContractPrice'
                            },
                            {
                                name: 'Base Contract Price Type',
                                value: 'baseContractPriceType'
                            },
                            {
                                name: 'Base Contract Type',
                                value: 'baseContractType'
                            },
                            {
                                name: 'Bonded Depot',
                                value: 'bondedDepot'
                            },
                            {
                                name: 'Cash Carry Depot',
                                value: 'cashCarryDepot'
                            },
                            {
                                name: 'Cc Booked',
                                value: 'ccBooked'
                            },
                            {
                                name: 'Cc Credit Card',
                                value: 'ccCreditCard'
                            },
                            {
                                name: 'Cc Credit Limit',
                                value: 'ccCreditLimit'
                            },
                            {
                                name: 'Cc Max Cheque',
                                value: 'ccMaxCheque'
                            },
                            {
                                name: 'Cc Notification Message',
                                value: 'ccNotificationMessage'
                            },
                            {
                                name: 'Cc Notification Percentage',
                                value: 'ccNotificationPercentage'
                            },
                            {
                                name: 'Cc Notification Value',
                                value: 'ccNotificationValue'
                            },
                            {
                                name: 'Cc Pickup Type',
                                value: 'ccPickupType'
                            },
                            {
                                name: 'Cc Price Variance',
                                value: 'ccPriceVariance'
                            },
                            {
                                name: 'Cc Reception',
                                value: 'ccReception'
                            },
                            {
                                name: 'Cc Threshold Message',
                                value: 'ccThresholdMessage'
                            },
                            {
                                name: 'Cc Threshold Value',
                                value: 'ccThresholdValue'
                            },
                            {
                                name: 'Cc Time Out',
                                value: 'ccTimeOut'
                            },
                            {
                                name: 'Cc Void Max Value',
                                value: 'ccVoidMaxValue'
                            },
                            {
                                name: 'Company Code',
                                value: 'companyCode'
                            },
                            {
                                name: 'Cost Centre',
                                value: 'costCentre'
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
                                name: 'Currency Code',
                                value: 'currencyCode'
                            },
                            {
                                name: 'De Vat Rsp',
                                value: 'deVatRsp'
                            },
                            {
                                name: 'Delivered Depot',
                                value: 'deliveredDepot'
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
                                name: 'Delivery ANA',
                                value: 'deliveryANA'
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
                                name: 'Depot Name',
                                value: 'depotName'
                            },
                            {
                                name: 'Division Code',
                                value: 'divisionCode'
                            },
                            {
                                name: 'Duty Trigger',
                                value: 'dutyTrigger'
                            },
                            {
                                name: 'Email',
                                value: 'email'
                            },
                            {
                                name: 'Euro Currency Code',
                                value: 'euroCurrencyCode'
                            },
                            {
                                name: 'Export Reg No',
                                value: 'exportRegNo'
                            },
                            {
                                name: 'Grn Address1',
                                value: 'grnAddress1'
                            },
                            {
                                name: 'Grn Address2',
                                value: 'grnAddress2'
                            },
                            {
                                name: 'Grn Address3',
                                value: 'grnAddress3'
                            },
                            {
                                name: 'Grn Address4',
                                value: 'grnAddress4'
                            },
                            {
                                name: 'Grn Postcode',
                                value: 'grnPostcode'
                            },
                            {
                                name: 'Grn Vat Reg No',
                                value: 'grnVatRegNo'
                            },
                            {
                                name: 'Hide Nested Keys',
                                value: 'hideNestedKeys'
                            },
                            {
                                name: 'Invoice Address1',
                                value: 'invoiceAddress1'
                            },
                            {
                                name: 'Invoice Address2',
                                value: 'invoiceAddress2'
                            },
                            {
                                name: 'Invoice Address3',
                                value: 'invoiceAddress3'
                            },
                            {
                                name: 'Invoice Address4',
                                value: 'invoiceAddress4'
                            },
                            {
                                name: 'Invoice Currency Code',
                                value: 'invoiceCurrencyCode'
                            },
                            {
                                name: 'Invoice Postcode',
                                value: 'invoicePostcode'
                            },
                            {
                                name: 'Invoice Vat Reg No',
                                value: 'invoiceVatRegNo'
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
                                name: 'Loyalty Depot',
                                value: 'loyaltyDepot'
                            },
                            {
                                name: 'Nested',
                                value: 'nested'
                            },
                            {
                                name: 'Net Contract Price',
                                value: 'netContractPrice'
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
                                name: 'Pl Account Code',
                                value: 'plAccountCode'
                            },
                            {
                                name: 'Pl Cost Centre',
                                value: 'plCostCentre'
                            },
                            {
                                name: 'Pl Division Code',
                                value: 'plDivisionCode'
                            },
                            {
                                name: 'Pl Ledger Code',
                                value: 'plLedgerCode'
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
                                name: 'Sl Ledger Code',
                                value: 'slLedgerCode'
                            },
                            {
                                name: 'Start Day',
                                value: 'startDay'
                            },
                            {
                                name: 'Telephone',
                                value: 'telephone'
                            },
                            {
                                name: 'Timeout',
                                value: 'timeout'
                            },
                            {
                                name: 'VAT Reg No',
                                value: 'VATRegNo'
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
                resource: ['depots'],
                operation: ['depots:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Depot Name',
        name: 'depotName',
        type: 'string',
        default: '',
        description: 'Depot Name (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'Master Depot',
        displayOptions: {
            show: {
                resource: ['depots'],
                operation: ['depots:list'],
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
                resource: ['depots'],
                operation: ['depots:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Company Code',
        name: 'companyCode',
        type: 'string',
        default: '',
        description: 'Company Code (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'cap',
        displayOptions: {
            show: {
                resource: ['depots'],
                operation: ['depots:list'],
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
        placeholder: 'depot,-depotName',
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
                name: 'Base Contract Price (Ascending)',
                value: 'baseContractPrice',
                description: 'Sort by Base Contract Price in ascending order'
            },
            {
                name: 'Base Contract Price (Descending)',
                value: '-baseContractPrice',
                description: 'Sort by Base Contract Price in descending order'
            },
            {
                name: 'Base Contract Price Type (Ascending)',
                value: 'baseContractPriceType',
                description: 'Sort by Base Contract Price Type in ascending order'
            },
            {
                name: 'Base Contract Price Type (Descending)',
                value: '-baseContractPriceType',
                description: 'Sort by Base Contract Price Type in descending order'
            },
            {
                name: 'Base Contract Type (Ascending)',
                value: 'baseContractType',
                description: 'Sort by Base Contract Type in ascending order'
            },
            {
                name: 'Base Contract Type (Descending)',
                value: '-baseContractType',
                description: 'Sort by Base Contract Type in descending order'
            },
            {
                name: 'Bonded Depot (Ascending)',
                value: 'bondedDepot',
                description: 'Sort by Bonded Depot in ascending order'
            },
            {
                name: 'Bonded Depot (Descending)',
                value: '-bondedDepot',
                description: 'Sort by Bonded Depot in descending order'
            },
            {
                name: 'Cash Carry Depot (Ascending)',
                value: 'cashCarryDepot',
                description: 'Sort by Cash Carry Depot in ascending order'
            },
            {
                name: 'Cash Carry Depot (Descending)',
                value: '-cashCarryDepot',
                description: 'Sort by Cash Carry Depot in descending order'
            },
            {
                name: 'Cc Booked (Ascending)',
                value: 'ccBooked',
                description: 'Sort by Cc Booked in ascending order'
            },
            {
                name: 'Cc Booked (Descending)',
                value: '-ccBooked',
                description: 'Sort by Cc Booked in descending order'
            },
            {
                name: 'Cc Credit Card (Ascending)',
                value: 'ccCreditCard',
                description: 'Sort by Cc Credit Card in ascending order'
            },
            {
                name: 'Cc Credit Card (Descending)',
                value: '-ccCreditCard',
                description: 'Sort by Cc Credit Card in descending order'
            },
            {
                name: 'Cc Credit Limit (Ascending)',
                value: 'ccCreditLimit',
                description: 'Sort by Cc Credit Limit in ascending order'
            },
            {
                name: 'Cc Credit Limit (Descending)',
                value: '-ccCreditLimit',
                description: 'Sort by Cc Credit Limit in descending order'
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
                name: 'Cc Notification Message (Ascending)',
                value: 'ccNotificationMessage',
                description: 'Sort by Cc Notification Message in ascending order'
            },
            {
                name: 'Cc Notification Message (Descending)',
                value: '-ccNotificationMessage',
                description: 'Sort by Cc Notification Message in descending order'
            },
            {
                name: 'Cc Notification Percentage (Ascending)',
                value: 'ccNotificationPercentage',
                description: 'Sort by Cc Notification Percentage in ascending order'
            },
            {
                name: 'Cc Notification Percentage (Descending)',
                value: '-ccNotificationPercentage',
                description: 'Sort by Cc Notification Percentage in descending order'
            },
            {
                name: 'Cc Notification Value (Ascending)',
                value: 'ccNotificationValue',
                description: 'Sort by Cc Notification Value in ascending order'
            },
            {
                name: 'Cc Notification Value (Descending)',
                value: '-ccNotificationValue',
                description: 'Sort by Cc Notification Value in descending order'
            },
            {
                name: 'Cc Pickup Type (Ascending)',
                value: 'ccPickupType',
                description: 'Sort by Cc Pickup Type in ascending order'
            },
            {
                name: 'Cc Pickup Type (Descending)',
                value: '-ccPickupType',
                description: 'Sort by Cc Pickup Type in descending order'
            },
            {
                name: 'Cc Price Variance (Ascending)',
                value: 'ccPriceVariance',
                description: 'Sort by Cc Price Variance in ascending order'
            },
            {
                name: 'Cc Price Variance (Descending)',
                value: '-ccPriceVariance',
                description: 'Sort by Cc Price Variance in descending order'
            },
            {
                name: 'Cc Reception (Ascending)',
                value: 'ccReception',
                description: 'Sort by Cc Reception in ascending order'
            },
            {
                name: 'Cc Reception (Descending)',
                value: '-ccReception',
                description: 'Sort by Cc Reception in descending order'
            },
            {
                name: 'Cc Threshold Message (Ascending)',
                value: 'ccThresholdMessage',
                description: 'Sort by Cc Threshold Message in ascending order'
            },
            {
                name: 'Cc Threshold Message (Descending)',
                value: '-ccThresholdMessage',
                description: 'Sort by Cc Threshold Message in descending order'
            },
            {
                name: 'Cc Threshold Value (Ascending)',
                value: 'ccThresholdValue',
                description: 'Sort by Cc Threshold Value in ascending order'
            },
            {
                name: 'Cc Threshold Value (Descending)',
                value: '-ccThresholdValue',
                description: 'Sort by Cc Threshold Value in descending order'
            },
            {
                name: 'Cc Time Out (Ascending)',
                value: 'ccTimeOut',
                description: 'Sort by Cc Time Out in ascending order'
            },
            {
                name: 'Cc Time Out (Descending)',
                value: '-ccTimeOut',
                description: 'Sort by Cc Time Out in descending order'
            },
            {
                name: 'Cc Void Max Value (Ascending)',
                value: 'ccVoidMaxValue',
                description: 'Sort by Cc Void Max Value in ascending order'
            },
            {
                name: 'Cc Void Max Value (Descending)',
                value: '-ccVoidMaxValue',
                description: 'Sort by Cc Void Max Value in descending order'
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
                name: 'Cost Centre (Ascending)',
                value: 'costCentre',
                description: 'Sort by Cost Centre in ascending order'
            },
            {
                name: 'Cost Centre (Descending)',
                value: '-costCentre',
                description: 'Sort by Cost Centre in descending order'
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
                name: 'Currency Code (Ascending)',
                value: 'currencyCode',
                description: 'Sort by Currency Code in ascending order'
            },
            {
                name: 'Currency Code (Descending)',
                value: '-currencyCode',
                description: 'Sort by Currency Code in descending order'
            },
            {
                name: 'De Vat Rsp (Ascending)',
                value: 'deVatRsp',
                description: 'Sort by De Vat Rsp in ascending order'
            },
            {
                name: 'De Vat Rsp (Descending)',
                value: '-deVatRsp',
                description: 'Sort by De Vat Rsp in descending order'
            },
            {
                name: 'Delivered Depot (Ascending)',
                value: 'deliveredDepot',
                description: 'Sort by Delivered Depot in ascending order'
            },
            {
                name: 'Delivered Depot (Descending)',
                value: '-deliveredDepot',
                description: 'Sort by Delivered Depot in descending order'
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
                name: 'Delivery ANA (Ascending)',
                value: 'deliveryANA',
                description: 'Sort by Delivery ANA in ascending order'
            },
            {
                name: 'Delivery ANA (Descending)',
                value: '-deliveryANA',
                description: 'Sort by Delivery ANA in descending order'
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
                name: 'Depot Name (Ascending)',
                value: 'depotName',
                description: 'Sort by Depot Name in ascending order'
            },
            {
                name: 'Depot Name (Descending)',
                value: '-depotName',
                description: 'Sort by Depot Name in descending order'
            },
            {
                name: 'Division Code (Ascending)',
                value: 'divisionCode',
                description: 'Sort by Division Code in ascending order'
            },
            {
                name: 'Division Code (Descending)',
                value: '-divisionCode',
                description: 'Sort by Division Code in descending order'
            },
            {
                name: 'Duty Trigger (Ascending)',
                value: 'dutyTrigger',
                description: 'Sort by Duty Trigger in ascending order'
            },
            {
                name: 'Duty Trigger (Descending)',
                value: '-dutyTrigger',
                description: 'Sort by Duty Trigger in descending order'
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
                name: 'Euro Currency Code (Ascending)',
                value: 'euroCurrencyCode',
                description: 'Sort by Euro Currency Code in ascending order'
            },
            {
                name: 'Euro Currency Code (Descending)',
                value: '-euroCurrencyCode',
                description: 'Sort by Euro Currency Code in descending order'
            },
            {
                name: 'Export Reg No (Ascending)',
                value: 'exportRegNo',
                description: 'Sort by Export Reg No in ascending order'
            },
            {
                name: 'Export Reg No (Descending)',
                value: '-exportRegNo',
                description: 'Sort by Export Reg No in descending order'
            },
            {
                name: 'Grn Address1 (Ascending)',
                value: 'grnAddress1',
                description: 'Sort by Grn Address1 in ascending order'
            },
            {
                name: 'Grn Address1 (Descending)',
                value: '-grnAddress1',
                description: 'Sort by Grn Address1 in descending order'
            },
            {
                name: 'Grn Address2 (Ascending)',
                value: 'grnAddress2',
                description: 'Sort by Grn Address2 in ascending order'
            },
            {
                name: 'Grn Address2 (Descending)',
                value: '-grnAddress2',
                description: 'Sort by Grn Address2 in descending order'
            },
            {
                name: 'Grn Address3 (Ascending)',
                value: 'grnAddress3',
                description: 'Sort by Grn Address3 in ascending order'
            },
            {
                name: 'Grn Address3 (Descending)',
                value: '-grnAddress3',
                description: 'Sort by Grn Address3 in descending order'
            },
            {
                name: 'Grn Address4 (Ascending)',
                value: 'grnAddress4',
                description: 'Sort by Grn Address4 in ascending order'
            },
            {
                name: 'Grn Address4 (Descending)',
                value: '-grnAddress4',
                description: 'Sort by Grn Address4 in descending order'
            },
            {
                name: 'Grn Postcode (Ascending)',
                value: 'grnPostcode',
                description: 'Sort by Grn Postcode in ascending order'
            },
            {
                name: 'Grn Postcode (Descending)',
                value: '-grnPostcode',
                description: 'Sort by Grn Postcode in descending order'
            },
            {
                name: 'Grn Vat Reg No (Ascending)',
                value: 'grnVatRegNo',
                description: 'Sort by Grn Vat Reg No in ascending order'
            },
            {
                name: 'Grn Vat Reg No (Descending)',
                value: '-grnVatRegNo',
                description: 'Sort by Grn Vat Reg No in descending order'
            },
            {
                name: 'Invoice Address1 (Ascending)',
                value: 'invoiceAddress1',
                description: 'Sort by Invoice Address1 in ascending order'
            },
            {
                name: 'Invoice Address1 (Descending)',
                value: '-invoiceAddress1',
                description: 'Sort by Invoice Address1 in descending order'
            },
            {
                name: 'Invoice Address2 (Ascending)',
                value: 'invoiceAddress2',
                description: 'Sort by Invoice Address2 in ascending order'
            },
            {
                name: 'Invoice Address2 (Descending)',
                value: '-invoiceAddress2',
                description: 'Sort by Invoice Address2 in descending order'
            },
            {
                name: 'Invoice Address3 (Ascending)',
                value: 'invoiceAddress3',
                description: 'Sort by Invoice Address3 in ascending order'
            },
            {
                name: 'Invoice Address3 (Descending)',
                value: '-invoiceAddress3',
                description: 'Sort by Invoice Address3 in descending order'
            },
            {
                name: 'Invoice Address4 (Ascending)',
                value: 'invoiceAddress4',
                description: 'Sort by Invoice Address4 in ascending order'
            },
            {
                name: 'Invoice Address4 (Descending)',
                value: '-invoiceAddress4',
                description: 'Sort by Invoice Address4 in descending order'
            },
            {
                name: 'Invoice Currency Code (Ascending)',
                value: 'invoiceCurrencyCode',
                description: 'Sort by Invoice Currency Code in ascending order'
            },
            {
                name: 'Invoice Currency Code (Descending)',
                value: '-invoiceCurrencyCode',
                description: 'Sort by Invoice Currency Code in descending order'
            },
            {
                name: 'Invoice Postcode (Ascending)',
                value: 'invoicePostcode',
                description: 'Sort by Invoice Postcode in ascending order'
            },
            {
                name: 'Invoice Postcode (Descending)',
                value: '-invoicePostcode',
                description: 'Sort by Invoice Postcode in descending order'
            },
            {
                name: 'Invoice Vat Reg No (Ascending)',
                value: 'invoiceVatRegNo',
                description: 'Sort by Invoice Vat Reg No in ascending order'
            },
            {
                name: 'Invoice Vat Reg No (Descending)',
                value: '-invoiceVatRegNo',
                description: 'Sort by Invoice Vat Reg No in descending order'
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
                name: 'Loyalty Depot (Ascending)',
                value: 'loyaltyDepot',
                description: 'Sort by Loyalty Depot in ascending order'
            },
            {
                name: 'Loyalty Depot (Descending)',
                value: '-loyaltyDepot',
                description: 'Sort by Loyalty Depot in descending order'
            },
            {
                name: 'Net Contract Price (Ascending)',
                value: 'netContractPrice',
                description: 'Sort by Net Contract Price in ascending order'
            },
            {
                name: 'Net Contract Price (Descending)',
                value: '-netContractPrice',
                description: 'Sort by Net Contract Price in descending order'
            },
            {
                name: 'Pl Account Code (Ascending)',
                value: 'plAccountCode',
                description: 'Sort by Pl Account Code in ascending order'
            },
            {
                name: 'Pl Account Code (Descending)',
                value: '-plAccountCode',
                description: 'Sort by Pl Account Code in descending order'
            },
            {
                name: 'Pl Cost Centre (Ascending)',
                value: 'plCostCentre',
                description: 'Sort by Pl Cost Centre in ascending order'
            },
            {
                name: 'Pl Cost Centre (Descending)',
                value: '-plCostCentre',
                description: 'Sort by Pl Cost Centre in descending order'
            },
            {
                name: 'Pl Division Code (Ascending)',
                value: 'plDivisionCode',
                description: 'Sort by Pl Division Code in ascending order'
            },
            {
                name: 'Pl Division Code (Descending)',
                value: '-plDivisionCode',
                description: 'Sort by Pl Division Code in descending order'
            },
            {
                name: 'Pl Ledger Code (Ascending)',
                value: 'plLedgerCode',
                description: 'Sort by Pl Ledger Code in ascending order'
            },
            {
                name: 'Pl Ledger Code (Descending)',
                value: '-plLedgerCode',
                description: 'Sort by Pl Ledger Code in descending order'
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
                name: 'Sl Ledger Code (Ascending)',
                value: 'slLedgerCode',
                description: 'Sort by Sl Ledger Code in ascending order'
            },
            {
                name: 'Sl Ledger Code (Descending)',
                value: '-slLedgerCode',
                description: 'Sort by Sl Ledger Code in descending order'
            },
            {
                name: 'Start Day (Ascending)',
                value: 'startDay',
                description: 'Sort by Start Day in ascending order'
            },
            {
                name: 'Start Day (Descending)',
                value: '-startDay',
                description: 'Sort by Start Day in descending order'
            },
            {
                name: 'Telephone (Ascending)',
                value: 'telephone',
                description: 'Sort by Telephone in ascending order'
            },
            {
                name: 'Telephone (Descending)',
                value: '-telephone',
                description: 'Sort by Telephone in descending order'
            },
            {
                name: 'VAT Reg No (Ascending)',
                value: 'VATRegNo',
                description: 'Sort by VAT Reg No in ascending order'
            },
            {
                name: 'VAT Reg No (Descending)',
                value: '-VATRegNo',
                description: 'Sort by VAT Reg No in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['depots'],
                operation: ['depots:list'],
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
                resource: ['depots'],
                operation: ['depots:list'],
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
                name: 'B2b Guest Customer',
                value: 'b2bGuestCustomer',
                description: 'Include b2b guest customer in the response'
            },
            {
                name: 'B2b Guest Pickup Method',
                value: 'b2bGuestPickupMethod',
                description: 'Include b2b guest pickup method in the response'
            },
            {
                name: 'B2c Guest Customer',
                value: 'b2cGuestCustomer',
                description: 'Include b2c guest customer in the response'
            },
            {
                name: 'B2c Guest Pickup Method',
                value: 'b2cGuestPickupMethod',
                description: 'Include b2c guest pickup method in the response'
            },
            {
                name: 'Base Contract Price',
                value: 'baseContractPrice',
                description: 'Include base contract price in the response'
            },
            {
                name: 'Base Contract Price Type',
                value: 'baseContractPriceType',
                description: 'Include base contract price type in the response'
            },
            {
                name: 'Base Contract Type',
                value: 'baseContractType',
                description: 'Include base contract type in the response'
            },
            {
                name: 'Bonded Depot',
                value: 'bondedDepot',
                description: 'Include bonded depot in the response'
            },
            {
                name: 'Cash Carry Depot',
                value: 'cashCarryDepot',
                description: 'Include cash carry depot in the response'
            },
            {
                name: 'Cc Booked',
                value: 'ccBooked',
                description: 'Include cc booked in the response'
            },
            {
                name: 'Cc Credit Card',
                value: 'ccCreditCard',
                description: 'Include cc credit card in the response'
            },
            {
                name: 'Cc Credit Limit',
                value: 'ccCreditLimit',
                description: 'Include cc credit limit in the response'
            },
            {
                name: 'Cc Exception Days',
                value: 'ccExceptionDays',
                description: 'Include cc exception days in the response'
            },
            {
                name: 'Cc Max Cheque',
                value: 'ccMaxCheque',
                description: 'Include cc max cheque in the response'
            },
            {
                name: 'Cc Notification Message',
                value: 'ccNotificationMessage',
                description: 'Include cc notification message in the response'
            },
            {
                name: 'Cc Notification Percentage',
                value: 'ccNotificationPercentage',
                description: 'Include cc notification percentage in the response'
            },
            {
                name: 'Cc Notification Value',
                value: 'ccNotificationValue',
                description: 'Include cc notification value in the response'
            },
            {
                name: 'Cc Pickup Type',
                value: 'ccPickupType',
                description: 'Include cc pickup type in the response'
            },
            {
                name: 'Cc Price Variance',
                value: 'ccPriceVariance',
                description: 'Include cc price variance in the response'
            },
            {
                name: 'Cc Reception',
                value: 'ccReception',
                description: 'Include cc reception in the response'
            },
            {
                name: 'Cc Threshold Message',
                value: 'ccThresholdMessage',
                description: 'Include cc threshold message in the response'
            },
            {
                name: 'Cc Threshold Value',
                value: 'ccThresholdValue',
                description: 'Include cc threshold value in the response'
            },
            {
                name: 'Cc Time Out',
                value: 'ccTimeOut',
                description: 'Include cc time out in the response'
            },
            {
                name: 'Cc Void Max Value',
                value: 'ccVoidMaxValue',
                description: 'Include cc void max value in the response'
            },
            {
                name: 'Company Code',
                value: 'companyCode',
                description: 'Include company code in the response'
            },
            {
                name: 'Cost Centre',
                value: 'costCentre',
                description: 'Include cost centre in the response'
            },
            {
                name: 'Country Code',
                value: 'countryCode',
                description: 'Include country code in the response'
            },
            {
                name: 'Credit Limit',
                value: 'creditLimit',
                description: 'Include credit limit in the response'
            },
            {
                name: 'Currency Code',
                value: 'currencyCode',
                description: 'Include currency code in the response'
            },
            {
                name: 'Days To Deliver',
                value: 'daysToDeliver',
                description: 'Include days to deliver in the response'
            },
            {
                name: 'De Vat Rsp',
                value: 'deVatRsp',
                description: 'Include de vat rsp in the response'
            },
            {
                name: 'Delivered Depot',
                value: 'deliveredDepot',
                description: 'Include delivered depot in the response'
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
                name: 'Delivery ANA',
                value: 'deliveryANA',
                description: 'Include delivery ana in the response'
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
                name: 'Division Code',
                value: 'divisionCode',
                description: 'Include division code in the response'
            },
            {
                name: 'Duty Trigger',
                value: 'dutyTrigger',
                description: 'Include duty trigger in the response'
            },
            {
                name: 'Email',
                value: 'email',
                description: 'Include email in the response'
            },
            {
                name: 'Euro Currency Code',
                value: 'euroCurrencyCode',
                description: 'Include euro currency code in the response'
            },
            {
                name: 'Export Reg No',
                value: 'exportRegNo',
                description: 'Include export reg no in the response'
            },
            {
                name: 'Grn Address1',
                value: 'grnAddress1',
                description: 'Include grn address1 in the response'
            },
            {
                name: 'Grn Address2',
                value: 'grnAddress2',
                description: 'Include grn address2 in the response'
            },
            {
                name: 'Grn Address3',
                value: 'grnAddress3',
                description: 'Include grn address3 in the response'
            },
            {
                name: 'Grn Address4',
                value: 'grnAddress4',
                description: 'Include grn address4 in the response'
            },
            {
                name: 'Grn Postcode',
                value: 'grnPostcode',
                description: 'Include grn postcode in the response'
            },
            {
                name: 'Grn Vat Reg No',
                value: 'grnVatRegNo',
                description: 'Include grn vat reg no in the response'
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
                name: 'Invoice Currency Code',
                value: 'invoiceCurrencyCode',
                description: 'Include invoice currency code in the response'
            },
            {
                name: 'Invoice Postcode',
                value: 'invoicePostcode',
                description: 'Include invoice postcode in the response'
            },
            {
                name: 'Invoice Vat Reg No',
                value: 'invoiceVatRegNo',
                description: 'Include invoice vat reg no in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Loyalty Depot',
                value: 'loyaltyDepot',
                description: 'Include loyalty depot in the response'
            },
            {
                name: 'Net Contract Price',
                value: 'netContractPrice',
                description: 'Include net contract price in the response'
            },
            {
                name: 'Pl Account Code',
                value: 'plAccountCode',
                description: 'Include pl account code in the response'
            },
            {
                name: 'Pl Cost Centre',
                value: 'plCostCentre',
                description: 'Include pl cost centre in the response'
            },
            {
                name: 'Pl Division Code',
                value: 'plDivisionCode',
                description: 'Include pl division code in the response'
            },
            {
                name: 'Pl Ledger Code',
                value: 'plLedgerCode',
                description: 'Include pl ledger code in the response'
            },
            {
                name: 'Price Depot',
                value: 'priceDepot',
                description: 'Include price depot in the response'
            },
            {
                name: 'Price Matrix',
                value: 'priceMatrix',
                description: 'Include price matrix in the response'
            },
            {
                name: 'Registered Pickup Method',
                value: 'registeredPickupMethod',
                description: 'Include registered pickup method in the response'
            },
            {
                name: 'Sl Ledger Code',
                value: 'slLedgerCode',
                description: 'Include sl ledger code in the response'
            },
            {
                name: 'Start Day',
                value: 'startDay',
                description: 'Include start day in the response'
            },
            {
                name: 'Telephone',
                value: 'telephone',
                description: 'Include telephone in the response'
            },
            {
                name: 'VAT Reg No',
                value: 'VATRegNo',
                description: 'Include vat reg no in the response'
            },
            {
                name: 'Work Days',
                value: 'workDays',
                description: 'Include work days in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['depots'],
                operation: ['depots:list'],
                filterMode: ['common']
            }
        }
    }
];
