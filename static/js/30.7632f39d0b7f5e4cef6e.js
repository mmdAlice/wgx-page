webpackJsonp([30],{

/***/ "/kjg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "VEli":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/MenuManager.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var OSS = __webpack_require__("/I7q");

/* harmony default export */ var MenuManager = ({
  name: "MenuManager",
  data: function data() {
    return {
      dialogVisible: false,
      menuList: [],
      time: "", //当前时间
      limit: 50,
      count: 0, //总条数
      currentPage4: 1,
      permission: '', //权限
      url: '', //菜单路径
      name: '', //菜单名称
      level: '', //菜单层级
      imageUrl: '../../static/img/tishi.png',
      menuImage: '', //菜单图片
      permissionsList: '',
      permissions: [],
      editOradd: 0, //判断是添加还是编辑  默认是添加
      menuId: '', //菜单id
      adv_location: '',
      run_span: 0,
      shows: 1,
      options: [],
      levelOptions: [{
        id: 1,
        name: '一级菜单'
      }, {
        id: 2,
        name: '二级菜单'
      }],
      client: ''
    };
  },

  methods: {
    //每页多少条
    handleSizeChange: function handleSizeChange(val) {
      this.limit = val;
      this.getmenus(this.limit, this.offset);
    },

    //第几页
    handleCurrentChange: function handleCurrentChange(val) {
      this.offset = this.limit * val - this.limit;
      if (val === 1) {
        this.offset = 0;
      }
      this.getmenus(this.limit, this.offset);
    },

    //上传图片
    tirggerFile: function tirggerFile(event) {
      var files = event.target.files[0]; // (利用console.log输出看结构就知道如何处理档案资料)
      var file = event.target.files[0];
      var reader = new FileReader();
      var that = this;
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        that.imageUrl = this.result;
      };
      this.pushFile(files);
    },
    // 初始化oss权限
    initConfig: function initConfig() {
      var _this = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/getossak/').then(function (res) {
        _this.client = new OSS({
          region: res.REGION,
          accessKeyId: res.OSS_ALL_KEY,
          accessKeySecret: res.OSS_ALL_SECRET,
          endpoint: res.ENDPOINT,
          bucket: res.BUCKET
        });
      });
    },

    //把图片写入OSS、
    pushFile: function pushFile(file) {
      var that = this;
      var _file = file;
      var timestamp = new Date().getTime();
      var storeAs = '/backend/Index/MenuManager/' + timestamp + '.png'; // 传到oss上的名字
      // 调用上传方法
      this.client.multipartUpload(storeAs, _file).then(function (result) {
        that.menuImage = result.res.requestUrls[0];
      }).catch(function (err) {
        console.log(err);
      });
    },

    //添加菜单
    addUsers: function addUsers() {
      this.dialogVisible = true;
      this.editOradd = 0;
    },
    //删除菜单
    deletes: function deletes(index) {
      var _this2 = this;

      var that = this;
      this.$confirm('此操作将删除该菜单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this2.$delete(_this2.$stors.state.ip + '/api_backend/v1/menus/' + that.menuList[index].id + '/').then(function (res) {
          that.menuList.splice(index, 1);
        });
        _this2.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(function () {
        _this2.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    //编辑
    edit: function edit(index) {
      this.editOradd = 1;
      this.dialogVisible = true;
      this.menuId = this.menuList[index].id;
      this.name = this.menuList[index].name;
      this.level = this.menuList[index].level;
      this.imageUrl = this.menuList[index].img;
      this.menuImage = this.menuList[index].img;
      this.permissionsList = this.menuList[index].permission;
      this.adv_location = this.menuList[index].parent;
      this.url = this.menuList[index].url;
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
    numbers: function numbers(id) {
      if (id % 2 === 0) {
        return '偶数';
      } else {
        return '奇数';
      }
    },
    //获取列表
    getList: function getList() {
      var _this3 = this;

      var that = this;
      this.$get(this.$stors.state.ip + '/api_backend/v1/permissions/?offset=0&limit=300').then(function (res) {
        that.permissions = res.results;
      });
      this.$get(this.$stors.state.ip + '/api_backend/v1/me/?offset=0&limit=300').then(function (res) {
        _this3.options = res.results[0].menus;
      });
    },
    getmenus: function getmenus(limit, offset) {
      var _this4 = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/menus/?offset=' + offset + '&limit=' + limit).then(function (res) {
        _this4.menuList = res.results;
        _this4.count = res.count;
      });
    },
    //取消
    cancels: function cancels() {
      this.dialogVisible = false;
      this.parent = '';
      this.imageUrl = '';
      this.permission = '';
      this.url = '';
      this.name = '';
      this.level = '';
      this.menuImage = '';
      this.adv_location = '';
    },
    //添加
    addActivity: function addActivity() {
      var that = this;
      if (this.shows === 1) {
        this.$post(this.$stors.state.ip + '/api_backend/v1/menus/', { parent: this.adv_location, img: this.menuImage, permission: this.permissionsList, url: this.url,
          name: this.name, level: this.level }).then(function (res) {
          that.$router.push({ path: '/PageJump', query: { id: -1 } });
        });
      } else {
        this.$post(this.$stors.state.ip + '/api_backend/v1/menus/', { img: this.menuImage, url: this.url,
          name: this.name, level: this.level }).then(function (res) {
          that.$router.push({ path: '/PageJump', query: { id: -1 } });
        });
      }
    },
    //编辑时的菜单更新
    editMenus: function editMenus() {
      var that = this;
      if (this.shows === 1) {
        this.$patch(this.$stors.state.ip + '/api_backend/v1/menus/' + that.menuId + '/', { parent: this.adv_location, img: this.menuImage, permission: this.permissionsList, url: this.url,
          name: this.name, level: this.level }).then(function (res) {
          that.$router.push({ path: '/PageJump', query: { id: -1 } });
        });
      } else {
        this.$patch(this.$stors.state.ip + '/api_backend/v1/menus/' + that.menuId + '/', { img: this.menuImage, url: this.url,
          name: this.name, level: this.level }).then(function (res) {
          that.$router.push({ path: '/PageJump', query: { id: -1 } });
        });
      }
    }
  },
  mounted: function mounted() {
    this.getmenus(this.limit, this.offset);
    var myDate = new Date();
    this.time = Object(dates["a" /* formatDate */])(myDate, 'yyyy-MM-dd hh:mm:ss');
    this.getList();
    this.initConfig(); // 调用后台接口获取阿里云上传下载通行证
  },

  watch: {
    level: {
      handler: function handler(Id, oldName) {
        if (Id === 2) {
          this.shows = 1;
        } else {
          this.shows = 0;
        }
      },

      deep: true,
      immediate: true
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-3070ed60","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/MenuManager.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_c('div',{staticClass:"head_div_all"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"newText",on:{"click":_vm.addUsers}},[_c('i',{staticClass:"el-icon-circle-plus",staticStyle:{"width":"25px","height":"25px","line-height":"25px"}}),_vm._v(" "),_c('p',[_vm._v("添加菜单")])])]),_vm._v(" "),_c('div',{staticClass:"all_center"},[_c('el-dialog',{attrs:{"title":"新增菜单","visible":_vm.dialogVisible,"width":"610px","height":"500px","center":""}},[_c('table',{staticStyle:{"width":"100%"}},[_c('tr',[_c('td',[_vm._v("菜单名字:")]),_vm._v(" "),_c('td',[_c('el-input',{model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("菜单图片:")]),_vm._v(" "),_c('td',[_c('img',{staticStyle:{"width":"90px","height":"90px","position":"absolute","background-color":"black"},attrs:{"src":_vm.imageUrl}}),_vm._v(" "),_c('input',{staticStyle:{"margin":"0 auto","opacity":"0","z-index":"1","width":"90px","height":"90px"},attrs:{"type":"file","accept":"image/gif,image/jpeg,image/jpg,image/png"},on:{"change":function($event){return _vm.tirggerFile($event)}}})])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("菜单层级:")]),_vm._v(" "),_c('td',[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.level),callback:function ($$v) {_vm.level=$$v},expression:"level"}},_vm._l((_vm.levelOptions),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1)]),_vm._v(" "),_c('tr',{directives:[{name:"show",rawName:"v-show",value:(_vm.shows===1),expression:"shows===1"}]},[_c('td',[_vm._v("父级菜单:")]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"left"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.adv_location),callback:function ($$v) {_vm.adv_location=$$v},expression:"adv_location"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("菜单路径:")]),_vm._v(" "),_c('td',[_c('el-input',{model:{value:(_vm.url),callback:function ($$v) {_vm.url=$$v},expression:"url"}})],1)]),_vm._v(" "),_c('tr',{directives:[{name:"show",rawName:"v-show",value:(_vm.shows===1),expression:"shows===1"}]},[_c('td',[_vm._v("菜单权限:")]),_vm._v(" "),_c('td',[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.permissionsList),callback:function ($$v) {_vm.permissionsList=$$v},expression:"permissionsList"}},_vm._l((_vm.permissions),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.permission_name,"value":item.id}})}),1)],1)])]),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"10px","margin-bottom":"30px","display":"flex","justify-content":"center"}},[_c('el-button',{on:{"click":_vm.cancels}},[_vm._v("取消")]),_vm._v(" "),(_vm.editOradd===0)?_c('el-button',{staticStyle:{"margin-left":"80px"},on:{"click":_vm.addActivity}},[_vm._v("提交")]):_c('el-button',{staticStyle:{"margin-left":"80px"},on:{"click":_vm.editMenus}},[_vm._v("提交")])],1)])],1),_vm._v(" "),_c('div',{staticClass:"table_all_div"},[_c('div',{staticClass:"listofall"},[_c('div',{staticClass:"list_date"},[_vm._m(1),_vm._v(" "),_c('p',[_c('span',{staticClass:"list_date_span"},[_vm._v("更新时间")]),_vm._v(" "),_c('span',{staticClass:"list_date_span"},[_vm._v(_vm._s(_vm.time))])])])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticStyle:{"overflow-y":"scroll","height":"600px"}},[(_vm.menuList.length>0)?_c('table',{staticClass:"ttt",staticStyle:{"table-layout":"fixed"}},[_c('tbody',_vm._l((_vm.menuList),function(value,index){return _c('tr',{staticClass:"tr_hover",class:{table_td:_vm.numbers(index)==='偶数'}},[_c('td',[_vm._v(_vm._s(index+1))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_c('img',{staticStyle:{"width":"30px","height":"30px","background-color":"black"},attrs:{"src":value.img}})]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.level)+"级")]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.name))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.parent))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.permission_name))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.url))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_c('div',[_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.edit(index)}}},[_vm._v("编辑")]),_vm._v(" "),_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.deletes(index)}}},[_vm._v("删除")])])])])}),0)]):_c('div',{staticClass:"tooltip"},[_vm._m(3)])])]),_vm._v(" "),_c('div',{staticClass:"fenye"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage4,"page-sizes":[50,100,300,500],"page-size":_vm.limit,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.count},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("菜单管理")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"list_date_head"},[_vm._v("菜单列表")]),_c('span',{staticClass:"list_date_head"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"ttt",staticStyle:{"width":"99%","table-layout":"fixed"}},[_c('thead',[_c('tr',{staticClass:"bg"},[_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("序号")]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("菜单图片")]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("菜单层级")]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("菜单名称")]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("菜单父级")]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("菜单权限")]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("菜单路径")]),_vm._v(" "),_c('td',{staticStyle:{"font-size":"16px"}},[_vm._v("操作")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"tooltip_img",attrs:{"src":__webpack_require__("9sZQ")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_MenuManager = (esExports);
// CONCATENATED MODULE: ./src/components/MenuManager.vue
function injectStyle (ssrContext) {
  __webpack_require__("/kjg")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3070ed60"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MenuManager,
  components_MenuManager,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_MenuManager = __webpack_exports__["default"] = (Component.exports);


/***/ })

});