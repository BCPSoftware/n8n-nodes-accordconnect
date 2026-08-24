# n8n Node Reference

Reference for n8n-specific implementation details and node parameters. For complete API documentation, see the [**Accord Connect API Reference**](http://accordconnectapireference.bcpsoftware.com/accordconnectreference.yaml).

## Table of Contents

- [Node Implementation](#node-implementation)
- [Advanced Filtering](#advanced-filtering)  
- [Field Selection](#field-selection)
- [Response Processing](#response-processing)
- [Special Features](#special-features)
- [Complete API Documentation](#complete-api-documentation)

## Node Implementation

### Accord Connect Node

**Type:** `CUSTOM.accordConnect`
**Purpose:** Interact with Accord Connect API resources

**Resources:** 35 available resources across 7 categories
**Operations:** Create, Read, Update, List (Delete only for Attribute Groups/Names)

### Accord Webhook Trigger

**Type:** `CUSTOM.accordWebhookTrigger`  
**Purpose:** Receive HMAC-verified webhooks

**Key Parameters:**
- **Path**: Webhook endpoint path
- **Secret**: HMAC-SHA256 verification key
- **Lean Mode**: Auto-fetch full objects from `getUrl` field

## Advanced Filtering

The n8n node provides three filtering approaches for List operations:

### Filter Modes

| Mode | Description | Use Case |
|------|-------------|----------|
| **Common** | Predefined filter fields with dropdowns | Quick filtering with known fields |
| **Advanced** | Visual field/operator/value builder | Complex filtering with any field |
| **Raw** | Direct query string input | Advanced users with custom queries |

### Advanced Filter Builder

**Structure:**
```javascript
{
  "filterMode": "advanced",
  "filters": {
    "filterValues": [
      {
        "field": "customerName",      // Dropdown selection
        "operator": "contains",       // Dropdown selection  
        "value": "Corporation"        // Text input
      }
    ]
  }
}
```

### Available Operators

| Operator | Description | Example Use |
|----------|-------------|-------------|
| `=` | Equals | Exact match for IDs, codes |
| `<>` | Not Equals | Exclude specific values |
| `>`, `<`, `>=`, `<=` | Comparisons | Date ranges, numeric values |
| `begins` | Begins With | Code patterns, prefixes |
| `contains` | Contains | Text search, descriptions |
| `matches` | Matches | Pattern matching |

### Raw Query Format

Direct URL parameter format:
```
field1=value1&field2[OPERATOR]value2&field3=value3
```

**Examples:**
```
customerCode=CUST001&customerStatus=ACTIVE
customerName[contains]Corporation&lastUpdate[>=]2024-01-01
productCode[begins]CAT-&canOrder=true
```

## Field Selection

Control which fields are returned to optimize performance and data transfer.

### Field Options

| Option | Behavior | Use Case |
|--------|----------|----------|
| **All Fields** | Return complete record | Data synchronization |
| **Empty/Default** | API default field set | Standard operations |
| **Custom Selection** | Choose specific fields from dropdown | Reports, performance optimization |

### Dynamic Field Dropdowns

Fields are dynamically populated from the OpenAPI specification for each resource:

- **Auto-generated** from API schema
- **Alphabetically sorted** for easy selection
- **Excludes** system fields (`fields`, `sort`, `countOnly`)
- **Title-cased** display names (e.g., `customerCode` → `Customer Code`)

**Example Selection:**
```javascript
// Performance optimized
fields: ["customerCode", "customerName", "lastUpdate"]

// Complete data
fields: ["all"]

// API defaults  
fields: []
```

## Response Processing

### Response Formats

| Parameter | Default | Description |
|-----------|---------|-------------|
| `unwrapResponse` | true | Return single object vs array for GET operations |
| `nested` | true | Enable nested data structure |
| `hideNestedKeys` | false | Flatten nested object keys |

### Response Examples

**Standard Response (unwrapResponse=true):**
```javascript
{
  "customerCode": "CUST001",
  "customerName": "Acme Corp",
  "deliveryAddress": {
    "address1": "123 Main St",
    "postcode": "12345"
  }
}
```

**Flattened Response (nested=false, hideNestedKeys=true):**
```javascript
{
  "customerCode": "CUST001", 
  "customerName": "Acme Corp",
  "deliveryAddress1": "123 Main St",
  "deliveryPostcode": "12345"
}
```

### Pagination

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `returnAll` | boolean | false | Return all records vs limited set |
| `limit` | number | 100 | Maximum records (1-10000) |
| `countOnly` | boolean | false | Return only record count |

## Special Features

### Include Lines (Purchase Orders)

Special functionality for retrieving related line items:

```javascript
// Header only
{
  "resource": "purchaseOrders",
  "operation": "get",
  "id": "PO123",
  "includeLines": false
}

// Include all line items
{
  "resource": "purchaseOrders",
  "operation": "get",
  "id": "PO123",
  "includeLines": true
}
```

**API Endpoints:**
- **Normal**: `/v1/purchaseOrders/{id}`
- **With Lines**: `/v1/purchaseOrders/{id}/purchaseOrderLines`

### PDF Download (Invoices & Statements)

Automatic PDF document retrieval with flexible output formats:

```javascript
// Binary format (for file operations)
{
  "resource": "invoices",
  "operation": "get",
  "id": "INV123",
  "downloadPDFs": true,
  "pdfFormat": "binary"
}

// Base64 format (for storage/APIs)
{
  "resource": "statements",
  "operation": "list",
  "customerCode": "CUST001",
  "downloadPDFs": true,
  "pdfFormat": "base64"
}
```

**Features:**
- **Automatic retrieval**: Fetches PDF from `invoicePDF`/`statementPDF` field
- **Binary output**: Stores as n8n binary data for file operations
- **Base64 output**: Returns as base64 string in JSON for APIs/storage
- **Status tracking**: Adds `pdfDownloadStatus` field (success/error/not_available)
- **Error handling**: Includes `pdfDownloadError` field when download fails
- **Field forcing**: Automatically sets `fields=all` when `downloadPDFs=true` to ensure PDF field is returned

**Required Filters (List operations):**
Invoice and statement list operations require at least one of:
- `customerCode`
- `repCode`
- `headOffice`

A warning notice appears in the UI to inform users of this requirement.

### Creation Modes

Available for resources supporting CREATE operations:

| Mode | Description | Use Case |
|------|-------------|----------|
| **Simple** | Required + common fields only | Quick creation |
| **Advanced** | All available fields | Complete record creation |
| **Raw** | Direct JSON input | Advanced users, bulk operations |

### Template-Based Creation

Some resources (like Customers, Claims) require template or type specification:

```javascript
// Customer creation
{
  "templateID": "STANDARD",    // Required
  "customerName": "Acme Corp"  // Required
}

// Claims creation
{
  "customerCode": "CUST001",   // Required
  "claimType": "QUALITY",      // Required
  "claimDate": "2024-01-01"    // Required
}
```

## Detailed Resource Reference

### Core Resources

#### Customers
**Operations:** Create, Read, Update, List  
**Key Fields:** customerCode, customerName, customerStatus, templateID  
**Special Features:** Template-based creation, advanced filtering

#### Products  
**Operations:** Create, Read, Update, List  
**Key Fields:** productCode, productName, productStatus, canOrder  
**Special Features:** Status management, inventory tracking

#### Orders
**Operations:** Create, Read, Update, List  
**Key Fields:** orderCode, customerCode, orderDate, deliveryDate  
**Special Features:** Delivery scheduling, order status tracking

#### Depots
**Operations:** Read, List  
**Key Fields:** depotCode, depotName, address, active  
**Special Features:** Location management, read-only resource

#### Suppliers
**Operations:** Create, Read, Update, List  
**Key Fields:** supplierCode, supplierName, supplierStatus  
**Special Features:** Supplier management, contact information

### Purchasing & Inventory

#### Purchase Orders
**Operations:** Create, Read, Update, List
**Key Fields:** poNumber, supplierCode, orderDate, deliveryDate
**Special Features:** Include lines option (`includeLines` parameter)

#### Purchase Order Lines
**Operations:** Read, List
**Key Fields:** poNumber, lineNumber, productCode, quantity
**Special Features:** Line item details, read-only resource

#### Claims
**Operations:** Create, Read, Update, List
**Key Fields:** customerCode, claimType, claimDate, totalAmount
**Special Features:** Claims management, status tracking

#### Claim Lines
**Operations:** Read, List
**Key Fields:** claimNumber, lineNumber, productCode, claimAmount
**Special Features:** Claim line items, read-only resource

### Financial & Documents

#### Invoices
**Operations:** Read, List
**Key Fields:** invoiceNumber, customerCode, invoiceDate, depot, totalValue, invoicePDF
**Special Features:** PDF download (binary/base64), requires customerCode/repCode/headOffice filter
**PDF Download:** Automatic PDF retrieval with `downloadPDFs` parameter, supports binary data or base64 string output

#### Statements
**Operations:** Read, List
**Key Fields:** statementNumber, customerCode, statementDate, companyCode, ledgerCode, statementPDF
**Special Features:** PDF download (binary/base64), requires customerCode/repCode/headOffice filter
**PDF Download:** Automatic PDF retrieval with `downloadPDFs` parameter, supports binary data or base64 string output

#### Sales Transactions
**Operations:** Read, List
**Key Fields:** customerCode, repCode, documentType, documentRef, transactionDate
**Special Features:** Transaction history, comprehensive filtering

### Customer Management

#### Customer Calls
**Operations:** Create, Read, Update, List  
**Key Fields:** customerCode, callDate, callType, notes  
**Special Features:** Activity tracking, call history

#### Customer Schedules
**Operations:** Read, List  
**Key Fields:** customerCode, dayOfWeek, visitFrequency  
**Special Features:** Schedule information, read-only resource

#### Customer Types
**Operations:** Read, List  
**Key Fields:** customerTypeCode, customerTypeName, description  
**Special Features:** Type definitions, read-only resource

#### Reps
**Operations:** Read, List  
**Key Fields:** repCode, repName, active, territory  
**Special Features:** Sales representatives, read-only resource

### Product & Pricing

#### Brands
**Operations:** Read, List  
**Key Fields:** brandCode, brandName, status, description  
**Special Features:** Brand information, read-only resource

#### Brand Groups
**Operations:** Read, List  
**Key Fields:** brandGroupCode, brandGroupName, description  
**Special Features:** Brand categorization, read-only resource

#### Contract Groups
**Operations:** Read, List  
**Key Fields:** contractGroupCode, contractGroupName, description  
**Special Features:** Contract management, read-only resource

#### Contract Prices
**Operations:** Read, List  
**Key Fields:** contractCode, productCode, price, effectiveDate  
**Special Features:** Contract-specific pricing, read-only resource

#### List Prices
**Operations:** Read, List  
**Key Fields:** productCode, listPrice, effectiveDate, currency  
**Special Features:** Standard pricing, read-only resource

#### Price Groups
**Operations:** Read, List
**Key Fields:** priceGroupCode, priceGroupName, description
**Special Features:** Price categorization, read-only resource

#### Product Divisions
**Operations:** Create, Read, Update, List
**Key Fields:** productDivision, description, lastUpdate
**Special Features:** Full CRUD support (no delete), product hierarchy management

#### Product Departments
**Operations:** Create, Read, Update, List
**Key Fields:** productDepartment, description, lastUpdate
**Special Features:** Full CRUD support (no delete), product hierarchy management

#### Product Groups
**Operations:** Create, Read, Update, List
**Key Fields:** productGroup, description, lastUpdate
**Special Features:** Full CRUD support (no delete), product hierarchy management

### Promotions & Schemes

#### Promotions
**Operations:** Read, List  
**Key Fields:** promotionCode, promotionName, startDate, endDate  
**Special Features:** Promotion management, date range filtering

#### Promotion Lines
**Operations:** Read, List  
**Key Fields:** promotionCode, lineNumber, productCode, discountAmount  
**Special Features:** Promotion line items, read-only resource

#### Mix Match Schemes
**Operations:** Read, List  
**Key Fields:** schemeCode, schemeName, startDate, endDate  
**Special Features:** Mix & match deals, read-only resource

#### Mix Match Lines
**Operations:** Read, List  
**Key Fields:** schemeCode, lineNumber, productCode, quantity  
**Special Features:** Mix & match line items, read-only resource

### Configuration & Attributes

#### Age Codes
**Operations:** Read, List
**Key Fields:** ageCode, ageMessage, lastUpdate
**Special Features:** Age code definitions, read-only resource

#### Attribute Groups
**Operations:** Create, Read, Update, Delete, List
**Key Fields:** attributeGroupCode, attributeGroupName, description
**Special Features:** Full CRUD support, configuration management

#### Attribute Names
**Operations:** Create, Read, Update, Delete, List
**Key Fields:** attributeNameCode, attributeName, attributeGroupCode
**Special Features:** Full CRUD support, hierarchical structure

#### Countries
**Operations:** Read, List
**Key Fields:** countryCode, countryName, lastUpdate
**Special Features:** Country code definitions, read-only resource

#### Duty Codes
**Operations:** Read, List
**Key Fields:** dutyCode, description, lastUpdate
**Special Features:** Duty code definitions, read-only resource

#### Label Types
**Operations:** Read, List
**Key Fields:** labelType, description, lastUpdate
**Special Features:** Label type definitions, read-only resource

## Error Handling

### n8n-Specific Error Processing

The node automatically handles:
- **API errors** with proper n8n error formatting
- **Validation errors** with field-specific messages
- **Network timeouts** with configurable timeout (1-600 seconds)
- **Rate limiting** with appropriate retry logic

### Common Error Scenarios

| Error | Cause | Solution |
|-------|-------|----------|
| **422 Validation** | Missing required fields | Check `templateID`, required fields |
| **422 Unlicensed** | API module not licensed on your Accord instance | `errorMsg` reads "Unlicensed GET API v1/...". Contact your Accord administrator |
| **400 Bad Request** | Invalid filter syntax | Verify operator usage, field names |
| **401 Unauthorized** | Invalid credentials | Update API credentials |
| **404 Not Found** | Resource doesn't exist | Verify resource ID |

## Complete API Documentation

For comprehensive API documentation including:
- **All endpoint details**
- **Complete parameter lists**  
- **Request/response schemas**
- **Authentication requirements**
- **Rate limiting information**

Visit the official **[Accord Connect API Reference](http://accordconnectapireference.bcpsoftware.com/accordconnectreference.yaml)**

---

**Need Help?**
- [User Guide](./USER_GUIDE.md) - Workflow examples and usage patterns
- [Troubleshooting](./TROUBLESHOOTING.md) - Common issues and solutions
