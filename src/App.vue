<template>
  <Header/>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <router-view/>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo{
    width: 100px;
}
.register input, .login input{

    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin: 30px auto;
}
.register button, .login button{
    width: 320px;
    height: 40px;
    color: #fff;
    background-color: #000;
    border: none;
    cursor: pointer;
}
.register button:hover, .login button:hover{
    background-color: #fff;
    color: #000;
    border: 3px solid #000;
    cursor: pointer;
}
a{
  text-decoration: underline;
  color: black;
}
.subtext{
  font-size: 0.8rem;
}
</style>
