import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IDataObject,
	IHttpRequestOptions,
	INodeProperties,
	JsonObject,
	NodeConnectionTypes,
	NodeOperationError,
	NodeApiError,
} from 'n8n-workflow';

import { createLogger } from '../../utils/logger';

/**
 * Auto-generated imports from OpenAPI specification
 * Generated: 2025-09-26T15:36:53.000Z
 * 
 * IMPORTANT: These imports are automatically generated from the OpenAPI spec.
 * Do not modify these imports manually. Use `pnpm build` to regenerate.
 */
import { customersOperations, customersReadFields, customersListFields, customersCreateFields } from './CustomerDescription';
import { productsOperations, productsReadFields, productsListFields, productsCreateFields } from './ProductDescription';
import { ordersOperations, ordersReadFields, ordersListFields, ordersCreateFields } from './OrderDescription';
import { depotsOperations, depotsReadFields, depotsListFields } from './DepotDescription';
import { purchaseOrdersOperations, purchaseOrdersReadFields, purchaseOrdersListFields, purchaseOrdersCreateFields, purchaseOrdersUpdateFields, includeLinesConfig } from './PurchaseOrderDescription';
import { purchaseOrderLinesOperations, purchaseOrderLinesReadFields, purchaseOrderLinesListFields } from './PurchaseOrderLineDescription';
import { suppliersOperations, suppliersReadFields, suppliersListFields, suppliersCreateFields, suppliersUpdateFields } from './SupplierDescription';
import { attributeGroupsOperations, attributeGroupsReadFields, attributeGroupsListFields, attributeGroupsCreateFields, attributeGroupsUpdateFields } from './AttributeGroupDescription';
import { attributeNamesOperations, attributeNamesReadFields, attributeNamesListFields, attributeNamesCreateFields, attributeNamesUpdateFields } from './AttributeNameDescription';
import { customerCallsOperations, customerCallsReadFields, customerCallsListFields, customerCallsCreateFields, customerCallsUpdateFields } from './CustomerCallDescription';
import { customerSchedulesOperations, customerSchedulesReadFields, customerSchedulesListFields } from './CustomerScheduleDescription';
import { customerTypesOperations, customerTypesReadFields, customerTypesListFields } from './CustomerTypeDescription';
import { repsOperations, repsReadFields, repsListFields } from './RepDescription';
import { brandsOperations, brandsReadFields, brandsListFields } from './BrandDescription';
import { brandGroupsOperations, brandGroupsReadFields, brandGroupsListFields } from './BrandGroupDescription';
import { contractGroupsOperations, contractGroupsReadFields, contractGroupsListFields } from './ContractGroupDescription';
import { contractPricesOperations, contractPricesReadFields, contractPricesListFields } from './ContractPriceDescription';
import { listPricesOperations, listPricesReadFields, listPricesListFields } from './ListPriceDescription';
import { priceGroupsOperations, priceGroupsReadFields, priceGroupsListFields } from './PriceGroupDescription';
import { promotionsOperations, promotionsReadFields, promotionsListFields, includeLinesConfig as promotionsIncludeLinesConfig } from './PromotionDescription';
import { promotionLinesOperations, promotionLinesReadFields, promotionLinesListFields } from './PromotionLineDescription';
import { mixMatchSchemesOperations, mixMatchSchemesReadFields, mixMatchSchemesListFields, includeLinesConfig as mixMatchSchemesIncludeLinesConfig } from './MixMatchSchemeDescription';
import { mixMatchLinesOperations, mixMatchLinesReadFields, mixMatchLinesListFields } from './MixMatchLineDescription';
import { claimsOperations, claimsReadFields, claimsListFields, claimsCreateFields, claimsUpdateFields, includeLinesConfig as claimsIncludeLinesConfig } from './ClaimDescription';
import { claimLinesOperations, claimLinesReadFields, claimLinesListFields } from './ClaimLineDescription';
import { salesTransactionsOperations, salesTransactionsReadFields, salesTransactionsListFields } from './SalesTransactionDescription';
import { invoicesOperations, invoicesReadFields, invoicesListFields } from './InvoiceDescription';
import { statementsOperations, statementsReadFields, statementsListFields } from './StatementDescription';
import { ageCodesOperations, ageCodesReadFields, ageCodesListFields } from './AgeCodeDescription';
import { countriesOperations, countriesReadFields, countriesListFields } from './CountrieDescription';
import { dutyCodesOperations, dutyCodesReadFields, dutyCodesListFields } from './DutyCodeDescription';
import { labelTypesOperations, labelTypesReadFields, labelTypesListFields } from './LabelTypeDescription';
import { productDivisionsOperations, productDivisionsReadFields, productDivisionsListFields, productDivisionsCreateFields, productDivisionsUpdateFields } from './ProductDivisionDescription';
import { productDepartmentsOperations, productDepartmentsReadFields, productDepartmentsListFields, productDepartmentsCreateFields, productDepartmentsUpdateFields } from './ProductDepartmentDescription';
import { productGroupsOperations, productGroupsReadFields, productGroupsListFields, productGroupsCreateFields, productGroupsUpdateFields } from './ProductGroupDescription';

/**
 * n8n Node for Accord Connect API integration
 * 
 * This node provides comprehensive access to the Accord Connect ERP system API,
 * supporting multiple resources and operations with automatic field generation
 * from OpenAPI specifications.
 * 
 * Key Features:
 * - Auto-generated field definitions from OpenAPI spec
 * - Support for multiple resources (customers, products, orders, etc.)
 * - Flexible filtering options (common, advanced, raw query)
 * - Pagination support with nextID-based iteration
 * - Include lines functionality for purchase orders
 * - Comprehensive error handling and logging
 * 
 * @class AccordConnect
 * @implements {INodeType}
 */
