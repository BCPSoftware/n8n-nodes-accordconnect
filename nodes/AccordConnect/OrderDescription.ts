import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0008 - 26/08/26 - do not edit by hand

export const ordersOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['orders'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'orders:create',
                description: 'Create a order',
                action: 'Create a order'
            },
            {
                name: 'Get',
                value: 'orders:get',
                description: 'Get a order',
                action: 'Get a order'
            },
            {
                name: 'List',
                value: 'orders:list',
                description: 'List many orders',
                action: 'List many orders'
            },
            {
                name: 'Update',
                value: 'orders:update',
                description: 'Update a order',
                action: 'Update a order'
            },
        ],
        default: 'orders:create',
    },
];


export const ordersReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the order',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'depot,orderNumber,createdDate,lastUpdate',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Account Credit Amount',
                value: 'accountCreditAmount',
                description: 'Include account credit amount in the response'
            },
            {
                name: 'Actual Cost',
                value: 'actualCost',
                description: 'Include actual cost in the response'
            },
            {
                name: 'Actual Delivered Date',
                value: 'actualDeliveredDate',
                description: 'Include actual delivered date in the response'
            },
            {
                name: 'Amended Date',
                value: 'amendedDate',
                description: 'Include amended date in the response'
            },
            {
                name: 'Amount Payable',
                value: 'amountPayable',
                description: 'Include amount payable in the response'
            },
            {
                name: 'Archived Date',
                value: 'archivedDate',
                description: 'Include archived date in the response'
            },
            {
                name: 'Boxes',
                value: 'boxes',
                description: 'Include boxes in the response'
            },
            {
                name: 'Boxes Required',
                value: 'boxesRequired',
                description: 'Include boxes required in the response'
            },
            {
                name: 'Cages',
                value: 'cages',
                description: 'Include cages in the response'
            },
            {
                name: 'Calc Date',
                value: 'calcDate',
                description: 'Include calc date in the response'
            },
            {
                name: 'Carrier ID',
                value: 'carrierId',
                description: 'Include carrier ID in the response'
            },
            {
                name: 'Cash Account',
                value: 'cashAccount',
                description: 'Include cash account in the response'
            },
            {
                name: 'Cash Point Number',
                value: 'cashPointNumber',
                description: 'Include cash point number in the response'
            },
            {
                name: 'Cash Value',
                value: 'cashValue',
                description: 'Include cash value in the response'
            },
            {
                name: 'Cashier Code',
                value: 'cashierCode',
                description: 'Include cashier code in the response'
            },
            {
                name: 'Checkout Number',
                value: 'checkoutNumber',
                description: 'Include checkout number in the response'
            },
            {
                name: 'Checkout Operator Code',
                value: 'checkoutOperatorCode',
                description: 'Include checkout operator code in the response'
            },
            {
                name: 'Checkout Time',
                value: 'checkoutTime',
                description: 'Include checkout time in the response'
            },
            {
                name: 'Cheque Value',
                value: 'chequeValue',
                description: 'Include cheque value in the response'
            },
            {
                name: 'Collected',
                value: 'collected',
                description: 'Include collected in the response'
            },
            {
                name: 'Collection Note',
                value: 'collectionNote',
                description: 'Include collection note in the response'
            },
            {
                name: 'Consolidate Order ID',
                value: 'consolidateOrderID',
                description: 'Include consolidate order ID in the response'
            },
            {
                name: 'Container Bags',
                value: 'containerBags',
                description: 'Include container bags in the response'
            },
            {
                name: 'Container Boxes',
                value: 'containerBoxes',
                description: 'Include container boxes in the response'
            },
            {
                name: 'Container Crates',
                value: 'containerCrates',
                description: 'Include container crates in the response'
            },
            {
                name: 'Coupon Value',
                value: 'couponValue',
                description: 'Include coupon value in the response'
            },
            {
                name: 'Created Date',
                value: 'createdDate',
                description: 'Include created date in the response'
            },
            {
                name: 'Credit Card Value',
                value: 'creditCardValue',
                description: 'Include credit card value in the response'
            },
            {
                name: 'Currency Code',
                value: 'currencyCode',
                description: 'Include currency code in the response'
            },
            {
                name: 'Customer Add Surcharge',
                value: 'customerAddSurcharge',
                description: 'Include customer add surcharge in the response'
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
                name: 'Damage Allowance',
                value: 'damageAllowance',
                description: 'Include damage allowance in the response'
            },
            {
                name: 'Debit Card Value',
                value: 'debitCardValue',
                description: 'Include debit card value in the response'
            },
            {
                name: 'Delivery Charge',
                value: 'deliveryCharge',
                description: 'Include delivery charge in the response'
            },
            {
                name: 'Delivery Date',
                value: 'deliveryDate',
                description: 'Include delivery date in the response'
            },
            {
                name: 'Delivery Group',
                value: 'deliveryGroup',
                description: 'Include delivery group in the response'
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
                name: 'Dept',
                value: 'dept',
                description: 'Include dept in the response'
            },
            {
                name: 'Dept Description',
                value: 'deptDescription',
                description: 'Include dept description in the response'
            },
            {
                name: 'Destination Code',
                value: 'destinationCode',
                description: 'Include destination code in the response'
            },
            {
                name: 'Discount Amount',
                value: 'discountAmount',
                description: 'Include discount amount in the response'
            },
            {
                name: 'Discount Percent',
                value: 'discountPercent',
                description: 'Include discount percent in the response'
            },
            {
                name: 'Discount Reason Code',
                value: 'discountReasonCode',
                description: 'Include discount reason code in the response'
            },
            {
                name: 'Discount Value',
                value: 'discountValue',
                description: 'Include discount value in the response'
            },
            {
                name: 'Driver',
                value: 'driver',
                description: 'Include driver in the response'
            },
            {
                name: 'Drop',
                value: 'drop',
                description: 'Include drop in the response'
            },
            {
                name: 'Drs Value',
                value: 'drsValue',
                description: 'Include drs value in the response'
            },
            {
                name: 'Duty Ind',
                value: 'dutyInd',
                description: 'Include duty ind in the response'
            },
            {
                name: 'Entry Type',
                value: 'entryType',
                description: 'Include entry type in the response'
            },
            {
                name: 'Entry Type Description',
                value: 'entryTypeDescription',
                description: 'Include entry type description in the response'
            },
            {
                name: 'External Order Ref',
                value: 'externalOrderRef',
                description: 'Include external order ref in the response'
            },
            {
                name: 'Gift Message',
                value: 'giftMessage',
                description: 'Include gift message in the response'
            },
            {
                name: 'Gift Order',
                value: 'giftOrder',
                description: 'Include gift order in the response'
            },
            {
                name: 'Ho User ID Limit',
                value: 'hoUserIDLimit',
                description: 'Include ho user ID limit in the response'
            },
            {
                name: 'Ho User ID Stop',
                value: 'hoUserIDStop',
                description: 'Include ho user ID stop in the response'
            },
            {
                name: 'Input Date',
                value: 'inputDate',
                description: 'Include input date in the response'
            },
            {
                name: 'Internal Order Ref',
                value: 'internalOrderRef',
                description: 'Include internal order ref in the response'
            },
            {
                name: 'Invoice Msg',
                value: 'invoiceMsg',
                description: 'Include invoice msg in the response'
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
                name: 'Invoiced Date',
                value: 'invoicedDate',
                description: 'Include invoiced date in the response'
            },
            {
                name: 'Journey Drop',
                value: 'journeyDrop',
                description: 'Include journey drop in the response'
            },
            {
                name: 'Journey Number',
                value: 'journeyNumber',
                description: 'Include journey number in the response'
            },
            {
                name: 'Last Surcharge Rate',
                value: 'lastSurchargeRate',
                description: 'Include last surcharge rate in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Lines',
                value: 'lines',
                description: 'Include lines in the response'
            },
            {
                name: 'Message Code',
                value: 'messageCode',
                description: 'Include message code in the response'
            },
            {
                name: 'Message Text',
                value: 'messageText',
                description: 'Include message text in the response'
            },
            {
                name: 'Monitor Date',
                value: 'monitorDate',
                description: 'Include monitor date in the response'
            },
            {
                name: 'Off Stop Date',
                value: 'offStopDate',
                description: 'Include off stop date in the response'
            },
            {
                name: 'Online Order Value',
                value: 'onlineOrderValue',
                description: 'Include online order value in the response'
            },
            {
                name: 'Order Number',
                value: 'orderNumber',
                description: 'Include order number in the response'
            },
            {
                name: 'Order Status',
                value: 'orderStatus',
                description: 'Include order status in the response'
            },
            {
                name: 'Order Status Description',
                value: 'orderStatusDescription',
                description: 'Include order status description in the response'
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
                name: 'Order Value',
                value: 'orderValue',
                description: 'Include order value in the response'
            },
            {
                name: 'Organisation ANA',
                value: 'organisationANA',
                description: 'Include organisation ana in the response'
            },
            {
                name: 'Original Customer Order Ref',
                value: 'originalCustomerOrderRef',
                description: 'Include original customer order ref in the response'
            },
            {
                name: 'Over Credit Limit',
                value: 'overCreditLimit',
                description: 'Include over credit limit in the response'
            },
            {
                name: 'Over Credit Stop',
                value: 'overCreditStop',
                description: 'Include over credit stop in the response'
            },
            {
                name: 'Override Address',
                value: 'overrideAddress',
                description: 'Include override address in the response'
            },
            {
                name: 'Override Address1',
                value: 'overrideAddress1',
                description: 'Include override address1 in the response'
            },
            {
                name: 'Override Address2',
                value: 'overrideAddress2',
                description: 'Include override address2 in the response'
            },
            {
                name: 'Override Address3',
                value: 'overrideAddress3',
                description: 'Include override address3 in the response'
            },
            {
                name: 'Override Address4',
                value: 'overrideAddress4',
                description: 'Include override address4 in the response'
            },
            {
                name: 'Override Address5',
                value: 'overrideAddress5',
                description: 'Include override address5 in the response'
            },
            {
                name: 'Override Name',
                value: 'overrideName',
                description: 'Include override name in the response'
            },
            {
                name: 'Override Phone',
                value: 'overridePhone',
                description: 'Include override phone in the response'
            },
            {
                name: 'Override Postcode',
                value: 'overridePostcode',
                description: 'Include override postcode in the response'
            },
            {
                name: 'Packs',
                value: 'packs',
                description: 'Include packs in the response'
            },
            {
                name: 'Parent Order ID',
                value: 'parentOrderID',
                description: 'Include parent order ID in the response'
            },
            {
                name: 'Payment Charge',
                value: 'paymentCharge',
                description: 'Include payment charge in the response'
            },
            {
                name: 'Payment Ref',
                value: 'paymentRef',
                description: 'Include payment ref in the response'
            },
            {
                name: 'Pick Msg',
                value: 'pickMsg',
                description: 'Include pick msg in the response'
            },
            {
                name: 'Picked Date',
                value: 'pickedDate',
                description: 'Include picked date in the response'
            },
            {
                name: 'Place Of Delivery',
                value: 'placeOfDelivery',
                description: 'Include place of delivery in the response'
            },
            {
                name: 'Prefixed Invoice Number',
                value: 'prefixedInvoiceNumber',
                description: 'Include prefixed invoice number in the response'
            },
            {
                name: 'Price Date',
                value: 'priceDate',
                description: 'Include price date in the response'
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
                name: 'Rebateable WSV',
                value: 'rebateableWSV',
                description: 'Include rebateable wsv in the response'
            },
            {
                name: 'Recent Off Stop',
                value: 'recentOffStop',
                description: 'Include recent off stop in the response'
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
                name: 'Reserves Ind',
                value: 'reservesInd',
                description: 'Include reserves ind in the response'
            },
            {
                name: 'Reserves Pick',
                value: 'reservesPick',
                description: 'Include reserves pick in the response'
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
                name: 'Sent Cases',
                value: 'sentCases',
                description: 'Include sent cases in the response'
            },
            {
                name: 'Sent Singles',
                value: 'sentSingles',
                description: 'Include sent singles in the response'
            },
            {
                name: 'Settlement Date',
                value: 'settlementDate',
                description: 'Include settlement date in the response'
            },
            {
                name: 'Settlement Discount Value',
                value: 'settlementDiscountValue',
                description: 'Include settlement discount value in the response'
            },
            {
                name: 'Short Name',
                value: 'shortName',
                description: 'Include short name in the response'
            },
            {
                name: 'Single Lines',
                value: 'singleLines',
                description: 'Include single lines in the response'
            },
            {
                name: 'Singles',
                value: 'singles',
                description: 'Include singles in the response'
            },
            {
                name: 'Source Type',
                value: 'sourceType',
                description: 'Include source type in the response'
            },
            {
                name: 'Source Type Description',
                value: 'sourceTypeDescription',
                description: 'Include source type description in the response'
            },
            {
                name: 'Straight To Invoice',
                value: 'straightToInvoice',
                description: 'Include straight to invoice in the response'
            },
            {
                name: 'Subs Allowed',
                value: 'subsAllowed',
                description: 'Include subs allowed in the response'
            },
            {
                name: 'Suppress Surcharge',
                value: 'suppressSurcharge',
                description: 'Include suppress surcharge in the response'
            },
            {
                name: 'Surcharge Amount',
                value: 'surchargeAmount',
                description: 'Include surcharge amount in the response'
            },
            {
                name: 'Surcharge Percent',
                value: 'surchargePercent',
                description: 'Include surcharge percent in the response'
            },
            {
                name: 'Surcharge Qty',
                value: 'surchargeQty',
                description: 'Include surcharge qty in the response'
            },
            {
                name: 'Surcharge Table',
                value: 'surchargeTable',
                description: 'Include surcharge table in the response'
            },
            {
                name: 'Surcharge Units',
                value: 'surchargeUnits',
                description: 'Include surcharge units in the response'
            },
            {
                name: 'Surcharge Value',
                value: 'surchargeValue',
                description: 'Include surcharge value in the response'
            },
            {
                name: 'Time Frame',
                value: 'timeFrame',
                description: 'Include time frame in the response'
            },
            {
                name: 'Time Slot',
                value: 'timeSlot',
                description: 'Include time slot in the response'
            },
            {
                name: 'Total Cases',
                value: 'totalCases',
                description: 'Include total cases in the response'
            },
            {
                name: 'Total Cig Boxes',
                value: 'totalCigBoxes',
                description: 'Include total cig boxes in the response'
            },
            {
                name: 'Total Cigs',
                value: 'totalCigs',
                description: 'Include total cigs in the response'
            },
            {
                name: 'Total Items',
                value: 'totalItems',
                description: 'Include total items in the response'
            },
            {
                name: 'Total Lines',
                value: 'totalLines',
                description: 'Include total lines in the response'
            },
            {
                name: 'Total Singles',
                value: 'totalSingles',
                description: 'Include total singles in the response'
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
                name: 'Tp Cheque Change',
                value: 'tpChequeChange',
                description: 'Include tp cheque change in the response'
            },
            {
                name: 'Tp Cheque Value',
                value: 'tpChequeValue',
                description: 'Include tp cheque value in the response'
            },
            {
                name: 'Type',
                value: 'type',
                description: 'Include type in the response'
            },
            {
                name: 'User',
                value: 'user',
                description: 'Include user in the response'
            },
            {
                name: 'Vat Code',
                value: 'vatCode',
                description: 'Include vat code in the response'
            },
            {
                name: 'Vat Discount',
                value: 'vatDiscount',
                description: 'Include vat discount in the response'
            },
            {
                name: 'Vat Goods',
                value: 'vatGoods',
                description: 'Include vat goods in the response'
            },
            {
                name: 'Vat Rate',
                value: 'vatRate',
                description: 'Include vat rate in the response'
            },
            {
                name: 'Vat Surcharge',
                value: 'vatSurcharge',
                description: 'Include vat surcharge in the response'
            },
            {
                name: 'Vat Value',
                value: 'vatValue',
                description: 'Include vat value in the response'
            },
            {
                name: 'Vehicle',
                value: 'vehicle',
                description: 'Include vehicle in the response'
            },
            {
                name: 'Week No',
                value: 'weekNo',
                description: 'Include week no in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:get']
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
                resource: ['orders'],
                operation: ['orders:get']
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
                resource: ['orders'],
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
                resource: ['orders'],
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
                resource: ['orders'],
                operation: ['get']
            }
        }
    }
];

