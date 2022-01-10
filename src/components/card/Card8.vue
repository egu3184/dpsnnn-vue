<template>
  <div class="card8">
    <div class="picture8"> 
    </div>   
    <div class="title8">
      <span>그림자 없는 상자</span>
    </div>
    <div class="content8">
      <span>“결국 끝도, 시작도, 누나한테 달렸어.”</span>
    </div>  
    <div class="more"><a href="#">더보기</a></div>
    <div class="line8"><span></span></div>
    <div class="playtime8"><span>1 hr 10 min</span></div>
    <div class="button8"><button>예약하기</button></div>
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
  .card8{
    border:rgb(85, 82, 82) 3px solid;
    width: 20vw;
    height: 75vh;
    display: flex;
    flex-direction: column;
    
  }
  /*
  .more::after{
    content: "";
    display: block;
    width: 20rem;
    padding-left: 10rem;
    
    border-bottom: 1px solid red;
  }
  */

  .line8{
    width: 23rem;
    border-bottom: 1px solid rgb(138, 135, 135);
    margin-left: 1.8rem;
    display: flex;
    align-items: center;
  }
  .title8{
    height: 3rem;

    padding: 1.5rem 1.75rem;
    font-weight: bold;
    font-size: 20px;
  }

  .more{
    height: 2.5rem;
    margin-top: 0.8rem;
  }
  .more a{
    padding: 1.5rem 1.75rem;
    color: gray;
    text-decoration: underline; 
    text-underline-position:under;
  }

  .content8{
   
    height: 2rem;
    text-align: left;
    padding: 1.5rem 1.75rem;
  }

  .playtime8{
    height: 2rem;
    text-align: left;
    padding: 1.5rem 1.75rem;
  }

  .picture8{
    height: 26rem;
   
    background-image: url("https://static.wixstatic.com/media/7d3d32_fb2337143586484b8ba78480ab1e76eb~mv2.jpg/v1/fill/w_413,h_413,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/7d3d32_fb2337143586484b8ba78480ab1e76eb~mv2.webp");
  }

  .button8 button{
    padding: 0.8rem 2rem;
    background-color: transparent;
    color: gray;
    font-size: 20px;
    border: 3px solid gray;
    display: flex;
    margin-top: 0.5rem;
    margin-left: 1.45rem;
  }
  
</style>