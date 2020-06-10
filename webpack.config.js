const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          { loader: 'eslint-loader' },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
    ],
  },
    plugins: [
      new HTMLPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
      }),
    ],
};
