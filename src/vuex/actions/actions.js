
export default {
  SEARCH_PRODUCT({ commit }, value) {
    commit('SEARCH_PRODUCT_IN_CATALOG', value);
  },
  SET_DESKTOP({ commit }) {
    commit('SWITH_DESKTOP');
  },
  SET_MOBILE({ commit }) {
    commit('SWITH_MOBILE');
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
}
