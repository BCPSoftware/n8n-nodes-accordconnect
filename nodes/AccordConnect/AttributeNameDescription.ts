import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0006 - 24/08/26 - do not edit by hand

export const attributeNamesOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['attributeNames'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'attributeNames:create',
                description: 'Create a attributeName',
                action: 'Create a attribute name'
            },
            {
                name: 'Delete',
                value: 'attributeNames:delete',
                description: 'Delete a attributeName',
                action: 'Delete a attribute name'
            },
            {
                name: 'Get',
                value: 'attributeNames:get',
                description: 'Get a attributeName',
                action: 'Get a attribute name'
            },
            {
                name: 'List',
                value: 'attributeNames:list',
                description: 'List many attributeNames',
                action: 'List many attribute names'
            },
            {
                name: 'Update',
                value: 'attributeNames:update',
                description: 'Update a attributeName',
                action: 'Update a attribute name'
            },
        ],
        default: 'attributeNames:create',
    },
];


export const attributeNamesReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the attributeName',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'attributeName,description,attributeGroup,label',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Attribute Group',
                value: 'attributeGroup',
                description: 'Include attribute group in the response'
            },
            {
                name: 'Attribute Name',
                value: 'attributeName',
                description: 'Include attribute name in the response'
            },
            {
                name: 'Data Type',
                value: 'dataType',
                description: 'Include data type in the response'
            },
            {
                name: 'Default Value',
                value: 'defaultValue',
                description: 'Include default value in the response'
            },
            {
                name: 'Description',
                value: 'description',
                description: 'Include description in the response'
            },
            {
                name: 'Display Format',
                value: 'displayFormat',
                description: 'Include display format in the response'
            },
            {
                name: 'Help',
                value: 'help',
                description: 'Include help in the response'
            },
            {
                name: 'Keyword',
                value: 'keyword',
                description: 'Include keyword in the response'
            },
            {
                name: 'Label',
                value: 'label',
                description: 'Include label in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Retail Extract',
                value: 'retailExtract',
                description: 'Include retail extract in the response'
            },
            {
                name: 'Retail Extract Tag',
                value: 'retailExtractTag',
                description: 'Include retail extract tag in the response'
            },
            {
                name: 'Sequence',
                value: 'sequence',
                description: 'Include sequence in the response'
            },
            {
                name: 'Tooltip',
                value: 'tooltip',
                description: 'Include tooltip in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:get']
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
                resource: ['attributeNames'],
                operation: ['attributeNames:get']
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
                resource: ['attributeNames'],
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
                resource: ['attributeNames'],
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
                resource: ['attributeNames'],
                operation: ['get']
            }
        }
    }
];

