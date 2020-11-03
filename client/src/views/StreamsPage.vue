<template>
<div class="stream-page">
  <h1>All avilable streams</h1>
  <button>Add Stream</button>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.stream-page{
    width:100%;
    height:600px;
    display:flex;
    flex-direction:column; 
    margin:50px;
}

button{
   height:40px;
   margin-top:500px;
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
</style>