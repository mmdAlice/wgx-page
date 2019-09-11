webpackJsonp([10],{

/***/ "3EMU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dEEH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/ReceiveDetails.vue
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



/* harmony default export */ var ReceiveDetails = ({
  name: "ReceiveDetails",
  data: function data() {
    return {
      currentPage4: 1,
      count: 0,
      limit: 50,
      user: [],
      offset: 0,
      time: ''
    };
  },

  methods: {
    //每页多少条
    handleSizeChange: function handleSizeChange(val) {
      this.limit = val;
      this.getList(this.limit, this.offset);
    },

    //第几页
    handleCurrentChange: function handleCurrentChange(val) {
      this.offset = this.limit * val - this.limit;
      if (val === 1) {
        this.offset = 0;
      }
      this.getList(this.limit, this.offset);
    },

    numbers: function numbers(id) {
      if (id % 2 === 0) {
        return '偶数';
      } else {
        return '奇数';
      }
    },
    status: function status(_status) {
      if (_status === 1) {
        return '未发放';
      } else if (_status === 2) {
        return '已发放';
      } else if (_status === 3) {
        return '已使用';
      }
    },
    getList: function getList(limit, offset, id) {
      var _this = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/coupon/?offset=' + offset + '&limit=' + limit + '&type=' + id).then(function (res) {
        // for (let i=0;i<res.results.length;i++) {
        //   if (res.results[i].date_joined === null) {
        //     res.results[i].date_joined = '';
        //   } else {
        //     res.results[i].date_joined = this.$moment(res.results[i].date_joined).format("YYYY-MM-DD HH:mm:ss");
        //   }
        // }
        _this.count = res.count;
        _this.user = res.results;
      });
    }
  },
  mounted: function mounted() {
    var id = this.$route.query.id;
    this.getList(this.limit, this.offset, id);
    var myDate = new Date();
    this.time = Object(dates["a" /* formatDate */])(myDate, 'yyyy-MM-dd hh:mm:ss');
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-9aa74188","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/ReceiveDetails.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"table_all_div "},[_c('div',{staticClass:"listofall"},[_c('div',{staticClass:"list_date"},[_vm._m(1),_vm._v(" "),_c('p',[_c('span',{staticClass:"list_date_span"},[_vm._v("更新时间")]),_vm._v(" "),_c('span',{staticClass:"list_date_span"},[_vm._v(_vm._s(_vm.time))])])]),_vm._v(" "),_c('div',{staticClass:"listofall_two"},[_c('el-input',{staticClass:"listofall_two_input",attrs:{"autocomplete":"off","placeholder":"搜索用户电话"}}),_vm._v(" "),_c('img',{staticClass:"listofall_two_img",attrs:{"src":__webpack_require__("v+Vh")}})],1)]),_vm._v(" "),_c('div',[_vm._m(2),_vm._v(" "),_c('div',{staticStyle:{"overflow-y":"scroll","height":"600px"}},[(_vm.user.length>0)?_c('table',{staticClass:"ttt  ",staticStyle:{"table-layout":"fixed"}},[_c('tbody',_vm._l((_vm.user),function(value,index){return _c('tr',{staticClass:"tr_hover",class:{table_td:_vm.numbers(index)==='偶数'}},[_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.code))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.name))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.face_value))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.nickname))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.get_time))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.use_time))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"},domProps:{"textContent":_vm._s(_vm.status(value.status))}})])}),0)]):_c('div',{staticClass:"tooltip"},[_vm._m(3)])])])]),_vm._v(" "),_c('div',{staticClass:"fenye"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage4,"page-sizes":[50,100,300,500],"page-size":_vm.limit,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.count},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"head_div_all"},[_c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("领取详情列表")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"list_date_head"},[_vm._v("领取详情列表")]),_c('span',{staticClass:"list_date_head"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"ttt",staticStyle:{"width":"99%","table-layout":"fixed"}},[_c('thead',[_c('tr',{staticClass:"bg"},[_c('td',[_vm._v("口令")]),_vm._v(" "),_c('td',[_vm._v("优惠券")]),_vm._v(" "),_c('td',[_vm._v("优惠券金额")]),_vm._v(" "),_c('td',[_vm._v("用户名称")]),_vm._v(" "),_c('td',[_vm._v("领取时间")]),_vm._v(" "),_c('td',[_vm._v("使用时间")]),_vm._v(" "),_c('td',[_vm._v("状态")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"tooltip_img",attrs:{"src":__webpack_require__("9sZQ")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_ReceiveDetails = (esExports);
// CONCATENATED MODULE: ./src/components/ReceiveDetails.vue
function injectStyle (ssrContext) {
  __webpack_require__("3EMU")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9aa74188"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  ReceiveDetails,
  components_ReceiveDetails,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_ReceiveDetails = __webpack_exports__["default"] = (Component.exports);


/***/ })

});