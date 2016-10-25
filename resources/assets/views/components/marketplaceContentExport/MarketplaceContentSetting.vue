<style>

  #marketplace-content-setting .ul-field-list {
    border-left: 2px solid #eee;
    margin: 0;
    padding: 0px 30px;
    list-style-type:upper-alpha;
  }
  #marketplace-content-setting .ul-field-list li {
    font-weight: bolder;
    margin: 5px 0px;
    padding: 0;
    border-radius: 0;
    border: none;
    border: 0;
    color: #73879c;
  }
  #marketplace-content-setting .ul-field-list li div{
    padding: 5px 20px;
  }
  #marketplace-content-setting .ul-field-list li div:hover{
    background-color: #fcf8e3;
    cursor: move;
    color: #3c763d;
    font-weight: bold;
  }
  #marketplace-content-setting .ul-field-list li div:hover .glyphicon-sort{
    color: #3c763d;
  }
  #marketplace-content-setting .ul-field-list li .glyphicon-remove {
    color: #cccccc;
    float: right;
    font-size: 18px;
  }
  #marketplace-content-setting .ul-field-list li .glyphicon-remove:hover {
    color: red;
    cursor: pointer;
  }
  #marketplace-content-setting .ul-field-list li:nth-child(even){
    color: #73879c;
    background-color: #dff0d8;
    border-color: #d6e9c6;
  }
  #marketplace-content-setting .ul-field-list li:nth-child(odd){
    color: #73879c;
    background-color: #efefef;
    border-color: #efefef;
  }
  #marketplace-content-setting .checkbox {
    margin: 5px 0;
    padding: 0;
  }
  #marketplace-content-setting .checkbox :hover {
    color: #3c763d;
    background-color: #fcf8e3;
    border-color: #faebcc;
  }
  #marketplace-content-setting .checkbox label {
    width: 100%;
    display: block;
    padding: 5px 18px 5px 0;
  }
  #marketplace-content-setting .selected {
    background-color: #eee;
    color: #3c763d;
    /* padding: 5px 0; */
  }
</style>

