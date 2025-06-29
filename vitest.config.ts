import { defineConfig } from 'vitest/config'
import path from "path";
export default defineConfig({

  test: {
    alias: { '@/': `${path.resolve(__dirname, 'src')}/` },
    projects: [
      {
        test: {
          alias: { '@/': `${path.resolve(__dirname, 'src')}/` },
          include: ['src/**/*.{test,spec}.ts'],
          name: 'node',
          environment: 'node',
        },
      },
      {
        test: {
          alias: { '@/': `${path.resolve(__dirname, 'src')}/` },
          include: ['src/**/*.browser.{test,spec}.tsx'],
          name: 'browser',
          browser: {
            enabled: true,
            instances: [{ browser: 'chromium' },],
          },
        },
      },
      {
        test: {
          alias: { '@/': `${path.resolve(__dirname, 'src')}/` },
          // components that don't need to run in a browser environment
          include: ['src/**/*.test.tsx'],
          exclude: ['src/**/*.browser.test.tsx'],
          name: 'jsdom',
          environment: 'jsdom',
        },
      },
    ],
  },
})
