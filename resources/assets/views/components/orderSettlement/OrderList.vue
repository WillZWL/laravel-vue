<template>
    <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
      <div class="x_content">
        <div class="modal fade custom_header" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
            <customheader :headers="headers"></customheader>
        </div>
        <table id="order-list" class="table table-striped table-bordered bulk_action jambo_table" width="100%">
          <thead>
            <tr>
                <th>
                  <input type="checkbox" id="check-all" class="flat">
                </th>
                <th v-for="header in headers">{{ header }}</th>
                <th width="">
                    <b class="btn btn-success pull-right" data-toggle="modal" data-target=".custom_header">Header</b>
                </th>
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
                <td>{{item.estimated_settlement_date}}</td>
                <td>{{item.marketplace_contact_name}}</td>
                <td>{{item.marketplace_contact_phone}}</td>
                <td>{{item.marketplace_email}}</td>
                <td>
                    <input type="button" name="action" class="btn btn-primary" value="Action"><br/>
                    <input type="button" name="update" class="btn btn-primary" value="Update Validation Status">
                </td>
            </tr>
          </tbody>
        </table>
        <pagination-component :meta="meta"></pagination-component>
      </div>
    </div>
  </div>
</template>
<script>
    import Customheader from './CustomHeader.vue'
    import PaginationComponent from '../common/PaginationComponent.vue'
    import {initOrderListDatatable, orderSearch} from '../../../vuex/actions';
    import {getOrderLists, getOrderMeta} from '../../../vuex/getters';
    export default {
        components: {
            Customheader,
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
                    5: 'Platform Order Number',
                    6: 'Order Create Date',
                    7: 'Dispatch Date',
                    8: 'Currency',
                    9: 'Amount',
                    10: 'Estimated Settlement Amount',
                    11: 'Estimated Settlement Date',
                    12: 'Marketplace Main Contact Person',
                    13: 'Marketplace Email address(es)',
                    14: 'Marketplace Contact Number'
                },
                defalut_hidden_columns: [11, 12, 13, 14],
            }
        },
        methods: {
            pagination: function (url) {
                var query_str = $.url('query', url)
                this.search(query_str)
            }
        }
    }
</script>
