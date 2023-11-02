<template>
  <SiteHeader></SiteHeader>
  <router-view></router-view>
</template>

<script>
import SiteHeader from "./components/Header.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Share Tech Mono", monospace;
}
</style>