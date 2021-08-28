<template>
  <div>
    <div v-for="(item, i) in list" :key="i">
      {{ item.id }}. {{ item.date }} {{ item.category }} {{ item.value }}
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