import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExist = false
        state.cart.map(function (item) {
          if (item.article === product.article) {
            isProductExist = true
            item.quantity++
          }
        })
        isProductExist || state.cart.push({ ...product, quantity: 1 })
        /*
         * в данной строке мы сразу ставим quantity:1 для любого нового товара в корзине,
         * компоненты получают его сразу в пропсах
         */
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
    INCREASE_QUANTITY_IN_CART: (state, index) => {
      // if (state.products[index].quantity) {
        state.cart[index].quantity++;
        // state.products[index].quantity--;
      // }
    },
    DECREASE_QUANTITY_IN_CART: (state, index) => {
      if (state.cart[index].quantity) {
        state.cart[index].quantity--;
        // state.products[index].quantity++;
      }
    },
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
    },
    ADD_PRODUCT_TO_STATE({ commit }, product) {
      commit('SET_CART', product);
    },
    DELETE_PRODUCT_FROM_STATE({ commit }, index) {
      commit('REMOVE_FROM_CART', index);
    },
    INCREASE_QUANTITY_IN_STATE({ commit }, index) {
      commit('INCREASE_QUANTITY_IN_CART', index);
    },
    DECREASE_QUANTITY_IN_STATE({ commit }, index) {
      commit('DECREASE_QUANTITY_IN_CART', index);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
});

export default store;
