<template>
  <header class="header">
    <router-link to="/">Home</router-link>
<router-link to="/methods">Methods</router-link>
    <router-link to="/how">How to Use</router-link>
    <router-link to="/contact">Contact</router-link>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
display: flex;
    grid-gap: 30px;
    justify-content: flex-end;
    padding: 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    position: sticky;
    top: 0px;
    background: white;
    z-index: 2;
}

header a {
  text-transform: uppercase;
}
</style>