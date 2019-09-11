webpackJsonp([25],{

/***/ "6v3z":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vWZk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/CashManage.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var CashManage = ({
  name: "CashManage",
  data: function data() {
    return {
      currentPage4: 1,
      count: 0,
      limit: 50,
      user: [],
      offset: 0,
      time: '',
      date_day: '',
      line_no: '',
      bus_id: '',
      cash_no: '',
      cash_no_sub: '',
      dialogVisible: false,
      id: '',
      pickerOptions: {
        disabledDate: function disabledDate(time) {
          return time.getTime() > Date.now();
        },

        shortcuts: [{
          text: '今天',
          onClick: function onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick: function onClick(picker) {
            var date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }]
      }
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
    //根据时间获取数据
    selectTime: function selectTime(date) {
      var _this = this;

      var time = this.$moment(date).format("YYYY-MM-DD");
      this.$get(this.$stors.state.ip + '/api_backend/v1/cashmanagements/?cash_date_after=' + time + '&cash_date_before=' + time).then(function (res) {
        _this.count = res.count;
        _this.user = res.results;
      });
    },
    //输入金额时精确到两位小数
    oninput: function oninput() {
      if (this.cash_no) {
        var date = this.cash_no.toFixed(2);
        this.cash_no_sub = date;
      }
    },
    //编辑
    edits: function edits(index) {
      this.dialogVisible = true;
      this.line_no = this.user[index].bus_car.route;
      this.bus_id = this.user[index].bus_car.bus_id;
      this.id = this.user[index].id;
      var money = parseFloat(this.user[index].cash_amount);
      if (money > 0) {
        this.cash_no_sub = money.toFixed(2);
        this.cash_no = money.toFixed(2);
      }
    },
    cancels: function cancels() {
      this.dialogVisible = false;
    },
    //修改金额提交
    activity: function activity() {
      var _this2 = this;

      this.$patch(this.$stors.state.ip + '/api_backend/v1/cashmanagements/' + this.id + '/', { cash_amount: this.cash_no_sub }).then(function (res) {
        _this2.$router.push({ path: '/PageJump', query: { id: 17 } });
      });
    },

    getList: function getList(limit, offset) {
      var _this3 = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/cashmanagements/?offset=' + offset + '&limit=' + limit).then(function (res) {
        _this3.count = res.count;
        _this3.user = res.results;
      });
    }
  },
  mounted: function mounted() {
    // let a=parseInt(15.00);
    // let b=number(15.056);
    // console.log(b);
    this.getList(this.limit, this.offset);
    var myDate = new Date();
    this.time = Object(dates["a" /* formatDate */])(myDate, 'yyyy-MM-dd hh:mm:ss');
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-4ca936ea","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/CashManage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"table_all_div "},[_c('div',{staticClass:"listofall"},[_c('div',{staticClass:"list_date"},[_vm._m(1),_vm._v(" "),_c('p',[_c('span',{staticClass:"list_date_span"},[_vm._v("更新时间")]),_vm._v(" "),_c('span',{staticClass:"list_date_span"},[_vm._v(_vm._s(_vm.time))])])]),_vm._v(" "),_c('div',{staticClass:"listofall_two"},[_c('div',{staticClass:"block"},[_c('span',{staticClass:"demonstration"},[_vm._v("日期选择：")]),_vm._v(" "),_c('el-date-picker',{attrs:{"align":"right","type":"date","placeholder":"选择日期","picker-options":_vm.pickerOptions},on:{"change":_vm.selectTime},model:{value:(_vm.date_day),callback:function ($$v) {_vm.date_day=$$v},expression:"date_day"}})],1)])]),_vm._v(" "),_c('div',[_vm._m(2),_vm._v(" "),_c('div',{staticStyle:{"overflow-y":"scroll","height":"600px"}},[(_vm.user.length>0)?_c('table',{staticClass:"ttt  ",staticStyle:{"table-layout":"fixed"}},[_c('tbody',_vm._l((_vm.user),function(value,index){return _c('tr',{staticClass:"tr_hover",class:{table_td:_vm.numbers(index)==='偶数'},on:{"click":function($event){return _vm.edits(index)}}},[_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(index+1))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.cash_date))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.bus_car.bus_id))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.bus_car.company_name))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.bus_car.route))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.fees))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.cash_amount))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.passenger_amount))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.update_time))])])}),0)]):_c('div',{staticClass:"tooltip"},[_vm._m(3)])])])]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"编辑","visible":_vm.dialogVisible,"width":"610px","center":""}},[_c('table',{staticStyle:{"text-align":"left","width":"100%"}},[_c('tr',[_c('td',[_vm._v("\n          线路:\n        ")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"disabled":true},model:{value:(_vm.line_no),callback:function ($$v) {_vm.line_no=$$v},expression:"line_no"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_c('span',{staticStyle:{"color":"#D32121"}},[_vm._v("*")]),_vm._v("\n          车牌号:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"type":"text","placeholder":"请输入内容","disabled":true},model:{value:(_vm.bus_id),callback:function ($$v) {_vm.bus_id=$$v},expression:"bus_id"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_c('span',{staticStyle:{"color":"#D32121"}},[_vm._v("*")]),_vm._v("\n          现金总额:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"type":"number","placeholder":"请输入内容"},on:{"input":_vm.oninput},nativeOn:{"mousewheel":function($event){$event.preventDefault();}},model:{value:(_vm.cash_no),callback:function ($$v) {_vm.cash_no=_vm._n($$v)},expression:"cash_no"}})],1)])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.cancels}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.activity}},[_vm._v("确 定")])],1)]),_vm._v(" "),_c('div',{staticClass:"fenye"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage4,"page-sizes":[50,100,300,500],"page-size":_vm.limit,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.count},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"head_div_all"},[_c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("现金管理列表")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"list_date_head"},[_vm._v("现金管理列表")]),_c('span',{staticClass:"list_date_head"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"ttt",staticStyle:{"width":"99%","table-layout":"fixed"}},[_c('thead',[_c('tr',{staticClass:"bg"},[_c('td',[_vm._v("序号")]),_vm._v(" "),_c('td',[_vm._v("日期")]),_vm._v(" "),_c('td',[_vm._v("车牌号")]),_vm._v(" "),_c('td',[_vm._v("所属公司")]),_vm._v(" "),_c('td',[_vm._v("线路")]),_vm._v(" "),_c('td',[_vm._v(" 票价金额")]),_vm._v(" "),_c('td',[_vm._v(" 现金总额")]),_vm._v(" "),_c('td',[_vm._v("预估乘客量")]),_vm._v(" "),_c('td',[_vm._v("更新日期")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"tooltip_img",attrs:{"src":__webpack_require__("9sZQ")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_CashManage = (esExports);
// CONCATENATED MODULE: ./src/components/CashManage.vue
function injectStyle (ssrContext) {
  __webpack_require__("6v3z")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4ca936ea"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  CashManage,
  components_CashManage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_CashManage = __webpack_exports__["default"] = (Component.exports);


/***/ })

});