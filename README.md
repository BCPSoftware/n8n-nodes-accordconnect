# n8n Accord Connect Integration

A comprehensive n8n community node package for seamless integration with Accord Connect systems, featuring API operations and secure webhook handling.

## 🚀 Features

- **Complete API Integration** - Full CRUD operations for customers, orders, products, and more
- **Advanced Filtering** - Multiple filter modes with dropdown field/operator selection  
- **Secure Webhooks** - HMAC-SHA256 signature verification with optional lean mode
- **Production Ready** - Docker support with comprehensive security features

## 📋 Available Operations

### Core Resources
| Resource | Create | Read | Update | Delete | List | Special Features |
|----------|--------|------|--------|--------|------|------------------|
| **Customers** | ✅ | ✅ | ✅ | ❌ | ✅ | Advanced filtering, templates |
| **Products** | ✅ | ✅ | ✅ | ❌ | ✅ | Status management |
| **Orders** | ✅ | ✅ | ✅ | ❌ | ✅ | Delivery scheduling |
| **Depots** | ❌ | ✅ | ❌ | ❌ | ✅ | Location management |
| **Suppliers** | ✅ | ✅ | ✅ | ❌ | ✅ | Supplier management |

### Purchasing & Inventory
| Resource | Create | Read | Update | Delete | List | Special Features |
|----------|--------|------|--------|--------|------|------------------|
| **Purchase Orders** | ✅ | ✅ | ✅ | ❌ | ✅ | Include lines option |
| **Purchase Order Lines** | ❌ | ✅ | ❌ | ❌ | ✅ | Line item details |
| **Claims** | ✅ | ✅ | ✅ | ❌ | ✅ | Claims management |
| **Claim Lines** | ❌ | ✅ | ❌ | ❌ | ✅ | Claim line items |

### Financial & Documents
| Resource | Create | Read | Update | Delete | List | Special Features |
|----------|--------|------|--------|--------|------|------------------|
| **Invoices** | ❌ | ✅ | ❌ | ❌ | ✅ | PDF download, required filters |
| **Statements** | ❌ | ✅ | ❌ | ❌ | ✅ | PDF download, required filters |
| **Sales Transactions** | ❌ | ✅ | ❌ | ❌ | ✅ | Transaction history |

### Customer Management
| Resource | Create | Read | Update | Delete | List | Special Features |
|----------|--------|------|--------|--------|------|------------------|
| **Customer Calls** | ✅ | ✅ | ✅ | ❌ | ✅ | Activity tracking |
| **Customer Schedules** | ❌ | ✅ | ❌ | ❌ | ✅ | Schedule information |
| **Customer Types** | ❌ | ✅ | ❌ | ❌ | ✅ | Type definitions |
| **Reps** | ❌ | ✅ | ❌ | ❌ | ✅ | Sales representatives |

### Product & Pricing
| Resource | Create | Read | Update | Delete | List | Special Features |
|----------|--------|------|--------|--------|------|------------------|
| **Brands** | ❌ | ✅ | ❌ | ❌ | ✅ | Brand information |
| **Brand Groups** | ❌ | ✅ | ❌ | ❌ | ✅ | Brand categorization |
| **Contract Groups** | ❌ | ✅ | ❌ | ❌ | ✅ | Contract management |
| **Contract Prices** | ❌ | ✅ | ❌ | ❌ | ✅ | Contract-specific pricing |
| **List Prices** | ❌ | ✅ | ❌ | ❌ | ✅ | Standard pricing |
| **Price Groups** | ❌ | ✅ | ❌ | ❌ | ✅ | Price categorization |
| **Product Divisions** | ✅ | ✅ | ✅ | ❌ | ✅ | Full CRUD support |
| **Product Departments** | ✅ | ✅ | ✅ | ❌ | ✅ | Full CRUD support |
| **Product Groups** | ✅ | ✅ | ✅ | ❌ | ✅ | Full CRUD support |

### Promotions & Schemes
| Resource | Create | Read | Update | Delete | List | Special Features |
|----------|--------|------|--------|--------|------|------------------|
| **Promotions** | ❌ | ✅ | ❌ | ❌ | ✅ | Promotion management |
| **Promotion Lines** | ❌ | ✅ | ❌ | ❌ | ✅ | Promotion line items |
| **Mix Match Schemes** | ❌ | ✅ | ❌ | ❌ | ✅ | Mix & match deals |
| **Mix Match Lines** | ❌ | ✅ | ❌ | ❌ | ✅ | Mix & match line items |

### Configuration & Attributes
| Resource | Create | Read | Update | Delete | List | Special Features |
|----------|--------|------|--------|--------|------|------------------|
| **Age Codes** | ❌ | ✅ | ❌ | ❌ | ✅ | Age code definitions |
| **Allergens** | ✅ | ✅ | ✅ | ❌ | ✅ | Allergen definitions for product labelling |
| **Attribute Groups** | ✅ | ✅ | ✅ | ✅ | ✅ | Full CRUD support |
| **Attribute Names** | ✅ | ✅ | ✅ | ✅ | ✅ | Full CRUD support |
| **Countries** | ❌ | ✅ | ❌ | ❌ | ✅ | Country code definitions |
| **Duty Codes** | ❌ | ✅ | ❌ | ❌ | ✅ | Duty code definitions |
| **Label Types** | ❌ | ✅ | ❌ | ❌ | ✅ | Label type definitions |

## 🏃‍♂️ Quick Start

### Installation

**Option 1: Through n8n Interface (Recommended)**
1. Go to **Settings** → **Community Nodes** in your n8n instance
2. Enter package name: `n8n-nodes-accordconnect`
3. Click **Install**

**Option 2: Manual Installation**
```bash
# Global installation
npm install -g n8n-nodes-accordconnect

# Or local installation in n8n directory
cd ~/.n8n && npm install n8n-nodes-accordconnect
```

### Configuration
1. Add **Accord Connect API** credentials in n8n
2. Configure your API endpoint and key  
3. Start building workflows!

### First Workflow
1. Add **Accord Connect** node to canvas
2. Select "Customers" resource and "List" operation
3. Configure filters if needed
4. Execute to retrieve customer data

## 📚 Documentation

| Guide | Description |
|-------|-------------|
| [**Getting Started**](./docs/GETTING_STARTED.md) | Step-by-step setup for new users |
| [**User Guide**](./docs/USER_GUIDE.md) | Complete user manual with examples |
| [**API Reference**](./docs/API_REFERENCE.md) | Detailed node operations & parameters |
| [**Deployment Guide**](./docs/DEPLOYMENT.md) | Production deployment instructions |
| [**Troubleshooting**](./docs/TROUBLESHOOTING.md) | Common issues & solutions |


## 🤝 Community & Support

- [GitHub Issues](https://github.com/BCPSoftware/n8n-nodes-accordconnect/issues) - Bug reports & feature requests
- [n8n Community](https://community.n8n.io/) - General n8n support
- [Documentation](./docs/INDEX.md) - Comprehensive guides & examples

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details.

---

**Need help?** Start with the [Getting Started Guide](./docs/GETTING_STARTED.md) or check our [Troubleshooting Guide](./docs/TROUBLESHOOTING.md).