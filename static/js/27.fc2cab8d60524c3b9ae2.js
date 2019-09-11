webpackJsonp([27],{

/***/ "QAcZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "QuKH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/ActivityList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ActivityList = ({
  // inject:['reload'],
  name: "ActivityList",
  data: function data() {
    return {
      dialogVisible1: false, //删除模块控制
      idd: '', //指定的id
      add: false, //显示删除
      msg: [], // 列表渲染
      time: "", //当前时间
      type: '',
      limit: 50,
      offset: 0,
      count: 0, //总条数
      index: '', //指定地区的
      values: '',
      visible: '',
      dialogVisible: false,
      value6: '',
      value7: '',
      // list:[{
      //   savesName:'',//省的名字
      //   citysName:'',//市的名字
      //   areaName:'',//区的名字
      // }],//投放区域列表
      savesName: '', //省的名字
      citysName: '', //市的名字
      areaName: '', //区的名字
      activityName: '', //广告名字
      options: [{
        value: 'APP首页Banner',
        label: '1'
      }, {
        value: 'APP打开弹框',
        label: '2'
      }, {
        value: 'APP首次开启',
        label: '3'
      }],
      adv_location: '', //广告展示位置
      currentPage4: 1,
      activityUrl: '', //广告链接
      pickerOptions0: {
        //时间选择今天之前禁用
        disabledDate: function disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      statrtTime: '',
      endtime: '',
      imageUrl: '../../static/img/tishi.png',
      saves: [], //省
      citys: [], //市
      area: [], //区
      file_img: '', //img图片路径
      addOrEdit: true, //判断时编辑还是新增，默认时新增
      activyId: '' //编辑时传的id

    };
  },

  methods: {
    handleSizeChange: function handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange: function handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
    },

    //警告提示
    warning: function warning(msg) {
      this.$message({
        message: msg,
        type: 'warning'
      });
    },
    //当选择时间确定触发时执行
    lookStart: function lookStart() {
      this.statrtTime = Object(dates["a" /* formatDate */])(this.statrtTime, 'yyyy-MM-dd') + ' 00:00:00';
    },
    //当选择时间确定触发时执行
    lookEnd: function lookEnd() {
      this.endtime = Object(dates["a" /* formatDate */])(this.endtime, 'yyyy-MM-dd') + ' 00:00:00';
    },

    newActity: function newActity() {
      this.dialogVisible = true;
      this.activyId = '';
      this.activityName = '';
      this.statrtTime = '';
      this.endtime = '';
      this.adv_location = '';
      this.activityUrl = '';
      this.imageUrl = '../../static/img/tishi.png';
    },
    //选择文件图片
    tirggerFile: function tirggerFile(event) {
      this.file_img = event.target.files[0]; // (利用console.log输出看结构就知道如何处理档案资料)
      var file = event.target.files[0];
      var reader = new FileReader();
      var that = this;
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        that.imageUrl = this.result;
      };
    },

    //广告新增 / 编辑
    addActivity: function addActivity() {
      for (var i = 0; i < this.options.length; i++) {
        if (this.adv_location === this.options[i].value) {
          this.adv_location = this.options[i].label;
        }
      }
      var activityUrl;
      var that = this.$router;
      if (this.activityName === '') {
        return this.warning('请填写广告名称');
      } else if (this.statrtTime === '' || this.endtime === '') {
        return this.warning('请填写广告有效时间');
      } else if (this.statrtTime === '' || this.endtime === '') {
        return this.warning('请填写广告有效时间');
      }
      if (this.activityUrl.indexOf('https://') !== -1 || this.activityUrl.indexOf('http://') !== -1) {
        activityUrl = this.activityUrl;
      } else {
        return this.warning('请输入以http://或https://开头的有效链接');
      }
      // else if(this.areaName===''){
      //   return this.warning('请选择广告投放区域');
      // }


      var fd = new FormData();
      // var list=this.savesName+','+this.citysName+','+this.areaName;
      fd.append('name', this.activityName);
      fd.append('url', activityUrl);

      // fd.append('description','这是一个广告');
      //后面开放功能后做
      fd.append('district', '100000');
      // fd.append('district', this.citysName);
      // fd.append('district', this.areaName);
      fd.append('is_active', 'true');
      if (this.addOrEdit) {
        if (this.file_img === '') {
          return this.warning('请上传广告图片');
        }
        fd.append('adv_location', this.adv_location);
        fd.append('start_time', this.statrtTime);
        fd.append('end_time', this.endtime);
        fd.append('image', this.file_img);
        this.$jquery.ajax({
          url: this.$stors.state.ip + '/api_backend/v1/adverts/',
          type: "post",
          data: fd,
          processData: false,
          contentType: false,
          beforeSend: function beforeSend(XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("Authorization", 'jwt ' + localStorage.getItem('token'));
          },
          success: function success(data) {
            // window.clearInterval(timer);
            that.push({ path: '/PageJump', query: { id: 6 } });
          }
        });
      } else {
        if (this.file_img !== '') {
          fd.append('image', this.file_img);
        }
        fd.append('adv_location', this.adv_location);
        fd.append('start_time', this.statrtTime);
        fd.append('end_time', this.endtime);
        this.$jquery.ajax({
          url: this.$stors.state.ip + '/api_backend/v1/adverts/' + this.activyId + '/',
          type: "PATCH",
          data: fd,
          processData: false,
          contentType: false,
          beforeSend: function beforeSend(XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("Authorization", 'jwt ' + localStorage.getItem('token'));
          },
          success: function success(data) {
            // window.clearInterval(timer);
            that.push({ path: '/PageJump', query: { id: 6 } });
          }
        });
      }
    },
    //广告上线/下线
    upperOrlower: function upperOrlower(id, value) {
      var _this = this;

      var msg;
      if (value === false) {
        msg = '下线';
      } else {
        msg = '上线';
      }
      this.$confirm('此操作将' + msg + '该条广告, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this.$patch(_this.$stors.state.ip + '/api_backend/v1/adverts/' + id + '/', { "is_active": value }).then(function (res) {
          _this.$router.push({ path: '/PageJump', query: { id: 6 } });
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
      this.addOrEdit = false;
      this.dialogVisible = true;
      this.activyId = this.msg[index].id;
      this.activityName = this.msg[index].name;
      this.statrtTime = this.msg[index].start_time;
      this.endtime = this.msg[index].end_time;
      this.adv_location = this.msg[index].adv_location.name;
      this.activityUrl = this.msg[index].url;
      this.imageUrl = this.msg[index].image;
      this.savesName = this.msg[index].district[0]; //省的名字
      this.citysName = this.msg[index].district[1]; //市的名字
      this.areaName = this.msg[index].district[2]; //区的名字
    },
    //投放区域匹配
    district: function district(adress) {
      var city = [];
      var conuty = [];
      var savesName;
      var cityName;
      var areaName;
      for (var i = 0; i < this.saves.length; i++) {
        if (adress[0] === this.saves[i].id) {
          savesName = this.saves[i].name + '/';
          city = this.saves[i].city;
        }
      }
      for (var j = 0; j < city.length; j++) {
        if (adress[1] === city[j].id) {
          cityName = city[j].name + '/';
          conuty = city[j].county;
        }
      }
      for (var h = 0; h < conuty.length; h++) {
        if (adress[2] === conuty[h].id) {
          areaName = conuty[h].name;
        }
      }
      return savesName + cityName + areaName;
    },
    //删除指定的广告条
    shanChu: function shanChu(id) {
      this.idd = id;
      this.dialogVisible1 = true;
    },

    //取消
    cancels: function cancels() {
      this.dialogVisible = false;
      this.savesName = '';
      this.citysName = '';
      this.areaName = '';
    },
    //删除点击确认
    yes: function yes(id) {
      var _this2 = this;

      this.$delete(this.$stors.state.ip + '/api_backend/v1/adverts/' + this.idd + '/').then(function (response) {
        _this2.dialogVisible1 = false;
        _this2.msg.splice(_this2.msg[id], 1);
        // this.$router.push({path: '/PageJump', query: {id: 6}});
      });
    },
    numbers: function numbers(id) {
      if (id % 2 === 0) {
        return '偶数';
      } else {
        return '奇数';
      }
    },
    //新增地区
    newAdd: function newAdd() {
      // for (let i=0;i<this.list.length;i++){
      //   if(this.list[i].savesName===''||this.list[i].citysName===''||this.list[i].areaName===''){
      //     return alert('请先填好这条信息再新增')
      //   }
      // }
      var list = {
        savesName: '', //省的名字
        citysName: '', //市的名字
        areaName: '' //区的名字
      };
      this.add = true;
      if (this.list.length < 5) {
        this.list.push(list);
      } else {
        alert('最多选择投放五个区域');
      }
    },

    //删除新增
    del: function del(id) {
      if (this.list.length <= 1) {
        return;
      }
      var list = [];
      for (var i = 0; i < this.list.length; i++) {
        if (i !== id) {
          list.push(this.list[i]);
        }
      }
      this.list = list;
    },

    //获取列表
    getList: function getList(limit, offset) {
      var _this3 = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/adverts/?offset=' + offset + '&limit=' + limit).then(function (res) {
        _this3.msg = res.results;
        _this3.count = res.count;
        for (var i = 0; i < res.results.length; i++) {
          res.results[i].create_time = _this3.$moment(res.results[i].create_time).format("YYYY-MM-DD HH:mm:ss");
          res.results[i].start_time = _this3.$moment(res.results[i].start_time).format("YYYY-MM-DD HH:mm:ss");
          res.results[i].end_time = _this3.$moment(res.results[i].end_time).format("YYYY-MM-DD HH:mm:ss");
          if (res.results[i].end_time > _this3.time) {
            _this3.type = "正常";
          } else {
            _this3.type = "过期";
          }
        }
      });
    }
  },

  mounted: function mounted() {
    var _this4 = this;

    // var map = new AMap.Map("container", {
    //   resizeEnable: true
    // });
    // var auto = new AMap.Autocomplete({
    //   input: "tipinput"
    // });
    var myDate = new Date();
    this.time = Object(dates["a" /* formatDate */])(myDate, 'yyyy-MM-dd hh:mm:ss');
    this.getList(this.limit, this.offset);
    this.$get(this.$stors.state.ip + '/api_backend/v1/districtcode/').then(function (res) {
      _this4.saves = res;
    });
  },

  watch: {
    // list:{
    //   handler(newId, oldName){
    //     var cityList;
    //     if(newId.length>1){
    //       cityList=newId[newId.length-1];
    //     }else {
    //       cityList=newId[0];
    //     }
    //     for (let i=0;i<this.saves.length;i++){
    //       if(cityList.savesName===this.saves[i].id){
    //         this.citys=this.saves[i].city;
    //         console.log(this.citys)
    //         if(this.citys.length>0){
    //           for (let j=0;j<this.citys.length;j++){
    //             if(cityList.citysName===this.citys[j].id){
    //               this.area=this.citys[j].county;
    //             }
    //           }
    //         }
    //       }
    //     }
    //   },
    //   deep: true,
    //   immediate: true
    // },
    savesName: {
      handler: function handler(newId, oldName) {
        for (var i = 0; i < this.saves.length; i++) {
          if (newId === this.saves[i].id) {
            this.citys = this.saves[i].city;
            this.citysName = this.citys[0].id;
          }
        }
      },

      deep: true,
      immediate: true
    },
    citysName: {
      handler: function handler(newId, oldName) {
        for (var i = 0; i < this.citys.length; i++) {
          if (newId === this.citys[i].id) {
            this.area = this.citys[i].county;
            this.areaName = this.area[0].id;
          }
        }
      },

      deep: true,
      immediate: true
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-4387a54a","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/ActivityList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_c('div',{staticClass:"head_div_all"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"newText",on:{"click":_vm.newActity}},[_c('i',{staticClass:"el-icon-circle-plus",staticStyle:{"width":"25px","height":"25px","line-height":"25px"}}),_vm._v(" "),_c('p',[_vm._v("新建广告")])])]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"新增广告","visible":_vm.dialogVisible,"width":"610px","height":"500px","center":""}},[_c('table',{staticStyle:{"text-align":"left","width":"100%"}},[_c('tr',[_c('td',[_vm._v("广告名称:")]),_vm._v(" "),_c('td',[_c('el-input',{model:{value:(_vm.activityName),callback:function ($$v) {_vm.activityName=$$v},expression:"activityName"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("有效时间:")]),_vm._v(" "),_c('td',{attrs:{"width":"70%"}},[_c('div',{staticClass:"block"},[_c('el-date-picker',{attrs:{"type":"date","placeholder":"选择日期","picker-options":_vm.pickerOptions0},on:{"change":_vm.lookStart},model:{value:(_vm.statrtTime),callback:function ($$v) {_vm.statrtTime=$$v},expression:"statrtTime"}}),_vm._v(" "),_c('span',{staticStyle:{"font-size":"15px","display":"inline-block","width":"20px","height":"40px","line-height":"40px","text-align":"center"}},[_vm._v("至")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"date","placeholder":"选择日期","picker-options":_vm.pickerOptions0},on:{"change":_vm.lookEnd},model:{value:(_vm.endtime),callback:function ($$v) {_vm.endtime=$$v},expression:"endtime"}})],1)])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("展示位置:")]),_vm._v(" "),_c('td',[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.adv_location),callback:function ($$v) {_vm.adv_location=$$v},expression:"adv_location"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.label,attrs:{"label":item.value,"value":item.label}})}),1)],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("广告链接:")]),_vm._v(" "),_c('td',[_c('el-input',{attrs:{"type":"url"},model:{value:(_vm.activityUrl),callback:function ($$v) {_vm.activityUrl=$$v},expression:"activityUrl"}})],1)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("广告图片:")]),_vm._v(" "),_c('td',[_c('img',{staticStyle:{"width":"130px","height":"130px","position":"absolute"},attrs:{"src":_vm.imageUrl}}),_vm._v(" "),_c('input',{staticStyle:{"margin":"0 auto","opacity":"0","z-index":"1","width":"130px","height":"130px"},attrs:{"type":"file","accept":"image/gif,image/jpeg,image/jpg,image/png"},on:{"change":function($event){return _vm.tirggerFile($event)}}})])])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.cancels}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addActivity}},[_vm._v("确 定")])],1)]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"删除公告","visible":_vm.dialogVisible1,"width":"610px","center":""},on:{"update:visible":function($event){_vm.dialogVisible1=$event}}},[_c('p',[_vm._v("您确定要删除吗？")]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogVisible1 = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.yes(_vm.idd)}}},[_vm._v("确定")])],1)]),_vm._v(" "),_c('div',{staticClass:"table_all_div"},[_c('div',{staticClass:"listofall"},[_c('div',{staticClass:"list_date"},[_vm._m(1),_vm._v(" "),_c('p',[_c('span',{staticClass:"list_date_span"},[_vm._v("更新时间")]),_vm._v(" "),_c('span',{staticClass:"list_date_span"},[_vm._v(_vm._s(_vm.time))])])])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticStyle:{"overflow-y":"scroll","height":"600px"}},[(_vm.msg.length>0)?_c('table',{staticClass:"ttt",staticStyle:{"table-layout":"fixed"}},[_c('tbody',_vm._l((_vm.msg),function(value,index){return _c('tr',{staticClass:"tr_hover",class:{table_td:_vm.numbers(index)==='偶数'}},[_c('td',[_vm._v(_vm._s(index+1))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.name))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.create_time))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.start_time))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.end_time))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.adv_location.name))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(_vm.type))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[(value.is_active===false)?_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.upperOrlower(value.id,true)}}},[_vm._v("上线")]):_vm._e(),_vm._v(" "),(value.is_active===true)?_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.upperOrlower(value.id,false)}}},[_vm._v("下线")]):_vm._e()]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_c('div',[_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.edit(index)}}},[_vm._v("编辑")]),_vm._v(" "),_c('span',{staticClass:"link1 cursor",on:{"click":function($event){return _vm.shanChu(value.id)}}},[_vm._v("删除")])])])])}),0)]):_c('div',{staticClass:"tooltip"},[_vm._m(3)])])]),_vm._v(" "),_c('div',{staticClass:"fenye"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage4,"page-sizes":[50,100,300,500],"page-size":_vm.limit,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.count},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("广告管理列表")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"list_date_head"},[_vm._v("广告管理列表")]),_c('span',{staticClass:"list_date_head"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"ttt",staticStyle:{"width":"99%","table-layout":"fixed"}},[_c('thead',[_c('tr',{staticClass:"bg"},[_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v("序号")]),_vm._v(" "),_c('td',[_vm._v("广告名称")]),_vm._v(" "),_c('td',[_vm._v("创建时间")]),_vm._v(" "),_c('td',[_vm._v("开始时间")]),_vm._v(" "),_c('td',[_vm._v("结束时间")]),_vm._v(" "),_c('td',[_vm._v("广告位置")]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v("状态")]),_vm._v(" "),_c('td',[_vm._v("上线广告")]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v("操作")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"tooltip_img",attrs:{"src":__webpack_require__("9sZQ")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_ActivityList = (esExports);
// CONCATENATED MODULE: ./src/components/ActivityList.vue
function injectStyle (ssrContext) {
  __webpack_require__("QAcZ")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4387a54a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  ActivityList,
  components_ActivityList,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_ActivityList = __webpack_exports__["default"] = (Component.exports);


/***/ })

});