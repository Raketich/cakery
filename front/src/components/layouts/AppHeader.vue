<template>
  <div class="app-header__container">
    <div class="navbar">
      <div class="logo">
        <router-link to="/">
          <p>Logo</p>
        </router-link>
      </div>
      <div class="menu">
        <ul class="nav">
          <li class="link" v-for="{ id, title } in categories" :key="id">
            <router-link :to="`category/${id}`">{{ title }}</router-link>
          </li>
        </ul>
      </div>
      <router-link :to="{ name: 'Cart' }">Cart {{ cartCount }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    cartCount: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style lang="scss" scoped>
.app-header__container {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    margin-right: 10px;
    text-decoration: none;
    cursor: pointer;
  }

  .navbar {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid silver;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo p {
      text-transform: uppercase;
      padding-left: 15px;
    }

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style-type: none;
      padding-inline-start: 30;

      a {
        padding-right: 15px;
        text-decoration: none;
      }
    }
  }
}
</style>
