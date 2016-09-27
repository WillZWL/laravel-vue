<style type="text/css">

</style>

<template>
  <div id="basicInfoDiv" class="x_panel">
    <div class="x_title">
      <h2>Basic Product Information</h2>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">
      <form class="form-horizontal form-label-left product-info-form" id="product-info-form" data-parsley-validate="">

        <div class="row">
          <div class="col-md-7 col-sm-12 col-xs-12">
            <div class="x_panel">
              <div class="x_title">
                <h2>Product</h2>
                <ul class="nav navbar-right panel_toolbox">
                  <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                </ul>
                <div class="clearfix"></div>
              </div>
              <div class="x_content">

                <div class="form-group form-group-sm" v-if="prodInfo.sku">
                  <label class="control-label col-md-3 col-sm-3 col-xs-12" for="sku" >Product SKU</label>
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <input type="text"
                    class="form-control"
                    id="sku"
                    name="sku"
                    placeholder="Product SKU"
                    disabled
                    :value="prodInfo.sku">
                  </div>
                </div>

                <div class="form-group form-group-sm">
                  <label class="control-label col-md-3 col-sm-3 col-xs-12" for="prod_grp_cd_name" >Prod Group Name <span class="required">*</span></label>
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <input type="text"
                    class="form-control"
                    required=""
                    id="prod_grp_cd_name"
                    name="prod_grp_cd_name"
                    placeholder="Product Group Name"
                    :value="prodInfo.prod_grp_cd_name">
                  </div>
                </div>

                <div class="form-group form-group-sm">
                  <label class="control-label col-md-3 col-sm-3 col-xs-12" for="name" >Product Name <span class="required">*</span></label>
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <input type="text"
                    class="form-control"
                    required=""
                    id="name"
                    name="name"
                    placeholder="Product Name"
                    :value="prodInfo.name">
                  </div>
                </div>

                <!-- <div class="form-group form-group-sm">
                  <label class="control-label col-md-3 col-sm-3 col-xs-12" for="productTitle" >Product Title <span class="required">*</span>
                  </label>
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <input type="text" class="form-control" required="" id="productTitle" name="product_title" placeholder="Product Title">
                  </div>
                </div> -->

                <!-- < div class="form-group form-group-sm">
                  <label class="control-label col-md-3 col-sm-3 col-xs-12" for="productSubtitle" >Product Subtitle</label>
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <input type="text" class="form-control" id="productSubtitle" name="product_subtitle" placeholder="Product Subtitle">
                  </div>
                </div> -->

                <comp-colour :select-colour="prodInfo.colour_id"></comp-colour>

                <comp-version :select-version="prodInfo.version_id"></comp-version>

                <comp-brand :select-brand="prodInfo.brand_id"></comp-brand>

                <comp-category :select-cid="prodInfo.cat_id" :select-scid="prodInfo.sub_cat_id" :select-sscid="prodInfo.sub_sub_cat_id"></comp-category>

              </div>
            </div>
          </div>
          <div class="col-md-5 col-sm-12 col-xs-12">
            <div class="x_panel">
              <div class="x_title">
                <h2>Basic Info</h2>
                <ul class="nav navbar-right panel_toolbox">
                  <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                </ul>
                <div class="clearfix"></div>
              </div>
              <div class="x_content">

                <comp-hscode-category :select-hcid="prodInfo.hscode_cat_id"></comp-hscode-category>

                <div class="form-group form-group-sm">
                  <label class="control-label col-md-5 col-sm-3 col-xs-12" for="condtions">Condtions <span class="required">*</span></label>
                  <div class="col-md-7 col-sm-9 col-xs-12">
                    <select name="condtions" id="condtions" class="form-control" required="required">
                      <option v-for="condtions in condtionsList"
                      :value="condtions">{{condtions}}</option>
                    </select>
                  </div>
                </div>

                <div class="form-group form-group-sm">
                  <label class="control-label col-md-5 col-sm-3 col-xs-12" for="warranty_in_month">Warranty</label>
                  <div class="col-md-7 col-sm-9 col-xs-12">
                    <select name="warranty_in_month" id="warranty_in_month" class="form-control">
                      <template v-for="warranty in warrantyList">
                        <option :value="warranty" v-if="warranty == prodInfo.warranty_in_month" selected>
                          {{ warranty }}
                        </option>
                        <option :value="warranty" v-else>
                          {{ warranty }}
                        </option>
                      </template>
                    </select>
                  </div>
                </div>

                <div class="form-group form-group-sm">
                  <label class="control-label col-md-5 col-sm-3 col-xs-12" for="battery">Battery <span class="required">*</span></label>
                  <div class="col-md-7 col-sm-9 col-xs-12">
                    <select name="battery" id="battery" class="form-control">
                      <template v-for="(index, battery) in batteryList">
                        <option :value="index" v-if="index == prodInfo.battery" selected>
                          {{ battery }}
                        </option>
                        <option :value="index" v-else>
                          {{ battery }}
                        </option>
                      </template>
                    </select>
                  </div>
                </div>

                <div class="form-group form-group-sm">
                  <label class="control-label col-md-5 col-sm-3 col-xs-12" for="fragile">Fragile <span class="required">*</span></label>
                  <div class="col-md-7 col-sm-9 col-xs-12">
                    <select name="fragile" id="fragile" class="form-control">
                      <template v-for="(index, fragile) in fragileList">
                        <option :value="index" v-if="index == prodInfo.fragile" selected>
                          {{ fragile }}
                        </option>
                        <option :value="index" v-else>
                          {{ fragile }}
                        </option>
                      </template>
                    </select>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="ln_solid"></div>
        <div class="form-group form-group-sm">
          <div class="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
            <button class="btn btn-primary" type="button" @click="resetForm()">Cancel</button>
            <button type="button" class="btn btn-success" @click="submitForm()">Submit</button>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
  import CompCategory from './Category.vue'
  import CompColour from './Colour.vue'
  import CompVersion from './Version.vue'
  import CompBrand from './Brand.vue'
  import CompHscodeCategory from './HscodeCategory.vue'
  import {
    setProductSku,
    msgBox,
    getProduct,
    submitBasicInfoForm,
  } from '../../../vuex/actions';
  import {
    getProductInfo,
  } from '../../../vuex/getters';
  export default {
    vuex: {
      actions: {
        setSku: setProductSku,
        getMsg: msgBox,
        getProduct: getProduct,
        submitForm: submitBasicInfoForm,
      },
      getters: {
        prodInfo: getProductInfo,
      }
    },
    components: {
      CompCategory,
      CompColour,
      CompVersion,
      CompBrand,
      CompHscodeCategory,
    },
    watch: {
      prodInfo: function(val) {
        if (val) {
          this.setSku(val.sku);
        } else {
          this.setSku();
        }
      }
    },
    ready() {
      this.initBasicInfoForm();
      if (url('?sku')) {
        this.getProduct(url('?sku'), url('?lang_id'));
      } else {
        $.isLoading("hide");
      }

    },
    data() {
      return {
        batteryList: {'0': 'Without', '1': 'Built-In', '2': 'External'},
        fragileList: {'0': 'No', '1': 'Yes'},
        condtionsList: ['New', 'Used', 'Refurbished', 'Reconditioned', 'Like New'],
        warrantyList: ['0', '6', '12', '18', '24', '36'],
      }
    },
    methods: {
      initBasicInfoForm () {
        $(".select2_single").select2({
          placeholder: "",
          allowClear: true
        });

        $(".select2_multiple").select2();
      }
    }
  }
</script>