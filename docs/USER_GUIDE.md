# n8n Accord Connect - User Guide

Complete guide for using the n8n Accord Connect integration effectively.

## Table of Contents

- [Overview](#overview)
- [Node Types](#node-types)
- [Resources & Operations](#resources--operations)
- [Advanced Features](#advanced-features)
- [Example Workflows](#example-workflows)
- [Best Practices](#best-practices)
- [Configuration Reference](#configuration-reference)

## Overview

The n8n Accord Connect integration provides two main node types:

1. **Accord Connect Node** - Perform API operations (CRUD + List)
2. **Accord Webhook Trigger** - Receive real-time updates with signature verification

### Supported Resources

| Resource | Create | Read | Update | Delete | List | Special Features |
|----------|--------|------|--------|--------|------|------------------|
| **Customers** | ✅ | ✅ | ✅ | ❌ | ✅ | Advanced filtering, templates |
| **Products** | ✅ | ✅ | ✅ | ❌ | ✅ | Status management |
| **Orders** | ✅ | ✅ | ✅ | ❌ | ✅ | Delivery scheduling |
| **Depots** | ❌ | ✅ | ❌ | ❌ | ✅ | Location management |
| **Suppliers** | ✅ | ✅ | ✅ | ❌ | ✅ | Supplier management |
| **Purchase Orders** | ✅ | ✅ | ✅ | ❌ | ✅ | Include lines option |
| **Purchase Order Lines** | ❌ | ✅ | ❌ | ❌ | ✅ | Line item details |
| **Claims** | ✅ | ✅ | ✅ | ❌ | ✅ | Claims management |
| **Claim Lines** | ❌ | ✅ | ❌ | ❌ | ✅ | Claim line items |
| **Customer Calls** | ✅ | ✅ | ✅ | ❌ | ✅ | Activity tracking |
| **Customer Schedules** | ❌ | ✅ | ❌ | ❌ | ✅ | Schedule information |
| **Customer Types** | ❌ | ✅ | ❌ | ❌ | ✅ | Type definitions |
| **Reps** | ❌ | ✅ | ❌ | ❌ | ✅ | Sales representatives |
| **Brands** | ❌ | ✅ | ❌ | ❌ | ✅ | Brand information |
| **Brand Groups** | ❌ | ✅ | ❌ | ❌ | ✅ | Brand categorization |
| **Contract Groups** | ❌ | ✅ | ❌ | ❌ | ✅ | Contract management |
| **Contract Prices** | ❌ | ✅ | ❌ | ❌ | ✅ | Contract-specific pricing |
| **List Prices** | ❌ | ✅ | ❌ | ❌ | ✅ | Standard pricing |
| **Price Groups** | ❌ | ✅ | ❌ | ❌ | ✅ | Price categorization |
| **Promotions** | ❌ | ✅ | ❌ | ❌ | ✅ | Promotion management |
| **Promotion Lines** | ❌ | ✅ | ❌ | ❌ | ✅ | Promotion line items |
| **Mix Match Schemes** | ❌ | ✅ | ❌ | ❌ | ✅ | Mix & match deals |
| **Mix Match Lines** | ❌ | ✅ | ❌ | ❌ | ✅ | Mix & match line items |
| **Age Codes** | ❌ | ✅ | ❌ | ❌ | ✅ | Age code definitions |
| **Attribute Groups** | ✅ | ✅ | ✅ | ✅ | ✅ | Full CRUD support |
| **Attribute Names** | ✅ | ✅ | ✅ | ✅ | ✅ | Full CRUD support |
| **Invoices** | ❌ | ✅ | ❌ | ❌ | ✅ | PDF download, required filters |
| **Statements** | ❌ | ✅ | ❌ | ❌ | ✅ | PDF download, required filters |
| **Sales Transactions** | ❌ | ✅ | ❌ | ❌ | ✅ | Transaction history |

> **Availability depends on your Accord licence.** The table above lists what the
> node supports, not what your installation permits. Accord licenses API modules
> individually, so selecting a resource your instance does not license returns a
> 422 with `"Unlicensed GET API v1/..."`. That is a licensing matter for your
> Accord administrator, not a problem with the request. See
> [Troubleshooting](./TROUBLESHOOTING.md#unlicensed-api-modules).

## Node Types

### Accord Connect Node

The main API integration node for performing operations on Accord Connect resources.

**Basic Configuration:**
- **Credentials**: Select your Accord Connect API credentials
- **Resource**: Choose the data type (Customers, Orders, etc.)
- **Operation**: Select what to do (Create, Get, Update, List)

### Accord Webhook Trigger

Receives real-time updates from external systems with HMAC signature verification.

**Basic Configuration:**
- **Path**: Endpoint path (e.g., "customers", "orders")
- **Secret**: HMAC secret key shared with the source system
- **Auto Respond**: Whether to automatically send HTTP responses
- **Parse JSON**: Parse request body as JSON

## Resources & Operations

The Accord Connect node supports **26 resources** with varying operation capabilities. See the [main README](../README.md#available-operations) for the complete operations table.

### Common Operation Patterns

#### Create Operations
**Modes Available:**
- **Simple**: Required fields only
- **Advanced**: All available fields  
- **Raw**: Direct JSON input

**Example (Customer Creation):**
```javascript
// Simple Mode
{
  "templateID": "STANDARD",
  "customerName": "Acme Corporation"
}

// Advanced Mode  
{
  "customerCode": "ACME001",
  "customerName": "Acme Corporation", 
  "deliveryAddress1": "123 Business St",
  "phoneNo": "555-0123",
  "email": "contact@acme.com"
}
```

#### List Operations
**Filter Modes:**
- **Common**: Predefined filter fields with dropdowns
- **Advanced**: Visual field/operator/value builder
- **Raw Query**: Direct query string input

**Advanced Filter Example:**
- Field: `Customer Name` (dropdown selection)
- Operator: `Contains` (dropdown selection)
- Value: `Corporation` (text input)

**Available Operators:**
- `=` (Equals), `<>` (Not Equals)
- `>`, `<`, `>=`, `<=` (Comparisons)  
- `begins`, `contains`, `matches` (Text matching)

#### Get Operations
**Standard Parameters:**
- **ID**: Resource identifier (required)
- **Fields**: Select specific fields to return
- **Unwrap Response**: Return single object vs array

### Key Resource Highlights

#### Purchase Orders - Include Lines
Retrieve line items with header data in a single API call:

```javascript
// Normal: Header only
{
  "resource": "purchaseOrders",
  "operation": "get", 
  "id": "PO123",
  "includeLines": false
}

// Include Lines: All line items
{
  "resource": "purchaseOrders",
  "operation": "get",
  "id": "PO123", 
  "includeLines": true  // ← Retrieves line items
}
```

#### Template-Based Creation
Resources like Customers support template-based creation:
- **templateID**: Defines default field values
- **Required**: Always include for create operations
- **Common Values**: "STANDARD", "RETAIL", "WHOLESALE"

#### Full CRUD Resources
Only **Attribute Groups** and **Attribute Names** support DELETE operations for complete CRUD functionality.

## Advanced Features

### Field Selection

Control which fields are returned in API responses to optimize performance.

**Options:**
- **All Fields**: Return complete record
- **Default Fields**: API default field set
- **Custom Selection**: Choose specific fields from dropdown

**Example Use Cases:**
- **Reports**: Select only name and status fields
- **Synchronization**: Get all fields for complete records
- **Performance**: Minimize data transfer with essential fields only

### Advanced Filtering

Build complex queries using the advanced filter system.

#### Filter Builder Interface
1. **Field**: Dropdown with all available query parameters
2. **Operator**: Dropdown with valid operators for the API
3. **Value**: Input field for filter value

#### Available Operators
- **Equals (=)**: Exact match
- **Not Equals (<>)**: Exclude matches  
- **Greater Than (>)**: Numeric/date comparison
- **Less Than (<)**: Numeric/date comparison
- **Greater Than or Equal (>=)**: Inclusive comparison
- **Less Than or Equal (<=)**: Inclusive comparison  
- **Begins With**: Text starts with value
- **Contains**: Text includes value
- **Matches**: Pattern matching

#### Multiple Filters
Add multiple filter conditions:
- Each condition is AND-ed together
- Use Raw Query mode for OR conditions
- Combine different field types

**Example Multi-Filter:**
```
Filter 1: customerStatus = ACTIVE
Filter 2: lastUpdate > 2024-01-01  
Filter 3: customerName contains "Corp"
```

### Pagination & Performance

#### Return All vs Limited Results
- **Return All**: Retrieves complete dataset (use carefully)
- **Limited**: Set specific limit (recommended: 100-1000)

#### Best Practices
- Start with small limits during testing
- Use field selection to reduce data size
- Implement pagination in workflows for large datasets
- Monitor API rate limits

### Error Handling

#### Common HTTP Status Codes
- **200**: Success
- **400**: Bad Request - Check parameters
- **401**: Unauthorized - Check credentials
- **404**: Not Found - Check resource ID
- **422**: Validation Error - Check required fields, *or* the API module is not licensed on your Accord instance
- **500**: Server Error - Contact API administrator

#### Retry Strategies
1. **Temporary Failures**: Implement retry with exponential backoff
2. **Rate Limits**: Add delays between requests
3. **Validation Errors**: Check and correct data before retry

## Example Workflows

### 1. Customer Sync Workflow

**Trigger:** Schedule (daily at 6 AM)
**Purpose:** Sync new/updated customers to external CRM

```
Schedule Trigger
└── Accord Connect (List Customers)
    ├── Filter: lastUpdate > yesterday
    └── For Each Customer
        └── HTTP Request (to CRM API)
        └── Slack Notification (on errors)
```

**Configuration:**
- Resource: `Customers`
- Operation: `List`
- Filter Mode: `Advanced`
- Filter: `lastUpdate > {{ $now.minus({ days: 1 }).toISO() }}`

### 2. Order Processing Workflow

**Trigger:** Accord Webhook (Orders)
**Purpose:** Process new orders and send notifications

```
Webhook Trigger
└── Switch Node (by order status)
    ├── Case: NEW
    │   ├── Email Notification (to sales team)
    │   └── Update CRM (create opportunity)
    ├── Case: SHIPPED  
    │   ├── SMS Notification (to customer)
    │   └── Update Tracking System
    └── Default
        └── Log Unknown Status
```

**Webhook Configuration:**
- Path: `orders`  
- Secret: `your-hmac-secret-key`
- Parse JSON: `true`

### 3. Inventory Alert Workflow

**Trigger:** Schedule (every 2 hours)
**Purpose:** Monitor low stock and send alerts

```
Schedule Trigger  
└── Accord Connect (List Products)
    ├── Filter: canOrder = false
    └── IF Node (stock below threshold)
        └── Slack Channel Notification
        └── Create Purchase Requisition
```

### 4. Customer Onboarding Workflow

**Trigger:** Manual/External API
**Purpose:** Create customer with validation

```
Manual Trigger
└── Validate Input Data
    ├── Check Required Fields
    └── Accord Connect (Create Customer)
        ├── Success: Send Welcome Email
        └── Error: Notify Admin
```

**Create Customer Config:**
- Resource: `Customers`
- Operation: `Create`
- Create Mode: `Simple`
- Fields: templateID, customerName, email, phoneNo

### 5. Purchase Order Processing

**Trigger:** File Trigger (CSV upload)
**Purpose:** Bulk create purchase orders

```
File Trigger (CSV)
└── CSV Parser
    └── For Each Row
        ├── Accord Connect (Create Purchase Order)
        ├── Include Lines: true
        └── Log Results
    └── Summary Email Report
```

### 6. Claims Management Workflow

**Trigger:** Manual/External API  
**Purpose:** Create and track customer claims

```
Manual Trigger
└── Accord Connect (Create Claim)
    ├── Customer Code: Required
    ├── Claim Type: QUALITY/DELIVERY/OTHER
    ├── Claim Date: Current date
    └── Success Branch
        ├── Accord Connect (List Claim Lines)
        ├── Email Notification (to customer service)
        └── Update CRM System
```

**Create Claim Config:**
- Resource: `Claims`
- Operation: `Create`
- Required Fields: customerCode, claimType, claimDate
- Optional: totalAmount, reason, reference

### 7. Product Pricing Analysis

**Trigger:** Schedule (weekly)
**Purpose:** Analyze pricing across different price groups

```
Schedule Trigger
└── Parallel Branches
    ├── Branch 1: List List Prices
    ├── Branch 2: List Contract Prices  
    ├── Branch 3: List Price Groups
    └── Merge & Analysis
        ├── Calculate price variances
        ├── Identify pricing opportunities
        └── Generate Excel Report
```

### 8. Promotion Monitoring

**Trigger:** Schedule (daily)
**Purpose:** Monitor active promotions and notify of expiring deals

```
Schedule Trigger
└── Accord Connect (List Promotions)
    ├── Filter: endDate >= today
    ├── Filter: startDate <= today
    └── For Each Promotion
        ├── Accord Connect (List Promotion Lines)
        ├── Check expiration (within 7 days)
        └── Send Expiration Alerts
```

### 9. Brand Performance Report

**Trigger:** Schedule (monthly)
**Purpose:** Generate brand performance reports

```
Schedule Trigger
└── Accord Connect (List Brands)
    └── For Each Brand
        ├── Accord Connect (List Products by Brand)
        ├── Calculate Sales Metrics
        ├── Accord Connect (List Brand Groups)
        └── Compile Performance Report
    └── Email Summary Report
```

## Best Practices

### Performance Optimization

1. **Use Field Selection**
   - Only request needed fields
   - Reduces bandwidth and processing time
   - Improves API response speed

2. **Implement Proper Pagination**
   - Don't use "Return All" for large datasets
   - Use limits of 100-1000 records per request
   - Implement offset-based pagination for complete datasets

3. **Filter at API Level**
   - Use API filters instead of n8n filtering
   - Reduces data transfer and processing
   - Leverages database indexing

### Security Best Practices  

1. **Credential Management**
   - Use n8n's credential system
   - Never hardcode API keys in workflows
   - Rotate keys regularly

2. **Webhook Security**
   - Always use HMAC signature verification
   - Use strong, unique secrets
   - Monitor for failed verification attempts

3. **Data Handling**
   - Be mindful of sensitive customer data
   - Implement proper error logging without exposing secrets
   - Use secure communication channels

### Error Handling Strategies

1. **Implement Retry Logic**
   ```
   Try: API Request
   Catch: 
     ├── If 5xx Error: Retry with backoff
     ├── If 4xx Error: Log and continue  
     └── If Network Error: Retry 3 times
   ```

2. **Graceful Degradation**
   - Have fallback options for critical workflows
   - Queue failed operations for later retry
   - Notify administrators of systematic failures

3. **Monitoring & Alerting**
   - Set up alerts for workflow failures
   - Monitor API response times
   - Track error patterns and resolve proactively

### Workflow Design Patterns

1. **ETL Pattern**
   ```
   Extract (Accord API)
   └── Transform (data processing)
       └── Load (external system)
   ```

2. **Event-Driven Pattern**
   ```  
   Webhook Trigger
   └── Route by event type
       ├── Process event
       └── Send notifications
   ```

3. **Batch Processing Pattern**
   ```
   Schedule Trigger
   └── Get data in batches
       └── Process each batch
           └── Update status
   ```

## Configuration Reference

### Credential Configuration

**Required Fields:**
- **API URL**: Full API endpoint URL
  - Format: `https://your-domain.com/connect/rest/api`
  - Include `/connect/rest/api` path
- **API Key**: Your authentication token

**Testing Connection:**
- Use the "Test" button in credential configuration
- Verify with a simple List operation on a known resource

### Common Parameters

#### All Operations
- **Timeout**: Request timeout in seconds (default: 60)
- **Nested**: Control response data nesting (default: true)
- **Hide Nested Keys**: Simplify response structure (default: false)

#### List Operations
- **Return All**: Retrieve all records vs limited set
- **Limit**: Maximum number of records (1-10000)
- **Count Only**: Return only record count, not data
- **Sort**: Order results by field (ascending/descending)

#### Field Selection
- **All Fields**: Include all available fields
- **Custom**: Select specific fields from dropdown
- **Default**: Use API default field set

### Advanced Configuration

#### Filter Modes
1. **Common Filters**: Predefined field inputs
2. **Advanced Filters**: Visual filter builder  
3. **Raw Query**: Direct query string input

#### Webhook Configuration
- **Path**: Endpoint identifier (alphanumeric, no special chars)
- **Secret**: HMAC-SHA256 shared secret
- **Auto Respond**: Send automatic HTTP responses
- **Lean Mode**: Fetch full objects from `getUrl` field

## Troubleshooting

For detailed troubleshooting steps, see the [Troubleshooting Guide](./TROUBLESHOOTING.md).

**Quick Fixes:**
- **No data returned**: Check filters and permissions
- **Authentication errors**: Verify credentials and API key
- **Timeout errors**: Increase timeout or reduce data size
- **Validation errors**: Check required fields and data formats

## Next Steps

- **Advanced Workflows**: Explore complex multi-step processes
- **API Integration**: Connect with other systems and services
- **Production Deployment**: Set up monitoring and scaling
- **Custom Development**: Extend functionality with custom code

---

**Need More Help?**
- [Troubleshooting Guide](./TROUBLESHOOTING.md) - Common issues & solutions
- [API Reference](./API_REFERENCE.md) - Complete parameter documentation  
- [GitHub Issues](https://github.com/BCPSoftware/n8n-nodes-accordconnect/issues) - Bug reports & feature requests