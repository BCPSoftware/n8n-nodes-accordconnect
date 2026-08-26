import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0008 - 26/08/26 - do not edit by hand

export const productGroupsOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['productGroups'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'productGroups:create',
                description: 'Create a productGroup',
                action: 'Create a product group'
            },
            {
                name: 'Get',
                value: 'productGroups:get',
                description: 'Get a productGroup',
                action: 'Get a product group'
            },
            {
                name: 'List',
                value: 'productGroups:list',
                description: 'List many productGroups',
                action: 'List many product groups'
            },
            {
                name: 'Update',
                value: 'productGroups:update',
                description: 'Update a productGroup',
                action: 'Update a product group'
            },
        ],
        default: 'productGroups:create',
    },
];


export const productGroupsReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the productGroup',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'productGroup,lastUpdate,description,priceGroup',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Age Check Code',
                value: 'ageCheckCode',
                description: 'Include age check code in the response'
            },
            {
                name: 'Allow OS Ordering',
                value: 'allowOSOrdering',
                description: 'Include allow os ordering in the response'
            },
            {
                name: 'Cashier Age',
                value: 'cashierAge',
                description: 'Include cashier age in the response'
            },
            {
                name: 'Cashier Warning',
                value: 'cashierWarning',
                description: 'Include cashier warning in the response'
            },
            {
                name: 'Central Store Replenishment',
                value: 'centralStoreReplenishment',
                description: 'Include central store replenishment in the response'
            },
            {
                name: 'Charging Summary Department',
                value: 'chargingSummaryDepartment',
                description: 'Include charging summary department in the response'
            },
            {
                name: 'Company Transfer Cost Centre Code',
                value: 'companyTransferCostCentreCode',
                description: 'Include company transfer cost centre code in the response'
            },
            {
                name: 'Company Transfer Division Code',
                value: 'companyTransferDivisionCode',
                description: 'Include company transfer division code in the response'
            },
            {
                name: 'Company Transfer Ledger Code',
                value: 'companyTransferLedgerCode',
                description: 'Include company transfer ledger code in the response'
            },
            {
                name: 'Consolidate Splits',
                value: 'consolidateSplits',
                description: 'Include consolidate splits in the response'
            },
            {
                name: 'Cost Of Sales Cost Centre',
                value: 'costOfSalesCostCentre',
                description: 'Include cost of sales cost centre in the response'
            },
            {
                name: 'Cost Of Sales Division',
                value: 'costOfSalesDivision',
                description: 'Include cost of sales division in the response'
            },
            {
                name: 'Cost Of Sales NL Code',
                value: 'costOfSalesNLCode',
                description: 'Include cost of sales nl code in the response'
            },
            {
                name: 'Customer Age',
                value: 'customerAge',
                description: 'Include customer age in the response'
            },
            {
                name: 'Damage Allowance',
                value: 'damageAllowance',
                description: 'Include damage allowance in the response'
            },
            {
                name: 'Description',
                value: 'description',
                description: 'Include description in the response'
            },
            {
                name: 'Epos Department',
                value: 'eposDepartment',
                description: 'Include epos department in the response'
            },
            {
                name: 'Epos Product Group',
                value: 'eposProductGroup',
                description: 'Include epos product group in the response'
            },
            {
                name: 'Estimated Gross Margin Percentage',
                value: 'estimatedGrossMarginPercentage',
                description: 'Include estimated gross margin percentage in the response'
            },
            {
                name: 'Exclude',
                value: 'exclude',
                description: 'Include exclude in the response'
            },
            {
                name: 'Exclude Batch Traceability',
                value: 'excludeBatchTraceability',
                description: 'Include exclude batch traceability in the response'
            },
            {
                name: 'Fresh Chilled Stats',
                value: 'freshChilledStats',
                description: 'Include fresh chilled stats in the response'
            },
            {
                name: 'Label Type',
                value: 'labelType',
                description: 'Include label type in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Maximum Amount',
                value: 'maximumAmount',
                description: 'Include maximum amount in the response'
            },
            {
                name: 'Minimum Amount',
                value: 'minimumAmount',
                description: 'Include minimum amount in the response'
            },
            {
                name: 'Nominal Ledger Account',
                value: 'nominalLedgerAccount',
                description: 'Include nominal ledger account in the response'
            },
            {
                name: 'Nominal Ledger Cost Centre',
                value: 'nominalLedgerCostCentre',
                description: 'Include nominal ledger cost centre in the response'
            },
            {
                name: 'Nominal Ledger Division',
                value: 'nominalLedgerDivision',
                description: 'Include nominal ledger division in the response'
            },
            {
                name: 'Number Of Weeks',
                value: 'numberOfWeeks',
                description: 'Include number of weeks in the response'
            },
            {
                name: 'Off Licensed',
                value: 'offLicensed',
                description: 'Include off licensed in the response'
            },
            {
                name: 'Order Type',
                value: 'orderType',
                description: 'Include order type in the response'
            },
            {
                name: 'Pallet Percentage Pick',
                value: 'palletPercentagePick',
                description: 'Include pallet percentage pick in the response'
            },
            {
                name: 'Perpetual Inventory Interval',
                value: 'perpetualInventoryInterval',
                description: 'Include perpetual inventory interval in the response'
            },
            {
                name: 'Price Change Indicator',
                value: 'priceChangeIndicator',
                description: 'Include price change indicator in the response'
            },
            {
                name: 'Price Group',
                value: 'priceGroup',
                description: 'Include price group in the response'
            },
            {
                name: 'Product Group',
                value: 'productGroup',
                description: 'Include product group in the response'
            },
            {
                name: 'Product Group Department',
                value: 'productGroupDepartment',
                description: 'Include product group department in the response'
            },
            {
                name: 'Product Manager',
                value: 'productManager',
                description: 'Include product manager in the response'
            },
            {
                name: 'Purchase Ledger Account',
                value: 'purchaseLedgerAccount',
                description: 'Include purchase ledger account in the response'
            },
            {
                name: 'Purchase Ledger Cost Centre',
                value: 'purchaseLedgerCostCentre',
                description: 'Include purchase ledger cost centre in the response'
            },
            {
                name: 'Purchase Ledger Division',
                value: 'purchaseLedgerDivision',
                description: 'Include purchase ledger division in the response'
            },
            {
                name: 'Retail Margin',
                value: 'retailMargin',
                description: 'Include retail margin in the response'
            },
            {
                name: 'Retail Vat Indicator',
                value: 'retailVatIndicator',
                description: 'Include retail vat indicator in the response'
            },
            {
                name: 'Rrp Margin1',
                value: 'rrpMargin1',
                description: 'Include rrp margin1 in the response'
            },
            {
                name: 'Rrp Margin2',
                value: 'rrpMargin2',
                description: 'Include rrp margin2 in the response'
            },
            {
                name: 'Rrp Margin3',
                value: 'rrpMargin3',
                description: 'Include rrp margin3 in the response'
            },
            {
                name: 'Rrp Margin4',
                value: 'rrpMargin4',
                description: 'Include rrp margin4 in the response'
            },
            {
                name: 'Rrp Margin5',
                value: 'rrpMargin5',
                description: 'Include rrp margin5 in the response'
            },
            {
                name: 'Rsp Target Margin',
                value: 'rspTargetMargin',
                description: 'Include rsp target margin in the response'
            },
            {
                name: 'Scanned',
                value: 'scanned',
                description: 'Include scanned in the response'
            },
            {
                name: 'Sell Margin1',
                value: 'sellMargin1',
                description: 'Include sell margin1 in the response'
            },
            {
                name: 'Sell Margin2',
                value: 'sellMargin2',
                description: 'Include sell margin2 in the response'
            },
            {
                name: 'Sell Margin3',
                value: 'sellMargin3',
                description: 'Include sell margin3 in the response'
            },
            {
                name: 'Sell Margin4',
                value: 'sellMargin4',
                description: 'Include sell margin4 in the response'
            },
            {
                name: 'Sell Margin5',
                value: 'sellMargin5',
                description: 'Include sell margin5 in the response'
            },
            {
                name: 'Telspar Plus NL Account',
                value: 'telsparPlusNLAccount',
                description: 'Include telspar plus nl account in the response'
            },
            {
                name: 'Till Message',
                value: 'tillMessage',
                description: 'Include till message in the response'
            },
            {
                name: 'Till Message Required',
                value: 'tillMessageRequired',
                description: 'Include till message required in the response'
            },
            {
                name: 'Vat Code',
                value: 'vatCode',
                description: 'Include vat code in the response'
            },
            {
                name: 'Waste Allowance Percentage',
                value: 'wasteAllowancePercentage',
                description: 'Include waste allowance percentage in the response'
            },
            {
                name: 'Wsp Target Margin',
                value: 'wspTargetMargin',
                description: 'Include wsp target margin in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:get']
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
                resource: ['productGroups'],
                operation: ['productGroups:get']
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
                resource: ['productGroups'],
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
                resource: ['productGroups'],
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
                resource: ['productGroups'],
                operation: ['get']
            }
        }
    }
];

