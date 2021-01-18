import { getCategory, getCategories } from "../services/categories.service";

const mutations = {
  SET_CATEGORY(state, category) {
    state.category = category;
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
  SET_CATEGORY_ERROR(state, error) {
    state.categoryError = error;
  }
};

const actions = {
  async GET_CATEGORY_FROM_API({ commit }, id) {
    try {
      const category = await getCategory(id);
      commit("SET_CATEGORY", category);
    } catch (err) {
      commit("SET_CATEGORY_ERROR", err);
    }
  },
  async GET_CATEGORIES_FROM_API({ commit }) {
    try {
      const categories = await getCategories();
      commit("SET_CATEGORIES", categories);
    } catch (err) {
      commit("SET_CATEGORY_ERROR", err);
    }
  }
};

const getters = {
  CATEGORY: ({ category }) => category,
  CATEGORIES: ({ categories }) => categories,
  CATEGORY_ERROR: ({ categoryError }) => categoryError
};

const state = () => ({
  category: {},
  categories: {},
  categoryError: null
});

export default {
  mutations,
  actions,
  getters,
  state
};
