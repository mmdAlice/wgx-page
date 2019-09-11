webpackJsonp([14],{

/***/ "/GgQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lO7g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/Home.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// 引入基本模板
var echarts = __webpack_require__("3qyi");
// 引入柱状图组件
__webpack_require__("2cCK");
// 引入提示框和title组件
__webpack_require__("WVNF");
__webpack_require__("rxju");
/* harmony default export */ var Home = ({
  name: 'Home',
  data: function data() {
    return {
      msg: '',
      register: 1, //注册用户
      scanUser: 1, //扫码支付用户
      orders: 1, //订单额
      line_ranking: 1, //线路排行
      signup_user: {}, //今日注册用户数
      bus_take_number: {}, //乘车人次
      order_total_amount: {}, //订单总额
      recharge_total_amount: {} //充值总额

    };
  },

  methods: {
    //注册人数
    registerUser: function registerUser(id) {
      this.register = id;
      this.users(); //日 周 月注册用户图
    },
    //扫码支付用户人数
    sweepCode: function sweepCode(id) {
      this.scanUser = id;
      this.payUser(); //扫码支付用户数
    },
    //订单额
    orderAmount: function orderAmount(id) {
      this.orders = id;
      this.orderNum(); //订单额
    },
    //线路统计
    lineStatistics: function lineStatistics(id) {
      this.line_ranking = id;
      this.lineRanking(); //线路排行
    },
    //日 周 月注册用户图
    users: function users(data) {
      var name = [];
      var date = [];
      for (var i = 0; i < data.length; i++) {
        name.push(data[i][0]);
        date.push(data[i][1]);
      }
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('users'));
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: name
        },
        yAxis: {
          type: 'value',
          splitLine: { show: false } //去除网格线
        },
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: "50px",
          right: "5px",
          backgroundColor: '#fff',
          width: "auto" //图例宽度
        },
        series: [{
          data: date,
          type: 'line',
          smooth: true
        }]
      });
    },

    //扫码支付用户数
    payUser: function payUser(data) {
      var name = [];
      var date = [];
      for (var i = 0; i < data.length; i++) {
        name.push(data[i][0]);
        date.push(data[i][1]);
      }
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('payUser'));
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: name
        },
        yAxis: {
          type: 'value',
          splitLine: { show: false } //去除网格线
        },
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: "50px",
          right: "5px",
          backgroundColor: '#fff',
          width: "auto" //图例宽度
        },
        series: [{
          data: date,
          type: 'line',
          smooth: true
        }]
      });
    },

    //订单额
    orderNum: function orderNum(data) {
      var name = [];
      var date = [];
      for (var i = 0; i < data.length; i++) {
        name.push(data[i][0]);
        date.push(data[i][1]);
      }
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('orderNum'));
      myChart.setOption({
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '50px',
          right: "5px",
          bottom: '30px',
          backgroundColor: '#fff',
          width: "auto" //图例宽度
        },
        xAxis: [{
          type: 'category',
          data: name,
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          splitLine: { show: false } //去除网格线
        }],
        series: [{
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: date
        }]
      });
    },

    //线路排行
    lineRanking: function lineRanking(data) {
      var name = [];
      var date = [];
      for (var i = 0; i < data.length; i++) {
        name.push(data[i][0]);
        date.push(data[i][1]);
      }
      //基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('lineRanking'));
      myChart.setOption({
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '50px',
          right: "5px",
          bottom: '30px',
          backgroundColor: '#fff',
          width: "auto" //图例宽度
        },
        xAxis: [{
          type: 'category',
          data: name,
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          splitLine: { show: false } //去除网格线
        }],
        series: [{
          name: '线路排行',
          type: 'bar',
          barWidth: '60%',
          data: date
        }]
      });
    },

    //获取数据
    getList: function getList() {
      var _this = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/index/').then(function (res) {
        _this.signup_user = res.signup_user;
        _this.bus_take_number = res.bus_take_number;
        _this.order_total_amount = res.order_total_amount;
        _this.recharge_total_amount = res.recharge_total_amount;
        _this.users(res.signup_user_histogram); //日 周 月注册用户图
        _this.payUser(res.take_bus_histogram); //扫码支付用户数
        _this.orderNum(res.order_total_amount_histogram); //订单额
        _this.lineRanking(res.route_rank_histogram); //线路排行
      });
    }
  },
  mounted: function mounted() {
    this.getList();
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-79071d4e","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/Home.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"smallGraph"},[_c('div',{staticClass:"graph_text"},[_c('div',{staticClass:"text_mode"},[_c('div',{staticClass:"text_mode_2"},[_c('div',{staticClass:"first_div"},[_vm._v("今日注册用户/次")]),_vm._v(" "),_c('div',{staticClass:"second_div"},[_vm._v(_vm._s(_vm.signup_user.today))]),_vm._v(" "),_c('div',{staticClass:"third_div"},[_c('div',{staticClass:"third_div_text"},[_vm._v("昨日："+_vm._s(_vm.signup_user.yesterday_rate)+"%")])]),_vm._v(" "),_c('div',{staticClass:"four_div"}),_vm._v(" "),_c('div',{staticClass:"fiv_div"},[_vm._v("累计注册用户："+_vm._s(_vm.signup_user.total))])])]),_vm._v(" "),_c('div',{staticClass:"text_mode",staticStyle:{"margin-left":"1%"}},[_c('div',{staticClass:"text_mode_2"},[_c('div',{staticClass:"first_div"},[_vm._v("今日乘车人/次")]),_vm._v(" "),_c('div',{staticClass:"second_div"},[_vm._v(_vm._s(_vm.bus_take_number.today))]),_vm._v(" "),_c('div',{staticClass:"third_div"},[_c('div',{staticClass:"third_div_text"},[_vm._v("昨日："+_vm._s(_vm.bus_take_number.yesterday_rate)+"%")])]),_vm._v(" "),_c('div',{staticClass:"four_div"}),_vm._v(" "),_c('div',{staticClass:"fiv_div"},[_vm._v("累计乘车人/次："+_vm._s(_vm.bus_take_number.total))])])]),_vm._v(" "),_c('div',{staticClass:"text_mode",staticStyle:{"margin-left":"1%"}},[_c('div',{staticClass:"text_mode_2"},[_c('div',{staticClass:"first_div"},[_vm._v("今日订单总额(元)")]),_vm._v(" "),_c('div',{staticClass:"second_div"},[_vm._v(_vm._s(_vm.order_total_amount.today))]),_vm._v(" "),_c('div',{staticClass:"third_div"},[_c('div',{staticClass:"third_div_text"},[_vm._v("昨日："+_vm._s(_vm.order_total_amount.yesterday)+"%")])]),_vm._v(" "),_c('div',{staticClass:"four_div"}),_vm._v(" "),_c('div',{staticClass:"fiv_div"},[_vm._v("累计订单总额："+_vm._s(_vm.order_total_amount.total))])])]),_vm._v(" "),_c('div',{staticClass:"text_mode",staticStyle:{"margin-left":"1%"}},[_c('div',{staticClass:"text_mode_2"},[_c('div',{staticClass:"first_div"},[_vm._v("今日充值总额(元)")]),_vm._v(" "),_c('div',{staticClass:"second_div"},[_vm._v(_vm._s(_vm.recharge_total_amount.today))]),_vm._v(" "),_c('div',{staticClass:"third_div"},[_c('div',{staticClass:"third_div_text"},[_vm._v("昨日："+_vm._s(_vm.recharge_total_amount.yesterday)+"%")])]),_vm._v(" "),_c('div',{staticClass:"four_div"}),_vm._v(" "),_c('div',{staticClass:"fiv_div"},[_vm._v("累计充值总额："+_vm._s(_vm.recharge_total_amount.total))])])])])]),_vm._v(" "),_vm._m(1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"head_div_all"},[_c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("首页")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bigGraph"},[_c('div',{staticClass:"bigGraph_text"},[_c('div',{staticClass:"column"},[_c('div',{staticClass:"item_text",staticStyle:{"margin-left":"0"}},[_c('div',{staticClass:"line_text"},[_c('div',{staticClass:"headers"},[_c('div',{staticClass:"richarg"},[_vm._v("\n                注册用户\n              ")])]),_vm._v(" "),_c('div',{staticClass:"bottom_text",attrs:{"id":"users"}})])]),_vm._v(" "),_c('div',{staticClass:"item_text"},[_c('div',{staticClass:"line_text"},[_c('div',{staticClass:"headers"},[_c('div',{staticClass:"richarg"},[_vm._v("\n                扫码支付用户数\n              ")])]),_vm._v(" "),_c('div',{staticClass:"bottom_text",attrs:{"id":"payUser"}})])])]),_vm._v(" "),_c('div',{staticClass:"column"},[_c('div',{staticClass:"item_text",staticStyle:{"margin":"20px 0 0 0"}},[_c('div',{staticClass:"line_text"},[_c('div',{staticClass:"headers"},[_c('div',{staticClass:"richarg"},[_vm._v("\n                订单额\n              ")])]),_vm._v(" "),_c('div',{staticClass:"bottom_text",attrs:{"id":"orderNum"}})])]),_vm._v(" "),_c('div',{staticClass:"item_text",staticStyle:{"margin":"20px 0 0 1%"}},[_c('div',{staticClass:"line_text"},[_c('div',{staticClass:"headers"},[_c('div',{staticClass:"richarg"},[_vm._v("\n                线路排行\n              ")])]),_vm._v(" "),_c('div',{staticClass:"bottom_text",attrs:{"id":"lineRanking"}})])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Home = (esExports);
// CONCATENATED MODULE: ./src/components/Home.vue
function injectStyle (ssrContext) {
  __webpack_require__("/GgQ")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-79071d4e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Home,
  components_Home,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Home = __webpack_exports__["default"] = (Component.exports);


/***/ })

});