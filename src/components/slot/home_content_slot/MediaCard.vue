<template>
  <div class="medeoCard">
     <video muted autoplay loop :src=media.url type="video/mp4" /> 
     <div class="medeoCard-title">
          <MediaCardTitle :mediaTitle=media.title>
            <template v-slot:mediaTitle></template> 
         </MediaCardTitle>
      </div>
      
  </div> 
</template>
<script>

import MediaCardTitle from "@/components/slot/home_content_slot/MediaCardTitle"

export default {
  name: '',
  components: { MediaCardTitle },
  props:{
    media: Object
  },
  data() {
    return {
       sampleData: ''
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
  .medeoCard{
    width: 100%;
    position: relative;
    height: 80vh;
    
  }
  video{
    width: 100%;
    height: 80vh;
    overflow: hidden;
    object-fit: cover;
    z-index: -1;
  }
    
  .medeoCard-title{
    position: absolute;
    top: 25%;
    background-attachment: fixed;
    width: 100%;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  /* 모바일 */
  @media (max-width:768px) {
    video{
      height: 60vh
    }
    .medeoCard{
      height: 60vh;
    }
    .medeoCard-title{
      text-align: center;
      font-size: 25px;
      color: whitesmoke;
      line-height: 5rem;
    }
  }
  /* 데스크탑 */
  @media (min-width: 767px) {
    .medeoCard-title{
     
      text-align: center;
      font-size: 48px;
      color: whitesmoke;
      line-height: 8rem;
    }
  }



  
</style>
