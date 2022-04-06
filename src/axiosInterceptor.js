import axios from 'axios'

const instance = axios.create({

});


instance.interceptors.request.use(
  function(config){ //요청 바로 직전 설정
    console.log(config)
    //헤더에 토큰 추가
    instance.defaults.headers.common['X-AUTH-TOKEN'] = 
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlZ3UxMTExQGdvb2dsZS5jb20iLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjQ4NjMxNjc2LCJleHAiOjE2NDg2MzUyNzZ9.E1gt_BM583uqp_tMrKIcCiqbzJropSUjCHFPB73kzgc"
    return config;
  },
  function(error){  //요청 에러 처리

    return Promise.reject(error);
  }

)

instance.interceptors.response.use(

  function(response){ //http status가 200일 때 (then 직전)
    const { config } = response
    const { success, code, message } = response.data;
    if(code === -1000){ // 액세스 토큰 만료인 코드 -1000일 때
      //refresh한 토큰 요청

      //refresh된 토큰 저장소에 저장

      //
    }

    return response
  },

  function(error){ //http status가 200이 아닐 때 (catch 직전)
    
    console.log(error);
    //accessToken이 만료되면 여기로 올 거임(아마도......)
    const { success, code, message } = error.data;
    if(code === -1000){
      console.log("코드 제대로 받았나")  
    }

    return Promise.reject(error)
  }

);
//생성한 인스턴스를 익스포트
export default instance;