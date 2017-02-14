const path =  require('path');
const webpack = require('webpack');


module.exports = {
  devtool: 'eval-source-map',
  entry: ['react-hot-loader/patch', './examples/index.jsx'],
  output: {
    publicPath: path.resolve(process.cwd(), 'dist'),
    path: __dirname,
    filename: './index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
    ],
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      loaders: 'eslint-loader',
      exclude: '/node_modules/',
    },
    {
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
};
