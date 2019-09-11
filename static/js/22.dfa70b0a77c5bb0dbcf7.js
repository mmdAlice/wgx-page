webpackJsonp([22],{

/***/ "ZnlJ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "w170":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/EquipmentManage.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var EquipmentManage = ({
  // inject:['reload'],
  name: "EquipmentManage",
  data: function data() {
    return {
      time: "", //当前时间
      limit: 50,
      offset: 0,
      count: 0,
      companyDate: [],
      currentPage: 1,
      dialogVisible: false,
      device_number: '',
      bus_id: '',
      section_charge: '', //浮动收费
      pro_seq_number: '', //生产序号
      type: '', //类型
      model_number: '', //型号
      company: '', //公司id
      buy_date: '', //购买时间
      device_no: '', //设备号
      brand: '', //品牌
      manufacture_date: '', //生产日期
      name: '', //名称
      companyList: [], //公司列表
      editId: '', //编辑的id
      level_name: '', //判断是否是内部员工是的话才能选择公司，否自不能选择公司
      editOrAdd: true, //编辑还是添加
      types: [{
        id: 3,
        name: '刷卡'
      }, {
        id: 1,
        name: '扫码设备'
      }, {
        id: 4,
        name: '刷卡扫码二合一'
      }, {
        id: 2,
        name: '人脸识别'
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
    isType: function isType(id) {
      switch (id) {
        case 1:
          return '扫码设备';
        case 2:
          return '人脸识别';
        case 3:
          return '刷卡';
        case 4:
          return '刷卡扫码二合一';
      }
    },
    numbers: function numbers(id) {
      if (id % 2 === 0) {
        return '偶数';
      } else {
        return '奇数';
      }
    },
    judge: function judge(id) {
      if (id) {
        return '支持';
      } else {
        return '不支持';
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
      this.section_charge = this.companyDate[id].section_charge;
      this.pro_seq_number = this.companyDate[id].pro_seq_number;
      this.type = this.companyDate[id].type;
      this.model_number = this.companyDate[id].model_number;
      this.company = this.companyDate[id].company;
      this.buy_date = this.companyDate[id].buy_date;
      this.device_no = this.companyDate[id].device_no;
      this.brand = this.companyDate[id].brand;
      this.manufacture_date = this.companyDate[id].manufacture_date;
      this.name = this.companyDate[id].name;
    },
    //取消
    cancels: function cancels() {
      this.dialogVisible = false;
      this.editId = '';
      this.section_charge = '';
      this.pro_seq_number = '';
      this.type = '';
      this.model_number = '';
      this.company = '';
      this.buy_date = '';
      this.device_no = '';
      this.brand = '';
      this.manufacture_date = '';
      this.name = '';
    },
    //添加，编辑车辆的提交
    submission: function submission() {
      var _this = this;

      if (this.editOrAdd) {
        var produceDate = this.$moment(this.manufacture_date).format("YYYY-MM-DD");
        var buyDate = this.$moment(this.buy_date).format("YYYY-MM-DD");
        this.$post(this.$stors.state.ip + '/api_backend/v1/devices/', { pro_seq_number: this.pro_seq_number, section_charge: this.section_charge, type: this.type,
          model_number: this.model_number, manufacture_date: produceDate, company: this.company, device_no: this.device_no, brand: this.brand,
          name: this.name, buy_date: buyDate }).then(function (res) {
          _this.$router.push({ path: '/PageJump', query: { id: 14 } });
        });
      } else {
        var _produceDate = this.$moment(this.manufacture_date).format("YYYY-MM-DD");
        var _buyDate = this.$moment(this.buy_date).format("YYYY-MM-DD");
        this.$patch(this.$stors.state.ip + '/api_backend/v1/devices/' + this.editId + '/', { pro_seq_number: this.pro_seq_number, section_charge: this.section_charge, type: this.type,
          model_number: this.model_number, manufacture_date: _produceDate, company: this.company, device_no: this.device_no, brand: this.brand,
          name: this.name, buy_date: _buyDate }).then(function (res) {
          _this.$router.push({ path: '/PageJump', query: { id: 14 } });
        });
      }
    },
    //绑定或者解绑线路
    bindings: function bindings(index, id) {
      var _this2 = this;

      var that = this;
      if (id === 1) {
        this.$router.push({ path: '/Index/BusBinding', query: { equipmentid: this.companyDate[index].id, companyId: this.companyDate[index].company } });
      } else {
        this.$confirm('此操作将解绑该车辆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
          _this2.$delete(_this2.$store.state.ip + '/api_backend/v1/devicecarrelations/' + _this2.companyDate[index].relation_id + '/').then(function (res) {
            that.$router.push({ path: '/PageJump', query: { id: 14 } });
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

      this.$get(this.$stors.state.ip + '/api_backend/v1/devices/?offset=' + offset + '&limit=' + limit + '&device_no=' + this.device_number + '&bus_id=' + this.bus_id).then(function (res) {
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
    this.company = localStorage.getItem('company_id');
    this.level_name = localStorage.getItem('level_name');
    var myDate = new Date();
    this.time = Object(dates["a" /* formatDate */])(myDate, 'yyyy-MM-dd hh:mm:ss');
    this.getCompanyList(this.limit, this.offset);
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-539a8de4","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/EquipmentManage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_c('div',{staticClass:"head_div_all"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"newText",on:{"click":_vm.addBus}},[_c('i',{staticClass:"el-icon-circle-plus",staticStyle:{"width":"25px","height":"25px","line-height":"25px"}}),_vm._v(" "),_c('p',[_vm._v("添加设备")])])]),_vm._v(" "),_c('div',{staticClass:"table_all_div"},[_c('div',{staticClass:"listofall"},[_c('div',{staticClass:"list_date"},[_vm._m(1),_vm._v(" "),_c('p',[_c('span',{staticClass:"list_date_span"},[_vm._v("更新时间")]),_vm._v(" "),_c('span',{staticClass:"list_date_span"},[_vm._v(_vm._s(_vm.time))])])]),_vm._v(" "),_c('div',{staticClass:"listofall_two"},[_c('span',{staticStyle:{"color":"#a3a3a3","display":"inline-block","width":"95px"}},[_vm._v("车牌号：")]),_vm._v(" "),_c('el-input',{staticClass:"listofall_two_input",staticStyle:{"width":"150px"},attrs:{"autocomplete":"off","type":"text","placeholder":"输入车牌号"},model:{value:(_vm.bus_id),callback:function ($$v) {_vm.bus_id=$$v},expression:"bus_id"}}),_vm._v(" "),_c('span',{staticStyle:{"color":"#a3a3a3","display":"inline-block","width":"95px"}},[_vm._v("设备标识：")]),_vm._v(" "),_c('el-input',{staticClass:"listofall_two_input",staticStyle:{"width":"150px"},attrs:{"autocomplete":"off","type":"text","placeholder":"输入设备标识"},model:{value:(_vm.device_number),callback:function ($$v) {_vm.device_number=$$v},expression:"device_number"}}),_vm._v(" "),_c('img',{staticClass:"listofall_two_img",attrs:{"src":__webpack_require__("v+Vh")},on:{"click":_vm.getCompanyList}})],1)]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticStyle:{"overflow-y":"scroll","height":"600px"}},[(_vm.companyDate.length>0)?_c('table',{staticClass:"ttt",staticStyle:{"table-layout":"fixed"}},[_c('tbody',_vm._l((_vm.companyDate),function(value,index){return _c('tr',{staticClass:"tr_hover",class:{table_td:_vm.numbers(index)==='偶数'}},[_c('td',[_vm._v(_vm._s(index+1))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.brand))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.model_number))]),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(_vm.isType(value.type))}}),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.pro_seq_number))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.device_no))]),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(_vm.judge(value.section_charge))}}),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.manufacture_date))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.buy_date))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.car))]),_vm._v(" "),_c('td',[(value.is_binding===1)?_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.bindings(index,0)}}},[_vm._v("解除绑定")]):_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.bindings(index,1)}}},[_vm._v("绑定车辆")]),_vm._v(" "),_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.edit(index)}}},[_vm._v("编辑")])])])}),0)]):_c('div',{staticClass:"tooltip"},[_vm._m(3)])])]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"编辑设备","visible":_vm.dialogVisible,"center":""}},[_c('div',{staticClass:"dialog"},[_c('table',{staticStyle:{"text-align":"left","width":"100%"}},[(_vm.level_name==='内部员工')?_c('tr',[_c('td',[_vm._v("所属公司:")]),_vm._v(" "),_c('td',[_c('div',{staticClass:"inp"},[_c('el-select',{attrs:{"placeholder":"请选择公司"},model:{value:(_vm.company),callback:function ($$v) {_vm.company=$$v},expression:"company"}},_vm._l((_vm.companyList),function(item){return _c('el-option',{key:item.pk,attrs:{"label":item.name,"value":item.pk}})}),1)],1)])]):_vm._e(),_vm._v(" "),_c('tr',[_c('td',[_vm._v("生产日期:")]),_vm._v(" "),_c('td',[_c('div',{staticClass:"block"},[_c('el-date-picker',{attrs:{"type":"date","placeholder":"选择日期"},model:{value:(_vm.manufacture_date),callback:function ($$v) {_vm.manufacture_date=$$v},expression:"manufacture_date"}})],1)])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("购买日期:")]),_vm._v(" "),_c('td',[_c('div',{staticClass:"block"},[_c('el-date-picker',{attrs:{"type":"date","placeholder":"选择日期"},model:{value:(_vm.buy_date),callback:function ($$v) {_vm.buy_date=$$v},expression:"buy_date"}})],1)])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("类型:")]),_vm._v(" "),_c('td',[_c('div',{staticClass:"inp"},[_c('el-select',{attrs:{"placeholder":"请选择类型"},model:{value:(_vm.type),callback:function ($$v) {_vm.type=$$v},expression:"type"}},_vm._l((_vm.types),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1)])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("浮动收费:")]),_vm._v(" "),_c('td',[_c('el-radio-group',{model:{value:(_vm.section_charge),callback:function ($$v) {_vm.section_charge=$$v},expression:"section_charge"}},[_c('el-radio',{attrs:{"label":true}},[_vm._v("支持")]),_vm._v(" "),_c('el-radio',{attrs:{"label":false}},[_vm._v("不支持")])],1)],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("名称:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入设备名称"},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("品牌:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入品牌"},model:{value:(_vm.brand),callback:function ($$v) {_vm.brand=$$v},expression:"brand"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("型号:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入型号"},model:{value:(_vm.model_number),callback:function ($$v) {_vm.model_number=$$v},expression:"model_number"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("生产序号:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入生产序号"},model:{value:(_vm.pro_seq_number),callback:function ($$v) {_vm.pro_seq_number=$$v},expression:"pro_seq_number"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("唯一标识:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入唯一标识"},model:{value:(_vm.device_no),callback:function ($$v) {_vm.device_no=$$v},expression:"device_no"}})],1)])]),_vm._v(" "),_c('div',{staticClass:"buttons"},[_c('el-button',{staticStyle:{"margin-right":"108px"},on:{"click":_vm.cancels}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submission}},[_vm._v("确 定")])],1)])]),_vm._v(" "),_c('div',{staticClass:"fenye"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage,"page-sizes":[50,100,300,500],"page-size":_vm.limit,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.count},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("设备管理列表")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"list_date_head"},[_vm._v("设备管理列表")]),_c('span',{staticClass:"list_date_head"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"ttt",staticStyle:{"width":"99%","table-layout":"fixed"}},[_c('thead',[_c('tr',{staticClass:"bg"},[_c('td',[_vm._v("序号")]),_vm._v(" "),_c('td',[_vm._v("品牌")]),_vm._v(" "),_c('td',[_vm._v("型号")]),_vm._v(" "),_c('td',[_vm._v("类型")]),_vm._v(" "),_c('td',[_vm._v("生产序号")]),_vm._v(" "),_c('td',[_vm._v("设备标识")]),_vm._v(" "),_c('td',[_vm._v("浮动收费")]),_vm._v(" "),_c('td',[_vm._v("生产日期")]),_vm._v(" "),_c('td',[_vm._v("购买日期")]),_vm._v(" "),_c('td',[_vm._v("绑定车辆")]),_vm._v(" "),_c('td',[_vm._v("操作")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"tooltip_img",attrs:{"src":__webpack_require__("9sZQ")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_EquipmentManage = (esExports);
// CONCATENATED MODULE: ./src/components/EquipmentManage.vue
function injectStyle (ssrContext) {
  __webpack_require__("ZnlJ")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-539a8de4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  EquipmentManage,
  components_EquipmentManage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_EquipmentManage = __webpack_exports__["default"] = (Component.exports);


/***/ })

});