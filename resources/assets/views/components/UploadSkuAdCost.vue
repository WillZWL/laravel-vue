<template>
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
      <div class="x_title">
        <h2>Upload SKU Advertising Cost</h2>
        <ul class="nav navbar-right panel_toolbox">
          <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <div class="x_content">
        <blockquote>
          <p>Spreadsheet templates are a quick way to upload SKU Advertising Cost in bulk. Edit the spreadsheet as needed. Don't change the columns.</p>
          <div class="clearfix"></div>
        </blockquote>

        <div class="col-md-8 col-sm-12 col-xs-12">
          <div class="form-group">
            <label for="exampleInputName2" class="col-sm-2"><h2 for="Marketplace ID">MARKETPLACE:</h2></label>
            <div class="col-md-4 col-sm-12 col-xs-12">
              <select class="form-control input" tabindex="-1" name="marketplace">
                <option></option>
                <template v-for="(index, marketplace) in marketplaces">
                  <option :value="index" v-if="index == marketplaceId" selected>
                    {{ marketplace }}
                  </option>
                  <option :value="index" v-else>
                    {{ marketplace }}
                  </option>
                </template>
              </select>
            </div>
          </div>
        </div>

        <!-- The file upload form used as target for the file upload widget -->
        <div class="col-md-12 col-sm-12 col-xs-12">
          <upload-component
            :upload_url="upload_url"
            :show_upload_notes="show_upload_notes"
            :example_file_url="example_file_url">
          </upload-component>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import UploadComponent from './common/UploadComponent.vue';
  import {api_url, ACCESS_TOKEN} from '../../js/vue.config.js'
  import {getMarketplaces} from '../../vuex/getters'
  export default {
    components: {
      UploadComponent
    },
    vuex: {
      getters: {
        marketplaces: getMarketplaces
      }
    },
    data() {
      return {
        upload_url: api_url+'marketplace-sku-ad-cost-upload',
        show_upload_notes:true,
        example_file_url: '/donwload-example-file/UploadExample.csv'
      }
    },
  }
</script>