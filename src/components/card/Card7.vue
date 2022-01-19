<template>
  <div class="card7">
    
      <SimpleThemeCardSlot :background="Theme1.background">
        <template v-slot:title>
         <span> {{Theme1.title}} </span>
        </template>
        <template v-slot:content>
          <span> {{Theme1.content}} </span>
        </template>
        <template v-slot:playtime>
          <span>{{Theme1.playtime}}</span>
        </template> 
      </SimpleThemeCardSlot>
       <SimpleThemeCardSlot :background="Theme2.background">
        <template v-slot:title>
         <span> {{Theme2.title}} </span>
        </template>
        <template v-slot:content>
          <span> {{Theme2.content}} </span>
        </template>
        <template v-slot:playtime>
          <span>{{Theme2.playtime}}</span>
        </template> 
      </SimpleThemeCardSlot>
    </div>
</template>
<script>

import SimpleThemeCardSlot from "@/components/slot/SimpleThemeCardSlot";

export default {
  name: '',
  components: { SimpleThemeCardSlot },
  
  data() {
    return {
      Theme1:{
        title: '그림자 없는 상자',
        content: '“결국 끝도, 시작도, 누나한테 달렸어.”',
        background: 'https://static.wixstatic.com/media/7d3d32_fb2337143586484b8ba78480ab1e76eb~mv2.jpg/v1/fill/w_413,h_413,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/7d3d32_fb2337143586484b8ba78480ab1e76eb~mv2.webp',
        playtime: '1 hr 10 min',
     },
     Theme2:{
        title: '사람들은 그것을 행복이라 부르기로 했다.',
        content: '석우는 루드베키아의 문을 열었다.',
        background: 'https://static.wixstatic.com/media/7d3d32_b23f50c86c5a482f84707a3db1aaea4c~mv2.jpg/v1/fill/w_413,h_413,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/7d3d32_b23f50c86c5a482f84707a3db1aaea4c~mv2.webp.wixstatic.com/media/7d3d32_fb2337143586484b8ba78480ab1e76eb~mv2.jpg/v1/fill/w_413,h_413,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/7d3d32_fb2337143586484b8ba78480ab1e76eb~mv2.webp',
        playtime: '1 hr 10 min',
     },

     
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
  .card7{
    width: 100%;    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }


</style>