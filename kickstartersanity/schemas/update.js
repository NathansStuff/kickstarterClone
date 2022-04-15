export default {
 name: 'update',
 title: 'Update',
 type: 'document',
 fields: [
   {
     name: 'title',
     title: 'Title',
     type: 'string',
   },
   {
    name: 'content',
    title: 'Content',
    type: 'blockContent',
  },
  {
    name: 'creator',
    title: 'Creator',
    type: 'reference',
    to: { type: 'user' },
  },
  {
    name: 'createdAt',
    title: 'Created At',
    type: 'datetime',
  },
 ],
}
