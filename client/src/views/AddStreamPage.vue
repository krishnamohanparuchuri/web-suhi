<template>
  <div class="addstream-container">
      <div class="nav-section">
        <nav-bar></nav-bar>
      </div>
      <h1>Add New Stream</h1>
      <add-stream></add-stream>
      <footer-section></footer-section>
  </div>
</template>

<script>
import AddStream from '../components/streams/AddStream.vue';
import NavBar from '../components/UI/NavBar.vue';
import FooterSection from '../components/UI/FooterSection.vue'
export default {
    name:'AddStreamPage',
    components:{
        'add-stream':AddStream,
        'nav-bar':NavBar,
       'footer-section':FooterSection,

    }

}
</script>

<style scoped>
 .addstream-container{
     width:100%;
     height:600px;
     display:flex;
     flex-direction:column;
     justify-content: center;
     align-items:center;
 }
 .nav-section{
     width:100%;
 }
 h1{
     color:white;
     margin:30px;
 }
 add-stream{
     height:250px;
     width:85%;
 }
</style>