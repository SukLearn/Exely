const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssPresetEnv({
                    browsers: 'last 2 versions',
                  }),
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
    new StyleLintPlugin({
      configFile: '.stylelintrc.json',
      context: 'src',
      files: '**/*.css',
      failOnError: false,
      quiet: false,
    }),
  ],
  mode: 'development',
  devtool: 'source-map',
};
