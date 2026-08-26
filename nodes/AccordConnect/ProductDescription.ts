import type { INodeProperties } from 'n8n-workflow';

// Generated from OpenAPI spec v430.002.0008 - 26/08/26 - do not edit by hand

export const productsOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['products'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'products:create',
                description: 'Create a product',
                action: 'Create a product'
            },
            {
                name: 'Get',
                value: 'products:get',
                description: 'Get a product',
                action: 'Get a product'
            },
            {
                name: 'List',
                value: 'products:list',
                description: 'List many products',
                action: 'List many products'
            },
            {
                name: 'Update',
                value: 'products:update',
                description: 'Update a product',
                action: 'Update a product'
            },
        ],
        default: 'products:create',
    },
];


export const productsReadFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        default: '',
        description: 'Unique identifier for the product',
        required: true,
        placeholder: 'e.g. PROD123',
        displayOptions: {
            show: {
                resource: ['products'],
                operation: ['products:get']
            }
        }
    },
    {
        displayName: 'Fields',
        name: 'fields',
        type: 'multiOptions',
        default: [],
        description: 'Select specific fields to return in the response (leave empty for default fields)',
        placeholder: 'productCode,lastUpdate,productStatus,activeDate',
        options: [
            {
                name: '* All Fields',
                value: 'all',
                description: 'Return all available fields'
            },
            {
                name: 'Acceptable Life',
                value: 'acceptableLife',
                description: 'Include acceptable life in the response'
            },
            {
                name: 'Active Date',
                value: 'activeDate',
                description: 'Include active date in the response'
            },
            {
                name: 'Age Check Code',
                value: 'ageCheckCode',
                description: 'Include age check code in the response'
            },
            {
                name: 'Alcohol By Volume',
                value: 'alcoholByVolume',
                description: 'Include alcohol by volume in the response'
            },
            {
                name: 'Alert Forecast',
                value: 'alertForecast',
                description: 'Include alert forecast in the response'
            },
            {
                name: 'Allergen Code',
                value: 'allergenCode',
                description: 'Include allergen code in the response'
            },
            {
                name: 'Allergen Description',
                value: 'allergenDescription',
                description: 'Include allergen description in the response'
            },
            {
                name: 'Allergen Name',
                value: 'allergenName',
                description: 'Include allergen name in the response'
            },
            {
                name: 'Allergen Qualifier',
                value: 'allergenQualifier',
                description: 'Include allergen qualifier in the response'
            },
            {
                name: 'Allergen Status',
                value: 'allergenStatus',
                description: 'Include allergen status in the response'
            },
            {
                name: 'Alternate Supplier Bonus Text',
                value: 'alternateSupplierBonusText',
                description: 'Include alternate supplier bonus text in the response'
            },
            {
                name: 'Alternate Supplier Code',
                value: 'alternateSupplierCode',
                description: 'Include alternate supplier code in the response'
            },
            {
                name: 'Alternate Supplier Cost Currency',
                value: 'alternateSupplierCostCurrency',
                description: 'Include alternate supplier cost currency in the response'
            },
            {
                name: 'Alternate Supplier Gross Cost',
                value: 'alternateSupplierGrossCost',
                description: 'Include alternate supplier gross cost in the response'
            },
            {
                name: 'Alternate Supplier Invoice Cost',
                value: 'alternateSupplierInvoiceCost',
                description: 'Include alternate supplier invoice cost in the response'
            },
            {
                name: 'Alternate Supplier Nett Cost',
                value: 'alternateSupplierNettCost',
                description: 'Include alternate supplier nett cost in the response'
            },
            {
                name: 'Alternate Supplier Product Code',
                value: 'alternateSupplierProductCode',
                description: 'Include alternate supplier product code in the response'
            },
            {
                name: 'Assign Date',
                value: 'assignDate',
                description: 'Include assign date in the response'
            },
            {
                name: 'ATP Cut Off Days',
                value: 'ATPCutOffDays',
                description: 'Include atp cut off days in the response'
            },
            {
                name: 'Attribute Description',
                value: 'attributeDescription',
                description: 'Include attribute description in the response'
            },
            {
                name: 'Attribute Group',
                value: 'attributeGroup',
                description: 'Include attribute group in the response'
            },
            {
                name: 'Attribute Group Desc',
                value: 'attributeGroupDesc',
                description: 'Include attribute group desc in the response'
            },
            {
                name: 'Attribute Label',
                value: 'attributeLabel',
                description: 'Include attribute label in the response'
            },
            {
                name: 'Attribute Name',
                value: 'attributeName',
                description: 'Include attribute name in the response'
            },
            {
                name: 'Attribute Value',
                value: 'attributeValue',
                description: 'Include attribute value in the response'
            },
            {
                name: 'Available To Sell',
                value: 'availableToSell',
                description: 'Include available to sell in the response'
            },
            {
                name: 'Award Ratio',
                value: 'awardRatio',
                description: 'Include award ratio in the response'
            },
            {
                name: 'Barrelage',
                value: 'barrelage',
                description: 'Include barrelage in the response'
            },
            {
                name: 'Base Product Code',
                value: 'baseProductCode',
                description: 'Include base product code in the response'
            },
            {
                name: 'Batch Number',
                value: 'batchNumber',
                description: 'Include batch number in the response'
            },
            {
                name: 'Batch Reference Required',
                value: 'batchReferenceRequired',
                description: 'Include batch reference required in the response'
            },
            {
                name: 'Bonus Text',
                value: 'bonusText',
                description: 'Include bonus text in the response'
            },
            {
                name: 'Bottles Cans Per Case',
                value: 'bottlesCansPerCase',
                description: 'Include bottles cans per case in the response'
            },
            {
                name: 'Brand',
                value: 'brand',
                description: 'Include brand in the response'
            },
            {
                name: 'Brand Desc',
                value: 'brandDesc',
                description: 'Include brand desc in the response'
            },
            {
                name: 'Brand Description',
                value: 'brandDescription',
                description: 'Include brand description in the response'
            },
            {
                name: 'Brand Group',
                value: 'brandGroup',
                description: 'Include brand group in the response'
            },
            {
                name: 'Buy Multiplier',
                value: 'buyMultiplier',
                description: 'Include buy multiplier in the response'
            },
            {
                name: 'Can Order',
                value: 'canOrder',
                description: 'Include can order in the response'
            },
            {
                name: 'Card Item',
                value: 'cardItem',
                description: 'Include card item in the response'
            },
            {
                name: 'Case Height',
                value: 'caseHeight',
                description: 'Include case height in the response'
            },
            {
                name: 'Case Length',
                value: 'caseLength',
                description: 'Include case length in the response'
            },
            {
                name: 'Case Volume',
                value: 'caseVolume',
                description: 'Include case volume in the response'
            },
            {
                name: 'Case Width',
                value: 'caseWidth',
                description: 'Include case width in the response'
            },
            {
                name: 'Cases',
                value: 'cases',
                description: 'Include cases in the response'
            },
            {
                name: 'Cashier Age',
                value: 'cashierAge',
                description: 'Include cashier age in the response'
            },
            {
                name: 'Category1',
                value: 'category1',
                description: 'Include category1 in the response'
            },
            {
                name: 'Category1Description',
                value: 'category1Description',
                description: 'Include category1description in the response'
            },
            {
                name: 'Category2',
                value: 'category2',
                description: 'Include category2 in the response'
            },
            {
                name: 'Category2Description',
                value: 'category2Description',
                description: 'Include category2description in the response'
            },
            {
                name: 'Catering',
                value: 'catering',
                description: 'Include catering in the response'
            },
            {
                name: 'Cigarettes Per Case',
                value: 'cigarettesPerCase',
                description: 'Include cigarettes per case in the response'
            },
            {
                name: 'Cigarettes Per Pack',
                value: 'cigarettesPerPack',
                description: 'Include cigarettes per pack in the response'
            },
            {
                name: 'Class',
                value: 'class',
                description: 'Include class in the response'
            },
            {
                name: 'Cn Code',
                value: 'cnCode',
                description: 'Include cn code in the response'
            },
            {
                name: 'Cn Tariff',
                value: 'cnTariff',
                description: 'Include cn tariff in the response'
            },
            {
                name: 'Colour',
                value: 'colour',
                description: 'Include colour in the response'
            },
            {
                name: 'Comment',
                value: 'comment',
                description: 'Include comment in the response'
            },
            {
                name: 'Company Transfer Cost Centre Code',
                value: 'companyTransferCostCentreCode',
                description: 'Include company transfer cost centre code in the response'
            },
            {
                name: 'Company Transfer Division Code',
                value: 'companyTransferDivisionCode',
                description: 'Include company transfer division code in the response'
            },
            {
                name: 'Company Transfer Ledger Code',
                value: 'companyTransferLedgerCode',
                description: 'Include company transfer ledger code in the response'
            },
            {
                name: 'Component Type',
                value: 'componentType',
                description: 'Include component type in the response'
            },
            {
                name: 'Composite',
                value: 'composite',
                description: 'Include composite in the response'
            },
            {
                name: 'Consumable',
                value: 'consumable',
                description: 'Include consumable in the response'
            },
            {
                name: 'Consumer Description',
                value: 'consumerDescription',
                description: 'Include consumer description in the response'
            },
            {
                name: 'Container',
                value: 'container',
                description: 'Include container in the response'
            },
            {
                name: 'Container Description',
                value: 'containerDescription',
                description: 'Include container description in the response'
            },
            {
                name: 'Container Type',
                value: 'containerType',
                description: 'Include container type in the response'
            },
            {
                name: 'Container2',
                value: 'container2',
                description: 'Include container2 in the response'
            },
            {
                name: 'Cop Cost Centre',
                value: 'copCostCentre',
                description: 'Include cop cost centre in the response'
            },
            {
                name: 'Cop Div Code',
                value: 'copDivCode',
                description: 'Include cop div code in the response'
            },
            {
                name: 'Cop Nl Code',
                value: 'copNlCode',
                description: 'Include cop nl code in the response'
            },
            {
                name: 'Core',
                value: 'core',
                description: 'Include core in the response'
            },
            {
                name: 'Cos Cost Centre',
                value: 'cosCostCentre',
                description: 'Include cos cost centre in the response'
            },
            {
                name: 'Cos Div Code',
                value: 'cosDivCode',
                description: 'Include cos div code in the response'
            },
            {
                name: 'Cos Nl Code',
                value: 'cosNlCode',
                description: 'Include cos nl code in the response'
            },
            {
                name: 'Cost Currency',
                value: 'costCurrency',
                description: 'Include cost currency in the response'
            },
            {
                name: 'Country',
                value: 'country',
                description: 'Include country in the response'
            },
            {
                name: 'Create Date',
                value: 'createDate',
                description: 'Include create date in the response'
            },
            {
                name: 'Cross Sell Multiplier',
                value: 'crossSellMultiplier',
                description: 'Include cross sell multiplier in the response'
            },
            {
                name: 'Cross Sell Product',
                value: 'crossSellProduct',
                description: 'Include cross sell product in the response'
            },
            {
                name: 'Cross Sell Sequence',
                value: 'crossSellSequence',
                description: 'Include cross sell sequence in the response'
            },
            {
                name: 'Csr Always',
                value: 'csrAlways',
                description: 'Include csr always in the response'
            },
            {
                name: 'Csr Coslip',
                value: 'csrCoslip',
                description: 'Include csr coslip in the response'
            },
            {
                name: 'Csr Over Sales',
                value: 'csrOverSales',
                description: 'Include csr over sales in the response'
            },
            {
                name: 'Customer Age',
                value: 'customerAge',
                description: 'Include customer age in the response'
            },
            {
                name: 'Customer Type',
                value: 'customerType',
                description: 'Include customer type in the response'
            },
            {
                name: 'Customer Type Desc',
                value: 'customerTypeDesc',
                description: 'Include customer type desc in the response'
            },
            {
                name: 'Cut Text',
                value: 'cutText',
                description: 'Include cut text in the response'
            },
            {
                name: 'Date Available',
                value: 'dateAvailable',
                description: 'Include date available in the response'
            },
            {
                name: 'Date Coded',
                value: 'dateCoded',
                description: 'Include date coded in the response'
            },
            {
                name: 'Deposit Code',
                value: 'depositCode',
                description: 'Include deposit code in the response'
            },
            {
                name: 'Deposit Description',
                value: 'depositDescription',
                description: 'Include deposit description in the response'
            },
            {
                name: 'Deposit Indicator',
                value: 'depositIndicator',
                description: 'Include deposit indicator in the response'
            },
            {
                name: 'Deposit Value',
                value: 'depositValue',
                description: 'Include deposit value in the response'
            },
            {
                name: 'Depot Code',
                value: 'depotCode',
                description: 'Include depot code in the response'
            },
            {
                name: 'Depot Status',
                value: 'depotStatus',
                description: 'Include depot status in the response'
            },
            {
                name: 'Description',
                value: 'description',
                description: 'Include description in the response'
            },
            {
                name: 'Description Indicator',
                value: 'descriptionIndicator',
                description: 'Include description indicator in the response'
            },
            {
                name: 'Description Line1',
                value: 'descriptionLine1',
                description: 'Include description line1 in the response'
            },
            {
                name: 'Description Line2',
                value: 'descriptionLine2',
                description: 'Include description line2 in the response'
            },
            {
                name: 'Details',
                value: 'details',
                description: 'Include details in the response'
            },
            {
                name: 'Dilute Ratio',
                value: 'diluteRatio',
                description: 'Include dilute ratio in the response'
            },
            {
                name: 'Division Code',
                value: 'divisionCode',
                description: 'Include division code in the response'
            },
            {
                name: 'Drink End',
                value: 'drinkEnd',
                description: 'Include drink end in the response'
            },
            {
                name: 'Drink Start',
                value: 'drinkStart',
                description: 'Include drink start in the response'
            },
            {
                name: 'Drs Container Type',
                value: 'drsContainerType',
                description: 'Include drs container type in the response'
            },
            {
                name: 'Drs Container Units',
                value: 'drsContainerUnits',
                description: 'Include drs container units in the response'
            },
            {
                name: 'Drs Deposit Code',
                value: 'drsDepositCode',
                description: 'Include drs deposit code in the response'
            },
            {
                name: 'Drs Multi Pack Barcode',
                value: 'drsMultiPackBarcode',
                description: 'Include drs multi pack barcode in the response'
            },
            {
                name: 'Drs Multi Pack Qty',
                value: 'drsMultiPackQty',
                description: 'Include drs multi pack qty in the response'
            },
            {
                name: 'Drs Own Produced',
                value: 'drsOwnProduced',
                description: 'Include drs own produced in the response'
            },
            {
                name: 'Drs Packaging Material',
                value: 'drsPackagingMaterial',
                description: 'Include drs packaging material in the response'
            },
            {
                name: 'Drs Replacement Product',
                value: 'drsReplacementProduct',
                description: 'Include drs replacement product in the response'
            },
            {
                name: 'Drs Unit Measure',
                value: 'drsUnitMeasure',
                description: 'Include drs unit measure in the response'
            },
            {
                name: 'Drs Unit Size',
                value: 'drsUnitSize',
                description: 'Include drs unit size in the response'
            },
            {
                name: 'Duty Code',
                value: 'dutyCode',
                description: 'Include duty code in the response'
            },
            {
                name: 'Each Weight',
                value: 'eachWeight',
                description: 'Include each weight in the response'
            },
            {
                name: 'Ean Code',
                value: 'eanCode',
                description: 'Include ean code in the response'
            },
            {
                name: 'Ean Indicator',
                value: 'eanIndicator',
                description: 'Include ean indicator in the response'
            },
            {
                name: 'Ean Last Update',
                value: 'eanLastUpdate',
                description: 'Include ean last update in the response'
            },
            {
                name: 'Edge Of Shelf Description',
                value: 'edgeOfShelfDescription',
                description: 'Include edge of shelf description in the response'
            },
            {
                name: 'EDLP',
                value: 'EDLP',
                description: 'Include edlp in the response'
            },
            {
                name: 'End Date',
                value: 'endDate',
                description: 'Include end date in the response'
            },
            {
                name: 'End Plof',
                value: 'endPlof',
                description: 'Include end plof in the response'
            },
            {
                name: 'Equivalent Cases',
                value: 'equivalentCases',
                description: 'Include equivalent cases in the response'
            },
            {
                name: 'Expense Code',
                value: 'expenseCode',
                description: 'Include expense code in the response'
            },
            {
                name: 'Export Type',
                value: 'exportType',
                description: 'Include export type in the response'
            },
            {
                name: 'Extended Credit Group',
                value: 'extendedCreditGroup',
                description: 'Include extended credit group in the response'
            },
            {
                name: 'External Delivery Service',
                value: 'externalDeliveryService',
                description: 'Include external delivery service in the response'
            },
            {
                name: 'File Change Log',
                value: 'fileChangeLog',
                description: 'Include file change log in the response'
            },
            {
                name: 'Financial Indicator',
                value: 'financialIndicator',
                description: 'Include financial indicator in the response'
            },
            {
                name: 'Flash Main Product Code',
                value: 'flashMainProductCode',
                description: 'Include flash main product code in the response'
            },
            {
                name: 'Flash Main Product Description',
                value: 'flashMainProductDescription',
                description: 'Include flash main product description in the response'
            },
            {
                name: 'Flash Pack Indicator',
                value: 'flashPackIndicator',
                description: 'Include flash pack indicator in the response'
            },
            {
                name: 'Generic Product Code',
                value: 'genericProductCode',
                description: 'Include generic product code in the response'
            },
            {
                name: 'Generic Product Description',
                value: 'genericProductDescription',
                description: 'Include generic product description in the response'
            },
            {
                name: 'Generic Type',
                value: 'genericType',
                description: 'Include generic type in the response'
            },
            {
                name: 'Grn Priced',
                value: 'grnPriced',
                description: 'Include grn priced in the response'
            },
            {
                name: 'Gross Cost',
                value: 'grossCost',
                description: 'Include gross cost in the response'
            },
            {
                name: 'Group Parent Code',
                value: 'groupParentCode',
                description: 'Include group parent code in the response'
            },
            {
                name: 'Group Sequence',
                value: 'groupSequence',
                description: 'Include group sequence in the response'
            },
            {
                name: 'GS1Unit Of Measure',
                value: 'GS1UnitOfMeasure',
                description: 'Include gs1unit of measure in the response'
            },
            {
                name: 'GTIN',
                value: 'GTIN',
                description: 'Include gtin in the response'
            },
            {
                name: 'Handling Type',
                value: 'handlingType',
                description: 'Include handling type in the response'
            },
            {
                name: 'High Strength Beer Duty',
                value: 'highStrengthBeerDuty',
                description: 'Include high strength beer duty in the response'
            },
            {
                name: 'Home Produced',
                value: 'homeProduced',
                description: 'Include home produced in the response'
            },
            {
                name: 'Ibap Group',
                value: 'ibapGroup',
                description: 'Include ibap group in the response'
            },
            {
                name: 'Image File Reference',
                value: 'imageFileReference',
                description: 'Include image file reference in the response'
            },
            {
                name: 'Imb Code',
                value: 'imbCode',
                description: 'Include imb code in the response'
            },
            {
                name: 'Ingredient Indicator',
                value: 'ingredientIndicator',
                description: 'Include ingredient indicator in the response'
            },
            {
                name: 'Ingredients',
                value: 'ingredients',
                description: 'Include ingredients in the response'
            },
            {
                name: 'Invoice Cost',
                value: 'InvoiceCost',
                description: 'Include invoice cost in the response'
            },
            {
                name: 'KVI',
                value: 'KVI',
                description: 'Include kvi in the response'
            },
            {
                name: 'Label Type',
                value: 'labelType',
                description: 'Include label type in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Layer',
                value: 'layer',
                description: 'Include layer in the response'
            },
            {
                name: 'Levy Code',
                value: 'levyCode',
                description: 'Include levy code in the response'
            },
            {
                name: 'Linked Silver Code',
                value: 'linkedSilverCode',
                description: 'Include linked silver code in the response'
            },
            {
                name: 'Litres',
                value: 'litres',
                description: 'Include litres in the response'
            },
            {
                name: 'Litres Of Pure Alcohol',
                value: 'litresOfPureAlcohol',
                description: 'Include litres of pure alcohol in the response'
            },
            {
                name: 'Location',
                value: 'location',
                description: 'Include location in the response'
            },
            {
                name: 'Lookup Description',
                value: 'lookupDescription',
                description: 'Include lookup description in the response'
            },
            {
                name: 'Lta Group Code',
                value: 'ltaGroupCode',
                description: 'Include lta group code in the response'
            },
            {
                name: 'Lta Group ID',
                value: 'ltaGroupID',
                description: 'Include lta group ID in the response'
            },
            {
                name: 'Main Product Code',
                value: 'mainProductCode',
                description: 'Include main product code in the response'
            },
            {
                name: 'Main Product Description',
                value: 'mainProductDescription',
                description: 'Include main product description in the response'
            },
            {
                name: 'Manufacture Time',
                value: 'manufactureTime',
                description: 'Include manufacture time in the response'
            },
            {
                name: 'Manufacturer',
                value: 'manufacturer',
                description: 'Include manufacturer in the response'
            },
            {
                name: 'Manufacturing Batch Quantity',
                value: 'manufacturingBatchQuantity',
                description: 'Include manufacturing batch quantity in the response'
            },
            {
                name: 'Manufacturing Type',
                value: 'manufacturingType',
                description: 'Include manufacturing type in the response'
            },
            {
                name: 'Max Delivered Life',
                value: 'maxDeliveredLife',
                description: 'Include max delivered life in the response'
            },
            {
                name: 'Maximum Cost',
                value: 'maximumCost',
                description: 'Include maximum cost in the response'
            },
            {
                name: 'Maximum Weight Variance',
                value: 'maximumWeightVariance',
                description: 'Include maximum weight variance in the response'
            },
            {
                name: 'Message Category',
                value: 'messageCategory',
                description: 'Include message category in the response'
            },
            {
                name: 'Minimum Base',
                value: 'minimumBase',
                description: 'Include minimum base in the response'
            },
            {
                name: 'Minimum Life',
                value: 'minimumLife',
                description: 'Include minimum life in the response'
            },
            {
                name: 'Minimum Order Quantity',
                value: 'minimumOrderQuantity',
                description: 'Include minimum order quantity in the response'
            },
            {
                name: 'Model Stock Sheet',
                value: 'modelStockSheet',
                description: 'Include model stock sheet in the response'
            },
            {
                name: 'Multi Pack Quantity',
                value: 'multiPackQuantity',
                description: 'Include multi pack quantity in the response'
            },
            {
                name: 'Multiple Retail Group Indicator',
                value: 'multipleRetailGroupIndicator',
                description: 'Include multiple retail group indicator in the response'
            },
            {
                name: 'National Product Code',
                value: 'nationalProductCode',
                description: 'Include national product code in the response'
            },
            {
                name: 'Nett Cost',
                value: 'nettCost',
                description: 'Include nett cost in the response'
            },
            {
                name: 'Nett Mass',
                value: 'nettMass',
                description: 'Include nett mass in the response'
            },
            {
                name: 'Nl Code',
                value: 'nlCode',
                description: 'Include nl code in the response'
            },
            {
                name: 'Nl Cost Centre',
                value: 'nlCostCentre',
                description: 'Include nl cost centre in the response'
            },
            {
                name: 'Nominal Weight',
                value: 'nominalWeight',
                description: 'Include nominal weight in the response'
            },
            {
                name: 'One Label',
                value: 'oneLabel',
                description: 'Include one label in the response'
            },
            {
                name: 'Online',
                value: 'online',
                description: 'Include online in the response'
            },
            {
                name: 'Order Thru',
                value: 'orderThru',
                description: 'Include order thru in the response'
            },
            {
                name: 'Origin',
                value: 'origin',
                description: 'Include origin in the response'
            },
            {
                name: 'Otu',
                value: 'otu',
                description: 'Include otu in the response'
            },
            {
                name: 'Override Date',
                value: 'overrideDate',
                description: 'Include override date in the response'
            },
            {
                name: 'Override Details',
                value: 'overrideDetails',
                description: 'Include override details in the response'
            },
            {
                name: 'Own Brand Indicator',
                value: 'ownBrandIndicator',
                description: 'Include own brand indicator in the response'
            },
            {
                name: 'Pack Description',
                value: 'packDescription',
                description: 'Include pack description in the response'
            },
            {
                name: 'Pack Unit',
                value: 'packUnit',
                description: 'Include pack unit in the response'
            },
            {
                name: 'Packaging',
                value: 'packaging',
                description: 'Include packaging in the response'
            },
            {
                name: 'Packed In House',
                value: 'packedInHouse',
                description: 'Include packed in house in the response'
            },
            {
                name: 'Pallet',
                value: 'pallet',
                description: 'Include pallet in the response'
            },
            {
                name: 'Pallet Percentage',
                value: 'palletPercentage',
                description: 'Include pallet percentage in the response'
            },
            {
                name: 'Pcl Prefix',
                value: 'pclPrefix',
                description: 'Include pcl prefix in the response'
            },
            {
                name: 'Pcl Suffix',
                value: 'pclSuffix',
                description: 'Include pcl suffix in the response'
            },
            {
                name: 'Pi Date',
                value: 'piDate',
                description: 'Include pi date in the response'
            },
            {
                name: 'Pi Interval',
                value: 'piInterval',
                description: 'Include pi interval in the response'
            },
            {
                name: 'Pick Batch Quantity',
                value: 'pickBatchQuantity',
                description: 'Include pick batch quantity in the response'
            },
            {
                name: 'Pim P Code',
                value: 'pimPCode',
                description: 'Include pim p code in the response'
            },
            {
                name: 'Pl Cost Centre',
                value: 'plCostCentre',
                description: 'Include pl cost centre in the response'
            },
            {
                name: 'Pl Div Code',
                value: 'plDivCode',
                description: 'Include pl div code in the response'
            },
            {
                name: 'Pl Nl Code',
                value: 'plNlCode',
                description: 'Include pl nl code in the response'
            },
            {
                name: 'Plof Code',
                value: 'plofCode',
                description: 'Include plof code in the response'
            },
            {
                name: 'Plof Group',
                value: 'plofGroup',
                description: 'Include plof group in the response'
            },
            {
                name: 'Plof Main',
                value: 'plofMain',
                description: 'Include plof main in the response'
            },
            {
                name: 'PLU Product Group',
                value: 'PLUProductGroup',
                description: 'Include plu product group in the response'
            },
            {
                name: 'Plu Type',
                value: 'pluType',
                description: 'Include plu type in the response'
            },
            {
                name: 'PO Batch Quantity',
                value: 'POBatchQuantity',
                description: 'Include po batch quantity in the response'
            },
            {
                name: 'PO Minimum Quantity',
                value: 'POMinimumQuantity',
                description: 'Include po minimum quantity in the response'
            },
            {
                name: 'Po Val Code',
                value: 'poValCode',
                description: 'Include po val code in the response'
            },
            {
                name: 'Points Ratio',
                value: 'pointsRatio',
                description: 'Include points ratio in the response'
            },
            {
                name: 'Portion Weight',
                value: 'portionWeight',
                description: 'Include portion weight in the response'
            },
            {
                name: 'Portions Per Case',
                value: 'portionsPerCase',
                description: 'Include portions per case in the response'
            },
            {
                name: 'Pre Order',
                value: 'preOrder',
                description: 'Include pre order in the response'
            },
            {
                name: 'Preferred Multiplier',
                value: 'preferredMultiplier',
                description: 'Include preferred multiplier in the response'
            },
            {
                name: 'Preferred Product',
                value: 'preferredProduct',
                description: 'Include preferred product in the response'
            },
            {
                name: 'Preferred Sequence',
                value: 'preferredSequence',
                description: 'Include preferred sequence in the response'
            },
            {
                name: 'Preparation',
                value: 'preparation',
                description: 'Include preparation in the response'
            },
            {
                name: 'Prh Code',
                value: 'prhCode',
                description: 'Include prh code in the response'
            },
            {
                name: 'Prh1Code',
                value: 'prh1Code',
                description: 'Include prh1code in the response'
            },
            {
                name: 'Prh4Code',
                value: 'prh4Code',
                description: 'Include prh4code in the response'
            },
            {
                name: 'Price Group',
                value: 'priceGroup',
                description: 'Include price group in the response'
            },
            {
                name: 'Primary Code',
                value: 'primaryCode',
                description: 'Include primary code in the response'
            },
            {
                name: 'Product Code',
                value: 'productCode',
                description: 'Include product code in the response'
            },
            {
                name: 'Product Group',
                value: 'productGroup',
                description: 'Include product group in the response'
            },
            {
                name: 'Product Group Description',
                value: 'productGroupDescription',
                description: 'Include product group description in the response'
            },
            {
                name: 'Product Note1',
                value: 'productNote1',
                description: 'Include product note1 in the response'
            },
            {
                name: 'Product Note2',
                value: 'productNote2',
                description: 'Include product note2 in the response'
            },
            {
                name: 'Product Status',
                value: 'productStatus',
                description: 'Include product status in the response'
            },
            {
                name: 'Purchase In House',
                value: 'purchaseInHouse',
                description: 'Include purchase in house in the response'
            },
            {
                name: 'Purchase Pack Type',
                value: 'purchasePackType',
                description: 'Include purchase pack type in the response'
            },
            {
                name: 'Ranking',
                value: 'ranking',
                description: 'Include ranking in the response'
            },
            {
                name: 'Ration',
                value: 'ration',
                description: 'Include ration in the response'
            },
            {
                name: 'Rearing',
                value: 'rearing',
                description: 'Include rearing in the response'
            },
            {
                name: 'Reason',
                value: 'reason',
                description: 'Include reason in the response'
            },
            {
                name: 'Reasonable Order Quantity',
                value: 'reasonableOrderQuantity',
                description: 'Include reasonable order quantity in the response'
            },
            {
                name: 'Rebate Range',
                value: 'rebateRange',
                description: 'Include rebate range in the response'
            },
            {
                name: 'Rebateable',
                value: 'rebateable',
                description: 'Include rebateable in the response'
            },
            {
                name: 'Recommended RRP',
                value: 'recommendedRRP',
                description: 'Include recommended rrp in the response'
            },
            {
                name: 'Recommended Sell',
                value: 'recommendedSell',
                description: 'Include recommended sell in the response'
            },
            {
                name: 'Replaces Product Code',
                value: 'replacesProductCode',
                description: 'Include replaces product code in the response'
            },
            {
                name: 'Restrict Export',
                value: 'restrictExport',
                description: 'Include restrict export in the response'
            },
            {
                name: 'Retail Height',
                value: 'retailHeight',
                description: 'Include retail height in the response'
            },
            {
                name: 'Retail Length',
                value: 'retailLength',
                description: 'Include retail length in the response'
            },
            {
                name: 'Retail Volume',
                value: 'retailVolume',
                description: 'Include retail volume in the response'
            },
            {
                name: 'Retail Width',
                value: 'retailWidth',
                description: 'Include retail width in the response'
            },
            {
                name: 'Rf Quantity',
                value: 'rfQuantity',
                description: 'Include rf quantity in the response'
            },
            {
                name: 'Root Product Code',
                value: 'rootProductCode',
                description: 'Include root product code in the response'
            },
            {
                name: 'Root Product Description',
                value: 'rootProductDescription',
                description: 'Include root product description in the response'
            },
            {
                name: 'Rrp Margin',
                value: 'rrpMargin',
                description: 'Include rrp margin in the response'
            },
            {
                name: 'Rrv Cost Centre',
                value: 'rrvCostCentre',
                description: 'Include rrv cost centre in the response'
            },
            {
                name: 'Rrv Div Code',
                value: 'rrvDivCode',
                description: 'Include rrv div code in the response'
            },
            {
                name: 'Rrv Nl Code',
                value: 'rrvNlCode',
                description: 'Include rrv nl code in the response'
            },
            {
                name: 'Safety Certificate',
                value: 'safetyCertificate',
                description: 'Include safety certificate in the response'
            },
            {
                name: 'Sales Item',
                value: 'salesItem',
                description: 'Include sales item in the response'
            },
            {
                name: 'Sales Item Cost Discount',
                value: 'salesItemCostDiscount',
                description: 'Include sales item cost discount in the response'
            },
            {
                name: 'Sales Item Sell Discount',
                value: 'salesItemSellDiscount',
                description: 'Include sales item sell discount in the response'
            },
            {
                name: 'Seas Type',
                value: 'seasType',
                description: 'Include seas type in the response'
            },
            {
                name: 'Season End',
                value: 'seasonEnd',
                description: 'Include season end in the response'
            },
            {
                name: 'Season Start',
                value: 'seasonStart',
                description: 'Include season start in the response'
            },
            {
                name: 'Seasonal Item',
                value: 'seasonalItem',
                description: 'Include seasonal item in the response'
            },
            {
                name: 'Security Item',
                value: 'securityItem',
                description: 'Include security item in the response'
            },
            {
                name: 'Sell As',
                value: 'sellAs',
                description: 'Include sell as in the response'
            },
            {
                name: 'Sell Margin',
                value: 'sellMargin',
                description: 'Include sell margin in the response'
            },
            {
                name: 'Separate Order Indicator',
                value: 'separateOrderIndicator',
                description: 'Include separate order indicator in the response'
            },
            {
                name: 'Shelf Life Indicator',
                value: 'shelfLifeIndicator',
                description: 'Include shelf life indicator in the response'
            },
            {
                name: 'Shelf Linear Meterage',
                value: 'shelfLinearMeterage',
                description: 'Include shelf linear meterage in the response'
            },
            {
                name: 'Short Description',
                value: 'shortDescription',
                description: 'Include short description in the response'
            },
            {
                name: 'Slaughter',
                value: 'slaughter',
                description: 'Include slaughter in the response'
            },
            {
                name: 'Sm Cost Centre',
                value: 'smCostCentre',
                description: 'Include sm cost centre in the response'
            },
            {
                name: 'Sm Div Code',
                value: 'smDivCode',
                description: 'Include sm div code in the response'
            },
            {
                name: 'Sm Nl Code',
                value: 'smNlCode',
                description: 'Include sm nl code in the response'
            },
            {
                name: 'Split Indicator',
                value: 'splitIndicator',
                description: 'Include split indicator in the response'
            },
            {
                name: 'Split Premium',
                value: 'splitPremium',
                description: 'Include split premium in the response'
            },
            {
                name: 'Stack Height',
                value: 'stackHeight',
                description: 'Include stack height in the response'
            },
            {
                name: 'Standard Container',
                value: 'standardContainer',
                description: 'Include standard container in the response'
            },
            {
                name: 'Standard Count',
                value: 'standardCount',
                description: 'Include standard count in the response'
            },
            {
                name: 'Standard Unit Weight',
                value: 'standardUnitWeight',
                description: 'Include standard unit weight in the response'
            },
            {
                name: 'Standard Weight',
                value: 'standardWeight',
                description: 'Include standard weight in the response'
            },
            {
                name: 'Start Date',
                value: 'startDate',
                description: 'Include start date in the response'
            },
            {
                name: 'Start Plof',
                value: 'startPlof',
                description: 'Include start plof in the response'
            },
            {
                name: 'Stock Product',
                value: 'stockProduct',
                description: 'Include stock product in the response'
            },
            {
                name: 'Stock Product Description',
                value: 'stockProductDescription',
                description: 'Include stock product description in the response'
            },
            {
                name: 'Stock Type',
                value: 'stockType',
                description: 'Include stock type in the response'
            },
            {
                name: 'Stock Update',
                value: 'stockUpdate',
                description: 'Include stock update in the response'
            },
            {
                name: 'Stock Variance Percentage',
                value: 'stockVariancePercentage',
                description: 'Include stock variance percentage in the response'
            },
            {
                name: 'Stocked',
                value: 'stocked',
                description: 'Include stocked in the response'
            },
            {
                name: 'Sub Group',
                value: 'subGroup',
                description: 'Include sub group in the response'
            },
            {
                name: 'Substitute Chain',
                value: 'substituteChain',
                description: 'Include substitute chain in the response'
            },
            {
                name: 'Substitute Code',
                value: 'substituteCode',
                description: 'Include substitute code in the response'
            },
            {
                name: 'Substitute Indicator',
                value: 'substituteIndicator',
                description: 'Include substitute indicator in the response'
            },
            {
                name: 'Supplementary Unit',
                value: 'supplementaryUnit',
                description: 'Include supplementary unit in the response'
            },
            {
                name: 'Supplier Code',
                value: 'supplierCode',
                description: 'Include supplier code in the response'
            },
            {
                name: 'Supplier Code (SUPPLIERCODE)',
                value: 'SupplierCode',
                description: 'Include supplier code in the response'
            },
            {
                name: 'Supplier Name',
                value: 'supplierName',
                description: 'Include supplier name in the response'
            },
            {
                name: 'Supplier Not Available',
                value: 'supplierNotAvailable',
                description: 'Include supplier not available in the response'
            },
            {
                name: 'Supplier Product Code',
                value: 'supplierProductCode',
                description: 'Include supplier product code in the response'
            },
            {
                name: 'Supplier Sequence',
                value: 'supplierSequence',
                description: 'Include supplier sequence in the response'
            },
            {
                name: 'Surcharge Indicator',
                value: 'surchargeIndicator',
                description: 'Include surcharge indicator in the response'
            },
            {
                name: 'Surcharge Split',
                value: 'surchargeSplit',
                description: 'Include surcharge split in the response'
            },
            {
                name: 'Surcharge Unit',
                value: 'surchargeUnit',
                description: 'Include surcharge unit in the response'
            },
            {
                name: 'Sv Cost Centre',
                value: 'svCostCentre',
                description: 'Include sv cost centre in the response'
            },
            {
                name: 'Sv Div Code',
                value: 'svDivCode',
                description: 'Include sv div code in the response'
            },
            {
                name: 'Sv Nl Code',
                value: 'svNlCode',
                description: 'Include sv nl code in the response'
            },
            {
                name: 'Target Margin RRP Indicator',
                value: 'targetMarginRRPIndicator',
                description: 'Include target margin rrp indicator in the response'
            },
            {
                name: 'Target Margin Sell Indicator',
                value: 'targetMarginSellIndicator',
                description: 'Include target margin sell indicator in the response'
            },
            {
                name: 'Tariff',
                value: 'tariff',
                description: 'Include tariff in the response'
            },
            {
                name: 'Tariff Recipe Indicator',
                value: 'tariffRecipeIndicator',
                description: 'Include tariff recipe indicator in the response'
            },
            {
                name: 'Text1',
                value: 'text1',
                description: 'Include text1 in the response'
            },
            {
                name: 'Text2',
                value: 'text2',
                description: 'Include text2 in the response'
            },
            {
                name: 'Text3',
                value: 'text3',
                description: 'Include text3 in the response'
            },
            {
                name: 'Tobacco Product ID',
                value: 'tobaccoProductID',
                description: 'Include tobacco product ID in the response'
            },
            {
                name: 'Tobacco Weight Per Case',
                value: 'tobaccoWeightPerCase',
                description: 'Include tobacco weight per case in the response'
            },
            {
                name: 'Track And Trace',
                value: 'trackAndTrace',
                description: 'Include track and trace in the response'
            },
            {
                name: 'Tuc',
                value: 'tuc',
                description: 'Include tuc in the response'
            },
            {
                name: 'Unit Description',
                value: 'unitDescription',
                description: 'Include unit description in the response'
            },
            {
                name: 'Unit Ratio',
                value: 'unitRatio',
                description: 'Include unit ratio in the response'
            },
            {
                name: 'Unit Type',
                value: 'unitType',
                description: 'Include unit type in the response'
            },
            {
                name: 'User Category1',
                value: 'userCategory1',
                description: 'Include user category1 in the response'
            },
            {
                name: 'User Category2',
                value: 'userCategory2',
                description: 'Include user category2 in the response'
            },
            {
                name: 'User Category3',
                value: 'userCategory3',
                description: 'Include user category3 in the response'
            },
            {
                name: 'User Category4',
                value: 'userCategory4',
                description: 'Include user category4 in the response'
            },
            {
                name: 'User Category5',
                value: 'userCategory5',
                description: 'Include user category5 in the response'
            },
            {
                name: 'Variant Family Code',
                value: 'variantFamilyCode',
                description: 'Include variant family code in the response'
            },
            {
                name: 'Variety',
                value: 'variety',
                description: 'Include variety in the response'
            },
            {
                name: 'VAT Code',
                value: 'VATCode',
                description: 'Include vat code in the response'
            },
            {
                name: 'VAT Rate',
                value: 'VATRate',
                description: 'Include vat rate in the response'
            },
            {
                name: 'Vb Quantity',
                value: 'vbQuantity',
                description: 'Include vb quantity in the response'
            },
            {
                name: 'Vb Start Level',
                value: 'vbStartLevel',
                description: 'Include vb start level in the response'
            },
            {
                name: 'Vendor Product Category',
                value: 'vendorProductCategory',
                description: 'Include vendor product category in the response'
            },
            {
                name: 'Vendor Sub Category',
                value: 'vendorSubCategory',
                description: 'Include vendor sub category in the response'
            },
            {
                name: 'Weee Category',
                value: 'weeeCategory',
                description: 'Include weee category in the response'
            },
            {
                name: 'Weee Charge',
                value: 'weeeCharge',
                description: 'Include weee charge in the response'
            },
            {
                name: 'Weight Conv',
                value: 'weightConv',
                description: 'Include weight conv in the response'
            },
            {
                name: 'Weight Count Ratio Variance',
                value: 'weightCountRatioVariance',
                description: 'Include weight count ratio variance in the response'
            },
            {
                name: 'Weighted',
                value: 'weighted',
                description: 'Include weighted in the response'
            },
            {
                name: 'Wsale Ind',
                value: 'wsaleInd',
                description: 'Include wsale ind in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['products'],
                operation: ['products:get']
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
                resource: ['products'],
                operation: ['products:get']
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
                resource: ['products'],
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
                resource: ['products'],
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
                resource: ['products'],
                operation: ['get']
            }
        }
    }
];

