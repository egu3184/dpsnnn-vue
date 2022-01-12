<template>
  <div class="content-theme-card" v-bind:style=background>
   <div class="card-comment"> 
    <div class="card-comment-enTitle">
      <slot name="egTitle"></slot>
    </div>
    <div class="card-comment-krTitle">
      <slot name="krTitle"></slot>
    </div><br/><br><br/>
     <div class="card-comment-content">
       <slot name="content"></slot>
     </div>
    <div class="reservationButton">
      <button :style="background">예약하기</button>
    </div>
   </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props:{
    theme: Object,
  },
  computed:{

  },
  data() {
    return {
       background: {
         'background-color':this.theme.backgroundColor,
         'color':this.theme.fontColor
       },
       
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
  .content-theme-card{
    width: 100%;
    height: 1100px;
    display: flex;

  }

  .card-comment-krTitle{
    font-weight:bold; 
    font-size:50px;
  }


  .card-comment{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-align: left;
    
    margin-left: 22%;
   
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .card-comment-enTitle span{
    line-height: 60px;
    font-size: 40px;
  }


  .card-comment-content span{   
    font-size:23px; 
    line-height:1.3em;
    padding: 0;
    margin: 0;
  }

  .reservationButton{
    margin-top: 80px;
  }
  .reservationButton button{
    padding: 30px 100px;
    background-color: transparent;
    font-size: 25px;
    border: 3px solid #ACC7B4;
  }
  .reservationButton button:hover{
    background-color: black;
    color: white;
  }

</style>
