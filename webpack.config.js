const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PATHS = {
    app: path.join(__dirname, 'app/013'),
    build: path.join(__dirname, 'build'),
};

module.exports = {
    entry: ["babel-polyfill", PATHS.app + '/app.js'],
    output: {
        path: PATHS.build,
        filename: "bundle.js"
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)?$/,
                loader: "babel-loader",
                query:{
                    presets: [
                        "react",
                        "es2015"
                    ]
                }
            },
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         use: {
            //             loader: 'css-loader',
            //             options: {
            //                 module: true
            //             }
            //         },
            //         fallback: 'style-loader'
            //     })
            //
            // }
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader']
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "first react",
            template:  __dirname + '/app/index.html'
        }),
        // new ExtractTextPlugin({
        //     filename: 'css/[name].css',
        //     ignoreOrder: true
        // })
    ],
    devtool: 'source-map'
};