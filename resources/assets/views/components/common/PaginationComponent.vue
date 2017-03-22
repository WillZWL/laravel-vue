<template>
    <div>
        <div class="dataTables_info" id="datatable-fixed-header_info" role="status" aria-live="polite"
                v-if="meta.pagination.current_page > 0">
            Total Records: {{meta.pagination.total}}, Per Page: {{meta.pagination.per_page}}, Total Pages: {{meta.pagination.total_pages}}
        </div>
        <div class="dataTables_paginate paging_simple_numbers" v-if="meta.pagination.current_page > 0">
            <ul class="pagination">
              <template v-if="meta.pagination.current_page == 1">
                <li class="paginate_button previous disabled">
                  <a aria-controls="datatable-fixed-header" tabindex="0">Previous</a>
                </li>
              </template>
              <template v-else>
                <li class="paginate_button previous">
                  <a aria-controls="datatable-fixed-header" tabindex="0" @click="pagination(meta.pagination.links.previous)">Previous</a>
                </li>
              </template>
              <li class="paginate_button current disabled">
                <a aria-controls="datatable-fixed-header" tabindex="0" >
                  Page {{meta.pagination.current_page}} of {{meta.pagination.total_pages}}
                </a>
              </li>
              <template v-if="meta.pagination.current_page < meta.pagination.total_pages">
                <li class="paginate_button next" id="datatable-fixed-header_next">
                  <a aria-controls="datatable-fixed-header" tabindex="0" @click="pagination(meta.pagination.links.next)">Next</a>
                </li>
              </template>
              <template v-else>
                <li class="paginate_button next disabled" id="datatable-fixed-header_next">
                  <a aria-controls="datatable-fixed-header" tabindex="0">Next</a>
                </li>
              </template>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        props: [
            'meta'
        ],
        methods: {
            pagination: function(url) {
                this.$parent.pagination(url)
            }
        }
    }
</script>