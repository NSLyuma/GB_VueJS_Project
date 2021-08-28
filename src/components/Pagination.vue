<template>
  <div :class="[$style.wrp]">
    <button :class="[$style.btn]" @click="onClick(currentPage - 1)">
      &#60;
    </button>
    <div
      :class="{
        [$style.active]: currentPage === page,
      }"
      v-for="page in numberOfPages"
      :key="page"
    >
      <div :class="[$style.page]" @click="onClick(page)">
        {{ page }}
      </div>
    </div>
    <button :class="[$style.btn]" @click="onClick(currentPage + 1)">
      &#62;
    </button>
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
      if (page < 1 || page > this.numberOfPages) return;
      else {
        this.$emit("onClick", page);
      }
    },
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.listLength / this.numberOfItems);
    },
  },
};
</script>

<style module lang="scss">
.wrp {
  display: flex;
  & > div {
    &.active {
      background: #ccc;
    }
  }
}

.btn {
  padding: 10px;
  cursor: pointer;
}

.page {
  cursor: pointer;
  padding: 10px;
}
</style>