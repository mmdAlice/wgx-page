webpackJsonp([8],{

/***/ "FkW3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/RealName.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var RealName = ({
  name: "RealName",
  data: function data() {
    return {
      statrtTime: '',
      endTime: '',
      company: [],
      dialogVisible: false,
      identyName: '',
      description: '',
      discount: '',
      start_Time: '',
      end_Time: '',
      optionsType: [{
        value: ' ',
        label: '全部'
      }],
      options: [{
        value: ' ',
        label: '全部'
      }, {
        value: '1',
        label: '未审核'
      }, {
        value: '2',
        label: '已审核'
      }, {
        value: '3',
        label: '审核到期'
      }],
      images: [],
      audit: '', //审核
      mobile: '', //电话
      identityType: '', //身份类型
      orderList: [], //订单明细
      pk: ''

    };
  },

  methods: {
    //清空
    clearDate: function clearDate() {
      this.$router.push({ path: '/PageJump', query: { id: 19 } });
    },
    numbers: function numbers(id) {
      if (id % 2 === 0) {
        return '偶数';
      } else {
        return '奇数';
      }
    },
    //公司名称
    companys: function companys(id) {
      for (var i = 0; i < this.company.length; i++) {
        if (id == this.company[i].pk) {
          return this.company[i].name;
        }
      }
    },
    //审核通过提交
    subText: function subText() {
      var start_Time = this.$moment(this.start_Time).format('YYYY-MM-DD hh:mm:ss');
      var end_Time = this.$moment(this.end_Time).format('YYYY-MM-DD hh:mm:ss');
      this.$patch(this.$store.state.ip + '/api_backend/v1/certification/' + this.pk + '/', { pk: this.pk, status: 2, begin_time: start_Time, end_time: end_Time }).then(function (res) {
        this.dialogVisible = false;
      });
    },
    //审核不允许通过提交
    noWay: function noWay() {
      var start_Time = this.$moment(this.start_Time).format('YYYY-MM-DD hh:mm:ss');
      var end_Time = this.$moment(this.end_Time).format('YYYY-MM-DD hh:mm:ss');
      this.$patch(this.$store.state.ip + '/api_backend/v1/certification/' + this.pk + '/', { pk: this.pk, status: 3, begin_time: start_Time, end_time: end_Time }).then(function (res) {
        this.dialogVisible = false;
      });
    },
    states: function states(id) {
      for (var i = 0; i < this.options.length; i++) {
        if (id == this.options[i].value) {
          return this.options[i].label;
        }
      }
    },
    //警告提示
    warning: function warning(msg) {
      this.$message({
        message: msg,
        type: 'warning'
      });
    },
    //审核
    toExamine: function toExamine(index) {
      this.pk = this.orderList[index].pk;
      this.start_Time = this.orderList[index].begin_time;
      this.end_Time = this.orderList[index].end_time;
      this.dialogVisible = true;
      this.identyName = this.orderList[index].identity_name;
      this.description = this.orderList[index].company_name;
      var list = this.orderList[index].upload_imgs.replace(/\[|]/g);
      this.images = list.split(',');
    },
    upperOrlower: function upperOrlower(index, id) {
      var _this = this;

      var state = void 0;
      var msg = void 0;
      if (id === 1) {
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
        _this.$patch(_this.$store.state.ip + '/api_backend/v1/certification/' + _this.orderList[index].pk + '/', { is_enabled: state }).then(function (res) {
          that.$router.push({ path: '/PageJump', query: { id: 19 } });
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
    //取消
    cance: function cance() {
      this.dialogVisible = false;
    },
    //筛选
    screen: function screen() {
      var that = this;
      this.$get(this.$stors.state.ip + '/api_backend/v1/certification/?mobile=' + this.mobile + '&status=' + this.audit + '&identity=' + this.identityType + '&offset=0&limit=9999').then(function (res) {
        that.orderList = res.results;
      });
    },
    create_time: function create_time(time) {
      return this.$moment(time).format('YYYY-MM-DD');
    },
    status: function status(_status) {
      for (var i = 0; i < this.options.length; i++) {
        if (_status == this.options[i].value) {
          return this.options[i].label;
        }
      }
    },
    statrtTimes: function statrtTimes(time) {
      return this.$moment(time).format('YYYY-MM-DD');
    },
    endTimes: function endTimes(time) {
      return this.$moment(time).format('YYYY-MM-DD');
    },
    //获取data信息
    getList: function getList() {
      var that = this;
      this.$get(this.$stors.state.ip + '/api_backend/v1/identity/').then(function (res) {
        for (var i = 0; i < res.results.length; i++) {
          that.optionsType.push({
            value: res.results[i].id,
            label: res.results[i].name
          });
        }
      });
    }
  },
  mounted: function mounted() {
    this.getList();
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-a92786ae","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/RealName.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"manager"},[_c('div',{staticClass:"manager_2"},[_c('ul',{staticClass:"ul_text"},[_vm._m(1),_vm._v(" "),_c('li',{staticClass:"right_text"},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.audit),callback:function ($$v) {_vm.audit=$$v},expression:"audit"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('li',{staticClass:"right_text"},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.identityType),callback:function ($$v) {_vm.identityType=$$v},expression:"identityType"}},_vm._l((_vm.optionsType),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('li',{staticClass:"left_text"}),_vm._v(" "),_c('li',{staticClass:"right_text"},[_c('el-button',{attrs:{"type":"primary","plain":""},on:{"click":_vm.screen}},[_vm._v("筛选")]),_vm._v(" "),_c('el-button',{attrs:{"type":"info","plain":""},on:{"click":_vm.clearDate}},[_vm._v("清空筛选条件")])],1)])])]),_vm._v(" "),_c('div',{staticClass:"manager"},[_c('div',{staticClass:"sumList2"},[_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('div',{staticStyle:{"width":"100%","overflow-y":"scroll","height":"400px"}},[_c('table',{staticStyle:{"width":"100%"}},_vm._l((_vm.orderList),function(value,index){return _c('tr',{staticClass:"table_text",class:{table_td:_vm.numbers(index)==='偶数'}},[_c('td',{domProps:{"textContent":_vm._s(index+1)}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(value.user_mobile)}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(_vm.create_time(value.date_of_approval))}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(value.user_balance)}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(value.identity_name)}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(_vm.status(value.status))}}),_vm._v(" "),_c('td',[_c('span',{domProps:{"textContent":_vm._s(_vm.statrtTimes(value.begin_time))}}),_vm._v("/\n              "),_c('span',{domProps:{"textContent":_vm._s(_vm.endTimes(value.end_time))}})]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_c('div',[(value.is_enabled)?_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.upperOrlower(index,1)}}},[_vm._v("停用")]):_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.upperOrlower(index,2)}}},[_vm._v("启用")]),_vm._v(" "),_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.toExamine(index)}}},[_vm._v("审核")])])])])}),0)])])]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"审核","visible":_vm.dialogVisible,"width":"729px","center":""}},[_c('table',{staticStyle:{"text-align":"left","width":"100%"}},[_c('tr',[_c('td',[_vm._v("\n          身份类型:\n        ")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"type":"text","placeholder":"请输入内容","disabled":true},model:{value:(_vm.identyName),callback:function ($$v) {_vm.identyName=$$v},expression:"identyName"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("\n          公交公司:\n        ")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"type":"text","placeholder":"请输入内容","disabled":true},model:{value:(_vm.description),callback:function ($$v) {_vm.description=$$v},expression:"description"}})],1)]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"100px"}},[_vm._v("\n          资料:")]),_vm._v(" "),_c('td',_vm._l((_vm.images),function(value,index){return _c('img',{staticStyle:{"width":"180px","height":"180px"},attrs:{"src":value}})}),0)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("\n          有效时间:")]),_vm._v(" "),_c('td',[_c('el-date-picker',{attrs:{"type":"date","placeholder":"选择日期"},model:{value:(_vm.start_Time),callback:function ($$v) {_vm.start_Time=$$v},expression:"start_Time"}}),_vm._v(" "),_c('span',[_vm._v("至")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"date","placeholder":"选择日期"},model:{value:(_vm.end_Time),callback:function ($$v) {_vm.end_Time=$$v},expression:"end_Time"}})],1)])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.cance}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{on:{"click":_vm.noWay}},[_vm._v("不允许")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.subText}},[_vm._v("允 许")])],1)])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"head_div_all"},[_c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("实名认证")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"left_text"},[_c('span',{staticStyle:{"margin-left":"20px"}},[_vm._v("身份审核:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"left_text"},[_c('span',{staticStyle:{"margin-left":"20px"}},[_vm._v("身份类型:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header"},[_c('div',[_vm._v("实名列表")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticStyle:{"width":"99%","margin-top":"10px"}},[_c('tr',{staticClass:"table_text",staticStyle:{"background":"rgb(245,247,250)"}},[_c('td',[_vm._v("序号")]),_vm._v(" "),_c('td',[_vm._v("电话")]),_vm._v(" "),_c('td',[_vm._v("注册时间")]),_vm._v(" "),_c('td',[_vm._v("余额")]),_vm._v(" "),_c('td',[_vm._v("身份类型")]),_vm._v(" "),_c('td',[_vm._v("身份审核")]),_vm._v(" "),_c('td',[_vm._v("有效时间")]),_vm._v(" "),_c('td',[_vm._v("操作")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_RealName = (esExports);
// CONCATENATED MODULE: ./src/components/RealName.vue
function injectStyle (ssrContext) {
  __webpack_require__("M0pH")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a92786ae"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  RealName,
  components_RealName,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_RealName = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "M0pH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});