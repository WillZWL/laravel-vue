<style>
  body {
    position: relative;
  }
  ul.nav-pills {
    top: 123px;
    position: fixed;
  }
  #myScrollspy ul {
    width: 180px;
  }
  .nav-stacked > li > a {
    border: 1px solid #e5e5e5;
    display: block;
    margin: 0 0 -3px;
    padding: 8px 14px;
  }
  .nav-pills > li > a {
    border-radius: 0px;
  }

  .product-info-form .x_panel{
    padding: 0px;
    margin: 0px;
  }

  @media screen and (min-width: 900px) {

  }
</style>

<template>
  <div>
    <div class="container">
      <div class="row">
        <nav class="hidden-xs col-sm-3 col-md-3 col-lg-2" id="myScrollspy">
          <ul class="nav nav-pills nav-stacked">
            <li class="active"><a href="#basicInfoDiv">Basic Product Info</a></li>
            <li><a href="#merchantMappingDiv">Product Mapping</a></li>
            <li><a href="#productSupplierDiv">Product Supplier</a></li>
            <li><a href="#weightDimensionDiv">Weight Dimension</a></li>
            <li><a href="#productImageDiv">Product Image</a></li>
            <li><a href="#commonDiv">Common Info</a></li>
            <li><a href="#boxContentDiv">Box Content Info</a></li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">Section <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#productCodeDiv">Product Code</a></li>
                <li><a href="#productfeaturesDiv">Product Features</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="col-sm-9 col-xs-9 col-md-9 col-lg-10">

          <basic-info></basic-info>

          <merchant-mapping></merchant-mapping>

          <product-supplier></product-supplier>

          <weight-dimension></weight-dimension>

          <product-image></product-image>

          <common></common>

          <box-content></box-content>

          <product-code></product-code>

          <product-features></product-features>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BasicInfo from './product/BasicInfo.vue'
  import MerchantMapping from './product/MerchantMapping.vue'
  import ProductSupplier from './product/ProductSupplier.vue'
  import WeightDimension from './product/WeightDimension.vue'
  import ProductCode from './product/ProductCode.vue'
  import ProductImage from './product/ProductImage.vue'
  import Common from './product/Common.vue'
  import BoxContent from './product/BoxContent.vue'
  import ProductFeatures from './product/ProductFeatures.vue'
  export default {
    components: {
      BasicInfo,
      MerchantMapping,
      ProductSupplier,
      WeightDimension,
      ProductCode,
      ProductImage,
      Common,
      BoxContent,
      ProductFeatures,
    },
    created() {
      $.isLoading({ text: "loading", class:"fa fa-refresh fa-spin" });
    },
    ready() {
      $("body").scrollspy({target: '#myScrollspy', offset: 200});
    },
    methods: {

    }
  }
</script>