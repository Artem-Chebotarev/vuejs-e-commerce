<template>
  <div class="v-main-wrapper">
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

export default {
  name: "v-main-wrapper",
  // components: {
  //   vCatalog,
  //   vCart,
  // },
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
  max-width: 900px;
  margin: 0 auto;
}
</style>

