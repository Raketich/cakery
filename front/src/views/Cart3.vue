<template>
  <div>
    CART
    {{cartItems}}
    <!-- {{cartItems}} {{cartCount}} -->
    <!-- Cart
    <div>
      <ul>
        <li
          v-for="(item, key) in cartItems"
          :key="key"
        >{{item.name}} - {{item.price}}</li>
      </ul>
      <div
        class="info"
      >Qunatity: {{cartCount}} Total: {{cart.total}}</div>
    </div>
    <div
      v-else
    >You have not added cakes in your cart yet.</div>-->
  </div>
</template>

<script>
// import mapGetters from "vuex";

export default {
  name: "Cart"

  // computed: {
  //   ...mapGetters({
  //     cartItems: "CART_ITEMS"
  //     // cartCount: "CART_COUNT"
  //   })
  // }
};
</script>

