<template>
  <div id="boxContentDiv" class="x_panel">
    <div class="x_title">
      <h2>Box Content Information</h2>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">
      <form class="form-horizontal form-label-left" data-parsley-validate="" id="product-box-content-form" name="product-box-content-form">
        <div class="form-group">
          <label for="contents" class="control-label col-md-3 col-sm-3 col-xs-12">Box Content
          </label>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <textarea class="form-control col-md-7 col-xs-12"
            required="required"
            name="contents"
            id="boxContent">{{prodContent.contents}}</textarea>
          </div>
        </div>

        <div class="form-group">
          <label for="contents_original" class="control-label col-md-3 col-sm-3 col-xs-12">Manual Translation
          </label>
          <div class="col-md-6 col-sm-6 col-xs-12 checkbox">
            <label>
              <template v-if="prodContent.contents_original">
                <input type="checkbox" class="flat" name="contents_original" value="1" checked>
              </template>
              <template v-else>
                <input type="checkbox" class="flat" name="contents_original" value="">
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
    submitProductBoxContentForm,
  } from '../../../vuex/actions';
  import {
    getProductContent,
  } from '../../../vuex/getters';
  export default {
    vuex: {
      actions: {
        submitForm: submitProductBoxContentForm,
      },
      getters: {
        prodContent: getProductContent,
      }
    },
  }
</script>