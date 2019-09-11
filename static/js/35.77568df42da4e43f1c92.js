webpackJsonp([35],{

/***/ "2XRL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "LW1A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("3cXf");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/AddRole.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var AddRole = ({
  name: "AddRole",
  data: function data() {
    return {
      checkList: [], //选中的数据
      shows: 0, //判断是否全选
      permissionsList: [], //勾选的权限
      menus: [], //权限菜单
      run_span: 0, //全选
      permissions: [], //该用户所拥有的权限
      name: '', //昵称
      userName: '', //登录用户名:
      phone: '', //手机号
      passWorld: '', //默认密码
      role: '', //角色
      roleList: [], //角色种类
      newOrEdit: 0, //判断是新增还是编辑
      modify_pwd: 0, //判断是否修改密码
      dataId: ''
    };
  },


  methods: {
    //账号列表
    goRolePermissions: function goRolePermissions() {
      this.$router.push({ path: '/Index/AccountManage' });
    },
    //警告提示
    warning: function warning(msg) {
      this.$message({
        message: msg,
        type: 'warning'
      });
    },
    //点击全选
    allText: function allText() {
      if (this.shows === 1) {
        this.shows = 0;
        this.checkList = [];
      } else {
        this.shows = 1;
        this.checkList = this.list;
      }
    },
    //重置
    cancels: function cancels() {
      this.getPermissions();
      this.run_span = 0;
      this.permissionsList = [];
      this.name = '';
      this.userName = '';
      this.phone = '';
      this.passWorld = '';
      this.role = '';
      this.role_describe = '';
    },
    modifyPassword: function modifyPassword() {
      this.modify_pwd = 0;
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
    //添加用户\\编辑用户信息确认
    addActivity: function addActivity() {
      var that = this;
      if (this.name === '') {
        return this.warning('请输入姓名哦！');
      } else if (this.userName === '') {
        return this.warning('请选择登录用户名哦！');
      } else if (this.phone === '') {
        return this.warning('请输入手机号哦！');
      } else if (this.role === '') {
        return this.warning('请输入角色哦！');
      } else if (this.role_describe === '') {
        return this.warning('请输入角色描述哦！');
      }
      //筛选出对应权限
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
      //如果是添加用户用这个
      if (this.newOrEdit === 0) {
        this.$post(this.$stors.state.ip + '/api_backend/v1/adminusers/', { password: this.passWorld, nickname: this.name, role: this.role, mobile: this.phone, permissions: permissions,
          is_active: true, username: this.userName }).then(function (res) {
          console.log(res);
          that.$router.push({ path: '/PageJump', query: { id: 2 } });
        });
      } else {
        //如果是编辑用户
        var _list = {};
        if (this.passWorld === '') {
          _list = { nickname: this.name, role: this.role, mobile: this.phone, permissions: permissions,
            is_active: true, username: this.userName };
        } else {
          _list = { password: this.passWorld, nickname: this.name, role: this.role, mobile: this.phone, permissions: permissions,
            is_active: true, username: this.userName };
        }
        this.$patch(this.$stors.state.ip + '/api_backend/v1/adminusers/' + this.dataId + '/', _list).then(function (res) {
          that.$router.push({ path: '/PageJump', query: { id: 2 } });
        });
      }
    },
    //根据id获取账号基本信息
    getUserList: function getUserList(id) {
      var _this = this;

      this.newOrEdit = 1;
      this.modify_pwd = 1;
      this.$get(this.$stors.state.ip + '/api_backend/v1/adminusers/' + id + '/').then(function (res) {
        _this.name = res.nickname;
        _this.userName = res.username;
        _this.phone = res.mobile;
        _this.role = res.role;
        var list = JSON.parse(res.permissions);
        for (var i = 0; i < _this.permissions.length; i++) {
          for (var j = 0; j < list.length; j++) {
            if (list[j].permission_id === _this.permissions[i].id) {
              _this.permissionsList.push(_this.permissions[i].permission_name);
            }
          }
        }
      });
    },
    //获取权限列表**角色
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
    }
  },
  mounted: function mounted() {
    this.roleList = JSON.parse(localStorage.getItem('company_roles'));
    this.getPermissions();
    if (this.$route.query.id) {
      this.dataId = this.$route.query.id;
      this.getUserList(this.$route.query.id);
    }
    var myDate = new Date();
    this.time = Object(dates["a" /* formatDate */])(myDate, 'yyyy-MM-dd hh:mm:ss');
  },

  watch: {
    checkList: {
      handler: function handler(newText, oldText) {
        this.checkList = newText;
      },

      deep: true,
      immediate: true
    }

  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-146e97b8","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/AddRole.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_c('div',{staticClass:"head_div_all"},[_c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span cursor",on:{"click":_vm.goRolePermissions}},[_vm._v("账号列表")]),_vm._v(" "),_c('span',{staticClass:"sousuo_n"},[_vm._v("/")]),_vm._v(" "),_c('span',{staticClass:"sousuo_span",staticStyle:{"color":"rgba(96,98,102,1)"}},[_vm._v("添加账号")])])]),_vm._v(" "),_c('div',{staticClass:"center_text"},[_c('table',{staticClass:"div_text"},[_c('tr',[_c('td',{staticStyle:{"text-align":"right"}},[_vm._v("昵称:")]),_vm._v(" "),_c('td',[_c('el-input',{model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}})],1)]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"text-align":"right"}},[_vm._v("登录账号:")]),_vm._v(" "),_c('td',[(_vm.newOrEdit===0)?_c('el-input',{model:{value:(_vm.userName),callback:function ($$v) {_vm.userName=$$v},expression:"userName"}}):_c('el-input',{attrs:{"disabled":true},model:{value:(_vm.userName),callback:function ($$v) {_vm.userName=$$v},expression:"userName"}})],1)]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"text-align":"right"}},[_vm._v("手机号:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.phone),callback:function ($$v) {_vm.phone=$$v},expression:"phone"}})],1)]),_vm._v(" "),_c('tr',{staticStyle:{"text-align":"right"}},[_c('td',[_vm._v("默认密码:")]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"left"}},[(_vm.modify_pwd===0)?_c('el-input',{attrs:{"type":"password","auto-complete":"new-password"},model:{value:(_vm.passWorld),callback:function ($$v) {_vm.passWorld=$$v},expression:"passWorld"}}):_vm._e(),_vm._v(" "),(_vm.modify_pwd===1)?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.modifyPassword}},[_vm._v("修改密码")]):_vm._e()],1)]),_vm._v(" "),_c('tr',{staticStyle:{"text-align":"right"}},[_c('td',[_vm._v("角色:")]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"left"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.role),callback:function ($$v) {_vm.role=$$v},expression:"role"}},_vm._l((_vm.roleList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.show_name,"value":item.id}})}),1)],1)]),_vm._v(" "),(_vm.menus.length>1)?_c('tr',[_c('td',{staticStyle:{"text-align":"right"}},[_vm._v("权限设置:")]),_vm._v(" "),_c('td',[_c('div',{staticStyle:{"border-top":"1px solid silver","border-left":"1px solid silver","border-right":"1px solid silver"}},[_c('div',{staticStyle:{"display":"flex","justify-content":"center","align-items":"center","height":"35px"},on:{"click":_vm.allText}},[_c('span',{staticClass:"back_span",class:{all_span:_vm.run_span===1},on:{"click":_vm.choose}}),_vm._v(" "),_c('span',{on:{"click":_vm.choose}},[_vm._v("全选")])]),_vm._v(" "),_vm._l((_vm.menus),function(value,index){return _c('div',{staticClass:"power_text",class:{hights:index===0}},[_c('div',{staticClass:"column",class:{borders:_vm.menus.length-1===index}},[_c('div',{staticClass:"menu_list"},[_vm._v("\n                    "+_vm._s(value.group)+"\n                  ")])]),_vm._v(" "),_c('div',{staticClass:"column",class:{borders:_vm.menus.length-1===index},staticStyle:{"width":"627px"}},[_c('el-checkbox-group',{model:{value:(_vm.permissionsList),callback:function ($$v) {_vm.permissionsList=$$v},expression:"permissionsList"}},_vm._l((_vm.permissions),function(data,id){return _c('div',[(value.group===data.group)?_c('el-checkbox',{attrs:{"label":data.permission_name,"disabled":data.is_default}}):_vm._e()],1)}),0)],1)])})],2)])]):_vm._e(),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"10px"}},[_c('el-button',{on:{"click":_vm.cancels}},[_vm._v("重置")]),_vm._v(" "),_c('el-button',{staticStyle:{"margin-left":"80px"},on:{"click":_vm.addActivity}},[_vm._v("提交")])],1)])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_AddRole = (esExports);
// CONCATENATED MODULE: ./src/components/AddRole.vue
function injectStyle (ssrContext) {
  __webpack_require__("2XRL")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-146e97b8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  AddRole,
  components_AddRole,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_AddRole = __webpack_exports__["default"] = (Component.exports);


/***/ })

});