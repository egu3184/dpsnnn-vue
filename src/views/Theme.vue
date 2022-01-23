<template>
  <div id="theme">
    
     <div class="title2"></div>  
    
     <div class="img"><img src="https://cdn.imweb.me/thumbnail/20211116/0ee5f8df51546.jpeg"></div>
     <div class="container2"></div>
    

  </div>
</template>
<script>

export default {
  name: '',
  components: {
   
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
  #theme{
    width: 100%;
    min-height: 1000px; /* 임시 높이(추후 삭제 요망) */
    background-color: cadetblue;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .container2{
    width: 25rem;
    background-color: rgb(212, 207, 223);
    
  }
  .img{
    background-color: darkolivegreen; 
    width: 30rem;
  }
  .img img{
    width: 100%;   
  }

  @media (max-width: 798px){
    .img{
      margin-top: 50%;
      background-color: darkolivegreen; 
      width: 30rem;
    }
    .img img{
      width: 100%;
      
    }

  }

  @media (min-width: 798px){
  .img{
    background-color: darkolivegreen;
    margin-right: 1%;
    margin-left: 1%;
    margin-top: 18%;
    width: 30rem;
  }
  .img img{
    width: 100%;   
  }
  .container2{
    
    width: 30rem;
    background-color: rgb(212, 207, 223);
    margin-right: 1%;
    margin-left: 1%;
    margin-top: 18%;
    
  }

  }


</style>
