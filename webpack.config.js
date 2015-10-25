
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: {
    bundle: './main.js',
    appModule: './app/app.module.js'
  },
  output: {
    path: __dirname + '/assets',
    filename: '[name].js'
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.jpg$/, loader: 'url-loader?name=tmp/[hash].[ext]&limit=8000' }
    ]
  },
  plugins: [
    new uglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: false
    })
  ]

};