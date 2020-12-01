<template>
  <div class="section-container">
    <h2>{{ web.topic }}</h2>
    <div class="intro">
      <div class="intro-text">
        <p
          v-bind:key="index"
          v-for="(text, index) in web.intro.text"
          v-html="text"
        >
          {{ text }}
        </p>
      </div>

      <div v-html="web.intro.iframe"></div>
    </div>

    <Categories
      v-bind:key="key"
      v-bind:cat="cat"
      v-for="(cat, key) in web.categories"
    />
    <Sections
      v-bind:key="index"
      v-bind:section="section"
      v-for="(section, index) in web.section"
    />
    
    <List v-bind:key="index" v-bind:lists="section.list" v-for="(section, index) in web.section"/>

    <Gallery v-bind:key="index" v-bind:section="section" v-for="(section, index) in web.section"
     />


  </div>
</template>

<script>
import showtheweb from "../../assets/documentation";
import Categories from "../layout/Categories";
import List from "../layout/List";
import Gallery from "../layout/Gallery";
import Sections from "../layout/Section";

export default {
  name: "The Method",
  components: { Categories, List, Gallery, Sections },
  props: {
    vari: String,
  },
  data() {
    return {
      web: [],
    };
  },
  methods: {
    fetchData() {
      for (let x of showtheweb) {
        if (x.id === this.vari) {
          this.web = x;
        }
      }
    },
  },
  watch: {
    $props: {
      handler() {
        this.fetchData();
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
</style>