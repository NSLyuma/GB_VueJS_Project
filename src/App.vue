<template>
  <div id="app">
    <div class="page-link">
      <router-link to="/dashboard">Dashboard</router-link> /
      <router-link to="/about">About</router-link> /
      <button @click="goToPage(404)">404</button>
    </div>
    <div class="content">
      <router-view />
    </div>
    <transition name="fade">
      <ModalWindowAddPaymentForm v-if="modalShown" :settings="modalSettings" />
    </transition>
    <transition name="fade">
      <ContextMenu />
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ContextMenu from "./components/ContextMenu.vue";

export default {
  name: "App",
  components: {
    ModalWindowAddPaymentForm: () =>
      import("./components/ModalWindowAddPaymentForm.vue"),
    ContextMenu,
  },
  data() {
    return {
      modalShown: false,
      modalSettings: {},
    };
  },
  methods: {
    ...mapActions(["fetchPaymentsData"]),
    goToPage(pageName) {
      this.$router.push({
        name: pageName,
      });
    },
    onShow(settings) {
      this.modalSettings = settings;
      this.modalShown = true;
    },
    onHide() {
      this.modalShown = false;
      this.modalSettings = {};
    },
  },
  created() {
    this.fetchPaymentsData();
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("show", this.onShow);
    this.$modal.EventBus.$off("hide", this.onHide);
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>