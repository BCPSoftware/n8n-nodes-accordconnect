import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0008 - 26/08/26 - do not edit by hand

export const customerSchedulesOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['customerSchedules'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'customerSchedules:get',
                description: 'Get a customerSchedule',
                action: 'Get a customer schedule'
            },
            {
                name: 'List',
                value: 'customerSchedules:list',
                description: 'List many customerSchedules',
                action: 'List many customer schedules'
            },
        ],
        default: 'customerSchedules:get',
    },
];


export const customerSchedulesReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the customerSchedule',
        required: true,
        placeholder: 'e.g. ORDER001',
        displayOptions: {
            show: {
                resource: ['customerSchedules'],
                operation: ['customerSchedules:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'depot,customerCode,orderType,lastUpdate',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Amend Day',
                value: 'amendDay',
                description: 'Include amend day in the response'
            },
            {
                name: 'Amend Time',
                value: 'amendTime',
                description: 'Include amend time in the response'
            },
            {
                name: 'Customer Code',
                value: 'customerCode',
                description: 'Include customer code in the response'
            },
            {
                name: 'Delivery Day',
                value: 'deliveryDay',
                description: 'Include delivery day in the response'
            },
            {
                name: 'Delivery Time',
                value: 'deliveryTime',
                description: 'Include delivery time in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Drop No',
                value: 'dropNo',
                description: 'Include drop no in the response'
            },
            {
                name: 'Frequency',
                value: 'frequency',
                description: 'Include frequency in the response'
            },
            {
                name: 'Input Day',
                value: 'inputDay',
                description: 'Include input day in the response'
            },
            {
                name: 'Input Time',
                value: 'inputTime',
                description: 'Include input time in the response'
            },
            {
                name: 'Invoice Day',
                value: 'invoiceDay',
                description: 'Include invoice day in the response'
            },
            {
                name: 'Invoice Time',
                value: 'invoiceTime',
                description: 'Include invoice time in the response'
            },
            {
                name: 'Label Day',
                value: 'labelDay',
                description: 'Include label day in the response'
            },
            {
                name: 'Label Time',
                value: 'labelTime',
                description: 'Include label time in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Next Rel Types',
                value: 'nextRelTypes',
                description: 'Include next rel types in the response'
            },
            {
                name: 'Order Type',
                value: 'orderType',
                description: 'Include order type in the response'
            },
            {
                name: 'Route',
                value: 'route',
                description: 'Include route in the response'
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
                name: 'Valid Routes',
                value: 'validRoutes',
                description: 'Include valid routes in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customerSchedules'],
                operation: ['customerSchedules:get']
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
                resource: ['customerSchedules'],
                operation: ['customerSchedules:get']
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
                resource: ['customerSchedules'],
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
                resource: ['customerSchedules'],
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
                resource: ['customerSchedules'],
                operation: ['get']
            }
        }
    }
];

