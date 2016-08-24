<template>
    <div class="row">
        <pricesearch></pricesearch>
        <datatable></datatable>
    </div>
</template>
<script>
    import Pricesearch from './price/PriceSearch.vue'
    import Datatable from './price/Datatable.vue'
    export default {
      components: {
        Pricesearch,
        Datatable
      },
      replace: false
    }
</script>