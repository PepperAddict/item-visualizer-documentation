<template>
  <ul v-if="lists">
    <li v-bind:key="index" v-for="(list, index) in lists" v-html="list.text">
      {{ list.text }}
      <img v-bind:src="list.image.src" v-bind:alt="list.image.alt" />
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