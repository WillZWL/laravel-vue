<template>
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
      <div class="x_title">
        <h2>Filters</h2>
        <ul class="nav navbar-right panel_toolbox">
          <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <div class="x_content">
        <form name="fm" class="form_search form-horizontal form-label-left" onsubmit="return false">
          <input type="hidden" name="type" value="ACCELERATOR">
          <div class="row">
            <div class="col-md-6 col-xs-12">
              <div class="form-group">
                <label class="control-label col-md-4">Payment Gateway: </label>
                <div class="col-md-6 col-xs-12">
                  <select name="payment_gateway" class="form-control payment_gateway"  required="required">
                    <option></option>
                    <option v-for="paymentGateway in paymentGateways" value="{{paymentGateway.id}}">{{paymentGateway.name}}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xs-12">
              <div class="form-group">
                <label class="control-label col-md-4">Business Type: </label>
                <div class="col-md-6 col-xs-12">
                  <select name="biz_type" class="form-control"  required="required">
                    <option></option>
                    <template v-for="(index, marketplace) in marketplaces">
                      <option value="{{ marketplace }}">{{ marketplace }}</option>
                    </template>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-xs-12">
              <div class="form-group">
                <label class="control-label col-md-4">So No: </label>
                <div class="col-md-6 col-xs-12">
                  <input type="text" name="so_no" class="form-control">
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xs-12">
              <div class="form-group">
                <label class="control-label col-md-4">Platform Order No: </label>
                <div class="col-md-6 col-xs-12">
                  <input type="text" name="platform_order_id" class="form-control">
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-xs-12">
              <div class="form-group">
                <label class="control-label col-md-4">Transaction ID: </label>
                <div class="col-md-6 col-xs-12">
                  <input type="text" name="txn_id" class="form-control">
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xs-12">
              <div class="form-group">
                <label class="control-label col-md-4">Validation Status: </label>
                <div class="col-md-6 col-xs-12">
                  <select name="validation_status" class="form-control"  required="required">
                    <option></option>
                    <option v-for="(index, validation_status) in validation_status_list" value="{{index}}">{{validation_status}}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group col-md-12">
            <div class="col-md-12 col-sm-12 col-xs-12 col-md-offset-5">
              <input type="button" class="btn btn-success" name="search" value="Search" @click="search()">&nbsp;&nbsp;
              <input type="button" class="btn btn-primary" value="Download" @click="downloadExcel()">
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { fetchPaymentGatewayLists, orderSearch } from '../../../vuex/actions';
import { getMarketplaces, getPaymentGatewayList } from '../../../vuex/getters';
import {api_url, ACCESS_TOKEN} from '../../../js/vue.config.js'
export default {
  props: [
      'validation_status_list'
  ],
  vuex: {
    actions: {
      fetchPaymentGatewayLists,
      search: orderSearch
    },
    getters: {
      marketplaces: getMarketplaces,
      paymentGateways: getPaymentGatewayList
    }
  },
  data () {
    return {
      api_url: api_url
    }
  },
  ready() {
    this.fetchPaymentGatewayLists();
    $(".select2").select2({
      placeholder: "",
      allowClear: true
    });
  },
  methods: {
    downloadExcel () {
      var queryStr = $("form[name='fm']").serialize();
      var url = this.api_url + 'orders-settlement?' + queryStr + '&download=1&access_token='+ACCESS_TOKEN
      window.open(url);
    }
  }
}
</script>
