import Vue from 'vue';
import Vuex from 'vuex';

import commonActions from './actions/actions';
import apiRequests from './actions/api-requests';
import mutations from './mutations/mutations';
import getters from './getters/getters';

const actions = {... commonActions, ... apiRequests} // объединем акшенс из двух файлов в один

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    isMobile: false,
    isDesktop: true,
    products: [],
    cart: [],
  },
  mutations,
  actions,
  getters,
});

export default store;
