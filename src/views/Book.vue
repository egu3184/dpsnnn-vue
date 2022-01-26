<template>
  <div id="book">
    <div class="blank"></div>
    <div class="title"><span>Reservation</span></div>
    <div class="selectBar"><a href="#">예약하기</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">조회하기</a></div>
    <div class="progress2">
      <div class="step step1">
        <p>Step1</p>
        <p>지점/날짜/테마 선택</p>
      </div>
      <div class="triangle triangle1"></div>
      <div class="step step2">
         <p>Step2</p>
         <p>예약정보 입력</p>
      </div>
      <div class="triangle triangle2"></div>
      <div class="step step3">
         <p>Step3</p>
         <p>결제하기</p>
      </div>
      <div class="triangle triangle3"></div>
      <div class="step step4">
         <p>Step4</p>
         <p>예약완료</p>
      </div>
    </div>
    <div class="container">
      <div class="branch">
        <dt></dt>
        <dd></dd>
      </div>
      <div class="cal">
        <dt></dt>
        <dd></dd>
      </div>
      <div class="theme">
        <dt></dt>
        <dd></dd>
      </div>
      <div class="time">
        <dt></dt>
        <dd></dd>
      </div>
    </div> 
    <div class="">
      <button>다음으로</button>
    </div>
  </div> 
</template>
<script>


export default {
  name: '',
  components: {
  
  },
  data() {
    return {
       
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
  #book{
    height: 1000px;
    background-color: rgb(34, 151, 167);
  }
  .blank{
    width: 100%;
    padding: 4.5%;
    background-color: brown;
  }
  .title{
    width: 100%;
    padding: 0.6%;
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
    background-color: burlywood;
  }
  .selectBar{
    width: 100%;
    padding: 2%;
    background-color: olivedrab;
    text-align: center;
    text-decoration-line: none;
    text-decoration: none;
    color: black;
    font-size: 0.9rem;
  }
  .selectBar a:link{
    color: black;
    text-decoration-line: none;
    text-decoration: none;
  }

  .progress2{
    padding: 1% 5%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(233, 224, 224);
    flex-wrap: wrap;
  }
  .step{
    width: 18rem;
    background-color: #287a75;
    margin: 0rem 0rem 0rem 1.5rem;
    color: whitesmoke;
    font-size: 1rem;
    border-radius: 11px;
    
  }
  .step p{
    line-height: 0.6rem;
    margin: 1rem 2rem 1rem 2rem;
  }
  .step :nth-child(2){
    font-size: 1.15rem;
  }
 .triangle {
    width: 0px;
    height: 0px;
    border-left: 12px solid #287a75;
    border-top: 6px solid transparent;
    border-bottom: 12px solid transparent;
  }
  .step2, .step3, .step4{
    background-color: rgb(165, 159, 159);
  }
  .triangle2 , .triangle3{
     border-left: 12px solid rgb(165, 159, 159);
  }

  @media (max-width: 798px){
    .blank{
      padding: 21%;
    }
    .progress2{
      width: 100%;
      padding: 20%, 0%;
      padding-left: 0;
      padding-right: 0;
    }
    .step{
      width: 150px;
      height: 70px;
      margin-left: 16px;
      margin-bottom: 5px;
    }
    .step :nth-child(1){
      font-size: 0.8rem;
       margin-left: 16px;
       margin-right: 16px;
    }

    .step :nth-child(2){
      font-size: 0.8rem;
       margin-left: 16px;
       margin-right: 16px;
    }
    .step4{
      margin-right: 0.8rem;
    }
  
  }

  

</style>
