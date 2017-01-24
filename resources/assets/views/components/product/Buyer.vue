<template>
  <div class="container">
    <section class="search-form">
      <form action="" onsubmit="return false" method="GET" class="form-inline" role="form">
        <div class="form-group">
            <input type="text" style="width:300px" v-model="keyword" name="keyword" id="keyword" class="form-control" placeholder="Enter ESG SKU or product name"/>
        </div>
        <button @click="fetchSku()" type="submit" class="btn btn-primary" style="margin-bottom: 0">Search</button>
      </form>
    </section>
<hr/>
    <section class="products">
      <table class="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>ESG SKU</th>
            <th>Name</th>
            <th>Buyer</th>
            <th>marketplace sku</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="product in products">
          <tr :class="highlightSelectedBuyer(product.buyer)">
            <td>{{ product.sku }}</td>
            <td>{{ product.name }}</td>
            <td>
              <div v-if="product.buyer">{{ product.user.username }}</div>
              <div v-else>
                <select class="select2_single form-control buyer{{product.sku}}" tabindex="-1" name="user" style="width:200px;">
                    <option value=""></option>
                    <option v-for="buyer in buyers" value="{{buyer.id}}">{{buyer.username}}</option>
                </select>
                <button class="btn btn-primary" @click="updateProduct(product)" style="margin-bottom:0">set</button>
              </div>
            </td>
            <td>
              <a data-toggle="collapse" href="#collapse{{product.sku}}" aria-expanded="false" class="btn btn-default btn-xs">show <span class="badge">{{ product.marketplace_sku_mapping.length }}</span></a>
            </td>
          </tr>
          <tr id="collapse{{product.sku}}" class="panel-collapse collapse" role="tabpanel">
            <td colspan="4">
              <!--<section class="search-form">
                <form action="" onsubmit="return false" method="GET" class="form-inline" role="form">
                  <div class="form-group">
                      <select name="country" id="country{{product.sku}}" placeholder="country">
                        <option value=""></option>
                        <option value="MY">MY</option>
                      </select>
                  </div>
                  <button @click="showItem(product)" type="submit" class="btn btn-primary btn-xs" style="margin-bottom: 0">Search</button>
                </form>
              </section>-->
              <table class="table table-bordered table-hover" id="marketplace{{product.sku}}">
                <thead><tr><th>marketplace_sku</th><th>marketplace</th><th>country</th><th>Operator</th></tr></thead>
                <tbody>
                <tr v-for="item in product.marketplace_sku_mapping" :class="highlightSelectedBuyer(item.operator)" id="marketplace{{item.id}}">
                  <td>{{ item.marketplace_sku }}</td>
                  <td>{{ item.marketplace_id }}</td>
                  <td>{{ item.country_id }}</td>
                  <td>
                    <div v-if="item.operator">{{ item.operator }}</div>
                    <div v-else>
                      <select class="select2_single form-control operator{{item.id}}" tabindex="-1" name="operator" style="width:200px;">
                          <option value=""></option>
                          <option v-for="operator in operators" value="{{operator.id}}">{{operator.username}}</option>
                      </select>
                      <button class="btn btn-primary" @click="updateMarketplaceSku(item)" style="margin-bottom:0">set</button>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
          </template>


        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
  import {api_url} from '../../../js/vue.config.js'
  import {
    fetchProductLists,
    fetchUserLists
  } from '../../../vuex/actions';

  import {
    getProductLists,
    getUserLists
  } from '../../../vuex/getters';


export default {
  data () {
    return {
      keyword: '',
      buyers:[],
      operators:[],
      api_url:api_url
    }
  },
  ready() {
    this.fetchUserLists(["ax_buyer","ax_operator"]);
  },
  watch: {
    products: function(val) {
      this.initSelect();
    },
    users: function() {
      this.initUsers();
    }
  },
  methods: {
    initUsers: function () {
      var that = this;
      this.users.forEach(function (c) {
        if (c.role_id == "ax_buyer") {
          that.buyers.push(c);
        } else if (c.role_id == "ax_operator") {
          that.operators.push(c);
        }
      })
    },
    fetchSku: function () {
      if (this.keyword) {
        this.fetchProductLists(this.keyword);
      }
      return false;
    },
    updateProduct: function (product) {
      var buyer = $(".buyer"+product.sku).val();
      var buyer_txt = $(".buyer"+product.sku).find("option:selected").text();
      if (buyer == "") {
        return false;
      }
      var post_data = {sku:product.sku,name:product.name,brand_id:product.brand_id,cat_id:product.cat_id,buyer:buyer};
      this.$http.post(
        api_url+'product/'+product.sku,
        post_data
      ).then(function (response) {
          $.isLoading({ text: "Set Success", class:"fa fa-check" });
          setTimeout( function(){
              $.isLoading("hide");
          }, 2000);
      }).then(function(){
          product.buyer = buyer;
          product.user = {username:buyer_txt};
      }).catch(function(){
          //todo
          $.isLoading({ text: "Error 500, Internal Server Error", class:"fa fa-exclamation-triangle" });
          setTimeout( function(){
              $.isLoading("hide");
          }, 3000);
      });
    },
    updateMarketplaceSku: function (item) {
      var operator = $(".operator"+item.id).val();
      var operator_txt = $(".operator"+item.id).find("option:selected").text();
      if (operator == "") {
        return false;
      }
      var post_data = {operator:operator};
      this.$http.put(
        api_url+'marketplace-product/'+item.id,
        post_data
      ).then(function (response) {
        $.isLoading({ text: "Set Success", class:"fa fa-check" });
        setTimeout( function(){
            $.isLoading("hide");
        }, 2000);
      }).then(function(){
        item.operator = operator_txt;
      }).catch(function(){
          //todo
          $.isLoading({ text: "Error 500, Internal Server Error", class:"fa fa-exclamation-triangle" });
          setTimeout( function(){
              $.isLoading("hide");
          }, 3000);
      });

    },
    highlightSelectedBuyer: function (buyer) {
      return {
        'success': buyer ? true : false
      }
    },
    initSelect: function() {
        $(".select2_single").select2({
          placeholder: "",
          allowClear: true
        });
    },
    showItem: function (product) {
      var selectedCountry = $("#country"+product.sku).val();
      if (selectedCountry == "") {
        $("#marketplace"+product.sku+" tr").show();
        return false;
      }

      product.marketplace_sku_mapping.forEach(function (c) {
        if (c.country_id === selectedCountry) {
          $("#marketplace"+c.id).show();
        } else {
          $("#marketplace"+c.id).hide();
        }
      })
    }
  },

  vuex: {
    actions: {
      fetchProductLists,
      fetchUserLists
    },
    getters: {
      products: getProductLists,
      users: getUserLists
    }
  }
}
</script>
