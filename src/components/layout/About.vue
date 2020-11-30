<template>
  <div class="about">
    <h2>About</h2>
    <h3>
      Item Visualizer is a free tool for Monday's View to help explain your item without the need of
      separate tools and services. To achieve that, we offer 3 different methods
      to choose from.
    </h3>

    <div class="three-column">
      <div class="method-1">
        <h4>Show the Website</h4>
        <img v-bind:src="website" />
        <p>
          This tool will help generate an image of the public website in
          different viewports such as Desktop, Tablet, and Mobile.
        </p>

        <router-link to="/how#top">Learn More</router-link>
      </div>

      <div class="method-2">
        <h4>Show the Idea</h4>
        <img v-bind:src="idea" />
        <p>
          This tool will let you bring in what you may already have. Whether it
          is a file, prototype, pasted image, or what is going on around you,
          you can use this tool to access it.
        </p>
      </div>

      <div class="method-3">
        <h4>Show the Video</h4>
        <img v-bind:src="video" />
        <p>
          If an image or file doesn't work, make a video. You can record using
          your camera or your screen.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const website = require('../../assets/img/web.svg')
const idea = require('../../assets/img/bulb.svg')
const video = require('../../assets/img/record.svg')
export default {
    name: "About",
    data() {
        return {
            website, idea, video
        }
    },
}
</script>

<style scoped>

h3 {
    text-transform: none;
}
.about {
    height: 100vh;
}
.three-column div {
    display: grid;
    grid-template-rows: 80px 150px 1fr;
    align-content: center;
    align-items: start;
    justify-content: start;
    justify-items: center;
    margin: 0px;
}
.three-column {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    align-items: start;
    justify-items: center;
    text-align: center;
    margin: 50px auto;
}
</style>