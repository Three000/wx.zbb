'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('./../../../npm/babel-runtime/core-js/object/get-prototype-of.js');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('./../../../npm/babel-runtime/helpers/classCallCheck.js');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('./../../../npm/babel-runtime/helpers/possibleConstructorReturn.js');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('./../../../npm/babel-runtime/helpers/inherits.js');

var _inherits3 = _interopRequireDefault(_inherits2);

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _counter = require('./../../../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _picker = require('./../../../components/picker.js');

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentDate = new Date();

var Account = function (_wepy$page) {
    (0, _inherits3.default)(Account, _wepy$page);

    function Account() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Account);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Account.__proto__ || (0, _getPrototypeOf2.default)(Account)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            "navigationBarTitleText": '记账'
        }, _this.data = {
            year: currentDate.getFullYear(),
            month: currentDate.getMonth() + 1 < 10 ? '0' + (currentDate.getMonth() + 1) : currentDate.getMonth() + 1,
            day: null
        }, _this.components = {
            counter: _counter2.default,
            picker: _picker2.default
        }, _this.methods = {
            showPicker: function showPicker() {
                _this.$invoke('picker', 'show');
            }
        }, _this.events = {
            'picker-emit': function pickerEmit($events) {
                for (var _len2 = arguments.length, items = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    items[_key2 - 1] = arguments[_key2];
                }

                console.log($events + '-' + $events.source.year + '-' + $events.source.month + '-' + $events.source.day + '=====' + items);
                _this.year = items[0];
                _this.month = items[1];
                _this.day = items[2];
                _this.$apply();
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Account;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Account));
