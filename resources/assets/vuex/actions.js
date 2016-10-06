import Vue from 'vue';
import VueResource from 'vue-resource'
Vue.use(VueResource);

export const API_URL = 'http://admincentre.eservicesgroup.com:7890/api/';

//fetch Lists
export const fetchBrandLists = ({ dispatch }) => {
    Vue.http({
        url:API_URL+'brand',
        method: 'GET'
    }).then(function (response) {
        var brand_manager_list = {};
        for (var i = 0;i< response.data.data.length;i++) {
            if (response.data.data[i].brand_manager != '') {
                brand_manager_list[response.data.data[i].brand_manager] = response.data.data[i].brand_manager;

            }
        }
        return dispatch('FETCH_BRAND_LISTS', response.data.data, brand_manager_list);
    })
};

export const fetchMarketplaceLists = ({ dispatch }) => {
    Vue.http({
        url:API_URL+'marketplace',
        method: 'GET'
    }).then(function (response) {
        return dispatch('FETCH_MARKETPLACE_LISTS', response.data.data);
    })
};

export const fetchMerchantLists = ({ dispatch }) => {
    Vue.http({
        url:API_URL+'merchant',
        method: 'GET'
    }).then(function (response) {
        return dispatch('FETCH_MERCHANT_LISTS', response.data.data);
    })
};

export const fetchCountryLists = ({ dispatch }) => {
    Vue.http({
        url:API_URL+'country',
        method: 'GET'
    }).then(function (response) {
        return dispatch('FETCH_COUNTRY_LIST', response.data.data);
    })
};
// end of fetch Lists

//Price Overview
export const priceOverviewSearch = ({ dispatch }, queryStr = '') => {
    $.isLoading({ text: "Loading", class:"fa fa-refresh fa-spin" });
    if (queryStr == '') {
        var queryStr = $("form[name='fm']").serialize();
    }
    window.history.pushState(null, null, 'price-overview?'+queryStr);
    Vue.http({
        url:API_URL+'marketplace-product/search?'+queryStr,
        method: 'GET'
    }).then(function (response) {
        setSearchFormValue;
        $.isLoading("hide");
        var table = $('#datatable-fixed-header').DataTable();
        table.destroy();
        dispatch('FETCH_PRICEOVERVIEW_LISTS', response.data.data, response.data.meta);
    }).then(function(){
        _initPriceOverviewDatatable();
    }).catch(function(){
        $.isLoading("hide");
        $.isLoading({ text: "Error 500, Internal Server Error", class:"fa fa-exclamation-triangle" });
        setTimeout( function(){
            $.isLoading("hide");
        }, 3000)
    });
};

export const setSearchFormValue = ({ dispatch }) => {
    for (var i = 0; i < $(".form_search select").length; i++) {
        var key = $(".form_search select")[i].name;
        var value = url('?' + key);
        $(".form_search select[name="+key+"]").val(value);
    }
    $(".form_search input[name='inventory']").val(url('?inventory'));
    $(".form_search textarea[name='master_sku_list']").val(url('?master_sku_list'));
    $(".form_search textarea[name='esg_sku_list']").val(url('?esg_sku_list'));
};

var defalut_hidden_columns = {"hidden": [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 25, 26, 27, 28]};

const _saveColumnState = (column, isHidden) => {
    var hidden_columns, index; 
    //Cookies.remove("priceOverviewHeaderHiddenList");
    if (!Cookies.getJSON("priceOverviewHeaderHiddenList"))
        hidden_columns = defalut_hidden_columns;
    else
        hidden_columns = Cookies.getJSON("priceOverviewHeaderHiddenList");

    index = $.inArray(parseInt(column), hidden_columns.hidden);
    if (isHidden) {
        if (index > -1)
            hidden_columns.hidden.splice(index, 1);
        hidden_columns.hidden.push(parseInt(column));
    } else {
        if (index > -1)
            hidden_columns.hidden.splice($.inArray(parseInt(column), hidden_columns.hidden), 1);
    }
    Cookies.set("priceOverviewHeaderHiddenList", hidden_columns);
}

const _initPriceOverviewDatatable = () => {
    $.isLoading({ text: "Loading", class:"fa fa-refresh fa-spin" });
        //hidden some columns when init
    Vue.http({}).then(function() {
        var hidden_columns = defalut_hidden_columns;
        if (Cookies.getJSON("priceOverviewHeaderHiddenList")) {
            hidden_columns = Cookies.getJSON("priceOverviewHeaderHiddenList").hidden;
        }
        var always_hidden_columns = [26, 27, 28];
        var export_columns = [3, 4, 1, 2, 26, 25, 27];
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
                    text: 'Export CSV Current Page',
                    className: "btn-sm",
                    title:"Accelerator_Product_Prcing_Overview",
                    exportOptions: {
                      columns: export_columns
                    }
                },
                {
                    extend: "excel",
                    text: 'Export Excel Current Page',
                    className: "btn-sm",
                    title:"Accelerator_Product_Prcing_Overview",
                    exportOptions: {
                      columns: export_columns
                    }
                },
                    {
                    extend: "print",
                    text: 'Print Current Page',
                    className: "btn-sm",
                    exportOptions: {
                      columns: export_columns
                    }
                }
            ]
        });
        //hidden columns
        console.log(hidden_columns.length);
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
            var columnId = $(this).attr('data-column');
            var column = table.column($(this).attr('data-column'));
            column.visible( ! column.visible() );
            if (!column.visible()) {
                $(this).removeClass("btn-success").addClass('btn-danger');
                _saveColumnState(columnId, true);
            } else {
                $(this).removeClass("btn-danger").addClass('btn-success');
                _saveColumnState(columnId, false);
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
};

export const initPriceOverviewDatatable = ({ dispatch }) => {
    _initPriceOverviewDatatable();
};

//end price OverView

