const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common.js')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: false,
  watch:true,
  watchOptions: {
    ignored: '/node_modules/',
  },
  devServer: {
    contentBase: "./public",
    compress: false,
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
  module: {
    rules : [
        {
            test: /\.scss$/,
            use: ['style-loader','css-loader','sass-loader']
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
              'file-loader',
            ]
        }
    ]
  },
})
  