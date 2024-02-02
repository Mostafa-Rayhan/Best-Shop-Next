/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { type SchemaTypeDefinition } from 'sanity'
// import { schemaTypes } from "./sanity/schema;
import { deskTool } from "sanity/desk";
import StudioHeader from "@/components/StudioHeader";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import { schemaTypes } from './sanity/schemas';

// export default defineConfig({
//   basePath: '/studio',
//   name: "Best_Shopping",
//   title: "Best online shopping",
//   projectId,
//   dataset,
//   // Add and edit the content schema in the './sanity/schema' folder
//   schema,
//   // schema: {
//   //   types: SchemaTypeDefinition,
//   // },
//   plugins: [
//     structureTool(),
//     // Vision is a tool that lets you query your content with GROQ in the studio
//     // https://www.sanity.io/docs/the-vision-plugin
//     visionTool({defaultApiVersion: apiVersion}),
//   ],
//   studio: {
//     components: {
//       // navbar: StudioHeader,
//     },
//   },
// })

export default defineConfig({
  basePath: "/studio",
  name: "Best_Shopping",
  title: "Best online shopping",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioHeader,
    },
  },
});
