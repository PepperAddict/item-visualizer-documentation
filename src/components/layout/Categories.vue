<template>
  <div v-if="cat">
    <h3>
      {{ cat.topic }}
    </h3>

    <div class="header-text">
      <p
        v-bind:key="key"
        v-for="(innerText, key) in cat.intro.text"
        v-html="innerText"
      >
        {{ innerText }}
      </p>
    </div>

    <div class="media">
      <img
        v-if="cat.intro.image"
        v-bind:src="cat.intro.image.src"
        v-bind:alt="cat.intro.image.alt"
      />
      <video
        v-if="cat.intro.video"
        v-bind:src="cat.intro.video.src"
        type="video/mp4"
        controls
      />
    </div>

  <Section v-bind:key="index" v-bind:section="section" v-for="(section, index) in cat.section"/>



  </div>
</template>

<script>

import Section from './Section'
export default {
  name: "Categories",
  props: ['cat'],
  components: {
    Section
  }

};
</script>