<template>
   <MediaCard :media=media>
      
   </MediaCard>  
</template>
<script>


import MediaCard from "@/components/slot/home_content_slot/MediaCard"

export default {
  name: '',
  components: { MediaCard },
  data() {
    return {
       media:{
         title: [ '첫번째 이야기' , '그림자 없는 상자' ],
         url : 'https://video.wixstatic.com/video/11062b_bd7d32dd41fb42d79843cc0ab9a06e53/1080p/mp4/file.mp4',
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
