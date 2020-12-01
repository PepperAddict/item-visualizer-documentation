<template>
  <header class="header">
    <span class="logo">
      <img v-bind:src="logo" alt="logo" />
    </span>
    <router-link to="/" active-class exact>Home</router-link>
    <router-link to="/methods" active-class>Methods</router-link>
    <router-link to="/how" active-class>How to Use</router-link>
    <router-link to="/contact" active-class>Contact</router-link>
  </header>
</template>

<script>
import logo from "../../assets/logo.svg";
export default {
  name: "Header",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
.logo {
  position: absolute;
  left: 0px;
  width: 50px;
}
.logo img {
  width: 100%;
  height: 100%;
}
.active {
  color: #0085ff;
  border-bottom: 5px solid #0085ff;
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
  color: #0085ff;
}
</style>