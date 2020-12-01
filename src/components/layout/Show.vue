<template>
  <div class="section-container">

    <IntroSection v-bind:content="web" />

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

    <List
      v-bind:key="index"
      v-bind:lists="section.list"
      v-for="(section, index) in web.section"
    />

    <Gallery
      v-bind:key="index"
      v-bind:section="section"
      v-for="(section, index) in web.section"
    />
  </div>
</template>

<script>
import showtheweb from "../../assets/documentation";
import Categories from "../layout/Categories";
import List from "../layout/List";
import Gallery from "../layout/Gallery";
import Sections from "../layout/Section";
import IntroSection from "../layout/IntroSection";

export default {
  name: "The Method",
  components: { Categories, List, Gallery, Sections, IntroSection },
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

<style>
.intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
}
.intro img {
  width: 100%;
  object-fit: contain;
}
</style>