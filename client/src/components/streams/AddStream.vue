<template>
  <div class="addstream-container">
      <form @submit.prevent="addStream">

      <div class="form-controls">
       <label for="title">Title</label>
       <input type="text" name="title" id="title" placeholder="Stream Name" v-model="stream.title">
      </div>
      <div class="form-controls">
        <label for="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="4" v-model="stream.description"></textarea>

      </div>
      <div class="form-controls">
          <label for="date-time"></label>
          <input type="date" name="date-time" id="date-time" v-model="stream.date">
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
                date:''
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

</style>