const path = require('path');
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
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
      { find: /^~(.+)/, replacement: path.join(process.cwd(), 'node_modules/$1') },
      { find: /^@\/(.+)/, replacement: path.join(process.cwd(), 'src/$1') },
    ],
  },
  plugins: [react()],
});
