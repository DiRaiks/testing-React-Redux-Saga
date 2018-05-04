const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
})

module.exports = {
    // context: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash].chunk.js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: ['babel-loader']
            }
        ]
    },
    plugins: [
        htmlPlugin
    ]
};