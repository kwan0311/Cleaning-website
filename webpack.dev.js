//Node.js
const path = require('path');

//constant
const DEV_MODE = true;
const CONTENT_PATH = path.resolve(__dirname, 'public');

//Plugins
const webpack = require('webpack');

//disposition
const merge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');

module.exports = merge(webpackCommonConfig(DEV_MODE), {
    mode: 'development',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: CONTENT_PATH,
        hot: true,

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})