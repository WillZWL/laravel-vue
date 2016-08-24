<template>
    <pricehead></pricehead>
    <div class="row">
        <pricesearch></pricesearch>
        <datatable></datatable>
    </div>
</template>
<script>
    import Pricehead from './price/PriceHead.vue'
    import Pricesearch from './price/PriceSearch.vue'
    import Datatable from './price/Datatable.vue'
    export default {
      components: {
        Pricehead,
        Pricesearch,
        Datatable
      }
    }
</script>