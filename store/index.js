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
        fetchListData({commit}, page) {
            console.log(page);
            if (this.state.paymentsList.length) return
            return new Promise((resolve) => {
                const pageItems = {
                    "page1": [
                      { id: 1, "date": "20.03.2020", "category": "Food", "value": 169 },
                      { id: 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
                      { id: 3, "date": "22.03.2020", "category": "Sport", "value": 450 },
                      { id: 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
                      { id: 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
                    ],
                    "page2": [
                      { id: 6, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
                      { id: 7, "date": "24.03.2020", "category": "Education", "value": 1500 },
                      { id: 8, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
                      { id: 9, "date": "24.03.2020", "category": "Education", "value": 1500 },
                      { id: 10, "date": "25.03.2020", "category": "Food", "value": 200 }
                    ],
                  };
                // const items = [{
                //           id: 1,
                //           date: "06.08.2021",
                //           category: "Food",
                //           value: 100,
                //         },
                //         {
                //           id: 2,
                //           date: "06.08.2021",
                //           category: "Sport",
                //           value: 200,
                //         },
                //         {
                //           id: 3,
                //           date: "06.08.2021",
                //           category: "Pets",
                //           value: 300,
                //         },];
                resolve(pageItems.page1);
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

//latest worked version
// fetchListData({commit}, page) {
//     page = 1;
//     console.log(page);
//     if (this.state.paymentsList.length) return
//     return new Promise((resolve) => {
//         const items = [{
//                   id: 1,
//                   date: "06.08.2021",
//                   category: "Food",
//                   value: 100,
//                 },
//                 {
//                   id: 2,
//                   date: "06.08.2021",
//                   category: "Sport",
//                   value: 200,
//                 },
//                 {
//                   id: 3,
//                   date: "06.08.2021",
//                   category: "Pets",
//                   value: 300,
//                 },];
//         resolve(items)
//     })
//     .then(res => commit("setPaymentListData", res))
// },