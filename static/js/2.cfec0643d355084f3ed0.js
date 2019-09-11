webpackJsonp([2],{

/***/ "HzJ8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("l+I1"), __esModule: true };

/***/ }),

/***/ "I+/A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/jia.7d4fe97.png";

/***/ }),

/***/ "l+I1":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("SXOF");
__webpack_require__("mxCW");
module.exports = __webpack_require__("o6D2");


/***/ }),

/***/ "o6D2":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("fRqy");
var get = __webpack_require__("d+Iz");
module.exports = __webpack_require__("Rv9F").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "uk3c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("HzJ8");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./src/utils/dates.js
var dates = __webpack_require__("TbAp");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/components/SiteList.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SiteList = ({
  name: "SiteList",
  data: function data() {
    return {
      currentPage4: 1,
      count: 0,
      limit: 50,
      siteList: [],
      lineList: [],
      lineListAll: [],
      lineText: '', //页面所选的公交线路
      distanceName: '', //页面所选的往返路程
      edits: 0, //当筛选出站点时才显示编辑，默认不显示
      level_name: '', //判断是否是内部员工是的话才能选择公司，否自不能选择公司
      distance: [{
        id: 1,
        name: '去'
      }, {
        id: 2,
        name: '返程'
      }],
      offset: 0,
      time: '',
      dialogVisible: false,
      siteNames: [{
        code: 1,
        name: '',
        longitude: '',
        latitude: ''
      }],
      lineName: '', //线路名称
      goOrBack: '', //去返程
      lists: [{
        id: 1,
        name: '去'
      }, {
        id: 2,
        name: '返程'
      }],
      lineId: '', //线路id
      editOrSub: 0, //编辑或者添加，默认时添加
      timeout: '',
      restaurants: [],
      index: ''
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
    getIndex: function getIndex(index) {
      this.index = index;
    },
    handleSelect: function handleSelect(item) {
      this.siteNames[this.index].longitude = item.longitude;
      this.siteNames[this.index].latitude = item.latitude;
    },
    querySearchAsync: function querySearchAsync(queryString, cb, item) {
      var _this = this;

      var that = this;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        that.$get(_this.$stors.state.ip + '/api_backend/v1/busstations?offset=0&limit=9999&name=' + queryString + '&round_trip=' + _this.goOrBack).then(function (res) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = get_iterator_default()(res.results), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var i = _step.value;

              i.value = i.name; //必须为每个对象增加value字段！！因为autocomplete只识别value字段并在下拉列中显示
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          var sugList = res.results; //数组
          if (sugList.length === 0) {
            sugList = [{ value: '暂无数据' }];
          }
          cb(sugList); // 调用 callback 返回建议列表的数据
        });
      }, 3000);
    },

    addSite: function addSite() {
      var siteName = {
        code: '',
        name: '',
        longitude: '',
        latitude: ''
      };
      this.siteNames.push(siteName);
    },
    deletes: function deletes(index) {
      this.siteNames.splice(index, 1);
    },
    //开始时间转换显示
    startTime: function startTime(time) {
      return this.$moment(time).format("HH:mm:ss");
    },
    //结束时间转换显示
    endTime: function endTime(time) {
      return this.$moment(time).format("HH:mm:ss");
    },
    //编辑
    edit: function edit(index) {
      this.goOrBack = this.distanceName;
      this.lineName = this.lineText;
      this.editOrSub = 1;
      this.dialogVisible = true;
      this.siteNames = [];
      for (var i = 0; i < this.siteList.length; i++) {
        this.siteNames.push({
          code: this.siteList[i].code,
          name: this.siteList[i].name,
          longitude: this.siteList[i].longitude,
          latitude: this.siteList[i].latitude
        });
      }
    },
    //取消
    cancels: function cancels() {
      this.dialogVisible = false;
      if (this.lineText !== '') {
        this.edits = 1;
      } else {
        this.edits = 0;
      }
      this.lineId = '';
      this.lineName = '';
      this.moneys = '';
      this.start_time = '';
      this.end_time = '';
      this.goOrBack = '';
    },
    //编辑、新增线路的提交
    addActivity: function addActivity() {
      var _this2 = this;

      if (this.lineName === '') {
        return this.warning('请输入线路名称');
      } else if (this.goOrBack === '') {
        return this.warning('请选择去程/返程');
      }
      for (var i = 0; i < this.siteNames.length; i++) {
        this.siteNames[i].code = i;
      }
      this.$post(this.$stors.state.ip + '/api_backend/v1/busstations/', {
        round_trip: this.goOrBack, data: this.siteNames,
        bus_route: this.lineName
      }).then(function (res) {
        _this2.$router.push({ path: '/PageJump', query: { id: 12.2 } });
      });
    },
    //获取线路列表
    getList: function getList(limit, offset) {
      var _this3 = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/busstations?offset=' + offset + '&limit=' + limit).then(function (res) {
        _this3.siteList = res.results;
        _this3.count = res.count;
      });
    },
    getBusLine: function getBusLine() {
      var _this4 = this;

      this.$get(this.$stors.state.ip + '/api_backend/v1/busroutes/?offset=0&limit=9999').then(function (res) {
        _this4.lineList = res.results; //这是编辑、添加的时候所需要的公交线路
        _this4.lineListAll = res.results; //这是列表查询时需要的公交线路
      });
    }

  },
  mounted: function mounted() {
    this.getBusLine();
    this.level_name = localStorage.getItem('level_name');
    this.getList(this.limit, this.offset);
    var myDate = new Date();
    this.time = Object(dates["a" /* formatDate */])(myDate, 'yyyy-MM-dd hh:mm:ss');
  },

  watch: {
    lineText: {
      handler: function handler(newName, oldName) {
        var _this5 = this;

        if (this.lineText === '' || this.distanceName === '') {
          return;
        }
        this.$get(this.$stors.state.ip + '/api_backend/v1/busstations?bus_route=' + newName + '&' + 'round_trip=' + this.distanceName).then(function (res) {
          _this5.siteList = res.results;
          if (res.results.length > 0) {
            _this5.count = res.count;
            _this5.edits = 1;
          }
        });
      },

      immediate: true,
      deep: true
    },
    distanceName: {
      handler: function handler(newName, oldName) {
        var _this6 = this;

        if (this.lineText === '' || this.distanceName === '') {
          return;
        }
        this.$get(this.$stors.state.ip + '/api_backend/v1/busstations?bus_route=' + this.lineText + '&' + 'round_trip=' + newName).then(function (res) {
          _this6.siteList = res.results;
          if (res.results.length > 0) {
            _this6.count = res.count;
            _this6.edits = 1;
          }
        });
      },

      immediate: true,
      deep: true
    }

  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-086f432d","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/components/SiteList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"all_center"},[_c('el-dialog',{attrs:{"title":"添加站点","visible":_vm.dialogVisible,"height":"500px","center":""}},[_c('div',{staticStyle:{"width":"100%","max-height":"590px","overflow-y":"scroll"}},[_c('table',{staticStyle:{"width":"100%"}},[_c('tr',[_c('td',{staticStyle:{"width":"100px","text-align":"center","display":"inline-block"}},[_vm._v("线路名称:")]),_vm._v(" "),_c('td',[_c('el-select',{attrs:{"disabled":_vm.edits===1,"placeholder":"请选择"},model:{value:(_vm.lineName),callback:function ($$v) {_vm.lineName=$$v},expression:"lineName"}},_vm._l((_vm.lineList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.line_no,"value":item.id}})}),1)],1)]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"100px","text-align":"center"}},[_vm._v("去/返程:")]),_vm._v(" "),_c('td',[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.goOrBack),callback:function ($$v) {_vm.goOrBack=$$v},expression:"goOrBack"}},_vm._l((_vm.lists),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1)]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"100px","text-align":"center"}},[_vm._v("站点:")]),_vm._v(" "),_c('div',{staticClass:"site_text",staticStyle:{"margin-top":"10px","display":"flex","justify-content":"left"}},[_c('div',{staticStyle:{"width":"200px","text-align":"center"}},[_vm._v("站点")]),_vm._v(" "),_c('div',{staticStyle:{"width":"200px","text-align":"center"}},[_vm._v("经度")]),_vm._v(" "),_c('div',{staticStyle:{"width":"200px","text-align":"center"}},[_vm._v("纬度")]),_vm._v(" "),_c('div',{staticClass:"site_text_name",staticStyle:{"width":"20%","justify-content":"center","display":"flex","align-items":"center"}},[_c('img',{staticClass:"img_jia",attrs:{"src":__webpack_require__("I+/A")},on:{"click":_vm.addSite}})])]),_vm._v(" "),_vm._l((_vm.siteNames),function(value,index){return _c('div',{staticClass:"site_text",staticStyle:{"margin-top":"10px","display":"flex","justify-content":"left"}},[_c('div',{staticStyle:{"width":"200px"}},[_c('el-autocomplete',{attrs:{"fetch-suggestions":_vm.querySearchAsync,"placeholder":"请输入站点名称"},on:{"select":_vm.handleSelect,"input":function($event){return _vm.getIndex(index)}},model:{value:(value.name),callback:function ($$v) {_vm.$set(value, "name", $$v)},expression:"value.name"}})],1),_vm._v(" "),_c('div',{staticStyle:{"width":"200px"}},[_c('el-input',{attrs:{"placeholder":"请输入经度"},model:{value:(value.longitude),callback:function ($$v) {_vm.$set(value, "longitude", $$v)},expression:"value.longitude"}})],1),_vm._v(" "),_c('div',{staticStyle:{"width":"200px"}},[_c('el-input',{attrs:{"placeholder":"请输入纬度"},model:{value:(value.latitude),callback:function ($$v) {_vm.$set(value, "latitude", $$v)},expression:"value.latitude"}})],1),_vm._v(" "),_c('div',{staticClass:"site_text_name",staticStyle:{"cursor":"pointer","width":"20%","text-align":"center"},on:{"click":function($event){return _vm.deletes(index)}}},[_c('span',{staticClass:"deletes"},[_vm._v("删除")])])])})],2)]),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"30px","margin-bottom":"30px","display":"flex","justify-content":"center"}},[_c('el-button',{on:{"click":_vm.cancels}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{staticStyle:{"margin-left":"80px"},on:{"click":_vm.addActivity}},[_vm._v("提交")])],1)])])],1),_vm._v(" "),_c('div',{staticClass:"table_all_div "},[_c('div',{staticClass:"listofall"},[_c('div',{staticClass:"list_date"},[_vm._m(1),_vm._v(" "),_c('p',[_c('span',{staticClass:"list_date_span"},[_vm._v("更新时间")]),_vm._v(" "),_c('span',{staticClass:"list_date_span"},[_vm._v(_vm._s(_vm.time))])])]),_vm._v(" "),_c('div',{staticStyle:{"align-items":"center","display":"flex","margin-right":"15%"}},[_c('div',[_vm._v("公交线路：")]),_vm._v(" "),_c('div',[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.lineText),callback:function ($$v) {_vm.lineText=$$v},expression:"lineText"}},_vm._l((_vm.lineListAll),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.line_no,"value":item.id}})}),1)],1),_vm._v(" "),_c('div',{staticStyle:{"margin-left":"20px"}},[_vm._v("往返程：")]),_vm._v(" "),_c('div',[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.distanceName),callback:function ($$v) {_vm.distanceName=$$v},expression:"distanceName"}},_vm._l((_vm.distance),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1),_vm._v(" "),_c('div',{staticStyle:{"margin-left":"20px"}},[(_vm.level_name==='PC用户')?_c('el-button',{on:{"click":_vm.edit}},[_vm._v("编辑")]):_vm._e()],1)])]),_vm._v(" "),_c('div',[_vm._m(2),_vm._v(" "),_c('div',{staticStyle:{"overflow-y":"scroll","height":"600px"}},[(_vm.siteList.length>0)?_c('table',{staticClass:"table_text  ",staticStyle:{"table-layout":"fixed"}},[_c('tbody',_vm._l((_vm.siteList),function(value,index){return _c('tr',{staticClass:"tr_hover",class:{table_td:_vm.numbers(index)==='偶数'}},[_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(index+1))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.code))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(value.line_nos))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.name))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.round_trip_name))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.longitude))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.latitude))]),_vm._v(" "),_c('td',{staticStyle:{"word-wrap":"break-word"}},[_vm._v(_vm._s(value.company_name))])])}),0)]):_c('div',{staticClass:"tooltip"},[_vm._m(3)])])])]),_vm._v(" "),_c('div',{staticClass:"fenye"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage4,"page-sizes":[50,100,300,500],"page-size":_vm.limit,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.count},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"head_div_all"},[_c('div',{staticClass:"sousuo"},[_c('span',{staticClass:"sousuo_span "},[_vm._v("站点管理列表")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"list_date_head"},[_vm._v("站点管理列表")]),_c('span',{staticClass:"list_date_head"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"table_text",staticStyle:{"width":"99%","table-layout":"fixed"}},[_c('thead',[_c('tr',{staticClass:"bg"},[_c('td',[_vm._v("序号")]),_vm._v(" "),_c('td',[_vm._v("站点编号")]),_vm._v(" "),_c('td',[_vm._v("线路名称")]),_vm._v(" "),_c('td',[_vm._v("站点名称")]),_vm._v(" "),_c('td',[_vm._v("去/返程")]),_vm._v(" "),_c('td',[_vm._v("经度")]),_vm._v(" "),_c('td',[_vm._v("纬度")]),_vm._v(" "),_c('td',[_vm._v("所属公司")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"tooltip_img",attrs:{"src":__webpack_require__("9sZQ")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_SiteList = (esExports);
// CONCATENATED MODULE: ./src/components/SiteList.vue
function injectStyle (ssrContext) {
  __webpack_require__("zmDy")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-086f432d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  SiteList,
  components_SiteList,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_SiteList = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "zmDy":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});