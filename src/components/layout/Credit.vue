<template>
  <div class="credit">
    <h2>Creators</h2>

    <h3>
      Item Visualizer was bult with remote developers in mind. When working with
      others from around the world, communication gets tangled. We built an app
      to help streamline the communication process by showing exactly what you
      want others to see.
    </h3>

    <div class="creators">
      <div class="creator-1">
        <h4>Jenearly Ang</h4>
        <img v-bind:src="jen" />
        <p>Full Stack Developer from Boston, MA</p>
      </div>

      <div class="creator-2">
        <h4>Yenith LianTyHao</h4>
        <img v-bind:src="yen" />
        <p>Product Manager, UI/UX Designer from Southern California</p>
      </div>
    </div>
    <center>
      <p>
        Please visit the
        <router-link to="/contact">contact page</router-link> to get more
        information.
      </p>
    </center>
  </div>
</template>

<script>
const yen = require("../../assets/img/yen.png");
const jen = require("../../assets/img/jen.jpg");

export default {
  name: "Credit",
  data() {
    return {
      yen,
      jen,
    };
  },
};
</script>

<style scoped>
.creators img {
  border-radius: 50%;
}
.creators {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  text-align: center;
}
</style>