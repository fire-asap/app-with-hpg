const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
const BUILD = isDev ? '.' : 'build';
const MODE = isDev ? 'development' : 'production';
console.log(process.env.NODE_ENV, BUILD);

module.exports = {
  mode: MODE,
  entry: './src/index.js',
  output: {
    clean: true,
    filename: isDev ? 'webpack_bundle.js' : 'webpack_bundle.[hash:8].js',
    path: path.resolve(__dirname, `${BUILD}`),
  },
  devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
  devServer: isDev
    ? {
        open: true,
        port: 8090,
      }
    : undefined,
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
      filename: `index.html`,
      inject: true,
    }),
  ],
};
