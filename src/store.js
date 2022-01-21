import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {  //data
    title: 'Fucking bitch',
    users: [
      {userId: 1, name: 'egu', addres: 'Seoul'},
      {userId: 2, name: 'trupp', addres: 'Gyeonggi'},
      {userId: 3, name: 'Taru', addres: 'Jeju'},
      {userId: 4, name: 'Magarette', addres: 'Seoul'}
    ]

  },
  getters: {  //computed
    // testTitle: state=>{
    //   return state.title
    // },
    allUserCount: state=>{
      return state.users.length
    },
    countOfSeoul: state=>{
        let count = 0
        state.users.forEach(user =>{
        if(user.addres === 'Seoul'){
          count++
        }
       
      })
      return count
    },
    percentOfSeoul: (state, getters) =>{
      return Math.round(getters.countOfSeoul / getters.allUserCount * 100)
    }
  },
  mutations: {
   
  },

  actions:{
    
  }

  
})