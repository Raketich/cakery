<template>
  <div class="cart-container">
    <template v-if="cartItems.length > 0">
      <div class="cart-items-list">
        <ul>
          <li v-for="(item, id) in cartItems" :key="id">
            {{ item.title }} - {{ item.price }}
          </li>
        </ul>
      </div>
      <div class="cart-items-info">
        Quantity: {{ cartCount }} Total: {{ cartTotalPrice }}
      </div>
    </template>
    <template v-else>You have not added any cakes yet</template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Cart2",
  computed: {
    ...mapGetters({
      cartItems: "CART_ITEMS",
      cartCount: "CART_COUNT",
      cartTotalPrice: "CART_TOTAL_PRICE"
    })
  }
};
</script>

<style lang="scss" scoped></style>
