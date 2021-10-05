<template>
  <div>
    <div v-for="(item, i) in list" :key="i">
      {{ item.id }}. {{ item.date }} {{ item.category }} {{ item.value }}
      <button @click="showContext($event, item)">...</button>
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
  methods: {
    showContext(event, item) {
      const items = [
        {
          text: "Edit",
          action: () => {
            console.log("edit", item.id);
          },
        },
        {
          text: "Delete",
          action: () => {
            console.log("delete", item.id);
          },
        },
      ];
      this.$context.showContext({ event, items });
    },
  },
};
</script>