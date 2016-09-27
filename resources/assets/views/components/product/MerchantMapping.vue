<template>
  <div id="merchantMappingDiv" class="x_panel">
    <div class="x_title">
      <h2>Merchant Product Mapping</h2>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">
      <form class="form-horizontal form-label-left" id="merchant-product-mapping-form" data-parsley-validate="">
        <div class="row">
          <div class="item form-group form-group-sm">
            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="merchant_id">Merchant <span class="required">*</span></label>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <select name="merchant_id"
              id="merchant_id"
              class="select2_single form-control col-md-7 col-xs-6"
              tabindex="-1"
              required=""
              v-model="merchantId">
              <option></option>
              <template v-for="merchant in merchantList | orderBy 'merchant_name'">
                <option :value="merchant.merchant_id" v-if="merchant.merchant_id == merchProdMap.merchant_id" selected>
                  {{ merchant.merchant_name }}
                </option>
                <option :value="merchant.merchant_id" v-else>
                  {{ merchant.merchant_name }}
                </option>
              </template>
            </select>
          </div>
        </div>

        <div class="item form-group form-group-sm">
          <label class="control-label col-md-3 col-sm-3 col-xs-12" for="merchantSku">Merchant SKU <span class="required">*</span></label>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <input type="text"
            class="form-control col-md-7 col-xs-6"
            required=""
            name="merchant_sku"
            id="merchant_sku"
            placeholder="Merchant SKU"
            :value="merchProdMap.merchant_sku">
          </div>
        </div>
      </div>
      <div class="ln_solid"></div>
      <div class="form-group">
        <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
          <button class="btn btn-primary" type="button" @click="resetForm()">Cancel</button>
          <button class="btn btn-success" type="button" @click="submitForm()">Submit</button>
        </div>
      </div>
    </form>
  </div>
</div>
</template>

<script>
  import {
    fetchMerchantLists,
    submitMerchantProductMappingForm,
  } from '../../../vuex/actions';
  import {
    getMerchantLists,
    getMerchantProductMapping,
  } from '../../../vuex/getters';
  export default {
    vuex: {
      actions: {
        submitForm: submitMerchantProductMappingForm,
        fetchMerchantLists,
      },
      getters: {
        merchantList: getMerchantLists,
        merchProdMap: getMerchantProductMapping,
      }
    },
    created() {
      this.fetchMerchantLists();
    },
    watch: {
      merchProdMap: function (val) {
        if (this.merchProdMap.merchant_id && this.merchProdMap.merchant_sku) {
          $("#merchant_id").attr("disabled", "disabled");
          $("#merchant_sku").attr("disabled", "disabled");
          $("#merchant-product-mapping-form .btn-primary").attr("disabled", "disabled");
          $("#merchant-product-mapping-form .btn-success").attr("disabled", "disabled");
        }
      }
    }
  }
</script>