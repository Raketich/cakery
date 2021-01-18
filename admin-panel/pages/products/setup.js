export const columns = [
  { key: 'title', name: 'Products name' },
  { key: 'amount', name: 'Products amount' },
  { key: 'price', name: 'Products price' }
]

export const actions = [
  {
    className: 'btn btn-default',
    label: 'Change',
    emit: 'onEdit',
    actionKey: '_id'
  }
]
