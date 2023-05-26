const { merge } = require('webpack-merge');
const webpackConfig = require('./config');
const path = require('path');

module.exports = merge(webpackConfig, {
  mode: 'production',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  }
});