export const attributeNamesUpdateFields: INodeProperties[] = [
    {
        displayName: 'Attribute Name',
        name: 'attributeName',
        type: 'string',
        default: '',
        description: 'The attribute name value',
        required: true,
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:update']
            }
        }
    },
    {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        default: '',
        description: 'The description value',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:update']
            }
        }
    },
    {
        displayName: 'Attribute Group',
        name: 'attributeGroup',
        type: 'string',
        default: '',
        description: 'The attribute group value',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:update']
            }
        }
    },
    {
        displayName: 'Label',
        name: 'label',
        type: 'string',
        default: '',
        description: 'The label value',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:update']
            }
        }
    },
    {
        displayName: 'Sequence',
        name: 'sequence',
        type: 'number',
        default: '',
        description: 'The sequence value',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:update']
            }
        }
    },
    {
        displayName: 'Help',
        name: 'help',
        type: 'string',
        default: '',
        description: 'Help Text',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:update']
            }
        }
    },
    {
        displayName: 'Tooltip',
        name: 'tooltip',
        type: 'string',
        default: '',
        description: 'The tooltip value',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:update']
            }
        }
    },
    {
        displayName: 'Data Type',
        name: 'dataType',
        type: 'options',
        default: 'Character',
        description: 'The data type value',
        options: [
            {
                name: 'Character',
                value: 'Character'
            },
            {
                name: 'Choice',
                value: 'Choice'
            },
            {
                name: 'Date',
                value: 'Date'
            },
            {
                name: 'Decimal',
                value: 'Decimal'
            },
            {
                name: 'Integer',
                value: 'Integer'
            },
            {
                name: 'Logical',
                value: 'Logical'
            }
        ],
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:update']
            }
        }
    },
    {
        displayName: 'Display Format',
        name: 'displayFormat',
        type: 'string',
        default: '',
        description: 'The display format value',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:update']
            }
        }
    },
    {
        displayName: 'Default Value',
        name: 'defaultValue',
        type: 'string',
        default: '',
        description: 'The default value value',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:update']
            }
        }
    },
    {
        displayName: 'Valid Choices',
        name: 'validChoices',
        type: 'string',
        default: '',
        description: 'Valid Choices [description, value or just value, e.g. red,r OR red]',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:update']
            }
        }
    },
    {
        displayName: 'Retail Extract',
        name: 'retailExtract',
        type: 'options',
        default: 'No',
        description: 'The retail extract value',
        options: [
            {
                name: 'No',
                value: 'No'
            },
            {
                name: 'Yes',
                value: 'Yes'
            }
        ],
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:update']
            }
        }
    },
    {
        displayName: 'Retail Extract Tag',
        name: 'retailExtractTag',
        type: 'string',
        default: '',
        description: 'The retail extract tag value',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:update']
            }
        }
    },
    {
        displayName: 'Keyword',
        name: 'keyword',
        type: 'string',
        default: '',
        description: 'Attribute Keyword',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:update']
            }
        }
    }
];

