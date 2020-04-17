<template>
  <div id="list-container">
    <div class="post-container-main" v-bind:key="post.id" v-for="post in posts">
      <PostCard v-bind:post="post" />
    </div>
  </div>
</template>

<script>
import PostCard from "./PostCard";
import axios from "axios";

export default {
  name: "PostsList",
  components: { PostCard },
  data() {
    return {
      posts: []
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=20")
      .then(res => (this.posts = res.data));
  }
};
</script>

<style scoped>
#list-container {
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.post-container-main {
  display: inline-flex;
  margin: 10px;
}
</style>
