<template>
  <div id="book">
    <div class="blank"></div>
    <div class="title"><span>Reservation</span></div>
    <div class="selectBar"><a href="#">예약하기</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">조회하기</a></div>
    <div class="progress2">
      <div class="step step1">
        <p>Step1</p>
        <p>지점/날짜/테마</p>
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
    <div class="book_container">
      <div class="book_item branch">
        <dt>지점</dt>
        <dd>
          <ul>
            <li><a href="#">강남점</a></li>
            <li><a href="#">홍대점</a></li>
          </ul> 
        </dd>
      </div>
      <div class="book_item cal">
        <dt></dt>
        <dd></dd>
      </div>
      <div class="book_item theme">
        <dt></dt>
        <dd></dd>
      </div>
      <div class="book_item time">
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
    margin: 0rem 1rem;
  }
   /* 1 layer*/
  .blank{
    width: 100%;
    padding: 4.5%;
    background-color: brown;
  }
  /* 2 layer */
  .title{
    width: 100%;
    padding: 0.6%;
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
    background-color: burlywood;
  }
  /* 3 layer */
  .selectBar{
    width: 100%;
    padding: 2%;
    background-color: olivedrab;
    text-align: center;
    text-decoration-line: none;
    text-decoration: none;
    font-size: 0.9rem;
  }
  .selectBar a{
    color: black;
  }
  .selectBar a:link{
    color: black;
    text-decoration-line: none;
    text-decoration: none;
  }

  /* 4 layer */
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
    width: 15rem;
    background-color: #287a75;
    margin: 0rem 0rem 0.8rem 1.5rem;
    color: whitesmoke;
    font-size: 1rem;
    border-radius: 5px;
  }
  .step p{
    line-height: 0.6rem;
    margin: 1rem 2rem 1rem 2rem;
  }
  .step :nth-child(2){
    font-size: 1.15rem;
  }
  .step4{
    margin-right: 1rem;
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


  /* 5 layer */
  .book_container{
    background-color: azure;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    

  }

  .branch{
    width: 15rem;
    height: 25rem;
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    border: 2px solid rgb(207, 199, 199);
  }
  .branch dt{
    padding: 1rem;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    border-bottom: 2px solid rgb(165, 159, 159);
    margin: 0 0.6rem;
    color: rgb(126, 122, 122);
  }
  .branch dd ul{
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
    
  }
  .branch dd ul li{
    border : 2px solid rgb(165, 159, 159);
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    text-align: center;
    list-style: none;
    
  }
  .branch dd ul li a{
    color: rgb(95, 92, 92);
    font-weight: bold;
    display: block;
  }
  .branch dd ul li a:hover{
    text-decoration: none;
  }



  .cal{
    width: 25rem;
    height: 25rem;
    background-color: rgb(148, 95, 95);
  }

  .theme{
    width: 25rem;
    height: 25rem;
    background-color: grey;
  }

  .time{
    width: 25rem;
    height: 25rem;
    background-color: rgb(204, 55, 55);
  }
  .book_item{
    margin: 0.3rem 0.3rem;
  }
  





   @media (max-width: 1280px){
     .step{
       width: 28rem;
     }
   }
    @media (max-width: 1111px){
     .step{
       width: 25rem;
     }
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
      width: 8.3rem;
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

    .branch{
      width: 100%;
      height: 30vh;
    }
    .branch dt{
      font-size: 1.5rem;
    }



  }

  

</style>
