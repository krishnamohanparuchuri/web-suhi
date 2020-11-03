<template>
  <div class="register">
    <nav-bar></nav-bar>
    <div class="register-body">
      <body-section></body-section>
      <register-form></register-form>
    </div>
    <footer-section></footer-section>
  </div>
</template>

<script>
import NavBar from '../components/UI/NavBar';
import BodySection from '../components/UI/BodySection'
import FooterSection from '../components/UI/FooterSection.vue';
import RegisterForm from '../components/Basecomponents/RegisterForm.vue';
export default {
  name:'RegisterPage',
  components:{
    'register-form':RegisterForm,
    'nav-bar':NavBar,
    'body-section':BodySection,
    'footer-section':FooterSection,
  }
}
</script>

<style scoped>
.register-body{
   height:500px;
   width:100%;
   display:flex;
   flex-direction:column;
   justify-content: center;
   align-items:center;
}
register-form{
  height:250px;
  display:flex;
  width:100%;
  flex-direction:column;
  justify-content: center;
  align-items:center;
}
  
</style>
