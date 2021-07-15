<template>
  <div>
    <TOC v-bind:toc="content" />
    <Content v-bind:contents="content" />
  </div>
</template>

<script>

import TOC from "../components/layout/TOC";
import doc from "../assets/documentation.js";
import Content from "../components/layout/Content";

export default {
  name: "documentation",
  components: {
    TOC,
    Content,
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