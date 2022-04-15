import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import news from './news'
import blockContent from './blockContent'
import user from './user'
import projects from './projects'
import faq from './faq'
import pledge from './pledge'
import update from './update'
import reply from './reply'
import comment from './comment'
import location from './location'
import backers from './backers';
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    news,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    user,
    projects,
    faq,
    pledge,
    update,
    comment,
    reply,
    location,
    backers
  ]),
})
