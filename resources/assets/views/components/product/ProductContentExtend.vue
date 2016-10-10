<template>
  <div id="contentExtendDiv" class="x_panel">
    <div class="x_title">
      <h2>Product Content Extend</h2>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">
      <form class="form-horizontal form-label-left" data-parsley-validate="" id="product-content-extend-form" name="product-Content-extend-form">
        <div class="form-group">
          <label for="specification" class="control-label col-md-3 col-sm-3 col-xs-12">Feature </label>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <textarea class="form-control col-md-7 col-xs-12 feature"
                      name="feature"
                      id="feature">{{prodContentExtend.feature}}</textarea>
          </div>
        </div>
        <div class="form-group">
          <label for="feature_original" class="control-label col-md-3 col-sm-3 col-xs-12">Manual Translation
          </label>
          <div class="col-md-6 col-sm-6 col-xs-12 checkbox">
            <label>
              <template v-if="prodContentExtend.feature_original">
                <input type="checkbox" class="flat" name="feature_original" value="1" checked>
              </template>
              <template v-else>
                <input type="checkbox" class="flat" name="feature_original" value="">
              </template>
            </label>
          </div>
        </div>

        <hr />
        <div class="form-group">
          <label for="specification" class="control-label col-md-3 col-sm-3 col-xs-12">Specification </label>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <textarea class="form-control col-md-7 col-xs-12 specification"
                      name="specification"
                      id="specification">{{prodContentExtend.specification}}</textarea>
          </div>
        </div>
        <div class="form-group">
          <label for="spec_original" class="control-label col-md-3 col-sm-3 col-xs-12">Manual Translation
          </label>
          <div class="col-md-6 col-sm-6 col-xs-12 checkbox">
            <label>
              <template v-if="prodContentExtend.spec_original">
                <input type="checkbox" class="flat" name="spec_original" value="1" checked>
              </template>
              <template v-else>
                <input type="checkbox" class="flat" name="spec_original" value="">
              </template>
            </label>
          </div>
        </div>


        <hr/>
        <div class="form-group">
          <label for="requirement" class="control-label col-md-3 col-sm-3 col-xs-12">Requirement </label>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <textarea class="form-control col-md-7 col-xs-12 requirement"
                      name="requirement"
                      id="requirement">{{prodContentExtend.requirement}}</textarea>
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
    submitProductContentExtendForm,
  } from '../../../vuex/actions';
  import {
    getProductContentExtend,
  } from '../../../vuex/getters';
  export default {
    vuex: {
      actions: {
        submitForm: submitProductContentExtendForm,
      },
      getters: {
        prodContentExtend: getProductContentExtend,
      }
    },
    data() {
      return {
        'prodContentExtend': {},
      }
    }
  }
</script>