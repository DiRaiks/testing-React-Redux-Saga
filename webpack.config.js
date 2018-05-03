const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
})

module.export = {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: ['babel-loader']
            }
        ]
    },
    plugins: [
        htmlPlugin
    ]
};