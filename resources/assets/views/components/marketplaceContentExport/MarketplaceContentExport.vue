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
                  <comp-colour :select-colour="0"></comp-colour>

                  <comp-version :select-version="0"></comp-version>

                  <comp-brand :select-brand="0"></comp-brand>

                  <comp-hscode-category :select-hcid="0" :hs-code="0"></comp-hscode-category>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12">
                  <comp-category :select-cid="0" :select-scid="0" :select-sscid="0"></comp-category>
                  <div class="col-md-12 col-sm-12 col-sm-offset-3">
                    <button type="button" class="btn btn-primary" name="export" @click="submitForm()">
                      <i class="fa fa-download" aria-hidden="true"></i>
                      Export {{ marketplaces[marketplaceId] }} Product Feed
                    </button>
                  </div>
                </div>
              </form>
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
    submitMarketplaceContentExportForm,
  } from '../../../vuex/actions';
  import {
    getMarketplaces,
    getMarketplaceContentExportList,
  } from '../../../vuex/getters';
  export default {
    vuex: {
      actions: {
        submitForm: submitMarketplaceContentExportForm,
      },
      getters: {
        marketplaces: getMarketplaces,
        contentFieldExportList: getMarketplaceContentExportList,
      }
    },
    props: [
      'marketplace-id'
    ],
    components: {
      CompCategory,
      CompColour,
      CompVersion,
      CompBrand,
      CompHscodeCategory,
    },
    ready() {
      this.removeRequired();
    },
    methods: {
      removeRequired() {
        $("#marketplace-content-export-form *").removeAttr("required");
        $("#marketplace-content-export-form *.required").remove();
        $("#marketplace-content-export-form #hs-code").remove();
        $("#marketplace-content-export-form #hscode-cat-id > label").removeClass("col-md-5").addClass("col-md-3");
        $("#marketplace-content-export-form #hscode-cat-id > div").removeClass("col-md-7").addClass("col-md-9");
        // "marketplace-content-export-form"
      }
    }
  }
</script>