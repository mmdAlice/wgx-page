webpackJsonp([5],{

/***/ "1gGl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/BookingManage.vue
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



/* harmony default export */ var BookingManage = ({
  name: "BookingManage",
  data: function data() {
    return {
      currentPage4: 1,
      msg: [],
      limit: 50,
      offset: 0,
      count: 0,
      time: '',
      phones: '',
      orderType: '',
      orderState: '',
      order_state: [{
        value: '',
        label: '全部'
      }, {
        value: '1',
        label: '待成功'
      }, {
        value: '2',
        label: '成功'
      }, {
        value: '3',
        label: '失败'
      }],
      order_type: [{
        value: '',
        label: '全部'
      }, {
        value: '1',
        label: '支付宝'
      }, {
        value: '2',
        label: '微信'
      }, {
        value: '3',
        label: '银联'
      }, {
        value: '4',
        label: '余额'
      }, {
        value: '5',
        label: '校正'
      }]
    };
  },

  // props: {
  //   total: {// 数据总条数
  //     type: Number,
  //      default:this.count
  //   }
  // },
  methods: {
    //每页展示多少条
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
    getList: function getList(limit, offset) {
      var _this = this;

      var phone = '';
      var order = '';
      if (this.phones.length > 11) {
        order = this.phones;
      } else if (this.phones.length === 11) {
        phone = this.phones;
      }
      this.$get(this.$stors.state.ip + '/api_backend/v1/recharges/?offset=' + offset + '&limit=' + limit + '&order_no=' + order + '&mobile=' + phone + '&pay_type=' + this.orderType + '&state=' + this.orderState).then(function (response) {
        for (var i = 0; i < response.results.length; i++) {
          response.results[i].create_time = _this.$moment(response.results[i].create_time).format("YYYY-MM-DD HH:mm:ss");
          if (response.results[i].pay_type === 1) {
            response.results[i].pay_type = "支付宝";
          } else if (response.results[i].pay_type === 2) {
            response.results[i].pay_type = "微信";
          } else {
            response.results[i].pay_type = "银联";
          }
          if (response.results[i].state === 1) {
            response.results[i].state = "未支付";
          } else if (response.results[i].state === 2) {
            response.results[i].state = "成功";
          } else {
            response.results[i].state = "失败";
          }
        }
        _this.count = response.count;
        _this.msg = response.results;
      });
    }
  },
  mounted: function mounted() {
    this.getList(this.limit, this.offset);
    var myDate = new Date();
    this.time = Object(dates["a" /* formatDate */])(myDate, 'yyyy-MM-dd hh:mm:ss');
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-e22c9fba","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/BookingManage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"table_all_div"},[_c('div',{staticClass:"listofall"},[_c('div',{staticClass:"list_date"},[_vm._m(1),_vm._v(" "),_c('p',[_c('span',{staticClass:"list_date_span"},[_vm._v("更新时间")]),_vm._v(" "),_c('span',{staticClass:"list_date_span"},[_vm._v(_vm._s(_vm.time))])])]),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"21px","margin-left":"172px"}},[_c('span',{staticStyle:{"color":"#a3a3a3"}},[_vm._v("类型：")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.orderType),callback:function ($$v) {_vm.orderType=$$v},expression:"orderType"}},_vm._l((_vm.order_type),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1),_vm._v(" "),_c('span',{staticStyle:{"color":"#a3a3a3","margin-left":"20px"}},[_vm._v("状态：")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.orderState),callback:function ($$v) {_vm.orderState=$$v},expression:"orderState"}},_vm._l((_vm.order_state),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('div',{staticClass:"listofall_two"},[_c('el-input',{staticClass:"listofall_two_input",attrs:{"autocomplete":"off","placeholder":"输入手机号或订单号"},model:{value:(_vm.phones),callback:function ($$v) {_vm.phones=$$v},expression:"phones"}}),_vm._v(" "),_c('img',{staticClass:"listofall_two_img",attrs:{"src":__webpack_require__("v+Vh")},on:{"click":_vm.getList}})],1)]),_vm._v(" "),_c('div',[_vm._m(2),_vm._v(" "),_c('div',{staticStyle:{"overflow-y":"scroll","height":"600px"}},[(_vm.msg.length>0)?_c('table',{staticClass:"ttt",staticStyle:{"table-layout":"fixed"}},[_c('tbody',_vm._l((_vm.msg),function(value,index){return _c('tr',{staticClass:"tr_hover",class:{table_td:_vm.numbers(index)==='偶数'}},[_c('td',[_vm._v(_vm._s(index+1))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.order_no))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.username))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.name))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.create_time))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.amount))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.pay_type))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.state))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.remark))])])}),0)]):_c('div',{staticClass:"tooltip"},[_vm._m(3)])])])]),_vm._v(" "),_c('div',{staticClass:"fenye"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage4,"page-sizes":[50,100,300,500],"page-size":_vm.limit,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.count},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"head_div_all"},[_c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("充值订单列表")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"list_date_head"},[_vm._v("充值订单列表")]),_c('span',{staticClass:"list_date_head"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"ttt",staticStyle:{"width":"99%","table-layout":"fixed"}},[_c('thead',[_c('tr',{staticClass:"bg"},[_c('td',[_vm._v("序号")]),_vm._v(" "),_c('td',[_vm._v("订单编号")]),_vm._v(" "),_c('td',[_vm._v("用户")]),_vm._v(" "),_c('td',[_vm._v("订单名称")]),_vm._v(" "),_c('td',[_vm._v("创建时间")]),_vm._v(" "),_c('td',[_vm._v("充值金额")]),_vm._v(" "),_c('td',[_vm._v("支付方式")]),_vm._v(" "),_c('td',[_vm._v("状态")]),_vm._v(" "),_c('td',[_vm._v("备注")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"tooltip_img",attrs:{"src":__webpack_require__("9sZQ")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_BookingManage = (esExports);
// CONCATENATED MODULE: ./src/components/BookingManage.vue
function injectStyle (ssrContext) {
  __webpack_require__("zKuI")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e22c9fba"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  BookingManage,
  components_BookingManage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_BookingManage = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "zKuI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});