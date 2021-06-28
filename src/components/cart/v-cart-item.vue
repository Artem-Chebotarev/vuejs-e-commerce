<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__image"
      :src="require('@/assets/images/' + item_data.image)"
      alt="product"
    />
    <!-- @ - дает возможность двигаться от корня -->
    <div class="v-cart-item__info">
      <p class="v-cart-item-name">{{ item_data.name }}</p>
      <p class="v-cart-item-price">Price: {{ item_data.price | toFix }}</p>
      <p class="v-cart-item-price">Article: {{ item_data.article }}</p>
    </div>
    <div class="v-cart-item-quantity">
      <p>Quantity:</p>
      <span>
        <span class="quantity__btn" @click="decreaseAmount">-</span>
        {{ item_data.quantity }}
        <span class="quantity__btn" @click="increaseAmount">+</span>
      </span>
    </div>
    <button class="btn" @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
import toFix from "../../filters/toFix";

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
  filters: {
    toFix,
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    decreaseAmount() {
      this.$emit("decreaseAmount");
    },
    increaseAmount() {
      this.$emit("increaseAmount");
    },
  },
};
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  margin-bottom: $margin * 3;

  &__image {
    max-width: 50px;
  }

  .quantity__btn {
    cursor: pointer;
  }
}
</style>

