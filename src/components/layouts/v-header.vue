<template>
  <div class="v-header">
    <router-link :to="{ name: 'mainPage' }">
      <img src="../../assets/logo.png" alt="logo" />
    </router-link>
    <div class="search-field">
      <input type="text" v-model="searchValue" />
      <button class="search-btn">
        <i class="material-icons" @click="search(searchValue)">search</i>
      </button>
      <button class="search-btn">
        <i class="material-icons" @click="clearSerachFiled">cancel</i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-header",
  props: {},
  data() {
    return {
      searchValue: "",
    };
  },
  computed: {
    ...mapGetters(["SEARCH_VALUE"]),
  },
  methods: {
    ...mapActions(["SEARCH_PRODUCT"]),

    search(value) {
      this.SEARCH_PRODUCT(value);
      if (this.$route.path !== "/catalog") {
        this.$router.push("/catalog"); //аналог реакт хистори
      }
    },

    clearSerachFiled() {
      this.searchValue = "";
      this.SEARCH_PRODUCT();
      if (this.$route.path !== "/catalog") {
        this.$router.push("/catalog"); //аналог реакт хистори
      }
    },
  },
};
</script>

<style lang="scss">
.v-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: green;
  padding: 16px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  
  img {
    width: 50px;
  }

  .search-field {
    padding: 16px;
    color: #ffffff;
    position: relative;
    right: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-btn {
    margin-left: 16px;
    background: transparent;
    border: none;
  }
}
</style>
