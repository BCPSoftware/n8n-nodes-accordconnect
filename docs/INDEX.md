# n8n Accord Connect - Documentation Index

Complete documentation for the n8n Accord Connect integration package.

## 📖 User Documentation

| Document | Audience | Description |
|----------|----------|-------------|
| [**Getting Started**](./GETTING_STARTED.md) | New Users | 10-minute setup guide with first workflow |
| [**User Guide**](./USER_GUIDE.md) | All Users | Complete manual with examples & best practices |
| [**API Reference**](./API_REFERENCE.md) | Users/Developers | Detailed node parameters & operations |
| [**Troubleshooting**](./TROUBLESHOOTING.md) | All Users | Common issues & step-by-step solutions |

## 🚀 Deployment & Operations

| Document | Audience | Description |
|----------|----------|-------------|
| [**Deployment Guide**](./DEPLOYMENT.md) | Operators | Production deployment with Docker |

## 🛠️ Developer Resources

| Document | Audience | Description |
|----------|----------|-------------|

## 🔍 Quick Reference

### Installation
```bash
npm install -g n8n-nodes-accordconnect
```

### Supported Resources
- ✅ Customers (CRUD + List)
- ✅ Orders (CRUD + List)  
- ✅ Products (CRUD + List)
- ✅ Purchase Orders (CRUD + List + Include Lines)
- ✅ Depots (Read + List)
- ✅ Webhooks (Trigger with HMAC verification)

### Key Features
- **Advanced Filtering** - Field/operator dropdowns with all API parameters
- **Dynamic Field Generation** - Auto-generated from OpenAPI specifications
- **Secure Webhooks** - HMAC-SHA256 signature verification
- **Include Lines** - Get related line items in single API call
- **Production Ready** - Docker deployment with security features

## 💡 Common Use Cases

1. **Real-time Data Sync** - [Webhook Guide](./USER_GUIDE.md#webhooks)
2. **Customer Management** - [Customer Operations](./USER_GUIDE.md#customers)  
3. **Order Processing** - [Order Workflows](./USER_GUIDE.md#orders)
4. **Inventory Updates** - [Product Operations](./USER_GUIDE.md#products)
5. **Reporting & Analytics** - [List Operations](./USER_GUIDE.md#list-operations)

## 🆘 Need Help?

1. **Quick Issues** → [Troubleshooting](./TROUBLESHOOTING.md)
2. **First-time Setup** → [Getting Started](./GETTING_STARTED.md)  
3. **Feature Questions** → [User Guide](./USER_GUIDE.md)
4. **Bug Reports** → [GitHub Issues](https://github.com/BCPSoftware/n8n-nodes-accordconnect/issues)
5. **General n8n Help** → [n8n Community](https://community.n8n.io/)

---

**📋 Documentation Status**
- ✅ Getting Started - Complete
- ⏳ User Guide - In Progress  
- ⏳ API Reference - Planned
- ⏳ Deployment Guide - Planned
- ⏳ Developer Guide - Planned