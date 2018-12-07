const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/app.jsx'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['js', 'jsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
