const path = require('path');
const webpackMerge = require('webpack-merge');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const madeConfig = env => require(`./utils/webpack.{env.mode}`)(env);


module.exports = env => webpackMerge(
    {
        mode: env.mode,
        entry:'./src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/, 
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                name: '[path]/[name].[ext]',
                                limit: 5000
                            }
                        }
                    ]
                },
                {
                    test: /\.html$/,
                    use: 'html-loader'
                },
                {test: /\.hbs$/, use: "handlebars-loader"}
            ]
        },
        plugins: [ new CleanWebpackPlugin() ],
    }, madeConfig(env)
);

