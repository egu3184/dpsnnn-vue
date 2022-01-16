<template>
  <div class="reservationButton" :style=styleObject> 
    <button v-bind:style=styleObject>예약하기</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props:{
    theme: Object,
  },
  computed:{

  },
  data() {
    return {
       styleObject: {
         'color':this.theme.fontColor,
         'border-color':this.theme.fontColor 
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
