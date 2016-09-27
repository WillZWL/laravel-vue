<template>
  <div class="form-group form-group-sm">
    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="version_id">Version  <span class="required">*</span></label>
    <div class="col-md-9 col-sm-9 col-xs-12">
      <select name="version_id" id="version_id" class="select2_single form-control" required="required">
        <option></option>
        <template v-for="version in versionList | orderBy 'version_name'">
            <option :value="version.version_id" v-if="version.version_id == selectVersion" selected>
                {{ version.version_name }}
            </option>
            <option :value="version.version_id" v-else>
                {{ version.version_name }}
            </option>
        </template>
      </select>
    </div>
  </div>
</template>

<script>
  import {fetchVersionLists} from '../../../vuex/actions';
  import {getVersionLists} from '../../../vuex/getters';
  export default {
    vuex: {
      actions: {
        fetchVersionLists,
      },
      getters: {
        versionList: getVersionLists,
      }
    },
    props: [
      'select-version'
    ],
    watch: {
      selectVersion: function (val) {
        $("#version_id").attr("disabled", "disabled");
      }
    },
    created() {
      this.fetchVersionLists();
    }
  }
</script>