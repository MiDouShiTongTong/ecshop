const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // 配置入口文件
  entry: './src/js/index.js',
  // 配置出口/输出文件
  output: {
    // 打包文件存储目录
    path: path.resolve(__dirname, 'dist'),
    // 出口文件存储目录(dist/js/bundle.js)
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS, using Node Sass by default
      ]
    }]
  },
  plugins: [
    // 将指定的html文件生成一个新的html文件
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    // 每次打包先删除dist目录下的所有文件
    new CleanWebpackPlugin(['dist'])
  ]
};
