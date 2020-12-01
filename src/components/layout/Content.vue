<template>
  <div class="content-container">
    <div class="toc-container" id="how-to-use">
      <h2>How to use</h2>
      <p>
        Item Visualizer is made to help expand your item with visualizations
        such as an image, video, or a file sent to your item's update. To do so,
        there are three methods that can be used.
      </p>
      <p>Methods</p>
      <ul class="toc-buttons">
        <li @click="goto('show-the-website')">Show the Website</li>
        <li @click="goto('show-the-idea')">Show the Idea</li>
        <li @click="goto('show-the-video')">Show the Video</li>
      </ul>
    </div>

    <div
      v-bind:id="content.id"
      v-bind:key="content.id"
      v-for="content in contents"
      class="section-container"
    >
      <h2>{{ content.topic }}</h2>

      <div class="intro">
        <div class="intro-text">
          <p
            v-bind:key="index"
            v-for="(intro, val, index) in content.intro.text"
            v-html="intro"
          >
            {{ intro }}
          </p>
        </div>
        <a
          v-if="content.intro.image"
          v-bind:href="content.intro.image.src"
          target="_blank"
        >
          <img
            v-if="content.intro.image"
            v-bind:src="content.intro.image.src"
            v-bind:alt="content.intro.image.alt"
          />
        </a>
      </div>

      <Sections
        v-bind:key="key"
        v-bind:section="section"
        v-for="(section, key) in content.section"
      />
      <Categories
        v-bind:key="key"
        v-bind:cat="cat"
        v-for="(cat, key) in content.categories"
      />

      <List
        v-bind:key="index"
        v-bind:lists="section.list"
        v-for="(section, index) in content.section"
      />

      <Gallery
        v-bind:section="section"
        v-bind:key="index"
        v-for="(section, index) in content.section"
      />

      <div class="outro"></div>
    </div>
  </div>
</template>

<script>
import Categories from "../layout/Categories";
import List from "../layout/List";
import Gallery from "../layout/Gallery";
import Sections from "../layout/Section";
export default {
  name: "Content",
  components: { Categories, List, Gallery, Sections },
  props: ["contents"],
  methods: {
    goto(refName) {
      let id = document.getElementById(refName);
      id.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>

h2 {
  text-transform: uppercase;
}

h3 {

  color: gray;
}
img,
video {
  max-width: 300px;
  max-height: 600px;
}

div {
  margin: auto;
  max-width: 1000px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 2rem;
}


.text-area {
  height: 100%;
}

.intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
}
.section-container {
  margin: 100px 0;
  padding-bottom: 100px;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
  padding-top: 50px;
}
.intro img {
  width: 100%;
  object-fit: contain;
}
</style>