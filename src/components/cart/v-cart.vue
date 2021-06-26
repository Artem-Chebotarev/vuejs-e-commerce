<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-catalog__link_to_cart">Back to Catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!cart_data.length">There are no products in Cart...</p>
    <vCartItem
      v-for="(item, index) in cart_data"
      :key="item.article"
      :item_data="item"
      @deleteFromCart="removeFromCart(index)"
      @decreaseAmount="decreaseAmount(index)"
      @increaseAmount="increaseAmount(index)"
    />
    <div class="v-cart__total">
      <p class="total__name">Total:</p>
      <p>{{ getTotalPrice | toFix }}</p>
    </div>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import { mapActions } from "vuex";
import toFix from "../../filters/toFix";
export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  filters: {
    toFix,
  },
  computed: {
    getTotalPrice() {
      return this.cart_data.length
        ? this.cart_data.reduce((a, b) => a + +b.price * +b.quantity, 0)
        : 0;
    },
  },
  methods: {
    ...mapActions([
      "DELETE_PRODUCT_FROM_STATE",
      "INCREASE_QUANTITY_IN_STATE",
      "DECREASE_QUANTITY_IN_STATE",
    ]),

    removeFromCart(index) {
      this.DELETE_PRODUCT_FROM_STATE(index);
    },
    decreaseAmount(index) {
      this.DECREASE_QUANTITY_IN_STATE(index);
    },
    increaseAmount(index) {
      this.INCREASE_QUANTITY_IN_STATE(index);
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.v-cart {
  margin-bottom: 100px;
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding * 2 $padding * 3;
    display: flex;
    justify-content: center;
    background: green;
    color: #ffffff;
    font-size: 20px;
  }

  .total__name {
    margin-right: $margin * 2;
  }
}
</style>
