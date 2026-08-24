import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0006 - 24/08/26 - do not edit by hand

export const purchaseOrdersOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'purchaseOrders:create',
                description: 'Create a purchaseOrder',
                action: 'Create a purchase order'
            },
            {
                name: 'Get',
                value: 'purchaseOrders:get',
                description: 'Get a purchaseOrder',
                action: 'Get a purchase order'
            },
            {
                name: 'List',
                value: 'purchaseOrders:list',
                description: 'List many purchaseOrders',
                action: 'List many purchase orders'
            },
            {
                name: 'Update',
                value: 'purchaseOrders:update',
                description: 'Update a purchaseOrder',
                action: 'Update a purchase order'
            },
        ],
        default: 'purchaseOrders:create',
    },
];


// IncludeLines URL mapping configuration
export const includeLinesConfig = {
    linesResource: 'purchaseOrderLines',
    getEndpoint: '/purchaseOrders/{id}/purchaseOrderLines',
    listEndpoint: '/purchaseOrders/purchaseOrderLines',
    description: 'purchase order line items'
};


export const purchaseOrdersReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the purchaseOrder',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'depot,purchaseOrderNumber,purchaseOrderSuffix,lastUpdate',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Arrival Time',
                value: 'arrivalTime',
                description: 'Include arrival time in the response'
            },
            {
                name: 'Bonded',
                value: 'bonded',
                description: 'Include bonded in the response'
            },
            {
                name: 'Buying Group',
                value: 'buyingGroup',
                description: 'Include buying group in the response'
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
                name: 'Collection Address1',
                value: 'collectionAddress1',
                description: 'Include collection address1 in the response'
            },
            {
                name: 'Collection Address2',
                value: 'collectionAddress2',
                description: 'Include collection address2 in the response'
            },
            {
                name: 'Collection Address3',
                value: 'collectionAddress3',
                description: 'Include collection address3 in the response'
            },
            {
                name: 'Collection Address4',
                value: 'collectionAddress4',
                description: 'Include collection address4 in the response'
            },
            {
                name: 'Collection Contact',
                value: 'collectionContact',
                description: 'Include collection contact in the response'
            },
            {
                name: 'Collection Date',
                value: 'collectionDate',
                description: 'Include collection date in the response'
            },
            {
                name: 'Collection Info',
                value: 'collectionInfo',
                description: 'Include collection info in the response'
            },
            {
                name: 'Collection Post Code',
                value: 'collectionPostCode',
                description: 'Include collection post code in the response'
            },
            {
                name: 'Collection Status',
                value: 'collectionStatus',
                description: 'Include collection status in the response'
            },
            {
                name: 'Comment',
                value: 'comment',
                description: 'Include comment in the response'
            },
            {
                name: 'Complete Time',
                value: 'completeTime',
                description: 'Include complete time in the response'
            },
            {
                name: 'Confirm Date',
                value: 'confirmDate',
                description: 'Include confirm date in the response'
            },
            {
                name: 'Confirm Time',
                value: 'confirmTime',
                description: 'Include confirm time in the response'
            },
            {
                name: 'Consolidated',
                value: 'consolidated',
                description: 'Include consolidated in the response'
            },
            {
                name: 'Currency Gross Value',
                value: 'currencyGrossValue',
                description: 'Include currency gross value in the response'
            },
            {
                name: 'Currency Invoice Nett Value',
                value: 'currencyInvoiceNettValue',
                description: 'Include currency invoice nett value in the response'
            },
            {
                name: 'Currency Nett Value',
                value: 'currencyNettValue',
                description: 'Include currency nett value in the response'
            },
            {
                name: 'Currency Order Cost',
                value: 'currencyOrderCost',
                description: 'Include currency order cost in the response'
            },
            {
                name: 'Currency Order Sale Value',
                value: 'currencyOrderSaleValue',
                description: 'Include currency order sale value in the response'
            },
            {
                name: 'Currency Received Cost',
                value: 'currencyReceivedCost',
                description: 'Include currency received cost in the response'
            },
            {
                name: 'Currency Received Retro',
                value: 'currencyReceivedRetro',
                description: 'Include currency received retro in the response'
            },
            {
                name: 'Currency Received Sale Value',
                value: 'currencyReceivedSaleValue',
                description: 'Include currency received sale value in the response'
            },
            {
                name: 'Currency Received VAT Value',
                value: 'currencyReceivedVATValue',
                description: 'Include currency received vat value in the response'
            },
            {
                name: 'Date Due',
                value: 'dateDue',
                description: 'Include date due in the response'
            },
            {
                name: 'Date Placed',
                value: 'datePlaced',
                description: 'Include date placed in the response'
            },
            {
                name: 'Delivered Day',
                value: 'deliveredDay',
                description: 'Include delivered day in the response'
            },
            {
                name: 'Delivered Week',
                value: 'deliveredWeek',
                description: 'Include delivered week in the response'
            },
            {
                name: 'Delivery Date',
                value: 'deliveryDate',
                description: 'Include delivery date in the response'
            },
            {
                name: 'Delivery Note',
                value: 'deliveryNote',
                description: 'Include delivery note in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Discount Amount',
                value: 'discountAmount',
                description: 'Include discount amount in the response'
            },
            {
                name: 'Discount Code',
                value: 'discountCode',
                description: 'Include discount code in the response'
            },
            {
                name: 'Drop',
                value: 'drop',
                description: 'Include drop in the response'
            },
            {
                name: 'Exchange Rate',
                value: 'exchangeRate',
                description: 'Include exchange rate in the response'
            },
            {
                name: 'GRN Number',
                value: 'GRNNumber',
                description: 'Include grn number in the response'
            },
            {
                name: 'GRN Retro Discount',
                value: 'GRNRetroDiscount',
                description: 'Include grn retro discount in the response'
            },
            {
                name: 'GRN User',
                value: 'GRNUser',
                description: 'Include grn user in the response'
            },
            {
                name: 'Gross Value',
                value: 'grossValue',
                description: 'Include gross value in the response'
            },
            {
                name: 'Invoice Nett Value',
                value: 'invoiceNettValue',
                description: 'Include invoice nett value in the response'
            },
            {
                name: 'Journey',
                value: 'journey',
                description: 'Include journey in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Nett Value',
                value: 'nettValue',
                description: 'Include nett value in the response'
            },
            {
                name: 'Order Cost',
                value: 'orderCost',
                description: 'Include order cost in the response'
            },
            {
                name: 'Order Quantity',
                value: 'orderQuantity',
                description: 'Include order quantity in the response'
            },
            {
                name: 'Order Sale Value',
                value: 'orderSaleValue',
                description: 'Include order sale value in the response'
            },
            {
                name: 'Order Type',
                value: 'orderType',
                description: 'Include order type in the response'
            },
            {
                name: 'Ordered Week',
                value: 'orderedWeek',
                description: 'Include ordered week in the response'
            },
            {
                name: 'Pallet Quantity',
                value: 'palletQuantity',
                description: 'Include pallet quantity in the response'
            },
            {
                name: 'Prepaid',
                value: 'prepaid',
                description: 'Include prepaid in the response'
            },
            {
                name: 'Price Date',
                value: 'priceDate',
                description: 'Include price date in the response'
            },
            {
                name: 'Process Status',
                value: 'processStatus',
                description: 'Include process status in the response'
            },
            {
                name: 'Purchase Order Number',
                value: 'purchaseOrderNumber',
                description: 'Include purchase order number in the response'
            },
            {
                name: 'Purchase Order Status',
                value: 'purchaseOrderStatus',
                description: 'Include purchase order status in the response'
            },
            {
                name: 'Purchase Order Suffix',
                value: 'purchaseOrderSuffix',
                description: 'Include purchase order suffix in the response'
            },
            {
                name: 'Received Cost',
                value: 'receivedCost',
                description: 'Include received cost in the response'
            },
            {
                name: 'Received Quantity',
                value: 'receivedQuantity',
                description: 'Include received quantity in the response'
            },
            {
                name: 'Received Sale Value',
                value: 'receivedSaleValue',
                description: 'Include received sale value in the response'
            },
            {
                name: 'Received VAT Value',
                value: 'receivedVATValue',
                description: 'Include received vat value in the response'
            },
            {
                name: 'Route',
                value: 'route',
                description: 'Include route in the response'
            },
            {
                name: 'Route Service Message',
                value: 'routeServiceMessage',
                description: 'Include route service message in the response'
            },
            {
                name: 'Route Service Status',
                value: 'routeServiceStatus',
                description: 'Include route service status in the response'
            },
            {
                name: 'Supplier',
                value: 'supplier',
                description: 'Include supplier in the response'
            },
            {
                name: 'Supplier Order Number',
                value: 'supplierOrderNumber',
                description: 'Include supplier order number in the response'
            },
            {
                name: 'Supplier Pallets',
                value: 'supplierPallets',
                description: 'Include supplier pallets in the response'
            },
            {
                name: 'Total Volume',
                value: 'totalVolume',
                description: 'Include total volume in the response'
            },
            {
                name: 'Total Weight',
                value: 'totalWeight',
                description: 'Include total weight in the response'
            },
            {
                name: 'User',
                value: 'user',
                description: 'Include user in the response'
            },
            {
                name: 'Vehicle',
                value: 'vehicle',
                description: 'Include vehicle in the response'
            },
            {
                name: 'Vehicle Condition',
                value: 'vehicleCondition',
                description: 'Include vehicle condition in the response'
            },
            {
                name: 'Vehicle Temperature',
                value: 'vehicleTemperature',
                description: 'Include vehicle temperature in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:get']
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
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:get']
            }
        }
    },
    {
        displayName: 'Include Lines',
        name: 'includeLines',
        type: 'boolean',
        default: false,
        description: 'Whether include purchase order line items in the response',
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:get']
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
                resource: ['purchaseOrders'],
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
                resource: ['purchaseOrders'],
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
                resource: ['purchaseOrders'],
                operation: ['get']
            }
        }
    }
];

