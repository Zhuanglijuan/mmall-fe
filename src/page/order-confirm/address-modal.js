'use strict';
var _mm = require('util/mm.js');
var _cities = require('util/cities/index');
var _address = require('service/address-service.js');
var templateAddressModal = require('./address-modal.string');

var addressModal = {
    show: function (option) {
        // option的绑定
        this.option = option;
        // 收件人添加时，this.option.data没有值，加载省份信息时取值时会报错
        this.option.data = option.data || {};
        this.$modalWrap = $('.modal-wrap');
        // 渲染页面
        this.loadModal();
        // 绑定事件
        this.bindEvent();
    },
    bindEvent: function () {
        var _this = this;
        // 省份和城市的二级联动
        this.$modalWrap.find('#receiver-province').change(function () {
            var selectedProvice = $(this).val();
            _this.loadCities(selectedProvice);
        });
        // 提交收货地址
        this.$modalWrap.find('.address-btn').click(function () {
            var receiverInfo = _this.getReceiverInfo(),
                isUpdate = _this.option.isUpdate;
            // 使用新地址且验证通过
            if (!isUpdate && receiverInfo.status) {
                _address.save(receiverInfo.data, function (res) {
                    _mm.successTips('地址添加成功!');
                    _this.hide();
                    typeof _this.option.onSuccess() === "function" && _this.option.onSuccess(res);
                }, function (errMsg) {
                    _mm.errorTips(errMsg);
                });
            }
            // 更新收件人，并且验证通过
            else if (isUpdate && receiverInfo.status) {
                _address.update(receiverInfo.data, function (res) {
                    _mm.successTips('地址修改成功!');
                    _this.hide();
                    typeof _this.option.onSuccess() === "function" && _this.option.onSuccess(res);
                }, function (errMsg) {
                    _mm.errorTips(errMsg);
                });
            }
            // 验证不通过
            else {
                _mm.errorTips(receiverInfo.errMsg || '好像哪里不对了~');
            }
        });
        // 保证点击modal内容区时,不关闭弹窗
        this.$modalWrap.find('.modal-container').click(function (e) {
            e.stopPropagation();
        });
        // 点击X，或者蒙版区域关闭弹窗
        this.$modalWrap.find('.close').click(function () {
            _this.hide();
        });
    },
    loadModal: function () {
        var addressModalHtml = _mm.renderHtml(templateAddressModal, {
            isUpdate: this.option.isUpdate,
            data: this.option.data
        });
        this.$modalWrap.html(addressModalHtml);
        // 加载省份
        this.loadProvice();
    },
    // 加载省份信息
    loadProvice: function () {
        var provices = _cities.getProvinces() || [],
            $proviceSelect = this.$modalWrap.find('#receiver-province');
        $proviceSelect.html(this.getSelectOption(provices));
        // 如果更新地址并且有省份信息，做省份回填
        if (this.option.isUpdate && this.option.data.receiverProvince) {
            $proviceSelect.val(this.option.data.receiverProvince);
            // 加载城市
            this.loadCities(this.option.data.receiverProvince);
        }
    },
    // 加载城市信息
    loadCities: function (proviceName) {
        var cities = _cities.getCities(proviceName) || [],
            $citySelect = this.$modalWrap.find('#receiver-city');
        $citySelect.html(this.getSelectOption(cities));
        // 如果更新地址并且有城市信息，做城市回填
        if (this.option.isUpdate && this.option.data.receiverCity) {
            $citySelect.val(this.option.data.receiverCity);
        }
    },
    // 获取表单里收件人信息，并做表单验证
    getReceiverInfo: function () {
        var receiverInfo = {},
            result = {
                status: false
            };
        receiverInfo.receiverName = $.trim(this.$modalWrap.find('#receiver-name').val());
        receiverInfo.receiverProvince = this.$modalWrap.find('#receiver-province').val();
        receiverInfo.receiverCity = this.$modalWrap.find('#receiver-city').val();
        receiverInfo.receiverAddress = $.trim(this.$modalWrap.find('#receiver-address').val());
        receiverInfo.receiverMobile = $.trim(this.$modalWrap.find('#receiver-phone').val());
        receiverInfo.receiverZip = $.trim(this.$modalWrap.find('#receiver-zip').val());

        if (this.option.isUpdate) {
            receiverInfo.id = this.$modalWrap.find('#receiver-id').val();
        }

        // 表单验证
        if (!receiverInfo.receiverName) {
            result.errMsg = '请输入收件人姓名';
        } else if (!receiverInfo.receiverProvince) {
            result.errMsg = '请选择收件人所在省份';
        } else if (!receiverInfo.receiverCity) {
            result.errMsg = '请选择收件人所在城市';
        } else if (!receiverInfo.receiverAddress) {
            result.errMsg = '请输入收件人详细地址';
        } else if (!receiverInfo.receiverMobile) {
            result.errMsg = '请输入收件人手机号';
        } else {
            // 所有验证通过
            result.status = true;
            result.data = receiverInfo;
        }
        return result;
    },
    // 获取select框的选项，输入：array，输出：html
    getSelectOption: function (optionArray) {
        var html = '<option value="">请选择</option>';
        for (var i = 0, length = optionArray.length; i < length; i++) {
            html += '<option value="' + optionArray[i] + '">' + optionArray[i] + '</option>';
        }
        return html;
    },
    // 关闭弹窗
    hide: function () {
        this.$modalWrap.empty();
    }
};
module.exports = addressModal;
