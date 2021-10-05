<template>
  <div>
    About
    <div>
      <button @click="showAuthFormFn">Authorize</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    showAuthFormFn() {
      this.$modal.show("Auth", { header: "Authorize" });
    },
  },
};
</script>