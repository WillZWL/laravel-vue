<template>
  <div class="row">
    <order-filters></order-filters>
    <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="x_panel">
        <div class="x_content">
          <div class="" role="tabpanel" data-example-id="togglable-tabs">
            <ul id="myTab" class="nav nav-tabs bar_tabs" role="tablist">
              <li role="presentation" class="active"><a href="#tab_content1" id="pending-tab" role="tab" data-toggle="tab" aria-expanded="true">Pending</a>
              </li>
              <li role="presentation" class=""><a href="#tab_content2" role="tab" id="ready-tab" data-toggle="tab" aria-expanded="false">Ready To Ship</a>
              </li>
              <li role="presentation" class=""><a href="#tab_content3" role="tab" id="in-transit-tab" data-toggle="tab" aria-expanded="false">In Transit</a>
              <li role="presentation" class=""><a href="#tab_content4" role="tab" id="shipped-tab" data-toggle="tab" aria-expanded="false">Shipped</a>
              </li>
              </li>
            </ul>
            <div id="myTabContent" class="tab-content">
              <div role="tabpanel" class="tab-pane fade active in" id="tab_content1" aria-labelledby="pending-tab">
                <order-list :id="'table_content1'"></order-list>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="tab_content2" aria-labelledby="ready-tab">
                <order-list :id="'table_content2'"></order-list>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="tab_content3" aria-labelledby="in-transit-tab">
                <order-list :id="'table_content3'"></order-list>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="tab_content4" aria-labelledby="shipped-tab">
                <order-list :id="'table_content4'"></order-list>
              </div>

              <div class="x_content">
                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Print Select Delivery Note"><i class="fa fa-print"></i>  Delivery Note</button>
                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Print Select Custom Invoice"><i class="fa fa-print"></i>  Custom Invoice</button>
                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Print Select Invoice"><i class="fa fa-print"></i>  Invoice</button>
                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Allocate those Orders"><i class="fa fa-send"></i>  Allocate Orders</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import OrderFilters from './orderFulfillment/OrderFilters.vue'
  import OrderList from './orderFulfillment/OrderList.vue'
  export default {
    components: {
      OrderList,
      OrderFilters
    }
  }
</script>