<template>
<!-- Для работы клика на компоненте я использую @click.native, а чтобы клик не распространялся на "add to cart" я бы сделал - @click.self -->
  <div class="v-catalog-item" @click.self="productClick"> 
    <!-- так прокидывается пропс от родителя к ребенку -->
    <vPopup
      v-if="isInfoPopupVisible"
      @closePopup="removePopup"
      rightBtnTitle="Add to Cart"
      :popupTitle="product_data.name"
      @rightBtnAction="addToCart"
    >
      <img
        class="v-catalog-item__image"
        :src="require('@/assets/images/' + product_data.image)"
        alt="product"
      />
      <div>
        <p class="v-catalog-item-name">{{ product_data.name }}</p>
        <p class="v-catalog-item-price">Price: {{ product_data.price | toFix}}</p>
        <p class="v-catalog-item-price">{{ product_data.category }}</p>
      </div>
    </vPopup>

    <img
      class="v-catalog-item__image"
      :src="require('@/assets/images/' + product_data.image)"
      alt="product"
    />
    <!-- @ - дает возможность двигаться от корня -->
    <p class="v-catalog-item-name">{{ product_data.name }}</p>
    <p class="v-catalog-item-price">Price: {{ product_data.price | toFix }}</p>
    <div class="v-catalog-item__container_for_btn">
      <button
        class="v-catalog-item__add_to_cart_btn btn"
        @click="showPopupInfo"
      >
        Show info
      </button>
      <button class="v-catalog-item__add_to_cart_btn btn" @click="addToCart">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
import vPopup from "../catalog/popup/v-popup.vue";
import toFix from "../../filters/toFix";

export default {
  name: "v-catalog-item",
  components: {
    vPopup,
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isInfoPopupVisible: false,
    };
  },
  filters: {
    toFix,
  },
  methods: {
    productClick() {
      this.$emit('productClick', this.product_data.article);
    },

    addToCart() {
      this.$emit("addToCart", this.product_data);
    },

    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },

    removePopup() {
      this.isInfoPopupVisible = false;
    },
  },
  mounted() {
    this.$set(this.product_data, "quantity", 1);
    /*когда айтем в корзине маунтится ставим его количество равное 1 */
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

  &__container_for_btn {
    display: flex;
    // justify-content: space-around;
    column-gap: 5%;
  }
}
</style>
