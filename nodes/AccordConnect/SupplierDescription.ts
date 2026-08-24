import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0006 - 24/08/26 - do not edit by hand

export const suppliersOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['suppliers'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'suppliers:create',
                description: 'Create a supplier',
                action: 'Create a supplier'
            },
            {
                name: 'Get',
                value: 'suppliers:get',
                description: 'Get a supplier',
                action: 'Get a supplier'
            },
            {
                name: 'List',
                value: 'suppliers:list',
                description: 'List many suppliers',
                action: 'List many suppliers'
            },
            {
                name: 'Update',
                value: 'suppliers:update',
                description: 'Update a supplier',
                action: 'Update a supplier'
            },
        ],
        default: 'suppliers:create',
    },
];


export const suppliersReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the supplier',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'supplierCode,lastUpdate,supplierName,addressLine1',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Account No',
                value: 'accountNo',
                description: 'Include account no in the response'
            },
            {
                name: 'Address Line1',
                value: 'addressLine1',
                description: 'Include address line1 in the response'
            },
            {
                name: 'Address Line2',
                value: 'addressLine2',
                description: 'Include address line2 in the response'
            },
            {
                name: 'Address Line3',
                value: 'addressLine3',
                description: 'Include address line3 in the response'
            },
            {
                name: 'Address Line4',
                value: 'addressLine4',
                description: 'Include address line4 in the response'
            },
            {
                name: 'Approved Status',
                value: 'approvedStatus',
                description: 'Include approved status in the response'
            },
            {
                name: 'Bay Number',
                value: 'bayNumber',
                description: 'Include bay number in the response'
            },
            {
                name: 'Bonuses',
                value: 'bonuses',
                description: 'Include bonuses in the response'
            },
            {
                name: 'Buyer Code',
                value: 'buyerCode',
                description: 'Include buyer code in the response'
            },
            {
                name: 'Buyer Name',
                value: 'buyerName',
                description: 'Include buyer name in the response'
            },
            {
                name: 'Buying Day',
                value: 'buyingDay',
                description: 'Include buying day in the response'
            },
            {
                name: 'Buying Group',
                value: 'buyingGroup',
                description: 'Include buying group in the response'
            },
            {
                name: 'Buying Group Buyer Code',
                value: 'buyingGroupBuyerCode',
                description: 'Include buying group buyer code in the response'
            },
            {
                name: 'Buying Group Buyer Name',
                value: 'buyingGroupBuyerName',
                description: 'Include buying group buyer name in the response'
            },
            {
                name: 'Buying Group Description',
                value: 'buyingGroupDescription',
                description: 'Include buying group description in the response'
            },
            {
                name: 'Buying Group Last Update',
                value: 'buyingGroupLastUpdate',
                description: 'Include buying group last update in the response'
            },
            {
                name: 'Carriage Text',
                value: 'carriageText',
                description: 'Include carriage text in the response'
            },
            {
                name: 'Carrier Contact',
                value: 'carrierContact',
                description: 'Include carrier contact in the response'
            },
            {
                name: 'Carrier Name',
                value: 'carrierName',
                description: 'Include carrier name in the response'
            },
            {
                name: 'Carrier Telephone No',
                value: 'carrierTelephoneNo',
                description: 'Include carrier telephone no in the response'
            },
            {
                name: 'Contact Name',
                value: 'contactName',
                description: 'Include contact name in the response'
            },
            {
                name: 'Cost Centre',
                value: 'costCentre',
                description: 'Include cost centre in the response'
            },
            {
                name: 'Country',
                value: 'country',
                description: 'Include country in the response'
            },
            {
                name: 'Deliver Order',
                value: 'deliverOrder',
                description: 'Include deliver order in the response'
            },
            {
                name: 'Delivery Address Code',
                value: 'deliveryAddressCode',
                description: 'Include delivery address code in the response'
            },
            {
                name: 'Delivery Instructions',
                value: 'deliveryInstructions',
                description: 'Include delivery instructions in the response'
            },
            {
                name: 'Demand Type',
                value: 'demandType',
                description: 'Include demand type in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Depot Demand Type',
                value: 'depotDemandType',
                description: 'Include depot demand type in the response'
            },
            {
                name: 'Depot Last Update',
                value: 'depotLastUpdate',
                description: 'Include depot last update in the response'
            },
            {
                name: 'Depot Start Day',
                value: 'depotStartDay',
                description: 'Include depot start day in the response'
            },
            {
                name: 'Depot Working Days',
                value: 'depotWorkingDays',
                description: 'Include depot working days in the response'
            },
            {
                name: 'Direct',
                value: 'direct',
                description: 'Include direct in the response'
            },
            {
                name: 'Drs Registered',
                value: 'drsRegistered',
                description: 'Include drs registered in the response'
            },
            {
                name: 'Edi Alternative Account Code',
                value: 'ediAlternativeAccountCode',
                description: 'Include edi alternative account code in the response'
            },
            {
                name: 'Edi Discount',
                value: 'ediDiscount',
                description: 'Include edi discount in the response'
            },
            {
                name: 'Edi Grn Update',
                value: 'ediGrnUpdate',
                description: 'Include edi grn update in the response'
            },
            {
                name: 'Edi Ipay Code',
                value: 'ediIpayCode',
                description: 'Include edi ipay code in the response'
            },
            {
                name: 'Edi Percentage Check',
                value: 'ediPercentageCheck',
                description: 'Include edi percentage check in the response'
            },
            {
                name: 'Edi Rpay Code',
                value: 'ediRpayCode',
                description: 'Include edi rpay code in the response'
            },
            {
                name: 'Edi Type',
                value: 'ediType',
                description: 'Include edi type in the response'
            },
            {
                name: 'Email',
                value: 'email',
                description: 'Include email in the response'
            },
            {
                name: 'Email Layout',
                value: 'emailLayout',
                description: 'Include email layout in the response'
            },
            {
                name: 'Exchange Rate',
                value: 'exchangeRate',
                description: 'Include exchange rate in the response'
            },
            {
                name: 'Fax Layout',
                value: 'faxLayout',
                description: 'Include fax layout in the response'
            },
            {
                name: 'Fax Number',
                value: 'faxNumber',
                description: 'Include fax number in the response'
            },
            {
                name: 'Grn Calculate Currency Value',
                value: 'grnCalculateCurrencyValue',
                description: 'Include grn calculate currency value in the response'
            },
            {
                name: 'Grn Comment1',
                value: 'grnComment1',
                description: 'Include grn comment1 in the response'
            },
            {
                name: 'Grn Comment2',
                value: 'grnComment2',
                description: 'Include grn comment2 in the response'
            },
            {
                name: 'Intrastat Delivery Terms',
                value: 'intrastatDeliveryTerms',
                description: 'Include intrastat delivery terms in the response'
            },
            {
                name: 'Invoice Format',
                value: 'invoiceFormat',
                description: 'Include invoice format in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Load Building',
                value: 'loadBuilding',
                description: 'Include load building in the response'
            },
            {
                name: 'Local Purchasing Only',
                value: 'localPurchasingOnly',
                description: 'Include local purchasing only in the response'
            },
            {
                name: 'Maximum Pallets',
                value: 'maximumPallets',
                description: 'Include maximum pallets in the response'
            },
            {
                name: 'Minimum Calculation Level',
                value: 'minimumCalculationLevel',
                description: 'Include minimum calculation level in the response'
            },
            {
                name: 'Minimum Order Quantity',
                value: 'minimumOrderQuantity',
                description: 'Include minimum order quantity in the response'
            },
            {
                name: 'Minimum Pallets',
                value: 'minimumPallets',
                description: 'Include minimum pallets in the response'
            },
            {
                name: 'Minimum Terms',
                value: 'minimumTerms',
                description: 'Include minimum terms in the response'
            },
            {
                name: 'Mode Of Transport',
                value: 'modeOfTransport',
                description: 'Include mode of transport in the response'
            },
            {
                name: 'Nl Code',
                value: 'nlCode',
                description: 'Include nl code in the response'
            },
            {
                name: 'Order Type',
                value: 'orderType',
                description: 'Include order type in the response'
            },
            {
                name: 'Override Exchange Rate',
                value: 'overrideExchangeRate',
                description: 'Include override exchange rate in the response'
            },
            {
                name: 'Post Code',
                value: 'postCode',
                description: 'Include post code in the response'
            },
            {
                name: 'Print Category',
                value: 'printCategory',
                description: 'Include print category in the response'
            },
            {
                name: 'Product Department',
                value: 'productDepartment',
                description: 'Include product department in the response'
            },
            {
                name: 'Purchase Order Type',
                value: 'purchaseOrderType',
                description: 'Include purchase order type in the response'
            },
            {
                name: 'Rep Name',
                value: 'repName',
                description: 'Include rep name in the response'
            },
            {
                name: 'Rep Telephone No',
                value: 'repTelephoneNo',
                description: 'Include rep telephone no in the response'
            },
            {
                name: 'Roq Calculated',
                value: 'roqCalculated',
                description: 'Include roq calculated in the response'
            },
            {
                name: 'Small Producer',
                value: 'smallProducer',
                description: 'Include small producer in the response'
            },
            {
                name: 'Start Day',
                value: 'startDay',
                description: 'Include start day in the response'
            },
            {
                name: 'Supplier ANA',
                value: 'supplierANA',
                description: 'Include supplier ana in the response'
            },
            {
                name: 'Supplier Code',
                value: 'supplierCode',
                description: 'Include supplier code in the response'
            },
            {
                name: 'Supplier Currency',
                value: 'supplierCurrency',
                description: 'Include supplier currency in the response'
            },
            {
                name: 'Supplier Division',
                value: 'supplierDivision',
                description: 'Include supplier division in the response'
            },
            {
                name: 'Supplier DOI',
                value: 'supplierDOI',
                description: 'Include supplier doi in the response'
            },
            {
                name: 'Supplier Lead Time',
                value: 'supplierLeadTime',
                description: 'Include supplier lead time in the response'
            },
            {
                name: 'Supplier Memo1',
                value: 'supplierMemo1',
                description: 'Include supplier memo1 in the response'
            },
            {
                name: 'Supplier Memo2',
                value: 'supplierMemo2',
                description: 'Include supplier memo2 in the response'
            },
            {
                name: 'Supplier Name',
                value: 'supplierName',
                description: 'Include supplier name in the response'
            },
            {
                name: 'Supplier Section',
                value: 'supplierSection',
                description: 'Include supplier section in the response'
            },
            {
                name: 'Supplier Sequence',
                value: 'supplierSequence',
                description: 'Include supplier sequence in the response'
            },
            {
                name: 'Supplier Status',
                value: 'supplierStatus',
                description: 'Include supplier status in the response'
            },
            {
                name: 'Target Margin',
                value: 'targetMargin',
                description: 'Include target margin in the response'
            },
            {
                name: 'Telephone Number',
                value: 'telephoneNumber',
                description: 'Include telephone number in the response'
            },
            {
                name: 'Terms Narrative',
                value: 'termsNarrative',
                description: 'Include terms narrative in the response'
            },
            {
                name: 'Tradanet',
                value: 'tradanet',
                description: 'Include tradanet in the response'
            },
            {
                name: 'Transfer From Depot',
                value: 'transferFromDepot',
                description: 'Include transfer from depot in the response'
            },
            {
                name: 'Vat Registration Number',
                value: 'vatRegistrationNumber',
                description: 'Include vat registration number in the response'
            },
            {
                name: 'Voice Supplier Name',
                value: 'voiceSupplierName',
                description: 'Include voice supplier name in the response'
            },
            {
                name: 'Which Price',
                value: 'whichPrice',
                description: 'Include which price in the response'
            },
            {
                name: 'Working Days',
                value: 'workingDays',
                description: 'Include working days in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:get']
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
                resource: ['suppliers'],
                operation: ['suppliers:get']
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
                resource: ['suppliers'],
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
                resource: ['suppliers'],
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
                resource: ['suppliers'],
                operation: ['get']
            }
        }
    }
];

