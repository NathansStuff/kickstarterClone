export default {
  name: 'backer',
  title: 'Backer',
  type: 'document',
  fields: [
    {
      title: 'User',
      name: 'user',
      type: 'reference',
      to: [{ type: 'user' }],
    },
    {
      title: 'Amount',
      name: 'amount',
      type: 'number',
    },
  ],
}
