import Vue from 'vue'
import Vuex from 'vuex'
const Swal = require('sweetalert2')
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {  //data
    
    activatedBranch: 1,  //초기값 
    activatedTheme: 1,   //초기값
    activatedDate :'',
    activatedTime : '',
    agreementStatus : '',
  },
  getters: {  
    
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