<template>
      <div class="image-section" @click="moveToLoginPage">
        <img class="logo-body" alt="logo shui" src="../../assets/logo_shui.png">
    </div>
</template>

<script>
export default {
    name:'BodySection',
    methods:{
      moveToLoginPage(){
          console.log('moving to login route')
        this.$router.push('/login')
     }
  }

}
</script>

<style scoped>
.image-section{
  height:200px;
  display:flex;
  justify-content:center;
  align-items:center;
}
.logo-body{
  width:100px;
  height:100px;
}
</style>