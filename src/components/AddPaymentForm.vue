<template>
  <div>
    <input type="date" v-model="date" />
    <input type="text" v-model="category" />
    <input type="text" v-model.number="value" />
    <button @click="addNewItem">Add new cost</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      id: 11,
      date: "",
      category: "",
      value: "",
    };
  },
  methods: {
    addNewItem() {
      const { category, value } = this;
      let data = {
        id: this.id++,
        date: this.date || this.getCurrentDate,
        category,
        value,
      };
      this.$emit("addItem", data);
    },
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
};
</script>