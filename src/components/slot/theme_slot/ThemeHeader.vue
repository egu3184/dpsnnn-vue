<template>
  <div class="title2">
       <span class="title_num">{{theme.title_num}}</span><br/>
       <span class="title_name">{{theme.title_name}}</span>
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
  .title2{
    width: 100%;
    margin-top: 15rem;
    background-color: transparent;
    text-align: center;
    color: rgb(240, 237, 204);
   
  }


  /* 데스크탑 */
  @media (min-width: 798px){
  
  .title_num{
      font-size: 1.5rem;
    }
    .title_name{
      font-size: 3rem;;
    }

  }

  /* 모바일 */
  @media (max-width: 798px){
    
    .title_num{
      font-size: 1.5rem;
    }
    .title_name{
      font-size: 2rem;
    }
    
  }


</style>


