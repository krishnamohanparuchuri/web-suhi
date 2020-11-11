<template>
  <div class="stream-container">
       <div class="stream-body">

        <p class="stream-date">{{date}}</p>
        <div class="stream-section">
           <div class="stream-description">
           <p>{{ description}}</p>
           <button @click="deleteStream(id)">Delete</button>
           </div>
          <p class="stream-title">-{{ title }}</p>
       </div>
       <div>
        <div class="tag-section">

         <tag-view v-for="tag in tags" :key="tag.id" :id="tag.id" :tagName="tag.tagName"></tag-view>
        <div class= "small-triangle"></div>
        </div>
       </div>
      </div>

  </div>
</template>

<script>
import TagView from '../Basecomponents/TagView.vue'
export default {
  name: "StreamView",
  props: ["id", "title", "description","date"],
  components:{
    'tag-view':TagView
  },
  data() {
    return {
    };
  },
  methods: {
    deleteStream(id){
      console.log(id)
      const streamId={
        id:id
      };
      console.log(streamId)
      this.$store.dispatch('deleteStream',streamId)
    }
  },
  computed: {
        tags() {
            return this.$store.state.tags;
        },      
    },
  mounted(){
    this.$store.dispatch('loadTags')
  }
};
</script>

<style scoped>
.stream-container {
  width: 100%;
  min-height: 120px;
  display:flex;
  flex-direction: column;
  margin-bottom:15px;
}
.stream-body{
  background-color: white;
  display:flex;
  flex-direction:column;
  margin:5px;
}
.stream-date{
  font-display: 400;
  margin:5px;
}
.stream-description{
  display:flex;
 min-height:50px;
 font-size:16px;
 font-weight: 600;
 margin-left:5px;
}
.stream-description>button{
  height:20px;
  width:50px;
  font-weight: 500;
  margin:5px;
}
 .stream-title{
  font-size:18px;
  font-weight: bolder;
  font-family:Arial, Helvetica, sans-serif;
  float:left;
  margin-left:20px;
}
.small-triangle{
      float:right;
      width: 0;
      height: 0;
      margin-left:5px;
      border-top: 25px solid white;
      border-right: 20px solid transparent;
      box-shadow:2px 0px 0px 2px rgba(0,0,0,0.1);   
}
.tag-section{
  display:flex;
   background: #19274A;
   height:30px;
  font-family: PT Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
color: #00B2FF;
}
tag-view{
  width:85%;
}
</style>
