<template>
  <div class="v-main-wrapper">
    <vCatalog />
    <vCart />
  </div>
</template>

<script>
import vCatalog from "./v-catalog.vue";
import vCart from "./v-cart.vue";

export default {
  name: "v-main-wrapper",
  components: {
    vCatalog,
    vCart,
  },
  props: {},
  data() {
    return {
      
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {
    console.log("Hello! I am alive !!!");
  },
};
</script>

<style>
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>

