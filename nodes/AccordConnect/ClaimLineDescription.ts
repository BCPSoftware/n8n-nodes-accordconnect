import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0007 - 25/08/26 - do not edit by hand

export const claimLinesOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['claimLines'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'claimLines:get',
                description: 'Get a claimLine',
                action: 'Get a claim line'
            },
            {
                name: 'List',
                value: 'claimLines:list',
                description: 'List many claimLines',
                action: 'List many claim lines'
            },
        ],
        default: 'claimLines:get',
    },
];


export const claimLinesReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the claimLine',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['claimLines'],
                operation: ['claimLines:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'depot,claimNumber,claimLine,lastUpdate',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Assembler',
                value: 'assembler',
                description: 'Include assembler in the response'
            },
            {
                name: 'Claim Line',
                value: 'claimLine',
                description: 'Include claim line in the response'
            },
            {
                name: 'Claim Number',
                value: 'claimNumber',
                description: 'Include claim number in the response'
            },
            {
                name: 'Correct Price',
                value: 'correctPrice',
                description: 'Include correct price in the response'
            },
            {
                name: 'Cost',
                value: 'cost',
                description: 'Include cost in the response'
            },
            {
                name: 'Debit Credit',
                value: 'debitCredit',
                description: 'Include debit credit in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Driver',
                value: 'driver',
                description: 'Include driver in the response'
            },
            {
                name: 'Fighting Brand',
                value: 'fightingBrand',
                description: 'Include fighting brand in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Line Message',
                value: 'lineMessage',
                description: 'Include line message in the response'
            },
            {
                name: 'Line Value',
                value: 'lineValue',
                description: 'Include line value in the response'
            },
            {
                name: 'Original Quantity',
                value: 'originalQuantity',
                description: 'Include original quantity in the response'
            },
            {
                name: 'Override WSV',
                value: 'overrideWSV',
                description: 'Include override wsv in the response'
            },
            {
                name: 'Pack Size',
                value: 'packSize',
                description: 'Include pack size in the response'
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
                name: 'Promotion Number',
                value: 'promotionNumber',
                description: 'Include promotion number in the response'
            },
            {
                name: 'Promotion Type',
                value: 'promotionType',
                description: 'Include promotion type in the response'
            },
            {
                name: 'Quantity Discount',
                value: 'quantityDiscount',
                description: 'Include quantity discount in the response'
            },
            {
                name: 'Quantity Type',
                value: 'quantityType',
                description: 'Include quantity type in the response'
            },
            {
                name: 'Reason Code',
                value: 'reasonCode',
                description: 'Include reason code in the response'
            },
            {
                name: 'Reason Description',
                value: 'reasonDescription',
                description: 'Include reason description in the response'
            },
            {
                name: 'Retail Pack',
                value: 'retailPack',
                description: 'Include retail pack in the response'
            },
            {
                name: 'Return To Stock',
                value: 'returnToStock',
                description: 'Include return to stock in the response'
            },
            {
                name: 'Rsp',
                value: 'rsp',
                description: 'Include rsp in the response'
            },
            {
                name: 'Sent Product Code',
                value: 'sentProductCode',
                description: 'Include sent product code in the response'
            },
            {
                name: 'Sent Quantity',
                value: 'sentQuantity',
                description: 'Include sent quantity in the response'
            },
            {
                name: 'Surchargable',
                value: 'surchargable',
                description: 'Include surchargable in the response'
            },
            {
                name: 'Weight',
                value: 'weight',
                description: 'Include weight in the response'
            },
            {
                name: 'Which Price',
                value: 'whichPrice',
                description: 'Include which price in the response'
            },
            {
                name: 'Wsp',
                value: 'wsp',
                description: 'Include wsp in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['claimLines'],
                operation: ['claimLines:get']
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
                resource: ['claimLines'],
                operation: ['claimLines:get']
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
                resource: ['claimLines'],
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
                resource: ['claimLines'],
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
                resource: ['claimLines'],
                operation: ['get']
            }
        }
    }
];

