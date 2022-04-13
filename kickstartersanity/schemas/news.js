export default {
 name: 'news',
 title: 'News',
 type: 'document',
 fields: [
  {
   name: 'title',
   title: 'Title',
   type: 'string',
  },
  {
   name: 'slug',
   title: 'Slug',
   type: 'slug',
   options: {
     source: 'title',
     maxLength: 96,
   },
 },
  {
   name: 'blurb',
   title: 'Blurb',
   type: 'string',
  },
  {
   name: 'image',
   title: 'Image',
   type: 'image',
   options: {
     hotspot: true,
   },
 },
  {
   name: 'callToAction',
   title: 'Call To Action',
   type: 'string',
  },
 ]
}