export const purchaseOrdersUpdateFields: INodeProperties[] = [
    {
        displayName: 'Depot',
        name: 'depot',
        type: 'string',
        default: '',
        description: 'Depot code',
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:update']
            }
        }
    },
    {
        displayName: 'Purchase Order Number',
        name: 'purchaseOrderNumber',
        type: 'number',
        default: '',
        description: 'P.O. no.',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:update']
            }
        }
    },
    {
        displayName: 'Purchase Order Suffix',
        name: 'purchaseOrderSuffix',
        type: 'number',
        default: '',
        description: 'P.O. suffix.',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:update']
            }
        }
    },
    {
        displayName: 'Line Number',
        name: 'lineNumber',
        type: 'number',
        default: '',
        description: 'Line no',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:update']
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
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:update']
            }
        }
    },
    {
        displayName: 'Ordered Quantity',
        name: 'orderedQuantity',
        type: 'number',
        default: '',
        description: 'Qty ordered',
        typeOptions: {
            minValue: -9999
        },
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:update']
            }
        }
    },
    {
        displayName: 'Ordered Weight',
        name: 'orderedWeight',
        type: 'number',
        default: '',
        description: 'Dec. Qty/Weight.',
        typeOptions: {
            minValue: -99999.9999
        },
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:update']
            }
        }
    },
    {
        displayName: 'Received Quantity',
        name: 'receivedQuantity',
        type: 'number',
        default: '',
        description: 'Qty delivered',
        typeOptions: {
            minValue: -9999
        },
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:update']
            }
        }
    },
    {
        displayName: 'Received Weight',
        name: 'receivedWeight',
        type: 'number',
        default: '',
        description: 'Dec. Qty/Weight.',
        typeOptions: {
            minValue: -99999.9999
        },
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:update']
            }
        }
    },
    {
        displayName: 'Override Cost',
        name: 'overrideCost',
        type: 'number',
        default: '',
        description: 'Original Cost',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:update']
            }
        }
    },
    {
        displayName: 'Order Line Comment',
        name: 'orderLineComment',
        type: 'string',
        default: '',
        description: 'Comment',
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:update']
            }
        }
    }
];

