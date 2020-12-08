<template>
  <div class="content-container">

    <div
      v-bind:id="content.id"
      v-bind:key="content.id"
      v-for="content in contents"
      class="section-container"
    >
    <IntroSection v-bind:content="content"/>
    



      <Sections
        v-bind:key="four"
        v-bind:section="section"
        v-for="(section, val, four) in content.section"
      />
      <Categories
        v-bind:key="three"
        v-bind:cat="cat"
        v-for="(cat, val, three) in content.categories"
      />

      <List
        v-bind:key="two"
        v-bind:lists="section.list"
        v-for="(section, val, two) in content.section"
      />

      <Gallery
        v-bind:section="section"
        v-bind:key="one"
        v-for="(section, val, one) in content.section"
      />

      <div class="outro"></div>
    </div>
    <Top />
  </div>
</template>

<script>
import Categories from "../layout/Categories";
import List from "../layout/List";
import Gallery from "../layout/Gallery";
import Sections from "../layout/Section";
import IntroSection from '../layout/IntroSection'

import Top from "../layout/BackToTop";
export default {
  name: "Content",
  components: { Categories, List, Gallery, Sections, Top, IntroSection},
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
.section-container {
  padding-top: 100px;
}
div {
  margin: auto;
  max-width: 1000px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 2rem;
}

img,
video {
  max-width: 300px;
  max-height: 600px;
}
</style>