<template>
  <div class="gallery-section" v-if="section.gallery">

    <h3>
      Images that were generated using different viewports.
    </h3>


    <div class="elem-contain">
      <div
        v-bind:key="key"
        class="elem-indiv"
        v-for="(gall, val, key) in section.gallery">
        <a v-bind:href="gall.image.src" target="_blank">
          <img v-bind:src="gall.image.src" v-bind:alt="gall.image.alt" />
          <p v-html="gall.text">{{ gall.text }}</p>
        </a>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: ["section"],

};
</script>

<style scoped>
.gallery-section {
  grid-column: 1 / -1;
}

.elem-contain {
    overflow-x: auto;
    width: 100%;
    display: grid;
    grid-column: 1 / -1;
    grid-gap: 30px;
    overflow-y: hidden;
    padding: 10px;
    margin: 60px 0;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    text-align: center;
}
.elem-contain a {
  color: black;
}

.elem-indiv img {
  max-height: 200px;
  object-fit: cover;
  width: 100%;
}
</style>