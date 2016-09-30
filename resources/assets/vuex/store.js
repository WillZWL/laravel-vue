import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
    productSku: '',
    productInfo: {},
    merchantProductMapping: {},
    supplierProduct: {},
    productImages: {},
    productContent: {},
    productFeatures: {},
    brandLists: [],
    brandManagerLists: [],
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
};

const mutations = {
    //Fetch Brand List
    FETCH_BRAND_LISTS(state, brandLists, brandManagerLists) {
        state.brandLists = brandLists;
        state.brandManagerLists = brandManagerLists;
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

    SET_PRODUCT_FEATURES(state, newproductFeatures) {
        state.productFeatures = newproductFeatures;
    },

};

export default new Vuex.Store({
    state,
    mutations,
});