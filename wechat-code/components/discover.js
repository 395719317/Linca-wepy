'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Discover = function (_wepy$component) {
    _inherits(Discover, _wepy$component);

    function Discover() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Discover);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Discover.__proto__ || Object.getPrototypeOf(Discover)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            list: []
        }, _this.data = {}, _this.computed = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Discover, [{
        key: 'onLoad',
        value: function onLoad() {
            var that = this;
            console.log(this.list);
        }
    }, {
        key: 'getList',
        value: function getList() {
            console.log("调用getList方法6666666");
        }
    }]);

    return Discover;
}(_wepy2.default.component);

exports.default = Discover;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NvdmVyLmpzIl0sIm5hbWVzIjpbIkRpc2NvdmVyIiwicHJvcHMiLCJsaXN0IiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsInRoYXQiLCJjb25zb2xlIiwibG9nIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7Ozs4TEFFakJDLEssR0FBUTtBQUNKQyxrQkFBTTtBQURGLFMsUUFJUkMsSSxHQUFPLEUsUUFVUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVLEU7Ozs7O2lDQVZEO0FBQ0wsZ0JBQUlDLE9BQU8sSUFBWDtBQUNBQyxvQkFBUUMsR0FBUixDQUFZLEtBQUtOLElBQWpCO0FBQ0g7OztrQ0FDUztBQUNOSyxvQkFBUUMsR0FBUixDQUFZLG9CQUFaO0FBQ0g7Ozs7RUFmaUNDLGVBQUtDLFM7O2tCQUF0QlYsUSIsImZpbGUiOiJkaXNjb3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgYXBpIGZyb20gJ0AvYXBpL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc2NvdmVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuXG4gICAgcHJvcHMgPSB7XG4gICAgICAgIGxpc3Q6IFtdXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcblxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0KVxuICAgIH1cbiAgICBnZXRMaXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuiwg+eUqGdldExpc3Tmlrnms5U2NjY2NjY2XCIpXG4gICAgfVxuICAgIGNvbXB1dGVkID0ge1xuXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7fVxuXG59XG4iXX0=