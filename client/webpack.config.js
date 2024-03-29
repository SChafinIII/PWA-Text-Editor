const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
const workboxPlugin = new InjectManifest({
  swSrc: './src-sw.js',
  swDest: 'service-worker.js',
})

const manifestPlugin = new WebpackPwaManifest({
  name: 'Jate',
  short_name: 'Jate',
  description: 'Jate is a simple note taking app',
  background_color: '#ffffff',
  theme_color: '#333333',
  icons: [
    { 
      src: path.resolve('src/images/logo.png'),
      sizes: [96, 128, 192, 256, 384, 512],
      destination: path.join('assets', 'icons')
    },
    {
      src: path.resolve('favicon.ico'),
      sizes: [96, 128, 192, 256, 384, 512],
      destination: path.join('assets', 'icons')
    }
  ],

  start_url: '.',
  display: 'standalone',
  orientation: 'portrait-primary',

}); 



// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      workboxPlugin,
      manifestPlugin,
      new HtmlWebpackPlugin({
        template: 'index.html',
        chunks: ['main']
      }),
      // new HtmlWebpackPlugin({
      //   template: './src/install.html',
      //   filename: 'install.html',
      //   chunks: ['install']
      // }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ],
    },
  };
};
