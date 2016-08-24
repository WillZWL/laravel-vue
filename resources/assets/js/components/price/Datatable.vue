<template>
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
          <div class="x_title">
            <h2>Filters <small>[Base]</small></h2>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">
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
                  <th>Item Price</th>
                  <th>Prodfit</th>
                  <th>Margin</th>
                  <th>Detail Or Update</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>0.00    </td>
                    <td>0.00    </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                       <input type='Button' value="Detail" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-md">
                      <div class="modal fade bs-example-modal-md" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
                        <div class="modal-dialog modal-md">
                          <div class="modal-content">
                            <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span>
                              </button>
                              <h4 class="modal-title" id="myModalLabel2">Overview [ BCLAZHK ] - 24697-MM-NA - 15621-AA-NA</h4>
                            </div>
                            <div class="modal-body">
                               <form class="form-horizontal form-label-left">
                                <div class="form-group col-md-12">
                                  <label class="control-label col-md-3">Marketplace ID</label>
                                  <div class="col-md-6 col-xs-12">
                                    <input type="text" class="form-control col-md-4 col-xs-12" value="BCLAZHK" readonly="readonly">
                                  </div>
                                </div>
                                <div class="form-group col-md-12">
                                  <label class="control-label col-md-3">Master SKU</label>
                                  <div class="col-md-6 col-xs-12">
                                    <input type="text" class="form-control col-md-4 col-xs-12" value="24697-MM-NA" readonly="readonly">
                                  </div>
                                </div>
                                <div class="form-group col-md-12">
                                  <label class="control-label col-md-3">ESG SKU</label>
                                  <div class="col-md-6 col-xs-12">
                                    <input type="text" class="form-control col-md-4 col-xs-12" value="15621-AA-NA" readonly="readonly">
                                  </div>
                                </div>
                                <div class="form-group col-md-12">
                                  <label class="control-label col-md-3">Product Name</label>
                                  <div class="col-md-6 col-xs-12">
                                    <input type="text" class="form-control col-md-4 col-xs-12" value="Biloop Cry Translator" readonly="readonly">
                                  </div>
                                </div>
                                <div class="form-group col-md-12">
                                  <label class="control-label col-md-3">Sourcing status</label>
                                  <div class="col-md-6 col-xs-12">
                                    <select class="form-control col-md-4 col-xs-12">
                                      <option value="">Readily Available</option>
                                      <option value="">Out Of Stock</option>
                                    </select>
                                    <!-- <input type="text"  value="15621-AA-NA" readonly="readonly"> -->
                                  </div>
                                </div>
                                <div class="form-group col-md-12">
                                  <label class="control-label col-md-3">ETRADE QTY</label>
                                  <div class="col-md-6 col-xs-12">
                                    <input type="text" class="form-control col-md-4 col-xs-12" value="0">
                                  </div>
                                </div>
                                <div class="form-group col-md-12">
                                  <label class="control-label col-md-3">ES_HK QTY</label>
                                  <div class="col-md-6 col-xs-12">
                                    <input type="text" class="form-control col-md-4 col-xs-12" value="0">
                                  </div>
                                </div>
                                <div class="form-group col-md-12">
                                  <label class="control-label col-md-3">ES_DG QTY</label>
                                  <div class="col-md-6 col-xs-12">
                                    <input type="text" class="form-control col-md-4 col-xs-12" value="0">
                                  </div>
                                </div>
                                <div class="form-group col-md-12">
                                  <label class="control-label col-md-3">Item Price</label>
                                  <div class="col-md-6 col-xs-12">
                                    <input type="text" class="form-control col-md-4 col-xs-12" value="279.58">
                                  </div>
                                </div>
                                <div class="form-group col-md-12">
                                  <label class="control-label col-md-3">Selling Price</label>
                                  <div class="col-md-6 col-xs-12">
                                    <input type="text" class="form-control col-md-4 col-xs-12" value="279.58">
                                  </div>
                                </div>
                                <div class="form-group col-md-12">
                                  <label class="control-label col-md-3">Profit</label>
                                  <div class="col-md-6 col-xs-12">
                                    <input type="text" class="form-control col-md-4 col-xs-12" value="0.00">
                                  </div>
                                </div>
                                <div class="form-group col-md-12">
                                  <label class="control-label col-md-3">Margin</label>
                                  <div class="col-md-6 col-xs-12">
                                    <input type="text" class="form-control col-md-4 col-xs-12" value="0.00">
                                  </div>
                                </div>
                                <div class="form-group col-md-12">
                                  <label class="control-label col-md-3">Update On</label>
                                  <div class="control-label col-md-4">  2016-02-18 09:41:11</div>
                                </div>
                                <div class="form-group col-md-12">
                                  <label class="control-label col-md-3">Update By</label>
                                  <div class="control-label col-md-4"> Systems </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary">Save</button>
                            </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>0.00    </td>
                    <td>0.00    </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-md">
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>0.00    </td>
                    <td>0.00    </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-md">
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>45.90   </td>
                    <td>52.16   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>45.90   </td>
                    <td>52.16   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>45.90   </td>
                    <td>52.16   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>30.61   </td>
                    <td>51.88   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>30.61   </td>
                    <td>51.88   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>30.61   </td>
                    <td>51.88   </td>
                    <td>
                      <input type='Button' value="Detail" class="btn btn-primary" data-toggle="tooltip modal" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system" data-target=".bs-example-modal-sm">
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>35.27   </td>
                    <td>50.39   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>35.27   </td>
                    <td>50.39   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>35.27   </td>
                    <td>50.39   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>30.61   </td>
                    <td>51.88   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>30.61   </td>
                    <td>51.88   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>30.61   </td>
                    <td>51.88   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>30.43   </td>
                    <td>51.58   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>30.43   </td>
                    <td>51.58   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>30.43   </td>
                    <td>51.58   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>29.93   </td>
                    <td>50.73   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>29.93   </td>
                    <td>50.73   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>29.93   </td>
                    <td>50.73   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>25.70   </td>
                    <td>52.45   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>25.70   </td>
                    <td>52.45   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>25.70   </td>
                    <td>52.45   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>328.02  </td>
                    <td>52.91   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>328.02  </td>
                    <td>52.91   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>328.02  </td>
                    <td>52.91   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>30.49   </td>
                    <td>51.68   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>30.49   </td>
                    <td>51.68   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>30.49   </td>
                    <td>51.68   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>29.79   </td>
                    <td>50.49   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>29.79   </td>
                    <td>50.49   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>29.79   </td>
                    <td>50.49   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>30.03   </td>
                    <td>50.90   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>30.03   </td>
                    <td>50.90   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>30.03   </td>
                    <td>50.90   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>136.76  </td>
                    <td>51.61   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>136.76  </td>
                    <td>51.61   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>136.76  </td>
                    <td>51.61   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>48.60   </td>
                    <td>51.70   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>48.60   </td>
                    <td>51.70   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>48.60   </td>
                    <td>51.70   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>1969.05 </td>
                    <td>53.95   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>1969.05 </td>
                    <td>53.95   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>1969.05 </td>
                    <td>53.95   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>29.91   </td>
                    <td>50.69   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>29.91   </td>
                    <td>50.69   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>29.91   </td>
                    <td>50.69   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>1446.47 </td>
                    <td>49.03   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>1446.47 </td>
                    <td>49.03   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>1446.47 </td>
                    <td>49.03   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>52.97   </td>
                    <td>51.93   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>52.97   </td>
                    <td>51.93   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>52.97   </td>
                    <td>51.93   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>41.59   </td>
                    <td>51.99   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>41.59   </td>
                    <td>51.99   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZHK</td>
                    <td>24697-MM-NA</td>
                    <td>15621-AA-NA</td>
                    <td>Biloop Cry Translator</td>
                    <td>Readily Available</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value="279.58" name="item_price" class="price_input_sm">
                    </td>
                    <td>41.59   </td>
                    <td>51.99   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25932-MM-NA</td>
                    <td>15669-AA-NA</td>
                    <td>3Doodler ABS Meta Mixed Filament Pack (25 Strands) (AB-MIX2) </td>
                    <td>Readily Available</td>
                    <td>217</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>12.82   </td>
                    <td>56.98   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25932-MM-NA</td>
                    <td>15669-AA-NA</td>
                    <td>3Doodler ABS Meta Mixed Filament Pack (25 Strands) (AB-MIX2) </td>
                    <td>Readily Available</td>
                    <td>217</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>43.58   </td>
                    <td>79.24   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25932-MM-NA</td>
                    <td>15669-AA-NA</td>
                    <td>3Doodler ABS Meta Mixed Filament Pack (25 Strands) (AB-MIX2) </td>
                    <td>Readily Available</td>
                    <td>217</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>12.82   </td>
                    <td>56.98   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25932-MM-NA</td>
                    <td>15669-AA-NA</td>
                    <td>3Doodler ABS Meta Mixed Filament Pack (25 Strands) (AB-MIX2) </td>
                    <td>Readily Available</td>
                    <td>217</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>12.75   </td>
                    <td>56.67   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25932-MM-NA</td>
                    <td>15669-AA-NA</td>
                    <td>3Doodler ABS Meta Mixed Filament Pack (25 Strands) (AB-MIX2) </td>
                    <td>Readily Available</td>
                    <td>217</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>12.56   </td>
                    <td>55.82   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25932-MM-NA</td>
                    <td>15669-AA-NA</td>
                    <td>3Doodler ABS Meta Mixed Filament Pack (25 Strands) (AB-MIX2) </td>
                    <td>Readily Available</td>
                    <td>217</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>17.60   </td>
                    <td>70.40   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25932-MM-NA</td>
                    <td>15669-AA-NA</td>
                    <td>3Doodler ABS Meta Mixed Filament Pack (25 Strands) (AB-MIX2) </td>
                    <td>Readily Available</td>
                    <td>217</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>79.33   </td>
                    <td>49.58   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25932-MM-NA</td>
                    <td>15669-AA-NA</td>
                    <td>3Doodler ABS Meta Mixed Filament Pack (25 Strands) (AB-MIX2) </td>
                    <td>Readily Available</td>
                    <td>217</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>12.77   </td>
                    <td>56.76   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25932-MM-NA</td>
                    <td>15669-AA-NA</td>
                    <td>3Doodler ABS Meta Mixed Filament Pack (25 Strands) (AB-MIX2) </td>
                    <td>Readily Available</td>
                    <td>217</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>12.50   </td>
                    <td>55.56   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25932-MM-NA</td>
                    <td>15669-AA-NA</td>
                    <td>3Doodler ABS Meta Mixed Filament Pack (25 Strands) (AB-MIX2) </td>
                    <td>Readily Available</td>
                    <td>217</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>12.59   </td>
                    <td>55.96   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25932-MM-NA</td>
                    <td>15669-AA-NA</td>
                    <td>3Doodler ABS Meta Mixed Filament Pack (25 Strands) (AB-MIX2) </td>
                    <td>Readily Available</td>
                    <td>217</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>1758.04 </td>
                    <td>94.52   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25932-MM-NA</td>
                    <td>15669-AA-NA</td>
                    <td>3Doodler ABS Meta Mixed Filament Pack (25 Strands) (AB-MIX2) </td>
                    <td>Readily Available</td>
                    <td>217</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>31.95   </td>
                    <td>57.57   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25932-MM-NA</td>
                    <td>15669-AA-NA</td>
                    <td>3Doodler ABS Meta Mixed Filament Pack (25 Strands) (AB-MIX2) </td>
                    <td>Readily Available</td>
                    <td>217</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>1199.21 </td>
                    <td>71.38   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25932-MM-NA</td>
                    <td>15669-AA-NA</td>
                    <td>3Doodler ABS Meta Mixed Filament Pack (25 Strands) (AB-MIX2) </td>
                    <td>Readily Available</td>
                    <td>217</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>12.55   </td>
                    <td>55.78   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25932-MM-NA</td>
                    <td>15669-AA-NA</td>
                    <td>3Doodler ABS Meta Mixed Filament Pack (25 Strands) (AB-MIX2) </td>
                    <td>Readily Available</td>
                    <td>217</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>5775.40 </td>
                    <td>84.31   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25932-MM-NA</td>
                    <td>15669-AA-NA</td>
                    <td>3Doodler ABS Meta Mixed Filament Pack (25 Strands) (AB-MIX2) </td>
                    <td>Readily Available</td>
                    <td>217</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>128.40  </td>
                    <td>87.35   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25932-MM-NA</td>
                    <td>15669-AA-NA</td>
                    <td>3Doodler ABS Meta Mixed Filament Pack (25 Strands) (AB-MIX2) </td>
                    <td>Readily Available</td>
                    <td>217</td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>8.92    </td>
                    <td>45.79   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25938-MM-NA</td>
                    <td>15675-AA-NA</td>
                    <td>3Doodler PLA Plastic: PLA</td>
                    <td>Readily Available</td>
                    <td><input type="text" value='294' name='etrade_qty' class="price_input_sm"></td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>7.14    </td>
                    <td>51.04   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25938-MM-NA</td>
                    <td>15675-AA-NA</td>
                    <td>3Doodler PLA Plastic: PLA</td>
                    <td>Readily Available</td>
                    <td><input type="text" value='294' name='etrade_qty' class="price_input_sm"></td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>23.51   </td>
                    <td>81.07   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25938-MM-NA</td>
                    <td>15675-AA-NA</td>
                    <td>3Doodler PLA Plastic: PLA</td>
                    <td>Readily Available</td>
                    <td><input type="text" value='294' name='etrade_qty' class="price_input_sm"></td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>23.08   </td>
                    <td>79.59   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25938-MM-NA</td>
                    <td>15675-AA-NA</td>
                    <td>3Doodler PLA Plastic: PLA</td>
                    <td>Readily Available</td>
                    <td><input type="text" value='294' name='etrade_qty' class="price_input_sm"></td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>22.81   </td>
                    <td>78.66   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25938-MM-NA</td>
                    <td>15675-AA-NA</td>
                    <td>3Doodler PLA Plastic: PLA</td>
                    <td>Readily Available</td>
                    <td><input type="text" value='294' name='etrade_qty' class="price_input_sm"></td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>23.51   </td>
                    <td>81.07   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25938-MM-NA</td>
                    <td>15675-AA-NA</td>
                    <td>3Doodler PLA Plastic: PLA</td>
                    <td>Readily Available</td>
                    <td><input type="text" value='294' name='etrade_qty' class="price_input_sm"></td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>23.42   </td>
                    <td>80.76   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25938-MM-NA</td>
                    <td>15675-AA-NA</td>
                    <td>3Doodler PLA Plastic: PLA</td>
                    <td>Readily Available</td>
                    <td><input type="text" value='294' name='etrade_qty' class="price_input_sm"></td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>23.18   </td>
                    <td>79.93   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25938-MM-NA</td>
                    <td>15675-AA-NA</td>
                    <td>3Doodler PLA Plastic: PLA</td>
                    <td>Readily Available</td>
                    <td><input type="text" value='294' name='etrade_qty' class="price_input_sm"></td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>24.45   </td>
                    <td>84.31   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
                    </td>
                </tr>
                <tr>
                    <td class="a-center ">
                      <input type="checkbox" class="flat" name="table_records">
                    </td>
                    <td>BCLAZU</td>
                    <td>25938-MM-NA</td>
                    <td>15675-AA-NA</td>
                    <td>3Doodler PLA Plastic: PLA</td>
                    <td>Readily Available</td>
                    <td><input type="text" value='294' name='etrade_qty' class="price_input_sm"></td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td>
                      <input type="text" value='0' name='etrade_qty' class="price_input_sm">
                    </td>
                    <td><input type="text" value='5.00' name='etrade_qty' class="price_input_sm">  </td>
                    <td>254.24  </td>
                    <td>85.03   </td>
                    <td data-toggle="tooltip" data-placement="left" title="" data-original-title="Update On: 2016-02-18 09:41:11  Update By:system">
                      <input type='Button' value="Detail" class="btn btn-primary" >
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

</script>