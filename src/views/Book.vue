<template>
    <div id="book">
        <div class="blank"></div>
        <div class="title">
            <span>Reservation</span>
        </div>
        <div class="selectBar">
            <a href="#">예약하기</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">조회하기</a>
        </div>
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
            <div
                class="triangle triangle2 triangle_On"
                :class="{triangle_on : currentTap == 1}"></div>
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
            <SelectReservation/>
        </div>
        <div id="book_container2" v-if="currentTap == 1">
            <InputReservation />
        </div>    
        <div class="button-div">
            <button class="prev" v-on:click="prevButton" v-if="currentTap > 0">이전으로</button>
            <button class="next" v-on:click="nextButton" v-if="currentTap < 3">다음으로</button>
            <!-- <p>{{currentTap}}</p> -->
        </div>
    </div>
</template>
<script>

    import axios from 'axios'
    import SelectReservation from "@/components/book_card/SelectReservation.vue"
    import InputReservation from "@/components/book_card/InputReservation.vue"
    import {mapState, mapGetters, mapMutations} from 'vuex' 
    

    export default {
        name: '',
        components: {
            SelectReservation, InputReservation,
        },
        data() {
                InputReservation
            return {
              currentTap: 0,

            }

        },
        computed :{
           ...mapState([
                'activatedTheme',
                'activatedBranch',
                "activatedDate",
                "activatedTime",
              ])
        },
        setup() {},
        created() {},
        mounted() {},
        unmounted() {},
        updated() {},
        watch: {},
        methods: {
          ...mapMutations([
            "alert_Warning",
            "alert_Error",
            "setActivatedTime"
          ]),

           nextButton() {
              switch(this.currentTap){
                case 0 :
                    //선택값 4종 확인 !! 논리연산자로 빈문자열(""), false, NaN, udefined, null, 0을 잡아냄
                    if (!!this.activatedTheme && !!this.activatedBranch && !!this.activatedDate && !!this.activatedTime) {
                        //해당 슬롯이 예약 가능한지 확인
                        axios({
                            method: "get",
                            url: "http://localhost:2030/slots/" + this.activatedTime
                        }).then((response) => {
                            //console.log(response); 예약 가능하면 currentTeb에 +1 해줌.
                            if (!response.data.data.reserved) {
                                this.currentTap += 1
                                
                            } else {
                                //alert("이미 예약된 시간입니다 :(")
                                this.alert_Error("이미 예약된 시간입니다.")
                            }
                        });
                    } else {
                        if (!this.activatedTheme) 
                            this.alert_Warning("예약 테마를 선택하세요.");
                        else if (!this.activatedBranch) 
                            this.alert_Warning("원하시는 지점을 선택하세요.");
                        else if (!this.activatedDate) 
                            this.alert_Warning("예약 날짜를 선택하세요.");
                        else if (!this.activatedTime) //alert("예약 시간을 선택하세요")
                            this.alert_Warning("예약 시간을 선택하세요.");
                        }
                case 1:


                  }

                 
              },
              
           prevButton(){
             this.currentTap-=1
             this.$store.commit("setActivatedTime", '')
           } 
        }
    }
</script>
<style>

    .header {
        background-color: cadetblue;
    }
    .button-div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .next {
        background-color: #363636;
        color: rgb(247, 247, 247);
        border: 1px solid #363636;
        font-size: 1.2rem;
        padding: 1.0rem 2.5rem;
        margin: 5rem 0.8rem;
    }

    .prev {
        background-color: #363636;
        color: rgb(247, 247, 247);
        border: 1px solid #363636;
        font-size: 1.2rem;
        padding: 1.0rem 2.5rem;
        margin: 5rem 0.8rem;
    }

    #book {
        background-color: rgb(247, 247, 247);
        margin: 0 1rem;
    }
    /* 1 layer*/
    .blank {
        width: 100%;
        padding: 5%;
        background-color: rgb(247, 247, 247);
    }
    /* 2 layer */
    .title {
        width: 100%;
        padding: 3% 0.6% 0.6%;
        text-align: center;
        font-weight: bold;
        font-size: 1.1rem;
        background-color: rgb(247, 247, 247);
    }
    /* 3 layer */
    .selectBar {
        width: 100%;
        padding: 2%;
        background-color: rgb(247, 247, 247);
        text-align: center;
        text-decoration-line: none;
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: bold;
    }
    .selectBar a {
        color: black;
    }
    .selectBar a:link {
        color: black;
        text-decoration-line: none;
        text-decoration: none;
    }

    /* 4 layer */
    .progress2 {
        padding: 1% 5%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(247, 247, 247);
        flex-wrap: wrap;
    }
    .step {
        width: 15rem;
        background-color: rgb(134, 129, 129);
        margin: 0 0 0.8rem 1.5rem;
        color: whitesmoke;
        font-size: 1rem;
        border-radius: 5px;
    }
    .step p {
        line-height: 0.6rem;
        margin: 1rem 2rem;
    }
    .step :nth-child(2) {
        font-size: 1.15rem;
    }
    .step4 {
        margin-right: 1rem;
    }
    .triangle {
        width: 0;
        height: 0;
        border-left: 12px solid rgb(134, 129, 129);
        border-top: 6px solid transparent;
        border-bottom: 12px solid transparent;
    }
    .step2,
    .step3,
    .step4 {
        background-color: rgb(134, 129, 129);
    }
    .triangle2,
    .triangle3 {
        border-left: 12px solid rgb(134, 129, 129);
    }

    .on {
        background-color: #287a75;
        color: #fff !important;
        border: 1px solid #287a75 !important;
    }
    .none {
        background-color: rgb(134, 129, 129);
        color: #fff !important;
        border: 1px solid rgb(134, 129, 129) !important;
    }
    .triangle_on {
        border-left: 12px solid #287a75;
    }
    .triangle_none {
        border-left: 12px solid rgb(134, 129, 129);
    }
</style>