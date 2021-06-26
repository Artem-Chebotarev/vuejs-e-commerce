<template>
  <div class="v-catalog">

    <vNotification
    :messages="messages"
    :timeout="3000"
    >
      

    </vNotification>


    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <!-- в парамс передаем пропсы -->
      <div class="v-catalog__link_to_cart">Cart: {{ CART.length }}</div>
    </router-link>
    <h1>Catalog</h1>
    <div class="v-catalog__container">
      <div class="filter">
        <vSelect
          :selected="selected"
          :options="categories"
          @select="sortByCategories"
          :isExpanded="IS_DESKTOP"
        />
      </div>
      <div class="range-slider">
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          v-model.number="minPrice"
          @change="setRangeSliders"
        />
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          v-model.number="maxPrice"
          @change="setRangeSliders"
        />
      </div>
      <div class="range-values">
        <p>Min: {{ minPrice }}</p>
        <p>Max: {{ maxPrice }}</p>
      </div>
    </div>
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
import vNotification from "../notifications/v-notification.vue";

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
    vSelect,
    vNotification,
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
      minPrice: 0,
      maxPrice: 1000,
      messages: []
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "IS_DESKTOP"]),

    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_PRODUCT_TO_STATE"]),

    // sortByCategories(category) {
    //   this.sortedProducts = [];
    //   this.sortedProducts = this.PRODUCTS.filter(
    //     (product) => product.category === category.name
    //   );
    //   this.selected = category.name;
    // },

    sortByCategories(category) {
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter(
        (product) =>
          product.price >= this.minPrice && product.price <= this.maxPrice
      );
      if (category) {
        if (category.name === "Все") return this.sortedProducts;
        else {
          this.sortedProducts = this.sortedProducts.filter(
            (product) => product.category === category.name
          );
          this.selected = category.name;
        }
      }
    },

    addToCart(product) {
      this.ADD_PRODUCT_TO_STATE(product)
        .then(() => {
          let timeStamp = Date.now().toLocaleString();
          this.messages.unshift({
            name: "Товар добавлен в корзину",
            icon: 'check_circle',
            id: timeStamp,
          })
        });
    },
    setRangeSliders() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sortByCategories();
    },
  },
  mounted() {
    // this.$store.state.products // если не использовать mapGetters
    // this.$store.dispatch('GET_PRODUCTS_FROM_API') // если не использовать mapActions
    this.GET_PRODUCTS_FROM_API().then(() => this.sortByCategories());
  },
};
</script>

<style lang="scss">
.v-catalog {
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-around;
    column-gap: 5%; // задает расстояние между флекс элементами внутри контейнера
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

.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}
.range-slider svg,
.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
</style>
