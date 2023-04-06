import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { resolve } from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MCircleProgressBar',
      fileName: (format) => `${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        }
      }
    }
  },
  plugins: [vue(), cssInjectedByJsPlugin(), dts({
    insertTypesEntry: true,
  })],
})
