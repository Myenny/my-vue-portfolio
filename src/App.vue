<template>
  <v-app>
    <router-view></router-view>
    <v-content>
      <nav-bar></nav-bar>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/views/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
  },
  data: () => ({
    //
  })
};
</script>