<template>
    <div class="row">
        <filters></filters>
        <order-list></order-list>
    </div>
</template>
<script>
    import Filters from './orderSettlement/Filters.vue';
    import OrderList from './orderSettlement/OrderList.vue';
    export default {
        components: {
            Filters,
            OrderList
        }
    }
</script>