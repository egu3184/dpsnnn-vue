<template>
  <div class="card7">
    <div class="card7-theme1"> 
      <Card8/>
    </div>
    <div class="card7-theme2">
      <Card9/>
    </div>  
  </div>
</template>
<script>

import Card8 from "@/components/card/Card8";
import Card9 from "@/components/card/Card9";

export default {
  name: '',
  components: { Card8, Card9 },
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
  .card7{
    width: 100%;
    height: 1100px;
    padding: 0rem 25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  


</style>