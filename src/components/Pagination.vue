<template>
  <div>
    <div>
      {{ numberOfPages }}
    </div>
    <div class="pagination">
      <button>&#60;</button>
      <div v-for="(page, index) in numberOfPages" :key="index">
        <span>{{ page }}</span>
      </div>
      <button>&#62;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    listLength: Number,
  },
  data() {
    return {
      numberOfItems: 5,
    };
  },
  methods: {},
  computed: {
    numberOfPages() {
      return Math.ceil(this.listLength / this.numberOfItems);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
}
</style>