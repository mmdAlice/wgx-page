webpackJsonp([28],{

/***/ "+Y7Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/SettlementList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SettlementList = ({
  name: "SettlementList",
  data: function data() {
    return {
      checked: true,
      currentPage4: 1,
      count: 0,
      limit: 50,
      checkList: ['选中且禁用', '复选框 A'],
      orderList: [],
      options: [{
        value: '0',
        label: '所有'
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
      company: []
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

    //支付状态
    payType: function payType(id) {
      for (var i = 0; i < this.options.length; i++) {
        if (id == this.options[i].value) {
          return this.options[i].label;
        }
      }
    },
    //下载
    downloads: function downloads(id) {
      this.$store.state.downloads = true;
      var that = this;
      this.$get(this.$stors.state.ip + '/api_backend/v1/settlements/' + id + '/').then(function (res) {
        that.downloadText(res);
      });
    },
    //下载
    downloadText: function downloadText(data) {
      this.$store.state.downloads = false;
      if (!data) {
        return;
      }
      var blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' });
      var url = window.URL.createObjectURL(blob);
      var aLink = document.createElement("a");
      aLink.style.display = "none";
      aLink.href = url;
      aLink.setAttribute("download", "excel.xls");
      document.body.appendChild(aLink);
      aLink.click();
      document.body.removeChild(aLink); //下载完成移除元素
      window.URL.revokeObjectURL(url); //释放掉blob对象
    },
    goback: function goback() {
      this.$router.replace({ path: '/Index/SettlementManager' });
    },
    getList: function getList(limit, offset) {
      var that = this.$moment;
      var date = this;
      this.$get(this.$stors.state.ip + '/api_backend/v1/settlements/?offset=' + offset + '&limit=' + limit).then(function (res) {
        for (var i = 0; i < res.results.length; i++) {
          res.results[i].end_time = that(res.results[i].end_time).format("YYYY-MM-DD HH:mm:ss");
          res.results[i].start_time = that(res.results[i].start_time).format("YYYY-MM-DD HH:mm:ss");
        }
        date.orderList = res.results;
      });
    }

  },
  mounted: function mounted() {
    this.getList(this.limit, this.offset);
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-38f5ebec","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/SettlementList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_c('div',{staticClass:"head_div_all"},[_c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span list_text",on:{"click":_vm.goback}},[_vm._v("结算管理")]),_vm._v(" "),_c('span',{staticClass:"sousuo_span "},[_vm._v("/结算清单")])])]),_vm._v(" "),_c('div',{staticClass:"out_div"},[_c('div',{staticClass:"in_div"},[_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticStyle:{"width":"100%","overflow-y":"scroll","height":"600px"}},[(_vm.orderList.length>0)?_c('table',{staticStyle:{"width":"100%"}},_vm._l((_vm.orderList),function(value,index){return _c('tr',{staticClass:"table_text"},[_c('td',{domProps:{"textContent":_vm._s(value.id)}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(value.start_time)}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(value.end_time)}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(_vm.payType(value.state))}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(value.company_name)}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(value.amount)}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(value.correct_amount)}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(value.unpaid_amount)}}),_vm._v(" "),_c('td',[_c('el-button',{attrs:{"type":"primary","plain":""},on:{"click":function($event){return _vm.downloads(value.id)}}},[_vm._v("下载")])],1)])}),0):_c('div',{staticClass:"tooltip"},[_vm._m(2)])])])]),_vm._v(" "),_c('div',{staticClass:"fenye"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage4,"page-sizes":[50,100,300,500],"page-size":_vm.limit,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.count},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header_div"},[_c('div',{staticClass:"header_div_text"},[_c('p',{staticClass:"text_p"},[_vm._v("已生成结算单")]),_vm._v(" "),_c('p',{staticClass:"text_p_time"},[_vm._v("更新于：2018-12-20 13:00")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"99%","margin-top":"10px"}},[_c('table',{staticStyle:{"width":"100%"}},[_c('tr',{staticClass:"table_text"},[_c('td',[_vm._v("ID")]),_vm._v(" "),_c('td',[_vm._v("开始时间")]),_vm._v(" "),_c('td',[_vm._v("结束时间")]),_vm._v(" "),_c('td',[_vm._v("支付状态")]),_vm._v(" "),_c('td',[_vm._v("公司名称")]),_vm._v(" "),_c('td',[_vm._v("订单总金额")]),_vm._v(" "),_c('td',[_vm._v("校正总金额")]),_vm._v(" "),_c('td',[_vm._v("未支付总金额")]),_vm._v(" "),_c('td',[_vm._v("导出")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"tooltip_img",attrs:{"src":__webpack_require__("9sZQ")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_SettlementList = (esExports);
// CONCATENATED MODULE: ./src/components/SettlementList.vue
function injectStyle (ssrContext) {
  __webpack_require__("fnNa")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-38f5ebec"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  SettlementList,
  components_SettlementList,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_SettlementList = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "fnNa":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});