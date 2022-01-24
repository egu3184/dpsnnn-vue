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
         'title_num':'dps001:',
         'title_name':'그림자 없는 상자',
         'img_src': 'https://cdn.imweb.me/thumbnail/20211116/0ee5f8df51546.jpeg',
         'title': [  ['"미안해 누나. 근데 내가 맞았어.'], ['결국 끝도, 시작도, 누나한테 달렸어."']],
         'descriptions':[
              ['안다. 비극에 대처하는 방법은 우리 모두 각자 다르다는 것을.','또한 안다. 어린 나이의 동생에게 막내의 죽음은 감당하기 힘든 일이었을 것이라는 것을.' ],
              ['하지만 시현아. 누나도 사람이고, 힘들고, 아파.'],
              ['초자연적인 물체니 뭐니... 동생의 망상을 견뎌주는 것도 이제 한계다.','지쳐버린 나는 이 허무맹랑한 문자를 받고, 마지막으로 쓴소리를 해주러 시현이의 집으로 향했다.']
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
    background-color: #2c2524;
    display: flex;
    justify-content: center;
    flex-wrap: wrap; 
  }
  /* 모바일 */
  @media (max-width: 798px){
    .img{
      margin-top: 10%;
      background-color: darkolivegreen; 
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
