<template>
    <button @click="handleClick">You clicked me {{ count }} times.</button>
</template>
<script>
export default {
    data: function() {
        return {
            count: 0
        }
    },
    methods: {
        handleClick() {
            this.count++
        }
    }
}
</script>