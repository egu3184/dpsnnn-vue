<template>
  <div class="card8">
    <div class="picture8" v-bind:style="{backgroundImage:'url('+this.background+')'}"> 
    </div>   
    <div class="title8">
      <slot name="title"></slot>
    </div>
    <div class="content8">
      <slot name="content"></slot>
    </div>  
    <div class="more"><a href="#">더보기</a></div>
    <div class="line8"><span></span></div>
    <div class="playtime8">
      <slot name="playtime"></slot>
    </div>
    <div class="button8"><button>예약하기</button></div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props:{
    background: {
      type:String,
    }
  },
  data() {
    return {
     
       
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

  .line8{
    width: 23rem;
    border: 1px solid rgb(228, 221, 221);
    
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
   
    background-image: url("");
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