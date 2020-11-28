<template>
  <div id="app">
    <div class="home-container">
      <div class="text-container">
        <h1>Welcome to Item Visualizer</h1>
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
      </div>
      VIDEO
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      todos: [],
    };
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
button {
  background: black;
  color: white;
}
</style>
