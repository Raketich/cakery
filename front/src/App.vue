<template>
  <div id="app">
    <AppHeader
      :categories="categories"
      :cartCount="cartCount"
    />
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AppHeader from "@/components/layouts/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader
  },

  methods: {
    ...mapActions(["GET_CATEGORIES_FROM_API"])
  },
  computed: {
    ...mapGetters({
      categories: "CATEGORIES",
      cartCount: "CART_COUNT"
    })
  },
  mounted() {
    this.GET_CATEGORIES_FROM_API();
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: content-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
