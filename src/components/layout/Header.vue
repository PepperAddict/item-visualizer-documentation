<template>
  <header class="header">
    <router-link to="/" active-class exact>Home</router-link>
    <router-link to="/methods" active-class>Methods</router-link>
    <router-link to="/how" active-class>How to Use</router-link>
    <router-link to="/contact" active-class>Contact</router-link>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.active {
  color: #0085FF;
  border-bottom: 5px solid #0085FF;
}
header {
  display: flex;
  grid-gap: 30px;
  justify-content: flex-end;
  padding: 20px;
  box-sizing: border-box;
  position: sticky;
  top: 0px;
  background: white;
  z-index: 2;
  height: 90px;
}

header a {
  text-transform: uppercase;
  font-weight: 600;
  color: black;
  transition: 0.5s;
}
header a:hover {
  color: #0085FF;
}
</style>