<template>
  <div class="row" id="marketplace-content-setting">
    <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="x_panel">
        <div class="x_title">
          <h2>Marketplace Content Export Setting</h2>
          <ul class="nav navbar-right panel_toolbox">
            <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <div class="x_content">
          <div class="row">
            <div class=" col-md-6 col-sm-6 col-xs-12">
              <div class="x_panel">
                <div class="form-group">
                  <h2 for="Marketplace ID">Marketplace</h2>
                  <select class="form-control" tabindex="-1" name="marketplace" @change="changeMarketplace()">
                    <option></option>

                    <template v-for="marketplace in marketplaceList">
                      <option :value="marketplace.id" v-if="marketplace.id == marketplace" selected>
                        {{ marketplace.name }}
                      </option>
                      <option :value="marketplace.id" v-else>
                        {{ marketplace.name }}
                      </option>
                    </template>
                  </select>
                </div>

                <div class="form-group">
                  <span class="label label-warning">
                    Please select the following field for Marketplace content export
                  </span>
                </div>

                <template v-for="field in contentFields">
                  <div class="checkbox">
                    <label class="">
                      <input type="checkbox" class="flat" id="field" name="{{field.marketplace_field_value}}" value="{{ field.marketplace_field_name }}" v-on:click="checkbox()">
                      <strong>{{ field.marketplace_field_name }}</strong> [ <font color="red"><i>{{field.marketplace_field_value}}</i></font> ]
                    </label>
                  </div>
                </template>
              </div>
            </div>

            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="x_panel">
                <form action="" method="POST" id="marketplace-content-setting-form" role="form">
                  <div class="form-group col-md-12">
                    <h2 v-if='marketplace'>
                       Selected Export Field List for Marketplace [<b>{{ marketplace }}</b>]
                    </h2>
                    <h2 v-else>
                      Please select a marketplace first.
                    </h2>
                  </div>

                  <div class="clearfix"></div>

                  <input type="hidden" name="marketplace" :value="marketplace">

                  <ul id="ul-field-list" class="ul-field-list">
                  </ul>
                  <div class="clearfix"></div>
                  <div class="ln_solid"></div>
                  <div class="form-group form-group-sm">
                    <div class="col-md-8 col-sm-8 col-xs-12 col-md-offset-4">
                      <button type="button" class="btn btn-default" @click="reset()">Reset</button>
                      <button type="button" class="btn btn-primary" @click="submitForm()">Save</button>
                    </div>
                  </div>
                </form>
              </div>

              <div class="panel panel-default">
                <div class="panel-heading">
                <h3 class="panel-title">Setting Notes</h3>
                </div>
                <div class="panel-body">
                  <ul>
                    <li>Here support drag [ <span class='glyphicon glyphicon-move'></span> ] change the list re-order [ <span class='glyphicon glyphicon-sort'></span> ]</li>
                    <li>Marketplace content export report will be generated in this order.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {api_url} from '../../../js/vue.config.js';
  import {
    fetchMarketplaceContentFieldLists,
    submitMarketplaceContentSettingForm,
    changeMarketplace,
  } from '../../../vuex/actions';
  import {
    getMarketplace,
    getMarketplaceContentFieldLists,
    getMarketplaceContentExportList,
  } from '../../../vuex/getters';
  export default {
    vuex: {
      actions: {
        fetchMarketplaceContentFieldLists,
        submitForm: submitMarketplaceContentSettingForm,
        changeMarketplace,
      },
      getters: {
        contentFields: getMarketplaceContentFieldLists,
        marketplace: getMarketplace,
        getMarketplaceContentExportList,
      }
    },
    data() {
      return {
        marketplaceContentExports: {},
        marketplaceList: [
        {
          'id': 'allegro',
          'name': 'ALLEGRO'
        },
        {
          'id': 'amazon',
          'name': 'Amazon'
        },
        {
          'id': 'ebay',
          'name': 'EBAY'
        },
        {
          'id': 'fnac',
          'name': 'FNAC'
        },
        {
          'id': 'lazada',
          'name': 'LAZADA'
        },
        {
          'id': 'linio',
          'name': 'LINIO'
        },
        {
          'id': 'priceminister',
          'name': 'PriceMinister'
        },
        {
          'id': 'mercadolibre',
          'name': 'MERCADOLIBRE'
        },
        {
          'id': 'newegg',
          'name': 'NEWEGG'
        },
        {
          'id': 'qoo10',
          'name': 'QOO10'
        },
        {
          'id': 'tanga',
          'name': 'TANGA'
        }
        ]
      }
    },
    watch: {
      contentFields: function(val) {
        this.icheckbox();
      },
      getMarketplaceContentExportList: function(val) {
        $("#ul-field-list").find("li").remove();

        $(".checkbox input").iCheck('uncheck');

        this.$set("marketplaceContentExports", val);

        var seletedField = [];

        var contentFields = this.contentFields;
        for(i in contentFields) {
          var marketplace_field_value = contentFields[i].marketplace_field_value;
          seletedField[marketplace_field_value] = marketplace_field_value;
        }

        for(i in val) {
          var field_value = val[i].field_value;

          if (seletedField[field_value] == field_value) {
            $("input[name="+ field_value +"]").iCheck('check');
          }
        }

      }
    },
    created() {
      this.fetchMarketplaceContentFieldLists();
    },
    methods: {
      icheckbox: function() {
        if ($("input.flat")[0]) {
          $('input.flat').iCheck({
            checkboxClass: 'icheckbox_flat-green',
            radioClass: 'iradio_flat-green'
          });
        }
        console.debug(this.marketplaceContentExports);
        function loadSortable() {
          var list = document.getElementById("ul-field-list");

          Sortable.create(list);
        }

        $('.checkbox input').on('ifChecked', function () {
          loadSortable();

          $(this).parent().parent().addClass('selected');


          if ($("#ul-field-list").find("#li-"+ $(this).attr("name")).length == 0) {
            $("#ul-field-list").append("<li id='li-"+ $(this).attr("name") +"'><div><input type='hidden' id='field_value' name='field_value[]' value='"+ $(this).attr("name") +"'> "+ $(this).attr("value") +"<span class='glyphicon glyphicon-remove' onClick=\"$(this).parent().parent().remove();$(\'input[name="+ $(this).attr('name') +"]\').iCheck(\'uncheck\');\"></span></div></li>");
          }
        });

        $('.checkbox input').on('ifUnchecked', function () {
          $(this).parent().parent().removeClass('selected');
          $("#ul-field-list").find("#li-"+ $(this).attr("name")).remove();
        });
      },
      reset: function() {
        $("#ul-field-list").find("li").remove();
        this.changeMarketplace();
      }
    }
  }
</script>