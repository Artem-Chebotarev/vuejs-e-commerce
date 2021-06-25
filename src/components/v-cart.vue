<template>
  <div class="v-cart">
    <h1>Cart</h1>
    <vCartItem
      v-for="(item, index) in cart_data"
      :key="item.article"
      :item_data="item"
      @deleteFromCart="removeFromCart(index)"
    />
  </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import { mapActions } from "vuex";
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
  methods: {
    ...mapActions(['DELETE_PRODUCT_FROM_STATE']),

    removeFromCart(index) {
      this.DELETE_PRODUCT_FROM_STATE(index);
    }
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>
