<template>
  <div class="intro-container">
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

      <div v-if="content.intro.iframe" v-html="content.intro.iframe"></div>
      <video
        controls
        v-if="content['video'] !== undefined"
        v-bind:src="content.video.src"
        loop
        muted
        autoplay
        type="video/mp4"
      />
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
  </div>
</template>

<script>
export default {
  name: "IntroSection",
  props: ["content"],
};
</script>

<style scoped>
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