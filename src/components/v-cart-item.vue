<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__image"
      :src="require('../assets/images/' + item_data.image)"
      alt="product"
    />
    <div class="v-cart-item__info">
      <p class="v-cart-item-name">{{ item_data.name }}</p>
      <p class="v-cart-item-price">Price: {{ item_data.price }}</p>
      <p class="v-cart-item-price">Article: {{ item_data.article }}</p>
    </div>
    <div class="v-cart-item-quantity">
      <p>Quantity:</p>
      {{ item_data.quantity }}
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart');
    },
  },
  mounted() {
    this.$set(this.item_data, "quantity", 1);
    /*когда айтем в корзине маунтится ставим его количество равное 1 */
  },
};
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  &__image {
    max-width: 50px;
  }
}
</style>

