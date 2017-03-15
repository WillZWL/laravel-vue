<template>
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                 <h4 class="modal-title" id="myModalLabel2">Show OR Hide columns: </h4>
            </div>
            <div class="modal-body">
                <div class="x_panel">
                    <div class="x_title">
                         <h2><small>"Green" for Show, "Red" for "Hide"</small></h2>
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
                        <div class="x_title">
                            <a class="toggle-vis btn btn-success" data-column="0">Checkbox</a>
                            <a class="toggle-vis btn btn-success" v-for="(index, header) in headers" data-column="{{index}}">{{ header }}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: [
            'headers'
        ]
    }
</script>