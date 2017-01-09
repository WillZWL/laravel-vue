<template>
  <div class="container">
    <section class="search-form">
      <form name="export-sales-report-form" action="" onsubmit="return false" method="GET" class="form-horizontal" role="form">
        <div class="form-group col-sm-6 col-xs-12">
            <label class="control-label col-md-4">Marketplace ID
            </label>
            <div class="col-md-8 col-xs-12">
                <select class="select2_single form-control" tabindex="-1" name="marketplace_short_id">
                    <option value=""></option>
                    <option v-for="marketplace in marketplaceLists" value="{{marketplace.marketplace_short_id}}">{{marketplace.marketplace_id}}</option>
                </select>
            </div>
        </div>

<!--         <div class="form-group col-sm-6 col-xs-12">
            <label class="control-label col-md-4">Merchant</label>
            <div class="col-md-8 col-xs-12">
                <select class="select2_single form-control" tabindex="-1" name="merchant_id">
                    <option value=""></option>
                    <option v-for="merchant in merchantLists" value="{{merchant.merchant_id}}">{{merchant.merchant_id}}</option>
                </select>
            </div>
        </div> -->
        <div class="form-group col-sm-6 col-xs-12">
            <label class="control-label col-md-4">Country</label>
            <div class="col-md-8 col-xs-12">
                <select class="select2_single form-control" tabindex="-1" name="country_id">
                    <option value=""></option>
                    <option v-for="country in countryLists" value="{{country.country_id}}">{{country.country_name}}</option>
                </select>
            </div>
        </div>

        <!-- <div class="form-group col-sm-6 col-xs-12">
            <label class="control-label col-md-4">Brand</label>
            <div class="col-md-8 col-xs-12">
                <select class="select2_single form-control" tabindex="-1" name="brand_id">
                    <option></option>
                    <option v-for="brand in brandLists | orderBy 'brand_name'" value="{{brand.brand_id}}">{{brand.brand_name}}</option>
                </select>
            </div>
        </div> -->

        <div class="form-group col-sm-6 col-xs-12">
            <label class="control-label col-md-4">Date Type</label>
            <div class="col-md-8 col-xs-12">
                <div class="radio">
                    <label>
                        <input type="radio" checked="checked" value="dispatch_date" name="date_type"> Use Dispatch Date
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" value="settlement_date" name="date_type"> Use Settlement Date
                    </label>
                </div>
            </div>
        </div>


        <div class="form-group col-sm-6 col-xs-12">
            <label class="control-label col-md-4">Start Date</label>
            <div class="col-md-8 col-xs-12">
                <datepicker :format="format" :input-class="inputClass" name="start_date"></datepicker>
            </div>
        </div>

        <div class="form-group col-sm-6 col-xs-12">
            <label class="control-label col-md-4">End Date</label>
            <div class="col-md-8 col-xs-12">
                <datepicker :format="format" :input-class="inputClass" name="end_date"></datepicker>
            </div>
        </div>

        <div class="form-group col-md-12">
            <div class="col-md-12 col-sm-12 col-sm-offset-3">
                <input type="button" class="btn btn-success" name="search" value="Search" @click="submitForm()">
            </div>
        </div>

      </form>
    </section>
  </div>
</template>
<script>
import Datepicker from 'vuejs-datepicker';
import {api_url} from '../../../js/vue.config.js';
import {
    fetchMerchantLists,
    fetchBrandLists,
    fetchMarketplaceLists,
    fetchCountryLists,
    exportAcceleratorSalesReport
} from '../../../vuex/actions';
import {
    getMerchantLists,
    getBrandLists,
    getMarketplaceLists,
    getCountryLists
} from '../../../vuex/getters';

export default {
    vuex: {
        actions: {
            fetchMerchantLists,
            fetchBrandLists,
            fetchMarketplaceLists,
            fetchCountryLists,
            submitForm: exportAcceleratorSalesReport,
        },
        getters: {
            brandLists: getBrandLists,
            merchantLists: getMerchantLists,
            countryLists: getCountryLists,
            marketplaceLists: getMarketplaceLists,
        }
    },
    ready() {
        this.fetchBrandLists();
        this.fetchMerchantLists();
        this.fetchMarketplaceLists();
        this.fetchCountryLists();
    },
    components: {
        Datepicker
    },
    data() {
        return {
            format: 'yyyy-MM-dd',
            disable: {},
            inputClass: 'form-control'
        }
    }
}

</script>
