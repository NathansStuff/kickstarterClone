export default {
  name: 'pledge',
  title: 'Pledge',
  type: 'document',
  fields: [
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
}
