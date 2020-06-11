var path = require('path');

module.exports = {
  mode: 'development',
  watchOptions: {
    poll: 1000 // Check for changes every second
  },
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundled.js'
  },
  module: {
    rules: [
      {
        test: /\.dmn$/,
        use: {
          loader: 'raw-loader'
        }
      }
    ]
  }
};