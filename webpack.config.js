var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
	path: __dirname+"/dist",
  },
  module: {
    rules: [
	  {
	    test: /\.css$/,
	    use: [
	      'style-loader',
	      'css-loader'
	    ]
	  },
	  {
		test: /\.(png|svg|jpg|gif)$/,
		use: [
		  'file-loader'
		]
	  }
	]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ]
};
