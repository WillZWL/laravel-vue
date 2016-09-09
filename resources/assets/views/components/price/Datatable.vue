<style>
.price_input_sm {width: 50px;}
</style>
<template>
    <pricesearch></pricesearch>
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
            <div class="x_title">
                <h2>Overview</h2>
                <ul class="nav navbar-right panel_toolbox">
                    <li></li>
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="x_content">
                <div class="modal fade custom_header" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
                    <customheader :headers="headers"></customheader>
                </div>
                <form name="fm_price" class="post_price">
                <table id="datatable-fixed-header" class="table table-striped table-bordered bulk_action jambo_table" width="100%">
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" id="check-all" class="flat">
                            </th>
                            <th v-for="header in headers">{{header}}</th>
                            <th>
                                <b class="btn btn-success" data-toggle="modal" data-target=".custom_header">Custom<br/>Header</b>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items">
                            <td class="a-center td_checkbox{{item.id}}">
                                <input v-if="item.selected_delivery_type != ''" type="checkbox" class="flat" name="id" value="{{item.id}}">
                            </td>
                            <td>{{item.marketplace_id}}</td>
                            <td>{{item.country_id}}</td>
                            <td>{{item.master_sku}}</td>
                            <td>{{item.esg_sku}}</td>
                            <td>{{item.product_name}}</td>
                            <td>{{item.sourcing_status}}</td>
                            <td>
                                <div class="col-md col-xs-12">
                                    <select class="form-control delivery_type{{item.id}}"
                                            v-if="item.available_delivery_type"
                                            v-on:change="changeDeliveryType(item)">
                                        <option value=""></option>
                                        <template v-for="(key, delivery_type) in item.available_delivery_type">
                                            <option value="{{key}}"
                                            v-if="key == item.selected_delivery_type" selected>
                                            {{key}}
                                            </option>
                                            <option value="{{key}}" v-else>{{key}}</option>
                                        </template>
                                    </select>
                                </div>
                            </td>
                            <td v-if="typeof (item.warehouse.ETRADE) != 'undefined'">
                                {{item.warehouse.ETRADE.inventory}}
                            </td>
                            <td v-else></td>
                            <td v-if="typeof (item.warehouse.ES_HK) != 'undefined'">
                                {{item.warehouse.ES_HK.inventory}}
                            </td>
                            <td v-else></td>
                            <td v-if="typeof (item.warehouse.ES_DGME) != 'undefined'">
                                {{item.warehouse.ES_DGME.inventory}}
                            </td>
                            <td v-else></td>
                            <td v-if="typeof (item.warehouse.CV_AMZ_FBA_UK) != 'undefined'">
                                {{item.warehouse.CV_AMZ_FBA_UK.inventory}}
                            </td>
                            <td v-else></td>
                            <td v-if="typeof (item.warehouse.CV_AMZ_FBA_US) != 'undefined'">
                                {{item.warehouse.CV_AMZ_FBA_US.inventory}}
                            </td>
                            <td v-else></td>
                            <td v-if="typeof (item.warehouse.ESG_AMZN_JP_FBA) != 'undefined'">
                                {{item.warehouse.ESG_AMZN_JP_FBA.inventory}}
                            </td>
                            <td v-else></td>
                            <td v-if="typeof (item.warehouse.ESG_AMZN_UK_FBA) != 'undefined'">
                                {{item.warehouse.ESG_AMZN_UK_FBA.inventory}}
                            </td>
                            <td v-else></td>
                            <td v-if="typeof (item.warehouse.ESG_AMZN_US_FBA) != 'undefined'">
                                {{item.warehouse.ESG_AMZN_US_FBA.inventory}}
                            </td>
                            <td v-else></td>
                            <td v-if="typeof (item.warehouse.PX_AMZN_FBA_UK) != 'undefined'">
                                {{item.warehouse.PX_AMZN_FBA_UK.inventory}}
                            </td>
                            <td v-else></td>
                            <td v-if="typeof (item.warehouse.ES_HK) != 'undefined'">
                                {{item.warehouse.ES_HK.inventory}}
                            </td>
                            <td v-else></td>
                            <td></td>
                            <td>
                                <input type="text" value="{{item.selling_price}}"
                                    class="price_input_sm selling_price{{item.id}}"
                                    v-on:change="getProfitAndMargin(item)">
                            </td>
                            <td>
                                <div class="col-md col-xs-12">
                                    <select class="form-control listing_status{{item.id}}">
                                    <template v-if="'Y' == item.listing_status">
                                        <option value="Y" selected>Y</option>
                                        <option value="N">N</option>
                                    </template>
                                    <template v-else>
                                        <option value="Y">Y</option>
                                        <option value="N" selected>N</option>
                                    </template>
                                    </select>
                                </div>
                            </td>
                            <td v-if="item.selected_delivery_type != ''">
                                <span v-if="item.available_delivery_type[item.selected_delivery_type].margin < 0.0"
                                      class="alert-danger">
                                    {{item.available_delivery_type[item.selected_delivery_type].profit}}
                                </span>
                                <span v-else>
                                    {{item.available_delivery_type[item.selected_delivery_type].profit}}
                                </span>
                            </td>
                            <td v-else>N/A</td>
                            <td v-if="item.selected_delivery_type != ''">
                                <span v-if="item.available_delivery_type[item.selected_delivery_type].margin < 0.0"
                                      class="alert-danger">
                                    {{item.available_delivery_type[item.selected_delivery_type].margin}}
                                </span>
                                <span v-else>
                                    {{item.available_delivery_type[item.selected_delivery_type].margin}}
                                </span>
                                %
                            </td>
                            <td v-else>N/A</td>
                            <td>{{item.selling_price}}</td>
                            <td>{{item.selected_delivery_type}}</td>
                            <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: {{item.updated_at}}">
                                <input type="Button" value="Detail" class="btn btn-primary" data-toggle="modal" data-target=".overview-modal{{item.id}}">
                                <div class="modal fade overview-modal{{item.id}}" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
                                    <!-- detail overview-->
                                    <overviewmodal :item="item"></overviewmodal>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
        </div>
    </div>
    <div class="navbar navbar-default navbar-fixed-bottom">
        <div class="x_panel">
            <div class="">
                <div class="col-md-12 col-sm-12 col-xs-12 col-md-offset-6">
                    <input type="submit" class="btn btn-success" value="Update" @click="postForm()">
                </div>
            </div>
        </div>
    </div>
    </form>
