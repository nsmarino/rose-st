import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'string',
    },
    {
      name: 'acq',
      title: 'Acquisition Note (optional)',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL (optional)',
      type: 'url',
    },
    {
      title: 'Software?',
      name: 'software',
      type: 'boolean'
    },
    {
      title: 'Consumer?',
      name: 'consumer',
      type: 'boolean'
    },

  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
})
