<template>
  <div class="page-box">
    <button class="page" @click="onClick(currentPage - 1)">&#60;</button>
    <div
      class="page page-m"
      v-for="page in amountOfPages"
      :key="page"
      @click="onClick(page)"
    >
      {{ page }}
    </div>
    <button class="page" @click="onClick(currentPage + 1)">&#62;</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    listLength: Number,
    currentPage: Number,
    numberOfItems: Number,
  },
  methods: {
    onClick(page) {
      if (page < 1 || page > this.amountOfPages) return;
      this.$emit("onClick", page);
    },
  },
  computed: {
    amountOfPages() {
      return Math.ceil(this.listLength / this.numberOfItems);
    },
  },
};
</script>

<style scoped>
.page-box {
  display: flex;
}
.page {
  cursor: pointer;
}
.page-m {
  margin-right: 5px;
  margin-left: 5px;
}
</style>