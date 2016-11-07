<style>
  .input_sm {
    width: 50px;
  }
  #datatable-fixed-header td:nth-child(4), #datatable-fixed-header td:nth-child(5) {width: 150px;}
  #datatable-fixed-header td:nth-child(21), #datatable-fixed-header td:nth-child(22) {width: 100px;}
  #datatable-fixed-header {
    font-size:10px;
  }
</style>
<template>
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
      <div class="x_title">
        <h2>Overview</h2>
        <ul class="nav navbar-right panel_toolbox">
          <li></li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <div class="x_content">
        <div class="modal fade custom_header" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
          <customheader :headers="headers"></customheader>
        </div>
        <form name="fm_price" class="post_price">
          <table id="datatable-fixed-header" class="table table-striped table-bordered bulk_action jambo_table" width="100%">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" id="check-all" class="flat">
                </th>
                <th v-for="header in headers">{{header}}</th>
                <th>
                  <b class="btn btn-success" data-toggle="modal" data-target=".custom_header">Header</b>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items">
                <td class="a-center td_checkbox{{item.id}}">
                  <input v-if="item.selected_delivery_type != ''" type="checkbox" class="flat" name="id" value="{{item.id}}">
                </td>
                <td>{{item.marketplace_id}}</td>
                <td>{{item.country_id}}</td>
                <td>{{item.master_sku}}</td>
                <td>{{item.esg_sku}}</td>
                <td>{{item.marketplace_sku}}</td>
                <td>{{item.product_name}}</td>
                <td>{{item.sourcing_status}}</td>
                <td>{{item.surplus_quantity}}</td>
                <td>
                  <div class="col-md col-xs-12">
                    <select class="form-control delivery_type{{item.id}}"
                            v-if="item.available_delivery_type"
                            v-on:change="changeDeliveryType(item)">
                        <option value=""></option>
                      <template v-for="(key, delivery_type) in item.available_delivery_type">
                        <option value="{{key}}" v-if="key == item.selected_delivery_type" selected> {{key}} </option>
                        <option value="{{key}}" v-else>{{key}}</option>
                      </template>
                    </select>
                  </div>
                </td>
                <td v-if="typeof (item.warehouse.ETRADE) != 'undefined'">
                  {{item.warehouse.ETRADE.inventory}}
                </td>
                <td v-else></td>
                <td v-if="typeof (item.warehouse.ES_HK) != 'undefined'">
                  {{item.warehouse.ES_HK.inventory}}
                </td>
                <td v-else></td>
                <td v-if="typeof (item.warehouse.ES_DGME) != 'undefined'">
                  {{item.warehouse.ES_DGME.inventory}}
                </td>
                <td v-else></td>
                <td v-if="typeof (item.warehouse.CV_AMZ_FBA_UK) != 'undefined'">
                  {{item.warehouse.CV_AMZ_FBA_UK.inventory}}
                </td>
                <td v-else></td>
                <td v-if="typeof (item.warehouse.CV_AMZ_FBA_US) != 'undefined'">
                  {{item.warehouse.CV_AMZ_FBA_US.inventory}}
                </td>
                <td v-else></td>
                <td v-if="typeof (item.warehouse.ESG_AMZN_JP_FBA) != 'undefined'">
                  {{item.warehouse.ESG_AMZN_JP_FBA.inventory}}
                </td>
                <td v-else></td>
                <td v-if="typeof (item.warehouse.ESG_AMZN_UK_FBA) != 'undefined'">
                  {{item.warehouse.ESG_AMZN_UK_FBA.inventory}}
                </td>
                <td v-else></td>
                <td v-if="typeof (item.warehouse.ESG_AMZN_US_FBA) != 'undefined'">
                  {{item.warehouse.ESG_AMZN_US_FBA.inventory}}
                </td>
                <td v-else></td>
                <td v-if="typeof (item.warehouse.PX_AMZN_FBA_UK) != 'undefined'">
                  {{item.warehouse.PX_AMZN_FBA_UK.inventory}}
                </td>
                <td v-else></td>
                <td>
                    <input type="text" name="listing_quantity" class="input_sm listing_quantity{{item.id}}" value="{{item.listing_quantity}}">
                </td>
                <td></td>
                <td>
                  <input type="text" value="{{item.selling_price}}" class="input_sm selling_price{{item.id}}" v-on:change="getProfitAndMargin(item)">
                </td>
                <td>
                  <div class="col-md col-xs-12">
                    <select class="form-control listing_status{{item.id}}">
                      <template v-if="'Y' == item.listing_status">
                        <option value="Y" selected>Y</option>
                        <option value="N">N</option>
                      </template>
                      <template v-else>
                        <option value="Y">Y</option>
                        <option value="N" selected>N</option>
                      </template>
                    </select>
                  </div>
                </td>
                <td v-if="(item.selected_delivery_type != '') && (item.available_delivery_type[item.selected_delivery_type] !== undefined)">

                  <span class="text-danger"
                        v-if="item.available_delivery_type[item.selected_delivery_type].margin < 0.0">
                    {{item.available_delivery_type[item.selected_delivery_type].profit}}
                  </span>
                  <span v-else>
                    {{item.available_delivery_type[item.selected_delivery_type].profit}}
                  </span>
                </td>
                <td v-else>N/A</td>
                <td v-if="(item.selected_delivery_type != '') && (item.available_delivery_type[item.selected_delivery_type] !== undefined)">
                  <span class="text-danger"
                        v-if="item.available_delivery_type[item.selected_delivery_type].margin < 0.0">
                    {{item.available_delivery_type[item.selected_delivery_type].margin}}%
                  </span>
                  <span v-else>
                    <span v-if="item.available_delivery_type.length == 0">N/A</span>
                    <span v-else>
                      {{item.available_delivery_type[item.selected_delivery_type].margin}}%
                    </span>
                  </span>
                </td>
                <td v-else>N/A</td>
                <td>{{item.selling_price}}</td>
                <td>{{item.selected_delivery_type}}</td>
                <td>{{item.listing_quantity}}</td>
                <td> {{ item.default_warehouse }} </td>
                <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: {{item.updated_at}}">
                  <input type="Button" value="Detail" class="btn btn-primary" data-toggle="modal" data-target=".overview-modal{{item.id}}">
                  <div class="modal fade overview-modal{{item.id}}" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
                    <!-- detail overview-->
                    <overviewmodal :item="item"></overviewmodal>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="dataTables_info" id="datatable-fixed-header_info" role="status" aria-live="polite"
                v-if="meta.pagination.current_page > 0">
            Total Records: {{meta.pagination.total}}, Per Page: {{meta.pagination.per_page}}, Total Pages: {{meta.pagination.total_pages}}
          </div>

          <div class="dataTables_paginate paging_simple_numbers" v-if="meta.pagination.current_page > 0">
            <ul class="pagination">
              <template v-if="meta.pagination.current_page == 1">
                <li class="paginate_button previous disabled">
                  <a aria-controls="datatable-fixed-header" tabindex="0">Previous</a>
                </li>
              </template>
              <template v-else>
                <li class="paginate_button previous">
                  <a aria-controls="datatable-fixed-header" tabindex="0" @click="pagination(meta.pagination.links.previous)">Previous</a>
                </li>
              </template>
              <li class="paginate_button current disabled">
                <a aria-controls="datatable-fixed-header" tabindex="0" >
                  Page {{meta.pagination.current_page}} of {{meta.pagination.total_pages}}
                </a>
              </li>
              <template v-if="meta.pagination.current_page < meta.pagination.total_pages">
                <li class="paginate_button next" id="datatable-fixed-header_next">
                  <a aria-controls="datatable-fixed-header" tabindex="0" @click="pagination(meta.pagination.links.next)">Next</a>
                </li>
              </template>
              <template v-else>
                <li class="paginate_button next disabled" id="datatable-fixed-header_next">
                  <a aria-controls="datatable-fixed-header" tabindex="0">Next</a>
                </li>
              </template>
            </ul>
          </div>

          <div class="navbar navbar-default navbar-fixed-bottom">
            <div class="x_panel">
              <div class="">
                <div class="col-md-12 col-sm-12 col-xs-12 col-md-offset-6">
                  <input type="button" class="btn btn-success" value="Update" @click="postForm()">
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {api_url} from '../../../js/vue.config.js'
  import Overviewmodal from './OverviewModal.vue'
  import Customheader from './CustomHeader.vue'
  import {
          initPriceOverviewDatatable,
          priceOverviewSearch,
          } from '../../../vuex/actions';
  import {
            getPriceOverviewLists,
            getPriceOverviewMeta,
          } from '../../../vuex/getters';
  export default {
    components: {
      Overviewmodal,
      Customheader
    },
    vuex: {
      actions: {
        initDatatable: initPriceOverviewDatatable,
        submitForm: priceOverviewSearch,
      },
      getters: {
        items: getPriceOverviewLists,
        meta: getPriceOverviewMeta,
      }
    },
    ready() {
      this.initDatatable()
    },
    data() {
      return {
        headers: {
          1:'Marketplace ID',
          2:'Country ID',
          3:'ESG Master SKU',
          4:'ESG SKU',
          5:'MP SKU',
          6:'Product Name',
          7:'Sourcing status',
          8:'Surplus QTY',
          9:'Delivery Type',
         10:'ETRADE QTY',
         11:'ES_HK QTY',
         12:'ES_DGME QTY',
         13:'CV_AMZ_FBA_UK',
         14:'CV_AMZ_FBA_US',
         15:'ESG_AMZN_JP_FBA',
         16:'ESG_AMZN_UK_FBA',
         17:'ESG_AMZN_US_FBA',
         18:'PX_AMZN_FBA_UK',
         19:'Listing QTY',
         20:'Item Cost',
         21:'Selling Price',
         22:'Listing Status',
         23:'Profit',
         24:'Margin',
         25:'Price',
         26:'delivery type',
         27:'listing quantity',
         28:'Default Warehouse'
        },
        api_url:api_url,
      }
    },
    methods: {
      changeDeliveryType: function(item) {
        var delivery_type = $(".delivery_type"+item.id).val();
        item.selected_delivery_type = delivery_type;
      },
      getProfitAndMargin: function(item) {
        var id = item.id;
        var delivery_type = $(".delivery_type"+item.id).val();
        var selling_price = $(".selling_price"+item.id).val();
        this.$http({
          url:this.api_url+"marketplace-product/estimate?id="+id+"&selling_price="+selling_price+"&access_token="+this.access_token,
          method: 'GET'
        }).then(function (response) {
          item.available_delivery_type = response.data;
        })
      },
      postForm: function() {
        var ids =  $('input:checkbox[name=id]:checked');
        var post_data = {};
        $.each(ids, function() {
          var row = {};
          row.id = this.value;
          row.price = $(".selling_price"+this.value).val();
          row.delivery_type = $(".delivery_type"+this.value).val();
          row.listing_status = $(".listing_status"+this.value).val();
          row.listing_quantity = $(".listing_quantity"+this.value).val();
          post_data[this.value] = row;
        });
        // console.log(post_data);
        this.$http.post(
          api_url+'marketplace-product/bulk-update',
          post_data
        ).then(function (response) {
            $.isLoading({ text: "Update Success", class:"fa fa-check" });
            setTimeout( function(){
                $.isLoading("hide");
            }, 2000);
        }).then(function(){
            $(".bulk_action input[name='id']").iCheck('uncheck');
        }).catch(function(){
            //todo
            $.isLoading({ text: "Error 500, Internal Server Error", class:"fa fa-exclamation-triangle" });
            setTimeout( function(){
                $.isLoading("hide");
            }, 3000);
        });
      },
      pagination: function(url) {
        var query_str = $.url('query', url);
        this.submitForm(query_str);
      }
    }
  };
  </script>