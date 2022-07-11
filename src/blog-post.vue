<template>
    <div class="blog-post">
        <img src="./assets/logo.png" alt="DanThought Logo">
        <h3>{{ title }}</h3>
    </div>
</template>
<script>
export default {
    props: {
        title: String
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