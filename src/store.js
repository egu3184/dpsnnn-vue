import Vue from 'vue'
import Vuex from 'vuex'
const Swal = require('sweetalert2')
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {  //data

    // activatedBranch: 1,  //초기값 
    // activatedTheme: 1,   //초기값
    // activatedDate :'',
    // activatedTime : '',
    agreementStatus : '',

    selectedTheme : {fruit : 'apple',},
    selectedBranchInfo : {},
    selectedSlotInfo : {},
    

    totalPrice :[],

    //임시 테마 정보
    selectedThemeInfo: {
      minCapapcity: 2,
      maxCapapcity: 5,
      price: 27000,
    }

  },
  getters: {  
   
    getThemeTotalPrice(state){
      let min = state.selectedThemeInfo.minCapapcity
      let max = state.selectedThemeInfo.maxCapapcity
      let price = state.selectedThemeInfo.price 
      let totalPrice = state.totalPrice
      for(let i=min; i<=max; i++){
        totalPrice.push(
          {
            capacity : i+"인",
            price : (i * price)
          }
        )
      }
      //console.log(totalPrice)
      return totalPrice;
    }

  },
  mutations: {
    //SelectReservation에서 
    setSelectedTheme(state, theme){
      console.log("여기 vuex임")
      console.log(theme)
      state.selectedTheme = theme
    },
    setSelectedBranch(state, branch){
      console.log("여기 vuex임")
      console.log(branch)
      state.selectedBranchInfo = branch
    },
    // setActivatedDate(state, value){
    //   state.activatedDate = value
    // },
    setSelectedSlot(state, slot){
      console.log("여기 vuex임")
      console.log(slot)
      state.selectedSlotInfo = slot
    },
    setAgreementStatus(state, status){
      state.agreementStatus = status
    },

    sibal(text){
      alert(text);
    },

    //Swal2 
    alert_Warning(state,text) {
      Swal.fire(
          {icon: 'warning', title: '잠시만요!', text: text, confirmButtonColor: '#3085d6'}
      )
    },
    alert_Error(state,text) {
        console.log(text)
        Swal.fire(
            {icon: 'error', title: '오.. 이런', text: text, confirmButtonColor: '#3085d6'}
        )
    },



    
  },
  actions:{
    
  }

  
})