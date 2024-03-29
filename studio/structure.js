// structure.js
import {
    singletonDocumentListItem,
    singletonDocumentListItems,
    filteredDocumentListItems,
  } from 'sanity-plugin-singleton-tools';
  
  export const structure = (S, context) =>
    S.list()
      .items([
        // Create a list item for each singleton document in your schema that links directly to a document view
        ...singletonDocumentListItems({ S, context }),
        // Create a list item for a specific singleton
        singletonDocumentListItem({
          S,
          context,
          // Schema type
          type: 'settings',
          // Required for showing multiple singletons of the same schema type
          title: 'Settings',
          // Required for showing multiple singletons of the same schema type
          id: 'settings',
        }),
        S.divider(),
        // Filter singleton documents out of the default S.documentTypeListItems() to prevent them from being rendered as lists or as duplicates
        ...filteredDocumentListItems({ S, context }),
      ]);