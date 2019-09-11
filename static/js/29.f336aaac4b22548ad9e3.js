webpackJsonp([29],{

/***/ "Jr8N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/UserManagement.vue
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
/* harmony default export */ var UserManagement = ({
  name: 'UserManagement',
  data: function data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      sss: 0,
      number1: '奇数',
      number2: '偶数'
    };
  },
  mounted: function mounted() {
    this.drawLine();
  },

  methods: {
    number: function number(id) {
      if (id % 2 === 0) {
        return this.number2;
      } else {
        return this.number1;
      }
    },
    drawLine: function drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('myChart'));
      // 绘制图表
      myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-35000c60","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/UserManagement.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{style:({width: '300px', height: '300px'}),attrs:{"id":"myChart"}}),_vm._v(" "),_c('div',{class:{test:_vm.number(4)===_vm.number1}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_UserManagement = (esExports);
// CONCATENATED MODULE: ./src/components/UserManagement.vue
function injectStyle (ssrContext) {
  __webpack_require__("g3zE")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-35000c60"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  UserManagement,
  components_UserManagement,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_UserManagement = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "g3zE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});