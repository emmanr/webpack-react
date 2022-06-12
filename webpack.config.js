const path = require('path');

module.exports = {
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  devtool:false,
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
};
