<template>
  <div class="content-container">
    <div
      v-bind:id="content.id"
      v-bind:key="content.id"
      v-for="content in contents"
    >
      <h2>{{ content.topic }}</h2>
      <div class="intro">
        <div
          v-bind:key="index"
          v-for="(intro, index) in content.intro.text" v-html="intro"
        >
        <p v-bind:key="key" v-for="(introText, key) in intro">
         {{introText}} 
        </p>
          
        </div>

      </div>

      <section v-bind:key="index" class="section" v-for="(section, index) in content.section">
          <h3 v-if="section['title'] !== undefined">{{section.title}} </h3>
          <div class="text-area">
              <p v-bind:key="index" v-html="text" v-for="(text, index) in section.text">{{text}} </p>
              <a v-bind:href="section.image.src" v-if="section['video'] !== undefined && section['image']"><img v-bind:src="section['image'].src" v-bind:alt="section['image'].alt" /></a>
          </div>
          <video controls v-if="section['video'] !== undefined" v-bind:src="section.video.src" type="video/mp4" />
          <a v-bind:href="section.image.src" target="_blank" v-if="section['video'] === undefined && section['image'] !== undefined"><img v-bind:src="section.image.src" /></a>
          <ul v-if="section['list']">
              <li v-bind:key="index" v-for="(list, index) in section.list" v-html="list.text">
                  {{list.text}}
                  <img v-bind:src="list.image.src" v-bind:alt="list.image.alt"/>
              </li>
          </ul>
      </section>

      <div class="outro">

      </div>

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
h2, h3 {
  text-transform: capitalize;
}
h3 {
  color: gray;
}
img {
  max-width: 300px;
}
video {
  max-width: 300px;
}

div {
  margin: auto;
  max-width: 1000px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 2rem;
}

section {
  padding: 100px 0px;
}
</style>