export const ordersUpdateFields: INodeProperties[] = [
    {
        displayName: 'Depot',
        name: 'depot',
        type: 'string',
        default: '',
        description: 'Depot code',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Order Number',
        name: 'orderNumber',
        type: 'number',
        default: '',
        description: 'The order number value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Line ID',
        name: 'lineID',
        type: 'string',
        default: '',
        description: 'Unique LineID',
        required: true,
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Line Number',
        name: 'lineNumber',
        type: 'number',
        default: '',
        description: 'Order Line Number (0 for New line)',
        required: true,
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Product Code',
        name: 'productCode',
        type: 'string',
        default: '',
        description: 'Product Code (Sub - Different product code)',
        required: true,
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Original Product Code',
        name: 'originalProductCode',
        type: 'string',
        default: '',
        description: 'Original Product Code (Sub - Original product code)',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'External Line Number',
        name: 'externalLineNumber',
        type: 'number',
        default: '',
        description: 'The external line number value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Quantity',
        name: 'quantity',
        type: 'number',
        default: '',
        description: 'Quantity (0 to delete order line)',
        typeOptions: {
            minValue: -9999
        },
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
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
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Weight',
        name: 'weight',
        type: 'number',
        default: '',
        description: 'Weight (Status 820/850 weighted products only)',
        typeOptions: {
            minValue: -999.999
        },
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Deposit Quantity',
        name: 'depositQuantity',
        type: 'number',
        default: '',
        description: 'Deposit Quantity (Zero to remove deposit)',
        typeOptions: {
            minValue: -9999
        },
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Subs Allowed',
        name: 'subsAllowed',
        type: 'boolean',
        default: false,
        description: 'Whether substitutes Allowed (Default is True)',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Back Order',
        name: 'backOrder',
        type: 'boolean',
        default: false,
        description: 'Whether the back order value',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Override Description',
        name: 'overrideDescription',
        type: 'string',
        default: '',
        description: 'Override Product Description',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Msg Indicator',
        name: 'msgIndicator',
        type: 'options',
        default: '4:DeliveryNote',
        description: 'Message Indicator',
        options: [
            {
                name: 'DeliveryNote',
                value: '4:DeliveryNote',
                description: 'DeliveryNote (code: 4)'
            },
            {
                name: 'Invoice',
                value: '2:Invoice',
                description: 'Invoice (code: 2)'
            },
            {
                name: 'Invoice/DeliveryNote',
                value: '6:Invoice/DeliveryNote',
                description: 'Invoice/DeliveryNote (code: 6)'
            },
            {
                name: 'PickingList',
                value: '1:PickingList',
                description: 'PickingList (code: 1)'
            },
            {
                name: 'PickingList/DeliveryNote',
                value: '5:PickingList/DeliveryNote',
                description: 'PickingList/DeliveryNote (code: 5)'
            },
            {
                name: 'PickingList/Invoice',
                value: '3:PickingList/Invoice',
                description: 'PickingList/Invoice (code: 3)'
            },
            {
                name: 'PickingList/Invoice/DeliveryNote',
                value: '7:PickingList/Invoice/DeliveryNote',
                description: 'PickingList/Invoice/DeliveryNote (code: 7)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Line Msg',
        name: 'lineMsg',
        type: 'string',
        default: '',
        description: 'Line Message',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Override WSP',
        name: 'overrideWSP',
        type: 'number',
        default: '',
        description: 'Override WSP (null to remove override)',
        typeOptions: {
            minValue: -9999.99
        },
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Override WSV',
        name: 'overrideWSV',
        type: 'number',
        default: '',
        description: 'Override WSV / Line Value (null to remove override)',
        typeOptions: {
            minValue: -999999.99
        },
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Override RSP',
        name: 'overrideRSP',
        type: 'number',
        default: '',
        description: 'Override RSP (null to remove override)',
        typeOptions: {
            minValue: -9999.99
        },
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Override Cost',
        name: 'overrideCost',
        type: 'number',
        default: '',
        description: 'Override Cost (null to remove override)',
        typeOptions: {
            minValue: -9999.99
        },
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Override Reason Code',
        name: 'overrideReasonCode',
        type: 'string',
        default: '',
        description: 'The override reason code value',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Free Line',
        name: 'freeLine',
        type: 'boolean',
        default: false,
        description: 'Whether mix & Match free line',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Mix Match Code',
        name: 'mixMatchCode',
        type: 'string',
        default: '',
        description: 'Mix & Match Code',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Assembler',
        name: 'assembler',
        type: 'string',
        default: '',
        description: 'RF/Voice Assembler',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    },
    {
        displayName: 'Pick Status',
        name: 'pickStatus',
        type: 'options',
        default: '2:Complete',
        description: 'The pick status value',
        options: [
            {
                name: 'Complete',
                value: '2:Complete',
                description: 'Complete (code: 2)'
            },
            {
                name: 'OutOfStock',
                value: '0:OutOfStock',
                description: 'OutOfStock (code: 0)'
            },
            {
                name: 'Part-Picked',
                value: '1:Part-picked',
                description: 'Part-picked (code: 1)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:update']
            }
        }
    }
];

export const ordersListFields: INodeProperties[] = [
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
                resource: ['orders'],
                operation: ['orders:list']
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
                resource: ['orders'],
                operation: ['orders:list'],
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
                resource: ['orders'],
                operation: ['orders:list'],
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
                resource: ['orders'],
                operation: ['orders:list'],
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
                        default: 'accountCreditAmount',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Account Credit Amount',
                                value: 'accountCreditAmount'
                            },
                            {
                                name: 'Actual Cost',
                                value: 'actualCost'
                            },
                            {
                                name: 'Actual Delivered Date',
                                value: 'actualDeliveredDate'
                            },
                            {
                                name: 'Amended Date',
                                value: 'amendedDate'
                            },
                            {
                                name: 'Amount Payable',
                                value: 'amountPayable'
                            },
                            {
                                name: 'Archived Date',
                                value: 'archivedDate'
                            },
                            {
                                name: 'Boxes Required',
                                value: 'boxesRequired'
                            },
                            {
                                name: 'Calc Date',
                                value: 'calcDate'
                            },
                            {
                                name: 'Carrier ID',
                                value: 'carrierId'
                            },
                            {
                                name: 'Cash Account',
                                value: 'cashAccount'
                            },
                            {
                                name: 'Cash Point Number',
                                value: 'cashPointNumber'
                            },
                            {
                                name: 'Cash Value',
                                value: 'cashValue'
                            },
                            {
                                name: 'Cashier Code',
                                value: 'cashierCode'
                            },
                            {
                                name: 'Checkout Number',
                                value: 'checkoutNumber'
                            },
                            {
                                name: 'Checkout Operator Code',
                                value: 'checkoutOperatorCode'
                            },
                            {
                                name: 'Checkout Time',
                                value: 'checkoutTime'
                            },
                            {
                                name: 'Cheque Value',
                                value: 'chequeValue'
                            },
                            {
                                name: 'Collected',
                                value: 'collected'
                            },
                            {
                                name: 'Collection Note',
                                value: 'collectionNote'
                            },
                            {
                                name: 'Consolidate Order ID',
                                value: 'consolidateOrderID'
                            },
                            {
                                name: 'Coupon Value',
                                value: 'couponValue'
                            },
                            {
                                name: 'Created Date',
                                value: 'createdDate'
                            },
                            {
                                name: 'Credit Card Value',
                                value: 'creditCardValue'
                            },
                            {
                                name: 'Currency Code',
                                value: 'currencyCode'
                            },
                            {
                                name: 'Customer Add Surcharge',
                                value: 'customerAddSurcharge'
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
                                name: 'Customer Order Ref',
                                value: 'customerOrderRef'
                            },
                            {
                                name: 'Damage Allowance',
                                value: 'damageAllowance'
                            },
                            {
                                name: 'Debit Card Value',
                                value: 'debitCardValue'
                            },
                            {
                                name: 'Delivery Charge',
                                value: 'deliveryCharge'
                            },
                            {
                                name: 'Delivery Date',
                                value: 'deliveryDate'
                            },
                            {
                                name: 'Delivery Group',
                                value: 'deliveryGroup'
                            },
                            {
                                name: 'Depot',
                                value: 'depot'
                            },
                            {
                                name: 'Destination Code',
                                value: 'destinationCode'
                            },
                            {
                                name: 'Discount Amount',
                                value: 'discountAmount'
                            },
                            {
                                name: 'Discount Percent',
                                value: 'discountPercent'
                            },
                            {
                                name: 'Discount Reason Code',
                                value: 'discountReasonCode'
                            },
                            {
                                name: 'Discount Value',
                                value: 'discountValue'
                            },
                            {
                                name: 'Driver',
                                value: 'driver'
                            },
                            {
                                name: 'Drop',
                                value: 'drop'
                            },
                            {
                                name: 'Drs Value',
                                value: 'drsValue'
                            },
                            {
                                name: 'Duty Ind',
                                value: 'dutyInd'
                            },
                            {
                                name: 'Entry Type',
                                value: 'entryType'
                            },
                            {
                                name: 'External Order Ref',
                                value: 'externalOrderRef'
                            },
                            {
                                name: 'Gift Message',
                                value: 'giftMessage'
                            },
                            {
                                name: 'Gift Order',
                                value: 'giftOrder'
                            },
                            {
                                name: 'Has Product Code',
                                value: 'hasProductCode'
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
                                name: 'Ho User ID Limit',
                                value: 'hoUserIDLimit'
                            },
                            {
                                name: 'Ho User ID Stop',
                                value: 'hoUserIDStop'
                            },
                            {
                                name: 'Input Date',
                                value: 'inputDate'
                            },
                            {
                                name: 'Internal Order Ref',
                                value: 'internalOrderRef'
                            },
                            {
                                name: 'Invoice Msg',
                                value: 'invoiceMsg'
                            },
                            {
                                name: 'Invoice Number',
                                value: 'invoiceNumber'
                            },
                            {
                                name: 'Invoiced Date',
                                value: 'invoicedDate'
                            },
                            {
                                name: 'Journey Drop',
                                value: 'journeyDrop'
                            },
                            {
                                name: 'Journey Number',
                                value: 'journeyNumber'
                            },
                            {
                                name: 'Last Surcharge Rate',
                                value: 'lastSurchargeRate'
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
                                name: 'Message Code',
                                value: 'messageCode'
                            },
                            {
                                name: 'Message Text',
                                value: 'messageText'
                            },
                            {
                                name: 'Monitor Date',
                                value: 'monitorDate'
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
                                name: 'Off Stop Date',
                                value: 'offStopDate'
                            },
                            {
                                name: 'Offset',
                                value: 'offset'
                            },
                            {
                                name: 'Online Order Value',
                                value: 'onlineOrderValue'
                            },
                            {
                                name: 'Order Number',
                                value: 'orderNumber'
                            },
                            {
                                name: 'Order Status',
                                value: 'orderStatus'
                            },
                            {
                                name: 'Order Type',
                                value: 'orderType'
                            },
                            {
                                name: 'Order Value',
                                value: 'orderValue'
                            },
                            {
                                name: 'Organisation ANA',
                                value: 'organisationANA'
                            },
                            {
                                name: 'Original Customer Order Ref',
                                value: 'originalCustomerOrderRef'
                            },
                            {
                                name: 'Over Credit Limit',
                                value: 'overCreditLimit'
                            },
                            {
                                name: 'Over Credit Stop',
                                value: 'overCreditStop'
                            },
                            {
                                name: 'Override Address',
                                value: 'overrideAddress'
                            },
                            {
                                name: 'Override Phone',
                                value: 'overridePhone'
                            },
                            {
                                name: 'Parent Order ID',
                                value: 'parentOrderID'
                            },
                            {
                                name: 'Payment Charge',
                                value: 'paymentCharge'
                            },
                            {
                                name: 'Payment Ref',
                                value: 'paymentRef'
                            },
                            {
                                name: 'Pick Msg',
                                value: 'pickMsg'
                            },
                            {
                                name: 'Picked Date',
                                value: 'pickedDate'
                            },
                            {
                                name: 'Place Of Delivery',
                                value: 'placeOfDelivery'
                            },
                            {
                                name: 'Prefixed Invoice Number',
                                value: 'prefixedInvoiceNumber'
                            },
                            {
                                name: 'Price Date',
                                value: 'priceDate'
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
                                name: 'Rebateable WSV',
                                value: 'rebateableWSV'
                            },
                            {
                                name: 'Recent Off Stop',
                                value: 'recentOffStop'
                            },
                            {
                                name: 'Rep Code',
                                value: 'repCode'
                            },
                            {
                                name: 'Reserves Ind',
                                value: 'reservesInd'
                            },
                            {
                                name: 'Reserves Pick',
                                value: 'reservesPick'
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
                                name: 'Settlement Date',
                                value: 'settlementDate'
                            },
                            {
                                name: 'Settlement Discount Value',
                                value: 'settlementDiscountValue'
                            },
                            {
                                name: 'Source Type',
                                value: 'sourceType'
                            },
                            {
                                name: 'Straight To Invoice',
                                value: 'straightToInvoice'
                            },
                            {
                                name: 'Subs Allowed',
                                value: 'subsAllowed'
                            },
                            {
                                name: 'Suppress Surcharge',
                                value: 'suppressSurcharge'
                            },
                            {
                                name: 'Surcharge Amount',
                                value: 'surchargeAmount'
                            },
                            {
                                name: 'Surcharge Percent',
                                value: 'surchargePercent'
                            },
                            {
                                name: 'Surcharge Qty',
                                value: 'surchargeQty'
                            },
                            {
                                name: 'Surcharge Table',
                                value: 'surchargeTable'
                            },
                            {
                                name: 'Surcharge Units',
                                value: 'surchargeUnits'
                            },
                            {
                                name: 'Surcharge Value',
                                value: 'surchargeValue'
                            },
                            {
                                name: 'Time Slot',
                                value: 'timeSlot'
                            },
                            {
                                name: 'Timeout',
                                value: 'timeout'
                            },
                            {
                                name: 'Total Cig Boxes',
                                value: 'totalCigBoxes'
                            },
                            {
                                name: 'Total Cigs',
                                value: 'totalCigs'
                            },
                            {
                                name: 'Total Items',
                                value: 'totalItems'
                            },
                            {
                                name: 'Total Lines',
                                value: 'totalLines'
                            },
                            {
                                name: 'Total Volume',
                                value: 'totalVolume'
                            },
                            {
                                name: 'Total Weight',
                                value: 'totalWeight'
                            },
                            {
                                name: 'Tp Cheque Change',
                                value: 'tpChequeChange'
                            },
                            {
                                name: 'Tp Cheque Value',
                                value: 'tpChequeValue'
                            },
                            {
                                name: 'Type',
                                value: 'type'
                            },
                            {
                                name: 'User',
                                value: 'user'
                            },
                            {
                                name: 'Vat Value',
                                value: 'vatValue'
                            },
                            {
                                name: 'Vehicle',
                                value: 'vehicle'
                            },
                            {
                                name: 'Week No',
                                value: 'weekNo'
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
                resource: ['orders'],
                operation: ['orders:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Order Number',
        name: 'orderNumber',
        type: 'number',
        default: '',
        description: 'Order Number (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        typeOptions: {
            minValue: 0
        },
        placeholder: '7840',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Created Date',
        name: 'createdDate',
        type: 'string',
        default: '',
        description: 'Created Date (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        placeholder: '2020-09-14',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:list'],
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
        placeholder: 'depot,-orderNumber',
        options: [
            {
                name: 'Account Credit Amount (Ascending)',
                value: 'accountCreditAmount',
                description: 'Sort by Account Credit Amount in ascending order'
            },
            {
                name: 'Account Credit Amount (Descending)',
                value: '-accountCreditAmount',
                description: 'Sort by Account Credit Amount in descending order'
            },
            {
                name: 'Actual Cost (Ascending)',
                value: 'actualCost',
                description: 'Sort by Actual Cost in ascending order'
            },
            {
                name: 'Actual Cost (Descending)',
                value: '-actualCost',
                description: 'Sort by Actual Cost in descending order'
            },
            {
                name: 'Actual Delivered Date (Ascending)',
                value: 'actualDeliveredDate',
                description: 'Sort by Actual Delivered Date in ascending order'
            },
            {
                name: 'Actual Delivered Date (Descending)',
                value: '-actualDeliveredDate',
                description: 'Sort by Actual Delivered Date in descending order'
            },
            {
                name: 'Amended Date (Ascending)',
                value: 'amendedDate',
                description: 'Sort by Amended Date in ascending order'
            },
            {
                name: 'Amended Date (Descending)',
                value: '-amendedDate',
                description: 'Sort by Amended Date in descending order'
            },
            {
                name: 'Amount Payable (Ascending)',
                value: 'amountPayable',
                description: 'Sort by Amount Payable in ascending order'
            },
            {
                name: 'Amount Payable (Descending)',
                value: '-amountPayable',
                description: 'Sort by Amount Payable in descending order'
            },
            {
                name: 'Archived Date (Ascending)',
                value: 'archivedDate',
                description: 'Sort by Archived Date in ascending order'
            },
            {
                name: 'Archived Date (Descending)',
                value: '-archivedDate',
                description: 'Sort by Archived Date in descending order'
            },
            {
                name: 'Boxes Required (Ascending)',
                value: 'boxesRequired',
                description: 'Sort by Boxes Required in ascending order'
            },
            {
                name: 'Boxes Required (Descending)',
                value: '-boxesRequired',
                description: 'Sort by Boxes Required in descending order'
            },
            {
                name: 'Calc Date (Ascending)',
                value: 'calcDate',
                description: 'Sort by Calc Date in ascending order'
            },
            {
                name: 'Calc Date (Descending)',
                value: '-calcDate',
                description: 'Sort by Calc Date in descending order'
            },
            {
                name: 'Carrier ID (Ascending)',
                value: 'carrierId',
                description: 'Sort by Carrier ID in ascending order'
            },
            {
                name: 'Carrier ID (Descending)',
                value: '-carrierId',
                description: 'Sort by Carrier ID in descending order'
            },
            {
                name: 'Cash Account (Ascending)',
                value: 'cashAccount',
                description: 'Sort by Cash Account in ascending order'
            },
            {
                name: 'Cash Account (Descending)',
                value: '-cashAccount',
                description: 'Sort by Cash Account in descending order'
            },
            {
                name: 'Cash Point Number (Ascending)',
                value: 'cashPointNumber',
                description: 'Sort by Cash Point Number in ascending order'
            },
            {
                name: 'Cash Point Number (Descending)',
                value: '-cashPointNumber',
                description: 'Sort by Cash Point Number in descending order'
            },
            {
                name: 'Cash Value (Ascending)',
                value: 'cashValue',
                description: 'Sort by Cash Value in ascending order'
            },
            {
                name: 'Cash Value (Descending)',
                value: '-cashValue',
                description: 'Sort by Cash Value in descending order'
            },
            {
                name: 'Cashier Code (Ascending)',
                value: 'cashierCode',
                description: 'Sort by Cashier Code in ascending order'
            },
            {
                name: 'Cashier Code (Descending)',
                value: '-cashierCode',
                description: 'Sort by Cashier Code in descending order'
            },
            {
                name: 'Checkout Number (Ascending)',
                value: 'checkoutNumber',
                description: 'Sort by Checkout Number in ascending order'
            },
            {
                name: 'Checkout Number (Descending)',
                value: '-checkoutNumber',
                description: 'Sort by Checkout Number in descending order'
            },
            {
                name: 'Checkout Operator Code (Ascending)',
                value: 'checkoutOperatorCode',
                description: 'Sort by Checkout Operator Code in ascending order'
            },
            {
                name: 'Checkout Operator Code (Descending)',
                value: '-checkoutOperatorCode',
                description: 'Sort by Checkout Operator Code in descending order'
            },
            {
                name: 'Checkout Time (Ascending)',
                value: 'checkoutTime',
                description: 'Sort by Checkout Time in ascending order'
            },
            {
                name: 'Checkout Time (Descending)',
                value: '-checkoutTime',
                description: 'Sort by Checkout Time in descending order'
            },
            {
                name: 'Cheque Value (Ascending)',
                value: 'chequeValue',
                description: 'Sort by Cheque Value in ascending order'
            },
            {
                name: 'Cheque Value (Descending)',
                value: '-chequeValue',
                description: 'Sort by Cheque Value in descending order'
            },
            {
                name: 'Collected (Ascending)',
                value: 'collected',
                description: 'Sort by Collected in ascending order'
            },
            {
                name: 'Collected (Descending)',
                value: '-collected',
                description: 'Sort by Collected in descending order'
            },
            {
                name: 'Collection Note (Ascending)',
                value: 'collectionNote',
                description: 'Sort by Collection Note in ascending order'
            },
            {
                name: 'Collection Note (Descending)',
                value: '-collectionNote',
                description: 'Sort by Collection Note in descending order'
            },
            {
                name: 'Consolidate Order ID (Ascending)',
                value: 'consolidateOrderID',
                description: 'Sort by Consolidate Order ID in ascending order'
            },
            {
                name: 'Consolidate Order ID (Descending)',
                value: '-consolidateOrderID',
                description: 'Sort by Consolidate Order ID in descending order'
            },
            {
                name: 'Coupon Value (Ascending)',
                value: 'couponValue',
                description: 'Sort by Coupon Value in ascending order'
            },
            {
                name: 'Coupon Value (Descending)',
                value: '-couponValue',
                description: 'Sort by Coupon Value in descending order'
            },
            {
                name: 'Created Date (Ascending)',
                value: 'createdDate',
                description: 'Sort by Created Date in ascending order'
            },
            {
                name: 'Created Date (Descending)',
                value: '-createdDate',
                description: 'Sort by Created Date in descending order'
            },
            {
                name: 'Credit Card Value (Ascending)',
                value: 'creditCardValue',
                description: 'Sort by Credit Card Value in ascending order'
            },
            {
                name: 'Credit Card Value (Descending)',
                value: '-creditCardValue',
                description: 'Sort by Credit Card Value in descending order'
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
                name: 'Customer Add Surcharge (Ascending)',
                value: 'customerAddSurcharge',
                description: 'Sort by Customer Add Surcharge in ascending order'
            },
            {
                name: 'Customer Add Surcharge (Descending)',
                value: '-customerAddSurcharge',
                description: 'Sort by Customer Add Surcharge in descending order'
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
                name: 'Damage Allowance (Ascending)',
                value: 'damageAllowance',
                description: 'Sort by Damage Allowance in ascending order'
            },
            {
                name: 'Damage Allowance (Descending)',
                value: '-damageAllowance',
                description: 'Sort by Damage Allowance in descending order'
            },
            {
                name: 'Debit Card Value (Ascending)',
                value: 'debitCardValue',
                description: 'Sort by Debit Card Value in ascending order'
            },
            {
                name: 'Debit Card Value (Descending)',
                value: '-debitCardValue',
                description: 'Sort by Debit Card Value in descending order'
            },
            {
                name: 'Delivery Charge (Ascending)',
                value: 'deliveryCharge',
                description: 'Sort by Delivery Charge in ascending order'
            },
            {
                name: 'Delivery Charge (Descending)',
                value: '-deliveryCharge',
                description: 'Sort by Delivery Charge in descending order'
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
                name: 'Delivery Group (Ascending)',
                value: 'deliveryGroup',
                description: 'Sort by Delivery Group in ascending order'
            },
            {
                name: 'Delivery Group (Descending)',
                value: '-deliveryGroup',
                description: 'Sort by Delivery Group in descending order'
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
                name: 'Destination Code (Ascending)',
                value: 'destinationCode',
                description: 'Sort by Destination Code in ascending order'
            },
            {
                name: 'Destination Code (Descending)',
                value: '-destinationCode',
                description: 'Sort by Destination Code in descending order'
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
                name: 'Discount Percent (Ascending)',
                value: 'discountPercent',
                description: 'Sort by Discount Percent in ascending order'
            },
            {
                name: 'Discount Percent (Descending)',
                value: '-discountPercent',
                description: 'Sort by Discount Percent in descending order'
            },
            {
                name: 'Discount Reason Code (Ascending)',
                value: 'discountReasonCode',
                description: 'Sort by Discount Reason Code in ascending order'
            },
            {
                name: 'Discount Reason Code (Descending)',
                value: '-discountReasonCode',
                description: 'Sort by Discount Reason Code in descending order'
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
                name: 'Driver (Ascending)',
                value: 'driver',
                description: 'Sort by Driver in ascending order'
            },
            {
                name: 'Driver (Descending)',
                value: '-driver',
                description: 'Sort by Driver in descending order'
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
                name: 'Drs Value (Ascending)',
                value: 'drsValue',
                description: 'Sort by Drs Value in ascending order'
            },
            {
                name: 'Drs Value (Descending)',
                value: '-drsValue',
                description: 'Sort by Drs Value in descending order'
            },
            {
                name: 'Duty Ind (Ascending)',
                value: 'dutyInd',
                description: 'Sort by Duty Ind in ascending order'
            },
            {
                name: 'Duty Ind (Descending)',
                value: '-dutyInd',
                description: 'Sort by Duty Ind in descending order'
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
                name: 'Gift Message (Ascending)',
                value: 'giftMessage',
                description: 'Sort by Gift Message in ascending order'
            },
            {
                name: 'Gift Message (Descending)',
                value: '-giftMessage',
                description: 'Sort by Gift Message in descending order'
            },
            {
                name: 'Gift Order (Ascending)',
                value: 'giftOrder',
                description: 'Sort by Gift Order in ascending order'
            },
            {
                name: 'Gift Order (Descending)',
                value: '-giftOrder',
                description: 'Sort by Gift Order in descending order'
            },
            {
                name: 'Has Product Code (Ascending)',
                value: 'hasProductCode',
                description: 'Sort by Has Product Code in ascending order'
            },
            {
                name: 'Has Product Code (Descending)',
                value: '-hasProductCode',
                description: 'Sort by Has Product Code in descending order'
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
                name: 'Ho User ID Limit (Ascending)',
                value: 'hoUserIDLimit',
                description: 'Sort by Ho User ID Limit in ascending order'
            },
            {
                name: 'Ho User ID Limit (Descending)',
                value: '-hoUserIDLimit',
                description: 'Sort by Ho User ID Limit in descending order'
            },
            {
                name: 'Ho User ID Stop (Ascending)',
                value: 'hoUserIDStop',
                description: 'Sort by Ho User ID Stop in ascending order'
            },
            {
                name: 'Ho User ID Stop (Descending)',
                value: '-hoUserIDStop',
                description: 'Sort by Ho User ID Stop in descending order'
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
                name: 'Internal Order Ref (Ascending)',
                value: 'internalOrderRef',
                description: 'Sort by Internal Order Ref in ascending order'
            },
            {
                name: 'Internal Order Ref (Descending)',
                value: '-internalOrderRef',
                description: 'Sort by Internal Order Ref in descending order'
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
                name: 'Invoiced Date (Ascending)',
                value: 'invoicedDate',
                description: 'Sort by Invoiced Date in ascending order'
            },
            {
                name: 'Invoiced Date (Descending)',
                value: '-invoicedDate',
                description: 'Sort by Invoiced Date in descending order'
            },
            {
                name: 'Journey Drop (Ascending)',
                value: 'journeyDrop',
                description: 'Sort by Journey Drop in ascending order'
            },
            {
                name: 'Journey Drop (Descending)',
                value: '-journeyDrop',
                description: 'Sort by Journey Drop in descending order'
            },
            {
                name: 'Journey Number (Ascending)',
                value: 'journeyNumber',
                description: 'Sort by Journey Number in ascending order'
            },
            {
                name: 'Journey Number (Descending)',
                value: '-journeyNumber',
                description: 'Sort by Journey Number in descending order'
            },
            {
                name: 'Last Surcharge Rate (Ascending)',
                value: 'lastSurchargeRate',
                description: 'Sort by Last Surcharge Rate in ascending order'
            },
            {
                name: 'Last Surcharge Rate (Descending)',
                value: '-lastSurchargeRate',
                description: 'Sort by Last Surcharge Rate in descending order'
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
                name: 'Message Code (Ascending)',
                value: 'messageCode',
                description: 'Sort by Message Code in ascending order'
            },
            {
                name: 'Message Code (Descending)',
                value: '-messageCode',
                description: 'Sort by Message Code in descending order'
            },
            {
                name: 'Message Text (Ascending)',
                value: 'messageText',
                description: 'Sort by Message Text in ascending order'
            },
            {
                name: 'Message Text (Descending)',
                value: '-messageText',
                description: 'Sort by Message Text in descending order'
            },
            {
                name: 'Monitor Date (Ascending)',
                value: 'monitorDate',
                description: 'Sort by Monitor Date in ascending order'
            },
            {
                name: 'Monitor Date (Descending)',
                value: '-monitorDate',
                description: 'Sort by Monitor Date in descending order'
            },
            {
                name: 'Off Stop Date (Ascending)',
                value: 'offStopDate',
                description: 'Sort by Off Stop Date in ascending order'
            },
            {
                name: 'Off Stop Date (Descending)',
                value: '-offStopDate',
                description: 'Sort by Off Stop Date in descending order'
            },
            {
                name: 'Online Order Value (Ascending)',
                value: 'onlineOrderValue',
                description: 'Sort by Online Order Value in ascending order'
            },
            {
                name: 'Online Order Value (Descending)',
                value: '-onlineOrderValue',
                description: 'Sort by Online Order Value in descending order'
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
                name: 'Order Status (Ascending)',
                value: 'orderStatus',
                description: 'Sort by Order Status in ascending order'
            },
            {
                name: 'Order Status (Descending)',
                value: '-orderStatus',
                description: 'Sort by Order Status in descending order'
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
                name: 'Order Value (Ascending)',
                value: 'orderValue',
                description: 'Sort by Order Value in ascending order'
            },
            {
                name: 'Order Value (Descending)',
                value: '-orderValue',
                description: 'Sort by Order Value in descending order'
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
                name: 'Original Customer Order Ref (Ascending)',
                value: 'originalCustomerOrderRef',
                description: 'Sort by Original Customer Order Ref in ascending order'
            },
            {
                name: 'Original Customer Order Ref (Descending)',
                value: '-originalCustomerOrderRef',
                description: 'Sort by Original Customer Order Ref in descending order'
            },
            {
                name: 'Over Credit Limit (Ascending)',
                value: 'overCreditLimit',
                description: 'Sort by Over Credit Limit in ascending order'
            },
            {
                name: 'Over Credit Limit (Descending)',
                value: '-overCreditLimit',
                description: 'Sort by Over Credit Limit in descending order'
            },
            {
                name: 'Over Credit Stop (Ascending)',
                value: 'overCreditStop',
                description: 'Sort by Over Credit Stop in ascending order'
            },
            {
                name: 'Over Credit Stop (Descending)',
                value: '-overCreditStop',
                description: 'Sort by Over Credit Stop in descending order'
            },
            {
                name: 'Override Address (Ascending)',
                value: 'overrideAddress',
                description: 'Sort by Override Address in ascending order'
            },
            {
                name: 'Override Address (Descending)',
                value: '-overrideAddress',
                description: 'Sort by Override Address in descending order'
            },
            {
                name: 'Override Phone (Ascending)',
                value: 'overridePhone',
                description: 'Sort by Override Phone in ascending order'
            },
            {
                name: 'Override Phone (Descending)',
                value: '-overridePhone',
                description: 'Sort by Override Phone in descending order'
            },
            {
                name: 'Parent Order ID (Ascending)',
                value: 'parentOrderID',
                description: 'Sort by Parent Order ID in ascending order'
            },
            {
                name: 'Parent Order ID (Descending)',
                value: '-parentOrderID',
                description: 'Sort by Parent Order ID in descending order'
            },
            {
                name: 'Payment Charge (Ascending)',
                value: 'paymentCharge',
                description: 'Sort by Payment Charge in ascending order'
            },
            {
                name: 'Payment Charge (Descending)',
                value: '-paymentCharge',
                description: 'Sort by Payment Charge in descending order'
            },
            {
                name: 'Payment Ref (Ascending)',
                value: 'paymentRef',
                description: 'Sort by Payment Ref in ascending order'
            },
            {
                name: 'Payment Ref (Descending)',
                value: '-paymentRef',
                description: 'Sort by Payment Ref in descending order'
            },
            {
                name: 'Pick Msg (Ascending)',
                value: 'pickMsg',
                description: 'Sort by Pick Msg in ascending order'
            },
            {
                name: 'Pick Msg (Descending)',
                value: '-pickMsg',
                description: 'Sort by Pick Msg in descending order'
            },
            {
                name: 'Picked Date (Ascending)',
                value: 'pickedDate',
                description: 'Sort by Picked Date in ascending order'
            },
            {
                name: 'Picked Date (Descending)',
                value: '-pickedDate',
                description: 'Sort by Picked Date in descending order'
            },
            {
                name: 'Place Of Delivery (Ascending)',
                value: 'placeOfDelivery',
                description: 'Sort by Place Of Delivery in ascending order'
            },
            {
                name: 'Place Of Delivery (Descending)',
                value: '-placeOfDelivery',
                description: 'Sort by Place Of Delivery in descending order'
            },
            {
                name: 'Prefixed Invoice Number (Ascending)',
                value: 'prefixedInvoiceNumber',
                description: 'Sort by Prefixed Invoice Number in ascending order'
            },
            {
                name: 'Prefixed Invoice Number (Descending)',
                value: '-prefixedInvoiceNumber',
                description: 'Sort by Prefixed Invoice Number in descending order'
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
                name: 'Rebateable WSV (Ascending)',
                value: 'rebateableWSV',
                description: 'Sort by Rebateable WSV in ascending order'
            },
            {
                name: 'Rebateable WSV (Descending)',
                value: '-rebateableWSV',
                description: 'Sort by Rebateable WSV in descending order'
            },
            {
                name: 'Recent Off Stop (Ascending)',
                value: 'recentOffStop',
                description: 'Sort by Recent Off Stop in ascending order'
            },
            {
                name: 'Recent Off Stop (Descending)',
                value: '-recentOffStop',
                description: 'Sort by Recent Off Stop in descending order'
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
                name: 'Reserves Ind (Ascending)',
                value: 'reservesInd',
                description: 'Sort by Reserves Ind in ascending order'
            },
            {
                name: 'Reserves Ind (Descending)',
                value: '-reservesInd',
                description: 'Sort by Reserves Ind in descending order'
            },
            {
                name: 'Reserves Pick (Ascending)',
                value: 'reservesPick',
                description: 'Sort by Reserves Pick in ascending order'
            },
            {
                name: 'Reserves Pick (Descending)',
                value: '-reservesPick',
                description: 'Sort by Reserves Pick in descending order'
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
                name: 'Settlement Date (Ascending)',
                value: 'settlementDate',
                description: 'Sort by Settlement Date in ascending order'
            },
            {
                name: 'Settlement Date (Descending)',
                value: '-settlementDate',
                description: 'Sort by Settlement Date in descending order'
            },
            {
                name: 'Settlement Discount Value (Ascending)',
                value: 'settlementDiscountValue',
                description: 'Sort by Settlement Discount Value in ascending order'
            },
            {
                name: 'Settlement Discount Value (Descending)',
                value: '-settlementDiscountValue',
                description: 'Sort by Settlement Discount Value in descending order'
            },
            {
                name: 'Source Type (Ascending)',
                value: 'sourceType',
                description: 'Sort by Source Type in ascending order'
            },
            {
                name: 'Source Type (Descending)',
                value: '-sourceType',
                description: 'Sort by Source Type in descending order'
            },
            {
                name: 'Straight To Invoice (Ascending)',
                value: 'straightToInvoice',
                description: 'Sort by Straight To Invoice in ascending order'
            },
            {
                name: 'Straight To Invoice (Descending)',
                value: '-straightToInvoice',
                description: 'Sort by Straight To Invoice in descending order'
            },
            {
                name: 'Subs Allowed (Ascending)',
                value: 'subsAllowed',
                description: 'Sort by Subs Allowed in ascending order'
            },
            {
                name: 'Subs Allowed (Descending)',
                value: '-subsAllowed',
                description: 'Sort by Subs Allowed in descending order'
            },
            {
                name: 'Suppress Surcharge (Ascending)',
                value: 'suppressSurcharge',
                description: 'Sort by Suppress Surcharge in ascending order'
            },
            {
                name: 'Suppress Surcharge (Descending)',
                value: '-suppressSurcharge',
                description: 'Sort by Suppress Surcharge in descending order'
            },
            {
                name: 'Surcharge Amount (Ascending)',
                value: 'surchargeAmount',
                description: 'Sort by Surcharge Amount in ascending order'
            },
            {
                name: 'Surcharge Amount (Descending)',
                value: '-surchargeAmount',
                description: 'Sort by Surcharge Amount in descending order'
            },
            {
                name: 'Surcharge Percent (Ascending)',
                value: 'surchargePercent',
                description: 'Sort by Surcharge Percent in ascending order'
            },
            {
                name: 'Surcharge Percent (Descending)',
                value: '-surchargePercent',
                description: 'Sort by Surcharge Percent in descending order'
            },
            {
                name: 'Surcharge Qty (Ascending)',
                value: 'surchargeQty',
                description: 'Sort by Surcharge Qty in ascending order'
            },
            {
                name: 'Surcharge Qty (Descending)',
                value: '-surchargeQty',
                description: 'Sort by Surcharge Qty in descending order'
            },
            {
                name: 'Surcharge Table (Ascending)',
                value: 'surchargeTable',
                description: 'Sort by Surcharge Table in ascending order'
            },
            {
                name: 'Surcharge Table (Descending)',
                value: '-surchargeTable',
                description: 'Sort by Surcharge Table in descending order'
            },
            {
                name: 'Surcharge Units (Ascending)',
                value: 'surchargeUnits',
                description: 'Sort by Surcharge Units in ascending order'
            },
            {
                name: 'Surcharge Units (Descending)',
                value: '-surchargeUnits',
                description: 'Sort by Surcharge Units in descending order'
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
            },
            {
                name: 'Time Slot (Ascending)',
                value: 'timeSlot',
                description: 'Sort by Time Slot in ascending order'
            },
            {
                name: 'Time Slot (Descending)',
                value: '-timeSlot',
                description: 'Sort by Time Slot in descending order'
            },
            {
                name: 'Total Cig Boxes (Ascending)',
                value: 'totalCigBoxes',
                description: 'Sort by Total Cig Boxes in ascending order'
            },
            {
                name: 'Total Cig Boxes (Descending)',
                value: '-totalCigBoxes',
                description: 'Sort by Total Cig Boxes in descending order'
            },
            {
                name: 'Total Cigs (Ascending)',
                value: 'totalCigs',
                description: 'Sort by Total Cigs in ascending order'
            },
            {
                name: 'Total Cigs (Descending)',
                value: '-totalCigs',
                description: 'Sort by Total Cigs in descending order'
            },
            {
                name: 'Total Items (Ascending)',
                value: 'totalItems',
                description: 'Sort by Total Items in ascending order'
            },
            {
                name: 'Total Items (Descending)',
                value: '-totalItems',
                description: 'Sort by Total Items in descending order'
            },
            {
                name: 'Total Lines (Ascending)',
                value: 'totalLines',
                description: 'Sort by Total Lines in ascending order'
            },
            {
                name: 'Total Lines (Descending)',
                value: '-totalLines',
                description: 'Sort by Total Lines in descending order'
            },
            {
                name: 'Total Volume (Ascending)',
                value: 'totalVolume',
                description: 'Sort by Total Volume in ascending order'
            },
            {
                name: 'Total Volume (Descending)',
                value: '-totalVolume',
                description: 'Sort by Total Volume in descending order'
            },
            {
                name: 'Total Weight (Ascending)',
                value: 'totalWeight',
                description: 'Sort by Total Weight in ascending order'
            },
            {
                name: 'Total Weight (Descending)',
                value: '-totalWeight',
                description: 'Sort by Total Weight in descending order'
            },
            {
                name: 'Tp Cheque Change (Ascending)',
                value: 'tpChequeChange',
                description: 'Sort by Tp Cheque Change in ascending order'
            },
            {
                name: 'Tp Cheque Change (Descending)',
                value: '-tpChequeChange',
                description: 'Sort by Tp Cheque Change in descending order'
            },
            {
                name: 'Tp Cheque Value (Ascending)',
                value: 'tpChequeValue',
                description: 'Sort by Tp Cheque Value in ascending order'
            },
            {
                name: 'Tp Cheque Value (Descending)',
                value: '-tpChequeValue',
                description: 'Sort by Tp Cheque Value in descending order'
            },
            {
                name: 'Type (Ascending)',
                value: 'type',
                description: 'Sort by Type in ascending order'
            },
            {
                name: 'Type (Descending)',
                value: '-type',
                description: 'Sort by Type in descending order'
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
                name: 'Vat Value (Ascending)',
                value: 'vatValue',
                description: 'Sort by Vat Value in ascending order'
            },
            {
                name: 'Vat Value (Descending)',
                value: '-vatValue',
                description: 'Sort by Vat Value in descending order'
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
                name: 'Week No (Ascending)',
                value: 'weekNo',
                description: 'Sort by Week No in ascending order'
            },
            {
                name: 'Week No (Descending)',
                value: '-weekNo',
                description: 'Sort by Week No in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:list'],
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
                resource: ['orders'],
                operation: ['orders:list'],
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
                name: 'Account Credit Amount',
                value: 'accountCreditAmount',
                description: 'Include account credit amount in the response'
            },
            {
                name: 'Actual Cost',
                value: 'actualCost',
                description: 'Include actual cost in the response'
            },
            {
                name: 'Actual Delivered Date',
                value: 'actualDeliveredDate',
                description: 'Include actual delivered date in the response'
            },
            {
                name: 'Amended Date',
                value: 'amendedDate',
                description: 'Include amended date in the response'
            },
            {
                name: 'Amount Payable',
                value: 'amountPayable',
                description: 'Include amount payable in the response'
            },
            {
                name: 'Archived Date',
                value: 'archivedDate',
                description: 'Include archived date in the response'
            },
            {
                name: 'Boxes',
                value: 'boxes',
                description: 'Include boxes in the response'
            },
            {
                name: 'Boxes Required',
                value: 'boxesRequired',
                description: 'Include boxes required in the response'
            },
            {
                name: 'Cages',
                value: 'cages',
                description: 'Include cages in the response'
            },
            {
                name: 'Calc Date',
                value: 'calcDate',
                description: 'Include calc date in the response'
            },
            {
                name: 'Carrier ID',
                value: 'carrierId',
                description: 'Include carrier ID in the response'
            },
            {
                name: 'Cash Account',
                value: 'cashAccount',
                description: 'Include cash account in the response'
            },
            {
                name: 'Cash Point Number',
                value: 'cashPointNumber',
                description: 'Include cash point number in the response'
            },
            {
                name: 'Cash Value',
                value: 'cashValue',
                description: 'Include cash value in the response'
            },
            {
                name: 'Cashier Code',
                value: 'cashierCode',
                description: 'Include cashier code in the response'
            },
            {
                name: 'Checkout Number',
                value: 'checkoutNumber',
                description: 'Include checkout number in the response'
            },
            {
                name: 'Checkout Operator Code',
                value: 'checkoutOperatorCode',
                description: 'Include checkout operator code in the response'
            },
            {
                name: 'Checkout Time',
                value: 'checkoutTime',
                description: 'Include checkout time in the response'
            },
            {
                name: 'Cheque Value',
                value: 'chequeValue',
                description: 'Include cheque value in the response'
            },
            {
                name: 'Collected',
                value: 'collected',
                description: 'Include collected in the response'
            },
            {
                name: 'Collection Note',
                value: 'collectionNote',
                description: 'Include collection note in the response'
            },
            {
                name: 'Consolidate Order ID',
                value: 'consolidateOrderID',
                description: 'Include consolidate order ID in the response'
            },
            {
                name: 'Container Bags',
                value: 'containerBags',
                description: 'Include container bags in the response'
            },
            {
                name: 'Container Boxes',
                value: 'containerBoxes',
                description: 'Include container boxes in the response'
            },
            {
                name: 'Container Crates',
                value: 'containerCrates',
                description: 'Include container crates in the response'
            },
            {
                name: 'Coupon Value',
                value: 'couponValue',
                description: 'Include coupon value in the response'
            },
            {
                name: 'Created Date',
                value: 'createdDate',
                description: 'Include created date in the response'
            },
            {
                name: 'Credit Card Value',
                value: 'creditCardValue',
                description: 'Include credit card value in the response'
            },
            {
                name: 'Currency Code',
                value: 'currencyCode',
                description: 'Include currency code in the response'
            },
            {
                name: 'Customer Add Surcharge',
                value: 'customerAddSurcharge',
                description: 'Include customer add surcharge in the response'
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
                name: 'Damage Allowance',
                value: 'damageAllowance',
                description: 'Include damage allowance in the response'
            },
            {
                name: 'Debit Card Value',
                value: 'debitCardValue',
                description: 'Include debit card value in the response'
            },
            {
                name: 'Delivery Charge',
                value: 'deliveryCharge',
                description: 'Include delivery charge in the response'
            },
            {
                name: 'Delivery Date',
                value: 'deliveryDate',
                description: 'Include delivery date in the response'
            },
            {
                name: 'Delivery Group',
                value: 'deliveryGroup',
                description: 'Include delivery group in the response'
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
                name: 'Dept',
                value: 'dept',
                description: 'Include dept in the response'
            },
            {
                name: 'Dept Description',
                value: 'deptDescription',
                description: 'Include dept description in the response'
            },
            {
                name: 'Destination Code',
                value: 'destinationCode',
                description: 'Include destination code in the response'
            },
            {
                name: 'Discount Amount',
                value: 'discountAmount',
                description: 'Include discount amount in the response'
            },
            {
                name: 'Discount Percent',
                value: 'discountPercent',
                description: 'Include discount percent in the response'
            },
            {
                name: 'Discount Reason Code',
                value: 'discountReasonCode',
                description: 'Include discount reason code in the response'
            },
            {
                name: 'Discount Value',
                value: 'discountValue',
                description: 'Include discount value in the response'
            },
            {
                name: 'Driver',
                value: 'driver',
                description: 'Include driver in the response'
            },
            {
                name: 'Drop',
                value: 'drop',
                description: 'Include drop in the response'
            },
            {
                name: 'Drs Value',
                value: 'drsValue',
                description: 'Include drs value in the response'
            },
            {
                name: 'Duty Ind',
                value: 'dutyInd',
                description: 'Include duty ind in the response'
            },
            {
                name: 'Entry Type',
                value: 'entryType',
                description: 'Include entry type in the response'
            },
            {
                name: 'Entry Type Description',
                value: 'entryTypeDescription',
                description: 'Include entry type description in the response'
            },
            {
                name: 'External Order Ref',
                value: 'externalOrderRef',
                description: 'Include external order ref in the response'
            },
            {
                name: 'Gift Message',
                value: 'giftMessage',
                description: 'Include gift message in the response'
            },
            {
                name: 'Gift Order',
                value: 'giftOrder',
                description: 'Include gift order in the response'
            },
            {
                name: 'Ho User ID Limit',
                value: 'hoUserIDLimit',
                description: 'Include ho user ID limit in the response'
            },
            {
                name: 'Ho User ID Stop',
                value: 'hoUserIDStop',
                description: 'Include ho user ID stop in the response'
            },
            {
                name: 'Input Date',
                value: 'inputDate',
                description: 'Include input date in the response'
            },
            {
                name: 'Internal Order Ref',
                value: 'internalOrderRef',
                description: 'Include internal order ref in the response'
            },
            {
                name: 'Invoice Msg',
                value: 'invoiceMsg',
                description: 'Include invoice msg in the response'
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
                name: 'Invoiced Date',
                value: 'invoicedDate',
                description: 'Include invoiced date in the response'
            },
            {
                name: 'Journey Drop',
                value: 'journeyDrop',
                description: 'Include journey drop in the response'
            },
            {
                name: 'Journey Number',
                value: 'journeyNumber',
                description: 'Include journey number in the response'
            },
            {
                name: 'Last Surcharge Rate',
                value: 'lastSurchargeRate',
                description: 'Include last surcharge rate in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Lines',
                value: 'lines',
                description: 'Include lines in the response'
            },
            {
                name: 'Message Code',
                value: 'messageCode',
                description: 'Include message code in the response'
            },
            {
                name: 'Message Text',
                value: 'messageText',
                description: 'Include message text in the response'
            },
            {
                name: 'Monitor Date',
                value: 'monitorDate',
                description: 'Include monitor date in the response'
            },
            {
                name: 'Off Stop Date',
                value: 'offStopDate',
                description: 'Include off stop date in the response'
            },
            {
                name: 'Online Order Value',
                value: 'onlineOrderValue',
                description: 'Include online order value in the response'
            },
            {
                name: 'Order Number',
                value: 'orderNumber',
                description: 'Include order number in the response'
            },
            {
                name: 'Order Status',
                value: 'orderStatus',
                description: 'Include order status in the response'
            },
            {
                name: 'Order Status Description',
                value: 'orderStatusDescription',
                description: 'Include order status description in the response'
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
                name: 'Order Value',
                value: 'orderValue',
                description: 'Include order value in the response'
            },
            {
                name: 'Organisation ANA',
                value: 'organisationANA',
                description: 'Include organisation ana in the response'
            },
            {
                name: 'Original Customer Order Ref',
                value: 'originalCustomerOrderRef',
                description: 'Include original customer order ref in the response'
            },
            {
                name: 'Over Credit Limit',
                value: 'overCreditLimit',
                description: 'Include over credit limit in the response'
            },
            {
                name: 'Over Credit Stop',
                value: 'overCreditStop',
                description: 'Include over credit stop in the response'
            },
            {
                name: 'Override Address',
                value: 'overrideAddress',
                description: 'Include override address in the response'
            },
            {
                name: 'Override Address1',
                value: 'overrideAddress1',
                description: 'Include override address1 in the response'
            },
            {
                name: 'Override Address2',
                value: 'overrideAddress2',
                description: 'Include override address2 in the response'
            },
            {
                name: 'Override Address3',
                value: 'overrideAddress3',
                description: 'Include override address3 in the response'
            },
            {
                name: 'Override Address4',
                value: 'overrideAddress4',
                description: 'Include override address4 in the response'
            },
            {
                name: 'Override Address5',
                value: 'overrideAddress5',
                description: 'Include override address5 in the response'
            },
            {
                name: 'Override Name',
                value: 'overrideName',
                description: 'Include override name in the response'
            },
            {
                name: 'Override Phone',
                value: 'overridePhone',
                description: 'Include override phone in the response'
            },
            {
                name: 'Override Postcode',
                value: 'overridePostcode',
                description: 'Include override postcode in the response'
            },
            {
                name: 'Packs',
                value: 'packs',
                description: 'Include packs in the response'
            },
            {
                name: 'Parent Order ID',
                value: 'parentOrderID',
                description: 'Include parent order ID in the response'
            },
            {
                name: 'Payment Charge',
                value: 'paymentCharge',
                description: 'Include payment charge in the response'
            },
            {
                name: 'Payment Ref',
                value: 'paymentRef',
                description: 'Include payment ref in the response'
            },
            {
                name: 'Pick Msg',
                value: 'pickMsg',
                description: 'Include pick msg in the response'
            },
            {
                name: 'Picked Date',
                value: 'pickedDate',
                description: 'Include picked date in the response'
            },
            {
                name: 'Place Of Delivery',
                value: 'placeOfDelivery',
                description: 'Include place of delivery in the response'
            },
            {
                name: 'Prefixed Invoice Number',
                value: 'prefixedInvoiceNumber',
                description: 'Include prefixed invoice number in the response'
            },
            {
                name: 'Price Date',
                value: 'priceDate',
                description: 'Include price date in the response'
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
                name: 'Rebateable WSV',
                value: 'rebateableWSV',
                description: 'Include rebateable wsv in the response'
            },
            {
                name: 'Recent Off Stop',
                value: 'recentOffStop',
                description: 'Include recent off stop in the response'
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
                name: 'Reserves Ind',
                value: 'reservesInd',
                description: 'Include reserves ind in the response'
            },
            {
                name: 'Reserves Pick',
                value: 'reservesPick',
                description: 'Include reserves pick in the response'
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
                name: 'Sent Cases',
                value: 'sentCases',
                description: 'Include sent cases in the response'
            },
            {
                name: 'Sent Singles',
                value: 'sentSingles',
                description: 'Include sent singles in the response'
            },
            {
                name: 'Settlement Date',
                value: 'settlementDate',
                description: 'Include settlement date in the response'
            },
            {
                name: 'Settlement Discount Value',
                value: 'settlementDiscountValue',
                description: 'Include settlement discount value in the response'
            },
            {
                name: 'Short Name',
                value: 'shortName',
                description: 'Include short name in the response'
            },
            {
                name: 'Single Lines',
                value: 'singleLines',
                description: 'Include single lines in the response'
            },
            {
                name: 'Singles',
                value: 'singles',
                description: 'Include singles in the response'
            },
            {
                name: 'Source Type',
                value: 'sourceType',
                description: 'Include source type in the response'
            },
            {
                name: 'Source Type Description',
                value: 'sourceTypeDescription',
                description: 'Include source type description in the response'
            },
            {
                name: 'Straight To Invoice',
                value: 'straightToInvoice',
                description: 'Include straight to invoice in the response'
            },
            {
                name: 'Subs Allowed',
                value: 'subsAllowed',
                description: 'Include subs allowed in the response'
            },
            {
                name: 'Suppress Surcharge',
                value: 'suppressSurcharge',
                description: 'Include suppress surcharge in the response'
            },
            {
                name: 'Surcharge Amount',
                value: 'surchargeAmount',
                description: 'Include surcharge amount in the response'
            },
            {
                name: 'Surcharge Percent',
                value: 'surchargePercent',
                description: 'Include surcharge percent in the response'
            },
            {
                name: 'Surcharge Qty',
                value: 'surchargeQty',
                description: 'Include surcharge qty in the response'
            },
            {
                name: 'Surcharge Table',
                value: 'surchargeTable',
                description: 'Include surcharge table in the response'
            },
            {
                name: 'Surcharge Units',
                value: 'surchargeUnits',
                description: 'Include surcharge units in the response'
            },
            {
                name: 'Surcharge Value',
                value: 'surchargeValue',
                description: 'Include surcharge value in the response'
            },
            {
                name: 'Time Frame',
                value: 'timeFrame',
                description: 'Include time frame in the response'
            },
            {
                name: 'Time Slot',
                value: 'timeSlot',
                description: 'Include time slot in the response'
            },
            {
                name: 'Total Cases',
                value: 'totalCases',
                description: 'Include total cases in the response'
            },
            {
                name: 'Total Cig Boxes',
                value: 'totalCigBoxes',
                description: 'Include total cig boxes in the response'
            },
            {
                name: 'Total Cigs',
                value: 'totalCigs',
                description: 'Include total cigs in the response'
            },
            {
                name: 'Total Items',
                value: 'totalItems',
                description: 'Include total items in the response'
            },
            {
                name: 'Total Lines',
                value: 'totalLines',
                description: 'Include total lines in the response'
            },
            {
                name: 'Total Singles',
                value: 'totalSingles',
                description: 'Include total singles in the response'
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
                name: 'Tp Cheque Change',
                value: 'tpChequeChange',
                description: 'Include tp cheque change in the response'
            },
            {
                name: 'Tp Cheque Value',
                value: 'tpChequeValue',
                description: 'Include tp cheque value in the response'
            },
            {
                name: 'Type',
                value: 'type',
                description: 'Include type in the response'
            },
            {
                name: 'User',
                value: 'user',
                description: 'Include user in the response'
            },
            {
                name: 'Vat Code',
                value: 'vatCode',
                description: 'Include vat code in the response'
            },
            {
                name: 'Vat Discount',
                value: 'vatDiscount',
                description: 'Include vat discount in the response'
            },
            {
                name: 'Vat Goods',
                value: 'vatGoods',
                description: 'Include vat goods in the response'
            },
            {
                name: 'Vat Rate',
                value: 'vatRate',
                description: 'Include vat rate in the response'
            },
            {
                name: 'Vat Surcharge',
                value: 'vatSurcharge',
                description: 'Include vat surcharge in the response'
            },
            {
                name: 'Vat Value',
                value: 'vatValue',
                description: 'Include vat value in the response'
            },
            {
                name: 'Vehicle',
                value: 'vehicle',
                description: 'Include vehicle in the response'
            },
            {
                name: 'Week No',
                value: 'weekNo',
                description: 'Include week no in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:list'],
                filterMode: ['common']
            }
        }
    }
];

