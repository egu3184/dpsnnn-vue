<template>
  <header class="header" :class="{headerActive: hideHeader == true}" >
    <!-- :class="{headerActive : scrollPosition > 100}"> -->
        <div class="main" ><a href="#" :class="{headerActive_fontColor: ddd == true}">dpsnnn</a></div>
          <div>
          <ul class="menu">
            <li><a href="#" :class="{headerActive_fontColor: ddd == true}">단편선</a></li>
            <li><a href="#" :class="{headerActive_fontColor: ddd == true}">예약하기</a></li>
            <li><a href="#" :class="{headerActive_fontColor: ddd == true}">첫번째 이야기</a></li>
            <li><a href="#" :class="{headerActive_fontColor: ddd == true}">두번째 이야기</a></li>
            <li><a href="#" :class="{headerActive_fontColor: ddd == true}">Plans & Pricing</a></li>  
          </ul> 
          </div>
      <!-- </div> -->
  </header>  
</template>

<script>
export default {
  data(){

    const header = document.querySelector(".header");

    return {
      scrollPosition : 0,
      hideHeader : false,
      ddd: false,
     

    
    }
  },
  mounted(){
    window.scrollTo(0,0);
    document.addEventListener('scroll', this.scrollEvents);
  },
  unmounted() {
    document.removeEventListener('scroll', this.scrollEvents);
  },

  methods:{
    

    scrollEvents(){
      let currentScrollPosition = window.scrollY;
      if(this.scrollPosition-currentScrollPosition > 0){ //양수면 마우스 휠업
        console.log("휠 업")
        this.hideHeader = false
        this.ddd = false
      }else{  //음수면 마우스 휠다운
        console.log("휠 다운")
        this.hideHeader = true
        this.ddd = true
      }
      this.scrollPosition = currentScrollPosition;
      
    }
    
  }

};
</script>

<style scoped>



header{
  width: 100%;
  /* background-color: transparent; */
  background-color: #45526C;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  overflow: hidden;
  position: fixed;
  z-index: 1000;
  transition: all 0.8s;
  visibility: visible;
  font-family: GowunDodum-Regular;
}


.headerActive{
  background-color: rgba(255, 255, 255, 0.95);
  /* visibility: hidden; */
  /* background-color: rgb(247, 247, 247); */
  transition: all 0.8s;
  border-bottom: 1px solid #d3cfcf;
}

.headerActive_fontColor{
  /* color: rgba(104, 103, 103); */
  color: #45526C !important;
  font-weight: 500;
}

.menu ul{
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.menu li a{
  color: white;
  text-align: center;
  padding: 18px;
  text-decoration: none;
}
.menu li a:hover{
  text-decoration: none;
  /* color:cadetblue; */
}
.main{
  float: left;
  font-size: 30px;
  margin-left: 3rem;
}

.main a{

  color: white;
}

.main a:hover{
  text-decoration: none;
  color:rgb(240, 216, 187);
}
.menu{
  font-size: 1.05rem;
  font-weight: 500;
  padding-top: 0.8rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  
}
@media (max-width: 768px) {
  .menu{
    display: none;
  }
}

</style>