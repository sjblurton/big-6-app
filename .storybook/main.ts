import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.tsx"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-styling-webpack",
        "storybook-addon-theme-provider",
        "storybook-addon-mock",
        "@storybook/addon-viewport",
        "storybook-addon-fetch-mock",
        {
            name: "@storybook/addon-styling-webpack",
            options: {
                rules: [
                    {
                        test: /\.s[ac]ss$/i,
                        use: [
                            "style-loader",
                            "css-loader",
                            {
                                loader: "sass-loader",
                                options: {
                                    implementation: require.resolve("sass"),
                                },
                            },
                        ],
                    },
                ],
            },
        },
    ],
    docs: {
        defaultName: "Documentation",
    },
    features: { experimentalRSC: true },
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    staticDirs: ["../src/lib/mock-service-worker", "../public"],
}
export default config
