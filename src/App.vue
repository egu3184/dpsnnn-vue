<template>
  <div id="app">
    <Header />
    <div id="content">
      <router-view></router-view>
    </div>  
    <Footer />
  </div>
  
</template>

<script>

import Header from "@/components/layout/Header";
import Footer from "./components/layout/Footer.vue"


  export default({
    components: { Header, Footer, },
    setup() {
      
    },
  })
</script>


<style>

</style>
