<template>
  <div class="list">
    <div class="item" v-for="(item, idx) in list" :key="idx">
      <span
        >{{ idx + 1 }}. {{ item.date }} {{ item.category }}
        {{ item.value }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>