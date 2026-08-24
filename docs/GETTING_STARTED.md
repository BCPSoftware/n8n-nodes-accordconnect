# Getting Started with n8n Accord Connect

This guide will help you set up and use the Accord Connect integration in n8n within 10 minutes.

## Prerequisites

Before you begin, ensure you have:

- [ ] **n8n installed** (version 0.220.0 or newer)
- [ ] **Accord Connect API access** with valid credentials
- [ ] **API endpoint URL** and authentication key
- [ ] **Basic n8n knowledge** ([n8n fundamentals](https://docs.n8n.io/getting-started/))

## Step 1: Install the Node Package

### Option A: npm Installation (Recommended)
```bash
# Install globally
npm install -g n8n-nodes-accordconnect

# Restart n8n
n8n start
```

### Option B: n8n Cloud/Self-hosted
1. Contact your n8n administrator to install the community node
2. The package name is: `n8n-nodes-accordconnect`

## Step 2: Configure API Credentials

1. **Open n8n** in your browser (typically http://localhost:5678)
2. **Go to Settings** → **Credentials** → **Add Credential**
3. **Search** for "Accord Connect API" and select it
4. **Fill in the details**:
   - **Name**: `Accord Connect Production` (or your preferred name)
   - **API URL**: Your Accord Connect API endpoint (e.g., `https://api.yourcompany.com/connect/rest/api`)  
   - **API Key**: Your API authentication key
5. **Test the connection** and **Save**

## Step 3: Create Your First Workflow

### Simple Customer List Example

1. **Create a new workflow**
2. **Add Accord Connect node**:
   - Drag from node panel or click **+** and search "Accord Connect"
3. **Configure the node**:
   - **Resource**: `Customers`
   - **Operation**: `List`  
   - **Credentials**: Select your saved credentials
   - **Filter Mode**: `Common Filters` (default)
   - **Return All**: `false`
   - **Limit**: `10`
4. **Add an output node** (like "Edit Fields" or "HTTP Request")
5. **Execute the workflow**

You should see customer data returned from your Accord Connect system!

### Customer Search Example

1. **Use the same setup** as above
2. **Change Filter Mode** to `Advanced`
3. **Add a filter**:
   - **Field**: `Customer Name` (from dropdown)
   - **Operator**: `Contains` 
   - **Value**: `Smith`
4. **Execute** to find customers with "Smith" in their name

## Step 4: Set Up Webhooks (Optional)

If you need to receive real-time updates from Accord Connect:

1. **Add Accord Webhook Trigger**:
   - Drag "Accord Webhook (Verify) Trigger" to canvas
   - **Path**: `customers` (or your desired endpoint)
   - **Secret**: Your HMAC secret key shared with Accord Connect
   - **Auto Respond**: `true`
2. **Save and activate** the workflow
3. **Copy webhook URL** from the trigger node
4. **Configure your source system** to send webhooks to this URL

Example webhook URL: `https://your-n8n.com/webhook/{workflowId}/customers`

## Step 5: Explore Advanced Features

Now that you have basic functionality working, explore:

- **[Field Selection](./USER_GUIDE.md#field-selection)** - Choose specific fields to return
- **[Advanced Filtering](./USER_GUIDE.md#advanced-filtering)** - Complex filter combinations  
- **[Create Operations](./USER_GUIDE.md#create-operations)** - Add new records
- **[Include Lines](./USER_GUIDE.md#include-lines)** - Get related line items in one call

## Troubleshooting Quick Fixes

**Node not appearing in n8n?**
- Restart n8n after installation
- Check for installation errors in terminal

**API connection failing?**
- Verify API URL format (include `/connect/rest/api` path)
- Confirm API key is valid and active
- Check network connectivity to API endpoint

**No data returned?**
- Verify you have data in the selected resource
- Check API permissions for your key
- Try with "Return All" enabled

**Need more help?** Check the [Troubleshooting Guide](./TROUBLESHOOTING.md)

## Next Steps

- 📖 Read the [User Guide](./USER_GUIDE.md) for detailed feature explanations
- 🏗️ Check out [workflow examples](./USER_GUIDE.md#example-workflows)  
- 🛠️ Learn about [advanced configuration](./USER_GUIDE.md#advanced-configuration)
- 🚀 Set up [production deployment](./DEPLOYMENT.md)