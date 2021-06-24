import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(products => {
          commit('SET_PRODUCTS_TO_STATE', products);
          return products;
        })
        .catch(err => {
          console.log(err);
          return err;
        })
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    }
  },
});

export default store;