export const purchaseOrdersListFields: INodeProperties[] = [
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
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:list']
            }
        }
    },
    {
        displayName: 'Include Lines',
        name: 'includeLines',
        type: 'boolean',
        default: false,
        description: 'Whether include purchase order line items in the response',
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:list']
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
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:list'],
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
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:list'],
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
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:list'],
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
                        default: 'arrivalTime',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Arrival Time',
                                value: 'arrivalTime'
                            },
                            {
                                name: 'Bonded',
                                value: 'bonded'
                            },
                            {
                                name: 'Buying Group',
                                value: 'buyingGroup'
                            },
                            {
                                name: 'Carriage Text',
                                value: 'carriageText'
                            },
                            {
                                name: 'Carrier Contact',
                                value: 'carrierContact'
                            },
                            {
                                name: 'Carrier Name',
                                value: 'carrierName'
                            },
                            {
                                name: 'Carrier Telephone No',
                                value: 'carrierTelephoneNo'
                            },
                            {
                                name: 'Collection Address1',
                                value: 'collectionAddress1'
                            },
                            {
                                name: 'Collection Address2',
                                value: 'collectionAddress2'
                            },
                            {
                                name: 'Collection Address3',
                                value: 'collectionAddress3'
                            },
                            {
                                name: 'Collection Address4',
                                value: 'collectionAddress4'
                            },
                            {
                                name: 'Collection Contact',
                                value: 'collectionContact'
                            },
                            {
                                name: 'Collection Date',
                                value: 'collectionDate'
                            },
                            {
                                name: 'Collection Info',
                                value: 'collectionInfo'
                            },
                            {
                                name: 'Collection Post Code',
                                value: 'collectionPostCode'
                            },
                            {
                                name: 'Collection Status',
                                value: 'collectionStatus'
                            },
                            {
                                name: 'Comment',
                                value: 'comment'
                            },
                            {
                                name: 'Complete Time',
                                value: 'completeTime'
                            },
                            {
                                name: 'Confirm Date',
                                value: 'confirmDate'
                            },
                            {
                                name: 'Confirm Time',
                                value: 'confirmTime'
                            },
                            {
                                name: 'Consolidated',
                                value: 'consolidated'
                            },
                            {
                                name: 'Currency Gross Value',
                                value: 'currencyGrossValue'
                            },
                            {
                                name: 'Currency Invoice Nett Value',
                                value: 'currencyInvoiceNettValue'
                            },
                            {
                                name: 'Currency Nett Value',
                                value: 'currencyNettValue'
                            },
                            {
                                name: 'Currency Order Cost',
                                value: 'currencyOrderCost'
                            },
                            {
                                name: 'Currency Order Sale Value',
                                value: 'currencyOrderSaleValue'
                            },
                            {
                                name: 'Currency Received Cost',
                                value: 'currencyReceivedCost'
                            },
                            {
                                name: 'Currency Received Retro',
                                value: 'currencyReceivedRetro'
                            },
                            {
                                name: 'Currency Received Sale Value',
                                value: 'currencyReceivedSaleValue'
                            },
                            {
                                name: 'Currency Received VAT Value',
                                value: 'currencyReceivedVATValue'
                            },
                            {
                                name: 'Date Due',
                                value: 'dateDue'
                            },
                            {
                                name: 'Date Placed',
                                value: 'datePlaced'
                            },
                            {
                                name: 'Delivered Day',
                                value: 'deliveredDay'
                            },
                            {
                                name: 'Delivered Week',
                                value: 'deliveredWeek'
                            },
                            {
                                name: 'Delivery Date',
                                value: 'deliveryDate'
                            },
                            {
                                name: 'Delivery Note',
                                value: 'deliveryNote'
                            },
                            {
                                name: 'Depot',
                                value: 'depot'
                            },
                            {
                                name: 'Discount Amount',
                                value: 'discountAmount'
                            },
                            {
                                name: 'Discount Code',
                                value: 'discountCode'
                            },
                            {
                                name: 'Drop',
                                value: 'drop'
                            },
                            {
                                name: 'Exchange Rate',
                                value: 'exchangeRate'
                            },
                            {
                                name: 'GRN Number',
                                value: 'GRNNumber'
                            },
                            {
                                name: 'GRN Retro Discount',
                                value: 'GRNRetroDiscount'
                            },
                            {
                                name: 'GRN User',
                                value: 'GRNUser'
                            },
                            {
                                name: 'Gross Value',
                                value: 'grossValue'
                            },
                            {
                                name: 'Hide Nested Keys',
                                value: 'hideNestedKeys'
                            },
                            {
                                name: 'Invoice Nett Value',
                                value: 'invoiceNettValue'
                            },
                            {
                                name: 'Journey',
                                value: 'journey'
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
                                name: 'Nett Value',
                                value: 'nettValue'
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
                                name: 'Order Cost',
                                value: 'orderCost'
                            },
                            {
                                name: 'Order Quantity',
                                value: 'orderQuantity'
                            },
                            {
                                name: 'Order Sale Value',
                                value: 'orderSaleValue'
                            },
                            {
                                name: 'Order Type',
                                value: 'orderType'
                            },
                            {
                                name: 'Ordered Week',
                                value: 'orderedWeek'
                            },
                            {
                                name: 'Pallet Quantity',
                                value: 'palletQuantity'
                            },
                            {
                                name: 'Prepaid',
                                value: 'prepaid'
                            },
                            {
                                name: 'Price Date',
                                value: 'priceDate'
                            },
                            {
                                name: 'Process Status',
                                value: 'processStatus'
                            },
                            {
                                name: 'Purchase Order Number',
                                value: 'purchaseOrderNumber'
                            },
                            {
                                name: 'Purchase Order Status',
                                value: 'purchaseOrderStatus'
                            },
                            {
                                name: 'Purchase Order Suffix',
                                value: 'purchaseOrderSuffix'
                            },
                            {
                                name: 'Received Cost',
                                value: 'receivedCost'
                            },
                            {
                                name: 'Received Quantity',
                                value: 'receivedQuantity'
                            },
                            {
                                name: 'Received Sale Value',
                                value: 'receivedSaleValue'
                            },
                            {
                                name: 'Received VAT Value',
                                value: 'receivedVATValue'
                            },
                            {
                                name: 'Route',
                                value: 'route'
                            },
                            {
                                name: 'Route Service Message',
                                value: 'routeServiceMessage'
                            },
                            {
                                name: 'Route Service Status',
                                value: 'routeServiceStatus'
                            },
                            {
                                name: 'Supplier',
                                value: 'supplier'
                            },
                            {
                                name: 'Supplier Order Number',
                                value: 'supplierOrderNumber'
                            },
                            {
                                name: 'Supplier Pallets',
                                value: 'supplierPallets'
                            },
                            {
                                name: 'Timeout',
                                value: 'timeout'
                            },
                            {
                                name: 'User',
                                value: 'user'
                            },
                            {
                                name: 'Vehicle',
                                value: 'vehicle'
                            },
                            {
                                name: 'Vehicle Condition',
                                value: 'vehicleCondition'
                            },
                            {
                                name: 'Vehicle Temperature',
                                value: 'vehicleTemperature'
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
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:list'],
                filterMode: ['raw']
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
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Purchase Order Number',
        name: 'purchaseOrderNumber',
        type: 'number',
        default: '',
        description: 'PO Number (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        typeOptions: {
            minValue: 0
        },
        placeholder: '123456',
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:list'],
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
        placeholder: '2021-12-31T10:21:29.974',
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Supplier',
        name: 'supplier',
        type: 'string',
        default: '',
        description: 'Supplier (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'TWININGS',
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Date Placed',
        name: 'datePlaced',
        type: 'string',
        default: '',
        description: 'Date placed (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        placeholder: '2021-12-31',
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Date Due',
        name: 'dateDue',
        type: 'string',
        default: '',
        description: 'Date due (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        placeholder: '2022-01-26',
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Delivery Date',
        name: 'deliveryDate',
        type: 'string',
        default: '',
        description: 'Delivery date (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        placeholder: '2022-01-26',
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Order Type',
        name: 'orderType',
        type: 'multiOptions',
        default: [],
        description: 'Order Type (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        options: [
            {
                name: 'ByHand',
                value: '6:ByHand',
                description: 'ByHand (code: 6)'
            },
            {
                name: 'Code 0',
                value: '0:',
                description: 'Code 0 (code: 0)'
            },
            {
                name: 'EDI',
                value: '9:EDI',
                description: 'EDI (code: 9)'
            },
            {
                name: 'Email',
                value: '8:Email',
                description: 'Email (code: 8)'
            },
            {
                name: 'Fax',
                value: '4:Fax',
                description: 'Fax (code: 4)'
            },
            {
                name: 'Post',
                value: '2:Post',
                description: 'Post (code: 2)'
            },
            {
                name: 'Telephone',
                value: '3:Telephone',
                description: 'Telephone (code: 3)'
            },
            {
                name: 'Telex',
                value: '1:Telex',
                description: 'Telex (code: 1)'
            },
            {
                name: 'Tradanet',
                value: '5:Tradanet',
                description: 'Tradanet (code: 5)'
            },
            {
                name: 'Tradanet/Fax',
                value: '7:Tradanet/Fax',
                description: 'Tradanet/Fax (code: 7)'
            }
        ],
        placeholder: '8:Email',
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:list'],
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
        placeholder: 'depot,-purchaseOrderNumber',
        options: [
            {
                name: 'Arrival Time (Ascending)',
                value: 'arrivalTime',
                description: 'Sort by Arrival Time in ascending order'
            },
            {
                name: 'Arrival Time (Descending)',
                value: '-arrivalTime',
                description: 'Sort by Arrival Time in descending order'
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
                name: 'Buying Group (Ascending)',
                value: 'buyingGroup',
                description: 'Sort by Buying Group in ascending order'
            },
            {
                name: 'Buying Group (Descending)',
                value: '-buyingGroup',
                description: 'Sort by Buying Group in descending order'
            },
            {
                name: 'Carriage Text (Ascending)',
                value: 'carriageText',
                description: 'Sort by Carriage Text in ascending order'
            },
            {
                name: 'Carriage Text (Descending)',
                value: '-carriageText',
                description: 'Sort by Carriage Text in descending order'
            },
            {
                name: 'Carrier Contact (Ascending)',
                value: 'carrierContact',
                description: 'Sort by Carrier Contact in ascending order'
            },
            {
                name: 'Carrier Contact (Descending)',
                value: '-carrierContact',
                description: 'Sort by Carrier Contact in descending order'
            },
            {
                name: 'Carrier Name (Ascending)',
                value: 'carrierName',
                description: 'Sort by Carrier Name in ascending order'
            },
            {
                name: 'Carrier Name (Descending)',
                value: '-carrierName',
                description: 'Sort by Carrier Name in descending order'
            },
            {
                name: 'Carrier Telephone No (Ascending)',
                value: 'carrierTelephoneNo',
                description: 'Sort by Carrier Telephone No in ascending order'
            },
            {
                name: 'Carrier Telephone No (Descending)',
                value: '-carrierTelephoneNo',
                description: 'Sort by Carrier Telephone No in descending order'
            },
            {
                name: 'Collection Address1 (Ascending)',
                value: 'collectionAddress1',
                description: 'Sort by Collection Address1 in ascending order'
            },
            {
                name: 'Collection Address1 (Descending)',
                value: '-collectionAddress1',
                description: 'Sort by Collection Address1 in descending order'
            },
            {
                name: 'Collection Address2 (Ascending)',
                value: 'collectionAddress2',
                description: 'Sort by Collection Address2 in ascending order'
            },
            {
                name: 'Collection Address2 (Descending)',
                value: '-collectionAddress2',
                description: 'Sort by Collection Address2 in descending order'
            },
            {
                name: 'Collection Address3 (Ascending)',
                value: 'collectionAddress3',
                description: 'Sort by Collection Address3 in ascending order'
            },
            {
                name: 'Collection Address3 (Descending)',
                value: '-collectionAddress3',
                description: 'Sort by Collection Address3 in descending order'
            },
            {
                name: 'Collection Address4 (Ascending)',
                value: 'collectionAddress4',
                description: 'Sort by Collection Address4 in ascending order'
            },
            {
                name: 'Collection Address4 (Descending)',
                value: '-collectionAddress4',
                description: 'Sort by Collection Address4 in descending order'
            },
            {
                name: 'Collection Contact (Ascending)',
                value: 'collectionContact',
                description: 'Sort by Collection Contact in ascending order'
            },
            {
                name: 'Collection Contact (Descending)',
                value: '-collectionContact',
                description: 'Sort by Collection Contact in descending order'
            },
            {
                name: 'Collection Date (Ascending)',
                value: 'collectionDate',
                description: 'Sort by Collection Date in ascending order'
            },
            {
                name: 'Collection Date (Descending)',
                value: '-collectionDate',
                description: 'Sort by Collection Date in descending order'
            },
            {
                name: 'Collection Info (Ascending)',
                value: 'collectionInfo',
                description: 'Sort by Collection Info in ascending order'
            },
            {
                name: 'Collection Info (Descending)',
                value: '-collectionInfo',
                description: 'Sort by Collection Info in descending order'
            },
            {
                name: 'Collection Post Code (Ascending)',
                value: 'collectionPostCode',
                description: 'Sort by Collection Post Code in ascending order'
            },
            {
                name: 'Collection Post Code (Descending)',
                value: '-collectionPostCode',
                description: 'Sort by Collection Post Code in descending order'
            },
            {
                name: 'Collection Status (Ascending)',
                value: 'collectionStatus',
                description: 'Sort by Collection Status in ascending order'
            },
            {
                name: 'Collection Status (Descending)',
                value: '-collectionStatus',
                description: 'Sort by Collection Status in descending order'
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
                name: 'Complete Time (Ascending)',
                value: 'completeTime',
                description: 'Sort by Complete Time in ascending order'
            },
            {
                name: 'Complete Time (Descending)',
                value: '-completeTime',
                description: 'Sort by Complete Time in descending order'
            },
            {
                name: 'Confirm Date (Ascending)',
                value: 'confirmDate',
                description: 'Sort by Confirm Date in ascending order'
            },
            {
                name: 'Confirm Date (Descending)',
                value: '-confirmDate',
                description: 'Sort by Confirm Date in descending order'
            },
            {
                name: 'Confirm Time (Ascending)',
                value: 'confirmTime',
                description: 'Sort by Confirm Time in ascending order'
            },
            {
                name: 'Confirm Time (Descending)',
                value: '-confirmTime',
                description: 'Sort by Confirm Time in descending order'
            },
            {
                name: 'Consolidated (Ascending)',
                value: 'consolidated',
                description: 'Sort by Consolidated in ascending order'
            },
            {
                name: 'Consolidated (Descending)',
                value: '-consolidated',
                description: 'Sort by Consolidated in descending order'
            },
            {
                name: 'Currency Gross Value (Ascending)',
                value: 'currencyGrossValue',
                description: 'Sort by Currency Gross Value in ascending order'
            },
            {
                name: 'Currency Gross Value (Descending)',
                value: '-currencyGrossValue',
                description: 'Sort by Currency Gross Value in descending order'
            },
            {
                name: 'Currency Invoice Nett Value (Ascending)',
                value: 'currencyInvoiceNettValue',
                description: 'Sort by Currency Invoice Nett Value in ascending order'
            },
            {
                name: 'Currency Invoice Nett Value (Descending)',
                value: '-currencyInvoiceNettValue',
                description: 'Sort by Currency Invoice Nett Value in descending order'
            },
            {
                name: 'Currency Nett Value (Ascending)',
                value: 'currencyNettValue',
                description: 'Sort by Currency Nett Value in ascending order'
            },
            {
                name: 'Currency Nett Value (Descending)',
                value: '-currencyNettValue',
                description: 'Sort by Currency Nett Value in descending order'
            },
            {
                name: 'Currency Order Cost (Ascending)',
                value: 'currencyOrderCost',
                description: 'Sort by Currency Order Cost in ascending order'
            },
            {
                name: 'Currency Order Cost (Descending)',
                value: '-currencyOrderCost',
                description: 'Sort by Currency Order Cost in descending order'
            },
            {
                name: 'Currency Order Sale Value (Ascending)',
                value: 'currencyOrderSaleValue',
                description: 'Sort by Currency Order Sale Value in ascending order'
            },
            {
                name: 'Currency Order Sale Value (Descending)',
                value: '-currencyOrderSaleValue',
                description: 'Sort by Currency Order Sale Value in descending order'
            },
            {
                name: 'Currency Received Cost (Ascending)',
                value: 'currencyReceivedCost',
                description: 'Sort by Currency Received Cost in ascending order'
            },
            {
                name: 'Currency Received Cost (Descending)',
                value: '-currencyReceivedCost',
                description: 'Sort by Currency Received Cost in descending order'
            },
            {
                name: 'Currency Received Retro (Ascending)',
                value: 'currencyReceivedRetro',
                description: 'Sort by Currency Received Retro in ascending order'
            },
            {
                name: 'Currency Received Retro (Descending)',
                value: '-currencyReceivedRetro',
                description: 'Sort by Currency Received Retro in descending order'
            },
            {
                name: 'Currency Received Sale Value (Ascending)',
                value: 'currencyReceivedSaleValue',
                description: 'Sort by Currency Received Sale Value in ascending order'
            },
            {
                name: 'Currency Received Sale Value (Descending)',
                value: '-currencyReceivedSaleValue',
                description: 'Sort by Currency Received Sale Value in descending order'
            },
            {
                name: 'Currency Received VAT Value (Ascending)',
                value: 'currencyReceivedVATValue',
                description: 'Sort by Currency Received VAT Value in ascending order'
            },
            {
                name: 'Currency Received VAT Value (Descending)',
                value: '-currencyReceivedVATValue',
                description: 'Sort by Currency Received VAT Value in descending order'
            },
            {
                name: 'Date Due (Ascending)',
                value: 'dateDue',
                description: 'Sort by Date Due in ascending order'
            },
            {
                name: 'Date Due (Descending)',
                value: '-dateDue',
                description: 'Sort by Date Due in descending order'
            },
            {
                name: 'Date Placed (Ascending)',
                value: 'datePlaced',
                description: 'Sort by Date Placed in ascending order'
            },
            {
                name: 'Date Placed (Descending)',
                value: '-datePlaced',
                description: 'Sort by Date Placed in descending order'
            },
            {
                name: 'Delivered Day (Ascending)',
                value: 'deliveredDay',
                description: 'Sort by Delivered Day in ascending order'
            },
            {
                name: 'Delivered Day (Descending)',
                value: '-deliveredDay',
                description: 'Sort by Delivered Day in descending order'
            },
            {
                name: 'Delivered Week (Ascending)',
                value: 'deliveredWeek',
                description: 'Sort by Delivered Week in ascending order'
            },
            {
                name: 'Delivered Week (Descending)',
                value: '-deliveredWeek',
                description: 'Sort by Delivered Week in descending order'
            },
            {
                name: 'Delivery Date (Ascending)',
                value: 'deliveryDate',
                description: 'Sort by Delivery Date in ascending order'
            },
            {
                name: 'Delivery Date (Descending)',
                value: '-deliveryDate',
                description: 'Sort by Delivery Date in descending order'
            },
            {
                name: 'Delivery Note (Ascending)',
                value: 'deliveryNote',
                description: 'Sort by Delivery Note in ascending order'
            },
            {
                name: 'Delivery Note (Descending)',
                value: '-deliveryNote',
                description: 'Sort by Delivery Note in descending order'
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
                name: 'Discount Amount (Ascending)',
                value: 'discountAmount',
                description: 'Sort by Discount Amount in ascending order'
            },
            {
                name: 'Discount Amount (Descending)',
                value: '-discountAmount',
                description: 'Sort by Discount Amount in descending order'
            },
            {
                name: 'Discount Code (Ascending)',
                value: 'discountCode',
                description: 'Sort by Discount Code in ascending order'
            },
            {
                name: 'Discount Code (Descending)',
                value: '-discountCode',
                description: 'Sort by Discount Code in descending order'
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
                name: 'GRN Number (Ascending)',
                value: 'GRNNumber',
                description: 'Sort by GRN Number in ascending order'
            },
            {
                name: 'GRN Number (Descending)',
                value: '-GRNNumber',
                description: 'Sort by GRN Number in descending order'
            },
            {
                name: 'GRN Retro Discount (Ascending)',
                value: 'GRNRetroDiscount',
                description: 'Sort by GRN Retro Discount in ascending order'
            },
            {
                name: 'GRN Retro Discount (Descending)',
                value: '-GRNRetroDiscount',
                description: 'Sort by GRN Retro Discount in descending order'
            },
            {
                name: 'GRN User (Ascending)',
                value: 'GRNUser',
                description: 'Sort by GRN User in ascending order'
            },
            {
                name: 'GRN User (Descending)',
                value: '-GRNUser',
                description: 'Sort by GRN User in descending order'
            },
            {
                name: 'Gross Value (Ascending)',
                value: 'grossValue',
                description: 'Sort by Gross Value in ascending order'
            },
            {
                name: 'Gross Value (Descending)',
                value: '-grossValue',
                description: 'Sort by Gross Value in descending order'
            },
            {
                name: 'Invoice Nett Value (Ascending)',
                value: 'invoiceNettValue',
                description: 'Sort by Invoice Nett Value in ascending order'
            },
            {
                name: 'Invoice Nett Value (Descending)',
                value: '-invoiceNettValue',
                description: 'Sort by Invoice Nett Value in descending order'
            },
            {
                name: 'Journey (Ascending)',
                value: 'journey',
                description: 'Sort by Journey in ascending order'
            },
            {
                name: 'Journey (Descending)',
                value: '-journey',
                description: 'Sort by Journey in descending order'
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
                name: 'Nett Value (Ascending)',
                value: 'nettValue',
                description: 'Sort by Nett Value in ascending order'
            },
            {
                name: 'Nett Value (Descending)',
                value: '-nettValue',
                description: 'Sort by Nett Value in descending order'
            },
            {
                name: 'Order Cost (Ascending)',
                value: 'orderCost',
                description: 'Sort by Order Cost in ascending order'
            },
            {
                name: 'Order Cost (Descending)',
                value: '-orderCost',
                description: 'Sort by Order Cost in descending order'
            },
            {
                name: 'Order Quantity (Ascending)',
                value: 'orderQuantity',
                description: 'Sort by Order Quantity in ascending order'
            },
            {
                name: 'Order Quantity (Descending)',
                value: '-orderQuantity',
                description: 'Sort by Order Quantity in descending order'
            },
            {
                name: 'Order Sale Value (Ascending)',
                value: 'orderSaleValue',
                description: 'Sort by Order Sale Value in ascending order'
            },
            {
                name: 'Order Sale Value (Descending)',
                value: '-orderSaleValue',
                description: 'Sort by Order Sale Value in descending order'
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
                name: 'Ordered Week (Ascending)',
                value: 'orderedWeek',
                description: 'Sort by Ordered Week in ascending order'
            },
            {
                name: 'Ordered Week (Descending)',
                value: '-orderedWeek',
                description: 'Sort by Ordered Week in descending order'
            },
            {
                name: 'Pallet Quantity (Ascending)',
                value: 'palletQuantity',
                description: 'Sort by Pallet Quantity in ascending order'
            },
            {
                name: 'Pallet Quantity (Descending)',
                value: '-palletQuantity',
                description: 'Sort by Pallet Quantity in descending order'
            },
            {
                name: 'Prepaid (Ascending)',
                value: 'prepaid',
                description: 'Sort by Prepaid in ascending order'
            },
            {
                name: 'Prepaid (Descending)',
                value: '-prepaid',
                description: 'Sort by Prepaid in descending order'
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
                name: 'Process Status (Ascending)',
                value: 'processStatus',
                description: 'Sort by Process Status in ascending order'
            },
            {
                name: 'Process Status (Descending)',
                value: '-processStatus',
                description: 'Sort by Process Status in descending order'
            },
            {
                name: 'Purchase Order Number (Ascending)',
                value: 'purchaseOrderNumber',
                description: 'Sort by Purchase Order Number in ascending order'
            },
            {
                name: 'Purchase Order Number (Descending)',
                value: '-purchaseOrderNumber',
                description: 'Sort by Purchase Order Number in descending order'
            },
            {
                name: 'Purchase Order Status (Ascending)',
                value: 'purchaseOrderStatus',
                description: 'Sort by Purchase Order Status in ascending order'
            },
            {
                name: 'Purchase Order Status (Descending)',
                value: '-purchaseOrderStatus',
                description: 'Sort by Purchase Order Status in descending order'
            },
            {
                name: 'Purchase Order Suffix (Ascending)',
                value: 'purchaseOrderSuffix',
                description: 'Sort by Purchase Order Suffix in ascending order'
            },
            {
                name: 'Purchase Order Suffix (Descending)',
                value: '-purchaseOrderSuffix',
                description: 'Sort by Purchase Order Suffix in descending order'
            },
            {
                name: 'Received Cost (Ascending)',
                value: 'receivedCost',
                description: 'Sort by Received Cost in ascending order'
            },
            {
                name: 'Received Cost (Descending)',
                value: '-receivedCost',
                description: 'Sort by Received Cost in descending order'
            },
            {
                name: 'Received Quantity (Ascending)',
                value: 'receivedQuantity',
                description: 'Sort by Received Quantity in ascending order'
            },
            {
                name: 'Received Quantity (Descending)',
                value: '-receivedQuantity',
                description: 'Sort by Received Quantity in descending order'
            },
            {
                name: 'Received Sale Value (Ascending)',
                value: 'receivedSaleValue',
                description: 'Sort by Received Sale Value in ascending order'
            },
            {
                name: 'Received Sale Value (Descending)',
                value: '-receivedSaleValue',
                description: 'Sort by Received Sale Value in descending order'
            },
            {
                name: 'Received VAT Value (Ascending)',
                value: 'receivedVATValue',
                description: 'Sort by Received VAT Value in ascending order'
            },
            {
                name: 'Received VAT Value (Descending)',
                value: '-receivedVATValue',
                description: 'Sort by Received VAT Value in descending order'
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
                name: 'Route Service Message (Ascending)',
                value: 'routeServiceMessage',
                description: 'Sort by Route Service Message in ascending order'
            },
            {
                name: 'Route Service Message (Descending)',
                value: '-routeServiceMessage',
                description: 'Sort by Route Service Message in descending order'
            },
            {
                name: 'Route Service Status (Ascending)',
                value: 'routeServiceStatus',
                description: 'Sort by Route Service Status in ascending order'
            },
            {
                name: 'Route Service Status (Descending)',
                value: '-routeServiceStatus',
                description: 'Sort by Route Service Status in descending order'
            },
            {
                name: 'Supplier (Ascending)',
                value: 'supplier',
                description: 'Sort by Supplier in ascending order'
            },
            {
                name: 'Supplier (Descending)',
                value: '-supplier',
                description: 'Sort by Supplier in descending order'
            },
            {
                name: 'Supplier Order Number (Ascending)',
                value: 'supplierOrderNumber',
                description: 'Sort by Supplier Order Number in ascending order'
            },
            {
                name: 'Supplier Order Number (Descending)',
                value: '-supplierOrderNumber',
                description: 'Sort by Supplier Order Number in descending order'
            },
            {
                name: 'Supplier Pallets (Ascending)',
                value: 'supplierPallets',
                description: 'Sort by Supplier Pallets in ascending order'
            },
            {
                name: 'Supplier Pallets (Descending)',
                value: '-supplierPallets',
                description: 'Sort by Supplier Pallets in descending order'
            },
            {
                name: 'User (Ascending)',
                value: 'user',
                description: 'Sort by User in ascending order'
            },
            {
                name: 'User (Descending)',
                value: '-user',
                description: 'Sort by User in descending order'
            },
            {
                name: 'Vehicle (Ascending)',
                value: 'vehicle',
                description: 'Sort by Vehicle in ascending order'
            },
            {
                name: 'Vehicle (Descending)',
                value: '-vehicle',
                description: 'Sort by Vehicle in descending order'
            },
            {
                name: 'Vehicle Condition (Ascending)',
                value: 'vehicleCondition',
                description: 'Sort by Vehicle Condition in ascending order'
            },
            {
                name: 'Vehicle Condition (Descending)',
                value: '-vehicleCondition',
                description: 'Sort by Vehicle Condition in descending order'
            },
            {
                name: 'Vehicle Temperature (Ascending)',
                value: 'vehicleTemperature',
                description: 'Sort by Vehicle Temperature in ascending order'
            },
            {
                name: 'Vehicle Temperature (Descending)',
                value: '-vehicleTemperature',
                description: 'Sort by Vehicle Temperature in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:list'],
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
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:list'],
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
                name: 'Arrival Time',
                value: 'arrivalTime',
                description: 'Include arrival time in the response'
            },
            {
                name: 'Bonded',
                value: 'bonded',
                description: 'Include bonded in the response'
            },
            {
                name: 'Buying Group',
                value: 'buyingGroup',
                description: 'Include buying group in the response'
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
                name: 'Collection Address1',
                value: 'collectionAddress1',
                description: 'Include collection address1 in the response'
            },
            {
                name: 'Collection Address2',
                value: 'collectionAddress2',
                description: 'Include collection address2 in the response'
            },
            {
                name: 'Collection Address3',
                value: 'collectionAddress3',
                description: 'Include collection address3 in the response'
            },
            {
                name: 'Collection Address4',
                value: 'collectionAddress4',
                description: 'Include collection address4 in the response'
            },
            {
                name: 'Collection Contact',
                value: 'collectionContact',
                description: 'Include collection contact in the response'
            },
            {
                name: 'Collection Date',
                value: 'collectionDate',
                description: 'Include collection date in the response'
            },
            {
                name: 'Collection Info',
                value: 'collectionInfo',
                description: 'Include collection info in the response'
            },
            {
                name: 'Collection Post Code',
                value: 'collectionPostCode',
                description: 'Include collection post code in the response'
            },
            {
                name: 'Collection Status',
                value: 'collectionStatus',
                description: 'Include collection status in the response'
            },
            {
                name: 'Comment',
                value: 'comment',
                description: 'Include comment in the response'
            },
            {
                name: 'Complete Time',
                value: 'completeTime',
                description: 'Include complete time in the response'
            },
            {
                name: 'Confirm Date',
                value: 'confirmDate',
                description: 'Include confirm date in the response'
            },
            {
                name: 'Confirm Time',
                value: 'confirmTime',
                description: 'Include confirm time in the response'
            },
            {
                name: 'Consolidated',
                value: 'consolidated',
                description: 'Include consolidated in the response'
            },
            {
                name: 'Currency Gross Value',
                value: 'currencyGrossValue',
                description: 'Include currency gross value in the response'
            },
            {
                name: 'Currency Invoice Nett Value',
                value: 'currencyInvoiceNettValue',
                description: 'Include currency invoice nett value in the response'
            },
            {
                name: 'Currency Nett Value',
                value: 'currencyNettValue',
                description: 'Include currency nett value in the response'
            },
            {
                name: 'Currency Order Cost',
                value: 'currencyOrderCost',
                description: 'Include currency order cost in the response'
            },
            {
                name: 'Currency Order Sale Value',
                value: 'currencyOrderSaleValue',
                description: 'Include currency order sale value in the response'
            },
            {
                name: 'Currency Received Cost',
                value: 'currencyReceivedCost',
                description: 'Include currency received cost in the response'
            },
            {
                name: 'Currency Received Retro',
                value: 'currencyReceivedRetro',
                description: 'Include currency received retro in the response'
            },
            {
                name: 'Currency Received Sale Value',
                value: 'currencyReceivedSaleValue',
                description: 'Include currency received sale value in the response'
            },
            {
                name: 'Currency Received VAT Value',
                value: 'currencyReceivedVATValue',
                description: 'Include currency received vat value in the response'
            },
            {
                name: 'Date Due',
                value: 'dateDue',
                description: 'Include date due in the response'
            },
            {
                name: 'Date Placed',
                value: 'datePlaced',
                description: 'Include date placed in the response'
            },
            {
                name: 'Delivered Day',
                value: 'deliveredDay',
                description: 'Include delivered day in the response'
            },
            {
                name: 'Delivered Week',
                value: 'deliveredWeek',
                description: 'Include delivered week in the response'
            },
            {
                name: 'Delivery Date',
                value: 'deliveryDate',
                description: 'Include delivery date in the response'
            },
            {
                name: 'Delivery Note',
                value: 'deliveryNote',
                description: 'Include delivery note in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Discount Amount',
                value: 'discountAmount',
                description: 'Include discount amount in the response'
            },
            {
                name: 'Discount Code',
                value: 'discountCode',
                description: 'Include discount code in the response'
            },
            {
                name: 'Drop',
                value: 'drop',
                description: 'Include drop in the response'
            },
            {
                name: 'Exchange Rate',
                value: 'exchangeRate',
                description: 'Include exchange rate in the response'
            },
            {
                name: 'GRN Number',
                value: 'GRNNumber',
                description: 'Include grn number in the response'
            },
            {
                name: 'GRN Retro Discount',
                value: 'GRNRetroDiscount',
                description: 'Include grn retro discount in the response'
            },
            {
                name: 'GRN User',
                value: 'GRNUser',
                description: 'Include grn user in the response'
            },
            {
                name: 'Gross Value',
                value: 'grossValue',
                description: 'Include gross value in the response'
            },
            {
                name: 'Invoice Nett Value',
                value: 'invoiceNettValue',
                description: 'Include invoice nett value in the response'
            },
            {
                name: 'Journey',
                value: 'journey',
                description: 'Include journey in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Nett Value',
                value: 'nettValue',
                description: 'Include nett value in the response'
            },
            {
                name: 'Order Cost',
                value: 'orderCost',
                description: 'Include order cost in the response'
            },
            {
                name: 'Order Quantity',
                value: 'orderQuantity',
                description: 'Include order quantity in the response'
            },
            {
                name: 'Order Sale Value',
                value: 'orderSaleValue',
                description: 'Include order sale value in the response'
            },
            {
                name: 'Order Type',
                value: 'orderType',
                description: 'Include order type in the response'
            },
            {
                name: 'Ordered Week',
                value: 'orderedWeek',
                description: 'Include ordered week in the response'
            },
            {
                name: 'Pallet Quantity',
                value: 'palletQuantity',
                description: 'Include pallet quantity in the response'
            },
            {
                name: 'Prepaid',
                value: 'prepaid',
                description: 'Include prepaid in the response'
            },
            {
                name: 'Price Date',
                value: 'priceDate',
                description: 'Include price date in the response'
            },
            {
                name: 'Process Status',
                value: 'processStatus',
                description: 'Include process status in the response'
            },
            {
                name: 'Purchase Order Number',
                value: 'purchaseOrderNumber',
                description: 'Include purchase order number in the response'
            },
            {
                name: 'Purchase Order Status',
                value: 'purchaseOrderStatus',
                description: 'Include purchase order status in the response'
            },
            {
                name: 'Purchase Order Suffix',
                value: 'purchaseOrderSuffix',
                description: 'Include purchase order suffix in the response'
            },
            {
                name: 'Received Cost',
                value: 'receivedCost',
                description: 'Include received cost in the response'
            },
            {
                name: 'Received Quantity',
                value: 'receivedQuantity',
                description: 'Include received quantity in the response'
            },
            {
                name: 'Received Sale Value',
                value: 'receivedSaleValue',
                description: 'Include received sale value in the response'
            },
            {
                name: 'Received VAT Value',
                value: 'receivedVATValue',
                description: 'Include received vat value in the response'
            },
            {
                name: 'Route',
                value: 'route',
                description: 'Include route in the response'
            },
            {
                name: 'Route Service Message',
                value: 'routeServiceMessage',
                description: 'Include route service message in the response'
            },
            {
                name: 'Route Service Status',
                value: 'routeServiceStatus',
                description: 'Include route service status in the response'
            },
            {
                name: 'Supplier',
                value: 'supplier',
                description: 'Include supplier in the response'
            },
            {
                name: 'Supplier Order Number',
                value: 'supplierOrderNumber',
                description: 'Include supplier order number in the response'
            },
            {
                name: 'Supplier Pallets',
                value: 'supplierPallets',
                description: 'Include supplier pallets in the response'
            },
            {
                name: 'Total Volume',
                value: 'totalVolume',
                description: 'Include total volume in the response'
            },
            {
                name: 'Total Weight',
                value: 'totalWeight',
                description: 'Include total weight in the response'
            },
            {
                name: 'User',
                value: 'user',
                description: 'Include user in the response'
            },
            {
                name: 'Vehicle',
                value: 'vehicle',
                description: 'Include vehicle in the response'
            },
            {
                name: 'Vehicle Condition',
                value: 'vehicleCondition',
                description: 'Include vehicle condition in the response'
            },
            {
                name: 'Vehicle Temperature',
                value: 'vehicleTemperature',
                description: 'Include vehicle temperature in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:list'],
                filterMode: ['common']
            }
        }
    }
];

