<template>
  <div>
    <nav class="aside">
      <NavItem v-for="(item, key) in menu" :key="key" :to="item.to">
        {{ item.name }}
      </NavItem>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppNav',
  components: {
    NavItem: () => import('@/components/NavItem')
  },
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  height: 100vh;
  width: 25vw;
  display: flex;
  flex-direction: column;
  background: rgb(205, 205, 205);
  padding: 1rem;
  box-shadow: 0 2px 2px white;
}
</style>
