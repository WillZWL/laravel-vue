<template>
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
      <div class="x_title">
        <h2>Filters</h2>
        <ul class="nav navbar-right panel_toolbox">
          <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <div class="x_content">
        <form name="fm" class="form_search form-horizontal form-label-left" onsubmit="return false">
          <!--left side-->
          <div class="col-md-6 col-xs-12">
            <div class="form-group">
                <label class="control-label col-md-4">Marketplace</label>
                <div class="col-md-6 col-xs-12">
                  <select name="marketplace" class="form-control"  required="required">
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
                <label class="control-label col-md-4">ESG Courier</label>
                <div class="col-md-6 col-xs-12">
                    <select class="select2 form-control" tabindex="-1" name="courier_id">
                        <option value=""></option>
                        <template v-for="(index, courier) in couriers">
                          <option value="{{ courier.courier_id }}">{{ courier.courier_name }}</option>
                        </template>
                    </select>
                </div>
            </div>
          </div>
          <div class="form-group col-md-12">
            <div class="col-md-12 col-sm-12 col-xs-12 col-md-offset-5">
              <input type="button" class="btn btn-success" name="search" value="Search" @click="search()">&nbsp;&nbsp;
              <!-- <button type="button" class="btn btn-primary" @click=""><i class="fa fa-print"></i> Download</button> -->
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { fetchCourierLists, marketplaceCourierMappingSearch } from '../../../vuex/actions';
import { getMarketplaces, getCourierList } from '../../../vuex/getters';
export default {
  vuex: {
    actions: {
      search: marketplaceCourierMappingSearch,
      fetchCourierLists
    },
    getters: {
      marketplaces: getMarketplaces,
      couriers: getCourierList
    }
  },
  created() {
    this.fetchCourierLists();
  },
  ready() {
    $(".select2").select2({
      placeholder: "",
      allowClear: true
    });
  }
}
</script>
