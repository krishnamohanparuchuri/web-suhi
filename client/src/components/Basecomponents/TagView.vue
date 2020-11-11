<template>
<div class="tag-container">
  <p>#{{tagName}}</p>
</div>
</template>

<script>
export default {
    name:"TagView",
    props:['tagName','id'],
    data(){
        return{

        }
    },


}
</script>

<style scoped>
div{
  width:100%;
  display:flex;
  flex-wrap:wrap;
}

</style>