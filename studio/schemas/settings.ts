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
        title: 'Careers Link (hidden if empty)',
        type: 'url',
      },
      {
        name: 'data_room_link',
        title: 'Data Room Link (hidden if empty)',
        type: 'url',
      },
      {
        name: 'headerSVG',
        title: 'Header Logo Mobile',
        type: 'inlineSvg',
      },
      {
        name: 'headerSVG_dk',
        title: 'Header Logo Desktop',
        type: 'inlineSvg',
      },
      {
        name: 'footerSVG',
        title: 'Footer Logo (hidden if empty)',
        type: 'inlineSvg',
      },
      {
        name: 'footer_image',
        title: 'Footer Image (hidden if empty)',
        type: 'image',
        options: {
          hotspot: false,
        },
      },     
      {
        name: 'bg_video_mobile',
        title: 'Background Video - Mobile',
        description: "Autoplay on loop, muted",
        type: 'file',
      },
      {
        name: 'bg_video_desktop',
        title: 'Background Video - Desktop',
        description: "Autoplay on loop, muted",
        type: 'file',
      },

    ],
  };

export default settings