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
            <!-- <li><a href="javascript:return false;"  :class="{on : activatedBranch == 'a'}" v-on:click="selectBranch('a')">강남점</a></li>
            <li><a href="javascript:return false;"  :class="{on : activatedBranch == 'b'}" v-on:click="selectBranch('b')" >홍대점</a></li> -->
            <div :key="index" v-for="(branch, index) in branchName">
              <li><a href="javascript:void(0);"  :class="{on : activatedBranch == branch}" v-on:click="selectBranch(branch)">{{branch}}</a></li>
            </div>  
          </ul> 
        </dd>
      </div>
      <div class="book_item cal">
        <dt>날짜</dt>
        <dd>
           <b-row>
              <b-col md="auto">
                <b-calendar v-model="value" :min="min" :max="max" :hide-header="hideHeader" @context="onContext" locale="en-US"></b-calendar>
              </b-col>
              <b-col>
                <p>Value: <b>'{{ context.selectedYMD }}'</b></p>
                <p class="mb-0">Context:</p>
                <pre class="small">{{ context }}</pre>
              </b-col>
            </b-row>
        </dd>
      </div>
      <div class="book_item theme">
        <dt>테마</dt>
        <dd>
          <ul>
            <!-- <li ><a href="javascript:return false;" :class="{on : activatedTheme == 'box'}" v-on:click="selectTheme('box')">그림자없는 상자</a></li>
            <li><a href="javascript:return false;" :class="{on : activatedTheme == 'happy'}" v-on:click="selectTheme('happy')" >그것을 행복이라<br/>부르기로 했다.</a></li> -->
            <div :key="index" v-for="(theme, index) in themeName">
              <li><a href="javascript:void(0);" :class="{on : activatedTheme == theme}" v-on:click="selectTheme(theme)">{{theme}}</a></li>
            </div>  
          </ul> 
        </dd>
      </div>
      <div class="book_item time">
        <dt>시간</dt>
        <dd>
          <ul>
            <li><a href="#"><b-icon icon="square" scale="1" variant="secondary"></b-icon> 10:00</a></li>
            <li><a href="#" class="on"><b-icon icon="check-square" scale="1" variant="light"></b-icon> 12:00</a></li>
            <li><a href="#"><b-icon icon="square" scale="1" variant="secondary"></b-icon> 14:30</a></li>
            <li><a href="#" class="none"><b-icon icon="x-square" scale="1" variant="light"></b-icon> 16:30</a></li>
            <li><a href="#" class="none"><b-icon icon="x-square" scale="1" variant="light"></b-icon> 18:30</a></li>
            <li><a href="#" class="none"><b-icon icon="x-square" scale="1" variant="light"></b-icon> 20:30</a></li>
          </ul>  
        </dd>
      </div>
    </div> 
    <div>
      <button  v-on:click="dd">다음으로</button>
      <button v-on:click="test">다다음으로</button>
    
    </div>
  </div> 
</template>
<script>

import axios from 'axios'

