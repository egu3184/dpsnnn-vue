<template>
  <header class="header" :style="headerColor" :class="{headerActive: hideHeader == true}" >
    <!-- :class="{headerActive : scrollPosition > 100}"> -->
        <div class="main" >
          <!-- <a href="/" :class="{headerActive_fontColor: headerStatus == true}">dpsnnn</a> -->
          <router-link to="/" :class="{headerActive_fontColor: headerStatus == true}">dpsnnn</router-link>
        </div>
        <div>
          <ul class="menu">
            <!-- <li><a @click="test()" :class="{headerActive_fontColor: headerStatus == true}">단편선</a></li> -->
            <!-- <li><router-link to="/login" :class="{headerActive_fontColor: headerStatus == true}">로그인</router-link></li> -->
            <li><router-link to="/book" :class="{headerActive_fontColor: headerStatus == true}">예약하기</router-link></li>
            <li><router-link to="/box" :class="{headerActive_fontColor: headerStatus == true}">첫번째 이야기</router-link></li>
             <li><router-link to="/happy" :class="{headerActive_fontColor: headerStatus == true}">두번째 이야기</router-link></li>
            <li>
              <a >
                <!-- <img @click="getLoginModal" v-if="headerStatus == false && isLogin == false" src="@/assets/Icon_login_white.png" style="height:1.5rem; width:1.5rem;"/> -->
                <!-- <img @click="getLoginModal" v-if="headerStatus == true && isLogin == false" src="@/assets/Icon_login_black.png" style="height:1.5rem; width:1.5rem;"/> -->
                <router-link to="/login">
                <img  v-if="headerStatus == false && isLogin == false" src="@/assets/Icon_login_white.png" style="height:1.5rem; width:1.5rem;"/>
                <img  v-if="headerStatus == true && isLogin == false" src="@/assets/Icon_login_black.png" style="height:1.5rem; width:1.5rem;"/>
                </router-link>
                 <b-dropdown v-if="isLogin == true" size="sm"  variant="link" toggle-class="text-decoration-none" no-caret dropup>
                    <template #button-content> 
                       <img v-if="headerStatus == false && isLogin == true" src="@/assets/Icon_online_white.png" style="height:1.5rem; width:1.5rem;"/>
                      <img v-if="headerStatus == true && isLogin == true" src="@/assets/Icon_online_black.png" style="height:1.5rem; width:1.5rem;"/>
                    </template>
                    <b-dropdown-item @click="logout"><router-link to="/" style="color:black;">로그아웃</router-link></b-dropdown-item>
                    <b-dropdown-item><router-link to="/userinfo" style="color:black;">회원정보</router-link></b-dropdown-item>
                  </b-dropdown>
                <!-- </div> -->
              </a>
            </li>  
     
          </ul> 
        </div>
      <!-- </div> -->
      <!-- <b-modal id="login" v-model="modalShow" hide-footer @hidden="hidden" title="Login"> -->
        <!-- <Login /> -->
        <!-- <form autocomplete="off">
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
        </div>    -->
          <!-- <b-button class="mt-3" variant="outline-secondary" block @click="hideModal">Close Me</b-button> -->
  <!-- </b-modal> -->
  </header>  
</template>
<script>

import Login from "@/views/Login.vue"

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
        backgroundColor: this.$store.state.headerColor,
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
    //스크롤 이벤트
    window.scrollTo(0,0);
    document.addEventListener('scroll', this.scrollEvents);
    //로그인 상태 가져오기
    // this.getLoginStatus();
  },
  destroyed() {
    //스크롤 이벤트 제거
    document.removeEventListener('scroll', this.scrollEvents);
  },
  computed:{
    //(router 이동에 따라) vuex의 headerColor 변경을 감지
    check_backgroundColor:function(){
      return this.$store.state.headerColor;
    },
    //(로그인 후 router 이동에 따라) vuex의 isLogin 변경을 감지
    check_isLogin:function(){
      return this.$store.state.isLogin;
    }
  },
   watch:{
    //"vuex의 header 색상변경을 감지"를 감지
    check_backgroundColor(value){
      this.headerColor.backgroundColor = value
    },
    //"vuex의 isLogin 변경을 감지"를 감지
    check_isLogin(value){
      this.isLogin = value
    }
  },
  methods:{
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
      /* offset-x offset-y blur-radius spread-radius (color) */
      box-shadow: 1px 8px 6px 0 rgb(0 0 0 / 8%);
      border-bottom: 1px solid rgba(0,0,0,.08);
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
      /* text-decoration: none; */
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