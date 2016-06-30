module.exports = {
    entry: './src/main.js',
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
    devServer: {
      inline: true,
      contentBase: './dist',
      port: 3000
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              loader: 'babel-loader'
            }
        ]
    }
};
