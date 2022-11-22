/** @fileoverview  webpack config file for web-standard scaffold.
 */
const path = require('path');
// Webpack config for non-Closure projects in dev mode
module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: {
    index: './templates/demo-site/index',
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, './src/static/js/'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        //exclude: /node_modules/,
        options: {
          configFile: require.resolve('../tsconfig-dev.json'),
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
};
