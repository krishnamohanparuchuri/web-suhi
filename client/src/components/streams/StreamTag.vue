<template>
  <div class="stream-tag">
      <div class="body-section">
          <img class="logo-s" src="../../assets/s_png.png" alt="logo s">
          <h2>Streams</h2>
          <ul>
            <li v-for="tag in tags"
            :key="tag.id"
            :id="tag.id">
            <div class="tags-div" @click="removeTag(tag.id)">
              <p>#{{tag.tagName}}</P>
              <img src="../../assets/close.png" alt="">
            </div>
            </li>
          </ul>
          <form @submit.prevent="addTag">
            <select id="tags-desc" name="tags-desc" v-model="inputTag">
                <option value="" selected disabled>smooth_criminal</option>
                <option value="Stockholm" >Stockholm</option>
                <option value="Märsta">Märsta</option>
                <option value="Linköping">Linköping</option>
                <option value="Norköping">NorKöping</option>
            </select>
            <button>
              <img class="submit-click" src="../../assets/click.png" alt="">
            </button>
          </form>
          <button class="remove-user" @click="removeAllTags" >Shit, Theyre on to me!</button>

      </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      inputTag:""
    }
  },
  methods:{
    addTag(){
      const tagDetails ={
        tagName:this.inputTag
      }
      console.log(tagDetails)
      this.$store.dispatch('addTag',tagDetails)
    },
    removeTag(id){
      const tagInfo={
        id :id
      }
      console.log(tagInfo)
      this.$store.dispatch('deleteTag',tagInfo);

    },
    removeAllTags(){
      this.$store.dispatch('deleteAllTags')
    }
  },
  computed: {
    tags(){
            return this.$store.state.tags;
            }
  },
  mounted(){
    this.$store.dispatch('loadTags')
  }

}
</script>

<style scoped>
.stream-tag{
  position:fixed;
  top:50px;
  width:350px;
  margin:0 auto;
  background-color: #EF4343;
  height:400px;
  position:absolute;
}
body-section{
  display:flex;
  width:100%;
  justify-content: center;
  align-items: center;
}
.logo-s{
  width:50px;
  height:30px;
  margin-left:20px;
}
h2{
  display:flex;
  height:50px;
  justify-content: flex-start;
  align-items:flex-start;
  margin-left:20px;
  font-family: PT Sans;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 48px;
letter-spacing: 0em;
text-align: left;

}
ul{
  height:150px;
  display:flex;
  flex-wrap:wrap;
}
li{
  list-style: none;
  margin:5px;
}
.tags-div{
  display:flex;
  flex-wrap:wrap;
  border-radius: 4px;
}
p{
  width:80px;
  height:20px;
  background: rgba(255, 255, 255, 0.1);
  font-family: PT Sans;
font-size: 16px;
font-style: italic;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: left;

  
}
.tags-div>img{
  width:30px;
  height:20px;
  background: rgba(255, 255, 255, 0.2);
}
form{
  min-height:50px;
  display:flex;
  height:50px;
  justify-content: center;
  align-items:center;

}
form>select{
  width:60%;
  height:40px;
  background-color: #EF4343;
  border:2px solid white;
  color:white;
  font-family: PT Sans;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 36px;
letter-spacing: 0em;
text-align: left;

}
form>button{
  width:20%;
  height:40px;
}
.submit-click{
  width:35px;
}
.remove-user{
  display:flex;
  height:50px;
  justify-content: center;
  align-items:center;
  margin:0px 55px 0 55px;
  width:70%;
  background-color:#082756;;
  font-family: PT Sans;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 36px;
letter-spacing: 0em;
text-align: center;


}


</style>