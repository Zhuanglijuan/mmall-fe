[TOC]

# mmall-fe

## webpack介绍

### webpack.config.js

- entry：js的入口文件，放源文件中js的路径
- externals：外部依赖的声明，一些外部的内容可以用它来转换成common.js可引用的模块
- output：目标文件
- resolve：配置别名
- module：各种文件，各种loader
- plugins：插件

### webpack loaders

- html：html-webpack-plugin/html-loader
- js : babel-loader + babel-preset-es2015
- css : style-loader + css-loader
- image + font : url-loader

### webpack常用命令

- webpack
- webpack -p
- webpack --watch
- webpack --config webpack.config.js

### webpack-dev-server

- 作用：前端开发服务器
- 特色：可以在文件改变时，自动刷新浏览器
- 安装：npm install webpack-dev-server --save-dev
- 配置：`webpack-dev-server/client?http://localhost:8080`
- 使用：`webpack-dev-server --port 8088 --inline`

## 页面布局

![](https://github.com/Zhuanglijuan/mmall-fe/blob/mmall_v1.0/img/QQ图片20190204192244.png)

![QQ图片20190204192504](https://github.com/Zhuanglijuan/mmall-fe/blob/mmall_v1.0/img/QQ图片20190204192504.png)

![QQ图片20190204193223](https://github.com/Zhuanglijuan/mmall-fe/blob/mmall_v1.0/img/QQ图片20190204193223.png)

