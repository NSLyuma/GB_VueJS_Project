<template>
  <div>
    <input type="date" placeholder="Date" v-model="date" />
    <select v-model="category" v-if="options">
      <option v-for="option in options" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
    <!-- <input type="text" placeholder="Category" v-model="category" /> -->
    <input type="text" placeholder="Value" v-model.number="value" />
    <button @click="addPayment">Add payment</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
    ...mapActions(["fetchCategoryList"]),
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
    ...mapGetters(["getCategoryList"]),
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    options() {
      return this.getCategoryList;
    },
  },
  created() {
    this.fetchCategoryList();
  },
};
</script>