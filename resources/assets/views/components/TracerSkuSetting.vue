<template>
  <div class="row">
    <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="x_panel">
        <div class="x_title">
          <h2>Tracer SKU Setting</h2>
          <ul class="nav navbar-right panel_toolbox">
            <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <div class="x_content">
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
              <form action="" method="POST" class="form-horizontal" role="form">
                <div class="form-group">
                  <label for="inputCost" class="col-sm-3 control-label">Cost Price (HKD):</label>
                  <div class="col-sm-7">
                    <input type="number" name="costhkd" id="inputCost" class="form-control" value=""
                         required="required" title="">
                  </div>
                </div>

                <div class="form-group">
                  <label for="inputLength" class="col-sm-3 control-label">Length (cm):</label>
                  <div class="col-sm-7">
                    <input type="number" step="0.1" name="length" id="inputLength" class="form-control" value="" required="required" title="">
                  </div>
                </div>

                <div class="form-group">
                  <label for="inputWidth" class="col-sm-3 control-label">Width (cm):</label>
                  <div class="col-sm-7">
                    <input type="number" step="0.1" name="width" id="inputWidth" class="form-control" value="" required="required" title="">
                  </div>
                </div>

                <div class="form-group">
                  <label for="inputHeight" class="col-sm-3 control-label">Height (cm):</label>
                  <div class="col-sm-7">
                    <input type="number" step="0.1" name="height" id="inputHeight" class="form-control" value="" required="required" title="">
                  </div>
                </div>

                <div class="form-group">
                  <label for="inputFactor" class="col-sm-3 control-label">Chargeable Weight Factor:</label>
                  <div class="col-sm-7">
                    <input type="number" name="factor" id="inputFactor" class="form-control" value="6000" disabled="disabled" title="">
                  </div>
                </div>

                <div class="form-group">
                  <label for="inputVolumetricWeight" class="col-sm-3 control-label">Volumetric Weight (Kg):</label>
                  <div class="col-sm-7">
                    <input type="number" name="volumetricWeight" id="inputVolumetricWeight" class="form-control" value="" max="30" step="any" title="">
                  </div>
                </div>

                <div class="form-group">
                  <label for="inputWeight" class="col-sm-3 control-label">Weight (Kg):</label>
                  <div class="col-sm-7">
                    <input type="number" name="weight" id="inputWeight" class="form-control" value="" max="30" step="any"
                         required="required" title="">
                  </div>
                </div>


                <div class="form-group">
                  <label for="inputMarketplace" class="col-sm-3 control-label">Marketplace:</label>
                  <div class="col-sm-3">
                    <select name="marketplace" id="inputMarketplace" class="form-control" required="required">

                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="inputCategory" class="col-sm-3 control-label">Category:</label>
                  <div class="col-sm-4">
                    <select name="category" id="inputCategory" class="form-control" required="required">

                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="inputSubCategory" class="col-sm-3 control-label">SubCategory:</label>
                  <div class="col-sm-4">
                    <select name="subCategory" id="inputSubCategory" class="form-control" required="required">
                      <option value="" selected></option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-sm-7 col-sm-offset-3">
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </div>
                <input type="hidden" name="_method" value="PUT">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>