<template>
    <pricehead></pricehead>
    <div class="row">
        <datatable></datatable>
    </div>
</template>
<script>
    import Pricehead from './price/PriceHead.vue'
    import Datatable from './price/Datatable.vue'
    export default {
      components: {
        Pricehead,
        Datatable
      }
    }
</script>