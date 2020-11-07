<template>
  <div class="addstream-container">
      <h1>Add New Stream</h1>
      <add-stream></add-stream>
  </div>
</template>

<script>
import AddStream from '../components/streams/AddStream.vue';
export default {
    name:'AddStreamPage',
    components:{
        'add-stream':AddStream,
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
</style>