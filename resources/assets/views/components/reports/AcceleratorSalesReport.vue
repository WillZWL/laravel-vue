<template>
  <div class="container">
  <section class="search-form">
    <form name="export-sales-report-form" action="" onsubmit="return false" method="GET" class="form-horizontal" role="form">
    <div class="form-group col-sm-6 col-xs-12">
      <label class="control-label col-md-4">Business Type</label>
      <div class="col-md-8 col-xs-12">
        <multiselect
          id="marketplace"
          :selected="selectedMarketplace"
          :options="marketplaces"
          label="value"
          @update="updateSelectedMarketplace">
        </multiselect>
      </div>
    </div>

    <div class="form-group col-sm-6 col-xs-12">
      <label class="control-label col-md-4">Marketplace Account</label>
      <div class="col-md-8 col-xs-12">
        <multiselect
          id="account"
          :options="accounts"
          :selected="selectedAccounts"
          :multiple="true"
          :hide-selected="true"
          :close-on-select="false"
          @update="updateSelectedAccounts">
        </multiselect>
      </div>
    </div>

    <div class="form-group col-sm-6 col-xs-12">
      <label class="control-label col-md-4">Country</label>
      <div class="col-md-8 col-xs-12">
        <multiselect
          id="country"
          :options="storeCountries"
          :selected="selectedCountries"
          :multiple="true"
          :hide-selected="true"
          :close-on-select="false"
          @update="updateSelectedCountries">
        </multiselect>
      </div>
    </div>

    <div class="form-group col-sm-6 col-xs-12">
      <label class="control-label col-md-4">Business Unit</label>
      <div class="col-md-8 col-xs-12">
        <select class="select2_single form-control" v-model='business_unit' name="business_unit">
          <option value="1">Brands</option>
          <option value="2">Tranding</option>
          <option value="3">Private Label</option>
        </select>
      </div>
    </div>

    <div class="form-group col-sm-6 col-xs-12">
      <label class="control-label col-md-4">Currency</label>
      <div class="col-md-8 col-xs-12">
        <select class="select2_single form-control" v-model='currency' tabindex="-1" name="currency">
          <option value=""></option>
          <option v-for="currency in storeCurrencies" value="{{currency}}">{{ currency }}</option>
        </select>
      </div>
    </div>

    <div class="form-group col-sm-6 col-xs-12">
      <label class="control-label col-md-4">Date Type</label>
      <div class="col-md-8 col-xs-12">
        <div class="radio">
          <label>
            <input type="radio" v-model="data_type" checked="checked" value="order_create_date" name="date_type"> Use Order Create Date
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" v-model="data_type" value="create_on" name="date_type"> Use Import Date
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" v-model="data_type" value="dispatch_date" name="date_type"> Use Dispatch Date
          </label>
        </div>
      </div>
    </div>

    <div class="form-group col-sm-6 col-xs-12">
      <label class="control-label col-md-4">Start Date</label>
      <div class="col-md-8 col-xs-12">
        <datepicker @input="selectedStartDate" :format="format" :input-class="inputClass" name="start_date"></datepicker>
      </div>
    </div>

    <div class="form-group col-sm-6 col-xs-12">
      <label class="control-label col-md-4">End Date</label>
      <div class="col-md-8 col-xs-12">
        <datepicker @input="selectedEndDate" :format="format" :input-class="inputClass" name="end_date"></datepicker>
      </div>
    </div>

    <div class="form-group col-sm-6 col-xs-12">
      <label class="control-label col-md-4">Operator</label>
      <div class="col-md-8 col-xs-12">
        <multiselect
          id="operator"
          :selected="selectedOperator"
          :options="operators"
          key="id"
          label="username"
          @update="updateSelectedOperator">
        </multiselect>
      </div>
    </div>

    <div class="form-group col-sm-6 col-xs-12">
      <label class="control-label col-md-4">Buyer</label>
      <div class="col-md-8 col-xs-12">
        <multiselect
          id="buyer"
          :selected="selectedBuyer"
          :options="buyers"
          key="id"
          label="username"
          @update="updateSelectedBuyer">
        </multiselect>
      </div>
    </div>

    <div class="form-group col-md-12">
      <div class="col-md-12 col-sm-12 col-sm-offset-5">
        <input type="button" class="btn btn-success" name="search" value="Search" @click="submitForm()">
      </div>
    </div>

    </form>
  </section>
  </div>
</template>
<script>
import Datepicker from 'vuejs-datepicker';
import { Multiselect } from 'vue-multiselect';
import { api_url } from '../../../js/vue.config.js';
import {
  fetchMerchantLists,
  // fetchBrandLists,
  fetchMarketplaceLists,
  // fetchCountryLists,
  fetchMarketplaceStores,
  fetchUserLists,
  exportAcceleratorSalesReport,
} from '../../../vuex/actions';
import {
  getMerchantLists,
  getUserLists,
  // getBrandLists,
  getMarketplaceLists,
  // getCountryLists,
  getMarketplaceStores,
} from '../../../vuex/getters';

