<template>
    <div class="blog-post">
        <img :src="logo" alt="DanThought Logo">
        <h3>{{ title }}</h3>
    </div>
</template>
<script>
import logo from './assets/logo.png';

export default {
    props: {
        title: String
    },
    data() {
        return {
            logo
        };
    }
}
</script>
<style scoped>
div.blog-post img {
    float: left;
    width: 30px;
}
div.blog-post h3 {
    padding-left: 40px;
}
</style>