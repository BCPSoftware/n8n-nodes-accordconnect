import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0005 - 21/08/26 - do not edit by hand

export const contractPricesOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['contractPrices'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'contractPrices:get',
                description: 'Get a contractPrice',
                action: 'Get a contract price'
            },
            {
                name: 'List',
                value: 'contractPrices:list',
                description: 'List many contractPrices',
                action: 'List many contract prices'
            },
        ],
        default: 'contractPrices:get',
    },
];


export const contractPricesReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the contractPrice',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['contractPrices'],
                operation: ['contractPrices:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'depot,contractGroup,customerCode,contractType',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Activation Date',
                value: 'activationDate',
                description: 'Include activation date in the response'
            },
            {
                name: 'Claim Back',
                value: 'claimBack',
                description: 'Include claim back in the response'
            },
            {
                name: 'Contract Group',
                value: 'contractGroup',
                description: 'Include contract group in the response'
            },
            {
                name: 'Contract RRP',
                value: 'contractRRP',
                description: 'Include contract rrp in the response'
            },
            {
                name: 'Contract Type',
                value: 'contractType',
                description: 'Include contract type in the response'
            },
            {
                name: 'Cost',
                value: 'cost',
                description: 'Include cost in the response'
            },
            {
                name: 'Cost Uplift',
                value: 'costUplift',
                description: 'Include cost uplift in the response'
            },
            {
                name: 'Customer Code',
                value: 'customerCode',
                description: 'Include customer code in the response'
            },
            {
                name: 'De Activation Date',
                value: 'deActivationDate',
                description: 'Include de activation date in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Discount',
                value: 'discount',
                description: 'Include discount in the response'
            },
            {
                name: 'Input Date',
                value: 'inputDate',
                description: 'Include input date in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'List Price',
                value: 'listPrice',
                description: 'Include list price in the response'
            },
            {
                name: 'Nett Cost',
                value: 'nettCost',
                description: 'Include nett cost in the response'
            },
            {
                name: 'Online',
                value: 'online',
                description: 'Include online in the response'
            },
            {
                name: 'Product Code',
                value: 'productCode',
                description: 'Include product code in the response'
            },
            {
                name: 'Retro Bonus',
                value: 'retroBonus',
                description: 'Include retro bonus in the response'
            },
            {
                name: 'Sales Last Sold',
                value: 'salesLastSold',
                description: 'Include sales last sold in the response'
            },
            {
                name: 'Sales List Value',
                value: 'salesListValue',
                description: 'Include sales list value in the response'
            },
            {
                name: 'Sales Quantity',
                value: 'salesQuantity',
                description: 'Include sales quantity in the response'
            },
            {
                name: 'Sales Quantity Inners',
                value: 'salesQuantityInners',
                description: 'Include sales quantity inners in the response'
            },
            {
                name: 'Sales Value',
                value: 'salesValue',
                description: 'Include sales value in the response'
            },
            {
                name: 'Sales Weight',
                value: 'salesWeight',
                description: 'Include sales weight in the response'
            },
            {
                name: 'Wsp',
                value: 'wsp',
                description: 'Include wsp in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['contractPrices'],
                operation: ['contractPrices:get']
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
                resource: ['contractPrices'],
                operation: ['contractPrices:get']
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
                resource: ['contractPrices'],
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
                resource: ['contractPrices'],
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
                resource: ['contractPrices'],
                operation: ['get']
            }
        }
    }
];

