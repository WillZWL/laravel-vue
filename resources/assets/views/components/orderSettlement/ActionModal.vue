<template>
  <div class="modal fade" :class="modal_class" tabindex="-1" role="dialog" aria-hidden="true">
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
                <strong>Payment Gateway: {{ payment_gateway.name }}</strong>
              </li>
              <li class="list-group-item">
                <strong>Marketplace Contact Name:</strong> {{ marketplace.marketplace_contact_name }}
              </li>
              <li class="list-group-item">
                <strong>Marketplace Contact phone:</strong> {{ marketplace.marketplace_contact_phone }}
              </li>
              <li class="list-group-item">
                <strong>Marketplace Email1:</strong> {{ marketplace.marketplace_email_1 }}
                <input type="checkbox" name="marketplace_email" value="{{ marketplace.marketplace_email_1 }}">
              </li>
              <li class="list-group-item">
                <strong>Marketplace Email2:</strong> {{ marketplace.marketplace_email_2 }}
                <input type="checkbox" name="marketplace_email" value="{{ marketplace.marketplace_email_2 }}">
              </li>
              <li class="list-group-item">
                <strong>Marketplace Email3:</strong> {{ marketplace.marketplace_email_3 }}
                <input type="checkbox" name="marketplace_email" value="{{ marketplace.marketplace_email_3 }}">
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
  import {initOrderListDatatable, orderSearch} from '../../../vuex/actions';
  export default {
    vuex: {
      actions: {
        search: orderSearch
      }
    },
    props: [
      'marketplace',
      'payment_gateway',
      'modal_class'
    ],
    methods: {
      sendEmail () {
        var post_data = {}
        var marketplace_emails = $('input:checkbox[name=marketplace_email]:checked')
        var checked_emails = [];
        $.each(marketplace_emails, function () {
          checked_emails.push(this.value);
        });
        if (checked_emails.length > 0) {
          post_data.marketplace_id = this.marketplace.marketplace_id
          post_data.payment_gateway_id = this.payment_gateway.id
          post_data.checked_emails = checked_emails
          this.$http.post(
            api_url + 'order-settlement/send-email',
            post_data
          ).then(function(response) {
            $.isLoading({ text: "Update Success", class:"fa fa-check" });
            this.search();
            $('.action-modal').removeClass('in');
            $("body").removeClass('modal-open');
            $.isLoading("hide");
          }).then(function(){
          }).catch(function(){
            $.isLoading({ text: "Error 500, Internal Server Error", class:"fa fa-exclamation-triangle" });
            setTimeout( function(){
                $.isLoading("hide");
            }, 3000);
          })
        }
      }
    }
  }
</script>
