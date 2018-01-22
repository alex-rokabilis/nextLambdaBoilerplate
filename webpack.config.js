const webpack = require("webpack"); //to access built-in plugins
const path = require("path");

const config = {
  entry: ["./src/main.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: 'commonjs'
  },
  target: "node",
  externals: [
    'aws-sdk' // aws-sdk included in Lambda
  ],
  plugins: [
    new webpack.IgnorePlugin(/^electron$/),
    new webpack.ProvidePlugin({
      regeneratorRuntime: 'regenerator-runtime'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: []
          }
        }
      }
    ]
  }
};

module.exports = config;
