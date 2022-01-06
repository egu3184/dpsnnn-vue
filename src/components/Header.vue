<template>
  <div class="header">
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
  </div>  
</template>

<script>
export default {};
</script>

<style>
.header{
  width: 100%;
  background-color: rgb(235, 174, 163);
  font-size: 22px;
  padding: 50px;
  overflow: hidden;
}
li{
  display: inline;
  float: left;
}
li a{
  display: block;
  text-align: center;
  font-weight: bold;
  padding: 18px;
  color: rgb(240, 216, 187); /* 링크의 색상 제거 */
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