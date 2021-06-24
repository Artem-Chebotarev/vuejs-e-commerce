<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      :src="require('../assets/images/' + product_data.image)" alt="product"
    />
    <p class="v-catalog-item-name">{{ product_data.name }}</p>
    <p class="v-catalog-item-price">Price: {{ product_data.price }}</p>
    <button
      class="v-catalog-item__add_to_cart_btn btn"
      @click="sendDatatoParrent"
    >
      Add to Cart
    </button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
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
    sendDatatoParrent() {
      this.$emit("sendArticle", this.product_data.article);
    },
  },
};
</script>

<style lang="scss">
.v-catalog-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__image {
    width: 100px;
  }
}
</style>
