<template>
  <div class="navbar-section" @click="moveToHome">
      <img class="logo-top" alt="logo s" src="../../assets/logo_s.png">
  </div>
</template>

<script>
export default {
  name:"NavBar",
  methods:{
    moveToHome(){
      this.$router.push('/login')
    }
  }

}
</script>

<style>

.logo-top{
  width:30px;
  height:40px;
  margin-left:60px;
}

</style>