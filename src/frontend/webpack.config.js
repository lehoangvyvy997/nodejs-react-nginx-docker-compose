const Dotenv = require('dotenv-webpack');
 
module.exports = {
  mode: 'development',
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: './bundle.js'
  },
  plugins: [
    new Dotenv({
      path: './.env'
    })
  ]
};