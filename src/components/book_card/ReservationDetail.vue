<template>
    <div>
    <div class="top" :key="index" v-for="(reserv, index) in bookItems">
        <div class="book">
            <div class="bookHeader">
                <img :src="reserv.themeImg" class="themeImg" />
            </div>
            <div class="bookContent">
                <div class="bookContent_bookNum">No.{{reserv.reservationNumber}}</div>
                <div class="bookContent_date">{{dateFormatting_yymmdd(reserv.slotDate)}} 
                                                ({{timeFormatiing(reserv.slotTime)}})
                                                - {{reserv.numUsers}}인
                </div>
                <div class="bookContent_content">
                    <div>{{reserv.branchName}}</div> 
                    <div>{{reserv.themeName}}</div>
                </div>
            </div>
            <div class="bookFooter">
                <button class="button_cancle"  @click="showDetail(index)">결제정보</button>  
                <button v-if="reserv.paymentStatus == 'DepositWaiting'" @click="cancleReservation(index)" type="button" class="button_cancle">예약취소</button>  
            </div>
        </div>
        <div v-if="show[index]" :ref="'detail-'+index" name="slide-fade">
            <div class="book payment_detail">
                <div class="title">
                    예약자 정보
                </div>
                <div class="booker_info_content" style="width: 100%; display:flex; justify-content:space-evenly;">
                    <div class="left" style="display:flex; justify-content:space-evenly;">
                        <dt>
                            <div>예약자명</div>
                            <div>전화번호</div>
                        </dt>
                        <dd>
                            <div>{{reserv.bookerName}}</div>
                            <div>{{reserv.phoneNumber}}</div>
                        </dd>     
                    </div>
                    <div class="right" style="display:flex; justify-content:space-evenly;" >
                        <dt>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                        </dt>
                        <dd>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                        </dd>    
                    </div>       
                </div>
                <div class="title">
                    결제 정보
                </div>    
                <div class="payment_info_content" style="width: 100%; display:flex; justify-content:space-evenly;" >
                    <div class="left" style="display:flex; justify-content:space-evenly;">
                        <dt>{{setPaymentStatus(reserv.paymentStatus)}}
                            <div>결제상태</div>
                            <div>결제수단</div>
                            <div>예약금</div>
                            <div>계좌번호</div>
                            <div>&nbsp;</div> 
                            <div v-if="paymentStatusOb.showDepositDeadline">입금기한</div>
                        </dt>
                        <dd>
                            <div style="font-weight:600;" :style="{color:paymentStatusOb.color}">{{paymentStatusOb.value}}</div>
                            <div>{{setPaymentMethod(reserv.paymentMethod)}}</div>
                            <div>{{numberWithCommas(reserv.depositPrice)}}원 (입금자: {{reserv.depositorName}}) </div>
                            <div>{{reserv.bankName}} (예금주: {{reserv.bankAccountHolder}})</div>
                            <div>{{reserv.bankAccountNumber}}</div>
                            <div class="depositDeadline" v-if="paymentStatusOb.showDepositDeadline">
                                <div style="color:red; font-weight:600;">{{formattingDepositDueDateTime(reserv.depositDueDateTime)}})까지</div>
                                <div style="font-size:0.7rem;">(입금기한 내에 입금하지 않으면 예약 자동 취소 됩니다.)</div>                           
                            </div>
                        </dd>     
                    </div>
                    <div class="right" style="background-color: rgb(245, 245, 245); display:flex; justify-content:space-evenly;" >
                        <dt style="width:70%">
                            <div>총 예약 가격</div>
                            <div>예약금</div>
                            <div>&nbsp;</div>
                                <div>&nbsp;</div>
                            <div>현장에서 결제할 금액</div>
                        </dt>
                        <dd>
                            <div>{{numberWithCommas(reserv.totPrice)}}원</div>
                            <div>-{{numberWithCommas(reserv.depositPrice)}}원</div>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <div>{{numberWithCommas(setFinalPaymentPriceAtOnsite(reserv.totPrice, reserv.depositPrice))}}원</div>
                        </dd>    
                    </div>       
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
    props:{
        bookItems: Array
    },
    data() {
        return {
            sampleData: '',
            // bookItems: this.bookItems,
            themeImg: '',
            show: [true,false,false],
            paymentStatusOb:{
                value: '',
                color: '',
                showDepositDeadline: false,
            }
        };
    },
    setup() {},
    created() {},
    mounted() {
       
    },
    unmounted() {},
    methods: {
         //날짜 포맷 - yymmdd
        dateFormatting_yymmdd(slotDate){
            let date = slotDate.split('-')
            let year = date[0].substring(2)
            let month = date[1]
            let day = date[2]
            return year+'/'+month+'/'+day
        },
        //날짜 포맷 - mmdd
        dateFormatting_mmdd(slotDate){
            let date = slotDate.split('-')
            let month = date[1]
            let day = date[2]
            return month+'/'+day
        },
        //시간 포맷 - hh:mm
        timeFormatiing(slotTime){
            let time = slotTime.split(':')
            time.pop()
            return time.join(':')
        },
        //결제정보 상세보기  
        showDetail(index){
            this.show[index] = !this.show[index]
            this.show = [...this.show]  
            //vue2의 경우 array의 하나의 item만 변경되었을 경우 재랜더링이 발생하지 않는다.
            //그래서 스프레드 구문을 이용해 쉽게 깊은 복사를 하여 재할당해주었다.
            
        },
        // 결제 방식 셋팅
        setPaymentMethod(value){
            if(value == 'OnSite'){
                return '현장결제'
            }
        },
        //금액에 콤마 찍기
        numberWithCommas(price){
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        //최종 결제 가격 계산
        setFinalPaymentPriceAtOnsite(totPrice, depositPrice){
            return totPrice-depositPrice;
        },
        setPaymentStatus(status){
            if(status == 'DepositWaiting'){
                this.paymentStatusOb.value = '입금 대기 중'
                this.paymentStatusOb.color = 'red'
                this.paymentStatusOb.showDepositDeadline = true
            }else if(status == 'DepositCompleted'){
                this.paymentStatusOb.value = '입금 확인'
                this.paymentStatusOb.color = 'green'
                this.paymentStatusOb.showDepositDeadline = false
            }else if(status == 'RefundWaiting'){
                this.paymentStatusOb.value = '환불 대기 중'
                this.paymentStatusOb.color = 'black'
                this.paymentStatusOb.showDepositDeadline = false
            }
            else if(status == 'RefundCompleted'){
                this.paymentStatusOb.value = '환불 완료'
                this.paymentStatusOb.color = 'black'
                this.paymentStatusOb.showDepositDeadline = false
            }
        },
        cancleReservation(index){
            const reservId = this.bookItems[index].id;
            console.log(reservId)
            instance({
                url: 'reservation/cancle',
                method: 'get',
                params:{
                    id: reservId,
                }
            }).then((response)=>{

            })
        },
        //입금마감시간 LocalDateTime 포맷
        formattingDepositDueDateTime(dateTime){
            const dateAndTime = dateTime.split("T");
            const date = dateAndTime[0].split("-")
            const time = dateAndTime[1].split(":")
            const year = date[0].split("")[2]+date[0].split("")[3]
            return year+"/"+date[1]+"/"+date[2]+" ("+time[0]+":"+time[1]+")";
        }


    }
}
</script>
<style scoped>
.button_cancle{
        background-color: rgb(255, 255, 255);
        border: 0.05rem solid rgb(202, 202, 202);
        border-radius: 0.25rem;
        height: 20%;
        width: 70%;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
        
    }
    ul li{
        display: inline;
        list-style-type: none;
        margin: 0 0.4rem;
        background-color: rgb(255, 255, 255);
    }
    .paginationButton{
         background-color: rgb(255, 255, 255);
         border: 0;
    }
    .currentPage{
         background-color: #3f98a3;
         color: white;
    }
    .bookContainer{
        width: 100%;
        /* height: 100%; */
        /* background-color: grey; */
    }
    .top{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .book{
        background-color: rgb(255, 255, 255);
        width: 40rem;
        height: 30%;
        display: flex;
        flex-direction: row;
        border: 0.05rem solid rgb(202, 202, 202);
        margin-top: 1rem;
        border-radius: 0.5rem;
    }
    .bookHeader{
        padding: 1%;
        display: flex;
        /* background-color: rgb(211, 60, 60); */
    }
    .themeImg{
        width: 9rem;
        height: auto;
        align-items: center;
        justify-content: center;
    }
    .bookContent{
        /* width: 60%; */
        /* background-color: rgb(60, 211, 135); */
        padding: 4%;
    }
    .book div:nth-child(1) { flex-grow: 0.25; }
    .book div:nth-child(2) { flex-grow: 0.40; }
    .book div:nth-child(3) { flex-grow: 0.4; }
    
    .bookContent_bookNum{
        width: 100%;
        /* background-color: aqua; */
        height: 15%;
        margin-bottom: 3%;
        font-style:oblique;
        color: rgb(144, 148, 148);
    }
    .bookContent_date{
        width: 100%;
        height: 25%;
        /* background-color: rgb(60, 125, 211); */
        margin-bottom: 3%;
        font-size: 1.4rem;
    }
    .bookContent_content{
        width: 100%;
        height: 50%;
        /* background-color: rgb(208, 211, 60); */
        margin-bottom: 3%;
        font-size: 1.3rem;
    }
    .bookFooter{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .pagination{
        display:flex; align-items: center;
        justify-content: center;
        margin-top: 1rem;
    }
    .payment_detail{
        /* margin-top: 0.2rem; */
        min-height: 10rem;
        /* padding: 1rem; */
    }
    .payment_detail{
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
    }
    .booker_info_content{
        display: flex;
        flex-direction: row;
        /* margin: 2rem 0; */
    }

    .payment_info_content{
        display: flex;
        flex-direction: row;
        /* margin: 2rem 0; */
        padding: 0;
    }
    .title{
        text-align:left;  
        font-size:1.5rem;
        width: 100%;
        /* border-top: 2px solid rgb(177, 170, 170); */
        border-bottom: 2px solid rgb(177, 170, 170);
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
    }
    .right{
        width: 85%;
        padding: 2rem 1rem;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
    }
    .left{
        padding: 2rem 1rem;
        width: 115%;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
    }
    dt{
        width: 35%;
        padding: 1rem;
    }
    dd{
        width: 65%;
        padding-top: 1rem;
        padding-left: 1rem;
    }
    dt div{
        margin-bottom: 0.5rem;
    }
    dd div{
         margin-bottom: 0.5rem;
    }
</style>