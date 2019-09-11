webpackJsonp([7],{

/***/ "WecC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/BusManage.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var BusManage = ({
  // inject:['reload'],
  name: "BusManage",
  data: function data() {
    return {
      time: "", //当前时间
      limit: 50,
      offset: 0,
      count: 0,
      companyDate: [],
      currentPage: 1,
      bus_id: '',
      dialogVisible: false,
      licensePlate: '', //车牌号
      companies: '', //公司
      brand: '', //品牌
      mold: '', //类型
      models: '', //型号
      engine: '', //引擎
      chassis: '', //底盘
      loads: '', //载重
      busload: '', //载客量
      produceDate: '', //生产日期
      buyDate: '', //购买日期
      companyList: [], //公司列表
      status: '', //状态
      editId: '', //编辑的id
      level_name: '', //判断是否是内部员工是的话才能选择公司，否自不能选择公司
      editOrAdd: true, //编辑还是添加
      types: [{
        id: 1,
        name: '运营中'
      }, {
        id: 2,
        name: '停运中'
      }]
    };
  },

  methods: {

    //每页多少条
    handleSizeChange: function handleSizeChange(val) {
      this.limit = val;
      this.getCompanyList(this.limit, this.offset);
    },

    //第几页
    handleCurrentChange: function handleCurrentChange(val) {
      this.offset = this.limit * val - this.limit;
      if (val === 1) {
        this.offset = 0;
      }
      this.getCompanyList(this.limit, this.offset);
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
    //添加公交
    addBus: function addBus() {
      this.editOrAdd = true;
      this.dialogVisible = true;
    },
    //编辑
    edit: function edit(id) {
      this.editOrAdd = false;
      this.editId = this.companyDate[id].id;
      this.dialogVisible = true;
      this.licensePlate = this.companyDate[id].bus_id;
      this.companies = this.companyDate[id].company;
      this.brand = this.companyDate[id].brand;
      this.mold = this.companyDate[id].type;
      this.models = this.companyDate[id].model_number;
      this.engine = this.companyDate[id].engine;
      this.chassis = this.companyDate[id].chassis;
      this.loads = this.companyDate[id].load;
      this.busload = this.companyDate[id].bus_load;
      this.produceDate = this.companyDate[id].product_date;
      this.buyDate = this.companyDate[id].buy_date;
      this.status = this.companyDate[id].status;
      this.produceDate = this.companyDate[id].product_date;
    },
    //取消
    cancels: function cancels() {
      this.dialogVisible = false;
      this.editId = '';
      this.licensePlate = '';
      this.companies = '';
      this.brand = '';
      this.mold = '';
      this.models = '';
      this.engine = '';
      this.chassis = '';
      this.loads = '';
      this.busload = '';
      this.produceDate = '';
      this.buyDate = '';
      this.status = '';
      this.produceDate = '';
    },
    //添加，编辑车辆的提交
    submission: function submission() {
      var _this = this;

      if (this.editOrAdd) {
        var produceDate = this.$moment(this.produceDate).format("YYYY-MM-DD");
        var buyDate = this.$moment(this.buyDate).format("YYYY-MM-DD");
        this.$post(this.$stors.state.ip + '/api_backend/v1/buscars/', { type: this.mold, bus_load: this.busload, model_number: this.models,
          brand: this.brand, product_date: produceDate, company: this.companies, engine: this.engine, chassis: this.chassis,
          load: this.loads, bus_id: this.licensePlate, buy_date: buyDate, status: this.status }).then(function (res) {
          _this.$router.push({ path: '/PageJump', query: { id: 13 } });
        });
      } else {
        var _produceDate = this.$moment(this.produceDate).format("YYYY-MM-DD");
        var _buyDate = this.$moment(this.buyDate).format("YYYY-MM-DD");
        this.$patch(this.$stors.state.ip + '/api_backend/v1/buscars/' + this.editId + '/', { type: this.mold, bus_load: this.busload, model_number: this.models,
          brand: this.brand, product_date: _produceDate, company: this.companies, engine: this.engine, chassis: this.chassis,
          load: this.loads, bus_id: this.licensePlate, buy_date: _buyDate, status: this.status }).then(function (res) {
          _this.$router.push({ path: '/PageJump', query: { id: 13 } });
        });
      }
    },
    //绑定或者解绑线路
    bindings: function bindings(index, id) {
      var _this2 = this;

      var that = this;
      if (id === 1) {
        this.$router.push({ path: '/Index/LineBinding', query: { busId: this.companyDate[index].id, companyId: this.companyDate[index].company } });
      } else {
        this.$confirm('此操作将解绑该线路, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
          _this2.$delete(_this2.$store.state.ip + '/api_backend/v1/carrouterelations/' + _this2.companyDate[index].relation_id + '/').then(function (res) {
            that.$router.push({ path: '/PageJump', query: { id: 13 } });
          });
          _this2.$message({
            type: 'success',
            message: '解绑成功!'
          });
        }).catch(function () {
          _this2.$message({
            type: 'info',
            message: '已取消解绑'
          });
        });
      }
    },
    //获取公司列表
    getCompanyList: function getCompanyList(limit, offset) {
      var _this3 = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/buscars/?offset=' + offset + '&limit=' + limit + '&bus_id=' + this.bus_id).then(function (res) {
        _this3.count = res.count;
        _this3.companyDate = res.results;
      });
      if (this.level_name === '内部员工') {
        this.$get(this.$stors.state.ip + '/api_backend/v1/companies/?offset=0&limit=9999').then(function (res) {
          _this3.companyList = res.results;
        });
      }
    }

  },
  mounted: function mounted() {
    this.companies = localStorage.getItem('company_id');
    this.level_name = localStorage.getItem('level_name');
    var myDate = new Date();
    this.time = Object(dates["a" /* formatDate */])(myDate, 'yyyy-MM-dd hh:mm:ss');
    this.getCompanyList(this.limit, this.offset);
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-ad981f6e","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/BusManage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_c('div',{staticClass:"head_div_all"},[_vm._m(0),_vm._v(" "),(_vm.level_name==='PC用户')?_c('div',{staticClass:"newText",on:{"click":_vm.addBus}},[_c('i',{staticClass:"el-icon-circle-plus",staticStyle:{"width":"25px","height":"25px","line-height":"25px"}}),_vm._v(" "),_c('p',[_vm._v("添加车辆")])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"table_all_div"},[_c('div',{staticClass:"listofall"},[_c('div',{staticClass:"list_date"},[_vm._m(1),_vm._v(" "),_c('p',[_c('span',{staticClass:"list_date_span"},[_vm._v("更新时间")]),_vm._v(" "),_c('span',{staticClass:"list_date_span"},[_vm._v(_vm._s(_vm.time))])])]),_vm._v(" "),_c('div',{staticClass:"listofall_two"},[_c('el-input',{staticClass:"listofall_two_input",attrs:{"autocomplete":"off","placeholder":"输入车牌号"},model:{value:(_vm.bus_id),callback:function ($$v) {_vm.bus_id=$$v},expression:"bus_id"}}),_vm._v(" "),_c('img',{staticClass:"listofall_two_img",attrs:{"src":__webpack_require__("v+Vh")},on:{"click":_vm.getCompanyList}})],1)]),_vm._v(" "),_c('table',{staticClass:"ttt",staticStyle:{"width":"99%","table-layout":"fixed"}},[_c('thead',[_c('tr',{staticClass:"bg"},[_c('td',{staticStyle:{"width":"3%"}},[_vm._v("序号")]),_vm._v(" "),_c('td',[_vm._v("车牌号")]),_vm._v(" "),_c('td',{staticStyle:{"width":"8%"}},[_vm._v("所属公司")]),_vm._v(" "),_c('td',[_vm._v("品牌")]),_vm._v(" "),_c('td',[_vm._v("类型")]),_vm._v(" "),_c('td',[_vm._v("型号")]),_vm._v(" "),_c('td',[_vm._v("引擎")]),_vm._v(" "),_c('td',[_vm._v("底盘")]),_vm._v(" "),_c('td',[_vm._v("载重")]),_vm._v(" "),_c('td',[_vm._v("载客量")]),_vm._v(" "),_c('td',[_vm._v("生产日期")]),_vm._v(" "),_c('td',[_vm._v("购买日期")]),_vm._v(" "),_c('td',[_vm._v("状态")]),_vm._v(" "),_c('td',[_vm._v("指定路线")]),_vm._v(" "),(_vm.level_name==='PC用户')?_c('td',{staticStyle:{"width":"10%"}},[_vm._v("操作")]):_vm._e()])])]),_vm._v(" "),_c('div',{staticStyle:{"overflow-y":"scroll","height":"600px"}},[(_vm.companyDate.length>0)?_c('table',{staticClass:"ttt",staticStyle:{"table-layout":"fixed"}},[_c('tbody',_vm._l((_vm.companyDate),function(value,index){return _c('tr',{staticClass:"tr_hover",class:{table_td:_vm.numbers(index)==='偶数'}},[_c('td',{staticStyle:{"width":"3%"}},[_vm._v(_vm._s(index+1))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.bus_id))]),_vm._v(" "),_c('td',{staticStyle:{"width":"8%"}},[_vm._v(_vm._s(value.company_name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.brand))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.type))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.model_number))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.engine))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.chassis))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.load))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.bus_load))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.product_date))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.buy_date))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.status_name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.route))]),_vm._v(" "),(_vm.level_name==='PC用户')?_c('td',{staticStyle:{"width":"10%"}},[_c('div',[(value.is_binding===1)?_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.bindings(index,0)}}},[_vm._v("解除绑定")]):_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.bindings(index,1)}}},[_vm._v("绑定线路")]),_vm._v(" "),_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.edit(index)}}},[_vm._v("编辑")])])]):_vm._e()])}),0)]):_c('div',{staticClass:"tooltip"},[_vm._m(2)])])]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"编辑车辆","visible":_vm.dialogVisible,"center":""}},[_c('div',{staticClass:"dialog"},[_c('table',{staticStyle:{"text-align":"left","width":"100%"}},[(_vm.level_name==='内部员工')?_c('tr',[_c('td',[_vm._v("所属公司:")]),_vm._v(" "),_c('td',[_c('div',{staticClass:"inp"},[_c('el-select',{attrs:{"placeholder":"请选择公司"},model:{value:(_vm.companies),callback:function ($$v) {_vm.companies=$$v},expression:"companies"}},_vm._l((_vm.companyList),function(item){return _c('el-option',{key:item.pk,attrs:{"label":item.name,"value":item.pk}})}),1)],1)])]):_vm._e(),_vm._v(" "),_c('tr',[_c('td',[_vm._v("车辆状态:")]),_vm._v(" "),_c('td',[_c('div',{staticClass:"inp"},[_c('el-select',{attrs:{"placeholder":"请选择车辆状态"},model:{value:(_vm.status),callback:function ($$v) {_vm.status=$$v},expression:"status"}},_vm._l((_vm.types),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1)])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("生产日期:")]),_vm._v(" "),_c('td',[_c('div',{staticClass:"block"},[_c('el-date-picker',{attrs:{"type":"date","placeholder":"选择日期"},model:{value:(_vm.produceDate),callback:function ($$v) {_vm.produceDate=$$v},expression:"produceDate"}})],1)])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("购买日期:")]),_vm._v(" "),_c('td',[_c('div',{staticClass:"block"},[_c('el-date-picker',{attrs:{"type":"date","placeholder":"选择日期"},model:{value:(_vm.buyDate),callback:function ($$v) {_vm.buyDate=$$v},expression:"buyDate"}})],1)])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("车牌号:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入车牌号"},model:{value:(_vm.licensePlate),callback:function ($$v) {_vm.licensePlate=$$v},expression:"licensePlate"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("品牌:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入品牌"},model:{value:(_vm.brand),callback:function ($$v) {_vm.brand=$$v},expression:"brand"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("类型:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入类型"},model:{value:(_vm.mold),callback:function ($$v) {_vm.mold=$$v},expression:"mold"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("型号:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入型号"},model:{value:(_vm.models),callback:function ($$v) {_vm.models=$$v},expression:"models"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("引擎:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入引擎"},model:{value:(_vm.engine),callback:function ($$v) {_vm.engine=$$v},expression:"engine"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("底盘:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入底盘"},model:{value:(_vm.chassis),callback:function ($$v) {_vm.chassis=$$v},expression:"chassis"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("载重:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入载重"},model:{value:(_vm.loads),callback:function ($$v) {_vm.loads=$$v},expression:"loads"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("载客量:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入载客量"},model:{value:(_vm.busload),callback:function ($$v) {_vm.busload=$$v},expression:"busload"}})],1)])]),_vm._v(" "),_c('div',{staticClass:"buttons"},[_c('el-button',{staticStyle:{"margin-right":"108px"},on:{"click":_vm.cancels}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submission}},[_vm._v("确 定")])],1)])]),_vm._v(" "),_c('div',{staticClass:"fenye"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage,"page-sizes":[50,100,300,500],"page-size":_vm.limit,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.count},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("车辆管理列表")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"list_date_head"},[_vm._v("车辆管理列表")]),_c('span',{staticClass:"list_date_head"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"tooltip_img",attrs:{"src":__webpack_require__("9sZQ")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_BusManage = (esExports);
// CONCATENATED MODULE: ./src/components/BusManage.vue
function injectStyle (ssrContext) {
  __webpack_require__("i6V7")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ad981f6e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  BusManage,
  components_BusManage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_BusManage = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "i6V7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});