<template>
    <div class="container mt-5 mt-4 ">
        <div class="card text-dark bg-light mb-3 mx-auto" style="max-width: 36rem;">
            <div class="card-header">Update  a restaurant</div>
            <div class="card-body">
                <form>
                    <div class="mb-3">
                        <input placeholder="Enter The Name" type="text" name="name" v-model="restaurant.name"
                        class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <input placeholder="Enter The Contact Information" type="text" name="contact" v-model="restaurant.contact"
                        class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3">
                        <input placeholder="Enter The Address" type="text" name="address" v-model="restaurant.address"
                        class="form-control" id="exampleInputPassword1">
                    </div>
                    <button type="button" class="btn btn-primary" @click="updateRestaurant">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "UpdateRestaurant",
    data(){
        return {
            restaurant: {
            name: "",
            address: "",
            contact: "",
        }
    }
    },
    methods: {
        async updateRestaurant(){

            const result = await axios.put('http://localhost:3000/restaurant/'+this.$route.params.id, {
                name: this.restaurant.name,
                address:this.restaurant.address,
                contact: this.restaurant.contact,
            });

            if(result.status == 200){
                this.$router.push({name: "Home"});
            }
            console.log(result);

      }
  },
    async mounted() {
        let user = localStorage.getItem("user-info")
        if(!user){
            this.$router.push({name: "Login"})
        }
        const result = await axios.get('http://localhost:3000/restaurant?id='+this.$route.params.id)

        this.restaurant = result.data[0]
    }
}
</script>

<style>

</style>