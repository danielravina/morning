const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

module.exports = {
  devtool: 'source-map',

  entry: {
    app: PATHS.app
  },

  output: {
    path: PATHS.build,
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css|.scss$/,
        loaders: ['style?root=.', 'css?root=.', 'sass?root=.']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg|ttc)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.css'],
    root: __dirname,
    unsafeCache: true
  }
}
