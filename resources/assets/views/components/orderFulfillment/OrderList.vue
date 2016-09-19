<style>
  table {
    font-size:10px;
  }
  table .fa-search-plus {
    font-size: 16px;
  }
</style>
<template>
  <table id="{{id}}" class="table table-striped table-bordered bulk_action jambo_table" width="100%">
    <thead>
      <tr>
        <th>
          <input type="checkbox" id="check-all" class="flat">
        </th>
        <template v-if="id == 'table_content1'">
          <th v-for="header in new_headers">{{header}}</th>
        </template>
        <template v-if="id == 'table_content2'">
          <th v-for="header in ready_headers">{{header}}</th>
        </template>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items">
        <td class="a-center td_checkbox">
          <input type="checkbox" class="flat" name="id" value="">
        </td>
        <td>{{item.platform_type}}</td>
        <td>{{item.biz_type}}</td>
        <td>{{item.merchant}}</td>
        <td>{{item.platform_id}}</td>
        <td>
          <a data-toggle="modal" data-target=".overview{{$index}}-{{id}}">
            {{item.lazada_so_no}}&nbsp;&nbsp;<i class="fa fa-search-plus"></i>
          </a>
          <div class="modal fade overview{{$index}}-{{id}}" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
            <!-- detail overview-->
            <order-detail :index="$index"></order-detail>
          </div>
        </td>
        <td>{{item.esg_so_no}}</td>
        <td>{{item.order_create_date}}</td>
        <td>{{item.update_date}}</td>
        <td>{{item.payment_method}}</td>
        <td>{{item.price}}</td>
        <td>{{item.order_qty}}</td>
        <td v-if="id == 'table_content1'">
          <select class="form-control">
            <option value=""></option>
            <option value="">shipped</option>
            <option value="">canceled</option>
            <option value="">returned</option>
            <option value="">delivered</option>
            <option value="">delivered failed</option>
          </select>
        </td>
      </tr>
    </tbody>
  </table>

</template>
<script>
  import OrderDetail from './OrderDetail.vue'
  export default {
    components: {
      OrderDetail
    },
    props: [
      'id',
      'items'
    ],
    ready() {
      this.init()
    },
    data() {
      return {
        new_headers: [
          'Platform Type',
          'BizType',
          'Merchant',
          'Platform',
          'Lazada Order No',
          'ESG Order No',
          'Order Date',
          'Updated Date',
          'Payment Method',
          'Price',
          'Order QTY',
          'Action'
        ],
        ready_headers: [
          'Platform Type',
          'BizType',
          'Merchant',
          'Platform',
          'Lazada Order No',
          'ESG Order No',
          'Order Date',
          'Updated Date',
          'Payment Method',
          'Price',
          'Order QTY'
        ]
      }
    },
    methods: {
      init() {
        var table_selector = '#'+this.id;
        var table = $(table_selector).DataTable({
          fixedHeader: true,
          bSort:false,
          buttons: []
        });
      }
    }
  }
</script>