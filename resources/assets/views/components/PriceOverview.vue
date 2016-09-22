<template>
  <div class="row">
    <price-search></price-search>
    <data-table></data-table>
  </div>
</template>
<script>
  import DataTable from './price/Datatable.vue'
  import PriceSearch from './price/PriceSearch.vue'
  export default {
    components: {
      PriceSearch,
      DataTable
    }
  }
</script>