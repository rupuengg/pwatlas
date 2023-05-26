/* eslint-disable import/no-unresolved */
const { merge } = require('webpack-merge');
const webpackConfig = require('./config');

module.exports = merge(webpackConfig, {
  mode: 'development',
});
