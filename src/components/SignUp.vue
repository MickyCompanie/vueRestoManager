<template>
    <!-- <img class="logo" src="../assets/logoResto.png" alt="restaurent logo"/>
    <h1>Sign up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="signUp">Sign Up</button>
        <p> 
            <router-link to="login">Login</router-link>
        </p>
    </div> -->

    <div class="col d-flex justify-content-center mt-5">
        <div class="card display:inline text-center" style="width: 18rem;">
            <img src="../assets/logoResto.png" class="card-img-top" alt="restaurent logo">
            <div class="card-body">
                <h5 class="fs-3 card-title my-2">Sign Up</h5>

                <div class="input-group my-3">
                    
                    <input type="text" v-model="name" class="form-control" placeholder="Enter Name">
                </div>
                <div class="input-group my-3">
                    
                    <input type="text" v-model="email" class="form-control" placeholder="Enter Email">
                </div>
                <div class="input-group mb-3">
                    <input type="password" v-model="password" class="form-control" placeholder="Enter Password" >
                </div>

                <button class="btn btn-secondary mt-4" v-on:click="signUp">Sign Up</button>
                <!-- <a href="#" class="btn btn-primary mt-4">Go somewhere</a> -->
                <p class="fs-6 fw-light mt-4">already have an account ? 
                    <router-link to="login">Login</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name : 'SignUp',
    data(){
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signUp(){
            let result = await axios.post("http://localhost:3000/users", {
                 name: this.name,
                 email: this.email,
                 password: this.password
            });

            console.log(result);
            if(result.status == 201){
                
                this.$router.push({name: "Home"})
                localStorage.setItem("user-info", JSON.stringify(result.data))
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info')
        if(user){
            this.$router.push({name: "Home"})
        }
    }
}
</script>

<style>

</style>