<template>
  <div class="theme-card-slot" v-bind:style=styleObject>
   <div class="theme-description"> 
     <!-- Title -->
    <div class="theme-description-head">
      <ThemeCardTitle :head=Theme.head>
        <template v-slot:title></template>
      </ThemeCardTitle> 
    </div>
    <!-- Content -->
    <div class="theme-description-content">
      <Theme-card-content :content=Theme.content>
        <template v-slot:content></template>
      </Theme-card-content> 
   </div>
    <!-- Button -->
    <div class="reservationButton" v-if="Theme.button.isRequiredReservationButtion==true">
      <ReservationButton :button=Theme.button />
    </div>
  </div>
  </div> 
</template>
<script>

import ThemeCardTitle from "@/components/slot/ThemeCardTitle"
import ThemeCardContent from "@/components/slot/ThemeCardContent"
import ReservationButton from "@/components/slot/ReservationButton"

export default {
  name: '',
  components: { ThemeCardTitle, ThemeCardContent, ReservationButton},
  props:{
    theme: Object,
  },
  computed:{

  },
  data() {
    return {
       Theme: this.theme, 
       styleObject: {
         'background-color':this.theme.backgroundColor,
        //  'color': this.theme.defaultColor,
         'color': 'red',
        //  'border-color': this.theme.defaultColor,
         'border-color': 'red', //여기가 안 됨.
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
  .theme-card-slot{
    width: 100%;
    display: flex; 
    
  }
  .theme-description{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-align: left;
    margin: 10% 30% 6% 25%;
  }


  /* 데스크톱 */
  @media (min-width: 769px){
   .reservationButton button{
      padding: 30px 100px;
      font-size: 25px;
      border: 3px solid ;
      
   }
    .theme-description-head{
      font-weight:bold; 
      /* 폰트 사이즈 기본값 */
      font-size:45px;
      line-height: 3rem;
      margin-bottom: 5.5rem;
    }
    .theme-description-content{
      /* 폰트 사이즈 기본값 */
      font-size:23px; 
    }
    .reservationButton{
    display: flex;
    justify-content: left;
    margin-top: 4rem;
   } 
  }



  /* 모바일 */
  @media (max-width:768px){
    .theme-description{
      margin-left:  11%;
      margin-right: 11%;
    }
    .theme-description-head{
      font-weight:bold; 
      /* 폰트 사이즈 기본값 */
      font-size:28px;
      line-height: 3rem;
      margin-bottom: 2.5rem;
    }  
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

  .theme-description-content span{   
   
    line-height:1.3em;
    padding: 0;
    margin: 0;
  }


</style>
