<template>
  <table class="table">
    <thead>
      <slot name="columns">
        <th>#</th>
        <th v-for="({ name }, index) in columns" :key="index">
          {{ name }}
        </th>
        <th v-if="actions.length != 0">
          Actions
        </th>
      </slot>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <slot :row="item">
          <td>{{ index + 1 }}</td>
          <td v-for="({ key }, tdIndex) in columns" :key="`column-${tdIndex}`">
            {{ item[key] }}
          </td>
          <td
            v-for="({ className, emit, keyItem, label },
                    actionIndex) in actions"
            :key="`action-${actionIndex}`"
          >
            <button
              :class="className"
              @click="$emit(emit, { id: item[keyItem] })"
            >
              {{ label }}
            </button>
          </td>
        </slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'AdminPanelTable',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    actions: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped></style>
