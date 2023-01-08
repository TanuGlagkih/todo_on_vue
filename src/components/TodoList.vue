<template lang="haml">
    %div
      %ul
        <TodoItem v-for="(todo, i) of todos" :key='todo.id' v-bind:todo="todo" v-on:remove-todo="removeTodo"
        v-bind:index="i" />
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
    components: {
        TodoItem
    },
    props: ['todos'],
    methods: {
        removeTodo(id) {
            this.$emit('remove-todo', id)
        }

    }
}
</script>

<style scoped lang="scss">
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
</style>