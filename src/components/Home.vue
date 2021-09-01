<template>
    <h1 class="my-5 py-5">Hello {{name}}</h1>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Address</th>
                <th scope="col">Actions</th>
                </tr> 
            </thead>
            <tbody>
                <tr v-for="item in restaurant" :key="item.id">
                <th scope="row">{{item.id}}</th>
                <td>{{item.name}}</td>
                <td>{{item.contact}}</td>
                <td>{{item.address}}</td>
                <td> <router-link :to="'/updt-res/'+item.id">update</router-link> / <button @click="deleteRestaurant(item.id)" class="btn btn-secondary btn-sm">x</button></td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    name: "Home",
    data(){
         return {
             name: "",
             restaurant: []
         }
    },
    components: {
    },
    methods: {
        async deleteRestaurant(id){
            let result = await axios.delete("http://localhost:3000/restaurant/"+id)

            if(result.status == 200){
                this.loadData()
            }
        },
        async loadData(){
            let user = localStorage.getItem('user-info')
            this.name = JSON.parse(user).name
            if(!user){
                this.$router.push({name: "SignUp"})
            }

            let result = await axios.get('http://localhost:3000/restaurant')
            this.restaurant = result.data;
        } 
    },
    async mounted(){
        this.loadData()
    }
}
</script>

<style>

</style>