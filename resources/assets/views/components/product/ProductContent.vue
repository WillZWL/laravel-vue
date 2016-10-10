<template>
  <div id="productContentDiv" class="x_panel">
    <div class="x_title">
      <h2>Product Content</h2>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">
      <form class="form-horizontal form-label-left" data-parsley-validate="" id="product-content-form" name="product-Content-form">
        <div class="form-group">
          <label for="model_1" class="control-label col-md-3 col-sm-3 col-xs-12">Model 1 </label>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <input type="text"
            class="form-control"
            id="model_1"
            name="model_1"
            :value="prodContent.model_1">
          </div>
        </div>

        <div class="form-group">
          <label for="model_2" class="control-label col-md-3 col-sm-3 col-xs-12">Model 2 </label>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <input type="text"
            class="form-control"
            id="model_2"
            name="model_2"
            :value="prodContent.model_2">
          </div>
        </div>

        <div class="form-group">
          <label for="model_3" class="control-label col-md-3 col-sm-3 col-xs-12">Model 3 </label>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <input type="text"
            class="form-control"
            id="model_3"
            name="model_3"
            :value="prodContent.model_3">
          </div>
        </div>

        <div class="form-group">
          <label for="model_4" class="control-label col-md-3 col-sm-3 col-xs-12">Model 4 </label>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <input type="text"
            class="form-control"
            id="model_4"
            name="model_4"
            :value="prodContent.model_4">
          </div>
        </div>

        <div class="form-group">
          <label for="model_5" class="control-label col-md-3 col-sm-3 col-xs-12">Model 5 </label>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <input type="text"
            class="form-control"
            id="model_5"
            name="model_5"
            :value="prodContent.model_5">
          </div>
        </div>

        <div class="form-group">
          <label for="prod_name" class="control-label col-md-3 col-sm-3 col-xs-12">Website Display Name <span class="required">*</span></label>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <input type="text"
            class="form-control"
            id="prod_name"
            name="prod_name"
            required="required"
            :value="prodContent.prod_name">
          </div>
        </div>

        <hr/>
        <div class="form-group">
          <label for="keywords" class="control-label col-md-3 col-sm-3 col-xs-12">Related Keywords(Separated by newline only) </label>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <textarea class="form-control col-md-7 col-xs-12 keywords"
                      name="keywords"
                      id="keywords">{{prodContent.keywords}}</textarea>
          </div>
        </div>
        <div class="form-group">
          <label for="keywords_original" class="control-label col-md-3 col-sm-3 col-xs-12">Manual Translation
          </label>
          <div class="col-md-6 col-sm-6 col-xs-12 checkbox">
            <label>
              <template v-if="prodContent.keywords_original">
                <input type="checkbox" class="flat" name="keywords_original" value="1" checked>
              </template>
              <template v-else>
                <input type="checkbox" class="flat" name="keywords_original" value="">
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
    submitProductContentForm,
  } from '../../../vuex/actions';
  import {
    getProductContent,
  } from '../../../vuex/getters';
  export default {
    vuex: {
      actions: {
        submitForm: submitProductContentForm,
      },
      getters: {
        prodContent: getProductContent,
      }
    },
  }
</script>