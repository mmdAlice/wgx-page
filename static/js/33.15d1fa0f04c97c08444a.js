webpackJsonp([33],{

/***/ "Eb2a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/Jurisdiction.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Jurisdiction = ({
  name: "Jurisdiction",
  data: function data() {
    return {
      time: '',
      listAll: [],
      limit: 50,
      offset: 0,
      count: 0, //总条数
      currentPage: 1,
      dialogVisible: false, //添加权限的展示
      group: '', //菜单名称
      is_default: '', //是否默认
      is_show: '', //是否显示
      method: '', //权限方法
      permission_name: '', //权限名称
      view_class_name: '', //权限功能
      addOrEdit: 0, //判断是新增还是编辑，默认时新增
      jurisdictionId: '', //权限id
      showOptions: [{
        id: true,
        name: '是'
      }, {
        id: false,
        name: '否'
      }],
      options: [{
        name: 'GET'
      }, {
        name: 'POST'
      }, {
        name: 'PUT-PATCH'
      }, {
        name: 'DELETE'
      }, {
        name: 'PATCH'
      }]

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
    //警告提示
    warning: function warning(msg) {
      this.$message({
        message: msg,
        type: 'warning'
      });
    },
    //添加权限
    addJurisdiction: function addJurisdiction() {
      this.dialogVisible = true;
      this.addOrEdit = 0;
    },
    //取消
    cancels: function cancels() {
      this.dialogVisible = false;
    },
    //添加权限的提交
    addActivity: function addActivity() {
      if (this.addOrEdit === 0) {
        this.$post(this.$stors.state.ip + '/api_backend/v1/permissions/', {
          view_class_name: this.view_class_name, permission_name: this.permission_name,
          method: this.method, is_default: this.is_default, is_show: this.is_show, group: this.group
        }).then(function (res) {});
      } else {
        this.$patch(this.$stors.state.ip + '/api_backend/v1/permissions/' + this.jurisdictionId + '/', {
          view_class_name: this.view_class_name, permission_name: this.permission_name,
          method: this.method, is_default: this.is_default, is_show: this.is_show, group: this.group
        }).then(function (res) {});
      }
    },
    //编辑
    edit: function edit(index) {
      this.jurisdictionId = this.listAll[index].id;
      this.addOrEdit = 1;
      this.dialogVisible = true;
      this.view_class_name = this.listAll[index].view_class_name;
      this.permission_name = this.listAll[index].permission_name;
      this.method = this.listAll[index].method;
      this.is_default = this.listAll[index].is_default;
      this.is_show = this.listAll[index].is_show;
      this.group = this.listAll[index].group;
    },
    //获取权限列表
    getList: function getList(limit, offset) {
      var _this = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/permissions/?offset=' + offset + '&limit=' + limit).then(function (res) {
        _this.listAll = res.results;
        _this.count = res.count;
      });
    }
  },
  mounted: function mounted() {
    this.getList(this.limit, this.offset);
    var myDate = new Date();
    this.time = Object(dates["a" /* formatDate */])(myDate, 'yyyy-MM-dd hh:mm:ss');
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-1b2bb414","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/Jurisdiction.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_c('div',{staticClass:"head_div_all"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"newText",on:{"click":_vm.addJurisdiction}},[_c('i',{staticClass:"el-icon-circle-plus",staticStyle:{"width":"25px","height":"25px","line-height":"25px"}}),_vm._v(" "),_c('p',[_vm._v("添加权限")])])]),_vm._v(" "),_c('div',{staticClass:"all_center"},[_c('el-dialog',{attrs:{"title":"新增权限","visible":_vm.dialogVisible,"width":"610px","height":"500px","center":""}},[_c('table',{staticClass:"table_all",staticStyle:{"width":"100%"}},[_c('tr',[_c('td',[_vm._v("所属菜单:")]),_vm._v(" "),_c('td',[_c('el-input',{model:{value:(_vm.group),callback:function ($$v) {_vm.group=$$v},expression:"group"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("是否默认:")]),_vm._v(" "),_c('td',[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.is_default),callback:function ($$v) {_vm.is_default=$$v},expression:"is_default"}},_vm._l((_vm.showOptions),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("是否显示:")]),_vm._v(" "),_c('td',[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.is_show),callback:function ($$v) {_vm.is_show=$$v},expression:"is_show"}},_vm._l((_vm.showOptions),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("权限方法:")]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"left"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.method),callback:function ($$v) {_vm.method=$$v},expression:"method"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.name}})}),1)],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("权限名称:")]),_vm._v(" "),_c('td',[_c('el-input',{model:{value:(_vm.permission_name),callback:function ($$v) {_vm.permission_name=$$v},expression:"permission_name"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("功能:")]),_vm._v(" "),_c('td',[_c('el-input',{model:{value:(_vm.view_class_name),callback:function ($$v) {_vm.view_class_name=$$v},expression:"view_class_name"}})],1)])]),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"10px","margin-bottom":"30px","display":"flex","justify-content":"center"}},[_c('el-button',{on:{"click":_vm.cancels}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{staticStyle:{"margin-left":"80px"},on:{"click":_vm.addActivity}},[_vm._v("提交")])],1)])],1),_vm._v(" "),_c('div',{staticClass:"table_all_div"},[_c('div',{staticClass:"listofall"},[_c('div',{staticClass:"list_date"},[_vm._m(1),_vm._v(" "),_c('p',[_c('span',{staticClass:"list_date_span"},[_vm._v("更新时间")]),_vm._v(" "),_c('span',{staticClass:"list_date_span"},[_vm._v(_vm._s(_vm.time))])])])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticStyle:{"overflow-y":"scroll","height":"600px"}},[(_vm.listAll.length>0)?_c('table',{staticClass:"table_text",staticStyle:{"table-layout":"fixed"}},[_c('tbody',_vm._l((_vm.listAll),function(value,index){return _c('tr',{staticClass:"tr_hover",class:{table_td:_vm.numbers(index)==='偶数'}},[_c('td',[_vm._v(_vm._s(index+1))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.view_class_name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.permission_name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.method))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.is_default))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.is_show))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.group))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_c('div',[_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.edit(index)}}},[_vm._v("编辑")])])])])}),0)]):_c('div',{staticClass:"tooltip"},[_vm._m(3)])])]),_vm._v(" "),_c('div',{staticClass:"fenye"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage,"page-sizes":[50,100,300,500],"page-size":_vm.limit,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.count},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("权限管理列表")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"list_date_head"},[_vm._v("权限管理列表")]),_c('span',{staticClass:"list_date_head"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"table_text",staticStyle:{"width":"99%","table-layout":"fixed"}},[_c('thead',[_c('tr',{staticStyle:{"color":"#909399"}},[_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v("序号")]),_vm._v(" "),_c('td',[_vm._v("功能")]),_vm._v(" "),_c('td',[_vm._v("权限名称")]),_vm._v(" "),_c('td',[_vm._v("权限方法")]),_vm._v(" "),_c('td',[_vm._v("是否默认")]),_vm._v(" "),_c('td',[_vm._v("是否显示")]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v("所属菜单")]),_vm._v(" "),_c('td',[_vm._v("操作")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"tooltip_img",attrs:{"src":__webpack_require__("9sZQ")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Jurisdiction = (esExports);
// CONCATENATED MODULE: ./src/components/Jurisdiction.vue
function injectStyle (ssrContext) {
  __webpack_require__("wuFQ")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1b2bb414"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Jurisdiction,
  components_Jurisdiction,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Jurisdiction = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "wuFQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});