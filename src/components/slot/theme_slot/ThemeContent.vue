<template>
  <div class="description">
  <br/><br/>
  <div class="description_title">   
    <div :key="i" v-for="(text, i) in theme.title" >
      <div :key="j" v-for="(t, j) in text"><span>{{t}}</span><br/></div>
    </div> 
  </div>
  <br/><br/>
  <div :key="i" v-for="(description, i) in theme.descriptions">
    <br/>
    <div :key="j" v-for="(text, j) in description"><span>{{text}}</span><br/></div>
  </div>
  </div>
</template>
<script>



export default {
  name: '',
  components: {  },
  props:{
    theme: Object
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
  .description{
    font-size: 1.5rem;
    color: rgb(240, 237, 204);
  }
  .container2{
    width: 45%;
  }

  /* 데스크탑 */
  @media (min-width: 798px){
  
    .container2{
      margin-right: 1%;
      margin-left: 1%;
      margin-top: 8%;
      margin-bottom: 10%;
    }
    .description{
      font-size: 1.5rem;
      color: rgb(240, 237, 204);
    }
    .description_title{
      font-size: 2rem;
    }
  }

  /* 모바일 */
  @media (max-width: 798px){
   
    .container2{
      width: 100%;
      margin-right: 1%;
      margin-left: 1%;
      margin-top: 8%;
      margin-bottom: 10%;
    }
    .description{
      font-size: 1.15rem;
      color: rgb(240, 237, 204);
    }
    .description_title{
      font-size: 1.5rem;
      margin-left: 2%;
    }

  
  }

</style>


