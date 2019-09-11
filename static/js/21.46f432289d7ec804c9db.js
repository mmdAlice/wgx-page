webpackJsonp([21],{

/***/ "cuxR":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "eDX1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/SettlementManager.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SettlementManager = ({
  name: "SettlementManager",
  data: function data() {
    return {
      // pickerOptions0: {
      //   disabledDate(time) {
      //     return time.getTime() < Date.now() - 8.64e7;
      //   }
      // },
      statrtTime: '',
      endTime: '',
      company: [],
      options: [{
        value: '',
        label: '全部'
      }, {
        value: '1',
        label: '未支付'
      }, {
        value: '2',
        label: '成功'
      }, {
        value: '3',
        label: '失败'
      }],
      payType: '', //支付状态
      companyName: '', //公司名称
      orderList: [], //订单明细
      total_amount: 0, //订单总金额
      total_correct_amount: 0, //校正总金额
      total_unpaid: 0, //未支付总金额
      level_name: '' //判断是否是内部员工是的话才能选择公司，否自不能选择公司
    };
  },

  methods: {
    open: function open() {
      var _this = this;

      if (this.orderList.length === 0) {
        return this.warning('该公司没有任何结算账单');
      }
      var payType = void 0;
      if (this.payType === '') {
        payType = 0;
      }
      var startTime = Object(dates["a" /* formatDate */])(this.statrtTime, 'yyyy-MM-dd hh:mm:ss');
      var endTime = Object(dates["a" /* formatDate */])(this.endTime, 'yyyy-MM-dd hh:mm:ss');
      var company = void 0;
      if (this.level_name === '内部员工') {
        if (this.companyName === '') {
          return this.warning('公司名称');
        } else {
          company = this.companyName;
        }
      } else {
        company = '';
      }
      this.$post(this.$stors.state.ip + '/api_backend/v1/settlements/', { start_time: startTime, end_time: endTime, amount: this.total_amount,
        correct_amount: this.total_correct_amount, unpaid_amount: this.total_unpaid,
        state: payType, company: company }).then(function (res) {
        _this.$alert('结算单正在生成，请在已生成结算表中查看', '提示', {
          confirmButtonText: '知道了'
        });
      });
    },

    //清空
    clearDate: function clearDate() {
      this.$router.push({ path: '/PageJump', query: { id: 11 } });
    },
    //公司名称
    companys: function companys(id) {
      for (var i = 0; i < this.company.length; i++) {
        if (id == this.company[i].pk) {
          return this.company[i].name;
        }
      }
    },
    states: function states(id) {
      for (var i = 0; i < this.options.length; i++) {
        if (id == this.options[i].value) {
          return this.options[i].label;
        }
      }
    }, //警告提示
    warning: function warning(msg) {
      this.$message({
        message: msg,
        type: 'warning'
      });
    },
    //筛选
    screen: function screen() {
      var moment = this.$moment;
      var that = this;
      if (this.statrtTime === '' || this.endTime === '') {
        return this.warning('请选择时间');
      }
      var startTime = Object(dates["a" /* formatDate */])(this.statrtTime, 'yyyy-MM-dd hh:mm:ss');
      var endTime = Object(dates["a" /* formatDate */])(this.endTime, 'yyyy-MM-dd hh:mm:ss');
      var company = void 0;
      if (this.level_name === '内部员工') {
        if (this.companyName === '') {
          return this.warning('公司名称');
        } else {
          company = this.companyName;
        }
      } else {
        company = '';
      }
      this.$get(this.$stors.state.ip + '/api_backend/v1/orders/?state=' + this.payType + '&company=' + company + '&range_pay_time_after=' + startTime + '&range_pay_time_before=' + endTime).then(function (res) {
        that.total_amount = res.results.total_amount;
        that.total_correct_amount = res.results.total_correct_amount;
        that.total_unpaid = res.results.total_unpaid;
        for (var i = 0; i < res.results.results.length; i++) {
          res.results.results[i].create_time = moment(res.results.results[i].create_time).format("YYYY-MM-DD HH:mm:ss");
        }
        that.orderList = res.results.results;
      });
    },
    goSettlementList: function goSettlementList() {
      this.$router.push({ path: '/Index/SettlementList' });
    },
    //获取公司信息
    getCompany: function getCompany() {
      var that = this;
      this.$get(this.$stors.state.ip + '/api_backend/v1/companies/?offset=0&limit=200').then(function (res) {
        that.company = res.results;
      });
    }
  },
  mounted: function mounted() {
    this.level_name = localStorage.getItem('level_name');
    if (this.level_name === '内部员工') {
      this.getCompany();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-54443f7a","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/SettlementManager.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"manager"},[_c('div',{staticClass:"manager_2"},[_c('ul',{staticClass:"ul_text"},[_vm._m(1),_vm._v(" "),_c('li',{staticClass:"right_text"},[_c('el-date-picker',{attrs:{"type":"date","placeholder":"选择日期"},model:{value:(_vm.statrtTime),callback:function ($$v) {_vm.statrtTime=$$v},expression:"statrtTime"}}),_vm._v(" "),_c('span',[_vm._v("至")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"date","placeholder":"选择日期"},model:{value:(_vm.endTime),callback:function ($$v) {_vm.endTime=$$v},expression:"endTime"}})],1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('li',{staticClass:"right_text"},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.payType),callback:function ($$v) {_vm.payType=$$v},expression:"payType"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),(_vm.level_name==='内部员工')?_c('li',{staticClass:"left_text"},[_c('span',{staticStyle:{"margin-left":"20px"}},[_vm._v("公司名称:")])]):_vm._e(),_vm._v(" "),(_vm.level_name==='内部员工')?_c('li',{staticClass:"right_text"},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.companyName),callback:function ($$v) {_vm.companyName=$$v},expression:"companyName"}},_vm._l((_vm.company),function(item){return _c('el-option',{key:item.pk,attrs:{"label":item.name,"value":item.pk}})}),1)],1):_vm._e(),_vm._v(" "),_c('li',{staticClass:"left_text"}),_vm._v(" "),_c('li',{staticClass:"right_text"},[_c('el-button',{attrs:{"type":"primary","plain":""},on:{"click":_vm.screen}},[_vm._v("筛选")]),_vm._v(" "),_c('el-button',{attrs:{"type":"info","plain":""},on:{"click":_vm.clearDate}},[_vm._v("清空筛选条件")]),_vm._v(" "),_c('el-button',{attrs:{"type":"info","plain":""},on:{"click":_vm.open}},[_vm._v("生成结算单")]),_vm._v(" "),_c('el-button',{attrs:{"type":"info","plain":""},on:{"click":_vm.goSettlementList}},[_vm._v("查看已生成结算单")])],1)])])]),_vm._v(" "),_c('div',{staticClass:"manager"},[_c('div',{staticClass:"sumList2"},[_c('p',{staticClass:"header"},[_vm._v("结算明细")]),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('div',{staticStyle:{"width":"100%","overflow-y":"scroll","height":"280px"}},[_c('table',{staticStyle:{"width":"100%"}},_vm._l((_vm.orderList),function(value,index){return _c('tr',{staticClass:"table_text"},[_c('td',{domProps:{"textContent":_vm._s(index+1)}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(value.order_no)}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(value.create_time)}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(value.user)}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(_vm.companys(value.company))}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(value.amount)}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(_vm.states(value.state))}})])}),0)])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"head_div_all"},[_c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("结算管理")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"left_text"},[_c('span',{staticStyle:{"margin-left":"20px"}},[_vm._v("选择时间:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"left_text"},[_c('span',{staticStyle:{"margin-left":"20px"}},[_vm._v("支付状态:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticStyle:{"width":"99%","margin-top":"10px"}},[_c('tr',{staticClass:"table_text"},[_c('td',[_vm._v("序号")]),_vm._v(" "),_c('td',[_vm._v("订单编号")]),_vm._v(" "),_c('td',[_vm._v("创建时间")]),_vm._v(" "),_c('td',[_vm._v("用户")]),_vm._v(" "),_c('td',[_vm._v("公司名称")]),_vm._v(" "),_c('td',[_vm._v("支付金额")]),_vm._v(" "),_c('td',[_vm._v("状态")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_SettlementManager = (esExports);
// CONCATENATED MODULE: ./src/components/SettlementManager.vue
function injectStyle (ssrContext) {
  __webpack_require__("cuxR")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-54443f7a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  SettlementManager,
  components_SettlementManager,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_SettlementManager = __webpack_exports__["default"] = (Component.exports);


/***/ })

});