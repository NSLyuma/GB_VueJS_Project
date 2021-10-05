<template>
  <div>
    <header>My personal costs</header>
    <button @click="showPaymentFormFn">Add payment</button>
    <button @click="showAddCategoryFormFn">Add category</button>
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
import Pagination from "../components/Pagination.vue";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    Pagination,
  },
  data() {
    return {
      page: "",
      num: 5,
      cur: 1,
      showPaymentForm: false,
      settings: {},
    };
  },
  methods: {
    ...mapMutations(["addDataToPaymentsList"]),
    changePage(page) {
      this.cur = page;
    },
    showPaymentFormFn() {
      this.$modal.show("AddPaymentForm", { header: "Add payment Form" });
    },
    showAddCategoryFormFn() {
      this.$modal.show("AddCategoryForm", { header: "Add category Form" });
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