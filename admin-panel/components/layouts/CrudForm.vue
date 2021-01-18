<template>
  <div class="panel-body">
    <h2>{{ title }}</h2>
    <form @submit.prevent="validate">
      <vue-form-generator
        ref="form"
        :schema="formSchema"
        :model="formModel"
        :options="formOptions"
        @model-update="onUpdate"
      />
      <hr>
      <div class="text-center">
        <button class="btn btn-success" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CrudForm',
  props: {
    formSchema: {
      type: Object,
      default: () => {}
    },
    formModel: {
      type: Object,
      default: () => {}
    },
    formOptions: {
      type: Object,
      default: () => ({
        validateAsync: true
      })
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    async validate () {
      const errors = await this.$refs.form.validate()
      const isValid = errors.length === 0
      if (isValid) {
        this.$emit('onSubmit', this.formModel)
      }
    },
    onUpdate (val, field) {
      this.$emit(`on${field}Update`, val)
    }
  }
}
</script>

<style lang="scss" scoped></style>
