const path = require('path');
const extractText = require('extract-text-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'client');
const BUILD_DIR = path.resolve(__dirname, 'static');

module.exports = {
  entry: path.resolve(SRC_DIR, 'reviewsIndex.jsx'),
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] }
        }],
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'],
        loader: extractText.extract('css?modules&importLoader=1&localIdentName=[name]__[local]___[hash:base64:5')
      },
    ]
  },
  plugins: [
    new extractText('styles.css')
  ]
}