export const attributeNamesListFields: INodeProperties[] = [
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
                resource: ['attributeNames'],
                operation: ['attributeNames:list']
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
                resource: ['attributeNames'],
                operation: ['attributeNames:list'],
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
                resource: ['attributeNames'],
                operation: ['attributeNames:list'],
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
                resource: ['attributeNames'],
                operation: ['attributeNames:list'],
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
                        default: 'attributeGroup',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Attribute Group',
                                value: 'attributeGroup'
                            },
                            {
                                name: 'Attribute Name',
                                value: 'attributeName'
                            },
                            {
                                name: 'Data Type',
                                value: 'dataType'
                            },
                            {
                                name: 'Default Value',
                                value: 'defaultValue'
                            },
                            {
                                name: 'Description',
                                value: 'description'
                            },
                            {
                                name: 'Display Format',
                                value: 'displayFormat'
                            },
                            {
                                name: 'Help',
                                value: 'help'
                            },
                            {
                                name: 'Hide Nested Keys',
                                value: 'hideNestedKeys'
                            },
                            {
                                name: 'Keyword',
                                value: 'keyword'
                            },
                            {
                                name: 'Label',
                                value: 'label'
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
                                name: 'Next ID',
                                value: 'nextID'
                            },
                            {
                                name: 'Offset',
                                value: 'offset'
                            },
                            {
                                name: 'Retail Extract',
                                value: 'retailExtract'
                            },
                            {
                                name: 'Retail Extract Tag',
                                value: 'retailExtractTag'
                            },
                            {
                                name: 'Sequence',
                                value: 'sequence'
                            },
                            {
                                name: 'Timeout',
                                value: 'timeout'
                            },
                            {
                                name: 'Tooltip',
                                value: 'tooltip'
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
                resource: ['attributeNames'],
                operation: ['attributeNames:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Attribute Name',
        name: 'attributeName',
        type: 'string',
        default: '',
        description: 'Attribute Name (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'colour',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        default: '',
        description: 'Description (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,contains,matches)',
        placeholder: 'Colour of this item',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Attribute Group',
        name: 'attributeGroup',
        type: 'string',
        default: '',
        description: 'Attribute Group (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'prod',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Label',
        name: 'label',
        type: 'string',
        default: '',
        description: 'Label (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'Colour',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Data Type',
        name: 'dataType',
        type: 'multiOptions',
        default: [],
        description: 'Data Type (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        options: [
            {
                name: 'Character',
                value: 'Character'
            },
            {
                name: 'Choice',
                value: 'Choice'
            },
            {
                name: 'Date',
                value: 'Date'
            },
            {
                name: 'Decimal',
                value: 'Decimal'
            },
            {
                name: 'Integer',
                value: 'Integer'
            },
            {
                name: 'Logical',
                value: 'Logical'
            }
        ],
        placeholder: 'Character',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:list'],
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
                resource: ['attributeNames'],
                operation: ['attributeNames:list'],
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
        placeholder: 'attributeName,-description',
        options: [
            {
                name: 'Attribute Group (Ascending)',
                value: 'attributeGroup',
                description: 'Sort by Attribute Group in ascending order'
            },
            {
                name: 'Attribute Group (Descending)',
                value: '-attributeGroup',
                description: 'Sort by Attribute Group in descending order'
            },
            {
                name: 'Attribute Name (Ascending)',
                value: 'attributeName',
                description: 'Sort by Attribute Name in ascending order'
            },
            {
                name: 'Attribute Name (Descending)',
                value: '-attributeName',
                description: 'Sort by Attribute Name in descending order'
            },
            {
                name: 'Data Type (Ascending)',
                value: 'dataType',
                description: 'Sort by Data Type in ascending order'
            },
            {
                name: 'Data Type (Descending)',
                value: '-dataType',
                description: 'Sort by Data Type in descending order'
            },
            {
                name: 'Default Value (Ascending)',
                value: 'defaultValue',
                description: 'Sort by Default Value in ascending order'
            },
            {
                name: 'Default Value (Descending)',
                value: '-defaultValue',
                description: 'Sort by Default Value in descending order'
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
                name: 'Display Format (Ascending)',
                value: 'displayFormat',
                description: 'Sort by Display Format in ascending order'
            },
            {
                name: 'Display Format (Descending)',
                value: '-displayFormat',
                description: 'Sort by Display Format in descending order'
            },
            {
                name: 'Help (Ascending)',
                value: 'help',
                description: 'Sort by Help in ascending order'
            },
            {
                name: 'Help (Descending)',
                value: '-help',
                description: 'Sort by Help in descending order'
            },
            {
                name: 'Keyword (Ascending)',
                value: 'keyword',
                description: 'Sort by Keyword in ascending order'
            },
            {
                name: 'Keyword (Descending)',
                value: '-keyword',
                description: 'Sort by Keyword in descending order'
            },
            {
                name: 'Label (Ascending)',
                value: 'label',
                description: 'Sort by Label in ascending order'
            },
            {
                name: 'Label (Descending)',
                value: '-label',
                description: 'Sort by Label in descending order'
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
                name: 'Retail Extract (Ascending)',
                value: 'retailExtract',
                description: 'Sort by Retail Extract in ascending order'
            },
            {
                name: 'Retail Extract (Descending)',
                value: '-retailExtract',
                description: 'Sort by Retail Extract in descending order'
            },
            {
                name: 'Retail Extract Tag (Ascending)',
                value: 'retailExtractTag',
                description: 'Sort by Retail Extract Tag in ascending order'
            },
            {
                name: 'Retail Extract Tag (Descending)',
                value: '-retailExtractTag',
                description: 'Sort by Retail Extract Tag in descending order'
            },
            {
                name: 'Sequence (Ascending)',
                value: 'sequence',
                description: 'Sort by Sequence in ascending order'
            },
            {
                name: 'Sequence (Descending)',
                value: '-sequence',
                description: 'Sort by Sequence in descending order'
            },
            {
                name: 'Tooltip (Ascending)',
                value: 'tooltip',
                description: 'Sort by Tooltip in ascending order'
            },
            {
                name: 'Tooltip (Descending)',
                value: '-tooltip',
                description: 'Sort by Tooltip in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:list'],
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
                resource: ['attributeNames'],
                operation: ['attributeNames:list'],
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
                name: 'Attribute Group',
                value: 'attributeGroup',
                description: 'Include attribute group in the response'
            },
            {
                name: 'Attribute Name',
                value: 'attributeName',
                description: 'Include attribute name in the response'
            },
            {
                name: 'Data Type',
                value: 'dataType',
                description: 'Include data type in the response'
            },
            {
                name: 'Default Value',
                value: 'defaultValue',
                description: 'Include default value in the response'
            },
            {
                name: 'Description',
                value: 'description',
                description: 'Include description in the response'
            },
            {
                name: 'Display Format',
                value: 'displayFormat',
                description: 'Include display format in the response'
            },
            {
                name: 'Help',
                value: 'help',
                description: 'Include help in the response'
            },
            {
                name: 'Keyword',
                value: 'keyword',
                description: 'Include keyword in the response'
            },
            {
                name: 'Label',
                value: 'label',
                description: 'Include label in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Retail Extract',
                value: 'retailExtract',
                description: 'Include retail extract in the response'
            },
            {
                name: 'Retail Extract Tag',
                value: 'retailExtractTag',
                description: 'Include retail extract tag in the response'
            },
            {
                name: 'Sequence',
                value: 'sequence',
                description: 'Include sequence in the response'
            },
            {
                name: 'Tooltip',
                value: 'tooltip',
                description: 'Include tooltip in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:list'],
                filterMode: ['common']
            }
        }
    }
];

