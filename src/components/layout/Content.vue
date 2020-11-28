<template>
  <div class="content-container">
    <div
      v-bind:id="content.id"
      v-bind:key="content.id"
      v-for="content in contents"
      class="section-container"
    >
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

      <section
        v-bind:key="index"
        class="section"
        v-for="(section, index) in content.section"
      >
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
          v-if="
            section['video'] === undefined && section['image'] !== undefined
          "
          ><img v-bind:src="section.image.src"
        /></a>
        <ul v-if="section['list']">
          <li
            v-bind:key="index"
            v-for="(list, index) in section.list"
            v-html="list.text"
          >
            {{ list.text }}
            <img v-bind:src="list.image.src" v-bind:alt="list.image.alt" />
          </li>
        </ul>
      </section>

      <div class="outro"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: ["contents"],
};
</script>

<style>
h2 {
  text-transform: uppercase;
}

h3 {
  text-transform: capitalize;
  color: gray;
}
img, video {
  max-width: 300px;
  max-height: 600px;
}


div {
  margin: auto;
  max-width: 1000px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 2rem;
}

section {
  padding: 50px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
}

.text-area {
  height: 100%;
}

.intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
}
.section-container {
  margin: 100px 0;
  padding-bottom: 100px;
  box-sizing: border-box;
  border-bottom: 1px solid #707070;
}
.intro img {
  width: 100%;
  object-fit: contain;
}
</style>