export class AccordConnect implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Accord Connect',
		name: 'accordConnect',
		icon: 'file:accordConnect.svg',
		group: ['transform'],
		version: 1,
		usableAsTool: true,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Interact with Accord Connect API',
		defaults: {
			name: 'Accord Connect',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'accordConnectApi',
				required: true,
			},
		],
		properties: <INodeProperties[]>[
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Age Code', value: 'ageCodes' },
					{ name: 'Attribute Group', value: 'attributeGroups' },
					{ name: 'Attribute Name', value: 'attributeNames' },
					{ name: 'Brand', value: 'brands' },
					{ name: 'Brand Group', value: 'brandGroups' },
					{ name: 'Claim', value: 'claims' },
					{ name: 'Claim Line', value: 'claimLines' },
					{ name: 'Contract Group', value: 'contractGroups' },
					{ name: 'Contract Price', value: 'contractPrices' },
					{ name: 'Country', value: 'countries' },
					{ name: 'Customer', value: 'customers' },
					{ name: 'Customer Call', value: 'customerCalls' },
					{ name: 'Customer Schedule', value: 'customerSchedules' },
					{ name: 'Customer Type', value: 'customerTypes' },
					{ name: 'Depot', value: 'depots' },
					{ name: 'Duty Code', value: 'dutyCodes' },
					{ name: 'Invoice', value: 'invoices' },
					{ name: 'Label Type', value: 'labelTypes' },
					{ name: 'List Price', value: 'listPrices' },
					{ name: 'Mix Match Line', value: 'mixMatchLines' },
					{ name: 'Mix Match Scheme', value: 'mixMatchSchemes' },
					{ name: 'Order', value: 'orders' },
					{ name: 'Price Group', value: 'priceGroups' },
					{ name: 'Product', value: 'products' },
					{ name: 'Product Department', value: 'productDepartments' },
					{ name: 'Product Division', value: 'productDivisions' },
					{ name: 'Product Group', value: 'productGroups' },
					{ name: 'Promotion', value: 'promotions' },
					{ name: 'Promotion Line', value: 'promotionLines' },
					{ name: 'Purchase Order', value: 'purchaseOrders' },
					{ name: 'Purchase Order Line', value: 'purchaseOrderLines' },
					{ name: 'Rep', value: 'reps' },
					{ name: 'Sales Transaction', value: 'salesTransactions' },
					{ name: 'Statement', value: 'statements' },
					{ name: 'Supplier', value: 'suppliers' }
				],
				default: 'products',
				description: 'Select the Accord Connect API resource to interact with',
			},
			/* 
			 * Auto-generated field definitions follow below.
			 * These are imported from OpenAPI-generated description files.
			 * 
			 * Each resource includes:
			 * - Operations (get, list, create, update, delete as applicable)
			 * - Resource-specific fields for each operation type
			 * 
			 * To add new resources, update scripts/config/operation-mappings.js
			 * and run `pnpm build` to regenerate.
			 */
			...customersOperations,
			...customersReadFields,
			...customersListFields,
			...customersCreateFields,
			...productsOperations,
			...productsReadFields,
			...productsListFields,
			...productsCreateFields,
			...ordersOperations,
			...ordersReadFields,
			...ordersListFields,
			...ordersCreateFields,
			...depotsOperations,
			...depotsReadFields,
			...depotsListFields,
			...purchaseOrdersOperations,
			...purchaseOrdersReadFields,
			...purchaseOrdersListFields,
			...purchaseOrdersCreateFields,
			...purchaseOrdersUpdateFields,
			...purchaseOrderLinesOperations,
			...purchaseOrderLinesReadFields,
			...purchaseOrderLinesListFields,
			...suppliersOperations,
			...suppliersReadFields,
			...suppliersListFields,
			...suppliersCreateFields,
			...suppliersUpdateFields,
			...attributeGroupsOperations,
			...attributeGroupsReadFields,
			...attributeGroupsListFields,
			...attributeGroupsCreateFields,
			...attributeGroupsUpdateFields,
			...attributeNamesOperations,
			...attributeNamesReadFields,
			...attributeNamesListFields,
			...attributeNamesCreateFields,
			...attributeNamesUpdateFields,
			...customerCallsOperations,
			...customerCallsReadFields,
			...customerCallsListFields,
			...customerCallsCreateFields,
			...customerCallsUpdateFields,
			...customerSchedulesOperations,
			...customerSchedulesReadFields,
			...customerSchedulesListFields,
			...customerTypesOperations,
			...customerTypesReadFields,
			...customerTypesListFields,
			...repsOperations,
			...repsReadFields,
			...repsListFields,
			...brandsOperations,
			...brandsReadFields,
			...brandsListFields,
			...brandGroupsOperations,
			...brandGroupsReadFields,
			...brandGroupsListFields,
			...contractGroupsOperations,
			...contractGroupsReadFields,
			...contractGroupsListFields,
			...contractPricesOperations,
			...contractPricesReadFields,
			...contractPricesListFields,
			...listPricesOperations,
			...listPricesReadFields,
			...listPricesListFields,
			...priceGroupsOperations,
			...priceGroupsReadFields,
			...priceGroupsListFields,
			...promotionsOperations,
			...promotionsReadFields,
			...promotionsListFields,
			...promotionLinesOperations,
			...promotionLinesReadFields,
			...promotionLinesListFields,
			...mixMatchSchemesOperations,
			...mixMatchSchemesReadFields,
			...mixMatchSchemesListFields,
			...mixMatchLinesOperations,
			...mixMatchLinesReadFields,
			...mixMatchLinesListFields,
			...claimsOperations,
			...claimsReadFields,
			...claimsListFields,
			...claimsCreateFields,
			...claimsUpdateFields,
			...claimLinesOperations,
			...claimLinesReadFields,
			...claimLinesListFields,
			...salesTransactionsOperations,
			...salesTransactionsReadFields,
			...salesTransactionsListFields,
			...invoicesOperations,
			...invoicesReadFields,
			...invoicesListFields,
			...statementsOperations,
			...statementsReadFields,
			...statementsListFields,
			...ageCodesOperations,
			...ageCodesReadFields,
			...ageCodesListFields,
			...countriesOperations,
			...countriesReadFields,
			...countriesListFields,
			...dutyCodesOperations,
			...dutyCodesReadFields,
			...dutyCodesListFields,
			...labelTypesOperations,
			...labelTypesReadFields,
			...labelTypesListFields,
			...productDivisionsOperations,
			...productDivisionsReadFields,
			...productDivisionsListFields,
			...productDivisionsCreateFields,
			...productDivisionsUpdateFields,
			...productDepartmentsOperations,
			...productDepartmentsReadFields,
			...productDepartmentsListFields,
			...productDepartmentsCreateFields,
			...productDepartmentsUpdateFields,
			...productGroupsOperations,
			...productGroupsReadFields,
			...productGroupsListFields,
			...productGroupsCreateFields,
			...productGroupsUpdateFields
		],
	};

	/**
	 * Main execution method for the Accord Connect node
	 * 
	 * This method handles all API operations for Accord Connect resources,
	 * including parameter processing, request building, and response handling.
	 * 
	 * @param this - The n8n execution context
	 * @returns Promise<INodeExecutionData[][]> - Array of execution data
	 * 
	 * @throws {NodeOperationError} When credentials are missing or invalid
	 * @throws {NodeApiError} When API requests fail or return invalid responses
	 */
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const inputItems = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let itemIndex = 0; itemIndex < inputItems.length; itemIndex++) {
			try {
				const itemResults = await executeForItem.call(this, itemIndex);
				for (const result of itemResults) {
					// Record which input item produced this output so n8n can
					// trace lineage back through the workflow.
					returnData.push({ ...result, pairedItem: { item: itemIndex } });
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: { error: error.message },
						pairedItem: { item: itemIndex },
					});
					continue;
				}
				// executeForItem already raises NodeApiError/NodeOperationError for
				// API failures; anything else gets wrapped so n8n never receives a
				// bare Error from this node.
				throw error instanceof NodeApiError || error instanceof NodeOperationError
					? error
					: new NodeApiError(this.getNode(), error as JsonObject);
			}
		}

		return [returnData];
	}
}

/**
 * FILE STRUCTURE SUMMARY:
 * 
 * 1. IMPORTS & SETUP
 *    - n8n workflow interfaces and utilities
 *    - Auto-generated field definitions from OpenAPI spec
 *    - Logger utility for debugging
 * 
 * 2. NODE DESCRIPTION
 *    - Resource options (customers, products, orders, etc.)
 *    - Auto-generated field arrays spread into properties
 *    - Credential configuration
 * 
 * 3. EXECUTION METHOD
 *    - Credential validation and auth header creation
 *    - Endpoint construction with includeLines support
 *    - Field mapping lookup and parameter processing
 *    - List operations with multiple filter modes
 *    - Non-list operations with body/query parameter routing
 *    - HTTP request construction and execution
 *    - Response processing with unwrap options
 *    - Comprehensive error handling
 * 
 * 4. KEY FEATURES
 *    - Auto-generated fields from OpenAPI specification
 *    - nextID-based pagination for large datasets
 *    - Multiple filter interfaces (common, advanced, raw)
 *    - Include lines functionality for purchase orders
 *    - Flexible create modes (simple fields vs raw JSON)
 *    - Smart parameter processing with displayOptions validation
 *    - Extensive logging for debugging and monitoring
 */


