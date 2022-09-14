//Node.js
const path = require('path');

//constant
const OUTPUT_PATH = resolvePath('dist');

const ENTRY_NAMES = [
    'index'
]

//Plugins
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const AutoDllPlugin = require('autodll-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

//Loader
const styleLoader = {
    loader: 'style-loader',
    options: {
        singleton: true
    }
}


module.exports = DEV_MODE => {
    return {
        entry: resolveEntryOption(),
        output: {
            path: OUTPUT_PATH,
            publicPath: ''
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        DEV_MODE ? styleLoader : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: false,
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: [
                                    require('autoprefixer')()
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        DEV_MODE ? styleLoader : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: false,
                                importLoaders: 2
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: [
                                    require('autoprefixer')()
                                ]
                            }
                        },
                        'less-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'assets'
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'assets'
                            }
                        }
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        'cache-loader',
                        {
                            loader: 'babel-loader',
                            options: {
                                cacheDirectory: true
                            }
                        }
                    ]
                },
                {
                    test: /\.vue$/,
                    use: [
                        {
                            loader: 'vue-loader',
                            options: {
                                exposeFilename: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            ...resolveHtmlWebpackPlugins(),
            new VueLoaderPlugin(),
            new webpack.DefinePlugin({
                DEV_MODE: JSON.stringify(DEV_MODE)
            }),
            new AutoDllPlugin({
                inject: true,
                debug: true,
                filename: '[name].[hash].dll.js',
                entry: {
                    vendor: [
                        '@babel/polyfill',
                        'animejs',
                        'autoprefixer',
                        'vue',
                        'vue-web-storage',
                        'vuex',
                        'vue-router'
                    ]
                }
            }),
            new CopyPlugin([
                { from: 'static', to: 'assets' }
            ])
        ],
        performance: {
            hints: false
        },
        resolve: {
            extensions: ['.js'],
            alias: {
                'vue': 'vue/dist/vue.esm.js',
                '@': resolvePath('src'),
                '@c': resolvePath('src/components'),
                '@p': resolvePath('src/pages'),
                '@img': resolvePath('src/img'),
                '@lib': resolvePath('src/lib')
            }
        }
    }
}

// tools
function resolvePath(url) {
    return path.resolve(__dirname, url);
}

function resolveEntryOption() {
    let option = {};

    ENTRY_NAMES.forEach(item => {
        option[item] = `./src/pages/${item}/${item}.js`;
    })

    return option
}

function resolveHtmlWebpackPlugins() {
    let plugins = ENTRY_NAMES.map(item => {
        // ENTRY_NAME name is index, it represents the home page
        let filename = item == 'index' ? 'index.html' : `${item}/index.html`;

        return new HtmlWebpackPlugin({
            template: `src/pages/${item}/${item}.html`,
            filename,
            inject: true
        })
    })

    return plugins
}