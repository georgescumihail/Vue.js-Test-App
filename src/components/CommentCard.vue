<template>
  <div>
    <div>
      <span class="comment-email">{{comment.email}}</span> said:
    </div>
    <div class="comment-name">{{comment.name}}</div>
    <div class="comment-body">{{comment.body}}</div>
  </div>
</template>

<script>
export default {
  name: "CommentCard",
  props: ["comment"]
};
</script>

<style>
.comment-email {
  font-weight: bold;
}
.comment-name {
  font-weight: bold;
  margin: 10px;
}
.comment-body {
  margin: 10px;
}
</style>