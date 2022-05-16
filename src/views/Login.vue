<template>
    <div class="login_constructor">
        <div class="login_container">
            <div style="flex-direction: column; display:flex; align-items: center; justify-content: center;">
                <form>
                <div>
                    <b-form-group label="아이디"  style="font-size: 1.8rem; width: 39rem; font-weight:bold;" label-for="name-input">
                        <b-input-group class="mb-2">
                            <b-input-group-prepend is-text>
                                <b-icon icon="person-fill"></b-icon>
                            </b-input-group-prepend>
                            <b-form-input type="text" v-model="id" style="height: 4.5rem; font-size: 2rem;" placeholder="me@exaple.com"></b-form-input>
                        </b-input-group>
                    </b-form-group>
                </div>
                <div>
                    <b-form-group label="비밀번호" style="font-size: 1.8rem; width: 39rem; font-weight:bold;" label-for="name-input">
                        <b-input-group class="mb-2">
                            <b-input-group-prepend is-text>
                                <b-icon icon="lock-fill"></b-icon>
                            </b-input-group-prepend>
                            <b-form-input type="password" v-model="pw" style="height: 4.5rem; font-size: 2rem;" placeholder="Enter your password"></b-form-input>
                        </b-input-group>
                    </b-form-group>
                </div>
                </form>
            </div>
            <div>      
                <div style="display:flex; justify-content: center; ">
                    <b-button class="mt-3" variant="primary" block @click="login" style="height: 4.8rem; font-size:1.8rem; font-weight:bold; width: 39rem; margin:2rem 0rem !important;" >Login</b-button>
                </div>
                <div style="display:flex; justify-content: center; margin:2rem 0rem; width:100%; font-size: 1.3rem;"> 
                    <div>
                        <a hef="#" style=" olor: #007bff;">회원가입</a> / <a hef="#" style=" olor: #007bff;">아이디·비밀번호 찾기</a>
                    </div>
                </div> 
                <div class="orElse" style="margin:2rem 0rem; font-size: 1.3rem;">
                    다른 서비스로 로그인
                </div>
                <div class="socialIconLine" style="width:100%">
                    <GoogleLogin class="google-login-button socialIcon" :params="googleParams" 
                             b :onSuccess="googleLoginSuccess" :onFailure="googleLoginFailure" style="border:0; padding: 0; margin: 0rem 2rem;">
                        <a ><img src="@/assets/Icon_google.jpg" style="height: 4.5rem; width: 4.5rem;"  /></a>
                    </GoogleLogin>
                    <div @click="getNaverAuthorizeUrl" class="socialIcon"  style="margin: 0rem 2rem;">
                        <a href="#"><img src="@/assets/Icon_naver.png"  style="height: 4.25rem; width: 4.25rem;"  /></a>
                    </div>
                    <div @click="kakaoLogin" class="socialIcon"  style="margin: 0rem 2rem;"> 
                        <a href="#"><img src="@/assets/Icon_kakao.jpg"  style="height: 4.5rem; width: 4.5rem;"  /></a>
                    </div>
                    <div id="buttonDiv"></div> 
                </div>
            </div>
        </div>
</div>    

</template>