export const contractPricesListFields: INodeProperties[] = [
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
                resource: ['contractPrices'],
                operation: ['contractPrices:list']
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
                resource: ['contractPrices'],
                operation: ['contractPrices:list'],
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
                resource: ['contractPrices'],
                operation: ['contractPrices:list'],
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
                resource: ['contractPrices'],
                operation: ['contractPrices:list'],
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
                        default: 'activationDate',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Activation Date',
                                value: 'activationDate'
                            },
                            {
                                name: 'Claim Back',
                                value: 'claimBack'
                            },
                            {
                                name: 'Contract Group',
                                value: 'contractGroup'
                            },
                            {
                                name: 'Contract RRP',
                                value: 'contractRRP'
                            },
                            {
                                name: 'Contract Type',
                                value: 'contractType'
                            },
                            {
                                name: 'Cost',
                                value: 'cost'
                            },
                            {
                                name: 'Cost Uplift',
                                value: 'costUplift'
                            },
                            {
                                name: 'Customer Code',
                                value: 'customerCode'
                            },
                            {
                                name: 'De Activation Date',
                                value: 'deActivationDate'
                            },
                            {
                                name: 'Depot',
                                value: 'depot'
                            },
                            {
                                name: 'Discount',
                                value: 'discount'
                            },
                            {
                                name: 'Hide Nested Keys',
                                value: 'hideNestedKeys'
                            },
                            {
                                name: 'Input Date',
                                value: 'inputDate'
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
                                name: 'List Price',
                                value: 'listPrice'
                            },
                            {
                                name: 'Nested',
                                value: 'nested'
                            },
                            {
                                name: 'Nett Cost',
                                value: 'nettCost'
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
                                name: 'Online',
                                value: 'online'
                            },
                            {
                                name: 'Product Code',
                                value: 'productCode'
                            },
                            {
                                name: 'Retro Bonus',
                                value: 'retroBonus'
                            },
                            {
                                name: 'Sales Last Sold',
                                value: 'salesLastSold'
                            },
                            {
                                name: 'Sales List Value',
                                value: 'salesListValue'
                            },
                            {
                                name: 'Sales Quantity',
                                value: 'salesQuantity'
                            },
                            {
                                name: 'Sales Quantity Inners',
                                value: 'salesQuantityInners'
                            },
                            {
                                name: 'Sales Value',
                                value: 'salesValue'
                            },
                            {
                                name: 'Sales Weight',
                                value: 'salesWeight'
                            },
                            {
                                name: 'Timeout',
                                value: 'timeout'
                            },
                            {
                                name: 'Wsp',
                                value: 'wsp'
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
                resource: ['contractPrices'],
                operation: ['contractPrices:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Contract Group',
        name: 'contractGroup',
        type: 'string',
        default: '',
        description: 'Contract Group [blank if a customer contract] (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'a001',
        displayOptions: {
            show: {
                resource: ['contractPrices'],
                operation: ['contractPrices:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Product Code',
        name: 'productCode',
        type: 'string',
        default: '',
        description: 'Product (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: '100001',
        displayOptions: {
            show: {
                resource: ['contractPrices'],
                operation: ['contractPrices:list'],
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
                resource: ['contractPrices'],
                operation: ['contractPrices:list'],
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
        placeholder: 'depot,-contractGroup',
        options: [
            {
                name: 'Activation Date (Ascending)',
                value: 'activationDate',
                description: 'Sort by Activation Date in ascending order'
            },
            {
                name: 'Activation Date (Descending)',
                value: '-activationDate',
                description: 'Sort by Activation Date in descending order'
            },
            {
                name: 'Claim Back (Ascending)',
                value: 'claimBack',
                description: 'Sort by Claim Back in ascending order'
            },
            {
                name: 'Claim Back (Descending)',
                value: '-claimBack',
                description: 'Sort by Claim Back in descending order'
            },
            {
                name: 'Contract Group (Ascending)',
                value: 'contractGroup',
                description: 'Sort by Contract Group in ascending order'
            },
            {
                name: 'Contract Group (Descending)',
                value: '-contractGroup',
                description: 'Sort by Contract Group in descending order'
            },
            {
                name: 'Contract RRP (Ascending)',
                value: 'contractRRP',
                description: 'Sort by Contract RRP in ascending order'
            },
            {
                name: 'Contract RRP (Descending)',
                value: '-contractRRP',
                description: 'Sort by Contract RRP in descending order'
            },
            {
                name: 'Contract Type (Ascending)',
                value: 'contractType',
                description: 'Sort by Contract Type in ascending order'
            },
            {
                name: 'Contract Type (Descending)',
                value: '-contractType',
                description: 'Sort by Contract Type in descending order'
            },
            {
                name: 'Cost (Ascending)',
                value: 'cost',
                description: 'Sort by Cost in ascending order'
            },
            {
                name: 'Cost (Descending)',
                value: '-cost',
                description: 'Sort by Cost in descending order'
            },
            {
                name: 'Cost Uplift (Ascending)',
                value: 'costUplift',
                description: 'Sort by Cost Uplift in ascending order'
            },
            {
                name: 'Cost Uplift (Descending)',
                value: '-costUplift',
                description: 'Sort by Cost Uplift in descending order'
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
                name: 'De Activation Date (Ascending)',
                value: 'deActivationDate',
                description: 'Sort by De Activation Date in ascending order'
            },
            {
                name: 'De Activation Date (Descending)',
                value: '-deActivationDate',
                description: 'Sort by De Activation Date in descending order'
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
                name: 'Discount (Ascending)',
                value: 'discount',
                description: 'Sort by Discount in ascending order'
            },
            {
                name: 'Discount (Descending)',
                value: '-discount',
                description: 'Sort by Discount in descending order'
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
                name: 'List Price (Ascending)',
                value: 'listPrice',
                description: 'Sort by List Price in ascending order'
            },
            {
                name: 'List Price (Descending)',
                value: '-listPrice',
                description: 'Sort by List Price in descending order'
            },
            {
                name: 'Nett Cost (Ascending)',
                value: 'nettCost',
                description: 'Sort by Nett Cost in ascending order'
            },
            {
                name: 'Nett Cost (Descending)',
                value: '-nettCost',
                description: 'Sort by Nett Cost in descending order'
            },
            {
                name: 'Online (Ascending)',
                value: 'online',
                description: 'Sort by Online in ascending order'
            },
            {
                name: 'Online (Descending)',
                value: '-online',
                description: 'Sort by Online in descending order'
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
                name: 'Retro Bonus (Ascending)',
                value: 'retroBonus',
                description: 'Sort by Retro Bonus in ascending order'
            },
            {
                name: 'Retro Bonus (Descending)',
                value: '-retroBonus',
                description: 'Sort by Retro Bonus in descending order'
            },
            {
                name: 'Sales Last Sold (Ascending)',
                value: 'salesLastSold',
                description: 'Sort by Sales Last Sold in ascending order'
            },
            {
                name: 'Sales Last Sold (Descending)',
                value: '-salesLastSold',
                description: 'Sort by Sales Last Sold in descending order'
            },
            {
                name: 'Sales List Value (Ascending)',
                value: 'salesListValue',
                description: 'Sort by Sales List Value in ascending order'
            },
            {
                name: 'Sales List Value (Descending)',
                value: '-salesListValue',
                description: 'Sort by Sales List Value in descending order'
            },
            {
                name: 'Sales Quantity (Ascending)',
                value: 'salesQuantity',
                description: 'Sort by Sales Quantity in ascending order'
            },
            {
                name: 'Sales Quantity (Descending)',
                value: '-salesQuantity',
                description: 'Sort by Sales Quantity in descending order'
            },
            {
                name: 'Sales Quantity Inners (Ascending)',
                value: 'salesQuantityInners',
                description: 'Sort by Sales Quantity Inners in ascending order'
            },
            {
                name: 'Sales Quantity Inners (Descending)',
                value: '-salesQuantityInners',
                description: 'Sort by Sales Quantity Inners in descending order'
            },
            {
                name: 'Sales Value (Ascending)',
                value: 'salesValue',
                description: 'Sort by Sales Value in ascending order'
            },
            {
                name: 'Sales Value (Descending)',
                value: '-salesValue',
                description: 'Sort by Sales Value in descending order'
            },
            {
                name: 'Sales Weight (Ascending)',
                value: 'salesWeight',
                description: 'Sort by Sales Weight in ascending order'
            },
            {
                name: 'Sales Weight (Descending)',
                value: '-salesWeight',
                description: 'Sort by Sales Weight in descending order'
            },
            {
                name: 'Wsp (Ascending)',
                value: 'wsp',
                description: 'Sort by Wsp in ascending order'
            },
            {
                name: 'Wsp (Descending)',
                value: '-wsp',
                description: 'Sort by Wsp in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['contractPrices'],
                operation: ['contractPrices:list'],
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
                resource: ['contractPrices'],
                operation: ['contractPrices:list'],
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
                name: 'Activation Date',
                value: 'activationDate',
                description: 'Include activation date in the response'
            },
            {
                name: 'Claim Back',
                value: 'claimBack',
                description: 'Include claim back in the response'
            },
            {
                name: 'Contract Group',
                value: 'contractGroup',
                description: 'Include contract group in the response'
            },
            {
                name: 'Contract RRP',
                value: 'contractRRP',
                description: 'Include contract rrp in the response'
            },
            {
                name: 'Contract Type',
                value: 'contractType',
                description: 'Include contract type in the response'
            },
            {
                name: 'Cost',
                value: 'cost',
                description: 'Include cost in the response'
            },
            {
                name: 'Cost Uplift',
                value: 'costUplift',
                description: 'Include cost uplift in the response'
            },
            {
                name: 'Customer Code',
                value: 'customerCode',
                description: 'Include customer code in the response'
            },
            {
                name: 'De Activation Date',
                value: 'deActivationDate',
                description: 'Include de activation date in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Discount',
                value: 'discount',
                description: 'Include discount in the response'
            },
            {
                name: 'Input Date',
                value: 'inputDate',
                description: 'Include input date in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'List Price',
                value: 'listPrice',
                description: 'Include list price in the response'
            },
            {
                name: 'Nett Cost',
                value: 'nettCost',
                description: 'Include nett cost in the response'
            },
            {
                name: 'Online',
                value: 'online',
                description: 'Include online in the response'
            },
            {
                name: 'Product Code',
                value: 'productCode',
                description: 'Include product code in the response'
            },
            {
                name: 'Retro Bonus',
                value: 'retroBonus',
                description: 'Include retro bonus in the response'
            },
            {
                name: 'Sales Last Sold',
                value: 'salesLastSold',
                description: 'Include sales last sold in the response'
            },
            {
                name: 'Sales List Value',
                value: 'salesListValue',
                description: 'Include sales list value in the response'
            },
            {
                name: 'Sales Quantity',
                value: 'salesQuantity',
                description: 'Include sales quantity in the response'
            },
            {
                name: 'Sales Quantity Inners',
                value: 'salesQuantityInners',
                description: 'Include sales quantity inners in the response'
            },
            {
                name: 'Sales Value',
                value: 'salesValue',
                description: 'Include sales value in the response'
            },
            {
                name: 'Sales Weight',
                value: 'salesWeight',
                description: 'Include sales weight in the response'
            },
            {
                name: 'Wsp',
                value: 'wsp',
                description: 'Include wsp in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['contractPrices'],
                operation: ['contractPrices:list'],
                filterMode: ['common']
            }
        }
    }
];
