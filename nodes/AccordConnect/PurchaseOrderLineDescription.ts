import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0006 - 24/08/26 - do not edit by hand

export const purchaseOrderLinesOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['purchaseOrderLines'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'purchaseOrderLines:get',
                description: 'Get a purchaseOrderLine',
                action: 'Get a purchase order line'
            },
            {
                name: 'List',
                value: 'purchaseOrderLines:list',
                description: 'List many purchaseOrderLines',
                action: 'List many purchase order lines'
            },
        ],
        default: 'purchaseOrderLines:get',
    },
];


export const purchaseOrderLinesReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the purchaseOrderLine',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['purchaseOrderLines'],
                operation: ['purchaseOrderLines:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'depot,purchaseOrderNumber,purchaseOrderSuffix,lineNumber',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Batch Number',
                value: 'batchNumber',
                description: 'Include batch number in the response'
            },
            {
                name: 'Best Before Date',
                value: 'bestBeforeDate',
                description: 'Include best before date in the response'
            },
            {
                name: 'Bonus Desc',
                value: 'bonusDesc',
                description: 'Include bonus desc in the response'
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
                name: 'Box Weight',
                value: 'boxWeight',
                description: 'Include box weight in the response'
            },
            {
                name: 'Buy Multiple',
                value: 'buyMultiple',
                description: 'Include buy multiple in the response'
            },
            {
                name: 'Currency Net Cost',
                value: 'currencyNetCost',
                description: 'Include currency net cost in the response'
            },
            {
                name: 'Currency Net Invoice Cost',
                value: 'currencyNetInvoiceCost',
                description: 'Include currency net invoice cost in the response'
            },
            {
                name: 'Currency Ordered Cost',
                value: 'currencyOrderedCost',
                description: 'Include currency ordered cost in the response'
            },
            {
                name: 'Currency Ordered Sale Value',
                value: 'currencyOrderedSaleValue',
                description: 'Include currency ordered sale value in the response'
            },
            {
                name: 'Currency Received Cost',
                value: 'currencyReceivedCost',
                description: 'Include currency received cost in the response'
            },
            {
                name: 'Currency Received Sale Value',
                value: 'currencyReceivedSaleValue',
                description: 'Include currency received sale value in the response'
            },
            {
                name: 'Currency RRP1',
                value: 'currencyRRP1',
                description: 'Include currency rrp1 in the response'
            },
            {
                name: 'Currency RRP2',
                value: 'currencyRRP2',
                description: 'Include currency rrp2 in the response'
            },
            {
                name: 'Currency RRP3',
                value: 'currencyRRP3',
                description: 'Include currency rrp3 in the response'
            },
            {
                name: 'Currency RRP4',
                value: 'currencyRRP4',
                description: 'Include currency rrp4 in the response'
            },
            {
                name: 'Currency RRP5',
                value: 'currencyRRP5',
                description: 'Include currency rrp5 in the response'
            },
            {
                name: 'Currency WSP1',
                value: 'currencyWSP1',
                description: 'Include currency wsp1 in the response'
            },
            {
                name: 'Currency WSP2',
                value: 'currencyWSP2',
                description: 'Include currency wsp2 in the response'
            },
            {
                name: 'Currency WSP3',
                value: 'currencyWSP3',
                description: 'Include currency wsp3 in the response'
            },
            {
                name: 'Currency WSP4',
                value: 'currencyWSP4',
                description: 'Include currency wsp4 in the response'
            },
            {
                name: 'Currency WSP5',
                value: 'currencyWSP5',
                description: 'Include currency wsp5 in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Description Override',
                value: 'descriptionOverride',
                description: 'Include description override in the response'
            },
            {
                name: 'Detail Status',
                value: 'detailStatus',
                description: 'Include detail status in the response'
            },
            {
                name: 'EAN Code',
                value: 'EANCode',
                description: 'Include ean code in the response'
            },
            {
                name: 'Expected Quantity',
                value: 'expectedQuantity',
                description: 'Include expected quantity in the response'
            },
            {
                name: 'Expected Weight',
                value: 'expectedWeight',
                description: 'Include expected weight in the response'
            },
            {
                name: 'Generic Sales Quantity',
                value: 'genericSalesQuantity',
                description: 'Include generic sales quantity in the response'
            },
            {
                name: 'Generic Stock',
                value: 'genericStock',
                description: 'Include generic stock in the response'
            },
            {
                name: 'GRN Priced',
                value: 'GRNPriced',
                description: 'Include grn priced in the response'
            },
            {
                name: 'Gross Weight',
                value: 'grossWeight',
                description: 'Include gross weight in the response'
            },
            {
                name: 'Label Quantity',
                value: 'labelQuantity',
                description: 'Include label quantity in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Line Number',
                value: 'lineNumber',
                description: 'Include line number in the response'
            },
            {
                name: 'Net Cost',
                value: 'netCost',
                description: 'Include net cost in the response'
            },
            {
                name: 'Net Invoice Cost',
                value: 'netInvoiceCost',
                description: 'Include net invoice cost in the response'
            },
            {
                name: 'Order Line Comment',
                value: 'orderLineComment',
                description: 'Include order line comment in the response'
            },
            {
                name: 'Ordered Cost',
                value: 'orderedCost',
                description: 'Include ordered cost in the response'
            },
            {
                name: 'Ordered Cost Indicator',
                value: 'orderedCostIndicator',
                description: 'Include ordered cost indicator in the response'
            },
            {
                name: 'Ordered Free Quantity',
                value: 'orderedFreeQuantity',
                description: 'Include ordered free quantity in the response'
            },
            {
                name: 'Ordered Quantity',
                value: 'orderedQuantity',
                description: 'Include ordered quantity in the response'
            },
            {
                name: 'Ordered Sale Value',
                value: 'orderedSaleValue',
                description: 'Include ordered sale value in the response'
            },
            {
                name: 'Pack Size',
                value: 'packSize',
                description: 'Include pack size in the response'
            },
            {
                name: 'Pallet Quantity',
                value: 'palletQuantity',
                description: 'Include pallet quantity in the response'
            },
            {
                name: 'Pallet Weight',
                value: 'palletWeight',
                description: 'Include pallet weight in the response'
            },
            {
                name: 'Passed Quantity',
                value: 'passedQuantity',
                description: 'Include passed quantity in the response'
            },
            {
                name: 'Payment Desc',
                value: 'paymentDesc',
                description: 'Include payment desc in the response'
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
                name: 'Product Description',
                value: 'productDescription',
                description: 'Include product description in the response'
            },
            {
                name: 'Promotion Buy End',
                value: 'promotionBuyEnd',
                description: 'Include promotion buy end in the response'
            },
            {
                name: 'Promotion Number',
                value: 'promotionNumber',
                description: 'Include promotion number in the response'
            },
            {
                name: 'Purchase Order Number',
                value: 'purchaseOrderNumber',
                description: 'Include purchase order number in the response'
            },
            {
                name: 'Purchase Order Suffix',
                value: 'purchaseOrderSuffix',
                description: 'Include purchase order suffix in the response'
            },
            {
                name: 'Quarantined Quantity',
                value: 'quarantinedQuantity',
                description: 'Include quarantined quantity in the response'
            },
            {
                name: 'Received Bonus Desc',
                value: 'receivedBonusDesc',
                description: 'Include received bonus desc in the response'
            },
            {
                name: 'Received Bonus Exclusion',
                value: 'receivedBonusExclusion',
                description: 'Include received bonus exclusion in the response'
            },
            {
                name: 'Received Bonus Indicator',
                value: 'receivedBonusIndicator',
                description: 'Include received bonus indicator in the response'
            },
            {
                name: 'Received Bonus Symbol',
                value: 'receivedBonusSymbol',
                description: 'Include received bonus symbol in the response'
            },
            {
                name: 'Received Bonus Type',
                value: 'receivedBonusType',
                description: 'Include received bonus type in the response'
            },
            {
                name: 'Received Bonus Value',
                value: 'receivedBonusValue',
                description: 'Include received bonus value in the response'
            },
            {
                name: 'Received Cost',
                value: 'receivedCost',
                description: 'Include received cost in the response'
            },
            {
                name: 'Received Free Quantity',
                value: 'receivedFreeQuantity',
                description: 'Include received free quantity in the response'
            },
            {
                name: 'Received Payment Desc',
                value: 'receivedPaymentDesc',
                description: 'Include received payment desc in the response'
            },
            {
                name: 'Received Payment Type',
                value: 'receivedPaymentType',
                description: 'Include received payment type in the response'
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
                name: 'Received Weight',
                value: 'receivedWeight',
                description: 'Include received weight in the response'
            },
            {
                name: 'Reject Reason',
                value: 'rejectReason',
                description: 'Include reject reason in the response'
            },
            {
                name: 'Rejected Quantity',
                value: 'rejectedQuantity',
                description: 'Include rejected quantity in the response'
            },
            {
                name: 'Retail Pack',
                value: 'retailPack',
                description: 'Include retail pack in the response'
            },
            {
                name: 'ROQ',
                value: 'ROQ',
                description: 'Include roq in the response'
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
                name: 'Sale Price Indicator',
                value: 'salePriceIndicator',
                description: 'Include sale price indicator in the response'
            },
            {
                name: 'Sell VAT Value',
                value: 'sellVATValue',
                description: 'Include sell vat value in the response'
            },
            {
                name: 'Standard Volume',
                value: 'standardVolume',
                description: 'Include standard volume in the response'
            },
            {
                name: 'Substitute Product',
                value: 'substituteProduct',
                description: 'Include substitute product in the response'
            },
            {
                name: 'Supplier Product Code',
                value: 'supplierProductCode',
                description: 'Include supplier product code in the response'
            },
            {
                name: 'Temperature',
                value: 'temperature',
                description: 'Include temperature in the response'
            },
            {
                name: 'To Follow',
                value: 'toFollow',
                description: 'Include to follow in the response'
            },
            {
                name: 'Tuc',
                value: 'tuc',
                description: 'Include tuc in the response'
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
                resource: ['purchaseOrderLines'],
                operation: ['purchaseOrderLines:get']
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
                resource: ['purchaseOrderLines'],
                operation: ['purchaseOrderLines:get']
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
                resource: ['purchaseOrderLines'],
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
                resource: ['purchaseOrderLines'],
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
                resource: ['purchaseOrderLines'],
                operation: ['get']
            }
        }
    }
];

