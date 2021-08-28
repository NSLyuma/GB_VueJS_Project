<template>
  <div>
    <input type="date" v-model="date" />
    <select v-model="category" v-if="options">
      <option v-for="option in options" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
    <input type="text" v-model.number="value" />
    <button @click="addNewItem">Add new cost</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
    ...mapActions(["fetchCategoryList"]),
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