export const productsUpdateFields: INodeProperties[] = [
    {
        displayName: 'Product Code',
        name: 'productCode',
        type: 'string',
        default: '',
        description: 'The product code value',
        displayOptions: {
            show: {
                resource: ['products'],
                operation: ['products:update']
            }
        }
    },
    {
        displayName: 'Supplier Code',
        name: 'SupplierCode',
        type: 'string',
        default: '',
        description: 'Supplier',
        displayOptions: {
            show: {
                resource: ['products'],
                operation: ['products:update']
            }
        }
    },
    {
        displayName: 'Lta Group ID',
        name: 'ltaGroupID',
        type: 'number',
        default: '',
        description: 'LTA Product Group ID',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['products'],
                operation: ['products:update']
            }
        }
    },
    {
        displayName: 'Lta Group Code',
        name: 'ltaGroupCode',
        type: 'string',
        default: '',
        description: 'LTA Product Group Code',
        displayOptions: {
            show: {
                resource: ['products'],
                operation: ['products:update']
            }
        }
    },
    {
        displayName: 'Assign Date',
        name: 'assignDate',
        type: 'string',
        default: '',
        description: 'Assignment Effective Date',
        displayOptions: {
            show: {
                resource: ['products'],
                operation: ['products:update']
            }
        }
    }
];

