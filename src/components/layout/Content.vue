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

<style scoped>
h2 {
  text-transform: uppercase;
}

.text-area {
  height: 100%;
}

</style>