<template>
    <div class="container mt-5 mt-4 ">
        <div class="card text-dark bg-light mb-3 mx-auto" style="max-width: 36rem;">
            <div class="card-header">Add a restaurant</div>
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
                    <button type="button" class="btn btn-primary" @click="addRestaurant">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "AddRestaurant",
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
    async addRestaurant(){
        console.log('coucou', this.restaurant);

        if(this.restaurant.name != "" && this.restaurant.contact != "" && this.restaurant.adress != ""){
            let result = await axios.post('http://localhost:3000/restaurant', {
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address
            })

            console.log(result);
            if(result.status == 201){
                this.$router.push({name: "Home"})
            }
        }
        else{
            alert('Please enter all the informations')
        }
    }
  },
  mounted(){
      let user = localStorage.getItem('user-info');
      if(!user){
          this.$router.push({name: "Login"})
      }
  }
}
</script>

<style>

</style>