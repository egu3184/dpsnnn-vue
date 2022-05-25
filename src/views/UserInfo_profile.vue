<template>
    <div class="profile_container">
        <div class="profile_header">
            <div class="header_text">
                <b-icon icon="exclamation-circle-fill" variant="secondary"></b-icon>
                <span>기본 정보</span>
            </div>
        </div>
       
        <button @click="modifyNickname()" v-b-modal.modal-prevent-closing>
            <div><b-icon  class="info_icon" icon="person-fill"></b-icon></div>
            <div class="info_content">
                <div>{{nickname}}</div>
                <div>{{provider}}</div>
            </div>
            <div> > </div>
        </button>
        <button  @click="modifyPassword">
            <div><b-icon  class="info_icon" icon="lock-fill"></b-icon></div>
            <div  class="info_content">*********</div>
            <div> > </div>
        </button>
        <button @click="modifyPhone">
            <div><b-icon  class="info_icon" icon="telephone-fill"></b-icon></div>
            <div  class="info_content">{{phoneNum}}</div>
            <div> > </div>
        </button>
        <!-- 모달 -->
        <b-modal id="modal-prevent-closing" hide-header ref="modal" title="타이틀은 없애기" @show="resetModal" @hidden="resetModal" @ok="handleOk">
            <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group label="변경할 닉네임" label-for="name-input" :state="modifyNickname.isValid">
                    <b-form-input id="name-input" v-model="modifyNicknameOb.value" :state="modifyNicknameOb.isValid" required></b-form-input>
                </b-form-group>
                <p class="errorMessage" v-if="modifyNicknameOb.hasError">{{modifyNicknameOb.errorMessage}}</p>
                <p class="errorMessage" v-if="!modifyNicknameOb.hasError">&nbsp;</p>
            </form>
        </b-modal>    
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
             nickname : '',
             phoneNum : '',
            //  email_id : '',
             provider : '',
             modifyNicknameOb: {
                 value: '',
                 isValid: null,
                 hasError: false,
                 errorMessage : '',
             },

             
        };
    },
    setup() {},
    created() {},
    mounted() {
        this.getUserProfile();
    },
    unmounted() {},
    methods: {
        //페이지 mount시 로그인 유저 정보 가져오기
        getUserProfile(){
            instance({
                url: 'http://localhost:2030/user',
                method: 'get'
            }).then((response)=>{
                console.log(response)
                if(response.data.success == true){
                    this.nickname = response.data.data.nickname;
                    this.modifyNicknameOb.value = response.data.data.nickname;
                    this.phoneNum = response.data.data.phoneNum;
                    if(response.data.data.provider == "Application"){
                        this.provider = response.data.data.userId;
                    }else if(!!response.data.data.provider){
                        this.provider = response.data.data.provider + "로그인 회원입니다."
                    } 
                }
            }).catch((error)=>{ 
                console.log(error)
            });
        },
        //닉네임 수정
        modifyNickname(){
            
        },
        //패스워드 수정
        modifyPassword(){

        },
        //패스워드 수정
        modifyPhone(){

        },
        //모달 초기화
        resetModal(){
            this.modifyNicknameOb.value = this.nickname;
            this.modifyNicknameOb.isValid = null;
        },
        handleOk(bvModalEvent){
            bvModalEvent.preventDefault()
            this.handleSubmit()
        },
        async handleSubmit(){
            //(0) 변경없이 ok눌렀을 때
            if(this.nickname == this.modifyNicknameOb.value){
                return this.$nextTick(()=>{    
                        this.$bvModal.hide('modal-prevent-closing')
                });
            }
             //(1)정규표현식 체크
            const regex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/
            if(!this.checkRegEx(this.modifyNicknameOb.value, regex)){
                this.setInvalidStatusAndMessage(this.modifyNicknameOb, "2~15자의 영어 또는 숫자, 한글 조합만 가능합니다.");
                return
            }
            //(2)DB에 중복확인 요청
            await axios({
                url: "http://localhost:2030/users",
                method: "get",
                params:{
                    nickname : this.modifyNicknameOb.value
                }
            }).then((response)=>{
                console.log(response)
                if(response.data.code == 1102){  //닉네임 중복(o)
                    this.setInvalidStatusAndMessage(this.modifyNicknameOb, "이미 등록된 닉네임입니다.")
                    return
                }
            });
            //(3)문제 없을시 서버에 닉네임 변경 요청
            await instance({
                url : "http://localhost:2030/users",
                method : 'put',
                data : {
                    nickname : this.modifyNicknameOb.value
                }
            }).then((response)=>{
                console.log(response)
                if(response.data.success == true){
                    this.nickname = response.data.data.nickname;
                    this.$nextTick(()=>{    
                        this.$bvModal.hide('modal-prevent-closing')
                    })
                }  
            }).catch((error)=>{
                console.log(error)
            });

            //닉네임 변경 요청
        },
        // 유효하지않은 상태, 에러 메시지 setter 메서드
        setInvalidStatusAndMessage(object, message){
           object.errorMessage = message
           object.hasError = true
           object.isValid = false
        },
        // 유효한 상태, 에러 메시지 setter 메서드
        setValidStatusAndMessage(object){
           object.hasError = false
           object.isValid = true
        },
        //값이 정규표현식에 부합 체크
        checkRegEx(value, regex){
           let check = regex.test(value);
           if(!check){  //포함x
               return false
           }else{       //포함o
               return true
           }
       },
        
    }
}
</script>
<style scoped>
    .profile_container{
        width: 100%;
        height: 65%;
        /* background-color: red; */
        border: 0.09rem solid rgb(182, 175, 175);
        border-radius: 1.2rem;
        display: flex;
        flex-direction: column;
    }
    .profile_header{
        height: 15%;
        /* background-color: aquamarine; */
        outline: none;
        font-size: 1.5rem;
        text-align: left;
        padding: 0.1rem 1rem;
        padding-top: 1rem;
        font-weight: 600;
    }
    .profile_header span{
        margin: 2%;
        color: rgb(107, 107, 107)
    }
    .profile_container button{
        border: 0;
        height: 30%;
        background-color: transparent;
        outline: none;
        display: flex;
        align-items: center;
        /* justify-content: center; */
        font-size: 1.5rem;
        font-weight: 600;
        text-align: left;
    }
    .profile_container button div:nth-child(1){
        /* background-color: red; */
        flex-grow: 0.5;
        padding-left: 1rem;
        
    }
     .profile_container button div:nth-child(2){
        /* background-color: beige; */
        flex-grow: 2;
    }
     .profile_container button div:nth-child(3){
        /* background-color: rgb(245, 245, 7); */
        flex-grow: 2;
        text-align: right;
        padding-right: 1rem;
        color: #5f6368;
    }
    .profile_container button:hover{
       background-color: rgb(245, 239, 239);
    }
    .profile_container button:last-child{
        border-bottom-left-radius: 1.2rem;
        border-bottom-right-radius: 1.2rem;
    }
    .info_content{
        padding: 0 20%;
    }
    .info_content div:nth-child(1){
        font-size: 1.6rem;
        padding-left: 0 !important;
    }
    .info_content div:nth-child(2){
        font-size: 0.95rem;
        color: rgb(138, 135, 135);
        font-weight: 200;
    }
    .info_icon{
        color: #5f6368; 
        width:100%; height:100%;
        border-radius: 50%;
        border: 0.18rem solid #5f6368; 
    }
    .errorMessage{
        margin: 0;
        text-align: right;
        color: rgb(209, 32, 32);
        font-weight: 500;
        font-size: 0.8rem;
    }
</style>