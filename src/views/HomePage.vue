<template lang="haml">
    .box
      %h2 Home Page
      %p.text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      %router-link{to:"/todos"}.link Todos
</template>

<style scoped lang="scss">
@import '../style';

h2 {
    display: flex;
    justify-content: center;
    @include fontz(xx-large, bold)
}

.box {
    margin: 5vh 5vw;

    .text {
        font-size: x-large;
        text-align: center;
    }
}

.link {
    @extend %link
}
</style>