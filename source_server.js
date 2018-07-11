var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack/webpack.config.dev");

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
    disableHostCheck: true,
    clientLogLevel: "error",
    quiet: false,
}).listen(3000, "0.0.0.0", function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log("Listening at 0.0.0.0:3000");
    var path = require("path");
});