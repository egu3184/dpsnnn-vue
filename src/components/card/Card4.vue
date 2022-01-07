<template>
  <div class="card4">
   <div class="card4-comment"> 
    <div class="card4-comment-title">
     <span>The box with no shadows</span><br/>
     <span style="font-weight:bold; font-size:50px;">그림자 없는 상자</span><br/>
    </div><br/><br><br/>
     <div class="card4-comment-content" style="font-size:23px; line-height:1.3em;">
      <span>"미안해 누나. 근데 내가 맞았어. 결국 끝도, 시작도, 누나한테 달렸어."</span><br/><br/>
      <span>--</span><br/><br/>
      <span>안다. 비극에 대처하는 방법은 우리 모두 각자 다르다는 것을.</span><br/>
      <span>또한 안다. 어린 나이의 동생에게 막내의 죽음은 감당하기 힘든 일이었을 것이라는 것을.</span><br/><br/>
      <span>하지만 시현아. 누나도 사람이고, 힘들고, 아파.</span><br/><br/>
      <span>초자연적인 물체니 뭐니... 동생의 망상을 견뎌주는 것도 이제 한계다.</span><br/>
      <span>지쳐버린 나는 이 허무맹랑한 문자를 받고, 마지막으로 쓴소리를 해주러 시현이의 집으로 향했다.</span><br/>
    </div>
    <div class="reservationButton">
      <button>예약하기</button>
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
  .card4{
    width: 100%;
    height: 1000px;
    background-color: rgb(51, 27, 63);
    padding: 180px;

  }
  .card4-comment{
    position: absolute;
    left: 15%;
    margin: auto;
    color:rgb(240, 237, 204);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-align: left;
    color: #ACC7B4;
  }

  .card4-comment-title span{
    line-height: 60px;
    font-size: 40px;
  }


  .card4-comment-content span{   
    padding: 0;
    margin: 0;
  }

  .reservationButton{
    margin-top: 80px;
    
  }
  .reservationButton button{
    padding: 30px 100px;
    background-color: rgb(51, 27, 63);
    color: #ACC7B4;
    font-size: 25px;
    border: 3px solid #ACC7B4;
  }
  .reservationButton button:hover{
    background-color: black;
    color: white;
  }

</style>
