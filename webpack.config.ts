import * as path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import 'webpack-dev-server';

const PORT = process.env.PORT || 4000;
const MODE = process.env.mode || 'development';

const config = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    mode: MODE,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html')
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: PORT,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            /*{
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [autoprefixer()]
                            }
                        }
                    },
                ]
            },*/
        ]
    }
}

export default config;