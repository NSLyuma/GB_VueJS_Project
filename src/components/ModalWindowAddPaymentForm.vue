<template>
  <div class="wrapper">
    <div class="header">{{ settings.header }}</div>
    <div class="content">
      <component :is="settings.name" />
    </div>
    <div class="footer">
      <button @click="onClose">Close</button>
    </div>
  </div>
</template>

<script>
import AddCategoryForm from "./AddCategoryForm.vue";
import Auth from "./Auth.vue";
export default {
  name: "ModalWindow",
  components: {
    AddPaymentForm: () =>
      import(/* webpackChunkName:"AddPaymentForm" */ "./AddPaymentForm.vue"),
    Auth,
    AddCategoryForm,
  },
  props: {
    settings: Object,
  },
  methods: {
    onClose() {
      this.$modal.hide();
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #efefef;
}
</style>>