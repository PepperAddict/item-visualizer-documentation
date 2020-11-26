<template>
  <div id="app">
    <h1>Welcome to Item Visualizer</h1>
    <h2>Help your team understand your item with a visual explanation.</h2>
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
  created() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((resp) => this.todos = resp)
      .catch((err) => console.log(err));

  }
};
</script>

<style>
button {
  background: black;
  color: white;
}
</style>
