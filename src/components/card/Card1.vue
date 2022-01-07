<template>
  <div class="card1">
    <div class="card1-box">
      <div class="card1-textbox"> 
       <span>공간으로의 이야기,</span><br/>
       <span>단편선</span>
      </div>
      <div class="card1-reservationButton">
        <button>예약하기</button>
      </div>
    </div>  
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
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
  .card1{
    width: 100%;
    height: 900px;
    background-image: url('https://static.wixstatic.com/media/7d3d32_b22f15e7350f4ca78b86dd57ec629bfc~mv2.jpg/v1/fill/w_1170,h_1162,al_c,q_85,usm_0.66_1.00_0.01/7d3d32_b22f15e7350f4ca78b86dd57ec629bfc~mv2.webp');
    
 }
  .card1-box{
    color: #F3F1DE;
    width: 600px;
    height: 400px;
    margin-left: 440px;
    margin-top: 320px;
    position: absolute;
    
  }
  .card1-textbox{
    margin-top: 110px;
    margin-left: 30px;
    font-size: 35px;
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    
  }
   .card1-reservationButton button{
    padding: 20px 100px;
    background-color: transparent;
    color: #F3F1DE;
    font-size: 20px;
    border: 3px solid #F3F1DE;
    margin-top: 70px;
    margin-left: 160px;
  }
  .card1-reservationButton button:hover{
    background-color: black;
    color: white;
  }
</style>
