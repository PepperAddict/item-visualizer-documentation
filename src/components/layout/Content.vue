<template>
  <div class="content-container">

  <div class="toc-container" id="how-to-use">
    <h2>How to use</h2>
    <p>
     Item Visualizer is made to help expand your item with visualizations such as an image, video, or a file sent to your item's update. 
To do so, there are three methods that can be used. 
    </p>
    <p>Methods</p>
    <ul class="toc-buttons">
      <li @click="goto('show-the-website')" >
        Show the Website
      </li>
      <li @click="goto('show-the-idea')">
        Show the Idea
        </li>
        <li @click="goto('show-the-video')">
          Show the Video
        </li>
    </ul>
  </div>

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

        <div v-if="section.gallery" class="gallery-section">
          <h3>Gallery using this method with slrlounge.com and different viewports</h3>
          <div class="elem-contain">
            <div v-bind:key="key" class="elem-indiv" v-for="(gall, val, key) in section.gallery">
              <a v-bind:href="gall.image.src" target="_blank">
                <img v-bind:src="gall.image.src" v-bind:alt="gall.image.alt" />
                <p v-html="gall.text">{{gall.text}}</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="outro"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: ["contents"],
    methods: {
    goto(refName) {
      let id = document.getElementById(refName)
      id.scrollIntoView({behavior: 'smooth'})
    }
  }
};
</script>

<style>
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
  border-top: 1px solid #ccc;
  padding-top: 50px;
}
.intro img {
  width: 100%;
  object-fit: contain;
}
</style>