import { getProduct, getProducts } from "@/services/products.service";

const mutations = {
  SET_PRODUCT(state, product) {
    state.product = product;
  },
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_PRODUCT_ERROR(state, error) {
    state.productError = error;
  }
};

const actions = {
  async GET_PRODUCT_FROM_API({ commit }, id) {
    try {
      const product = await getProduct(id);
      commit("SET_PRODUCT", product);
    } catch (err) {
      commit("SET_PRODUCT_ERROR", err);
    }
  },
  async GET_PRODUCTS_FROM_API({ commit }) {
    try {
      const products = await getProducts();
      commit("SET_PRODUCTS", products);
    } catch (err) {
      commit("SET_PRODUCT_ERROR", err);
    }
  }
};
const getters = {
  PRODUCT: ({ product }) => product,
  PRODUCTS: ({ products }) => products,
  PRODUCT_ERROR: ({ productError }) => productError
};

const state = () => ({
  product: {},
  products: {},
  productError: null
});

export default {
  mutations,
  actions,
  getters,
  state
};
