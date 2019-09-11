webpackJsonp([18],{

/***/ "2XS0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "s7m4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("3cXf");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/Company.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Company = ({
  // inject:['reload'],
  name: "ActivityList",
  data: function data() {
    return {
      time: "", //当前时间
      limit: 50,
      offset: 0,
      count: 0,
      run_span: 0,
      modify_pwd: 0, //是否显示修改密码
      newOrEdit: 0, //判断是编辑提交还是添加新公司提交
      judge: 0, //提交信息时判断是提交还是添加
      companyDate: [],
      currentPage: 1,
      dialogVisible: false,
      permissions: [], //权限
      line_nos: '',
      menus: [], //菜单
      saves: [], //省
      citys: [], //市
      area: [], //区
      detailsAdress: '', //详细地址
      companyName: '', //公司名字
      savesName: '', //省的名字
      citysName: '', //市的名字
      areaName: '', //区的名字
      userNumber: '', //初始账号
      phone: '', //电话号码
      passWorld: '', //初始密码
      permissionsList: [], //详情权限
      pk: '', //公司id
      indexs: ''
      // detailsPermissions:[],//这是传给后端的权限
    };
  },

  methods: {
    //每页多少条
    handleSizeChange: function handleSizeChange(val) {
      this.limit = val;
      this.getPermissions(this.limit, this.offset);
    },

    //第几页
    handleCurrentChange: function handleCurrentChange(val) {
      this.offset = this.limit * val - this.limit;
      if (val === 1) {
        this.offset = 0;
      }
      this.getPermissions(this.limit, this.offset);
    },

    //警告提示
    warning: function warning(msg) {
      this.$message({
        message: msg,
        type: 'warning'
      });
    },
    getsave: function getsave() {
      this.newOrEdit = 2;
    },
    getcity: function getcity() {
      this.newOrEdit = 3;
    },
    numbers: function numbers(id) {
      if (id % 2 === 0) {
        return '偶数';
      } else {
        return '奇数';
      }
    },
    //修改密码
    modifyPassword: function modifyPassword() {
      this.modify_pwd = 0;
    },
    //启用停用
    upperOrlower: function upperOrlower(index) {
      var _this = this;

      var state = void 0;
      var msg = void 0;
      if (this.companyDate[index].status === 1) {
        state = 2;
        msg = '停用';
      } else {
        state = 1;
        msg = '启用';
      }
      var that = this;
      this.$confirm('此操作将' + msg + '该公司, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this.$patch(_this.$store.state.ip + '/api_backend/v1/companies/' + _this.companyDate[index].pk + '/', { province: _this.companyDate[index].province, house_number: _this.companyDate[index].house_number,
          mobile: _this.companyDate[index].mobile, permissions: _this.companyDate[index].permissions,
          city: _this.companyDate[index].city, area: _this.companyDate[index].area, name: _this.companyDate[index].name,
          username: _this.companyDate[index].username, status: state }).then(function (res) {
          that.$router.push({ path: '/PageJump', query: { id: 4 } });
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
    //编辑
    edit: function edit(index) {
      this.indexs = index;
      this.judge = 1;
      this.modify_pwd = 1;
      this.dialogVisible = true;
      var list = JSON.parse(this.companyDate[index].permissions);
      for (var i = 0; i < this.permissions.length; i++) {
        for (var j = 0; j < list.length; j++) {
          if (list[j].permission_id === this.permissions[i].id) {
            this.permissionsList.push(this.permissions[i].permission_name);
          }
        }
      }
      this.line_nos = this.companyDate[index].line_nos;
      this.companyName = this.companyDate[index].name;
      this.savesName = this.companyDate[index].province;
      this.citysName = this.companyDate[index].city;
      this.areaName = this.companyDate[index].area;
      this.detailsAdress = this.companyDate[index].house_number;
      this.userNumber = this.companyDate[index].username;
      this.phone = this.companyDate[index].mobile;
      this.companyName = this.companyDate[index].name;
      this.pk = this.companyDate[index].pk;
    },
    //添加公司
    addCompany: function addCompany() {
      this.judge = 0;
      this.modify_pwd = 0;
      this.dialogVisible = true;
    },
    //取消
    cancels: function cancels() {
      this.getPermissions();
      this.dialogVisible = false;
      this.permissionsList = [];
      this.companyName = '';
      this.savesName = '';
      this.citysName = '';
      this.areaName = '';
      this.detailsAdress = '';
      this.userNumber = '';
      this.phone = '';
      this.companyName = '';
      this.line_nos = '';
    },
    //添加公司\\编辑公司信息确认
    addActivity: function addActivity() {
      var that = this;
      if (this.companyName === '') {
        return this.warning('请输入公司名称哦！');
      } else if (this.savesName === '') {
        return this.warning('请选择公司所在区域哦！');
      } else if (this.detailsAdress === '') {
        return this.warning('请输入公司详细地址哦！');
      } else if (this.userNumber === '') {
        return this.warning('请输入初始账号哦！');
      } else if (this.phone === '') {
        return this.warning('请输入电话号码哦！');
      }
      var list = [];
      for (var i = 0; i < this.permissions.length; i++) {
        for (var j = 0; j < this.permissionsList.length; j++) {
          if (this.permissionsList[j] === this.permissions[i].permission_name) {
            var data = {
              permission_id: this.permissions[i].id,
              permission_name: this.permissions[i].permission_name,
              group: this.permissions[i].group
            };
            list.push(data);
          }
        }
      }
      //去重提交
      var newArr = [];
      list.map(function (item) {
        return newArr.findIndex(function (_ref) {
          var permission_id = _ref.permission_id;
          return permission_id === item.permission_id;
        }) === -1 && newArr.push(item);
      });
      var permissions = stringify_default()(newArr);
      //如果是添加公司调用这个
      if (that.judge === 0) {
        this.$post(this.$stors.state.ip + '/api_backend/v1/companies/', { province: this.savesName, city: this.citysName, area: this.areaName, name: this.companyName,
          mobile: this.phone, house_number: this.detailsAdress, permissions: permissions,
          username: this.userNumber, password: this.passWorld, status: '1', line_nos: this.line_nos }).then(function (res) {
          that.$router.push({ path: '/PageJump', query: { id: 4 } });
        });
      } else {
        console.log(this.line_nos);
        var _list = {};
        if (this.passWorld === '') {
          _list = { province: this.savesName, city: this.citysName, area: this.areaName, name: this.companyName,
            mobile: this.phone, house_number: this.detailsAdress, permissions: permissions,
            username: this.userNumber, status: '1' };
        } else {
          _list = { province: this.savesName, city: this.citysName, area: this.areaName, name: this.companyName,
            mobile: this.phone, house_number: this.detailsAdress, permissions: permissions,
            password: this.passWorld, username: this.userNumber, status: '1', line_nos: '12,24', url: 'sssssss' };
        }
        this.$patch(this.$stors.state.ip + '/api_backend/v1/companies/' + this.pk + '/', _list).then(function (res) {
          that.$router.push({ path: '/PageJump', query: { id: 4 } });
        });
      }
    },
    //全选
    choose: function choose() {
      if (this.run_span === 0) {
        this.run_span = 1;
        for (var i = 0; i < this.permissions.length; i++) {
          this.permissionsList.push(this.permissions[i].permission_name);
        }
      } else {
        this.run_span = 0;
        this.permissionsList = [];
      }
    },
    //获取公司列表
    getCompanyList: function getCompanyList() {
      var _this2 = this;

      var that = this;
      this.$get(this.$stors.state.ip + '/api_backend/v1/companies/').then(function (res) {
        that.companyDate = res.results;
        _this2.count = res.count;
        // that.permissions=JSON.parse(res.results.permissions);
      });
    },
    //获取权限列表**本公司账号
    getPermissions: function getPermissions() {
      var that = this;
      that.permissions = JSON.parse(localStorage.getItem('company_permissions'));
      var list = JSON.parse(localStorage.getItem('company_permissions'));
      var defaults = [];
      var jsonList = [];
      for (var i = 0; i < list.length; i++) {
        jsonList[i] = list[i];
        if (list[i].is_default) {
          defaults.push(list[i]);
        }
      }
      //去重
      var result = [];
      var obj = {};
      for (var _i = 0; _i < jsonList.length; _i++) {
        if (!obj[jsonList[_i].group]) {
          result.push(jsonList[_i]);
          obj[jsonList[_i].group] = true;
        }
      }
      //默认权限
      for (var _i2 = 0; _i2 < defaults.length; _i2++) {
        that.permissionsList.push(defaults[_i2].permission_name);
      }
      that.menus = result;
      // that.permissions=JSON.parse(res.results.permissions);
    },
    //获取地址
    getAress: function getAress() {
      var that = this;
      this.$get(this.$stors.state.ip + '/api_backend/v1/districtcode/').then(function (res) {
        that.saves = res;
      });
    }
  },
  mounted: function mounted() {
    // //输入提示
    // var autoOptions = {
    //   input: "tipinput"
    // };
    // var auto = new AMap.Autocomplete(autoOptions);
    // new AMap.event.addListener(auto, "select", this.getAdress());//注册监听，当选中某条记录时会触发
    var myDate = new Date();
    this.time = Object(dates["a" /* formatDate */])(myDate, 'yyyy-MM-dd hh:mm:ss');
    this.getCompanyList();
    this.getPermissions(this.limit, this.offset);
    this.getAress();
  },

  watch: {
    savesName: {
      handler: function handler(newId, oldName) {
        for (var i = 0; i < this.saves.length; i++) {
          if (newId === this.saves[i].pk) {
            this.citys = this.saves[i].city;
            if (this.newOrEdit === 1) {
              this.citysName = this.companyDate[this.indexs].city;
            } else if (this.newOrEdit === 2) {
              this.citysName = '';
              this.areaName = '';
            }
          }
        }
      },

      deep: true,
      immediate: true
    },
    citysName: {
      handler: function handler(newId, oldName) {
        for (var i = 0; i < this.citys.length; i++) {
          if (newId === this.citys[i].pk) {
            this.area = this.citys[i].county;
            if (this.newOrEdit === 1) {
              this.areaName = this.companyDate[this.indexs].area;
            } else if (this.newOrEdit === 3) {
              this.areaName = '';
            }
          }
        }
      },

      deep: true,
      immediate: true
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-583601c2","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/Company.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_c('div',{staticClass:"head_div_all"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"newText",on:{"click":_vm.addCompany}},[_c('i',{staticClass:"el-icon-circle-plus",staticStyle:{"width":"25px","height":"25px","line-height":"25px"}}),_vm._v(" "),_c('p',[_vm._v("添加公司")])])]),_vm._v(" "),_c('div',{staticClass:"table_all_div"},[_c('div',{staticClass:"listofall"},[_c('div',{staticClass:"list_date"},[_vm._m(1),_vm._v(" "),_c('p',[_c('span',{staticClass:"list_date_span"},[_vm._v("更新时间")]),_vm._v(" "),_c('span',{staticClass:"list_date_span"},[_vm._v(_vm._s(_vm.time))])])]),_vm._v(" "),_c('div',{staticClass:"listofall_two"},[_c('el-input',{staticClass:"listofall_two_input",attrs:{"autocomplete":"off","placeholder":"输入公司名称"}}),_vm._v(" "),_c('img',{staticClass:"listofall_two_img",attrs:{"src":__webpack_require__("v+Vh")}})],1)]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticStyle:{"overflow-y":"scroll","height":"600px"}},[(_vm.companyDate.length>0)?_c('table',{staticClass:"ttt",staticStyle:{"table-layout":"fixed"}},[_c('tbody',_vm._l((_vm.companyDate),function(value,index){return _c('tr',{staticClass:"tr_hover",class:{table_td:_vm.numbers(index)==='偶数'}},[_c('td',[_vm._v(_vm._s(index+1))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.name))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.create_time))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.username))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.mobile))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.house_number))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[(value.status===1)?_c('span',{staticStyle:{"color":"#5daf34"}},[_vm._v("启用中")]):_vm._e(),_vm._v(" "),(value.status===2)?_c('span',{staticStyle:{"color":"red"}},[_vm._v("停用中")]):_vm._e()]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_c('div',[_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.edit(index)}}},[_vm._v("编辑")]),_vm._v(" "),(value.status===2)?_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.upperOrlower(index)}}},[_vm._v("启用")]):_vm._e(),_vm._v(" "),(value.status===1)?_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.upperOrlower(index)}}},[_vm._v("停用")]):_vm._e()])])])}),0)]):_c('div',{staticClass:"tooltip"},[_vm._m(3)])])]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"添加公司","visible":_vm.dialogVisible,"center":""}},[_c('div',{staticClass:"dialog"},[_c('table',{staticStyle:{"text-align":"left","width":"100%"}},[_c('tr',[_c('td',[_vm._v("公司名称:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入内容"},model:{value:(_vm.companyName),callback:function ($$v) {_vm.companyName=$$v},expression:"companyName"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("所在区域:")]),_vm._v(" "),_c('td',[_c('div',{staticClass:"inp"},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.savesName),callback:function ($$v) {_vm.savesName=$$v},expression:"savesName"}},_vm._l((_vm.saves),function(item){return _c('el-option',{key:item.pk,attrs:{"label":item.name,"value":item.pk}})}),1),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},on:{"change":_vm.getcity},model:{value:(_vm.citysName),callback:function ($$v) {_vm.citysName=$$v},expression:"citysName"}},_vm._l((_vm.citys),function(item){return _c('el-option',{key:item.pk,attrs:{"label":item.name,"value":item.pk}})}),1),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.areaName),callback:function ($$v) {_vm.areaName=$$v},expression:"areaName"}},_vm._l((_vm.area),function(item){return _c('el-option',{key:item.pk,attrs:{"label":item.name,"value":item.pk}})}),1)],1)])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("详细地址:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"type":"textarea","rows":2,"placeholder":"请输入内容"},model:{value:(_vm.detailsAdress),callback:function ($$v) {_vm.detailsAdress=$$v},expression:"detailsAdress"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("初始账号:")]),_vm._v(" "),_c('td',[(_vm.judge===0)?_c('el-input',{attrs:{"autocomplete":"off","placeholder":"请输入内容"},model:{value:(_vm.userNumber),callback:function ($$v) {_vm.userNumber=$$v},expression:"userNumber"}}):_c('el-input',{attrs:{"autocomplete":"off","placeholder":"请输入内容","disabled":true},model:{value:(_vm.userNumber),callback:function ($$v) {_vm.userNumber=$$v},expression:"userNumber"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("手机号:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"type":"number","placeholder":"请输入内容"},model:{value:(_vm.phone),callback:function ($$v) {_vm.phone=$$v},expression:"phone"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("初始密码:")]),_vm._v(" "),_c('td',[(_vm.modify_pwd===0)?_c('el-input',{attrs:{"type":"password","auto-complete":"new-password","placeholder":"请输入内容"},model:{value:(_vm.passWorld),callback:function ($$v) {_vm.passWorld=$$v},expression:"passWorld"}}):_vm._e(),_vm._v(" "),(_vm.modify_pwd===1)?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.modifyPassword}},[_vm._v("修改密码")]):_vm._e()],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("公司线路:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"type":"text","placeholder":"输入线路请用逗号隔开"},model:{value:(_vm.line_nos),callback:function ($$v) {_vm.line_nos=$$v},expression:"line_nos"}})],1)])]),_vm._v(" "),_c('div',{staticClass:"power"},[_c('span',{staticStyle:{"color":"#727979","font-size":"18px"}},[_vm._v("权限")]),_vm._v(" "),_c('p',{staticStyle:{"text-align":"center","display":"flex","justify-content":"center","align-items":"center","cursor":"pointer"}},[_c('span',{staticClass:"back_span",class:{all_span:_vm.run_span===1},on:{"click":_vm.choose}}),_vm._v(" "),_c('span',{on:{"click":_vm.choose}},[_vm._v("全选")])]),_vm._v(" "),_vm._l((_vm.menus),function(value,index){return _c('div',{staticClass:"power_text",class:{hights:index===0}},[_c('div',{staticClass:"column",class:{borders:_vm.menus.length-1===index}},[_c('div',{staticClass:"menu_list"},[_vm._v("\n                "+_vm._s(value.group)+"\n              ")])]),_vm._v(" "),_c('div',{staticClass:"column",class:{borders:_vm.menus.length-1===index},staticStyle:{"width":"627px"}},[_c('el-checkbox-group',{model:{value:(_vm.permissionsList),callback:function ($$v) {_vm.permissionsList=$$v},expression:"permissionsList"}},_vm._l((_vm.permissions),function(data,id){return _c('div',[(value.group===data.group)?_c('el-checkbox',{attrs:{"label":data.permission_name,"disabled":data.is_default}}):_vm._e()],1)}),0)],1)])})],2),_vm._v(" "),_c('div',{staticClass:"buttons"},[_c('el-button',{staticStyle:{"margin-right":"108px"},on:{"click":_vm.cancels}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addActivity}},[_vm._v("确 定")])],1)])]),_vm._v(" "),_c('div',{staticClass:"fenye"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage,"page-sizes":[50,100,300,500],"page-size":_vm.limit,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.count},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("公司管理列表")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"list_date_head"},[_vm._v("公司管理列表")]),_c('span',{staticClass:"list_date_head"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"ttt",staticStyle:{"width":"99%","table-layout":"fixed"}},[_c('thead',[_c('tr',{staticClass:"bg"},[_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v("序号")]),_vm._v(" "),_c('td',[_vm._v("公司名称")]),_vm._v(" "),_c('td',[_vm._v("创建时间")]),_vm._v(" "),_c('td',[_vm._v("管理员")]),_vm._v(" "),_c('td',[_vm._v("手机")]),_vm._v(" "),_c('td',[_vm._v("详细地址")]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v("状态")]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v("操作")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"tooltip_img",attrs:{"src":__webpack_require__("9sZQ")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Company = (esExports);
// CONCATENATED MODULE: ./src/components/Company.vue
function injectStyle (ssrContext) {
  __webpack_require__("2XS0")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-583601c2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Company,
  components_Company,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Company = __webpack_exports__["default"] = (Component.exports);


/***/ })

});