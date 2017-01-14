'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('./../npm/babel-runtime/helpers/defineProperty.js');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('./../npm/babel-runtime/core-js/object/get-prototype-of.js');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('./../npm/babel-runtime/helpers/classCallCheck.js');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('./../npm/babel-runtime/helpers/possibleConstructorReturn.js');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('./../npm/babel-runtime/helpers/inherits.js');

var _inherits3 = _interopRequireDefault(_inherits2);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var date = new Date();
var years = [];
var months = [];
var days = [];

for (var i = 1990; i <= date.getFullYear(); i++) {
    years.push(i);
}

for (var _i = 1; _i <= 12; _i++) {
    months.push(_i);
}

for (var _i2 = 1; _i2 <= 31; _i2++) {
    days.push(_i2);
}

var Picker = function (_wepy$component) {
    (0, _inherits3.default)(Picker, _wepy$component);

    function Picker() {
        var _ref, _this$data;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Picker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Picker.__proto__ || (0, _getPrototypeOf2.default)(Picker)).call.apply(_ref, [this].concat(args))), _this), _this.data = (_this$data = {
            years: years,
            year: date.getFullYear(),
            months: months,
            month: 2,
            days: days,
            day: 2
        }, (0, _defineProperty3.default)(_this$data, 'year', date.getFullYear()), (0, _defineProperty3.default)(_this$data, 'value', [9999, 1, 1]), (0, _defineProperty3.default)(_this$data, 'isShow', true), _this$data), _this.events = {
            //
        }, _this.methods = {
            bindChange: function bindChange(e) {
                var val = e.detail.value;
                this.year = this.data.years[val[0]];
                this.month = this.data.months[val[1]];
                this.day = this.data.days[val[2]];
                this.$emit('picker-emit', this.year, this.month, this.day);
            },
            show: function show() {
                this.isShow = !this.isShow;
            },
            confirm: function confirm() {
                var val = e.detail.value;
                this.year = this.data.years[val[0]];
                this.month = this.data.months[val[1]];
                this.day = this.data.days[val[2]];
                this.$emit('picker-emit', this.year, this.month, this.day);
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Picker;
}(_wepy2.default.component);

exports.default = Picker;