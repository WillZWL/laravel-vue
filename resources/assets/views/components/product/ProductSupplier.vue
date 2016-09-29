<template>
  <div id="productSupplierDiv" class="x_panel">
    <div class="x_title">
      <h2>Product Supplier</h2>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">
      <form class="form-horizontal form-label-left" id="supplier-product-from" novalidate>
        <div class="row">
          <div class="item form-group form-group-sm">
            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="supplier_id">Supplier <span class="required">*</span></label>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <select name="supplier_id"
              id="supplier_id"
              class="select2_single form-control col-md-7 col-xs-6"
              tabindex="-1"
              required="required">
              <option></option>
              <template v-for="supplier in supplierList | orderBy 'supplier_name'">
                <option :value="supplier.supplier_id" v-if="supplier.supplier_id == supProd.supplier_id" selected>
                  {{ supplier.supplier_name }} ({{ supplier.supplier_currency_id }})
                </option>
                <option :value="supplier.supplier_id" v-else>
                  {{ supplier.supplier_name }} ({{ supplier.supplier_currency_id }})
                </option>
              </template>
            </select>
          </div>
        </div>

        <div class="item form-group form-group-sm">
          <label class="control-label col-md-3 col-sm-3 col-xs-12" for="declaredDescription">Declared Description <span class="required">*</span></label>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <input type="text"
            class="form-control col-md-7 col-xs-6"
            required="required"
            name="declared_desc"
            id="declaredDescription"
            placeholder="Declared Description"
            :value='prodInfo.declared_desc'>
          </div>
        </div>

        <div class="item form-group form-group-sm">
          <label class="control-label col-md-3 col-sm-3 col-xs-12" for="declaredValue">Declared Value <span class="required">*</span></label>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <input type="text" class="form-control col-md-7 col-xs-6" required="required" name="declared_value" id="declaredValue" placeholder="Declared Value" :value="supProd.declared_value">
          </div>
        </div>

        <!-- <div class="item form-group form-group-sm">
          <label class="control-label col-md-3 col-sm-3 col-xs-12" for="declaredValue">Declared Value Currency</label>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <input type="text" class="form-control col-md-7 col-xs-6" required="required" name="declared_value" id="declaredValue" placeholder="Declared Value Currency ID" readonly :value="supProd.declared_value_currency_id">
          </div>
        </div> -->

        <div class="item form-group form-group-sm">
          <label class="control-label col-md-3 col-sm-3 col-xs-12" for="cost">Product Cost <span class="required">*</span></label>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <input type="text" class="form-control col-md-7 col-xs-6" required="required" name="cost" id="cost" placeholder="Product Cost" :value="supProd.cost">
          </div>
        </div>

        <template v-if="supProd.prod_sku">
          <div class="item form-group form-group-sm">
            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="productCostHkd">Product Cost (HKD)</label>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <input type="text" class="form-control col-md-7 col-xs-6" name="product_cost_hkd" id="productCostHkd" placeholder="0.00" readonly :value="supProd.pricehkd">
            </div>
          </div>

          <div class="item form-group form-group-sm">
            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="suppliedStatus">Supplied Status</label>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <select name="supplier_status" id="supplier_status" class="form-control" v-if="supProd.supplier_status">
                <template v-for="(index, suppliedStatus) in suppliedStatusList">
                  <option :value="index" v-if="index == supProd.supplier_status" selected>
                    {{ suppliedStatus }}
                  </option>
                  <option :value="index" v-else>
                    {{ suppliedStatus }}
                  </option>
                </template>
              </select>
              <select name="supplier_status" id="supplier_status" class="form-control" v-else disabled></select>
            </div>
          </div>
        </template>

      </div>

      <div class="ln_solid"></div>
      <div class="form-group">
        <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
          <button class="btn btn-primary" type="button">Cancel</button>
          <button class="btn btn-success" type="button"  @click="submitForm()">Submit</button>
        </div>
      </div>
    </form>
  </div>
</div>
</template>

<script>
  import {
    fetchSupplierLists,
    submitSupplierProductFrom,
  } from '../../../vuex/actions';
  import {
    getSupplierLists,
    getSupplierProduct,
    getProductInfo,
  } from '../../../vuex/getters';
  export default {
    vuex: {
      actions: {
        fetchSupplierLists,
        submitForm: submitSupplierProductFrom,
      },
      getters: {
        supplierList: getSupplierLists,
        supProd: getSupplierProduct,
        prodInfo: getProductInfo,
      }
    },
    created() {
      this.fetchSupplierLists();
    },
    data() {
      return {
        suppliedStatusList: {'A': 'Readily Available', 'O': 'Temp Out of Stock'},
      }
    },
  }
</script>