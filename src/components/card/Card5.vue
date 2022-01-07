<template>
  <div class="card5">
    <div class="box">
      <video muted autoplay loop>
        <source src="@/assets/flower.mp4" type="video/mp4">
      </video>
      <div class="card5-text">
        <p>두번째 이야기</p><br/>
        <p>사람들은 그것을 행복이라 부르기로 했다.</p>
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
  .card5{
    width: 100%;
    position: relative;
    height: 900px;
  }
  video{
    width: 100%;
  }
    
  .card5-text{
    position: absolute;
    top: 25%;
    
    width: 100%;
    
  }
  .card5-text p {
    margin-top: 10px;
    text-align: center;
    font-size: 48px;
    color: whitesmoke;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   
  }

  
</style>
