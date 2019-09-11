webpackJsonp([20],{

/***/ "NQ9k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/LineList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var LineList = ({
  name: "LineList",
  data: function data() {
    return {
      currentPage4: 1,
      count: 0,
      limit: 50,
      lineList: [],
      offset: 0,
      time: '',
      dialogVisible: false,
      lineName: '', //线路名称
      moneys: '', //预收金额
      level_name: '', //判断是否是内部员工是的话才能选择公司，否自不能选择公司
      start_time: '',
      end_time: '',
      status: '', //状态
      options: [{
        id: 1,
        name: '启用'
      }, {
        id: 2,
        name: '禁用'
      }],
      lineId: '', //线路id
      editOrSub: 0 //编辑或者添加，默认时添加
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
    //开始时间转换显示
    startTime: function startTime(time) {
      return this.$moment(time).format("HH:mm:ss");
    },
    //结束时间转换显示
    endTime: function endTime(time) {
      return this.$moment(time).format("HH:mm:ss");
    },
    //编辑
    edit: function edit(index) {
      this.editOrSub = 1;
      this.dialogVisible = true;
      this.lineId = this.lineList[index].id;
      this.lineName = this.lineList[index].line_no;
      this.moneys = this.lineList[index].fees;
      this.start_time = this.lineList[index].start_time;
      this.end_time = this.lineList[index].end_time;
      this.status = this.lineList[index].status;
    },
    //添加线路
    addLine: function addLine() {
      this.editOrSub = 0;
      this.dialogVisible = true;
    },
    //取消
    cancels: function cancels() {
      this.dialogVisible = false;
      this.lineId = '';
      this.lineName = '';
      this.moneys = '';
      this.start_time = '';
      this.end_time = '';
      this.status = '';
    },
    //编辑、新增线路的提交
    addActivity: function addActivity() {
      var _this = this;

      if (this.lineName === '') {
        return this.warning('请输入线路名称');
      } else if (this.moneys === '') {
        return this.warning('请输入预收金额');
      } else if (this.start_time === '') {
        return this.warning('请选择开始时间');
      } else if (this.end_time === '') {
        return this.warning('请选择结束时间');
      } else if (this.status === '') {
        return this.warning('请选择线路状态');
      }
      if (this.editOrSub === 0) {
        this.$post(this.$stors.state.ip + '/api_backend/v1/busroutes/', {
          start_time: this.start_time, end_time: this.end_time, fees: this.moneys,
          line_no: this.lineName, status: this.status
        }).then(function (res) {
          _this.$router.push({ path: '/PageJump', query: { id: 12.1 } });
        });
      } else {
        this.$patch(this.$store.state.ip + '/api_backend/v1/busroutes/' + this.lineId + '/', { start_time: this.start_time, end_time: this.end_time, fees: this.moneys,
          line_no: this.lineName, status: this.status
        }).then(function (res) {
          _this.$router.push({ path: '/PageJump', query: { id: 12.1 } });
        });
      }
    },
    startOrProhibit: function startOrProhibit(index) {
      var _this2 = this;

      var status = void 0;
      var msg = void 0;
      var that = this;
      if (this.lineList[index].status === 1) {
        status = 2;
        msg = '禁用';
      } else {
        status = 1;
        msg = '启用';
      }
      this.$confirm('此操作将' + msg + '该线路, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this2.$patch(_this2.$store.state.ip + '/api_backend/v1/busroutes/' + _this2.lineList[index].id + '/', { status: status }).then(function (res) {
          that.$message({
            type: 'success',
            message: msg + '成功!'
          });
          that.$router.push({ path: '/PageJump', query: { id: 12.1 } });
        });
      }).catch(function () {
        _this2.$message({
          type: 'info',
          message: '已取消' + msg
        });
      });
    },
    //获取线路列表
    getList: function getList(limit, offset) {
      var _this3 = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/busroutes/?offset=' + offset + '&limit=' + limit).then(function (res) {
        _this3.count = res.count;
        _this3.lineList = res.results;
      });
    }

  },
  mounted: function mounted() {
    this.getList(this.limit, this.offset);
    this.level_name = localStorage.getItem('level_name');
    var myDate = new Date();
    this.time = Object(dates["a" /* formatDate */])(myDate, 'yyyy-MM-dd hh:mm:ss');
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-565dba82","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/LineList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_c('div',{staticClass:"head_div_all"},[_vm._m(0),_vm._v(" "),(_vm.level_name==='PC用户')?_c('div',{staticClass:"newText",on:{"click":_vm.addLine}},[_c('i',{staticClass:"el-icon-circle-plus",staticStyle:{"width":"25px","height":"25px","line-height":"25px"}}),_vm._v(" "),_c('p',[_vm._v("添加线路")])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"all_center"},[_c('el-dialog',{attrs:{"title":"新增线路","visible":_vm.dialogVisible,"width":"610px","height":"500px","center":""}},[_c('table',{staticStyle:{"width":"100%"}},[_c('tr',[_c('td',[_vm._v("线路名称:")]),_vm._v(" "),_c('td',[_c('el-input',{model:{value:(_vm.lineName),callback:function ($$v) {_vm.lineName=$$v},expression:"lineName"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("预收金额:")]),_vm._v(" "),_c('td',[_c('el-input',{model:{value:(_vm.moneys),callback:function ($$v) {_vm.moneys=$$v},expression:"moneys"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("首发时间:")]),_vm._v(" "),_c('td',[_c('el-time-picker',{attrs:{"picker-options":{selectableRange: '00:00:00 - 23:59:59'},"placeholder":"首发时间"},model:{value:(_vm.start_time),callback:function ($$v) {_vm.start_time=$$v},expression:"start_time"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("末班时间:")]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"left"}},[_c('el-time-picker',{attrs:{"picker-options":{selectableRange: '00:00:00 - 23:59:59'},"placeholder":"首发时间"},model:{value:(_vm.end_time),callback:function ($$v) {_vm.end_time=$$v},expression:"end_time"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("状态:")]),_vm._v(" "),_c('td',[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.status),callback:function ($$v) {_vm.status=$$v},expression:"status"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1)])]),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"10px","margin-bottom":"30px","display":"flex","justify-content":"center"}},[_c('el-button',{on:{"click":_vm.cancels}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{staticStyle:{"margin-left":"80px"},on:{"click":_vm.addActivity}},[_vm._v("提交")])],1)])],1),_vm._v(" "),_c('div',{staticClass:"table_all_div "},[_c('div',{staticClass:"listofall"},[_c('div',{staticClass:"list_date"},[_vm._m(1),_vm._v(" "),_c('p',[_c('span',{staticClass:"list_date_span"},[_vm._v("更新时间")]),_vm._v(" "),_c('span',{staticClass:"list_date_span"},[_vm._v(_vm._s(_vm.time))])])]),_vm._v(" "),_c('div',{staticClass:"listofall_two"},[_c('el-input',{staticClass:"listofall_two_input",attrs:{"autocomplete":"off","placeholder":"输入线路"}}),_vm._v(" "),_c('img',{staticClass:"listofall_two_img",attrs:{"src":__webpack_require__("v+Vh")}})],1)]),_vm._v(" "),_c('div',[_vm._m(2),_vm._v(" "),_c('div',{staticStyle:{"overflow-y":"scroll","height":"600px"}},[(_vm.lineList.length>0)?_c('table',{staticClass:"table_text  ",staticStyle:{"table-layout":"fixed"}},[_c('tbody',_vm._l((_vm.lineList),function(value,index){return _c('tr',{staticClass:"tr_hover",class:{table_td:_vm.numbers(index)==='偶数'}},[_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(index+1))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.line_no))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.fees))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"},domProps:{"textContent":_vm._s(_vm.startTime(value.start_time))}}),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"},domProps:{"textContent":_vm._s(_vm.endTime(value.end_time))}}),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.company_name))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[(_vm.level_name==='PC用户')?_c('div',[_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.edit(index)}}},[_vm._v("编辑")]),_vm._v(" "),(value.status===1)?_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.startOrProhibit(index)}}},[_vm._v("禁用")]):_vm._e(),_vm._v(" "),(value.status===2)?_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.startOrProhibit(index)}}},[_vm._v("启用")]):_vm._e()]):_vm._e()])])}),0)]):_c('div',{staticClass:"tooltip"},[_vm._m(3)])])])]),_vm._v(" "),_c('div',{staticClass:"fenye"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage4,"page-sizes":[50,100,300,500],"page-size":_vm.limit,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.count},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("线路管理列表")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"list_date_head"},[_vm._v("线路管理列表")]),_c('span',{staticClass:"list_date_head"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"table_text",staticStyle:{"width":"99%","table-layout":"fixed"}},[_c('thead',[_c('tr',{staticClass:"bg"},[_c('td',[_vm._v("序号")]),_vm._v(" "),_c('td',[_vm._v("线路名称")]),_vm._v(" "),_c('td',[_vm._v("预收金额")]),_vm._v(" "),_c('td',[_vm._v("首发时间")]),_vm._v(" "),_c('td',[_vm._v("末班时间")]),_vm._v(" "),_c('td',[_vm._v(" 所属公司")]),_vm._v(" "),_c('td',[_vm._v(" 操作")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"tooltip_img",attrs:{"src":__webpack_require__("9sZQ")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_LineList = (esExports);
// CONCATENATED MODULE: ./src/components/LineList.vue
function injectStyle (ssrContext) {
  __webpack_require__("aOtm")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-565dba82"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  LineList,
  components_LineList,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_LineList = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "aOtm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});