const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const rootPath = path.join(__dirname, '..');
const packagesDir = path.join(rootPath, 'packages');

// 需要从源码编译的 packages
const sourcePackages = [
    path.join(packagesDir, 'semi-ui'),
    path.join(packagesDir, 'semi-foundation'),
    path.join(packagesDir, 'semi-icons/src'),
    path.join(packagesDir, 'semi-icons-lab/src'),
    path.join(packagesDir, 'semi-illustrations/src'),
    path.join(packagesDir, 'semi-animation'),
    path.join(packagesDir, 'semi-animation-react'),
    path.join(packagesDir, 'semi-animation-styled'),
    path.join(packagesDir, 'semi-json-viewer-core/src'),
];

module.exports = {
    mode: isDev ? 'development' : 'production',
    bail: !isDev,
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
    entry: {
        main: './src/main.tsx'
    },
    output: {
        filename: isDev ? '[name].js' : '[name].[contenthash:8].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        clean: true,
    },
    
    module: {
        rules: [
            // TypeScript/JavaScript for source packages
            {
                test: /\.[tj]sx?$/,
                include: [
                    path.join(__dirname, 'src'),
                    ...sourcePackages,
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', { targets: 'defaults' }],
                                ['@babel/preset-react', { runtime: 'automatic' }],
                                '@babel/preset-typescript',
                            ],
                            plugins: isDev ? [require.resolve('react-refresh/babel')] : [],
                        }
                    },
                ]
            },
            // JavaScript from node_modules (don't process with babel)
            {
                test: /\.m?js$/,
                resolve: {
                    fullySpecified: false,
                },
            },
            // SCSS/CSS
            {
                test: /\.s?css$/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin'],
                            },
                            // 在每个 SCSS 文件前导入 theme 变量
                            additionalData: `@import "${path.join(packagesDir, 'semi-theme-default/scss/index.scss').replace(/\\/g, '/')}";`,
                        },
                    },
                ],
            },
            // Images
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: 'asset/resource',
            },
        ]
    },
    
    optimization: {
        minimize: !isDev,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                react: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'lib-react',
                    priority: 20,
                },
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    priority: 10,
                },
            },
        },
    },
    
    performance: {
        maxEntrypointSize: 10485760,
        maxAssetSize: 10485760,
        hints: isDev ? false : 'warning',
    },
    
    plugins: [
        // webpack 5 通过 mode 自动设置 process.env.NODE_ENV，无需手动定义
        new CaseSensitivePathsPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: true,
        }),
        !isDev && new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css',
        }),
        isDev && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            // 精确匹配（$）指向入口文件，避免 webpack 读取 package.json 的 main/module 字段
            "@douyinfe/semi-ui$": path.join(packagesDir, "semi-ui/index.ts"),
            "@douyinfe/semi-foundation$": path.join(packagesDir, "semi-foundation/index.ts"),
            "@douyinfe/semi-icons$": path.join(packagesDir, "semi-icons/src/index.ts"),
            "@douyinfe/semi-icons-lab$": path.join(packagesDir, "semi-icons-lab/src/index.tsx"),
            "@douyinfe/semi-illustrations$": path.join(packagesDir, "semi-illustrations/src/index.ts"),
            "@douyinfe/semi-animation$": path.join(packagesDir, "semi-animation/index.ts"),
            "@douyinfe/semi-animation-react$": path.join(packagesDir, "semi-animation-react/index.ts"),
            "@douyinfe/semi-animation-styled$": path.join(packagesDir, "semi-animation-styled/index.ts"),
            "@douyinfe/semi-json-viewer-core$": path.join(packagesDir, "semi-json-viewer-core/src/index.ts"),
            "@douyinfe/semi-theme-default$": path.join(packagesDir, "semi-theme-default/scss/index.scss"),
            // 前缀匹配用于深层导入
            "@douyinfe/semi-ui": path.join(packagesDir, "semi-ui"),
            "@douyinfe/semi-foundation": path.join(packagesDir, "semi-foundation"),
            "@douyinfe/semi-icons": path.join(packagesDir, "semi-icons/src"),
            "@douyinfe/semi-icons-lab": path.join(packagesDir, "semi-icons-lab/src"),
            "@douyinfe/semi-illustrations": path.join(packagesDir, "semi-illustrations/src"),
            "@douyinfe/semi-animation": path.join(packagesDir, "semi-animation"),
            "@douyinfe/semi-animation-react": path.join(packagesDir, "semi-animation-react"),
            "@douyinfe/semi-animation-styled": path.join(packagesDir, "semi-animation-styled"),
            "@douyinfe/semi-json-viewer-core": path.join(packagesDir, "semi-json-viewer-core/src"),
            "@douyinfe/semi-theme-default": path.join(packagesDir, "semi-theme-default"),
            "react/jsx-runtime": path.join(require.resolve("react"), "..", "jsx-runtime.js"),
        },
    },
    
    devServer: {
        port: 3000,
        hot: true,
        open: false,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
    },
};
