<template>

    <section class="section">

      <div class="text-area">
        <h3 v-if="section['title'] !== undefined">{{ section.title }}</h3>
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
        type="video/mp4"
      />
      <a
        v-bind:href="section.image.src"
        target="_blank"
        v-if="section['video'] === undefined && section['image'] !== undefined"
        ><img v-bind:src="section.image.src"
      /></a>
    </section>

</template>

<script>
export default {
  name: "Section",
  props: ['section']
};
</script>

<style scoped>
section {
  padding: 50px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
}
</style>