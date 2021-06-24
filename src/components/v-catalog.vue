<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <vCatalogItem
        v-for="item in PRODUCTS"
        :key="item.article"
        :product_data="item"
        @sendArticle="showChildArticle"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['PRODUCTS']),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),

    showChildArticle(data) {
      console.log(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
