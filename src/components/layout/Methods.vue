<template>
<div>
  <Header />
  <div class="methods-container">
    <h1>Methods</h1>
    <h2>
      Item Visualizer offers three different methods to choose from. Click on
      one to learn more.
    </h2>

    <div class="metho-container">
      <div
        class="meth"
        @click="showWhich('web')"
        v-bind:class="{ active: now === 'web' }"
      >
        <img v-bind:src="website" alt="metheod 1 Show the Website" />
        <p>Show the Website</p>
      </div>

      <div
        class="meth"
        @click="showWhich('idea')"
        v-bind:class="{ active: now === 'idea' }"
      >
        <img v-bind:src="idea" alt="metheod 1 Show the Idea" />
        <p>Show the Idea</p>
      </div>

      <div
        class="meth"
        @click="showWhich('vid')"
        v-bind:class="{ active: now === 'vid' }"
      >
        <img v-bind:src="video" alt="metheod 1 Show the video" />
        <p>Show the Video</p>
      </div>
    </div>

    <div class="content-meth">
        <div class="web" v-if="now === 'web'">
            <Web vari="show-the-website"/>
        </div>
        <div class="idea" v-if="now === 'idea'">
            <Web vari="show-the-idea"/>
        </div>
        <div class="video" v-if="now === 'vid' ">
            <Web vari="show-the-video"/>
        </div>
    </div>
  </div>
  <Footer />
  </div>
</template>

<script>
import Footer from "./Footer";
import Header from "./Header";
const website = require("../../assets/img/web.svg");
const idea = require("../../assets/img/bulb.svg");
const video = require("../../assets/img/record.svg");

import Web from '../layout/Show'
export default {
  name: "Methods",
  data() {
    return {
      website,
      idea,
      video,
      now: "web",
    };
  },
  methods: {
    showWhich(name) {
      console.log(name);
      this.now = name;
    },
  },
  components: {
    Web,
    Header, 
    Footer
  },
  created() {
      if (this.$attrs.whichOne) {
          this.now = this.$attrs.whichOne
      }
  }
};
</script>

<style scoped>
.metho-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    max-width: 800px;
    margin: 100px auto;
}
.meth{
    display: grid;
    grid-template-rows: 50px 50px;
    align-items: center;
    justify-items: center;
    border: 1px solid #ccc;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
}
.meth.active {
    background: #0085FF;
    color: white;
}
.meth.active img {
    filter: brightness(1) invert(1)
}
.meth img {
    width: 50px;
    height: 50px;
    object-fit: contain;
}
</style>