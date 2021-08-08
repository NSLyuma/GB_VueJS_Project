<template>
  <div>
    <input type="date" placeholder="Date" v-model="date" />
    <input type="text" placeholder="Category" v-model="category" />
    <input type="text" placeholder="Value" v-model.number="value" />
    <button @click="addPayment">Add payment</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      date: "",
      category: "",
      value: "",
    };
  },
  methods: {
    addPayment() {
      const { category, value } = this;
      const data = {
        date: this.date || this.getCurrentDate,
        category,
        value,
      };
      this.$emit("addNewPayment", data); //1 аргумент - событие эмита (придумывается название), 2 аргумент - что надо передать (их может быть несколько, может быть объект)
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