import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0006 - 24/08/26 - do not edit by hand

export const productDepartmentsOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['productDepartments'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'productDepartments:create',
                description: 'Create a productDepartment',
                action: 'Create a product department'
            },
            {
                name: 'Get',
                value: 'productDepartments:get',
                description: 'Get a productDepartment',
                action: 'Get a product department'
            },
            {
                name: 'List',
                value: 'productDepartments:list',
                description: 'List many productDepartments',
                action: 'List many product departments'
            },
            {
                name: 'Update',
                value: 'productDepartments:update',
                description: 'Update a productDepartment',
                action: 'Update a product department'
            },
        ],
        default: 'productDepartments:create',
    },
];


export const productDepartmentsReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the productDepartment',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'productDepartmentCode,lastUpdate,departmentDescription,normalExpense',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Additional Order Type',
                value: 'additionalOrderType',
                description: 'Include additional order type in the response'
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
                name: 'Department Description',
                value: 'departmentDescription',
                description: 'Include department description in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Main Order Type',
                value: 'mainOrderType',
                description: 'Include main order type in the response'
            },
            {
                name: 'Normal Expense',
                value: 'normalExpense',
                description: 'Include normal expense in the response'
            },
            {
                name: 'Pallet Percentage Pick',
                value: 'palletPercentagePick',
                description: 'Include pallet percentage pick in the response'
            },
            {
                name: 'Pi Interval',
                value: 'piInterval',
                description: 'Include pi interval in the response'
            },
            {
                name: 'Product Department Code',
                value: 'productDepartmentCode',
                description: 'Include product department code in the response'
            },
            {
                name: 'Product Division Code',
                value: 'productDivisionCode',
                description: 'Include product division code in the response'
            },
            {
                name: 'Report Sequence',
                value: 'reportSequence',
                description: 'Include report sequence in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:get']
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
                resource: ['productDepartments'],
                operation: ['productDepartments:get']
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
                resource: ['productDepartments'],
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
                resource: ['productDepartments'],
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
                resource: ['productDepartments'],
                operation: ['get']
            }
        }
    }
];

export const productDepartmentsUpdateFields: INodeProperties[] = [
    {
        displayName: 'Product Department Code',
        name: 'productDepartmentCode',
        type: 'string',
        default: '',
        description: 'Product Group Department',
        required: true,
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:update']
            }
        }
    },
    {
        displayName: 'Department Description',
        name: 'departmentDescription',
        type: 'string',
        default: '',
        description: 'Product Group Dept Desc',
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:update']
            }
        }
    },
    {
        displayName: 'Normal Expense',
        name: 'normalExpense',
        type: 'options',
        default: '1:Expense',
        description: 'Normal / Expense',
        options: [
            {
                name: 'Expense',
                value: '1:Expense',
                description: 'Expense (code: 1)'
            },
            {
                name: 'Normal',
                value: '0:Normal',
                description: 'Normal (code: 0)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:update']
            }
        }
    },
    {
        displayName: 'Main Order Type',
        name: 'mainOrderType',
        type: 'number',
        default: '',
        description: 'The main order type value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:update']
            }
        }
    },
    {
        displayName: 'Additional Order Type',
        name: 'additionalOrderType',
        type: 'number',
        default: '',
        description: '2nd Order Type',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:update']
            }
        }
    },
    {
        displayName: 'Product Division Code',
        name: 'productDivisionCode',
        type: 'string',
        default: '',
        description: 'Division',
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:update']
            }
        }
    },
    {
        displayName: 'Report Sequence',
        name: 'reportSequence',
        type: 'number',
        default: '',
        description: 'Pet report sequence',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:update']
            }
        }
    },
    {
        displayName: 'Pi Interval',
        name: 'piInterval',
        type: 'number',
        default: '',
        description: 'Perpetual Inv. Interval.',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:update']
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
                resource: ['productDepartments'],
                operation: ['productDepartments:update']
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
                resource: ['productDepartments'],
                operation: ['productDepartments:update']
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
                resource: ['productDepartments'],
                operation: ['productDepartments:update']
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
                resource: ['productDepartments'],
                operation: ['productDepartments:update']
            }
        }
    }
];

