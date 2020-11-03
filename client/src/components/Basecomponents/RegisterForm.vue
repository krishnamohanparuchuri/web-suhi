<template>
  <form @submit.prevent="submitRegister">
      <div class="form-controls">
         <input type="text" placeholder="USER NAME" id="username" class="input-username" v-model="inputUsername">
         <input type="password" placeholder="*********" id="password" class="input-password" v-model="inputPassword">
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
            inputUsername:'',
            inputPassword:'',
            isChecked:true
        }
    },
    methods:{
        submitRegister(){
            if(!this.isChecked){
                console.log('checkbox must enabled')
                this.isChecked=false;
                 return;
            } else {

                    const userDetails= {
                        userName:this.inputUsername,
                        password:this.inputPassword
                    }
                    console.log(userDetails)
                }
                this.inputUsername='';
                this.inputPassword='';
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