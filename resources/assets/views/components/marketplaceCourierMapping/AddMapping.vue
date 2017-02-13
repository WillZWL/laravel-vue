<template>
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
      <div class="x_title">
        <h2>Add Marketplace Courier Mapping</h2>
        <ul class="nav navbar-right panel_toolbox">
          <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <div class="x_content">
        <form id="fm-add" class="form_search form-horizontal form-label-left" onsubmit="return false">
          <!--left side-->
          <div class="col-md-6 col-xs-12">
            <div class="form-group">
                <label class="control-label col-md-4">Marketplace<span class="required"> *</span></label>
                <div class="col-md-6 col-xs-12">
                  <select name="marketplace" id="marketplace" class="form-control"  required="required">
                      <option></option>
                    <template v-for="(index, marketplace) in marketplaces">
                      <option value="{{ marketplace }}">{{ marketplace }}</option>
                    </template>
                  </select>
                </div>
            </div>
          </div>
          <!--right side-->
          <div class="col-md-6 col-xs-12">
            <div class="form-group">
                <label class="control-label col-md-4">ESG Courier<span class="required"> *</span></label>
                <div class="col-md-6 col-xs-12">
                    <select class="select2 form-control" tabindex="-1" id="courier_id" name="courier_id" required="required">
                        <option value=""></option>
                        <template v-for="(index, courier) in couriers">
                          <option value="{{ courier.courier_id }}">{{ courier.courier_name }}</option>
                        </template>
                    </select>
                </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="form-group">
                <label class="control-label col-md-4">Marketplace Courier Name<span class="required"> *</span></label>
                <div class="col-md-6 col-xs-12">
                  <input type="text" id="marketplace_courier_name" name="marketplace_courier_name" class="form-control col-md-6 col-xs-12" required="required">
                </div>
            </div>
          </div>
          <!--right side-->
          <div class="col-md-6 col-xs-12">
            <div class="form-group">
                <label class="control-label col-md-4"></label>
                <div class="col-md-6 col-xs-12">
                  <input type="button" class="btn btn-success" name="search" value="Add Mapping" @click="addMapping()">
                </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { addMarketplaceCourierMapping } from '../../../vuex/actions';
import { getMarketplaces, getCourierList } from '../../../vuex/getters';
export default {
  vuex: {
    actions: {
      addMapping: addMarketplaceCourierMapping
    },
    getters: {
      marketplaces: getMarketplaces,
      couriers: getCourierList
    }
  }
}
</script>



