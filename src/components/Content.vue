<template>
  <div class="content">
    <Card1/>
    <Card2/>
    <!-- <Card3/>
    <Card4/>
    <Card5/>
    <Card6/> -->
   

  </div>
</template>
<script>

import Card1 from "@/components/card/Card1"
import Card2 from "@/components/card/Card2"
// import Card3 from "@/components/card/Card3"
// import Card4 from "@/components/card/Card4"
// import Card5 from "@/components/card/Card5"
// import Card6 from "@/components/card/Card6"


export default {
  name: '',
  components: {
    Card1, Card2, 
    // Card3, Card4, Card5, Card6, 
  },
  data() {
    return {
       sampleData: ''
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style>
  .content{
    width: 100%;
    min-height: 1000px;
  }
</style>
