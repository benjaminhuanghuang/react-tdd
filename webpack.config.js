const path = require('path');

var webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const DEBUG = (process.argv.indexOf('--release') === -1);

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: DEBUG ? 'js/bundle.js' : 'js/bundle.[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }]
            },
            {
                test: /\.(scss|css)$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }],
            },
            {
                test: /\.(eot|svg|png|ttf|woff|woff2)$/,
                loader: "url-loader?limit=100000&name=images/[name].[ext]"
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(DEBUG ? "development" : "production")
            }
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            hash: DEBUG ? false : true,
            filename: 'index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: DEBUG ? false : true
            }
        })
    ]
};