import { sum } from "ramda";

const mutations = {
  ADD_TO_CART(state, product) {
    const productInCart = state.cartItems.find(
      ({ _id }) => product._id === _id
    );
    if (productInCart) {
      const currentProductsInCart = state.cartItems;
      state.cartItems = currentProductsInCart.filter(
        ({ _id }) => product._id !== _id
      );
    } else {
      state.cartItems.push(product);
    }
  }
};

const actions = {};

const getters = {
  CART_COUNT: ({ cartItems }) => cartItems.length,
  CART_ITEMS: ({ cartItems }) => cartItems,
  CART_ITEM: ({ cartItem }) => cartItem,
  CART_TOTAL_PRICE: ({ cartItems }) => sum(cartItems.map((item) => item.price))
};
const state = () => ({
  cart: {
    total: 0
  },
  cartItems: [],
  cartItem: "hello"
});

export default {
  mutations,
  actions,
  getters,
  state
};
