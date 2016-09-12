<template>
<style type="text/css">
    /*.main div{padding:10px 10px;}*/
    .demo-xls a{ text-decoration: underline; }
</style>
<div class="page-title">
    <div class="title_left">
        <h3>[Accelerator]<small>Upload Marketplace SKU Mapping</small></h3>
    </div>
</div>
<div class="row main">
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
            <div class="x_title">
                <h2>Upload Marketplace SKU Mapping</h2>
                <div class="clearfix"></div>
            </div>
            <div class="x_content">
                <h4 style="color:#26b99a">{{ $message }}</h4>
                <form class="form-horizontal form-label-left" name="edit-form" method="post" enctype="multipart/form-data" action="/platform-market/upload-mapping">
                    <input type="hidden" class="form-control" name="_token" value="{{ csrf_token() }}">
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
                <a href="download-xlsx/example.xlsx">Download Example.xlsx
                    <strong><i class="fa fa-download"></i></strong>
                </a>
            </li>
            <li>Note: If there is data in the field(country_id), the function will only  add the SKU mapping on this country store, Leave blank for  the field(country_id) will be add SKU mapping for all  country stores.</li>
        </ul>
    </div>
</div>

</template>