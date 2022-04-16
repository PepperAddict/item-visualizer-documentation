<template>
  <div>
    <Header />
    <TOC v-bind:toc="content" />
    <Content v-bind:contents="content" />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

import TOC from "../components/layout/TOC";
import doc from "../assets/documentation.js";
import Content from "../components/layout/Content";

export default {
  name: "How",
  components: {
    TOC,
    Content,
    Footer,
    Header,
  },
  data() {
    return {
      content: [],
    };
  },
  created() {
    this.content = doc;
  },
};
</script>

<style scoped>
</style>