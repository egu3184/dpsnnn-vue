<template>
  <div id="theme">
    <ThemeHeader :theme=theme /> 
    <div class="img">   
      <div class="img"><img :src=theme.img_src></div>
    </div>  
    <div class="container2">
      <ThemeContent :theme=theme />
      <div class="themeFooter">
        <ThemeButton :theme=theme />
      </div>
    </div>
  </div>
</template>
<script>

import ThemeHeader from "@/components/slot/theme_slot/ThemeHeader" 
import ThemeContent from "@/components/slot/theme_slot/ThemeContent" 
import ThemeButton from "@/components/slot/theme_slot/ThemeButton" 

export default {
  name: '',
  components: {
   ThemeHeader, ThemeContent, ThemeButton
  },
  data() {
    return {
       theme:{
         'title_num':'dps002:',
         'title_name':'사람들은 그것을 행복이라고 부르기로 했다.',
         'img_src': 'https://cdn.imweb.me/thumbnail/20220117/3b1226d39ec53.jpg',
         'title': [  ['석우는 연기를 들이키며'], ['영원이라는 것에 대해 생각해보았다.']],
         'descriptions':[
              ['아무래도 불행하겠지, 라고 생각하며 날숨.','영원히 이어지는 게 고작 이런 삶이라며, 하며 틱.' ],
              ['손을 털며, 그는 오늘의 근무지의 간판을 올려다 보았다.'],
              ['루드베키아'],
              ['영생을 발명했다는 기묘한 바이오 회사.','공식 발표 이틀 전 사라져버린 연구소장.','그 사건에 배정된 형사, 김석우.']
              ,['석우는 루드베키아의 문을 열었다.']
          ],
       }  
       
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style>
  #theme{
    width: 100%;
    /* background-color: #2c2524; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap; 
  }
  /* 모바일 */
  @media (max-width: 798px){
    .img{
      margin-top: 10%;
      /* background-color: darkolivegreen;  */
    }
    .img img{
      width: 100%;
    }
  }
  /* 데스크탑 */
  @media (min-width: 798px){
    .img{
      margin-right: 3%;
      margin-top: 8%;
      margin-bottom: 10%;
      width: 35rem;
    }
    .img img{
      width: 100%;   
    }
  
  }


</style>
