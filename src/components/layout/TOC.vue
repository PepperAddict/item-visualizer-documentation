<template>
  <div class="toc-container">
    <h1 id="top">HOW TO USE</h1>
    <h2>
      Here is a helpful guide with explanations, images, and videos to help get
      you started using Item Visualizer to help explain your item better.
    </h2>
    <h3>Explore by Topic</h3>
    <ul class="toc-buttons">
      <li @click="goto('how-to-use')">How To Use</li>
      <li v-bind:key="i.id" v-for="i in toc" @click="goto(i.id)">
        {{ i.topic }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TOC",
  props: ["toc"],
  methods: {
    goto(refName) {
      let id = document.getElementById(refName);
      id.scrollIntoView({ behavior: "smooth" });
    },
  },
  mounted() {
    let theHash = document.location.hash.split("#")[2];
    let docu = document.getElementById(theHash);
    document.onreadystatechange = () => {
      if (theHash && docu) {
        docu.scrollIntoView({ behavior: "smooth" });
      }
    };
  },
};
</script>

<style>
.toc-container h2 {
  color: #707070;
  text-transform: none;
}
.toc-container {
  padding-top: 50px;
  margin-bottom: 100px;
  display: grid;
  grid-template-rows: auto 200px 50px 1fr;
}
.toc-buttons {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.toc-buttons li {
  border: 1px solid #b2b2b2;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
}

.toc-buttons li:hover {
  background: #0085ff;
  transition: 0.2s;
  border: 1px solid #0085ff;
}

.toc-buttons li a {
  width: 100%;
  height: 100%;
  display: block;
}
.toc-buttons li:hover {
  color: white;
}

a {
  text-decoration: none;
  color: #0085ff;
}
</style>