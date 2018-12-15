const { resolve } = require('path')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dev = true;

module.exports = {
  mode: dev ? 'development' : 'production',

  devtool: dev ? 'cheap-module-eval-source-map' : 'hidden-source-map',

  entry: './test/test.js',

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './test/index.html',
      chunksSortMode: 'none'
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'test'),
    compress: true,
    port: 8080
  }
}