export const ordersCreateFields: INodeProperties[] = [
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
                resource: ['orders'],
                operation: ['orders:create']
            }
        }
    },
    {
        displayName: 'JSON Body',
        name: 'jsonBody',
        type: 'json',
        default: '{}',
        description: 'Raw JSON body for creating order records. Provide the complete request payload.',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:create'],
                createMode: ['json']
            }
        },
        placeholder: `{
  "orders": [
    {
      // Add your order fields here
    }
  ]
}`
    },
    {
        displayName: 'Address1',
        name: 'address1',
        type: 'string',
        default: '',
        description: 'Override Address Line 1 (Optional)',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Address2',
        name: 'address2',
        type: 'string',
        default: '',
        description: 'Override Address Line 2 (Optional)',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Address3',
        name: 'address3',
        type: 'string',
        default: '',
        description: 'Override Address Line 3 (Optional)',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Address4',
        name: 'address4',
        type: 'string',
        default: '',
        description: 'Override Address Line 4 (Optional)',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Address5',
        name: 'address5',
        type: 'string',
        default: '',
        description: 'Override Address Line 5 (Optional)',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Post Code',
        name: 'postCode',
        type: 'string',
        default: '',
        description: 'Override Postcode (Optional)',
        displayOptions: {
            show: {
                resource: ['orders'],
                operation: ['orders:create'],
                createMode: ['advanced']
            }
        }
    }
];
