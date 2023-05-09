/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
   plugins: [
      react({
         babel: {
            plugins: [
               [
                  'babel-plugin-styled-components',
                  {
                     displayName: true,
                     fileName: false,
                  },
               ],
            ],
         },
      }),
      tsconfigPaths({
         extensions: ['.ts', '.tsx'],
      }),
   ],
   test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/setupTests.ts'],
    },
   server: {
      open: true,
   },
})