export const productsListFields: INodeProperties[] = [
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
                resource: ['products'],
                operation: ['products:list']
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
                resource: ['products'],
                operation: ['products:list'],
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
                resource: ['products'],
                operation: ['products:list'],
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
                resource: ['products'],
                operation: ['products:list'],
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
                        default: 'acceptableLife',
                        description: 'Field name to filter on',
                        required: true,
                        noDataExpression: true,
                        options: [
                            {
                                name: 'Acceptable Life',
                                value: 'acceptableLife'
                            },
                            {
                                name: 'Active Date',
                                value: 'activeDate'
                            },
                            {
                                name: 'Age Check Code',
                                value: 'ageCheckCode'
                            },
                            {
                                name: 'Alcohol By Volume',
                                value: 'alcoholByVolume'
                            },
                            {
                                name: 'Alert Forecast',
                                value: 'alertForecast'
                            },
                            {
                                name: 'Allergen Code',
                                value: 'allergenCode'
                            },
                            {
                                name: 'Allergen Qualifier',
                                value: 'allergenQualifier'
                            },
                            {
                                name: 'Allergen Status',
                                value: 'allergenStatus'
                            },
                            {
                                name: 'Alternate Supplier Bonus Text',
                                value: 'alternateSupplierBonusText'
                            },
                            {
                                name: 'Alternate Supplier Code',
                                value: 'alternateSupplierCode'
                            },
                            {
                                name: 'Alternate Supplier Cost Currency',
                                value: 'alternateSupplierCostCurrency'
                            },
                            {
                                name: 'Alternate Supplier Gross Cost',
                                value: 'alternateSupplierGrossCost'
                            },
                            {
                                name: 'Alternate Supplier Invoice Cost',
                                value: 'alternateSupplierInvoiceCost'
                            },
                            {
                                name: 'Alternate Supplier Nett Cost',
                                value: 'alternateSupplierNettCost'
                            },
                            {
                                name: 'Alternate Supplier Product Code',
                                value: 'alternateSupplierProductCode'
                            },
                            {
                                name: 'ATP Cut Off Days',
                                value: 'ATPCutOffDays'
                            },
                            {
                                name: 'Attribute Description',
                                value: 'attributeDescription'
                            },
                            {
                                name: 'Attribute Group',
                                value: 'attributeGroup'
                            },
                            {
                                name: 'Attribute Group Desc',
                                value: 'attributeGroupDesc'
                            },
                            {
                                name: 'Attribute Label',
                                value: 'attributeLabel'
                            },
                            {
                                name: 'Attribute Name',
                                value: 'attributeName'
                            },
                            {
                                name: 'Available To Sell',
                                value: 'availableToSell'
                            },
                            {
                                name: 'Award Ratio',
                                value: 'awardRatio'
                            },
                            {
                                name: 'Barrelage',
                                value: 'barrelage'
                            },
                            {
                                name: 'Base Product Code',
                                value: 'baseProductCode'
                            },
                            {
                                name: 'Batch Number',
                                value: 'batchNumber'
                            },
                            {
                                name: 'Batch Reference Required',
                                value: 'batchReferenceRequired'
                            },
                            {
                                name: 'Bonus Text',
                                value: 'bonusText'
                            },
                            {
                                name: 'Bottles Cans Per Case',
                                value: 'bottlesCansPerCase'
                            },
                            {
                                name: 'Brand',
                                value: 'brand'
                            },
                            {
                                name: 'Brand Desc',
                                value: 'brandDesc'
                            },
                            {
                                name: 'Brand Group',
                                value: 'brandGroup'
                            },
                            {
                                name: 'Buy Multiplier',
                                value: 'buyMultiplier'
                            },
                            {
                                name: 'Card Item',
                                value: 'cardItem'
                            },
                            {
                                name: 'Case Height',
                                value: 'caseHeight'
                            },
                            {
                                name: 'Case Length',
                                value: 'caseLength'
                            },
                            {
                                name: 'Case Volume',
                                value: 'caseVolume'
                            },
                            {
                                name: 'Case Width',
                                value: 'caseWidth'
                            },
                            {
                                name: 'Cases',
                                value: 'cases'
                            },
                            {
                                name: 'Cashier Age',
                                value: 'cashierAge'
                            },
                            {
                                name: 'Catering',
                                value: 'catering'
                            },
                            {
                                name: 'Cigarettes Per Case',
                                value: 'cigarettesPerCase'
                            },
                            {
                                name: 'Cigarettes Per Pack',
                                value: 'cigarettesPerPack'
                            },
                            {
                                name: 'Class',
                                value: 'class'
                            },
                            {
                                name: 'Cn Code',
                                value: 'cnCode'
                            },
                            {
                                name: 'Cn Tariff',
                                value: 'cnTariff'
                            },
                            {
                                name: 'Colour',
                                value: 'colour'
                            },
                            {
                                name: 'Comment',
                                value: 'comment'
                            },
                            {
                                name: 'Company Transfer Cost Centre Code',
                                value: 'companyTransferCostCentreCode'
                            },
                            {
                                name: 'Company Transfer Division Code',
                                value: 'companyTransferDivisionCode'
                            },
                            {
                                name: 'Company Transfer Ledger Code',
                                value: 'companyTransferLedgerCode'
                            },
                            {
                                name: 'Component Type',
                                value: 'componentType'
                            },
                            {
                                name: 'Composite',
                                value: 'composite'
                            },
                            {
                                name: 'Consumable',
                                value: 'consumable'
                            },
                            {
                                name: 'Consumer Description',
                                value: 'consumerDescription'
                            },
                            {
                                name: 'Container',
                                value: 'container'
                            },
                            {
                                name: 'Container Type',
                                value: 'containerType'
                            },
                            {
                                name: 'Container2',
                                value: 'container2'
                            },
                            {
                                name: 'Cop Cost Centre',
                                value: 'copCostCentre'
                            },
                            {
                                name: 'Cop Div Code',
                                value: 'copDivCode'
                            },
                            {
                                name: 'Cop Nl Code',
                                value: 'copNlCode'
                            },
                            {
                                name: 'Core',
                                value: 'core'
                            },
                            {
                                name: 'Cos Cost Centre',
                                value: 'cosCostCentre'
                            },
                            {
                                name: 'Cos Div Code',
                                value: 'cosDivCode'
                            },
                            {
                                name: 'Cos Nl Code',
                                value: 'cosNlCode'
                            },
                            {
                                name: 'Cost Currency',
                                value: 'costCurrency'
                            },
                            {
                                name: 'Country',
                                value: 'country'
                            },
                            {
                                name: 'Create Date',
                                value: 'createDate'
                            },
                            {
                                name: 'Cross Sell Multiplier',
                                value: 'crossSellMultiplier'
                            },
                            {
                                name: 'Cross Sell Product',
                                value: 'crossSellProduct'
                            },
                            {
                                name: 'Cross Sell Sequence',
                                value: 'crossSellSequence'
                            },
                            {
                                name: 'Csr Always',
                                value: 'csrAlways'
                            },
                            {
                                name: 'Csr Coslip',
                                value: 'csrCoslip'
                            },
                            {
                                name: 'Csr Over Sales',
                                value: 'csrOverSales'
                            },
                            {
                                name: 'Customer Age',
                                value: 'customerAge'
                            },
                            {
                                name: 'Customer Type',
                                value: 'customerType'
                            },
                            {
                                name: 'Cut Text',
                                value: 'cutText'
                            },
                            {
                                name: 'Date Available',
                                value: 'dateAvailable'
                            },
                            {
                                name: 'Date Coded',
                                value: 'dateCoded'
                            },
                            {
                                name: 'Deposit Code',
                                value: 'depositCode'
                            },
                            {
                                name: 'Deposit Indicator',
                                value: 'depositIndicator'
                            },
                            {
                                name: 'Deposit Value',
                                value: 'depositValue'
                            },
                            {
                                name: 'Description',
                                value: 'description'
                            },
                            {
                                name: 'Description Indicator',
                                value: 'descriptionIndicator'
                            },
                            {
                                name: 'Description Line1',
                                value: 'descriptionLine1'
                            },
                            {
                                name: 'Description Line2',
                                value: 'descriptionLine2'
                            },
                            {
                                name: 'Details',
                                value: 'details'
                            },
                            {
                                name: 'Dilute Ratio',
                                value: 'diluteRatio'
                            },
                            {
                                name: 'Division Code',
                                value: 'divisionCode'
                            },
                            {
                                name: 'Drink End',
                                value: 'drinkEnd'
                            },
                            {
                                name: 'Drink Start',
                                value: 'drinkStart'
                            },
                            {
                                name: 'Drs Container Type',
                                value: 'drsContainerType'
                            },
                            {
                                name: 'Drs Container Units',
                                value: 'drsContainerUnits'
                            },
                            {
                                name: 'Drs Deposit Code',
                                value: 'drsDepositCode'
                            },
                            {
                                name: 'Drs Multi Pack Barcode',
                                value: 'drsMultiPackBarcode'
                            },
                            {
                                name: 'Drs Own Produced',
                                value: 'drsOwnProduced'
                            },
                            {
                                name: 'Drs Replacement Product',
                                value: 'drsReplacementProduct'
                            },
                            {
                                name: 'Duty Code',
                                value: 'dutyCode'
                            },
                            {
                                name: 'Each Weight',
                                value: 'eachWeight'
                            },
                            {
                                name: 'Ean Code',
                                value: 'eanCode'
                            },
                            {
                                name: 'Ean Indicator',
                                value: 'eanIndicator'
                            },
                            {
                                name: 'Ean Last Update',
                                value: 'eanLastUpdate'
                            },
                            {
                                name: 'Edge Of Shelf Description',
                                value: 'edgeOfShelfDescription'
                            },
                            {
                                name: 'EDLP',
                                value: 'EDLP'
                            },
                            {
                                name: 'End Date',
                                value: 'endDate'
                            },
                            {
                                name: 'End Plof',
                                value: 'endPlof'
                            },
                            {
                                name: 'Equivalent Cases',
                                value: 'equivalentCases'
                            },
                            {
                                name: 'Expense Code',
                                value: 'expenseCode'
                            },
                            {
                                name: 'Export Type',
                                value: 'exportType'
                            },
                            {
                                name: 'Extended Credit Group',
                                value: 'extendedCreditGroup'
                            },
                            {
                                name: 'External Delivery Service',
                                value: 'externalDeliveryService'
                            },
                            {
                                name: 'Financial Indicator',
                                value: 'financialIndicator'
                            },
                            {
                                name: 'Flash Main Product Code',
                                value: 'flashMainProductCode'
                            },
                            {
                                name: 'Flash Pack Indicator',
                                value: 'flashPackIndicator'
                            },
                            {
                                name: 'Generic Product Code',
                                value: 'genericProductCode'
                            },
                            {
                                name: 'Generic Type',
                                value: 'genericType'
                            },
                            {
                                name: 'Grn Priced',
                                value: 'grnPriced'
                            },
                            {
                                name: 'Gross Cost',
                                value: 'grossCost'
                            },
                            {
                                name: 'Group Parent Code',
                                value: 'groupParentCode'
                            },
                            {
                                name: 'Group Sequence',
                                value: 'groupSequence'
                            },
                            {
                                name: 'GS1Unit Of Measure',
                                value: 'GS1UnitOfMeasure'
                            },
                            {
                                name: 'GTIN',
                                value: 'GTIN'
                            },
                            {
                                name: 'Handling Type',
                                value: 'handlingType'
                            },
                            {
                                name: 'Hide Nested Keys',
                                value: 'hideNestedKeys'
                            },
                            {
                                name: 'High Strength Beer Duty',
                                value: 'highStrengthBeerDuty'
                            },
                            {
                                name: 'Home Produced',
                                value: 'homeProduced'
                            },
                            {
                                name: 'Ibap Group',
                                value: 'ibapGroup'
                            },
                            {
                                name: 'Image File Reference',
                                value: 'imageFileReference'
                            },
                            {
                                name: 'Imb Code',
                                value: 'imbCode'
                            },
                            {
                                name: 'Ingredient Indicator',
                                value: 'ingredientIndicator'
                            },
                            {
                                name: 'Ingredients',
                                value: 'ingredients'
                            },
                            {
                                name: 'Invoice Cost',
                                value: 'InvoiceCost'
                            },
                            {
                                name: 'KVI',
                                value: 'KVI'
                            },
                            {
                                name: 'Label Type',
                                value: 'labelType'
                            },
                            {
                                name: 'Last Update',
                                value: 'lastUpdate'
                            },
                            {
                                name: 'Layer',
                                value: 'layer'
                            },
                            {
                                name: 'Levy Code',
                                value: 'levyCode'
                            },
                            {
                                name: 'Limit',
                                value: 'limit'
                            },
                            {
                                name: 'Linked Silver Code',
                                value: 'linkedSilverCode'
                            },
                            {
                                name: 'Litres',
                                value: 'litres'
                            },
                            {
                                name: 'Litres Of Pure Alcohol',
                                value: 'litresOfPureAlcohol'
                            },
                            {
                                name: 'Location',
                                value: 'location'
                            },
                            {
                                name: 'Lookup Description',
                                value: 'lookupDescription'
                            },
                            {
                                name: 'Main Product Code',
                                value: 'mainProductCode'
                            },
                            {
                                name: 'Manufacture Time',
                                value: 'manufactureTime'
                            },
                            {
                                name: 'Manufacturer',
                                value: 'manufacturer'
                            },
                            {
                                name: 'Manufacturing Batch Quantity',
                                value: 'manufacturingBatchQuantity'
                            },
                            {
                                name: 'Manufacturing Type',
                                value: 'manufacturingType'
                            },
                            {
                                name: 'Max Delivered Life',
                                value: 'maxDeliveredLife'
                            },
                            {
                                name: 'Maximum Cost',
                                value: 'maximumCost'
                            },
                            {
                                name: 'Maximum Weight Variance',
                                value: 'maximumWeightVariance'
                            },
                            {
                                name: 'Message Category',
                                value: 'messageCategory'
                            },
                            {
                                name: 'Minimum Base',
                                value: 'minimumBase'
                            },
                            {
                                name: 'Minimum Life',
                                value: 'minimumLife'
                            },
                            {
                                name: 'Minimum Order Quantity',
                                value: 'minimumOrderQuantity'
                            },
                            {
                                name: 'Model Stock Sheet',
                                value: 'modelStockSheet'
                            },
                            {
                                name: 'Multi Pack Quantity',
                                value: 'multiPackQuantity'
                            },
                            {
                                name: 'National Product Code',
                                value: 'nationalProductCode'
                            },
                            {
                                name: 'Nested',
                                value: 'nested'
                            },
                            {
                                name: 'Nett Cost',
                                value: 'nettCost'
                            },
                            {
                                name: 'Nett Mass',
                                value: 'nettMass'
                            },
                            {
                                name: 'Next ID',
                                value: 'nextID'
                            },
                            {
                                name: 'Nl Code',
                                value: 'nlCode'
                            },
                            {
                                name: 'Nl Cost Centre',
                                value: 'nlCostCentre'
                            },
                            {
                                name: 'Nominal Weight',
                                value: 'nominalWeight'
                            },
                            {
                                name: 'Offset',
                                value: 'offset'
                            },
                            {
                                name: 'One Label',
                                value: 'oneLabel'
                            },
                            {
                                name: 'Online',
                                value: 'online'
                            },
                            {
                                name: 'Order Thru',
                                value: 'orderThru'
                            },
                            {
                                name: 'Origin',
                                value: 'origin'
                            },
                            {
                                name: 'Otu',
                                value: 'otu'
                            },
                            {
                                name: 'Override Date',
                                value: 'overrideDate'
                            },
                            {
                                name: 'Override Details',
                                value: 'overrideDetails'
                            },
                            {
                                name: 'Own Brand Indicator',
                                value: 'ownBrandIndicator'
                            },
                            {
                                name: 'Pack Description',
                                value: 'packDescription'
                            },
                            {
                                name: 'Pack Unit',
                                value: 'packUnit'
                            },
                            {
                                name: 'Packaging',
                                value: 'packaging'
                            },
                            {
                                name: 'Packed In House',
                                value: 'packedInHouse'
                            },
                            {
                                name: 'Pallet',
                                value: 'pallet'
                            },
                            {
                                name: 'Pallet Percentage',
                                value: 'palletPercentage'
                            },
                            {
                                name: 'Pcl Prefix',
                                value: 'pclPrefix'
                            },
                            {
                                name: 'Pcl Suffix',
                                value: 'pclSuffix'
                            },
                            {
                                name: 'Pi Date',
                                value: 'piDate'
                            },
                            {
                                name: 'Pi Interval',
                                value: 'piInterval'
                            },
                            {
                                name: 'Pick Batch Quantity',
                                value: 'pickBatchQuantity'
                            },
                            {
                                name: 'Pim P Code',
                                value: 'pimPCode'
                            },
                            {
                                name: 'Pl Cost Centre',
                                value: 'plCostCentre'
                            },
                            {
                                name: 'Pl Div Code',
                                value: 'plDivCode'
                            },
                            {
                                name: 'Pl Nl Code',
                                value: 'plNlCode'
                            },
                            {
                                name: 'Plof Code',
                                value: 'plofCode'
                            },
                            {
                                name: 'Plof Group',
                                value: 'plofGroup'
                            },
                            {
                                name: 'Plof Main',
                                value: 'plofMain'
                            },
                            {
                                name: 'PLU Product Group',
                                value: 'PLUProductGroup'
                            },
                            {
                                name: 'Plu Type',
                                value: 'pluType'
                            },
                            {
                                name: 'PO Batch Quantity',
                                value: 'POBatchQuantity'
                            },
                            {
                                name: 'PO Minimum Quantity',
                                value: 'POMinimumQuantity'
                            },
                            {
                                name: 'Po Val Code',
                                value: 'poValCode'
                            },
                            {
                                name: 'Points Ratio',
                                value: 'pointsRatio'
                            },
                            {
                                name: 'Portion Weight',
                                value: 'portionWeight'
                            },
                            {
                                name: 'Portions Per Case',
                                value: 'portionsPerCase'
                            },
                            {
                                name: 'Pre Order',
                                value: 'preOrder'
                            },
                            {
                                name: 'Preferred Multiplier',
                                value: 'preferredMultiplier'
                            },
                            {
                                name: 'Preferred Product',
                                value: 'preferredProduct'
                            },
                            {
                                name: 'Preferred Sequence',
                                value: 'preferredSequence'
                            },
                            {
                                name: 'Preparation',
                                value: 'preparation'
                            },
                            {
                                name: 'Prh Code',
                                value: 'prhCode'
                            },
                            {
                                name: 'Prh1Code',
                                value: 'prh1Code'
                            },
                            {
                                name: 'Prh4Code',
                                value: 'prh4Code'
                            },
                            {
                                name: 'Price Group',
                                value: 'priceGroup'
                            },
                            {
                                name: 'Product Code',
                                value: 'productCode'
                            },
                            {
                                name: 'Product Group',
                                value: 'productGroup'
                            },
                            {
                                name: 'Product Status',
                                value: 'productStatus'
                            },
                            {
                                name: 'Purchase In House',
                                value: 'purchaseInHouse'
                            },
                            {
                                name: 'Purchase Pack Type',
                                value: 'purchasePackType'
                            },
                            {
                                name: 'Ranking',
                                value: 'ranking'
                            },
                            {
                                name: 'Ration',
                                value: 'ration'
                            },
                            {
                                name: 'Rearing',
                                value: 'rearing'
                            },
                            {
                                name: 'Reason',
                                value: 'reason'
                            },
                            {
                                name: 'Reasonable Order Quantity',
                                value: 'reasonableOrderQuantity'
                            },
                            {
                                name: 'Rebate Range',
                                value: 'rebateRange'
                            },
                            {
                                name: 'Rebateable',
                                value: 'rebateable'
                            },
                            {
                                name: 'Recommended RRP',
                                value: 'recommendedRRP'
                            },
                            {
                                name: 'Recommended Sell',
                                value: 'recommendedSell'
                            },
                            {
                                name: 'Replaces Product Code',
                                value: 'replacesProductCode'
                            },
                            {
                                name: 'Retail Height',
                                value: 'retailHeight'
                            },
                            {
                                name: 'Retail Length',
                                value: 'retailLength'
                            },
                            {
                                name: 'Retail Volume',
                                value: 'retailVolume'
                            },
                            {
                                name: 'Retail Width',
                                value: 'retailWidth'
                            },
                            {
                                name: 'Rf Quantity',
                                value: 'rfQuantity'
                            },
                            {
                                name: 'Root Product Code',
                                value: 'rootProductCode'
                            },
                            {
                                name: 'Rrp Margin',
                                value: 'rrpMargin'
                            },
                            {
                                name: 'Rrv Cost Centre',
                                value: 'rrvCostCentre'
                            },
                            {
                                name: 'Rrv Div Code',
                                value: 'rrvDivCode'
                            },
                            {
                                name: 'Rrv Nl Code',
                                value: 'rrvNlCode'
                            },
                            {
                                name: 'Safety Certificate',
                                value: 'safetyCertificate'
                            },
                            {
                                name: 'Sales Item',
                                value: 'salesItem'
                            },
                            {
                                name: 'Sales Item Cost Discount',
                                value: 'salesItemCostDiscount'
                            },
                            {
                                name: 'Sales Item Sell Discount',
                                value: 'salesItemSellDiscount'
                            },
                            {
                                name: 'Seas Type',
                                value: 'seasType'
                            },
                            {
                                name: 'Season End',
                                value: 'seasonEnd'
                            },
                            {
                                name: 'Season Start',
                                value: 'seasonStart'
                            },
                            {
                                name: 'Seasonal Item',
                                value: 'seasonalItem'
                            },
                            {
                                name: 'Security Item',
                                value: 'securityItem'
                            },
                            {
                                name: 'Sell As',
                                value: 'sellAs'
                            },
                            {
                                name: 'Sell Margin',
                                value: 'sellMargin'
                            },
                            {
                                name: 'Separate Order Indicator',
                                value: 'separateOrderIndicator'
                            },
                            {
                                name: 'Shelf Life Indicator',
                                value: 'shelfLifeIndicator'
                            },
                            {
                                name: 'Shelf Linear Meterage',
                                value: 'shelfLinearMeterage'
                            },
                            {
                                name: 'Short Description',
                                value: 'shortDescription'
                            },
                            {
                                name: 'Slaughter',
                                value: 'slaughter'
                            },
                            {
                                name: 'Sm Cost Centre',
                                value: 'smCostCentre'
                            },
                            {
                                name: 'Sm Div Code',
                                value: 'smDivCode'
                            },
                            {
                                name: 'Sm Nl Code',
                                value: 'smNlCode'
                            },
                            {
                                name: 'Split Indicator',
                                value: 'splitIndicator'
                            },
                            {
                                name: 'Split Premium',
                                value: 'splitPremium'
                            },
                            {
                                name: 'Stack Height',
                                value: 'stackHeight'
                            },
                            {
                                name: 'Standard Container',
                                value: 'standardContainer'
                            },
                            {
                                name: 'Standard Count',
                                value: 'standardCount'
                            },
                            {
                                name: 'Standard Unit Weight',
                                value: 'standardUnitWeight'
                            },
                            {
                                name: 'Standard Weight',
                                value: 'standardWeight'
                            },
                            {
                                name: 'Start Date',
                                value: 'startDate'
                            },
                            {
                                name: 'Start Plof',
                                value: 'startPlof'
                            },
                            {
                                name: 'Stock Product',
                                value: 'stockProduct'
                            },
                            {
                                name: 'Stock Type',
                                value: 'stockType'
                            },
                            {
                                name: 'Stock Update',
                                value: 'stockUpdate'
                            },
                            {
                                name: 'Stock Variance Percentage',
                                value: 'stockVariancePercentage'
                            },
                            {
                                name: 'Stocked',
                                value: 'stocked'
                            },
                            {
                                name: 'Sub Group',
                                value: 'subGroup'
                            },
                            {
                                name: 'Substitute Chain',
                                value: 'substituteChain'
                            },
                            {
                                name: 'Substitute Code',
                                value: 'substituteCode'
                            },
                            {
                                name: 'Substitute Indicator',
                                value: 'substituteIndicator'
                            },
                            {
                                name: 'Supplementary Unit',
                                value: 'supplementaryUnit'
                            },
                            {
                                name: 'Supplier Code',
                                value: 'supplierCode'
                            },
                            {
                                name: 'Supplier Not Available',
                                value: 'supplierNotAvailable'
                            },
                            {
                                name: 'Supplier Product Code',
                                value: 'supplierProductCode'
                            },
                            {
                                name: 'Supplier Sequence',
                                value: 'supplierSequence'
                            },
                            {
                                name: 'Surcharge Indicator',
                                value: 'surchargeIndicator'
                            },
                            {
                                name: 'Surcharge Split',
                                value: 'surchargeSplit'
                            },
                            {
                                name: 'Surcharge Unit',
                                value: 'surchargeUnit'
                            },
                            {
                                name: 'Sv Cost Centre',
                                value: 'svCostCentre'
                            },
                            {
                                name: 'Sv Div Code',
                                value: 'svDivCode'
                            },
                            {
                                name: 'Sv Nl Code',
                                value: 'svNlCode'
                            },
                            {
                                name: 'Target Margin RRP Indicator',
                                value: 'targetMarginRRPIndicator'
                            },
                            {
                                name: 'Target Margin Sell Indicator',
                                value: 'targetMarginSellIndicator'
                            },
                            {
                                name: 'Tariff',
                                value: 'tariff'
                            },
                            {
                                name: 'Tariff Recipe Indicator',
                                value: 'tariffRecipeIndicator'
                            },
                            {
                                name: 'Text1',
                                value: 'text1'
                            },
                            {
                                name: 'Text2',
                                value: 'text2'
                            },
                            {
                                name: 'Text3',
                                value: 'text3'
                            },
                            {
                                name: 'Timeout',
                                value: 'timeout'
                            },
                            {
                                name: 'Tobacco Product ID',
                                value: 'tobaccoProductID'
                            },
                            {
                                name: 'Tobacco Weight Per Case',
                                value: 'tobaccoWeightPerCase'
                            },
                            {
                                name: 'Track And Trace',
                                value: 'trackAndTrace'
                            },
                            {
                                name: 'Tuc',
                                value: 'tuc'
                            },
                            {
                                name: 'Unit Ratio',
                                value: 'unitRatio'
                            },
                            {
                                name: 'Unit Type',
                                value: 'unitType'
                            },
                            {
                                name: 'User Category1',
                                value: 'userCategory1'
                            },
                            {
                                name: 'User Category2',
                                value: 'userCategory2'
                            },
                            {
                                name: 'User Category3',
                                value: 'userCategory3'
                            },
                            {
                                name: 'User Category4',
                                value: 'userCategory4'
                            },
                            {
                                name: 'User Category5',
                                value: 'userCategory5'
                            },
                            {
                                name: 'Variant Family Code',
                                value: 'variantFamilyCode'
                            },
                            {
                                name: 'Variety',
                                value: 'variety'
                            },
                            {
                                name: 'VAT Code',
                                value: 'VATCode'
                            },
                            {
                                name: 'Vb Quantity',
                                value: 'vbQuantity'
                            },
                            {
                                name: 'Vb Start Level',
                                value: 'vbStartLevel'
                            },
                            {
                                name: 'Vendor Product Category',
                                value: 'vendorProductCategory'
                            },
                            {
                                name: 'Vendor Sub Category',
                                value: 'vendorSubCategory'
                            },
                            {
                                name: 'Weee Category',
                                value: 'weeeCategory'
                            },
                            {
                                name: 'Weee Charge',
                                value: 'weeeCharge'
                            },
                            {
                                name: 'Weight Conv',
                                value: 'weightConv'
                            },
                            {
                                name: 'Weight Count Ratio Variance',
                                value: 'weightCountRatioVariance'
                            },
                            {
                                name: 'Weighted',
                                value: 'weighted'
                            },
                            {
                                name: 'Wsale Ind',
                                value: 'wsaleInd'
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
                resource: ['products'],
                operation: ['products:list'],
                filterMode: ['raw']
            }
        }
    },
    {
        displayName: 'Product Code',
        name: 'productCode',
        type: 'string',
        default: '',
        description: 'Product Code (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'A123456',
        displayOptions: {
            show: {
                resource: ['products'],
                operation: ['products:list'],
                filterMode: ['common']
            }
        }
    },
    {
        displayName: 'Product Group',
        name: 'productGroup',
        type: 'string',
        default: '',
        description: 'Product Group (=,EQ,&lt;&gt;,NE,&gt;,GT,&lt;,LT,&gt;=,GE,&lt;=,LE,begins,matches)',
        placeholder: 'A123',
        displayOptions: {
            show: {
                resource: ['products'],
                operation: ['products:list'],
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
        placeholder: 'productCode,-lastUpdate',
        options: [
            {
                name: 'Acceptable Life (Ascending)',
                value: 'acceptableLife',
                description: 'Sort by Acceptable Life in ascending order'
            },
            {
                name: 'Acceptable Life (Descending)',
                value: '-acceptableLife',
                description: 'Sort by Acceptable Life in descending order'
            },
            {
                name: 'Active Date (Ascending)',
                value: 'activeDate',
                description: 'Sort by Active Date in ascending order'
            },
            {
                name: 'Active Date (Descending)',
                value: '-activeDate',
                description: 'Sort by Active Date in descending order'
            },
            {
                name: 'Age Check Code (Ascending)',
                value: 'ageCheckCode',
                description: 'Sort by Age Check Code in ascending order'
            },
            {
                name: 'Age Check Code (Descending)',
                value: '-ageCheckCode',
                description: 'Sort by Age Check Code in descending order'
            },
            {
                name: 'Alcohol By Volume (Ascending)',
                value: 'alcoholByVolume',
                description: 'Sort by Alcohol By Volume in ascending order'
            },
            {
                name: 'Alcohol By Volume (Descending)',
                value: '-alcoholByVolume',
                description: 'Sort by Alcohol By Volume in descending order'
            },
            {
                name: 'Alert Forecast (Ascending)',
                value: 'alertForecast',
                description: 'Sort by Alert Forecast in ascending order'
            },
            {
                name: 'Alert Forecast (Descending)',
                value: '-alertForecast',
                description: 'Sort by Alert Forecast in descending order'
            },
            {
                name: 'Allergen Code (Ascending)',
                value: 'allergenCode',
                description: 'Sort by Allergen Code in ascending order'
            },
            {
                name: 'Allergen Code (Descending)',
                value: '-allergenCode',
                description: 'Sort by Allergen Code in descending order'
            },
            {
                name: 'Allergen Qualifier (Ascending)',
                value: 'allergenQualifier',
                description: 'Sort by Allergen Qualifier in ascending order'
            },
            {
                name: 'Allergen Qualifier (Descending)',
                value: '-allergenQualifier',
                description: 'Sort by Allergen Qualifier in descending order'
            },
            {
                name: 'Allergen Status (Ascending)',
                value: 'allergenStatus',
                description: 'Sort by Allergen Status in ascending order'
            },
            {
                name: 'Allergen Status (Descending)',
                value: '-allergenStatus',
                description: 'Sort by Allergen Status in descending order'
            },
            {
                name: 'Alternate Supplier Bonus Text (Ascending)',
                value: 'alternateSupplierBonusText',
                description: 'Sort by Alternate Supplier Bonus Text in ascending order'
            },
            {
                name: 'Alternate Supplier Bonus Text (Descending)',
                value: '-alternateSupplierBonusText',
                description: 'Sort by Alternate Supplier Bonus Text in descending order'
            },
            {
                name: 'Alternate Supplier Code (Ascending)',
                value: 'alternateSupplierCode',
                description: 'Sort by Alternate Supplier Code in ascending order'
            },
            {
                name: 'Alternate Supplier Code (Descending)',
                value: '-alternateSupplierCode',
                description: 'Sort by Alternate Supplier Code in descending order'
            },
            {
                name: 'Alternate Supplier Cost Currency (Ascending)',
                value: 'alternateSupplierCostCurrency',
                description: 'Sort by Alternate Supplier Cost Currency in ascending order'
            },
            {
                name: 'Alternate Supplier Cost Currency (Descending)',
                value: '-alternateSupplierCostCurrency',
                description: 'Sort by Alternate Supplier Cost Currency in descending order'
            },
            {
                name: 'Alternate Supplier Gross Cost (Ascending)',
                value: 'alternateSupplierGrossCost',
                description: 'Sort by Alternate Supplier Gross Cost in ascending order'
            },
            {
                name: 'Alternate Supplier Gross Cost (Descending)',
                value: '-alternateSupplierGrossCost',
                description: 'Sort by Alternate Supplier Gross Cost in descending order'
            },
            {
                name: 'Alternate Supplier Invoice Cost (Ascending)',
                value: 'alternateSupplierInvoiceCost',
                description: 'Sort by Alternate Supplier Invoice Cost in ascending order'
            },
            {
                name: 'Alternate Supplier Invoice Cost (Descending)',
                value: '-alternateSupplierInvoiceCost',
                description: 'Sort by Alternate Supplier Invoice Cost in descending order'
            },
            {
                name: 'Alternate Supplier Nett Cost (Ascending)',
                value: 'alternateSupplierNettCost',
                description: 'Sort by Alternate Supplier Nett Cost in ascending order'
            },
            {
                name: 'Alternate Supplier Nett Cost (Descending)',
                value: '-alternateSupplierNettCost',
                description: 'Sort by Alternate Supplier Nett Cost in descending order'
            },
            {
                name: 'Alternate Supplier Product Code (Ascending)',
                value: 'alternateSupplierProductCode',
                description: 'Sort by Alternate Supplier Product Code in ascending order'
            },
            {
                name: 'Alternate Supplier Product Code (Descending)',
                value: '-alternateSupplierProductCode',
                description: 'Sort by Alternate Supplier Product Code in descending order'
            },
            {
                name: 'ATP Cut Off Days (Ascending)',
                value: 'ATPCutOffDays',
                description: 'Sort by ATP Cut Off Days in ascending order'
            },
            {
                name: 'ATP Cut Off Days (Descending)',
                value: '-ATPCutOffDays',
                description: 'Sort by ATP Cut Off Days in descending order'
            },
            {
                name: 'Attribute Description (Ascending)',
                value: 'attributeDescription',
                description: 'Sort by Attribute Description in ascending order'
            },
            {
                name: 'Attribute Description (Descending)',
                value: '-attributeDescription',
                description: 'Sort by Attribute Description in descending order'
            },
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
                name: 'Attribute Group Desc (Ascending)',
                value: 'attributeGroupDesc',
                description: 'Sort by Attribute Group Desc in ascending order'
            },
            {
                name: 'Attribute Group Desc (Descending)',
                value: '-attributeGroupDesc',
                description: 'Sort by Attribute Group Desc in descending order'
            },
            {
                name: 'Attribute Label (Ascending)',
                value: 'attributeLabel',
                description: 'Sort by Attribute Label in ascending order'
            },
            {
                name: 'Attribute Label (Descending)',
                value: '-attributeLabel',
                description: 'Sort by Attribute Label in descending order'
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
                name: 'Available To Sell (Ascending)',
                value: 'availableToSell',
                description: 'Sort by Available To Sell in ascending order'
            },
            {
                name: 'Available To Sell (Descending)',
                value: '-availableToSell',
                description: 'Sort by Available To Sell in descending order'
            },
            {
                name: 'Award Ratio (Ascending)',
                value: 'awardRatio',
                description: 'Sort by Award Ratio in ascending order'
            },
            {
                name: 'Award Ratio (Descending)',
                value: '-awardRatio',
                description: 'Sort by Award Ratio in descending order'
            },
            {
                name: 'Barrelage (Ascending)',
                value: 'barrelage',
                description: 'Sort by Barrelage in ascending order'
            },
            {
                name: 'Barrelage (Descending)',
                value: '-barrelage',
                description: 'Sort by Barrelage in descending order'
            },
            {
                name: 'Base Product Code (Ascending)',
                value: 'baseProductCode',
                description: 'Sort by Base Product Code in ascending order'
            },
            {
                name: 'Base Product Code (Descending)',
                value: '-baseProductCode',
                description: 'Sort by Base Product Code in descending order'
            },
            {
                name: 'Batch Number (Ascending)',
                value: 'batchNumber',
                description: 'Sort by Batch Number in ascending order'
            },
            {
                name: 'Batch Number (Descending)',
                value: '-batchNumber',
                description: 'Sort by Batch Number in descending order'
            },
            {
                name: 'Batch Reference Required (Ascending)',
                value: 'batchReferenceRequired',
                description: 'Sort by Batch Reference Required in ascending order'
            },
            {
                name: 'Batch Reference Required (Descending)',
                value: '-batchReferenceRequired',
                description: 'Sort by Batch Reference Required in descending order'
            },
            {
                name: 'Bonus Text (Ascending)',
                value: 'bonusText',
                description: 'Sort by Bonus Text in ascending order'
            },
            {
                name: 'Bonus Text (Descending)',
                value: '-bonusText',
                description: 'Sort by Bonus Text in descending order'
            },
            {
                name: 'Bottles Cans Per Case (Ascending)',
                value: 'bottlesCansPerCase',
                description: 'Sort by Bottles Cans Per Case in ascending order'
            },
            {
                name: 'Bottles Cans Per Case (Descending)',
                value: '-bottlesCansPerCase',
                description: 'Sort by Bottles Cans Per Case in descending order'
            },
            {
                name: 'Brand (Ascending)',
                value: 'brand',
                description: 'Sort by Brand in ascending order'
            },
            {
                name: 'Brand (Descending)',
                value: '-brand',
                description: 'Sort by Brand in descending order'
            },
            {
                name: 'Brand Desc (Ascending)',
                value: 'brandDesc',
                description: 'Sort by Brand Desc in ascending order'
            },
            {
                name: 'Brand Desc (Descending)',
                value: '-brandDesc',
                description: 'Sort by Brand Desc in descending order'
            },
            {
                name: 'Brand Group (Ascending)',
                value: 'brandGroup',
                description: 'Sort by Brand Group in ascending order'
            },
            {
                name: 'Brand Group (Descending)',
                value: '-brandGroup',
                description: 'Sort by Brand Group in descending order'
            },
            {
                name: 'Buy Multiplier (Ascending)',
                value: 'buyMultiplier',
                description: 'Sort by Buy Multiplier in ascending order'
            },
            {
                name: 'Buy Multiplier (Descending)',
                value: '-buyMultiplier',
                description: 'Sort by Buy Multiplier in descending order'
            },
            {
                name: 'Card Item (Ascending)',
                value: 'cardItem',
                description: 'Sort by Card Item in ascending order'
            },
            {
                name: 'Card Item (Descending)',
                value: '-cardItem',
                description: 'Sort by Card Item in descending order'
            },
            {
                name: 'Case Height (Ascending)',
                value: 'caseHeight',
                description: 'Sort by Case Height in ascending order'
            },
            {
                name: 'Case Height (Descending)',
                value: '-caseHeight',
                description: 'Sort by Case Height in descending order'
            },
            {
                name: 'Case Length (Ascending)',
                value: 'caseLength',
                description: 'Sort by Case Length in ascending order'
            },
            {
                name: 'Case Length (Descending)',
                value: '-caseLength',
                description: 'Sort by Case Length in descending order'
            },
            {
                name: 'Case Volume (Ascending)',
                value: 'caseVolume',
                description: 'Sort by Case Volume in ascending order'
            },
            {
                name: 'Case Volume (Descending)',
                value: '-caseVolume',
                description: 'Sort by Case Volume in descending order'
            },
            {
                name: 'Case Width (Ascending)',
                value: 'caseWidth',
                description: 'Sort by Case Width in ascending order'
            },
            {
                name: 'Case Width (Descending)',
                value: '-caseWidth',
                description: 'Sort by Case Width in descending order'
            },
            {
                name: 'Cases (Ascending)',
                value: 'cases',
                description: 'Sort by Cases in ascending order'
            },
            {
                name: 'Cases (Descending)',
                value: '-cases',
                description: 'Sort by Cases in descending order'
            },
            {
                name: 'Cashier Age (Ascending)',
                value: 'cashierAge',
                description: 'Sort by Cashier Age in ascending order'
            },
            {
                name: 'Cashier Age (Descending)',
                value: '-cashierAge',
                description: 'Sort by Cashier Age in descending order'
            },
            {
                name: 'Catering (Ascending)',
                value: 'catering',
                description: 'Sort by Catering in ascending order'
            },
            {
                name: 'Catering (Descending)',
                value: '-catering',
                description: 'Sort by Catering in descending order'
            },
            {
                name: 'Cigarettes Per Case (Ascending)',
                value: 'cigarettesPerCase',
                description: 'Sort by Cigarettes Per Case in ascending order'
            },
            {
                name: 'Cigarettes Per Case (Descending)',
                value: '-cigarettesPerCase',
                description: 'Sort by Cigarettes Per Case in descending order'
            },
            {
                name: 'Cigarettes Per Pack (Ascending)',
                value: 'cigarettesPerPack',
                description: 'Sort by Cigarettes Per Pack in ascending order'
            },
            {
                name: 'Cigarettes Per Pack (Descending)',
                value: '-cigarettesPerPack',
                description: 'Sort by Cigarettes Per Pack in descending order'
            },
            {
                name: 'Class (Ascending)',
                value: 'class',
                description: 'Sort by Class in ascending order'
            },
            {
                name: 'Class (Descending)',
                value: '-class',
                description: 'Sort by Class in descending order'
            },
            {
                name: 'Cn Code (Ascending)',
                value: 'cnCode',
                description: 'Sort by Cn Code in ascending order'
            },
            {
                name: 'Cn Code (Descending)',
                value: '-cnCode',
                description: 'Sort by Cn Code in descending order'
            },
            {
                name: 'Cn Tariff (Ascending)',
                value: 'cnTariff',
                description: 'Sort by Cn Tariff in ascending order'
            },
            {
                name: 'Cn Tariff (Descending)',
                value: '-cnTariff',
                description: 'Sort by Cn Tariff in descending order'
            },
            {
                name: 'Colour (Ascending)',
                value: 'colour',
                description: 'Sort by Colour in ascending order'
            },
            {
                name: 'Colour (Descending)',
                value: '-colour',
                description: 'Sort by Colour in descending order'
            },
            {
                name: 'Comment (Ascending)',
                value: 'comment',
                description: 'Sort by Comment in ascending order'
            },
            {
                name: 'Comment (Descending)',
                value: '-comment',
                description: 'Sort by Comment in descending order'
            },
            {
                name: 'Company Transfer Cost Centre Code (Ascending)',
                value: 'companyTransferCostCentreCode',
                description: 'Sort by Company Transfer Cost Centre Code in ascending order'
            },
            {
                name: 'Company Transfer Cost Centre Code (Descending)',
                value: '-companyTransferCostCentreCode',
                description: 'Sort by Company Transfer Cost Centre Code in descending order'
            },
            {
                name: 'Company Transfer Division Code (Ascending)',
                value: 'companyTransferDivisionCode',
                description: 'Sort by Company Transfer Division Code in ascending order'
            },
            {
                name: 'Company Transfer Division Code (Descending)',
                value: '-companyTransferDivisionCode',
                description: 'Sort by Company Transfer Division Code in descending order'
            },
            {
                name: 'Company Transfer Ledger Code (Ascending)',
                value: 'companyTransferLedgerCode',
                description: 'Sort by Company Transfer Ledger Code in ascending order'
            },
            {
                name: 'Company Transfer Ledger Code (Descending)',
                value: '-companyTransferLedgerCode',
                description: 'Sort by Company Transfer Ledger Code in descending order'
            },
            {
                name: 'Component Type (Ascending)',
                value: 'componentType',
                description: 'Sort by Component Type in ascending order'
            },
            {
                name: 'Component Type (Descending)',
                value: '-componentType',
                description: 'Sort by Component Type in descending order'
            },
            {
                name: 'Composite (Ascending)',
                value: 'composite',
                description: 'Sort by Composite in ascending order'
            },
            {
                name: 'Composite (Descending)',
                value: '-composite',
                description: 'Sort by Composite in descending order'
            },
            {
                name: 'Consumable (Ascending)',
                value: 'consumable',
                description: 'Sort by Consumable in ascending order'
            },
            {
                name: 'Consumable (Descending)',
                value: '-consumable',
                description: 'Sort by Consumable in descending order'
            },
            {
                name: 'Consumer Description (Ascending)',
                value: 'consumerDescription',
                description: 'Sort by Consumer Description in ascending order'
            },
            {
                name: 'Consumer Description (Descending)',
                value: '-consumerDescription',
                description: 'Sort by Consumer Description in descending order'
            },
            {
                name: 'Container (Ascending)',
                value: 'container',
                description: 'Sort by Container in ascending order'
            },
            {
                name: 'Container (Descending)',
                value: '-container',
                description: 'Sort by Container in descending order'
            },
            {
                name: 'Container Type (Ascending)',
                value: 'containerType',
                description: 'Sort by Container Type in ascending order'
            },
            {
                name: 'Container Type (Descending)',
                value: '-containerType',
                description: 'Sort by Container Type in descending order'
            },
            {
                name: 'Container2 (Ascending)',
                value: 'container2',
                description: 'Sort by Container2 in ascending order'
            },
            {
                name: 'Container2 (Descending)',
                value: '-container2',
                description: 'Sort by Container2 in descending order'
            },
            {
                name: 'Cop Cost Centre (Ascending)',
                value: 'copCostCentre',
                description: 'Sort by Cop Cost Centre in ascending order'
            },
            {
                name: 'Cop Cost Centre (Descending)',
                value: '-copCostCentre',
                description: 'Sort by Cop Cost Centre in descending order'
            },
            {
                name: 'Cop Div Code (Ascending)',
                value: 'copDivCode',
                description: 'Sort by Cop Div Code in ascending order'
            },
            {
                name: 'Cop Div Code (Descending)',
                value: '-copDivCode',
                description: 'Sort by Cop Div Code in descending order'
            },
            {
                name: 'Cop Nl Code (Ascending)',
                value: 'copNlCode',
                description: 'Sort by Cop Nl Code in ascending order'
            },
            {
                name: 'Cop Nl Code (Descending)',
                value: '-copNlCode',
                description: 'Sort by Cop Nl Code in descending order'
            },
            {
                name: 'Core (Ascending)',
                value: 'core',
                description: 'Sort by Core in ascending order'
            },
            {
                name: 'Core (Descending)',
                value: '-core',
                description: 'Sort by Core in descending order'
            },
            {
                name: 'Cos Cost Centre (Ascending)',
                value: 'cosCostCentre',
                description: 'Sort by Cos Cost Centre in ascending order'
            },
            {
                name: 'Cos Cost Centre (Descending)',
                value: '-cosCostCentre',
                description: 'Sort by Cos Cost Centre in descending order'
            },
            {
                name: 'Cos Div Code (Ascending)',
                value: 'cosDivCode',
                description: 'Sort by Cos Div Code in ascending order'
            },
            {
                name: 'Cos Div Code (Descending)',
                value: '-cosDivCode',
                description: 'Sort by Cos Div Code in descending order'
            },
            {
                name: 'Cos Nl Code (Ascending)',
                value: 'cosNlCode',
                description: 'Sort by Cos Nl Code in ascending order'
            },
            {
                name: 'Cos Nl Code (Descending)',
                value: '-cosNlCode',
                description: 'Sort by Cos Nl Code in descending order'
            },
            {
                name: 'Cost Currency (Ascending)',
                value: 'costCurrency',
                description: 'Sort by Cost Currency in ascending order'
            },
            {
                name: 'Cost Currency (Descending)',
                value: '-costCurrency',
                description: 'Sort by Cost Currency in descending order'
            },
            {
                name: 'Country (Ascending)',
                value: 'country',
                description: 'Sort by Country in ascending order'
            },
            {
                name: 'Country (Descending)',
                value: '-country',
                description: 'Sort by Country in descending order'
            },
            {
                name: 'Create Date (Ascending)',
                value: 'createDate',
                description: 'Sort by Create Date in ascending order'
            },
            {
                name: 'Create Date (Descending)',
                value: '-createDate',
                description: 'Sort by Create Date in descending order'
            },
            {
                name: 'Cross Sell Multiplier (Ascending)',
                value: 'crossSellMultiplier',
                description: 'Sort by Cross Sell Multiplier in ascending order'
            },
            {
                name: 'Cross Sell Multiplier (Descending)',
                value: '-crossSellMultiplier',
                description: 'Sort by Cross Sell Multiplier in descending order'
            },
            {
                name: 'Cross Sell Product (Ascending)',
                value: 'crossSellProduct',
                description: 'Sort by Cross Sell Product in ascending order'
            },
            {
                name: 'Cross Sell Product (Descending)',
                value: '-crossSellProduct',
                description: 'Sort by Cross Sell Product in descending order'
            },
            {
                name: 'Cross Sell Sequence (Ascending)',
                value: 'crossSellSequence',
                description: 'Sort by Cross Sell Sequence in ascending order'
            },
            {
                name: 'Cross Sell Sequence (Descending)',
                value: '-crossSellSequence',
                description: 'Sort by Cross Sell Sequence in descending order'
            },
            {
                name: 'Csr Always (Ascending)',
                value: 'csrAlways',
                description: 'Sort by Csr Always in ascending order'
            },
            {
                name: 'Csr Always (Descending)',
                value: '-csrAlways',
                description: 'Sort by Csr Always in descending order'
            },
            {
                name: 'Csr Coslip (Ascending)',
                value: 'csrCoslip',
                description: 'Sort by Csr Coslip in ascending order'
            },
            {
                name: 'Csr Coslip (Descending)',
                value: '-csrCoslip',
                description: 'Sort by Csr Coslip in descending order'
            },
            {
                name: 'Csr Over Sales (Ascending)',
                value: 'csrOverSales',
                description: 'Sort by Csr Over Sales in ascending order'
            },
            {
                name: 'Csr Over Sales (Descending)',
                value: '-csrOverSales',
                description: 'Sort by Csr Over Sales in descending order'
            },
            {
                name: 'Customer Age (Ascending)',
                value: 'customerAge',
                description: 'Sort by Customer Age in ascending order'
            },
            {
                name: 'Customer Age (Descending)',
                value: '-customerAge',
                description: 'Sort by Customer Age in descending order'
            },
            {
                name: 'Customer Type (Ascending)',
                value: 'customerType',
                description: 'Sort by Customer Type in ascending order'
            },
            {
                name: 'Customer Type (Descending)',
                value: '-customerType',
                description: 'Sort by Customer Type in descending order'
            },
            {
                name: 'Cut Text (Ascending)',
                value: 'cutText',
                description: 'Sort by Cut Text in ascending order'
            },
            {
                name: 'Cut Text (Descending)',
                value: '-cutText',
                description: 'Sort by Cut Text in descending order'
            },
            {
                name: 'Date Available (Ascending)',
                value: 'dateAvailable',
                description: 'Sort by Date Available in ascending order'
            },
            {
                name: 'Date Available (Descending)',
                value: '-dateAvailable',
                description: 'Sort by Date Available in descending order'
            },
            {
                name: 'Date Coded (Ascending)',
                value: 'dateCoded',
                description: 'Sort by Date Coded in ascending order'
            },
            {
                name: 'Date Coded (Descending)',
                value: '-dateCoded',
                description: 'Sort by Date Coded in descending order'
            },
            {
                name: 'Deposit Code (Ascending)',
                value: 'depositCode',
                description: 'Sort by Deposit Code in ascending order'
            },
            {
                name: 'Deposit Code (Descending)',
                value: '-depositCode',
                description: 'Sort by Deposit Code in descending order'
            },
            {
                name: 'Deposit Indicator (Ascending)',
                value: 'depositIndicator',
                description: 'Sort by Deposit Indicator in ascending order'
            },
            {
                name: 'Deposit Indicator (Descending)',
                value: '-depositIndicator',
                description: 'Sort by Deposit Indicator in descending order'
            },
            {
                name: 'Deposit Value (Ascending)',
                value: 'depositValue',
                description: 'Sort by Deposit Value in ascending order'
            },
            {
                name: 'Deposit Value (Descending)',
                value: '-depositValue',
                description: 'Sort by Deposit Value in descending order'
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
                name: 'Description Indicator (Ascending)',
                value: 'descriptionIndicator',
                description: 'Sort by Description Indicator in ascending order'
            },
            {
                name: 'Description Indicator (Descending)',
                value: '-descriptionIndicator',
                description: 'Sort by Description Indicator in descending order'
            },
            {
                name: 'Description Line1 (Ascending)',
                value: 'descriptionLine1',
                description: 'Sort by Description Line1 in ascending order'
            },
            {
                name: 'Description Line1 (Descending)',
                value: '-descriptionLine1',
                description: 'Sort by Description Line1 in descending order'
            },
            {
                name: 'Description Line2 (Ascending)',
                value: 'descriptionLine2',
                description: 'Sort by Description Line2 in ascending order'
            },
            {
                name: 'Description Line2 (Descending)',
                value: '-descriptionLine2',
                description: 'Sort by Description Line2 in descending order'
            },
            {
                name: 'Details (Ascending)',
                value: 'details',
                description: 'Sort by Details in ascending order'
            },
            {
                name: 'Details (Descending)',
                value: '-details',
                description: 'Sort by Details in descending order'
            },
            {
                name: 'Dilute Ratio (Ascending)',
                value: 'diluteRatio',
                description: 'Sort by Dilute Ratio in ascending order'
            },
            {
                name: 'Dilute Ratio (Descending)',
                value: '-diluteRatio',
                description: 'Sort by Dilute Ratio in descending order'
            },
            {
                name: 'Division Code (Ascending)',
                value: 'divisionCode',
                description: 'Sort by Division Code in ascending order'
            },
            {
                name: 'Division Code (Descending)',
                value: '-divisionCode',
                description: 'Sort by Division Code in descending order'
            },
            {
                name: 'Drink End (Ascending)',
                value: 'drinkEnd',
                description: 'Sort by Drink End in ascending order'
            },
            {
                name: 'Drink End (Descending)',
                value: '-drinkEnd',
                description: 'Sort by Drink End in descending order'
            },
            {
                name: 'Drink Start (Ascending)',
                value: 'drinkStart',
                description: 'Sort by Drink Start in ascending order'
            },
            {
                name: 'Drink Start (Descending)',
                value: '-drinkStart',
                description: 'Sort by Drink Start in descending order'
            },
            {
                name: 'Drs Container Type (Ascending)',
                value: 'drsContainerType',
                description: 'Sort by Drs Container Type in ascending order'
            },
            {
                name: 'Drs Container Type (Descending)',
                value: '-drsContainerType',
                description: 'Sort by Drs Container Type in descending order'
            },
            {
                name: 'Drs Container Units (Ascending)',
                value: 'drsContainerUnits',
                description: 'Sort by Drs Container Units in ascending order'
            },
            {
                name: 'Drs Container Units (Descending)',
                value: '-drsContainerUnits',
                description: 'Sort by Drs Container Units in descending order'
            },
            {
                name: 'Drs Deposit Code (Ascending)',
                value: 'drsDepositCode',
                description: 'Sort by Drs Deposit Code in ascending order'
            },
            {
                name: 'Drs Deposit Code (Descending)',
                value: '-drsDepositCode',
                description: 'Sort by Drs Deposit Code in descending order'
            },
            {
                name: 'Drs Multi Pack Barcode (Ascending)',
                value: 'drsMultiPackBarcode',
                description: 'Sort by Drs Multi Pack Barcode in ascending order'
            },
            {
                name: 'Drs Multi Pack Barcode (Descending)',
                value: '-drsMultiPackBarcode',
                description: 'Sort by Drs Multi Pack Barcode in descending order'
            },
            {
                name: 'Drs Own Produced (Ascending)',
                value: 'drsOwnProduced',
                description: 'Sort by Drs Own Produced in ascending order'
            },
            {
                name: 'Drs Own Produced (Descending)',
                value: '-drsOwnProduced',
                description: 'Sort by Drs Own Produced in descending order'
            },
            {
                name: 'Drs Replacement Product (Ascending)',
                value: 'drsReplacementProduct',
                description: 'Sort by Drs Replacement Product in ascending order'
            },
            {
                name: 'Drs Replacement Product (Descending)',
                value: '-drsReplacementProduct',
                description: 'Sort by Drs Replacement Product in descending order'
            },
            {
                name: 'Duty Code (Ascending)',
                value: 'dutyCode',
                description: 'Sort by Duty Code in ascending order'
            },
            {
                name: 'Duty Code (Descending)',
                value: '-dutyCode',
                description: 'Sort by Duty Code in descending order'
            },
            {
                name: 'Each Weight (Ascending)',
                value: 'eachWeight',
                description: 'Sort by Each Weight in ascending order'
            },
            {
                name: 'Each Weight (Descending)',
                value: '-eachWeight',
                description: 'Sort by Each Weight in descending order'
            },
            {
                name: 'Ean Code (Ascending)',
                value: 'eanCode',
                description: 'Sort by Ean Code in ascending order'
            },
            {
                name: 'Ean Code (Descending)',
                value: '-eanCode',
                description: 'Sort by Ean Code in descending order'
            },
            {
                name: 'Ean Indicator (Ascending)',
                value: 'eanIndicator',
                description: 'Sort by Ean Indicator in ascending order'
            },
            {
                name: 'Ean Indicator (Descending)',
                value: '-eanIndicator',
                description: 'Sort by Ean Indicator in descending order'
            },
            {
                name: 'Ean Last Update (Ascending)',
                value: 'eanLastUpdate',
                description: 'Sort by Ean Last Update in ascending order'
            },
            {
                name: 'Ean Last Update (Descending)',
                value: '-eanLastUpdate',
                description: 'Sort by Ean Last Update in descending order'
            },
            {
                name: 'Edge Of Shelf Description (Ascending)',
                value: 'edgeOfShelfDescription',
                description: 'Sort by Edge Of Shelf Description in ascending order'
            },
            {
                name: 'Edge Of Shelf Description (Descending)',
                value: '-edgeOfShelfDescription',
                description: 'Sort by Edge Of Shelf Description in descending order'
            },
            {
                name: 'EDLP (Ascending)',
                value: 'EDLP',
                description: 'Sort by EDLP in ascending order'
            },
            {
                name: 'EDLP (Descending)',
                value: '-EDLP',
                description: 'Sort by EDLP in descending order'
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
                name: 'End Plof (Ascending)',
                value: 'endPlof',
                description: 'Sort by End Plof in ascending order'
            },
            {
                name: 'End Plof (Descending)',
                value: '-endPlof',
                description: 'Sort by End Plof in descending order'
            },
            {
                name: 'Equivalent Cases (Ascending)',
                value: 'equivalentCases',
                description: 'Sort by Equivalent Cases in ascending order'
            },
            {
                name: 'Equivalent Cases (Descending)',
                value: '-equivalentCases',
                description: 'Sort by Equivalent Cases in descending order'
            },
            {
                name: 'Expense Code (Ascending)',
                value: 'expenseCode',
                description: 'Sort by Expense Code in ascending order'
            },
            {
                name: 'Expense Code (Descending)',
                value: '-expenseCode',
                description: 'Sort by Expense Code in descending order'
            },
            {
                name: 'Export Type (Ascending)',
                value: 'exportType',
                description: 'Sort by Export Type in ascending order'
            },
            {
                name: 'Export Type (Descending)',
                value: '-exportType',
                description: 'Sort by Export Type in descending order'
            },
            {
                name: 'Extended Credit Group (Ascending)',
                value: 'extendedCreditGroup',
                description: 'Sort by Extended Credit Group in ascending order'
            },
            {
                name: 'Extended Credit Group (Descending)',
                value: '-extendedCreditGroup',
                description: 'Sort by Extended Credit Group in descending order'
            },
            {
                name: 'External Delivery Service (Ascending)',
                value: 'externalDeliveryService',
                description: 'Sort by External Delivery Service in ascending order'
            },
            {
                name: 'External Delivery Service (Descending)',
                value: '-externalDeliveryService',
                description: 'Sort by External Delivery Service in descending order'
            },
            {
                name: 'Financial Indicator (Ascending)',
                value: 'financialIndicator',
                description: 'Sort by Financial Indicator in ascending order'
            },
            {
                name: 'Financial Indicator (Descending)',
                value: '-financialIndicator',
                description: 'Sort by Financial Indicator in descending order'
            },
            {
                name: 'Flash Main Product Code (Ascending)',
                value: 'flashMainProductCode',
                description: 'Sort by Flash Main Product Code in ascending order'
            },
            {
                name: 'Flash Main Product Code (Descending)',
                value: '-flashMainProductCode',
                description: 'Sort by Flash Main Product Code in descending order'
            },
            {
                name: 'Flash Pack Indicator (Ascending)',
                value: 'flashPackIndicator',
                description: 'Sort by Flash Pack Indicator in ascending order'
            },
            {
                name: 'Flash Pack Indicator (Descending)',
                value: '-flashPackIndicator',
                description: 'Sort by Flash Pack Indicator in descending order'
            },
            {
                name: 'Generic Product Code (Ascending)',
                value: 'genericProductCode',
                description: 'Sort by Generic Product Code in ascending order'
            },
            {
                name: 'Generic Product Code (Descending)',
                value: '-genericProductCode',
                description: 'Sort by Generic Product Code in descending order'
            },
            {
                name: 'Generic Type (Ascending)',
                value: 'genericType',
                description: 'Sort by Generic Type in ascending order'
            },
            {
                name: 'Generic Type (Descending)',
                value: '-genericType',
                description: 'Sort by Generic Type in descending order'
            },
            {
                name: 'Grn Priced (Ascending)',
                value: 'grnPriced',
                description: 'Sort by Grn Priced in ascending order'
            },
            {
                name: 'Grn Priced (Descending)',
                value: '-grnPriced',
                description: 'Sort by Grn Priced in descending order'
            },
            {
                name: 'Gross Cost (Ascending)',
                value: 'grossCost',
                description: 'Sort by Gross Cost in ascending order'
            },
            {
                name: 'Gross Cost (Descending)',
                value: '-grossCost',
                description: 'Sort by Gross Cost in descending order'
            },
            {
                name: 'Group Parent Code (Ascending)',
                value: 'groupParentCode',
                description: 'Sort by Group Parent Code in ascending order'
            },
            {
                name: 'Group Parent Code (Descending)',
                value: '-groupParentCode',
                description: 'Sort by Group Parent Code in descending order'
            },
            {
                name: 'Group Sequence (Ascending)',
                value: 'groupSequence',
                description: 'Sort by Group Sequence in ascending order'
            },
            {
                name: 'Group Sequence (Descending)',
                value: '-groupSequence',
                description: 'Sort by Group Sequence in descending order'
            },
            {
                name: 'GS1Unit Of Measure (Ascending)',
                value: 'GS1UnitOfMeasure',
                description: 'Sort by GS1Unit Of Measure in ascending order'
            },
            {
                name: 'GS1Unit Of Measure (Descending)',
                value: '-GS1UnitOfMeasure',
                description: 'Sort by GS1Unit Of Measure in descending order'
            },
            {
                name: 'GTIN (Ascending)',
                value: 'GTIN',
                description: 'Sort by GTIN in ascending order'
            },
            {
                name: 'GTIN (Descending)',
                value: '-GTIN',
                description: 'Sort by GTIN in descending order'
            },
            {
                name: 'Handling Type (Ascending)',
                value: 'handlingType',
                description: 'Sort by Handling Type in ascending order'
            },
            {
                name: 'Handling Type (Descending)',
                value: '-handlingType',
                description: 'Sort by Handling Type in descending order'
            },
            {
                name: 'High Strength Beer Duty (Ascending)',
                value: 'highStrengthBeerDuty',
                description: 'Sort by High Strength Beer Duty in ascending order'
            },
            {
                name: 'High Strength Beer Duty (Descending)',
                value: '-highStrengthBeerDuty',
                description: 'Sort by High Strength Beer Duty in descending order'
            },
            {
                name: 'Home Produced (Ascending)',
                value: 'homeProduced',
                description: 'Sort by Home Produced in ascending order'
            },
            {
                name: 'Home Produced (Descending)',
                value: '-homeProduced',
                description: 'Sort by Home Produced in descending order'
            },
            {
                name: 'Ibap Group (Ascending)',
                value: 'ibapGroup',
                description: 'Sort by Ibap Group in ascending order'
            },
            {
                name: 'Ibap Group (Descending)',
                value: '-ibapGroup',
                description: 'Sort by Ibap Group in descending order'
            },
            {
                name: 'Image File Reference (Ascending)',
                value: 'imageFileReference',
                description: 'Sort by Image File Reference in ascending order'
            },
            {
                name: 'Image File Reference (Descending)',
                value: '-imageFileReference',
                description: 'Sort by Image File Reference in descending order'
            },
            {
                name: 'Imb Code (Ascending)',
                value: 'imbCode',
                description: 'Sort by Imb Code in ascending order'
            },
            {
                name: 'Imb Code (Descending)',
                value: '-imbCode',
                description: 'Sort by Imb Code in descending order'
            },
            {
                name: 'Ingredient Indicator (Ascending)',
                value: 'ingredientIndicator',
                description: 'Sort by Ingredient Indicator in ascending order'
            },
            {
                name: 'Ingredient Indicator (Descending)',
                value: '-ingredientIndicator',
                description: 'Sort by Ingredient Indicator in descending order'
            },
            {
                name: 'Ingredients (Ascending)',
                value: 'ingredients',
                description: 'Sort by Ingredients in ascending order'
            },
            {
                name: 'Ingredients (Descending)',
                value: '-ingredients',
                description: 'Sort by Ingredients in descending order'
            },
            {
                name: 'Invoice Cost (Ascending)',
                value: 'InvoiceCost',
                description: 'Sort by Invoice Cost in ascending order'
            },
            {
                name: 'Invoice Cost (Descending)',
                value: '-InvoiceCost',
                description: 'Sort by Invoice Cost in descending order'
            },
            {
                name: 'KVI (Ascending)',
                value: 'KVI',
                description: 'Sort by KVI in ascending order'
            },
            {
                name: 'KVI (Descending)',
                value: '-KVI',
                description: 'Sort by KVI in descending order'
            },
            {
                name: 'Label Type (Ascending)',
                value: 'labelType',
                description: 'Sort by Label Type in ascending order'
            },
            {
                name: 'Label Type (Descending)',
                value: '-labelType',
                description: 'Sort by Label Type in descending order'
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
                name: 'Layer (Ascending)',
                value: 'layer',
                description: 'Sort by Layer in ascending order'
            },
            {
                name: 'Layer (Descending)',
                value: '-layer',
                description: 'Sort by Layer in descending order'
            },
            {
                name: 'Levy Code (Ascending)',
                value: 'levyCode',
                description: 'Sort by Levy Code in ascending order'
            },
            {
                name: 'Levy Code (Descending)',
                value: '-levyCode',
                description: 'Sort by Levy Code in descending order'
            },
            {
                name: 'Linked Silver Code (Ascending)',
                value: 'linkedSilverCode',
                description: 'Sort by Linked Silver Code in ascending order'
            },
            {
                name: 'Linked Silver Code (Descending)',
                value: '-linkedSilverCode',
                description: 'Sort by Linked Silver Code in descending order'
            },
            {
                name: 'Litres (Ascending)',
                value: 'litres',
                description: 'Sort by Litres in ascending order'
            },
            {
                name: 'Litres (Descending)',
                value: '-litres',
                description: 'Sort by Litres in descending order'
            },
            {
                name: 'Litres Of Pure Alcohol (Ascending)',
                value: 'litresOfPureAlcohol',
                description: 'Sort by Litres Of Pure Alcohol in ascending order'
            },
            {
                name: 'Litres Of Pure Alcohol (Descending)',
                value: '-litresOfPureAlcohol',
                description: 'Sort by Litres Of Pure Alcohol in descending order'
            },
            {
                name: 'Location (Ascending)',
                value: 'location',
                description: 'Sort by Location in ascending order'
            },
            {
                name: 'Location (Descending)',
                value: '-location',
                description: 'Sort by Location in descending order'
            },
            {
                name: 'Lookup Description (Ascending)',
                value: 'lookupDescription',
                description: 'Sort by Lookup Description in ascending order'
            },
            {
                name: 'Lookup Description (Descending)',
                value: '-lookupDescription',
                description: 'Sort by Lookup Description in descending order'
            },
            {
                name: 'Main Product Code (Ascending)',
                value: 'mainProductCode',
                description: 'Sort by Main Product Code in ascending order'
            },
            {
                name: 'Main Product Code (Descending)',
                value: '-mainProductCode',
                description: 'Sort by Main Product Code in descending order'
            },
            {
                name: 'Manufacture Time (Ascending)',
                value: 'manufactureTime',
                description: 'Sort by Manufacture Time in ascending order'
            },
            {
                name: 'Manufacture Time (Descending)',
                value: '-manufactureTime',
                description: 'Sort by Manufacture Time in descending order'
            },
            {
                name: 'Manufacturer (Ascending)',
                value: 'manufacturer',
                description: 'Sort by Manufacturer in ascending order'
            },
            {
                name: 'Manufacturer (Descending)',
                value: '-manufacturer',
                description: 'Sort by Manufacturer in descending order'
            },
            {
                name: 'Manufacturing Batch Quantity (Ascending)',
                value: 'manufacturingBatchQuantity',
                description: 'Sort by Manufacturing Batch Quantity in ascending order'
            },
            {
                name: 'Manufacturing Batch Quantity (Descending)',
                value: '-manufacturingBatchQuantity',
                description: 'Sort by Manufacturing Batch Quantity in descending order'
            },
            {
                name: 'Manufacturing Type (Ascending)',
                value: 'manufacturingType',
                description: 'Sort by Manufacturing Type in ascending order'
            },
            {
                name: 'Manufacturing Type (Descending)',
                value: '-manufacturingType',
                description: 'Sort by Manufacturing Type in descending order'
            },
            {
                name: 'Max Delivered Life (Ascending)',
                value: 'maxDeliveredLife',
                description: 'Sort by Max Delivered Life in ascending order'
            },
            {
                name: 'Max Delivered Life (Descending)',
                value: '-maxDeliveredLife',
                description: 'Sort by Max Delivered Life in descending order'
            },
            {
                name: 'Maximum Cost (Ascending)',
                value: 'maximumCost',
                description: 'Sort by Maximum Cost in ascending order'
            },
            {
                name: 'Maximum Cost (Descending)',
                value: '-maximumCost',
                description: 'Sort by Maximum Cost in descending order'
            },
            {
                name: 'Maximum Weight Variance (Ascending)',
                value: 'maximumWeightVariance',
                description: 'Sort by Maximum Weight Variance in ascending order'
            },
            {
                name: 'Maximum Weight Variance (Descending)',
                value: '-maximumWeightVariance',
                description: 'Sort by Maximum Weight Variance in descending order'
            },
            {
                name: 'Message Category (Ascending)',
                value: 'messageCategory',
                description: 'Sort by Message Category in ascending order'
            },
            {
                name: 'Message Category (Descending)',
                value: '-messageCategory',
                description: 'Sort by Message Category in descending order'
            },
            {
                name: 'Minimum Base (Ascending)',
                value: 'minimumBase',
                description: 'Sort by Minimum Base in ascending order'
            },
            {
                name: 'Minimum Base (Descending)',
                value: '-minimumBase',
                description: 'Sort by Minimum Base in descending order'
            },
            {
                name: 'Minimum Life (Ascending)',
                value: 'minimumLife',
                description: 'Sort by Minimum Life in ascending order'
            },
            {
                name: 'Minimum Life (Descending)',
                value: '-minimumLife',
                description: 'Sort by Minimum Life in descending order'
            },
            {
                name: 'Minimum Order Quantity (Ascending)',
                value: 'minimumOrderQuantity',
                description: 'Sort by Minimum Order Quantity in ascending order'
            },
            {
                name: 'Minimum Order Quantity (Descending)',
                value: '-minimumOrderQuantity',
                description: 'Sort by Minimum Order Quantity in descending order'
            },
            {
                name: 'Model Stock Sheet (Ascending)',
                value: 'modelStockSheet',
                description: 'Sort by Model Stock Sheet in ascending order'
            },
            {
                name: 'Model Stock Sheet (Descending)',
                value: '-modelStockSheet',
                description: 'Sort by Model Stock Sheet in descending order'
            },
            {
                name: 'Multi Pack Quantity (Ascending)',
                value: 'multiPackQuantity',
                description: 'Sort by Multi Pack Quantity in ascending order'
            },
            {
                name: 'Multi Pack Quantity (Descending)',
                value: '-multiPackQuantity',
                description: 'Sort by Multi Pack Quantity in descending order'
            },
            {
                name: 'National Product Code (Ascending)',
                value: 'nationalProductCode',
                description: 'Sort by National Product Code in ascending order'
            },
            {
                name: 'National Product Code (Descending)',
                value: '-nationalProductCode',
                description: 'Sort by National Product Code in descending order'
            },
            {
                name: 'Nett Cost (Ascending)',
                value: 'nettCost',
                description: 'Sort by Nett Cost in ascending order'
            },
            {
                name: 'Nett Cost (Descending)',
                value: '-nettCost',
                description: 'Sort by Nett Cost in descending order'
            },
            {
                name: 'Nett Mass (Ascending)',
                value: 'nettMass',
                description: 'Sort by Nett Mass in ascending order'
            },
            {
                name: 'Nett Mass (Descending)',
                value: '-nettMass',
                description: 'Sort by Nett Mass in descending order'
            },
            {
                name: 'Nl Code (Ascending)',
                value: 'nlCode',
                description: 'Sort by Nl Code in ascending order'
            },
            {
                name: 'Nl Code (Descending)',
                value: '-nlCode',
                description: 'Sort by Nl Code in descending order'
            },
            {
                name: 'Nl Cost Centre (Ascending)',
                value: 'nlCostCentre',
                description: 'Sort by Nl Cost Centre in ascending order'
            },
            {
                name: 'Nl Cost Centre (Descending)',
                value: '-nlCostCentre',
                description: 'Sort by Nl Cost Centre in descending order'
            },
            {
                name: 'Nominal Weight (Ascending)',
                value: 'nominalWeight',
                description: 'Sort by Nominal Weight in ascending order'
            },
            {
                name: 'Nominal Weight (Descending)',
                value: '-nominalWeight',
                description: 'Sort by Nominal Weight in descending order'
            },
            {
                name: 'One Label (Ascending)',
                value: 'oneLabel',
                description: 'Sort by One Label in ascending order'
            },
            {
                name: 'One Label (Descending)',
                value: '-oneLabel',
                description: 'Sort by One Label in descending order'
            },
            {
                name: 'Online (Ascending)',
                value: 'online',
                description: 'Sort by Online in ascending order'
            },
            {
                name: 'Online (Descending)',
                value: '-online',
                description: 'Sort by Online in descending order'
            },
            {
                name: 'Order Thru (Ascending)',
                value: 'orderThru',
                description: 'Sort by Order Thru in ascending order'
            },
            {
                name: 'Order Thru (Descending)',
                value: '-orderThru',
                description: 'Sort by Order Thru in descending order'
            },
            {
                name: 'Origin (Ascending)',
                value: 'origin',
                description: 'Sort by Origin in ascending order'
            },
            {
                name: 'Origin (Descending)',
                value: '-origin',
                description: 'Sort by Origin in descending order'
            },
            {
                name: 'Otu (Ascending)',
                value: 'otu',
                description: 'Sort by Otu in ascending order'
            },
            {
                name: 'Otu (Descending)',
                value: '-otu',
                description: 'Sort by Otu in descending order'
            },
            {
                name: 'Override Date (Ascending)',
                value: 'overrideDate',
                description: 'Sort by Override Date in ascending order'
            },
            {
                name: 'Override Date (Descending)',
                value: '-overrideDate',
                description: 'Sort by Override Date in descending order'
            },
            {
                name: 'Override Details (Ascending)',
                value: 'overrideDetails',
                description: 'Sort by Override Details in ascending order'
            },
            {
                name: 'Override Details (Descending)',
                value: '-overrideDetails',
                description: 'Sort by Override Details in descending order'
            },
            {
                name: 'Own Brand Indicator (Ascending)',
                value: 'ownBrandIndicator',
                description: 'Sort by Own Brand Indicator in ascending order'
            },
            {
                name: 'Own Brand Indicator (Descending)',
                value: '-ownBrandIndicator',
                description: 'Sort by Own Brand Indicator in descending order'
            },
            {
                name: 'Pack Description (Ascending)',
                value: 'packDescription',
                description: 'Sort by Pack Description in ascending order'
            },
            {
                name: 'Pack Description (Descending)',
                value: '-packDescription',
                description: 'Sort by Pack Description in descending order'
            },
            {
                name: 'Pack Unit (Ascending)',
                value: 'packUnit',
                description: 'Sort by Pack Unit in ascending order'
            },
            {
                name: 'Pack Unit (Descending)',
                value: '-packUnit',
                description: 'Sort by Pack Unit in descending order'
            },
            {
                name: 'Packaging (Ascending)',
                value: 'packaging',
                description: 'Sort by Packaging in ascending order'
            },
            {
                name: 'Packaging (Descending)',
                value: '-packaging',
                description: 'Sort by Packaging in descending order'
            },
            {
                name: 'Packed In House (Ascending)',
                value: 'packedInHouse',
                description: 'Sort by Packed In House in ascending order'
            },
            {
                name: 'Packed In House (Descending)',
                value: '-packedInHouse',
                description: 'Sort by Packed In House in descending order'
            },
            {
                name: 'Pallet (Ascending)',
                value: 'pallet',
                description: 'Sort by Pallet in ascending order'
            },
            {
                name: 'Pallet (Descending)',
                value: '-pallet',
                description: 'Sort by Pallet in descending order'
            },
            {
                name: 'Pallet Percentage (Ascending)',
                value: 'palletPercentage',
                description: 'Sort by Pallet Percentage in ascending order'
            },
            {
                name: 'Pallet Percentage (Descending)',
                value: '-palletPercentage',
                description: 'Sort by Pallet Percentage in descending order'
            },
            {
                name: 'Pcl Prefix (Ascending)',
                value: 'pclPrefix',
                description: 'Sort by Pcl Prefix in ascending order'
            },
            {
                name: 'Pcl Prefix (Descending)',
                value: '-pclPrefix',
                description: 'Sort by Pcl Prefix in descending order'
            },
            {
                name: 'Pcl Suffix (Ascending)',
                value: 'pclSuffix',
                description: 'Sort by Pcl Suffix in ascending order'
            },
            {
                name: 'Pcl Suffix (Descending)',
                value: '-pclSuffix',
                description: 'Sort by Pcl Suffix in descending order'
            },
            {
                name: 'Pi Date (Ascending)',
                value: 'piDate',
                description: 'Sort by Pi Date in ascending order'
            },
            {
                name: 'Pi Date (Descending)',
                value: '-piDate',
                description: 'Sort by Pi Date in descending order'
            },
            {
                name: 'Pi Interval (Ascending)',
                value: 'piInterval',
                description: 'Sort by Pi Interval in ascending order'
            },
            {
                name: 'Pi Interval (Descending)',
                value: '-piInterval',
                description: 'Sort by Pi Interval in descending order'
            },
            {
                name: 'Pick Batch Quantity (Ascending)',
                value: 'pickBatchQuantity',
                description: 'Sort by Pick Batch Quantity in ascending order'
            },
            {
                name: 'Pick Batch Quantity (Descending)',
                value: '-pickBatchQuantity',
                description: 'Sort by Pick Batch Quantity in descending order'
            },
            {
                name: 'Pim P Code (Ascending)',
                value: 'pimPCode',
                description: 'Sort by Pim P Code in ascending order'
            },
            {
                name: 'Pim P Code (Descending)',
                value: '-pimPCode',
                description: 'Sort by Pim P Code in descending order'
            },
            {
                name: 'Pl Cost Centre (Ascending)',
                value: 'plCostCentre',
                description: 'Sort by Pl Cost Centre in ascending order'
            },
            {
                name: 'Pl Cost Centre (Descending)',
                value: '-plCostCentre',
                description: 'Sort by Pl Cost Centre in descending order'
            },
            {
                name: 'Pl Div Code (Ascending)',
                value: 'plDivCode',
                description: 'Sort by Pl Div Code in ascending order'
            },
            {
                name: 'Pl Div Code (Descending)',
                value: '-plDivCode',
                description: 'Sort by Pl Div Code in descending order'
            },
            {
                name: 'Pl Nl Code (Ascending)',
                value: 'plNlCode',
                description: 'Sort by Pl Nl Code in ascending order'
            },
            {
                name: 'Pl Nl Code (Descending)',
                value: '-plNlCode',
                description: 'Sort by Pl Nl Code in descending order'
            },
            {
                name: 'Plof Code (Ascending)',
                value: 'plofCode',
                description: 'Sort by Plof Code in ascending order'
            },
            {
                name: 'Plof Code (Descending)',
                value: '-plofCode',
                description: 'Sort by Plof Code in descending order'
            },
            {
                name: 'Plof Group (Ascending)',
                value: 'plofGroup',
                description: 'Sort by Plof Group in ascending order'
            },
            {
                name: 'Plof Group (Descending)',
                value: '-plofGroup',
                description: 'Sort by Plof Group in descending order'
            },
            {
                name: 'Plof Main (Ascending)',
                value: 'plofMain',
                description: 'Sort by Plof Main in ascending order'
            },
            {
                name: 'Plof Main (Descending)',
                value: '-plofMain',
                description: 'Sort by Plof Main in descending order'
            },
            {
                name: 'PLU Product Group (Ascending)',
                value: 'PLUProductGroup',
                description: 'Sort by PLU Product Group in ascending order'
            },
            {
                name: 'PLU Product Group (Descending)',
                value: '-PLUProductGroup',
                description: 'Sort by PLU Product Group in descending order'
            },
            {
                name: 'Plu Type (Ascending)',
                value: 'pluType',
                description: 'Sort by Plu Type in ascending order'
            },
            {
                name: 'Plu Type (Descending)',
                value: '-pluType',
                description: 'Sort by Plu Type in descending order'
            },
            {
                name: 'PO Batch Quantity (Ascending)',
                value: 'POBatchQuantity',
                description: 'Sort by PO Batch Quantity in ascending order'
            },
            {
                name: 'PO Batch Quantity (Descending)',
                value: '-POBatchQuantity',
                description: 'Sort by PO Batch Quantity in descending order'
            },
            {
                name: 'PO Minimum Quantity (Ascending)',
                value: 'POMinimumQuantity',
                description: 'Sort by PO Minimum Quantity in ascending order'
            },
            {
                name: 'PO Minimum Quantity (Descending)',
                value: '-POMinimumQuantity',
                description: 'Sort by PO Minimum Quantity in descending order'
            },
            {
                name: 'Po Val Code (Ascending)',
                value: 'poValCode',
                description: 'Sort by Po Val Code in ascending order'
            },
            {
                name: 'Po Val Code (Descending)',
                value: '-poValCode',
                description: 'Sort by Po Val Code in descending order'
            },
            {
                name: 'Points Ratio (Ascending)',
                value: 'pointsRatio',
                description: 'Sort by Points Ratio in ascending order'
            },
            {
                name: 'Points Ratio (Descending)',
                value: '-pointsRatio',
                description: 'Sort by Points Ratio in descending order'
            },
            {
                name: 'Portion Weight (Ascending)',
                value: 'portionWeight',
                description: 'Sort by Portion Weight in ascending order'
            },
            {
                name: 'Portion Weight (Descending)',
                value: '-portionWeight',
                description: 'Sort by Portion Weight in descending order'
            },
            {
                name: 'Portions Per Case (Ascending)',
                value: 'portionsPerCase',
                description: 'Sort by Portions Per Case in ascending order'
            },
            {
                name: 'Portions Per Case (Descending)',
                value: '-portionsPerCase',
                description: 'Sort by Portions Per Case in descending order'
            },
            {
                name: 'Pre Order (Ascending)',
                value: 'preOrder',
                description: 'Sort by Pre Order in ascending order'
            },
            {
                name: 'Pre Order (Descending)',
                value: '-preOrder',
                description: 'Sort by Pre Order in descending order'
            },
            {
                name: 'Preferred Multiplier (Ascending)',
                value: 'preferredMultiplier',
                description: 'Sort by Preferred Multiplier in ascending order'
            },
            {
                name: 'Preferred Multiplier (Descending)',
                value: '-preferredMultiplier',
                description: 'Sort by Preferred Multiplier in descending order'
            },
            {
                name: 'Preferred Product (Ascending)',
                value: 'preferredProduct',
                description: 'Sort by Preferred Product in ascending order'
            },
            {
                name: 'Preferred Product (Descending)',
                value: '-preferredProduct',
                description: 'Sort by Preferred Product in descending order'
            },
            {
                name: 'Preferred Sequence (Ascending)',
                value: 'preferredSequence',
                description: 'Sort by Preferred Sequence in ascending order'
            },
            {
                name: 'Preferred Sequence (Descending)',
                value: '-preferredSequence',
                description: 'Sort by Preferred Sequence in descending order'
            },
            {
                name: 'Preparation (Ascending)',
                value: 'preparation',
                description: 'Sort by Preparation in ascending order'
            },
            {
                name: 'Preparation (Descending)',
                value: '-preparation',
                description: 'Sort by Preparation in descending order'
            },
            {
                name: 'Prh Code (Ascending)',
                value: 'prhCode',
                description: 'Sort by Prh Code in ascending order'
            },
            {
                name: 'Prh Code (Descending)',
                value: '-prhCode',
                description: 'Sort by Prh Code in descending order'
            },
            {
                name: 'Prh1Code (Ascending)',
                value: 'prh1Code',
                description: 'Sort by Prh1Code in ascending order'
            },
            {
                name: 'Prh1Code (Descending)',
                value: '-prh1Code',
                description: 'Sort by Prh1Code in descending order'
            },
            {
                name: 'Prh4Code (Ascending)',
                value: 'prh4Code',
                description: 'Sort by Prh4Code in ascending order'
            },
            {
                name: 'Prh4Code (Descending)',
                value: '-prh4Code',
                description: 'Sort by Prh4Code in descending order'
            },
            {
                name: 'Price Group (Ascending)',
                value: 'priceGroup',
                description: 'Sort by Price Group in ascending order'
            },
            {
                name: 'Price Group (Descending)',
                value: '-priceGroup',
                description: 'Sort by Price Group in descending order'
            },
            {
                name: 'Product Code (Ascending)',
                value: 'productCode',
                description: 'Sort by Product Code in ascending order'
            },
            {
                name: 'Product Code (Descending)',
                value: '-productCode',
                description: 'Sort by Product Code in descending order'
            },
            {
                name: 'Product Group (Ascending)',
                value: 'productGroup',
                description: 'Sort by Product Group in ascending order'
            },
            {
                name: 'Product Group (Descending)',
                value: '-productGroup',
                description: 'Sort by Product Group in descending order'
            },
            {
                name: 'Product Status (Ascending)',
                value: 'productStatus',
                description: 'Sort by Product Status in ascending order'
            },
            {
                name: 'Product Status (Descending)',
                value: '-productStatus',
                description: 'Sort by Product Status in descending order'
            },
            {
                name: 'Purchase In House (Ascending)',
                value: 'purchaseInHouse',
                description: 'Sort by Purchase In House in ascending order'
            },
            {
                name: 'Purchase In House (Descending)',
                value: '-purchaseInHouse',
                description: 'Sort by Purchase In House in descending order'
            },
            {
                name: 'Purchase Pack Type (Ascending)',
                value: 'purchasePackType',
                description: 'Sort by Purchase Pack Type in ascending order'
            },
            {
                name: 'Purchase Pack Type (Descending)',
                value: '-purchasePackType',
                description: 'Sort by Purchase Pack Type in descending order'
            },
            {
                name: 'Ranking (Ascending)',
                value: 'ranking',
                description: 'Sort by Ranking in ascending order'
            },
            {
                name: 'Ranking (Descending)',
                value: '-ranking',
                description: 'Sort by Ranking in descending order'
            },
            {
                name: 'Ration (Ascending)',
                value: 'ration',
                description: 'Sort by Ration in ascending order'
            },
            {
                name: 'Ration (Descending)',
                value: '-ration',
                description: 'Sort by Ration in descending order'
            },
            {
                name: 'Rearing (Ascending)',
                value: 'rearing',
                description: 'Sort by Rearing in ascending order'
            },
            {
                name: 'Rearing (Descending)',
                value: '-rearing',
                description: 'Sort by Rearing in descending order'
            },
            {
                name: 'Reason (Ascending)',
                value: 'reason',
                description: 'Sort by Reason in ascending order'
            },
            {
                name: 'Reason (Descending)',
                value: '-reason',
                description: 'Sort by Reason in descending order'
            },
            {
                name: 'Reasonable Order Quantity (Ascending)',
                value: 'reasonableOrderQuantity',
                description: 'Sort by Reasonable Order Quantity in ascending order'
            },
            {
                name: 'Reasonable Order Quantity (Descending)',
                value: '-reasonableOrderQuantity',
                description: 'Sort by Reasonable Order Quantity in descending order'
            },
            {
                name: 'Rebate Range (Ascending)',
                value: 'rebateRange',
                description: 'Sort by Rebate Range in ascending order'
            },
            {
                name: 'Rebate Range (Descending)',
                value: '-rebateRange',
                description: 'Sort by Rebate Range in descending order'
            },
            {
                name: 'Rebateable (Ascending)',
                value: 'rebateable',
                description: 'Sort by Rebateable in ascending order'
            },
            {
                name: 'Rebateable (Descending)',
                value: '-rebateable',
                description: 'Sort by Rebateable in descending order'
            },
            {
                name: 'Recommended RRP (Ascending)',
                value: 'recommendedRRP',
                description: 'Sort by Recommended RRP in ascending order'
            },
            {
                name: 'Recommended RRP (Descending)',
                value: '-recommendedRRP',
                description: 'Sort by Recommended RRP in descending order'
            },
            {
                name: 'Recommended Sell (Ascending)',
                value: 'recommendedSell',
                description: 'Sort by Recommended Sell in ascending order'
            },
            {
                name: 'Recommended Sell (Descending)',
                value: '-recommendedSell',
                description: 'Sort by Recommended Sell in descending order'
            },
            {
                name: 'Replaces Product Code (Ascending)',
                value: 'replacesProductCode',
                description: 'Sort by Replaces Product Code in ascending order'
            },
            {
                name: 'Replaces Product Code (Descending)',
                value: '-replacesProductCode',
                description: 'Sort by Replaces Product Code in descending order'
            },
            {
                name: 'Retail Height (Ascending)',
                value: 'retailHeight',
                description: 'Sort by Retail Height in ascending order'
            },
            {
                name: 'Retail Height (Descending)',
                value: '-retailHeight',
                description: 'Sort by Retail Height in descending order'
            },
            {
                name: 'Retail Length (Ascending)',
                value: 'retailLength',
                description: 'Sort by Retail Length in ascending order'
            },
            {
                name: 'Retail Length (Descending)',
                value: '-retailLength',
                description: 'Sort by Retail Length in descending order'
            },
            {
                name: 'Retail Volume (Ascending)',
                value: 'retailVolume',
                description: 'Sort by Retail Volume in ascending order'
            },
            {
                name: 'Retail Volume (Descending)',
                value: '-retailVolume',
                description: 'Sort by Retail Volume in descending order'
            },
            {
                name: 'Retail Width (Ascending)',
                value: 'retailWidth',
                description: 'Sort by Retail Width in ascending order'
            },
            {
                name: 'Retail Width (Descending)',
                value: '-retailWidth',
                description: 'Sort by Retail Width in descending order'
            },
            {
                name: 'Rf Quantity (Ascending)',
                value: 'rfQuantity',
                description: 'Sort by Rf Quantity in ascending order'
            },
            {
                name: 'Rf Quantity (Descending)',
                value: '-rfQuantity',
                description: 'Sort by Rf Quantity in descending order'
            },
            {
                name: 'Root Product Code (Ascending)',
                value: 'rootProductCode',
                description: 'Sort by Root Product Code in ascending order'
            },
            {
                name: 'Root Product Code (Descending)',
                value: '-rootProductCode',
                description: 'Sort by Root Product Code in descending order'
            },
            {
                name: 'Rrp Margin (Ascending)',
                value: 'rrpMargin',
                description: 'Sort by Rrp Margin in ascending order'
            },
            {
                name: 'Rrp Margin (Descending)',
                value: '-rrpMargin',
                description: 'Sort by Rrp Margin in descending order'
            },
            {
                name: 'Rrv Cost Centre (Ascending)',
                value: 'rrvCostCentre',
                description: 'Sort by Rrv Cost Centre in ascending order'
            },
            {
                name: 'Rrv Cost Centre (Descending)',
                value: '-rrvCostCentre',
                description: 'Sort by Rrv Cost Centre in descending order'
            },
            {
                name: 'Rrv Div Code (Ascending)',
                value: 'rrvDivCode',
                description: 'Sort by Rrv Div Code in ascending order'
            },
            {
                name: 'Rrv Div Code (Descending)',
                value: '-rrvDivCode',
                description: 'Sort by Rrv Div Code in descending order'
            },
            {
                name: 'Rrv Nl Code (Ascending)',
                value: 'rrvNlCode',
                description: 'Sort by Rrv Nl Code in ascending order'
            },
            {
                name: 'Rrv Nl Code (Descending)',
                value: '-rrvNlCode',
                description: 'Sort by Rrv Nl Code in descending order'
            },
            {
                name: 'Safety Certificate (Ascending)',
                value: 'safetyCertificate',
                description: 'Sort by Safety Certificate in ascending order'
            },
            {
                name: 'Safety Certificate (Descending)',
                value: '-safetyCertificate',
                description: 'Sort by Safety Certificate in descending order'
            },
            {
                name: 'Sales Item (Ascending)',
                value: 'salesItem',
                description: 'Sort by Sales Item in ascending order'
            },
            {
                name: 'Sales Item (Descending)',
                value: '-salesItem',
                description: 'Sort by Sales Item in descending order'
            },
            {
                name: 'Sales Item Cost Discount (Ascending)',
                value: 'salesItemCostDiscount',
                description: 'Sort by Sales Item Cost Discount in ascending order'
            },
            {
                name: 'Sales Item Cost Discount (Descending)',
                value: '-salesItemCostDiscount',
                description: 'Sort by Sales Item Cost Discount in descending order'
            },
            {
                name: 'Sales Item Sell Discount (Ascending)',
                value: 'salesItemSellDiscount',
                description: 'Sort by Sales Item Sell Discount in ascending order'
            },
            {
                name: 'Sales Item Sell Discount (Descending)',
                value: '-salesItemSellDiscount',
                description: 'Sort by Sales Item Sell Discount in descending order'
            },
            {
                name: 'Seas Type (Ascending)',
                value: 'seasType',
                description: 'Sort by Seas Type in ascending order'
            },
            {
                name: 'Seas Type (Descending)',
                value: '-seasType',
                description: 'Sort by Seas Type in descending order'
            },
            {
                name: 'Season End (Ascending)',
                value: 'seasonEnd',
                description: 'Sort by Season End in ascending order'
            },
            {
                name: 'Season End (Descending)',
                value: '-seasonEnd',
                description: 'Sort by Season End in descending order'
            },
            {
                name: 'Season Start (Ascending)',
                value: 'seasonStart',
                description: 'Sort by Season Start in ascending order'
            },
            {
                name: 'Season Start (Descending)',
                value: '-seasonStart',
                description: 'Sort by Season Start in descending order'
            },
            {
                name: 'Seasonal Item (Ascending)',
                value: 'seasonalItem',
                description: 'Sort by Seasonal Item in ascending order'
            },
            {
                name: 'Seasonal Item (Descending)',
                value: '-seasonalItem',
                description: 'Sort by Seasonal Item in descending order'
            },
            {
                name: 'Security Item (Ascending)',
                value: 'securityItem',
                description: 'Sort by Security Item in ascending order'
            },
            {
                name: 'Security Item (Descending)',
                value: '-securityItem',
                description: 'Sort by Security Item in descending order'
            },
            {
                name: 'Sell As (Ascending)',
                value: 'sellAs',
                description: 'Sort by Sell As in ascending order'
            },
            {
                name: 'Sell As (Descending)',
                value: '-sellAs',
                description: 'Sort by Sell As in descending order'
            },
            {
                name: 'Sell Margin (Ascending)',
                value: 'sellMargin',
                description: 'Sort by Sell Margin in ascending order'
            },
            {
                name: 'Sell Margin (Descending)',
                value: '-sellMargin',
                description: 'Sort by Sell Margin in descending order'
            },
            {
                name: 'Separate Order Indicator (Ascending)',
                value: 'separateOrderIndicator',
                description: 'Sort by Separate Order Indicator in ascending order'
            },
            {
                name: 'Separate Order Indicator (Descending)',
                value: '-separateOrderIndicator',
                description: 'Sort by Separate Order Indicator in descending order'
            },
            {
                name: 'Shelf Life Indicator (Ascending)',
                value: 'shelfLifeIndicator',
                description: 'Sort by Shelf Life Indicator in ascending order'
            },
            {
                name: 'Shelf Life Indicator (Descending)',
                value: '-shelfLifeIndicator',
                description: 'Sort by Shelf Life Indicator in descending order'
            },
            {
                name: 'Shelf Linear Meterage (Ascending)',
                value: 'shelfLinearMeterage',
                description: 'Sort by Shelf Linear Meterage in ascending order'
            },
            {
                name: 'Shelf Linear Meterage (Descending)',
                value: '-shelfLinearMeterage',
                description: 'Sort by Shelf Linear Meterage in descending order'
            },
            {
                name: 'Short Description (Ascending)',
                value: 'shortDescription',
                description: 'Sort by Short Description in ascending order'
            },
            {
                name: 'Short Description (Descending)',
                value: '-shortDescription',
                description: 'Sort by Short Description in descending order'
            },
            {
                name: 'Slaughter (Ascending)',
                value: 'slaughter',
                description: 'Sort by Slaughter in ascending order'
            },
            {
                name: 'Slaughter (Descending)',
                value: '-slaughter',
                description: 'Sort by Slaughter in descending order'
            },
            {
                name: 'Sm Cost Centre (Ascending)',
                value: 'smCostCentre',
                description: 'Sort by Sm Cost Centre in ascending order'
            },
            {
                name: 'Sm Cost Centre (Descending)',
                value: '-smCostCentre',
                description: 'Sort by Sm Cost Centre in descending order'
            },
            {
                name: 'Sm Div Code (Ascending)',
                value: 'smDivCode',
                description: 'Sort by Sm Div Code in ascending order'
            },
            {
                name: 'Sm Div Code (Descending)',
                value: '-smDivCode',
                description: 'Sort by Sm Div Code in descending order'
            },
            {
                name: 'Sm Nl Code (Ascending)',
                value: 'smNlCode',
                description: 'Sort by Sm Nl Code in ascending order'
            },
            {
                name: 'Sm Nl Code (Descending)',
                value: '-smNlCode',
                description: 'Sort by Sm Nl Code in descending order'
            },
            {
                name: 'Split Indicator (Ascending)',
                value: 'splitIndicator',
                description: 'Sort by Split Indicator in ascending order'
            },
            {
                name: 'Split Indicator (Descending)',
                value: '-splitIndicator',
                description: 'Sort by Split Indicator in descending order'
            },
            {
                name: 'Split Premium (Ascending)',
                value: 'splitPremium',
                description: 'Sort by Split Premium in ascending order'
            },
            {
                name: 'Split Premium (Descending)',
                value: '-splitPremium',
                description: 'Sort by Split Premium in descending order'
            },
            {
                name: 'Stack Height (Ascending)',
                value: 'stackHeight',
                description: 'Sort by Stack Height in ascending order'
            },
            {
                name: 'Stack Height (Descending)',
                value: '-stackHeight',
                description: 'Sort by Stack Height in descending order'
            },
            {
                name: 'Standard Container (Ascending)',
                value: 'standardContainer',
                description: 'Sort by Standard Container in ascending order'
            },
            {
                name: 'Standard Container (Descending)',
                value: '-standardContainer',
                description: 'Sort by Standard Container in descending order'
            },
            {
                name: 'Standard Count (Ascending)',
                value: 'standardCount',
                description: 'Sort by Standard Count in ascending order'
            },
            {
                name: 'Standard Count (Descending)',
                value: '-standardCount',
                description: 'Sort by Standard Count in descending order'
            },
            {
                name: 'Standard Unit Weight (Ascending)',
                value: 'standardUnitWeight',
                description: 'Sort by Standard Unit Weight in ascending order'
            },
            {
                name: 'Standard Unit Weight (Descending)',
                value: '-standardUnitWeight',
                description: 'Sort by Standard Unit Weight in descending order'
            },
            {
                name: 'Standard Weight (Ascending)',
                value: 'standardWeight',
                description: 'Sort by Standard Weight in ascending order'
            },
            {
                name: 'Standard Weight (Descending)',
                value: '-standardWeight',
                description: 'Sort by Standard Weight in descending order'
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
                name: 'Start Plof (Ascending)',
                value: 'startPlof',
                description: 'Sort by Start Plof in ascending order'
            },
            {
                name: 'Start Plof (Descending)',
                value: '-startPlof',
                description: 'Sort by Start Plof in descending order'
            },
            {
                name: 'Stock Product (Ascending)',
                value: 'stockProduct',
                description: 'Sort by Stock Product in ascending order'
            },
            {
                name: 'Stock Product (Descending)',
                value: '-stockProduct',
                description: 'Sort by Stock Product in descending order'
            },
            {
                name: 'Stock Type (Ascending)',
                value: 'stockType',
                description: 'Sort by Stock Type in ascending order'
            },
            {
                name: 'Stock Type (Descending)',
                value: '-stockType',
                description: 'Sort by Stock Type in descending order'
            },
            {
                name: 'Stock Update (Ascending)',
                value: 'stockUpdate',
                description: 'Sort by Stock Update in ascending order'
            },
            {
                name: 'Stock Update (Descending)',
                value: '-stockUpdate',
                description: 'Sort by Stock Update in descending order'
            },
            {
                name: 'Stock Variance Percentage (Ascending)',
                value: 'stockVariancePercentage',
                description: 'Sort by Stock Variance Percentage in ascending order'
            },
            {
                name: 'Stock Variance Percentage (Descending)',
                value: '-stockVariancePercentage',
                description: 'Sort by Stock Variance Percentage in descending order'
            },
            {
                name: 'Stocked (Ascending)',
                value: 'stocked',
                description: 'Sort by Stocked in ascending order'
            },
            {
                name: 'Stocked (Descending)',
                value: '-stocked',
                description: 'Sort by Stocked in descending order'
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
                name: 'Substitute Chain (Ascending)',
                value: 'substituteChain',
                description: 'Sort by Substitute Chain in ascending order'
            },
            {
                name: 'Substitute Chain (Descending)',
                value: '-substituteChain',
                description: 'Sort by Substitute Chain in descending order'
            },
            {
                name: 'Substitute Code (Ascending)',
                value: 'substituteCode',
                description: 'Sort by Substitute Code in ascending order'
            },
            {
                name: 'Substitute Code (Descending)',
                value: '-substituteCode',
                description: 'Sort by Substitute Code in descending order'
            },
            {
                name: 'Substitute Indicator (Ascending)',
                value: 'substituteIndicator',
                description: 'Sort by Substitute Indicator in ascending order'
            },
            {
                name: 'Substitute Indicator (Descending)',
                value: '-substituteIndicator',
                description: 'Sort by Substitute Indicator in descending order'
            },
            {
                name: 'Supplementary Unit (Ascending)',
                value: 'supplementaryUnit',
                description: 'Sort by Supplementary Unit in ascending order'
            },
            {
                name: 'Supplementary Unit (Descending)',
                value: '-supplementaryUnit',
                description: 'Sort by Supplementary Unit in descending order'
            },
            {
                name: 'Supplier Code (Ascending)',
                value: 'supplierCode',
                description: 'Sort by Supplier Code in ascending order'
            },
            {
                name: 'Supplier Code (Descending)',
                value: '-supplierCode',
                description: 'Sort by Supplier Code in descending order'
            },
            {
                name: 'Supplier Not Available (Ascending)',
                value: 'supplierNotAvailable',
                description: 'Sort by Supplier Not Available in ascending order'
            },
            {
                name: 'Supplier Not Available (Descending)',
                value: '-supplierNotAvailable',
                description: 'Sort by Supplier Not Available in descending order'
            },
            {
                name: 'Supplier Product Code (Ascending)',
                value: 'supplierProductCode',
                description: 'Sort by Supplier Product Code in ascending order'
            },
            {
                name: 'Supplier Product Code (Descending)',
                value: '-supplierProductCode',
                description: 'Sort by Supplier Product Code in descending order'
            },
            {
                name: 'Supplier Sequence (Ascending)',
                value: 'supplierSequence',
                description: 'Sort by Supplier Sequence in ascending order'
            },
            {
                name: 'Supplier Sequence (Descending)',
                value: '-supplierSequence',
                description: 'Sort by Supplier Sequence in descending order'
            },
            {
                name: 'Surcharge Indicator (Ascending)',
                value: 'surchargeIndicator',
                description: 'Sort by Surcharge Indicator in ascending order'
            },
            {
                name: 'Surcharge Indicator (Descending)',
                value: '-surchargeIndicator',
                description: 'Sort by Surcharge Indicator in descending order'
            },
            {
                name: 'Surcharge Split (Ascending)',
                value: 'surchargeSplit',
                description: 'Sort by Surcharge Split in ascending order'
            },
            {
                name: 'Surcharge Split (Descending)',
                value: '-surchargeSplit',
                description: 'Sort by Surcharge Split in descending order'
            },
            {
                name: 'Surcharge Unit (Ascending)',
                value: 'surchargeUnit',
                description: 'Sort by Surcharge Unit in ascending order'
            },
            {
                name: 'Surcharge Unit (Descending)',
                value: '-surchargeUnit',
                description: 'Sort by Surcharge Unit in descending order'
            },
            {
                name: 'Sv Cost Centre (Ascending)',
                value: 'svCostCentre',
                description: 'Sort by Sv Cost Centre in ascending order'
            },
            {
                name: 'Sv Cost Centre (Descending)',
                value: '-svCostCentre',
                description: 'Sort by Sv Cost Centre in descending order'
            },
            {
                name: 'Sv Div Code (Ascending)',
                value: 'svDivCode',
                description: 'Sort by Sv Div Code in ascending order'
            },
            {
                name: 'Sv Div Code (Descending)',
                value: '-svDivCode',
                description: 'Sort by Sv Div Code in descending order'
            },
            {
                name: 'Sv Nl Code (Ascending)',
                value: 'svNlCode',
                description: 'Sort by Sv Nl Code in ascending order'
            },
            {
                name: 'Sv Nl Code (Descending)',
                value: '-svNlCode',
                description: 'Sort by Sv Nl Code in descending order'
            },
            {
                name: 'Target Margin RRP Indicator (Ascending)',
                value: 'targetMarginRRPIndicator',
                description: 'Sort by Target Margin RRP Indicator in ascending order'
            },
            {
                name: 'Target Margin RRP Indicator (Descending)',
                value: '-targetMarginRRPIndicator',
                description: 'Sort by Target Margin RRP Indicator in descending order'
            },
            {
                name: 'Target Margin Sell Indicator (Ascending)',
                value: 'targetMarginSellIndicator',
                description: 'Sort by Target Margin Sell Indicator in ascending order'
            },
            {
                name: 'Target Margin Sell Indicator (Descending)',
                value: '-targetMarginSellIndicator',
                description: 'Sort by Target Margin Sell Indicator in descending order'
            },
            {
                name: 'Tariff (Ascending)',
                value: 'tariff',
                description: 'Sort by Tariff in ascending order'
            },
            {
                name: 'Tariff (Descending)',
                value: '-tariff',
                description: 'Sort by Tariff in descending order'
            },
            {
                name: 'Tariff Recipe Indicator (Ascending)',
                value: 'tariffRecipeIndicator',
                description: 'Sort by Tariff Recipe Indicator in ascending order'
            },
            {
                name: 'Tariff Recipe Indicator (Descending)',
                value: '-tariffRecipeIndicator',
                description: 'Sort by Tariff Recipe Indicator in descending order'
            },
            {
                name: 'Text1 (Ascending)',
                value: 'text1',
                description: 'Sort by Text1 in ascending order'
            },
            {
                name: 'Text1 (Descending)',
                value: '-text1',
                description: 'Sort by Text1 in descending order'
            },
            {
                name: 'Text2 (Ascending)',
                value: 'text2',
                description: 'Sort by Text2 in ascending order'
            },
            {
                name: 'Text2 (Descending)',
                value: '-text2',
                description: 'Sort by Text2 in descending order'
            },
            {
                name: 'Text3 (Ascending)',
                value: 'text3',
                description: 'Sort by Text3 in ascending order'
            },
            {
                name: 'Text3 (Descending)',
                value: '-text3',
                description: 'Sort by Text3 in descending order'
            },
            {
                name: 'Tobacco Product ID (Ascending)',
                value: 'tobaccoProductID',
                description: 'Sort by Tobacco Product ID in ascending order'
            },
            {
                name: 'Tobacco Product ID (Descending)',
                value: '-tobaccoProductID',
                description: 'Sort by Tobacco Product ID in descending order'
            },
            {
                name: 'Tobacco Weight Per Case (Ascending)',
                value: 'tobaccoWeightPerCase',
                description: 'Sort by Tobacco Weight Per Case in ascending order'
            },
            {
                name: 'Tobacco Weight Per Case (Descending)',
                value: '-tobaccoWeightPerCase',
                description: 'Sort by Tobacco Weight Per Case in descending order'
            },
            {
                name: 'Track And Trace (Ascending)',
                value: 'trackAndTrace',
                description: 'Sort by Track And Trace in ascending order'
            },
            {
                name: 'Track And Trace (Descending)',
                value: '-trackAndTrace',
                description: 'Sort by Track And Trace in descending order'
            },
            {
                name: 'Tuc (Ascending)',
                value: 'tuc',
                description: 'Sort by Tuc in ascending order'
            },
            {
                name: 'Tuc (Descending)',
                value: '-tuc',
                description: 'Sort by Tuc in descending order'
            },
            {
                name: 'Unit Ratio (Ascending)',
                value: 'unitRatio',
                description: 'Sort by Unit Ratio in ascending order'
            },
            {
                name: 'Unit Ratio (Descending)',
                value: '-unitRatio',
                description: 'Sort by Unit Ratio in descending order'
            },
            {
                name: 'Unit Type (Ascending)',
                value: 'unitType',
                description: 'Sort by Unit Type in ascending order'
            },
            {
                name: 'Unit Type (Descending)',
                value: '-unitType',
                description: 'Sort by Unit Type in descending order'
            },
            {
                name: 'User Category1 (Ascending)',
                value: 'userCategory1',
                description: 'Sort by User Category1 in ascending order'
            },
            {
                name: 'User Category1 (Descending)',
                value: '-userCategory1',
                description: 'Sort by User Category1 in descending order'
            },
            {
                name: 'User Category2 (Ascending)',
                value: 'userCategory2',
                description: 'Sort by User Category2 in ascending order'
            },
            {
                name: 'User Category2 (Descending)',
                value: '-userCategory2',
                description: 'Sort by User Category2 in descending order'
            },
            {
                name: 'User Category3 (Ascending)',
                value: 'userCategory3',
                description: 'Sort by User Category3 in ascending order'
            },
            {
                name: 'User Category3 (Descending)',
                value: '-userCategory3',
                description: 'Sort by User Category3 in descending order'
            },
            {
                name: 'User Category4 (Ascending)',
                value: 'userCategory4',
                description: 'Sort by User Category4 in ascending order'
            },
            {
                name: 'User Category4 (Descending)',
                value: '-userCategory4',
                description: 'Sort by User Category4 in descending order'
            },
            {
                name: 'User Category5 (Ascending)',
                value: 'userCategory5',
                description: 'Sort by User Category5 in ascending order'
            },
            {
                name: 'User Category5 (Descending)',
                value: '-userCategory5',
                description: 'Sort by User Category5 in descending order'
            },
            {
                name: 'Variant Family Code (Ascending)',
                value: 'variantFamilyCode',
                description: 'Sort by Variant Family Code in ascending order'
            },
            {
                name: 'Variant Family Code (Descending)',
                value: '-variantFamilyCode',
                description: 'Sort by Variant Family Code in descending order'
            },
            {
                name: 'Variety (Ascending)',
                value: 'variety',
                description: 'Sort by Variety in ascending order'
            },
            {
                name: 'Variety (Descending)',
                value: '-variety',
                description: 'Sort by Variety in descending order'
            },
            {
                name: 'VAT Code (Ascending)',
                value: 'VATCode',
                description: 'Sort by VAT Code in ascending order'
            },
            {
                name: 'VAT Code (Descending)',
                value: '-VATCode',
                description: 'Sort by VAT Code in descending order'
            },
            {
                name: 'Vb Quantity (Ascending)',
                value: 'vbQuantity',
                description: 'Sort by Vb Quantity in ascending order'
            },
            {
                name: 'Vb Quantity (Descending)',
                value: '-vbQuantity',
                description: 'Sort by Vb Quantity in descending order'
            },
            {
                name: 'Vb Start Level (Ascending)',
                value: 'vbStartLevel',
                description: 'Sort by Vb Start Level in ascending order'
            },
            {
                name: 'Vb Start Level (Descending)',
                value: '-vbStartLevel',
                description: 'Sort by Vb Start Level in descending order'
            },
            {
                name: 'Vendor Product Category (Ascending)',
                value: 'vendorProductCategory',
                description: 'Sort by Vendor Product Category in ascending order'
            },
            {
                name: 'Vendor Product Category (Descending)',
                value: '-vendorProductCategory',
                description: 'Sort by Vendor Product Category in descending order'
            },
            {
                name: 'Vendor Sub Category (Ascending)',
                value: 'vendorSubCategory',
                description: 'Sort by Vendor Sub Category in ascending order'
            },
            {
                name: 'Vendor Sub Category (Descending)',
                value: '-vendorSubCategory',
                description: 'Sort by Vendor Sub Category in descending order'
            },
            {
                name: 'Weee Category (Ascending)',
                value: 'weeeCategory',
                description: 'Sort by Weee Category in ascending order'
            },
            {
                name: 'Weee Category (Descending)',
                value: '-weeeCategory',
                description: 'Sort by Weee Category in descending order'
            },
            {
                name: 'Weee Charge (Ascending)',
                value: 'weeeCharge',
                description: 'Sort by Weee Charge in ascending order'
            },
            {
                name: 'Weee Charge (Descending)',
                value: '-weeeCharge',
                description: 'Sort by Weee Charge in descending order'
            },
            {
                name: 'Weight Conv (Ascending)',
                value: 'weightConv',
                description: 'Sort by Weight Conv in ascending order'
            },
            {
                name: 'Weight Conv (Descending)',
                value: '-weightConv',
                description: 'Sort by Weight Conv in descending order'
            },
            {
                name: 'Weight Count Ratio Variance (Ascending)',
                value: 'weightCountRatioVariance',
                description: 'Sort by Weight Count Ratio Variance in ascending order'
            },
            {
                name: 'Weight Count Ratio Variance (Descending)',
                value: '-weightCountRatioVariance',
                description: 'Sort by Weight Count Ratio Variance in descending order'
            },
            {
                name: 'Weighted (Ascending)',
                value: 'weighted',
                description: 'Sort by Weighted in ascending order'
            },
            {
                name: 'Weighted (Descending)',
                value: '-weighted',
                description: 'Sort by Weighted in descending order'
            },
            {
                name: 'Wsale Ind (Ascending)',
                value: 'wsaleInd',
                description: 'Sort by Wsale Ind in ascending order'
            },
            {
                name: 'Wsale Ind (Descending)',
                value: '-wsaleInd',
                description: 'Sort by Wsale Ind in descending order'
            }
        ],
        displayOptions: {
            show: {
                resource: ['products'],
                operation: ['products:list'],
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
                resource: ['products'],
                operation: ['products:list'],
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
                name: 'Acceptable Life',
                value: 'acceptableLife',
                description: 'Include acceptable life in the response'
            },
            {
                name: 'Active Date',
                value: 'activeDate',
                description: 'Include active date in the response'
            },
            {
                name: 'Age Check Code',
                value: 'ageCheckCode',
                description: 'Include age check code in the response'
            },
            {
                name: 'Alcohol By Volume',
                value: 'alcoholByVolume',
                description: 'Include alcohol by volume in the response'
            },
            {
                name: 'Alert Forecast',
                value: 'alertForecast',
                description: 'Include alert forecast in the response'
            },
            {
                name: 'Allergen Code',
                value: 'allergenCode',
                description: 'Include allergen code in the response'
            },
            {
                name: 'Allergen Description',
                value: 'allergenDescription',
                description: 'Include allergen description in the response'
            },
            {
                name: 'Allergen Name',
                value: 'allergenName',
                description: 'Include allergen name in the response'
            },
            {
                name: 'Allergen Qualifier',
                value: 'allergenQualifier',
                description: 'Include allergen qualifier in the response'
            },
            {
                name: 'Allergen Status',
                value: 'allergenStatus',
                description: 'Include allergen status in the response'
            },
            {
                name: 'Alternate Supplier Bonus Text',
                value: 'alternateSupplierBonusText',
                description: 'Include alternate supplier bonus text in the response'
            },
            {
                name: 'Alternate Supplier Code',
                value: 'alternateSupplierCode',
                description: 'Include alternate supplier code in the response'
            },
            {
                name: 'Alternate Supplier Cost Currency',
                value: 'alternateSupplierCostCurrency',
                description: 'Include alternate supplier cost currency in the response'
            },
            {
                name: 'Alternate Supplier Gross Cost',
                value: 'alternateSupplierGrossCost',
                description: 'Include alternate supplier gross cost in the response'
            },
            {
                name: 'Alternate Supplier Invoice Cost',
                value: 'alternateSupplierInvoiceCost',
                description: 'Include alternate supplier invoice cost in the response'
            },
            {
                name: 'Alternate Supplier Nett Cost',
                value: 'alternateSupplierNettCost',
                description: 'Include alternate supplier nett cost in the response'
            },
            {
                name: 'Alternate Supplier Product Code',
                value: 'alternateSupplierProductCode',
                description: 'Include alternate supplier product code in the response'
            },
            {
                name: 'Assign Date',
                value: 'assignDate',
                description: 'Include assign date in the response'
            },
            {
                name: 'ATP Cut Off Days',
                value: 'ATPCutOffDays',
                description: 'Include atp cut off days in the response'
            },
            {
                name: 'Attribute Description',
                value: 'attributeDescription',
                description: 'Include attribute description in the response'
            },
            {
                name: 'Attribute Group',
                value: 'attributeGroup',
                description: 'Include attribute group in the response'
            },
            {
                name: 'Attribute Group Desc',
                value: 'attributeGroupDesc',
                description: 'Include attribute group desc in the response'
            },
            {
                name: 'Attribute Label',
                value: 'attributeLabel',
                description: 'Include attribute label in the response'
            },
            {
                name: 'Attribute Name',
                value: 'attributeName',
                description: 'Include attribute name in the response'
            },
            {
                name: 'Attribute Value',
                value: 'attributeValue',
                description: 'Include attribute value in the response'
            },
            {
                name: 'Available To Sell',
                value: 'availableToSell',
                description: 'Include available to sell in the response'
            },
            {
                name: 'Award Ratio',
                value: 'awardRatio',
                description: 'Include award ratio in the response'
            },
            {
                name: 'Barrelage',
                value: 'barrelage',
                description: 'Include barrelage in the response'
            },
            {
                name: 'Base Product Code',
                value: 'baseProductCode',
                description: 'Include base product code in the response'
            },
            {
                name: 'Batch Number',
                value: 'batchNumber',
                description: 'Include batch number in the response'
            },
            {
                name: 'Batch Reference Required',
                value: 'batchReferenceRequired',
                description: 'Include batch reference required in the response'
            },
            {
                name: 'Bonus Text',
                value: 'bonusText',
                description: 'Include bonus text in the response'
            },
            {
                name: 'Bottles Cans Per Case',
                value: 'bottlesCansPerCase',
                description: 'Include bottles cans per case in the response'
            },
            {
                name: 'Brand',
                value: 'brand',
                description: 'Include brand in the response'
            },
            {
                name: 'Brand Desc',
                value: 'brandDesc',
                description: 'Include brand desc in the response'
            },
            {
                name: 'Brand Description',
                value: 'brandDescription',
                description: 'Include brand description in the response'
            },
            {
                name: 'Brand Group',
                value: 'brandGroup',
                description: 'Include brand group in the response'
            },
            {
                name: 'Buy Multiplier',
                value: 'buyMultiplier',
                description: 'Include buy multiplier in the response'
            },
            {
                name: 'Can Order',
                value: 'canOrder',
                description: 'Include can order in the response'
            },
            {
                name: 'Card Item',
                value: 'cardItem',
                description: 'Include card item in the response'
            },
            {
                name: 'Case Height',
                value: 'caseHeight',
                description: 'Include case height in the response'
            },
            {
                name: 'Case Length',
                value: 'caseLength',
                description: 'Include case length in the response'
            },
            {
                name: 'Case Volume',
                value: 'caseVolume',
                description: 'Include case volume in the response'
            },
            {
                name: 'Case Width',
                value: 'caseWidth',
                description: 'Include case width in the response'
            },
            {
                name: 'Cases',
                value: 'cases',
                description: 'Include cases in the response'
            },
            {
                name: 'Cashier Age',
                value: 'cashierAge',
                description: 'Include cashier age in the response'
            },
            {
                name: 'Category1',
                value: 'category1',
                description: 'Include category1 in the response'
            },
            {
                name: 'Category1Description',
                value: 'category1Description',
                description: 'Include category1description in the response'
            },
            {
                name: 'Category2',
                value: 'category2',
                description: 'Include category2 in the response'
            },
            {
                name: 'Category2Description',
                value: 'category2Description',
                description: 'Include category2description in the response'
            },
            {
                name: 'Catering',
                value: 'catering',
                description: 'Include catering in the response'
            },
            {
                name: 'Cigarettes Per Case',
                value: 'cigarettesPerCase',
                description: 'Include cigarettes per case in the response'
            },
            {
                name: 'Cigarettes Per Pack',
                value: 'cigarettesPerPack',
                description: 'Include cigarettes per pack in the response'
            },
            {
                name: 'Class',
                value: 'class',
                description: 'Include class in the response'
            },
            {
                name: 'Cn Code',
                value: 'cnCode',
                description: 'Include cn code in the response'
            },
            {
                name: 'Cn Tariff',
                value: 'cnTariff',
                description: 'Include cn tariff in the response'
            },
            {
                name: 'Colour',
                value: 'colour',
                description: 'Include colour in the response'
            },
            {
                name: 'Comment',
                value: 'comment',
                description: 'Include comment in the response'
            },
            {
                name: 'Company Transfer Cost Centre Code',
                value: 'companyTransferCostCentreCode',
                description: 'Include company transfer cost centre code in the response'
            },
            {
                name: 'Company Transfer Division Code',
                value: 'companyTransferDivisionCode',
                description: 'Include company transfer division code in the response'
            },
            {
                name: 'Company Transfer Ledger Code',
                value: 'companyTransferLedgerCode',
                description: 'Include company transfer ledger code in the response'
            },
            {
                name: 'Component Type',
                value: 'componentType',
                description: 'Include component type in the response'
            },
            {
                name: 'Composite',
                value: 'composite',
                description: 'Include composite in the response'
            },
            {
                name: 'Consumable',
                value: 'consumable',
                description: 'Include consumable in the response'
            },
            {
                name: 'Consumer Description',
                value: 'consumerDescription',
                description: 'Include consumer description in the response'
            },
            {
                name: 'Container',
                value: 'container',
                description: 'Include container in the response'
            },
            {
                name: 'Container Description',
                value: 'containerDescription',
                description: 'Include container description in the response'
            },
            {
                name: 'Container Type',
                value: 'containerType',
                description: 'Include container type in the response'
            },
            {
                name: 'Container2',
                value: 'container2',
                description: 'Include container2 in the response'
            },
            {
                name: 'Cop Cost Centre',
                value: 'copCostCentre',
                description: 'Include cop cost centre in the response'
            },
            {
                name: 'Cop Div Code',
                value: 'copDivCode',
                description: 'Include cop div code in the response'
            },
            {
                name: 'Cop Nl Code',
                value: 'copNlCode',
                description: 'Include cop nl code in the response'
            },
            {
                name: 'Core',
                value: 'core',
                description: 'Include core in the response'
            },
            {
                name: 'Cos Cost Centre',
                value: 'cosCostCentre',
                description: 'Include cos cost centre in the response'
            },
            {
                name: 'Cos Div Code',
                value: 'cosDivCode',
                description: 'Include cos div code in the response'
            },
            {
                name: 'Cos Nl Code',
                value: 'cosNlCode',
                description: 'Include cos nl code in the response'
            },
            {
                name: 'Cost Currency',
                value: 'costCurrency',
                description: 'Include cost currency in the response'
            },
            {
                name: 'Country',
                value: 'country',
                description: 'Include country in the response'
            },
            {
                name: 'Create Date',
                value: 'createDate',
                description: 'Include create date in the response'
            },
            {
                name: 'Cross Sell Multiplier',
                value: 'crossSellMultiplier',
                description: 'Include cross sell multiplier in the response'
            },
            {
                name: 'Cross Sell Product',
                value: 'crossSellProduct',
                description: 'Include cross sell product in the response'
            },
            {
                name: 'Cross Sell Sequence',
                value: 'crossSellSequence',
                description: 'Include cross sell sequence in the response'
            },
            {
                name: 'Csr Always',
                value: 'csrAlways',
                description: 'Include csr always in the response'
            },
            {
                name: 'Csr Coslip',
                value: 'csrCoslip',
                description: 'Include csr coslip in the response'
            },
            {
                name: 'Csr Over Sales',
                value: 'csrOverSales',
                description: 'Include csr over sales in the response'
            },
            {
                name: 'Customer Age',
                value: 'customerAge',
                description: 'Include customer age in the response'
            },
            {
                name: 'Customer Type',
                value: 'customerType',
                description: 'Include customer type in the response'
            },
            {
                name: 'Customer Type Desc',
                value: 'customerTypeDesc',
                description: 'Include customer type desc in the response'
            },
            {
                name: 'Cut Text',
                value: 'cutText',
                description: 'Include cut text in the response'
            },
            {
                name: 'Date Available',
                value: 'dateAvailable',
                description: 'Include date available in the response'
            },
            {
                name: 'Date Coded',
                value: 'dateCoded',
                description: 'Include date coded in the response'
            },
            {
                name: 'Deposit Code',
                value: 'depositCode',
                description: 'Include deposit code in the response'
            },
            {
                name: 'Deposit Description',
                value: 'depositDescription',
                description: 'Include deposit description in the response'
            },
            {
                name: 'Deposit Indicator',
                value: 'depositIndicator',
                description: 'Include deposit indicator in the response'
            },
            {
                name: 'Deposit Value',
                value: 'depositValue',
                description: 'Include deposit value in the response'
            },
            {
                name: 'Depot Code',
                value: 'depotCode',
                description: 'Include depot code in the response'
            },
            {
                name: 'Depot Status',
                value: 'depotStatus',
                description: 'Include depot status in the response'
            },
            {
                name: 'Description',
                value: 'description',
                description: 'Include description in the response'
            },
            {
                name: 'Description Indicator',
                value: 'descriptionIndicator',
                description: 'Include description indicator in the response'
            },
            {
                name: 'Description Line1',
                value: 'descriptionLine1',
                description: 'Include description line1 in the response'
            },
            {
                name: 'Description Line2',
                value: 'descriptionLine2',
                description: 'Include description line2 in the response'
            },
            {
                name: 'Details',
                value: 'details',
                description: 'Include details in the response'
            },
            {
                name: 'Dilute Ratio',
                value: 'diluteRatio',
                description: 'Include dilute ratio in the response'
            },
            {
                name: 'Division Code',
                value: 'divisionCode',
                description: 'Include division code in the response'
            },
            {
                name: 'Drink End',
                value: 'drinkEnd',
                description: 'Include drink end in the response'
            },
            {
                name: 'Drink Start',
                value: 'drinkStart',
                description: 'Include drink start in the response'
            },
            {
                name: 'Drs Container Type',
                value: 'drsContainerType',
                description: 'Include drs container type in the response'
            },
            {
                name: 'Drs Container Units',
                value: 'drsContainerUnits',
                description: 'Include drs container units in the response'
            },
            {
                name: 'Drs Deposit Code',
                value: 'drsDepositCode',
                description: 'Include drs deposit code in the response'
            },
            {
                name: 'Drs Multi Pack Barcode',
                value: 'drsMultiPackBarcode',
                description: 'Include drs multi pack barcode in the response'
            },
            {
                name: 'Drs Multi Pack Qty',
                value: 'drsMultiPackQty',
                description: 'Include drs multi pack qty in the response'
            },
            {
                name: 'Drs Own Produced',
                value: 'drsOwnProduced',
                description: 'Include drs own produced in the response'
            },
            {
                name: 'Drs Packaging Material',
                value: 'drsPackagingMaterial',
                description: 'Include drs packaging material in the response'
            },
            {
                name: 'Drs Replacement Product',
                value: 'drsReplacementProduct',
                description: 'Include drs replacement product in the response'
            },
            {
                name: 'Drs Unit Measure',
                value: 'drsUnitMeasure',
                description: 'Include drs unit measure in the response'
            },
            {
                name: 'Drs Unit Size',
                value: 'drsUnitSize',
                description: 'Include drs unit size in the response'
            },
            {
                name: 'Duty Code',
                value: 'dutyCode',
                description: 'Include duty code in the response'
            },
            {
                name: 'Each Weight',
                value: 'eachWeight',
                description: 'Include each weight in the response'
            },
            {
                name: 'Ean Code',
                value: 'eanCode',
                description: 'Include ean code in the response'
            },
            {
                name: 'Ean Indicator',
                value: 'eanIndicator',
                description: 'Include ean indicator in the response'
            },
            {
                name: 'Ean Last Update',
                value: 'eanLastUpdate',
                description: 'Include ean last update in the response'
            },
            {
                name: 'Edge Of Shelf Description',
                value: 'edgeOfShelfDescription',
                description: 'Include edge of shelf description in the response'
            },
            {
                name: 'EDLP',
                value: 'EDLP',
                description: 'Include edlp in the response'
            },
            {
                name: 'End Date',
                value: 'endDate',
                description: 'Include end date in the response'
            },
            {
                name: 'End Plof',
                value: 'endPlof',
                description: 'Include end plof in the response'
            },
            {
                name: 'Equivalent Cases',
                value: 'equivalentCases',
                description: 'Include equivalent cases in the response'
            },
            {
                name: 'Expense Code',
                value: 'expenseCode',
                description: 'Include expense code in the response'
            },
            {
                name: 'Export Type',
                value: 'exportType',
                description: 'Include export type in the response'
            },
            {
                name: 'Extended Credit Group',
                value: 'extendedCreditGroup',
                description: 'Include extended credit group in the response'
            },
            {
                name: 'External Delivery Service',
                value: 'externalDeliveryService',
                description: 'Include external delivery service in the response'
            },
            {
                name: 'File Change Log',
                value: 'fileChangeLog',
                description: 'Include file change log in the response'
            },
            {
                name: 'Financial Indicator',
                value: 'financialIndicator',
                description: 'Include financial indicator in the response'
            },
            {
                name: 'Flash Main Product Code',
                value: 'flashMainProductCode',
                description: 'Include flash main product code in the response'
            },
            {
                name: 'Flash Main Product Description',
                value: 'flashMainProductDescription',
                description: 'Include flash main product description in the response'
            },
            {
                name: 'Flash Pack Indicator',
                value: 'flashPackIndicator',
                description: 'Include flash pack indicator in the response'
            },
            {
                name: 'Generic Product Code',
                value: 'genericProductCode',
                description: 'Include generic product code in the response'
            },
            {
                name: 'Generic Product Description',
                value: 'genericProductDescription',
                description: 'Include generic product description in the response'
            },
            {
                name: 'Generic Type',
                value: 'genericType',
                description: 'Include generic type in the response'
            },
            {
                name: 'Grn Priced',
                value: 'grnPriced',
                description: 'Include grn priced in the response'
            },
            {
                name: 'Gross Cost',
                value: 'grossCost',
                description: 'Include gross cost in the response'
            },
            {
                name: 'Group Parent Code',
                value: 'groupParentCode',
                description: 'Include group parent code in the response'
            },
            {
                name: 'Group Sequence',
                value: 'groupSequence',
                description: 'Include group sequence in the response'
            },
            {
                name: 'GS1Unit Of Measure',
                value: 'GS1UnitOfMeasure',
                description: 'Include gs1unit of measure in the response'
            },
            {
                name: 'GTIN',
                value: 'GTIN',
                description: 'Include gtin in the response'
            },
            {
                name: 'Handling Type',
                value: 'handlingType',
                description: 'Include handling type in the response'
            },
            {
                name: 'High Strength Beer Duty',
                value: 'highStrengthBeerDuty',
                description: 'Include high strength beer duty in the response'
            },
            {
                name: 'Home Produced',
                value: 'homeProduced',
                description: 'Include home produced in the response'
            },
            {
                name: 'Ibap Group',
                value: 'ibapGroup',
                description: 'Include ibap group in the response'
            },
            {
                name: 'Image File Reference',
                value: 'imageFileReference',
                description: 'Include image file reference in the response'
            },
            {
                name: 'Imb Code',
                value: 'imbCode',
                description: 'Include imb code in the response'
            },
            {
                name: 'Ingredient Indicator',
                value: 'ingredientIndicator',
                description: 'Include ingredient indicator in the response'
            },
            {
                name: 'Ingredients',
                value: 'ingredients',
                description: 'Include ingredients in the response'
            },
            {
                name: 'Invoice Cost',
                value: 'InvoiceCost',
                description: 'Include invoice cost in the response'
            },
            {
                name: 'KVI',
                value: 'KVI',
                description: 'Include kvi in the response'
            },
            {
                name: 'Label Type',
                value: 'labelType',
                description: 'Include label type in the response'
            },
            {
                name: 'Last Update',
                value: 'lastUpdate',
                description: 'Include last update in the response'
            },
            {
                name: 'Layer',
                value: 'layer',
                description: 'Include layer in the response'
            },
            {
                name: 'Levy Code',
                value: 'levyCode',
                description: 'Include levy code in the response'
            },
            {
                name: 'Linked Silver Code',
                value: 'linkedSilverCode',
                description: 'Include linked silver code in the response'
            },
            {
                name: 'Litres',
                value: 'litres',
                description: 'Include litres in the response'
            },
            {
                name: 'Litres Of Pure Alcohol',
                value: 'litresOfPureAlcohol',
                description: 'Include litres of pure alcohol in the response'
            },
            {
                name: 'Location',
                value: 'location',
                description: 'Include location in the response'
            },
            {
                name: 'Lookup Description',
                value: 'lookupDescription',
                description: 'Include lookup description in the response'
            },
            {
                name: 'Lta Group Code',
                value: 'ltaGroupCode',
                description: 'Include lta group code in the response'
            },
            {
                name: 'Lta Group ID',
                value: 'ltaGroupID',
                description: 'Include lta group ID in the response'
            },
            {
                name: 'Main Product Code',
                value: 'mainProductCode',
                description: 'Include main product code in the response'
            },
            {
                name: 'Main Product Description',
                value: 'mainProductDescription',
                description: 'Include main product description in the response'
            },
            {
                name: 'Manufacture Time',
                value: 'manufactureTime',
                description: 'Include manufacture time in the response'
            },
            {
                name: 'Manufacturer',
                value: 'manufacturer',
                description: 'Include manufacturer in the response'
            },
            {
                name: 'Manufacturing Batch Quantity',
                value: 'manufacturingBatchQuantity',
                description: 'Include manufacturing batch quantity in the response'
            },
            {
                name: 'Manufacturing Type',
                value: 'manufacturingType',
                description: 'Include manufacturing type in the response'
            },
            {
                name: 'Max Delivered Life',
                value: 'maxDeliveredLife',
                description: 'Include max delivered life in the response'
            },
            {
                name: 'Maximum Cost',
                value: 'maximumCost',
                description: 'Include maximum cost in the response'
            },
            {
                name: 'Maximum Weight Variance',
                value: 'maximumWeightVariance',
                description: 'Include maximum weight variance in the response'
            },
            {
                name: 'Message Category',
                value: 'messageCategory',
                description: 'Include message category in the response'
            },
            {
                name: 'Minimum Base',
                value: 'minimumBase',
                description: 'Include minimum base in the response'
            },
            {
                name: 'Minimum Life',
                value: 'minimumLife',
                description: 'Include minimum life in the response'
            },
            {
                name: 'Minimum Order Quantity',
                value: 'minimumOrderQuantity',
                description: 'Include minimum order quantity in the response'
            },
            {
                name: 'Model Stock Sheet',
                value: 'modelStockSheet',
                description: 'Include model stock sheet in the response'
            },
            {
                name: 'Multi Pack Quantity',
                value: 'multiPackQuantity',
                description: 'Include multi pack quantity in the response'
            },
            {
                name: 'Multiple Retail Group Indicator',
                value: 'multipleRetailGroupIndicator',
                description: 'Include multiple retail group indicator in the response'
            },
            {
                name: 'National Product Code',
                value: 'nationalProductCode',
                description: 'Include national product code in the response'
            },
            {
                name: 'Nett Cost',
                value: 'nettCost',
                description: 'Include nett cost in the response'
            },
            {
                name: 'Nett Mass',
                value: 'nettMass',
                description: 'Include nett mass in the response'
            },
            {
                name: 'Nl Code',
                value: 'nlCode',
                description: 'Include nl code in the response'
            },
            {
                name: 'Nl Cost Centre',
                value: 'nlCostCentre',
                description: 'Include nl cost centre in the response'
            },
            {
                name: 'Nominal Weight',
                value: 'nominalWeight',
                description: 'Include nominal weight in the response'
            },
            {
                name: 'One Label',
                value: 'oneLabel',
                description: 'Include one label in the response'
            },
            {
                name: 'Online',
                value: 'online',
                description: 'Include online in the response'
            },
            {
                name: 'Order Thru',
                value: 'orderThru',
                description: 'Include order thru in the response'
            },
            {
                name: 'Origin',
                value: 'origin',
                description: 'Include origin in the response'
            },
            {
                name: 'Otu',
                value: 'otu',
                description: 'Include otu in the response'
            },
            {
                name: 'Override Date',
                value: 'overrideDate',
                description: 'Include override date in the response'
            },
            {
                name: 'Override Details',
                value: 'overrideDetails',
                description: 'Include override details in the response'
            },
            {
                name: 'Own Brand Indicator',
                value: 'ownBrandIndicator',
                description: 'Include own brand indicator in the response'
            },
            {
                name: 'Pack Description',
                value: 'packDescription',
                description: 'Include pack description in the response'
            },
            {
                name: 'Pack Unit',
                value: 'packUnit',
                description: 'Include pack unit in the response'
            },
            {
                name: 'Packaging',
                value: 'packaging',
                description: 'Include packaging in the response'
            },
            {
                name: 'Packed In House',
                value: 'packedInHouse',
                description: 'Include packed in house in the response'
            },
            {
                name: 'Pallet',
                value: 'pallet',
                description: 'Include pallet in the response'
            },
            {
                name: 'Pallet Percentage',
                value: 'palletPercentage',
                description: 'Include pallet percentage in the response'
            },
            {
                name: 'Pcl Prefix',
                value: 'pclPrefix',
                description: 'Include pcl prefix in the response'
            },
            {
                name: 'Pcl Suffix',
                value: 'pclSuffix',
                description: 'Include pcl suffix in the response'
            },
            {
                name: 'Pi Date',
                value: 'piDate',
                description: 'Include pi date in the response'
            },
            {
                name: 'Pi Interval',
                value: 'piInterval',
                description: 'Include pi interval in the response'
            },
            {
                name: 'Pick Batch Quantity',
                value: 'pickBatchQuantity',
                description: 'Include pick batch quantity in the response'
            },
            {
                name: 'Pim P Code',
                value: 'pimPCode',
                description: 'Include pim p code in the response'
            },
            {
                name: 'Pl Cost Centre',
                value: 'plCostCentre',
                description: 'Include pl cost centre in the response'
            },
            {
                name: 'Pl Div Code',
                value: 'plDivCode',
                description: 'Include pl div code in the response'
            },
            {
                name: 'Pl Nl Code',
                value: 'plNlCode',
                description: 'Include pl nl code in the response'
            },
            {
                name: 'Plof Code',
                value: 'plofCode',
                description: 'Include plof code in the response'
            },
            {
                name: 'Plof Group',
                value: 'plofGroup',
                description: 'Include plof group in the response'
            },
            {
                name: 'Plof Main',
                value: 'plofMain',
                description: 'Include plof main in the response'
            },
            {
                name: 'PLU Product Group',
                value: 'PLUProductGroup',
                description: 'Include plu product group in the response'
            },
            {
                name: 'Plu Type',
                value: 'pluType',
                description: 'Include plu type in the response'
            },
            {
                name: 'PO Batch Quantity',
                value: 'POBatchQuantity',
                description: 'Include po batch quantity in the response'
            },
            {
                name: 'PO Minimum Quantity',
                value: 'POMinimumQuantity',
                description: 'Include po minimum quantity in the response'
            },
            {
                name: 'Po Val Code',
                value: 'poValCode',
                description: 'Include po val code in the response'
            },
            {
                name: 'Points Ratio',
                value: 'pointsRatio',
                description: 'Include points ratio in the response'
            },
            {
                name: 'Portion Weight',
                value: 'portionWeight',
                description: 'Include portion weight in the response'
            },
            {
                name: 'Portions Per Case',
                value: 'portionsPerCase',
                description: 'Include portions per case in the response'
            },
            {
                name: 'Pre Order',
                value: 'preOrder',
                description: 'Include pre order in the response'
            },
            {
                name: 'Preferred Multiplier',
                value: 'preferredMultiplier',
                description: 'Include preferred multiplier in the response'
            },
            {
                name: 'Preferred Product',
                value: 'preferredProduct',
                description: 'Include preferred product in the response'
            },
            {
                name: 'Preferred Sequence',
                value: 'preferredSequence',
                description: 'Include preferred sequence in the response'
            },
            {
                name: 'Preparation',
                value: 'preparation',
                description: 'Include preparation in the response'
            },
            {
                name: 'Prh Code',
                value: 'prhCode',
                description: 'Include prh code in the response'
            },
            {
                name: 'Prh1Code',
                value: 'prh1Code',
                description: 'Include prh1code in the response'
            },
            {
                name: 'Prh4Code',
                value: 'prh4Code',
                description: 'Include prh4code in the response'
            },
            {
                name: 'Price Group',
                value: 'priceGroup',
                description: 'Include price group in the response'
            },
            {
                name: 'Primary Code',
                value: 'primaryCode',
                description: 'Include primary code in the response'
            },
            {
                name: 'Product Code',
                value: 'productCode',
                description: 'Include product code in the response'
            },
            {
                name: 'Product Group',
                value: 'productGroup',
                description: 'Include product group in the response'
            },
            {
                name: 'Product Group Description',
                value: 'productGroupDescription',
                description: 'Include product group description in the response'
            },
            {
                name: 'Product Note1',
                value: 'productNote1',
                description: 'Include product note1 in the response'
            },
            {
                name: 'Product Note2',
                value: 'productNote2',
                description: 'Include product note2 in the response'
            },
            {
                name: 'Product Status',
                value: 'productStatus',
                description: 'Include product status in the response'
            },
            {
                name: 'Purchase In House',
                value: 'purchaseInHouse',
                description: 'Include purchase in house in the response'
            },
            {
                name: 'Purchase Pack Type',
                value: 'purchasePackType',
                description: 'Include purchase pack type in the response'
            },
            {
                name: 'Ranking',
                value: 'ranking',
                description: 'Include ranking in the response'
            },
            {
                name: 'Ration',
                value: 'ration',
                description: 'Include ration in the response'
            },
            {
                name: 'Rearing',
                value: 'rearing',
                description: 'Include rearing in the response'
            },
            {
                name: 'Reason',
                value: 'reason',
                description: 'Include reason in the response'
            },
            {
                name: 'Reasonable Order Quantity',
                value: 'reasonableOrderQuantity',
                description: 'Include reasonable order quantity in the response'
            },
            {
                name: 'Rebate Range',
                value: 'rebateRange',
                description: 'Include rebate range in the response'
            },
            {
                name: 'Rebateable',
                value: 'rebateable',
                description: 'Include rebateable in the response'
            },
            {
                name: 'Recommended RRP',
                value: 'recommendedRRP',
                description: 'Include recommended rrp in the response'
            },
            {
                name: 'Recommended Sell',
                value: 'recommendedSell',
                description: 'Include recommended sell in the response'
            },
            {
                name: 'Replaces Product Code',
                value: 'replacesProductCode',
                description: 'Include replaces product code in the response'
            },
            {
                name: 'Restrict Export',
                value: 'restrictExport',
                description: 'Include restrict export in the response'
            },
            {
                name: 'Retail Height',
                value: 'retailHeight',
                description: 'Include retail height in the response'
            },
            {
                name: 'Retail Length',
                value: 'retailLength',
                description: 'Include retail length in the response'
            },
            {
                name: 'Retail Volume',
                value: 'retailVolume',
                description: 'Include retail volume in the response'
            },
            {
                name: 'Retail Width',
                value: 'retailWidth',
                description: 'Include retail width in the response'
            },
            {
                name: 'Rf Quantity',
                value: 'rfQuantity',
                description: 'Include rf quantity in the response'
            },
            {
                name: 'Root Product Code',
                value: 'rootProductCode',
                description: 'Include root product code in the response'
            },
            {
                name: 'Root Product Description',
                value: 'rootProductDescription',
                description: 'Include root product description in the response'
            },
            {
                name: 'Rrp Margin',
                value: 'rrpMargin',
                description: 'Include rrp margin in the response'
            },
            {
                name: 'Rrv Cost Centre',
                value: 'rrvCostCentre',
                description: 'Include rrv cost centre in the response'
            },
            {
                name: 'Rrv Div Code',
                value: 'rrvDivCode',
                description: 'Include rrv div code in the response'
            },
            {
                name: 'Rrv Nl Code',
                value: 'rrvNlCode',
                description: 'Include rrv nl code in the response'
            },
            {
                name: 'Safety Certificate',
                value: 'safetyCertificate',
                description: 'Include safety certificate in the response'
            },
            {
                name: 'Sales Item',
                value: 'salesItem',
                description: 'Include sales item in the response'
            },
            {
                name: 'Sales Item Cost Discount',
                value: 'salesItemCostDiscount',
                description: 'Include sales item cost discount in the response'
            },
            {
                name: 'Sales Item Sell Discount',
                value: 'salesItemSellDiscount',
                description: 'Include sales item sell discount in the response'
            },
            {
                name: 'Seas Type',
                value: 'seasType',
                description: 'Include seas type in the response'
            },
            {
                name: 'Season End',
                value: 'seasonEnd',
                description: 'Include season end in the response'
            },
            {
                name: 'Season Start',
                value: 'seasonStart',
                description: 'Include season start in the response'
            },
            {
                name: 'Seasonal Item',
                value: 'seasonalItem',
                description: 'Include seasonal item in the response'
            },
            {
                name: 'Security Item',
                value: 'securityItem',
                description: 'Include security item in the response'
            },
            {
                name: 'Sell As',
                value: 'sellAs',
                description: 'Include sell as in the response'
            },
            {
                name: 'Sell Margin',
                value: 'sellMargin',
                description: 'Include sell margin in the response'
            },
            {
                name: 'Separate Order Indicator',
                value: 'separateOrderIndicator',
                description: 'Include separate order indicator in the response'
            },
            {
                name: 'Shelf Life Indicator',
                value: 'shelfLifeIndicator',
                description: 'Include shelf life indicator in the response'
            },
            {
                name: 'Shelf Linear Meterage',
                value: 'shelfLinearMeterage',
                description: 'Include shelf linear meterage in the response'
            },
            {
                name: 'Short Description',
                value: 'shortDescription',
                description: 'Include short description in the response'
            },
            {
                name: 'Slaughter',
                value: 'slaughter',
                description: 'Include slaughter in the response'
            },
            {
                name: 'Sm Cost Centre',
                value: 'smCostCentre',
                description: 'Include sm cost centre in the response'
            },
            {
                name: 'Sm Div Code',
                value: 'smDivCode',
                description: 'Include sm div code in the response'
            },
            {
                name: 'Sm Nl Code',
                value: 'smNlCode',
                description: 'Include sm nl code in the response'
            },
            {
                name: 'Split Indicator',
                value: 'splitIndicator',
                description: 'Include split indicator in the response'
            },
            {
                name: 'Split Premium',
                value: 'splitPremium',
                description: 'Include split premium in the response'
            },
            {
                name: 'Stack Height',
                value: 'stackHeight',
                description: 'Include stack height in the response'
            },
            {
                name: 'Standard Container',
                value: 'standardContainer',
                description: 'Include standard container in the response'
            },
            {
                name: 'Standard Count',
                value: 'standardCount',
                description: 'Include standard count in the response'
            },
            {
                name: 'Standard Unit Weight',
                value: 'standardUnitWeight',
                description: 'Include standard unit weight in the response'
            },
            {
                name: 'Standard Weight',
                value: 'standardWeight',
                description: 'Include standard weight in the response'
            },
            {
                name: 'Start Date',
                value: 'startDate',
                description: 'Include start date in the response'
            },
            {
                name: 'Start Plof',
                value: 'startPlof',
                description: 'Include start plof in the response'
            },
            {
                name: 'Stock Product',
                value: 'stockProduct',
                description: 'Include stock product in the response'
            },
            {
                name: 'Stock Product Description',
                value: 'stockProductDescription',
                description: 'Include stock product description in the response'
            },
            {
                name: 'Stock Type',
                value: 'stockType',
                description: 'Include stock type in the response'
            },
            {
                name: 'Stock Update',
                value: 'stockUpdate',
                description: 'Include stock update in the response'
            },
            {
                name: 'Stock Variance Percentage',
                value: 'stockVariancePercentage',
                description: 'Include stock variance percentage in the response'
            },
            {
                name: 'Stocked',
                value: 'stocked',
                description: 'Include stocked in the response'
            },
            {
                name: 'Sub Group',
                value: 'subGroup',
                description: 'Include sub group in the response'
            },
            {
                name: 'Substitute Chain',
                value: 'substituteChain',
                description: 'Include substitute chain in the response'
            },
            {
                name: 'Substitute Code',
                value: 'substituteCode',
                description: 'Include substitute code in the response'
            },
            {
                name: 'Substitute Indicator',
                value: 'substituteIndicator',
                description: 'Include substitute indicator in the response'
            },
            {
                name: 'Supplementary Unit',
                value: 'supplementaryUnit',
                description: 'Include supplementary unit in the response'
            },
            {
                name: 'Supplier Code',
                value: 'supplierCode',
                description: 'Include supplier code in the response'
            },
            {
                name: 'Supplier Code (SUPPLIERCODE)',
                value: 'SupplierCode',
                description: 'Include supplier code in the response'
            },
            {
                name: 'Supplier Name',
                value: 'supplierName',
                description: 'Include supplier name in the response'
            },
            {
                name: 'Supplier Not Available',
                value: 'supplierNotAvailable',
                description: 'Include supplier not available in the response'
            },
            {
                name: 'Supplier Product Code',
                value: 'supplierProductCode',
                description: 'Include supplier product code in the response'
            },
            {
                name: 'Supplier Sequence',
                value: 'supplierSequence',
                description: 'Include supplier sequence in the response'
            },
            {
                name: 'Surcharge Indicator',
                value: 'surchargeIndicator',
                description: 'Include surcharge indicator in the response'
            },
            {
                name: 'Surcharge Split',
                value: 'surchargeSplit',
                description: 'Include surcharge split in the response'
            },
            {
                name: 'Surcharge Unit',
                value: 'surchargeUnit',
                description: 'Include surcharge unit in the response'
            },
            {
                name: 'Sv Cost Centre',
                value: 'svCostCentre',
                description: 'Include sv cost centre in the response'
            },
            {
                name: 'Sv Div Code',
                value: 'svDivCode',
                description: 'Include sv div code in the response'
            },
            {
                name: 'Sv Nl Code',
                value: 'svNlCode',
                description: 'Include sv nl code in the response'
            },
            {
                name: 'Target Margin RRP Indicator',
                value: 'targetMarginRRPIndicator',
                description: 'Include target margin rrp indicator in the response'
            },
            {
                name: 'Target Margin Sell Indicator',
                value: 'targetMarginSellIndicator',
                description: 'Include target margin sell indicator in the response'
            },
            {
                name: 'Tariff',
                value: 'tariff',
                description: 'Include tariff in the response'
            },
            {
                name: 'Tariff Recipe Indicator',
                value: 'tariffRecipeIndicator',
                description: 'Include tariff recipe indicator in the response'
            },
            {
                name: 'Text1',
                value: 'text1',
                description: 'Include text1 in the response'
            },
            {
                name: 'Text2',
                value: 'text2',
                description: 'Include text2 in the response'
            },
            {
                name: 'Text3',
                value: 'text3',
                description: 'Include text3 in the response'
            },
            {
                name: 'Tobacco Product ID',
                value: 'tobaccoProductID',
                description: 'Include tobacco product ID in the response'
            },
            {
                name: 'Tobacco Weight Per Case',
                value: 'tobaccoWeightPerCase',
                description: 'Include tobacco weight per case in the response'
            },
            {
                name: 'Track And Trace',
                value: 'trackAndTrace',
                description: 'Include track and trace in the response'
            },
            {
                name: 'Tuc',
                value: 'tuc',
                description: 'Include tuc in the response'
            },
            {
                name: 'Unit Description',
                value: 'unitDescription',
                description: 'Include unit description in the response'
            },
            {
                name: 'Unit Ratio',
                value: 'unitRatio',
                description: 'Include unit ratio in the response'
            },
            {
                name: 'Unit Type',
                value: 'unitType',
                description: 'Include unit type in the response'
            },
            {
                name: 'User Category1',
                value: 'userCategory1',
                description: 'Include user category1 in the response'
            },
            {
                name: 'User Category2',
                value: 'userCategory2',
                description: 'Include user category2 in the response'
            },
            {
                name: 'User Category3',
                value: 'userCategory3',
                description: 'Include user category3 in the response'
            },
            {
                name: 'User Category4',
                value: 'userCategory4',
                description: 'Include user category4 in the response'
            },
            {
                name: 'User Category5',
                value: 'userCategory5',
                description: 'Include user category5 in the response'
            },
            {
                name: 'Variant Family Code',
                value: 'variantFamilyCode',
                description: 'Include variant family code in the response'
            },
            {
                name: 'Variety',
                value: 'variety',
                description: 'Include variety in the response'
            },
            {
                name: 'VAT Code',
                value: 'VATCode',
                description: 'Include vat code in the response'
            },
            {
                name: 'VAT Rate',
                value: 'VATRate',
                description: 'Include vat rate in the response'
            },
            {
                name: 'Vb Quantity',
                value: 'vbQuantity',
                description: 'Include vb quantity in the response'
            },
            {
                name: 'Vb Start Level',
                value: 'vbStartLevel',
                description: 'Include vb start level in the response'
            },
            {
                name: 'Vendor Product Category',
                value: 'vendorProductCategory',
                description: 'Include vendor product category in the response'
            },
            {
                name: 'Vendor Sub Category',
                value: 'vendorSubCategory',
                description: 'Include vendor sub category in the response'
            },
            {
                name: 'Weee Category',
                value: 'weeeCategory',
                description: 'Include weee category in the response'
            },
            {
                name: 'Weee Charge',
                value: 'weeeCharge',
                description: 'Include weee charge in the response'
            },
            {
                name: 'Weight Conv',
                value: 'weightConv',
                description: 'Include weight conv in the response'
            },
            {
                name: 'Weight Count Ratio Variance',
                value: 'weightCountRatioVariance',
                description: 'Include weight count ratio variance in the response'
            },
            {
                name: 'Weighted',
                value: 'weighted',
                description: 'Include weighted in the response'
            },
            {
                name: 'Wsale Ind',
                value: 'wsaleInd',
                description: 'Include wsale ind in the response'
            }
        ],
        displayOptions: {
            show: {
                resource: ['products'],
                operation: ['products:list'],
                filterMode: ['common']
            }
        }
    }
];

