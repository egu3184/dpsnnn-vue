<template>
    <div>
        <div class="blank"></div>
        <div class="title">
            <span>Reservation</span>
        </div>
        <div class="selectBar">
            <a @click="changeMenu('BookFrame')">예약하기</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a @click="changeMenu('FindReservation')">조회하기</a>
        </div>
            <div class="dd" style="margin-top: 1rem; display: flex; justify-content: center; align-item: center;">
                <component v-bind:is="currentMenu"></component>
            </div>    
    </div>
</template>
<script>
    import BookFrame from "@/components/book_card/BookFrame.vue"
    import FindReservation from "@/components/book_card/FindReservation.vue"
    import {mapState, mapGetters, mapMutations} from 'vuex' 
    export default {
        name: '',
        components: {
            BookFrame, FindReservation
        },
        data() {
            return {
              currentTap: 0,
              currentMenu: "BookFrame"
            
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
            changeMenu(value){
                this.currentMenu = value
            },

              
           
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
        font-size: 4rem;
        /* background-color: rgb(247, 247, 247); */
    }
    /* 3 layer */
    .book_container{
         /* background-color: rgb(247, 247, 247); */
         border-radius: 1.2rem;
         padding-bottom: 3rem;
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
        /* background-color: rgb(165, 159, 159); */
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