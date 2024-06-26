import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import { singletonTools } from 'sanity-plugin-singleton-tools';
import { inlineSvgInput } from '@focus-reactive/sanity-plugin-inline-svg-input'

import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'

import {schemaTypes} from './schemas'
import { locate } from './locate';

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'project-name',
  title: 'Rose Street Capital',
  projectId,
  dataset,
  plugins: [
    singletonTools(),
    structureTool(),
    inlineSvgInput(),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:5173',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable',
        },
      },
      locate
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
