import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login'
import AddRestaurant from './components/AddRestaurant'
import UpdateRestaurant from './components/UpdateRestaurant'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: "Home",
        component: Home,
        path: "/"
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up"
    },
    {
        name: "Login",
        component: Login,
        path:"/login"
    },
    {
        name: "AddRestaurant",
        component: AddRestaurant,
        path: "/add-res"
    },
    {
        name: "UpdateRestaurant",
        component: UpdateRestaurant,
        path: "/updt-res/:id"
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router