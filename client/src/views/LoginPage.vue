<template>
  <div>
      <nav-bar />
      <div class="body-login">
        <body-section></body-section>
        <login-form></login-form>
      </div>
    <footer-section></footer-section>
  </div>
</template>

<script>
import NavBar from '../components/UI/NavBar';
import BodySection from '../components/UI/BodySection'
import FooterSection from '../components/UI/FooterSection.vue';
import LoginForm from '../components/Basecomponents/LoginForm.vue'
export default {
    name:'LoginPage',
    components:{
    'nav-bar':NavBar,
    'body-section':BodySection,
    'footer-section':FooterSection,
    'login-form':LoginForm
    },
   }
</script>

<style scoped>
body-login{
    height:500px;
    display:flex;
    justify-content:center;
    align-items:center;
}
login-form{
    height:150px;
}
.register-button{
    margin:-200px 0 50px 0;
    
    display:flex;
    justify-content: center;
    align-items:center;
}

</style>