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
import { mapMutations, mapGetters, mapActions } from "vuex";
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
    ...mapMutations(["setPaymentsListData", "addDataToPaymentsList"]),
    ...mapActions(["fetchPaymentsData"]),
    addNewData(newItem) {
      this.addDataToPaymentsList(newItem);
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
    this.fetchPaymentsData();
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