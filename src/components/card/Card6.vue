<template>
  <div>
    <Theme :theme=theme>
      <template v-slot:egTitle >
         <span>{{theme.enTitle}}</span><br/>
      </template>
      <template v-slot:krTitle>
          <span>{{theme.krTitle}}</span>
      </template>
      <template v-slot:content>
        <span>석우는 연기를 들이키며 영원이라는 것에 대해 생각해보았다.</span><br/>
        <span>아무래도 불행하겠지, 라고 생각하며 날숨.</span><br/>
        <span>영원히 이어지는 게 고작 이런 삶이라면, 하며 틱.</span><br/><br/>
        <span>손을 털며, 그는 오늘의 근무지의 간판을 올려다 보았다.</span><br/><br/>
        <span>루드베키아.</span><br/><br/>
        <span>영생을 발명했다는 기묘한 바이오 회사.</span><br/>
        <span>공식 발표 이틀 전 사라져버린 연구소장.</span><br/>
        <span>그 사건에 배정된 형사, 김석우.</span><br/><br/>
        <span>석우는 루드베키아의 문을 열었다.</span>
      </template>       
    </Theme>  
  </div>
</template>
<script>

import Theme from "@/components/slot/Theme"

export default {
  name: '',
  components: { Theme },
  data() {
    return {
        theme:{
         enTitle: 'We decided to call it happiness',
         krTitle: '사람들은 그것을 행복이라 부르기로 했다.',
         backgroundColor: 'rgb(106, 123, 162)',
         fontColor: '#FFDFDE',
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
 

</style>
