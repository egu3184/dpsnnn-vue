<template>
  <div class="reservationButton"> 
    <button v-bind:style=buttonStyle>예약하기</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props:{
    button: Object,
  },
  computed:{

  },
  data() {
    return {
       buttonStyle: {
         'color': this.button.buttonFontColor,
         'border-color':this.button.buttonBorderColor 
       },
       
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

  @media (min-width: 769px){
   .reservationButton button{
      padding: 30px 100px;
      font-size: 25px;
      border: 3px solid ;
   }
    .reservationButton{
      display: flex;
      justify-content: left;
      margin-top: 4rem;
    } 
  }

  @media (max-width:768px){
    .reservationButton button{
      padding: 15px 50px;
      font-size: 15px;
      border: 3px solid;
      justify-content: center;
   }
    .reservationButton{
      display: flex;
      justify-content: center;
      margin-top: 4rem;
   }   
  }

  .reservationButton button{
    background-color: transparent;
    border: 3px solid;
  }
  .reservationButton button:hover{
    background-color: black;
    color: white;
  }

</style>
