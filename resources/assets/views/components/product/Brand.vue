<template>
  <div class="form-group form-group-sm">
    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="brandId">Brand <span class="required">*</span></label>
    <div class="col-md-9 col-sm-9 col-xs-12">
      <select name="brand_id" id="brandId" class="select2_single form-control" tabindex="-1" required="required">
      <option></option>
      <template v-for="brand in brandList | orderBy 'brand_name'">
          <option :value="brand.brand_id" v-if="brand.brand_id == selectBrand" selected>
              {{ brand.brand_name }}
          </option>
          <option :value="brand.brand_id" v-else>
              {{ brand.brand_name }}
          </option>
      </template>
    </select>
  </div>
</div>
</template>

<script>
  import {api_url} from '../../../js/vue.config.js';
  import {fetchBrandLists} from '../../../vuex/actions';
  import {getBrandLists} from '../../../vuex/getters';
  export default {
    vuex: {
      actions: {
        fetchBrandLists,
      },
      getters: {
        brandList: getBrandLists,
      }
    },
    props: [
      'select-brand'
    ],
    created() {
      this.fetchBrandLists();
    },
    ready() {

    },
    data() {
      return {
        api_url: api_url,
      }
    },
    methods: {
    }
  }
</script>