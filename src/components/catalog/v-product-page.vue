<template>
  <div class="v-product-page">
    <vNotification :messages="messages" :timeout="3000"> </vNotification>

    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <!-- в парамс передаем пропсы -->
      <div class="v-catalog__link_to_cart">Cart: {{ CART.length }}</div>
    </router-link>

    <img
      v-if="product.image"
      class="v-catalog-item__image"
      :src="require('@/assets/images/' + product.image)"
      alt="product"
    />
    <div>
      <p class="v-catalog-item-name">Product name: {{ product.name }}</p>
      <p class="v-catalog-item-price">Price: {{ product.price | toFix }}</p>
      <p class="v-catalog-item-category">
        Product category: {{ product.category }}
      </p>
    </div>
    <button class="v-catalog-item__add_to_cart_btn btn" @click="addToCart">
      Add to Cart
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import toFix from "../../filters/toFix";
import vNotification from "../notifications/v-notification.vue";

export default {
  name: "v-catalog-item",

  components: {
    vNotification,
  },

  data() {
    return {
      messages: [],
    };
  },

  filters: {
    toFix,
  },

  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),

    product() {
      let result = {};
      this.PRODUCTS.map((product) => {
        if (product.article === this.$route.query.product) {
          result = product;
        }
      });
      return result;
    },
  },

  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_PRODUCT_TO_STATE"]),

    addToCart() {
      this.ADD_PRODUCT_TO_STATE(this.product).then(() => {
        let timeStamp = Date.now().toLocaleString();
        this.messages.unshift({
          name: "Товар добавлен в корзину",
          icon: "check_circle",
          id: timeStamp,
        });
      });
    },
  },

  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss">
</style>
