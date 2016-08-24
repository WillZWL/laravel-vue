<template>
<div class="container body">
    <div id="app">
        <div class="main_container">
            <navbar></navbar>
            <sidebar></sidebar>
            <div class="right_col" role="main">
                <div class="page-title">
                  <div class="title_left">
                    <h3>[Accelerator]<small>  Prcing Overview</small></h3>
                  </div>
                </div>
                <div class="clearfix"></div>
                <section class="content">
                    <price></price>
                </section>
            </div>
            <footbar></footbar>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from './components/layouts/Navbar.vue'
import Sidebar from './components/layouts/Sidebar.vue'
import Footbar from './components/layouts/Footbar.vue'
import Price from './components/Price.vue'

export default {
  components: {
    Navbar,
    Sidebar,
    Footbar,
    Price
  },
  replace: false
}
</script>