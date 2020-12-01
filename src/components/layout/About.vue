<template>
  <div class="about">
    <h2>How it Works</h2>
    <h3>
      Item Visualizer is a FREE app for Monday's View to help explain your
      designs and ideas without the need of separate tools and services. There
      are 3 ways:
    </h3>

    <div class="three-column">
      <router-link :to="{ name: 'Methods', params: { whichOne: 'web' } }">
        <div class="method">
          <h4>Screenshot & Markups</h4>
          <span class="round-img">
            <img v-bind:src="website" />
          </span>

          <p>Generate a screenshot of a website and add markups</p>

          <p class="learn-more">Learn More</p>
        </div>
      </router-link>

      <router-link :to="{ name: 'Methods', params: { whichOne: 'idea' } }">
        <div class="method">
          <h4>Share Your Ideas</h4>
          <span class="round-img">
            <img v-bind:src="idea" />
          </span>

          <p>
            This tool will let you bring in what you may already have. Whether
            Import your idea, showcase your prototype and more into Monday.
          </p>
          <p class="learn-more">Learn More</p>

          <span style="color: #"></span>
        </div>
      </router-link>

      <router-link :to="{ name: 'Methods', params: { whichOne: 'vid' } }">
        <div class="method">
          <h4>Show the Video</h4>
          <span class="round-img">
            <img v-bind:src="video" />
          </span>

          <p>
            If an image or file doesn't work, make a video. You can record using
            your camera or your screen.
          </p>

          <p class="learn-more">Learn More</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
const website = require("../../assets/img/web.svg");
const idea = require("../../assets/img/bulb.svg");
const video = require("../../assets/img/record.svg");

export default {
  name: "About",
  data() {
    return {
      website,
      idea,
      video,
    };
  },
};
</script>

<style scoped>
.about {
  height: 100vh;
}
.learn-more {
  padding: 0px;
  margin: 0px;
  font-weight: 600;
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
a {
  color: #000;
}
h1 {
  color: #0a253a;
  font-family: "Poppins", sans-serif;
  font-size: 52px;
  line-height: 52px;
}
h2 {
  color: #0a253a;
  font-size: 36px;
  text-align: left;
  font-family: "Open Sans", sans-serif;
}
h3 {
  font-size: 1rem;
  text-align: left;
  color: #0a253a;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
}

.method {
  height: 100%;
  border-radius: 10px;
  padding: 15px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.5s;
}
.method:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
}

.round-img {
  display: flex;
  background: #0085ff;
  padding: 30px;
  align-items: center;
  justify-items: center;
  border-radius: 50%;
}

.round-img img {
  width: 80px;
  height: 80px;
  filter: brightness(0) invert(1);
}
</style>