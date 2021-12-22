const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederation({
      name: "container",
      remotes: {
        Products: "Products@http://localhost:8081/index.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
