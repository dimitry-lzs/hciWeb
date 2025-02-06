// webpack.config.js

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { DefinePlugin } = webpack;

module.exports = (env, argv) => {

    const config = {

        entry: {
            app: './src/index.tsx'
        },

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[chunkhash].js'
        },

        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },

                {
                    test: /\.(ts|tsx)$/,
                    loader: 'ts-loader',
                    options: { allowTsInNodeModules: true }
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                    type: 'asset/resource'
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },

                {
                    test: /\.less$/,
                    use: ['style-loader', 'css-loader', 'less-loader']
                },

                {
                    test: /app.*\.html$/,
                    loader: 'html-loader'
                }
            ]
        },

        plugins: [
            new Dotenv({
                path: '.env'
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: 'index.html'
            }),
            new webpack.ProvidePlugin({
                'window.jQuery': 'jquery'
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'public'),
                        globOptions: {
                            ignore: [
                                '**/index.html'
                            ]
                        }
                    }
                ]
            }),
            new DefinePlugin({
                OPENROUTER_API_KEY: JSON.stringify(process.env.OPENROUTER_API_KEY),
                CHAT_URL: JSON.stringify(process.env.CHAT_URL)
            })
        ],

        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        },

        devServer: {
            port: 8081,
            open: true,
            historyApiFallback: true,
            proxy: [
                {
                    context: ['/api'],
                    target: 'https://openrouter.ai',
                    changeOrigin: true
                }
            ]
        },

        performance: {
            hints: false
        }

    };

    if (argv.mode === 'development') {
        config.devtool = 'source-map';
    }

    return config;
};
