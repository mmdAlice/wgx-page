webpackJsonp([19],{

/***/ "2hRQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/Feedbacks.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Feedbacks = ({
  name: "userManage",
  data: function data() {
    return {
      feedId: '', //反馈id
      content: '', //问题描述
      startTime: '', //创建时间
      endTime: '', //结束时间
      remarks: '', //处理反馈的内容
      isOrno: 0, //判断
      list: [],
      input: '',
      dialogVisible1: false,
      idd: '',
      msg: "",
      currentPage4: 1,
      count: 0,
      limit: 50,
      offset: 0,
      time: '', //刷新时间

      //时间选择今天之前禁用
      pickerOptions0: {
        disabledDate: function disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      }
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
      if (val === 0) {
        this.offset = 0;
      }
      this.getList(this.limit, this.offset);
    },


    //点击解决弹出确认框
    del: function del(id) {
      for (var i = 0; i < this.list.length; i++) {
        if (id === this.list[i].id) {
          this.feedId = this.list[i].id;
          this.content = this.list[i].content;
          this.endTime = this.list[i].end_time;
          if (this.endTime === '') {
            this.isOrno = 0;
          } else {
            this.isOrno = 1;
          }
          this.startTime = this.list[i].start_time;
          this.remarks = this.list[i].remarks;
        }
      }
      this.idd = id;
      this.dialogVisible1 = true;
    },
    //已解决
    yes: function yes(id) {
      var _this = this;

      if (this.remarks === '') {
        return;
      }
      this.$patch(this.$stors.state.ip + '/api_backend/v1/feedbacks/' + this.idd + '/', { remarks: this.remarks }).then(function (response) {
        _this.dialogVisible1 = false;
        _this.getList();
        var myDate = new Date();
        _this.time = Object(dates["a" /* formatDate */])(myDate, 'yyyy-MM-dd hh:mm:ss');
      }).catch(function (error) {});
    },
    //未解决
    noYes: function noYes() {
      this.dialogVisible1 = false;
      this.msg = "";
    },
    //读取这一条信息
    // read:function () {
    //   this.$get(this.$stors.state.ip+'/api_backend/v1/feedbacks/'+this.idd+'/')
    //     .then((res) => {
    //       this.msg=res
    //     })
    // },
    numbers: function numbers(id) {
      if (id % 2 === 0) {
        return '偶数';
      } else {
        return '奇数';
      }
    },
    getList: function getList(limit, offset) {
      var _this2 = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/feedbacks/?offset=' + offset + '&limit=' + limit).then(function (res) {
        for (var i = 0; i < res.results.length; i++) {
          if (res.results[i].end_time === null) {
            res.results[i].end_time = '';
          } else {
            res.results[i].end_time = _this2.$moment(res.results[i].end_time).format("YYYY-MM-DD HH:mm:ss");
          }
          res.results[i].start_time = _this2.$moment(res.results[i].start_time).format("YYYY-MM-DD HH:mm:ss");
        }
        _this2.list = res.results;
        _this2.count = res.count;
      });
    }

  },
  mounted: function mounted() {
    var myDate = new Date();
    this.time = Object(dates["a" /* formatDate */])(myDate, 'yyyy-MM-dd hh:mm:ss');
    this.getList(this.limit, this.offset);
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-56ab8028","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/Feedbacks.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"table_all_div"},[_c('div',{staticClass:"listofall"},[_c('div',{staticClass:"list_date"},[_vm._m(1),_vm._v(" "),_c('p',[_c('span',{staticClass:"list_date_span"},[_vm._v("更新时间")]),_vm._v(" "),_c('span',{staticClass:"list_date_span"},[_vm._v(_vm._s(_vm.time))])])])]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"问题解决","visible":_vm.dialogVisible1,"width":"610px","center":""}},[_c('table',{staticStyle:{"text-align":"left","width":"100%"},attrs:{"msg":_vm.msg}},[_c('tr',[_c('td',[_vm._v("反馈ID:")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.feedId))])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("问题描述:")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.content))])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("创建时间:")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.startTime))])]),_vm._v(" "),_c('tr'),_c('tr',[_c('td',[_vm._v("状态:")]),_vm._v(" "),_c('td',{directives:[{name:"show",rawName:"v-show",value:(_vm.isOrno === 0),expression:"isOrno === 0"}]},[_vm._v("未解决")]),_vm._v(" "),_c('td',{directives:[{name:"show",rawName:"v-show",value:(_vm.isOrno === 1),expression:"isOrno === 1"}]},[_vm._v("已解决")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("备注:")]),_vm._v(" "),_c('td',[_c('el-input',{model:{value:(_vm.remarks),callback:function ($$v) {_vm.remarks=$$v},expression:"remarks"}})],1)])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.isOrno === 0),expression:"isOrno === 0"}],attrs:{"type":"primary"},on:{"click":function($event){return _vm.yes(_vm.idd)}}},[_vm._v("确定")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.dialogVisible1 = false}}},[_vm._v("关闭")])],1)]),_vm._v(" "),_c('div',[_vm._m(2),_vm._v(" "),_c('div',{staticStyle:{"overflow-y":"scroll","height":"600px"}},[(_vm.list.length>0)?_c('table',{staticClass:"ttt",staticStyle:{"table-layout":"fixed"}},[_c('tbody',_vm._l((_vm.list),function(value,index){return _c('tr',{staticClass:"tr_hover cursor",class:{table_td:_vm.numbers(index)==='偶数'},on:{"click":function($event){return _vm.del(value.id)}}},[_c('td',[_vm._v(_vm._s(value.user.mobile))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.content)+" ")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.start_time))]),_vm._v(" "),_c('td',[_c('span',{directives:[{name:"show",rawName:"v-show",value:(value.end_time ===''),expression:"value.end_time ===''"}],staticStyle:{"border-radius":"50%","width":"10px","height":"10px","background-color":"#D32121","display":"inline-block"}}),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(value.end_time !==''),expression:"value.end_time !==''"}],staticStyle:{"border-radius":"50%","width":"10px","height":"10px","background-color":"#7ED321","display":"inline-block"}}),_vm._v("\n              "+_vm._s(value.end_time === ''?"未解决":"已解决")+"\n            ")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.end_time))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.remarks))])])}),0)]):_c('div',{staticClass:"tooltip"},[_vm._m(3)])])])],1),_vm._v(" "),_c('div',{staticClass:"fenye"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage4,"page-sizes":[50,100,300,500],"page-size":_vm.limit,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.count},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"head_div_all"},[_c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("用户反馈列表")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"list_date_head"},[_vm._v("用户反馈列表")]),_c('span',{staticClass:"list_date_head"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"ttt",staticStyle:{"width":"99%","table-layout":"fixed"}},[_c('thead',[_c('tr',{staticClass:"bg"},[_c('td',[_vm._v("注册电话")]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v("描述问题")]),_vm._v(" "),_c('td',[_vm._v("创建时间")]),_vm._v(" "),_c('td',[_vm._v("状态")]),_vm._v(" "),_c('td',[_vm._v("解决时间")]),_vm._v(" "),_c('td',[_vm._v("备注")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"tooltip_img",attrs:{"src":__webpack_require__("9sZQ")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Feedbacks = (esExports);
// CONCATENATED MODULE: ./src/components/Feedbacks.vue
function injectStyle (ssrContext) {
  __webpack_require__("u3mF")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-56ab8028"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Feedbacks,
  components_Feedbacks,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Feedbacks = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "u3mF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});