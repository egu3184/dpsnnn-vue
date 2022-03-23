<template>
    <div id="complete_constructor">
        <div class="complete_container box">
            <div class="title_box">
                <span>{{ReservationObject.bookerName}}님의 예약 등록이 완료되었습니다!</span>
            </div>
            <div class="payment">
                <div v-if="ReservationObject.paymentMethod=='OnSite'">
                    <div class="reserv_item">
                        <dt>예약금</dt> 
                        <dd>{{ReservationObject.depositPrice}}원 (입금자 : {{ReservationObject.depositorName}})</dd>
                    </div> 
                    <div class="reserv_item">
                        <dt>계좌</dt> 
                        <dd>{{ReservationObject.bankName}} {{ReservationObject.bankAccount}} (예금주 : {{ReservationObject.bankAccountHolder}})</dd>
                    </div>
                    <div class="notice">
                        <span> ※ 예약등록으로부터 30분내 미입금시 자동으로 예약등록이 취소됩니다. </span>
                    </div>  
                </div>
                <div v-else-if="ReservationObject.paymentMethod=='Card'">
                    <div class="reserv_item">
                        <dt>결제금액</dt> 
                        <dd>{{ReservationObject.totPrice}}원</dd>
                    </div> 
                </div>
            </div>
            <div class="content_box"> 
                <div class="left_box">
                    <div class="reserv_item">
                        <dt>예약번호 </dt>&nbsp;&nbsp;
                        <dd>{{ReservationObject.reservationNumber}}</dd>
                    </div>
                    <div class="reserv_item">
                        <dt>예약날짜</dt>&nbsp;&nbsp;
                        <dd>{{slotDateTime}}</dd>
                    </div>
                </div>
                <div class="right_box"> 
                     <div class="reserv_item">
                        <dt>지점/테마</dt>&nbsp;&nbsp;
                        <dd>{{ReservationObject.branchName}} / {{ReservationObject.themeName}}</dd>
                    </div>
                    <div class="reserv_item">
                        <dt>인원/금액</dt>&nbsp;&nbsp;
                        <dd>{{ReservationObject.numUsers}}인 / {{ReservationObject.totPrice}}원</dd>
                    </div>
                </div>  
            </div>

        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: '',
    components: {},
    data() {
        return {
            ReservationObject : {},
            reservationNumber: '',
            slotDateTime : ''
        };
    },
    setup() {},
    created() {},
    mounted() {
        this.getReservationInfo();
       
    },
    unmounted() {},
    methods: {
        getReservationInfo(){
            this.ReservationObject = this.$store.state.responseReservationInfo;   
            this.slotDateTime = this.dateFormatting(this.ReservationObject.slotDate) + '\u00A0' 
                                 + this.timeFormatting(this.ReservationObject.slotTime);
            this.reservationNumber = this.ReservationObject.reservationNumber;

        },
         dateFormatting(slotDate){
            let date = slotDate.split('-')
            let year = date[0].substring(2)
            let month = date[1].substring(1)
            let day = date[2]
            return year+"년"+'\u00A0'+month+"월"+'\u00A0'+day+'일'
        },
        timeFormatting(slotTime){
            let time = slotTime.split(':');
            let hour = time[0]
            let minute = time[1]
            return hour+"시"+"\u00A0"+minute+"분"
        }



    }
}
</script>
<style scoped>
    #complete_constructor{
        width: 60rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40rem;

    }

    .complete_container{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

     .box{
        background-color: rgb(255, 255, 255);
        border-radius: 4px;
        border: 2px solid rgb(207, 199, 199);
        margin: 0rem 0.5rem;
    }

    .content_box{
        height: 15rem;
        width: 70%;
        display: flex;
        flex-direction: column;
        font-size: 1.3rem;
        font-weight: 300;
        line-height: 2.4rem;
        margin: 1.5rem 0rem;
        margin-top: 0;
    }
    .title_box{
        font-size: 2.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10rem;
        font-weight: 700;
        width: 70%;
    }
    .payment{
        height: 12rem;
        width: 70%;
        display: flex;
        flex-direction: column;
        font-size: 1.3rem;
        font-weight: 300;
        line-height: 2.4rem;
        margin: 1.5rem 0rem;
        margin-bottom: 0;
    }
    .notice{
        font-size: 1rem;
        font-weight: 600;
    }
    .reserv_item{
       height: 3rem;
       margin: 0.2rem 2rem;
       display: flex;
       flex-direction: row;
    }
    .notice{
        margin: 0.5rem 2rem;
    }
    dt{
       width: 7rem;
    }
     @media (max-width: 798px) {
         #complete_constructor{
             width: 100%;
         }
         .payment{
             width: 100%;
         }
         .content_box{
             width: 100%;
         }
         dd{
             font-size: 1rem;
         }
         .notice span{
             font-size: 1.1rem;
         }
         .title_box{
             font-size: 1.6rem;
         }

     }

</style>