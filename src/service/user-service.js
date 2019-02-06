/*
* @Author: Rosen
* @Date:   2017-05-17 17:04:32
* @Last Modified by:   Rosen
* @Last Modified time: 2017-05-24 17:11:19
*/

'use strict';

var _mm = require('util/mm.js');

var _user = {
    // 检查登录状态
    checkLogin: function (resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/user/get_user_info.do'),
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    // 登出
    logout: function (resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/user/logout.do'),
            method: 'POST',
            success: resolve,
            error: reject
        });
    }
};
module.exports = _user;