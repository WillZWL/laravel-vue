<template>
<table id="{{ id }}" class="table table-striped table-bordered bulk_action jambo_table" width="100%">
  <thead>
    <tr>
      <th width="15%">Marketplace Field</th>
      <th width="15%">ESG System Field</th>
      <th width="10%">Relate ESG Table</th>
      <th width="30%">Description</th>
      <th width="30%">Fixed Value</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="field in lists">
      <td>{{ field.mp_field }}</td>
      <td>{{ field.system_field }}</td>
      <td>{{ field.table }}</td>
      <td>{{ field.desc }}</td>
      <td>{{ field.fixed_value }}</td>
    </tr>
  </tbody>
</table>
</template>
<script>
  export default {
    props: [
      'id',
      'lists'
    ]
  }
</script>