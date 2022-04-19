import axios from 'axios'
import {store} from './store'

const instance = axios.create({

});



instance.interceptors.request.use(
  async function(config){ //요청 바로 직전 설정
    //로컬스토리지에 토큰이 있다면 헤더에 추가
    // if(!!sessionStorage.getItem("AccessToken")){
    //   console.log(sessionStorage.getItem("AccessToken"))
    //   instance.defaults.headers.common['AccessToken'] = sessionStorage.getItem("AccessToken");
    // }
    
    console.log(sessionStorage.getItem("AccessToken"))
    // instance.defaults.headers.common['AccessToken'] = sessionStorage.getItem("AccessToken");
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

  async function(resp){ //http status가 200일 때 (then 직전)
    console.log("Response 응답")
    console.log(resp)

    const originalRequest = resp.config
    console.log(originalRequest)
    const { success, code, message } = resp.data;

    //AccessToken이 없을 때, 잘못된 토큰일 때 -> 로그인 유도
    if(code === -1002 || code === -999){ 
      console.log("토큰이 없거나 잘못된 토큰일 때")
      store.commit('alert_Error', "로그인 하셔야합니다.")
      

    //AccessToken이 만료되었을 때 -> RefreshToken 갱신 요청  
    }else if(code === -1000){ 
      console.log("AccessToken이 만료되었을 때")
      axios.defaults.headers.common["AccessToken"] = null;
      axios.defaults.headers.common["RefreshToken"] = sessionStorage.getItem("RefreshToken");
      
      await axios({
        method:"Post",
        url: "http://localhost:2030/reissue",

      }).then((response)=>{
        console.log("갱신 요청에 대한 응답이 바로 여기로 온다.")
        console.log(response)
        if(response.data.code != -999){
          console.log("AccessToken & RefreshToekn 재발급 받음")
          const newAccessToken = response.data.data.accessToken;
          const newRefreshToken = response.data.data.refreshToken;
          sessionStorage.setItem("AccessToken", newAccessToken);
          sessionStorage.setItem("RefreshToken", newRefreshToken);
          
        }else{
          console.log("RefreshToken이 만료되었을 때")
          sessionStorage.clear("AceessToken");
          sessionStorage.clear("RefreshStorage");
          store.commit('alert_Error', "로그인이 해제되었습니다.");
         
        }

      });
      
      originalRequest.headers.AccessToken = sessionStorage.getItem("AccessToken")
      console.log(originalRequest)
      await axios(originalRequest).then((response)=>{
        console.log(response)
        console.log(resp)
        resp = response
       });  

    }else if(code === -1003){ //RefreshToken이 만료되었을 때 -> localStorage 비우고 로그인 유도
      console.log("RefreshToken이 만료되었을 때")
      sessionStorage.clear("AceessToken");
      sessionStorage.clear("RefreshStorage");
      store.commit('alert_Error', "로그인이 해제되었습니다.");
     
    } 
    console.log("헤더로 가기 직전")

    return resp;
  },





  function(error){ //http status가 200이 아닐 때 (catch 직전)
    
    console.log(error);
    //accessToken이 만료되면 여기로 올 거임(아마도......)
    // const { success, code, message } = error.data;
    // if(code === -1000){
    //   console.log("코드 제대로 받았나")  
    // }

    return Promise.reject(error)
  }

);
//생성한 인스턴스를 익스포트
export default instance