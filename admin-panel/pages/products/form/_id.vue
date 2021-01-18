<template>
  <div class="product-form">
    <div class="row">
      <div class="col-md-9">
        <CrudForm
          v-if="model"
          :form-schema="schema"
          :form-model="model"
          title="Products form"
        />
      </div>
      <div class="col-md-3" />
    </div>
  </div>
</template>

<script>
import { schema } from './fields'

export default {
  name: 'ProductForm',
  components: {
    CrudForm: () => import('@/components/layouts/CrudForm')
  },
  data: () => ({
    model: {},
    schema
  }),
  computed: {
    isUpdated: ({
      $route: {
        params: { id }
      }
    }) => id !== undefined
  },
  mounted () {
    if (this.isUpdated) {
      return
    }
    this.setModel()
  },
  methods: {
    setModel () {
      this.model = {
        title: '',
        description: '',
        price: 0,
        amount: 0,
        imageUrl: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
