webpackJsonp([36],{

/***/ "qhKo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/NoticeManage.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var NoticeManage = ({
  name: "NoticeManage",
  data: function data() {
    return {
      //分页
      currentPage4: 1,
      time: '',
      // 列表渲染
      msg: [],
      //时间选择今天之前禁用
      pickerOptions0: {
        disabledDate: function disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      startTime: '',
      dialogVisible: false,
      content: '',
      name: '',
      count: 0, //总条数
      limit: 50,
      offset: 0,
      editsOrNew: 0, //编辑还是新增默认时新增
      noticeId: '' //公告id
    };
  },

  methods: {
    //每页展示多少条
    handleSizeChange: function handleSizeChange(val) {
      this.limit = val;
      this.getList(this.limit, this.offset);
    },

    //第几页
    handleCurrentChange: function handleCurrentChange(val) {
      this.offset = val * this.limit - this.limit;
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
    createTime: function createTime(time) {
      return this.$moment(time).format("YYYY-MM-DD HH:mm:ss");
    },
    //警告提示
    warning: function warning(msg) {
      this.$message({
        message: msg,
        type: 'warning'
      });
    },
    //删除公告
    delets: function delets(index) {
      var _this = this;

      var that = this;
      this.$confirm('此操作将删除该条广告, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this.$delete(_this.$store.state.ip + '/api_backend/v1/notices/' + _this.msg[index].id + '/').then(function (res) {
          that.msg.splice(index, 1);
        });
        _this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(function () {
        _this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    //取消
    caches: function caches() {
      this.dialogVisible = false;
      this.name = '';
      this.content = '';
      this.startTime = '';
    },
    //编辑
    edits: function edits(index) {
      this.editsOrNew = 1;
      this.noticeId = this.msg[index].id;
      this.dialogVisible = true;
      this.name = this.msg[index].name;
      this.content = this.msg[index].content;
      this.startTime = this.msg[index].start_time;
    },
    //上线或者下线
    upperOrlower: function upperOrlower(index) {
      var _this2 = this;

      var state = void 0;
      var msg = void 0;
      if (this.msg[index].is_active) {
        state = false;
        msg = '下线';
      } else {
        state = true;
        msg = '上线';
      }
      var that = this;
      this.$confirm('此操作将' + msg + '该条广告, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this2.$patch(_this2.$store.state.ip + '/api_backend/v1/notices/' + _this2.msg[index].id + '/', { is_active: state }).then(function (res) {
          that.$router.push({ path: '/PageJump', query: { id: 5 } });
        });
        _this2.$message({
          type: 'success',
          message: msg + '成功!'
        });
      }).catch(function () {
        _this2.$message({
          type: 'info',
          message: '已取消' + msg
        });
      });
    },

    //点击新建
    newActity: function newActity() {
      this.editsOrNew = 0;
      this.dialogVisible = true;
    },
    //确认新建
    newNotice: function newNotice() {
      var _this3 = this;

      if (this.name === "" || this.content === "" || this.startTime === "") {
        return this.warning('请输入公告名称');
      } else if (this.content === "") {
        return this.warning('请输入公告内容');
      } else if (this.startTime === "") {
        return this.warning('请选择公告时间');
      }
      var time = this.$moment(this.startTime).format("YYYY-MM-DD HH:mm:ss");
      if (this.editsOrNew === 0) {
        this.$post(this.$stors.state.ip + '/api_backend/v1/notices/', { name: this.name, content: this.content, start_time: time }).then(function (res) {
          _this3.$router.push({ path: '/PageJump', query: { id: 7 } });
        });
      } else {
        this.$patch(this.$stors.state.ip + '/api_backend/v1/notices/' + this.noticeId + '/', { name: this.name, content: this.content, start_time: time }).then(function (res) {
          _this3.$router.push({ path: '/PageJump', query: { id: 7 } });
        });
      }
    },
    //取消新建
    noNotice: function noNotice() {
      this.dialogVisible = false;
      this.name = "";
      this.content = "";
      this.startTime = "";
    },
    //加载列表
    getList: function getList(limit, offset) {
      var _this4 = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/notices/?offset=' + offset + '&limit=' + limit).then(function (response) {
        for (var i = 0; i < response.results.length; i++) {
          if (response.results[i].time === null) {
            response.results[i].time = '';
          } else {
            response.results[i].time = _this4.$moment(response.results[i].time).format("YYYY-MM-DD HH:mm:ss");
          }
        }
        _this4.count = response.count;
        _this4.msg = response.results;
      });
    }
  },
  mounted: function mounted() {
    this.getList(this.limit, this.offset);
    var myDate = new Date();
    this.time = Object(dates["a" /* formatDate */])(myDate, 'yyyy-MM-dd hh:mm:ss');
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-099579f6","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/NoticeManage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_c('div',{staticClass:"head_div_all"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"newText",on:{"click":_vm.newActity}},[_c('i',{staticClass:"el-icon-circle-plus",staticStyle:{"width":"25px","height":"25px","line-height":"25px"}}),_vm._v(" "),_c('p',[_vm._v("新建公告")])])]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"新增公告","visible":_vm.dialogVisible,"width":"610px","center":""}},[_c('table',{staticStyle:{"text-align":"left","width":"100%"}},[_c('tr',[_c('td',[_vm._v("公告名称:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"只能输入30个字","maxlength":"64"},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("开始时间:")]),_vm._v(" "),_c('td',[_c('el-date-picker',{attrs:{"type":"datetime","picker-options":_vm.pickerOptions0,"placeholder":"选择日期时间"},model:{value:(_vm.startTime),callback:function ($$v) {_vm.startTime=$$v},expression:"startTime"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("公告内容:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"type":"textarea","placeholder":"只能输入200个字","maxlength":"200"},model:{value:(_vm.content),callback:function ($$v) {_vm.content=$$v},expression:"content"}})],1)])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.caches}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.newNotice}},[_vm._v("确 定")])],1)]),_vm._v(" "),_c('div',{staticClass:"table_all_div"},[_c('div',{staticClass:"listofall"},[_c('div',{staticClass:"list_date"},[_vm._m(1),_vm._v(" "),_c('p',[_c('span',{staticClass:"list_date_span"},[_vm._v("更新时间")]),_vm._v(" "),_c('span',{staticClass:"list_date_span"},[_vm._v(_vm._s(_vm.time))])])])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticStyle:{"overflow-y":"scroll","height":"600px","table-layout":"fixed"}},[(_vm.msg.length>0)?_c('table',{staticClass:"ttt"},[_c('tbody',_vm._l((_vm.msg),function(value,index){return _c('tr',{staticClass:"tr_hover",class:{table_td:_vm.numbers(index)==='偶数'}},[_c('td',[_vm._v(_vm._s(index+1))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.name))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word","word-break":"break-all","cursor":"pointer"}},[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":value.content,"placement":"top-start"}},[_c('span',[_vm._v(_vm._s(value.content))])])],1),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(_vm.createTime(value.start_time))}}),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.priority))]),_vm._v(" "),_c('td',[(value.is_active===false)?_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.upperOrlower(index)}}},[_vm._v("上线")]):_vm._e(),_vm._v(" "),(value.is_active)?_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.upperOrlower(index)}}},[_vm._v("下线")]):_vm._e()]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_c('div',[_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.edits(index)}}},[_vm._v("编辑")]),_vm._v(" "),_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.delets(index)}}},[_vm._v("删除")])])])])}),0)]):_c('div',{staticClass:"tooltip"},[_vm._m(3)])])]),_vm._v(" "),_c('div',{staticClass:"fenye"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage4,"page-sizes":[50,100,300,500],"page-size":_vm.limit,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.count},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("公告管理列表")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"list_date_head"},[_vm._v("公告管理列表")]),_c('span',{staticClass:"list_date_head"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"ttt",staticStyle:{"width":"99%"}},[_c('thead',[_c('tr',{staticClass:"bg"},[_c('td',[_vm._v("序号")]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v("公告标题")]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v("公告内容")]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v("开始时间")]),_vm._v(" "),_c('td',[_vm._v("优先级")]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v("状态")]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v("操作")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"tooltip_img",attrs:{"src":__webpack_require__("9sZQ")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_NoticeManage = (esExports);
// CONCATENATED MODULE: ./src/components/NoticeManage.vue
function injectStyle (ssrContext) {
  __webpack_require__("zpIn")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-099579f6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  NoticeManage,
  components_NoticeManage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_NoticeManage = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "zpIn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});