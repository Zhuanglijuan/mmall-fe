'use strict';
require('./index.css');
var _mm = require('util/mm.js');
// 通用页面头部
var index = {
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        var keyword = _mm.getUrlParam('keyword');
        // keyword存在，则回填输入框
        if (keyword) {
            $('#search-input').val(keyword);
        }
    },
    bindEvent: function () {
        var _this = this;
        // 点击搜索按钮以后，做搜索提交
        $('#search-btn').click(function () {
            _this.searchSubmit();
        });
        // 输入回车后，做搜索提交
        $('#search-input').keyup(function (e) {
            if (e.keyCode === 13) {
                // 13是回车键的keyCode
                _this.searchSubmit();
            }
        });
    },
    // 搜索的提交
    searchSubmit: function () {
        var keyword = $.trim($('#search-input').val());
        if (keyword) {
            // 如果提交的时候，有keyword正常跳转到list页
            window.location.href = './list.html?keyword=' + keyword;
        } else {
            // 如果keyword为空直接返回首页
            _mm.goHome();
        }
    }
};

index.init();