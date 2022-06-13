<template>
    <div class="profile_constructor">
        <div class="menu">
            <div class="menu_header">
                <img src="@/assets/default_profile.jpg" />
                <p>{{nickname}}</p>
            </div>
            <div class="menu_list">
                <ul>
                    <li><button @click="chooseMenu('profile')" :class="{onMenu: currentMenu == 'profile'}">프로필</button></li>
                    <li><button @click="chooseMenu('bookinfo')" :class="{onMenu: currentMenu == 'bookinfo'}">예약 내역</button></li>
                </ul>     
            </div>
            <div></div> 
        </div>
        <div class="content">
            <component v-bind:is="currentMenu" @changeNickname="changeNick"></component>
        </div>
    </div>
</template>
<script>
import profile from "./UserInfo_profile.vue"
import bookinfo from "./UserInfo_bookinfo.vue"
import instance from '@/axiosInterceptor.js'
import axios from 'axios'

export default {
    name: '',
    components: { profile, bookinfo },
    data() {
        return {
            nickname:'',
            currentMenu: 'profile',
        };
    },
    setup() {},
    created() {},
    mounted() {

    },
    unmounted() {},
    methods: {
        changeNick(value){
            this.nickname = value
        },
        chooseMenu(menu){
            this.currentMenu = menu
        },
    }
}
</script>
<style scoped>
    .profile_constructor{
        padding-top: 4.5rem;
        padding-bottom: 0.5rem;
        background-color: #f8f9fa;
        display: flex;
        /* align-items: center; */
        justify-content: center;
        flex-direction: row;
        min-height: 50rem;
    }
    .menu{
        box-shadow: 0 10px 20px rgb(0 0 0 / 10%);
        width: 20rem;
        height: 100%;
        /* border: 0.13rem solid rgb(182, 175, 175); */
        background-color: white;
        padding: 1rem 1rem;
        padding-bottom: 2.5rem;
        border-radius: 1rem;
        margin: 2rem;
        /* box-shadow: 5px 1px 8px 0 rgb(0 0 0 / 6%); */
        border-left: 1px solid rgba(0,0,0,.08);
        display: flex;
        flex-direction: column;
    }
    .menu_header{
        width: 100%;
        /* background-color: red; */
        height: 20rem;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .menu_header img{
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        margin: 1rem;
        box-shadow: 0 10px 10px 0 rgb(29 34 53 / 8%);
    }
    .menu_header p{
        font-size: 2rem;
        font-weight: 700;
    }


    .menu_list{
        width: 100%;
        /* background-color: rgb(0, 255, 221); */
        height: 30rem;
        border-top: 1px solid rgba(140,140,140,.3);
        border-bottom: 1px solid rgba(140,140,140,.3);
    }
    .menu_list ul{
        list-style: none;
        margin-top: 20%;
    }
    .menu_list ul li{
        font-size: 2rem;
        font-weight: 600;
        margin: 2rem;
    }
    .menu_list ul li button{
        position: relative;
        background-color: transparent;
        border: 0;
    }
    .menu_list ul li button.onMenu::after{
        content: '';
        position: absolute;
        left: 0;
        bottom: -8px;
        width: 100%;
        height: 7px;
        background-color: #3f98a3;
        border-radius: 10px;
    }


    .content{
        box-shadow: 0 10px 20px rgb(0 0 0 / 10%);
        width: 66%;
        /* height: 100%; */
        /* border: 0.13rem solid rgb(182, 175, 175); */
        background-color: white;
        padding: 4.5rem 4.5rem;
        /* padding-bottom: 4.5rem; */
        border-radius: 1rem;
        margin: 2rem;
    }


</style>