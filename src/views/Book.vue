<template>
  <div id="book">
    <div class="blank"></div>
    <div class="title"><span>Reservation</span></div>
    <div class="selectBar"><a href="#">예약하기</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">조회하기</a></div>
    <div class="progress2">
      <div class="step step1" :class="{on : currentTap == 0}">
        <p>Step1</p>
        <p>지점/날짜/테마</p>
      </div>
      <div class="triangle triangle1" :class="{triangle_on : currentTap == 0}"></div>
      <div class="step step2" :class="{on : currentTap == 1}">
         <p>Step2</p>
         <p>예약정보 입력</p>
      </div>
      <div class="triangle triangle2 triangle_On" :class="{triangle_on : currentTap == 1}"></div>
      <div class="step step3" :class="{on : currentTap == 2}">
         <p>Step3</p>
         <p>결제하기</p>
      </div>
      <div class="triangle triangle3" :class="{triangle_on : currentTap == 2}"></div>
      <div class="step step4" :class="{on : currentTap == 3}">
         <p>Step4</p>
         <p>예약완료</p>
      </div>
    </div>
    <div class="book_container" v-if="currentTap == 0">
      <div class="book_item branch">
        <dt>지점</dt>
        <dd>
          <ul>
            <div :key="index" v-for="(branch, index) in branchName">
              <li><a href="javascript:void(0);"  :class="{on : activatedBranch == branch.id}" v-on:click="selectBranch(branch.id), getSlotTime(), getSlotMaxDateAndDisableDate()">{{branch.name}}</a></li>
            </div>  
          </ul> 
        </dd>
      </div>
      <div class="book_item theme">
        <dt>테마</dt>
        <dd>
          <ul>
            <div :key="index" v-for="(theme, index) in themeName">
              <li><a href="javascript:void(0);" :class="{on : activatedTheme == theme.id}" v-on:click="selectTheme(theme.id) , getSlotTime(), getSlotMaxDateAndDisableDate()">{{theme.name}}</a></li>
            </div>  
          </ul> 
        </dd>
      </div>
       <div class="book_item cal">
        <dt>날짜{{min}}</dt>
        <dd>
           <b-row>
              <b-col md="auto">
                <b-calendar :date-disabled-fn="dateDisabled" v-model="value" :min="min" :max="max" :hide-header="hideHeader" @context="onContext" locale="en-US"></b-calendar>
              </b-col>
              <!-- <b-col>
                <p>Value: <b>'{{ context.selectedYMD }}'</b></p>
                <p class="mb-0">Context:</p>
                <pre class="small">{{ context }}</pre>
              </b-col> -->
            </b-row>
        </dd>
      </div>
      <div class="book_item time">
        <dt>시간</dt>
        <dd>
          <ul>
            <div v-for="(time, index) in slotTimes" :key="index">
              <div v-if="time.isShowed == true && time.isOpened == true && time.isReserved == false">
               <li><a href="javascript:void(0);" :class="{on : activatedTime == time.id}" v-on:click="selectTime(time.id)" >
                 <b-icon v-if="activatedTime == time.id" icon="check-square" ></b-icon>
                 <b-icon v-else-if="activatedTime != time.id" icon="square" ></b-icon>    
                 {{time.time}}</a>
                </li>
              </div>
              <div v-else-if="time.isShowed == true && time.isOpened == true && time.isReserved == true">  
                <li><a href="javascript:void(0);" class="none"><b-icon icon="x-square" scale="1" variant="light"></b-icon>  {{time.time}}</a></li>
              </div>
            </div>
          </ul>  
        </dd>
      </div>
    </div> 
    <div class="button-div">
      <button class="prev" v-on:click="currentTap-=1" v-if="currentTap > 0">이전으로</button>
      <button class="next" v-on:click="nextStep" v-if="currentTap < 3" >다음으로</button>
      <p>{{currentTap}}</p>
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
    const minDate = new Date()
    minDate.setMonth(minDate.getMonth())
    minDate.setDate(minDate.getDate())
    //const maxDate = new Date(today)
    //maxDate.setMonth(maxDate.getMonth())
    //maxDate.setDate(maxDate.getDate())
    

    return {
       value: today,
       context: 'null',
       min: this.toStringByFormattingDate(minDate),
       //max: maxDate,
       max : '',
       hideHeader: true,
       defaultColor: '#287a75',
       
       branchName:[],
       themeName:[],
       slotTimes : [],

       activatedBranch: 1,  //초기값 
       activatedTheme: 1,   //초기값
       activatedDate :'',
       activatedTime : '',
      
       currentTap : 0,
       isNotShowSlotDate : [],

       
    };
  },
  setup() {},
  created() {},
  mounted() { 
    //페이지 열리자마자 실행
    this.getBranchAndTheme();
    this.getSlotMaxDateAndDisableDate();
     
  },
  unmounted() {},
  updated(){ },
  watch:{},
  methods: {
    onContext(ctx){
      this.context = ctx,
      this.activatedDate = ctx.selectedYMD,
      this.getSlotTime();

    },
    selectBranch(branch){
      this.activatedBranch = branch;
    },
    selectTheme(theme){
      this.activatedTheme = theme;
    },
    selectTime(time){
      this.activatedTime = time;
    },
    dd(){
      alert(this.max);
    },



    getBranchAndTheme(){
       //테마 정보 가지고 오기
       axios({
        method: "get",
        url: "http://localhost:2030/themes",
        responseType: "json"
      }).then((response)=>{
        //console.log(response);
        for(var i in response.data.pageList.content){
          this.themeName.push(
            {
              id: response.data.pageList.content[i].id,
              name : response.data.pageList.content[i].themeName
            }
          );
        }
      });
      //지점 정보 가지고 오기
      axios({
        method: "get",
        url: "http://localhost:2030/branches",
        responseType: "json"
      }).then((response)=>{
        //console.log(response);
        for(var j in response.data.list){
          this.branchName.push(
            {
              id: response.data.list[j].id,
              name: response.data.list[j].branchName
            }
          );
        }
      });
    },

   
    //슬롯의 타임테이블을 가지고 오는 메서드
    async getSlotTime(){
      //3개의 값이 모두 있을 때만 비동기 통신
      if(!!this.activatedBranch&&!!this.activatedTheme&&!!this.activatedDate){
           
        await axios({ 
          method: 'get',
          url: 'http://localhost:2030/slots',
          responseType: 'json',
          params:{
            slotDate:this.activatedDate,
            themeId:this.activatedTheme,
            branchId: this.activatedBranch
          }
          
        }).then((response)=>{ //화살표 함수로 써야 컴포넌트 데이터에 this로 접근 가능
          this.slotTimes = [];  //재호출시 무한 추가 방지를 위한 초기화 작업
          for(var i in response.data.list){

              this.slotTimes.push(
                {
                  id: response.data.list[i].id,
                  time: response.data.list[i].slotTime,
                  isShowed: response.data.list[i].showed,
                  isReserved: response.data.list[i].reserved,
                  isOpened: response.data.list[i].opened,
                }
              );
          }
      
        });
      }
    },
      
    async getSlotMaxDateAndDisableDate(){
      //maxDate 설정 - 생성된 슬롯 중 가장 마지막의 날짜를 가지고 오기
      await axios({
        method: "get",
        url: "http://localhost:2030/slots/date",
        params:{
          branchId : this.activatedBranch,
          themeId : this.activatedTheme
        }
      }).then((response)=>{
        this.max = response.data.data;
        //console.log("먼저 실행됨")
      });
      //minDate와 maxDate 사이의 날짜 중 공개되지 않은 date들 가져오기
      await axios({
        method: "get",
        url: "http://localhost:2030/slots/date/disabled",
        params:{
          max: this.max,
          min: this.min
        }
      }).then((response)=>{
        //console.log(response);
         for(var i in response.data.list){
           this.isNotShowSlotDate.push(response.data.list[i]);
        }
        // for(var j in this.isNotShowSlotDate){
        //   console.log("date = "+this.isNotShowSlotDate[j]);
        // }
      });
    },
    //날짜 데이터를 yyyy-mm-dd로 바꿔주는 메서드
    toStringByFormattingDate(date,delimiter='-'){
      const year = date.getFullYear();
      const month = this.leftPad(date.getMonth()+1);
      const day = this.leftPad(date.getDate());
      return [year, month, day].join(delimiter);
    },
    //한 자리수의 월,일의 앞에 0을 붙여주는 메서드
    leftPad(value) { 
      if (value >= 10) { 
        return value; 
      } 
      return `0${value}`; 
    },
    //공개하지 않은 date를 달력에서 비활성화하는 메서드
    dateDisabled(ymd, date){ 
      //console.log("ymd = "+ymd);
      let dateOfString = '';
      for(var d in this.isNotShowSlotDate){
        if(ymd == this.isNotShowSlotDate[d]){
          dateOfString = this.isNotShowSlotDate[d]
        }
      }
      const no = new Date(dateOfString);
      const gkgk = this.toStringByFormattingDate(no);
      //console.log(gkgk);
      return ymd === gkgk;
    },
    //예약 다음으로 버튼 누를 시
    nextStep(){
      //선택값 4종 확인
      // !! 논리연산자로 빈문자열(""), false, NaN, udefined, null, 0을 잡아냄
      if(!!this.activatedTheme&&!!this.activatedBranch&&!!this.activatedDate&&!!this.activatedTime ){
         //해당 슬롯이 예약 가능한지 확인 
         axios({
           method: "get",
           url: "http://localhost:2030/slots/"+this.activatedTime,
         }).then((response)=>{
           console.log(response);
         });
         //가능하면 currentTeb에 +1 해줌.


      }else{
        if(!this.activatedTheme) alert("원하시는 테마를 선택하세요");
        else if(!this.activatedBranch) alert("원하시는 지점을 선택하세요")
        else if(!this.activatedDate) alert("예약 날짜를 선택하세요")
        else if(!this.activatedTime) alert("예약 시간을 선택하세요")
      }

     
    }


  }
}
</script>
<style>
  .header{
    background-color: cadetblue;
  }
  .button-div{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .next{
    background-color: #363636;
    color: rgb(247, 247, 247);
    border: 1px solid #363636; ;
    font-size: 1.2rem;
    padding: 1.0rem 2.5rem;
    margin: 5rem 0.8rem;
  }

  .prev{
    background-color: #363636;
    color: rgb(247, 247, 247);
    border: 1px solid #363636; ;
    font-size: 1.2rem;
    padding: 1.0rem 2.5rem;
    margin: 5rem 0.8rem;
  }
  

  #book{
    background-color: rgb(247, 247, 247);
    margin: 0rem 1rem;
  }
   /* 1 layer*/
  .blank{
    width: 100%;
    padding: 5%;
    background-color: rgb(247, 247, 247);
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
    background-color: rgb(165, 159, 159);
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
    border-left: 12px solid rgb(165, 159, 159);
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
    overflow: scroll;
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
  .triangle_on{
    border-left : 12px solid #287a75;
  }
  .triangle_none{
     border-left : 12px solid rgb(165, 159, 159);
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