export const productsCreateFields: INodeProperties[] = [
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
                resource: ['products'],
                operation: ['products:create']
            }
        }
    },
    {
        displayName: 'JSON Body',
        name: 'jsonBody',
        type: 'json',
        default: '{}',
        description: 'Raw JSON body for creating product records. Provide the complete request payload.',
        displayOptions: {
            show: {
                resource: ['products'],
                operation: ['products:create'],
                createMode: ['json']
            }
        },
        placeholder: `{
  "products": [
    {
      // Add your product fields here
    }
  ]
}`
    },
    {
        displayName: 'Product Code',
        name: 'productCode',
        type: 'string',
        default: '',
        description: 'The product code value',
        displayOptions: {
            show: {
                resource: ['products'],
                operation: ['products:create'],
                createMode: ['simple']
            }
        }
    },
    {
        displayName: 'Supplier Code',
        name: 'SupplierCode',
        type: 'string',
        default: '',
        description: 'Supplier',
        displayOptions: {
            show: {
                resource: ['products'],
                operation: ['products:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Lta Group ID',
        name: 'ltaGroupID',
        type: 'number',
        default: '',
        description: 'LTA Product Group ID',
        typeOptions: {
            minValue: 0
        },
        displayOptions: {
            show: {
                resource: ['products'],
                operation: ['products:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Lta Group Code',
        name: 'ltaGroupCode',
        type: 'string',
        default: '',
        description: 'LTA Product Group Code',
        displayOptions: {
            show: {
                resource: ['products'],
                operation: ['products:create'],
                createMode: ['advanced']
            }
        }
    },
    {
        displayName: 'Assign Date',
        name: 'assignDate',
        type: 'string',
        default: '',
        description: 'Assignment Effective Date',
        displayOptions: {
            show: {
                resource: ['products'],
                operation: ['products:create'],
                createMode: ['advanced']
            }
        }
    }
];
