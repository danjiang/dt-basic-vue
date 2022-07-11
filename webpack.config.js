const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "none",
    entry: {
        "dt-add": "./src/add.js",
        "dt-add.min": "./src/add.js",
    },
    output: {
        filename: "[name].js",
        library: "DtAdd",
        libraryExport: "default",
        libraryTarget: "umd"
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
            })
        ]
    },
    devtool: 'source-map'
}