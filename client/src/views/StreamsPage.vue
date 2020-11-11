<template>
<div class="stream-page">
  <img class="logo-top" alt="logo s" src="../assets/logo_s.png" @click="toggleView = !toggleView">
  <stream-tag v-if="toggleView"></stream-tag>
  <h1>All avilable streams</h1>
  <div class="stream-body">

  <stream-view v-for="stream in streams" :key="stream.id" 
  :title="stream.title"
  :description="stream.description"
  :id="stream.id"
  :date="stream.date" >
  </stream-view>
  </div>
  <div class="streampage-buttons">
  <button @click="moveToAddstream">Add Stream</button>
  <button @click="deleteAllStreams">Delete All Streams</button>
  </div>
  <footer-section></footer-section>
</div>
</template>

<script>
import StreamView from '../components/streams/StreamView.vue';
import FooterSection from '../components/UI/FooterSection.vue';
import StreamTag from '../components/streams/StreamTag.vue';
export default {
  name:'StreamsPage',
  components:{
    'stream-view':StreamView,
    'footer-section':FooterSection,
    'stream-tag':StreamTag,
  },
  data(){
    return{
      toggleView:false,
    }
  },
  methods:{
    moveToAddstream(){
      this.$router.push('/addstream')
    },
    deleteAllStreams(){
      this.$store.dispatch('deleteAllStreams')
    }

  },
   computed: {
        streams() {
            return this.$store.state.streams;
        },      
    },
  mounted(){
    this.$store.dispatch('loadStreams');
  }

}
</script>

<style scoped>
.stream-page{
    width:100%;
    height:600px;
    display:flex;
    flex-direction:column; 
    margin:0 auto;
}
h1{
  margin:0 auto;
  color:peru;
}
.streampage-buttons{
  display:flex;
  width:80%;
  margin:0 auto;

}
stream-tag{
  width:100%;
  height:500px;
  z-index:99;
}

button{
   height:40px;
   width:20%;
   margin:10px;
   display:flex;
   justify-content: center;
   align-items: center;
   border-radius:2px;
   border:2px solid #ffffff;
   box-shadow: 0 1px 1px 1px rgb(170, 170, 194);
   color:rgb(12, 5, 5);
   text-align: center;
   font-size:18px;
   font-weight: 700;
   width:75%;
}
button:hover{
    border: 2px solid rgb(7, 4, 150);
}
.stream-body{
  width:90%;
  min-height:400px;
  display:flex;
  flex-direction:column;
  margin:0 auto;
}
stream-view{
  width:100%;
  height:100px;
  border:2px solid orange;
}
</style>