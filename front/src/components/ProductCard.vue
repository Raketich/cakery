<template>
  <div class="product-card">
    <div class="product-card__header">{{ title }} - {{ price }}</div>

    <img :src="imageUrl" />
    <button @click="$emit('addToCart')" v-if="!inCart">Add to Cart</button>
    <button @click="$emit('addToCart')" v-else>Delete from cart</button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    title: {
      type: String,
      default: ""
    },
    price: {
      type: Number,
      default: 0
    },
    imageUrl: {
      type: String,
      default: ""
    },
    inCart: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 400px;
  box-shadow: 0 1px 1px 1px silver;
  border: 1px solid silver;
  border-radius: 20px;
  margin: 15px;
  overflow: hidden;
  &__header {
    padding: 10px;
  }
  img {
    height: 320px;
    overflow: hidden;
    border-radius: 10px;
  }

  button {
    margin: 15px;
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: gray;
    &:hover {
      background: rgba(192, 192, 192, 0.479);
    }
  }
}
</style>
