const htmlWebpackPlugin = require('html-webpack-plugin');
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8083,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './public/index.html',
    }),
    new moduleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartShow': './src/index',
      },
      shared: ['@faker-js/faker'],
    }),
  ],
};
