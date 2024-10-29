const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/common.js',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                },
              },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
              {
                test: /\.css$/,
                use: [
                  // Используем MiniCssExtractPlugin для извлечения CSS в отдельный файл
                  MiniCssExtractPlugin.loader,
                  // Обрабатываем CSS
                  'css-loader',
                  // Добавляем префиксы для кроссбраузерной совместимости
                  {
                    loader: 'postcss-loader', // Этот загрузчик будет работать с PostCSS
                    options: {
                      postcssOptions: {
                        plugins: [
                          require('autoprefixer')(), // Автоматически добавляем префиксы
                        ],
                      },
                    },
                  },
                ],
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
           /*  chunkFilename: '[id].css', */
        })
    ]
}