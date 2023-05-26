const { merge } = require('webpack-merge');
const webpackConfig = require('./config');

module.exports = merge(webpackConfig, {
  mode: 'development',
  entry: './src/main.tsx'
});