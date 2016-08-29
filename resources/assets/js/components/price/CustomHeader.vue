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
                            - <a class="toggle-vis btn btn-success" data-column="1">Marketplace ID</a>
                            - <a class="toggle-vis btn btn-success" data-column="2">ESG Master SKU</a>
                            - <a class="toggle-vis btn btn-success" data-column="3">ESG SKU</a>
                            - <a class="toggle-vis btn btn-success" data-column="4">Product Name</a>
                            - <a class="toggle-vis btn btn-success" data-column="5">Sourcing status</a>
                            - <a class="toggle-vis btn btn-success" data-column="6">ETRADE QTY</a>
                            - <a class="toggle-vis btn btn-success" data-column="7">ES_HK QTY</a>
                            - <a class="toggle-vis btn btn-success" data-column="8">ES_DG QTY</a>
                            - <a class="toggle-vis btn btn-success" data-column="9">Listing QTY</a>
                            - <a class="toggle-vis btn btn-success" data-column="10">Item Cost</a>
                            - <a class="toggle-vis btn btn-success" data-column="11">Selling Price</a>
                            - <a class="toggle-vis btn btn-success" data-column="12">Profit</a>
                            - <a class="toggle-vis btn btn-success" data-column="13">Margin</a>
                            <!-- - <a class="toggle-vis btn btn-success" data-column="14">Detail</a> -->
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
    $('a.toggle-vis').on( 'click', function (e) {
        e.preventDefault();
        // Get the column API object
        var column = table.column( $(this).attr('data-column') );
        // Toggle the visibility
        column.visible( ! column.visible() );
        if (!column.visible()) {
            $(this).removeClass("btn-success").addClass('btn-danger');
        } else {
            $(this).removeClass("btn-danger").addClass('btn-success');
        }
    });
</script>