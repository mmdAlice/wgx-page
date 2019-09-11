webpackJsonp([6],{

/***/ "DKW5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "LWGc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/RolePermissions.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var RolePermissions = ({
  name: "RolePermissions",
  data: function data() {
    return {
      time: "", //当前时间
      //时间
      limit: 50,
      count: 0, //总条数
      roleName: '', //角色名称
      roleDescribe: '', //角色描述
      company: '', //所属公司
      dialogVisible: false,
      roleList: [], //角色列表
      currentPage4: 1,
      editOrSub: 0, //判断是编辑还是新增默认时新增
      roleId: '' //角色id

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

    //  跳转添加角色页面
    addAddRole: function addAddRole() {
      this.dialogVisible = true;
      this.editOrSub = 0;
    },
    //警告提示
    warning: function warning(msg) {
      this.$message({
        message: msg,
        type: 'warning'
      });
    },
    numbers: function numbers(id) {
      if (id % 2 === 0) {
        return '偶数';
      } else {
        return '奇数';
      }
    },
    edit: function edit(index) {
      this.roleId = this.roleList[index].id;
      this.dialogVisible = true;
      this.editOrSub = 1;
      this.roleName = this.roleList[index].show_name;
      this.roleDescribe = this.roleList[index].describe;
    },
    //删除
    delect: function delect(index) {
      var _this = this;

      var that = this;
      this.$confirm('此操作将删除该角色, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this.$patch(_this.$store.state.ip + '/api_backend/v1/roles/' + _this.roleList[index].id + '/', {
          company: _this.company, status: 2, describe: _this.roleDescribe, show_name: _this.roleName
        }).then(function (res) {
          that.roleList.splice(index, 1);
        });
        _this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(function () {
        _this.$message({
          type: 'info',
          message: '已取消该操作'
        });
      });
    },
    //确定提交
    activity: function activity() {
      var _this2 = this;

      if (this.roleName === '') {
        return this.warning('请填写角色名称！');
      } else if (this.roleDescribe === '') {
        return this.warning('请填写角色描述！');
      }

      if (this.editOrSub === 0) {
        this.$post(this.$stors.state.ip + '/api_backend/v1/roles/', { company: this.company,
          describe: this.roleDescribe, show_name: this.roleName }).then(function (res) {
          _this2.$router.push({ path: '/PageJump', query: { id: 3 } });
        });
      } else {
        this.$patch(this.$stors.state.ip + '/api_backend/v1/roles/' + this.roleId + '/', { company: this.company,
          describe: this.roleDescribe, show_name: this.roleName }).then(function (res) {
          _this2.$router.push({ path: '/PageJump', query: { id: 3 } });
        });
      }
    },
    //取消
    cancels: function cancels() {
      this.dialogVisible = false;
      this.roleName = '';
      this.roleDescribe = '';
    },
    //获取列表
    getList: function getList(limit, offset) {
      var _this3 = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/roles/?offset=' + offset + '&limit=' + limit).then(function (res) {
        for (var i = 0; i < res.results.length; i++) {
          res.results[i].create_time = _this3.$moment(res.results[i].create_time).format("YYYY-MM-DD HH:mm:ss");
        }
        _this3.roleList = res.results;
        _this3.count = res.count;
      });
    },
    getCompany: function getCompany() {
      var _this4 = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/me/').then(function (res) {
        _this4.company = res.results[0].company_id;
      });
    }
  },

  mounted: function mounted() {
    this.getCompany();
    var myDate = new Date();
    this.time = Object(dates["a" /* formatDate */])(myDate, 'yyyy-MM-dd hh:mm:ss');
    this.getList(this.limit, this.offset);
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-c8fe5e9e","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/RolePermissions.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_c('div',{staticClass:"head_div_all"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"newText",on:{"click":_vm.addAddRole}},[_c('i',{staticClass:"el-icon-circle-plus",staticStyle:{"width":"25px","height":"25px","line-height":"25px"}}),_vm._v(" "),_c('p',[_vm._v("添加角色")])])]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"添加角色","visible":_vm.dialogVisible,"width":"610px","center":""}},[_c('table',{staticStyle:{"text-align":"left","width":"100%"}},[_c('tr',[_c('td',[_c('span',{staticStyle:{"color":"#D32121"}},[_vm._v("*")]),_vm._v("\n          角色名称:\n        ")]),_vm._v(" "),_c('td',[_c('el-input',{model:{value:(_vm.roleName),callback:function ($$v) {_vm.roleName=$$v},expression:"roleName"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_c('span',{staticStyle:{"color":"#D32121"}},[_vm._v("*")]),_vm._v("\n          角色描述:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入内容"},model:{value:(_vm.roleDescribe),callback:function ($$v) {_vm.roleDescribe=$$v},expression:"roleDescribe"}})],1)])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.cancels}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.activity}},[_vm._v("确 定")])],1)]),_vm._v(" "),_c('div',{staticClass:"table_all_div"},[_c('div',{staticClass:"listofall"},[_c('div',{staticClass:"list_date"},[_vm._m(1),_vm._v(" "),_c('p',[_c('span',{staticClass:"list_date_span"},[_vm._v("更新时间")]),_vm._v(" "),_c('span',{staticClass:"list_date_span"},[_vm._v(_vm._s(_vm.time))])])])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticStyle:{"overflow-y":"scroll","height":"600px"}},[(_vm.roleList.length>0)?_c('table',{staticClass:"ttt",staticStyle:{"table-layout":"fixed"}},[_c('tbody',_vm._l((_vm.roleList),function(value,index){return _c('tr',{staticClass:"tr_hover",class:{table_td:_vm.numbers(index)==='偶数'}},[_c('td',[_vm._v(_vm._s(index+1))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.show_name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.describe))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.create_time))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_c('div',[_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.edit(index)}}},[_vm._v("编辑")]),_vm._v(" "),_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.delect(index)}}},[_vm._v("删除")])])])])}),0)]):_c('div',{staticClass:"tooltip"},[_vm._m(3)])])]),_vm._v(" "),_c('div',{staticClass:"fenye"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage4,"page-sizes":[50,100,300,500],"page-size":_vm.limit,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.count},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("角色管理")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"list_date_head"},[_vm._v("角色管理")]),_c('span',{staticClass:"list_date_head"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"ttt",staticStyle:{"width":"99%","table-layout":"fixed"}},[_c('thead',[_c('tr',{staticClass:"bg"},[_c('td',[_vm._v("序号")]),_vm._v(" "),_c('td',[_vm._v("角色名称")]),_vm._v(" "),_c('td',[_vm._v("角色描述")]),_vm._v(" "),_c('td',[_vm._v("创建时间")]),_vm._v(" "),_c('td',[_vm._v("操作")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"tooltip_img",attrs:{"src":__webpack_require__("9sZQ")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_RolePermissions = (esExports);
// CONCATENATED MODULE: ./src/components/RolePermissions.vue
function injectStyle (ssrContext) {
  __webpack_require__("DKW5")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c8fe5e9e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  RolePermissions,
  components_RolePermissions,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_RolePermissions = __webpack_exports__["default"] = (Component.exports);


/***/ })

});