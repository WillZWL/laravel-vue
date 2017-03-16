<template>
  <div class="modal fade action-modal{{item.so_no}}" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
          </button>
          <h4 class="modal-title" id="myModalLabel2">Order Settlement Action</h4>
        </div>
        <div class="modal-body">
          <form class="form-horizontal form-label-left">
            <ul class="list-group">
              <li class="list-group-item">
                <strong>So No:</strong> {{item.so_no}}
                <input type="hidden" v-model="so_no" value="{{item.so_no}}">
              </li>
              <li class="list-group-item">
                <strong>Marketplace Contact Name:</strong> {{ item.marketplace_contact_name }}
              </li>
              <li class="list-group-item">
                <strong>Marketplace Contact phone:</strong> {{ item.marketplace_contact_phone }}
              </li>
              <li class="list-group-item">
                <strong>Marketplace Email1:</strong> {{ item.marketplace_email_1 }}
                <input type="checkbox" name="marketplace_email" value="{{ item.marketplace_email_1 }}">
              </li>
              <li class="list-group-item">
                <strong>Marketplace Email2:</strong> {{ item.marketplace_email_2 }}
                <input type="checkbox" name="marketplace_email" value="{{ item.marketplace_email_2 }}">
              </li>
              <li class="list-group-item">
                <strong>Marketplace Email3:</strong> {{ item.marketplace_email_3 }}
                <input type="checkbox" name="marketplace_email" value="{{ item.marketplace_email_3 }}">
              </li>
            </ul>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="sendEmail">Send Email</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {api_url} from '../../../js/vue.config.js'
  export default {
    props: [
      'item'
    ],
    data () {
      return {
        so_no: ''
      }
    },
    methods: {
      sendEmail () {
        var post_data = {}
        var so_no = this.so_no
        var marketplace_emails = $('input:checkbox[name=marketplace_email]:checked')
        var checked_emails = [];
        $.each(marketplace_emails, function () {
          checked_emails.push(this.value);
        });
        if (so_no && checked_emails.length > 0) {
          post_data.so_no = so_no
          post_data.checked_emails = checked_emails

          this.$http.post(
            api_url + 'order-settlement/send-email',
            post_data
          ).then(function(response) {

          })
        }
      }
    }
  }
</script>
