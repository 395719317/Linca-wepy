'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _discover = require('./../components/discover.js');

var _discover2 = _interopRequireDefault(_discover);

var _bomb_screen = require('./../components/bomb_screen.js');

var _bomb_screen2 = _interopRequireDefault(_bomb_screen);

var _bottomLoadMore = require('./../components/common/bottomLoadMore.js');

var _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore);

var _placeholder = require('./../components/common/placeholder.js');

var _placeholder2 = _interopRequireDefault(_placeholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '演示商城'
    }, _this.$repeat = {}, _this.$props = { "discover": { "xmlns:v-bind": "", "v-bind:list.sync": "discoverList" }, "bottomLoadMore": { "v-bind:show.sync": "showLoading", "message": "正在加载" }, "placeholder": { "v-bind:show.sync": "is_empty", "message": "暂无发现数据" }, "bombscreen": { "v-bind:types.sync": "tps", "v-bind:show.sync": "is_show_alert", "xmlns:v-on": "" } }, _this.$events = { "bombscreen": { "v-on:close": "closeAlert", "v-on:callback": "alertCallback" } }, _this.components = {
      discover: _discover2.default,
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default,
      bombscreen: _bomb_screen2.default
    }, _this.data = {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      indicatorActiveColor: "#fff",
      discoverList: [],
      //是否有数据
      is_empty: false,
      //当前页面
      currentPage: 1,
      //总页数
      page_total: 0,
      //是否显示 底部loading
      showLoading: true,
      //防止重复加载
      preventRepeatReuqest: false,
      //广告列表
      adList: [],
      tps: 0,
      is_show_alert: true
    }, _this.computed = {}, _this.methods = {
      goToAdvert: function goToAdvert(url) {
        console.log("url===" + url);
        if (url.length == 0) {
          return;
        }
        _wepy2.default.navigateTo({
          url: url
        });
      },

      onShareAppMessage: function onShareAppMessage(res) {
        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target);
        }
        return {
          title: '素洁服装厂',
          path: '/pages/home',
          success: function success(res) {
            // 转发成功
          },
          fail: function fail(res) {
            // 转发失败
          }
        };
      },
      alertCallback: function alertCallback() {
        _tip2.default.alert('跳转');
      },
      closeAlert: function closeAlert() {
        // tip.alert('关闭');
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'getDiscoverList',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(currentPage, size) {
        var that, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                _context.next = 3;
                return _api2.default.getHomeDisvocerList({
                  query: {
                    page: currentPage || 1,
                    size: size || 10
                  }
                });

              case 3:
                json = _context.sent;

                if (json.data.code == 0) {
                  that.discoverList = [].concat(_toConsumableArray(that.discoverList), _toConsumableArray(json.data.list));

                  if (json.data.page_total) {
                    // 后台的数据不再返回page_total
                    that.page_total = json.data.page_total;
                  };
                  if (json.data.page_total == 0) {
                    //暂无数据
                    that.is_empty = true;
                  }
                  that.$apply();
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getDiscoverList(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return getDiscoverList;
    }()
  }, {
    key: 'getAdList',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var json;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api2.default.getAdList({
                  query: {}
                });

              case 2:
                json = _context2.sent;

                if (json.data.code == 0) {
                  this.adList = json.data.list;
                  this.$apply();
                } else {}

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAdList() {
        return _ref3.apply(this, arguments);
      }

      return getAdList;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      this.discoverList = [];
      that.getDiscoverList();
      this.getAdList();
    }
  }, {
    key: 'onReachBottom',

    //加载更多
    value: function onReachBottom() {
      var that = this;
      that.showLoading = true;
      console.log(that.page_total + "===" + that.currentPage);
      //判断总页数是否大于翻页数
      if (that.page_total > that.currentPage) {
        //防止重复加载
        if (that.preventRepeatReuqest) {
          return true;
        }
        that.preventRepeatReuqest = true;
        that.currentPage++;
        that.getDiscoverList(that.currentPage);
        that.preventRepeatReuqest = false;
      } else {
        that.showLoading = false;
      }
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJkaXNjb3ZlciIsIkRpc2NvdmVyIiwiYm90dG9tTG9hZE1vcmUiLCJCb3R0b21Mb2FkTW9yZSIsInBsYWNlaG9sZGVyIiwiUGxhY2Vob2xkZXIiLCJib21ic2NyZWVuIiwiQm9tYnNjcmVlbiIsImRhdGEiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwiaW5kaWNhdG9yQWN0aXZlQ29sb3IiLCJkaXNjb3Zlckxpc3QiLCJpc19lbXB0eSIsImN1cnJlbnRQYWdlIiwicGFnZV90b3RhbCIsInNob3dMb2FkaW5nIiwicHJldmVudFJlcGVhdFJldXFlc3QiLCJhZExpc3QiLCJ0cHMiLCJpc19zaG93X2FsZXJ0IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZ29Ub0FkdmVydCIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicmVzIiwiZnJvbSIsInRhcmdldCIsInRpdGxlIiwicGF0aCIsInN1Y2Nlc3MiLCJmYWlsIiwiYWxlcnRDYWxsYmFjayIsInRpcCIsImFsZXJ0IiwiY2xvc2VBbGVydCIsImV2ZW50cyIsInNpemUiLCJ0aGF0IiwiYXBpIiwiZ2V0SG9tZURpc3ZvY2VyTGlzdCIsInF1ZXJ5IiwicGFnZSIsImpzb24iLCJjb2RlIiwibGlzdCIsIiRhcHBseSIsImVycm9yIiwibXNnIiwiZ2V0QWRMaXN0IiwiZ2V0RGlzY292ZXJMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxN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Ozs7RUEvSCtCWSxlQUFLb0IsSTs7a0JBQWxCekQsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBhcGkgZnJvbSAnQC9hcGkvYXBpJztcbmltcG9ydCB0aXAgZnJvbSAnQC91dGlscy90aXAnXG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnQC9jb21wb25lbnRzL2Rpc2NvdmVyJ1xuaW1wb3J0IEJvbWJzY3JlZW4gZnJvbSAnQC9jb21wb25lbnRzL2JvbWJfc2NyZWVuJ1xuaW1wb3J0IEJvdHRvbUxvYWRNb3JlIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9ib3R0b21Mb2FkTW9yZVwiXG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL3BsYWNlaG9sZGVyXCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a8lOekuuWVhuWfjicsXG4gIH1cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImRpc2NvdmVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImRpc2NvdmVyTGlzdFwifSxcImJvdHRvbUxvYWRNb3JlXCI6e1widi1iaW5kOnNob3cuc3luY1wiOlwic2hvd0xvYWRpbmdcIixcIm1lc3NhZ2VcIjpcIuato+WcqOWKoOi9vVwifSxcInBsYWNlaG9sZGVyXCI6e1widi1iaW5kOnNob3cuc3luY1wiOlwiaXNfZW1wdHlcIixcIm1lc3NhZ2VcIjpcIuaaguaXoOWPkeeOsOaVsOaNrlwifSxcImJvbWJzY3JlZW5cIjp7XCJ2LWJpbmQ6dHlwZXMuc3luY1wiOlwidHBzXCIsXCJ2LWJpbmQ6c2hvdy5zeW5jXCI6XCJpc19zaG93X2FsZXJ0XCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wiYm9tYnNjcmVlblwiOntcInYtb246Y2xvc2VcIjpcImNsb3NlQWxlcnRcIixcInYtb246Y2FsbGJhY2tcIjpcImFsZXJ0Q2FsbGJhY2tcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBkaXNjb3ZlcjogRGlzY292ZXIsXG4gICAgYm90dG9tTG9hZE1vcmU6IEJvdHRvbUxvYWRNb3JlLFxuICAgIHBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlcixcbiAgICBib21ic2NyZWVuOiBCb21ic2NyZWVuXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiAzMDAwLFxuICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgIGluZGljYXRvckFjdGl2ZUNvbG9yOiBcIiNmZmZcIixcbiAgICBkaXNjb3Zlckxpc3Q6IFtdLFxuICAgIC8v5piv5ZCm5pyJ5pWw5o2uXG4gICAgaXNfZW1wdHk6IGZhbHNlLFxuICAgIC8v5b2T5YmN6aG16Z2iXG4gICAgY3VycmVudFBhZ2U6IDEsXG4gICAgLy/mgLvpobXmlbBcbiAgICBwYWdlX3RvdGFsOiAwLFxuICAgIC8v5piv5ZCm5pi+56S6IOW6lemDqGxvYWRpbmdcbiAgICBzaG93TG9hZGluZzogdHJ1ZSxcbiAgICAvL+mYsuatoumHjeWkjeWKoOi9vVxuICAgIHByZXZlbnRSZXBlYXRSZXVxZXN0OiBmYWxzZSxcbiAgICAvL+W5v+WRiuWIl+ihqFxuICAgIGFkTGlzdDogW10sXG4gICAgdHBzOiAwLFxuICAgIGlzX3Nob3dfYWxlcnQ6IHRydWVcbiAgfVxuICBhc3luYyBnZXREaXNjb3Zlckxpc3QoY3VycmVudFBhZ2UsIHNpemUpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5nZXRIb21lRGlzdm9jZXJMaXN0KHtcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIHBhZ2U6IGN1cnJlbnRQYWdlIHx8IDEsXG4gICAgICAgIHNpemU6IHNpemUgfHwgMTBcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xuICAgICAgdGhhdC5kaXNjb3Zlckxpc3QgPSBbLi4udGhhdC5kaXNjb3Zlckxpc3QsIC4uLmpzb24uZGF0YS5saXN0XTtcblxuICAgICAgaWYgKGpzb24uZGF0YS5wYWdlX3RvdGFsKSB7IC8vIOWQjuWPsOeahOaVsOaNruS4jeWGjei/lOWbnnBhZ2VfdG90YWxcbiAgICAgIHRoYXQucGFnZV90b3RhbCA9IGpzb24uZGF0YS5wYWdlX3RvdGFsXG4gICAgICB9O1xuICAgICAgaWYgKGpzb24uZGF0YS5wYWdlX3RvdGFsID09IDApIHtcbiAgICAgICAgLy/mmoLml6DmlbDmja5cbiAgICAgICAgdGhhdC5pc19lbXB0eSA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGF0LiRhcHBseSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZyk7XG4gICAgfVxuICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuICBhc3luYyBnZXRBZExpc3QoKSB7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5nZXRBZExpc3Qoe1xuICAgICAgcXVlcnk6IHt9XG4gICAgfSk7XG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgIHRoaXMuYWRMaXN0ID0ganNvbi5kYXRhLmxpc3Q7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0gZWxzZSB7fVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhpcy5kaXNjb3Zlckxpc3QgPSBbXTtcbiAgICB0aGF0LmdldERpc2NvdmVyTGlzdCgpO1xuICAgIHRoaXMuZ2V0QWRMaXN0KCk7XG4gIH1cbiAgY29tcHV0ZWQgPSB7fVxuICBtZXRob2RzID0ge1xuICAgIGdvVG9BZHZlcnQodXJsKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInVybD09PVwiICsgdXJsKTtcbiAgICAgIGlmICh1cmwubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiB1cmxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24ocmVzKSB7XG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICfntKDmtIHmnI3oo4XljoInLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL2hvbWUnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAvLyDovazlj5HmiJDlip9cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFsZXJ0Q2FsbGJhY2soKSB7XG4gICAgICB0aXAuYWxlcnQoJ+i3s+i9rCcpO1xuICAgIH0sXG4gICAgY2xvc2VBbGVydCgpIHtcbiAgICAgLy8gdGlwLmFsZXJ0KCflhbPpl60nKTtcbiAgICB9XG4gIH1cbiAgZXZlbnRzID0ge31cbiAgLy/liqDovb3mm7TlpJpcbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5zaG93TG9hZGluZyA9IHRydWU7XG4gICAgY29uc29sZS5sb2codGhhdC5wYWdlX3RvdGFsICsgXCI9PT1cIiArIHRoYXQuY3VycmVudFBhZ2UpO1xuICAgIC8v5Yik5pat5oC76aG15pWw5piv5ZCm5aSn5LqO57+76aG15pWwXG4gICAgaWYgKCh0aGF0LnBhZ2VfdG90YWwpID4gdGhhdC5jdXJyZW50UGFnZSkge1xuICAgICAgLy/pmLLmraLph43lpI3liqDovb1cbiAgICAgIGlmICh0aGF0LnByZXZlbnRSZXBlYXRSZXVxZXN0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgdGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCA9IHRydWU7XG4gICAgICB0aGF0LmN1cnJlbnRQYWdlKys7XG4gICAgICB0aGF0LmdldERpc2NvdmVyTGlzdCh0aGF0LmN1cnJlbnRQYWdlKTtcbiAgICAgIHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cblxuIl19