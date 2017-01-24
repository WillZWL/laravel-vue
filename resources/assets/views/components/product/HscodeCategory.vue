<template>
  <div id='hscode-cat-id' class="item form-group form-group-sm">
    <label class="control-label col-md-5 col-sm-3 col-xs-12" for="hscodeCategory">HS Category <span class="required">*</span></label>
    <div class="col-md-7 col-sm-9 col-xs-12">
      <select name="hscode_cat_id" id="hscode_cat_id" class="form-control"  tabindex="-1" required="required">
        <option></option>
        <template v-for="hscodeCategory in hscodeCategoryList | orderBy 'hscode_category_name'">
        <option :value="hscodeCategory.hscode_category_id" v-if="hscodeCategory.hscode_category_id == selectHcid" selected>
            {{ hscodeCategory.hscode_category_name }}
          </option>
          <option :value="hscodeCategory.hscode_category_id" v-else>
            {{ hscodeCategory.hscode_category_name }}
          </option>
        </template>
      </select>
    </div>
  </div>

  <div id='hs-code' class="item form-group form-group-sm">
    <label class="control-label col-md-5 col-sm-3 col-xs-12" for="hsCode">Hs Code <span class="required">*</span></label>
    <div class="col-md-7 col-sm-9 col-xs-12">
      <input type="text"
      class="form-control col-md-7 col-xs-6"
      name="hs_code"
      id="hsCode"
      minlenght="10"
      required="required"
      placeholder="Hs Code"
      :value="hsCode">
    </div>
  </div>

</template>

<script>
  import {
    fetchHscodeCategoryLists
  } from '../../../vuex/actions';
  import {
    getHscodeCategoryLists,
  } from '../../../vuex/getters';
  export default {
    vuex: {
      actions: {
        fetchHscodeCategoryLists,
      },
      getters: {
        hscodeCategoryList: getHscodeCategoryLists,
      }
    },
    props: [
    'select-hcid',
    'hs-code',
    ],
    created() {
      this.fetchHscodeCategoryLists();
    }
  }
</script>