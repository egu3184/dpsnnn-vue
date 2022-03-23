<template>
  <div>
    <Theme :theme=theme />
  </div>
</template>
<script>

import Theme from "@/components/slot/home_content_slot/Theme"

export default {
  name: '',
  components: { Theme },
  data() {
    return {
        theme:{
          head:{
            title: [
              'We decided to call it happiness',
              '사람들은 그것을 행복이라 부르기로 했다.',
            ],
            titleFontColor : '',
            titleFontSize : '',
          },
          content: {
            descriptions: [
              ['석우는 연기를 들이키며 영원이라는 것에 대해 생각해보았다,', '아무래도 불행하겠지, 라고 생각하며 날숨.'], 
              ['영원히 이어지는 게 고작 이런 삶이라면, 하며 틱.'],
              ['손을 털며 그는 오늘의 근무지의 간판을 올려다 보았다.'],
              ['루드베키아.'],
              ['영생을 발명했다는 기묘한 바이오 회사.', '공식 발표 이틀 전 사라져버린 연구소장.', '그 사건에 배정된 형사, 김석우'],
              ['석우는 루드베키아의 문을 열었다.']
              ],
              contentFontColor : '',
              contentFontSize : '',
          },
          button: {
             isRequiredReservationButtion: true,
             buttonFontColor: '',
             buttonBorderColor: '',
          },
           // Default 
          backgroundColor: 'rgb(106, 123, 162)',
          defaultColor: '#FFDFDE', 
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
