<template>
  <div class="row">
    <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="x_panel">
        <div class="x_content">
          <div class="" role="tabpanel" data-example-id="togglable-tabs">
            <ul id="myTab" class="nav nav-tabs bar_tabs" role="tablist">
              <li role="presentation" class="active">
                <a href="#lazada-content" role="tab" id="lazada" data-toggle="tab" aria-expanded="true">Lazada</a>
              </li>
              <li role="presentation" class="">
                <a href="#amazon-content" role="tab" id="amazon" data-toggle="tab" aria-expanded="false">Amazon</a>
              </li>
              <li role="presentation" class="">
                <a href="#newegg-content" role="tab" id="newegg" data-toggle="tab" aria-expanded="false">Newegg</a>
              </li>
            </ul>
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane fade active in" id="lazada-content" aria-labelledby="lazada">
                <field-list :id="'lazada-table'" :lists="lazadaList"></field-list>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="amazon-content" aria-labelledby="amazon">
                <field-list :id="'amazon-table'" :lists="amazonList"></field-list>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="newegg-content" aria-labelledby="newegg">
                <field-list :id="'newegg-table'" :lists="neweggList"></field-list>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FieldList from './marketplaceProductFieldMapping/FieldList.vue'
  import { lazadaList } from './marketplaceProductFieldMapping/LazadaField.js'
  import { amazonList } from './marketplaceProductFieldMapping/AmazonField.js'
  import { neweggList } from './marketplaceProductFieldMapping/NeweggField.js'
  export default {
    data() {
      return {
        lazadaList: lazadaList,
        amazonList: amazonList,
        neweggList: neweggList
      }
    },
    components: {
      FieldList
    }
  }
</script>