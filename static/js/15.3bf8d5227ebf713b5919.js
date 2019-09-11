webpackJsonp([15],{

/***/ "Hy6H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/AccountManage.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var AccountManage = ({
  name: "AccountManage",
  data: function data() {
    return {
      dialogVisible1: false, //删除模块控制
      userList: [],
      time: "", //当前时间
      limit: 50,
      offset: 0,
      count: 0, //总条数
      currentPage4: 1,
      modifyUser: 0, //修改账号控制
      addUser: 0 //添加账号控制
    };
  },

  methods: {
    handleSizeChange: function handleSizeChange(val) {
      this.limit = val;
      this.getList(this.limit, this.offset);
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.offset = this.limit * val - this.limit;
      if (val === 1) {
        this.offset = 0;
      }
      this.getList(this.limit, this.offset);
    },

    //启用或者停用
    upperOrlower: function upperOrlower(index) {
      var _this = this;

      var state = void 0;
      var msg = void 0;
      if (this.userList[index].is_active) {
        state = false;
        msg = '停用';
      } else {
        state = true;
        msg = '启用';
      }
      var that = this;
      this.$confirm('此操作将' + msg + '该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this.$patch(_this.$store.state.ip + '/api_backend/v1/adminusers/' + _this.userList[index].pk + '/', { role: _this.userList[index].role, mobile: _this.userList[index].mobile, permissions: _this.userList[index].permissions,
          is_active: state, nickname: _this.userList[index].nickname, username: _this.userList[index].username }).then(function (res) {
          that.$router.push({ path: '/PageJump', query: { id: 2 } });
        });
        _this.$message({
          type: 'success',
          message: msg + '成功!'
        });
      }).catch(function () {
        _this.$message({
          type: 'info',
          message: '已取消' + msg
        });
      });
    },
    //添加账号
    addUsers: function addUsers() {
      this.$router.push({ path: '/Index/AddRole' });
    },
    //编辑
    edit: function edit(id) {
      this.$router.push({ path: '/Index/AddRole', query: { id: id } });
    },
    numbers: function numbers(id) {
      if (id % 2 === 0) {
        return '偶数';
      } else {
        return '奇数';
      }
    },
    //获取列表
    getList: function getList(limit, offset) {
      var _this2 = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/adminusers/?offset=' + offset + '&limit=' + limit).then(function (res) {
        _this2.userList = res.results;
        _this2.count = res.count;
      });
    }
  },
  mounted: function mounted() {
    var list = JSON.parse(localStorage.getItem('user_permissions'));
    for (var i = 0; i < list.length; i++) {
      if (list[i].permission_name === '修改帐号') {
        this.modifyUser = 1;
      } else if (list[i].permission_name === '增加帐号') {
        this.addUser = 1;
      }
    }
    var myDate = new Date();
    this.time = Object(dates["a" /* formatDate */])(myDate, 'yyyy-MM-dd hh:mm:ss');
    this.getList(this.limit, this.offset);
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-7217820d","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/AccountManage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_c('div',{staticClass:"head_div_all"},[_vm._m(0),_vm._v(" "),(_vm.addUser===1)?_c('div',{staticClass:"newText",on:{"click":_vm.addUsers}},[_c('i',{staticClass:"el-icon-circle-plus",staticStyle:{"width":"25px","height":"25px","line-height":"25px"}}),_vm._v(" "),_c('p',[_vm._v("添加账号")])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"table_all_div"},[_c('div',{staticClass:"listofall"},[_c('div',{staticClass:"list_date"},[_vm._m(1),_vm._v(" "),_c('p',[_c('span',{staticClass:"list_date_span"},[_vm._v("更新时间")]),_vm._v(" "),_c('span',{staticClass:"list_date_span"},[_vm._v(_vm._s(_vm.time))])])]),_vm._v(" "),_c('div',{staticClass:"listofall_two"},[_c('el-input',{staticClass:"listofall_two_input",attrs:{"autocomplete":"off","placeholder":"输入登录用户名"}}),_vm._v(" "),_c('img',{staticClass:"listofall_two_img",attrs:{"src":__webpack_require__("v+Vh")}})],1)]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticStyle:{"overflow-y":"scroll","height":"600px"}},[(_vm.userList.length>0)?_c('table',{staticClass:"ttt",staticStyle:{"table-layout":"fixed"}},[_c('tbody',_vm._l((_vm.userList),function(value,index){return _c('tr',{staticClass:"tr_hover",class:{table_td:_vm.numbers(index)==='偶数'}},[_c('td',[_vm._v(_vm._s(index+1))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.nickname))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.username))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.show_name))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.date_joined))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.company_name))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[(value.is_show_btn && _vm.modifyUser===1)?_c('div',[(value.is_active===false)?_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.upperOrlower(index)}}},[_vm._v("启用")]):_vm._e(),_vm._v(" "),(value.is_active===true)?_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.upperOrlower(index)}}},[_vm._v("停用")]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.edit(value.pk)}}},[_vm._v("编辑")])]):_vm._e()])])}),0)]):_c('div',{staticClass:"tooltip"},[_vm._m(3)])])]),_vm._v(" "),_c('div',{staticClass:"fenye"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage4,"page-sizes":[50,100,300,500],"page-size":_vm.limit,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.count},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("员工列表")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"list_date_head"},[_vm._v("账号列表")]),_c('span',{staticClass:"list_date_head"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"ttt",staticStyle:{"width":"99%","table-layout":"fixed"}},[_c('thead',[_c('tr',{staticClass:"bg"},[_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("序号")]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("昵称")]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("登录用户名")]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("角色")]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("创建时间")]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("公司名称")]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("操作")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"tooltip_img",attrs:{"src":__webpack_require__("9sZQ")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_AccountManage = (esExports);
// CONCATENATED MODULE: ./src/components/AccountManage.vue
function injectStyle (ssrContext) {
  __webpack_require__("a662")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7217820d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  AccountManage,
  components_AccountManage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_AccountManage = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "a662":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});