<template>
  <div class="form-group form-group-sm">
    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="colour_id">Colour <span class="required">*</span></label>
    <div class="col-md-9 col-sm-9 col-xs-12">
      <select  name="colour_id" id="colour_id" class="form-control" required="required">
        <option></option>
        <template v-for="colour in colourList | orderBy 'colour_name'">
            <option :value="colour.colour_id" v-if="colour.colour_id == selectColour" selected>
                {{ colour.colour_name }}
            </option>
            <option :value="colour.colour_id" v-else>
                {{ colour.colour_name }}
            </option>
        </template>
      </select>
    </div>
  </div>
</template>

<script>
  import {fetchColourLists} from '../../../vuex/actions';
  import {getColourLists} from '../../../vuex/getters';
  export default {
    vuex: {
      actions: {
        fetchColourLists,
      },
      getters: {
        colourList: getColourLists,
      }
    },
    props: [
      'select-colour'
    ],
    watch: {
      selectColour: function (val) {
        $("#colour_id").attr("disabled", "disabled");
      }
    },
    created() {
      this.fetchColourLists();
    },
    ready() {

    }
  }
</script>