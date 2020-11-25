<template>
  <div class="todo-item" v-bind:class="{'is-complete': todo.completed}">
      <p>
          <input type="checkbox" v-on:change="setComplete">
          {{todo.title}}
          <button @click="$emit('del-todo', todo.id)" class="del">
              x
          </button>
          </p>
  </div>
</template>

<script>
export default {
    name:"TodoItem",
    props: ["todo"],
    methods: {
        setComplete() {
            this.todo.completed = !this.todo.completed
        }
    }
};
</script>

<style scoped>
.todo-item {
    background: green;
    padding: 10px;
    border-bottom: 1px solid darkgreen;
}

.is-complete {
    text-decoration: line-through
}

</style>