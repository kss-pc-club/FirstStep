module.exports = {
  resolve: {
    modules: ['node_modules', 'es2015'],
  },
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  // mode: "development",
  mode: 'production',
}
