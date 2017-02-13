import Vue from 'vue';
import VueResource from 'vue-resource'
Vue.use(VueResource);

export const API_URL = 'http://admincentre.eservicesgroup.com:7890/api/';

export const ACCESS_TOKEN = 'hhwNqYiJMRNwR3tQGsJhTiist002SJ8dXotwKYCE'

//fetch Lists
export const fetchProductLists = ({ dispatch }, keyword) => {
    $.isLoading({ text: "Loading", class:"fa fa-refresh fa-spin" });
    Vue.http({
        url: API_URL + 'product/sku-mapping-list?keyword=' + keyword,
        method: 'GET'
    }).then(function (response) {
        $.isLoading("hide");
        return dispatch('FETCH_PRODUCT_LISTS', response.data);
    }).catch(function(){
        $.isLoading("hide");
        $.isLoading({ text: "Error 500, Internal Server Error", class:"fa fa-exclamation-triangle" });
        setTimeout( function(){
            $.isLoading("hide");
        }, 3000)
    });
};

export const fetchUserLists = ({ dispatch }, roles) => {

    for (var i = roles.length - 1; i >= 0; i--) {
        roles[i] = "role[]="+roles[i];
    }
    var query = roles.join("&");

    Vue.http({
        url: API_URL + 'user/list?'+query,
        method: 'GET'
    }).then(function (response) {
        return dispatch('FETCH_USER_LISTS', response.data);
    })
};

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

export const fetchFreightCostList = ({ dispatch }, country, state, weight) => {
    Vue.http({
        url: API_URL + 'freight-cost?country=' + country + '&state=' + state + '&weight=' + weight,
        method: 'GET'
    }).then(function (response) {
        return dispatch('FETCH_FREIGHT_COST_LIST', response.data);
    })
};

export const fetchCountryWithStateList = ({ dispatch }) => {
    Vue.http({
        url: API_URL + 'country-state',
        method: 'GET'
    }).then(function (response) {
        return dispatch('FETCH_COUNTRY_WITH_STATE_LIST', response.data);
    })
};

export const fetchWeightList = ({ dispatch }) => {
    Vue.http({
        url: API_URL + 'weight',
        method: 'GET'
    }).then(function (response) {
        return dispatch('FETCH_WEIGHT_LIST', response.data.data);
    })
};

export const fetchSelectedCouriers = ({ dispatch }, country) => {
    Vue.http({
        url: API_URL + 'accelerator-shipping?country=' + country,
        method: 'GET'
    }).then(function (response) {
        return dispatch('FETCH_SELECTED_COURIERS', response.data);
    })
};

