export const schema = {
  fields: [
    {
      type: 'input',
      label: 'Cake name',
      model: 'title',
      placeholder: 'Enter cake name',
      inputType: 'text',
      styleClasses: 'col-md-6'
    },
    {
      type: 'input',
      label: 'Cake price',
      model: 'price',
      placeholder: 'Enter cake price',
      inputType: 'text',
      styleClasses: 'col-md-6'
    },
    {
      type: 'textArea',
      label: 'Cake description',
      model: 'description',
      placeholder: 'Enter cake description',
      hint: 'Max 500 characters',
      rows: 10,
      styleClasses: 'col-md-12'
    },

    {
      type: 'input',
      label: 'Cake name',
      model: 'title',
      placeholder: 'Enter cake name',
      inputType: 'text',
      styleClasses: 'col-md-6'
    },
    {
      type: 'input',
      label: 'Cakes amount',
      model: 'amount',
      placeholder: 'Enter cake amounts',
      inputType: 'text',
      styleClasses: 'col-md-6'
    },
    {
      type: 'input',
      label: 'Cake image',
      model: 'imageUrl',
      placeholder: 'Enter cake image url',
      inputType: 'text',
      styleClasses: 'col-md-6'
    }
  ]
}
