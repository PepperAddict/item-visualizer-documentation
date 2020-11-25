<template>
  <div id="app">
    <Header />
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todosy="todos" v-on:del-todo="deleteThatTodo" />
  </div>
</template>

<script>
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";

export default {
  name: "App",
  components: {
    Todos,
    Header,
    AddTodo,
  },
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
