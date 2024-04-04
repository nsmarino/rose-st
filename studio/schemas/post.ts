import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Portfolio',
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
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}]
    },
    {
      title: 'Subcategories',
      name: 'subcategories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'subcategory'}]}]
    }
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
