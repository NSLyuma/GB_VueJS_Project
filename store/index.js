import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export const itemsDB = [
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

export default new Vuex.Store({
    state: {
        paymentsList: [],
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentsList = payload;
        },
        addDataToPaymentsList(state, payload) {
            state.paymentsList.push(payload);
        },
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getTotalValue: state => state.paymentsList.reduce((acc, cur) => (acc += cur.value), 0),
    },
    actions: {
        fetchPaymentsData({commit}) {
            return new Promise((resolve) => {
                const items = itemsDB;
                  resolve(items);
            })
            .then(res => commit("setPaymentsListData", res))
        }
    },
});