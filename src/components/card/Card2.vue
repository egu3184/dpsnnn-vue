<template>
    <Theme :theme=theme>
      <template v-slot:egTitle>
        <span :style="{'font-weight':'bold'}">{{theme.egTitle}}</span>
      </template>
      <template v-slot:krTitle>
        <span>{{theme.krTitle}}</span>
      </template>
      <template v-slot:content>
        <div class="description" :key="index" v-for="(description, index) in theme.descriptions">
          <span :key="i" v-for="(text,i) in description">{{text}}<br/></span>
        </div>  
      </template>    
    </Theme>  
</template>
<script>

import Theme from "@/components/slot/Theme"

export default {
  name: '',
  components: { Theme, },
  data() {
    return {
        theme:{
         egTitle: 'Short stories to',
         krTitle: 'feel, live, do.',
         backgroundColor: 'rgb(2, 52, 63)',
         fontColor: 'rgb(240, 237, 204)',
         descriptions: [
           ['우리에게 가장 소중한 경험들이 언제나 그렇듯이,', '단편선에서의 여정은 한 줄의 이야기로부터 시작됩니다.'], 
           ['여러분과 저희가 공유하는 이 공간에서, 우리는 함께', '그 이야기를 느끼고, 살고, 써내려가게 됩니다.'],
           ['설레는 마음으로, 언제나 기다리고 있겠습니다.'],
           ['2021년 5월 17일,', '단편선 드림']

         ]
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
  .card2{
    display: flex;
    width: 100%;
    height: 800px;
    background-color: rgb(2, 52, 63);
  }
  .comment{
    margin: auto;
    margin-left: 22%;
  }

  .description{
    margin-bottom: 2.5rem;
  }

  .comment span{
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    padding: 0;
    margin: 0;
    text-align: left;
    color:rgb(240, 237, 204);
  }
</style>
