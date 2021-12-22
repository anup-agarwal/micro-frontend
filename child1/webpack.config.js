const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederation({
      name: "Products",
      filename: "index.js",
      exposes: {
        "./ProductsIndex": "./src/index.js",
        "./Products": "./src/temp.js",
      },
    }),
  ],
};
