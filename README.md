#环境搭建
    1. 创建文件夹
    2.npm init
    3.安装webpack依赖，npm install webpack webpack-dev-server  --save-dev //在开发的依赖项中：devDependencies
    4.安装react依赖： npm i react-dom -save  //在dependencies 中
    5.注意 --save 和 -save  的区别
    6.性能测试工具  npm i react-addons-perf --save
    7.PureRenderMixin 优化 npm i react-addons-pure-render-mixin --save
        主要是修改shouldComponentUpdate,不用每次都更新
    8.Immutable.js 处理数据。实现了js 中不可变数据
    9.route安装 npm install react-router --save
    10.页面静态资源懒加载 huge-apps , 项目大在用。
    11.数据状态管理插件 Redux ，安装: npm i redux --save  npm i react-redux --save
    12.网络请求数据 fetch。安装： npm i whatwg-fetch --save ,
                兼容老版本浏览器：npm i es6-promise --save.
    13.数据模拟 Mock，使用 koa 安装：npm i koa koa-body koa-router --save-dev
