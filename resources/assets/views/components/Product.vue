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
  #section1 {color: #fff; background-color: #1E88E5;}
  #section2 {color: #fff; background-color: #673ab7;}
  #section3 {color: #fff; background-color: #ff9800;}
  #section41 {color: #fff; background-color: #00bcd4;}
  #section42 {color: #fff; background-color: #009688;}

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
            <li><a href="#productImageDiv">Product Image</a></li>
            <li><a href="#commonDiv">Common Info</a></li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">Section 4 <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#section41">Section 4-1</a></li>
                <li><a href="#section42">Section 4-2</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="col-sm-9 col-xs-9 col-md-9 col-lg-10">
        <basic-info></basic-info>
        <product-image></product-image>
        <common></common>

          <div id="section3">
            <h1>Section 3</h1>
            <p>Try to scroll this section and look at the navigation list while scrolling!</p>
          </div>
          <div id="section41">
            <h1>Section 4-1</h1>
            <p>Try to scroll this section and look at the navigation list while scrolling!</p>
          </div>
          <div id="section42">
            <h1>Section 4-2</h1>
            <p>Try to scroll this section and look at the navigation list while scrolling!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasicInfo from './product/BasicInfo.vue'
import ProductImage from './product/ProductImage.vue'
import Common from './product/Common.vue'

export default {
  ready() {
    $("body").scrollspy({target: '#myScrollspy', offset: 200});
  },
  components: {
        BasicInfo,
        ProductImage,
        Common
    }
}
</script>