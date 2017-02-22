<template>
<style type="text/css">
  /*.main div{padding:10px 10px;}*/
  .demo-xls a{ text-decoration: underline; }
</style>
<div class="row main">
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
      <div class="x_title">
        <h2>Upload Marketplace SKU Mapping</h2>
        <div class="clearfix"></div>
      </div>
      <div class="x_content">
        <form class="form-horizontal form-label-left" name="edit-form" method="post" enctype="multipart/form-data" action="http://admincentre.eservicesgroup.com:7890/platform-market/upload-mapping">
          <div class="form-group col-md-6">
            <div class="col-md-6 col-sm-6 col-xs-12">
              <select name="check" class="form-control">
                <option value="">select platform</option>
                <option value="allegro">ALLEGRO</option>
                <option value="amazon">Amazon</option>
                <!--option value="cdiscount">Cdiscount</option-->
                <option value="ebay">EBAY</option>
                <option value="fnac">FNAC</option>
                <option value="lazada">LAZADA</option>
                <option value="linio">LINIO</option>
                <!--option value="paytm">PAYTM</option-->
                <option value="priceminister">PriceMinister</option>
                <option value="mercadolibre">MERCADOLIBRE</option>
                <option value="newegg">NEWEGG</option>
                <option value="qoo10">QOO10</option>
                <option value="tanga">TANGA</option>
                <option value="alibaba">ALIBABA</option>
                <!--option value="wish">Wish</option-->
              </select>
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="form-group col-md-6">
            <div class="col-md-6 col-sm-12 col-xs-12">
              <input type="file" name="sku_file" id="sku_file">
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="form-group col-md-6">
            <div class="col-md-3 col-sm-6 col-xs-12">
              <input type="submit" class="btn btn-success" value="Submit"  name="submit"/>
            </div>
          </div>
          <div class="clearfix"></div>
        </form>
      </div>
    </div>
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Upload Notes</h3>
  </div>
  <div class="panel-body">
    <ul>
      <li>
        <a href="http://admincentre.eservicesgroup.com:7890/platform-market/download-xlsx/example.xlsx">Download Example.xlsx
          <strong><i class="fa fa-download"></i></strong>
        </a>
      </li>
      <li>Note: If there is data in the field(country_id), the function will only  add the SKU mapping on this country store, Leave blank for  the field(country_id) will be add SKU mapping for all  country stores.</li>
    </ul>
  </div>
</div>

<div class="row">
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
      <div class="x_title">
        <h2>Download Marketplace SKU Mapping</h2>
        <div class="clearfix"></div>
      </div>
      <div class="x_content">
         <form name="fm" class="form_search form-horizontal form-label-left" onsubmit="return false">
            <div class="form-group col-sm-6 col-xs-12">
                <label class="control-label col-md-4">Marketplace
                </label>
                <div class="col-md-4 col-xs-12">
                  <select name="marketplace_id" class="select2_single form-control">
                    <option value=""></option>
                    <option v-for="marketplace in marketplaceLists" value="{{ marketplace.marketplace_id }}">{{ marketplace.marketplace_name}}</option>
                  </select>
                </div>
            </div>
            <div class="form-group col-md-12">
                <div class="col-md-12 col-sm-12 col-sm-offset-5">
                    <input type="button" class="btn btn-success" name="search" value="Download" @click="downloadReport()">
                </div>
            </div>
          </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import { fetchMarketplaceLists, API_URL } from '../../vuex/actions';
  import { getMarketplaceLists } from '../../vuex/getters';

  export default {
    vuex: {
      actions: {
        fetchMarketplaceLists
      },
      getters: {
        marketplaceLists: getMarketplaceLists,
      }
    },
    ready() {
      this.fetchMarketplaceLists(),
      $(".select2_single").select2({
          placeholder: "",
          allowClear: true
      })
    },
    methods: {
      downloadReport() {
        var marketplace_id = $("select[name='marketplace_id']").val();
        window.open('http://admincentre.eservicesgroup.com:7890/marketplace-sku-mapping-download/'+marketplace_id);
      }
    }
  }
</script>