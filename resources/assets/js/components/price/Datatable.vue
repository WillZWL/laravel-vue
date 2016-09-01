<template>
    <pricesearch></pricesearch>
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
            <div class="x_title">
                <h2>Filters <small>[Base]</small></h2>
                <ul class="nav navbar-right panel_toolbox">
                    <li></li>
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="x_content">
                <div class="modal fade custom_header" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
                    <customheader></customheader>
                </div>
                <table id="datatable-fixed-header" class="table table-striped table-bordered bulk_action jambo_table" width="100%">
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" id="check-all" class="flat">
                            </th>
                            <th>Marketplace ID</th>
                            <th>ESG Master SKU</th>
                            <th>ESG SKU</th>
                            <th>Product Name</th>
                            <th>Sourcing status</th>
                            <th width="5%">ETRADE QTY</th>
                            <th>ES_HK QTY</th>
                            <th>ES_DG QTY</th>
                            <th>Listing QTY</th>
                            <th>Item Cost</th>
                            <th>Selling Price</th>
                            <th>Profit</th>
                            <th>Margin</th>
                            <th>
                                <b class="btn btn-success" data-toggle="modal" data-target=".custom_header">Custom Header</b>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items">
                            <td class="a-center ">
                                <input type="checkbox" class="flat" name="table_records">
                            </td>
                            <td>{{item.markerplace_id}}</td>
                            <td>{{item.master_sku}}</td>
                            <td>{{item.sku}}</td>
                            <td>{{item.prod_name}}</td>
                            <td>{{item.sourcing_status}}</td>
                            <td>
                                <input type="text" value="{{item.etrade_qty}}" name="etrade_qty" class="price_input_sm">
                            </td>
                            <td>
                                <input type="text" value="{{item.es_hk_qty}}" name="es_hk_qty" class="price_input_sm">
                            </td>
                            <td>
                                <input type="text" value="{{item.es_dg_qty}}" name="es_dg_qty" class="price_input_sm">
                            </td>
                            <td>
                                <input type="text" value="{{item.es_dg_qty}}" name="es_dg_qty" class="price_input_sm">
                            </td>
                            <td>
                                <input type="text" value="{{item.item_price}}" name="item_price" class="price_input_sm">
                            </td>
                            <td>
                                <input type="text" value="{{item.item_price + 2}}" name="item_price" class="price_input_sm">
                            </td>
                            <td>{{item.profit}}</td>
                            <td>{{item.margin}}</td>
                            <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: {{item.modify_on}}  Update By:{{item.modify_by}}">
                                <input type="Button" value="Detail" class="btn btn-primary" data-toggle="modal" data-target=".overview-modal{{$index}}">
                                <div class="modal fade overview-modal{{$index}}" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
                                    <!-- detail overview-->
                                    <overviewmodal :item="item"></overviewmodal>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="navbar navbar-default navbar-fixed-bottom">
        <div class="x_panel">
            <div class="">
                <div class="col-md-12 col-sm-12 col-xs-12 col-md-offset-5">
                    <button type="submit" class="btn btn-primary">Cancel</button>
                    <button type="submit" class="btn btn-success">Update</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Pricesearch from './PriceSearch.vue'
    import Overviewmodal from './OverviewModal.vue'
    import Customheader from './CustomHeader.vue'
    export default {
        components: {
            Pricesearch,
            Overviewmodal,
            Customheader
        },
        // for test
        ready() {
            // this.initDatatable()
        },
        data() {
            return {
                items: {}
            }
        },
        methods: {
            initDatatable() {
                this.$http({

                }).then(function() {
                    var table = $('#datatable-fixed-header').DataTable({
                        dom: "Bfrtip",
                        fixedHeader: true,
                        bSort:false,
                        iDisplayLength:25,
                        buttons: [
                            {
                                extend: "csv",
                                className: "btn-sm",
                                exportOptions: {
                                    columns: [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
                                }
                            },
                            {
                                extend: "excel",
                                className: "btn-sm",
                                exportOptions: {
                                    columns: [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
                                }
                            },
                            {
                                extend: "pdfHtml5",
                                className: "btn-sm",
                                exportOptions: {
                                    columns: [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
                                }
                            },
                            {
                                extend: "print",
                                className: "btn-sm",
                                exportOptions: {
                                    columns: [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
                                }
                            }
                        ]
                    });
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
                }).then(function() {
                    if ($("input.flat")[0]) {
                        $('input.flat').iCheck({
                            checkboxClass: 'icheckbox_flat-green',
                            radioClass: 'iradio_flat-green'
                        });
                    }
                    // /iCheck
                    // Table
                    $('table input').on('ifChecked', function () {
                        checkState = '';
                        $(this).parent().parent().parent().addClass('selected');
                        countChecked();
                    });
                    $('table input').on('ifUnchecked', function () {
                        checkState = '';
                        $(this).parent().parent().parent().removeClass('selected');
                        countChecked();
                    });

                    var checkState = '';

                    $('.bulk_action input').on('ifChecked', function () {
                        checkState = '';
                        $(this).parent().parent().parent().addClass('selected');
                        countChecked();
                    });
                    $('.bulk_action input').on('ifUnchecked', function () {
                        checkState = '';
                        $(this).parent().parent().parent().removeClass('selected');
                        countChecked();
                    });
                    $('.bulk_action input#check-all').on('ifChecked', function () {
                        checkState = 'all';
                        countChecked();
                    });
                    $('.bulk_action input#check-all').on('ifUnchecked', function () {
                        checkState = 'none';
                        countChecked();
                    });
                    function countChecked() {
                        if (checkState === 'all') {
                            $(".bulk_action input[name='table_records']").iCheck('check');
                        }
                        if (checkState === 'none') {
                            $(".bulk_action input[name='table_records']").iCheck('uncheck');
                        }

                        var checkCount = $(".bulk_action input[name='table_records']:checked").length;

                        if (checkCount) {
                            $('.column-title').hide();
                            $('.bulk-actions').show();
                            $('.action-cnt').html(checkCount + ' Records Selected');
                        } else {
                            $('.column-title').show();
                            $('.bulk-actions').hide();
                        }
                    }
                })
            }
        },
        events: {
            'form-search': function(search_result) {
                this.$set('items', search_result);
                var table = $('#datatable-fixed-header').DataTable();
                table.destroy();
                this.initDatatable();
            }
        }
    };
</script>
<style>

</style>