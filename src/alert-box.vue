<template>
    <div class="alert-box">
        <strong>Error!</strong>
        <slot></slot>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.alert-box {
    padding: 10px 20px;
    background: #f3beb8;
    border: 1px solid #f09898;
}
</style>