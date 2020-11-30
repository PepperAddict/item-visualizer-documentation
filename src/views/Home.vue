<template>
  <div id="app">
    <div class="home-container">
      <div class="text-container">
        <h1>Item Visualizer</h1>
        <h3>A Monday's View App</h3>
        <h2>Help your team understand your item with a visual explanation.</h2>
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
          This app requires you to already have an account with <a href="https://monday.com/" target="_blank"> Monday.com </a>
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
  methods: {
    deleteThatTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    addTodo(newTodo) {
      // const {title, completed} = newTodo;

      this.todos = [...this.todos, newTodo];
    },
  },
  created() {},
};
</script>

<style scoped>
h1 {
  text-transform: uppercase;
}
h2 {
  text-transform: none;
  color: #707070;
}
h3 {
  font-size: 1rem;
  text-align: right;
}

.home-container {
  display: grid;
    grid-template-columns: 1fr 560px;
    grid-gap: 50px;
    padding: 100px 0;
    box-sizing: border-box;
}
button {
  background: black;
  color: white;
}
.note {
  border: 1px solid #ccc;
  padding: 10px;
  font-size: .8rem;
  text-align: center;
  line-height: 1rem;
}
</style>