export const productGroupsUpdateFields: INodeProperties[] = [
    {
        displayName: 'Product Group',
        name: 'productGroup',
        type: 'string',
        default: '',
        description: 'The product group value',
        required: true,
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        default: '',
        description: 'Product desc',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Price Group',
        name: 'priceGroup',
        type: 'number',
        default: '',
        description: 'The price group value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Wsp Target Margin',
        name: 'wspTargetMargin',
        type: 'number',
        default: '',
        description: 'The wsp target margin value',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Rsp Target Margin',
        name: 'rspTargetMargin',
        type: 'number',
        default: '',
        description: 'The rsp target margin value',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Product Group Department',
        name: 'productGroupDepartment',
        type: 'string',
        default: '',
        description: 'Product Group Dept',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Product Manager',
        name: 'productManager',
        type: 'number',
        default: '',
        description: 'The product manager value',
        typeOptions: {
            minValue: 1
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Damage Allowance',
        name: 'damageAllowance',
        type: 'boolean',
        default: false,
        description: 'Whether the damage allowance value',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Retail Margin',
        name: 'retailMargin',
        type: 'boolean',
        default: false,
        description: 'Whether the retail margin value',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Waste Allowance Percentage',
        name: 'wasteAllowancePercentage',
        type: 'number',
        default: '',
        description: 'Waste Allowance %',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Telspar Plus NL Account',
        name: 'telsparPlusNLAccount',
        type: 'number',
        default: '',
        description: 'The telspar plus nl account value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Nominal Ledger Division',
        name: 'nominalLedgerDivision',
        type: 'string',
        default: '',
        description: 'Division',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Nominal Ledger Account',
        name: 'nominalLedgerAccount',
        type: 'number',
        default: '',
        description: 'Account Code',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Nominal Ledger Cost Centre',
        name: 'nominalLedgerCostCentre',
        type: 'number',
        default: '',
        description: 'Cost Centre',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Purchase Ledger Division',
        name: 'purchaseLedgerDivision',
        type: 'string',
        default: '',
        description: 'Division',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Purchase Ledger Account',
        name: 'purchaseLedgerAccount',
        type: 'number',
        default: '',
        description: 'Account Code',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Purchase Ledger Cost Centre',
        name: 'purchaseLedgerCostCentre',
        type: 'number',
        default: '',
        description: 'Cost Centre',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Consolidate Splits',
        name: 'consolidateSplits',
        type: 'options',
        default: 'b:Both convert & consolidate',
        description: 'The consolidate splits value',
        options: [
            {
                name: 'Both Convert & Consolidate',
                value: 'b:Both convert & consolidate',
                description: 'Both convert & consolidate (code: b)'
            },
            {
                name: 'Consolidate',
                value: 'y:Consolidate',
                description: 'Consolidate (code: y)'
            },
            {
                name: 'Convert Main Codes to Split',
                value: 's:Convert main codes to split',
                description: 'Convert main codes to split (code: s)'
            },
            {
                name: 'Do Not Consolidate',
                value: 'n:Do not consolidate',
                description: 'Do not consolidate (code: n)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Price Change Indicator',
        name: 'priceChangeIndicator',
        type: 'number',
        default: '',
        description: 'Prc. Change Indicator.',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Fresh Chilled Stats',
        name: 'freshChilledStats',
        type: 'options',
        default: 'n:No',
        description: 'FC Stats',
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
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Perpetual Inventory Interval',
        name: 'perpetualInventoryInterval',
        type: 'number',
        default: '',
        description: 'Perpetual Inv. Interval.',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Central Store Replenishment',
        name: 'centralStoreReplenishment',
        type: 'options',
        default: 'n:No',
        description: 'The central store replenishment value',
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
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Retail Vat Indicator',
        name: 'retailVatIndicator',
        type: 'options',
        default: 'n:No',
        description: 'The retail vat indicator value',
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
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Exclude Batch Traceability',
        name: 'excludeBatchTraceability',
        type: 'options',
        default: 'n:No',
        description: 'Batch Traceability',
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
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Label Type',
        name: 'labelType',
        type: 'number',
        default: '',
        description: 'The label type value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Allow OS Ordering',
        name: 'allowOSOrdering',
        type: 'options',
        default: 'n:No',
        description: 'Allow O/S Ordering',
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
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Pallet Percentage Pick',
        name: 'palletPercentagePick',
        type: 'number',
        default: '',
        description: 'The pallet percentage pick value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Epos Department',
        name: 'eposDepartment',
        type: 'string',
        default: '',
        description: 'EPoS Dept',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Order Type',
        name: 'orderType',
        type: 'string',
        default: '',
        description: 'The order type value',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Vat Code',
        name: 'vatCode',
        type: 'string',
        default: '',
        description: 'The vat code value',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Number Of Weeks',
        name: 'numberOfWeeks',
        type: 'number',
        default: '',
        description: 'No. of weeks.',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Estimated Gross Margin Percentage',
        name: 'estimatedGrossMarginPercentage',
        type: 'number',
        default: '',
        description: 'Estimated Gross Margin %',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Exclude',
        name: 'exclude',
        type: 'options',
        default: 'n:No',
        description: 'Exclude Commodity Group',
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
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Scanned',
        name: 'scanned',
        type: 'options',
        default: 'n:No',
        description: 'The scanned value',
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
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Minimum Amount',
        name: 'minimumAmount',
        type: 'number',
        default: '',
        description: 'Min. Amount.',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Maximum Amount',
        name: 'maximumAmount',
        type: 'number',
        default: '',
        description: 'Max. Amount.',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Age Check Code',
        name: 'ageCheckCode',
        type: 'number',
        default: '',
        description: 'The age check code value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Cashier Age',
        name: 'cashierAge',
        type: 'number',
        default: '',
        description: 'The cashier age value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Customer Age',
        name: 'customerAge',
        type: 'number',
        default: '',
        description: 'The customer age value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Off Licensed',
        name: 'offLicensed',
        type: 'options',
        default: 'n:No',
        description: 'Off-Licensed',
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
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Cashier Warning',
        name: 'cashierWarning',
        type: 'string',
        default: '',
        description: 'The cashier warning value',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Epos Product Group',
        name: 'eposProductGroup',
        type: 'number',
        default: '',
        description: 'EPOS Prod.gp',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Till Message Required',
        name: 'tillMessageRequired',
        type: 'options',
        default: 'n:No',
        description: 'Till Message Reqd',
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
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Till Message',
        name: 'tillMessage',
        type: 'string',
        default: '',
        description: 'The till message value',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Cost Of Sales Division',
        name: 'costOfSalesDivision',
        type: 'string',
        default: '',
        description: 'The cost of sales division value',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Cost Of Sales NL Code',
        name: 'costOfSalesNLCode',
        type: 'number',
        default: '',
        description: 'The cost of sales nl code value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Cost Of Sales Cost Centre',
        name: 'costOfSalesCostCentre',
        type: 'number',
        default: '',
        description: 'The cost of sales cost centre value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Charging Summary Department',
        name: 'chargingSummaryDepartment',
        type: 'string',
        default: '',
        description: 'The charging summary department value',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Sell Margin1',
        name: 'sellMargin1',
        type: 'number',
        default: '',
        description: 'Sell Margin 1',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Sell Margin2',
        name: 'sellMargin2',
        type: 'number',
        default: '',
        description: 'Sell Margin 2',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Sell Margin3',
        name: 'sellMargin3',
        type: 'number',
        default: '',
        description: 'Sell Margin 3',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Sell Margin4',
        name: 'sellMargin4',
        type: 'number',
        default: '',
        description: 'Sell Margin 4',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Sell Margin5',
        name: 'sellMargin5',
        type: 'number',
        default: '',
        description: 'Sell Margin 5',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Rrp Margin1',
        name: 'rrpMargin1',
        type: 'number',
        default: '',
        description: 'RRP Margin 1',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Rrp Margin2',
        name: 'rrpMargin2',
        type: 'number',
        default: '',
        description: 'RRP Margin 2',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Rrp Margin3',
        name: 'rrpMargin3',
        type: 'number',
        default: '',
        description: 'RRP Margin 3',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Rrp Margin4',
        name: 'rrpMargin4',
        type: 'number',
        default: '',
        description: 'RRP Margin 4',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Rrp Margin5',
        name: 'rrpMargin5',
        type: 'number',
        default: '',
        description: 'RRP Margin 5',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Cascade Price Group',
        name: 'cascadePriceGroup',
        type: 'boolean',
        default: false,
        description: 'Whether the cascade price group value',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Cascade Target Margin',
        name: 'cascadeTargetMargin',
        type: 'boolean',
        default: false,
        description: 'Whether cascade Target Margins',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Cascade Price Depot',
        name: 'cascadePriceDepot',
        type: 'boolean',
        default: false,
        description: 'Whether cascade Price Depots',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Company Transfer Division Code',
        name: 'companyTransferDivisionCode',
        type: 'string',
        default: '',
        description: 'Transfer Division',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Company Transfer Ledger Code',
        name: 'companyTransferLedgerCode',
        type: 'number',
        default: '',
        description: 'Transfer NL Code',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    },
    {
        displayName: 'Company Transfer Cost Centre Code',
        name: 'companyTransferCostCentreCode',
        type: 'number',
        default: '',
        description: 'Transfer Cost Centre',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:update']
            }
        }
    }
];

export const productGroupsListFields: INodeProperties[] = [
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
                resource: ['productGroups'],
                operation: ['productGroups:list']
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
                resource: ['productGroups'],
                operation: ['productGroups:list'],
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
                resource: ['productGroups'],
                operation: ['productGroups:list'],
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
                resource: ['productGroups'],
                operation: ['productGroups:list'],
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
                        default: 'ageCheckCode',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Age Check Code',
                                value: 'ageCheckCode'
                            },
                            {
                                name: 'Allow OS Ordering',
                                value: 'allowOSOrdering'
                            },
                            {
                                name: 'Cashier Age',
                                value: 'cashierAge'
                            },
                            {
                                name: 'Cashier Warning',
                                value: 'cashierWarning'
                            },
                            {
                                name: 'Central Store Replenishment',
                                value: 'centralStoreReplenishment'
                            },
                            {
                                name: 'Charging Summary Department',
                                value: 'chargingSummaryDepartment'
                            },
                            {
                                name: 'Company Transfer Cost Centre Code',
                                value: 'companyTransferCostCentreCode'
                            },
                            {
                                name: 'Company Transfer Division Code',
                                value: 'companyTransferDivisionCode'
                            },
                            {
                                name: 'Company Transfer Ledger Code',
                                value: 'companyTransferLedgerCode'
                            },
                            {
                                name: 'Consolidate Splits',
                                value: 'consolidateSplits'
                            },
                            {
                                name: 'Cost Of Sales Cost Centre',
                                value: 'costOfSalesCostCentre'
                            },
                            {
                                name: 'Cost Of Sales Division',
                                value: 'costOfSalesDivision'
                            },
                            {
                                name: 'Cost Of Sales NL Code',
                                value: 'costOfSalesNLCode'
                            },
                            {
                                name: 'Customer Age',
                                value: 'customerAge'
                            },
                            {
                                name: 'Damage Allowance',
                                value: 'damageAllowance'
                            },
                            {
                                name: 'Description',
                                value: 'description'
                            },
                            {
                                name: 'Epos Department',
                                value: 'eposDepartment'
                            },
                            {
                                name: 'Epos Product Group',
                                value: 'eposProductGroup'
                            },
                            {
                                name: 'Estimated Gross Margin Percentage',
                                value: 'estimatedGrossMarginPercentage'
                            },
                            {
                                name: 'Exclude',
                                value: 'exclude'
                            },
                            {
                                name: 'Exclude Batch Traceability',
                                value: 'excludeBatchTraceability'
                            },
                            {
                                name: 'Fresh Chilled Stats',
                                value: 'freshChilledStats'
                            },
                            {
                                name: 'Hide Nested Keys',
                                value: 'hideNestedKeys'
                            },
                            {
                                name: 'Label Type',
                                value: 'labelType'
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
                                name: 'Maximum Amount',
                                value: 'maximumAmount'
                            },
                            {
                                name: 'Minimum Amount',
                                value: 'minimumAmount'
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
                                name: 'Nominal Ledger Account',
                                value: 'nominalLedgerAccount'
                            },
                            {
                                name: 'Nominal Ledger Cost Centre',
                                value: 'nominalLedgerCostCentre'
                            },
                            {
                                name: 'Nominal Ledger Division',
                                value: 'nominalLedgerDivision'
                            },
                            {
                                name: 'Number Of Weeks',
                                value: 'numberOfWeeks'
                            },
                            {
                                name: 'Off Licensed',
                                value: 'offLicensed'
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
                                name: 'Pallet Percentage Pick',
                                value: 'palletPercentagePick'
                            },
                            {
                                name: 'Perpetual Inventory Interval',
                                value: 'perpetualInventoryInterval'
                            },
                            {
                                name: 'Price Change Indicator',
                                value: 'priceChangeIndicator'
                            },
                            {
                                name: 'Price Group',
                                value: 'priceGroup'
                            },
                            {
                                name: 'Product Group',
                                value: 'productGroup'
                            },
                            {
                                name: 'Product Group Department',
                                value: 'productGroupDepartment'
                            },
                            {
                                name: 'Product Manager',
                                value: 'productManager'
                            },
                            {
                                name: 'Purchase Ledger Account',
                                value: 'purchaseLedgerAccount'
                            },
                            {
                                name: 'Purchase Ledger Cost Centre',
                                value: 'purchaseLedgerCostCentre'
                            },
                            {
                                name: 'Purchase Ledger Division',
                                value: 'purchaseLedgerDivision'
                            },
                            {
                                name: 'Retail Margin',
                                value: 'retailMargin'
                            },
                            {
                                name: 'Retail Vat Indicator',
                                value: 'retailVatIndicator'
                            },
                            {
                                name: 'Rrp Margin1',
                                value: 'rrpMargin1'
                            },
                            {
                                name: 'Rrp Margin2',
                                value: 'rrpMargin2'
                            },
                            {
                                name: 'Rrp Margin3',
                                value: 'rrpMargin3'
                            },
                            {
                                name: 'Rrp Margin4',
                                value: 'rrpMargin4'
                            },
                            {
                                name: 'Rrp Margin5',
                                value: 'rrpMargin5'
                            },
                            {
                                name: 'Rsp Target Margin',
                                value: 'rspTargetMargin'
                            },
                            {
                                name: 'Scanned',
                                value: 'scanned'
                            },
                            {
                                name: 'Sell Margin1',
                                value: 'sellMargin1'
                            },
                            {
                                name: 'Sell Margin2',
                                value: 'sellMargin2'
                            },
                            {
                                name: 'Sell Margin3',
                                value: 'sellMargin3'
                            },
                            {
                                name: 'Sell Margin4',
                                value: 'sellMargin4'
                            },
                            {
                                name: 'Sell Margin5',
                                value: 'sellMargin5'
                            },
                            {
                                name: 'Telspar Plus NL Account',
                                value: 'telsparPlusNLAccount'
                            },
                            {
                                name: 'Till Message',
                                value: 'tillMessage'
                            },
                            {
                                name: 'Till Message Required',
                                value: 'tillMessageRequired'
                            },
                            {
                                name: 'Timeout',
                                value: 'timeout'
                            },
                            {
                                name: 'Vat Code',
                                value: 'vatCode'
                            },
                            {
                                name: 'Waste Allowance Percentage',
                                value: 'wasteAllowancePercentage'
                            },
                            {
                                name: 'Wsp Target Margin',
                                value: 'wspTargetMargin'
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
                resource: ['productGroups'],
                operation: ['productGroups:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Product Group',
        name: 'productGroup',
        type: 'string',
        default: '',
        description: 'Product group (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'D104',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:list'],
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
                resource: ['productGroups'],
                operation: ['productGroups:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        default: '',
        description: 'Product desc (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'FROZEN VEGETABLES',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:list'],
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
        placeholder: 'productGroup,-lastUpdate',
        options: [
            {
                name: 'Age Check Code (Ascending)',
                value: 'ageCheckCode',
                description: 'Sort by Age Check Code in ascending order'
            },
            {
                name: 'Age Check Code (Descending)',
                value: '-ageCheckCode',
                description: 'Sort by Age Check Code in descending order'
            },
            {
                name: 'Allow OS Ordering (Ascending)',
                value: 'allowOSOrdering',
                description: 'Sort by Allow OS Ordering in ascending order'
            },
            {
                name: 'Allow OS Ordering (Descending)',
                value: '-allowOSOrdering',
                description: 'Sort by Allow OS Ordering in descending order'
            },
            {
                name: 'Cashier Age (Ascending)',
                value: 'cashierAge',
                description: 'Sort by Cashier Age in ascending order'
            },
            {
                name: 'Cashier Age (Descending)',
                value: '-cashierAge',
                description: 'Sort by Cashier Age in descending order'
            },
            {
                name: 'Cashier Warning (Ascending)',
                value: 'cashierWarning',
                description: 'Sort by Cashier Warning in ascending order'
            },
            {
                name: 'Cashier Warning (Descending)',
                value: '-cashierWarning',
                description: 'Sort by Cashier Warning in descending order'
            },
            {
                name: 'Central Store Replenishment (Ascending)',
                value: 'centralStoreReplenishment',
                description: 'Sort by Central Store Replenishment in ascending order'
            },
            {
                name: 'Central Store Replenishment (Descending)',
                value: '-centralStoreReplenishment',
                description: 'Sort by Central Store Replenishment in descending order'
            },
            {
                name: 'Charging Summary Department (Ascending)',
                value: 'chargingSummaryDepartment',
                description: 'Sort by Charging Summary Department in ascending order'
            },
            {
                name: 'Charging Summary Department (Descending)',
                value: '-chargingSummaryDepartment',
                description: 'Sort by Charging Summary Department in descending order'
            },
            {
                name: 'Company Transfer Cost Centre Code (Ascending)',
                value: 'companyTransferCostCentreCode',
                description: 'Sort by Company Transfer Cost Centre Code in ascending order'
            },
            {
                name: 'Company Transfer Cost Centre Code (Descending)',
                value: '-companyTransferCostCentreCode',
                description: 'Sort by Company Transfer Cost Centre Code in descending order'
            },
            {
                name: 'Company Transfer Division Code (Ascending)',
                value: 'companyTransferDivisionCode',
                description: 'Sort by Company Transfer Division Code in ascending order'
            },
            {
                name: 'Company Transfer Division Code (Descending)',
                value: '-companyTransferDivisionCode',
                description: 'Sort by Company Transfer Division Code in descending order'
            },
            {
                name: 'Company Transfer Ledger Code (Ascending)',
                value: 'companyTransferLedgerCode',
                description: 'Sort by Company Transfer Ledger Code in ascending order'
            },
            {
                name: 'Company Transfer Ledger Code (Descending)',
                value: '-companyTransferLedgerCode',
                description: 'Sort by Company Transfer Ledger Code in descending order'
            },
            {
                name: 'Consolidate Splits (Ascending)',
                value: 'consolidateSplits',
                description: 'Sort by Consolidate Splits in ascending order'
            },
            {
                name: 'Consolidate Splits (Descending)',
                value: '-consolidateSplits',
                description: 'Sort by Consolidate Splits in descending order'
            },
            {
                name: 'Cost Of Sales Cost Centre (Ascending)',
                value: 'costOfSalesCostCentre',
                description: 'Sort by Cost Of Sales Cost Centre in ascending order'
            },
            {
                name: 'Cost Of Sales Cost Centre (Descending)',
                value: '-costOfSalesCostCentre',
                description: 'Sort by Cost Of Sales Cost Centre in descending order'
            },
            {
                name: 'Cost Of Sales Division (Ascending)',
                value: 'costOfSalesDivision',
                description: 'Sort by Cost Of Sales Division in ascending order'
            },
            {
                name: 'Cost Of Sales Division (Descending)',
                value: '-costOfSalesDivision',
                description: 'Sort by Cost Of Sales Division in descending order'
            },
            {
                name: 'Cost Of Sales NL Code (Ascending)',
                value: 'costOfSalesNLCode',
                description: 'Sort by Cost Of Sales NL Code in ascending order'
            },
            {
                name: 'Cost Of Sales NL Code (Descending)',
                value: '-costOfSalesNLCode',
                description: 'Sort by Cost Of Sales NL Code in descending order'
            },
            {
                name: 'Customer Age (Ascending)',
                value: 'customerAge',
                description: 'Sort by Customer Age in ascending order'
            },
            {
                name: 'Customer Age (Descending)',
                value: '-customerAge',
                description: 'Sort by Customer Age in descending order'
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
                name: 'Description (Ascending)',
                value: 'description',
                description: 'Sort by Description in ascending order'
            },
            {
                name: 'Description (Descending)',
                value: '-description',
                description: 'Sort by Description in descending order'
            },
            {
                name: 'Epos Department (Ascending)',
                value: 'eposDepartment',
                description: 'Sort by Epos Department in ascending order'
            },
            {
                name: 'Epos Department (Descending)',
                value: '-eposDepartment',
                description: 'Sort by Epos Department in descending order'
            },
            {
                name: 'Epos Product Group (Ascending)',
                value: 'eposProductGroup',
                description: 'Sort by Epos Product Group in ascending order'
            },
            {
                name: 'Epos Product Group (Descending)',
                value: '-eposProductGroup',
                description: 'Sort by Epos Product Group in descending order'
            },
            {
                name: 'Estimated Gross Margin Percentage (Ascending)',
                value: 'estimatedGrossMarginPercentage',
                description: 'Sort by Estimated Gross Margin Percentage in ascending order'
            },
            {
                name: 'Estimated Gross Margin Percentage (Descending)',
                value: '-estimatedGrossMarginPercentage',
                description: 'Sort by Estimated Gross Margin Percentage in descending order'
            },
            {
                name: 'Exclude (Ascending)',
                value: 'exclude',
                description: 'Sort by Exclude in ascending order'
            },
            {
                name: 'Exclude (Descending)',
                value: '-exclude',
                description: 'Sort by Exclude in descending order'
            },
            {
                name: 'Exclude Batch Traceability (Ascending)',
                value: 'excludeBatchTraceability',
                description: 'Sort by Exclude Batch Traceability in ascending order'
            },
            {
                name: 'Exclude Batch Traceability (Descending)',
                value: '-excludeBatchTraceability',
                description: 'Sort by Exclude Batch Traceability in descending order'
            },
            {
                name: 'Fresh Chilled Stats (Ascending)',
                value: 'freshChilledStats',
                description: 'Sort by Fresh Chilled Stats in ascending order'
            },
            {
                name: 'Fresh Chilled Stats (Descending)',
                value: '-freshChilledStats',
                description: 'Sort by Fresh Chilled Stats in descending order'
            },
            {
                name: 'Label Type (Ascending)',
                value: 'labelType',
                description: 'Sort by Label Type in ascending order'
            },
            {
                name: 'Label Type (Descending)',
                value: '-labelType',
                description: 'Sort by Label Type in descending order'
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
                name: 'Maximum Amount (Ascending)',
                value: 'maximumAmount',
                description: 'Sort by Maximum Amount in ascending order'
            },
            {
                name: 'Maximum Amount (Descending)',
                value: '-maximumAmount',
                description: 'Sort by Maximum Amount in descending order'
            },
            {
                name: 'Minimum Amount (Ascending)',
                value: 'minimumAmount',
                description: 'Sort by Minimum Amount in ascending order'
            },
            {
                name: 'Minimum Amount (Descending)',
                value: '-minimumAmount',
                description: 'Sort by Minimum Amount in descending order'
            },
            {
                name: 'Nominal Ledger Account (Ascending)',
                value: 'nominalLedgerAccount',
                description: 'Sort by Nominal Ledger Account in ascending order'
            },
            {
                name: 'Nominal Ledger Account (Descending)',
                value: '-nominalLedgerAccount',
                description: 'Sort by Nominal Ledger Account in descending order'
            },
            {
                name: 'Nominal Ledger Cost Centre (Ascending)',
                value: 'nominalLedgerCostCentre',
                description: 'Sort by Nominal Ledger Cost Centre in ascending order'
            },
            {
                name: 'Nominal Ledger Cost Centre (Descending)',
                value: '-nominalLedgerCostCentre',
                description: 'Sort by Nominal Ledger Cost Centre in descending order'
            },
            {
                name: 'Nominal Ledger Division (Ascending)',
                value: 'nominalLedgerDivision',
                description: 'Sort by Nominal Ledger Division in ascending order'
            },
            {
                name: 'Nominal Ledger Division (Descending)',
                value: '-nominalLedgerDivision',
                description: 'Sort by Nominal Ledger Division in descending order'
            },
            {
                name: 'Number Of Weeks (Ascending)',
                value: 'numberOfWeeks',
                description: 'Sort by Number Of Weeks in ascending order'
            },
            {
                name: 'Number Of Weeks (Descending)',
                value: '-numberOfWeeks',
                description: 'Sort by Number Of Weeks in descending order'
            },
            {
                name: 'Off Licensed (Ascending)',
                value: 'offLicensed',
                description: 'Sort by Off Licensed in ascending order'
            },
            {
                name: 'Off Licensed (Descending)',
                value: '-offLicensed',
                description: 'Sort by Off Licensed in descending order'
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
                name: 'Pallet Percentage Pick (Ascending)',
                value: 'palletPercentagePick',
                description: 'Sort by Pallet Percentage Pick in ascending order'
            },
            {
                name: 'Pallet Percentage Pick (Descending)',
                value: '-palletPercentagePick',
                description: 'Sort by Pallet Percentage Pick in descending order'
            },
            {
                name: 'Perpetual Inventory Interval (Ascending)',
                value: 'perpetualInventoryInterval',
                description: 'Sort by Perpetual Inventory Interval in ascending order'
            },
            {
                name: 'Perpetual Inventory Interval (Descending)',
                value: '-perpetualInventoryInterval',
                description: 'Sort by Perpetual Inventory Interval in descending order'
            },
            {
                name: 'Price Change Indicator (Ascending)',
                value: 'priceChangeIndicator',
                description: 'Sort by Price Change Indicator in ascending order'
            },
            {
                name: 'Price Change Indicator (Descending)',
                value: '-priceChangeIndicator',
                description: 'Sort by Price Change Indicator in descending order'
            },
            {
                name: 'Price Group (Ascending)',
                value: 'priceGroup',
                description: 'Sort by Price Group in ascending order'
            },
            {
                name: 'Price Group (Descending)',
                value: '-priceGroup',
                description: 'Sort by Price Group in descending order'
            },
            {
                name: 'Product Group (Ascending)',
                value: 'productGroup',
                description: 'Sort by Product Group in ascending order'
            },
            {
                name: 'Product Group (Descending)',
                value: '-productGroup',
                description: 'Sort by Product Group in descending order'
            },
            {
                name: 'Product Group Department (Ascending)',
                value: 'productGroupDepartment',
                description: 'Sort by Product Group Department in ascending order'
            },
            {
                name: 'Product Group Department (Descending)',
                value: '-productGroupDepartment',
                description: 'Sort by Product Group Department in descending order'
            },
            {
                name: 'Product Manager (Ascending)',
                value: 'productManager',
                description: 'Sort by Product Manager in ascending order'
            },
            {
                name: 'Product Manager (Descending)',
                value: '-productManager',
                description: 'Sort by Product Manager in descending order'
            },
            {
                name: 'Purchase Ledger Account (Ascending)',
                value: 'purchaseLedgerAccount',
                description: 'Sort by Purchase Ledger Account in ascending order'
            },
            {
                name: 'Purchase Ledger Account (Descending)',
                value: '-purchaseLedgerAccount',
                description: 'Sort by Purchase Ledger Account in descending order'
            },
            {
                name: 'Purchase Ledger Cost Centre (Ascending)',
                value: 'purchaseLedgerCostCentre',
                description: 'Sort by Purchase Ledger Cost Centre in ascending order'
            },
            {
                name: 'Purchase Ledger Cost Centre (Descending)',
                value: '-purchaseLedgerCostCentre',
                description: 'Sort by Purchase Ledger Cost Centre in descending order'
            },
            {
                name: 'Purchase Ledger Division (Ascending)',
                value: 'purchaseLedgerDivision',
                description: 'Sort by Purchase Ledger Division in ascending order'
            },
            {
                name: 'Purchase Ledger Division (Descending)',
                value: '-purchaseLedgerDivision',
                description: 'Sort by Purchase Ledger Division in descending order'
            },
            {
                name: 'Retail Margin (Ascending)',
                value: 'retailMargin',
                description: 'Sort by Retail Margin in ascending order'
            },
            {
                name: 'Retail Margin (Descending)',
                value: '-retailMargin',
                description: 'Sort by Retail Margin in descending order'
            },
            {
                name: 'Retail Vat Indicator (Ascending)',
                value: 'retailVatIndicator',
                description: 'Sort by Retail Vat Indicator in ascending order'
            },
            {
                name: 'Retail Vat Indicator (Descending)',
                value: '-retailVatIndicator',
                description: 'Sort by Retail Vat Indicator in descending order'
            },
            {
                name: 'Rrp Margin1 (Ascending)',
                value: 'rrpMargin1',
                description: 'Sort by Rrp Margin1 in ascending order'
            },
            {
                name: 'Rrp Margin1 (Descending)',
                value: '-rrpMargin1',
                description: 'Sort by Rrp Margin1 in descending order'
            },
            {
                name: 'Rrp Margin2 (Ascending)',
                value: 'rrpMargin2',
                description: 'Sort by Rrp Margin2 in ascending order'
            },
            {
                name: 'Rrp Margin2 (Descending)',
                value: '-rrpMargin2',
                description: 'Sort by Rrp Margin2 in descending order'
            },
            {
                name: 'Rrp Margin3 (Ascending)',
                value: 'rrpMargin3',
                description: 'Sort by Rrp Margin3 in ascending order'
            },
            {
                name: 'Rrp Margin3 (Descending)',
                value: '-rrpMargin3',
                description: 'Sort by Rrp Margin3 in descending order'
            },
            {
                name: 'Rrp Margin4 (Ascending)',
                value: 'rrpMargin4',
                description: 'Sort by Rrp Margin4 in ascending order'
            },
            {
                name: 'Rrp Margin4 (Descending)',
                value: '-rrpMargin4',
                description: 'Sort by Rrp Margin4 in descending order'
            },
            {
                name: 'Rrp Margin5 (Ascending)',
                value: 'rrpMargin5',
                description: 'Sort by Rrp Margin5 in ascending order'
            },
            {
                name: 'Rrp Margin5 (Descending)',
                value: '-rrpMargin5',
                description: 'Sort by Rrp Margin5 in descending order'
            },
            {
                name: 'Rsp Target Margin (Ascending)',
                value: 'rspTargetMargin',
                description: 'Sort by Rsp Target Margin in ascending order'
            },
            {
                name: 'Rsp Target Margin (Descending)',
                value: '-rspTargetMargin',
                description: 'Sort by Rsp Target Margin in descending order'
            },
            {
                name: 'Scanned (Ascending)',
                value: 'scanned',
                description: 'Sort by Scanned in ascending order'
            },
            {
                name: 'Scanned (Descending)',
                value: '-scanned',
                description: 'Sort by Scanned in descending order'
            },
            {
                name: 'Sell Margin1 (Ascending)',
                value: 'sellMargin1',
                description: 'Sort by Sell Margin1 in ascending order'
            },
            {
                name: 'Sell Margin1 (Descending)',
                value: '-sellMargin1',
                description: 'Sort by Sell Margin1 in descending order'
            },
            {
                name: 'Sell Margin2 (Ascending)',
                value: 'sellMargin2',
                description: 'Sort by Sell Margin2 in ascending order'
            },
            {
                name: 'Sell Margin2 (Descending)',
                value: '-sellMargin2',
                description: 'Sort by Sell Margin2 in descending order'
            },
            {
                name: 'Sell Margin3 (Ascending)',
                value: 'sellMargin3',
                description: 'Sort by Sell Margin3 in ascending order'
            },
            {
                name: 'Sell Margin3 (Descending)',
                value: '-sellMargin3',
                description: 'Sort by Sell Margin3 in descending order'
            },
            {
                name: 'Sell Margin4 (Ascending)',
                value: 'sellMargin4',
                description: 'Sort by Sell Margin4 in ascending order'
            },
            {
                name: 'Sell Margin4 (Descending)',
                value: '-sellMargin4',
                description: 'Sort by Sell Margin4 in descending order'
            },
            {
                name: 'Sell Margin5 (Ascending)',
                value: 'sellMargin5',
                description: 'Sort by Sell Margin5 in ascending order'
            },
            {
                name: 'Sell Margin5 (Descending)',
                value: '-sellMargin5',
                description: 'Sort by Sell Margin5 in descending order'
            },
            {
                name: 'Telspar Plus NL Account (Ascending)',
                value: 'telsparPlusNLAccount',
                description: 'Sort by Telspar Plus NL Account in ascending order'
            },
            {
                name: 'Telspar Plus NL Account (Descending)',
                value: '-telsparPlusNLAccount',
                description: 'Sort by Telspar Plus NL Account in descending order'
            },
            {
                name: 'Till Message (Ascending)',
                value: 'tillMessage',
                description: 'Sort by Till Message in ascending order'
            },
            {
                name: 'Till Message (Descending)',
                value: '-tillMessage',
                description: 'Sort by Till Message in descending order'
            },
            {
                name: 'Till Message Required (Ascending)',
                value: 'tillMessageRequired',
                description: 'Sort by Till Message Required in ascending order'
            },
            {
                name: 'Till Message Required (Descending)',
                value: '-tillMessageRequired',
                description: 'Sort by Till Message Required in descending order'
            },
            {
                name: 'Vat Code (Ascending)',
                value: 'vatCode',
                description: 'Sort by Vat Code in ascending order'
            },
            {
                name: 'Vat Code (Descending)',
                value: '-vatCode',
                description: 'Sort by Vat Code in descending order'
            },
            {
                name: 'Waste Allowance Percentage (Ascending)',
                value: 'wasteAllowancePercentage',
                description: 'Sort by Waste Allowance Percentage in ascending order'
            },
            {
                name: 'Waste Allowance Percentage (Descending)',
                value: '-wasteAllowancePercentage',
                description: 'Sort by Waste Allowance Percentage in descending order'
            },
            {
                name: 'Wsp Target Margin (Ascending)',
                value: 'wspTargetMargin',
                description: 'Sort by Wsp Target Margin in ascending order'
            },
            {
                name: 'Wsp Target Margin (Descending)',
                value: '-wspTargetMargin',
                description: 'Sort by Wsp Target Margin in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:list'],
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
                resource: ['productGroups'],
                operation: ['productGroups:list'],
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
                name: 'Age Check Code',
                value: 'ageCheckCode',
                description: 'Include age check code in the response'
            },
            {
                name: 'Allow OS Ordering',
                value: 'allowOSOrdering',
                description: 'Include allow os ordering in the response'
            },
            {
                name: 'Cashier Age',
                value: 'cashierAge',
                description: 'Include cashier age in the response'
            },
            {
                name: 'Cashier Warning',
                value: 'cashierWarning',
                description: 'Include cashier warning in the response'
            },
            {
                name: 'Central Store Replenishment',
                value: 'centralStoreReplenishment',
                description: 'Include central store replenishment in the response'
            },
            {
                name: 'Charging Summary Department',
                value: 'chargingSummaryDepartment',
                description: 'Include charging summary department in the response'
            },
            {
                name: 'Company Transfer Cost Centre Code',
                value: 'companyTransferCostCentreCode',
                description: 'Include company transfer cost centre code in the response'
            },
            {
                name: 'Company Transfer Division Code',
                value: 'companyTransferDivisionCode',
                description: 'Include company transfer division code in the response'
            },
            {
                name: 'Company Transfer Ledger Code',
                value: 'companyTransferLedgerCode',
                description: 'Include company transfer ledger code in the response'
            },
            {
                name: 'Consolidate Splits',
                value: 'consolidateSplits',
                description: 'Include consolidate splits in the response'
            },
            {
                name: 'Cost Of Sales Cost Centre',
                value: 'costOfSalesCostCentre',
                description: 'Include cost of sales cost centre in the response'
            },
            {
                name: 'Cost Of Sales Division',
                value: 'costOfSalesDivision',
                description: 'Include cost of sales division in the response'
            },
            {
                name: 'Cost Of Sales NL Code',
                value: 'costOfSalesNLCode',
                description: 'Include cost of sales nl code in the response'
            },
            {
                name: 'Customer Age',
                value: 'customerAge',
                description: 'Include customer age in the response'
            },
            {
                name: 'Damage Allowance',
                value: 'damageAllowance',
                description: 'Include damage allowance in the response'
            },
            {
                name: 'Description',
                value: 'description',
                description: 'Include description in the response'
            },
            {
                name: 'Epos Department',
                value: 'eposDepartment',
                description: 'Include epos department in the response'
            },
            {
                name: 'Epos Product Group',
                value: 'eposProductGroup',
                description: 'Include epos product group in the response'
            },
            {
                name: 'Estimated Gross Margin Percentage',
                value: 'estimatedGrossMarginPercentage',
                description: 'Include estimated gross margin percentage in the response'
            },
            {
                name: 'Exclude',
                value: 'exclude',
                description: 'Include exclude in the response'
            },
            {
                name: 'Exclude Batch Traceability',
                value: 'excludeBatchTraceability',
                description: 'Include exclude batch traceability in the response'
            },
            {
                name: 'Fresh Chilled Stats',
                value: 'freshChilledStats',
                description: 'Include fresh chilled stats in the response'
            },
            {
                name: 'Label Type',
                value: 'labelType',
                description: 'Include label type in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Maximum Amount',
                value: 'maximumAmount',
                description: 'Include maximum amount in the response'
            },
            {
                name: 'Minimum Amount',
                value: 'minimumAmount',
                description: 'Include minimum amount in the response'
            },
            {
                name: 'Nominal Ledger Account',
                value: 'nominalLedgerAccount',
                description: 'Include nominal ledger account in the response'
            },
            {
                name: 'Nominal Ledger Cost Centre',
                value: 'nominalLedgerCostCentre',
                description: 'Include nominal ledger cost centre in the response'
            },
            {
                name: 'Nominal Ledger Division',
                value: 'nominalLedgerDivision',
                description: 'Include nominal ledger division in the response'
            },
            {
                name: 'Number Of Weeks',
                value: 'numberOfWeeks',
                description: 'Include number of weeks in the response'
            },
            {
                name: 'Off Licensed',
                value: 'offLicensed',
                description: 'Include off licensed in the response'
            },
            {
                name: 'Order Type',
                value: 'orderType',
                description: 'Include order type in the response'
            },
            {
                name: 'Pallet Percentage Pick',
                value: 'palletPercentagePick',
                description: 'Include pallet percentage pick in the response'
            },
            {
                name: 'Perpetual Inventory Interval',
                value: 'perpetualInventoryInterval',
                description: 'Include perpetual inventory interval in the response'
            },
            {
                name: 'Price Change Indicator',
                value: 'priceChangeIndicator',
                description: 'Include price change indicator in the response'
            },
            {
                name: 'Price Group',
                value: 'priceGroup',
                description: 'Include price group in the response'
            },
            {
                name: 'Product Group',
                value: 'productGroup',
                description: 'Include product group in the response'
            },
            {
                name: 'Product Group Department',
                value: 'productGroupDepartment',
                description: 'Include product group department in the response'
            },
            {
                name: 'Product Manager',
                value: 'productManager',
                description: 'Include product manager in the response'
            },
            {
                name: 'Purchase Ledger Account',
                value: 'purchaseLedgerAccount',
                description: 'Include purchase ledger account in the response'
            },
            {
                name: 'Purchase Ledger Cost Centre',
                value: 'purchaseLedgerCostCentre',
                description: 'Include purchase ledger cost centre in the response'
            },
            {
                name: 'Purchase Ledger Division',
                value: 'purchaseLedgerDivision',
                description: 'Include purchase ledger division in the response'
            },
            {
                name: 'Retail Margin',
                value: 'retailMargin',
                description: 'Include retail margin in the response'
            },
            {
                name: 'Retail Vat Indicator',
                value: 'retailVatIndicator',
                description: 'Include retail vat indicator in the response'
            },
            {
                name: 'Rrp Margin1',
                value: 'rrpMargin1',
                description: 'Include rrp margin1 in the response'
            },
            {
                name: 'Rrp Margin2',
                value: 'rrpMargin2',
                description: 'Include rrp margin2 in the response'
            },
            {
                name: 'Rrp Margin3',
                value: 'rrpMargin3',
                description: 'Include rrp margin3 in the response'
            },
            {
                name: 'Rrp Margin4',
                value: 'rrpMargin4',
                description: 'Include rrp margin4 in the response'
            },
            {
                name: 'Rrp Margin5',
                value: 'rrpMargin5',
                description: 'Include rrp margin5 in the response'
            },
            {
                name: 'Rsp Target Margin',
                value: 'rspTargetMargin',
                description: 'Include rsp target margin in the response'
            },
            {
                name: 'Scanned',
                value: 'scanned',
                description: 'Include scanned in the response'
            },
            {
                name: 'Sell Margin1',
                value: 'sellMargin1',
                description: 'Include sell margin1 in the response'
            },
            {
                name: 'Sell Margin2',
                value: 'sellMargin2',
                description: 'Include sell margin2 in the response'
            },
            {
                name: 'Sell Margin3',
                value: 'sellMargin3',
                description: 'Include sell margin3 in the response'
            },
            {
                name: 'Sell Margin4',
                value: 'sellMargin4',
                description: 'Include sell margin4 in the response'
            },
            {
                name: 'Sell Margin5',
                value: 'sellMargin5',
                description: 'Include sell margin5 in the response'
            },
            {
                name: 'Telspar Plus NL Account',
                value: 'telsparPlusNLAccount',
                description: 'Include telspar plus nl account in the response'
            },
            {
                name: 'Till Message',
                value: 'tillMessage',
                description: 'Include till message in the response'
            },
            {
                name: 'Till Message Required',
                value: 'tillMessageRequired',
                description: 'Include till message required in the response'
            },
            {
                name: 'Vat Code',
                value: 'vatCode',
                description: 'Include vat code in the response'
            },
            {
                name: 'Waste Allowance Percentage',
                value: 'wasteAllowancePercentage',
                description: 'Include waste allowance percentage in the response'
            },
            {
                name: 'Wsp Target Margin',
                value: 'wspTargetMargin',
                description: 'Include wsp target margin in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:list'],
                filterMode: ['common']
            }
        }
    }
];

