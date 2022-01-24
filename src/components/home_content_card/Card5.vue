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
         title: [ '두번째 이야기' , '사람들은 그것을 행복이라 부르기로 했다.' ],
         url : 'https://video.wixstatic.com/video/11062b_00b0cf7d3e8847a4afbde2407008ec49/1080p/mp4/file.mp4',
         
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