export const productDepartmentsListFields: INodeProperties[] = [
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
                resource: ['productDepartments'],
                operation: ['productDepartments:list']
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
                resource: ['productDepartments'],
                operation: ['productDepartments:list'],
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
                resource: ['productDepartments'],
                operation: ['productDepartments:list'],
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
                resource: ['productDepartments'],
                operation: ['productDepartments:list'],
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
                        default: 'additionalOrderType',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Additional Order Type',
                                value: 'additionalOrderType'
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
                                name: 'Department Description',
                                value: 'departmentDescription'
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
                                name: 'Main Order Type',
                                value: 'mainOrderType'
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
                                name: 'Normal Expense',
                                value: 'normalExpense'
                            },
                            {
                                name: 'Offset',
                                value: 'offset'
                            },
                            {
                                name: 'Pallet Percentage Pick',
                                value: 'palletPercentagePick'
                            },
                            {
                                name: 'Pi Interval',
                                value: 'piInterval'
                            },
                            {
                                name: 'Product Department Code',
                                value: 'productDepartmentCode'
                            },
                            {
                                name: 'Product Division Code',
                                value: 'productDivisionCode'
                            },
                            {
                                name: 'Report Sequence',
                                value: 'reportSequence'
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
                resource: ['productDepartments'],
                operation: ['productDepartments:list'],
                filterMode: ['raw']
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
                resource: ['productDepartments'],
                operation: ['productDepartments:list'],
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
        placeholder: 'productDepartmentCode,-lastUpdate',
        options: [
            {
                name: 'Additional Order Type (Ascending)',
                value: 'additionalOrderType',
                description: 'Sort by Additional Order Type in ascending order'
            },
            {
                name: 'Additional Order Type (Descending)',
                value: '-additionalOrderType',
                description: 'Sort by Additional Order Type in descending order'
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
                name: 'Department Description (Ascending)',
                value: 'departmentDescription',
                description: 'Sort by Department Description in ascending order'
            },
            {
                name: 'Department Description (Descending)',
                value: '-departmentDescription',
                description: 'Sort by Department Description in descending order'
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
                name: 'Main Order Type (Ascending)',
                value: 'mainOrderType',
                description: 'Sort by Main Order Type in ascending order'
            },
            {
                name: 'Main Order Type (Descending)',
                value: '-mainOrderType',
                description: 'Sort by Main Order Type in descending order'
            },
            {
                name: 'Normal Expense (Ascending)',
                value: 'normalExpense',
                description: 'Sort by Normal Expense in ascending order'
            },
            {
                name: 'Normal Expense (Descending)',
                value: '-normalExpense',
                description: 'Sort by Normal Expense in descending order'
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
                name: 'Pi Interval (Ascending)',
                value: 'piInterval',
                description: 'Sort by Pi Interval in ascending order'
            },
            {
                name: 'Pi Interval (Descending)',
                value: '-piInterval',
                description: 'Sort by Pi Interval in descending order'
            },
            {
                name: 'Product Department Code (Ascending)',
                value: 'productDepartmentCode',
                description: 'Sort by Product Department Code in ascending order'
            },
            {
                name: 'Product Department Code (Descending)',
                value: '-productDepartmentCode',
                description: 'Sort by Product Department Code in descending order'
            },
            {
                name: 'Product Division Code (Ascending)',
                value: 'productDivisionCode',
                description: 'Sort by Product Division Code in ascending order'
            },
            {
                name: 'Product Division Code (Descending)',
                value: '-productDivisionCode',
                description: 'Sort by Product Division Code in descending order'
            },
            {
                name: 'Report Sequence (Ascending)',
                value: 'reportSequence',
                description: 'Sort by Report Sequence in ascending order'
            },
            {
                name: 'Report Sequence (Descending)',
                value: '-reportSequence',
                description: 'Sort by Report Sequence in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:list'],
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
                resource: ['productDepartments'],
                operation: ['productDepartments:list'],
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
                name: 'Additional Order Type',
                value: 'additionalOrderType',
                description: 'Include additional order type in the response'
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
                name: 'Department Description',
                value: 'departmentDescription',
                description: 'Include department description in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Main Order Type',
                value: 'mainOrderType',
                description: 'Include main order type in the response'
            },
            {
                name: 'Normal Expense',
                value: 'normalExpense',
                description: 'Include normal expense in the response'
            },
            {
                name: 'Pallet Percentage Pick',
                value: 'palletPercentagePick',
                description: 'Include pallet percentage pick in the response'
            },
            {
                name: 'Pi Interval',
                value: 'piInterval',
                description: 'Include pi interval in the response'
            },
            {
                name: 'Product Department Code',
                value: 'productDepartmentCode',
                description: 'Include product department code in the response'
            },
            {
                name: 'Product Division Code',
                value: 'productDivisionCode',
                description: 'Include product division code in the response'
            },
            {
                name: 'Report Sequence',
                value: 'reportSequence',
                description: 'Include report sequence in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:list'],
                filterMode: ['common']
            }
        }
    }
];

export const productDepartmentsCreateFields: INodeProperties[] = [
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
                resource: ['productDepartments'],
                operation: ['productDepartments:create']
            }
        }
    },
    {
        displayName: 'JSON Body',
        name: 'jsonBody',
        type: 'json',
        default: '{}',
        description: 'Raw JSON body for creating product department records. Provide the complete request payload.',
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:create'],
                createMode: ['json']
            }
        },
        placeholder: `{
  "productDepartments": [
    {
      // Add your product department fields here
    }
  ]
}`
    },
    {
        displayName: 'Product Department Code',
        name: 'productDepartmentCode',
        type: 'string',
        default: '',
        description: 'Product Group Department',
        required: true,
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Product Division Code',
        name: 'productDivisionCode',
        type: 'string',
        default: '',
        description: 'Division',
        required: true,
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Department Description',
        name: 'departmentDescription',
        type: 'string',
        default: '',
        description: 'Product Group Dept Desc',
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Normal Expense',
        name: 'normalExpense',
        type: 'options',
        default: '1:Expense',
        description: 'Normal / Expense',
        options: [
            {
                name: 'Expense',
                value: '1:Expense',
                description: 'Expense (code: 1)'
            },
            {
                name: 'Normal',
                value: '0:Normal',
                description: 'Normal (code: 0)'
            }
        ],
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Main Order Type',
        name: 'mainOrderType',
        type: 'number',
        default: '',
        description: 'The main order type value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Additional Order Type',
        name: 'additionalOrderType',
        type: 'number',
        default: '',
        description: '2nd Order Type',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Report Sequence',
        name: 'reportSequence',
        type: 'number',
        default: '',
        description: 'Pet report sequence',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Pi Interval',
        name: 'piInterval',
        type: 'number',
        default: '',
        description: 'Perpetual Inv. Interval.',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['productDepartments'],
                operation: ['productDepartments:create'],
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
                resource: ['productDepartments'],
                operation: ['productDepartments:create'],
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
                resource: ['productDepartments'],
                operation: ['productDepartments:create'],
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
                resource: ['productDepartments'],
                operation: ['productDepartments:create'],
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
                resource: ['productDepartments'],
                operation: ['productDepartments:create'],
                createMode: ['advanced']
            }
        }
    }
];
