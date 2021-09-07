<template>
  <div id="app">
    <div class="page-link">
      <router-link to="/dashboard">Dashboard</router-link> /
      <router-link to="/about">About</router-link> /
      <button @click="goToPage(404)">404</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["fetchPaymentsData"]),
    goToPage(pageName) {
      this.$router.push({
        name: pageName,
      });
    },
  },
  created() {
    this.fetchPaymentsData();
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>