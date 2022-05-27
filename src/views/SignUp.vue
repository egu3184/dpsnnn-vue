<template>
    <div class="signup_constructor">
        <div class="signup_container">
             <div style="flex-direction: column; display:flex; align-items: center; justify-content: center;">
                  <form>
                    <div>
                        <b-form-group class="label" label="이메일" label-for="name-input">
                            <b-input-group class="mb-2">
                                <b-input-group-prepend is-text>
                                    <b-icon icon="envelope-fill" class="b_icon"></b-icon>
                                </b-input-group-prepend>
                                <b-form-input @blur="emailBlur" maxlength="35" type="text" v-model="email_id.value" class="input" :state="email_id.isValid"></b-form-input>
                            </b-input-group>
                        </b-form-group>
                        <p class="errorMessage" v-if="email_id.hasError">{{email_id.errorMessage}}</p>
                        <p class="errorMessage" v-if="!email_id.hasError">&nbsp;</p>
                        <b-form-group label="비밀번호" maxlength="20" class="label" label-for="name-input">
                            <b-input-group class="mb-2">
                                <b-input-group-prepend is-text>
                                    <b-icon icon="lock-fill" class="b_icon"></b-icon>
                                </b-input-group-prepend>
                                <b-form-input @blur="passwordBlur" type="password" v-model="pw.value" class="input" :state="pw.isValid"></b-form-input>
                            </b-input-group>
                        </b-form-group>
                        <p class="errorMessage" v-if="pw.hasError">{{pw.errorMessage}}</p>
                        <p class="errorMessage" v-if="!pw.hasError">&nbsp;</p>
                         <b-form-group label="비밀번호 확인" maxlength="20" class="label" label-for="name-input">
                            <b-input-group class="mb-2">
                                <b-input-group-prepend is-text>
                                    <b-icon icon="lock-fill" class="b_icon"></b-icon>
                                </b-input-group-prepend>
                                <b-form-input type="password" @blur="cPasswordBlur" :state="cpw.isValid" v-model="cpw.value" class="input" ></b-form-input>
                            </b-input-group>
                        </b-form-group>
                        <p class="errorMessage" v-if="cpw.hasError">{{cpw.errorMessage}}</p>
                        <p class="errorMessage" v-if="!cpw.hasError">&nbsp;</p>
                        <b-form-group label="닉네임"  class="label" label-for="name-input">
                            <b-input-group class="mb-2">
                                <b-input-group-prepend is-text>
                                    <b-icon icon="person-fill" class="b_icon"></b-icon>
                                </b-input-group-prepend>
                                <b-form-input type="text" maxlength="15" @blur="nicknameBlur" v-model="nickname.value" class="input" :state="nickname.isValid" ></b-form-input>
                            </b-input-group>
                        </b-form-group>
                        <p class="errorMessage" v-if="nickname.hasError">{{nickname.errorMessage}}</p>
                        <p class="errorMessage" v-if="!nickname.hasError">&nbsp;</p>
                        <b-form-group label="전화번호"  class="label" label-for="name-input">
                            <b-input-group class="mb-2">
                                <b-input-group-prepend is-text>
                                    <b-icon icon="telephone-fill" class="b_icon"></b-icon>
                                </b-input-group-prepend>
                                <b-form-input max=13 type="tel" maxlength="13" :disabled="phoneNum.isValid == true" v-model="phoneNum.value" class="input" :state="phoneNum.isValid">
                                </b-form-input>
                                <div class="btn_auth_div">
                                    <button class="btn_auth" v-if="phoneNum.isValid != true" @click="phoneNumB_auth" type="button">본인인증</button>
                                 </div>
                            </b-input-group>
                            
                        </b-form-group>
                        <p class="errorMessage" v-if="phoneNum.hasError">{{phoneNum.errorMessage}}</p>
                        <p class="errorMessage" v-if="!phoneNum.hasError">&nbsp;</p>
                    </div>
                    <div>
                        <button type="button" @click="privacy_agree" class="agree_button">
                            <div style="width:4rem; height: 4rem; display:flex; align-items: center; justify-content: center;">
                                <b-icon icon="check-circle" v-if="privacy_agreement_status == false" style="width: 2.5rem; height: 2.5rem;"></b-icon>
                                <b-icon icon="check-circle-fill" :class="{agree_activated : privacy_agreement_status == true}" v-if="privacy_agreement_status == true" style="width: 2.5rem; height: 2.5rem;"></b-icon>
                            </div>
                            <div :class="{agree_activated : privacy_agreement_status == true}">
                            &nbsp;개인정보 수집 및 활용에 대한 동의 (필수)
                            </div>
                        </button>
                    </div>
                    <div>
                        <button type="button" @click="pr_agree" class="agree_button">
                            <div style="width:4rem; height: 4rem; display:flex; align-items: center; justify-content: center;">
                                <b-icon icon="check-circle" v-if="pr_agreement_status == false" style="width: 2.5rem; height: 2.5rem;"></b-icon>
                                <b-icon icon="check-circle-fill" :class="{agree_activated : pr_agreement_status == true}" v-if="pr_agreement_status == true" style="width: 2.5rem; height: 2.5rem;"></b-icon>
                            </div>
                            <div :class="{agree_activated : pr_agreement_status == true}">
                            &nbsp; 광고 · 뉴스레터에 대한 수신 동의 (선택)
                            </div>
                        </button>
                    </div>
                     <div style="display:flex; justify-content: center; ">
                        <b-button class="mt-3 signup_button" v-if="email_id.isValid == true && pw.isValid == true && cpw.isValid == true && nickname.isValid == true && phoneNum.isValid == true && privacy_agreement_status == true" variant="primary" block @click="signup">SignUp</b-button>
                        <button type="button" v-if="email_id.isValid != true || pw.isValid != true || cpw.isValid != true || nickname.isValid != true || phoneNum.isValid != true || privacy_agreement_status != true" disabled class="signup_button disable_button" >SignUp</button>
                    </div>
                </form>
             </div>
        </div>
    </div>
