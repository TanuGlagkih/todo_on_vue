<template lang="haml">
    .container
        %router-link{to:"/"}.link Home 
        %AddTodo{v-on:add-todo:"addTodo"}
        %select{v-model:"filter"}
            %option{value:"all"} All
            %option{value:"completed"} Completed
            %option{value:"not-completed"} Not completed
        %Loader{v-if:"loading"}
        <TodoList v-else-if='todos?.length' v-bind:todos="filteredTodos" @remove-todo="removeTodo" />
        <p v-else>No todos! </p> 
</template>

<script>
import TodoList from '../components/TodoList.vue';
import AddTodo from '../components/AddTodo.vue';
import Loader from '../components/Loader.vue';

export default {
    components: {
        TodoList,
        AddTodo,
        Loader
    },
    data() {
        return {
            todos: [],
            loading: true,
            filter: 'all'
        }
    },
    computed: {
        filteredTodos() {
            if (this.filter === 'all') {
                return this.todos
            }

            if (this.filter === 'completed') {
                return this.todos.filter(todo => todo.completed)
            }

            if (this.filter === 'not-completed') {
                return this.todos.filter(todo => !todo.completed)
            }
        }
    },
    methods: {
        removeTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        },
        addTodo(todo) {
            this.todos.push(todo)
        }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(json =>
                setTimeout(() => {
                    this.todos = json
                    this.loading = false
                }, 3000)
            )
    }
}
</script>

<style scoped lang="scss">
@import '../style.scss';

.link {
    @extend %link;
    margin: $vertical-margin;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;

    & * {
        margin: $vertical-margin;
    }
}
</style>
