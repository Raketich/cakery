<template>
  <div>
    <h2>Products</h2>
    <nuxt-link class="btn btn-success" to="products/form">
      To Form
    </nuxt-link>
    <AdminPanelTable
      :columns="columns"
      :actions="actions"
      :data="products"
      @onEdit="handleEdit"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import AdminPanelTable from '@/components/AdminPanelTable'

import { columns, actions } from './setup'

export default {
  name: 'ProductsPage',
  components: {
    AdminPanelTable
  },
  data: () => ({
    columns,
    actions
  }),
  computed: {
    ...mapGetters({
      products: 'products/items'
    })
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchAll'
    }),
    handleEdit () {
      console.log('changed')
    }
  },
  mounted () {
    this.fetchProducts()
  }
}
</script>

<style lang="scss" scoped></style>
