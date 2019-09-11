webpackJsonp([3,13],{

/***/ "42Hy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/SideBar.vue + 2 modules
var SideBar = __webpack_require__("PmVp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/Index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var Index = ({
  name: "Index",
  components: {
    'MenuTree': SideBar["default"]
  },
  data: function data() {
    return {
      color_text: '',
      selectedHighlight: '',
      shows: 0,
      oldPassword: '',
      newPassword: '',
      truePassword: '',
      dialogVisible: false,
      personals: false,
      list: [],
      username: '',
      currentMenu: '/Index/Home',
      company_name: '',
      imageUrl: '../../static/img/tishi.png',
      menuImage: '', //菜单图片
      client: ''
    };
  },
  created: function created() {
    this.currentMenu = localStorage.getItem('menuType');
    this.getUrl();
  },

  methods: {
    //页面刷新时菜单状态不变
    getUrl: function getUrl() {
      var that = this;
      var currentUrl = window.location.href;
      that.currentMenu = currentUrl.split('#')[1];
    },

    //监听点击菜单事的路由变化
    monitorMenu: function monitorMenu(e) {
      localStorage.setItem('menuType', e);
    },
    //警告提示
    warning: function warning(msg) {
      this.$message({
        message: msg,
        type: 'warning'
      });
    },
    successSay: function successSay(msg) {
      this.$message({
        message: msg,
        type: 'success'
      });
    },
    //修改密码、退出登录
    managers: function managers() {
      if (this.shows === 1) {
        this.shows = 0;
      } else {
        this.shows = 1;
      }
    },
    //上传公司名字图片
    personalSub: function personalSub() {
      var _this = this;

      this.$post(this.$stors.state.ip + '/api_backend/v1/basicinfoset/', { logo: this.menuImage, company_name: this.company_name }).then(function (res) {
        if (res.code === 0) {
          _this.personals = false;
          _this.menuImage = '';
          _this.company_name = '';
          _this.successSay('提交成功！');
        } else {
          _this.warning('服务器出错！');
        }
      });
    },
    //改密码
    modifyPassword: function modifyPassword() {
      this.dialogVisible = true;
    },
    //个人信息
    personal: function personal() {
      this.personals = true;
    },
    //取消
    cancels: function cancels() {
      this.dialogVisible = false;
      this.personals = false;
    },
    //成功弹出的消息框
    success: function success(msg) {
      this.$notify({
        title: '成功',
        message: msg,
        type: 'success'
      });
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
      var that = this;
      this.$get(this.$stors.state.ip + '/api_backend/v1/getossak/').then(function (res) {
        that.client = new OSS({
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
      that.client.multipartUpload(storeAs, _file).then(function (result) {
        that.menuImage = result.res.requestUrls[0];
      }).catch(function (err) {
        console.log(err);
      });
    },

    //确定
    addActivity: function addActivity() {
      if (this.oldPassword === '') {
        return this.managers('请输入旧密码');
      } else if (this.newPassword === '') {
        return this.managers('请输入新密码');
      }
      var that = this;
      this.$patch(this.$store.state.ip + '/api_backend/v1/me/', { old_password: this.oldPassword, new_password: this.newPassword }).then(function (res) {
        that.dialogVisible = false;
        that.success('密码修改成功！');
      });
    },
    //跳转主页
    goHome: function goHome(id) {
      this.$router.push({ path: '/Index/Home' });
    },
    //菜单跳转
    goIndex: function goIndex(url) {
      this.$router.push({ path: url });
    },
    //退出
    goOut: function goOut() {
      localStorage.clear();
      this.$router.replace({ path: '/Login' });
    }

  },
  mounted: function mounted() {
    //防止页面后退
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function () {
      history.pushState(null, null, document.URL);
    });
    this.username = localStorage.getItem('username');
    this.list = JSON.parse(localStorage.getItem('menuList'));
    this.initConfig(); // 调用后台接口获取阿里云上传下载通行证
  },

  watch: {
    $route: {
      handler: function handler(val, oldVal) {
        this.currentMenu = val.path;
        localStorage.setItem('menuType', val.path);
      },
      // 深度观察监听
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-b3c3d338","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/Index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"alls"},[_c('el-container',[_c('div',{staticStyle:{"background":"rgb(36, 37, 54)","height":"100%"}},[_c('el-aside',[_c('el-row',{staticClass:"tac"},[_c('el-col',{attrs:{"span":12}},[_c('el-menu',{staticClass:"el-menu-vertical-demo",attrs:{"default-active":_vm.currentMenu,"background-color":"rgba(36,37,54,1)","text-color":"rgba(146,147,162,1)","active-text-color":"#409eff"},on:{"select":_vm.monitorMenu}},[_c('div',{staticClass:"index_head"},[_c('img',{staticClass:"index_img",attrs:{"src":"/static/img/companyHead.png"}}),_vm._v(" "),_c('div',{staticClass:"index_head2"},[_c('p',{staticStyle:{"width":"100%"}})])]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"/Index/Home"},on:{"click":_vm.goHome}},[_c('img',{staticStyle:{"width":"20px","height":"20px","margin-right":"9px"},attrs:{"src":__webpack_require__("y9gx")}}),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("主"),_c('em',{staticStyle:{"width":"24px","display":"inline-block"}}),_vm._v(" 页")])]),_vm._v(" "),_c('MenuTree',{attrs:{"menuData":_vm.list}})],1)],1)],1)],1)],1),_vm._v(" "),_c('el-container',[_c('el-header',[_c('div',{staticClass:"header_text"},[_c('div',{staticClass:"header_img",on:{"click":_vm.managers}},[_c('img',{staticStyle:{"border-radius":"50%","height":"38px","width":"38px"},attrs:{"src":"/static/img/logo.png"}}),_vm._v(" "),_c('div',{staticStyle:{"color":"white","margin-top":"8px","margin-right":"5px"}},[_vm._v(_vm._s(_vm.username))]),_vm._v(" "),_c('img',{staticStyle:{"height":"5px","width":"9px","margin-top":"7px","margin-right":"25px"},attrs:{"src":"/static/img/xiala.png"}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.shows===1),expression:"shows===1"}],staticClass:"password"},[_c('p',{staticClass:"password_text",staticStyle:{"margin-top":"13px","cursor":"pointer","width":"100%"},on:{"click":_vm.personal}},[_vm._v("个人信息")]),_vm._v(" "),_c('p',{staticClass:"password_text",staticStyle:{"margin-top":"13px","cursor":"pointer","width":"100%"},on:{"click":_vm.modifyPassword}},[_vm._v("修改密码")]),_vm._v(" "),_c('p',{staticClass:"goOut_text",staticStyle:{"margin-top":"13px","cursor":"pointer","width":"100%","margin-bottom":"13px"},on:{"click":_vm.goOut}},[_vm._v("退出登录")])])])])]),_vm._v(" "),_c('el-main',[_c('router-view')],1)],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"个人信息","visible":_vm.personals,"width":"610px","center":""}},[_c('table',{staticClass:"index_table",staticStyle:{"text-align":"left","width":"100%"}},[_c('tr',[_c('td',[_vm._v("企业简称:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入企业简称"},model:{value:(_vm.company_name),callback:function ($$v) {_vm.company_name=$$v},expression:"company_name"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("公司Logo:")]),_vm._v(" "),_c('td',[_c('img',{staticStyle:{"width":"90px","height":"90px","position":"absolute","background-color":"black"},attrs:{"src":_vm.imageUrl}}),_vm._v(" "),_c('input',{staticStyle:{"margin":"0 auto","opacity":"0","z-index":"1","width":"90px","height":"90px"},attrs:{"type":"file","accept":"image/gif,image/jpeg,image/jpg,image/png"},on:{"change":function($event){return _vm.tirggerFile($event)}}})])])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.cancels}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.personalSub}},[_vm._v("确 定")])],1)]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"修改密码","visible":_vm.dialogVisible,"width":"610px","center":""}},[_c('table',{staticClass:"index_table",staticStyle:{"text-align":"left","width":"100%"}},[_c('tr',[_c('td',[_vm._v("旧密码:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入旧密码"},model:{value:(_vm.oldPassword),callback:function ($$v) {_vm.oldPassword=$$v},expression:"oldPassword"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("新密码:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入新密码"},model:{value:(_vm.newPassword),callback:function ($$v) {_vm.newPassword=$$v},expression:"newPassword"}})],1)])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.cancels}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addActivity}},[_vm._v("确 定")])],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Index = (esExports);
// CONCATENATED MODULE: ./src/components/Index.vue
function injectStyle (ssrContext) {
  __webpack_require__("TdCj")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b3c3d338"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Index,
  components_Index,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Index = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "PmVp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/SideBar.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SideBar = ({
  name: "SideBar",
  props: ["menuData"],
  data: function data() {
    return {};
  },

  methods: {
    //菜单跳转
    goIndex: function goIndex(url) {
      this.$router.push({ path: url });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-7b993084","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/SideBar.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.menuData),function(value){return _c('div',[(value.childNode)?_c('el-submenu',{attrs:{"index":value.id+''}},[_c('template',{slot:"title"},[(value.level===1)?_c('img',{staticStyle:{"width":"20px","height":"20px","margin-right":"9px"},attrs:{"src":value.img}}):_vm._e(),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(value.name))])]),_vm._v(" "),_c('SideBar',{attrs:{"menuData":value.childNode}})],2):_c('el-menu-item',{attrs:{"index":value.url},on:{"click":function($event){return _vm.goIndex(value.url)}}},[_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(value.name))])])],1)}),0)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_SideBar = (esExports);
