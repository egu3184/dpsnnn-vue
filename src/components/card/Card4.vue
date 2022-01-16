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
        <span>"미안해 누나. 근데 내가 맞았어. 결국 끝도, 시작도, 누나한테 달렸어."</span><br/><br/>
        <span>--</span><br/><br/>
        <span>안다. 비극에 대처하는 방법은 우리 모두 각자 다르다는 것을.</span><br/>
        <span>또한 안다. 어린 나이의 동생에게 막내의 죽음은 감당하기 힘든 일이었을 것이라는 것을.</span><br/><br/>
        <span>하지만 시현아. 누나도 사람이고, 힘들고, 아파.</span><br/><br/>
        <span>초자연적인 물체니 뭐니... 동생의 망상을 견뎌주는 것도 이제 한계다.</span><br/>
        <span>지쳐버린 나는 이 허무맹랑한 문자를 받고, 마지막으로 쓴소리를 해주러 시현이의 집으로 향했다.</span><br/>
      </template>
      <template v-slot:button>
        <ReservationButton :theme=theme></ReservationButton>
      </template>       
    </Theme> 
  </div>
</template>
<script>

import Theme from "@/components/slot/Theme"
import ReservationButton from "@/components/slot/ReservationButton"

export default {
  name: '',
  components: { Theme, ReservationButton },
  data() {
    return {
      theme:{
         enTitle: 'The box with no shadows',
         krTitle: '그림자 없는 상자',
         backgroundColor: 'rgb(51, 27, 63)',
         fontColor: '#ACC7B4',
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
