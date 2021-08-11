<template>
  <div id="app">
    <header class="header">My personal costs</header>
    <button @click="isHidden = !isHidden">
      <template v-if="isHidden">Add new cost</template>
      <template v-else>Hide form</template>
    </button>
    <div class="content">
      <AddPaymentForm @addNewPayment="addData" v-if="!isHidden" />
      <!-- addNewPayment из AddPaymentForm.vue - methods - addPayment(), addData придумывается здесь -->
      <PaymentsDisplay :list="paymentsList" />
      <div>Total value: {{ totalValue }}</div>
      <Pagination
        :listLength="paymentsList.length"
        :currentPage="currentPage"
        :numberOfItems="numberOfItems"
        @onClick="changePage"
      />
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./components/AddPaymentForm.vue";
import Pagination from "./components/Pagination.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";

export default {
  name: "App",
  components: {
    AddPaymentForm,
    PaymentsDisplay,
    Pagination,
  },
  data() {
    return {
      paymentsList: [],
      isHidden: true,
      currentPage: 1,
      numberOfItems: 5,
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: "06.08.2021",
          category: "Food",
          value: 100,
        },
        {
          date: "06.08.2021",
          category: "Sport",
          value: 200,
        },
        {
          date: "06.08.2021",
          category: "Pets",
          value: 300,
        },
        {
          date: "06.08.2021",
          category: "Food",
          value: 100,
        },
        {
          date: "06.08.2021",
          category: "Sport",
          value: 200,
        },
        {
          date: "06.08.2021",
          category: "Pets",
          value: 300,
        },
      ];
    },
    addData(newPayment) {
      //newPayment - аргумент, который хотим принимать из компонента AddPaymentForm
      this.paymentsList.push(newPayment);
    },
    changePage(page) {
      this.currentPage = page;
    },
  },
  computed: {
    totalValue() {
      return this.paymentsList.reduce((acc, cur) => (acc += cur.value), 0);
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>

<style lang="scss">
.header {
  font-size: 36px;
}
</style>
