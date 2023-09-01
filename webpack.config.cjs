const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const BUILD = process.env.NODE_ENV === 'development' ? '.' : 'build';
console.log(process.env.NODE_ENV, BUILD);

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    clean: true,
    filename: 'webpack_bundle.js',
    path: path.resolve(__dirname, `${BUILD}`),
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    open: true,
    port: 8090,
  },
  resolve: {
    extensions: ['.js'],
    // 让 hpg-ui 库的 external dep可以被正确的 resolve!!
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
  module: {
    rules: [
      // 好像,如果是只是用css in js的话, 是可以不用处理 .css 后缀的~~
      {
        test: /\.js$/,
        resolve: {
          fullySpecified: false, // disable the behaviour
        },
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // {
      //   test: /\.svg$/i,
      //   issuer: /\.[jt]sx?$/,
      //   use: [
      //     {
      //       loader: '@svgr/webpack',
      //       options: {
      //         dimensions: false,
      //       },
      //     },
      //   ],
      // },
      // 使用变量在模版文件.html的话, 是不能使用这个html-loader的, 那这样的话, html-loader到底是用来干啥????
      // {
      //   test: /\.html$/,
      //   use: ["html-loader"],
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ddd App',
      template: 'index.html',
      filename: `${BUILD}/index.html`,
      inject: true,
    }),
  ],
};
