var path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");


const absUrl = "/Users/johnpaulburbank/hoistbin/contracting/skeleton";
const pathsToClean = [
    require("path").resolve("./assets/dist")
];
const cleaningOptions = {
    verbose: true,
    root: require("path").resolve("./")
};

const resolve = (dir) => {
    return path.join(__dirname, '../', dir);
};


module.exports = {

    mode: "production",
    
    context: absUrl,
    
    entry: [
        "babel-polyfill", 
        "./assets/src/index",
    ],
    
    output: {
        path: path.resolve("./assets/dist/"),
        filename: "[name]-[hash].js",
        publicPath: 'assets/dist/',
    },

    resolve: {
        modules: [
            resolve("assets/src"),
            "node_modules",
        ],
        extensions: [".js", ".jsx"]
    },
    
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleaningOptions),
        new ExtractTextPlugin({
            "filename": "[name]-[contenthash].css"
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: "My skeleton project",
            template: "./assets/templates/index.html",
            alwaysWriteToDisk: true
        }),
        new BundleTracker({
            filename: "./webpack/webpack-stats.json"
        }),
        new UglifyJSPlugin()
    ],
    
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: "/node_modules/",
                enforce: "pre",
                use: [{
                    loader: "eslint-loader",
                    options: {}
                }]
            }, 
            {
                test: /\.css$/,
                include: [
                    path.resolve("./assets/src/style"),
                ],
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            modules: false
                        }
                    }]
                })
            },
            {
                test: /\.jsx?$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        "ignore": [/node_modules/],
                        "presets": ["es2015", "stage-2", "react"]
                    }
                }]
            }
        ]
    },
};