export const fetchMarketplaceLists = ({ dispatch }, marketplaceId='') => {
    Vue.http({
        url:API_URL+'marketplace?marketplace='+marketplaceId,
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

export const fetchCategoryLists = ({ dispatch }) => {
    Vue.http({
        url:API_URL+'category',
        method: 'GET'
    }).then(function (response) {
        return dispatch('FETCH_CATEGORY_LIST', response.data.data);
    })
};

export const fetchColourLists = ({ dispatch }) => {
    Vue.http({
        url:API_URL+'colour',
        method: 'GET'
    }).then(function (response) {
        return dispatch('FETCH_COLOUR_LIST', response.data.data);
    })
};

export const fetchVersionLists = ({ dispatch }) => {
    Vue.http({
        url:API_URL+'version',
        method: 'GET'
    }).then(function (response) {
        return dispatch('FETCH_VERSION_LIST', response.data.data);
    })
};

export const fetchSupplierLists = ({ dispatch }) => {
    Vue.http({
        url:API_URL+'supplier',
        method: 'GET'
    }).then(function (response) {
        return dispatch('FETCH_SUPPLIER_LIST', response.data.data);
    })
};

export const fetchHscodeCategoryLists = ({ dispatch }) => {
    Vue.http({
        url:API_URL+'hscode-category',
        method: 'GET'
    }).then(function (response) {
        return dispatch('FETCH_HSCODE_CATEGORY_LIST', response.data.data);
    })
};

export const fetchDefaultWarehouseLists = ({ dispatch }) => {
    Vue.http({
        url:API_URL+'warehouse/default-warehouse',
        method: 'GET'
    }).then(function (response) {
        return dispatch('FETCH_DEFAULT_WAREHOUSE_LIST', response.data.data);
    })
};

export const fetchMarketplaceContentFieldLists = ({ dispatch }) => {
    Vue.http({
        url:API_URL+'marketplace-content-field',
        method: 'GET'
    }).then(function (response) {
        return dispatch('FETCH_MARKETPLACE_CONTENT_FIELD_LIST', response.data.data);
    })
};

export const fetchMarketplaceStores = ({ dispatch }) => {
    Vue.http({
        url: API_URL + 'stores',
        method: 'GET'
    }).then(function (response) {
        return dispatch('FETCH_MARKETPLACE_STORES', response.data.data);
    })
};

export const fetchCourierLists = ({ dispatch }) => {
    Vue.http({
        url:API_URL + 'couriers',
        method: 'GET'
    }).then(function (response) {
        return dispatch('FETCH_COURIER_LIST', response.data.data);
    })
};

export const fetchMarketplaceCourierMappingLists = ({ dispatch }) => {
    Vue.http({
        url: API_URL + 'marketplace-courier-mapping-list',
        method: 'GET'
    }).then(function (response) {
        return dispatch('FETCH_MARKETPLACE_COURIER_MAPPINGS', response.data.data);
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
        // setSearchFormValue;
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

export const exportAcceleratorSalesReport = ({ dispatch }, queryStr = '') => {
    queryStr = (queryStr != '') ? queryStr : $("form[name='export-sales-report-form'") .serialize();
    var downloadLink = API_URL + 'accelerator-sales-report?' + queryStr + '&access_token=' + ACCESS_TOKEN;
    console.log(downloadLink);
    window.open(downloadLink);
};

export const exportInventoryFeed = ({ dispatch }, queryStr = '') => {
    if (queryStr == '') {
        var queryStr = $("form[name='fm']").serialize();
    }

    var downloadLink = API_URL+'marketplace-product/export?'+queryStr+'&access_token='+ACCESS_TOKEN;
    window.open(downloadLink);
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

var defalut_hidden_columns = {"hidden": [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 25, 26, 27]};

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

    function sortMixNumber(a, b) {
        a = parseFloat(a);
        a = isNaN(a) ? Number.NEGATIVE_INFINITY : a;
        b = parseFloat(b);
        b = isNaN(b) ? Number.NEGATIVE_INFINITY : b;

        return a - b;
    }
    jQuery.extend( jQuery.fn.dataTableExt.oSort, {
        "mix-num-fmt-asc": function (a, b) {
            return sortMixNumber(a, b);
        },
        "mix-num-fmt-desc": function (a, b) {
            return sortMixNumber(a, b) * -1;
        }
    });
        //hidden some columns when init
    Vue.http({}).then(function() {
        var hidden_columns = defalut_hidden_columns.hidden;
        if (Cookies.getJSON("priceOverviewHeaderHiddenList")) {
            hidden_columns = Cookies.getJSON("priceOverviewHeaderHiddenList").hidden;
        }
        var always_hidden_columns = [26, 27];
        var table = $('#datatable-fixed-header').DataTable({
            fixedHeader: true,
            "columnDefs": [
                { "type": "mix-num-fmt", "targets": [23, 24] }
            ],
            iDisplayLength: 30,
            "paging": false,
            "info": false,
            buttion: []
        });

        for (var i = 0; i < hidden_columns.length; i++) {
            var column = table.column(hidden_columns[i]);
            column.visible( ! column.visible() );
            $('a.toggle-vis').eq(hidden_columns[i]).removeClass("btn-success").addClass('btn-danger');
        };

        for (var j = 0; j < always_hidden_columns.length; j++) {
            var column = table.column(always_hidden_columns[i]);
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

//=======================================================================================
//=================================== Product OverView ==================================

const msgBox = (content='', type, timeout) => {
    if (type=='S') {
      var seledClacss = "fa-check";
  } else {
      var seledClacss = 'fa-exclamation-triangle'
  }
  $.isLoading("hide");
  $.isLoading({ text: content, class:"fa " + seledClacss });
  setTimeout( function(){
      $.isLoading("hide");
  }, timeout);
};

// ProdInfo for Product OverView
export const setProductSku = ({ dispatch }, newSku='') => {
    return dispatch('SET_PRODUCT_SKU', newSku);
};

export const getProduct = ({ dispatch }, sku, lang_id='en') => {
    if (!sku) {
          return false;
    }

    Vue.http({
        url:API_URL + 'product/' + sku + '/' + lang_id,
        method: 'GET'
    }).then(function (response) {
      if (response.data.data.product_info) {
            dispatch('SET_PRODUCT_INFO', response.data.data.product_info);
            dispatch('SET_MERCHANT_PRODUCT_MAPPING', response.data.data.merchant_sku_mapping);
            dispatch('SET_SUPPLIER_PRODUCT', response.data.data.supplier_product);
            dispatch('SET_PRODUCT_CONTENT', response.data.data.product_content);
            dispatch('SET_PRODUCT_CONTENT_EXTEND', response.data.data.supplier_product_extend);
            dispatch('SET_PRODUCT_IMAGES', response.data.data.images);
            dispatch('SET_PRODUCT_FEATURES', response.data.data.product_features);
            dispatch('SET_HS_CODE', response.data.data.hs_code);

            $.isLoading("hide");
        } else {
            msgBox("Failed, Cannot take a product info", "F", 1000);
        }
    }).catch(function(){
        msgBox("Error 500, Internal Server Error", "F", 1000);
    });
};

export const submitBasicInfoForm = ({dispatch, state}) => {
    var submitForm = $('#product-info-form');
    submitForm.parsley().validate();

    if (true === submitForm.parsley().isValid()) {
        var jsonData = submitForm.serializeObject();
        jsonData['sku'] = state.productSku;

        Vue.http({
            url: API_URL + "product/" + state.productSku,
            method: 'POST',
            data: jsonData,
        }).then(function (response) {
            if (response.data.success === true) {
                dispatch('SET_PRODUCT_INFO', response.data.product_info);
                msgBox(response.data.msg, "S", 600);
            } else if (response.data.fialed) {
              msgBox(response.data.msg, "F", 1000);
            } else {
                msgBox("Error 500, Internal Server Error", "F", 1000);
            }
        }).catch(function(){
            msgBox("Error 500, Internal Server Error", "F", 1000);
        });
    }
};
// ProdInfo for Product OverView End

// Product Mapping for Product OverView
export const submitMerchantProductMappingForm = ({dispatch, state}) => {
    if ( state.productSku ) {
        var submitForm = $('#merchant-product-mapping-form');
        submitForm.parsley().validate();

        if (true === submitForm.parsley().isValid()) {
            var jsonData = submitForm.serializeObject();
            jsonData['sku'] = state.productSku;

            Vue.http({
                url: API_URL + "product/product-mapping",
                method: 'POST',
                data: jsonData,
            }).then(function (response) {
                if (response.data.success) {
                    dispatch('SET_MERCHANT_PRODUCT_MAPPING', response.data.prod_map_info);
                    msgBox(response.data.msg, "S", 600);
                } else if (response.data.fialed) {
                    msgBox(response.data.msg, "F", 1000);
                } else {
                    msgBox("Error 500, Internal Server Error", "F", 1000);
                }
            }).catch(function(){
                msgBox("Error 500, Internal Server Error", "F", 1000);
            });
        }
    } else {
        msgBox("Error, no have available sku", "F", 1000);
    }
};
// Product Mapping for Product OverView

// Supplier Product for Product OverView End
export const submitSupplierProductFrom = ({dispatch, state}) => {
    if (state.productSku) {
        var submitForm = $('#supplier-product-from');
        submitForm.parsley().validate();

        if (true === submitForm.parsley().isValid()) {
            var jsonData = submitForm.serializeObject();
            jsonData['sku'] = state.productSku;

            Vue.http({
                url: API_URL + "product/supplier-product",
                method: 'POST',
                data: jsonData,
            }).then(function (response) {
                if (response.data.success) {
                    dispatch('SET_SUPPLIER_PRODUCT', response.data.supplier_product);

                    msgBox(response.data.msg, "S", 600);
                } else if (response.data.fialed) {
                    msgBox(response.data.msg, "F", 1000);
                } else {
                    msgBox("Error 500, Internal Server Error", "F", 1000);
                }
            }).catch(function(){
                msgBox("Error 500, Internal Server Error", "F", 1000);
            });
        }
    } else {
        msgBox("Error, no have available sku", "F", 1000);
    }
};
// Supplier Product for Product OverView End

// Weight Dimension for Product OverView
export const submitWeightDimensionForm = ({dispatch, state}) => {
    if (state.productSku) {
        var submitForm = $('#product-weight-dimension-form');
        submitForm.parsley().validate();

        if (true === submitForm.parsley().isValid()) {
            var jsonData = submitForm.serializeObject();
            jsonData['sku'] = state.productSku;

            Vue.http({
                url: API_URL + "product/weight-dimension",
                method: 'POST',
                data: jsonData,
            }).then(function (response) {
                if (response.data.success) {
                    dispatch('SET_PRODUCT_INFO', response.data.product_info);

                    msgBox(response.data.msg, "S", 600);
                } else if (response.data.fialed) {
                    msgBox(response.data.msg, "F", 1000);
                } else {
                    msgBox("Error 500, Internal Server Error", "F", 1000);
                }
            }).catch(function(){
                msgBox("Error 500, Internal Server Error", "F", 1000);
            });
        }
    } else {
        msgBox("Error, no have available sku", "F", 1000);
    }
};
// Weight Dimension for Product OverView End

// Product Code for Product OverView
export const submitProductCodeForm = ({dispatch, state}) => {
    if (state.productSku) {
        var submitForm = $('#product-code-form');
        submitForm.parsley().validate();

        if (true === submitForm.parsley().isValid()) {
            var jsonData = submitForm.serializeObject();
            jsonData['sku'] = state.productSku;

            Vue.http({
                url: API_URL + "product/product-code",
                method: 'POST',
                data: jsonData,
            }).then(function (response) {
                if (response.data.success) {
                    dispatch('SET_PRODUCT_INFO', response.data.product_info);

                    msgBox(response.data.msg, "S", 600);
                } else if (response.data.fialed) {
                    msgBox(response.data.msg, "F", 1000);
                } else {
                    msgBox("Error 500, Internal Server Error", "F", 1000);
                }
            }).catch(function(){
                msgBox("Error 500, Internal Server Error", "F", 1000);
            });
        }
    } else {
        msgBox("Error, no have available sku", "F", 1000);
    }
};
// Product Code for Product OverView End

// Product Content for Product OverView
export const submitProductContentForm = ({dispatch, state}) => {
    var submitForm = $('#product-content-form');

    submitProductContent({dispatch, state},submitForm);
};

export const submitProductBoxContentForm = ({dispatch, state}) => {
    var submitForm = $('#product-box-content-form');

    submitProductContent({dispatch, state}, submitForm);
};

export const submitProductDescriptionForm = ({dispatch, state}) => {
    var submitForm = $('#product-description-form');

    submitProductContent({dispatch, state},submitForm);
};

const submitProductContent = ({dispatch, state}, submitForm="") => {
    if (state.productSku) {

        var prod_name_val = $('#product-content-form input[name="prod_name"]').val();

        submitForm.parsley().validate();

        if (true === submitForm.parsley().isValid()) {
            if ($.trim(prod_name_val) == "") {
                msgBox("Failed, Website display name is required", "F", 1500);
                $('#product-content-form input[name="prod_name"]').focus();
                return false;
            }

            var jsonData = submitForm.serializeObject();
            jsonData['sku'] = state.productSku;
            jsonData['lang_id'] = state.productContent.lang_id ? state.productContent.lang_id : 'en';

            Vue.http({
                url: API_URL + "product/product-content",
                method: 'POST',
                data: jsonData,
            }).then(function (response) {
                if (response.data.success) {
                    dispatch('SET_PRODUCT_CONTENT', response.data.product_content);

                    msgBox(response.data.msg, "S", 600);
                } else if (response.data.fialed) {
                    msgBox(response.data.msg, "F", 1000);
                } else {
                    msgBox("Error 500, Internal Server Error", "F", 1000);
                }
            }).catch(function(){
                msgBox("Error 500, Internal Server Error", "F", 1000);
            });
        }
    } else {
        msgBox("Error, no have available sku", "F", 1000);
    }
}

export const submitProductContentExtendForm = ({dispatch, state}) => {
    var submitForm = $('#product-content-extend-form');

    if (state.productSku) {
        submitForm.parsley().validate();

        if (true === submitForm.parsley().isValid()) {
            var jsonData = submitForm.serializeObject();
            jsonData['sku'] = state.productSku;
            jsonData['lang_id'] = state.productContent.lang_id ? state.productContent.lang_id : 'en';

            Vue.http({
                url: API_URL + "product/product-content-extend",
                method: 'POST',
                data: jsonData,
            }).then(function (response) {
                if (response.data.success) {
                    dispatch('SET_PRODUCT_CONTENT_EXTEND', response.data.product_content_extend);

                    msgBox(response.data.msg, "S", 600);
                } else if (response.data.fialed) {
                    msgBox(response.data.msg, "F", 1000);
                } else {
                    msgBox("Error 500, Internal Server Error", "F", 1000);
                }
            }).catch(function(){
                msgBox("Error 500, Internal Server Error", "F", 1000);
            });
        }
    } else {
        msgBox("Error, no have available sku", "F", 1000);
    }
}
// Product Content for Product OverView End

// Product features for Product OverView
export const submitProductFeaturesForm = ({dispatch, state}) => {
    if (state.productSku) {
        var submitForm = $('#product-features-form');
        submitForm.parsley().validate();

        if (true === submitForm.parsley().isValid()) {
            var jsonData = submitForm.serializeObject();
            jsonData['sku'] = state.productSku;

            Vue.http({
                url: API_URL + "product/product-features",
                method: 'POST',
                data: jsonData,
            }).then(function (response) {
                if (response.data.success) {
                    $("input[id=add_feature]").each(function(i){
                        $(this).val("");
                    });

                    dispatch('SET_PRODUCT_FEATURES', response.data.product_features);

                    msgBox(response.data.msg, "S", 600);
                } else if (response.data.fialed) {
                    msgBox(response.data.msg, "F", 1000);
                } else {
                    msgBox("Error 500, Internal Server Error", "F", 1000);
                }
            }).catch(function(){
                msgBox("Error 500, Internal Server Error", "F", 1000);
            });
        }
    } else {
        msgBox("Error, no have available sku", "F", 1000);
    }
};
// Product features for Product OverView End

// Product Images Upload for Product OverView End
export const initUploadProductImages = ({dispatch, state}) => {
    if (state.productSku) {
        $("input[name='prod_sku']").val(state.productSku);

        $("input[name='access_token']").val(ACCESS_TOKEN);
        var url = API_URL +'product/upload-image?access_token='+ ACCESS_TOKEN;
        $('#fileupload').fileupload({
            url: url,
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
            maxFileSize: 1 * 1024 * 1024,
            minFileSize: 5,
            messages: {
                maxFileSize: 'File exceeds maximum allowed size of 1MB',
                acceptFileTypes: 'File type not allowed'
            },
            done: function (e, data) {
                if (e.isDefaultPrevented()) {
                    return false;
                }

                if (data.result.product_images) {
                    dispatch('SET_PRODUCT_IMAGES', data.result.product_images);
                }

                var that = $(this).data('blueimp-fileupload') ||
                        $(this).data('fileupload'),
                    getFilesFromResponse = data.getFilesFromResponse ||
                        that.options.getFilesFromResponse,
                    files = getFilesFromResponse(data),
                    template,
                    deferred;
                if (data.context) {
                    data.context.each(function (index) {
                        var file = files[index] ||
                                {error: 'Empty file upload result'};
                        deferred = that._addFinishedDeferreds();
                        that._transition($(this)).done(
                            function () {
                                var node = $(this);
                                template = that._renderDownload([file])
                                    .replaceAll(node);
                                that._forceReflow(template);
                                that._transition(template).done(
                                    function () {
                                        data.context = $(this);
                                        that._trigger('completed', e, data);
                                        that._trigger('finished', e, data);
                                        deferred.resolve();
                                    }
                                );
                            }
                        );
                    });
                } else {
                    template = that._renderDownload(files)[
                        that.options.prependFiles ? 'prependTo' : 'appendTo'
                    ](that.options.filesContainer);
                    that._forceReflow(template);
                    deferred = that._addFinishedDeferreds();
                    that._transition(template).done(
                        function () {
                            data.context = $(this);
                            that._trigger('completed', e, data);
                            that._trigger('finished', e, data);
                            deferred.resolve();
                        }
                    );
                }
            }
        });

        // Load existing files:
        $('#fileupload').addClass('fileupload-processing');
        $.ajax({
          url: $('#fileupload').fileupload('option', 'url'),
          dataType: 'json',
          crossDomain:true,
          context: $('#fileupload')[0]
        }).always(function () {
          $(this).removeClass('fileupload-processing');
        }).done(function (result) {
          $(this).fileupload('option', 'done').call(this, $.Event('done'), {result: result});
        });

        $('input.iCheck-helper').iCheck({
          checkboxClass: 'icheckbox_flat-green',
          radioClass: 'iradio_flat-green'
        });
    }
};

export const deleteProductImage = ({dispatch, state}, imgId) => {
    if(confirm("You confirm delete this image?")){
        var jsonData = {};
        jsonData['id'] = imgId;
        jsonData['sku'] = state.productSku;

        Vue.http({
            url: API_URL + "product/delete-image/",
            method: 'POST',
            data: jsonData,
        }).then(function (response) {
            if (response.data.success) {
                $("#show-img-box-"+ imgId).remove();

                msgBox(response.data.msg, "S", 600);
            } else if (response.data.fialed) {
                msgBox(response.data.msg, "F", 1000);
            } else {
                msgBox("Error 500, Internal Server Error", "F", 1000);
            }
        }).catch(function(){
            msgBox("Error 500, Internal Server Error", "F", 1000);
        });
    }
};

// Product Images Upload for Product OverView End


//================================= Product OverView End ================================
//=======================================================================================

export const changeMarketplaceId = ({dispatch, state}) => {
    $.isLoading({ text: "loading", class:"fa fa-refresh fa-spin" });

    var marketplaceId = $("select[name=marketplace]").val();
    if (marketplaceId) {
        $("#marketplace-content-setting .marketplace-list-box").show();
    } else {
        $("#marketplace-content-setting .marketplace-list-box").hide();
    }

    dispatch('SET_MARKETPLACE_CONTENT_EXPORT_LIST', {});
    dispatch('SET_MARKETPLACE_ID', marketplaceId);

    Vue.http({
        url: API_URL + "marketplace-content-export/"+ marketplaceId,
        method: 'GET',
    }).then(function (response) {
        dispatch('SET_MARKETPLACE_CONTENT_EXPORT_LIST', response.data.data);
    }).then(function (response) {
        $.isLoading("hide");
    }).catch(function(){
        msgBox("Error 500, Internal Server Error", "F", 1000);
    });
};

export const submitMarketplaceContentSettingForm = ({dispatch, state}) => {
    if (state.marketplaceId) {
        var submitForm = $('#marketplace-content-setting-form');
        var jsonData = submitForm.serializeObject();
            jsonData['marketplace'] = state.marketplaceId;
        Vue.http({
            url: API_URL + "marketplace-content-export/setting",
            method: 'POST',
            data: jsonData,
        }).then(function (response) {
            if (response.data.success) {
                dispatch('SET_MARKETPLACE_CONTENT_EXPORT_LIST', response.data.marketplace_content_export);

                msgBox(response.data.msg, "S", 600);
            } else if (response.data.fialed) {
                msgBox(response.data.msg, "F", 1000);
            } else {
                msgBox("Error 500, Internal Server Error", "F", 1000);
            }
        }).catch(function(){
            msgBox("Error 500, Internal Server Error", "F", 1000);
        });
    } else {
        $.isLoading("hide");
        // $("select[name='marketplace']").focus();
        msgBox("Please selected a marketplace ID", "F", 1000);
    }
}
// Marketplace Content Setting End


// Marketplace Content Export
export const submitMarketplaceContentExportForm = ({dispatch, state}, action='search', queryStr='') => {
    $.isLoading({ text: "loading", class:"fa fa-refresh fa-spin" });
    if ( state.marketplaceId ) {
        var mskuMap = $("select[name=msku_map]").val();
        var marketId = $("select[name=marketplace_id]").val();
        var countryId = $("select[name=country_id]").val();
        var dateType = $("select[name=date_type]").val();
        var startDate = $("input[name=start_date]").val();
        var endDate = $("input[name=end_date]").val();
        if (! marketId) {
            msgBox("Please selected a marketplace ID", "F", 1000);
            return false;
        }
        if (! countryId) {
            msgBox("Please selected a country", "F", 1000);
            return false;
        }

        if (! startDate && dateType) {
            msgBox("Please input start date", "F", 1000);
            return false;
        }
        if (! endDate && dateType) {
            msgBox("Please input end date", "F", 1000);
            return false;
        }
        queryStr = (queryStr != '') ? queryStr : $('#marketplace-content-export-form').serialize();
        if (action == "export") {
            var downloadLink = API_URL + 'marketplace-content-export/download?marketplace='+ state.marketplaceId +'&access_token=' + ACCESS_TOKEN +"&"+ queryStr;
            window.open(downloadLink);
            $.isLoading("hide");
        }
        if (action == 'search') {
            var SEARCH_URL = API_URL + 'marketplace-content-export/query-content?' + queryStr + '&marketplace='+ state.marketplaceId +'&access_token=' + ACCESS_TOKEN;

            Vue.http({
                url: SEARCH_URL,
                method: 'GET',
            }).then(function (response) {
                if (response.statusText == 'OK' && response.status == "200") {
                    dispatch('SET_MARKETPLACE_PRODUCT_CONTENT_LIST', response.data);
                    if (response.data) {
                        msgBox("Successful", "S", 1000);

                    } else {
                        msgBox("Failed, No record", "F", 1000);
                    }
                } else {
                    msgBox("Error 500, Internal Server Error", "F", 1000);
                }
            }).catch(function(){
                msgBox("Error 500, Internal Server Error", "F", 1000);
            });

        }
    } else {
        msgBox("Please selected a marketplace ID", "F", 1000);
    }
};
// Marketplace Content Export

// Reset Marketplace Id
export const resetMarketplaceId = ({dispatch, state}) => {
    dispatch('SET_MARKETPLACE_ID', '');
    changeMarketplaceId({dispatch, state});
};
// Reset Marketplace Id

export const marketplaceCourierMappingSearch = ({ dispatch}, queryStr = '') => {
    $.isLoading({ text: "Loading", class:"fa fa-refresh fa-spin" });
    if (queryStr == '') {
        var queryStr = $("form[name='fm']").serialize();
    }
    window.history.pushState(null, null, 'marketplace-courier-mapping?'+queryStr);
    Vue.http({
        url:API_URL+'marketplace-courier-mapping?'+queryStr,
        method: 'GET'
    }).then(function (response) {
        $.isLoading("hide");
        dispatch('FETCH_MARKETPLACE_COURIER_MAPPINGS', response.data.data);
    }).catch(function(){
        $.isLoading("hide");
        $.isLoading({ text: "Error 500, Internal Server Error", class:"fa fa-exclamation-triangle" });
        setTimeout( function(){
            $.isLoading("hide");
        }, 3000)
    });
}

export const addMarketplaceCourierMapping = ({ dispatch, state}) => {
    $.isLoading({ text: "Adding", class:"fa fa-refresh fa-spin" });
    var form = $("form#fm-add");
    form.parsley().validate();
    if (form.parsley().isValid()) {
        var jsonData = form.serializeObject();
        Vue.http({
            url: API_URL + "marketplace-courier-mapping",
            method: 'POST',
            data: jsonData,
        }).then(function (response) {
            if (response.data.status === true) {
                msgBox(response.data.message, "S", 600);
            } else if (response.data.status === false) {
              msgBox(response.data.message, "F", 1000);
            } else {
                msgBox("Error 500, Internal Server Error", "F", 1000);
            }
        }).catch(function(){
            msgBox("Error 500, Internal Server Error", "F", 1000);
        });
    }
}