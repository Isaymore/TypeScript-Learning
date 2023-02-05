// 引入Nodejs的内置模块（或者叫包）path
const path = require('path');
// 引入webpack的HTML插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 引入webpack的清除插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log('__dirname', __dirname, typeof __dirname);
// const filepath = path.resolve(__dirname, 'dist');
// console.log('filepath', filepath, typeof filepath);
// webpack中的所有配置信息都要写在 module.export 里
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",
    // 指定打包文件的目录和文件名
    output: {
        // path: "./dist",
        path: path.resolve(__dirname, 'dist'), // __dirname 指向当前文件webpack.config.js的父目录
        filename: "bundle.js",
        // 关闭webpack的箭头函数，可选
        environment: {
            arrowFunction: false
        }
    },
    // webpack打包时，指定要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // 指定规则生效的文件
                test: /\.ts$/,
                // 指定webpack的loader加载器
                // use属性下加载器的执行顺序是倒序，先执行ts-loader编译生成JS文件后，再执行babel-loader，是使ES新语法兼容老版本浏览器
                use: [
                    // 使用babel
                    {
                        loader: "babel-loader", // 指定babel加载器
                        // 设置babel
                        options: {
                            // 预设
                            presets: [
                                [
                                    // 指定babel的预设环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 需要兼容的目标浏览器和版本
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        // 指定corejs的版本，使老版本浏览器支持新版ES语法
                                        // 比如IE11不支持Promise，corejs会引入自身的Promise
                                        "corejs": "3",
                                        // 指定corejs的加载方式为usage，表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader' // 指定ts加载器
                ],
                // 要排除的文件
                exclude: /node-modules/
            },
            // 处理less文件
            {
                // 指定规则生效的文件
                test: /\.less$/,
                // use属性下加载器的执行顺序是倒序
                use: [
                    'style-loader',  // 将css文件引入到项目中
                    'css-loader',   // 整合css和webpack，处理css代码
                    // 注意postcss的引入位置：在less-loader之后，在css-loader之前
                    // 因为less预处理后的css文件，需要通过postcss处理，兼容老版本浏览器
                    // 比如CSS3属性：display: flex;有些浏览器不兼容，需要加-webkit-、-ms-等前缀
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env', // 指定postcss的预设环境插件
                                        {
                                            browsers: 'last 2 version' // 浏览器最新2个版本
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'less-loader' // 整合less和webpack，处理less代码

                ]
            }
        ]
    },
    // 配置webpack插件
    plugins: [
        // 创建HTMLWebpackPlugin实例，用于自动生成dist/index.html;
        new HTMLWebpackPlugin({
            // title: '自定义的网页标题',
            template: './src/index.html' // 网页模板
        }),
        // 创建CleanWebpackPlugin实例，用于每次构建打包都会清除dist目录
        new CleanWebpackPlugin()
    ],
    // 指定允许解析的引用模块（因为模块 之间存在import和export）
    resolve: {
        extensions: [".ts", ".js"]
    }
}