<template>
  <footer>
    <router-link to="/">Home</router-link>
    <router-link to="/terms">Terms and Condition</router-link>
    <router-link to="/privacy">Provicy Policy</router-link>
    <router-link to="/contact">Contact</router-link>
  </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
footer {
    position: sticky;
    bottom: 0px;
    width: 100%;
    display: flex;
    grid-gap: 20px;
    background: white;
    padding: 20px;
    border-top: 1px solid #ccc;
}
</style>