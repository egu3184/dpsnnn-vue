<template>
  <div class="card1">
    <div class="card1-box">
      <div class="card1-textbox"> 
       <span>공간으로의 이야기,</span><br/>
       <span>단편선</span>
      </div>
      <div class="card1-button">  
        <ReservationButton :button=button>
          <template v-slot:button></template>
        </ReservationButton>
      </div> 
    </div>  
  </div>
</template>
<script>
import ReservationButton from "@/components/slot/ReservationButton"
export default {
  name: '',
  components: { ReservationButton },
  data() {
    return {
       button:{
         'buttonBorderColor': '#F3F1DE',
         'buttonFontColor': '#F3F1DE'
       }
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
  .card1{
    display: flex;
   justify-content: center;
    width: 100%;
    height: 900px;
    background-image: url('https://static.wixstatic.com/media/7d3d32_b22f15e7350f4ca78b86dd57ec629bfc~mv2.jpg/v1/fill/w_1170,h_1162,al_c,q_85,usm_0.66_1.00_0.01/7d3d32_b22f15e7350f4ca78b86dd57ec629bfc~mv2.webp');
    background-attachment: fixed;
 }
  .buttonTestClass{
    border: 1px solid red;
    text-align: center;
    justify-items: center;
    padding: 10% 20%
  }
  
  .card1-box{
    margin-top: 20.0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #F3F1DE;
    width: 600px;
    height: 400px;
    
  }
  .card1-textbox{
    font-size: 35px;
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin-bottom: 8rem; 
  }
   @media (min-width: 789px){
      .card1-button{
        padding-left: 27%;
        padding-right: 25%;
      }
  }
  

  
</style>
