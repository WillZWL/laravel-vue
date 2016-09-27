<template>
  <div id="productCodeDiv" class="x_panel">
    <div class="x_title">
      <h2>Product Code</h2>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">
      <form class="form-horizontal form-label-left" id="product-code-form" novalidate>
        <div class="row">

          <div class="item form-group form-group-sm">
            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="asin">ASIN</label>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <input type="text"
                     class="form-control col-md-7 col-xs-6"
                     name="asin"
                     id="asin"
                     placeholder="ASIN"
                     :value="prodInfo.asin">
            </div>
          </div>

          <div class="item form-group form-group-sm">
            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="upc">UPC</label>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <input type="text"
                     class="form-control col-md-7 col-xs-6"
                     name="upc"
                     id="upc"
                     placeholder="UPC"
                     :value="prodInfo.upc">
            </div>
          </div>

          <div class="item form-group form-group-sm">
            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="isbn">ISBN</label>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <input type="text"
                     class="form-control col-md-7 col-xs-6"
                     name="isbn"
                     id="isbn"
                     placeholder="ISBN"
                     :value="prodInfo.isbn">
            </div>
          </div>

          <div class="item form-group form-group-sm">
            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="ean">EAN</label>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <input type="text"
                     class="form-control col-md-7 col-xs-6"
                     name="ean"
                     id="ean"
                     placeholder="EAN"
                     :value="prodInfo.ean">
            </div>
          </div>

          <div class="item form-group form-group-sm">
            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="mpn">MPN</label>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <input type="text"
                     class="form-control col-md-7 col-xs-6"
                     name="mpn"
                     id="mpn"
                     placeholder="MPN"
                     :value="prodInfo.mpn">
            </div>
          </div>

          <div class="item form-group form-group-sm">
            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="harmonizedCode">Harmonized Code</label>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <input type="text"
                     class="form-control col-md-7 col-xs-6"
                     name="harmonized_code"
                     id="harmonizedCode"
                     placeholder="Harmonized Code"
                     :value="prodInfo.harmonized_code">
            </div>
          </div>

        </div>

        <div class="ln_solid"></div>
        <div class="form-group">
          <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
            <button class="btn btn-primary" type="button">Cancel</button>
            <button class="btn btn-success" type="button" @click="submitForm()">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {
    submitProductCodeForm,
  } from '../../../vuex/actions';
  import {
    getProductInfo,
  } from '../../../vuex/getters';
  export default {
    vuex: {
      actions: {
        submitForm: submitProductCodeForm,
      },
      getters: {
        prodInfo: getProductInfo,
      }
    },
  }
</script>