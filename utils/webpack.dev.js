const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = env => ({
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader','css-loader', 'postcss-loader']
        }
    ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html'})],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        stats: 'errors-only',
        historyApiFallback: true,
        compress: true,
        port: 4020
    }
});



