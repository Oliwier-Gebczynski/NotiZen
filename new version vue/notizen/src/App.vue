<template>
<SiteHeader></SiteHeader>
  <MainPage/>
</template>

<script>
import SiteHeader from "./components/Header.vue";
import MainPage from "./components/MainPage.vue";


export default {
  name: "App",
  components: {
    MainPage,
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