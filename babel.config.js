module.exports = function (api) {
    api.cache(true);
    const presets = [
        [
            "@babel/preset-env",
            {
                corejs: {
                    version: "3",
                    proposals: true
                },
                modules: false,
                useBuiltIns: "usage",
                targets: {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "67",
                    "safari": "11.1",
                    "ie": "11"
                },
            }
        ]
    ];
    const plugins = [
        ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
        ["@babel/plugin-proposal-class-properties"]
    ];
    return {
        presets,
        plugins
    };
};