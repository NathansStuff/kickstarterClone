import countries from './country'

export default {
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    {
     title: 'City',
     name: 'city',
     type: 'string'
    },
    {
     title: 'country',
     name: 'country',
     type: 'string',
     options: {
       list: [
         ...countries
       ],
     }
   },
  ]
}