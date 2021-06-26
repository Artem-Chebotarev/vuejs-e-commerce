export default {
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
}
