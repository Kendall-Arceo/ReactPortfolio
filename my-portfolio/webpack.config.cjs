const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    
    loaders: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        include: __dirname + /app/,
        loader: 'babel-loader',
      }
    ]
  },
  query: {
    presets: ["es2015", "react"]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  devtool: 'cheap-module-eval-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};