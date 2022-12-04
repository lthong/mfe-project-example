const htmlWebpackPlugin = require('html-webpack-plugin');
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './public/index.html',
    }),
    new moduleFederationPlugin({
      name: 'container',
      remotes: {
        products123: 'products456@http://localhost:8081/remoteEntry.js',
        cart: 'cart@http://localhost:8083/remoteEntry.js',
      },
    }),
  ],
};
