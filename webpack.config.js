const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: '/index.js',
        main: './public/main.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            minify: false
        })
    ],
    output: {
    filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
};
