var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, './app/index.js')
    ],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8181
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }

            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};