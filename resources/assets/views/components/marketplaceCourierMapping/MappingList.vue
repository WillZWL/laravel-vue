<template>
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
      <div class="x_content">
        <table class="table table-striped table-bordered bulk_action jambo_table" width="100%">
          <thead>
            <tr>
              <th>Courier ID</th>
              <th>Courier Code</th>
              <th>Marketplace</th>
              <th>Marketplace Courier</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="mapping in mappings">
              <td>{{ mapping.courier_id}}</td>
              <td>{{ mapping.courier_code }}</td>
              <td>{{ mapping.marketplace }}</td>
              <td>{{ mapping.marketplace_courier_name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  // import { fetchMarketplaceCourierMappingLists } from '../../../vuex/actions';
  import { getMarketplaceCourierMappingList } from '../../../vuex/getters';
  export default {
    vuex: {
      getters: {
        mappings: getMarketplaceCourierMappingList
      }
    }
  }
</script>