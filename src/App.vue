<template>
  <div id="app">
    <vMainWrapper />
  </div>
</template>

<script>
import vMainWrapper from "./components/v-main-wrapper.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    vMainWrapper,
  },
  methods: {
    ...mapActions(["SET_DESKTOP", "SET_MOBILE"]),
  },
  computed: {
    ...mapGetters(["IS_MOBILE", "IS_DESKTOP"]),
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 767) {
        this.SET_DESKTOP();
      } else {
        this.SET_MOBILE();
      }
    });
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 160px;
}
</style>
