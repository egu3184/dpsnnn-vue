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
 #app{
   font-family: GowunDodum-Regular;
 }

@font-face {
    font-family: 'sangsang';
    src: url('./assets/fonts/SANGSANGBODYM.TTF') format('truetype');
}
@font-face {
    font-family: 'GowunDodum-Regular';
    /* font-family: "Spoqa Han Sans Neo",-apple-system,BlinkMacSystemFont,avenir next,avenir,segoe ui,helvetica neue,helvetica,Ubuntu,roboto,noto,arial,sans-serif; */
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
#app{
  height: 100%;
}
#content{
  /* height: 100%; */
  min-height: 80rem;;
}
</style>
