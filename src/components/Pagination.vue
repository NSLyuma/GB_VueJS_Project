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
    listLength: Number,
  },
  data() {
    return {
      numberOfItems: 5,
    };
  },
};
</script>