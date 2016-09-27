<template>
  <div id="weightDimensionDiv" class="x_panel">
    <div class="x_title">
      <h2>Weight and Dimension</h2>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">
      <form class="form-horizontal form-label-left product-weight-dimension-form" id="product-weight-dimension-form" data-parsley-validate="">
        <div class="row">

          <div class="form-group form-group-sm">
            <label for="vol_weight" class="control-label col-md-3 col-sm-3 col-xs-12">Volumetric Weight (Kg): <span class="required">*</span></label>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <input type="number"
              name="vol_weight"
              id="vol_weight"
              max='999'
              min="0"
              class="form-control"
              placeholder="Volumetric Weight (Kg)"
              required="required"
              :value="prodInfo.vol_weight">
            </div>
          </div>

          <div class="form-group form-group-sm">
            <label for="weight" class="control-label col-md-3 col-sm-3 col-xs-12">Weight (Kg): <span class="required">*</span></label>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <input type="number"
              name="weight"
              id="weight"
              max='999'
              min="0"
              class="form-control"
              placeholder="Weight (Kg)"
              required="required"
              :value="prodInfo.weight">
            </div>
          </div>

          <div class="form-group form-group-sm">
            <label for="length" class="control-label col-md-3 col-sm-3 col-xs-12">Length (cm): <span class="required">*</span></label>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <input type="number"
              name="length"
              id="length"
              max='999'
              min="0"
              class="form-control"
              placeholder="Length (cm)"
              required="required"
              :value="prodInfo.length">
            </div>
          </div>

          <div class="form-group form-group-sm">
            <label for="width" class="control-label col-md-3 col-sm-3 col-xs-12">Width (cm): <span class="required">*</span></label>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <input type="number"
              name="width"
              id="width"
              max='999'
              min="0"
              class="form-control"
              placeholder="Width (cm)"
              required="required"
              :value="prodInfo.width">
            </div>
          </div>

          <div class="form-group form-group-sm">
            <label for="height" class="control-label col-md-3 col-sm-3 col-xs-12">Height (cm): <span class="required">*</span></label>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <input type="number"
              name="height"
              id="height"
              max='999'
              min="0"
              class="form-control"
              placeholder="Height (cm)"
              required="required"
              :value="prodInfo.height">
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
    submitWeightDimensionForm,
  } from '../../../vuex/actions';
  import {
    getProductInfo,
  } from '../../../vuex/getters';
  export default {
    vuex: {
      actions: {
        submitForm: submitWeightDimensionForm,
      },
      getters: {
        prodInfo: getProductInfo,
      }
    },
  }
</script>