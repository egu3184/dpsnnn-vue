<template>
    <div class="login_constructor">
        <div class="login_container">
            <div style="flex-direction: column; display:flex; align-items: center; justify-content: center;">
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
                            <b-form-input type="password"  v-model="pw" style="height: 4.5rem; font-size: 2rem;" placeholder="Enter your password"></b-form-input>
                        </b-input-group>
                    </b-form-group>
                </div>
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
                    <div class="socialIcon" style="margin: 0rem 2rem;">
                        <a ><img src="@/assets/Icon_google.jpg" style="height: 4.5rem; width: 4.5rem;"  /></a>
                    </div>
                    <div class="socialIcon"  style="margin: 0rem 2rem;">
                        <a href="#"><img src="@/assets/Icon_naver.png"  style="height: 4.25rem; width: 4.25rem;"  /></a>
                    </div>
                    <div @click="kakaoLogin" class="socialIcon"  style="margin: 0rem 2rem;"> 
                        <a href="#"><img src="@/assets/Icon_kakao.jpg"  style="height: 4.5rem; width: 4.5rem;"  /></a>
                    </div>
                </div>   
                <!-- <b-button class="mt-3" variant="outline-secondary" block @click="hideModal">Close Me</b-button> -->
        
            </div>
        </div>
</div>    
</template>
<script>
import Login from "@/views/Login.vue"
import axios from 'axios'
import instance from '@/axiosInterceptor.js'

  //카카오 초기화
  window.Kakao.init('e32167f2d82055442aa0c2ae73c4a2ac');
  window.Kakao.isInitialized();

export default {
  components:{
    Login
  },
  data(){

    return {
      scrollPosition : 0,
      hideHeader : false,
      headerStatus: false,
      headerColor:{
        backgroundColor: ''
      },
      ChangeloginIconSrc: false,

      id: '',
      pw: '',
      token: '',
      loginObj: '',
      modalShow: false,

      isLogin : '',
  
    }
  },
  mounted(){
    this.getLoginStatus();
  },
  unmounted() {
    document.removeEventListener('scroll', this.scrollEvents);
  },


  methods:{
    async kakaoLogin(){
        // Kakao.Auth.authorize({
        //     redirectUri: 'http://localhost:2030/social/login/kakao'
        // }).then((response)=>{
        //     console.log(response);
        // });
        Kakao.Auth.login({
            success:(response)=> {
                console.log(response.access_token) //access_token
                axios({
                    url: "http://localhost:2030/social/login/"+"kakao",
                    method: "post",
                    data: {
                        "accessToken": response.access_token
                    }
                }).then((resp)=>{
                    this.saveTokenAndSetLoginStatus(resp.data.data.accessToken,resp.data.data.refreshToken)
                    window.location.reload()

                }).catch((err)=>{
                    console.log(err)
                });
            },
            fail:(error)=>{
                console.log(error)
            }

        })

    //   await axios({
    //     url: "http://localhost:2030/login/"+"kakao"+"/url",
    //     method: "get",

    //   }).then((response)=>{
    //     console.log(response)
    //     // window.open(response.data, 'windowPop', 'width=400, height=600, left=400, top=400, resizable = yes')
    //     // this.popSocialLogin(response.data)
    //     // window.location.href = response.data;

    //     //https://kauth.kakao.com/oauth/authorize?client_id=4db77100f45f0101700b0c73cfa462ae&response_type=code&redirect_uri=http://localhost:2030/social/login/kakao
    //     console.log(response.data)
    //     axios({
    //         url: "https://kauth.kakao.com/oauth/authorize",
    //         method: "get",
    //         params:{
    //             "client_id": "4db77100f45f0101700b0c73cfa462ae",
    //             "response_type": "code",
    //             "redirect_uri":"http://localhost:2030/social/login/kakao"
    //         }
    //     }).then((response)=>{
    //         console.log(response)
    //     });
    //   }).catch((error)=>{

    //   });
      
    },
    popSocialLogin : function(loginUrl){
      window.open(loginUrl, 'windowPop', 'width=400, height=600, left=400, top=400, resizable = yes')
      window.close();
    },
     

    logout(){
      //로그인 상태 false & SessionStrage 비우기 
      this.$store.commit("setIsLogin", false);
      this.isLogin = false;
      sessionStorage.clear("AccessToken");
      sessionStorage.clear("RefreshToken");
    },
    getLoginStatus(){
      console.log(this.$store.state.isLogin)
      if(this.$store.state.isLogin){
          this.$store.commit("alert_Warning", "이미 로그인하셨습니다!")
        //   window.location.href="/"
      }
      this.isLogin = this.$store.state.isLogin
      console.log(this.isLogin)
    },
    
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
          console.log(response)
          const {success} = response.data;
          if(success === true){
            //토큰 저장 && 로그인 상태값 true
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
    saveTokenAndSetLoginStatus(accessToken, refreshToken){
        //토큰 저장
        sessionStorage.setItem("AccessToken", accessToken);
        sessionStorage.setItem("RefreshToken", refreshToken);
        //로그인 상태값 true
        this.$store.commit("setIsLogin", true);
        this.isLogin = true;
    },
    checkEmptyValue(item, message){
      if(!item){
        return this.$store.commit("alert_Warning", message)
      }else{
        return true
      }
    },
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