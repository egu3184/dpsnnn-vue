<template>
  <div class="card3">
   
    <div class="box">
      <video muted autoplay loop>
        <source src="@/assets/file.mp4" type="video/mp4">
      <h1> style="font-size:50px; color:white;">첫번째 이야기</h1>
      </video>
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
    height: 100px;
    background-color: rgba(207, 241, 210, 0.747);

  }
</style>
