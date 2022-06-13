<template>
    <div class="bookContainer">
        <!-- 반복문 -->
        <div class="book" :key="index" v-for="(reserv, index) in bookItems">
            <div class="bookHeader">
                <img :src="reserv.themeImg" class="themeImg" />
            </div>
            <div class="bookContent">
                <div class="bookContent_bookNum">No.{{reserv.reservationNumber}}</div>
                <div class="bookContent_date">{{reserv.slotDate}} ({{reserv.slotTime}})</div>
                <div class="bookContent_content">
                    <div>{{reserv.branchName}}</div> 
                    <div>{{reserv.themeName}} {{reserv.numUsers}}인</div>
                </div>
            </div>
            <div class="bookFooter">
                <!-- <div> -->
                  <button class="button_cancle">예약취소</button>  
                <!-- </div> -->
            </div>
        </div>
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
import axios from 'axios'
export default {
    name: '',
    components: {},  
    data() {
        return {
            themeImg: '',
            bookItems: [],
            totalPages: 0,
            currentPage: 1,
            pageCount: 3,
           
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
        height: 25%;
        
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
         background-color: rgb(48, 197, 172);
         color: white;
    }
    .bookContainer{
        width: 100%;
        height: 100%;
        /* background-color: grey; */
    }
    .book{
        background-color: rgb(255, 255, 255);
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: row;
        border: 0.05rem solid rgb(202, 202, 202);
        margin-bottom: 1rem;
        border-radius: 0.5rem;
    }
    .bookHeader{
        padding: 1%;
        display: flex;
        /* background-color: rgb(211, 60, 60); */
    }
    .themeImg{
        /* width: 100%; */
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
        font-size: 1.5rem;
    }
    .bookFooter{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .pagination{
        display:flex; align-items: center;
        justify-content: center;
        margin-top: 1rem;
    }
</style>