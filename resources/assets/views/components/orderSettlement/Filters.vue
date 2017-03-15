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
          <div class="row">
            <div class="col-md-6 col-xs-12">
              <div class="form-group">
                <label class="control-label col-md-4">Payment Gateway: </label>
                <div class="col-md-6 col-xs-12">
                  <select name="payment_gateway" class="form-control"  required="required">
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
                <label class="control-label col-md-4">Transaction ID: </label>
                <div class="col-md-6 col-xs-12">
                  <input type="text" name="txn_id" class="form-control">
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xs-12">
              <div class="form-group">
                <label class="control-label col-md-4">So No: </label>
                <div class="col-md-6 col-xs-12">
                  <input type="text" name="so_no" class="form-control">
                </div>
              </div>
            </div>
          </div>
<!--           <div class="row">
            <div class="col-md-6 col-xs-12">
              <div class="form-group">
                <label class="control-label col-md-4">Order Create Date: </label>
                <div class="col-md-6 col-xs-12">
                  <input type="text" name="order_create_date" class="form-control">
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xs-12">
              <div class="form-group">
                <label class="control-label col-md-4">Dispatch Date: </label>
                <div class="col-md-6 col-xs-12">
                  <input type="text" name="dispatch_date" class="form-control">
                </div>
              </div>
            </div>
          </div> -->
          <div class="form-group col-md-12">
            <div class="col-md-12 col-sm-12 col-xs-12 col-md-offset-5">
              <input type="button" class="btn btn-success" name="search" value="Search" @click="search()">&nbsp;&nbsp;
              <button type="button" class="btn btn-primary" @click=""><i class="fa fa-print"></i> Download</button>
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
export default {
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
  ready() {
    this.fetchPaymentGatewayLists();
    $(".select2").select2({
      placeholder: "",
      allowClear: true
    });
  }
}
</script>
