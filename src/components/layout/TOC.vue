<template>
  <div class="toc-container">
    <h1>Item visualizer documentation</h1>
    <h2>
      A guide to using this Monday View app to help explain your item better.
    </h2>
    <p>Explore by Topic</p>
    <ul class="toc-buttons">
      <li v-bind:key="i.id" v-for="i in toc">
        <a v-bind:href="'#' + i.id">{{ i.topic }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TOC",
  props: ["toc"],
};
</script>

<style>

.toc-buttons {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.toc-buttons li {
    border: 1px solid #B2B2B2;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
}
.toc-buttons li a {
    width: 100%;
    height: 100%;
    display: block;
}

a {
  text-decoration: none;
  color: #0085FF;
}
</style>