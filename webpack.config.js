const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const context = {
  pageTitle: 'Test',
};

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          },
        },
      },
    ],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     ...context,
  //     filename: 'index.html',
  //     template: 'index.html',
  //     inject: true
  //   }),
  // ],
};
