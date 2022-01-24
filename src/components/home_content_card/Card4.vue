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
            title:[
              'The box with no shadows',
              '그림자 없는 상자'
            ],
            titleFontColor: '',
            titleFontSize: '',
         },
         content:{
            descriptions:[
              ['"미안해 누나. 근데 내가 맞았어. 결국 끝도, 시작도, 누나한테 달렸어."'],
              ['안다. 비극에 대처하는 방법은 우리 모두 각자 다르다는 것을.','또한 안다. 어린 나이의 동생에게 막내의 죽음은 감당하기 힘든 일이었을 것이라는 것을.' ],
              ['하지만 시현아. 누나도 사람이고, 힘들고, 아파.'],
              ['초자연적인 물체니 뭐니... 동생의 망상을 견뎌주는 것도 이제 한계다.','지쳐버린 나는 이 허무맹랑한 문자를 받고, 마지막으로 쓴소리를 해주러 시현이의 집으로 향했다.']
            ]
          },
          button:{
             isRequiredReservationButtion: true,
             buttonFontColor: '',
             buttonBorderColor: '',
          },
         backgroundColor: 'rgb(51, 27, 63)',
         defaultColor: '#ACC7B4',
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
