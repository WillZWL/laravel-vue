<template>
  <div class="row">
    <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="x_panel">
        <div class="x_title">
          <h2>Commission Charge Export</h2>
          <ul class="nav navbar-right panel_toolbox">
            <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <div class="x_content">
          <div class="row">
            <div class="">
              <form action="" method="POST" class="commission-charge-download-from" id="commission-charge-download-from" role="form">
                <div class="form-group col-sm-7">
                  <h2 for="gateway ID">Marketplace</h2>
                  <select class="form-control" tabindex="-1" name="marketplace" id="marketplace" @change="changeMarketplace()">
                    <option></option>

                    <template v-for="market in marketplace">
                      <option :value="market.id">
                        {{ market.name }}
                      </option>
                    </template>
                  </select>
                </div>

                <div class="form-group col-sm-7">
                  <h2 for="gateway ID">Payment Gateway</h2>
                  <select class="form-control" tabindex="-1" name="payment_gateway">
                    <option></option>

                    <template v-for="gateway in paymentGateway">
                      <option :value="gateway.id" v-if="gateway.id == gateway" selected>
                        {{ gateway.name }}
                      </option>
                      <option :value="gateway.id" v-else>
                        {{ gateway.name }}
                      </option>
                    </template>
                  </select>
                </div>

                <div class="clearfix"></div>
                <div class="ln_solid"></div>
                <div class="form-group">
                  <div class="col-sm-7">
                    <button type="button" class="btn btn-success" @click="download()">Download Report</button>
                  </div>
                </div>

              </form>
            </div>
            <div id="load-download"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {
    submitCommissionChargeDownloadFrom,
  } from '../../../vuex/actions';
  export default {
    vuex: {
      actions: {
        download: submitCommissionChargeDownloadFrom,
      }
    },
    watch: {
      marketplace: function marketplace(val) {
        this.paymentGateway;
        console.debug(this.paymentGateway);
      }
    },
    data() {
      return {
        "marketplace": [
          {'id': 'amazon', 'name': 'Amazon'},
        ],
        "paymentGatewayAccount": {
          "amazon": [
            {'id': 'amazon_uk', 'name': 'Amazon UK'},
            {'id': 'amazon_de', 'name': 'Amazon DE'},
            {'id': 'amazon_es', 'name': 'Amazon ES'},
            {'id': 'amazon_fr', 'name': 'Amazon FR'},
            {'id': 'amazon_it', 'name': 'Amazon IT'},
            {'id': 'amazon_jp', 'name': 'Amazon JP'},
            {'id': 'amazon_us', 'name': 'Amazon US'},
            {'id': 'amazon_ca', 'name': 'Amazon CA'},
            {'id': 'amazon_mx', 'name': 'Amazon MX'}
          ],
        },
        paymentGateway: null,
      }
    },
    methods: {
      changeMarketplace: function changeMarketplace() {
        var marketplace = $("#commission-charge-download-from #marketplace").val();
        var gateway = this.paymentGatewayAccount;

        this.$set("paymentGateway", gateway[marketplace]);
      }
    }
  }
</script>