export const purchaseOrderLinesListFields: INodeProperties[] = [
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
                resource: ['purchaseOrderLines'],
                operation: ['purchaseOrderLines:list']
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
                resource: ['purchaseOrderLines'],
                operation: ['purchaseOrderLines:list'],
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
                resource: ['purchaseOrderLines'],
                operation: ['purchaseOrderLines:list'],
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
                resource: ['purchaseOrderLines'],
                operation: ['purchaseOrderLines:list'],
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
                        default: 'batchNumber',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Batch Number',
                                value: 'batchNumber'
                            },
                            {
                                name: 'Best Before Date',
                                value: 'bestBeforeDate'
                            },
                            {
                                name: 'Box Weight',
                                value: 'boxWeight'
                            },
                            {
                                name: 'Buy Multiple',
                                value: 'buyMultiple'
                            },
                            {
                                name: 'Currency Net Cost',
                                value: 'currencyNetCost'
                            },
                            {
                                name: 'Currency Net Invoice Cost',
                                value: 'currencyNetInvoiceCost'
                            },
                            {
                                name: 'Currency Ordered Cost',
                                value: 'currencyOrderedCost'
                            },
                            {
                                name: 'Currency Ordered Sale Value',
                                value: 'currencyOrderedSaleValue'
                            },
                            {
                                name: 'Currency Received Cost',
                                value: 'currencyReceivedCost'
                            },
                            {
                                name: 'Currency Received Sale Value',
                                value: 'currencyReceivedSaleValue'
                            },
                            {
                                name: 'Currency RRP1',
                                value: 'currencyRRP1'
                            },
                            {
                                name: 'Currency RRP2',
                                value: 'currencyRRP2'
                            },
                            {
                                name: 'Currency RRP3',
                                value: 'currencyRRP3'
                            },
                            {
                                name: 'Currency RRP4',
                                value: 'currencyRRP4'
                            },
                            {
                                name: 'Currency RRP5',
                                value: 'currencyRRP5'
                            },
                            {
                                name: 'Currency WSP1',
                                value: 'currencyWSP1'
                            },
                            {
                                name: 'Currency WSP2',
                                value: 'currencyWSP2'
                            },
                            {
                                name: 'Currency WSP3',
                                value: 'currencyWSP3'
                            },
                            {
                                name: 'Currency WSP4',
                                value: 'currencyWSP4'
                            },
                            {
                                name: 'Currency WSP5',
                                value: 'currencyWSP5'
                            },
                            {
                                name: 'Depot',
                                value: 'depot'
                            },
                            {
                                name: 'Description Override',
                                value: 'descriptionOverride'
                            },
                            {
                                name: 'Detail Status',
                                value: 'detailStatus'
                            },
                            {
                                name: 'Expected Quantity',
                                value: 'expectedQuantity'
                            },
                            {
                                name: 'Expected Weight',
                                value: 'expectedWeight'
                            },
                            {
                                name: 'Generic Sales Quantity',
                                value: 'genericSalesQuantity'
                            },
                            {
                                name: 'Generic Stock',
                                value: 'genericStock'
                            },
                            {
                                name: 'GRN Priced',
                                value: 'GRNPriced'
                            },
                            {
                                name: 'Gross Weight',
                                value: 'grossWeight'
                            },
                            {
                                name: 'Hide Nested Keys',
                                value: 'hideNestedKeys'
                            },
                            {
                                name: 'Label Quantity',
                                value: 'labelQuantity'
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
                                name: 'Line Number',
                                value: 'lineNumber'
                            },
                            {
                                name: 'Nested',
                                value: 'nested'
                            },
                            {
                                name: 'Net Cost',
                                value: 'netCost'
                            },
                            {
                                name: 'Net Invoice Cost',
                                value: 'netInvoiceCost'
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
                                name: 'Order Line Comment',
                                value: 'orderLineComment'
                            },
                            {
                                name: 'Ordered Cost',
                                value: 'orderedCost'
                            },
                            {
                                name: 'Ordered Cost Indicator',
                                value: 'orderedCostIndicator'
                            },
                            {
                                name: 'Ordered Free Quantity',
                                value: 'orderedFreeQuantity'
                            },
                            {
                                name: 'Ordered Quantity',
                                value: 'orderedQuantity'
                            },
                            {
                                name: 'Ordered Sale Value',
                                value: 'orderedSaleValue'
                            },
                            {
                                name: 'Pack Size',
                                value: 'packSize'
                            },
                            {
                                name: 'Pallet Quantity',
                                value: 'palletQuantity'
                            },
                            {
                                name: 'Pallet Weight',
                                value: 'palletWeight'
                            },
                            {
                                name: 'Passed Quantity',
                                value: 'passedQuantity'
                            },
                            {
                                name: 'Price Date',
                                value: 'priceDate'
                            },
                            {
                                name: 'Product Code',
                                value: 'productCode'
                            },
                            {
                                name: 'Product Description',
                                value: 'productDescription'
                            },
                            {
                                name: 'Promotion Buy End',
                                value: 'promotionBuyEnd'
                            },
                            {
                                name: 'Promotion Number',
                                value: 'promotionNumber'
                            },
                            {
                                name: 'Purchase Order Number',
                                value: 'purchaseOrderNumber'
                            },
                            {
                                name: 'Purchase Order Suffix',
                                value: 'purchaseOrderSuffix'
                            },
                            {
                                name: 'Quarantined Quantity',
                                value: 'quarantinedQuantity'
                            },
                            {
                                name: 'Received Cost',
                                value: 'receivedCost'
                            },
                            {
                                name: 'Received Free Quantity',
                                value: 'receivedFreeQuantity'
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
                                name: 'Received Weight',
                                value: 'receivedWeight'
                            },
                            {
                                name: 'Reject Reason',
                                value: 'rejectReason'
                            },
                            {
                                name: 'Rejected Quantity',
                                value: 'rejectedQuantity'
                            },
                            {
                                name: 'Retail Pack',
                                value: 'retailPack'
                            },
                            {
                                name: 'ROQ',
                                value: 'ROQ'
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
                                name: 'Sale Price Indicator',
                                value: 'salePriceIndicator'
                            },
                            {
                                name: 'Sell VAT Value',
                                value: 'sellVATValue'
                            },
                            {
                                name: 'Substitute Product',
                                value: 'substituteProduct'
                            },
                            {
                                name: 'Supplier Product Code',
                                value: 'supplierProductCode'
                            },
                            {
                                name: 'Temperature',
                                value: 'temperature'
                            },
                            {
                                name: 'Timeout',
                                value: 'timeout'
                            },
                            {
                                name: 'To Follow',
                                value: 'toFollow'
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
                resource: ['purchaseOrderLines'],
                operation: ['purchaseOrderLines:list'],
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
                resource: ['purchaseOrderLines'],
                operation: ['purchaseOrderLines:list'],
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
                resource: ['purchaseOrderLines'],
                operation: ['purchaseOrderLines:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Line Number',
        name: 'lineNumber',
        type: 'number',
        default: '',
        description: 'Line (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        typeOptions: {
            minValue: 0
        },
        placeholder: '1',
        displayOptions: {
            show: {
                resource: ['purchaseOrderLines'],
                operation: ['purchaseOrderLines:list'],
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
                resource: ['purchaseOrderLines'],
                operation: ['purchaseOrderLines:list'],
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
        placeholder: 'tw10001',
        displayOptions: {
            show: {
                resource: ['purchaseOrderLines'],
                operation: ['purchaseOrderLines:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Ordered Quantity',
        name: 'orderedQuantity',
        type: 'number',
        default: '',
        description: 'Ordered Quantity (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        typeOptions: {
            minValue: -9999
        },
        placeholder: '10',
        displayOptions: {
            show: {
                resource: ['purchaseOrderLines'],
                operation: ['purchaseOrderLines:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Received Quantity',
        name: 'receivedQuantity',
        type: 'number',
        default: '',
        description: 'Received Quantity (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        typeOptions: {
            minValue: -9999
        },
        placeholder: '140',
        displayOptions: {
            show: {
                resource: ['purchaseOrderLines'],
                operation: ['purchaseOrderLines:list'],
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
                name: 'Batch Number (Ascending)',
                value: 'batchNumber',
                description: 'Sort by Batch Number in ascending order'
            },
            {
                name: 'Batch Number (Descending)',
                value: '-batchNumber',
                description: 'Sort by Batch Number in descending order'
            },
            {
                name: 'Best Before Date (Ascending)',
                value: 'bestBeforeDate',
                description: 'Sort by Best Before Date in ascending order'
            },
            {
                name: 'Best Before Date (Descending)',
                value: '-bestBeforeDate',
                description: 'Sort by Best Before Date in descending order'
            },
            {
                name: 'Box Weight (Ascending)',
                value: 'boxWeight',
                description: 'Sort by Box Weight in ascending order'
            },
            {
                name: 'Box Weight (Descending)',
                value: '-boxWeight',
                description: 'Sort by Box Weight in descending order'
            },
            {
                name: 'Buy Multiple (Ascending)',
                value: 'buyMultiple',
                description: 'Sort by Buy Multiple in ascending order'
            },
            {
                name: 'Buy Multiple (Descending)',
                value: '-buyMultiple',
                description: 'Sort by Buy Multiple in descending order'
            },
            {
                name: 'Currency Net Cost (Ascending)',
                value: 'currencyNetCost',
                description: 'Sort by Currency Net Cost in ascending order'
            },
            {
                name: 'Currency Net Cost (Descending)',
                value: '-currencyNetCost',
                description: 'Sort by Currency Net Cost in descending order'
            },
            {
                name: 'Currency Net Invoice Cost (Ascending)',
                value: 'currencyNetInvoiceCost',
                description: 'Sort by Currency Net Invoice Cost in ascending order'
            },
            {
                name: 'Currency Net Invoice Cost (Descending)',
                value: '-currencyNetInvoiceCost',
                description: 'Sort by Currency Net Invoice Cost in descending order'
            },
            {
                name: 'Currency Ordered Cost (Ascending)',
                value: 'currencyOrderedCost',
                description: 'Sort by Currency Ordered Cost in ascending order'
            },
            {
                name: 'Currency Ordered Cost (Descending)',
                value: '-currencyOrderedCost',
                description: 'Sort by Currency Ordered Cost in descending order'
            },
            {
                name: 'Currency Ordered Sale Value (Ascending)',
                value: 'currencyOrderedSaleValue',
                description: 'Sort by Currency Ordered Sale Value in ascending order'
            },
            {
                name: 'Currency Ordered Sale Value (Descending)',
                value: '-currencyOrderedSaleValue',
                description: 'Sort by Currency Ordered Sale Value in descending order'
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
                name: 'Currency RRP1 (Ascending)',
                value: 'currencyRRP1',
                description: 'Sort by Currency RRP1 in ascending order'
            },
            {
                name: 'Currency RRP1 (Descending)',
                value: '-currencyRRP1',
                description: 'Sort by Currency RRP1 in descending order'
            },
            {
                name: 'Currency RRP2 (Ascending)',
                value: 'currencyRRP2',
                description: 'Sort by Currency RRP2 in ascending order'
            },
            {
                name: 'Currency RRP2 (Descending)',
                value: '-currencyRRP2',
                description: 'Sort by Currency RRP2 in descending order'
            },
            {
                name: 'Currency RRP3 (Ascending)',
                value: 'currencyRRP3',
                description: 'Sort by Currency RRP3 in ascending order'
            },
            {
                name: 'Currency RRP3 (Descending)',
                value: '-currencyRRP3',
                description: 'Sort by Currency RRP3 in descending order'
            },
            {
                name: 'Currency RRP4 (Ascending)',
                value: 'currencyRRP4',
                description: 'Sort by Currency RRP4 in ascending order'
            },
            {
                name: 'Currency RRP4 (Descending)',
                value: '-currencyRRP4',
                description: 'Sort by Currency RRP4 in descending order'
            },
            {
                name: 'Currency RRP5 (Ascending)',
                value: 'currencyRRP5',
                description: 'Sort by Currency RRP5 in ascending order'
            },
            {
                name: 'Currency RRP5 (Descending)',
                value: '-currencyRRP5',
                description: 'Sort by Currency RRP5 in descending order'
            },
            {
                name: 'Currency WSP1 (Ascending)',
                value: 'currencyWSP1',
                description: 'Sort by Currency WSP1 in ascending order'
            },
            {
                name: 'Currency WSP1 (Descending)',
                value: '-currencyWSP1',
                description: 'Sort by Currency WSP1 in descending order'
            },
            {
                name: 'Currency WSP2 (Ascending)',
                value: 'currencyWSP2',
                description: 'Sort by Currency WSP2 in ascending order'
            },
            {
                name: 'Currency WSP2 (Descending)',
                value: '-currencyWSP2',
                description: 'Sort by Currency WSP2 in descending order'
            },
            {
                name: 'Currency WSP3 (Ascending)',
                value: 'currencyWSP3',
                description: 'Sort by Currency WSP3 in ascending order'
            },
            {
                name: 'Currency WSP3 (Descending)',
                value: '-currencyWSP3',
                description: 'Sort by Currency WSP3 in descending order'
            },
            {
                name: 'Currency WSP4 (Ascending)',
                value: 'currencyWSP4',
                description: 'Sort by Currency WSP4 in ascending order'
            },
            {
                name: 'Currency WSP4 (Descending)',
                value: '-currencyWSP4',
                description: 'Sort by Currency WSP4 in descending order'
            },
            {
                name: 'Currency WSP5 (Ascending)',
                value: 'currencyWSP5',
                description: 'Sort by Currency WSP5 in ascending order'
            },
            {
                name: 'Currency WSP5 (Descending)',
                value: '-currencyWSP5',
                description: 'Sort by Currency WSP5 in descending order'
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
                name: 'Description Override (Ascending)',
                value: 'descriptionOverride',
                description: 'Sort by Description Override in ascending order'
            },
            {
                name: 'Description Override (Descending)',
                value: '-descriptionOverride',
                description: 'Sort by Description Override in descending order'
            },
            {
                name: 'Detail Status (Ascending)',
                value: 'detailStatus',
                description: 'Sort by Detail Status in ascending order'
            },
            {
                name: 'Detail Status (Descending)',
                value: '-detailStatus',
                description: 'Sort by Detail Status in descending order'
            },
            {
                name: 'Expected Quantity (Ascending)',
                value: 'expectedQuantity',
                description: 'Sort by Expected Quantity in ascending order'
            },
            {
                name: 'Expected Quantity (Descending)',
                value: '-expectedQuantity',
                description: 'Sort by Expected Quantity in descending order'
            },
            {
                name: 'Expected Weight (Ascending)',
                value: 'expectedWeight',
                description: 'Sort by Expected Weight in ascending order'
            },
            {
                name: 'Expected Weight (Descending)',
                value: '-expectedWeight',
                description: 'Sort by Expected Weight in descending order'
            },
            {
                name: 'Generic Sales Quantity (Ascending)',
                value: 'genericSalesQuantity',
                description: 'Sort by Generic Sales Quantity in ascending order'
            },
            {
                name: 'Generic Sales Quantity (Descending)',
                value: '-genericSalesQuantity',
                description: 'Sort by Generic Sales Quantity in descending order'
            },
            {
                name: 'Generic Stock (Ascending)',
                value: 'genericStock',
                description: 'Sort by Generic Stock in ascending order'
            },
            {
                name: 'Generic Stock (Descending)',
                value: '-genericStock',
                description: 'Sort by Generic Stock in descending order'
            },
            {
                name: 'GRN Priced (Ascending)',
                value: 'GRNPriced',
                description: 'Sort by GRN Priced in ascending order'
            },
            {
                name: 'GRN Priced (Descending)',
                value: '-GRNPriced',
                description: 'Sort by GRN Priced in descending order'
            },
            {
                name: 'Gross Weight (Ascending)',
                value: 'grossWeight',
                description: 'Sort by Gross Weight in ascending order'
            },
            {
                name: 'Gross Weight (Descending)',
                value: '-grossWeight',
                description: 'Sort by Gross Weight in descending order'
            },
            {
                name: 'Label Quantity (Ascending)',
                value: 'labelQuantity',
                description: 'Sort by Label Quantity in ascending order'
            },
            {
                name: 'Label Quantity (Descending)',
                value: '-labelQuantity',
                description: 'Sort by Label Quantity in descending order'
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
                name: 'Line Number (Ascending)',
                value: 'lineNumber',
                description: 'Sort by Line Number in ascending order'
            },
            {
                name: 'Line Number (Descending)',
                value: '-lineNumber',
                description: 'Sort by Line Number in descending order'
            },
            {
                name: 'Net Cost (Ascending)',
                value: 'netCost',
                description: 'Sort by Net Cost in ascending order'
            },
            {
                name: 'Net Cost (Descending)',
                value: '-netCost',
                description: 'Sort by Net Cost in descending order'
            },
            {
                name: 'Net Invoice Cost (Ascending)',
                value: 'netInvoiceCost',
                description: 'Sort by Net Invoice Cost in ascending order'
            },
            {
                name: 'Net Invoice Cost (Descending)',
                value: '-netInvoiceCost',
                description: 'Sort by Net Invoice Cost in descending order'
            },
            {
                name: 'Order Line Comment (Ascending)',
                value: 'orderLineComment',
                description: 'Sort by Order Line Comment in ascending order'
            },
            {
                name: 'Order Line Comment (Descending)',
                value: '-orderLineComment',
                description: 'Sort by Order Line Comment in descending order'
            },
            {
                name: 'Ordered Cost (Ascending)',
                value: 'orderedCost',
                description: 'Sort by Ordered Cost in ascending order'
            },
            {
                name: 'Ordered Cost (Descending)',
                value: '-orderedCost',
                description: 'Sort by Ordered Cost in descending order'
            },
            {
                name: 'Ordered Cost Indicator (Ascending)',
                value: 'orderedCostIndicator',
                description: 'Sort by Ordered Cost Indicator in ascending order'
            },
            {
                name: 'Ordered Cost Indicator (Descending)',
                value: '-orderedCostIndicator',
                description: 'Sort by Ordered Cost Indicator in descending order'
            },
            {
                name: 'Ordered Free Quantity (Ascending)',
                value: 'orderedFreeQuantity',
                description: 'Sort by Ordered Free Quantity in ascending order'
            },
            {
                name: 'Ordered Free Quantity (Descending)',
                value: '-orderedFreeQuantity',
                description: 'Sort by Ordered Free Quantity in descending order'
            },
            {
                name: 'Ordered Quantity (Ascending)',
                value: 'orderedQuantity',
                description: 'Sort by Ordered Quantity in ascending order'
            },
            {
                name: 'Ordered Quantity (Descending)',
                value: '-orderedQuantity',
                description: 'Sort by Ordered Quantity in descending order'
            },
            {
                name: 'Ordered Sale Value (Ascending)',
                value: 'orderedSaleValue',
                description: 'Sort by Ordered Sale Value in ascending order'
            },
            {
                name: 'Ordered Sale Value (Descending)',
                value: '-orderedSaleValue',
                description: 'Sort by Ordered Sale Value in descending order'
            },
            {
                name: 'Pack Size (Ascending)',
                value: 'packSize',
                description: 'Sort by Pack Size in ascending order'
            },
            {
                name: 'Pack Size (Descending)',
                value: '-packSize',
                description: 'Sort by Pack Size in descending order'
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
                name: 'Pallet Weight (Ascending)',
                value: 'palletWeight',
                description: 'Sort by Pallet Weight in ascending order'
            },
            {
                name: 'Pallet Weight (Descending)',
                value: '-palletWeight',
                description: 'Sort by Pallet Weight in descending order'
            },
            {
                name: 'Passed Quantity (Ascending)',
                value: 'passedQuantity',
                description: 'Sort by Passed Quantity in ascending order'
            },
            {
                name: 'Passed Quantity (Descending)',
                value: '-passedQuantity',
                description: 'Sort by Passed Quantity in descending order'
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
                name: 'Product Description (Ascending)',
                value: 'productDescription',
                description: 'Sort by Product Description in ascending order'
            },
            {
                name: 'Product Description (Descending)',
                value: '-productDescription',
                description: 'Sort by Product Description in descending order'
            },
            {
                name: 'Promotion Buy End (Ascending)',
                value: 'promotionBuyEnd',
                description: 'Sort by Promotion Buy End in ascending order'
            },
            {
                name: 'Promotion Buy End (Descending)',
                value: '-promotionBuyEnd',
                description: 'Sort by Promotion Buy End in descending order'
            },
            {
                name: 'Promotion Number (Ascending)',
                value: 'promotionNumber',
                description: 'Sort by Promotion Number in ascending order'
            },
            {
                name: 'Promotion Number (Descending)',
                value: '-promotionNumber',
                description: 'Sort by Promotion Number in descending order'
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
                name: 'Quarantined Quantity (Ascending)',
                value: 'quarantinedQuantity',
                description: 'Sort by Quarantined Quantity in ascending order'
            },
            {
                name: 'Quarantined Quantity (Descending)',
                value: '-quarantinedQuantity',
                description: 'Sort by Quarantined Quantity in descending order'
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
                name: 'Received Free Quantity (Ascending)',
                value: 'receivedFreeQuantity',
                description: 'Sort by Received Free Quantity in ascending order'
            },
            {
                name: 'Received Free Quantity (Descending)',
                value: '-receivedFreeQuantity',
                description: 'Sort by Received Free Quantity in descending order'
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
                name: 'Received Weight (Ascending)',
                value: 'receivedWeight',
                description: 'Sort by Received Weight in ascending order'
            },
            {
                name: 'Received Weight (Descending)',
                value: '-receivedWeight',
                description: 'Sort by Received Weight in descending order'
            },
            {
                name: 'Reject Reason (Ascending)',
                value: 'rejectReason',
                description: 'Sort by Reject Reason in ascending order'
            },
            {
                name: 'Reject Reason (Descending)',
                value: '-rejectReason',
                description: 'Sort by Reject Reason in descending order'
            },
            {
                name: 'Rejected Quantity (Ascending)',
                value: 'rejectedQuantity',
                description: 'Sort by Rejected Quantity in ascending order'
            },
            {
                name: 'Rejected Quantity (Descending)',
                value: '-rejectedQuantity',
                description: 'Sort by Rejected Quantity in descending order'
            },
            {
                name: 'Retail Pack (Ascending)',
                value: 'retailPack',
                description: 'Sort by Retail Pack in ascending order'
            },
            {
                name: 'Retail Pack (Descending)',
                value: '-retailPack',
                description: 'Sort by Retail Pack in descending order'
            },
            {
                name: 'ROQ (Ascending)',
                value: 'ROQ',
                description: 'Sort by ROQ in ascending order'
            },
            {
                name: 'ROQ (Descending)',
                value: '-ROQ',
                description: 'Sort by ROQ in descending order'
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
                name: 'Sale Price Indicator (Ascending)',
                value: 'salePriceIndicator',
                description: 'Sort by Sale Price Indicator in ascending order'
            },
            {
                name: 'Sale Price Indicator (Descending)',
                value: '-salePriceIndicator',
                description: 'Sort by Sale Price Indicator in descending order'
            },
            {
                name: 'Sell VAT Value (Ascending)',
                value: 'sellVATValue',
                description: 'Sort by Sell VAT Value in ascending order'
            },
            {
                name: 'Sell VAT Value (Descending)',
                value: '-sellVATValue',
                description: 'Sort by Sell VAT Value in descending order'
            },
            {
                name: 'Substitute Product (Ascending)',
                value: 'substituteProduct',
                description: 'Sort by Substitute Product in ascending order'
            },
            {
                name: 'Substitute Product (Descending)',
                value: '-substituteProduct',
                description: 'Sort by Substitute Product in descending order'
            },
            {
                name: 'Supplier Product Code (Ascending)',
                value: 'supplierProductCode',
                description: 'Sort by Supplier Product Code in ascending order'
            },
            {
                name: 'Supplier Product Code (Descending)',
                value: '-supplierProductCode',
                description: 'Sort by Supplier Product Code in descending order'
            },
            {
                name: 'Temperature (Ascending)',
                value: 'temperature',
                description: 'Sort by Temperature in ascending order'
            },
            {
                name: 'Temperature (Descending)',
                value: '-temperature',
                description: 'Sort by Temperature in descending order'
            },
            {
                name: 'To Follow (Ascending)',
                value: 'toFollow',
                description: 'Sort by To Follow in ascending order'
            },
            {
                name: 'To Follow (Descending)',
                value: '-toFollow',
                description: 'Sort by To Follow in descending order'
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
                resource: ['purchaseOrderLines'],
                operation: ['purchaseOrderLines:list'],
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
                resource: ['purchaseOrderLines'],
                operation: ['purchaseOrderLines:list'],
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
                name: 'Batch Number',
                value: 'batchNumber',
                description: 'Include batch number in the response'
            },
            {
                name: 'Best Before Date',
                value: 'bestBeforeDate',
                description: 'Include best before date in the response'
            },
            {
                name: 'Bonus Desc',
                value: 'bonusDesc',
                description: 'Include bonus desc in the response'
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
                name: 'Box Weight',
                value: 'boxWeight',
                description: 'Include box weight in the response'
            },
            {
                name: 'Buy Multiple',
                value: 'buyMultiple',
                description: 'Include buy multiple in the response'
            },
            {
                name: 'Currency Net Cost',
                value: 'currencyNetCost',
                description: 'Include currency net cost in the response'
            },
            {
                name: 'Currency Net Invoice Cost',
                value: 'currencyNetInvoiceCost',
                description: 'Include currency net invoice cost in the response'
            },
            {
                name: 'Currency Ordered Cost',
                value: 'currencyOrderedCost',
                description: 'Include currency ordered cost in the response'
            },
            {
                name: 'Currency Ordered Sale Value',
                value: 'currencyOrderedSaleValue',
                description: 'Include currency ordered sale value in the response'
            },
            {
                name: 'Currency Received Cost',
                value: 'currencyReceivedCost',
                description: 'Include currency received cost in the response'
            },
            {
                name: 'Currency Received Sale Value',
                value: 'currencyReceivedSaleValue',
                description: 'Include currency received sale value in the response'
            },
            {
                name: 'Currency RRP1',
                value: 'currencyRRP1',
                description: 'Include currency rrp1 in the response'
            },
            {
                name: 'Currency RRP2',
                value: 'currencyRRP2',
                description: 'Include currency rrp2 in the response'
            },
            {
                name: 'Currency RRP3',
                value: 'currencyRRP3',
                description: 'Include currency rrp3 in the response'
            },
            {
                name: 'Currency RRP4',
                value: 'currencyRRP4',
                description: 'Include currency rrp4 in the response'
            },
            {
                name: 'Currency RRP5',
                value: 'currencyRRP5',
                description: 'Include currency rrp5 in the response'
            },
            {
                name: 'Currency WSP1',
                value: 'currencyWSP1',
                description: 'Include currency wsp1 in the response'
            },
            {
                name: 'Currency WSP2',
                value: 'currencyWSP2',
                description: 'Include currency wsp2 in the response'
            },
            {
                name: 'Currency WSP3',
                value: 'currencyWSP3',
                description: 'Include currency wsp3 in the response'
            },
            {
                name: 'Currency WSP4',
                value: 'currencyWSP4',
                description: 'Include currency wsp4 in the response'
            },
            {
                name: 'Currency WSP5',
                value: 'currencyWSP5',
                description: 'Include currency wsp5 in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Description Override',
                value: 'descriptionOverride',
                description: 'Include description override in the response'
            },
            {
                name: 'Detail Status',
                value: 'detailStatus',
                description: 'Include detail status in the response'
            },
            {
                name: 'EAN Code',
                value: 'EANCode',
                description: 'Include ean code in the response'
            },
            {
                name: 'Expected Quantity',
                value: 'expectedQuantity',
                description: 'Include expected quantity in the response'
            },
            {
                name: 'Expected Weight',
                value: 'expectedWeight',
                description: 'Include expected weight in the response'
            },
            {
                name: 'Generic Sales Quantity',
                value: 'genericSalesQuantity',
                description: 'Include generic sales quantity in the response'
            },
            {
                name: 'Generic Stock',
                value: 'genericStock',
                description: 'Include generic stock in the response'
            },
            {
                name: 'GRN Priced',
                value: 'GRNPriced',
                description: 'Include grn priced in the response'
            },
            {
                name: 'Gross Weight',
                value: 'grossWeight',
                description: 'Include gross weight in the response'
            },
            {
                name: 'Label Quantity',
                value: 'labelQuantity',
                description: 'Include label quantity in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Line Number',
                value: 'lineNumber',
                description: 'Include line number in the response'
            },
            {
                name: 'Net Cost',
                value: 'netCost',
                description: 'Include net cost in the response'
            },
            {
                name: 'Net Invoice Cost',
                value: 'netInvoiceCost',
                description: 'Include net invoice cost in the response'
            },
            {
                name: 'Order Line Comment',
                value: 'orderLineComment',
                description: 'Include order line comment in the response'
            },
            {
                name: 'Ordered Cost',
                value: 'orderedCost',
                description: 'Include ordered cost in the response'
            },
            {
                name: 'Ordered Cost Indicator',
                value: 'orderedCostIndicator',
                description: 'Include ordered cost indicator in the response'
            },
            {
                name: 'Ordered Free Quantity',
                value: 'orderedFreeQuantity',
                description: 'Include ordered free quantity in the response'
            },
            {
                name: 'Ordered Quantity',
                value: 'orderedQuantity',
                description: 'Include ordered quantity in the response'
            },
            {
                name: 'Ordered Sale Value',
                value: 'orderedSaleValue',
                description: 'Include ordered sale value in the response'
            },
            {
                name: 'Pack Size',
                value: 'packSize',
                description: 'Include pack size in the response'
            },
            {
                name: 'Pallet Quantity',
                value: 'palletQuantity',
                description: 'Include pallet quantity in the response'
            },
            {
                name: 'Pallet Weight',
                value: 'palletWeight',
                description: 'Include pallet weight in the response'
            },
            {
                name: 'Passed Quantity',
                value: 'passedQuantity',
                description: 'Include passed quantity in the response'
            },
            {
                name: 'Payment Desc',
                value: 'paymentDesc',
                description: 'Include payment desc in the response'
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
                name: 'Product Description',
                value: 'productDescription',
                description: 'Include product description in the response'
            },
            {
                name: 'Promotion Buy End',
                value: 'promotionBuyEnd',
                description: 'Include promotion buy end in the response'
            },
            {
                name: 'Promotion Number',
                value: 'promotionNumber',
                description: 'Include promotion number in the response'
            },
            {
                name: 'Purchase Order Number',
                value: 'purchaseOrderNumber',
                description: 'Include purchase order number in the response'
            },
            {
                name: 'Purchase Order Suffix',
                value: 'purchaseOrderSuffix',
                description: 'Include purchase order suffix in the response'
            },
            {
                name: 'Quarantined Quantity',
                value: 'quarantinedQuantity',
                description: 'Include quarantined quantity in the response'
            },
            {
                name: 'Received Bonus Desc',
                value: 'receivedBonusDesc',
                description: 'Include received bonus desc in the response'
            },
            {
                name: 'Received Bonus Exclusion',
                value: 'receivedBonusExclusion',
                description: 'Include received bonus exclusion in the response'
            },
            {
                name: 'Received Bonus Indicator',
                value: 'receivedBonusIndicator',
                description: 'Include received bonus indicator in the response'
            },
            {
                name: 'Received Bonus Symbol',
                value: 'receivedBonusSymbol',
                description: 'Include received bonus symbol in the response'
            },
            {
                name: 'Received Bonus Type',
                value: 'receivedBonusType',
                description: 'Include received bonus type in the response'
            },
            {
                name: 'Received Bonus Value',
                value: 'receivedBonusValue',
                description: 'Include received bonus value in the response'
            },
            {
                name: 'Received Cost',
                value: 'receivedCost',
                description: 'Include received cost in the response'
            },
            {
                name: 'Received Free Quantity',
                value: 'receivedFreeQuantity',
                description: 'Include received free quantity in the response'
            },
            {
                name: 'Received Payment Desc',
                value: 'receivedPaymentDesc',
                description: 'Include received payment desc in the response'
            },
            {
                name: 'Received Payment Type',
                value: 'receivedPaymentType',
                description: 'Include received payment type in the response'
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
                name: 'Received Weight',
                value: 'receivedWeight',
                description: 'Include received weight in the response'
            },
            {
                name: 'Reject Reason',
                value: 'rejectReason',
                description: 'Include reject reason in the response'
            },
            {
                name: 'Rejected Quantity',
                value: 'rejectedQuantity',
                description: 'Include rejected quantity in the response'
            },
            {
                name: 'Retail Pack',
                value: 'retailPack',
                description: 'Include retail pack in the response'
            },
            {
                name: 'ROQ',
                value: 'ROQ',
                description: 'Include roq in the response'
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
                name: 'Sale Price Indicator',
                value: 'salePriceIndicator',
                description: 'Include sale price indicator in the response'
            },
            {
                name: 'Sell VAT Value',
                value: 'sellVATValue',
                description: 'Include sell vat value in the response'
            },
            {
                name: 'Standard Volume',
                value: 'standardVolume',
                description: 'Include standard volume in the response'
            },
            {
                name: 'Substitute Product',
                value: 'substituteProduct',
                description: 'Include substitute product in the response'
            },
            {
                name: 'Supplier Product Code',
                value: 'supplierProductCode',
                description: 'Include supplier product code in the response'
            },
            {
                name: 'Temperature',
                value: 'temperature',
                description: 'Include temperature in the response'
            },
            {
                name: 'To Follow',
                value: 'toFollow',
                description: 'Include to follow in the response'
            },
            {
                name: 'Tuc',
                value: 'tuc',
                description: 'Include tuc in the response'
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
                resource: ['purchaseOrderLines'],
                operation: ['purchaseOrderLines:list'],
                filterMode: ['common']
            }
        }
    }
];
