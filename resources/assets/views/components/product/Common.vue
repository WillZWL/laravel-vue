<style type="text/css">
  .detail_desc {
    min-height: 100px;
  }
</style>

<template>
  <div id="commonDiv" class="x_panel">
    <div class="x_title">
      <h2>Common Information</h2>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">
      <form class="form-horizontal form-label-left" data-parsley-validate="" id="product-description-form" name="product-description-form" novalidate="">
        <div class="form-group">
          <label for="short_desc" class="control-label col-md-3 col-sm-3 col-xs-12">Short Description </label>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <textarea class="form-control col-md-7 col-xs-12"
                      name="short_desc"
                      id="short_desc">{{prodContent.short_desc}}</textarea>
          </div>
        </div>
        <hr/>
        <div class="form-group">
          <label for="detail_desc" class="control-label col-md-3 col-sm-3 col-xs-12">Product Description </label>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <textarea class="form-control col-md-7 col-xs-12 detail_desc"
                      name="detail_desc"
                      id="detail_desc">{{prodContent.detail_desc}}</textarea>
          </div>
        </div>

        <div class="form-group">
          <label for="detail_desc_original" class="control-label col-md-3 col-sm-3 col-xs-12">Manual Translation
          </label>
          <div class="col-md-6 col-sm-6 col-xs-12 checkbox">
            <label>
              <template v-if="prodContent.detail_desc_original">
                <input type="checkbox" class="flat" name="detail_desc_original" value="1" checked>
              </template>
              <template v-else>
                <input type="checkbox" class="flat" name="detail_desc_original" value="">
              </template>
            </label>
          </div>
        </div>

        <div class="ln_solid"></div>
        <div class="form-group">
          <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
            <button class="btn btn-primary" type="button">Cancel</button>
            <button class="btn btn-success" type="button" @click='submitForm()'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {
    submitProductDescriptionForm,
  } from '../../../vuex/actions';
  import {
    getProductContent,
  } from '../../../vuex/getters';
  export default {
    vuex: {
      actions: {
        submitForm: submitProductDescriptionForm,
      },
      getters: {
        prodContent: getProductContent,
      }
    },
  }
</script>