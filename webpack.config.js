const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
// const devtool = isDev ? 'source-map' : '';

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = (params) => {
    const loaders = [{
        loader: MiniCssExtractPlugin.loader
    }, 'css-loader'];

    if (params) {
        loaders.push(params);
    }

    return loaders;
};

const optimization = () => {
    const config = {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all'
        },
    };

    if (isProd) {
        config.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin(),
        ];
    }

    return config;
};

module.exports = {
    mode: 'development',
    devtool: isDev ? 'source-map' : undefined,
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: filename('js'),
    },
    devServer: {
        port: 4200,
        hot: isDev
    },
    target: 'web',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.css$/i,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/i,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|jpe?g|svg|gif|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]'
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/i,
                // use: ['file-loader']
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    optimization: optimization()
};

// "start": "webpack serve --mode development --open",
// "dev": "webpack",
// "build": "webpack --node-env=production",