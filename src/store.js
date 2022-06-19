import Vue from 'vue'
import Vuex from 'vuex'
const Swal = require('sweetalert2')
import router from './router/index'

Vue.use(Vuex)

import createPersistedState from 'vuex-persistedstate';

export const store = new Vuex.Store({
 
  plugins: [
    createPersistedState ({
      storage: window.sessionStorage,
      
    })
  ],
  state: {  //data
    selectedThemeInfo : {},
    selectedBranchInfo : {},
    selectedSlotInfo : {},
    responseReservationInfo: {},
    
    privacy_agree : '',
    booker_name : '',
    phone_number : '',
    capacityAndPrice: '',
    totalPriceList :[],

    isLogin : '',
    CompleteSignup : '',
    

    headerColor: '',

  },
  getters: {  
   
    getThemeTotalPriceList(state){
     
      let min = state.selectedThemeInfo.minimumCapacity
      let max = state.selectedThemeInfo.maximumCapacity
      let price = state.selectedThemeInfo.admissionFee
      let totalPriceList = state.totalPriceList
      for(let i=min; i<=max; i++){
        totalPriceList.push( 
          {
            capacity : i,
            price : (i * price)
          }
        )
      }
      //console.log(totalPrice)
      return totalPriceList;
    }

  },
  mutations: {
    //SelectReservation에서 
    setSelectedTheme(state, theme){
      state.selectedThemeInfo = theme
    },
    setSelectedBranch(state, branch){
      state.selectedBranchInfo = branch
    },
    setSelectedSlot(state, slot){
      state.selectedSlotInfo = slot
    },
    setPrivacyAgree(state, status){
      state.privacy_agree = status
    },
    setBookerName(state, name){
      state.booker_name = name
    },
    setPhoneNumber(state, number){
      state.phone_number = number
    },
    setCapacityAndPrice(state, ob){
      state.capacityAndPrice = ob
    },
    setReservationInfo(state, object){
      state.responseReservationInfo = object
    },
    //SelectReservaion.vue의 저장항목 초기화
    deleteSelectedItems(state){
      state.selectedThemeInfo = ""
      state.selectedBranchInfo = ""
      state.selectedSlotInfo = ""
     
    },
    //InputReservation.vue의 저장항목 초기화
    deleteInputItems(state){
      state.privacy_agree = ""
      state.booker_name = ""
      state.phone_number = ""
      state.totalPrice = ""
      state.capacityAndPrice = ""
      state.totalPriceList = []
    },
    //로그인 완료시 로그인 상태값 저장
    setIsLogin(state, status){
      state.isLogin = status
    },
    //가입 완료시 상태값 저장
    setCompleteSignup(state, status){
      state.CompleteSignup = status
    },
    //Header 색상
    setHeaderColor(state, color){
      state.headerColor = color
    },
    //로그아웃
    logout(){
      store.commit("setIsLogin",false);
      sessionStorage.clear("AccessToken");
      sessionStorage.clear("RefreshToken");
      sessionStorage.clear("SocialAccessToken");
      router.push({path: '/'}).catch(()=>{})
      
    },
    //Swal - 경고
    alert_Warning(state,text) {
      Swal.fire({icon: 'warning', title: '잠시만요!', text: text, confirmButtonColor: '#3085d6'})
    },
    //Swal - 에러
    alert_Error(state,text) {
      Swal.fire({icon: 'warning', title: '잠시만요!', text: text, confirmButtonColor: '#3085d6'})
    },
    //Swal - 에러, 확인버튼 클릭시 홈으로 이동
    alert_Error_And_toHome(state,text) {
      Swal.fire({icon: 'error', title: '오.. 이런', text: text, confirmButtonColor: '#3085d6'}
      ).then((result) =>{ 
        if(result.isConfirmed){ router.push({path: '/'}).catch(()=>{})}
      })
    },
    //Swal - 에러, 확인버튼 클릭시 로그아웃
    alert_Error_And_Logout(state,text) {
      Swal.fire({icon: 'error', title: '오.. 이런', text: text, confirmButtonColor: '#3085d6'}
      ).then((result) =>{ 
        if(result.isConfirmed){ store.commit("logout").catch(()=>{})}
      })
    },
    //Swal - 성공
    alert_Success(state, title, text){
      Swal.fire({ title: title, text: text, icon: 'success', confirmButtonColor: '#3085d6'})
    },
    //Swal - 성공,  확인버튼 클릭시 홈으로 이동
    alert_Success_alert(state, title, text){
      Swal.fire({ title: title, text: text, icon: 'success', confirmButtonColor: '#3085d6'})
    }
    

    
  },
  actions:{
    
  }

  
})