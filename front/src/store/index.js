import Vue from "vue";
import Vuex from "vuex";
import product from "./product";
import categories from "./categories";
import cart from "./cart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    product,
    categories,
    cart
  }
});
