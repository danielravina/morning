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
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.css'],
    root: __dirname,
    unsafeCache: true
  }
}
