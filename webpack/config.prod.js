/* eslint-disable import/no-unresolved */
const { merge } = require('webpack-merge');
const path = require('path');
const webpackConfig = require('./config');

module.exports = merge(webpackConfig, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
  },
});
