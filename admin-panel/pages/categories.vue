<template>
  <div>
    Categories
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CategoriesPage',
  computed: {
    ...mapGetters({
      categories: 'categories/items'
    })
  },
  methods: {
    ...mapActions({
      fetchCategories: 'categories/fetchAll'
    })
  },
  mounted () {
    this.fetchCategories()
  }
}
</script>

<style lang="scss" scoped></style>