export const claimLinesListFields: INodeProperties[] = [
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
                resource: ['claimLines'],
                operation: ['claimLines:list']
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
                resource: ['claimLines'],
                operation: ['claimLines:list'],
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
                resource: ['claimLines'],
                operation: ['claimLines:list'],
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
                resource: ['claimLines'],
                operation: ['claimLines:list'],
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
                        default: 'assembler',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Assembler',
                                value: 'assembler'
                            },
                            {
                                name: 'Claim Line',
                                value: 'claimLine'
                            },
                            {
                                name: 'Claim Number',
                                value: 'claimNumber'
                            },
                            {
                                name: 'Correct Price',
                                value: 'correctPrice'
                            },
                            {
                                name: 'Cost',
                                value: 'cost'
                            },
                            {
                                name: 'Debit Credit',
                                value: 'debitCredit'
                            },
                            {
                                name: 'Depot',
                                value: 'depot'
                            },
                            {
                                name: 'Driver',
                                value: 'driver'
                            },
                            {
                                name: 'Fighting Brand',
                                value: 'fightingBrand'
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
                                name: 'Line Message',
                                value: 'lineMessage'
                            },
                            {
                                name: 'Line Value',
                                value: 'lineValue'
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
                                name: 'Original Quantity',
                                value: 'originalQuantity'
                            },
                            {
                                name: 'Override WSV',
                                value: 'overrideWSV'
                            },
                            {
                                name: 'Pack Size',
                                value: 'packSize'
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
                                name: 'Promotion Number',
                                value: 'promotionNumber'
                            },
                            {
                                name: 'Promotion Type',
                                value: 'promotionType'
                            },
                            {
                                name: 'Quantity Discount',
                                value: 'quantityDiscount'
                            },
                            {
                                name: 'Quantity Type',
                                value: 'quantityType'
                            },
                            {
                                name: 'Reason Code',
                                value: 'reasonCode'
                            },
                            {
                                name: 'Reason Description',
                                value: 'reasonDescription'
                            },
                            {
                                name: 'Retail Pack',
                                value: 'retailPack'
                            },
                            {
                                name: 'Return To Stock',
                                value: 'returnToStock'
                            },
                            {
                                name: 'Rsp',
                                value: 'rsp'
                            },
                            {
                                name: 'Sent Product Code',
                                value: 'sentProductCode'
                            },
                            {
                                name: 'Sent Quantity',
                                value: 'sentQuantity'
                            },
                            {
                                name: 'Surchargable',
                                value: 'surchargable'
                            },
                            {
                                name: 'Timeout',
                                value: 'timeout'
                            },
                            {
                                name: 'Weight',
                                value: 'weight'
                            },
                            {
                                name: 'Which Price',
                                value: 'whichPrice'
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
                resource: ['claimLines'],
                operation: ['claimLines:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Claim Number',
        name: 'claimNumber',
        type: 'number',
        default: '',
        description: 'Claim Number (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        typeOptions: {
            minValue: 0
        },
        placeholder: '155',
        displayOptions: {
            show: {
                resource: ['claimLines'],
                operation: ['claimLines:list'],
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
                resource: ['claimLines'],
                operation: ['claimLines:list'],
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
        placeholder: '1',
        displayOptions: {
            show: {
                resource: ['claimLines'],
                operation: ['claimLines:list'],
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
        placeholder: 'depot,-claimNumber',
        options: [
            {
                name: 'Assembler (Ascending)',
                value: 'assembler',
                description: 'Sort by Assembler in ascending order'
            },
            {
                name: 'Assembler (Descending)',
                value: '-assembler',
                description: 'Sort by Assembler in descending order'
            },
            {
                name: 'Claim Line (Ascending)',
                value: 'claimLine',
                description: 'Sort by Claim Line in ascending order'
            },
            {
                name: 'Claim Line (Descending)',
                value: '-claimLine',
                description: 'Sort by Claim Line in descending order'
            },
            {
                name: 'Claim Number (Ascending)',
                value: 'claimNumber',
                description: 'Sort by Claim Number in ascending order'
            },
            {
                name: 'Claim Number (Descending)',
                value: '-claimNumber',
                description: 'Sort by Claim Number in descending order'
            },
            {
                name: 'Correct Price (Ascending)',
                value: 'correctPrice',
                description: 'Sort by Correct Price in ascending order'
            },
            {
                name: 'Correct Price (Descending)',
                value: '-correctPrice',
                description: 'Sort by Correct Price in descending order'
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
                name: 'Debit Credit (Ascending)',
                value: 'debitCredit',
                description: 'Sort by Debit Credit in ascending order'
            },
            {
                name: 'Debit Credit (Descending)',
                value: '-debitCredit',
                description: 'Sort by Debit Credit in descending order'
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
                name: 'Fighting Brand (Ascending)',
                value: 'fightingBrand',
                description: 'Sort by Fighting Brand in ascending order'
            },
            {
                name: 'Fighting Brand (Descending)',
                value: '-fightingBrand',
                description: 'Sort by Fighting Brand in descending order'
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
                name: 'Line Message (Ascending)',
                value: 'lineMessage',
                description: 'Sort by Line Message in ascending order'
            },
            {
                name: 'Line Message (Descending)',
                value: '-lineMessage',
                description: 'Sort by Line Message in descending order'
            },
            {
                name: 'Line Value (Ascending)',
                value: 'lineValue',
                description: 'Sort by Line Value in ascending order'
            },
            {
                name: 'Line Value (Descending)',
                value: '-lineValue',
                description: 'Sort by Line Value in descending order'
            },
            {
                name: 'Original Quantity (Ascending)',
                value: 'originalQuantity',
                description: 'Sort by Original Quantity in ascending order'
            },
            {
                name: 'Original Quantity (Descending)',
                value: '-originalQuantity',
                description: 'Sort by Original Quantity in descending order'
            },
            {
                name: 'Override WSV (Ascending)',
                value: 'overrideWSV',
                description: 'Sort by Override WSV in ascending order'
            },
            {
                name: 'Override WSV (Descending)',
                value: '-overrideWSV',
                description: 'Sort by Override WSV in descending order'
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
                name: 'Quantity Discount (Ascending)',
                value: 'quantityDiscount',
                description: 'Sort by Quantity Discount in ascending order'
            },
            {
                name: 'Quantity Discount (Descending)',
                value: '-quantityDiscount',
                description: 'Sort by Quantity Discount in descending order'
            },
            {
                name: 'Quantity Type (Ascending)',
                value: 'quantityType',
                description: 'Sort by Quantity Type in ascending order'
            },
            {
                name: 'Quantity Type (Descending)',
                value: '-quantityType',
                description: 'Sort by Quantity Type in descending order'
            },
            {
                name: 'Reason Code (Ascending)',
                value: 'reasonCode',
                description: 'Sort by Reason Code in ascending order'
            },
            {
                name: 'Reason Code (Descending)',
                value: '-reasonCode',
                description: 'Sort by Reason Code in descending order'
            },
            {
                name: 'Reason Description (Ascending)',
                value: 'reasonDescription',
                description: 'Sort by Reason Description in ascending order'
            },
            {
                name: 'Reason Description (Descending)',
                value: '-reasonDescription',
                description: 'Sort by Reason Description in descending order'
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
                name: 'Return To Stock (Ascending)',
                value: 'returnToStock',
                description: 'Sort by Return To Stock in ascending order'
            },
            {
                name: 'Return To Stock (Descending)',
                value: '-returnToStock',
                description: 'Sort by Return To Stock in descending order'
            },
            {
                name: 'Rsp (Ascending)',
                value: 'rsp',
                description: 'Sort by Rsp in ascending order'
            },
            {
                name: 'Rsp (Descending)',
                value: '-rsp',
                description: 'Sort by Rsp in descending order'
            },
            {
                name: 'Sent Product Code (Ascending)',
                value: 'sentProductCode',
                description: 'Sort by Sent Product Code in ascending order'
            },
            {
                name: 'Sent Product Code (Descending)',
                value: '-sentProductCode',
                description: 'Sort by Sent Product Code in descending order'
            },
            {
                name: 'Sent Quantity (Ascending)',
                value: 'sentQuantity',
                description: 'Sort by Sent Quantity in ascending order'
            },
            {
                name: 'Sent Quantity (Descending)',
                value: '-sentQuantity',
                description: 'Sort by Sent Quantity in descending order'
            },
            {
                name: 'Surchargable (Ascending)',
                value: 'surchargable',
                description: 'Sort by Surchargable in ascending order'
            },
            {
                name: 'Surchargable (Descending)',
                value: '-surchargable',
                description: 'Sort by Surchargable in descending order'
            },
            {
                name: 'Weight (Ascending)',
                value: 'weight',
                description: 'Sort by Weight in ascending order'
            },
            {
                name: 'Weight (Descending)',
                value: '-weight',
                description: 'Sort by Weight in descending order'
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
                resource: ['claimLines'],
                operation: ['claimLines:list'],
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
                resource: ['claimLines'],
                operation: ['claimLines:list'],
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
                name: 'Assembler',
                value: 'assembler',
                description: 'Include assembler in the response'
            },
            {
                name: 'Claim Line',
                value: 'claimLine',
                description: 'Include claim line in the response'
            },
            {
                name: 'Claim Number',
                value: 'claimNumber',
                description: 'Include claim number in the response'
            },
            {
                name: 'Correct Price',
                value: 'correctPrice',
                description: 'Include correct price in the response'
            },
            {
                name: 'Cost',
                value: 'cost',
                description: 'Include cost in the response'
            },
            {
                name: 'Debit Credit',
                value: 'debitCredit',
                description: 'Include debit credit in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Driver',
                value: 'driver',
                description: 'Include driver in the response'
            },
            {
                name: 'Fighting Brand',
                value: 'fightingBrand',
                description: 'Include fighting brand in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Line Message',
                value: 'lineMessage',
                description: 'Include line message in the response'
            },
            {
                name: 'Line Value',
                value: 'lineValue',
                description: 'Include line value in the response'
            },
            {
                name: 'Original Quantity',
                value: 'originalQuantity',
                description: 'Include original quantity in the response'
            },
            {
                name: 'Override WSV',
                value: 'overrideWSV',
                description: 'Include override wsv in the response'
            },
            {
                name: 'Pack Size',
                value: 'packSize',
                description: 'Include pack size in the response'
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
                name: 'Promotion Number',
                value: 'promotionNumber',
                description: 'Include promotion number in the response'
            },
            {
                name: 'Promotion Type',
                value: 'promotionType',
                description: 'Include promotion type in the response'
            },
            {
                name: 'Quantity Discount',
                value: 'quantityDiscount',
                description: 'Include quantity discount in the response'
            },
            {
                name: 'Quantity Type',
                value: 'quantityType',
                description: 'Include quantity type in the response'
            },
            {
                name: 'Reason Code',
                value: 'reasonCode',
                description: 'Include reason code in the response'
            },
            {
                name: 'Reason Description',
                value: 'reasonDescription',
                description: 'Include reason description in the response'
            },
            {
                name: 'Retail Pack',
                value: 'retailPack',
                description: 'Include retail pack in the response'
            },
            {
                name: 'Return To Stock',
                value: 'returnToStock',
                description: 'Include return to stock in the response'
            },
            {
                name: 'Rsp',
                value: 'rsp',
                description: 'Include rsp in the response'
            },
            {
                name: 'Sent Product Code',
                value: 'sentProductCode',
                description: 'Include sent product code in the response'
            },
            {
                name: 'Sent Quantity',
                value: 'sentQuantity',
                description: 'Include sent quantity in the response'
            },
            {
                name: 'Surchargable',
                value: 'surchargable',
                description: 'Include surchargable in the response'
            },
            {
                name: 'Weight',
                value: 'weight',
                description: 'Include weight in the response'
            },
            {
                name: 'Which Price',
                value: 'whichPrice',
                description: 'Include which price in the response'
            },
            {
                name: 'Wsp',
                value: 'wsp',
                description: 'Include wsp in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['claimLines'],
                operation: ['claimLines:list'],
                filterMode: ['common']
            }
        }
    }
];
