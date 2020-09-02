const
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries"),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    path = require('path');

module.exports = {
    entry: {
        app: './src/ts/index.ts',
        styles: './src/css/main.css'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css'],
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{from: 'static'}]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new FixStyleOnlyEntriesPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};