
const path = require("path");

const isProduction = process.env.NODE_ENV === 'production';// 是否为生产环境
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    outputDir: 'dist',// 打包输出文件目录
    lintOnSave: false, //eslint-loader 是否开启eslint
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap:false,//改为false。最终打包的文件中会出现一些map文件，map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
    devServer:{
        open:true,//自动开启浏览器
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null, // 设置代理
    },
    // 第三方插件配置
    pluginOptions: {
     // ...
    },
}