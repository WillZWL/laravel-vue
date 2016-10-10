<template>
  <div id="productFeaturesDiv" class="x_panel">
    <div class="x_title">
      <h2>Product Features Point</h2>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">
      <form class="form-horizontal form-label-left" id="product-features-form" data-parsley-validate="">
        <div class="row">
          <template v-for="(index, features) in featuresItems">
            <div class="item form-group form-group-sm">
              <label class="control-label col-md-3 col-sm-3 col-xs-12" for="peatur">Features Point {{index}}</label>
              <div class="col-md-6 col-sm-6 col-xs-12">

                <template v-if="features">
                  <input type="text"
                         class="form-control col-md-7 col-xs-6"
                         name="feature_{{features.id}}"
                         id="peatur"
                         placeholder="Features Point {{index}}"
                         :value="features.feature">
                  <input type="hidden" name="ids[]" :value="features.id">
                </template>
                <template v-else>
                  <input type="text"
                         class="form-control col-md-7 col-xs-6"
                         name="add_feature[]"
                         id="add_feature"
                         placeholder="Features Point {{index}}"
                         :value="">
                </template>
              </div>
            </div>
          </template>
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
    submitProductFeaturesForm,
  } from '../../../vuex/actions';
  import {
    getProductFeatures,
  } from '../../../vuex/getters';
  export default {
    vuex: {
      actions: {
        submitForm: submitProductFeaturesForm,
      },
      getters: {
        prodFeatures: getProductFeatures,
      }
    },
    watch: {
      prodFeatures: function (val) {
        var newVal = {};
        for (var i = 0;i< 6;i++) {
          newVal[i+1] = val[i];
        }

        this.$set("featuresItems", newVal);
      }
    },
    data() {
      return {
        featuresItems: {},
      }
    },
    created() {
      this.setDefaultFeaturesItem();
    },
    methods: {
      setDefaultFeaturesItem(){
        var newVal = {};
        for (var i = 1;i<= 6;i++) {
          newVal[i] = {};
        }

        this.$set("featuresItems", newVal);
      },
    }
  }
</script>