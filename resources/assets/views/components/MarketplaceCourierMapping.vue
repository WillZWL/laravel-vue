<template>
    <div class="row">
        <filters></filters>
        <mapping-list></mapping-list>
        <add-mapping></add-mapping>
    </div>
</template>

<script>
    import AddMapping from './marketplaceCourierMapping/AddMapping.vue';
    import Filters from './marketplaceCourierMapping/Filters.vue';
    import MappingList from './marketplaceCourierMapping/MappingList.vue';
    export default {
        components: {
            AddMapping,
            Filters,
            MappingList
        }
    }
</script>