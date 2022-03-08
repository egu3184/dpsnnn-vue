<template>
    <div id="book">
        <div class="blank"></div>
        <div class="title">
            <span>Reservation</span>
        </div>
        <div class="selectBar">
            <a href="#">예약하기</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">조회하기</a>
        </div>
            <div class="book_container">
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
            <div class="dd" style="margin-top: 1rem;">
                <div v-if="currentTap == 0">
                    <SelectReservation ref="select_saveItems" ></SelectReservation>
                </div>
                <div v-if="currentTap == 1">
                    <InputReservation ref="input_saveItems" ></InputReservation>
                </div>
                <div v-if="currentTap == 2">
                    <PayReservation ref="pay_saveItems"></PayReservation>
                </div> 
            </div>    
        </div>
        <div style="display:flex; align-items: center; justify-content: center; margin: 2rem 0rem;">
            <div class="button-div">
                <button class="prev b_disabled" disabled v-if="currentTap == 0">이전으로</button>
                <button class="prev" v-on:click="prevButton" v-if="currentTap > 0">이전으로</button>
                <!-- <p>{{currentTap}}</p> -->
            </div>
            <div class="button-div">
                <button class="next" v-on:click="nextButton" v-if="currentTap < 3">다음으로</button>
            </div>    
        </div>
    </div>
</template>
<script>

    import axios from 'axios'
    import SelectReservation from "@/components/book_card/SelectReservation.vue"
    import InputReservation from "@/components/book_card/InputReservation.vue"
    import PayReservation from "../components/book_card/PayReservation.vue"
    import {mapState, mapGetters, mapMutations} from 'vuex' 
    

    export default {
        name: '',
        components: {
            SelectReservation, InputReservation, PayReservation
        },
        data() {
                InputReservation
            return {
              currentTap: 0,
            
            }

        },
        computed :{
           ...mapState([
               'selectedSlotInfo'
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
            // "setActivatedTime"
          ]),

           nextButton() {
              switch(this.currentTap){
                case 0 :
                    //지점, 테마, 날짜&시간 선택했는지 확인
                    if(!this.$refs.select_saveItems.isItemSelected()){ return }
                    this.$refs.select_saveItems.saveItemsToVuex();
                    //해당 슬롯이 예약 가능한지 확인
                    axios({
                        method: "get",
                        url: "http://localhost:2030/slots/" + this.selectedSlotInfo.id
                    }).then((response) => {
                        //예약 가능하면 currentTeb에 +1 해줌.
                        if (!response.data.data.reserved) {
                            this.currentTap += 1
                        } else {
                            this.alert_Error("이미 예약된 시간입니다.")
                        }
                    })
                    break;
                case 1 : 
                   //InputReservation에서 모두 입력했는지 확인 후 vuex에 저장 메서드 호출 
                   if(this.$refs.input_saveItems.isItemInput()){
                     this.$refs.input_saveItems.saveItemsToVuex()
                     this.currentTap += 1
                   }
                   break; 
                case 2 :
                  
              }

                 
              },
              
           prevButton(){
             switch(this.currentTap){
                 case 1 :
                    this.$store.commit("deleteSelectedItems")
                    this.$store.commit("deleteInputItems")
                    break;
                 case 2 : 
                    this.$store.commit("deleteInputItems")
                           
             }  
             this.currentTap-=1
            
           },
        //    //선택 항목이 저장된 vuex 비우기
        //     deleteItemFromVuex(setterName){
        //         this.$store.commit(setterName, "")
        //     },
        //     deleteItemList(setterNamelist){
        //         for(let i in setterNamelist){
        //             deleteItemFromVuex(setterNamelist[i])
        //         }
        //     }
           


        }
    }
</script>
<style>

    .header {
        background-color: cadetblue;
    }
    .button-div {
        width: 12rem;

        /* display: inline; */
        align-items: center;
        justify-content: center;
        /* padding: 15rem 15rem */
    }

    .next {
        background-color: #363636;
        color: rgb(247, 247, 247);
        border: 1px solid #363636;
        font-size: 1.2rem;
        padding: 1.0rem 2.5rem;
        margin: 2rem 0.8rem;
    }

    .prev {
        background-color: #363636;
        color: rgb(247, 247, 247);
        border: 1px solid #363636;
        font-size: 1.2rem;
        padding: 1.0rem 2.5rem;
        margin: 2rem 0.8rem;
    }

    .b_disabled{
        background-color : rgb(165, 159, 159);
        border-color: rgb(165, 159, 159);;
    }

    #book {
        /* background-color: rgb(247, 247, 247); */
        /* background-color: #F8F5F1; */
        margin: 0 1rem;
    }
    /* 1 layer*/
    .blank {
        width: 100%;
        padding: 2.8%;
        background-color: white;
        /* background-color: rgb(247, 247, 247); */
    }
    /* 2 layer */
    .title {
        width: 100%;
        background-color: white;
        padding: 1.1rem 1rem;
        text-align: center;
        font-weight: bold;
        font-size: 1.1rem;
        /* background-color: rgb(247, 247, 247); */
    }
    /* 3 layer */
    .book_container{
         background-color: rgb(247, 247, 247);
         border-radius: 1.2rem;
         padding-bottom: 5rem;
         margin: 0rem 3rem;
    }



    .selectBar {
        width: 100%;
        padding: 2%;
         background-color: white;
        /* background-color: rgb(247, 247, 247); */
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
        padding-top: 2%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .step {
        width: 15rem;
        background-color: rgb(165, 159, 159);
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
        border-left: 12px solid rgb(165, 159, 159);
        border-top: 6px solid transparent;
        border-bottom: 12px solid transparent;
    }
    .step2,
    .step3,
    .step4 {
        background-color: rgb(165, 159, 159);
    }
    .triangle2,
    .triangle3 {
        border-left: 12px solid rgb(165, 159, 159);
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

    @media (max-width: 798px) {
        .book_container{
            margin: 0 0;
            
        }
    }    

</style>