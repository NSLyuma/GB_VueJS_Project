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
      <PaymentsDisplay :list="getPaymentsList" />
      <!-- <PaymentsDisplay :list="paymentsList" /> paymentsList раньше хранилось в data, теперь мы вместо него берём getPaymentsList из vuex-хранилища -->
      <div>Total value: {{ totalValue }}</div>
      <Pagination :listLength="getPaymentsList.length" />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
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
      isHidden: true,
    };
  },
  methods: {
    ...mapMutations(["setPaymentListData", "addDataToPaymentList"]),
    ...mapActions(["fetchListData"]),
    // fetchData() {
    //   return [
    //     {
    //       date: "06.08.2021",
    //       category: "Food",
    //       value: 100,
    //     },
    //     {
    //       date: "06.08.2021",
    //       category: "Sport",
    //       value: 200,
    //     },
    //     {
    //       date: "06.08.2021",
    //       category: "Pets",
    //       value: 300,
    //     },
    //     {
    //       date: "06.08.2021",
    //       category: "Food",
    //       value: 100,
    //     },
    //     {
    //       date: "06.08.2021",
    //       category: "Sport",
    //       value: 200,
    //     },
    //     {
    //       date: "06.08.2021",
    //       category: "Pets",
    //       value: 300,
    //     },
    //   ];
    // },
    addData(newPayment) {
      //newPayment - аргумент, который хотим принимать из компонента AddPaymentForm
      // this.paymentsList.push(newPayment);
      this.addDataToPaymentList(newPayment);
    },
  },
  computed: {
    ...mapGetters(["getFullPaymentsValue", "getPaymentsList"]),
    totalValue() {
      // return this.paymentsList.reduce((acc, cur) => (acc += cur.value), 0);
      return this.getFullPaymentsValue;
    },
  },
  created() {
    // this.paymentsList = this.fetchData();
    // this.$store.commit("setPaymentListData", this.fetchData()); //commit - для вызова mutations, dispatch - для вызова actions
    // верхний вариант - когда не импортирован mapMutations, нижний - с импортом
    // this.setPaymentListData(this.fetchData());
    this.fetchListData();
  },
};
</script>

<style lang="scss">
.header {
  font-size: 36px;
}
</style>
