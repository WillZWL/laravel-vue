<style>
	body {
		position: relative;
	}
	ul.nav-pills {
		top: 135px;
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
    <div class="page-title">
        <div class="title_left">
            <h3>[Accelerator]<small> Product Overview</small></h3>
        </div>
    </div>
    <div class="clearfix"></div>
    <div>
		<div class="container">
		  <div class="row">
		    <nav class="hidden-xs col-sm-3 col-md-3 col-lg-2" id="myScrollspy">
		      <ul class="nav nav-pills nav-stacked">
		        <li class="active"><a href="#basicInfo">Basic Product Info</a></li>
		        <li><a href="#section2">Product Image</a></li>
		        <li><a href="#section3">Section 3</a></li>
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
		      <div id="section2"> 
		        <h1>Section 2</h1>
		        <p>Try to scroll this section and look at the navigation list while scrolling!</p>
		      </div>         
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
export default {
	ready() {
		$("body").scrollspy({target: '#myScrollspy', offset: 30});
	}, 
	components: {
        BasicInfo
    }
}
</script>