<template>
        <div class="gallery-section" v-if="section.gallery">
        <h3>
          Gallery using this method with slrlounge.com and different viewports
        </h3>
        <div class="elem-contain">
          <div
            v-bind:key="key"
            class="elem-indiv"
            v-for="(gall, val, key) in section.gallery"
          >
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
    props: ['section'],
    created() {
        console.log(this.$props)
    }
}
</script>

<style scoped>
.gallery-section {
  grid-column: 1 / -1;
}

.elem-contain {
  max-height: 400px;
  overflow-x: auto;
  width: 100%;
  display: flex;
  grid-column: 1 / -1;
  grid-gap: 30px;
  overflow-y: hidden;
  padding: 10px;
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