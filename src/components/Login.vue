<template>
    <!-- <img class="logo" src="../assets/logoResto.png" alt="restaurent logo"/>
    <h1>Login</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="login">Login</button>
        <p class="subtext"> don't have an account ?
            <router-link to="sign-up">Sign-up</router-link>
        </p>
    </div> -->
    <div class="col d-flex justify-content-center my-5">

        <div class="card display:inline text-center" style="width: 18rem;">
            <img src="../assets/logoResto.png" class="card-img-top" alt="restaurent logo">
            <div class="card-body">
                <h5 class="fs-3 card-title my-2">Login</h5>

                <div class="input-group my-3">
                    
                    <input type="text" v-model="email" class="form-control" placeholder="Enter Email">
                </div>
                <div class="input-group mb-3">
                    <input type="password" v-model="password" class="form-control" placeholder="Enter Password" >
                </div>

                <button class="btn btn-secondary mt-4" v-on:click="login">Login</button>
                <!-- <a href="#" class="btn btn-primary mt-4">Go somewhere</a> -->
                <p class="fs-6 fw-light mt-4">don't have an account ? 
                    <router-link to="login">Sign Up</router-link>
                </p>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Login",
    data(){
        return {
            email:'',
            password:'',
        }
    },
    methods:{
        async login(){
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )

            if(result.status == 200 && result.data.length > 0){
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({name: "Home"})
            }

            console.log(result);
        }
    },
    mounted(){
        const user = localStorage.getItem('user-info')
        if(user){
            this.$router.push({name: "Home"})
        }
    }
}
</script>

<style>

</style>