export const purchaseOrdersCreateFields: INodeProperties[] = [
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
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:create']
            }
        }
    },
    {
        displayName: 'JSON Body',
        name: 'jsonBody',
        type: 'json',
        default: '{}',
        description: 'Raw JSON body for creating purchase order records. Provide the complete request payload.',
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:create'],
                createMode: ['json']
            }
        },
        placeholder: `{
  "purchaseOrders": [
    {
      // Add your purchase order fields here
    }
  ]
}`
    },
    {
        displayName: 'Depot',
        name: 'depot',
        type: 'string',
        default: '',
        description: 'Depot code',
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Product Code',
        name: 'productCode',
        type: 'string',
        default: '',
        description: 'The product code value',
        required: true,
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Ordered Quantity',
        name: 'orderedQuantity',
        type: 'number',
        default: '',
        description: 'Qty ordered',
        required: true,
        typeOptions: {
            minValue: -9999
        },
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Purchase Order Number',
        name: 'purchaseOrderNumber',
        type: 'number',
        default: '',
        description: 'P.O. no.',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Purchase Order Suffix',
        name: 'purchaseOrderSuffix',
        type: 'number',
        default: '',
        description: 'P.O. suffix.',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Line Number',
        name: 'lineNumber',
        type: 'number',
        default: '',
        description: 'Line no',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Ordered Weight',
        name: 'orderedWeight',
        type: 'number',
        default: '',
        description: 'Dec. Qty/Weight.',
        typeOptions: {
            minValue: -99999.9999
        },
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Order Line Comment',
        name: 'orderLineComment',
        type: 'string',
        default: '',
        description: 'Comment',
        displayOptions: {
            show: {
                resource: ['purchaseOrders'],
                operation: ['purchaseOrders:create'],
                createMode: ['advanced']
            }
        }
    }
];
