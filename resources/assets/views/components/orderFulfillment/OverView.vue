<style>
  .modal-body {
    font-size: 12px;
  }
</style>
<template>
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
         <h4 class="modal-title" id="myModalLabel2">Order Detail</h4>
      </div>
      <div class="modal-body">
        <div class="" role="tabpanel" data-example-id="togglable-tabs">
          <ul id="myTab" class="nav nav-tabs bar_tabs" role="tablist">
            <li role="presentation" class="active">
              <a href="#overview_tab1" id="customer-info-tab" role="tab" data-toggle="tab" aria-expanded="true">
                Customer Information
              </a>
            </li>
            <li role="presentation" class="">
              <a href="#overview_tab2" role="tab" id="item-list-tab" data-toggle="tab" aria-expanded="false">
                Items List
              </a>
            </li>
            <li role="presentation" class="">
              <a href="#overview_tab3" role="tab" id="item-history-tab" data-toggle="tab" aria-expanded="false">
                Items History
              </a>
            <li role="presentation" class="">
              <a href="#overview_tab4" role="tab" id="components-tab" data-toggle="tab" aria-expanded="false">
                Comments
              </a>
            </li>
            </li>
          </ul>
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade active in" id="overview_tab1" aria-labelledby="customer-info-tab">
              <p>Customer Name: Will Zhang</p>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="overview_tab2" aria-labelledby="item-list-tab">
              Items List
            </div>
            <div role="tabpanel" class="tab-pane fade" id="overview_tab3" aria-labelledby="item-history-tab">
              Items History
            </div>
            <div role="tabpanel" class="tab-pane fade" id="overview_tab4" aria-labelledby="components-tab">
              Comments
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>