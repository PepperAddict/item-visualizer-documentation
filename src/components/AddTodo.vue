<template>
    <div>
        <form @submit="addTheTodo"> 
            <input type="text" v-model="title" name="title" placeholder="add a todo">
            <input type="submit" value="Submit" class="btn">
        
        </form>
    </div>
</template>

<script>
export default {
    name: "AddTodo",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTheTodo(e) {
            e.preventDefault()
            const newTodo = {
                id: Math.floor(Math.random() * 6) + 1,
                title: this.title,
                completed: false
            }
            this.$emit('add-todo', newTodo);
            this.title = ''
        }
    }
}
</script>

<style scoped>

</style>