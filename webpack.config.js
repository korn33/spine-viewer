const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Spine Viewer",
        meta: {
            description: "SPA для просмотра Spine-анимаций",
            viewport: "width=device-width, initial-scale=1.0"
        },
        template: path.resolve(__dirname, 'public', 'index.html')
    })]
};