<template>
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
          <div class="x_title">
            <h2>Filters <small>[Advanced]</small></h2>
            <ul class="nav navbar-right panel_toolbox">
              <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">
            <form class="form-horizontal form-label-left">
              <div class="form-group col-md-6">
                <label class="control-label col-md-3">Marketplace ID</label>
                <div class="col-md-6 col-xs-12">
                  <select class="form-control">
                    <option value="3DAMAZON">3DAMAZON</option>
                    <option value="BCAMAZON">BCAMAZON</option>
                    <option value="CVAMAZON">CVAMAZON</option>
                    <option value="PXAMAZON">PXAMAZON</option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label class="control-label col-md-3">Brand</label>
                <div class="col-md-6 col-xs-12">
                  <select class="form-control">
                    <option value=""></option>
                    <option>3Doodler</option>
                    <option>3Glasses</option>
                    <option>3M</option>
                    <option>3rd Space</option>
                    <option>4PX</option>
                    <option>AAF Animals Asia</option>
                    <option>AAF x Stella McCartney</option>
                    <option>ABLY</option>
                    <option>Accuphase</option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label class="control-label col-md-3">Category</label>
                <div class="col-md-6 col-xs-12">
                  <select class="form-control">
                    <option></option>
                    <option>Electricals</option>
                    <option>Crafts, Gadgets & Toys</option>
                    <option>Fashion</option>
                    <option>Pet Supplies</option>
                    <option>Home & Office</option>
                    <option>XYZ Recategorisation</option>
                    <option>Cards, Books & Stationery</option>
                    <option>More Category</option>
                    <option>Electronics</option>
                    <option>Health & Beauty</option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label class="control-label col-md-3">SKU Status</label>
                <div class="col-md-6 col-xs-12">
                  <select class="form-control">
                    <option value=""></option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label class="control-label col-md-3">Sub-Category</label>
                <div class="col-md-6 col-xs-12">
                  <select class="form-control">
                    <option></option>
                    <option>Electricals</option>
                    <option>Crafts, Gadgets & Toys</option>
                    <option>Fashion</option>
                    <option>Pet Supplies</option>
                    <option>Home & Office</option>
                    <option>XYZ Recategorisation</option>
                    <option>Cards, Books & Stationery</option>
                    <option>More Category</option>
                    <option>Electronics</option>
                    <option>Health & Beauty</option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label class="control-label col-md-3">Sourcing Status</label>
                <div class="col-md-6 col-xs-12">
                  <select class="form-control">
                    <option value=""></option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label class="control-label col-md-3">Sub-Sub-Category</label>
                <div class="col-md-6 col-xs-12">
                  <select class="form-control">
                    <option></option>
                    <option>Electricals</option>
                    <option>Crafts, Gadgets & Toys</option>
                    <option>Fashion</option>
                    <option>Pet Supplies</option>
                    <option>Home & Office</option>
                    <option>XYZ Recategorisation</option>
                    <option>Cards, Books & Stationery</option>
                    <option>More Category</option>
                    <option>Electronics</option>
                    <option>Health & Beauty</option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label class="control-label col-md-3">Brand Manager</label>
                <div class="col-md-6 col-xs-12">
                  <select class="form-control">
                    <option value=""></option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label class="control-label col-md-3">SKU Type</label>
                <div class="col-md-6 col-xs-12">
                  <select class="form-control">
                    <option value=""></option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label class="control-label col-md-3">Inventory</label>
                <div class="col-md-6 col-xs-12">
                  <input type="text" class="form-control col-md-4 col-xs-12" placeholder=">,<,= ">
                </div>
              </div>
              <div class="form-group col-md-6">
                <label class="control-label col-md-3">SKU List</label>
                <div class="col-md-6 col-xs-12">
                  <input id="tags_1" type="text" class="tags form-control" value="15621-AA-NA, 12521-BK-NA, 13232-AA-NA" />
                  <div id="suggestions-container" style="position: relative; float: left; width: 250px; margin: 10px;"></div>
                </div>
              </div>
              <!-- <div class="ln_solid"></div> -->
              <div class="form-group col-md-12">
                <div class="col-md-12 col-sm-12 col-xs-12 col-md-offset-5">
                  <button type="submit" class="btn btn-primary">Cancel</button>
                  <button type="submit" class="btn btn-success">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
    </div>
</template>