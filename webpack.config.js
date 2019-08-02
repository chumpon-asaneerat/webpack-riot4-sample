const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: 'development',
    watch: true,
    entry: { 
        //index: './src/index.js',
        app: './src/app/index.js',
        designer: './src/designer/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/components'),
        filename: '[name]/[name].min.js'
    },
    devtool: "source-map",
    optimization: {
        minimize: false
    },
    module: {
        rules: [{
            // riot tag (.riot, .tag) bundle setup
            test: /\.(riot|tag)$/i,
            exclude: /node_modules/,
            use: [{
                loader: '@riotjs/webpack-loader',
                options: { hot: true }
            }]
        }, {
            // js bundle setup
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env'] }
            }
        }, {
            // scss bundle setup
            test: /\.scss$/i,
            exclude: /node_modules/,
            use: [
                {
                    // fallback to style-loader in development
                    loader: process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    options: { sourceMap: true }
                },
                {
                    loader: 'css-loader',
                    options: { modules: false, sourceMap: true }
                },
                {
                    loader: "sass-loader",
                    options: { sourceMap: true }
                }
            ]
        }, {
            // css bundle setup
            test: /\.css$/i,
            exclude: /node_modules/,
            use: [
                // style-loader
                { 
                    loader: 'style-loader',
                    options: { sourceMap: true }
                },
                // css-loader
                {
                    loader: 'css-loader',
                    options: { modules: false, sourceMap: true }
                }
            ]
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            exclude: /node_modules/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
              }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}