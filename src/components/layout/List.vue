<template>
  <ul v-if="lists">
    <li v-bind:key="index" v-for="(list, index) in lists">
      <p v-html="list.text">{{ list.text }} </p>
      <img v-bind:src="list.image.src" v-bind:alt="list.image.alt" v-if="list.image" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "Lists",
  props: ["lists"],
};
</script>

<style scoped>
ul {
  list-style: decimal;
}
</style>