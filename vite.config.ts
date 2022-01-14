import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  define: {
    'process.env': process.env,
  },
  server: {
    port: 3500,
  },
  preview: {
    port: 4000,
  },
  plugins: [
    react({
      babel: {
        presets: ['@babel/preset-react'],
      },
    }),
    envCompatible(),
  ],
  resolve: {
    alias: [
      {
        find: 'api',
        replacement: resolve(__dirname, 'src/api'),
      },
      {
        find: 'pages',
        replacement: resolve(__dirname, 'src/pages'),
      },
      {
        find: 'layouts',
        replacement: resolve(__dirname, 'src/layouts'),
      },
      {
        find: 'interfaces',
        replacement: resolve(__dirname, 'src/interfaces'),
      },
      {
        find: 'hooks',
        replacement: resolve(__dirname, 'src/hooks'),
      },
      {
        find: 'components',
        replacement: resolve(__dirname, 'src/components'),
      },
      {
        find: 'constants',
        replacement: resolve(__dirname, 'src/constants'),
      },
      {
        find: 'contexts',
        replacement: resolve(__dirname, 'src/contexts'),
      },
      {
        find: 'theme',
        replacement: resolve(__dirname, 'src/theme'),
      },
    ],
  },
});