export default {
  name: 'Accelerator-Sales-Report-Search-Form',
  vuex: {
    actions: {
      fetchMerchantLists,
      // fetchBrandLists,
      fetchMarketplaceLists,
      fetchUserLists,
      // fetchCountryLists,
      fetchMarketplaceStores,
      exportAcceleratorSalesReport,
    },
    getters: {
      // brandLists: getBrandLists,
      merchantLists: getMerchantLists,
      users: getUserLists,
      // countryLists: getCountryLists,
      marketplaceLists: getMarketplaceLists,
      marketplaceStores: getMarketplaceStores,
    }
  },
  ready() {
    // this.fetchBrandLists();
    this.fetchUserLists(["ax_buyer","ax_operator"]);
    this.fetchMerchantLists();
    this.fetchMarketplaceLists();
    // this.fetchCountryLists();
    this.fetchMarketplaceStores();
  },
  components: {
    Datepicker,
    Multiselect
  },

  data() {
    return {
      format: 'yyyy-MM-dd',
      disable: {},
      inputClass: 'form-control',

      selectedMarketplace: null,
      selectedAccounts: [],
      selectedCountries: [],
      business_unit: 3,
      currency: '',
      data_type: null,
      start_date: null,
      end_date: null,
      selectedBuyer: null,
      selectedOperator: null,
    }
  },
  computed: {
    marketplaces: function () {
      var marketplaces = [{
        'short_id': 'AZ',
        'value': 'AMAZON'
      },{
        'short_id': 'LZ',
        'value': 'LAZADA'
      },{
        'short_id': 'AX',
        'value': 'ALIEXPRESS'
      },{
        'short_id': 'AL',
        'value': 'ALLEGRO'
      },{
        'short_id': 'CD',
        'value': 'CDISCOUNT'
      },{
        'short_id': 'EB',
        'value': 'EBAY'
      },{
        'short_id': 'FN',
        'value': 'FNAC'
      },{
        'short_id': 'LI',
        'value': 'LINIO'
      },{
        'short_id': 'ML',
        'value': 'MERCADOLIBRE'
      },{
        'short_id': 'NE',
        'value': 'NEWEGG'
      },{
        'short_id': 'PM',
        'value': 'PRICEMINISTER'
      },{
        'short_id': 'QO',
        'value': 'QOO10'
      },{
        'short_id': 'RA',
        'value': 'RAKUTEN'
      },{
        'short_id': 'TG',
        'value': 'TANGA'
      }];

      // var marketplaces = [];
      // this.marketplaceStores.forEach(function (store) {
      //   if (! marketplaces.includes(store.marketplace)) {
      //     marketplaces.push(store.marketplace);
      //   }
      // });

      return marketplaces;
    },
    accounts: function () {
      var accounts = [];
      this.marketplaceStores.forEach(function (store) {
        if (! accounts.includes(store.store_code)) {
          accounts.push(store.store_code);
        }
      });

      return accounts;
    },
    storeCountries: function () {
      var storeCountries = [];
      this.marketplaceStores.forEach(function (store) {
        if (! storeCountries.includes(store.country)) {
          storeCountries.push(store.country);
        }
      });

      return storeCountries;
    },

    storeCurrencies: function () {
      var storeCurrencies = [];
      this.marketplaceStores.forEach(function (store) {
        if (! storeCurrencies.includes(store.currency)) {
          storeCurrencies.push(store.currency);
        }
      });

      return storeCurrencies;
    },

    buyers: function () {
      var buyers = [];
      this.users.forEach(function (user) {
        if ( (user.role_id == 'ax_buyer') && (! buyers.includes[user])) {
          buyers.push(user);
        }
      });

      return buyers;
    },

    operators: function () {
      var operators = [];
      this.users.forEach(function (user) {
        if ((user.role_id == 'ax_operator') && (! operators.includes[user])) {
          operators.push(user);
        }
      });

      return operators;
    }
  },
  methods: {
    updateSelectedMarketplace: function (newSelected) {
      this.selectedMarketplace = newSelected;
    },
    updateSelectedAccounts: function (newSelected) {
      this.selectedAccounts = newSelected;
    },
    updateSelectedCountries: function (newSelected) {
      console.log(newSelected);
      this.selectedCountries = newSelected;
    },
    selectedStartDate: function (newSelected) {
      console.log(newSelected.toString());
      this.start_date = newSelected.toString();
    },
    selectedEndDate: function (newSelected) {
      this.end_date = newSelected.toString();
    },
    updateSelectedBuyer: function (newSelected) {
      this.selectedBuyer = newSelected;
    },
    updateSelectedOperator: function (newSelected) {
      this.selectedOperator = newSelected;
    },
    submitForm () {
      var queryString = 'business_unit=' + this.business_unit
                      + '&selectedAccounts=' + this.selectedAccounts
                      + '&selectedCountries=' + this.selectedCountries
                      + '&currency=' + this.currency
                      + '&date_type=' + this.data_type
                      + '&start_date=' + $('input[name=start_date]')[0].value
                      + '&end_date=' + $('input[name=end_date]')[0].value;
      if (this.selectedMarketplace) {
        queryString += '&selectedMarketplace=' + this.selectedMarketplace.short_id
      }
      if (this.selectedBuyer) {
        queryString += '&selectedBuyer=' + this.selectedBuyer.id
      }
      if (this.selectedOperator) {
        queryString += '&selectedOperator=' + this.selectedOperator.id;
      }
      this.exportAcceleratorSalesReport(queryString);
    }
  }

}
</script>