/**
 * Runs the configured operation for a single input item.
 *
 * Split out of execute() so that every parameter read resolves against the
 * item being processed. Previously the whole body read parameters at index 0,
 * so a node fed several items issued one request built from the first item
 * and silently discarded the rest.
 *
 * @param itemIndex - Index of the input item to process
 * @returns The output items produced for this input item
 */
async function executeForItem(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
		/**
		 * Helper function to log API requests consistently across operations
		 * 
		 * @param requestOptions - The HTTP request configuration object
		 * @param context - Optional context string for the log message
		 */
		const logApiRequest = (requestOptions: IHttpRequestOptions, context: string = 'API'): void => {
			logger.debug(`${context} Request Details`, {
				method: requestOptions.method,
				url: requestOptions.url,
				queryParams: requestOptions.qs,
				body: requestOptions.body,
				headers: requestOptions.headers
			});
		};

		// Validate and extract credentials
		const credentials = await this.getCredentials('accordConnectApi');
		if (!credentials || !credentials.username || !credentials.password || !credentials.baseUrl) {
			throw new NodeOperationError(this.getNode(), 'Missing credentials for Accord Connect API');
		}

		// Normalise the configured root: resource paths are appended with a
		// leading slash, so a trailing slash on the credential would produce
		// a double slash (".../v1//customers"), which some servers 404 on.
		const baseUrl = (credentials.baseUrl as string).replace(/\/+$/, '');

		// Extract core operation parameters
		const resource = this.getNodeParameter('resource', itemIndex) as string;
		const operation = this.getNodeParameter('operation', itemIndex) as string;
		const id = this.getNodeParameter('id', itemIndex, '') as string;

		// Build base endpoint and determine HTTP method based on operation type
		let endpoint = `/${resource}`;
		const requestMethod = operation.includes('create') ? 'POST' :
			operation.includes('update') ? 'PUT' :
				operation.includes('list') ? 'GET' :
					operation.includes('delete') ? 'DELETE' : 'GET';

		// Handle special includeLines functionality for purchase orders
		/**
		 * Check for includeLines parameter which allows fetching related line items
		 * in a single request for supported resources (currently purchase orders)
		 */
		let includeLines = false;
		try {
			includeLines = this.getNodeParameter('includeLines', itemIndex, false) as boolean;
		} catch (error) {
			// Parameter not available for this resource, continue with normal flow
		}

		// Modify endpoint based on includeLines configuration
		let usingNestedEndpoint = false;
		let currentIncludeLinesConfig = null;
		
		if (includeLines) {
			// Determine which includeLines config to use based on resource
			switch (resource) {
				case 'purchaseOrders':
					currentIncludeLinesConfig = includeLinesConfig;
					break;
				case 'claims':
					currentIncludeLinesConfig = claimsIncludeLinesConfig;
					break;
				case 'promotions':
					currentIncludeLinesConfig = promotionsIncludeLinesConfig;
					break;
				case 'mixMatchSchemes':
					currentIncludeLinesConfig = mixMatchSchemesIncludeLinesConfig;
					break;
			}
			
			if (currentIncludeLinesConfig) {
				// Use nested endpoint to fetch line items directly
				usingNestedEndpoint = true;
				if (operation.includes('get')) {
					endpoint = currentIncludeLinesConfig.getEndpoint.replace('{id}', id);
				} else if (operation.includes('list')) {
					endpoint = currentIncludeLinesConfig.listEndpoint;
				}
			}
		}
		
		if (!usingNestedEndpoint) {
			// Standard endpoint construction for individual resource operations
			if (operation.includes('get') || operation.includes('update') || operation.includes('delete')) {
				endpoint += `/${id}`;
			}
		}

		// Initialize parameter containers for request building
		const queryParams: IDataObject = {};
		const bodyParams: IDataObject = {};

		// Initialize logger for this execution context
		const logger = createLogger(this.logger, 'AccordConnect');
		
		// Create standardized operation key for field mapping lookup
		const operationKey = operation.startsWith(`${resource}:`) ? operation : `${resource}:${operation}`;
		
		// Log operation setup for debugging
		logger.debug('Processing operation', {
			resource,
			operation,
			operationKey,
			requestMethod,
			endpoint,
			includeLines,
			usingNestedEndpoint
		});

		/**
		 * Field mapping configuration for all supported operations
		 * 
		 * Maps operation keys (resource:operation) to their corresponding
		 * auto-generated field definitions. This enables dynamic parameter
		 * processing based on the selected resource and operation.
		 * 
		 * Format: 'resource:operation' -> field definitions array
		 */
		const fieldMapping: Record<string, INodeProperties[]> = {
			'customers:get': customersReadFields,
			'customers:list': customersListFields,
			'customers:create': customersCreateFields,
			'products:get': productsReadFields,
			'products:list': productsListFields,
			'products:create': productsCreateFields,
			'orders:get': ordersReadFields,
			'orders:list': ordersListFields,
			'orders:create': ordersCreateFields,
			'depots:get': depotsReadFields,
			'depots:list': depotsListFields,
			'purchaseOrders:get': purchaseOrdersReadFields,
			'purchaseOrders:list': purchaseOrdersListFields,
			'purchaseOrders:create': purchaseOrdersCreateFields,
			'purchaseOrders:update': purchaseOrdersUpdateFields,
			'purchaseOrderLines:get': purchaseOrderLinesReadFields,
			'purchaseOrderLines:list': purchaseOrderLinesListFields,
			'attributeGroups:get': attributeGroupsReadFields,
			'attributeGroups:list': attributeGroupsListFields,
			'attributeGroups:create': attributeGroupsCreateFields,
			'attributeGroups:update': attributeGroupsUpdateFields,
			'attributeNames:get': attributeNamesReadFields,
			'attributeNames:list': attributeNamesListFields,
			'attributeNames:create': attributeNamesCreateFields,
			'attributeNames:update': attributeNamesUpdateFields,
			'customerCalls:get': customerCallsReadFields,
			'customerCalls:list': customerCallsListFields,
			'customerCalls:create': customerCallsCreateFields,
			'customerCalls:update': customerCallsUpdateFields,
			'customerSchedules:get': customerSchedulesReadFields,
			'customerSchedules:list': customerSchedulesListFields,
			'customerTypes:get': customerTypesReadFields,
			'customerTypes:list': customerTypesListFields,
			'reps:get': repsReadFields,
			'reps:list': repsListFields,
			'suppliers:get': suppliersReadFields,
			'suppliers:list': suppliersListFields,
			'suppliers:create': suppliersCreateFields,
			'suppliers:update': suppliersUpdateFields,
			'brands:get': brandsReadFields,
			'brands:list': brandsListFields,
			'brandGroups:get': brandGroupsReadFields,
			'brandGroups:list': brandGroupsListFields,
			'contractGroups:get': contractGroupsReadFields,
			'contractGroups:list': contractGroupsListFields,
			'contractPrices:get': contractPricesReadFields,
			'contractPrices:list': contractPricesListFields,
			'listPrices:get': listPricesReadFields,
			'listPrices:list': listPricesListFields,
			'priceGroups:get': priceGroupsReadFields,
			'priceGroups:list': priceGroupsListFields,
			'promotions:get': promotionsReadFields,
			'promotions:list': promotionsListFields,
			'promotionLines:get': promotionLinesReadFields,
			'promotionLines:list': promotionLinesListFields,
			'mixMatchSchemes:get': mixMatchSchemesReadFields,
			'mixMatchSchemes:list': mixMatchSchemesListFields,
			'mixMatchLines:get': mixMatchLinesReadFields,
			'mixMatchLines:list': mixMatchLinesListFields,
			'claims:get': claimsReadFields,
			'claims:list': claimsListFields,
			'claims:create': claimsCreateFields,
			'claims:update': claimsUpdateFields,
			'claimLines:get': claimLinesReadFields,
			'claimLines:list': claimLinesListFields,
			'salesTransactions:get': salesTransactionsReadFields,
			'salesTransactions:list': salesTransactionsListFields,
			'invoices:get': invoicesReadFields,
			'invoices:list': invoicesListFields,
			'statements:get': statementsReadFields,
			'statements:list': statementsListFields,
			'ageCodes:get': ageCodesReadFields,
			'ageCodes:list': ageCodesListFields,
			'countries:get': countriesReadFields,
			'countries:list': countriesListFields,
			'dutyCodes:get': dutyCodesReadFields,
			'dutyCodes:list': dutyCodesListFields,
			'labelTypes:get': labelTypesReadFields,
			'labelTypes:list': labelTypesListFields,
			'productDivisions:get': productDivisionsReadFields,
			'productDivisions:list': productDivisionsListFields,
			'productDivisions:create': productDivisionsCreateFields,
			'productDivisions:update': productDivisionsUpdateFields,
			'productDepartments:get': productDepartmentsReadFields,
			'productDepartments:list': productDepartmentsListFields,
			'productDepartments:create': productDepartmentsCreateFields,
			'productDepartments:update': productDepartmentsUpdateFields,
			'productGroups:get': productGroupsReadFields,
			'productGroups:list': productGroupsListFields,
			'productGroups:create': productGroupsCreateFields,
			'productGroups:update': productGroupsUpdateFields,
		};

		// Get applicable field definitions for the current operation
		const applicableFields = fieldMapping[operationKey] || [];
		
		logger.debug('Applicable Fields', {
			count: applicableFields.length,
			fieldNames: applicableFields.map(f => f.name)
		});

		/**
		 * LIST OPERATIONS PROCESSING
		 * 
		 * List operations support multiple filtering modes:
		 * 1. Common mode: Uses predefined fields with smart parameter processing
		 * 2. Advanced mode: Filter collection with field/operator/value structure  
		 * 3. Raw mode: Direct query string for maximum flexibility
		 * 
		 * Also handles pagination with either limit-based or nextID-based iteration
		 * for large datasets.
		 */
		if (operation.includes('list')) {
			// Debug parameter availability before processing
			logger.debug('Raw Parameter Debug');
			try {
				const filterMode = this.getNodeParameter('filterMode', itemIndex, 'common');
				const customerCode = this.getNodeParameter('customerCode', itemIndex, '');
				logger.debug('Parameters retrieved', { filterMode, customerCode });
			} catch (error) {
				logger.warn('Could not get parameters', { error: error.message });
			}
			
			const filterMode = this.getNodeParameter('filterMode', itemIndex, 'common') as string;
			logger.debug('List Operation Debug', { filterMode });
			
			// COMMON FILTER MODE: Use auto-generated fields with smart processing
			if (filterMode === 'common') {
				// Extract pagination configuration
				const returnAll = this.getNodeParameter('returnAll', itemIndex, false) as boolean;
				const limit = this.getNodeParameter('limit', itemIndex, 100) as number;
				
				logger.debug('Common filters mode', { returnAll, limit });
				
				if (returnAll) {
					/**
					 * FULL DATASET RETRIEVAL with nextID pagination
					 * 
					 * When returnAll is enabled, we use nextID-based pagination to fetch
					 * all records efficiently. This method is preferred over offset-based
					 * pagination for large datasets as it maintains consistency even when
					 * data is being modified during retrieval.
					 */
					const allResults: any[] = [];
					let nextID: string | undefined;
					const batchSize = 1000; // Optimal batch size for API performance
					
					/**
					 * FIELD PARAMETER PROCESSING for pagination batch
					 * 
					 * Process all applicable fields except UI control parameters.
					 * Each field is validated against displayOptions before inclusion.
					 */
					applicableFields.forEach(field => {
						// Skip internal UI control fields that shouldn't be sent to API
						if (field.name === 'returnAll' || field.name === 'limit' ||
							field.name === 'filterMode' || field.name === 'filters' ||
							field.name === 'queryString' || field.name === 'createMode' ||
							field.name === 'jsonBody' || field.name === 'unwrapResponse' ||
							field.name === 'includeLines' || field.name === 'downloadPDFs' ||
							field.name === 'pdfFormat' || field.name === 'invoiceListNotice' ||
							field.name === 'statementsListNotice') {
							return;
						}
						
						// Validate field visibility based on displayOptions configuration
						if (field.displayOptions?.show) {
							let shouldShow = true;
							
							for (const [showKey, showValues] of Object.entries(field.displayOptions.show)) {
								try {
									const currentValue = this.getNodeParameter(showKey, itemIndex, undefined);
									if (Array.isArray(showValues) && !showValues.includes(currentValue as string)) {
										shouldShow = false;
										break;
									}
								} catch (error) {
									// If we can't get the parameter, assume we shouldn't show this field
									shouldShow = false;
									break;
								}
							}
							
							if (!shouldShow) {
								return;
							}
						}
						
						let value;
						try {
							value = this.getNodeParameter(field.name, itemIndex, undefined);
						} catch (error) {
							// If parameter is not available, skip it
							return;
						}
						
						// Debug logging for countOnly parameter
						if (field.name === 'countOnly') {
							logger.debug('countOnly parameter debug', { fieldName: field.name, value, type: typeof value });
						}
						
						if (value !== undefined && value !== null && value !== '' && 
							!(Array.isArray(value) && value.length === 0) &&
							!(typeof value === 'boolean' && value === false) &&
							!(typeof value === 'number' && value === 0)) {
							
							// Special handling for array parameters (convert to comma-separated string)
							if (Array.isArray(value)) {
								queryParams[field.name] = value.join(',');
							} else {
								queryParams[field.name] = value;
							}
							
							// Debug logging when parameter is added
							if (field.name === 'countOnly') {
								logger.debug('countOnly added to queryParams', { value });
							}
						} else if (field.name === 'countOnly') {
							logger.debug('countOnly filtered out', { value, conditions: {
								notUndefined: value !== undefined,
								notNull: value !== null,
								notEmpty: value !== '',
								notEmptyArray: !(Array.isArray(value) && value.length === 0),
								notFalseBoolean: !(typeof value === 'boolean' && value === false),
								notZeroNumber: !(typeof value === 'number' && value === 0)
							}});
						}
					});
					
					do {
						const currentQuery: IDataObject = { ...queryParams, limit: batchSize };
						if (nextID) {
							currentQuery.nextID = nextID;
						}
						
						const requestOptions: IHttpRequestOptions = {
							method: 'GET',
							headers: {
								'Accept': 'application/json',
								'Content-Type': 'application/json',
							},
							url: `${baseUrl}/${resource}`,
							qs: currentQuery,
							json: true,
						};

						logApiRequest(requestOptions, 'Pagination');

						try {
							const response = await this.helpers.httpRequestWithAuthentication.call(this, 'accordConnectApi', requestOptions);

							if (!response || typeof response !== 'object') {
								throw new NodeApiError(this.getNode(), response || {}, { message: 'Invalid API response format' });
							}

							// Extract results from response
							if (response[resource] && Array.isArray(response[resource])) {
								allResults.push(...response[resource]);
							}
							
							// Get nextID for next iteration
							nextID = response._nextID;
							
							// Progress logging for large datasets
							if (allResults.length > 0 && allResults.length % 10000 === 0) {
								logger.debug(`Retrieved ${resource}`, { count: allResults.length });
							}
							
							// Safety check to prevent infinite loops and memory issues
							if (allResults.length > 500000) {
								throw new NodeApiError(this.getNode(), {}, {
									message: 'Dataset too large',
									description: `Retrieved ${allResults.length} records. Consider using filters to narrow your search or disable "Return All" option.`
								});
							}
							
						} catch (error) {
							if (error.httpCode === 429) {
								throw new NodeApiError(this.getNode(), error, {
									message: 'API rate limit exceeded',
									description: 'Try reducing the data volume or using filters to narrow results'
								});
							}
							throw new NodeApiError(this.getNode(), error);
						}
						
					} while (nextID);

					logger.info('Pagination completed', { resource, totalCount: allResults.length });
					
					// Return results in the expected format
					const finalResponse = {
						[resource]: allResults,
						_count: allResults.length
					};
					
					return [{ json: finalResponse }];
				} else {
					// Set limit for single request
					queryParams.limit = limit;
				}
				
				// Use validated common fields (excluding pagination and UI control fields)
				applicableFields.forEach(field => {
					// Skip pagination fields and internal UI control parameters
					if (field.name === 'returnAll' || field.name === 'limit' ||
						field.name === 'filterMode' || field.name === 'filters' ||
						field.name === 'queryString' || field.name === 'createMode' ||
						field.name === 'jsonBody' || field.name === 'unwrapResponse' ||
						field.name === 'includeLines' || field.name === 'downloadPDFs' ||
						field.name === 'pdfFormat' || field.name === 'invoiceListNotice') {
						return;
					}
					
					// Check if this field has displayOptions that need to be satisfied
					if (field.displayOptions?.show) {
						let shouldShow = true;
						
						for (const [showKey, showValues] of Object.entries(field.displayOptions.show)) {
							try {
								const currentValue = this.getNodeParameter(showKey, itemIndex, undefined);
								if (Array.isArray(showValues) && !showValues.includes(currentValue as string)) {
									shouldShow = false;
									break;
								}
							} catch (error) {
								// If we can't get the parameter, assume we shouldn't show this field
								shouldShow = false;
								break;
							}
						}
						
						if (!shouldShow) {
							return;
						}
					}
					
					let value;
					try {
						value = this.getNodeParameter(field.name, itemIndex, undefined);
					} catch (error) {
						// If parameter is not available, skip it
						logger.debug(`Parameter ${field.name} not available`, { error: error.message });
						return;
					}
					
					logger.debug(`Processing parameter ${field.name}`, { value });
					
					// Debug logging for countOnly parameter
					if (field.name === 'countOnly') {
						logger.debug('countOnly parameter debug (location 2)', { fieldName: field.name, value, type: typeof value });
					}
					
					if (value !== undefined && value !== null && value !== '' && 
						!(Array.isArray(value) && value.length === 0) &&
						!(typeof value === 'boolean' && value === false) &&
						!(typeof value === 'number' && value === 0)) {
						
						// Special handling for array parameters (convert to comma-separated string)
						if (Array.isArray(value)) {
							queryParams[field.name] = value.join(',');
							logger.debug(`Added ${field.name} as comma-separated`, { value: queryParams[field.name] });
						} else {
							queryParams[field.name] = value;
							logger.debug(`Added ${field.name}`, { value });
						}
						
						// Debug logging when countOnly parameter is added
						if (field.name === 'countOnly') {
							logger.debug('countOnly added to queryParams (location 2)', { value });
						}
					} else if (field.name === 'countOnly') {
						logger.debug('countOnly filtered out (location 2)', { value, conditions: {
							notUndefined: value !== undefined,
							notNull: value !== null,
							notEmpty: value !== '',
							notEmptyArray: !(Array.isArray(value) && value.length === 0),
							notFalseBoolean: !(typeof value === 'boolean' && value === false),
							notZeroNumber: !(typeof value === 'number' && value === 0)
						}});
					} else {
						logger.debug(`Skipped ${field.name}`, { reason: 'empty/default value' });
					}
				});
			// ADVANCED FILTER MODE: Custom filter collection interface  
			} else if (filterMode === 'advanced') {
				/**
				 * Advanced filtering uses a collection of field/operator/value triplets
				 * allowing users to build complex queries dynamically
				 * 
				 * Note: We can't use standard queryParams for non-equals operators because
				 * n8n always adds '=' which breaks the Accord Connect API format.
				 */
				const filters = this.getNodeParameter('filters', itemIndex, { filterValues: [] }) as { filterValues: Array<{field: string, operator: string, value: string}> };
				
				logger.debug('Advanced Filters Debug', { filters });
				
				if (filters.filterValues && Array.isArray(filters.filterValues)) {
					logger.debug('Processing filters', { count: filters.filterValues.length });
					
					// We'll build these manually and append to the endpoint URL
					const manualQueryParts: string[] = [];
					
					filters.filterValues.forEach((filter, index) => {
						logger.debug(`Processing filter ${index + 1}`, { 
							field: filter.field, 
							operator: filter.operator, 
							operatorType: typeof filter.operator,
							operatorLength: filter.operator?.length,
							value: filter.value,
							isEqualsOperator: filter.operator === '='
						});
						if (filter.field) {
							// Handle empty operator - default to equals
							if (!filter.operator || filter.operator === '') {
								filter.operator = '=';
								logger.debug(`Filter ${index + 1} - defaulted empty operator to '='`);
							}
							
							if (filter.value) {
								if (filter.operator === '=') {
									// Equals operator: use standard queryParams (n8n handles this correctly)
									queryParams[filter.field] = filter.value;
									logger.debug(`Filter ${index + 1} (queryParams)`, { 
										field: filter.field,
										value: filter.value,
										operator: filter.operator
									});
								} else {
									// Non-equals operators: build manually to avoid n8n adding '='
									const queryPart = `${filter.field}[${filter.operator.toUpperCase()}]${filter.value}`;
									manualQueryParts.push(queryPart);
									
									logger.debug(`Filter ${index + 1} (manual)`, { 
										queryPart,
										operator: filter.operator
									});
								}
							} else {
								logger.debug(`Filter ${index + 1} SKIPPED`, { reason: 'missing value', filter });
							}
						} else {
							logger.debug(`Filter ${index + 1} SKIPPED`, { reason: 'missing field', filter });
						}
					});
					
					// Store manual query parts for later URL construction
					if (manualQueryParts.length > 0) {
						queryParams['__manualQuery'] = manualQueryParts.join('&');
						logger.debug('Manual query parts', { parts: manualQueryParts });
					}
				} else {
					logger.debug('No valid filterValues array found');
				}
			
			// RAW QUERY MODE: Direct query string for maximum flexibility
			} else if (filterMode === 'raw') {
				/**
				 * Raw mode allows direct query string input for users who need
				 * complete control over the API query parameters
				 */
				const queryString = this.getNodeParameter('queryString', itemIndex, '') as string;
				if (queryString) {
					// Parse query string manually and add to queryParams
					const pairs = queryString.split('&');
					pairs.forEach(pair => {
						const [key, value] = pair.split('=');
						if (key && value) {
							queryParams[decodeURIComponent(key)] = decodeURIComponent(value);
						}
					});
				}
			}
		} else {
			/**
			 * NON-LIST OPERATIONS PROCESSING
			 * 
			 * For get, create, update, delete operations, process parameters
			 * and determine whether they should go in query string (GET) 
			 * or request body (POST/PUT).
			 */
			applicableFields.forEach(field => {
				// Skip internal UI control parameters
				if (field.name === 'filterMode' || field.name === 'filters' ||
					field.name === 'queryString' || field.name === 'createMode' ||
					field.name === 'jsonBody' || field.name === 'returnAll' ||
					field.name === 'limit' || field.name === 'unwrapResponse' ||
					field.name === 'id' || field.name === 'includeLines' ||
					field.name === 'returnGetResponse' || field.name === 'downloadPDFs' ||
					field.name === 'pdfFormat' || field.name === 'invoiceListNotice') {
					return;
				}
				
				// Check if this field has displayOptions that need to be satisfied
				if (field.displayOptions?.show) {
					let shouldShow = true;
					
					for (const [showKey, showValues] of Object.entries(field.displayOptions.show)) {
						try {
							const currentValue = this.getNodeParameter(showKey, itemIndex, undefined);
							if (Array.isArray(showValues) && !showValues.includes(currentValue as string)) {
								shouldShow = false;
								break;
							}
						} catch (error) {
							// If we can't get the parameter, assume we shouldn't show this field
							shouldShow = false;
							break;
						}
					}
					
					if (!shouldShow) {
						return;
					}
				}
				
				let value;
				try {
					value = this.getNodeParameter(field.name, itemIndex, undefined);
				} catch (error) {
					// If parameter is not available, skip it
					return;
				}

				if (
					value !== undefined &&
					value !== null &&
					value !== '' &&
					!(Array.isArray(value) && value.length === 0) &&
					!(typeof value === 'boolean' && value === false) &&
					!(typeof value === 'number' && value === 0)
				) {
					// Route parameters based on HTTP method
					if (requestMethod === 'GET') {
						// GET operations: all parameters go in query string
						if (Array.isArray(value)) {
							// Special handling: convert array to comma-separated string
							queryParams[field.name] = value.join(',');
						} else {
							queryParams[field.name] = value;
						}
					} else {
						// POST/PUT operations: parameters go in request body
						if (field.type === "fixedCollection" && typeof value === "object" && !Array.isArray(value)) {
							const collectionKeys = Object.keys(value) as string[];
							const firstKey = collectionKeys[0] as keyof typeof value;

							if (collectionKeys.length > 0 && Array.isArray(value[firstKey])) {
								bodyParams[field.name] = (value[firstKey] as any[]).map((item: Record<string, any>) => {
									return Object.fromEntries(
										Object.entries(item).filter(([_, v]) => v !== undefined && v !== null && v !== '' && v !== 0)
									);
								});
							} else {
								bodyParams[field.name] = value;
							}
						} else {
							bodyParams[field.name] = value;
						}
					}
				}
			});
		}

		/**
		 * INVOICE AND STATEMENT LIST VALIDATION
		 *
		 * The invoices and statements list APIs require at least one of: customerCode, repCode, or headOffice.
		 * Validate this requirement and provide a helpful error message.
		 */
		if ((resource === 'invoices' && operation === 'invoices:list') ||
		    (resource === 'statements' && operation === 'statements:list')) {
			const hasCustomerCode = queryParams.customerCode && queryParams.customerCode !== '';
			const hasRepCode = queryParams.repCode && queryParams.repCode !== '';
			const hasHeadOffice = queryParams.headOffice && queryParams.headOffice !== '';

			if (!hasCustomerCode && !hasRepCode && !hasHeadOffice) {
				const resourceName = resource === 'invoices' ? 'invoices' : 'statements';
				throw new NodeOperationError(
					this.getNode(),
					`The ${resourceName} list operation requires at least one of: Customer Code, Rep Code, or Head Office parameters.`,
					{
						description: `Please provide at least one of these filters. This is an API requirement to prevent returning all ${resourceName} in the system.`
					}
				);
			}

			logger.debug(`${resource} list validation passed`, {
				hasCustomerCode,
				hasRepCode,
				hasHeadOffice
			});
		}

		/**
		 * INVOICE AND STATEMENT PDF DOWNLOAD - FORCE ALL FIELDS
		 *
		 * When downloadPDFs is enabled for invoices or statements, force fields=all to ensure
		 * the invoicePDF or statementPDF field is always included in the response.
		 */
		if (resource === 'invoices' || resource === 'statements') {
			try {
				const downloadPDFs = this.getNodeParameter('downloadPDFs', itemIndex, false) as boolean;
				if (downloadPDFs) {
					queryParams.fields = 'all';
					logger.debug('Forcing fields=all for PDF download');
				}
			} catch (error) {
				// Silent fail - don't break the request if this fails
				logger.debug('Failed to set fields=all for PDF download', { error: error.message });
			}
		}

		/**
		 * HTTP REQUEST CONSTRUCTION
		 *
		 * Build the complete HTTP request configuration including headers,
		 * URL, query parameters, and body based on the operation type and parameters.
		 *
		 * Special handling for Accord Connect API query format:
		 * - Equals operators use standard queryParams (n8n handles correctly)
		 * - Non-equals operators require manual URL construction to avoid n8n adding '='
		 */

		// Check if we have manual query parts that need special URL handling
		const manualQuery = queryParams['__manualQuery'] as string;
		let finalUrl = `${baseUrl}${endpoint}`;
		let finalQueryParams = { ...queryParams };
		
		// Remove the manual query marker from normal query params
		if (manualQuery) {
			delete finalQueryParams['__manualQuery'];
		}
		
		// Build the final URL with proper query parameter handling
		if (manualQuery || Object.keys(finalQueryParams).length > 0) {
			const standardQueryParts: string[] = [];
			
			// Add standard query parameters (equals operators)
			Object.entries(finalQueryParams).forEach(([key, value]) => {
				if (value !== undefined && value !== null && value !== '') {
					// Handle arrays by joining with commas (for multiOptions fields)
					const stringValue = Array.isArray(value) ? value.join(',') : String(value);
					standardQueryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(stringValue)}`);
				}
			});
			
			// Combine standard and manual query parts
			const allQueryParts = [...standardQueryParts];
			if (manualQuery) {
				// URL encode the manual query parts to handle special characters like [ and ]
				const encodedManualQuery = manualQuery.split('&').map(part => {
					// Don't encode = signs within each part, but encode everything else
					if (part.includes('=')) {
						const [key, value] = part.split('=', 2);
						return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
					} else {
						// For parts without =, encode the entire part
						return encodeURIComponent(part);
					}
				}).join('&');
				allQueryParts.push(encodedManualQuery);
				
				logger.debug('Manual query encoding', {
					original: manualQuery,
					encoded: encodedManualQuery
				});
			}
			
			if (allQueryParts.length > 0) {
				finalUrl += '?' + allQueryParts.join('&');
			}
			
			logger.debug('URL Construction', {
				standardParts: standardQueryParts,
				manualParts: manualQuery ? [manualQuery] : [],
				finalUrl
			});
		}

		const requestOptions: IHttpRequestOptions = {
			method: requestMethod,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			url: finalUrl,
			// Don't use qs when we have manual query parts to avoid double encoding
			qs: manualQuery ? undefined : (Object.keys(finalQueryParams).length ? finalQueryParams : undefined),
			body: (() => {
				/**
				 * REQUEST BODY CONSTRUCTION for create/update operations
				 * 
				 * Supports multiple modes:
				 * - JSON mode: Direct JSON input for maximum flexibility
				 * - Simple mode: Structured field-based input with automatic wrapping
				 */
				if (operation.includes('create')) {
					const createMode = this.getNodeParameter('createMode', itemIndex, 'simple') as string;
					
					if (createMode === 'json') {
						// Use raw JSON body directly
						const jsonBody = this.getNodeParameter('jsonBody', itemIndex, '{}') as string;
						try {
							return typeof jsonBody === 'string' ? JSON.parse(jsonBody) : jsonBody;
						} catch (error) {
							throw new NodeOperationError(this.getNode(), `Invalid JSON in Raw JSON body: ${error.message}`);
						}
					} else {
						// Use structured fields (simple/advanced mode)
						if (Object.keys(bodyParams).length) {
							// Check if returnGetResponse is enabled and add to request body
							const returnGetResponse = this.getNodeParameter('returnGetResponse', itemIndex, false) as boolean;
							const requestBody: IDataObject = {};
							
							if (operation === 'orders:create') {
								Object.assign(requestBody, bodyParams);
							} else if (operation === 'customers:create') {
								requestBody["customer"] = [bodyParams];
							} else {
								requestBody[resource] = [bodyParams];
							}
							
							// Add response parameter if enabled for supported resources
							if (returnGetResponse) {
								requestBody["response"] = "get";
							}
							
							return requestBody;
						}
					}
				} else {
					// Non-create operations use existing logic
					if (Object.keys(bodyParams).length) {
						return operation === 'orders:create' ? bodyParams : { [resource]: [bodyParams] };
					}
				}
				
				return undefined;
			})(),
			json: true,
	};

	// Log API request details
	logger.debug('API Request', {
		method: requestOptions.method,
		url: requestOptions.url,
		headers: requestOptions.headers,
		body: requestOptions.body,
		qs: requestOptions.qs,
		manualUrlConstruction: !!manualQuery
	});

		try {
		const response = await this.helpers.httpRequestWithAuthentication.call(this, 'accordConnectApi', requestOptions);


	if (!response || typeof response !== 'object') {
		throw new NodeApiError(this.getNode(), response || {}, { message: 'Invalid API response format' });
	}

	// Handle PDF download for invoices and statements if requested
	if (resource === 'invoices' || resource === 'statements') {
		try {
			const downloadPDFs = this.getNodeParameter('downloadPDFs', itemIndex, false) as boolean;
			logger.debug('PDF Download Check', { downloadPDFs, resource });

			if (downloadPDFs) {
				logger.debug('PDF download enabled, starting process...');
				const pdfFormat = this.getNodeParameter('pdfFormat', itemIndex, 'binary') as string;
				logger.debug('PDF Format', { pdfFormat });

				// Get array from response (invoices or statements)
				const resourceKey = resource === 'invoices' ? 'invoices' : 'statements';
				const pdfFieldName = resource === 'invoices' ? 'invoicePDF' : 'statementPDF';
				const idFieldName = resource === 'invoices' ? 'invoiceNumber' : 'statementNumber';

				let items = Array.isArray(response) ? response :
				           (response[resourceKey] && Array.isArray(response[resourceKey])) ? response[resourceKey] :
				           [response];

				logger.debug(`Processing ${resource} for PDFs`, { count: items.length });

				// Download PDFs for each item
				for (const item of items) {
					if (item[pdfFieldName]) {
						try {
							// Strip "GET " prefix if present in the URL
							const pdfUrl = item[pdfFieldName].replace(/^GET\s+/, '');
							logger.debug('Downloading PDF', { url: pdfUrl });

							// Make authenticated request to get PDF (use same auth as main request)
							const pdfResponse = await this.helpers.httpRequestWithAuthentication.call(this, 'accordConnectApi', {
								method: 'GET',
								url: pdfUrl,
								headers: {
									'Content-Type': 'application/json'
								},
								json: true
							});

							// Extract PDF data from response
							logger.debug('PDF Response', { hasDocuments: !!pdfResponse?.documents, docCount: pdfResponse?.documents?.length });

							if (pdfResponse && pdfResponse.documents && pdfResponse.documents.length > 0) {
								const doc = pdfResponse.documents[0];
								const fileStream = doc.fileStream || '';
								const fileName = doc.fileName || `${resource === 'invoices' ? 'invoice' : 'statement'}_${item[idFieldName] || 'unknown'}.pdf`;

								logger.debug('PDF Document found', { fileName, hasFileStream: !!fileStream, streamLength: fileStream.length });

								// Strip data URI prefix if present (data:application/pdf;base64,)
								const base64Data = fileStream.replace(/^data:application\/pdf;base64,/, '');

								if (pdfFormat === 'base64') {
									// Add as base64 string to JSON
									item.pdfBase64 = base64Data;
									item.pdfFileName = fileName;
									item.pdfDownloadStatus = 'success';
									logger.debug('PDF added as base64 to JSON');
								} else {
									// Will be added as binary data later
									item._pdfData = base64Data;
									item._pdfFileName = fileName;
									item.pdfDownloadStatus = 'success';
									logger.debug('PDF data stored for binary attachment');
								}

								logger.debug('PDF downloaded successfully', { fileName });
							} else {
								// No PDF document in response
								item.pdfDownloadStatus = 'error';
								item.pdfDownloadError = 'No PDF document in API response';
								logger.warn('No PDF document in response', { [idFieldName]: item[idFieldName] });
							}
						} catch (pdfError) {
							// Add error status to item data so user can see which failed
							item.pdfDownloadStatus = 'error';
							item.pdfDownloadError = pdfError.message || 'Unknown error downloading PDF';

							logger.warn('Failed to download PDF', {
								[idFieldName]: item[idFieldName],
								error: pdfError.message
							});
							// Continue with other items even if one fails
						}
					} else {
						// No PDF URL available
						item.pdfDownloadStatus = 'not_available';
					}
				}
			}
		} catch (error) {
			logger.warn('Error in PDF download process', { error: error.message });
			// Don't fail the entire operation if PDF download fails
		}
	}

	// Handle unwrap option for GET operations
	if (operation.includes('get')) {
		const unwrapResponse = this.getNodeParameter('unwrapResponse', itemIndex, true) as boolean;

		if (unwrapResponse && Array.isArray(response) && response.length === 1) {
			// Unwrap single-item arrays to just the object
			const item = response[0];
			const outputData: any = { json: item };

			// Add PDF as binary data if present
			if (resource === 'invoices' && item._pdfData) {
				outputData.binary = {
					pdf: {
						data: item._pdfData,
						mimeType: 'application/pdf',
						fileName: item._pdfFileName || 'invoice.pdf'
					}
				};
				// Remove temporary fields
				delete item._pdfData;
				delete item._pdfFileName;
			}

			return [outputData];
		} else if (unwrapResponse && response[resource] && Array.isArray(response[resource]) && response[resource].length === 1) {
			// Handle wrapped responses like { customers: [...] }
			const item = response[resource][0];
			const outputData: any = { json: item };

			// Add PDF as binary data if present
			if (resource === 'invoices' && item._pdfData) {
				outputData.binary = {
					pdf: {
						data: item._pdfData,
						mimeType: 'application/pdf',
						fileName: item._pdfFileName || 'invoice.pdf'
					}
				};
				// Remove temporary fields
				delete item._pdfData;
				delete item._pdfFileName;
			}

			return [outputData];
		}
	}

	// Prepare output data with PDFs as binary data if needed
	const items = Array.isArray(response) ? response :
	              (response[resource] && Array.isArray(response[resource])) ? response[resource] :
	              [response];

	const outputItems = items.map(item => {
		const outputData: any = { json: item };

		// Add PDF as binary data if present
		if (resource === 'invoices' && item._pdfData) {
			logger.debug('Adding PDF as binary data', { fileName: item._pdfFileName, dataLength: item._pdfData?.length });
			outputData.binary = {
				pdf: {
					data: item._pdfData,
					mimeType: 'application/pdf',
					fileName: item._pdfFileName || 'invoice.pdf'
				}
			};
			// Remove temporary fields
			delete item._pdfData;
			delete item._pdfFileName;
		}

		return outputData;
	});

	logger.debug('Preparing output data', { itemCount: outputItems.length, hasBinary: outputItems.some(i => i.binary) });
	return outputItems;

} catch (error) {
	/**
	 * COMPREHENSIVE ERROR HANDLING
	 *
	 * Provides user-friendly error messages for common API error scenarios
	 * with actionable guidance for resolution.
	 */

	// helpers.request throws a StatusCodeError carrying `statusCode`; only an
	// already-wrapped NodeApiError carries `httpCode`, and that as a string.
	// Reading just `httpCode` meant none of the branches below ever matched.
	const status = httpStatusOf(error);

	// Unlicensed API module (HTTP 422)
	//
	// Accord licenses API modules individually, so a perfectly well-formed
	// request can be rejected because the module is not enabled on that
	// instance. The body looks like:
	//   {"errors":[{"errorType":"System","errorMsg":"Unlicensed GET API v1/agecodes"}]}
	// This is not a validation problem, and telling the user to check their
	// fields sends them looking for a fault that is not there.
	// Deliberately NodeOperationError, not NodeApiError: NodeApiError replaces
	// any custom message with a canned one whenever httpCode is a well-known
	// status, and 422 is one of them - so the explanation below would never
	// reach the user. NodeOperationError passes no code and keeps the message.
	// It is also the more accurate class: nothing is wrong with the request,
	// the module simply is not licensed.
	if (status === 422 && isUnlicensedError(error)) {
		throw new NodeOperationError(this.getNode(), error as Error, {
			message: `The ${resource} API is not licensed on this Accord instance`,
			description: 'The request was valid, but this API module is not enabled for your Accord installation. Contact your Accord administrator to have it licensed, or choose a resource your instance supports.'
		});
	}

	// Validation failure (HTTP 422)
	if (status === 422) {
		throw new NodeApiError(this.getNode(), error, {
			message: 'The API rejected the request as invalid',
			description: 'Check that required fields are present and correctly formatted for this operation.'
		});
	}

	// Rate limiting (HTTP 429)
	if (status === 429) {
		throw new NodeApiError(this.getNode(), error, {
			message: 'API rate limit exceeded',
			description: 'The API is currently rate limiting requests. Try again later or reduce the request frequency.'
		});
	}

	// Request too large (HTTP 413)
	if (status === 413) {
		throw new NodeApiError(this.getNode(), error, {
			message: 'Request too large',
			description: 'The request payload is too large. Try using filters to reduce the amount of data or disable "Return All".'
		});
	}

	// Server errors (HTTP 5xx)
	if (status !== undefined && status >= 500) {
		throw new NodeApiError(this.getNode(), error, {
			message: 'Server error',
			description: 'The API server is experiencing issues. Please try again later.'
		});
	}

	// Resource not found (HTTP 404)
	if (status === 404) {
		throw new NodeApiError(this.getNode(), error, {
			message: 'Resource not found',
			description: 'The requested resource was not found. Check your resource configuration and try again.'
		});
	}

	// Generic API error fallback
	throw new NodeApiError(this.getNode(), error);
}
}

/**
 * Extract an HTTP status code from whatever shape the failure arrived in.
 *
 * helpers.request rejects with a request-promise StatusCodeError (`statusCode`,
 * a number), while an already-wrapped NodeApiError exposes `httpCode` as a
 * string. Normalise both to a number.
 */
function httpStatusOf(error: any): number | undefined {
	const raw = error?.httpCode              // NodeApiError, as a string
		?? error?.statusCode
		?? error?.response?.status           // bare axios error
		?? error?.response?.statusCode
		?? error?.cause?.response?.status;   // axios nested inside a NodeApiError
	const code = typeof raw === 'string' ? Number.parseInt(raw, 10) : raw;
	return Number.isFinite(code) ? (code as number) : undefined;
}

/**
 * Does this failure say the API module is not licensed?
 *
 * Accord answers with errorType "System" and an errorMsg beginning
 * "Unlicensed", e.g. "Unlicensed GET API v1/agecodes".
 */
function isUnlicensedError(error: any): boolean {
	// n8n-core wraps the axios failure in a NodeApiError before this node sees
	// it, which keeps the original only as `cause`. The raw body therefore sits
	// at cause.response.data in practice; the rest are fallbacks for the shapes
	// helpers.request and a bare axios error would produce.
	const body = error?.cause?.response?.data
		?? error?.response?.data
		?? error?.error
		?? error?.response?.body
		?? error?.cause?.error
		?? error?.cause?.response?.body;
	const parsed = typeof body === 'string' ? tryParseJson(body) : body;
	const errors = parsed?.errors;
	if (Array.isArray(errors)) {
		return errors.some((e: any) => typeof e?.errorMsg === 'string' && e.errorMsg.trim().toLowerCase().startsWith('unlicensed'));
	}
	return typeof error?.message === 'string' && /\bunlicensed\b/i.test(error.message);
}

function tryParseJson(value: string): any {
	try {
		return JSON.parse(value);
	} catch {
		return undefined;
	}
}
