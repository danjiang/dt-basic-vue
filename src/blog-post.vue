<template>
    <div>
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