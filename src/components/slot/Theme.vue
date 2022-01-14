<template>
  <div class="content-theme-card" v-bind:style=styleObject>
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
      <button v-bind:style=styleObject>예약하기</button>
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
       styleObject: {
         'background-color':this.theme.backgroundColor,
         'color':this.theme.fontColor,
         'border-color':this.theme.fontColor 
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
    display: flex;
    
  }

  .card-comment{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-align: left;
    margin: 10% 20%;
  }

  @media (min-width: 769px){
   
   .card-comment-content{
     font-size:23px; 
   }
   
   .reservationButton button{
      padding: 30px 100px;
      font-size: 25px;
      border: 3px solid ;
   }
   .card-comment-enTitle span{
      line-height: 60px;
      font-size: 40px;
    }  
    .card-comment-krTitle{
      font-weight:bold; 
      font-size:50px;
    }
    .reservationButton{
    display: flex;
    justify-content: left;
    margin-top: 4rem;
  } 
  }

  @media (max-width:768px){
    .card-comment{
      margin-left:  11%;
      margin-right: 11%;
    }

    .card-comment-enTitle span{
        line-height: 30px;
        font-size: 22px;
    }

    .card-comment-content span{
      font-size: 17px;
    }  
    .reservationButton button{
      padding: 15px 50px;
      font-size: 15px;
      border: 3px solid;
      justify-content: center;
   }
    .card-comment-krTitle{
      font-weight:bold; 
      font-size:30px;
    }
    .reservationButton{
      display: flex;
      justify-content: center;
      margin-top: 4rem;
   }   
  }

  


  .card-comment-content span{   
   
    line-height:1.3em;
    padding: 0;
    margin: 0;
  }

  .reservationButton button{
    background-color: transparent;
    border: 3px solid;
  }
  .reservationButton button:hover{
    background-color: black;
    color: white;
  }

</style>
