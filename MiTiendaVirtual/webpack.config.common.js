const path = require('path'); 
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.[contenthash].js',
        path: path.resolve(__dirname, './public'),
        publicPath: '/'
    },
    module: {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                   options: {
                    presets: ['@babel/preset-react']
                  }
                }
              }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
          'process.env': JSON.stringify(dotenv.config().parsed) 
        })
    ]
};
  
  