# Troubleshooting Guide

Complete solutions for common issues with the n8n Accord Connect integration.

## Quick Diagnosis

**Start here for fast issue resolution:**

| Symptom | Likely Cause | Quick Fix |
|---------|-------------|-----------|
| Node not in n8n | Installation incomplete | [Restart n8n](#node-installation-issues) |
| 401/403 errors | Invalid credentials | [Check API key](#authentication-errors) |
| No data returned | Filter too restrictive | [Review filters](#data-issues) |
| Webhook 404s | Workflow not active | [Activate workflow](#webhook-issues) |
| Timeout errors | Large dataset/slow API | [Reduce scope](#performance-issues) |

## Installation Issues

### Node Not Appearing in n8n

**Symptoms:**
- Accord Connect nodes don't appear in node panel
- Search for "Accord" returns no results

**Solutions:**

1. **Restart n8n completely**
   ```bash
   # Stop n8n
   pkill -f n8n
   
   # Start n8n
   n8n start
   ```

2. **Verify installation**
   ```bash
   # Check if package is installed
   npm list -g | grep accordconnect
   
   # Reinstall if missing
   npm install -g n8n-nodes-accordconnect --force
   ```

3. **Check n8n logs for errors**
   ```bash
   # Look for loading errors
   tail -f ~/.n8n/logs/n8n.log | grep -i accord
   ```

4. **Clear n8n cache**
   ```bash
   rm -rf ~/.n8n/cache
   n8n start
   ```

### Installation Verification

**Test successful installation:**

1. **Check node panel**: Search for "Accord Connect"
2. **Create test workflow**: Add both Accord Connect nodes
3. **Verify credentials**: Create API credential without errors

## Authentication Errors

### 401 Unauthorized

**Symptoms:**
- Error: "401 - Unauthorized"  
- API requests fail with authentication error

**Solutions:**

1. **Verify API credentials**
   - ✅ API URL format: `https://your-domain.com/connect/rest/api`
   - ✅ Include `/connect/rest/api` path
   - ✅ API key is valid and active
   - ✅ No extra spaces in URL or key

2. **Test connection manually**
   ```bash
   # Test API endpoint
   curl -H "Authorization: Bearer YOUR_API_KEY" \
        "https://your-domain.com/connect/rest/api/v1/customers?limit=1"
   ```

3. **Check API key permissions**
   - Verify key has access to requested resources
   - Contact API administrator if needed
   - Try different resource (e.g., Customers vs Orders)

### 403 Forbidden

**Symptoms:**
- Error: "403 - Forbidden"
- Some operations work, others don't

**Solutions:**

1. **Check resource permissions**
   - API key may have limited resource access
   - Try different operations (GET vs CREATE)
   - Contact API administrator for permission review

2. **Verify operation support**
   - Some resources are read-only (Depots, Reps)
   - Check [supported operations table](./USER_GUIDE.md#resources--operations)

## Data Issues

### No Data Returned

**Symptoms:**
- API call succeeds but returns empty array
- Expected records not found

**Diagnosis Steps:**

1. **Check filters are not too restrictive**
   ```javascript
   // Test without filters first
   Resource: Customers
   Operation: List  
   Filter Mode: Common Filters
   // Don't add any filters initially
   ```

2. **Verify data exists in system**
   - Test with known good record IDs
   - Check date ranges in filters
   - Try different resources

3. **Test with minimal filters**
   ```javascript
   // Gradually add filters
   Filter Mode: Advanced
   Field: Last Update
   Operator: Greater Than  
   Value: 2020-01-01  // Use old date
   ```

**Solutions:**

1. **Remove or adjust filters**
   - Start with no filters
   - Add filters one by one
   - Use broader date ranges

2. **Check field names**
   - Use dropdown selections instead of typing
   - Verify field names match API documentation

3. **Test different resources**
   - Try Customers (usually has data)
   - Test with GET operation using known ID

### Incorrect Data Format

**Symptoms:**
- Data appears but structure is wrong
- Missing expected fields
- Nested data issues

**Solutions:**

1. **Check response options**
   - **Unwrap Response**: Enable for single records
   - **Nested**: Disable for flat structure
   - **Hide Nested Keys**: Enable to simplify

2. **Use field selection**
   ```javascript
   Fields: All Fields  // Get complete record first
   // Then select specific fields as needed
   ```

3. **Verify API version**
   - Ensure API endpoint version matches expectations
   - Check with API administrator if structure changed

## Webhook Issues

### Webhook Returns 404

**Symptoms:**
- External system gets 404 when posting to webhook
- Webhook URL seems correct

**Solutions:**

1. **Verify workflow is active**
   - Workflow must be activated (not just saved)
   - Check active toggle is ON
   - Deactivate and reactivate if needed

2. **Check webhook URL format**
   ```
   Correct: https://your-n8n.com/webhook/{workflowId}/customers
   Wrong:   https://your-n8n.com/webhook/customers/{workflowId}
   ```

3. **Test webhook manually**
   ```bash
   # Test with curl
   curl -X POST https://your-n8n.com/webhook/{workflowId}/customers \
     -H "Content-Type: application/json" \
     -H "x-signature-256: test" \
     -d '{"test": "data"}'
   ```

### HMAC Signature Verification Failed

**Symptoms:**
- Webhook receives request but signature verification fails
- Error about invalid signature

**Solutions:**

1. **Verify shared secret**
   - Secret in n8n matches source system exactly
   - No extra spaces or characters
   - Case-sensitive match

2. **Check signature header**
   ```bash
   # Source system must send:
   Header: x-signature-256
   Value:  sha256=<hex_hash>
   # OR
   Value:  <hex_hash>
   ```

3. **Test signature generation**
   ```javascript
   // Node.js example for testing
   const crypto = require('crypto');
   const body = JSON.stringify({"test": "data"});
   const secret = "your-shared-secret";
   const signature = crypto.createHmac('sha256', secret).update(body).digest('hex');
   console.log('Signature:', `sha256=${signature}`);
   ```

4. **Debug signature mismatch**
   - Enable debug logging in n8n
   - Check exact request body being signed
   - Verify Content-Type header is correct

### Webhook Timeout

**Symptoms:**
- Source system reports webhook timeouts
- Long processing times

**Solutions:**

1. **Enable asynchronous processing**
   ```javascript
   // In webhook trigger
   Auto Respond: true  // Respond immediately
   
   // Process data in background workflow
   ```

2. **Optimize workflow performance**
   - Remove unnecessary processing from webhook path
   - Use queues for heavy processing
   - Implement async patterns

## Performance Issues

### API Request Timeouts

**Symptoms:**
- Error: "Request timeout"
- Long delays before failure

**Solutions:**

1. **Increase timeout setting**
   ```javascript
   // In node configuration
   Timeout: 120  // Increase from default 60 seconds
   ```

2. **Reduce data scope**
   ```javascript
   // Limit result size
   Return All: false
   Limit: 100  // Start small, increase as needed
   
   // Use field selection
   Fields: Select only needed fields
   ```

3. **Add pagination**
   ```javascript
   // Process in smaller batches
   Loop Node
   └── List Operation (limit: 100, offset: variable)
   ```

### Large Dataset Issues

**Symptoms:**
- Memory errors
- Very slow processing
- n8n becomes unresponsive

**Solutions:**

1. **Implement batch processing**
   ```
   Schedule Trigger
   └── Loop: Process 100 records at a time
       └── Delay: 1 second between batches
   ```

2. **Use streaming patterns**
   - Process records one by one
   - Don't load entire dataset into memory
   - Store results in external database

3. **Filter at API level**
   ```javascript
   // Good: API filtering
   Filter Mode: Advanced
   Field: lastUpdate
   Operator: Greater Than
   Value: yesterday
   
   // Bad: n8n filtering on large dataset
   Return All: true
   // Then filter in n8n
   ```

## Error Code Reference

### HTTP Status Codes

| Code | Meaning | Common Causes | Solutions |
|------|---------|---------------|-----------|
| **400** | Bad Request | Invalid parameters | Check field values, operators |
| **401** | Unauthorized | Invalid API key | Verify credentials |
| **403** | Forbidden | Insufficient permissions | Check API key permissions |
| **404** | Not Found | Resource doesn't exist | Verify resource ID, URL path |
| **422** | Unprocessable Entity | Validation errors | Check required fields |
| **422** | Unprocessable Entity | API module not licensed | Contact your Accord administrator (see below) |
| **429** | Too Many Requests | Rate limit exceeded | Add delays between requests |
| **500** | Internal Server Error | API server issues | Contact API administrator |
| **502** | Bad Gateway | Network/proxy issues | Check network connectivity |
| **503** | Service Unavailable | API maintenance | Try again later |
| **504** | Gateway Timeout | Request took too long | Reduce scope or increase timeout |

### Unlicensed API Modules

Accord licenses API modules individually, so a resource offered by this node may
not be enabled on your installation. The request is well-formed - it is simply
not permitted - so no amount of checking parameters will help.

The response identifies it clearly:

```json
{
  "errors": [
    { "errorType": "System", "errorMsg": "Unlicensed GET API v1/agecodes" }
  ]
}
```

The node reports this as *"The <resource> API is not licensed on this Accord
instance"* rather than as a validation failure.

**What to do:** contact your Accord administrator to have the module licensed,
or pick a resource your instance supports. Which of the node's resources are
available depends on your Accord licence, not on the node.

### Common Validation Errors

**Missing Required Fields:**
```javascript
// Error: "templateID is required"
// Solution: Add templateID to create operations

// Customers
templateID: "STANDARD"

// Orders  
customerCode: "required-value"
```

**Invalid Field Values:**
```javascript
// Error: "Invalid date format"
// Solution: Use ISO date format
deliveryDate: "2024-12-25"  // YYYY-MM-DD

// Error: "Invalid customer code"
// Solution: Check customer exists
customerCode: "CUST001"  // Must exist in system
```

**Field Size Limits:**
```javascript
// Error: "Field too long"
// Common limits:
customerName: "max 50 characters"
description: "max 255 characters" 
```

## Debug Mode

### Enable Debug Logging

1. **Environment Variable**
   ```bash
   export N8N_LOG_LEVEL=debug
   n8n start
   ```

2. **Docker Environment**
   ```yaml
   # docker-compose.yml
   environment:
     N8N_LOG_LEVEL: debug
   ```

3. **View Debug Logs**
   ```bash
   # Development
   pnpm dev:logs
   
   # Production
   docker-compose logs -f n8n
   ```

### Debug Information

**Enable debug output in workflows:**
```javascript
// Add debug nodes to see data flow
Function Node: return [items];  // Pass through with logging
```

**Key debug information:**
- Request URLs and parameters
- Response data structure  
- Filter query construction
- Authentication headers (redacted)

## Getting Additional Help

### Before Contacting Support

1. **Check this guide** - Most issues are covered here
2. **Search existing issues** - [GitHub Issues](https://github.com/BCPSoftware/n8n-nodes-accordconnect/issues)
3. **Test with minimal workflow** - Isolate the problem
4. **Gather debug information** - Enable logging and capture errors

### Information to Include

When reporting issues, include:

1. **Environment Details**
   - n8n version
   - Node package version
   - Operating system
   - Docker/self-hosted

2. **Configuration**
   - Resource and operation being used
   - Parameter values (redact sensitive data)
   - Filter configurations

3. **Error Information**
   - Exact error message
   - HTTP status code
   - Debug logs (if enabled)
   - Steps to reproduce

4. **Expected vs Actual**
   - What you expected to happen
   - What actually happened
   - Sample data (if relevant)

### Support Channels

1. **GitHub Issues** - Bug reports and feature requests
   - [Create new issue](https://github.com/BCPSoftware/n8n-nodes-accordconnect/issues/new)
   - Search existing issues first

2. **n8n Community** - General n8n support
   - [Community forum](https://community.n8n.io/)
   - General workflow and n8n questions

3. **Documentation** - Self-service resources
   - [User Guide](./USER_GUIDE.md) - Feature documentation
   - [API Reference](./API_REFERENCE.md) - Parameter details
   - [Deployment Guide](./DEPLOYMENT.md) - Production setup

---

**💡 Pro Tip:** Most issues are resolved by restarting n8n, checking credentials, or adjusting filters. Start with the Quick Diagnosis table above!