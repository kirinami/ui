const path = require('path');

module.exports = {
  core: {
    builder: 'storybook-builder-vite',
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  viteFinal: async (config) => {
    config.css = {
      modules: {
        localsConvention: 'camelCaseOnly',
      },
    };
    config.define = {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    };
    config.resolve = {
      alias: [
        { find: /^~(.+)/, replacement: path.join(process.cwd(), 'node_modules/$1') },
        { find: /^@\/(.+)/, replacement: path.join(process.cwd(), 'src/$1') },
      ],
    };
    return config;
  },
};
