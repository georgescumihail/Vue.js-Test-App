<template>
  <div v-if="user != null" id="page-container">
    <div id="user-name">{{user.name}}</div>
    <ul id="user-details">
        <li>{{user.email}}</li>
        <li>{{user.phone}}</li>
        <li>{{user.website}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserPage",
  data(){
      return {
          user: null
      }
  },
  created(){
      axios.get("https://jsonplaceholder.typicode.com/users/" + this.$route.params.id)
        .then(res => this.user = res.data);
  }
};
</script>

<style scoped>
#page-container{
    padding: 20px;
}
#user-name{
    margin: 10px;
    font-size: 20px;
    font-weight: bold;
}
#user-details li{
    margin: 10px;
}
</style>