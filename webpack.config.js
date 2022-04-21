const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //entry tells webpack where to start bundling js files
  entry: ['./src/index.js'], //or try path.join(__dirname, 'src', 'index.js'),

  //output tells webpack where to create the bundled file
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },    
  mode: 'development',
  module: {
    //rules to handle different types of files
      rules: [
        {
          test: /jsx?$/,
          exclude: /node_modules/,
          //loader tells webpack to use babel-loader to transpile files with .js
          use: {
            loader: 'babel-loader',
            options: {
              //to transpile ES2015+ and React code, respectively
              presets: ['@babel/preset-env', '@babel/preset-react'],
              //plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
            }    
          }, 
        },
        {
          test: /scss$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ]   
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  devServer: {
    port: 8080,
    //watchContentBase: true,
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/',
    },
  },
        
  // resolve: {
  //     // Enable importing JS / JSX files without specifying their extension
  //     extensions: ['.js', '.jsx'],
  // },

};