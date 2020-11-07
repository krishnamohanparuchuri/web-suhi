<template>
<div class="stream-page">
  <h1>All avilable streams</h1>
  <stream-view v-for="stream in streams" :key="stream._id" 
  :title="stream.title"
  :description="stream.description"
  :id="stream._id"></stream-view>
  <button @click="moveToAddstream">Add Stream</button>
</div>
</template>

<script>
import StreamView from '../components/streams/StreamView.vue'
export default {
  name:'StreamsPage',
  components:{
    'stream-view':StreamView
  },
  methods:{
    moveToAddstream(){
      this.$router.push('/addstream')
    }

  },
   computed: {
        streams() {
            return this.$store.state.streams;
        }
    },
  mounted(){
    this.$store.dispatch('loadStreams')
  }

}
</script>

<style scoped>
.stream-page{
    width:100%;
    height:600px;
    display:flex;
    flex-direction:column; 
}

button{
   height:40px;
   margin-top:100px;
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
stream-view{
  width:100%;
  height:140px;
  border:2px solid orange;
}
</style>