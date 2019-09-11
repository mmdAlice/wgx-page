webpackJsonp([11],{

/***/ "5PxG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/LostArticle.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var LostArticle = ({
  // inject:['reload'],
  name: "LostArticle",
  data: function data() {
    return {
      time: "", //当前时间
      limit: 50,
      offset: 0,
      count: 0,
      companyDate: [],
      currentPage: 1,
      dialogVisible: false,
      name: '',
      city: '', //城市
      line_no: '', //公交线路
      contact: '', //联系方式
      imgList: [{ //图片链接
        imageUrl: ''
      }, {
        imageUrl: ''
      }, {
        imageUrl: ''
      }],
      addImg: '../../static/img/tianjia.png',
      companyList: [], //公司列表
      editId: '', //编辑的id
      level_name: '', //判断是否是内部员工是的话才能选择公司，否自不能选择公司
      status_id: 1, //((1, "未认领"), (2, "已认领"), (10, "删除"))
      editOrAdd: true //编辑还是添加
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
    delects: function delects(index) {
      var _this = this;

      var that = this;
      this.$confirm('此操作将删除该条记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this.$patch(_this.$store.state.ip + '/api_backend/v1/lostandfounds/' + _this.companyDate[index].id + '/', { status: 10 }).then(function (res) {
          that.companyDate.splice(index, 1);
          // that.$router.push({path: '/PageJump', query: {id: 14}});
        });
        _this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(function () {
        _this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    status: function status(id) {
      if (id === 1) {
        return '未认领';
      } else {
        return '已认领';
      }
    },
    // 初始化oss权限
    initConfig: function initConfig() {
      var _this2 = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/getossak/').then(function (res) {
        _this2.client = new OSS({
          region: res.REGION,
          accessKeyId: res.OSS_ALL_KEY,
          accessKeySecret: res.OSS_ALL_SECRET,
          endpoint: res.ENDPOINT,
          bucket: res.BUCKET
        });
      });
    },

    //上传图片
    tirggerFile: function tirggerFile(event, index) {
      var files = event.target.files[0]; // (利用console.log输出看结构就知道如何处理档案资料)
      var file = event.target.files[0];
      var reader = new FileReader();
      var that = this;
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        that.imageUrl = this.result;
      };
      this.pushFile(files, index);
    },
    //把图片写入OSS、
    pushFile: function pushFile(file, index) {
      var that = this;
      var _file = file;
      var timestamp = new Date().getTime();
      var storeAs = '/backend/Index/MenuManager/' + timestamp + '.png'; // 传到oss上的名字
      // 调用上传方法
      this.client.multipartUpload(storeAs, _file).then(function (result) {
        that.imgList[index].imageUrl = result.res.requestUrls[0];
      }).catch(function (err) {
        console.log(err);
      });
    },

    //添加
    addBus: function addBus() {
      this.editOrAdd = true;
      this.dialogVisible = true;
    },
    //编辑
    edit: function edit(id) {
      this.editOrAdd = false;
      this.editId = this.companyDate[id].id;
      this.dialogVisible = true;
      this.city = this.companyDate[id].city;
      this.description = this.companyDate[id].description;
      this.line_no = this.companyDate[id].line_no;
      this.contact = this.companyDate[id].contacts;
      this.name = this.companyDate[id].description;
      this.status_id = this.companyDate[id].status;
      var list = this.companyDate[id].imgs.split(',');
      for (var i = 0; i < list.length; i++) {
        this.imgList[i].imageUrl = list[i];
      }
    },
    //取消
    cancels: function cancels() {
      this.dialogVisible = false;
      this.status_id = 1;
      this.editId = '';
      this.editOrAdd = true;
      this.city = '';
      this.description = '';
      this.line_no = '';
      this.contact = '';
      this.name = '';
      this.imgList = [{
        imageUrl: ''
      }, {
        imageUrl: ''
      }, {
        imageUrl: ''
      }];
    },
    //添加，编辑的提交
    submission: function submission() {
      var _this3 = this;

      var myDate = new Date();
      myDate = Object(dates["a" /* formatDate */])(myDate, 'yyyy-MM-dd hh:mm:ss');
      var imgurl = this.imgList[0].imageUrl + ',' + this.imgList[1].imageUrl + ',' + this.imgList[2].imageUrl;
      if (this.editOrAdd) {
        this.$post(this.$stors.state.ip + '/api_backend/v1/lostandfounds/', { create_time: myDate, contacts: this.contact, is_admin_publish: true,
          city: this.city, description: this.name, status: 1, line_no: this.line_no, imgs: imgurl }).then(function (res) {
          _this3.$router.push({ path: '/PageJump', query: { id: 16 } });
        });
      } else {
        this.$patch(this.$stors.state.ip + '/api_backend/v1/lostandfounds/' + this.editId + '/', { create_time: myDate, contacts: this.contact, is_admin_publish: true,
          city: this.city, description: this.name, status: 1, line_no: this.line_no, imgs: imgurl }).then(function (res) {
          _this3.$router.push({ path: '/PageJump', query: { id: 16 } });
        });
      }
    },
    //获取公司列表
    getCompanyList: function getCompanyList(limit, offset) {
      var _this4 = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/lostandfounds/?offset=' + offset + '&limit=' + limit).then(function (res) {
        _this4.count = res.count;
        _this4.companyDate = res.results;
      });
      if (this.level_name === '内部员工') {
        this.$get(this.$stors.state.ip + '/api_backend/v1/companies/?offset=0&limit=9999').then(function (res) {
          _this4.companyList = res.results;
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
    this.initConfig(); // 调用后台接口获取阿里云上传下载通行证
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-7f36c126","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/LostArticle.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_c('div',{staticClass:"head_div_all"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"newText",on:{"click":_vm.addBus}},[_c('i',{staticClass:"el-icon-circle-plus",staticStyle:{"width":"25px","height":"25px","line-height":"25px"}}),_vm._v(" "),_c('p',[_vm._v("发布丢失物品")])])]),_vm._v(" "),_c('div',{staticClass:"table_all_div"},[_c('div',{staticClass:"listofall"},[_c('div',{staticClass:"list_date"},[_vm._m(1),_vm._v(" "),_c('p',[_c('span',{staticClass:"list_date_span"},[_vm._v("更新时间")]),_vm._v(" "),_c('span',{staticClass:"list_date_span"},[_vm._v(_vm._s(_vm.time))])])])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticStyle:{"overflow-y":"scroll","height":"600px"}},[(_vm.companyDate.length>0)?_c('table',{staticClass:"ttt",staticStyle:{"table-layout":"fixed"}},[_c('tbody',_vm._l((_vm.companyDate),function(value,index){return _c('tr',{staticClass:"tr_hover",class:{table_td:_vm.numbers(index)==='偶数'}},[_c('td',[_vm._v(_vm._s(value.description))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.create_time))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.city))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.line_no))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.create_user_name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.contacts))]),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(_vm.status(value.status))}}),_vm._v(" "),_c('td',[_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.edit(index)}}},[_vm._v("查看")]),_vm._v(" "),_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.delects(index)}}},[_vm._v("删除")])])])}),0)]):_c('div',{staticClass:"tooltip"},[_vm._m(3)])])]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"编辑物品信息 ","visible":_vm.dialogVisible,"center":""}},[_c('div',{staticClass:"dialog"},[_c('table',{staticStyle:{"text-align":"left","width":"100%"}},[_c('tr',[_c('td',[_vm._v("物品名称:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入物品名称"},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("城市:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入城市"},model:{value:(_vm.city),callback:function ($$v) {_vm.city=$$v},expression:"city"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("公交线路:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入公交线路"},model:{value:(_vm.line_no),callback:function ($$v) {_vm.line_no=$$v},expression:"line_no"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("联系方式:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"type":"number","placeholder":"请输入联系方式"},model:{value:(_vm.contact),callback:function ($$v) {_vm.contact=$$v},expression:"contact"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("实物图片:")]),_vm._v(" "),_c('td',{staticStyle:{"display":"flex"}},_vm._l((_vm.imgList),function(value,index){return _c('div',{class:{img_border:value.imageUrl.length<1},staticStyle:{"width":"132px","margin-left":"5px"}},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(value.imageUrl.length>0  ),expression:"value.imageUrl.length>0  "}],staticStyle:{"width":"130px","height":"130px","position":"absolute"},attrs:{"src":value.imageUrl}}),_vm._v(" "),_c('img',{directives:[{name:"show",rawName:"v-show",value:(value.imageUrl.length<1  ),expression:"value.imageUrl.length<1  "}],staticStyle:{"width":"50px","height":"50px","position":"absolute","margin":"39px 0 0 41px"},attrs:{"src":_vm.addImg}}),_vm._v(" "),_c('input',{staticStyle:{"margin":"0 auto","opacity":"0","z-index":"1","width":"130px","height":"130px"},attrs:{"type":"file","accept":"image/gif,image/jpeg,image/jpg,image/png"},on:{"change":function($event){return _vm.tirggerFile($event,index)}}})])}),0)])]),_vm._v(" "),_c('div',{staticClass:"buttons"},[(_vm.status_id===2)?_c('el-button',{staticStyle:{"margin-right":"108px"},on:{"click":_vm.cancels}},[_vm._v("返回")]):_vm._e(),_vm._v(" "),(_vm.status_id===1)?_c('el-button',{staticStyle:{"margin-right":"108px"},on:{"click":_vm.cancels}},[_vm._v("取 消")]):_vm._e(),_vm._v(" "),(_vm.status_id===1)?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submission}},[_vm._v("确 定")]):_vm._e()],1)])]),_vm._v(" "),_c('div',{staticClass:"fenye"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage,"page-sizes":[50,100,300,500],"page-size":_vm.limit,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.count},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("失物招领列表")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"list_date_head"},[_vm._v("失物招领列表")]),_c('span',{staticClass:"list_date_head"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"ttt",staticStyle:{"width":"99%","table-layout":"fixed"}},[_c('thead',[_c('tr',{staticClass:"bg"},[_c('td',[_vm._v("物品名称")]),_vm._v(" "),_c('td',[_vm._v("时间")]),_vm._v(" "),_c('td',[_vm._v("城市")]),_vm._v(" "),_c('td',[_vm._v("线路")]),_vm._v(" "),_c('td',[_vm._v("发布者")]),_vm._v(" "),_c('td',[_vm._v("联系方式")]),_vm._v(" "),_c('td',[_vm._v("状态")]),_vm._v(" "),_c('td',[_vm._v("操作")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"tooltip_img",attrs:{"src":__webpack_require__("9sZQ")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_LostArticle = (esExports);
// CONCATENATED MODULE: ./src/components/LostArticle.vue
function injectStyle (ssrContext) {
  __webpack_require__("zjlI")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7f36c126"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  LostArticle,
  components_LostArticle,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_LostArticle = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "zjlI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});