export const customerSchedulesListFields: INodeProperties[] = [
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
                resource: ['customerSchedules'],
                operation: ['customerSchedules:list']
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
                resource: ['customerSchedules'],
                operation: ['customerSchedules:list'],
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
                resource: ['customerSchedules'],
                operation: ['customerSchedules:list'],
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
                resource: ['customerSchedules'],
                operation: ['customerSchedules:list'],
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
                        default: 'amendDay',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Amend Day',
                                value: 'amendDay'
                            },
                            {
                                name: 'Amend Time',
                                value: 'amendTime'
                            },
                            {
                                name: 'Customer Code',
                                value: 'customerCode'
                            },
                            {
                                name: 'Delivery Day',
                                value: 'deliveryDay'
                            },
                            {
                                name: 'Delivery Time',
                                value: 'deliveryTime'
                            },
                            {
                                name: 'Depot',
                                value: 'depot'
                            },
                            {
                                name: 'Drop No',
                                value: 'dropNo'
                            },
                            {
                                name: 'Frequency',
                                value: 'frequency'
                            },
                            {
                                name: 'Hide Nested Keys',
                                value: 'hideNestedKeys'
                            },
                            {
                                name: 'Input Day',
                                value: 'inputDay'
                            },
                            {
                                name: 'Input Time',
                                value: 'inputTime'
                            },
                            {
                                name: 'Invoice Day',
                                value: 'invoiceDay'
                            },
                            {
                                name: 'Invoice Time',
                                value: 'invoiceTime'
                            },
                            {
                                name: 'Label Day',
                                value: 'labelDay'
                            },
                            {
                                name: 'Label Time',
                                value: 'labelTime'
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
                                name: 'Next Rel Types',
                                value: 'nextRelTypes'
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
                                name: 'Route',
                                value: 'route'
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
                                name: 'Valid Routes',
                                value: 'validRoutes'
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
                resource: ['customerSchedules'],
                operation: ['customerSchedules:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Depot',
        name: 'depot',
        type: 'string',
        default: '',
        description: 'Depot code (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'a01',
        displayOptions: {
            show: {
                resource: ['customerSchedules'],
                operation: ['customerSchedules:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Customer Code',
        name: 'customerCode',
        type: 'string',
        default: '',
        description: 'Customer code (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: '10001',
        displayOptions: {
            show: {
                resource: ['customerSchedules'],
                operation: ['customerSchedules:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Order Type',
        name: 'orderType',
        type: 'number',
        default: '',
        description: 'Order type (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE)',
        typeOptions: {
            minValue: 0
        },
        placeholder: '1',
        displayOptions: {
            show: {
                resource: ['customerSchedules'],
                operation: ['customerSchedules:list'],
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
                resource: ['customerSchedules'],
                operation: ['customerSchedules:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Route',
        name: 'route',
        type: 'string',
        default: '',
        description: 'Route (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'thu01',
        displayOptions: {
            show: {
                resource: ['customerSchedules'],
                operation: ['customerSchedules:list'],
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
        placeholder: 'depot,-customerCode',
        options: [
            {
                name: 'Amend Day (Ascending)',
                value: 'amendDay',
                description: 'Sort by Amend Day in ascending order'
            },
            {
                name: 'Amend Day (Descending)',
                value: '-amendDay',
                description: 'Sort by Amend Day in descending order'
            },
            {
                name: 'Amend Time (Ascending)',
                value: 'amendTime',
                description: 'Sort by Amend Time in ascending order'
            },
            {
                name: 'Amend Time (Descending)',
                value: '-amendTime',
                description: 'Sort by Amend Time in descending order'
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
                name: 'Delivery Day (Ascending)',
                value: 'deliveryDay',
                description: 'Sort by Delivery Day in ascending order'
            },
            {
                name: 'Delivery Day (Descending)',
                value: '-deliveryDay',
                description: 'Sort by Delivery Day in descending order'
            },
            {
                name: 'Delivery Time (Ascending)',
                value: 'deliveryTime',
                description: 'Sort by Delivery Time in ascending order'
            },
            {
                name: 'Delivery Time (Descending)',
                value: '-deliveryTime',
                description: 'Sort by Delivery Time in descending order'
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
                name: 'Drop No (Ascending)',
                value: 'dropNo',
                description: 'Sort by Drop No in ascending order'
            },
            {
                name: 'Drop No (Descending)',
                value: '-dropNo',
                description: 'Sort by Drop No in descending order'
            },
            {
                name: 'Frequency (Ascending)',
                value: 'frequency',
                description: 'Sort by Frequency in ascending order'
            },
            {
                name: 'Frequency (Descending)',
                value: '-frequency',
                description: 'Sort by Frequency in descending order'
            },
            {
                name: 'Input Day (Ascending)',
                value: 'inputDay',
                description: 'Sort by Input Day in ascending order'
            },
            {
                name: 'Input Day (Descending)',
                value: '-inputDay',
                description: 'Sort by Input Day in descending order'
            },
            {
                name: 'Input Time (Ascending)',
                value: 'inputTime',
                description: 'Sort by Input Time in ascending order'
            },
            {
                name: 'Input Time (Descending)',
                value: '-inputTime',
                description: 'Sort by Input Time in descending order'
            },
            {
                name: 'Invoice Day (Ascending)',
                value: 'invoiceDay',
                description: 'Sort by Invoice Day in ascending order'
            },
            {
                name: 'Invoice Day (Descending)',
                value: '-invoiceDay',
                description: 'Sort by Invoice Day in descending order'
            },
            {
                name: 'Invoice Time (Ascending)',
                value: 'invoiceTime',
                description: 'Sort by Invoice Time in ascending order'
            },
            {
                name: 'Invoice Time (Descending)',
                value: '-invoiceTime',
                description: 'Sort by Invoice Time in descending order'
            },
            {
                name: 'Label Day (Ascending)',
                value: 'labelDay',
                description: 'Sort by Label Day in ascending order'
            },
            {
                name: 'Label Day (Descending)',
                value: '-labelDay',
                description: 'Sort by Label Day in descending order'
            },
            {
                name: 'Label Time (Ascending)',
                value: 'labelTime',
                description: 'Sort by Label Time in ascending order'
            },
            {
                name: 'Label Time (Descending)',
                value: '-labelTime',
                description: 'Sort by Label Time in descending order'
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
                name: 'Next Rel Types (Ascending)',
                value: 'nextRelTypes',
                description: 'Sort by Next Rel Types in ascending order'
            },
            {
                name: 'Next Rel Types (Descending)',
                value: '-nextRelTypes',
                description: 'Sort by Next Rel Types in descending order'
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
                name: 'Valid Routes (Ascending)',
                value: 'validRoutes',
                description: 'Sort by Valid Routes in ascending order'
            },
            {
                name: 'Valid Routes (Descending)',
                value: '-validRoutes',
                description: 'Sort by Valid Routes in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customerSchedules'],
                operation: ['customerSchedules:list'],
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
                resource: ['customerSchedules'],
                operation: ['customerSchedules:list'],
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
                name: 'Amend Day',
                value: 'amendDay',
                description: 'Include amend day in the response'
            },
            {
                name: 'Amend Time',
                value: 'amendTime',
                description: 'Include amend time in the response'
            },
            {
                name: 'Customer Code',
                value: 'customerCode',
                description: 'Include customer code in the response'
            },
            {
                name: 'Delivery Day',
                value: 'deliveryDay',
                description: 'Include delivery day in the response'
            },
            {
                name: 'Delivery Time',
                value: 'deliveryTime',
                description: 'Include delivery time in the response'
            },
            {
                name: 'Depot',
                value: 'depot',
                description: 'Include depot in the response'
            },
            {
                name: 'Drop No',
                value: 'dropNo',
                description: 'Include drop no in the response'
            },
            {
                name: 'Frequency',
                value: 'frequency',
                description: 'Include frequency in the response'
            },
            {
                name: 'Input Day',
                value: 'inputDay',
                description: 'Include input day in the response'
            },
            {
                name: 'Input Time',
                value: 'inputTime',
                description: 'Include input time in the response'
            },
            {
                name: 'Invoice Day',
                value: 'invoiceDay',
                description: 'Include invoice day in the response'
            },
            {
                name: 'Invoice Time',
                value: 'invoiceTime',
                description: 'Include invoice time in the response'
            },
            {
                name: 'Label Day',
                value: 'labelDay',
                description: 'Include label day in the response'
            },
            {
                name: 'Label Time',
                value: 'labelTime',
                description: 'Include label time in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Next Rel Types',
                value: 'nextRelTypes',
                description: 'Include next rel types in the response'
            },
            {
                name: 'Order Type',
                value: 'orderType',
                description: 'Include order type in the response'
            },
            {
                name: 'Route',
                value: 'route',
                description: 'Include route in the response'
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
                name: 'Valid Routes',
                value: 'validRoutes',
                description: 'Include valid routes in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['customerSchedules'],
                operation: ['customerSchedules:list'],
                filterMode: ['common']
            }
        }
    }
];
