var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var path = require('path');

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

var config = {
    entry: PATHS.src + '/main.jsx',
    resolve: {
        extensions: ['','.js', '.jsx', '.less', '.css']
    },
    output: {
        path: PATHS.build,
        filename: 'main.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : PATHS.src,
                loader : 'babel'
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    },
    devtool: 'source-map', // remove this when build production
    plugins: [
        new HtmlwebpackPlugin({
            // Required
            inject: false,
            template: require('html-webpack-template'),
            title: 'React-Webpack-Babel Demo',
            appMountId: 'app',
            mobile: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: true
            },
            minimize: true
        })
    ]
};

module.exports = config;