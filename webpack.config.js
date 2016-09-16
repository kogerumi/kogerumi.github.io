var path = require('path'),
    webpack = require('webpack'),
    ExtractText = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    entry: ['./src/index.js', './style.less'],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },
            {
                test: /\.less$/,
                loader: ExtractText.extract("style-loader", "css-loader!less-loader")
            }
        ]
    },
    plugins: [
        new ExtractText("style.css")
    ]
};
