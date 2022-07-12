<template>
  <div id="app">
    <alert-box>Something bad happened.</alert-box>
    <blog-post v-for="post in posts" v-bind:key="post.id" v-bind:title="post.title"></blog-post>
    <button-counter></button-counter>
    <!-- <button-add></button-add> -->
  </div>
</template>

<script>
import { AlertBox, BlogPost, ButtonCounter } from 'dt-basic-vue'
// import ButtonAdd from './components/button-add.vue'
// import 'dt-basic-vue/dist/dist/dt-basic-vue.esm.css'

export default {
  name: 'App',
  components: {
    AlertBox,
    BlogPost,
    ButtonCounter
  },
  data: function () {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    }
  }
}
</script>