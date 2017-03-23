<template>
    <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
      <div class="x_content">
        <div class="modal fade custom_header" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
            <customheader :headers="headers"></customheader>
        </div>
        <form name='fm_orders' class="post_orders">
            <b class="btn btn-success pull-right" data-toggle="modal" data-target=".custom_header">Header</b>
            <table id="order-list" class="table table-striped table-bordered bulk_action jambo_table" width="100%">
              <thead>
                <tr>
                    <th>
                      <input type="checkbox" id="check-all" class="flat">
                    </th>
                    <th v-for="header in headers">{{ header }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items">
                    <td class="a-center td_chkbox{{item.so_no}}">
                        <input type="checkbox" name="so_no" class="flat" value="{{item.so_no}}">
                    </td>
                    <td>{{item.payment_gateway_id}}</td>
                    <td>{{item.biz_type}}</td>
                    <td>{{item.txn_id}}</td>
                    <td>{{item.so_no}}</td>
                    <td>{{item.platform_order_id}}</td>
                    <td>{{item.order_create_date}}</td>
                    <td>{{item.dispatch_date}}</td>
                    <td>{{item.currency_id}}</td>
                    <td>{{item.amount}}</td>
                    <td>{{item.estimated_settlement_amount}}</td>
                    <td>{{item.validation_status | convertValidationStatus}}</td>
                    <td>{{item.estimated_settlement_date}}</td>
                    <td>{{item.marketplace_contact_name}}</td>
                    <td>{{item.marketplace_email}}</td>
                    <td>{{item.marketplace_contact_phone}}</td>
                </tr>
              </tbody>
            </table>

            <pagination-component :meta="meta"></pagination-component>
            <div class="navbar navbar-default navbar-fixed-bottom">
                <div class="x_panel">
                  <div class="form-group">
                    <div class="col-md-12 col-sm-12 col-xs-12 col-md-offset-4">
                        <div class="col-md-2 col-xs-4">
                            <select name='validation_status' class="form-control validation_status">
                                <option v-for="(index, validation_status) in validation_status_list" value='{{index}}'>{{validation_status}}</option>
                            </select>
                        </div>
                        <input type="button" class="btn btn-success" value="Update Validation Status" @click="updateStatus()">
                        <input type="button" name="action" class="btn btn-primary" value="Action" data-toggle="modal" data-target=".action-modal" @click="action"><br/>
                    </div>
                  </div>
                </div>
            </div>
            <action-modal :marketplace="marketplace" :payment_gateway="payment_gateway" :modal_class="modal_class"></action-modal>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
    import {api_url} from '../../../js/vue.config.js'
    import Customheader from './CustomHeader.vue'
    import PaginationComponent from '../common/PaginationComponent.vue'
    import ActionModal from './ActionModal.vue'
    import {initOrderListDatatable, orderSearch} from '../../../vuex/actions';
    import {getOrderLists, getOrderMeta} from '../../../vuex/getters';
    export default {
        props: [
            'validation_status_list'
        ],
        components: {
            Customheader,
            ActionModal,
            PaginationComponent
        },
        vuex: {
            actions: {
                initDatatable: initOrderListDatatable,
                search: orderSearch
            },
            getters: {
                items: getOrderLists,
                meta: getOrderMeta
            }
        },
        ready() {
            this.initDatatable()
        },
        data() {
            return {
                headers: {
                    1: 'Payment Gateway',
                    2: 'Business Type',
                    3: 'Transaction ID',
                    4: 'SO Number',
                    5: 'Platform Order No',
                    6: 'Order Create Date',
                    7: 'Dispatch Date',
                    8: 'Currency',
                    9: 'Amount',
                    10: 'Estimated Settlement Amount',
                    11: 'Validation Status',
                    12: 'Estimated Settlement Date',
                    13: 'Marketplace Main Contact Person',
                    14: 'Marketplace Email address(es)',
                    15: 'Marketplace Contact Number'
                },
                modal_class: 'action-modal',
                payment_gateway: {},
                marketplace: {}
            }
        },
        methods: {
            pagination: function (url) {
                var query_str = $("form[name='fm']").serialize() + '&' +$.url('query', url)
                this.search(query_str)
            },
            updateStatus: function () {
                var orders =  $('input:checkbox[name=so_no]:checked');
                var post_data = {};
                var so_no_list = [];
                $.each(orders, function() {
                    var row = {}
                    so_no_list.push(this.value);
                });
                var validation_status = $('.validation_status').val();
                if (so_no_list.length > 0) {
                    post_data.orders = so_no_list
                    post_data.validation_status = validation_status
                    this.$http.post(
                        api_url + 'order-settlement/bulk-update',
                        post_data
                    ).then(function(response){
                        $.isLoading({ text: "Send Success", class:"fa fa-check" });
                        this.search();
                    }).then(function(){
                        $.isLoading("hide");
                    }).catch(function(){
                        $.isLoading({ text: "Error 500, Internal Server Error", class:"fa fa-exclamation-triangle" });
                        setTimeout( function(){
                            $.isLoading("hide");
                        }, 3000);
                    });
                } else {
                    alert('Please Select Order first');
                }
            },
            action: function () {
                var payment_gateway_id = $(".payment_gateway").val();
                if (payment_gateway_id) {
                    this.modal_class = 'action-modal'
                    $.isLoading({ text: "Loading", class:"fa fa-refresh fa-spin" });
                    this.$http.get(api_url + 'payment-gateways?payment_gateway='+ payment_gateway_id)
                    .then(function (response) {
                        this.payment_gateway = response.data.data[0]
                        var marketplace_id = response.data.data[0].marketplace_id
                        this.$http.get(api_url + 'marketplace?marketplace=' + marketplace_id)
                        .then(function (response) {
                            $.isLoading("hide");
                            this.marketplace = response.data.data[0]
                        })
                        .catch(function(){
                            $.isLoading({ text: "Error 500, Internal Server Error", class:"fa fa-exclamation-triangle" });
                            setTimeout( function(){
                                $.isLoading("hide");
                            }, 3000)
                        })
                    }).catch(function(){
                        $.isLoading({ text: "Error 500, Internal Server Error", class:"fa fa-exclamation-triangle" });
                        setTimeout( function(){
                            $.isLoading("hide");
                        }, 3000)
                    })
                } else {
                    this.modal_class = '';
                    alert('Please select a payment gateway first');
                }
            }
        },
        filters: {
            convertValidationStatus: function (value) {
                return this.validation_status_list[value]
            }
        }
    }
</script>
