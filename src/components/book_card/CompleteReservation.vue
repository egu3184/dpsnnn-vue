<template>
    <div id="complete_constructor">
        <div class="complete_container box">
            <div class="title_box">
                <span>{{bookerName}}님의 예약 등록이 완료되었습니다!</span>
            </div>
            <div class="payment">
                <div v-if="paymentMethod=='onSite'">
                    <div class="reserv_item">
                        <dt>예약금</dt> 
                        <dd>{{depositPrice}}원 (입금자 : {{depositorName}})</dd>
                    </div> 
                    <div class="reserv_item">
                        <dt>계좌</dt> 
                        <dd>{{account}} (예금주 : {{accountHolder}})</dd>
                    </div>
                    <div class="notice">
                        <span> ※ 예약등록으로부터 30분내 미입금시 자동으로 예약등록이 취소됩니다. </span>
                    </div>  
                </div>
                <div v-else-if="paymentMethod=='card'">
                    <div class="reserv_item">
                        <dt>결제금액</dt> 
                        <dd>{{totPrice}}원</dd>
                    </div> 
                </div>
            </div>
            <div class="content_box"> 
                <div class="left_box">
                    <div class="reserv_item">
                        <dt>예약번호 </dt>&nbsp;&nbsp;
                        <dd>{{reservationNum}}</dd>
                    </div>
                    <div class="reserv_item">
                        <dt>예약날짜</dt>&nbsp;&nbsp;
                        <dd>{{slotDateTime}}</dd>
                    </div>
                </div>
                <div class="right_box"> 
                     <div class="reserv_item">
                        <dt>지점/테마</dt>&nbsp;&nbsp;
                        <dd>{{branchName}} / {{themeName}}</dd>
                    </div>
                    <div class="reserv_item">
                        <dt>인원/금액</dt>&nbsp;&nbsp;
                        <dd>{{usersNum}}인 / {{totalPrice}}원</dd>
                    </div>
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
            bookerName: '에구구',
            depositPrice: '20000',
            depositorName: '힝구',
            paymentMethod: 'onSite',
            totPrice : '',
            account: '111-1110-11111',
            accountHolder : '에구',
            branchName: '강남점',
            themeName: '그림자없는 상자',
            slotDateTime: '22년 3월 21일 16시 30분',
            usersNum : '2',
            totalPrice : '50000', 
            reservationNum: '202203210184987'
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
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
   
    

</style>