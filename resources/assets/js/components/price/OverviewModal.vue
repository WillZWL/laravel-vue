<template>
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span>
          </button>
          <h4 class="modal-title" id="myModalLabel2">Overview [ {{item.markerplace_id}} ] - {{item.master_sku}} - {{item.sku}}</h4>
        </div>
        <div class="modal-body">
           <form class="form-horizontal form-label-left">
            <div class="form-group col-md-12">
              <label class="control-label col-md-3">Marketplace ID</label>
              <div class="col-md-6 col-xs-12">
                <input type="text" class="form-control col-md-4 col-xs-12" value="{{item.markerplace_id}}" readonly="readonly">
              </div>
            </div>
            <div class="form-group col-md-12">
              <label class="control-label col-md-3">Master SKU</label>
              <div class="col-md-6 col-xs-12">
                <input type="text" class="form-control col-md-4 col-xs-12" value="{{item.master_sku}}" readonly="readonly">
              </div>
            </div>
            <div class="form-group col-md-12">
              <label class="control-label col-md-3">ESG SKU</label>
              <div class="col-md-6 col-xs-12">
                <input type="text" class="form-control col-md-4 col-xs-12" value="{{item.sku}}" readonly="readonly">
              </div>
            </div>
            <div class="form-group col-md-12">
              <label class="control-label col-md-3">Product Name</label>
              <div class="col-md-9 col-xs-12">
                <input type="text" class="form-control col-md-9 col-xs-12 form_name" value="{{item.prod_name}}" readonly="readonly" style="width:100%">
              </div>
            </div>
            <div class="form-group col-md-12">
              <label class="control-label col-md-3">Sourcing status</label>
              <div class="col-md-6 col-xs-12">
                <select class="form-control col-md-4 col-xs-12">
                  <option value="">Readily Available</option>
                  <option value="">Out Of Stock</option>
                </select>
                <!-- <input type="text"  value="15621-AA-NA" readonly="readonly"> -->
              </div>
            </div>
            <div class="form-group col-md-12">
              <label class="control-label col-md-3">ETRADE QTY</label>
              <div class="col-md-6 col-xs-12">
                <input type="text" class="form-control col-md-4 col-xs-12" value="{{item.etrade_qty}}">
              </div>
            </div>
            <div class="form-group col-md-12">
              <label class="control-label col-md-3">ES_HK QTY</label>
              <div class="col-md-6 col-xs-12">
                <input type="text" class="form-control col-md-4 col-xs-12" value="{{item.es_hk_qty}}">
              </div>
            </div>
            <div class="form-group col-md-12">
              <label class="control-label col-md-3">ES_DG QTY</label>
              <div class="col-md-6 col-xs-12">
                <input type="text" class="form-control col-md-4 col-xs-12" value="{{item.es_dg_qty}}">
              </div>
            </div>
            <div class="form-group col-md-12">
              <label class="control-label col-md-3">Item Price</label>
              <div class="col-md-6 col-xs-12">
                <input type="text" class="form-control col-md-4 col-xs-12" value="{{item.item_price}}">
              </div>
            </div>
            <div class="form-group col-md-12">
              <label class="control-label col-md-3">Selling Price</label>
              <div class="col-md-6 col-xs-12">
                <input type="text" class="form-control col-md-4 col-xs-12" value="{{item.item_price}}">
              </div>
            </div>
            <div class="form-group col-md-12">
              <label class="control-label col-md-3">Profit</label>
              <div class="col-md-6 col-xs-12">
                <input type="text" class="form-control col-md-4 col-xs-12" value="{{item.profit}}">
              </div>
            </div>
            <div class="form-group col-md-12">
              <label class="control-label col-md-3">Margin</label>
              <div class="col-md-6 col-xs-12">
                <input type="text" class="form-control col-md-4 col-xs-12" value="{{item.margin}}">
              </div>
            </div>
            <div class="form-group col-md-12">
              <label class="control-label col-md-3">Update On</label>
              <div class="control-label col-md-4">{{item.modify_on}}</div>
            </div>
            <div class="form-group col-md-12">
              <label class="control-label col-md-3">Update By</label>
              <div class="control-label col-md-4">{{item.modify_by}}</div>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
        </form>
      </div>
    </div>
</template>
<script>
    export default {
        props: [
            'item'
        ],
    }
</script>