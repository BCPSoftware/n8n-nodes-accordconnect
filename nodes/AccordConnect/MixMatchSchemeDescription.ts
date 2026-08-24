import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0005 - 21/08/26 - do not edit by hand

export const mixMatchSchemesOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['mixMatchSchemes'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'mixMatchSchemes:get',
                description: 'Get a mixMatchScheme',
                action: 'Get a mix match scheme'
            },
            {
                name: 'List',
                value: 'mixMatchSchemes:list',
                description: 'List many mixMatchSchemes',
                action: 'List many mix match schemes'
            },
        ],
        default: 'mixMatchSchemes:get',
    },
];


// IncludeLines URL mapping configuration
export const includeLinesConfig = {
    linesResource: 'mixMatchLines',
    getEndpoint: '/mixMatchSchemes/{id}/mixMatchLines',
    listEndpoint: '/mixMatchSchemes/mixMatchLines',
    description: 'mix match line items'
};


export const mixMatchSchemesReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the mixMatchScheme',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['mixMatchSchemes'],
                operation: ['mixMatchSchemes:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'mixMatchCode,lastUpdate,schemeStatus,schemeDescription',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Anchor Description',
                value: 'anchorDescription',
                description: 'Include anchor description in the response'
            },
            {
                name: 'Currency Code',
                value: 'currencyCode',
                description: 'Include currency code in the response'
            },
            {
                name: 'Eligible As',
                value: 'eligibleAs',
                description: 'Include eligible as in the response'
            },
            {
                name: 'End Date',
                value: 'endDate',
                description: 'Include end date in the response'
            },
            {
                name: 'Entry Type',
                value: 'entryType',
                description: 'Include entry type in the response'
            },
            {
                name: 'Free Qty',
                value: 'freeQty',
                description: 'Include free qty in the response'
            },
            {
                name: 'Incent Type',
                value: 'incentType',
                description: 'Include incent type in the response'
            },
            {
                name: 'Incentive',
                value: 'incentive',
                description: 'Include incentive in the response'
            },
            {
                name: 'Incentive Basis',
                value: 'incentiveBasis',
                description: 'Include incentive basis in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Mix Match Code',
                value: 'mixMatchCode',
                description: 'Include mix match code in the response'
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
                name: 'Rebate Value',
                value: 'rebateValue',
                description: 'Include rebate value in the response'
            },
            {
                name: 'Related As',
                value: 'relatedAs',
                description: 'Include related as in the response'
            },
            {
                name: 'Scheme Description',
                value: 'schemeDescription',
                description: 'Include scheme description in the response'
            },
            {
                name: 'Scheme Status',
                value: 'schemeStatus',
                description: 'Include scheme status in the response'
            },
            {
                name: 'Scheme Type',
                value: 'schemeType',
                description: 'Include scheme type in the response'
            },
            {
                name: 'Start Date',
                value: 'startDate',
                description: 'Include start date in the response'
            },
            {
                name: 'Sub Group',
                value: 'subGroup',
                description: 'Include sub group in the response'
            },
            {
                name: 'Supplier',
                value: 'supplier',
                description: 'Include supplier in the response'
            },
            {
                name: 'Threshold Qty',
                value: 'thresholdQty',
                description: 'Include threshold qty in the response'
            },
            {
                name: 'Threshold Value',
                value: 'thresholdValue',
                description: 'Include threshold value in the response'
            },
            {
                name: 'To Qualify',
                value: 'toQualify',
                description: 'Include to qualify in the response'
            },
            {
                name: 'Web Description',
                value: 'webDescription',
                description: 'Include web description in the response'
            },
            {
                name: 'Web Scheme',
                value: 'webScheme',
                description: 'Include web scheme in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['mixMatchSchemes'],
                operation: ['mixMatchSchemes:get']
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
                resource: ['mixMatchSchemes'],
                operation: ['mixMatchSchemes:get']
            }
        }
    },
    {
        displayName: 'Include Lines',
        name: 'includeLines',
        type: 'boolean',
        default: false,
        description: 'Whether include mix match line items in the response',
        displayOptions: {
            show: {
                resource: ['mixMatchSchemes'],
                operation: ['mixMatchSchemes:get']
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
                resource: ['mixMatchSchemes'],
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
                resource: ['mixMatchSchemes'],
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
                resource: ['mixMatchSchemes'],
                operation: ['get']
            }
        }
    }
];