export const attributeNamesCreateFields: INodeProperties[] = [
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
                resource: ['attributeNames'],
                operation: ['attributeNames:create']
            }
        }
    },
    {
        displayName: 'JSON Body',
        name: 'jsonBody',
        type: 'json',
        default: '{}',
        description: 'Raw JSON body for creating attribute name records. Provide the complete request payload.',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:create'],
                createMode: ['json']
            }
        },
        placeholder: `{
  "attributeNames": [
    {
      // Add your attribute name fields here
    }
  ]
}`
    },
    {
        displayName: 'Attribute Name',
        name: 'attributeName',
        type: 'string',
        default: '',
        description: 'The attribute name value',
        required: true,
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        default: '',
        description: 'The description value',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Attribute Group',
        name: 'attributeGroup',
        type: 'string',
        default: '',
        description: 'The attribute group value',
        required: true,
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Sequence',
        name: 'sequence',
        type: 'number',
        default: '',
        description: 'The sequence value',
        required: true,
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Data Type',
        name: 'dataType',
        type: 'options',
        default: 'Character',
        description: 'The data type value',
        required: true,
        options: [
            {
                name: 'Character',
                value: 'Character'
            },
            {
                name: 'Choice',
                value: 'Choice'
            },
            {
                name: 'Date',
                value: 'Date'
            },
            {
                name: 'Decimal',
                value: 'Decimal'
            },
            {
                name: 'Integer',
                value: 'Integer'
            },
            {
                name: 'Logical',
                value: 'Logical'
            }
        ],
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Display Format',
        name: 'displayFormat',
        type: 'string',
        default: '',
        description: 'The display format value',
        required: true,
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Label',
        name: 'label',
        type: 'string',
        default: '',
        description: 'The label value',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Help',
        name: 'help',
        type: 'string',
        default: '',
        description: 'Help Text',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Tooltip',
        name: 'tooltip',
        type: 'string',
        default: '',
        description: 'The tooltip value',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Default Value',
        name: 'defaultValue',
        type: 'string',
        default: '',
        description: 'The default value value',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Valid Choices',
        name: 'validChoices',
        type: 'string',
        default: '',
        description: 'Valid Choices [description, value or just value, e.g. red,r OR red]',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Retail Extract',
        name: 'retailExtract',
        type: 'options',
        default: 'No',
        description: 'The retail extract value',
        options: [
            {
                name: 'No',
                value: 'No'
            },
            {
                name: 'Yes',
                value: 'Yes'
            }
        ],
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Retail Extract Tag',
        name: 'retailExtractTag',
        type: 'string',
        default: '',
        description: 'The retail extract tag value',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Keyword',
        name: 'keyword',
        type: 'string',
        default: '',
        description: 'Attribute Keyword',
        displayOptions: {
            show: {
                resource: ['attributeNames'],
                operation: ['attributeNames:create'],
                createMode: ['advanced']
            }
        }
    }
];
