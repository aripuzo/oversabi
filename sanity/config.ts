import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { structure } from './structure'

export const config = defineConfig({
  name: 'default',
  title: 'Oversabi Stitches',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-11-15',
  basePath: '/studio',
  plugins: [
    deskTool({ structure }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
