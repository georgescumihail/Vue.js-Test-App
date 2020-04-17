<template>
  <div class="post-container">
    <router-link class="router-link" tag="div" :to="{ name: 'post', params: { id: post.id} }">
      <div class="post-title">{{post.title}}</div>
      <div class="post-body">{{post.body}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["post"]
};
</script>

<style scoped>
.post-container {
  width: 220px;
  height: 220px;
  display: inline-block;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
}

.post-container:hover {
  background-color: #ccc;
}
.post-title {
  font-weight: bold;
  font-size: 16px;
  margin: 5px;
  text-align: center;
  min-height: 50px;
  text-decoration: none;
  color: #333;
}
.post-body {
  font-size: 14px;
  margin: 15px;
}
.router-link {
  text-decoration: none;
  color: #222;
}
</style>