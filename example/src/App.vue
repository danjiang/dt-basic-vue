<template>
  <div id="app">
    <alert-box>Something bad happened.</alert-box>
    <blog-post v-for="post in posts" v-bind:key="post.id" v-bind:title="post.title"></blog-post>
    <button-counter></button-counter>
  </div>
</template>

<script>
import { AlertBox, BlogPost, ButtonCounter } from 'dt-basic-vue'

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