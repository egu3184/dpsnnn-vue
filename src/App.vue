<template>
  <div id="app">
    <Header />
    <Content />
    <Footer />
  </div>
  
</template>

<script>

import Header from "@/components/Header";
import Footer from "./components/Footer.vue"
import Content from './components/Content.vue'

  export default({
    components: {Header, Footer, Content},
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
