[TOC]

# mmall-fe

## 一、项目初始化步骤

1. 安装nodejs环境,推荐使用v4.4.7
       下载地址 : https://nodejs.org/download/release/v4.4.7/
2. 全局安装webpack v^1.15.0
       命令: (sudo) npm install -g webpack@^1.15.0
3. 全局安装webpack-dev-server v^1.16.5
       命令: (sudo) npm install -g webpack-dev-server@^1.16.5
4. 在项目根目录执行npm初始化
       命令: npm install (--registry=https://registry.npm.taobao.org)
5. 启动项目
       开发模式: npm run dev (windows系统上为npm run dev_win)
       生产模式: npm run dist (windows系统上为npm run dist_win)
6. 开发模式下预览项目
       访问：http://localhost:8088/dist/view/index.html

## 二、webpack介绍

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
- 安装：`npm install webpack-dev-server --save-dev`
- 配置：`webpack-dev-server/client?http://localhost:8080`
- 使用：`webpack-dev-server --port 8088 --inline`

## 三、页面布局

![](https://github.com/Zhuanglijuan/mmall-fe/blob/mmall_v1.0/img/QQ图片20190204192244.png)

![QQ图片20190204192504](https://github.com/Zhuanglijuan/mmall-fe/blob/mmall_v1.0/img/QQ图片20190204192504.png)

![QQ图片20190204193223](https://github.com/Zhuanglijuan/mmall-fe/blob/mmall_v1.0/img/QQ图片20190204193223.png)