</template>
<script>

import axios from 'axios'
export default {
    

    components: {},
    data() {
        return {
            pr_agreement_status: false,
            privacy_agreement_status: false,
            email_id:{
                value: '',
                hasError: false,
                errorMessage: '',
                isValid: null
            },
            pw:{
                value: '',
                hasError: false,
                errorMessage: '',
                isValid: null
            },
            cpw:{
                value: '',
                hasError: false,
                errorMessage: '',
                isValid: null
            },
            nickname:{
                value: '',
                hasError: false,
                errorMessage: '',
                isValid: null,
            },
            phoneNum:{
                value: '',
                hasError: false,
                errorMessage: '',
                isValid: null,
            }
            
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        //광고 수신 동의 체크
        pr_agree(){
            if(this.pr_agreement_status){
                this.pr_agreement_status = false
            }else{
                this.pr_agreement_status = true
            }
        },
        //개인정보 이용 동의 체크
        privacy_agree(){
             if(this.privacy_agreement_status){
                this.privacy_agreement_status = false
            }else{
                this.privacy_agreement_status = true
            }
        },
        //이메일 아이디 Blur시
        emailBlur(){
            // (1) 정규표현식 체크
            if(!this.checkRegEx(this.email_id.value, /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i)){
                    //이메일 형식이 아닐 때
                    this.setInvalidStatusAndMessage(this.email_id, "이메일 형식이 아닙니다.")
                    return;
                }
            // (2) 서버에 중복 체크 요청
            axios({
                url: 'http://localhost:2030/users',
                method: 'get',
                params:{
                    userId : this.email_id.value
                }
            }).then((response)=>{
                if(response.data.success == false){         //이메일 아이디 중복(x)
                    this.setValidStatusAndMessage(this.email_id)
                }else if(response.data.success == true){    //이메일 아이디 중복(o)
                    this.setInvalidStatusAndMessage(this.email_id, "이미 등록된 이메일 입니다.")
                }
            }).catch((error)=>{
                console.log(error)
            });
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
       //비밀번호 blur시
       passwordBlur(){
            // (1) 8~20자의 영문, 특수문자, 숫자 조합만
            const regex1 =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
            if(!this.checkRegEx(this.pw.value, regex1)){
                this.setInvalidStatusAndMessage(this.pw, "8~20자의 영문, 특수문자, 숫자 조합만 가능합니다.")
                return
            }
            // (2) 같은 문자를 3번 이상 사용(x)
            const regex2 = /(\w)\1\1\1/
            if(this.checkRegEx(this.pw.value, regex2)){
                this.setInvalidStatusAndMessage(this.pw, "같은 문자를 3번 이상 사용할 수 없습니다.")
                return
            }
            // (3) 연속된 숫자 3개 사용(x)
            const regex3 = /(012)|(123)|(234)|(345)|(456)|(567)|(678)|(789)|(987)|(876)|(765)|(654)|(543)|(432)|(321)|(210)/
            if(this.checkRegEx(this.pw.value, regex3)){
                this.setInvalidStatusAndMessage(this.pw, "연속하는 숫자를 3번 이상 사용할 수 없습니다.")
                return
            } 
            // (4) 비밀번호에 아이디가 포함(x)
            if(!!this.email_id.value){
                let array = this.email_id.value.split('@');
                if(this.pw.value.search(array[0]) > -1){
                    this.setInvalidStatusAndMessage(this.pw, "비밀번호에 아이디가 포함할 수 없습니다.")
                    return;
                }
            }
            this.setValidStatusAndMessage(this.pw)
            
            //"비밀번호 확인" 일치 후에 다시 비밀번호를 재작성할 때
            if(this.pw.isValid == true){
                this.cPasswordBlur();
            }

       },
       // 비밀번호 확인 Blur시
       cPasswordBlur(){
           // 비밀번호가 valid이고 pw와 cpw가 같을 때
           if(this.pw.isValid == true && this.pw.value == this.cpw.value){
                this.setValidStatusAndMessage(this.cpw)
           }else{
                this.setInvalidStatusAndMessage(this.cpw, "비밀번호가 일치하지 않습니다.")
           }
       },
       //닉네임 Blur시
       nicknameBlur(){
           const regex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/
            //정규표현식 체크
            if(!this.checkRegEx(this.nickname.value, regex)){
                this.setInvalidStatusAndMessage(this.nickname, "2~15자의 영어 또는 숫자, 한글 조합만 가능합니다.");
            }else{
                //DB 조회 후 valid 처리
                axios({
                    url: "http://localhost:2030/users",
                    method: "get",
                    params:{
                        nickname : this.nickname.value
                    }
                }).then((response)=>{
                    if(response.data.success == false){     //닉네임 중복(x)
                        this.setValidStatusAndMessage(this.nickname)
                    }else{                                  //닉네임 중복(o)
                        this.setInvalidStatusAndMessage(this.nickname, "이미 등록된 닉네임입니다.")
                    }
                }).catch((error)=>{
                    console.log(error)
                });
            }  
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
       //전화번호 버튼 클릭시
       phoneNumB_auth(){
           //정규표현식 체크
           const regex = /01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/
           if(!this.checkRegEx(this.phoneNum.value, regex)){
               this.setInvalidStatusAndMessage(this.phoneNum, '올바른 휴대전화 번호가 아닙니다.')
               return;
           }
           //본인 인증 - 지금은 생략
            this.$store.commit('alert_Success', "인증되었습니다!", "회원가입을 계속하세요.")

           //DB 중복 조회
           axios({
                url: 'http://localhost:2030/users',
                method: 'get' ,
                params:{
                    phoneNum : this.phoneNum.value
                }
            }).then((response)=>{
                console.log(response)
                if(response.data.success == false){
                    this.setValidStatusAndMessage(this.phoneNum)
                }else{
                    this.setInvalidStatusAndMessage(this.phoneNum, '이미 등록된 전화번호 입니다.')
                }
            }).catch((error)=>{
                console.log(error)
           });
       },
       //가입 요청 보내기
       signup(){
            //모든 항목이 Valid인지 확인
            if(this.email_id.isValid && this.pw.isValid && this.cpw.isValid 
                        && this.nickname.isValid && this.phoneNum.isValid && this.privacy_agreement_status){
                //요청 전에 한번 더 값 체크하는 것이 좋을까? - 아니야 어차피 서버에서 한번 더 해야해
                axios({
                    url: 'http://localhost:2030/signup',
                    method: 'post',
                    data: {
                        userId : this.email_id.value,
                        password: this.pw.value,
                        nickname: this.nickname.value,
                        phoneNum: this.phoneNum.value,
                        privacyAgree: this.privacy_agreement_status,
                        prAgree: this.pr_agreement_status,
                    }
                }).then((response)=>{
                    console.log(response)
                    //정상적인 응답 확인 후 로그인 화면으로 
                    //(** 근데 정상적인 회원가입되었는지를 알려야하는데.. )
                    //vuex에 상태값 저장하고 로그인 페이지에서 값 확인 후 true일 때 가입 축하 메시지 보이게,
                    //그리고 페이지를 벗어날 때 값 초기화
                    if(response.data.success == true){
                        this.$store.commit("setCompleteSignup", true)
                        location.href = "/login";
                    }

                }).catch((error)=>{
                    console.log(error)
                });
            }
            

       }

       

    },
    watch:{
        // 전화번호 입력시 자동으로 하이픈 넣어주기 + 정규표현식 검사
        'phoneNum.value': function(value){
            //console.log(value)
            this.phoneNum.value = value
                                .replace(/[^0-9]/g, '')
                                .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g,"$1-$2-$3")
                                .replace(/(\-{1,2})$/g, "");
        },

    },
}
</script>
<style scoped>
    .signup_constructor{
        padding-top: 6.5rem; 
        padding-bottom: 2.5rem;
        background-color: #fdfdfe; 
        display:flex; 
        align-items: center; 
        justify-content: center; 
        flex-direction: column; 
    }
     .signup_container{
        width: 45%;
        border: 0.13rem solid rgb(182, 175, 175);
        background-color: white;
        padding: 6.5rem 4.5rem;
        padding-bottom: 2.5rem;
        border-radius: 1rem;
        box-shadow:  10px 10px 20px rgba(0, 0, 0, 0.1);
    }
    .input-group-text{
        background-color: #ffffff;
    }
    .label{
        font-size: 1.8rem; width: 39rem; font-weight:bold;
    }
    .b_icon{
        width: 2rem; height: 2rem; margin: 0 0.65rem;
    }
    .input{
        height: 4.5rem; font-size: 2rem;
    }
    .agree_button{
        display:flex; 
        flex-direction:row;  
        align-items: center; 
        justify-content: center;  
        background-color: white; 
        height: 4.5rem; 
        border: 1px solid #ced4da; 
        color: #a9acaf; 
        font-size: 1.55rem; 
        width: 39rem; 
        font-weight:bold; 
        margin: 1rem 0;
        text-decoration: none;
    }
    .agree_button:hover{
        background-color: #ffffff;
        color: #a9acaf;  
        border: 1px solid #ced4da; 
    }
    .agree_activated{
         color: #212529;
    }
    .signup_button{
        height: 4.8rem; font-size:1.8rem; font-weight:bold; width: 39rem; margin:2rem 0rem !important;
    }
    .disable_button{
        border: 1px solid transparent;
        color: #c3c7cc;
        background-color: #f0f0f0;;
        border-radius: 0.5rem;
    }
    .errorMessage{
        margin: 0;
        text-align: right;
        color: rgb(209, 32, 32);
        font-weight: 700;
    }
    .btn_auth{
        background-color: #ffffff;
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 32px;
        padding: 0 1rem;
        height:3rem; 
        font-size:1.2rem;
    }
    .btn_auth_div{
       right:0; 
       text-align: right; 
       position: absolute; 
       margin: 0.7rem; 
       z-index: 10;
    }

    @media (max-width: 798px) {
        .signup_container{
            width: 95%;
            padding: 3rem 1rem;
        }
        .label{
            width: 19rem;
            font-size: 1rem;
        }
        .pop_box{
            font-size: 1rem;
            width: 95%;
            height: 5rem;
        }
        .input{
            font-size: 1rem;
            height: 3rem;
        }
        .b_icon{
            width: 1.5rem;
        }
        .input-group-text{
             width: 3rem;
             padding: 0;
        }
        .agree_button{
            height: 3rem; 
            font-size:1rem; 
            width: 100%;
        }
        .sign{
            font-size: 1rem;
        }
        
        .signup_button{
            width: 100%;
            margin: 0;

        }
        form{
            width: 100%;
        }
        .input-group-prepend{
            width: 15%;
        }
        .errorMessage{
            font-size: 0.8rem;
        }
        .btn_auth{
            height: 2rem;
            font-size: 0.75rem;
            width: 5rem;
        }
        
    }
    
</style>