<template>
    <Theme :theme=theme />
</template>
<script>

import Theme from "@/components/slot/Theme"

export default {
  name: '',
  components: { Theme, },
  data() {
    return {
        theme:{
          head:{
            title: [
              'Short stories to', 
              'feel, live, do.'
            ],
            titleFontColor : '',
            titleFontSize : '',
          },
          content: {
            descriptions: [
              ['우리에게 가장 소중한 경험들이 언제나 그렇듯이,', '단편선에서의 여정은 한 줄의 이야기로부터 시작됩니다.'], 
              ['여러분과 저희가 공유하는 이 공간에서, 우리는 함께', '그 이야기를 느끼고, 살고, 써내려가게 됩니다.'],
              ['설레는 마음으로, 언제나 기다리고 있겠습니다.'],
              ['2021년 5월 17일,', '단편선 드림']
              ],
              contentFontColor : '',
              contentFontSize : '',
          },
          button: {
             color: 'red',
             isRequiredReservationButtion: true,
             buttonFontColor: '',
             buttonBorderColor: '',
          },
           // Default 
          backgroundColor: 'rgb(2, 52, 63)',
          defaultColor: 'rgb(240, 237, 204)',   
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