export const suppliersUpdateFields: INodeProperties[] = [
    {
        displayName: 'Supplier Code',
        name: 'supplierCode',
        type: 'string',
        default: '',
        description: 'Supplier',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:update']
            }
        }
    },
    {
        displayName: 'Supplier Name',
        name: 'supplierName',
        type: 'string',
        default: '',
        description: 'Name',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:update']
            }
        }
    },
    {
        displayName: 'Address Line1',
        name: 'addressLine1',
        type: 'string',
        default: '',
        description: 'Supp-add1',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:update']
            }
        }
    },
    {
        displayName: 'Address Line2',
        name: 'addressLine2',
        type: 'string',
        default: '',
        description: 'Supp-add2',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:update']
            }
        }
    },
    {
        displayName: 'Address Line3',
        name: 'addressLine3',
        type: 'string',
        default: '',
        description: 'Supp-add3',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:update']
            }
        }
    },
    {
        displayName: 'Address Line4',
        name: 'addressLine4',
        type: 'string',
        default: '',
        description: 'Supp-add4',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:update']
            }
        }
    },
    {
        displayName: 'Post Code',
        name: 'postCode',
        type: 'string',
        default: '',
        description: 'The post code value',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:update']
            }
        }
    },
    {
        displayName: 'Supplier ANA',
        name: 'supplierANA',
        type: 'number',
        default: '',
        description: 'ANA code',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:update']
            }
        }
    },
    {
        displayName: 'Telephone Number',
        name: 'telephoneNumber',
        type: 'string',
        default: '',
        description: 'Phone no',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:update']
            }
        }
    },
    {
        displayName: 'Transfer From Depot',
        name: 'transferFromDepot',
        type: 'string',
        default: '',
        description: 'The transfer from depot value',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:update']
            }
        }
    },
    {
        displayName: 'Print Category',
        name: 'printCategory',
        type: 'number',
        default: '',
        description: 'Category',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:update']
            }
        }
    },
    {
        displayName: 'Product Department',
        name: 'productDepartment',
        type: 'string',
        default: '',
        description: 'Product Group Department',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:update']
            }
        }
    },
    {
        displayName: 'Supplier Memo1',
        name: 'supplierMemo1',
        type: 'string',
        default: '',
        description: 'Memo',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:update']
            }
        }
    },
    {
        displayName: 'Supplier Memo2',
        name: 'supplierMemo2',
        type: 'string',
        default: '',
        description: 'Memo',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:update']
            }
        }
    }
];

