<template lang="haml">
    %form{v-on:submit.prevent:"onSubmit"}
        <input type="text" v-model="title" />
        %button{type:"submit"} Create 
</template>

<script>
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.title.trim()) {
                const newTodo = {
                    id: Date.now(),
                    title: this.title,
                    completed: false
                }

                this.$emit('add-todo', newTodo);
                this.title = ''
            }
        }
    }
}
</script>

<style scoped lang="scss">
form {
    display: flex;
    margin-bottom: 10px;
}

input {
    width: 400px;
    height: 20px;

}
</style>