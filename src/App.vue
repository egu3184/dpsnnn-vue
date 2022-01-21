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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}


html, body{
  margin: 0;
  padding: 0;
}  

</style>
