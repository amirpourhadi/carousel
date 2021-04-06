const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const webpack = require('webpack');

let progressMessage = '';

module.exports = {
    entry: "./src/App.js",
    devtool: 'source-map',
    devServer: {
        port: 4000,
        open: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        sourceMapFilename: "bundle.js.map",
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/images/carousel'
                        }
                    }
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({ template: "./src/index.html" }),
        new webpack.ProgressPlugin({
            handler: (percentage, message, ...args) => {
                if (progressMessage !== message) {
                    progressMessage = message;
                    console.info(`${(percentage * 100).toFixed()}% ${message}`);
                }
            },
        })
    ]
};