export const mixMatchSchemesListFields: INodeProperties[] = [
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
                resource: ['mixMatchSchemes'],
                operation: ['mixMatchSchemes:list']
            }
        }
    },
    {
        displayName: 'Include Lines',
        name: 'includeLines',
        type: 'boolean',
        default: false,
        description: 'Whether include mix match line items in the response',
        displayOptions: {
            show: {
                resource: ['mixMatchSchemes'],
                operation: ['mixMatchSchemes:list']
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
                resource: ['mixMatchSchemes'],
                operation: ['mixMatchSchemes:list'],
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
                resource: ['mixMatchSchemes'],
                operation: ['mixMatchSchemes:list'],
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
                resource: ['mixMatchSchemes'],
                operation: ['mixMatchSchemes:list'],
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
                        default: 'depot',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Depot',
                                value: 'depot'
                            },
                            {
                                name: 'Eligible As',
                                value: 'eligibleAs'
                            },
                            {
                                name: 'End Date',
                                value: 'endDate'
                            },
                            {
                                name: 'Entry Type',
                                value: 'entryType'
                            },
                            {
                                name: 'Free Qty',
                                value: 'freeQty'
                            },
                            {
                                name: 'Hide Nested Keys',
                                value: 'hideNestedKeys'
                            },
                            {
                                name: 'Incent Type',
                                value: 'incentType'
                            },
                            {
                                name: 'Incentive Basis',
                                value: 'incentiveBasis'
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
                                name: 'Mix Match Code',
                                value: 'mixMatchCode'
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
                                name: 'Promotion Type',
                                value: 'promotionType'
                            },
                            {
                                name: 'Quantity Discount',
                                value: 'quantityDiscount'
                            },
                            {
                                name: 'Rebate Value',
                                value: 'rebateValue'
                            },
                            {
                                name: 'Related As',
                                value: 'relatedAs'
                            },
                            {
                                name: 'Scheme Description',
                                value: 'schemeDescription'
                            },
                            {
                                name: 'Scheme Status',
                                value: 'schemeStatus'
                            },
                            {
                                name: 'Scheme Type',
                                value: 'schemeType'
                            },
                            {
                                name: 'Start Date',
                                value: 'startDate'
                            },
                            {
                                name: 'Sub Group',
                                value: 'subGroup'
                            },
                            {
                                name: 'Supplier',
                                value: 'supplier'
                            },
                            {
                                name: 'Threshold Qty',
                                value: 'thresholdQty'
                            },
                            {
                                name: 'Threshold Value',
                                value: 'thresholdValue'
                            },
                            {
                                name: 'Timeout',
                                value: 'timeout'
                            },
                            {
                                name: 'Web Description',
                                value: 'webDescription'
                            },
                            {
                                name: 'Web Scheme',
                                value: 'webScheme'
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
                resource: ['mixMatchSchemes'],
                operation: ['mixMatchSchemes:list'],
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
                resource: ['mixMatchSchemes'],
                operation: ['mixMatchSchemes:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Start Date',
        name: 'startDate',
        type: 'string',
        default: '',
        description: 'Start Date (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        placeholder: '2020-08-17',
        displayOptions: {
            show: {
                resource: ['mixMatchSchemes'],
                operation: ['mixMatchSchemes:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'End Date',
        name: 'endDate',
        type: 'string',
        default: '',
        description: 'End Date (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        placeholder: '2021-01-18',
        displayOptions: {
            show: {
                resource: ['mixMatchSchemes'],
                operation: ['mixMatchSchemes:list'],
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
        placeholder: 'mixMatchCode,-lastUpdate',
        options: [
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
                name: 'Eligible As (Ascending)',
                value: 'eligibleAs',
                description: 'Sort by Eligible As in ascending order'
            },
            {
                name: 'Eligible As (Descending)',
                value: '-eligibleAs',
                description: 'Sort by Eligible As in descending order'
            },
            {
                name: 'End Date (Ascending)',
                value: 'endDate',
                description: 'Sort by End Date in ascending order'
            },
            {
                name: 'End Date (Descending)',
                value: '-endDate',
                description: 'Sort by End Date in descending order'
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
                name: 'Free Qty (Ascending)',
                value: 'freeQty',
                description: 'Sort by Free Qty in ascending order'
            },
            {
                name: 'Free Qty (Descending)',
                value: '-freeQty',
                description: 'Sort by Free Qty in descending order'
            },
            {
                name: 'Incent Type (Ascending)',
                value: 'incentType',
                description: 'Sort by Incent Type in ascending order'
            },
            {
                name: 'Incent Type (Descending)',
                value: '-incentType',
                description: 'Sort by Incent Type in descending order'
            },
            {
                name: 'Incentive Basis (Ascending)',
                value: 'incentiveBasis',
                description: 'Sort by Incentive Basis in ascending order'
            },
            {
                name: 'Incentive Basis (Descending)',
                value: '-incentiveBasis',
                description: 'Sort by Incentive Basis in descending order'
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
                name: 'Mix Match Code (Ascending)',
                value: 'mixMatchCode',
                description: 'Sort by Mix Match Code in ascending order'
            },
            {
                name: 'Mix Match Code (Descending)',
                value: '-mixMatchCode',
                description: 'Sort by Mix Match Code in descending order'
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
                name: 'Rebate Value (Ascending)',
                value: 'rebateValue',
                description: 'Sort by Rebate Value in ascending order'
            },
            {
                name: 'Rebate Value (Descending)',
                value: '-rebateValue',
                description: 'Sort by Rebate Value in descending order'
            },
            {
                name: 'Related As (Ascending)',
                value: 'relatedAs',
                description: 'Sort by Related As in ascending order'
            },
            {
                name: 'Related As (Descending)',
                value: '-relatedAs',
                description: 'Sort by Related As in descending order'
            },
            {
                name: 'Scheme Description (Ascending)',
                value: 'schemeDescription',
                description: 'Sort by Scheme Description in ascending order'
            },
            {
                name: 'Scheme Description (Descending)',
                value: '-schemeDescription',
                description: 'Sort by Scheme Description in descending order'
            },
            {
                name: 'Scheme Status (Ascending)',
                value: 'schemeStatus',
                description: 'Sort by Scheme Status in ascending order'
            },
            {
                name: 'Scheme Status (Descending)',
                value: '-schemeStatus',
                description: 'Sort by Scheme Status in descending order'
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
                name: 'Start Date (Ascending)',
                value: 'startDate',
                description: 'Sort by Start Date in ascending order'
            },
            {
                name: 'Start Date (Descending)',
                value: '-startDate',
                description: 'Sort by Start Date in descending order'
            },
            {
                name: 'Sub Group (Ascending)',
                value: 'subGroup',
                description: 'Sort by Sub Group in ascending order'
            },
            {
                name: 'Sub Group (Descending)',
                value: '-subGroup',
                description: 'Sort by Sub Group in descending order'
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
                name: 'Threshold Qty (Ascending)',
                value: 'thresholdQty',
                description: 'Sort by Threshold Qty in ascending order'
            },
            {
                name: 'Threshold Qty (Descending)',
                value: '-thresholdQty',
                description: 'Sort by Threshold Qty in descending order'
            },
            {
                name: 'Threshold Value (Ascending)',
                value: 'thresholdValue',
                description: 'Sort by Threshold Value in ascending order'
            },
            {
                name: 'Threshold Value (Descending)',
                value: '-thresholdValue',
                description: 'Sort by Threshold Value in descending order'
            },
            {
                name: 'Web Description (Ascending)',
                value: 'webDescription',
                description: 'Sort by Web Description in ascending order'
            },
            {
                name: 'Web Description (Descending)',
                value: '-webDescription',
                description: 'Sort by Web Description in descending order'
            },
            {
                name: 'Web Scheme (Ascending)',
                value: 'webScheme',
                description: 'Sort by Web Scheme in ascending order'
            },
            {
                name: 'Web Scheme (Descending)',
                value: '-webScheme',
                description: 'Sort by Web Scheme in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['mixMatchSchemes'],
                operation: ['mixMatchSchemes:list'],
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
                resource: ['mixMatchSchemes'],
                operation: ['mixMatchSchemes:list'],
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
                name: 'Anchor Description',
                value: 'anchorDescription',
                description: 'Include anchor description in the response'
            },
            {
                name: 'Currency Code',
                value: 'currencyCode',
                description: 'Include currency code in the response'
            },
            {
                name: 'Eligible As',
                value: 'eligibleAs',
                description: 'Include eligible as in the response'
            },
            {
                name: 'End Date',
                value: 'endDate',
                description: 'Include end date in the response'
            },
            {
                name: 'Entry Type',
                value: 'entryType',
                description: 'Include entry type in the response'
            },
            {
                name: 'Free Qty',
                value: 'freeQty',
                description: 'Include free qty in the response'
            },
            {
                name: 'Incent Type',
                value: 'incentType',
                description: 'Include incent type in the response'
            },
            {
                name: 'Incentive',
                value: 'incentive',
                description: 'Include incentive in the response'
            },
            {
                name: 'Incentive Basis',
                value: 'incentiveBasis',
                description: 'Include incentive basis in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Mix Match Code',
                value: 'mixMatchCode',
                description: 'Include mix match code in the response'
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
                name: 'Rebate Value',
                value: 'rebateValue',
                description: 'Include rebate value in the response'
            },
            {
                name: 'Related As',
                value: 'relatedAs',
                description: 'Include related as in the response'
            },
            {
                name: 'Scheme Description',
                value: 'schemeDescription',
                description: 'Include scheme description in the response'
            },
            {
                name: 'Scheme Status',
                value: 'schemeStatus',
                description: 'Include scheme status in the response'
            },
            {
                name: 'Scheme Type',
                value: 'schemeType',
                description: 'Include scheme type in the response'
            },
            {
                name: 'Start Date',
                value: 'startDate',
                description: 'Include start date in the response'
            },
            {
                name: 'Sub Group',
                value: 'subGroup',
                description: 'Include sub group in the response'
            },
            {
                name: 'Supplier',
                value: 'supplier',
                description: 'Include supplier in the response'
            },
            {
                name: 'Threshold Qty',
                value: 'thresholdQty',
                description: 'Include threshold qty in the response'
            },
            {
                name: 'Threshold Value',
                value: 'thresholdValue',
                description: 'Include threshold value in the response'
            },
            {
                name: 'To Qualify',
                value: 'toQualify',
                description: 'Include to qualify in the response'
            },
            {
                name: 'Web Description',
                value: 'webDescription',
                description: 'Include web description in the response'
            },
            {
                name: 'Web Scheme',
                value: 'webScheme',
                description: 'Include web scheme in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['mixMatchSchemes'],
                operation: ['mixMatchSchemes:list'],
                filterMode: ['common']
            }
        }
    }
];
