<template>
  <div id="header-container">
    <div id="header-title">Vue App - Posts and comments</div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
#header-container {
  width: 100%;
  height: 60px;
  background-color: #4ac28c;
  display: flex;
  align-items: center;
}
#header-title {
  margin-left: 100px;
  color: #f9f9f9;
  font-size: 24px;
  font-weight: bolder;
}
</style>