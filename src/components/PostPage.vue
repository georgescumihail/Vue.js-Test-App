<template>
  <div id="post-page-container">
    <router-link class="back-link" :to="{ name: 'home' }">Back</router-link>
    <div v-if="post != null" id="post-container">
      <div id="post-title">
        {{post.title}}
        <span id="title-by">by</span>
        <router-link
          id="post-author"
          :to="{ name: 'user', params: { id: author.id} }">
          {{author.name}}
        </router-link>
      </div>
      <div id="post-body">{{post.body}}</div>
      <div id="post-comments">
        <div v-if="comments != null" id="comments-header">Comments:</div>
        <div class="post-comment" v-bind:key="comment.id" v-for="comment in comments">
          <CommentCard v-bind:comment="comment" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CommentCard from "./CommentCard.vue";

export default {
  name: "PostPage",
  components: {
    CommentCard
  },
  data() {
    return {
      post: null,
      comments: null,
      author: {}
    };
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id)
      .then(res => (this.post = res.data))
      .then(() => axios.get("https://jsonplaceholder.typicode.com/users/" + this.post.userId)
          .then(res => (this.author = res.data))
      );

    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}/comments`)
      .then(res => (this.comments = res.data));
  }
};
</script>

<style scoped>
.back-link {
  color: #4ac28c;
  font-size: 16px;
  margin-left: 10px;
}
#post-page-container {
  padding: 20px;
}
#post-author {
  font-weight: bold;
  color: #4ac28c;
  font-size: 20px;
  margin: 5px;
}
#title-by{
  font-weight: normal;
  font-size: 16px;
}
#post-title {
  font-weight: bold;
  font-size: 24px;
  margin: 25px;
}
#post-body {
  font-size: 16px;
  margin: 25px;
  height: 120px;
}
#post-comments {
  margin: 20px;
}
#comments-header {
  font-weight: bold;
  font-size: 18px;
  margin: 10px;
}
.post-comment {
  margin: 30px;
}
</style>