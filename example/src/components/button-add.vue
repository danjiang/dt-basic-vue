<template>
    <button @click="handleClick">{{ a }} + {{ b }} = {{ sum }}</button>
</template>
<script>
import add from 'dt-basic-vue'

export default {
    data: function() {
        return {
            a: 5,
            b: 6,
            sum: 0
        }
    },
    methods: {
        handleClick() {
            this.sum = add(this.a, this.b);
        }
    }
}
</script>