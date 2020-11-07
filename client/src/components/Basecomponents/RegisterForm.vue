<template>
  <form @submit.prevent="submitRegister">
      <p v-if="showRegister === true" class="register-user">New User is Registered!</p>
      <div class="form-controls">
          <input type="email" placeholder="dummy@test.com" id="email" class="input-email" v-model="email">
         <input type="text" placeholder="USER NAME" id="username" class="input-username" v-model="userName">
         <input type="password" placeholder="*********" id="password" class="input-password" v-model="password">
         <input type="password" placeholder="*********" id="repeat-password" class="input-password" v-model="repeatPassword">
      </div>
      <div class="form-controls-check">
           <input type="checkbox" name="security-check" id="security-check" v-model="isChecked">
           <label for="security-check">Enable the checkBox</label>
      </div>
      <p v-if="isChecked === false" class="error-message">Please enable the CheckBox!!!! </p>
        <button>Register New User</button>
 </form>
</template>

<script>
export default {
    name:'RegisterForm',
    data(){
        return{
            userName:'',
            password:'',
            repeatPassword:'',
            email:'',
            isChecked:true,
            showRegister:false,
        }
    },
    methods:{
        submitRegister(){
            if(this.password === !this.repeatPassword){
                 return;
            } else {

                    const userDetails= {
                        userName:this.userName,
                        password:this.password,
                        email:this.email,
                    }
                    console.log(userDetails)
                this.$store.dispatch('registerUser',userDetails)
            }
            this.showRegister=true;
                this.username='';
                this.password='';
                this.repeatPassword='';
                this.email='';
            setTimeout(()=>{
               this.$router.push('/login');
            },1000)
        }
    }

}
</script>

<style scoped>
form{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
}
.form-controls{
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
.form-controls-check{
    display:flex;
    justify-content: center;
    align-items:center;
    margin:15px;
    width:100%;
}
.form-controls-check>input{
    height:40px;
   margin:10px;
}
.form-controls-check>label{
    height:40px;
   margin:5px;
   font-size:20px;
   font-weight: 700;
   display:flex;
   justify-content: center;
   align-items:center;

}
.register-user{
    font-size:24px;
    font-weight: 900;
    color:peru;
}
button{
   height:40px;
   margin-bottom:50px;
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
.error-message{
    font-size:20px;
    color:red;
    font-display: bold;
}

</style>