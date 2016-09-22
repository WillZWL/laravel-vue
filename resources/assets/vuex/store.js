import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
    brandLists: [],
    brandManagerLists: [],
    marketplaceLists: [],
    merchantLists: [],
    countryLists: [],
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

    FETCH_PRICEOVERVIEW_LISTS(state, priceOverviewLists, priceOverviewMeta) {
        state.priceOverviewLists = priceOverviewLists;
        state.priceOverviewMeta = priceOverviewMeta;
    },
};

export default new Vuex.Store({
    state,
    mutations,
});