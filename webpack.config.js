const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-react',
                {
                  development: true
                }
              ],
              '@babel/preset-env',
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  resolve: { /* aliases_for_refactor_auto_structure */
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  ,alias: {
    components: require(path).resolve(__dirname, src/components),
    ui: require(path).resolve(__dirname, src/components/ui),
    sections: require(path).resolve(__dirname, src/components/sections),
    pages: require(path).resolve(__dirname, src/pages)
  }
},
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: 'all',
    static: {
      directory: path.join(__dirname, 'public')
    },
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    })
    ,
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist') }
      ]
    })
  ]
};