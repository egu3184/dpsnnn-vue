<template>
  <div class="card9">
    <div class="picture9"> 
    </div>   
    <div class="title9">
      <span>사람들은 그것을 행복이라 부르기로 했다.</span>
    </div>
    <div class="content9">
      <span>석우는 루드베키아의 문을 열었다.</span>
    </div>  
    <div class="more"><a href="#">더보기</a></div>
    <div class="line9"><span></span></div>
    <div class="playtime9"><span>1 hr 10 min</span></div>
    <div class="button9"><button>예약하기</button></div>
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
  .card9{
    border:rgb(177, 166, 166) 1px solid;
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

  .line9{
    width: 23rem;
    border: 1px solid rgb(228, 221, 221);
    
    margin-left: 1.8rem;
    display: flex;
    align-items: center;
  }
  .title9{
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

  .content9{
   
    height: 2rem;
    text-align: left;
    padding: 1.5rem 1.75rem;
  }

  .playtime9{
    height: 2rem;
    text-align: left;
    padding: 1.5rem 1.75rem;
  }

  .picture9{
    height: 26rem;
   
    background-image: url("https://static.wixstatic.com/media/7d3d32_b23f50c86c5a482f84707a3db1aaea4c~mv2.jpg/v1/fill/w_413,h_413,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/7d3d32_b23f50c86c5a482f84707a3db1aaea4c~mv2.webp.wixstatic.com/media/7d3d32_fb2337143586484b8ba78480ab1e76eb~mv2.jpg/v1/fill/w_413,h_413,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/7d3d32_fb2337143586484b8ba78480ab1e76eb~mv2.webp");
  }

  .button9 button{
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