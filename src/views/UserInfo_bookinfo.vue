<template>
    <div class="bookContainer">
        <ReservationDetail :bookItems="bookItems" />
        
        <div class="pagination">
            <ul>
                <li @click="getReservation((currentPage-pageCount) > 0? currentPage-pageCount : 1)">
                    <button class="paginationButton">〈〈 </button>
                </li>
                <li @click="getReservation((currentPage-1) > 1? currentPage-1 : 1)">
                    <button class="paginationButton">〈 </button>
                </li>
                <li v-for="(pageNum, i) in paginationButtonList" :key="i">
                    <button class="paginationButton" :class="{currentPage :pageNum == currentPage}" @click="getReservation(pageNum)">{{pageNum}}</button>
                </li>
                <li @click="getReservation((currentPage == totalPages)? totalPages : currentPage+1)">
                    <button class="paginationButton" > 〉</button>
                </li>
                <li @click="getReservation((currentPage+pageCount) < totalPages? currentPage+pageCount : totalPages)">
                    <button class="paginationButton" > 〉〉</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import instance from '@/axiosInterceptor.js'
import ReservationDetail from '@/components/book_card/ReservationDetail.vue'
import axios from 'axios'
export default {
    name: '',
    components: {
        ReservationDetail
    },  
    data() {
        return {
            themeImg: '',
            bookItems: [],
            totalPages: 0,
            currentPage: 1,
            pageCount: 3,
            show: [false,false,false],
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
        //예약 가져오기
        this.getReservation(1);
    },
    computed:{
        //페이지 첫번호
        startPage(){
            return ( Math.trunc((this.currentPage-1)/ this.pageCount) * this.pageCount ) + 1 
        },
        //페이지 끝번호
        endPage(){
            const end = this.startPage + (this.pageCount -1)
            return ( end < this.totalPages ) ? end : this.totalPages 
        },
        //보여질 페이지 버튼 배열
        paginationButtonList(){
            let buttons = []
            for(let i=this.startPage; i<=this.endPage; i++){
                buttons.push(i)
            }
            return buttons;
        },  
    },
    unmounted() {},
    methods: {
        getReservation(i){
           this.currentPage = i
           instance({
               url: 'http://localhost:2030/reservations/',
               method: 'get',
               params: {
                   page : this.currentPage-1,
                   size : this.pageCount,
               }
           }).then((response)=>{
                console.log(response);
                this.bookItems = response.data.data.list;
                this.totalPages = response.data.data.totalPages;
                //결제정보 상세보기 초기화
                this.show = [false, false, false]
           })
        },

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
        width: 100%;
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