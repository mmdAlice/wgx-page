webpackJsonp([32],{

/***/ "2T59":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/IdentityManage.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var IdentityManage = ({
  name: "IdentityManage",
  data: function data() {
    return {
      dialogVisible: false,
      identity: '', //身份名称
      userList: [],
      time: "", //当前时间
      limit: 50,
      offset: 0,
      count: 0, //总条数
      currentPage: 1,
      description: '', //证件描述
      discount: '', //折扣比例
      identyName: '', //身份名称
      editId: 1,
      id: ''

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

    //警告提示
    warning: function warning(msg) {
      this.$message({
        message: msg,
        type: 'warning'
      });
    },
    //启用或者停用
    upperOrlower: function upperOrlower(index) {
      var _this = this;

      var state = void 0;
      var msg = void 0;
      if (this.userList[index].status === 1) {
        state = 2;
        msg = '停用';
      } else {
        state = 1;
        msg = '启用';
      }
      var that = this;
      this.$confirm('此操作将' + msg + '该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this.$patch(_this.$store.state.ip + '/api_backend/v1/identity/' + _this.userList[index].id + '/', { status: state }).then(function (res) {
          that.$router.push({ path: '/PageJump', query: { id: 18 } });
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
    //添加身份
    addUsers: function addUsers() {
      this.editId = 1;
      this.dialogVisible = true;
    },
    //编辑
    edit: function edit(index) {
      this.editId = 2;
      this.dialogVisible = true;
      this.id = this.userList[index].id;
      this.description = this.userList[index].description;
      this.discount = this.userList[index].discount_rate;
      this.identyName = this.userList[index].name;
    },
    //取消
    cancels: function cancels() {
      this.dialogVisible = false;
    },
    //确定
    activity: function activity() {
      var _this2 = this;

      if (this.description === '' || this.identyName === '' || this.discount === '') {
        return this.warning('请填写正确的数据');
      }
      if (this.editId === 1) {
        this.$post(this.$stors.state.ip + '/api_backend/v1/identity/', { description: this.description, name: this.identyName, discount_rate: this.discount }).then(function (res) {
          _this2.$router.push({ path: '/PageJump', query: { id: 18 } });
        });
      } else {
        this.$patch(this.$stors.state.ip + '/api_backend/v1/identity/' + this.id + '/', { description: this.description, name: this.identyName, discount_rate: this.discount }).then(function (res) {
          _this2.$router.push({ path: '/PageJump', query: { id: 18 } });
        });
      }
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
      var _this3 = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/identity/?offset=' + offset + '&limit=' + limit).then(function (res) {
        _this3.userList = res.results;
        _this3.count = res.count;
      });
    }
  },
  mounted: function mounted() {
    var myDate = new Date();
    this.time = Object(dates["a" /* formatDate */])(myDate, 'yyyy-MM-dd hh:mm:ss');
    this.getList(this.limit, this.offset);
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-1fc90893","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/IdentityManage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_c('div',{staticClass:"head_div_all"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"newText",on:{"click":_vm.addUsers}},[_c('i',{staticClass:"el-icon-circle-plus",staticStyle:{"width":"25px","height":"25px","line-height":"25px"}}),_vm._v(" "),_c('p',[_vm._v("添加身份")])])]),_vm._v(" "),_c('div',{staticClass:"table_all_div"},[_c('div',{staticClass:"listofall"},[_c('div',{staticClass:"list_date"},[_vm._m(1),_vm._v(" "),_c('p',[_c('span',{staticClass:"list_date_span"},[_vm._v("更新时间")]),_vm._v(" "),_c('span',{staticClass:"list_date_span"},[_vm._v(_vm._s(_vm.time))])])])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticStyle:{"overflow-y":"scroll","height":"600px"}},[(_vm.userList.length>0)?_c('table',{staticClass:"ttt",staticStyle:{"table-layout":"fixed"}},[_c('tbody',_vm._l((_vm.userList),function(value,index){return _c('tr',{staticClass:"tr_hover",class:{table_td:_vm.numbers(index)==='偶数'}},[_c('td',[_vm._v(_vm._s(index+1))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.create_time))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.name))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.description))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.discount_rate))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_c('div',[(value.status===2)?_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.upperOrlower(index)}}},[_vm._v("启用")]):_vm._e(),_vm._v(" "),(value.status===1)?_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.upperOrlower(index)}}},[_vm._v("停用")]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.edit(index)}}},[_vm._v("编辑")])])])])}),0)]):_c('div',{staticClass:"tooltip"},[_vm._m(3)])])]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"编辑","visible":_vm.dialogVisible,"width":"610px","center":""}},[_c('table',{staticStyle:{"text-align":"left","width":"100%"}},[_c('tr',[_c('td',[_vm._v("\n          身份名称:\n        ")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"type":"text","placeholder":"请输入内容"},model:{value:(_vm.identyName),callback:function ($$v) {_vm.identyName=$$v},expression:"identyName"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("\n          证件描述:\n        ")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"type":"text","placeholder":"请输入内容"},model:{value:(_vm.description),callback:function ($$v) {_vm.description=$$v},expression:"description"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("\n          折扣比例:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"type":"number","placeholder":"请输入折扣比例"},model:{value:(_vm.discount),callback:function ($$v) {_vm.discount=$$v},expression:"discount"}})],1)])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.cancels}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.activity}},[_vm._v("确 定")])],1)]),_vm._v(" "),_c('div',{staticClass:"fenye"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage,"page-sizes":[50,100,300,500],"page-size":_vm.limit,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.count},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("身份管理")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"list_date_head"},[_vm._v("身份管理")]),_c('span',{staticClass:"list_date_head"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"ttt",staticStyle:{"width":"99%","table-layout":"fixed"}},[_c('thead',[_c('tr',{staticClass:"bg"},[_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("序号")]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("创建时间")]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("身份名称")]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("优惠类型")]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("折扣比例")]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("操作")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"tooltip_img",attrs:{"src":__webpack_require__("9sZQ")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_IdentityManage = (esExports);
// CONCATENATED MODULE: ./src/components/IdentityManage.vue
function injectStyle (ssrContext) {
  __webpack_require__("BMfP")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1fc90893"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  IdentityManage,
  components_IdentityManage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_IdentityManage = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "BMfP":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});