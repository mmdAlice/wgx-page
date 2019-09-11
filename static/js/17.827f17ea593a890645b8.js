webpackJsonp([17],{

/***/ "fjLw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/CouponManage.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var CouponManage = ({
  // inject:['reload'],
  name: "CouponManage",
  data: function data() {
    return {
      time: "", //当前时间
      limit: 50,
      offset: 0,
      count: 0,
      couponList: [],
      currentPage: 1,
      dialogVisible: false,
      type: '', //类型
      model_number: '', //型号
      company: '', //公司id
      name: '', //名称
      grantNumber: '', //发放数量
      money: '', //金额
      img_text: '', //图片内容
      url: '', //广告链接
      condition: '', //条件
      companyList: [], //公司列表
      editId: '', //编辑的id
      startGrant: '', //开始发放时间
      endGrant: '', //结束发放时间
      useStartTime: '', //开始使用时间
      useEndTime: '', //结束使用时间
      imageUrl: '', //图片链接
      addImg: '../../static/img/tianjia.png',
      level_name: '', //判断是否是内部员工是的话才能选择公司，否自不能选择公司
      editOrAdd: true, //编辑还是添加
      pickerOptions0: {
        //时间选择今天之前禁用
        disabledDate: function disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      types: [{
        id: 1,
        name: '抵扣金额'
      }],
      conditions: [{
        id: 1,
        name: '全部用户'
      }, {
        id: 2,
        name: '新注册用户'
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
    //把图片写入OSS、
    pushFile: function pushFile(file) {
      var that = this;
      var _file = file;
      var timestamp = new Date().getTime();
      var storeAs = '/backend/Index/MenuManager/' + timestamp + '.png'; // 传到oss上的名字
      // 调用上传方法
      this.client.multipartUpload(storeAs, _file).then(function (result) {
        that.imageUrl = result.res.requestUrls[0];
        console.log(that.imageUrl.length);
      }).catch(function (err) {
        console.log(err);
      });
    },

    lookDtails: function lookDtails(index) {

      this.$router.push({ path: '/Index/ReceiveDetails', query: { id: this.couponList[index].id } });
    },
    lookStart: function lookStart() {},
    lookEnd: function lookEnd() {},
    //创建时间
    createTime: function createTime(time) {
      return this.$moment(time).format("YYYY-MM-DD HH:mm:ss");
    },
    //投放时间
    beginTime: function beginTime(start, end) {
      var startTime = this.$moment(start).format("YYYY-MM-DD HH:mm:ss");
      var endTime = this.$moment(end).format("YYYY-MM-DD HH:mm:ss");
      return startTime + '   ' + endTime;
    },
    //使用时间
    useTime: function useTime(start, end) {
      var startTime = this.$moment(start).format("YYYY-MM-DD HH:mm:ss");
      var endTime = this.$moment(end).format("YYYY-MM-DD HH:mm:ss");
      return startTime + '   ' + endTime;
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
    //添加公交
    addBus: function addBus() {
      this.editOrAdd = true;
      this.dialogVisible = true;
    },
    //编辑
    edit: function edit(id) {
      this.editOrAdd = false;
      this.editId = this.couponList[id].id;
      this.dialogVisible = true;
      this.type = this.couponList[id].type;
      this.name = this.couponList[id].name;
      this.grantNumber = this.couponList[id].volume;
      this.money = this.couponList[id].face_value;
      this.img_text = this.couponList[id].content;
      this.url = this.couponList[id].link;
      this.condition = this.couponList[id].condition;
      this.startGrant = this.couponList[id].give_out_begin_time;
      this.endGrant = this.couponList[id].give_out_end_time;
      this.useStartTime = this.couponList[id].use_begin_time;
      this.useEndTime = this.couponList[id].use_end_time;
      this.imageUrl = this.couponList[id].img_url;
    },
    //取消
    cancels: function cancels() {
      this.dialogVisible = false;
      this.editOrAdd = true;
      this.editId = '';
      this.type = '';
      this.name = '';
      this.grantNumber = '';
      this.money = '';
      this.img_text = '';
      this.url = '';
      this.condition = '';
      this.startGrant = '';
      this.endGrant = '';
      this.useStartTime = '';
      this.useEndTime = '';
      this.imageUrl = '';
    },
    //添加，编辑车辆的提交
    submission: function submission() {
      var _this2 = this;

      if (this.editOrAdd) {
        this.$post(this.$stors.state.ip + '/api_backend/v1/coupontype/', { name: this.name, use_end_time: this.useEndTime, type_tuple: this.type,
          is_online: 'true', content: this.img_text, img_url: this.imageUrl, face_value: this.money, give_out_end_time: this.endGrant,
          give_out_begin_time: this.startGrant, volume: this.grantNumber, link: this.url, use_begin_time: this.useStartTime, condition: this.condition }).then(function (res) {
          _this2.$router.push({ path: '/PageJump', query: { id: 15 } });
        });
      } else {
        this.$patch(this.$stors.state.ip + '/api_backend/v1/coupontype/' + this.editId + '/', { name: this.name, use_end_time: this.useEndTime, type_tuple: this.type,
          is_online: 'true', content: this.img_text, img_url: this.imageUrl, face_value: this.money, give_out_end_time: this.endGrant,
          give_out_begin_time: this.startGrant, volume: this.grantNumber, link: this.url, use_begin_time: this.useStartTime, condition: this.condition }).then(function (res) {
          _this2.$router.push({ path: '/PageJump', query: { id: 15 } });
        });
      }
    },
    //删除该优惠券
    deleteManage: function deleteManage(index) {
      var _this3 = this;

      var that = this;
      this.$confirm('此操作将删除该优惠券, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this3.$patch(_this3.$stors.state.ip + '/api_backend/v1/coupontype/' + _this3.couponList[index].id + '/', { status: 0 }).then(function (res) {
          that.couponList.splice(index, 1);
        });
        _this3.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(function () {
        _this3.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    //上下线优惠卷
    bindings: function bindings(index, id) {
      var _this4 = this;

      var that = this;
      var msg = void 0;
      var type = void 0;
      if (id === 0) {
        msg = '下线';
        type = false;
      } else {
        msg = '上线';
        type = true;
      }
      this.$confirm('此操作将' + msg + '广告, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this4.$patch(_this4.$store.state.ip + '/api_backend/v1/coupontype/' + _this4.couponList[index].id + '/', { is_online: type }).then(function (res) {
          that.$router.push({ path: '/PageJump', query: { id: 15 } });
        });
        _this4.$message({
          type: 'success',
          message: msg + '成功!'
        });
      }).catch(function () {
        _this4.$message({
          type: 'info',
          message: '已取消' + msg
        });
      });
    },
    //获取公司列表
    getCompanyList: function getCompanyList(limit, offset) {
      var _this5 = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/coupontype/?offset=' + offset + '&limit=' + limit).then(function (res) {
        _this5.count = res.count;
        _this5.couponList = res.results;
      });
      if (this.level_name === '内部员工') {
        this.$get(this.$stors.state.ip + '/api_backend/v1/companies/?offset=0&limit=9999').then(function (res) {
          _this5.companyList = res.results;
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
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-58d28b31","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/CouponManage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_c('div',{staticClass:"head_div_all"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"newText",on:{"click":_vm.addBus}},[_c('i',{staticClass:"el-icon-circle-plus",staticStyle:{"width":"25px","height":"25px","line-height":"25px"}}),_vm._v(" "),_c('p',[_vm._v("新增活动")])])]),_vm._v(" "),_c('div',{staticClass:"table_all_div"},[_c('div',{staticClass:"listofall"},[_c('div',{staticClass:"list_date"},[_vm._m(1),_vm._v(" "),_c('p',[_c('span',{staticClass:"list_date_span"},[_vm._v("更新时间")]),_vm._v(" "),_c('span',{staticClass:"list_date_span"},[_vm._v(_vm._s(_vm.time))])])])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticStyle:{"overflow-y":"scroll","height":"600px"}},[(_vm.couponList.length>0)?_c('table',{staticClass:"ttt",staticStyle:{"table-layout":"fixed"}},[_c('tbody',_vm._l((_vm.couponList),function(value,index){return _c('tr',{staticClass:"tr_hover",class:{table_td:_vm.numbers(index)==='偶数'}},[_c('td',[_vm._v(_vm._s(index+1))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.name))]),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(_vm.createTime(value.create_time))}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(_vm.beginTime(value.give_out_begin_time,value.give_out_end_time))}}),_vm._v(" "),_c('td',{domProps:{"textContent":_vm._s(_vm.useTime(value.use_begin_time,value.use_end_time))}}),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.volume))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.face_value))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.condition))]),_vm._v(" "),_c('td',[_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.lookDtails(index)}}},[_vm._v("查看")])]),_vm._v(" "),_c('td',[_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.edit(index)}}},[_vm._v("编辑")]),_vm._v(" "),(value.is_online)?_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.bindings(index,0)}}},[_vm._v("下线")]):_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.bindings(index,1)}}},[_vm._v("上线")]),_vm._v(" "),_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.deleteManage(index)}}},[_vm._v("删除")])])])}),0)]):_c('div',{staticClass:"tooltip"},[_vm._m(3)])])]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"编辑活动","visible":_vm.dialogVisible,"center":""}},[_c('div',{staticClass:"dialog"},[_c('table',{staticStyle:{"text-align":"left","width":"100%"}},[_c('tr',[_c('td',[_vm._v("优惠卷名称:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入名称"},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("发放时间:")]),_vm._v(" "),_c('td',[_c('div',{staticClass:"block"},[_c('el-date-picker',{attrs:{"type":"date","placeholder":"选择日期","picker-options":_vm.pickerOptions0},on:{"change":_vm.lookStart},model:{value:(_vm.startGrant),callback:function ($$v) {_vm.startGrant=$$v},expression:"startGrant"}}),_vm._v(" "),_c('span',{staticStyle:{"font-size":"15px","display":"inline-block","width":"20px","height":"40px","line-height":"40px","text-align":"center"}},[_vm._v("至")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"date","placeholder":"选择日期","picker-options":_vm.pickerOptions0},on:{"change":_vm.lookEnd},model:{value:(_vm.endGrant),callback:function ($$v) {_vm.endGrant=$$v},expression:"endGrant"}})],1)])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("使用时间:")]),_vm._v(" "),_c('td',[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block"},[_c('el-date-picker',{attrs:{"type":"date","placeholder":"选择日期","picker-options":_vm.pickerOptions0},on:{"change":_vm.lookStart},model:{value:(_vm.useStartTime),callback:function ($$v) {_vm.useStartTime=$$v},expression:"useStartTime"}}),_vm._v(" "),_c('span',{staticStyle:{"font-size":"15px","display":"inline-block","width":"20px","height":"40px","line-height":"40px","text-align":"center"}},[_vm._v("至")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"date","placeholder":"选择日期","picker-options":_vm.pickerOptions0},on:{"change":_vm.lookEnd},model:{value:(_vm.useEndTime),callback:function ($$v) {_vm.useEndTime=$$v},expression:"useEndTime"}})],1)])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("发放数量:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入数量","type":"number"},nativeOn:{"mousewheel":function($event){$event.preventDefault();}},model:{value:(_vm.grantNumber),callback:function ($$v) {_vm.grantNumber=$$v},expression:"grantNumber"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("优惠卷类型:")]),_vm._v(" "),_c('td',{staticStyle:{"display":"flex"}},[_c('div',{staticClass:"inp",staticStyle:{"width":"40%"}},[_c('el-select',{attrs:{"placeholder":"请选择类型"},model:{value:(_vm.type),callback:function ($$v) {_vm.type=$$v},expression:"type"}},_vm._l((_vm.types),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1),_vm._v(" "),_c('div',{staticClass:"inp",staticStyle:{"width":"20%"}},[_c('el-input',{attrs:{"placeholder":"请输入金额","type":"number"},nativeOn:{"mousewheel":function($event){$event.preventDefault();}},model:{value:(_vm.money),callback:function ($$v) {_vm.money=$$v},expression:"money"}})],1)])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("广告图片:")]),_vm._v(" "),_c('td',{staticStyle:{"display":"flex"}},[_c('div',{staticClass:"img_start",class:{img_end:_vm.imageUrl.length>0}},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.imageUrl.length>0),expression:"imageUrl.length>0"}],staticStyle:{"width":"130px","height":"130px","position":"absolute"},attrs:{"src":_vm.imageUrl}}),_vm._v(" "),_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.imageUrl.length<1),expression:"imageUrl.length<1"}],staticStyle:{"width":"50px","height":"50px","position":"absolute","margin":"39px 0 0 41px"},attrs:{"src":_vm.addImg}}),_vm._v(" "),_c('input',{staticStyle:{"margin":"0 auto","opacity":"0","z-index":"1","width":"130px","height":"130px"},attrs:{"type":"file","accept":"image/gif,image/jpeg,image/jpg,image/png"},on:{"change":function($event){return _vm.tirggerFile($event)}}})])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("插图内容:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入图片内容"},model:{value:(_vm.img_text),callback:function ($$v) {_vm.img_text=$$v},expression:"img_text"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("广告链接:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"placeholder":"请输入链接"},model:{value:(_vm.url),callback:function ($$v) {_vm.url=$$v},expression:"url"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("领取条件:")]),_vm._v(" "),_c('td',[_c('el-select',{attrs:{"placeholder":"请选择领取条件"},model:{value:(_vm.condition),callback:function ($$v) {_vm.condition=$$v},expression:"condition"}},_vm._l((_vm.conditions),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1)])]),_vm._v(" "),_c('div',{staticClass:"buttons"},[_c('el-button',{staticStyle:{"margin-right":"108px"},on:{"click":_vm.cancels}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submission}},[_vm._v("确 定")])],1)])]),_vm._v(" "),_c('div',{staticClass:"fenye"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage,"page-sizes":[50,100,300,500],"page-size":_vm.limit,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.count},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("活动管理列表")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"list_date_head"},[_vm._v("活动管理列表")]),_c('span',{staticClass:"list_date_head"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"ttt",staticStyle:{"width":"99%","table-layout":"fixed"}},[_c('thead',[_c('tr',{staticClass:"bg"},[_c('td',[_vm._v("序号")]),_vm._v(" "),_c('td',[_vm._v("优惠券")]),_vm._v(" "),_c('td',[_vm._v("创建时间")]),_vm._v(" "),_c('td',[_vm._v("投放时间")]),_vm._v(" "),_c('td',[_vm._v("使用时间")]),_vm._v(" "),_c('td',[_vm._v("投放数量")]),_vm._v(" "),_c('td',[_vm._v("优惠卷类型")]),_vm._v(" "),_c('td',[_vm._v("金额")]),_vm._v(" "),_c('td',[_vm._v("领取详情")]),_vm._v(" "),_c('td',[_vm._v("操作")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"tooltip_img",attrs:{"src":__webpack_require__("9sZQ")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_CouponManage = (esExports);
// CONCATENATED MODULE: ./src/components/CouponManage.vue
function injectStyle (ssrContext) {
  __webpack_require__("ouCi")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-58d28b31"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  CouponManage,
  components_CouponManage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_CouponManage = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ouCi":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});