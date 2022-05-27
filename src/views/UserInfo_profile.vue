<template>
    <div class="profile_container">
        <div class="profile_header">
            <div class="header_text">
                <b-icon icon="exclamation-circle-fill" variant="secondary"></b-icon>
                <span>기본 정보</span>
            </div>
        </div>
       
        <button @click="modifyNickname()" v-b-modal.modal_nick>
            <div><b-icon  class="info_icon" icon="person-fill"></b-icon></div>
            <div class="info_content">
                <div>{{nickname}}</div>
                <div v-if="id.provider == 'Application'">{{id.email_id}}</div>
                <div v-else>{{id.provider}}</div>
            </div>
            <div> > </div>
        </button>
        <button  @click="modifyPassword" v-b-modal.modal_pw>
            <div><b-icon  class="info_icon" icon="lock-fill"></b-icon></div>
            <div  class="info_content">*********</div>
            <div> > </div>
        </button>
        <button @click="modifyPhone"  v-b-modal.modal_phone>
            <div><b-icon  class="info_icon" icon="telephone-fill"></b-icon></div>
            <div  class="info_content">{{phoneNum}}</div>
            <div> > </div>
        </button>
        <!-- 닉네임 모달 -->
        <b-modal id="modal_nick" hide-header ref="modal" @show="resetModal(modifyObject_nickname,nickname)" @hidden="resetModal" @ok="handleOk_nickanme">
            <form ref="form" @submit.stop.prevent="handleSubmit_nickname">
                <b-form-group label="변경할 닉네임" label-for="name-input" :state="modifyObject_nickname.isValid">
                    <b-form-input v-model="modifyObject_nickname.value" :state="modifyObject_nickname.isValid" required></b-form-input>
                </b-form-group>
                <p class="errorMessage" v-if="modifyObject_nickname.hasError">{{modifyObject_nickname.errorMessage}}</p>
                <p class="errorMessage" v-if="!modifyObject_nickname.hasError">&nbsp;</p>
            </form>
        </b-modal> 
        <!-- 패스워드 모달 -->
        <b-modal id="modal_pw" hide-header ref="modal" @show="resetModal_pw" @hidden="resetModal_pw" @ok="handleOk_pw">
            <form ref="form" @submit.stop.prevent="handleSubmit_pw">
                <b-form-group label="현재 비밀번호" label-for="name-input">
                    <b-form-input type="password" v-model="currentPw.value" :state="currentPw.isValid" required></b-form-input>
                </b-form-group>
                <p class="errorMessage" v-if="currentPw.hasError">{{currentPw.errorMessage}}</p>
                <p class="errorMessage" v-if="!currentPw.hasError">&nbsp;</p>
                 <b-form-group label="새 비밀번호" label-for="name-input" :state="modifyObject_pw.isValid">
                    <b-form-input type="password"  v-model="modifyObject_pw.value" :state="modifyObject_pw.isValid" required></b-form-input>
                </b-form-group>
                <p class="errorMessage" v-if="modifyObject_pw.hasError">{{modifyObject_pw.errorMessage}}</p>
                <p class="errorMessage" v-if="!modifyObject_pw.hasError">&nbsp;</p>
                 <b-form-group label="새 비밀번호 재확인" label-for="name-input" :state="modifyObject_cpw.isValid">
                    <b-form-input type="password"  v-model="modifyObject_cpw.value" :state="modifyObject_cpw.isValid" required></b-form-input>
                </b-form-group>
                <p class="errorMessage" v-if="modifyObject_cpw.hasError">{{modifyObject_cpw.errorMessage}}</p>
                <p class="errorMessage" v-if="!modifyObject_cpw.hasError">&nbsp;</p>
            </form>
        </b-modal> 
        <!-- 전화번호 모달 -->
        <b-modal id="modal_phone" hide-header ref="modal" @show="resetModal_phone" @hidden="resetModal_phone" @ok="handleOk_phone">
            <form style="position: relative" ref="form" @submit.stop.prevent="handleSubmit_phone">
                <b-form-group label="변경할 전화번호" label-for="name-input">
                    <b-form-input v-model="modifyObject_phone.value" type="tel" maxlength="13" :disabled="phone_auth.timeout == false" required></b-form-input>                  
                    <div style="display:flex; flex-direction:row; margin : 0.5rem 0;">
                        <div style="width: 85%; height: 100%;">
                            <b-form-input v-model="phone_auth.inputCode" placeholder="인증번호를 입력해주세요. (임시 코드123)" v-if="phone_auth.flag"></b-form-input>
                        </div>
                         <div class="btn_auth_div">
                            <button class="btn_auth" v-if="!phone_auth.flag" @click="phoneNumB_auth" type="button">본인인증</button>
                        </div>
                        <div v-if="phone_auth.flag" style="position: absolute; top:85px; right:0; margin-right:0rem; text-align: right;">
                            <span style="color:red;">{{phone_auth.minute}}분 {{phone_auth.seconds}}초</span>
                        </div>
                    </div>
                </b-form-group>
                <p class="errorMessage" v-if="modifyObject_phone.hasError">{{modifyObject_phone.errorMessage}}</p>
                <p class="errorMessage" v-if="!modifyObject_phone.hasError">&nbsp;</p>
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
             id:{
                 email_id: '',
                 provider: '',
             },
             nickname : '',
             phoneNum : '',
            //  email_id : '',
             modifyObject_nickname: {
                 value: '',
                 isValid: null,
                 hasError: false,
                 errorMessage : '',
             },
             currentPw:{
                 value: '',
                 isValid: null,
                 hasError: false,
                 errorMessage : '',
             },
             modifyObject_pw:{
                 value: '',
                 isValid: null,
                 hasError: false,
                 errorMessage : '',
             },
             modifyObject_cpw:{
                 value: '', 
                 isValid: null,
                 hasError: false,
                 errorMessage : '',
             },
            modifyObject_phone:{
                value: '', 
                isValid: null,
                hasError: false,
                errorMessage : '',
            },
            phone_auth:{
                authCode: '',
                inputCode: '',
                flag: false,
                totalCountDown : 0,
                minute: 0,
                seconds: 0,
                timeout: null,
                isSuccess: null,
            }


             
        };
    },
    setup() {},
    created() {},
    mounted() {
        this.getUserProfile();
    },
    unmounted() {},
    watch:{ 
        nickname(value){
            this.modifyObject_nickname.value = value
        },
        phoneNum(value){
            this.modifyObject_phone.value = value
        },
        "phone_auth.totalCountDown" : {
            handler(totalSeconds){
                this.phone_auth.minute = parseInt(this.phone_auth.totalCountDown / 60);
                this.phone_auth.seconds = this.phone_auth.totalCountDown%60
                this.phone_auth.timeout = false
                if(totalSeconds > 0 ){
                    setTimeout(()=>{
                        this.phone_auth.totalCountDown -= 1;
                    },1000)
                }else if(totalSeconds == 0){
                    this.phone_auth.timeout = true
                }
            },
            imediate: true
        },
        // 전화번호 입력시 자동으로 하이픈 넣어주기 + 정규표현식 검사
        'modifyObject_phone.value': function(value){
            //console.log(value)
            this.modifyObject_phone.value = value
                                .replace(/[^0-9]/g, '')
                                .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g,"$1-$2-$3")
                                .replace(/(\-{1,2})$/g, "");
        },
    },
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
                    this.phoneNum = response.data.data.phoneNum;
                    if(response.data.data.provider == "Application"){
                        this.id.provider = response.data.data.provider;
                        this.id.email_id = response.data.data.userId;
                    }else if(!!response.data.data.provider){
                        this.id.provider = response.data.data.provider;
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
        resetModal(object, value){
            object.value = value;
            object.isValid = null;
            object.hasError = false
        },
        //모달 초기화 - 패스워드
        resetModal_pw(){
            this.modifyObject_pw.value =''
            this.modifyObject_cpw.value = ''
            this.currentPw.value = ''
            this.modifyObject_pw.isValid = null
            this.modifyObject_pw.errorMessage = ''
            this.modifyObject_cpw.isValid = null
            this.modifyObject_cpw.errorMessage = ''
        },
        //모달 초기화 - 전화번호
        resetModal_phone(){
            this.modifyObject_phone = {
                value: this.phoneNum, 
                isValid: null,
                hasError: false,
                errorMessage : '',
            }
            this.phone_auth = {
                code: '',
                flag: false,
                totalCountDown : 0,
                minute: 0,
                seconds: 0,
                timeout: null,
            }

        },
        handleOk_nickanme(bvModalEvent){
            bvModalEvent.preventDefault()
            this.handleSubmit_nickname()
        },
        handleOk_pw(bvModalEvent){
            bvModalEvent.preventDefault()
            this.handleSubmit_pw()
        },
        handleOk_phone(bvModalEvent){
            bvModalEvent.preventDefault()
            this.handleSubmit_phone()
        },
        async handleSubmit_nickname(){
            //(0) 변경없이 ok눌렀을 때
            if(this.nickname == this.modifyObject_nickname.value){
                return this.$nextTick(()=>{    
                        this.$bvModal.hide('modal-prevent-closing')
                });
            }
             //(1)정규표현식 체크
            const regex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/
            if(!this.checkRegEx(this.modifyObject_nickname.value, regex)){
                this.setInvalidStatusAndMessage(this.modifyObject_nickname, "2~15자의 영어 또는 숫자, 한글 조합만 가능합니다.");
                return
            }
            //(2)DB에 중복확인 요청
            await axios({
                url: "http://localhost:2030/users",
                method: "get",
                params:{
                    nickname : this.modifyObject_nickname.value
                }
            }).then((response)=>{
                console.log(response)
                if(response.data.code == 1102){  //닉네임 중복(o)
                    this.setInvalidStatusAndMessage(this.modifyObject_nickname, "이미 등록된 닉네임입니다.")
                    return
                }
            });
            //(3)문제 없을시 서버에 닉네임 변경 요청
            await instance({
                url : "http://localhost:2030/users",
                method : 'put',
                data : {
                    nickname : this.modifyObject_nickname.value
                }
            }).then((response)=>{
                console.log(response)
                if(response.data.success == true){
                    this.nickname = this.modifyObject_nickname.value;
                    this.$nextTick(()=>{    
                        this.$bvModal.hide('modal_nick')
                    })
                }  
            }).catch((error)=>{
                console.log(error)
            });
        },
        //패스워드 변경
        async handleSubmit_pw(){
            //(0) 현재 비밀번호 빈값 체크
            if(!this.currentPw.value){
                return this.setInvalidStatusAndMessage(this.currentPw, "현재 비밀번호를 입력해주세요.")
            }else{
                this.currentPw.isValid = null;
                this.currentPw.errorMessage = '';
            }
            //(1) 정규표현식 체크
            //(1-1) 8~20자의 영문, 특수문자, 숫자 조합만
            const regex1 =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
            if(!this.checkRegEx(this.modifyObject_pw.value, regex1)){
                this.setInvalidStatusAndMessage(this.modifyObject_pw, "8~20자의 영문, 특수문자, 숫자 조합만 가능합니다.")
                return
            }
            //(1-2) 같은 문자를 3번 이상 사용(x)
            const regex2 = /(\w)\1\1\1/
            if(this.checkRegEx(this.modifyObject_pw.value, regex2)){
                this.setInvalidStatusAndMessage(this.modifyObject_pw, "같은 문자를 3번 이상 사용할 수 없습니다.")
                return
            }
            //(1-3) 연속된 숫자 3개 사용(x)
            const regex3 = /(012)|(123)|(234)|(345)|(456)|(567)|(678)|(789)|(987)|(876)|(765)|(654)|(543)|(432)|(321)|(210)/
            if(this.checkRegEx(this.modifyObject_pw.value, regex3)){
                this.setInvalidStatusAndMessage(this.modifyObject_pw, "연속하는 숫자를 3번 이상 사용할 수 없습니다.")
                return
            }
            this.modifyObject_pw.isValid = null;
            this.modifyObject_pw.errorMessage = ''; 
            //(2) 새 비밀번호와 새 비밀번호 확인이 같은지 체크
            if(this.modifyObject_pw.value != this.modifyObject_cpw.value){
                this.setInvalidStatusAndMessage(this.modifyObject_cpw, "비밀번호가 일치하지 않습니다.")
                return
            }else{
                this.modifyObject_cpw.isValid = null;
                this.modifyObject_cpw.errorMessage = ''; 
            }
            //(3) 변경 요청 보내기
            instance({
                url: 'http://localhost:2030/users',
                method: 'put',
                data:{
                    password : this.currentPw.value,
                    newPassword: this.modifyObject_pw.value
                }
            }).then((response)=>{
                console.log(response)
                if(response.data.success == true){
                    // 저장한 패스워드 전체 초기화
                    this.resetModal_pw();
                    // 창 닫기
                     this.$nextTick(()=>{    
                        this.$bvModal.hide('modal_pw')
                    })
                }
            }).catch((error)=>{
                console.log(response)
            })
        },
        //전화번호 - 인증확인 버튼 클릭시
        phoneNumB_auth(){
            // (1) 전화번호 정규표현식 체크
            const regex = /01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/
            if(!this.checkRegEx(this.modifyObject_phone.value, regex)){
                this.setInvalidStatusAndMessage(this.modifyObject_phone, '올바른 휴대전화 번호가 아닙니다.')
                return;
            }else{
                this.setValidStatusAndMessage(this.modifyObject_phone);
                this.phone_auth.flag = true
                this.phone_auth.totalCountDown = 180;
            }
        },
        //전화번호 변경
        async handleSubmit_phone(){
            // (2) 인증번호 체크 (실제 인증 추후 구현, 임시 코드 "123" )
            this.phone_auth.authCode = '123'
            if(!this.phone_auth.inputCode){                                     //입력하지 않은 경우
                this.setInvalidStatusAndMessage(this.modifyObject_phone, '인증번호를 입력해주세요.')
                return
            }else if( this.phone_auth.inputCode != this.phone_auth.authCode){   //인증번호가 일치하지 않은 경우
                this.setInvalidStatusAndMessage(this.modifyObject_phone, '인증번호가 일치하지 않습니다.')
                return
            }else{
                 this.setValidStatusAndMessage(this.modifyObject_phone);
            }
            // (3) 변경 요청전 최종 확인 - 타임아웃, isValid
            if(this.phoneNumB_auth.timeout <= 0 ){                              //인증시간 만료
                this.setInvalidStatusAndMessage(this.modifyObject_phone, '인증 시간이 만료되었습니다.')
                return
            }else if(!this.modifyObject_phone.isValid){
                this.setInvalidStatusAndMessage(this.modifyObject_phone, '본인인증에 실패하였습니다.')
                return
            }
            // (3) 전화번호 변경 요청
            await instance({
                url: 'http://localhost:2030/users',
                method: 'put',
                data:{
                    phoneNum : this.modifyObject_phone.value
                }
            }).then((response)=>{
                if(response.data.success == true){
                    // 창 닫기
                    this.$nextTick(()=>{ this.$bvModal.hide('modal_phone') })
                    // 새 전화번호로 값 변경 
                    this.phoneNum = this.modifyObject_phone.value;
                    // 모달 인증 초기화
                    this.resetModal_phone();
                }
            }).catch((error)=>{
                 console.log(error)
            });
        },


        // 유효하지않은 상태, 에러 메시지 삽입 메서드
        setInvalidStatusAndMessage(object, message){
           object.errorMessage = message
           object.hasError = true
           object.isValid = false
        },
        // 유효한 상태, 에러 메시지 제거 메서드
        setValidStatusAndMessage(object){
           object.hasError = false
           object.isValid = true
           object.errorMessage = ""
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
    .btn_auth_div {
        margin-left: 0.30rem;
        z-index: 10;
       
    }
    .btn_auth{
        background-color: #ffffff;
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 6px;
        width: 100%;
        height: 2.4rem;
        font-size:0.71rem;
    }
  
</style>