<template>
    <div class="row">
        <filters :validation_status_list='validation_status_list'></filters>
        <order-list :validation_status_list='validation_status_list'></order-list>
    </div>
</template>
<script>
    import Filters from './orderSettlement/Filters.vue';
    import OrderList from './orderSettlement/OrderList.vue';
    export default {
        components: {
            Filters,
            OrderList
        },
        data () {
            return {
                validation_status_list: {
                    0: 'Unverified',
                    1: 'Verified > Email sent to MP 1',
                    2: 'Verified > Email sent to MP 2',
                    3: 'Verified > Email sent to MP 3',
                    4: 'Verified > MP release settlement within 14 days',
                    5: 'Verified > MP reject',
                    6: 'Verified > Order is cancelled in MP',
                    7: 'Verified > Order is returning to us',
                    8: 'Verified > Order is returned to us',
                    9: 'Verified > Called to MP',
                    10: 'Verified > FIN to check the bank account',
                    11: 'Verified > Others',
                    12: 'Closed > Settlement received'
                }
            }
        }
    }
</script>