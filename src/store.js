import Vue from 'vue'
import Vuex from 'vuex'
const Swal = require('sweetalert2')
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {  //data
    selectedThemeInfo : {},
    selectedBranchInfo : {},
    selectedSlotInfo : {},
    
    privacy_agree : '',
    booker_name : '',
    phone_number : '',
    // totalPrice : '',
    // capacity : '',
    capacityAndPrice: '',
    totalPriceList :[],
    reservationId: '',

  },
  getters: {  
   
    getThemeTotalPriceList(state){
     
      let min = state.selectedThemeInfo.minimumCapacity
      let max = state.selectedThemeInfo.maximumCapacity
      let price = state.selectedThemeInfo.admissionFee
      let totalPriceList = state.totalPriceList
      for(let i=min; i<=max; i++){
        totalPriceList[i] = 
          {
            capacity : i,
            price : (i * price)
          }
        
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
    setReservationId(state, id){
      state.setReservationId = id
    },
    deleteSelectedItems(state){
      state.selectedThemeInfo = ""
      state.selectedBranchInfo = ""
      state.selectedSlotInfo = ""
      // console.log(state.selectedThemeInfo)
      // console.log(state.selectedBranchInfo)
      // console.log(state.selectedSlotInfo)
    },
    deleteInputItems(state){
      state.privacy_agree = ""
      state.booker_name = ""
      state.phone_number = ""
      state.totalPrice = ""
      console.log(state.privacy_agree)
      console.log(state.booker_name)
      console.log(state.phone_number)
      console.log(state.totalPrice)
    },


    //Swal2 
    alert_Warning(state,text) {
      Swal.fire(
          {icon: 'warning', title: '잠시만요!', text: text, confirmButtonColor: '#3085d6'}
      )
    },
    alert_Error(state,text) {
        // console.log(text)
        Swal.fire(
            {icon: 'error', title: '오.. 이런', text: text, confirmButtonColor: '#3085d6'}
        ).then((result) =>{ 
          if(result.isConfirmed){ //확인 버튼 눌렀을시
            window.location.reload()
          }
        })
    },

    // //선택항목이 비었는지 체크 후 비었다면 받은 메시지대로 alert 띄우는 메서드
    // isItemSelected(val, message){
    //   let check = ""
    //   console.log(val)
    //   if(!val){
    //     check = false
    //   }else{
    //     check = true
    //   }
    //   return check;
    // },

    

    
  },
  actions:{
    
  }

  
})