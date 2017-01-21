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

var _wepyComToast = require('./../../../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

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
            "navigationBarTitleText": '记记'
        }, _this.components = {
            toast: _wepyComToast2.default
        }, _this.data = {
            travelName: '',
            joins: '',
            mark: '',
            primarySize: 'default',
            loading: false,
            plain: false,
            disabled: false
        }, _this.methods = {
            travelNameInput: function travelNameInput(e) {
                _this.travelName = e.detail.value;
                _this.$apply();
            },
            joinsInput: function joinsInput(e) {
                this.joins = e.detail.value;
                this.$apply();
            },
            createLocal: function createLocal() {
                var localData = this.$parent.getLocalData() || [];
                console.log(localData);
                if (!this.travelName) {
                    console.log(1);
                    this.$invoke('toast', 'show', {
                        title: '账单名称必填'
                    });
                } else if (!this.joins) {
                    this.$invoke('toast', 'show', {
                        title: '参与人必填'
                    });
                } else {
                    var addData = {
                        id: localData.length + 1,
                        travelName: this.travelName,
                        users: this.joins.split(','),
                        mark: this.mark,
                        content: {}
                    };
                    localData.push(addData);
                    this.$parent.setLocalData(localData);
                }
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Account;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Account));
