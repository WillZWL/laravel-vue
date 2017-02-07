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
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Marketplace ID
                      </label>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                          <select class="select2_single form-control" tabindex="-1" name="marketplace_id">
                              <option value=""></option>
                              <option v-for="marketplace in marketplaceLists" value="{{marketplace.marketplace_id}}">{{marketplace.marketplace_id}}</option>
                          </select>
                      </div>
                  </div>

                  <div class="form-group form-group-sm">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Country</label>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                          <select class="select2_single form-control" tabindex="-1" name="country_id">
                              <option value=""></option>
                              <option v-for="country in countryLists" value="{{country.country_id}}">{{country.country_name}}</option>
                          </select>
                      </div>
                  </div>

                  <comp-colour :select-colour="0"></comp-colour>

                  <comp-version :select-version="0"></comp-version>

                  <comp-category :select-cid="0" :select-scid="0" :select-sscid="0"></comp-category>

                  <comp-brand :select-brand="0"></comp-brand>

                  <comp-hscode-category :select-hcid="0" :hs-code="0"></comp-hscode-category>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12">
                  <div class="form-group form-group-sm">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12">Date Type</label>
                    <div class="col-md-9 col-sm-9 col-xs-12">
                      <select class="form-control" name="date_type">
                        <option value=""></option>
                        <option value="C">Use Created Date</option>
                        <option value="M">Use Modified Date</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group form-group-sm">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12">Start Date</label>
                    <div class="col-md-9 col-sm-9 col-xs-12">
                        <datepicker :format="format" :input-class="inputClass" name="start_date"></datepicker>
                    </div>
                  </div>

                  <div class="form-group form-group-sm">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12">End Date</label>
                    <div class="col-md-9 col-sm-9 col-xs-12">
                        <datepicker :format="format" :input-class="inputClass" name="end_date"></datepicker>
                    </div>
                  </div>

                  <div class="form-group form-group-sm">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12">Merchant</label>
                    <div class="col-md-9 col-sm-9 col-xs-12">
                      <select class="select2_single form-control" name="merchant_id" id="merchant_id">
                        <option></option>
                        <template v-for="merchant in merchantList | orderBy 'merchant_name'">
                          <option :value="merchant.merchant_id">
                            {{ merchant.merchant_name }}
                          </option>
                        </template>
                      </select>
                    </div>
                  </div>

                  <div class="form-group form-group-sm">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Bulk SKU</label>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                          <textarea name="skus" class="form-control" style="height:140px;" placeholder="Please Input ESG SKU"></textarea>
                      </div>
                  </div>

                  <div class="col-md-9 col-sm-9 col-sm-offset-4">
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
                    <td>{{ index + 1 }}</td>
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
  import Datepicker from 'vuejs-datepicker';
  import CompCategory from '../product/Category.vue'
  import CompColour from '../product/Colour.vue'
  import CompVersion from '../product/Version.vue'
  import CompBrand from '../product/Brand.vue'
  import CompHscodeCategory from '../product/HscodeCategory.vue'
  import {
    fetchCountryLists,
    fetchMerchantLists,
    submitMarketplaceContentExportForm,
  } from '../../../vuex/actions';
  import {
    getMarketplaceId,
    getMarketplaces,
    getMarketplaceLists,
    getCountryLists,
    getMerchantLists,
    getMarketplaceContentExportList,
    getMarketplaceProductContentList,
  } from '../../../vuex/getters';
  export default {
    vuex: {
      actions: {
        fetchCountryLists,
        fetchMerchantLists,
        submitForm: submitMarketplaceContentExportForm,
      },
      getters: {
        marketplaces: getMarketplaces,
        marketplaceLists: getMarketplaceLists,
        countryLists: getCountryLists,
        marketplaceId: getMarketplaceId,
        merchantList: getMerchantLists,
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
      Datepicker,
    },
    created() {
      this.fetchCountryLists();
      this.fetchMerchantLists();
    },
    ready() {
      this.removeRequired();
      this.initForm();
    },
    methods: {
      initForm () {
        // $(".select2_single").select2();
      },
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
        format: 'yyyy-MM-dd',
        disable: {},
        inputClass: 'form-control',
      }
    }
  }
</script>