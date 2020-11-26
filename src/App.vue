<template>
  <div id="app">
    <Header />

    <router-view/>
    <Footer />

  </div>
</template>


<script>
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
export default {
  name: "App",
  components: {Header, Footer}
}
</script>
<style>
button {
  background: black;
  color: white;
}
</style>
