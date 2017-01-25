<style>
  #marketplace-content-export .ul-field-list {
    border-left: 2px solid #eee;
    margin: 0;
    padding: 0;
    list-style-type:upper-alpha;
    background: #eee;
    color: #3c763d;
  }
  #marketplace-content-export .ul-field-list .div-li {
    border: 1px solid #eee;
    margin: 5px;
    float: left;
    padding: 2px 5px 2px 20px;
  }
  .span-radio {
    margin-left: 20px;
  }
  #datatable-fixed-header {
    background: #fff;
  }
</style>
  <template>
  <div class="row" id="marketplace-content-export">
    <div class="col-md-12 col-sm-12 col-xs-12">
        <template v-if="contentFieldExportList[0]">
          <div class="x_panel">
            <div class="x_title">
              <H2>Support Export Fields</H2>
              <div class="clearfix"></div>
            </div>
            <ul class="ul-field-list">
              <div class="div-li" v-for="contentItem in contentFieldExportList">
                <li>
                  {{ contentItem.field_name }}
                </li>
              </div>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="x_panel">
            <div class="x_content">
              <div class="x_title">
                <H2>Filters [Advanced]</H2>
                <div class="clearfix"></div>
              </div>
              <form class="form-horizontal" id="marketplace-content-export-form" role="form">
                <div class="col-md-6 col-sm-12 col-xs-12">
                  <div class="form-group form-group-sm">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Marketplace ID <font color="red">*</font>
                      </label>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                          <select class="select2_single form-control" tabindex="-1" name="marketplace_id">
                              <option value=""></option>
                              <option v-for="marketplace in marketplaceLists" value="{{marketplace.marketplace_id}}">{{marketplace.marketplace_id}}</option>
                          </select>
                      </div>
                  </div>

                  <div class="form-group form-group-sm">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Country  <font color="red">*</font></label>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                          <select class="select2_single form-control" tabindex="-1" name="country_id">
                              <option value=""></option>
                              <option v-for="country in countryLists" value="{{country.country_id}}">{{country.country_name}}</option>
                          </select>
                      </div>
                  </div>

                  <comp-colour :select-colour="0"></comp-colour>

                  <comp-version :select-version="0"></comp-version>

                  <comp-brand :select-brand="0"></comp-brand>

                </div>
                <div class="col-md-6 col-sm-12 col-xs-12">
                  <comp-category :select-cid="0" :select-scid="0" :select-sscid="0"></comp-category>

                  <comp-hscode-category :select-hcid="0" :hs-code="0"></comp-hscode-category>

                  <div class="col-md-9 col-sm-9 col-sm-offset-3">
                    <button type="button" class="btn btn-success pull-left" @click="submitForm('search')">
                      <i class="fa fa-search" aria-hidden="true"></i>
                      PREVIEW
                    </button>
                    <div class="pull-right">
                      <button type="button" class="btn btn-primary" @click="submitForm('export')">
                        <i class="fa fa-download" aria-hidden="true"></i>
                        DOWNLOAD FEED
                      </button>
                      <label><input type="radio" name="extend" value="xlsx" checked> .xlsx</label>
                      <label><input type="radio" name="extend" value="csv"> .csv</label>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
              </form>
            </div>
          </div>
          <div class="x_panel" v-if="contentItems && headers">
            <div class="x_content">
              <div class="x_title">
                <H2>Query results Preview</H2>
                <div class="clearfix"></div>
              </div>
              <table id="datatable-fixed-header" class="table table-striped table-bordered">
                <thead>
                  <tr v-if="headers">
                    <td>NO.</td>
                    <th v-for="header in headers">{{ header }}</th>
                  </tr>
                  <tr v-else></tr>
                </thead>
                <tbody>
                  <tr v-for="(index, item) in contentItems">
                    <td>{{ index }}</td>
                    <td v-for="value in item">{{ value }}</td>
                  </tr>
                  <tr v-else></tr>
                </tbody>
              </table>
            </div>
          </div>
        </template>
        <template v-else>
          This Marketplace is not set with any export fields
        </template>
    </div>
  </div>
</template>

<script>
  import CompCategory from '../product/Category.vue'
  import CompColour from '../product/Colour.vue'
  import CompVersion from '../product/Version.vue'
  import CompBrand from '../product/Brand.vue'
  import CompHscodeCategory from '../product/HscodeCategory.vue'
  import {
    fetchCountryLists,
    submitMarketplaceContentExportForm,
  } from '../../../vuex/actions';
  import {
    getMarketplaceId,
    getMarketplaces,
    getMarketplaceLists,
    getCountryLists,
    getMarketplaceContentExportList,
    getMarketplaceProductContentList,
  } from '../../../vuex/getters';
  export default {
    vuex: {
      actions: {
        fetchCountryLists,
        submitForm: submitMarketplaceContentExportForm,
      },
      getters: {
        marketplaces: getMarketplaces,
        marketplaceLists: getMarketplaceLists,
        countryLists: getCountryLists,
        marketplaceId: getMarketplaceId,
        contentFieldExportList: getMarketplaceContentExportList,
        productContentList: getMarketplaceProductContentList,
      }
    },
    watch: {
      productContentList: function(contentList) {
        var headers = null;
        if (contentList[0]) {
          var headers = contentList[0];
        }
        this.$set('headers', headers);

        var contentItems = new Array()
        if (contentList && contentList.length > 1) {
          for (var i = 1; i < contentList.length; i++) {
            contentItems[i-1] = contentList[i];
          }
        }
        if (contentItems) {
          this.$set('contentItems', contentItems);
        } else {
          this.$set('contentItems', null);
        }
      }
    },
    components: {
      CompCategory,
      CompColour,
      CompVersion,
      CompBrand,
      CompHscodeCategory,
    },
    ready() {
      this.removeRequired();
      this.fetchCountryLists();
    },
    methods: {
      removeRequired() {
        $("#marketplace-content-export-form *").removeAttr("required");
        $("#marketplace-content-export-form *.required").remove();
        $("#marketplace-content-export-form #hs-code").remove();
        $("#marketplace-content-export-form #hscode-cat-id > label").removeClass("col-md-5").addClass("col-md-3");
        $("#marketplace-content-export-form #hscode-cat-id > div").removeClass("col-md-7").addClass("col-md-9");
      }
    },
    data() {
      return {
        headers: {},
        contentItems: null,
      }
    },


  }
</script>