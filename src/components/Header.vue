<template>
  <header>
    <ul>
      <li class="main"><a href="#">dpsnnn</a></li>
      <ul class="menu">
        <li><a href="#">단편선</a></li>
        <li><a href="#">예약하기</a></li>
        <li><a href="#">첫번째 이야기</a></li>
        <li><a href="#">두번째 이야기</a></li>
        <li><a href="#">Plans & Pricing</a></li>
       </ul> 
    </ul> 
  </header>  
</template>

<script>
export default {};
</script>

<style>
header{
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  padding: 70px;
  overflow: hidden;
  position: fixed;
  z-index: 1000;
}
ul{
  list-style: none;
  display: flex;
  justify-content: space-between;
}

li a{
  text-align: center;
  padding: 18px;
  color: white;
  text-decoration: none;
}
li a:hover{
  text-decoration: none;
  color:cadetblue;
}
.main{
  float: left;
  font-size: 30px;
}
.main a:hover{
  text-decoration: none;
  color:rgb(240, 216, 187);
}
.menu{
  float: right;
  
}

</style>