<template>
  <div class="row">
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
        </div>
      </div>
    </div>
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
                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Print Select Delivery Note">Delivery Note</button>
                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Print Select Custom Invoice">Custom Invoice</button>
                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Print Select Invoice">Invoice</button>
                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Allocate those Orders">Allocate Orders</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import OrderList from './orderFulfillment/OrderList.vue'
  export default {
    components: {
      OrderList
    }
  }
</script>