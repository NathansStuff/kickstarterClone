export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'creator',
      title: 'Creator',
      type: 'reference',
      to: { type: 'user' },
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
      name: 'category',
      title: 'Category',
      type: 'string',
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
      name: 'story',
      title: 'Story',
      type: 'blockContent',
    },
    {
      name: 'risks',
      title: 'Risks',
      type: 'text',
    },
    {
      name: 'liveAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'endsAt',
      title: 'Ends at',
      type: 'datetime',
    },
    {
      name: 'estimatedDelivery',
      title: 'Estimated Delivery',
      type: 'datetime',
    },
    {
      name: 'fundedMin',
      title: 'Minimum Funding Needed',
      type: 'number',
    },
    {
      title: 'FAQs',
      name: 'faqs',
      type: 'array',
      of: [
        {
          type: 'faq',
        },
      ],
    },
    {
      title: 'Pledges',
      name: 'pledges',
      type: 'array',
      of: [
        {
          type: 'pledge',
        },
      ],
    },
    {
      name: 'weLove',
      title: 'Project We Love',
      type: 'boolean',
    },
    {
      title: 'Updates',
      name: 'updates',
      type: 'array',
      of: [
        {
          type: 'update',
        },
      ],
    },
    {
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        {
          type: 'comment',
        },
      ],
    },
    {
      title: 'Backers',
      name: 'backers',
      type: 'array',
      of: [{ type: 'backer' }],
    },
  ],
}
