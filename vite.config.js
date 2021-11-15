const path = require('path');
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

const pkg = require('./package.json');

module.exports = defineConfig({
  build: {
    lib: {
      name: pkg.name,
      entry: path.resolve(__dirname, 'src/main.ts'),
      fileName: format => `main.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  server: {
    host: true,
    port: 4200,
    strictPort: true,
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
  resolve: {
    alias: [
      { find: /^~(.+)/, replacement: path.resolve(__dirname, 'node_modules/$1') },
      { find: /^@\/(.+)/, replacement: path.resolve(__dirname, 'src/$1') },
    ],
  },
  plugins: [react()],
});
