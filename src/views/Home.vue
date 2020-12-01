<template>
  <div id="app">
    <div class="home-container">
      <div class="text-container">
        <h1>Design Better.  Together. Fast.</h1>
        <h2>A Monday's View App that Helps Teams Design and Develop Faster. Together.</h2>
        <h3>Want to try it out?  Get the App:</h3>
        <a
          href="https://auth.monday.com/oauth2/authorize?client_id=c402136ecfc3e375135e5002cb9ebaa0&response_type=install"
        >
          <img
            alt="Add to monday.com"
            height="42"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/Tal/4b5d9548-0598-436e-a5b6-9bc5f29ee1d9_Group12441.png"
          />
        </a>
        <p class="note">
          This app requires you to have an account with <a href="https://monday.com/" target="_blank"> Monday.com </a>
        </p>
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9CP0eiwuVIc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

  <About />
  <Credit />

  </div>
</template>

<script>
import About from '../components/layout/About'
import Credit from '../components/layout/Credit'
export default {
  name: "Home",
  data() {
    return {
      todos: [],
    };
  },
  components: {
    About, Credit
  },
  created() {},
};
</script>

<style>
h1 {
  color:#0A253A;
  font-family: 'Poppins', sans-serif;
  font-size:52px;
  line-height:52px;
}
h2 {
  text-transform: none;
  color: #0A253A;
  text-align:left;
  font-family: 'Open Sans', sans-serif;
}
h3 {
  font-size: 1rem;
  text-transform: uppercase;
  text-align: left;
  color:#5A88AA;
}

.home-container {
  display: grid;
    grid-template-columns: 1fr 560px;
    grid-gap: 50px;
    padding: 100px 0;
    box-sizing: border-box;
    align-content: center;
    align-items: center;
}
button {
  background: black;
  color: white;
}
.note {
 line-height:1.2;
 font-size:12px;
 color:#0A253A;
 font-family:'Open Sans', sans-serif;
}
div {
  margin: auto;
  max-width: 1000px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 2rem;
}

img,
video {
  max-width: 300px;
  max-height: 600px;
}

</style>