export default {
  name: '',
  components: {
    
  },
  data() {

    const now = new Date()  //현재 날짜 및 시간
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const minDate = new Date(today)
    minDate.setMonth(minDate.getMonth())
    minDate.setDate(minDate.getDate())

    const maxDate = new Date(today)
    maxDate.setMonth(maxDate.getMonth())
    maxDate.setDate(15)

   
    

    return {
       value: today,
       context: 'null',
       min: minDate,
       max: maxDate,
       hideHeader: true,
       defaultColor: '#287a75',
       
      
       branchName:[
         '강남점', '홍대점', '건대점', '혜화점'
       ],
       themeName:[
         '그림자없는 상자',
         '그것을 행복이라 부르기로 했다.'
       ],
       siba : [],

       activatedBranch: '강남점', //기본값
       activatedTheme: '',
       //activatedDate: context.selectedYMD,
       activatedDate :'',

       
    };
  },
  setup() {},
  created() {},
  mounted() { },
  unmounted() {},
  updated(){
    
  
   
  },
  watch:{
   
  },
  methods: {
    onContext(ctx){
      this.context = ctx,
      this.activatedDate = ctx.selectedYMD

    },

    selectBranch(branch){
      this.activatedBranch = branch;
    },
    selectTheme(theme){
      this.activatedTheme = theme;
    },
    dd(){
      this.siba.push("1");
      console.log(this.siba);
    },
   
    async test(){
       this.siba.push("2");
      console.log(this.siba);
      //3개의 값이 모두 있을 때만 비동기 통신
      if(this.activatedBranch != ''&& this.activatedTheme !='' && this.activatedDate != ''){
        console.log(this.activatedBranch);
        console.log(this.activatedDate);
        console.log(this.activatedTheme);
         this.siba.push("3");
         console.log(this.siba);
           
        const response = await axios({ 
          method: 'get',
          url: 'http://localhost:2030/slots',
          responseType: 'json',
          params:{
            slotDate:this.activatedDate,
            theme:this.activatedTheme,
            branch: this.activatedBranch
          }
          
        }).then((response)=>{
          console.log(response);
          console.log(response.data);
          console.log(response.data.list);
          console.log(response.data.list[1].slotTime);
        
          // for(var i in response.data.list){
          //     //console.log(response.data.list[i].slotTime);
          //     const times = response.data.list[i].slotTime;
          //     console.log(times);
          //     //this.reservationTime.push(time);
          // }
          this.siba.push("1");
          console.log(this.siba);

          
        });




      }
    }



  }
}
</script>
<style>

  .header{
    background-color: cadetblue;
  }

  #book{
    
    background-color: rgb(247, 247, 247);
    margin: 0rem 1rem;
  }
   /* 1 layer*/
  .blank{
    width: 100%;
    padding: 5%;
    background-color: #287a75;
  }
  /* 2 layer */
  .title{
    width: 100%;
    padding: 0.6%;
    padding-top: 3%;
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
    background-color: rgb(247, 247, 247);
  }
  /* 3 layer */
  .selectBar{
    width: 100%;
    padding: 2%;
    background-color: rgb(247, 247, 247);
    text-align: center;
    text-decoration-line: none;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
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
    background-color: rgb(247, 247, 247);
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
    background-color: rgb(247, 247, 247);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    

  }

  .branch{
    width: 15rem;
    height: 30rem;
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    border: 2px solid rgb(207, 199, 199);
  }
  .branch dt{
    padding: 1rem;
    font-size: 1.7rem;
    font-weight: bold;
    text-align: center;
    margin: 0 0.6rem;
    color: rgb(126, 122, 122);
  }
  .branch dd ul{
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
    
  }
  .branch dd ul li{
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    text-align: center;
    list-style: none;
    border-radius: 4px;
    
  }
  .branch dd ul li a{
    padding-top: 0.5rem ;
    padding-bottom: 0.5rem;
    border : 2px solid rgb(165, 159, 159);
    color: rgb(95, 92, 92);
    font-weight: bold;
    display: block;
  }
  .branch dd ul li a:hover{
    text-decoration: none;
  }



  .cal{
    width: 25rem;
    height: 30rem;
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    border: 2px solid rgb(207, 199, 199);
    
  }
   .cal dt{
    padding: 1rem;
    font-size: 1.7rem;
    font-weight: bold;
    text-align: center;
    margin: 0 0.6rem;
    color: rgb(126, 122, 122);
  }

  .cal dd{
    margin-left: 16%;
  }



  .theme{
    width: 15rem;
    height: 30rem;
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    border: 2px solid rgb(207, 199, 199);
  }
  .theme dt{
    padding: 1rem;
    font-size: 1.7rem;
    font-weight: bold;
    text-align: center;
    border-bottom: 2px solid rgb(165, 159, 159);
    margin: 0 0.6rem;
    color: rgb(126, 122, 122);
  }
  .theme dd ul{
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
    
  }
  .theme dd ul li{
    
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    text-align: center;
    list-style: none;
    border-radius: 4px;
    
  }
  .theme dd ul li a{
    padding-top: 0.5rem ;
    padding-bottom: 0.5rem;
    border : 2px solid rgb(165, 159, 159);
    color: rgb(95, 92, 92);
    font-weight: bold;
    display: block;
  }
  .theme dd ul li a:hover{
    text-decoration: none;
  }



  .time{
    width: 25rem;
    height: 30rem;
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    border: 2px solid rgb(207, 199, 199);
  }

  .time dt{
    padding: 1rem;
    font-size: 1.7rem;
    font-weight: bold;
    text-align: center;
    border-bottom: 2px solid rgb(165, 159, 159);
    margin: 0 0.6rem;
    color: rgb(126, 122, 122);
  }
  .time dd ul{
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
    
  }
  .time dd ul li{
    
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    text-align: center;
    list-style: none;
    border-radius: 4px;
    
  }
  .time dd ul li a{
    padding-top: 0.35rem ;
    padding-bottom: 0.35rem;
    border : 2px solid rgb(165, 159, 159);
    color: rgb(95, 92, 92);
    font-weight: bold;
    display: block;
  }
  .time dd ul li a:hover{
    text-decoration: none;
  }

  .on{
    background-color: #287a75;
    color: #fff !important;
    border: 1px solid #287a75 !important;
  }
  .none{
    background-color: rgb(165, 159, 159);
    color: #fff !important;
    border: 1px solid rgb(165, 159, 159) !important;
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

    .theme{
      width: 100%;
      height: 35vh;
    }
    .theme dt{
      font-size: 1.5rem;
     
    }
    


  }

  

</style>
