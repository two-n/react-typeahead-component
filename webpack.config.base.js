'use strict';

var reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
};

module.exports = {
  externals: {
    'react': reactExternal
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  output: {
    library: 'Typeahead',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};