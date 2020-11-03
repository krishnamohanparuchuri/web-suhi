<template>
  <div class="login-form">
      <form @submit.prevent="submitLogin">
        <div class="form-controls">
          <input type="text" placeholder="USER NAME" id="username" class="input-username" v-model="enteredUsername">
          <input type="password" placeholder="*********" id="password" class="input-password" v-model="enteredPassword">
        </div>
        <button>Sign In</button>
      </form>
      <button class ="register-buuton" @click="moveToRegister">Register</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            enteredUsername:'',
            enteredPassword:''
        }
    },
    methods:{
       submitLogin(){
          const details={
             username:this.enteredUsername,
            password:this.enteredPassword
          }
        console.log(details)
       },
        moveToRegister(){
            console.log('moving to register Page')
            this.$router.push('/register')
        }
    
    }

}
</script>

<style scoped>
.login-form{
    width:80%;
    height:300px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
}
form{
    display:flex;
    flex-direction:column;
    align-items:center;

}
form-controls{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    margin:5px;
    width:100%;
}
.form-controls>input{
   height:40px;
   margin:10px;
   border-radius:2px;
   border:2px solid #ffffff;
   color:rgb(12, 5, 5);
   text-align: center;
   font-size:18px;
   font-weight: 700;
}
button{
   height:40px;
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

</style>