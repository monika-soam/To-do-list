// const path = require('path');

module.exports = {
  watch: true,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: [
        'style-loader',
        'css-loader',
      ],
    }],

  },

  devServer: {
    static: __dirname,
    port: 9000,
  },
};