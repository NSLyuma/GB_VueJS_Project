<template>
  <div>
    <button>&#60;</button>
    <div>
      {{ listLength }}
    </div>
    <button>&#62;</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    // list: {
    //   type: Array,
    //   default: () => [],
    // },
    listLength: Number,
  },
  computed: {
    allItemsOnPage() {
      return this.list.length;
    },
  },
};
</script>