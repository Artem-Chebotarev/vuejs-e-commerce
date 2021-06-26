export default {
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
}
