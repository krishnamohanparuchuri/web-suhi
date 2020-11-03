<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name:'App',
}
</script>

<style>
*{
  box-sizing: border-box;
  margin:0;
}
body{
  height:700px;
  width:350px;
  margin:0 auto;
  
}
#app{
  background: #19274A !important;
}


</style>
