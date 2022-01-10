<template>
  <div class="card3">
    <div class="box">
      <video muted autoplay loop>
        <source src="@/assets/file.mp4" type="video/mp4">
      </video>
      <div class="card3-text">
        <p>첫번째 이야기</p><br/>
        <p>그림자 없는 상자</p>
      </div>
    </div>  

  </div>
</template>
<script>
export default {
  name: '',
  components: {},
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
  .card3{
   width: 100%;
    position: relative;
    height: 80vh;
    
  }
  video{
    width: 100%;
    height: 80vh;
    overflow: hidden;
    object-fit: cover;
  
  }
    
  .card3-text{
    position: absolute;
    top: 25%;
    background-attachment: fixed;
    
    width: 100%;
    
  }
  .card3-text p {
    margin-top: 10px;
    text-align: center;
    font-size: 48px;
    color: whitesmoke;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   
  }

  
</style>
