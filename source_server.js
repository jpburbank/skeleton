var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack/config.dev");


var host = "http://127.0.0.1";
var port = "3001";
var path = "/assets/dist/";

config.entry = [
    "webpack-dev-server/client?" + host + ":" + port, 
    "webpack/hot/only-dev-server",
].concat(config.entry);

config.output.publicPath = host + ":" + port + path;

config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
    disableHostCheck: true,
    clientLogLevel: "error",
    quiet: false,
}).listen(3001, "0.0.0.0", function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Listening at 0.0.0.0:3001");
});