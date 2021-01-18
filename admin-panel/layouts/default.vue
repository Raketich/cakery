<template>
  <div class="app">
    <AppNav :menu="menu" />
    <div class="content">
      <main>
        <Nuxt />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppNav from '@/components/layouts/AppNav'
import AppFooter from '@/components/layouts/AppFooter'
import menu from './setup'
export default {
  name: 'AppDefault',
  components: {
    AppNav,
    AppFooter
  },
  data: () => ({
    menu
  })
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";

.app {
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  /* flex-direction: row; */
}

.content {
  height: 100vh;
  width: 75vw;
  display: flex;
  flex-direction: column;
}

main {
  height: 90%;
  background: $main-bg;
  border-bottom: 1px solid silver;
}
</style>
