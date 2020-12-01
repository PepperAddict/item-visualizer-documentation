<template>
  <section>
    <h3 v-if="section['title'] !== undefined">{{ section.title }}</h3>
    <div class="section-container">
      <div class="text-area">
        <p
          v-bind:key="index"
          v-html="text"
          v-for="(text, index) in section.text"
        >
          {{ text }}
        </p>
        <a
          v-bind:href="section.image.src"
          v-if="section['video'] !== undefined && section['image']"
          ><img
            v-bind:src="section['image'].src"
            v-bind:alt="section['image'].alt"
        /></a>
      </div>
      <video
        controls
        v-if="section['video'] !== undefined"
        v-bind:src="section.video.src"
        loop
        muted
        autoplay
        type="video/mp4"
      />
      <a
        v-bind:href="section.image.src"
        target="_blank"
        v-if="section['video'] === undefined && section['image'] !== undefined"
        ><img v-bind:src="section.image.src"
      /></a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Section",
  props: ["section"],
};
</script>

<style scoped>
.section-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
}
section p {
  max-width: 800px;
}


</style>