export const productGroupsCreateFields: INodeProperties[] = [
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
                resource: ['productGroups'],
                operation: ['productGroups:create']
            }
        }
    },
    {
        displayName: 'JSON Body',
        name: 'jsonBody',
        type: 'json',
        default: '{}',
        description: 'Raw JSON body for creating product group records. Provide the complete request payload.',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['json']
            }
        },
        placeholder: `{
  "productGroups": [
    {
      // Add your product group fields here
    }
  ]
}`
    },
    {
        displayName: 'Product Group',
        name: 'productGroup',
        type: 'string',
        default: '',
        description: 'The product group value',
        required: true,
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        default: '',
        description: 'Product desc',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Product Group Department',
        name: 'productGroupDepartment',
        type: 'string',
        default: '',
        description: 'Product Group Dept',
        required: true,
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Price Group',
        name: 'priceGroup',
        type: 'number',
        default: '',
        description: 'The price group value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Wsp Target Margin',
        name: 'wspTargetMargin',
        type: 'number',
        default: '',
        description: 'The wsp target margin value',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Rsp Target Margin',
        name: 'rspTargetMargin',
        type: 'number',
        default: '',
        description: 'The rsp target margin value',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Product Manager',
        name: 'productManager',
        type: 'number',
        default: '',
        description: 'The product manager value',
        typeOptions: {
            minValue: 1
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Damage Allowance',
        name: 'damageAllowance',
        type: 'boolean',
        default: false,
        description: 'Whether the damage allowance value',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Retail Margin',
        name: 'retailMargin',
        type: 'boolean',
        default: false,
        description: 'Whether the retail margin value',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Waste Allowance Percentage',
        name: 'wasteAllowancePercentage',
        type: 'number',
        default: '',
        description: 'Waste Allowance %',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Telspar Plus NL Account',
        name: 'telsparPlusNLAccount',
        type: 'number',
        default: '',
        description: 'The telspar plus nl account value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Nominal Ledger Division',
        name: 'nominalLedgerDivision',
        type: 'string',
        default: '',
        description: 'Division',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Nominal Ledger Account',
        name: 'nominalLedgerAccount',
        type: 'number',
        default: '',
        description: 'Account Code',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Nominal Ledger Cost Centre',
        name: 'nominalLedgerCostCentre',
        type: 'number',
        default: '',
        description: 'Cost Centre',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Purchase Ledger Division',
        name: 'purchaseLedgerDivision',
        type: 'string',
        default: '',
        description: 'Division',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Purchase Ledger Account',
        name: 'purchaseLedgerAccount',
        type: 'number',
        default: '',
        description: 'Account Code',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Purchase Ledger Cost Centre',
        name: 'purchaseLedgerCostCentre',
        type: 'number',
        default: '',
        description: 'Cost Centre',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Consolidate Splits',
        name: 'consolidateSplits',
        type: 'options',
        default: 'b:Both convert & consolidate',
        description: 'The consolidate splits value',
        options: [
            {
                name: 'Both Convert & Consolidate',
                value: 'b:Both convert & consolidate',
                description: 'Both convert & consolidate (code: b)'
            },
            {
                name: 'Consolidate',
                value: 'y:Consolidate',
                description: 'Consolidate (code: y)'
            },
            {
                name: 'Convert Main Codes to Split',
                value: 's:Convert main codes to split',
                description: 'Convert main codes to split (code: s)'
            },
            {
                name: 'Do Not Consolidate',
                value: 'n:Do not consolidate',
                description: 'Do not consolidate (code: n)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Price Change Indicator',
        name: 'priceChangeIndicator',
        type: 'number',
        default: '',
        description: 'Prc. Change Indicator.',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Fresh Chilled Stats',
        name: 'freshChilledStats',
        type: 'options',
        default: 'n:No',
        description: 'FC Stats',
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
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Perpetual Inventory Interval',
        name: 'perpetualInventoryInterval',
        type: 'number',
        default: '',
        description: 'Perpetual Inv. Interval.',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Central Store Replenishment',
        name: 'centralStoreReplenishment',
        type: 'options',
        default: 'n:No',
        description: 'The central store replenishment value',
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
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Retail Vat Indicator',
        name: 'retailVatIndicator',
        type: 'options',
        default: 'n:No',
        description: 'The retail vat indicator value',
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
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Exclude Batch Traceability',
        name: 'excludeBatchTraceability',
        type: 'options',
        default: 'n:No',
        description: 'Batch Traceability',
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
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Label Type',
        name: 'labelType',
        type: 'number',
        default: '',
        description: 'The label type value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Allow OS Ordering',
        name: 'allowOSOrdering',
        type: 'options',
        default: 'n:No',
        description: 'Allow O/S Ordering',
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
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Pallet Percentage Pick',
        name: 'palletPercentagePick',
        type: 'number',
        default: '',
        description: 'The pallet percentage pick value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Epos Department',
        name: 'eposDepartment',
        type: 'string',
        default: '',
        description: 'EPoS Dept',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Order Type',
        name: 'orderType',
        type: 'string',
        default: '',
        description: 'The order type value',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Vat Code',
        name: 'vatCode',
        type: 'string',
        default: '',
        description: 'The vat code value',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Number Of Weeks',
        name: 'numberOfWeeks',
        type: 'number',
        default: '',
        description: 'No. of weeks.',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Estimated Gross Margin Percentage',
        name: 'estimatedGrossMarginPercentage',
        type: 'number',
        default: '',
        description: 'Estimated Gross Margin %',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Exclude',
        name: 'exclude',
        type: 'options',
        default: 'n:No',
        description: 'Exclude Commodity Group',
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
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Scanned',
        name: 'scanned',
        type: 'options',
        default: 'n:No',
        description: 'The scanned value',
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
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Minimum Amount',
        name: 'minimumAmount',
        type: 'number',
        default: '',
        description: 'Min. Amount.',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Maximum Amount',
        name: 'maximumAmount',
        type: 'number',
        default: '',
        description: 'Max. Amount.',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Age Check Code',
        name: 'ageCheckCode',
        type: 'number',
        default: '',
        description: 'The age check code value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Cashier Age',
        name: 'cashierAge',
        type: 'number',
        default: '',
        description: 'The cashier age value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Customer Age',
        name: 'customerAge',
        type: 'number',
        default: '',
        description: 'The customer age value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Off Licensed',
        name: 'offLicensed',
        type: 'options',
        default: 'n:No',
        description: 'Off-Licensed',
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
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Cashier Warning',
        name: 'cashierWarning',
        type: 'string',
        default: '',
        description: 'The cashier warning value',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Epos Product Group',
        name: 'eposProductGroup',
        type: 'number',
        default: '',
        description: 'EPOS Prod.gp',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Till Message Required',
        name: 'tillMessageRequired',
        type: 'options',
        default: 'n:No',
        description: 'Till Message Reqd',
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
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Till Message',
        name: 'tillMessage',
        type: 'string',
        default: '',
        description: 'The till message value',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Cost Of Sales Division',
        name: 'costOfSalesDivision',
        type: 'string',
        default: '',
        description: 'The cost of sales division value',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Cost Of Sales NL Code',
        name: 'costOfSalesNLCode',
        type: 'number',
        default: '',
        description: 'The cost of sales nl code value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Cost Of Sales Cost Centre',
        name: 'costOfSalesCostCentre',
        type: 'number',
        default: '',
        description: 'The cost of sales cost centre value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Charging Summary Department',
        name: 'chargingSummaryDepartment',
        type: 'string',
        default: '',
        description: 'The charging summary department value',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Sell Margin1',
        name: 'sellMargin1',
        type: 'number',
        default: '',
        description: 'Sell Margin 1',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Sell Margin2',
        name: 'sellMargin2',
        type: 'number',
        default: '',
        description: 'Sell Margin 2',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Sell Margin3',
        name: 'sellMargin3',
        type: 'number',
        default: '',
        description: 'Sell Margin 3',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Sell Margin4',
        name: 'sellMargin4',
        type: 'number',
        default: '',
        description: 'Sell Margin 4',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Sell Margin5',
        name: 'sellMargin5',
        type: 'number',
        default: '',
        description: 'Sell Margin 5',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Rrp Margin1',
        name: 'rrpMargin1',
        type: 'number',
        default: '',
        description: 'RRP Margin 1',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Rrp Margin2',
        name: 'rrpMargin2',
        type: 'number',
        default: '',
        description: 'RRP Margin 2',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Rrp Margin3',
        name: 'rrpMargin3',
        type: 'number',
        default: '',
        description: 'RRP Margin 3',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Rrp Margin4',
        name: 'rrpMargin4',
        type: 'number',
        default: '',
        description: 'RRP Margin 4',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Rrp Margin5',
        name: 'rrpMargin5',
        type: 'number',
        default: '',
        description: 'RRP Margin 5',
        typeOptions: {
            minValue: -99.99
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Company Transfer Division Code',
        name: 'companyTransferDivisionCode',
        type: 'string',
        default: '',
        description: 'Transfer Division',
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Company Transfer Ledger Code',
        name: 'companyTransferLedgerCode',
        type: 'number',
        default: '',
        description: 'Transfer NL Code',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Company Transfer Cost Centre Code',
        name: 'companyTransferCostCentreCode',
        type: 'number',
        default: '',
        description: 'Transfer Cost Centre',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productGroups'],
                operation: ['productGroups:create'],
                createMode: ['advanced']
            }
        }
    }
];
