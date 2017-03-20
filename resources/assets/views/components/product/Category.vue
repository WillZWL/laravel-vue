<style type="text/css">
  .scr-span,
  .sscr-span {
    display: none;
  }
</style>
<template>
  <div class="item form-group form-group-sm">
    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="category">Category <span class="required">*</span></label>
    <div class="col-md-9 col-sm-9 col-xs-12">
      <select name="cat_id" id="cat_id" class="form-control" v-on:change="changeCatId()" required="required">
        <option></option>
        <template  v-for="category in categoryList | orderBy 'category_name'">
          <template v-if="category.category_parent_cat_id == 0 && category.category_id > 0">
            <option :value="category.category_id" v-if="category.category_id == selectCid" selected>
                {{ category.category_name }}
            </option>
            <option :value="category.category_id" v-else>
                {{ category.category_name }}
            </option>
          </template>
        </template>
      </select>
    </div>
  </div>

  <div class="item form-group form-group-sm">
    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="sub_category">Sub-Category <span class="scr-span required">*</span></label>
    <div class="col-md-9 col-sm-9 col-xs-12">
      <select name="sub_cat_id" id="sub_cat_id" class="form-control" v-on:change="changeSubCatId()">
        <option></option>
        <template  v-for="category in subCatList | orderBy 'category_name'">
            <option :value="category.category_id" v-if="category.category_id == selectScid" selected>
                {{ category.category_name }}
            </option>
            <option :value="category.category_id" v-else>
                {{ category.category_name }}
            </option>
        </template>
      </select>
    </div>
  </div>

  <div class="item form-group form-group-sm">
    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="sub_sub_cat_id">Sub-Sub-Category <span class="sscr-span required">*</span></label>
    <div class="col-md-9 col-sm-9 col-xs-12">
      <select name="sub_sub_cat_id" id="sub_sub_cat_id" class="form-control">
        <option></option>
        <template  v-for="category in subSubCatList | orderBy 'category_name'">
            <option :value="category.category_id" v-if="category.category_id == selectSscid" selected>
                {{ category.category_name }}
            </option>
            <option :value="category.category_id" v-else>
                {{ category.category_name }}
            </option>
        </template>
      </select>
    </div>
  </div>
</template>

<script>
  import {fetchCategoryLists} from '../../../vuex/actions';
  import {
    getCategoryLists,
  } from '../../../vuex/getters';
  export default {
    vuex: {
      actions: {
        fetchCategoryLists,
      },
      getters: {
        categoryList: getCategoryLists,
      }
    },
    props: [
      "select-cid",
      "select-scid",
      "select-sscid",
    ],
    created() {
      this.fetchCategoryLists();
    },
    data() {
      return {
        subCatList: {},
        subSubCatList: {},
        triggerSubSubCatList: false,
      }
    },
    watch: {
      selectCid: function(val) {
          this.newSubCat(this.selectCid);

          this.$set('triggerSubSubCatList', true);
      },
      triggerSubSubCatList: function(val) {
        if (val === true && this.selectScid) {
          this.newSubSubCat(this.selectScid);

          this.$set('triggerSubSubCatList', false);
        }
      }
    },
    methods: {
      changeCat(catName, parentCatId) {
        var newCatList = {};
        var catNum = 0;

        if (parentCatId > 0) {
          var data = this.categoryList;
          for (var i = data.length - 1; i >= 0; i--) {
            if (data[i].category_parent_cat_id == parentCatId) {
              newCatList[i] = data[i];
              catNum++;
            }
          }
        }

        this.$set(catName, newCatList);

        return catNum;
      },
      changeCatId() {
        this.newSubCat($("#cat_id").val());
      },
      changeSubCatId() {
        this.newSubSubCat($("#sub_cat_id").val());
      },
      newSubCat: function(catId) {
        $(".scr-span").hide();
        $(".sscr-span").hide();
        $("#sub_cat_id").removeAttr("required");
        $("#sub_sub_cat_id").removeAttr("required");

        this.$set('subSubCatList', {});
        var catNum = this.changeCat('subCatList', catId);

        if (catNum > 0) {
          $("#sub_cat_id").attr("required", "required")
          $(".scr-span").show();
        }
      },
      newSubSubCat: function(subCatId) {
        $(".sscr-span").hide();
        $("#sub_sub_cat_id").removeAttr("required");

        var catNum = this.changeCat('subSubCatList', subCatId);

        if (catNum > 0) {
          $("#sub_sub_cat_id").attr("required", "required");
          $(".sscr-span").show();
        }
      }
    }
  }
</script>