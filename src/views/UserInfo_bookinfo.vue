<template>
    <div>
    <div v-if="!isNull" class="bookContainer">
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
    <div class="noResult" v-if="isNull">
            예약 내역이 없습니다.
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
            },
            isNull: false,
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
               url: 'reservations/',
               method: 'get',
               params: {
                   page : this.currentPage-1,
                   size : this.pageCount,
               }
           }).then((response)=>{
                console.log(response);
                if(response.data.data.list.length == 0){
                    this.isNull = true;
                    return
                }else{
                    this.bookItems = response.data.data.list;
                    this.totalPages = response.data.data.totalPages;
                    //결제정보 상세보기 초기화
                    this.show = [false, false, false]
                }
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
 
    .top{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    
    .themeImg{
        width: 9rem;
        height: auto;
        align-items: center;
        justify-content: center;
    }
    
    .pagination{
        display:flex; align-items: center;
        justify-content: center;
        margin-top: 1rem;
    }
   
    .noResult{
        font-size: 2rem;
        font-weight: 600;
        padding: 3rem;
        text-align: center;
    }


    

</style>