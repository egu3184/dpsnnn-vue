<template>
    <div class="login_constructor">
        <transition name="slide-fade" mode="out-in" v-if="showHeaderBox">
        <div class="pop_box" :style="pop_box">
                <b-icon  :icon=pop_box.icon></b-icon>&nbsp;&nbsp;
                <span>{{pop_box.message}}</span>
        </div>
        </transition>       
        <div class="login_container">
            <div class="login_title">
                로그인
            </div>
            <div style="flex-direction: column; display:flex; align-items: center; justify-content: center;">
                <form>
                <div>
                    <b-form-group class="label" label="이메일" label-for="name-input">
                        <b-input-group class="mb-2">
                            <b-input-group-prepend is-text>
                                <b-icon icon="envelope-fill" class="b_icon"></b-icon>
                            </b-input-group-prepend>
                            <b-form-input maxlength="35" type="text" v-model="email_id" @blur="idBlur" class="input" placeholder="me@exaple.com"></b-form-input>
                        </b-input-group>
                    </b-form-group>
                </div>
                <div>
                    <b-form-group label="비밀번호" maxlength="20" class="label" label-for="name-input">
                        <b-input-group class="mb-2">
                            <b-input-group-prepend is-text>
                                <b-icon icon="lock-fill" class="b_icon"></b-icon>
                            </b-input-group-prepend>
                            <b-form-input v-model="pw" type="password" class="input" placeholder="Enter your password" ></b-form-input>
                        </b-input-group>
                    </b-form-group>
                </div>
                </form>
            </div>
            <div>      
                <div style="display:flex; justify-content: center; ">
                    <b-button class="mt-3 button" variant="primary" block @click="login">Login</b-button>
                </div>
                <div class="sign"> 
                    <div>
                        <router-link to="/signup" style="text-decoration: none;">회원가입</router-link>
                            / 
                         <router-link to="/" style="text-decoration: none;">아이디·비밀번호 찾기</router-link>
                    </div>
                </div> 
                <div class="orElse" style="margin:2rem 0rem; font-size: 1.3rem;">
                    다른 서비스로 로그인
                </div>
                <div class="socialIconLine" style="width:100%">
                    <GoogleLogin class="google-login-button socialIcon" :params="googleParams" 
                             b :onSuccess="googleLoginSuccess" :onFailure="googleLoginFailure">
                        <a ><img src="@/assets/Icon_google.jpg" class="icon_image"  /></a>
                    </GoogleLogin>
                    <div @click="getNaverAuthorizeUrl" class="socialIcon">
                        <a href="#"><img src="@/assets/Icon_naver.png"  class="icon_image"/></a>
                    </div>
                    <div @click="kakaoLogin" class="socialIcon"> 
                        <a href="#"><img src="@/assets/Icon_kakao.jpg"  class="icon_image"/></a>
                    </div>
                    <div id="buttonDiv"></div> 
                </div>
            
            </div>
        </div>
</div>    

</template>

<script>

import {GoogleLogin} from 'vue-google-login'


//카카오 초기화
  window.Kakao.init('e32167f2d82055442aa0c2ae73c4a2ac');
  window.Kakao.isInitialized();

  //네이버 초기화
  var naverLogin = new naver.LoginWithNaverId({
      clientId: "9xuPd3w4pIMmt7B0I3nM",
      callbackUrl: process.env.VUE_APP_PUBLIC_URL+"/login",
      isPopup: true,
    //   loginButton: {color:"green", type: 3, height: 60}
  });
  naverLogin.init();

