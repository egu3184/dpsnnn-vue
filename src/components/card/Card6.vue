<template>
  <div class="card6">
   <div class="card6-comment"> 
    <div class="card6-comment-title">
     <span>We decided to call it happiness</span><br/>
     <span style="font-weight:bold; font-size:50px;">사람들은 그것을 행복이라 부르기로 했다.</span><br/>
    </div><br/><br><br/>
     <div class="card6-comment-content" style="font-size:23px; line-height:1.3em;">
      <span>석우는 연기를 들이키며 영원이라는 것에 대해 생각해보았다.</span><br/>
      <span>아무래도 불행하겠지, 라고 생각하며 날숨.</span><br/>
      <span>영원히 이어지는 게 고작 이런 삶이라면, 하며 틱.</span><br/><br/>
      <span>손을 털며, 그는 오늘의 근무지의 간판을 올려다 보았다.</span><br/><br/>
      <span>루드베키아.</span><br/><br/>
      <span>영생을 발명했다는 기묘한 바이오 회사.</span><br/>
      <span>공식 발표 이틀 전 사라져버린 연구소장.</span><br/>
      <span>그 사건에 배정된 형사, 김석우.</span><br/><br/>
      <span>석우는 루드베키아의 문을 열었다.</span>
      <span></span>
    <div class="reservationButton6">
      <button>예약하기</button>
    </div>
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
  .card6{
    width: 100%;
    height: 1100px;
    background-color: rgb(106, 123, 162);
    padding: 180px;

  }
  .card6-comment{
    position: absolute;
    left: 15%;
    margin: auto;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-align: left;
    color: #FFDFDE;
  }

  .card6-comment-title span{
    line-height: 60px;
    font-size: 40px;
  }


  .card6-comment-content span{   
    padding: 0;
    margin: 0;
  }

  .reservationButton6{
    margin-top: 80px;
    
  }
  .reservationButton6 button{
    padding: 30px 100px;
    background-color: rgb(106, 123, 162);
    color: #FFDFDE;
    font-size: 25px;
    border: 3px solid #FFDFDE;
  }
  .reservationButton6 button:hover{
    background-color: black;
    color: white;
  }

</style>
