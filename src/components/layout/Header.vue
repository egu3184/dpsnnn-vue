<template>
  <header class="header" :style="headerColor" :class="{headerActive: hideHeader == true}"  style="z-index: 1" >
    <!-- :class="{headerActive : scrollPosition > 100}"> -->
        <div class="main" ><a href="/" :class="{headerActive_fontColor: headerStatus == true}">dpsnnn</a></div>
          <div>
          <ul class="menu">
            <li><a @click="test()" :class="{headerActive_fontColor: headerStatus == true}">단편선</a></li>
            <li><a href="/book" :class="{headerActive_fontColor: headerStatus == true}">예약하기</a></li>
            <li><a href="/box" :class="{headerActive_fontColor: headerStatus == true}">첫번째 이야기</a></li>
            <li><a href="/happy" :class="{headerActive_fontColor: headerStatus == true}">두번째 이야기</a></li>
            <li>
              <a >
                <img @click="getLoginModal" v-if="headerStatus == false && isLogin == false" src="@/assets/Icon_login_white.png" style="height:1.5rem; width:1.5rem;"/>
                <img @click="getLoginModal" v-if="headerStatus == true && isLogin == false" src="@/assets/Icon_login_black.png" style="height:1.5rem; width:1.5rem;"/>
                <!-- <img @click="logout"  v-if="headerStatus == false && isLogin == true" src="@/assets/Icon_logout_white.png" style="height:1.5rem; width:1.5rem;"/> -->
                <!-- <img @click="logout"  v-if="headerStatus == true && isLogin == true" src="@/assets/Icon_logout_black.png" style="height:1.5rem; width:1.5rem;"/> -->
                <!-- <div v-if="headerStatus == true && isLogin == true" style="position:fixed"> -->
                  
                  <b-dropdown v-if="isLogin == true" size="sm"  variant="link" toggle-class="text-decoration-none" no-caret dropup>
                    <template #button-content>
                       <img v-if="headerStatus == false && isLogin == true" src="@/assets/Icon_online_white.png" style="height:1.5rem; width:1.5rem;"/>
                      <img v-if="headerStatus == true && isLogin == true" src="@/assets/Icon_online_black.png" style="height:1.5rem; width:1.5rem;"/>
                    </template>
                    <b-dropdown-item @click="logout">로그아웃</b-dropdown-item>
                    <b-dropdown-item href="#">내 정보</b-dropdown-item>
                  </b-dropdown>
                <!-- </div> -->
              </a>
            </li>  
              
          </ul> 
        </div>
      <!-- </div> -->
      <b-modal id="login" v-model="modalShow" hide-footer @hidden="hidden" title="Login">
        <form autocomplete="off">
          <b-form-group label="Email" label-for="name-input" invalid-feedback="Id is required">
              <b-input-group class="mb-2">
                  <b-input-group-prepend is-text>
                      <b-icon icon="person-fill"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input type="text" v-model="id" placeholder="me@exaple.com"></b-form-input>
              </b-input-group>
          </b-form-group>
          <b-form-group label="Password" label-for="name-input" invalid-feedback="Password is required">
              <b-input-group class="mb-2">
                  <b-input-group-prepend is-text>
                      <b-icon icon="lock-fill"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input type="password" autocomplete="on" v-model="pw" placeholder="Enter Your Password"></b-form-input>
              </b-input-group>
          </b-form-group>
        </form>  
        <div style="display:flex; justify-content: right; font-size: 0.9rem;">
            <a hef="#">아이디·비밀번호 찾기</a>
        </div>   
        <div style="display:flex; justify-content: center; ">
        <b-button class="mt-3" variant="primary" block @click="login" style="height: 3.2rem; width: 20rem;" >Login</b-button>
        </div>
        <div style="display:flex; justify-content: center; margin:2rem 0rem; width:100%; font-size: 0.9rem;"> 
            <div>
                <span >계정이 없으신가요?</span> <a hef="#" style="color: #007bff;">회원가입</a>
            </div>
        </div> 
        <div class="orElse">
            다른 서비스로 로그인
        </div>
        <div class="socialIconLine">
            <div class="socialIcon">
                <a href="#"><img src="@/assets/Icon_google.jpg" style="height: 3.3rem; width: 3.3rem;"  /></a>
            </div>
            <div class="socialIcon">
                <a href="#"><img src="@/assets/Icon_naver.png"  style="height: 3rem; width: 3rem;"  /></a>
            </div>
            <div class="socialIcon"> 
                <a @click="kakaoLogin"><img src="@/assets/Icon_kakao.jpg"  style="height: 3.3rem; width: 3.3rem;"  /></a>
            </div>
        </div>   
          <!-- <b-button class="mt-3" variant="outline-secondary" block @click="hideModal">Close Me</b-button> -->
  </b-modal>
  </header>  
