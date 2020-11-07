<template>
  <div class="stream-container">
     <li>
      <p>{{ title}}</p>
      <p>{{ description}}</p>
      <button>Delete</button>
    </li> 
  </div>
</template>

<script>
export default {
    name:"StreamView",
    props:['id','title','description'],
    data(){
        return {

        }
    },
    methods:{

    },


}
</script>

<style scoped>
.stream-container{
    width:90%;
    height:100px;
    border:2px solid black;
    margin:5px;
    border-radius:2px;
    background-color:white;
}
</style>