<script>
import axios from 'axios'
import instance from '@/axiosInterceptor.js'
import {GoogleLogin} from 'vue-google-login'

  //카카오 초기화
  window.Kakao.init('e32167f2d82055442aa0c2ae73c4a2ac');
  window.Kakao.isInitialized();

  //네이버 초기화
  var naverLogin = new naver.LoginWithNaverId({
      clientId: "9xuPd3w4pIMmt7B0I3nM",
      callbackUrl: "http://localhost:8081/login",
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
      id: '',
      pw: '',
      isLogin : '',
      googleParams:{
          client_id: "829453067412-qi7uk2f6rd408agq4dtrl92v0qqamkic.apps.googleusercontent.com"
      },
    }
  },
  mounted(){
    //네이버 로그인시 현재 url 체크
    this.searchUrlParams();
    //회원가입 직후 가입 완료 메시지 보이기
    if(this.$store.state.CompleteSignup == true){

    }    
  },
  unmounted() {
    //스크롤 이벤트 리스너 제거
    document.removeEventListener('scroll', this.scrollEvents);
  },
  methods:{
    //구글 로그인 성공 메서드
    googleLoginSuccess(googleUser){
        console.log(googleUser)
        axios({
            url:"http://localhost:2030/social/login/"+"google",
            method:"post",
            data:{
                accessToken : googleUser.xc.id_token
            }
        }).then((response)=>{
            if(!!response.data.data.accessToken){
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
        this.$store.commit("alert_Error", "로그인이 실패하였습니다.");
    },
    //네이버 인가 코드 요청 url  
    getNaverAuthorizeUrl(){
        // window.open(url, "windowPopup","width=400, height=600,left=400, top=400, resizable = yes");
        location.href = naverLogin.generateAuthorizeUrl();
    },
    //현재 페이지 url의 엑세스 토큰 가져오기
    searchUrlParams(){
         // 1. 현재 주소 불러오기.
        const currentUrl = window.location;
         // 2. 해시가 있는지 확인.
        if(!!currentUrl.hash){
             // 3. 있으면 #을 ?로 바꿔주고 URLSearchParam 객체화 후 엑세스 토큰 찾기.
             // #access_token="" & token_type=bearer & expires_in=3600
            const currentUrlParams = "?"+currentUrl.hash.substring(1);
            const params = new URLSearchParams(currentUrlParams);
            // 4. 네이버 로그인 메서도 호출
            this.naverLogin(params.get('access_token'));
        }
          // 4. 없으면 그냥 메소드 지나가기.
    },
    //네이버 로그인 후 Jwt 토큰 받아오기
    async naverLogin(accessToken){
        axios({
            url: "http://localhost:2030/social/login/"+"naver",
            method: "post",
            data: {
                "accessToken": accessToken
            }
        }).then((response)=>{
            console.log(response)
            if(!!response.data.data.accessToken){
                this.saveTokenAndSetLoginStatus(response.data.data.accessToken,response.data.data.refreshToken)
                // this.$router.push('/') 새로고침이 필요함
                location.href = "/";
            }
        }).catch((error)=>{
             this.$store.commit("alert_Error", "로그인이 실패하였습니다.");
        });
    },
    //카카오 로그인 후 Jwt 토큰 받아오기
    async kakaoLogin(){
        Kakao.Auth.login({
            success:(response)=> {
                axios({
                    url: "http://localhost:2030/social/login/"+"kakao",
                    method: "post",
                    data: {
                        "accessToken": response.access_token
                    }
                }).then((resp)=>{
                   if(!!resp.data.data.accessToken){
                        this.saveTokenAndSetLoginStatus(resp.data.data.accessToken,resp.data.data.refreshToken)
                        //this.$router.push('/') 새로고침이 필요함
                        location.href = "/";
                  }
                }).catch((err)=>{
                     this.$store.commit("alert_Error", "로그인이 실패하였습니다.");
                });
            },
            fail:(error)=>{
                 this.$store.commit("alert_Error", "로그인이 실패하였습니다.");
            }
        })
    },
    //로그아웃 : 로그인 상태 false & SessionStrage 비우기 
    logout(){
      this.$store.commit("setIsLogin", false);
      this.isLogin = false;
      sessionStorage.clear("AccessToken");
      sessionStorage.clear("RefreshToken");
    },
    //일반 로그인
    async login(){
      if(!!this.checkEmptyValueAndVerifyRegex(this.id
              ,/^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
              ,"아이디를 입력하지 않았거나 이메일 형식이 아닙니다.")
        &&!!this.checkEmptyValue(this.pw, "비밀번호를 입력해주세요.")){

        await instance({
          url: "http://localhost:2030/login",
          method: "post",
          data:{
            userId: this.id,
            password: this.pw
          }
        }).then((response)=>{
          const {success} = response.data;
          if(success === true){
            //토큰 저장 && 로그인 상태 on
            this.saveTokenAndSetLoginStatus(response.data.data.accessToken,response.data.data.refreshToken)
            window.location.reload()
          }else{
            this.$store.commit("alert_Warning", "계정이 존재하지 않거나"+"\u00A0" +"이메일 또는 비밀번호가 정확하지 않습니다.");
          }
        }).catch((error)=>{
          this.$store.commit("alert_Error", "로그인이 실패하였습니다.");
        });
      }
    },
    //AccessToken, RefreshToken sessionStorage에 저장 && 로그인 상태값 true
    saveTokenAndSetLoginStatus(accessToken, refreshToken){
        sessionStorage.setItem("AccessToken", accessToken);
        sessionStorage.setItem("RefreshToken", refreshToken);
        this.$store.commit("setIsLogin", true);
        this.isLogin = true;
    },
    //일반 로그인시 빈값 체크
    checkEmptyValue(item, message){
      if(!item){
        return this.$store.commit("alert_Warning", message)
      }else{
        return true
      }
    },
    //일바 로그인시 정규표현식 체크
    checkEmptyValueAndVerifyRegex(item, regex ,message){
      this.checkEmptyValue(item, message);
      if(!regex.test(item)){
        return this.$store.commit("alert_Warning", message)
      }else{
        return true
      }
    },




  }
};
</script>
</script>
<style scoped>
    .login_constructor{
         padding-top: 6.5rem; 
         padding-bottom: 2.5rem;
         background-color: #f8f9fa; 
         display:flex; 
         align-items: center; 
         justify-content: center; 
         flex-direction: column; 
    }

    .login_container{
        width: 80%;
        border: 0.13rem solid rgb(182, 175, 175);
        background-color: white;
        padding: 6.5rem 4.5rem;
        padding-bottom: 2.5rem;
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
</style>