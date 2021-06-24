<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <vCatalogItem/>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>
