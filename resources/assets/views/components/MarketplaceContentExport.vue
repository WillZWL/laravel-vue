<template>
  <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="x_panel">
        <div class="x_content">
          <div class="" role="tabpanel" data-example-id="togglable-tabs">
            <ul id="myTab" class="nav nav-tabs bar_tabs" role="tablist">
              <li role="presentation" class="active">
                <a href="#export-setting" role="tab" id="export" data-toggle="tab" aria-expanded="true">
                  <i class="fa fa-gear" aria-hidden="true"></i>
                  Marketplace Export Setting
                </a>
              </li>
              <li role="presentation" class=""  v-if='contentFieldExportList[0]'>
                <a href="#download-content" role="tab" id="download" data-toggle="tab" aria-expanded="false">
                  <i class="fa fa-cloud-download" aria-hidden="true"></i>
                  <b>{{ marketplaces[marketplaceId] }}</b> Product Feed
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane fade active in" id="export-setting" aria-labelledby="export-setting">
                <marketplace-content-setting></marketplace-content-setting>
              </div>
              <div  v-if='contentFieldExportList[0]'
                role="tabpanel" class="tab-pane fade" id="download-content" aria-labelledby="download-content">
                <marketplace-content-export></marketplace-content-export>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import MarketplaceContentSetting from './marketplaceContentExport/MarketplaceContentSetting.vue'
  import MarketplaceContentExport from './marketplaceContentExport/MarketplaceContentExport.vue'
  import {
    getMarketplaceId,
    getMarketplaces,
    getMarketplaceContentExportList,
  } from '../../vuex/getters';
  export default {
    vuex: {
      getters: {
        marketplaceId: getMarketplaceId,
        marketplaces: getMarketplaces,
        contentFieldExportList: getMarketplaceContentExportList,
      }
    },
    components: {
      MarketplaceContentSetting,
      MarketplaceContentExport,
    }
  }
</script>