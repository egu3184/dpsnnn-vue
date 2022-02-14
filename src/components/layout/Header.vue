<template>
  <header :class="{headerActive : scrollPosition > 100}">
      <!-- <div :class="{headerNoActive : scrollPosition > 182}"> -->
        <div class="main"><a href="#">dpsnnn</a></div>
        <div :class="{headerNoActive : scrollPosition > 182}">
          <ul class="menu" >
            <li><a href="#">단편선</a></li>
            <li><a href="#">예약하기</a></li>
            <li><a href="#">첫번째 이야기</a></li>
            <li><a href="#">두번째 이야기</a></li>
            <li><a href="#">Plans & Pricing</a></li>
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
      this.scrollPosition = window.scrollY;
      console.log(this.scrollPosition);
      
      // if(this.scrollPosition > 100){
      //   this.isScrolled = true
      // }else if( this.scrollPosition == 0){
      //   this.isScrolled = false      
      // }

    }
    
  }

};
</script>

<style scoped>
header{
  width: 100%;
  /* background-color: transparent; */
  background-color: #2c2524;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  overflow: hidden;
  position: fixed;
  z-index: 1000;
  transition: all 0.8s;
  visibility: visible;
}

.headerActive{
  background-color: transparent;
  visibility: hidden;
  /* background-color: rgb(247, 247, 247); */
  transition: all 0.8s;
}

.menu ul{
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.menu li a{
  text-align: center;
  padding: 18px;
  color: white;
  text-decoration: none;
}
.menu li a:hover{
  text-decoration: none;
  color:cadetblue;
}
.main{
  float: left;
  font-size: 30px;
  
}
.main a{
  color: white;
}
.main a:hover{
  text-decoration: none;
  color:rgb(240, 216, 187);
}
.menu{
  
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