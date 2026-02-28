import path from "path";
import webpack from "webpack";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildEnv, BuildMode} from "./buildConfig/types";

export default (env: BuildEnv): webpack.Configuration => {
    const mode: BuildMode = env.mode || 'development'
    const isDev = mode === 'development'
    const port = 3000

    let publicPath = mode === 'production' && env.target === 'github' ? '/spine-viewer/' : './'

    return {
        mode: isDev ? 'development' : 'production',
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
        devtool: isDev ? 'source-map' : undefined,
        performance: {
            maxAssetSize: 2000000,
            maxEntrypointSize: 2000000,
        },
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            publicPath,
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
                    test: /\.m?js$/,
                    resolve: {
                        fullySpecified: false,
                    },
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                }
            ]
        },
        devServer: isDev ? {
            port: port,
            open: true,
            devMiddleware: {
                publicPath: '/',
                writeToDisk: true,
            },
        } : undefined
    };
};