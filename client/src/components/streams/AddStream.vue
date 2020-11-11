<template>
  <div class="addstream-container">
      <form @submit.prevent="addStream" class="form-section">
      <div class="form-controltop">
       <label for="title">Title</label>
       <input type="text" name="title" id="title" placeholder="Stream Name" v-model="stream.title">
      </div>
      <div class="form-controlbottom">
        <label for="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="4" v-model="stream.description"></textarea>
      </div>
      <button>Add Stream</button>
      </form>
  </div>
</template>

<script>
export default {
    name:"AddStream",
    data(){
        return{
            stream:{
                title:'',
                description:'',
            }
        }
    },
    computed:{

    },
    methods:{
        addStream(){
            console.log(this.stream)
            this.$store.dispatch('addStream',this.stream);
            this.$router.push('/streams')
        }
    }

}
</script>

<style scoped>
.addstream-container{
    display:flex;
    justify-content: flex-start;
    align-items: center;
    height:600px;
}
.form-section{
    width:100%;
    height:300px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
}
.form-controltop{
    height:60px;
    width:80%;
}
.form-controltop >input{
    height:40px;
    width:80%;
}
.form-controltop >label{
    height:40px;
    width:50%;
    font-family: PT Sans;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 31px;
letter-spacing: 0em;
text-align: center;
margin-right:5px;
}
.form-controlbottom{
    height:60px;
    width:80%;
}
.form-controlbottom >label{
    height:40px;
    width:50%;
    font-family: PT Sans;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 31px;
letter-spacing: 0em;
text-align: center;
margin-right:5px;
}
.form-controlbottom >textarea{
    height:80px;
    width:100%;
    font-family: PT Sans;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 31px;
letter-spacing: 0em;
text-align: center;
margin-right:5px;
}
button{
    height:40px;
    margin-top:70px;
    width:60%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:bold;
    font-size:24px;
    box-shadow: 0 1px 1px 1px black;
}
button:hover{
    cursor: pointer;
    border:1px solid blue;
}
</style>