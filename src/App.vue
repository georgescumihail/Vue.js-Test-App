<template>
  <div id="app">
    <Header />
    <div id="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
#main-container {
  width: 75%;
  margin: 0 auto;
  background-color: #f9f9f9;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
