import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: [],
        categories: [],
    },
    mutations: {
        setPaymentListData(state, payload) //1 аргумент - объект текущего состояния, 2 аргумент - данные, которые мы хотим загрузить в state
        //при вызове мутации мы передаём только payload (и другие аргументы кроме state)
        {
            state.paymentsList = payload;
        },
        addDataToPaymentList(state, payload) {
            state.paymentsList.push(payload);
        },
        setCategoriesListData(state, payload) {
            state.categories = payload;
        }
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getFullPaymentsValue: state => {
            return state.paymentsList.reduce((acc, cur) => (acc += cur.value), 0)
        },
        getCategoryList: state => state.categories,
    },
    actions: {
        fetchListData({commit}) {
            if (this.state.paymentsList.length) return
            return new Promise((resolve) => {
                const items = [];
                for (let i = 0; i < 20; i++) {
                    items.push({
                        date: "10.08.2021",
                        category: "Food",
                        value: i
                    })
                }
                resolve(items)
            })
            .then(res => commit("setPaymentListData", res))
        },
        fetchCategoryList({commit}) {
            return new Promise((resolve)=>{
                    const categories = ['Sport', 'Food', "Education", 'Internet', 'Other']
                    resolve(categories)
            })
            .then(res=> commit('setCategoriesListData', res))
        }
    },
})