export const suppliersListFields: INodeProperties[] = [
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
                resource: ['suppliers'],
                operation: ['suppliers:list']
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
                resource: ['suppliers'],
                operation: ['suppliers:list'],
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
                resource: ['suppliers'],
                operation: ['suppliers:list'],
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
                resource: ['suppliers'],
                operation: ['suppliers:list'],
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
                        default: 'accountNo',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Account No',
                                value: 'accountNo'
                            },
                            {
                                name: 'Approved Status',
                                value: 'approvedStatus'
                            },
                            {
                                name: 'Buyer Code',
                                value: 'buyerCode'
                            },
                            {
                                name: 'Buying Group Buyer Code',
                                value: 'buyingGroupBuyerCode'
                            },
                            {
                                name: 'Buying Group Last Update',
                                value: 'buyingGroupLastUpdate'
                            },
                            {
                                name: 'Contact Name',
                                value: 'contactName'
                            },
                            {
                                name: 'Country',
                                value: 'country'
                            },
                            {
                                name: 'Deliver Order',
                                value: 'deliverOrder'
                            },
                            {
                                name: 'Depot Last Update',
                                value: 'depotLastUpdate'
                            },
                            {
                                name: 'Direct',
                                value: 'direct'
                            },
                            {
                                name: 'Drs Registered',
                                value: 'drsRegistered'
                            },
                            {
                                name: 'Edi Alternative Account Code',
                                value: 'ediAlternativeAccountCode'
                            },
                            {
                                name: 'Edi Discount',
                                value: 'ediDiscount'
                            },
                            {
                                name: 'Edi Grn Update',
                                value: 'ediGrnUpdate'
                            },
                            {
                                name: 'Edi Ipay Code',
                                value: 'ediIpayCode'
                            },
                            {
                                name: 'Edi Percentage Check',
                                value: 'ediPercentageCheck'
                            },
                            {
                                name: 'Edi Rpay Code',
                                value: 'ediRpayCode'
                            },
                            {
                                name: 'Edi Type',
                                value: 'ediType'
                            },
                            {
                                name: 'Email',
                                value: 'email'
                            },
                            {
                                name: 'Email Layout',
                                value: 'emailLayout'
                            },
                            {
                                name: 'Exchange Rate',
                                value: 'exchangeRate'
                            },
                            {
                                name: 'Fax Layout',
                                value: 'faxLayout'
                            },
                            {
                                name: 'Fax Number',
                                value: 'faxNumber'
                            },
                            {
                                name: 'Grn Calculate Currency Value',
                                value: 'grnCalculateCurrencyValue'
                            },
                            {
                                name: 'Hide Nested Keys',
                                value: 'hideNestedKeys'
                            },
                            {
                                name: 'Intrastat Delivery Terms',
                                value: 'intrastatDeliveryTerms'
                            },
                            {
                                name: 'Invoice Format',
                                value: 'invoiceFormat'
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
                                name: 'Local Purchasing Only',
                                value: 'localPurchasingOnly'
                            },
                            {
                                name: 'Mode Of Transport',
                                value: 'modeOfTransport'
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
                                name: 'Override Exchange Rate',
                                value: 'overrideExchangeRate'
                            },
                            {
                                name: 'Post Code',
                                value: 'postCode'
                            },
                            {
                                name: 'Print Category',
                                value: 'printCategory'
                            },
                            {
                                name: 'Product Department',
                                value: 'productDepartment'
                            },
                            {
                                name: 'Purchase Order Type',
                                value: 'purchaseOrderType'
                            },
                            {
                                name: 'Rep Name',
                                value: 'repName'
                            },
                            {
                                name: 'Rep Telephone No',
                                value: 'repTelephoneNo'
                            },
                            {
                                name: 'Small Producer',
                                value: 'smallProducer'
                            },
                            {
                                name: 'Supplier ANA',
                                value: 'supplierANA'
                            },
                            {
                                name: 'Supplier Code',
                                value: 'supplierCode'
                            },
                            {
                                name: 'Supplier Currency',
                                value: 'supplierCurrency'
                            },
                            {
                                name: 'Supplier Memo1',
                                value: 'supplierMemo1'
                            },
                            {
                                name: 'Supplier Memo2',
                                value: 'supplierMemo2'
                            },
                            {
                                name: 'Supplier Name',
                                value: 'supplierName'
                            },
                            {
                                name: 'Supplier Section',
                                value: 'supplierSection'
                            },
                            {
                                name: 'Supplier Sequence',
                                value: 'supplierSequence'
                            },
                            {
                                name: 'Supplier Status',
                                value: 'supplierStatus'
                            },
                            {
                                name: 'Telephone Number',
                                value: 'telephoneNumber'
                            },
                            {
                                name: 'Timeout',
                                value: 'timeout'
                            },
                            {
                                name: 'Tradanet',
                                value: 'tradanet'
                            },
                            {
                                name: 'Transfer From Depot',
                                value: 'transferFromDepot'
                            },
                            {
                                name: 'Vat Registration Number',
                                value: 'vatRegistrationNumber'
                            },
                            {
                                name: 'Voice Supplier Name',
                                value: 'voiceSupplierName'
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
                resource: ['suppliers'],
                operation: ['suppliers:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Supplier Code',
        name: 'supplierCode',
        type: 'string',
        default: '',
        description: 'Supplier (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'F74',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:list'],
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
        placeholder: '2021-12-10T11:37:05.527',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Supplier Name',
        name: 'supplierName',
        type: 'string',
        default: '',
        description: 'Supplier Name (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,contains,matches)',
        placeholder: 'McCall Poultry Farm',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Email',
        name: 'email',
        type: 'string',
        default: '',
        description: 'Email Address (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'sales@mccallfarms.co.uk',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:list'],
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
        placeholder: 'supplierCode,-lastUpdate',
        options: [
            {
                name: 'Account No (Ascending)',
                value: 'accountNo',
                description: 'Sort by Account No in ascending order'
            },
            {
                name: 'Account No (Descending)',
                value: '-accountNo',
                description: 'Sort by Account No in descending order'
            },
            {
                name: 'Approved Status (Ascending)',
                value: 'approvedStatus',
                description: 'Sort by Approved Status in ascending order'
            },
            {
                name: 'Approved Status (Descending)',
                value: '-approvedStatus',
                description: 'Sort by Approved Status in descending order'
            },
            {
                name: 'Buyer Code (Ascending)',
                value: 'buyerCode',
                description: 'Sort by Buyer Code in ascending order'
            },
            {
                name: 'Buyer Code (Descending)',
                value: '-buyerCode',
                description: 'Sort by Buyer Code in descending order'
            },
            {
                name: 'Buying Group Buyer Code (Ascending)',
                value: 'buyingGroupBuyerCode',
                description: 'Sort by Buying Group Buyer Code in ascending order'
            },
            {
                name: 'Buying Group Buyer Code (Descending)',
                value: '-buyingGroupBuyerCode',
                description: 'Sort by Buying Group Buyer Code in descending order'
            },
            {
                name: 'Buying Group Last Update (Ascending)',
                value: 'buyingGroupLastUpdate',
                description: 'Sort by Buying Group Last Update in ascending order'
            },
            {
                name: 'Buying Group Last Update (Descending)',
                value: '-buyingGroupLastUpdate',
                description: 'Sort by Buying Group Last Update in descending order'
            },
            {
                name: 'Contact Name (Ascending)',
                value: 'contactName',
                description: 'Sort by Contact Name in ascending order'
            },
            {
                name: 'Contact Name (Descending)',
                value: '-contactName',
                description: 'Sort by Contact Name in descending order'
            },
            {
                name: 'Country (Ascending)',
                value: 'country',
                description: 'Sort by Country in ascending order'
            },
            {
                name: 'Country (Descending)',
                value: '-country',
                description: 'Sort by Country in descending order'
            },
            {
                name: 'Deliver Order (Ascending)',
                value: 'deliverOrder',
                description: 'Sort by Deliver Order in ascending order'
            },
            {
                name: 'Deliver Order (Descending)',
                value: '-deliverOrder',
                description: 'Sort by Deliver Order in descending order'
            },
            {
                name: 'Depot Last Update (Ascending)',
                value: 'depotLastUpdate',
                description: 'Sort by Depot Last Update in ascending order'
            },
            {
                name: 'Depot Last Update (Descending)',
                value: '-depotLastUpdate',
                description: 'Sort by Depot Last Update in descending order'
            },
            {
                name: 'Direct (Ascending)',
                value: 'direct',
                description: 'Sort by Direct in ascending order'
            },
            {
                name: 'Direct (Descending)',
                value: '-direct',
                description: 'Sort by Direct in descending order'
            },
            {
                name: 'Drs Registered (Ascending)',
                value: 'drsRegistered',
                description: 'Sort by Drs Registered in ascending order'
            },
            {
                name: 'Drs Registered (Descending)',
                value: '-drsRegistered',
                description: 'Sort by Drs Registered in descending order'
            },
            {
                name: 'Edi Alternative Account Code (Ascending)',
                value: 'ediAlternativeAccountCode',
                description: 'Sort by Edi Alternative Account Code in ascending order'
            },
            {
                name: 'Edi Alternative Account Code (Descending)',
                value: '-ediAlternativeAccountCode',
                description: 'Sort by Edi Alternative Account Code in descending order'
            },
            {
                name: 'Edi Discount (Ascending)',
                value: 'ediDiscount',
                description: 'Sort by Edi Discount in ascending order'
            },
            {
                name: 'Edi Discount (Descending)',
                value: '-ediDiscount',
                description: 'Sort by Edi Discount in descending order'
            },
            {
                name: 'Edi Grn Update (Ascending)',
                value: 'ediGrnUpdate',
                description: 'Sort by Edi Grn Update in ascending order'
            },
            {
                name: 'Edi Grn Update (Descending)',
                value: '-ediGrnUpdate',
                description: 'Sort by Edi Grn Update in descending order'
            },
            {
                name: 'Edi Ipay Code (Ascending)',
                value: 'ediIpayCode',
                description: 'Sort by Edi Ipay Code in ascending order'
            },
            {
                name: 'Edi Ipay Code (Descending)',
                value: '-ediIpayCode',
                description: 'Sort by Edi Ipay Code in descending order'
            },
            {
                name: 'Edi Percentage Check (Ascending)',
                value: 'ediPercentageCheck',
                description: 'Sort by Edi Percentage Check in ascending order'
            },
            {
                name: 'Edi Percentage Check (Descending)',
                value: '-ediPercentageCheck',
                description: 'Sort by Edi Percentage Check in descending order'
            },
            {
                name: 'Edi Rpay Code (Ascending)',
                value: 'ediRpayCode',
                description: 'Sort by Edi Rpay Code in ascending order'
            },
            {
                name: 'Edi Rpay Code (Descending)',
                value: '-ediRpayCode',
                description: 'Sort by Edi Rpay Code in descending order'
            },
            {
                name: 'Edi Type (Ascending)',
                value: 'ediType',
                description: 'Sort by Edi Type in ascending order'
            },
            {
                name: 'Edi Type (Descending)',
                value: '-ediType',
                description: 'Sort by Edi Type in descending order'
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
                name: 'Email Layout (Ascending)',
                value: 'emailLayout',
                description: 'Sort by Email Layout in ascending order'
            },
            {
                name: 'Email Layout (Descending)',
                value: '-emailLayout',
                description: 'Sort by Email Layout in descending order'
            },
            {
                name: 'Exchange Rate (Ascending)',
                value: 'exchangeRate',
                description: 'Sort by Exchange Rate in ascending order'
            },
            {
                name: 'Exchange Rate (Descending)',
                value: '-exchangeRate',
                description: 'Sort by Exchange Rate in descending order'
            },
            {
                name: 'Fax Layout (Ascending)',
                value: 'faxLayout',
                description: 'Sort by Fax Layout in ascending order'
            },
            {
                name: 'Fax Layout (Descending)',
                value: '-faxLayout',
                description: 'Sort by Fax Layout in descending order'
            },
            {
                name: 'Fax Number (Ascending)',
                value: 'faxNumber',
                description: 'Sort by Fax Number in ascending order'
            },
            {
                name: 'Fax Number (Descending)',
                value: '-faxNumber',
                description: 'Sort by Fax Number in descending order'
            },
            {
                name: 'Grn Calculate Currency Value (Ascending)',
                value: 'grnCalculateCurrencyValue',
                description: 'Sort by Grn Calculate Currency Value in ascending order'
            },
            {
                name: 'Grn Calculate Currency Value (Descending)',
                value: '-grnCalculateCurrencyValue',
                description: 'Sort by Grn Calculate Currency Value in descending order'
            },
            {
                name: 'Intrastat Delivery Terms (Ascending)',
                value: 'intrastatDeliveryTerms',
                description: 'Sort by Intrastat Delivery Terms in ascending order'
            },
            {
                name: 'Intrastat Delivery Terms (Descending)',
                value: '-intrastatDeliveryTerms',
                description: 'Sort by Intrastat Delivery Terms in descending order'
            },
            {
                name: 'Invoice Format (Ascending)',
                value: 'invoiceFormat',
                description: 'Sort by Invoice Format in ascending order'
            },
            {
                name: 'Invoice Format (Descending)',
                value: '-invoiceFormat',
                description: 'Sort by Invoice Format in descending order'
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
                name: 'Local Purchasing Only (Ascending)',
                value: 'localPurchasingOnly',
                description: 'Sort by Local Purchasing Only in ascending order'
            },
            {
                name: 'Local Purchasing Only (Descending)',
                value: '-localPurchasingOnly',
                description: 'Sort by Local Purchasing Only in descending order'
            },
            {
                name: 'Mode Of Transport (Ascending)',
                value: 'modeOfTransport',
                description: 'Sort by Mode Of Transport in ascending order'
            },
            {
                name: 'Mode Of Transport (Descending)',
                value: '-modeOfTransport',
                description: 'Sort by Mode Of Transport in descending order'
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
                name: 'Override Exchange Rate (Ascending)',
                value: 'overrideExchangeRate',
                description: 'Sort by Override Exchange Rate in ascending order'
            },
            {
                name: 'Override Exchange Rate (Descending)',
                value: '-overrideExchangeRate',
                description: 'Sort by Override Exchange Rate in descending order'
            },
            {
                name: 'Post Code (Ascending)',
                value: 'postCode',
                description: 'Sort by Post Code in ascending order'
            },
            {
                name: 'Post Code (Descending)',
                value: '-postCode',
                description: 'Sort by Post Code in descending order'
            },
            {
                name: 'Print Category (Ascending)',
                value: 'printCategory',
                description: 'Sort by Print Category in ascending order'
            },
            {
                name: 'Print Category (Descending)',
                value: '-printCategory',
                description: 'Sort by Print Category in descending order'
            },
            {
                name: 'Product Department (Ascending)',
                value: 'productDepartment',
                description: 'Sort by Product Department in ascending order'
            },
            {
                name: 'Product Department (Descending)',
                value: '-productDepartment',
                description: 'Sort by Product Department in descending order'
            },
            {
                name: 'Purchase Order Type (Ascending)',
                value: 'purchaseOrderType',
                description: 'Sort by Purchase Order Type in ascending order'
            },
            {
                name: 'Purchase Order Type (Descending)',
                value: '-purchaseOrderType',
                description: 'Sort by Purchase Order Type in descending order'
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
                name: 'Rep Telephone No (Ascending)',
                value: 'repTelephoneNo',
                description: 'Sort by Rep Telephone No in ascending order'
            },
            {
                name: 'Rep Telephone No (Descending)',
                value: '-repTelephoneNo',
                description: 'Sort by Rep Telephone No in descending order'
            },
            {
                name: 'Small Producer (Ascending)',
                value: 'smallProducer',
                description: 'Sort by Small Producer in ascending order'
            },
            {
                name: 'Small Producer (Descending)',
                value: '-smallProducer',
                description: 'Sort by Small Producer in descending order'
            },
            {
                name: 'Supplier ANA (Ascending)',
                value: 'supplierANA',
                description: 'Sort by Supplier ANA in ascending order'
            },
            {
                name: 'Supplier ANA (Descending)',
                value: '-supplierANA',
                description: 'Sort by Supplier ANA in descending order'
            },
            {
                name: 'Supplier Code (Ascending)',
                value: 'supplierCode',
                description: 'Sort by Supplier Code in ascending order'
            },
            {
                name: 'Supplier Code (Descending)',
                value: '-supplierCode',
                description: 'Sort by Supplier Code in descending order'
            },
            {
                name: 'Supplier Currency (Ascending)',
                value: 'supplierCurrency',
                description: 'Sort by Supplier Currency in ascending order'
            },
            {
                name: 'Supplier Currency (Descending)',
                value: '-supplierCurrency',
                description: 'Sort by Supplier Currency in descending order'
            },
            {
                name: 'Supplier Memo1 (Ascending)',
                value: 'supplierMemo1',
                description: 'Sort by Supplier Memo1 in ascending order'
            },
            {
                name: 'Supplier Memo1 (Descending)',
                value: '-supplierMemo1',
                description: 'Sort by Supplier Memo1 in descending order'
            },
            {
                name: 'Supplier Memo2 (Ascending)',
                value: 'supplierMemo2',
                description: 'Sort by Supplier Memo2 in ascending order'
            },
            {
                name: 'Supplier Memo2 (Descending)',
                value: '-supplierMemo2',
                description: 'Sort by Supplier Memo2 in descending order'
            },
            {
                name: 'Supplier Name (Ascending)',
                value: 'supplierName',
                description: 'Sort by Supplier Name in ascending order'
            },
            {
                name: 'Supplier Name (Descending)',
                value: '-supplierName',
                description: 'Sort by Supplier Name in descending order'
            },
            {
                name: 'Supplier Section (Ascending)',
                value: 'supplierSection',
                description: 'Sort by Supplier Section in ascending order'
            },
            {
                name: 'Supplier Section (Descending)',
                value: '-supplierSection',
                description: 'Sort by Supplier Section in descending order'
            },
            {
                name: 'Supplier Sequence (Ascending)',
                value: 'supplierSequence',
                description: 'Sort by Supplier Sequence in ascending order'
            },
            {
                name: 'Supplier Sequence (Descending)',
                value: '-supplierSequence',
                description: 'Sort by Supplier Sequence in descending order'
            },
            {
                name: 'Supplier Status (Ascending)',
                value: 'supplierStatus',
                description: 'Sort by Supplier Status in ascending order'
            },
            {
                name: 'Supplier Status (Descending)',
                value: '-supplierStatus',
                description: 'Sort by Supplier Status in descending order'
            },
            {
                name: 'Telephone Number (Ascending)',
                value: 'telephoneNumber',
                description: 'Sort by Telephone Number in ascending order'
            },
            {
                name: 'Telephone Number (Descending)',
                value: '-telephoneNumber',
                description: 'Sort by Telephone Number in descending order'
            },
            {
                name: 'Tradanet (Ascending)',
                value: 'tradanet',
                description: 'Sort by Tradanet in ascending order'
            },
            {
                name: 'Tradanet (Descending)',
                value: '-tradanet',
                description: 'Sort by Tradanet in descending order'
            },
            {
                name: 'Transfer From Depot (Ascending)',
                value: 'transferFromDepot',
                description: 'Sort by Transfer From Depot in ascending order'
            },
            {
                name: 'Transfer From Depot (Descending)',
                value: '-transferFromDepot',
                description: 'Sort by Transfer From Depot in descending order'
            },
            {
                name: 'Vat Registration Number (Ascending)',
                value: 'vatRegistrationNumber',
                description: 'Sort by Vat Registration Number in ascending order'
            },
            {
                name: 'Vat Registration Number (Descending)',
                value: '-vatRegistrationNumber',
                description: 'Sort by Vat Registration Number in descending order'
            },
            {
                name: 'Voice Supplier Name (Ascending)',
                value: 'voiceSupplierName',
                description: 'Sort by Voice Supplier Name in ascending order'
            },
            {
                name: 'Voice Supplier Name (Descending)',
                value: '-voiceSupplierName',
                description: 'Sort by Voice Supplier Name in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:list'],
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
                resource: ['suppliers'],
                operation: ['suppliers:list'],
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
                name: 'Account No',
                value: 'accountNo',
                description: 'Include account no in the response'
            },
            {
                name: 'Address Line1',
                value: 'addressLine1',
                description: 'Include address line1 in the response'
            },
            {
                name: 'Address Line2',
                value: 'addressLine2',
                description: 'Include address line2 in the response'
            },
            {
                name: 'Address Line3',
                value: 'addressLine3',
                description: 'Include address line3 in the response'
            },
            {
                name: 'Address Line4',
                value: 'addressLine4',
                description: 'Include address line4 in the response'
            },
            {
                name: 'Approved Status',
                value: 'approvedStatus',
                description: 'Include approved status in the response'
            },
            {
                name: 'Bay Number',
                value: 'bayNumber',
                description: 'Include bay number in the response'
            },
            {
                name: 'Bonuses',
                value: 'bonuses',
                description: 'Include bonuses in the response'
            },
            {
                name: 'Buyer Code',
                value: 'buyerCode',
                description: 'Include buyer code in the response'
            },
            {
                name: 'Buyer Name',
                value: 'buyerName',
                description: 'Include buyer name in the response'
            },
            {
                name: 'Buying Day',
                value: 'buyingDay',
                description: 'Include buying day in the response'
            },
            {
                name: 'Buying Group',
                value: 'buyingGroup',
                description: 'Include buying group in the response'
            },
            {
                name: 'Buying Group Buyer Code',
                value: 'buyingGroupBuyerCode',
                description: 'Include buying group buyer code in the response'
            },
            {
                name: 'Buying Group Buyer Name',
                value: 'buyingGroupBuyerName',
                description: 'Include buying group buyer name in the response'
            },
            {
                name: 'Buying Group Description',
                value: 'buyingGroupDescription',
                description: 'Include buying group description in the response'
            },
            {
                name: 'Buying Group Last Update',
                value: 'buyingGroupLastUpdate',
                description: 'Include buying group last update in the response'
            },
            {
                name: 'Carriage Text',
                value: 'carriageText',
                description: 'Include carriage text in the response'
            },
            {
                name: 'Carrier Contact',
                value: 'carrierContact',
                description: 'Include carrier contact in the response'
            },
            {
                name: 'Carrier Name',
                value: 'carrierName',
                description: 'Include carrier name in the response'
            },
            {
                name: 'Carrier Telephone No',
                value: 'carrierTelephoneNo',
                description: 'Include carrier telephone no in the response'
            },
            {
                name: 'Contact Name',
                value: 'contactName',
                description: 'Include contact name in the response'
            },
            {
                name: 'Cost Centre',
                value: 'costCentre',
                description: 'Include cost centre in the response'
            },
            {
                name: 'Country',
                value: 'country',
                description: 'Include country in the response'
            },
            {
                name: 'Deliver Order',
                value: 'deliverOrder',
                description: 'Include deliver order in the response'
            },
            {
                name: 'Delivery Address Code',
                value: 'deliveryAddressCode',
                description: 'Include delivery address code in the response'
            },
            {
                name: 'Delivery Instructions',
                value: 'deliveryInstructions',
                description: 'Include delivery instructions in the response'
            },
            {
                name: 'Demand Type',
                value: 'demandType',
                description: 'Include demand type in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Depot Demand Type',
                value: 'depotDemandType',
                description: 'Include depot demand type in the response'
            },
            {
                name: 'Depot Last Update',
                value: 'depotLastUpdate',
                description: 'Include depot last update in the response'
            },
            {
                name: 'Depot Start Day',
                value: 'depotStartDay',
                description: 'Include depot start day in the response'
            },
            {
                name: 'Depot Working Days',
                value: 'depotWorkingDays',
                description: 'Include depot working days in the response'
            },
            {
                name: 'Direct',
                value: 'direct',
                description: 'Include direct in the response'
            },
            {
                name: 'Drs Registered',
                value: 'drsRegistered',
                description: 'Include drs registered in the response'
            },
            {
                name: 'Edi Alternative Account Code',
                value: 'ediAlternativeAccountCode',
                description: 'Include edi alternative account code in the response'
            },
            {
                name: 'Edi Discount',
                value: 'ediDiscount',
                description: 'Include edi discount in the response'
            },
            {
                name: 'Edi Grn Update',
                value: 'ediGrnUpdate',
                description: 'Include edi grn update in the response'
            },
            {
                name: 'Edi Ipay Code',
                value: 'ediIpayCode',
                description: 'Include edi ipay code in the response'
            },
            {
                name: 'Edi Percentage Check',
                value: 'ediPercentageCheck',
                description: 'Include edi percentage check in the response'
            },
            {
                name: 'Edi Rpay Code',
                value: 'ediRpayCode',
                description: 'Include edi rpay code in the response'
            },
            {
                name: 'Edi Type',
                value: 'ediType',
                description: 'Include edi type in the response'
            },
            {
                name: 'Email',
                value: 'email',
                description: 'Include email in the response'
            },
            {
                name: 'Email Layout',
                value: 'emailLayout',
                description: 'Include email layout in the response'
            },
            {
                name: 'Exchange Rate',
                value: 'exchangeRate',
                description: 'Include exchange rate in the response'
            },
            {
                name: 'Fax Layout',
                value: 'faxLayout',
                description: 'Include fax layout in the response'
            },
            {
                name: 'Fax Number',
                value: 'faxNumber',
                description: 'Include fax number in the response'
            },
            {
                name: 'Grn Calculate Currency Value',
                value: 'grnCalculateCurrencyValue',
                description: 'Include grn calculate currency value in the response'
            },
            {
                name: 'Grn Comment1',
                value: 'grnComment1',
                description: 'Include grn comment1 in the response'
            },
            {
                name: 'Grn Comment2',
                value: 'grnComment2',
                description: 'Include grn comment2 in the response'
            },
            {
                name: 'Intrastat Delivery Terms',
                value: 'intrastatDeliveryTerms',
                description: 'Include intrastat delivery terms in the response'
            },
            {
                name: 'Invoice Format',
                value: 'invoiceFormat',
                description: 'Include invoice format in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Load Building',
                value: 'loadBuilding',
                description: 'Include load building in the response'
            },
            {
                name: 'Local Purchasing Only',
                value: 'localPurchasingOnly',
                description: 'Include local purchasing only in the response'
            },
            {
                name: 'Maximum Pallets',
                value: 'maximumPallets',
                description: 'Include maximum pallets in the response'
            },
            {
                name: 'Minimum Calculation Level',
                value: 'minimumCalculationLevel',
                description: 'Include minimum calculation level in the response'
            },
            {
                name: 'Minimum Order Quantity',
                value: 'minimumOrderQuantity',
                description: 'Include minimum order quantity in the response'
            },
            {
                name: 'Minimum Pallets',
                value: 'minimumPallets',
                description: 'Include minimum pallets in the response'
            },
            {
                name: 'Minimum Terms',
                value: 'minimumTerms',
                description: 'Include minimum terms in the response'
            },
            {
                name: 'Mode Of Transport',
                value: 'modeOfTransport',
                description: 'Include mode of transport in the response'
            },
            {
                name: 'Nl Code',
                value: 'nlCode',
                description: 'Include nl code in the response'
            },
            {
                name: 'Order Type',
                value: 'orderType',
                description: 'Include order type in the response'
            },
            {
                name: 'Override Exchange Rate',
                value: 'overrideExchangeRate',
                description: 'Include override exchange rate in the response'
            },
            {
                name: 'Post Code',
                value: 'postCode',
                description: 'Include post code in the response'
            },
            {
                name: 'Print Category',
                value: 'printCategory',
                description: 'Include print category in the response'
            },
            {
                name: 'Product Department',
                value: 'productDepartment',
                description: 'Include product department in the response'
            },
            {
                name: 'Purchase Order Type',
                value: 'purchaseOrderType',
                description: 'Include purchase order type in the response'
            },
            {
                name: 'Rep Name',
                value: 'repName',
                description: 'Include rep name in the response'
            },
            {
                name: 'Rep Telephone No',
                value: 'repTelephoneNo',
                description: 'Include rep telephone no in the response'
            },
            {
                name: 'Roq Calculated',
                value: 'roqCalculated',
                description: 'Include roq calculated in the response'
            },
            {
                name: 'Small Producer',
                value: 'smallProducer',
                description: 'Include small producer in the response'
            },
            {
                name: 'Start Day',
                value: 'startDay',
                description: 'Include start day in the response'
            },
            {
                name: 'Supplier ANA',
                value: 'supplierANA',
                description: 'Include supplier ana in the response'
            },
            {
                name: 'Supplier Code',
                value: 'supplierCode',
                description: 'Include supplier code in the response'
            },
            {
                name: 'Supplier Currency',
                value: 'supplierCurrency',
                description: 'Include supplier currency in the response'
            },
            {
                name: 'Supplier Division',
                value: 'supplierDivision',
                description: 'Include supplier division in the response'
            },
            {
                name: 'Supplier DOI',
                value: 'supplierDOI',
                description: 'Include supplier doi in the response'
            },
            {
                name: 'Supplier Lead Time',
                value: 'supplierLeadTime',
                description: 'Include supplier lead time in the response'
            },
            {
                name: 'Supplier Memo1',
                value: 'supplierMemo1',
                description: 'Include supplier memo1 in the response'
            },
            {
                name: 'Supplier Memo2',
                value: 'supplierMemo2',
                description: 'Include supplier memo2 in the response'
            },
            {
                name: 'Supplier Name',
                value: 'supplierName',
                description: 'Include supplier name in the response'
            },
            {
                name: 'Supplier Section',
                value: 'supplierSection',
                description: 'Include supplier section in the response'
            },
            {
                name: 'Supplier Sequence',
                value: 'supplierSequence',
                description: 'Include supplier sequence in the response'
            },
            {
                name: 'Supplier Status',
                value: 'supplierStatus',
                description: 'Include supplier status in the response'
            },
            {
                name: 'Target Margin',
                value: 'targetMargin',
                description: 'Include target margin in the response'
            },
            {
                name: 'Telephone Number',
                value: 'telephoneNumber',
                description: 'Include telephone number in the response'
            },
            {
                name: 'Terms Narrative',
                value: 'termsNarrative',
                description: 'Include terms narrative in the response'
            },
            {
                name: 'Tradanet',
                value: 'tradanet',
                description: 'Include tradanet in the response'
            },
            {
                name: 'Transfer From Depot',
                value: 'transferFromDepot',
                description: 'Include transfer from depot in the response'
            },
            {
                name: 'Vat Registration Number',
                value: 'vatRegistrationNumber',
                description: 'Include vat registration number in the response'
            },
            {
                name: 'Voice Supplier Name',
                value: 'voiceSupplierName',
                description: 'Include voice supplier name in the response'
            },
            {
                name: 'Which Price',
                value: 'whichPrice',
                description: 'Include which price in the response'
            },
            {
                name: 'Working Days',
                value: 'workingDays',
                description: 'Include working days in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:list'],
                filterMode: ['common']
            }
        }
    }
];