</template>
<script>

import Login from "@/views/Login.vue"
import axios from 'axios'
import instance from '@/axiosInterceptor.js'

  // //카카오 초기화
  // window.Kakao.init('e32167f2d82055442aa0c2ae73c4a2ac');
  // window.Kakao.isInitialized();

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
    //예약하기 페이지에서만 다른 색 주기
    if(window.location.pathname == '/book' || window.location.pathname == '/login'){
      this.headerColor.backgroundColor = '#45526C';
    }
    //스크롤 이벤트
    window.scrollTo(0,0);
    document.addEventListener('scroll', this.scrollEvents);
    //로그인 상태 가져오기
    this.getLoginStatus();


    
    
  },
  unmounted() {
    document.removeEventListener('scroll', this.scrollEvents);
  
  },


  methods:{
    async kakaoLogin(){
      axios({
        url: "http://localhost:2030/login/"+"kakao"+"/url",
        method: "get",

      }).then((response)=>{
        console.log(response)
        // window.open(response.data, 'windowPop', 'width=400, height=600, left=400, top=400, resizable = yes')
        this.popSocialLogin(response.data)

      }).catch((error)=>{

      });
      
    },
    popSocialLogin : function(loginUrl){
      window.open(loginUrl, 'windowPop', 'width=400, height=600, left=400, top=400, resizable = yes')
      opener.close();
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
      this.isLogin = this.$store.state.isLogin
      console.log(this.isLogin)
    },

    async test(){
      await instance({
        url: "http://localhost:2030/user/user/",
        method: 'get'

      }).then((response)=>{
       console.log(response)
      }).catch((error)=>{
        console.log(error)
      });
    },
    hidden(){
      //모달이 닫혔을 때 data 초기화
      this.id = "";
      this.pw = "";
    },
    getLoginModal(){ 
      this.modalShow = true
    },
    
    scrollEvents(){
      let currentScrollPosition = window.scrollY;
      if(this.scrollPosition-currentScrollPosition > 0){ //양수면 마우스 휠업
        if(currentScrollPosition == 0){ //헤더의 위치가 top일 때
          this.headerStatus = false     
          this.hideHeader = false
         
        }
      }else{  //음수면 마우스 휠다운
        // console.log("휠 다운")
        this.hideHeader = true
        this.headerStatus = true
      }
      this.scrollPosition = currentScrollPosition;
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
          const {success} = response.data;
          if(success === true){
            //토큰 저장
            sessionStorage.setItem("AccessToken", response.data.data.accessToken);
            sessionStorage.setItem("RefreshToken", response.data.data.refreshToken);
            //로그인 상태값 true
            this.$store.commit("setIsLogin", true);
            this.isLogin = true;
            //data(id,pw) 초기화, 모달 닫기   
            this.modalShow = false;
            this.hidden();
            // window.location.reload()
          }else{
            this.$store.commit("alert_Warning", "계정이 존재하지 않거나"+"\u00A0" +"이메일 또는 비밀번호가 정확하지 않습니다.");
          }
        }).catch((error)=>{
          this.$store.commit("alert_Error", "로그인이 실패하였습니다.");
        });
      }
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

<style scoped>



header{
  width: 100%;
  background-color: transparent;
  /* background-color: #45526C; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.7rem 1rem;
  position: fixed;
  z-index: 1000;
  transition: all 0.8s;
  visibility: visible;
  font-family: GowunDodum-Regular;
}

button{
  padding: 0px !important;
  margin: 0px !important;
  border: 0px !important;
}

.headerActive{
  background-color: rgba(255, 255, 255, 0.94) !important;
  /* visibility: hidden; */
  /* background-color: rgb(247, 247, 247); */
  transition: all 0.8s;
  border-bottom: 1px solid #d3cfcf;
}

.headerActive_fontColor{
  /* color: rgba(104, 103, 103); */
  color: #45526C !important;
  font-weight: 500;
}

.menu ul{
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.menu li a{
  color: white;
  text-align: center;
  padding: 8px;
  text-decoration: none;
}
.menu li a:hover{
  text-decoration: none;
  /* color:cadetblue; */
}
.main{
  float: left;
  font-size: 30px;
  margin-left: 3rem;
}

.ChangeloginIconSrc{
  src: "@/assets/Icon_login_black";
}

.main a{

  color: white;
}

.main a:hover{
  text-decoration: none;
  color:rgb(240, 216, 187);
}
.menu{
  font-size: 1.05rem;
  font-weight: 500;
  padding-top: 0.8rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  
}
@media (max-width: 768px) {
  .menu{
    display: none;
  }
}






</style>