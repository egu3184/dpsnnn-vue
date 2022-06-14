<template>
    <div style="padding:3rem;">
        <transition name="slide-fade" mode="out-in" v-if="showHeaderBox">
        <div class="pop_box" :style="pop_box">
                <b-icon  :icon=pop_box.icon></b-icon>&nbsp;&nbsp;
                <span>{{pop_box.message}}</span>
        </div>
        </transition>   
        <div class="find_container" v-if="step_find == 0" >
            <div class="find_title">
                예약 확인
            </div>
            <b-form-input maxlength="15" type="text" v-model="reservationNumber" class="input" placeholder="예약 번호"></b-form-input>
            <b-form-input maxlength="35" type="text" v-model="bookerName" class="input" placeholder="예약자 성함"></b-form-input>
            <b-form-input maxlength="13" type="text" v-model="phoneNum" class="input" placeholder="연락처"></b-form-input>         
            <div>
                <button class="find_button" @click="findReservation" type="button">조회하기</button>
            </div>
        </div>
        <div v-if="step_find == 1">
            <ReservationDetail :bookItems="bookItems"/>
        </div>    
    </div>
</template>
<script>
import axios from 'axios';
import ReservationDetail from './ReservationDetail.vue'
export default {
    name: '',
    components: {
        ReservationDetail
    },
    data() {
        return {
            reservationNumber: '202206022133281',
            showHeaderBox: false,
            pop_box:{
                "icon": "",
                "border": "",
                "background-color":"",
                message: "",
            },
            phoneNum: '010-2222-3333',
            bookerName: '으앙구',
            step_find: 0,
            bookItems: [],

        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
     watch:{
        // 전화번호 입력시 자동으로 하이픈 넣어주기 + 정규표현식 검사
        'phoneNum': function(value){
            //console.log(value)
            this.phoneNum = value
                                .replace(/[^0-9]/g, '')
                                .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g,"$1-$2-$3")
                                .replace(/(\-{1,2})$/g, "");
        },
    },
    methods: {
        setPopbox_error(message){
            this.showHeaderBox = false
            this.pop_box = {
                "icon":"exclamation-triangle-fill",
                "border": "0.13rem solid #F55151",
                "background-color": "#F55151",
                message: message
            }
            this.showHeaderBox = true
        },
        findReservation(){
            //예약 번호 체크
            const regex_num = /^[0-9]*$/g;
            if(!this.checkRegEx(this.reservationNumber,regex_num)){
                this.setPopbox_error("예약번호 숫자 15자리를 입력해주세요.")
                return;
            }
            //예약자 이름 체크
            const regex_name =  /^[가-힣a-zA-Z]+$/;
            if(!this.checkRegEx(this.bookerName, regex_name)){
                this.setPopbox_error("올바른 이름이 아닙니다.")
                return;
            }
            //연락처 체크
            const regex_phone =  /01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/
            if(!this.checkRegEx(this.phoneNum, regex_phone)){
                this.setPopbox_error("올바른 전화번호가 아닙니다.")
                return;
            }
            this.showHeaderBox = false;
            //다 이상 없으면 조회 요청
            axios({
                url: 'http://localhost:2030/reservations/'+this.reservationNumber,
                method: 'get',
                params:{
                    bookerName: this.bookerName,
                    phoneNum: this.phoneNum, 
                }
            }).then((response)=>{
                console.log(response)
                if(response.data.success == false){
                    this.setPopbox_error("예약 내역을 찾을 수 없습니다.")
                    return;
                }else{
                    this.bookItems.push(response.data.data)
                    // this.reservationItem = response.data.data;
                    console.log(this.reservationItem)
                    //step+1 -> 예약내역 보여주기
                    this.step_find = 1;
                    
                }
            }).catch((error)=>{
                console.log(error)
            });
        },
        //값이 정규표현식에 부합 체크
        checkRegEx(value, regex){
           let check = regex.test(value);
           if(!!check || !!value){  
               return true
           }else{       
               return false
           }
       },

    }
}
</script>
<style scoped>
    .input{
        height: 4.5rem; 
        font-size: 1.5rem; 
        width: 100% !important;
    }
    .find_container{
        width: 40rem;
        padding: 2rem;
        border: 1px solid gainsboro;
    }
    .find_title{
        padding: 3rem 0;
        font-size: 2rem;
        font-weight: 700;
    }
    .input{
        margin-bottom: 0.2rem ;
    }
    .find_button{
        width: 100%;
        height: 4.5rem;
        font-size: 1.5rem;
        border: 0;
        background-color: #287a75;
        color: #ffffff;
        font-weight: 500;
        margin: 2rem 0;
    }
    .pop_box{
        width: 40rem;
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        margin-bottom: 0.9rem;
        color:  white;
        box-shadow:  10px 10px 20px rgba(0, 0, 0, 0.1);
        font-size: 1.55rem; 
        text-align: center;
    }
    
</style>