export const suppliersCreateFields: INodeProperties[] = [
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
                resource: ['suppliers'],
                operation: ['suppliers:create']
            }
        }
    },
    {
        displayName: 'JSON Body',
        name: 'jsonBody',
        type: 'json',
        default: '{}',
        description: 'Raw JSON body for creating supplier records. Provide the complete request payload.',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:create'],
                createMode: ['json']
            }
        },
        placeholder: `{
  "suppliers": [
    {
      // Add your supplier fields here
    }
  ]
}`
    },
    {
        displayName: 'Supplier Code',
        name: 'supplierCode',
        type: 'string',
        default: '',
        description: 'Supplier',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Supplier Name',
        name: 'supplierName',
        type: 'string',
        default: '',
        description: 'Name',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Address Line1',
        name: 'addressLine1',
        type: 'string',
        default: '',
        description: 'Supp-add1',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Address Line2',
        name: 'addressLine2',
        type: 'string',
        default: '',
        description: 'Supp-add2',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Address Line3',
        name: 'addressLine3',
        type: 'string',
        default: '',
        description: 'Supp-add3',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Address Line4',
        name: 'addressLine4',
        type: 'string',
        default: '',
        description: 'Supp-add4',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Post Code',
        name: 'postCode',
        type: 'string',
        default: '',
        description: 'The post code value',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Supplier ANA',
        name: 'supplierANA',
        type: 'number',
        default: '',
        description: 'ANA code',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Telephone Number',
        name: 'telephoneNumber',
        type: 'string',
        default: '',
        description: 'Phone no',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Transfer From Depot',
        name: 'transferFromDepot',
        type: 'string',
        default: '',
        description: 'The transfer from depot value',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Print Category',
        name: 'printCategory',
        type: 'number',
        default: '',
        description: 'Category',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Product Department',
        name: 'productDepartment',
        type: 'string',
        default: '',
        description: 'Product Group Department',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Supplier Memo1',
        name: 'supplierMemo1',
        type: 'string',
        default: '',
        description: 'Memo',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Supplier Memo2',
        name: 'supplierMemo2',
        type: 'string',
        default: '',
        description: 'Memo',
        displayOptions: {
            show: {
                resource: ['suppliers'],
                operation: ['suppliers:create'],
                createMode: ['advanced']
            }
        }
    }
];
