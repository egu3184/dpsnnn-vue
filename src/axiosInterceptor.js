import axios from 'axios'
import {store} from './store'
import router from './router/index'

const instance = axios.create({

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
      store.commit('alert_Error', "로그인 하셔야합니다.")
      router.push({path: '/'}).catch(()=>{})
      

    //AccessToken이 만료되었을 때  
    }else if(code === -1000){ 
      console.log("AccessToken이 만료되었을 때")
      axios.defaults.headers.common["AccessToken"] = null;  //초기화 하지 않으면 다시 AccessToken 만료 응답이 옴.
      axios.defaults.headers.common["RefreshToken"] = sessionStorage.getItem("RefreshToken");
      //RefreshToken 갱신 요청 
      await axios({
        method:"Post",
        url: "http://localhost:2030/reissue",

      }).then((response)=>{
        //"AccessToken & RefreshToekn 재발급 받음"
        if(response.data.code != -999 && response.data.code != -1002){ 
          //토큰 갱신
          sessionStorage.setItem("AccessToken", response.data.data.accessToken);
          sessionStorage.setItem("RefreshToken", response.data.data.refreshToken);
          
        }else{
          //"RefreshToken이 만료되었을 때"
          sessionStorage.clear("AceessToken");
          sessionStorage.clear("RefreshStorage");
          store.commit('setIsLogin', false)
          store.commit('alert_Error', "로그인 세션이 만료되었습니다.");
          router.push({path: '/'}).catch(()=>{})
        }
      });
      //기존 요청을 다시 보낸 후, 토큰 에러 응답을 기존 요청에 대한 응답으로 교체
      originalRequest.headers.AccessToken = sessionStorage.getItem("AccessToken")
      console.log(originalRequest)
      await axios(originalRequest).then((response)=>{ resp = response });  

    }else if(code === -1003){ 
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