export default {
  components:{
    GoogleLogin
  },
  data(){
    return {
      //스크롤 관련
      scrollPosition : 0,
      hideHeader : false,
      headerStatus: false,
      headerColor:{
        backgroundColor: ''
      },
      ChangeloginIconSrc: false,
      //로그인 관련
      email_id: '',
      pw: '',
      isLogin : '',
      googleParams:{
          client_id: "829453067412-qi7uk2f6rd408agq4dtrl92v0qqamkic.apps.googleusercontent.com"
      },
      //팝업 박스 관련
      showHeaderBox: false,
      pop_box:{
        "icon": "",
        "border": "",
        "background-color":"",
         message: "",
      }


    }
  },
  mounted(){
    //네이버 로그인시 현재 url 체크
    this.searchUrlParams();
    //회원가입 직후 가입 완료 메시지 보이기
    if(this.$store.state.CompleteSignup == true){
        this.showHeaderBox = true
        this.setPopbox_completeSignup();
    }    
  },
  destroyed() {
    //스크롤 이벤트 리스너 제거
    document.removeEventListener('scroll', this.scrollEvents);

    //vuex 가입 완료 state값 초기화
    this.$store.commit("setCompleteSignup", false);
  },

  methods:{
    //구글 로그인 성공 메서드
    googleLoginSuccess(googleUser){
        this.$axios({
            url:"users/"+"google",
            method:"post",
            data:{
                accessToken : googleUser.xc.id_token
            }
        }).then((response)=>{
            if(response.data.data.accessToken){
                this.saveTokenAndSetLoginStatus(response.data.data.accessToken,response.data.data.refreshToken)
                // this.$router.push('/') 새로고침이 필요함
                location.href = "/";
            }
        }).catch((error)=>{
            console.log(error)
        });
    },
    //구글 로그인 실패 메서드
    googleLoginFailure(){
        this.setPopbox_error("구글 로그인이 실패하였습니다.")
    },
    //네이버 인가 코드 요청 url  
    getNaverAuthorizeUrl(){
        // window.open(url, "windowPopup","width=400, height=600,left=400, top=400, resizable = yes");
        location.href = naverLogin.generateAuthorizeUrl();
    },
    //네이버 - 현재 페이지 url의 엑세스 토큰 가져오기
    searchUrlParams(){
         // 1. 현재 주소 불러오기.
        const currentUrl = window.location;
         // 2. 해시가 있는지 확인.
        if(currentUrl.hash){
             // 3. 있으면 #을 ?로 바꿔주고 URLSearchParam 객체화 후 엑세스 토큰 가져오기 -> 액세스 토큰 vuex에 저장
             // #access_token="" & token_type=bearer & expires_in=3600
            const currentUrlParams = "?"+currentUrl.hash.substring(1);
            const naverAccessToken = new URLSearchParams(currentUrlParams).get('access_token');
            sessionStorage.setItem("SocialAccessToken", naverAccessToken);
            // 4. 네이버 로그인 메서도 호출
            this.naverLogin(naverAccessToken);
        }
          // 4. 없으면 그냥 메소드 지나가기.
    },
    //네이버 로그인 후 Jwt 토큰 받아오기
    async naverLogin(accessToken){
        this.$axios({
            url: "users/"+"naver",
            method: "post",
            data: {
                "accessToken": accessToken
            }
        }).then((response)=>{
            console.log(response)
            if(response.data.success == false && response.data.code == 1101){
                    this.setPopbox_error("탈퇴한 계정입니다. 다른 서비스로 가입해주시기 바랍니다.")
                    return
             }
            this.saveTokenAndSetLoginStatus(response.data.data.accessToken,response.data.data.refreshToken)
            // this.$router.push('/') 새로고침이 필요함
            location.href = "/";
        }).catch((error)=>{
              this.setPopbox_error("네이버 로그인이 실패하였습니다.")
        });
    },
    //카카오 로그인 후 Jwt 토큰 받아오기
    async kakaoLogin(){
        Kakao.Auth.login({
            success:(response)=> {
                this.$axios({
                    url: "users/"+"kakao",
                    method: "post",
                    data: {
                        "accessToken": response.access_token
                    }
                }).then((resp)=>{
                    if(resp.data.success == false && resp.data.code == 1101){
                        this.setPopbox_error("탈퇴한 계정입니다. 다른 서비스로 가입해주시기 바랍니다.")
                        return
                    }
                    sessionStorage.setItem("SocialAccessToken", response.access_token);
                    if(resp.data.data.accessToken){
                        this.saveTokenAndSetLoginStatus(resp.data.data.accessToken,resp.data.data.refreshToken)
                        //this.$router.push('/') 새로고침이 필요함
                        location.href = "/";
                  }
                })
            },
            fail:(error)=>{
                  this.setPopbox_error("카카오 로그인이 실패하였습니다.")
            }
        })
    },
    //일반 로그인
    async login(){
        if(!this.checkEmailRegex(this.email_id)){
             this.setPopbox_error("올바른 이메일 형식이 아닙니다.")
            return;
        }
        if(!this.checkEmptyValue(this.pw)){
             this.setPopbox_error("비밀번호를 입력해주세요.")
            return;
        }    

        await this.$axios({
          url: "login",
          method: "post",
          data:{
            userId: this.email_id,
            password: this.pw
          }
        }).then((response)=>{
            console.log(response)
          const {success, code, message} = response.data;
          if(success == true){
              //로그인 성공
               this.saveTokenAndSetLoginStatus(response.data.data.accessToken,response.data.data.refreshToken)
               this.$router.push({path: "/"}).catch(()=>{})
          }else{
              //로그인 실패
              this.setPopbox_error(message);
          }

        }).catch((error)=>{
            console.log(error)
            this.setPopbox_error("로그인에 실패하였습니다.")
        });
      
    },
    //AccessToken, RefreshToken sessionStorage에 저장 && 로그인 상태값 true
    saveTokenAndSetLoginStatus(accessToken, refreshToken){
        sessionStorage.setItem("AccessToken", accessToken);
        sessionStorage.setItem("RefreshToken", refreshToken);
        this.$store.commit("setIsLogin", true);
        this.isLogin = true;
    },
    //일반 로그인시 패스워드 빈값 체크
    checkEmptyValue(item){
      if(!item){
        return false
      }else{
        return true
      }
    },
    //일바 로그인시 이메일 정규표현식 체크
    checkEmailRegex(item){
      const regex = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
      if(!regex.test(item)){
        return false
      }else{
        return true
      }
    },
    //setPopBox
    setPopbox_completeSignup(){
        this.pop_box =  { 
            "icon": "check-circle-fill",
            "border": "0.13rem solid #7dc38d",
            "background-color": "#7dc38d",
            message: "회원가입이 완료되었습니다!"
        }
        this.showHeaderBox = true
    },
    setPopbox_error(message){
        this.showHeaderBox = false
        this.pop_box = {
            "icon":"exclamation-triangle-fill",
            "border": "0.13rem solid #F55151",
            "background-color": "#F55151",
            message: message
        }
        this.showHeaderBox = true
    },
    idBlur(){
        if(!this.checkEmailRegex(this.email_id)){
             this.setPopbox_error("올바른 이메일 형식이 아닙니다.")
            return;
        }else{
            this.showHeaderBox = false;
        }
    }



  }
};
</script>
</script>
<style scoped>
    .pop_box{
        width: 60%;
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        margin-bottom: 0.9rem;
        color:  white;
        box-shadow:  10px 10px 20px rgba(0, 0, 0, 0.1);
        font-size: 1.55rem; 
        text-align: center;
    }
  
    .login_constructor{
         padding-top: 6.5rem; 
         padding-bottom: 2.5rem;
         /* background-color: #f8f9fa;  */
         display:flex; 
         align-items: center; 
         justify-content: center; 
         flex-direction: column; 
    }

    .login_container{
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        /* width: 60%; */
        /* border: 0.13rem solid rgb(182, 175, 175); */
        background-color: white;
        padding: 6.5rem 4.5rem;
        padding-bottom: 2.5rem;
        border-radius: 1rem;
    }
    .sign{
       display:flex; 
       justify-content: center; 
       margin:2rem 0rem; 
       width:100%; 
       font-size: 1.3rem;
    }
    .button{
        height: 4.8rem; 
        font-size:1.8rem; 
        font-weight:bold; 
        width: 39rem; 
        margin:2rem 0rem !important;
    }
    .socialIconLine{
        display: flex;
        flex-direction: row;
        height: 4rem;
        align-items: center;
        justify-content: center;
    }
    .socialIcon{
        margin: 0rem 0.8rem;
        width: 3.5rem;
        border:0; padding: 0; 
        margin: 0rem 2rem;
    }
    .icon_image{
        height: 4.25rem; width: 4.25rem;
    }
    .orElse {
        display: flex;
        flex-basis: 100%;
        align-items: center;
        color: rgba(107, 102, 102, 0.767);
        font-size: 12px;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }
    .orElse::before,
    .orElse::after {
        content: "";
        flex-grow: 1;
        background: rgba(163, 161, 161, 0.719);
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        margin: 0px 16px;
    }
    .label{
        font-size: 1.8rem; width: 39rem; font-weight:bold;
    }
    .b_icon{
        width: 2rem; height: 2rem; margin: 0 0.65rem;
    }
    .input{
        height: 4.5rem; font-size: 2rem; width: 10rem !important;
    }

    .slide-fade-enter-active {
        transition: all .5s ease !important;
    }
    .slide-fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateY(10px);
    opacity: 0;
    }
    .login_title{
        width: 100%;
        height: 7rem;
        font-size: 2.5rem;
        font-weight: bold;
        padding: 0 7rem;
    }
    .social_bar{
        height: 3rem; 
        width: 15nrem; 
        
    }




    @media (max-width: 798px) {
        .login_container{
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
        .button{
            height: 3rem; 
            font-size:1.2rem; 
        }
        .sign{
            font-size: 1rem;
        }
        .icon_image{
            width: 3.5rem;
            height: 3.5rem;
        }
        .socialIcon{
            margin: 1rem;
        }
        
    }
</style>