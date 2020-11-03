<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="home-body">
      <body-section></body-section>
    </div>
    <footer-section></footer-section>    
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/UI/NavBar.vue';
import BodySection from '../components/UI/BodySection'
import FooterSection from '../components/UI/FooterSection.vue';

export default {
  name: 'Home',
  components:{
    'nav-bar':NavBar,
    'body-section':BodySection,
    'footer-section':FooterSection,
  },
  methods:{

  }
  
}
</script>
<style scoped>
.home-body{
  height:500px;
  display:flex;
  justify-content: center;
  align-items:center;
}

</style>