// CONCATENATED MODULE: ./src/components/SideBar.vue
function injectStyle (ssrContext) {
  __webpack_require__("agTY")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7b993084"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  SideBar,
  components_SideBar,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_SideBar = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "TdCj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "agTY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "y9gx":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABAlBMVEVHcEz////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////cKWOoAAAAVXRSTlMACvxk4q/VzNHd8jP1A7/pt/kqngUB7bn7b7r9JOe1WLMGGoerRA7OSARr2BRcYcMHPcZ671TcUXjf5OvbEvA7GI8iwn8dAvT+bl/zbeiLYk3ExWWFai9/mAAAAQBJREFUOMvt1MlSwkAUheGLREKYwoyAE4OogKIiCE4IoqCo4HDe/1UEGpIQku6sLf/lqW/VqVwic1eptlx3kahEF7MOHwQuGANL2ea6XBHLVD/HucLQ8x3YutIjjEX2bFxVxmrZtKXLe7BWwcL1FFgUOza76DUs2zc9vf8GNl3cGd35PWzzPOnuKABOUnTpGhFwS3aYO92AoMBk5l6yELY1JvqGk4avJDmCUCjpDL7ThzP4Q8/p1OeAj0ZfmbfE/IG8fChrX+bvwtDmtJoY7rBJFUKFTdI/1GCGD3c1WOZDtwbjIcMFYdOtvoSD+k056zcXV+DyhC1u3+KPrrTi8+EXcdNF+3dE2bMAAAAASUVORK5CYII="

/***/ })

});