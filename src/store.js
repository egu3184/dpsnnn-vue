import Vue from 'vue'
import Vuex from 'vuex'
const Swal = require('sweetalert2')
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {  //data

    storeBranchList: [],
    storeThemeList: [],

    activatedBranch: 1,  //초기값 
    activatedTheme: 1,   //초기값
    activatedDate :'',
    activatedTime : '',
    agreementStatus : '',

    // selectedThemeInfo : '',
    selectedBranchInfo : '',
    selectedSlotInfo : '',

    totalPrice :[],

    //임시 테마 정보
    selectedThemeInfo: {
      minCapapcity: 2,
      maxCapapcity: 5,
      price: 27000,
    }

  },
  getters: {  
    getThemeMaxCapacity(state){
      return state.selectedThemeInfo.maxCapapcity
    },
    getThemeMinCapacity(state){
      return state.selectedThemeInfo.minCapapcity
    },
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
    setActivatedTheme(state, value){
      state.activatedTheme = value
    },
    setActivatedBranch(state, value){
      state.activatedBranch = value
    },
    setActivatedDate(state, value){
      state.activatedDate = value
    },
    setActivatedTime(state, value){
      state.activatedTime = value
    },
    setAgreementStatus(state, value){
      state.agreementStatus = value
    },

    setStoreTheme(state, List){
      for(let i in List){
        state.storeThemeList.push(List[i])
      }
    },
    setStoreBranch(state, List){
      for(let i in List){
        state.storeBranchList.push(List[i])
      }
    },

    alert_Warning(state, text) {
      Swal.fire(
          {icon: 'warning', title: '잠시만요!', text: text, confirmButtonColor: '#3085d6'}
      )
    },
    alert_Error(state,text) {
        Swal.fire(
            {icon: 'error', title: '오.. 이런', text: text, confirmButtonColor: '#3085d6'}
        )
    },

  },
  actions:{
    
  }

  
})