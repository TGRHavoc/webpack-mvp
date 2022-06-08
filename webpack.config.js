const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    devtool: "source-map",
    target: ["web", "es5"],
    entry: {
        "index": {
            import: [
                "./src/index.js",
                "./src/scriptB.js",
                "./src/scriptC.js"
            ]
        },
    },

    output: {
        publicPath: "/dist/",
        // eslint-disable-next-line no-undef
        path: path.resolve(path.join(__dirname, "dist")),
        library: {
            type: "global",
        },
        clean: true,
    },
    optimization: {
        usedExports: false,
        splitChunks: {
            chunks: "all",
        }
    },
    cache: {
        type: "filesystem",
        allowCollectingMemory: true,
    },
    module: {
        // Thought this was the issue but, commenting out doesn't change anything.
        // rules: [
        //     {
        //         test: /\.(js)$/,
        //         exclude: /node_modules/,
        //         use: {
        //             loader: "babel-loader",
        //             options: {
        //                 babelrc: false,
        //                 // eslint-disable-next-line no-undef
        //                 configFile: path.resolve(__dirname, "babel.config.js"),
        //                 compact: false,
        //                 cacheDirectory: true,
        //                 sourceMaps: true
        //             },
        //         },
        //     }
        // ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "jquery": "jquery"
        })
    ]
};
