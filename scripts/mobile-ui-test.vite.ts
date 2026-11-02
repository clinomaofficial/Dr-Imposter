import { defineConfig, mergeConfig } from 'vite';
import path from 'node:path';
import appConfig from '../vite.config';
export default defineConfig(env => mergeConfig(appConfig(env), {
  build: { rollupOptions: { input: {
    app: path.resolve(__dirname, '../index.html'),
    fixtures: path.resolve(__dirname, 'mobile-ui-fixtures.html'),
  } } },
}));
