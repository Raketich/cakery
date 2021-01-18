<template>
  <div class="home">
    <ProductCard
      v-for="(product, key) in products"
      :key="key"
      :title="product.title"
      :price="product.price"
      :imageUrl="product.imageUrl"
      @addToCart="ADD_TO_CART(product)"
      :inCart="cartItemsIds.includes(product._id)"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

import ProductCard from "@/components/ProductCard";
export default {
  name: "Home",
  components: {
    ProductCard
  },
  computed: {
    ...mapGetters({
      products: "PRODUCTS",
      cartItems: "CART_ITEMS"
    }),
    cartItemsIds: ({ cartItems }) => cartItems.map(({ _id }) => _id)
  },

  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
    ...mapMutations(["ADD_TO_CART"])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  }
};
</script>

<style lang="scss">
.home {
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
}
</style>
