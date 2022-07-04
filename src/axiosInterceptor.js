import axios from 'axios'
import {store} from './store'
import router from './router/index'

const instance = axios.create({
  baseURL : process.env.VUE_APP_API_URL
});



instance.interceptors.request.use(
  async function(config){ //요청 바로 직전 설정
    config.headers = {
      "AccessToken" : sessionStorage.getItem("AccessToken")
    }
    return config;
  },
  function(error){  //요청 에러 처리
    return Promise.reject(error);
  }

)

instance.interceptors.response.use(
  //응답이 http status가 200일 때 
  async function(resp){ 
    const originalRequest = resp.config
    const { code } = resp.data;

    //AccessToken이 없을 때, 잘못된 토큰일 때 -> 로그인 유도
    if(code === -1002 || code === -999){ 
      console.log("토큰이 없거나 잘못된 토큰일 때")
      store.commit('setIsLogin', false)
      store.commit('alert_Error', "로그인이 필요합니다.")
      router.push({path: '/'}).catch(()=>{})
      

    //AccessToken이 만료되었을 때  
    }else if(code === -1000){ 
      console.log("AccessToken이 만료되었을 때")
      var vm = this
      //RefreshToken 갱신 요청 
       await vm.$axios({
        method:"post",
        url: "reissue",
        data:{
          refreshToken : sessionStorage.getItem("RefreshToken")
        }
      }).then(async(response)=>{
        if(response.data.success == true){ 
          console.log("AccessToken & RefreshToekn 재발급")
          // AccessToken & RefreshToekn 재발급 받음 -> sessionStorage의 토큰 갱신
          sessionStorage.setItem("AccessToken", response.data.data.accessToken);
          sessionStorage.setItem("RefreshToken", response.data.data.refreshToken);
           //기존 요청을 다시 보낸 후, 토큰 에러 응답을 기존 요청에 대한 응답으로 교체
           let instanceConfig = {
              url: originalRequest.url,
              method: originalRequest.method,
           }
           if(originalRequest.data){
               instanceConfig.data = JSON.parse(originalRequest.data)
           }else if(originalRequest.params){
                instanceConfig.params = JSON.parse(originalRequest.params)
           }
          await instance( instanceConfig ).then((response)=>{ 
            resp = response 
          });
            
          return resp;  

        }else{
          //"RefreshToken이 만료되었을 때"
          console.log("RefreshToekn 만료로 재발급 실패")
          sessionStorage.clear("AceessToken");
          sessionStorage.clear("RefreshStorage");
          store.commit('setIsLogin', false)
          store.commit('alert_Error', "로그인 세션이 만료되었습니다.");
          return router.push({path: '/'}).catch(()=>{})
        } 
      });

    }else if(code === -1003 || code === 1106){ 
      console.log("RefreshToekn 만료")
      //RefreshToken이 만료되었을 때 -> localStorage 비우고 로그인 유도
      sessionStorage.clear("AceessToken");
      sessionStorage.clear("RefreshStorage");
      store.commit('setIsLogin', false)
      store.commit('alert_Error', "로그인 세션이 만료되었습니다.");
      router.push({path: '/'}).catch(()=>{})
    }

    return resp;
  },





  function(error){ //http status가 200이 아닐 때 (catch 직전)
    
    console.log(error);
  
    return Promise.reject(error)
  }

);
//생성한 인스턴스를 익스포트
export default instance