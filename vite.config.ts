import type { UserConfig } from 'vite'

export default {
  root: 'docs',
  cacheDir: '../.vite',
  server: {
    port: 3000,
    cors: false
  }
} as UserConfig
