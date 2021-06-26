<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <!-- в парамс передаем пропсы -->
      <div class="v-catalog__link_to_cart">Cart: {{ CART.length }}</div>
    </router-link>
    <h1>Catalog</h1>
    <vSelect
      :selected="selected"
      :options="categories"
      @select="sortByCategories"
    />
    <div class="v-catalog__list">
      <vCatalogItem
        v-for="item in filteredProducts"
        :key="item.article"
        :product_data="item"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";
import vSelect from "../v-select.vue";

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
    vSelect,
  },
  data() {
    return {
      categories: [
        { name: "Все", value: "all" },
        { name: "Мужские", value: "м" },
        { name: "Женские", value: "ж" },
      ],
      selected: "Все",
      sortedProducts: [],
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),

    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    }
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_PRODUCT_TO_STATE"]),

    sortByCategories(category) {
      this.sortedProducts = [];
      this.sortedProducts = this.PRODUCTS.filter(product => product.category === category.name);
      this.selected = category.name;
    },

    addToCart(product) {
      this.ADD_PRODUCT_TO_STATE(product);
    },
  },
  mounted() {
    // this.$store.state.products // если не использовать mapGetters
    // this.$store.dispatch('GET_PRODUCTS_FROM_API') // если не использовать mapActions
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  &__link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding * 2;
    border: solid 1px gray;
  }
}
</style>
