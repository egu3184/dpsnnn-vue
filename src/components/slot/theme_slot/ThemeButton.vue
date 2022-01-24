<template>
  <div class="footer">
    <button>예약하기(준비중)</button>
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
  .footer button{
    background-color: #363636;
    outline: 0;
    border: 0;
    color: rgb(217,197,180);
  }

  .footer button:hover{
    background-color: #318f87;
    color: rgb(255, 255, 255);
  }

  .themeFooter{
    padding: 12% 35%;
  }
  .themeFooter button{
    padding: 7% 15%;
  }

  /* 데스크톱 */
   @media (min-width: 798px){
    .themeFooter{
      padding: 9% 35%;
    }
    .themeFooter button{
      padding: 7% 15%;
    }
  
  }

  /* 모바일 */
   @media (max-width: 798px){
    .themeFooter{
      padding: 12% 35%;
    }
    .themeFooter button{
      padding: 7% 20%;
    }
  
  }

</style>


