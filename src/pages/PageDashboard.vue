<template>
  <div>
    <header>My personal costs</header>
    <AddPaymentForm @addItem="addNewData" />
    <AddCategoryForm />
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
import AddCategoryForm from "../components/AddCategoryForm.vue";
import AddPaymentForm from "../components/AddPaymentForm.vue";
import Pagination from "../components/Pagination.vue";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
    AddCategoryForm,
  },
  data() {
    return {
      page: "",
      num: 5,
      cur: 1,
    };
  },
  methods: {
    ...mapMutations(["setPaymentsListData", "addDataToPaymentsList"]),
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
  async created() {
    if (this.$route.params?.page) {
      this.changePage(parseInt(this.$route.params.page));
    }
  },
};
</script>