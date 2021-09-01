<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <router-link class="navbar-brand" to="/">Resto Manager</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav d-flex justify-content-end w-auto">
                <router-link class="nav-link" to="add-res">Add restaurent</router-link>
                <router-link class="nav-link" to="sign-up">Sign Up</router-link>
                <router-link class="nav-link" to="login">Login</router-link>
                <a v-on:click="logout" class="nav-link" href="#">Logout</a>
            </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: "Header",
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name: "Login"})
        }
    }
}
</script>

<style>

</style>