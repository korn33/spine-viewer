import * as path from "path";
import * as webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: webpack.Configuration = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
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
    })],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
};

export default config;