</template>

<script>
    import {api_url, access_token} from '../../../js/vue.config.js'
    import Pricesearch from './PriceSearch.vue'
    import Overviewmodal from './OverviewModal.vue'
    import Customheader from './CustomHeader.vue'
    export default {
        components: {
            Pricesearch,
            Overviewmodal,
            Customheader
        },
        ready() {
            this.initDatatable()
        },
        data() {
            return {
                items: {},
                meta: {
                   pagination: {
                        'current_page': 0
                   }
                },
                headers:
                [
                    'Marketplace ID',
                    'Country ID',
                    'ESG_Master_SKU',
                    'ESG_____SKU',
                    'Product Name',
                    'Sourcing status',
                    'Delivery Type',
                    'ETRADE QTY',
                    'ES_HK QTY',
                    'ES_DGME QTY',
                    'CV_AMZ_FBA_UK',
                    'CV_AMZ_FBA_US',
                    'ESG_AMZN_JP_FBA',
                    'ESG_AMZN_UK_FBA',
                    'ESG_AMZN_US_FBA',
                    'PX_AMZN_FBA_UK',
                    'Listing QTY',
                    'Item Cost',
                    'Selling Price',
                    'Listing Status',
                    'Profit',
                    'Margin',
                    'Price',
                    'delivery_type'
                ],
                hidden_columns: [8, 9, 10, 11, 12, 13, 14, 15, 16, 18],
                always_hidden_columns: [23, 24],
                export_columns: [3, 4, 1, 2, 24, 23, 17],
                api_url:api_url,
                access_token:access_token
            }
        },
        methods: {
            initDatatable() {
                $.isLoading({ text: "Loading", class:"fa fa-refresh fa-spin" });
                //hidden some columns when init
                var hidden_columns = this.hidden_columns;
                //export csv file
                var export_columns = this.export_columns;

                var always_hidden_columns = this.always_hidden_columns;

                this.$http({
                }).then(function() {
                    var table = $('#datatable-fixed-header').DataTable({
                        dom: "Bfrtip",
                        fixedHeader: true,
                        bSort:false,
                        iDisplayLength:30,
                        "paging":   false,
                        "info":false,
                        buttons: [
                            {
                                extend: "csv",
                                className: "btn-sm",
                                title:"Accelerator_Product_Prcing_Overview",
                                exportOptions: {
                                    columns: export_columns
                                }
                            },
                            {
                                extend: "excel",
                                className: "btn-sm",
                                title:"Accelerator_Product_Prcing_Overview",
                                exportOptions: {
                                    columns: export_columns
                                }
                            },
                            {
                                extend: "print",
                                className: "btn-sm",
                                exportOptions: {
                                    columns: export_columns
                                }
                            }
                        ]
                    });
                    //hidden columns
                    for (var i = 0; i < hidden_columns.length; i++) {
                        var column = table.column(hidden_columns[i]);
                        column.visible( ! column.visible() );
                        $('a.toggle-vis').eq(hidden_columns[i]).removeClass("btn-success").addClass('btn-danger');
                    };
                    for (var j = 0; j < always_hidden_columns.length; j++) {
                        table.column(always_hidden_columns[i]);
                        column.visible( ! column.visible() );
                    };
                    $('a.toggle-vis').on( 'click', function (e) {
                        e.preventDefault();
                        var column = table.column( $(this).attr('data-column') );
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
                            $(".bulk_action input[name='id']").iCheck('check');
                        }
                        if (checkState === 'none') {
                            $(".bulk_action input[name='id']").iCheck('uncheck');
                        }

                        var checkCount = $(".bulk_action input[name='id']:checked").length;
                        if (checkCount) {
                            $('.column-title').hide();
                            $('.bulk-actions').show();
                            $('.action-cnt').html(checkCount + ' Records Selected');
                        } else {
                            $('.column-title').show();
                            $('.bulk-actions').hide();
                        }
                    }
                }).then(function() {
                    $.isLoading("hide");
                });
            },
            changeDeliveryType: function(item) {
                var delivery_type = $(".delivery_type"+item.id).val();
                item.selected_delivery_type = delivery_type;
            },
            getProfitAndMargin: function(item) {
                var id = item.id;
                var delivery_type = $(".delivery_type"+item.id).val();
                var selling_price = $(".selling_price"+item.id).val();
                this.$http({
                    url:this.api_url+"marketplace-product/estimate?id="+id+"&selling_price="+selling_price+"&access_token="+this.access_token,
                    method: 'GET'
                }).then(function (response) {
                    item.available_delivery_type = response.data;
                })
            },
            postForm: function() {
                var ids = $("form[name='fm_price']").serializeArray();
                var post_data = {};
                $.each(ids, function() {
                    var row = {};
                    row.id = this.value;
                    row.selling_price = $(".selling_price"+this.value).val();
                    row.delivery_type = $(".delivery_type"+this.value).val();
                    row.listing_status = $(".listing_status"+this.value).val();
                    post_data[this.value] = row;
                });
                // post_data.access_token = 'WpMpN6GG1gm4lGmq8o8xzy1ZrPc2RkfnuhUZqhFH';
                this.$http.post(
                    'http://price_tool/api/price', post_data,
                    {
                        emulateJSON: true
                    }
                ).then(function (response) {
                    console.log(response);
                });
            },
            pagination: function(url) {
                this.$children[0].submitForm(url);
            }
        },
        events: {
            'form-search': function(search_result) {
                this.$set('items', search_result.data);
                this.$set('meta', search_result.meta);
                var table = $('#datatable-fixed-header').DataTable();
                table.destroy();
                this.initDatatable();
            }
        }
    };
</script>
<style>

</style>