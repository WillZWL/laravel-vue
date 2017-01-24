import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
    productSku: '',
    productLists:[],
    userLists:[],
    hsCode: '',
    productInfo: {},
    merchantProductMapping: {},
    supplierProduct: {},
    productImages: {},
    productContent: {},
    productContentExtend: {},
    productFeatures: {},
    marketplaceId: '',
    marketplaceContentFieldLists: [],
    marketplaceContentExportList: {},
    brandLists: [],
    brandManagerLists: [],
    defaultWarehouseLists: [],
    marketplaceLists: [],
    merchantLists: [],
    countryLists: [],
    categoryLists: [],
    colourLists: [],
    versionLists: [],
    supplierLists: [],
    hscodeCategoryLists: [],
    listingStatusLists:['Y':'Y', 'N':'N'],
    sourcingStatusLists: {'A':'Readily Available', 'O':'Temp of Out Stock','C':'Limited Stock','L':'Last Lot','D':'Discontinued'},
    warehouseLists: ['ETRADE', 'ES_HK', 'ES_DGME', 'CV_AMZ_FBA_UK', 'CV_AMZ_FBA_US', 'ESG_AMZN_JP_FBA', 'ESG_AMZN_UK_FBA', 'ESG_AMZN_US_FBA', 'PX_AMZN_FBA_UK'],
    priceOverviewLists: [],
    priceOverviewMeta: {
        pagination: {
            'current_page': 0
        }
    },
    freightCostList: [],
    countryWithStateList: [],
    weightList: [],
    selectedCouriers: [],
    marketplaces: {
      'allegro': 'ALLEGRO',
      'amazon': 'Amazon',
      'ebay': 'EBAY',
      'fnac': 'FNAC',
      'lazada': 'LAZADA',
      'linio': 'LINIO',
      'priceminister': 'PriceMinister',
      'mercadolibre': 'MERCADOLIBRE',
      'newegg': 'NEWEGG',
      'qoo10': 'QOO10',
      'tanga': 'TANGA'
    }
};

const mutations = {
    //Fetch ESG Sku
    FETCH_PRODUCT_LISTS(state, productLists) {
        state.productLists = productLists;
    },
    //
    FETCH_USER_LISTS(state, userLists) {
        state.userLists = userLists;
    },
    //Fetch Brand List
    FETCH_BRAND_LISTS(state, brandLists, brandManagerLists) {
        state.brandLists = brandLists;
        state.brandManagerLists = brandManagerLists;
    },

    FETCH_FREIGHT_COST_LIST(state, freightCostList) {
        state.freightCostList = freightCostList;
    },

    FETCH_COUNTRY_WITH_STATE_LIST(state, countryWithStateList) {
        state.countryWithStateList = countryWithStateList;
    },

    FETCH_WEIGHT_LIST(state, weightList) {
        state.weightList = weightList;
    },

    FETCH_SELECTED_COURIERS(state, selectedCouriers) {
        state.selectedCouriers = selectedCouriers;
    },

    FETCH_MARKETPLACE_LISTS(state, marketplaceLists) {
        state.marketplaceLists = marketplaceLists;
    },

    FETCH_MERCHANT_LISTS(state, merchantLists) {
        state.merchantLists = merchantLists;
    },

    FETCH_COUNTRY_LIST(state, countryLists) {
        state.countryLists = countryLists;
    },

    FETCH_CATEGORY_LIST(state, categoryLists) {
        state.categoryLists = categoryLists;
    },

    FETCH_COLOUR_LIST(state, colourLists) {
        state.colourLists = colourLists;
    },

    FETCH_VERSION_LIST(state, versionLists) {
        state.versionLists = versionLists;
    },

    FETCH_SUPPLIER_LIST(state, supplierLists) {
        state.supplierLists = supplierLists;
    },

    FETCH_HSCODE_CATEGORY_LIST(state, hscodeCategoryLists) {
        state.hscodeCategoryLists = hscodeCategoryLists;
    },

    FETCH_DEFAULT_WAREHOUSE_LIST(state, defaultWarehouseLists) {
        state.defaultWarehouseLists = defaultWarehouseLists;
    },

    FETCH_MARKETPLACE_CONTENT_FIELD_LIST(state, marketplaceContentFieldLists) {
        state.marketplaceContentFieldLists = marketplaceContentFieldLists;
    },

    FETCH_PRICEOVERVIEW_LISTS(state, priceOverviewLists, priceOverviewMeta) {
        state.priceOverviewLists = priceOverviewLists;
        state.priceOverviewMeta = priceOverviewMeta;
    },

    SET_PRODUCT_SKU(state, newSku) {
        state.productSku = newSku;
    },

    SET_PRODUCT_INFO(state, newProductInfo) {
        state.productInfo = newProductInfo;
    },

    SET_MERCHANT_PRODUCT_MAPPING(state, newProductMapping) {
        state.merchantProductMapping = newProductMapping;
    },

    SET_SUPPLIER_PRODUCT(state, newSupplierProduct) {
        state.supplierProduct = newSupplierProduct;
    },

    SET_PRODUCT_IMAGES(state, newProductImages) {
        state.productImages = newProductImages;
    },

    SET_PRODUCT_CONTENT(state, newProductContent) {
        state.productContent = newProductContent;
    },

    SET_PRODUCT_CONTENT_EXTEND(state, newProductContentExtend) {
        state.productContentExtend = newProductContentExtend;
    },

    SET_PRODUCT_FEATURES(state, newProductFeatures) {
        state.productFeatures = newProductFeatures;
    },

    SET_HS_CODE(state, newHsCode) {
        state.hsCode = newHsCode;
    },

    SET_MARKETPLACE_ID(state, newMarketplaceId) {
        state.marketplaceId = newMarketplaceId;
    },

    SET_MARKETPLACE_CONTENT_EXPORT_LIST(state, newMarketplaceContentExportList) {
        state.marketplaceContentExportList = newMarketplaceContentExportList;
    },

};

export default new Vuex.Store({
    state,
    mutations,
});