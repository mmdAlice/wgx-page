webpackJsonp([24],{

/***/ "S01Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/LineBinding.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var LineBinding = ({
  name: "SettlementManager",
  data: function data() {
    return {
      company: [],
      companyName: '', //公司名称
      lineList: [], //订单明细
      level_name: '', //判断是否是内部员工是的话才能选择公司，否自不能选择公司
      radio: '', //绑定那条线路
      companyId: '', //公司id
      busId: '' //公交id
    };
  },

  methods: {

    //清空
    clearDate: function clearDate() {
      this.$router.push({ path: '/PageJump', query: { id: 11 } });
    },
    states: function states(id) {
      if (id === 1) {
        return '启用中';
      } else {
        return '禁用中';
      }
    },
    //警告提示
    warning: function warning(msg) {
      this.$message({
        message: msg,
        type: 'warning'
      });
    },
    //筛选
    screen: function screen() {
      var company = void 0;
      var that = this;
      if (this.companyName === '') {
        return this.warning('公司名称');
      } else {
        company = this.companyName;
        this.companyId = company;
      }
      this.$get(this.$stors.state.ip + '/api_backend/v1/busroutes/?company=' + company).then(function (res) {
        that.lineList = res.results;
      });
    },
    //提交
    submits: function submits() {
      var that = this;
      if (this.radio === '') {
        return this.warning('请选择线路');
      }
      this.$post(this.$stors.state.ip + '/api_backend/v1/carrouterelations/', { car: this.busId, route: this.radio, company: this.companyId }).then(function (res) {
        that.$router.push({ path: '/Index/BusManage' });
      });
    },
    //获取公司信息
    getCompany: function getCompany() {
      var that = this;
      this.$get(this.$stors.state.ip + '/api_backend/v1/companies/?offset=0&limit=200').then(function (res) {
        that.company = res.results;
      });
    },
    goBack: function goBack() {
      this.$router.push({ path: '/Index/BusManage' });
    }
  },
  mounted: function mounted() {
    var that = this;
    this.busId = this.$route.query.busId;
    this.companyId = this.$route.query.companyId;
    this.level_name = localStorage.getItem('level_name');
    if (this.level_name === '内部员工') {
      this.getCompany();
    } else {
      this.$get(this.$stors.state.ip + '/api_backend/v1/busroutes/').then(function (res) {
        that.lineList = res.results;
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-4dc154c0","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/LineBinding.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_c('div',{staticClass:"head_div_all"},[_c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span back",on:{"click":_vm.goBack}},[_vm._v("车辆管理/")]),_vm._v(" "),_c('span',{staticClass:"sousuo_span "},[_vm._v("线路绑定")])])]),_vm._v(" "),(_vm.level_name==='内部员工')?_c('div',{staticClass:"manager"},[_c('div',{staticClass:"manager_2"},[_c('ul',{staticClass:"ul_text"},[_vm._m(0),_vm._v(" "),_c('li',{staticClass:"right_text"},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.companyName),callback:function ($$v) {_vm.companyName=$$v},expression:"companyName"}},_vm._l((_vm.company),function(item){return _c('el-option',{key:item.pk,attrs:{"label":item.name,"value":item.pk}})}),1)],1),_vm._v(" "),_c('li',{staticClass:"left_text"}),_vm._v(" "),_c('li',{staticClass:"right_text"},[_c('el-button',{attrs:{"type":"primary","plain":""},on:{"click":_vm.screen}},[_vm._v("筛选")]),_vm._v(" "),_c('el-button',{attrs:{"type":"info","plain":""},on:{"click":_vm.clearDate}},[_vm._v("清空筛选条件")])],1)])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"manager"},[_c('div',{staticClass:"sumList2"},[_c('p',{staticClass:"header"},[_vm._v("线路详情")]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticStyle:{"width":"100%","overflow-y":"scroll","height":"280px"}},[_c('table',{staticStyle:{"width":"100%"}},_vm._l((_vm.lineList),function(value,index){return _c('tr',{staticClass:"table_text"},[_c('td',[_c('el-radio',{attrs:{"label":value.id},model:{value:(_vm.radio),callback:function ($$v) {_vm.radio=$$v},expression:"radio"}},[_vm._v(_vm._s(value.line_no)+"线")])],1),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(value.id)}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(value.company_name)}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(value.line_no)}}),_vm._v(" "),_c('td',{staticStyle:{"color":"red"}},[_c('span',{class:{type_color:value.status===1},domProps:{"textContent":_vm._s(_vm.states(value.status))}})])])}),0)])])]),_vm._v(" "),_c('div',[_c('el-button',{attrs:{"type":"primary","plain":""},on:{"click":_vm.submits}},[_c('span',{staticStyle:{"font-size":"20px"}},[_vm._v("提 交")])])],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"left_text"},[_c('span',{staticStyle:{"margin-left":"20px"}},[_vm._v("所属公司:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticStyle:{"width":"99%","margin-top":"10px"}},[_c('tr',{staticClass:"table_text"},[_c('td',[_vm._v("绑定线路")]),_vm._v(" "),_c('td',[_vm._v("ID")]),_vm._v(" "),_c('td',[_vm._v("公司名称")]),_vm._v(" "),_c('td',[_vm._v("线路名称")]),_vm._v(" "),_c('td',[_vm._v("状态")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_LineBinding = (esExports);
// CONCATENATED MODULE: ./src/components/LineBinding.vue
function injectStyle (ssrContext) {
  __webpack_require__("TTJa")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4dc154c0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  LineBinding,
  components_LineBinding,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_LineBinding = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "TTJa":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});