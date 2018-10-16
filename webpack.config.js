const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/index"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react"]
          }
        }
      }
    ]
  }
};
