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

    <section
      v-bind:key="key"
      class="text-area"
      v-for="(indi, key) in cat.section"
    >
      <h3 v-if="indi['title'] !== undefined">{{ indi.title }}</h3>
      <p v-bind:key="index" v-html="text" v-for="(text, index) in indi.text">
        {{ text }}
      </p>

      <a
        v-bind:href="indi.image.src"
        v-if="indi.video !== undefined && indi.image"
        ><img v-bind:src="indi.image.src" v-bind:alt="indi.image.alt"
      /></a>
      <video
        controls
        v-if="indi.video !== undefined"
        v-bind:src="indi.video.src"
        type="video/mp4"
      />

      <a
        v-bind:href="indi.image.src"
        target="_blank"
        v-if="indi.video === undefined && indi.image !== undefined"
        ><img v-bind:src="indi.image.src"
      /></a>
    </section>
  </div>
</template>

<script>
export default {
  name: "Categories",
  props: ['cat'],

};
</script>