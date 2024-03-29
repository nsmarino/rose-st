import {defineField, defineType} from 'sanity'

const settings  = {
    name: 'settings',
    title: 'Settings',
    type: 'document',
    options: {
      singleton: true, // Identify this document as a singleton
    },
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'investor_link',
        title: 'Investor Login Link',
        type: 'url',
      },
      {
        name: 'careers_link',
        title: 'Investor Login Link',
        type: 'url',
      },
      {
        name: 'data_room_link',
        title: 'Data Room Link',
        type: 'url',
      },
      {
        name: 'footer_image',
        title: 'Footer Image',
        type: 'image',
        options: {
          hotspot: false,
        },
      },
    ],
  };

export default settings