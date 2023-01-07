<template>
    <li>
        <span v-bind:class="{ done: todo.completed }">
            <input type="checkbox" v-on:change="todo.completed = !todo.completed" v-model="checked" />
            <strong>{{ index + 1 }}</strong>
            <p>{{ todo.title | uppercase }}</p>
        </span>
        <button class="rm" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
    </li>
</template>

<script>

export default {
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: Number,
    },
    data() {
        return {
            checked: this.todo.completed
        }
    },
    filters: {
        uppercase(value) {
            return value.toUpperCase()
        }
    },
}
</script>

<style scoped lang="scss">
li {
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    margin-bottom: 1rem;
    padding: .5rem 2rem;

    span {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 80vw;
    }
}

.done {
    text-decoration: line-through;
}

.rm {
    border: 0;
    background-color: red;
    color: white;
    border-radius: 50%;
    font-weight: bold;

    &:hover {
        background-color: rgba(255, 0, 0, 0.4);
        cursor: pointer;
    }
}

input {
    margin-right: 1rem;
}
</style>