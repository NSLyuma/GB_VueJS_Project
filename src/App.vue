<template>
  <div id="app">
    <header>My personal costs</header>
    <AddPaymentForm @addItem="addNewData" />
    <PaymentsDisplay :list="currentItems" />
    <div>Total value: {{ getTotalValue }}</div>
    <Pagination
      :listLength="getPaymentsList.length"
      :currentPage="cur"
      :numberOfItems="num"
      @onClick="changePage"
    />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import Pagination from "./components/Pagination.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
export default {
  name: "App",
  components: { PaymentsDisplay, AddPaymentForm, Pagination },
  data() {
    return {
      paymentsList: [],
      num: 5,
      cur: 1,
    };
  },
  methods: {
    ...mapMutations(["setPaymentsListData"]),
    fetchData() {
      return [
        {
          id: 1,
          date: "13.08.2021",
          category: "Food",
          value: 100,
        },
        {
          id: 2,
          date: "13.08.2021",
          category: "Food",
          value: 200,
        },
        {
          id: 3,
          date: "13.08.2021",
          category: "Food",
          value: 300,
        },
        {
          id: 4,
          date: "13.08.2021",
          category: "Food",
          value: 400,
        },
        {
          id: 5,
          date: "13.08.2021",
          category: "Food",
          value: 500,
        },
        {
          id: 6,
          date: "13.08.2021",
          category: "Food",
          value: 100,
        },
        {
          id: 7,
          date: "13.08.2021",
          category: "Food",
          value: 200,
        },
        {
          id: 8,
          date: "13.08.2021",
          category: "Food",
          value: 300,
        },
        {
          id: 9,
          date: "13.08.2021",
          category: "Food",
          value: 400,
        },
        {
          id: 10,
          date: "13.08.2021",
          category: "Food",
          value: 500,
        },
      ];
    },
    addNewData(newItem) {
      this.paymentsList.push(newItem);
    },
    changePage(page) {
      this.cur = page;
    },
  },
  computed: {
    ...mapGetters(["getPaymentsList", "getTotalValue"]),
    currentItems() {
      const { cur, num } = this;
      return this.getPaymentsList.slice(num * (cur - 1), num * (cur - 1) + num);
    },
  },
  created() {
    // this.paymentsList = this.fetchData();
    this.setPaymentsListData(this.fetchData());
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>