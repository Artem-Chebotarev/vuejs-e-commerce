<template>
  <div class="v-main-wrapper">
    <vHeader />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <vCatalog />
    <vCart 
    v-if="CART.length"
    :cart_data="CART"
    /> -->
  </div>
</template>

<script>
// import vCatalog from "./v-catalog.vue";
// import vCart from "./v-cart.vue";
// import { mapGetters } from "vuex";
import vHeader from "../components/layouts/v-header.vue";

export default {
  name: "v-main-wrapper",
  components: {
    // vCatalog,
    // vCart,
    vHeader,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    // ...mapGetters(["CART"]),
  },
  methods: {},
  watch: {},
};
</script>

<style>
.v-main-wrapper {
  /* max-width: 900px; */
  margin: 0 auto;
}
</style>

