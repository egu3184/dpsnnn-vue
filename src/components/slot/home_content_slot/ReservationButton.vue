<template>
    <div class="reservationButton">
      <slot name="button">
        <button v-if="button.buttonFontColor == ''" :style=defaultStyle>예약하기</button>
        <button v-else :style=buttonStyle>예약하기</button>
      </slot>
    </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props:{
    defaultColor:String,
    button: Object,
  },
  data() {
    return {
      defaultStyle:{
        'border-color': this.defaultColor,
        'color': this.defaultColor,
      },
      buttonStyle:{
        'border-color': this.button.buttonBorderColor,
        'color': this.button.buttonFontColor,
      }
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    
  }
}
</script>
<style >
  

  @media (min-width: 769px){
   .reservationButton button{
      padding: 2rem 5rem;
      font-size: rem;
      border: 3px solid ;
   }
    .reservationButton{
      display: flex;
      justify-items: center;
      align-items: center;
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
      align-items: center;
      
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
