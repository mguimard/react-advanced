const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index",
  cache: false,
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  output: {
    publicPath: "http://localhost:3000/",
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
      {
        test: /\.md$/,
        loader: "raw-loader",
      },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
