<template>
  <div class="about">
    <h2>How it Works</h2>
    <h3>
      Item Visualizer is a free tool for Monday's View to help explain your item
      without the need of separate tools and services. To achieve that, we offer
      3 different methods to choose from.
    </h3>

    <div class="three-column">
      <router-link :to="{ name: 'Methods', params: { whichOne: 'web' } }">
        <div class="method">
          <h4>Show the Website</h4>
          <span class="round-img">
            <img v-bind:src="website" />
          </span>

          <p>
            This tool will help generate an image of the public website in
            different viewports such as Desktop, Tablet, and Mobile.
          </p>

          Learn More
        </div>
      </router-link>

      <router-link :to="{ name: 'Methods', params: { whichOne: 'idea' } }">
        <div class="method">
          <h4>Show the Idea</h4>
          <span class="round-img">
            <img v-bind:src="idea" />
          </span>

          <p>
            This tool will let you bring in what you may already have. Whether
            it is a file, prototype, pasted image, or what is going on around
            you, you can use this tool to access it.
          </p>

          Learn More
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

          Learn More
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