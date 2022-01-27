<template>
  <header>
      <div class="main"><a href="#">dpsnnn</a></div>
      <ul class="menu">
        <li><a href="#">단편선</a></li>
        <li><a href="#">예약하기</a></li>
        <li><a href="#">첫번째 이야기</a></li>
        <li><a href="#">두번째 이야기</a></li>
        <li><a href="#">Plans & Pricing</a></li>
       </ul> 
  </header>  
</template>

<script>
export default {};
</script>

<style scoped>
header{
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 70px;
  overflow: hidden;
  position: fixed;
  z-index: 1000;
}
header ul{
  list-style: none;
  display: flex;
  justify-content: space-between;
}

header li a{
  text-align: center;
  padding: 18px;
  color: white;
  text-decoration: none;
}
header li a:hover{
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
  float: right;
}
@media (max-width: 768px) {
  .menu{
    display: none;
  }
}

</style>