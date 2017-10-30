webpackJsonp([12],{

/***/ "9kba":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".logs{width:100%;overflow:auto}.logs,.logs .this_table{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.logs .this_table{padding-bottom:20px}.logs .this_table,.logs .this_table .el-table{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.logs .this_table .el-table .el-button{margin-left:0}.logs .this_table .el-table .el-table__empty-block,.logs .this_table .el-table .el-table__header{width:100%!important}", "", {"version":3,"sources":["D:/WEBUIS_NEW/WEBUIS/src/components/system/systems/logs.vue"],"names":[],"mappings":"AACA,MAQE,WAAY,AACZ,aAAe,CAChB,AACD,wBAVE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,qBAAuB,CAgBhC,AAZD,kBAWE,mBAAqB,CACtB,AACD,8CATE,mBAAoB,AAChB,oBAAqB,AACjB,WAAa,CAWtB,AACD,uCACE,aAAe,CAChB,AAID,iGACE,oBAAsB,CACvB","file":"logs.vue","sourcesContent":["\n.logs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  overflow: auto;\n}\n.logs .this_table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-bottom: 20px;\n}\n.logs .this_table .el-table {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.logs .this_table .el-table .el-button {\n  margin-left: 0;\n}\n.logs .this_table .el-table .el-table__header {\n  width: 100%!important;\n}\n.logs .this_table .el-table .el-table__empty-block {\n  width: 100%!important;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "IKzR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"logs"},[_c('nav',{staticClass:"pub_select"},[_c('el-form',{ref:"navForm",attrs:{"model":_vm.navForm,"label-width":"86px"}},[_c('el-row',[_c('el-col',[_c('el-form-item',{attrs:{"label":"所属院区:","prop":"hospitalID"}},[_c('el-select',{attrs:{"placeholder":"请选择","clearable":""},on:{"change":_vm.loadDept},model:{value:(_vm.navForm.hospitalID),callback:function ($$v) {_vm.navForm.hospitalID=$$v},expression:"navForm.hospitalID"}},_vm._l((_vm.array.hospitalList),function(item){return _c('el-option',{key:item.hospitalID,attrs:{"value":item.hospitalID,"label":item.hospitalName}})}))],1)],1),_vm._v(" "),_c('el-col',[_c('el-form-item',{attrs:{"label":"检查科室:","prop":"departmentID"}},[_c('el-select',{attrs:{"placeholder":"请选择"},on:{"change":_vm.loadUser},model:{value:(_vm.navForm.departmentID),callback:function ($$v) {_vm.navForm.departmentID=$$v},expression:"navForm.departmentID"}},_vm._l((_vm.array.departmentList),function(item){return _c('el-option',{key:item.depID,attrs:{"value":item.depID,"label":item.depName}})}))],1)],1),_vm._v(" "),_c('el-col',[_c('el-form-item',{attrs:{"label":"检查流水:","prop":"examineID"}},[_c('el-input',{attrs:{"placeholder":"请输入检查流水号"},model:{value:(_vm.navForm.examineID),callback:function ($$v) {_vm.navForm.examineID=$$v},expression:"navForm.examineID"}})],1)],1),_vm._v(" "),_c('el-col',[_c('el-form-item',{attrs:{"label":"日志类型:","prop":"logType"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.navForm.logType),callback:function ($$v) {_vm.navForm.logType=$$v},expression:"navForm.logType"}},_vm._l((_vm.array.logTypeList),function(item){return _c('el-option',{key:item.dataDicValueCode,attrs:{"value":item.dataDicValueCode,"label":item.dataDicValueName}})}))],1)],1),_vm._v(" "),_c('el-col',[_c('el-form-item',{attrs:{"label":"操作用户:","prop":"userInfoID"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.navForm.userInfoID),callback:function ($$v) {_vm.navForm.userInfoID=$$v},expression:"navForm.userInfoID"}},_vm._l((_vm.array.userList),function(item){return _c('el-option',{key:item.userInfoID,attrs:{"value":item.userInfoID,"label":item.userName}})}))],1)],1),_vm._v(" "),_c('el-col',[_c('el-form-item',{attrs:{"label":"IP地址:","prop":"iPAddress"}},[_c('el-input',{attrs:{"placeholder":"请输入IP地址"},model:{value:(_vm.navForm.iPAddress),callback:function ($$v) {_vm.navForm.iPAddress=$$v},expression:"navForm.iPAddress"}})],1)],1),_vm._v(" "),_c('el-col',[_c('el-form-item',{attrs:{"label":"时间:","prop":"timeSlot"}},[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","placeholder":"选择日期范围","picker-options":_vm.obj.pickerOptions},model:{value:(_vm.navForm.timeSlot),callback:function ($$v) {_vm.navForm.timeSlot=$$v},expression:"navForm.timeSlot"}})],1)],1),_vm._v(" "),_c('el-button',{staticClass:"mlem",attrs:{"type":"primary"},on:{"click":function($event){_vm.queryData(true)}}},[_vm._v("查询")]),_vm._v(" "),_c('el-button',{staticClass:"mlem",on:{"click":function($event){_vm.resetForm('navForm')}}},[_vm._v("重置")])],1)],1)],1),_vm._v(" "),_c('section',{staticClass:"pub_hr"},[_c('div',[_c('el-breadcrumb',{attrs:{"separator":"/"}},[_c('el-breadcrumb-item',[_vm._v("系统管理")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("系统设置")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("日志")])],1)],1),_vm._v(" "),_c('div',[_c('el-button',{staticClass:"mlem",on:{"click":_vm.queryData}},[_vm._v("刷新")]),_vm._v(" "),_c('span',{staticClass:"mlem"},[_vm._v("\n          日志共"),_c('font',{staticClass:"pub_count"},[_vm._v(_vm._s(_vm.other.totalCount))]),_vm._v("条\n      ")],1)],1)]),_vm._v(" "),_c('section',{staticClass:"this_table"},[_c('el-table',{directives:[{name:"scroll",rawName:"v-scroll",value:(_vm.queryData),expression:"queryData"}],attrs:{"data":_vm.array.tableData,"stripe":"","border":"","height":"100"}},[_c('el-table-column',{attrs:{"label":"操作","width":"150","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":"删除","disabled":true,"placement":"top-start"}},[_c('el-button',{attrs:{"size":"mini","plain":true,"type":"danger","icon":"delete"},on:{"click":function($event){_vm.deleted(scope.row.logID)}}})],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"hospitalName","label":"所属院区","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"departmentName","label":"检查科室","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"examineID","label":"检查流水","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"logTypeName","label":"日志类型","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"userName","label":"操作用户","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"iPAddress","label":"IP地址","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"eventTime","label":"操作时间","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"description","label":"日志内容","align":"center","show-overflow-tooltip":""}})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "WPFs":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9kba");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("0fb13e14", content, true);

/***/ }),

/***/ "cyMc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_logs_vue__ = __webpack_require__("yZVZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_33d5d812_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_logs_vue__ = __webpack_require__("IKzR");
function injectStyle (ssrContext) {
  __webpack_require__("WPFs")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_logs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_33d5d812_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_logs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "yZVZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__("Gu7T");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      navForm: {
        hospitalID: '',
        departmentID: '',
        examineID: '',
        logType: '',
        userInfoID: '',
        iPAddress: '',
        timeSlot: ''
      },
      array: {
        tableData: [], //表格数据
        hospitalList: [], //所属院区数据
        departmentList: [], //检查科室数据
        logTypeList: [], //日志类型数据
        userList: [] //操作用户数据
      },
      obj: {
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick: function onClick(picker) {
              var end = new Date();
              var start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick: function onClick(picker) {
              var end = new Date();
              var start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick: function onClick(picker) {
              var end = new Date();
              var start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        }
      },
      other: {
        pageStart: 0,
        totalCount: 0,
        isFirst: true
      },
      alert: {
        formVisible: true
      }
    };
  },

  computed: {},
  created: function created() {
    this.queryData(true);
  },

  methods: {
    //加载列表
    queryData: function queryData(can) {
      var _this = this;

      can ? this.other.pageStart = 0 : this.other.pageStart++;
      var time = this.navForm.timeSlot;
      var startTime = '';
      var endTime = '';
      if (time.length > 0) {
        startTime = time[0].getFullYear() + '-' + (time[0].getMonth() + 1) + '-' + time[0].getDate();
        endTime = time[1].getFullYear() + '-' + (time[1].getMonth() + 1) + '-' + time[1].getDate();
      }
      this.$http.get(this.$location.sysServerLogfindPage, {
        params: {
          hospitalID: this.navForm.hospitalID,
          departmentID: this.navForm.departmentID,
          examineID: this.navForm.examineID,
          logType: this.navForm.logType,
          userInfoID: this.navForm.userInfoID,
          iPAddress: this.navForm.iPAddress,
          startTime: startTime,
          endTime: endTime,
          pageStart: this.other.pageStart
        }
      }).then(function (data) {
        var res = data.returnContent;
        if (data.returnCode == '1') {
          _this.other.totalCount = res.totalCount;
          _this.array.hospitalList = res.sysHospitalManagerList;
          _this.array.logTypeList = res.logTypeList;
          var list = res.sysServerLogList;
          if (can) {
            _this.array.tableData = list || [];
          } else {
            var _array$tableData;

            (_array$tableData = _this.array.tableData).push.apply(_array$tableData, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(list));
          }
          _this.navForm.hospitalID = res.sessionUser.hospitalID;
          _this.navForm.departmentID = res.sessionUser.departmentID;
        }
      });
    },

    //加载科室
    loadDept: function loadDept() {
      var _this2 = this;

      if (!this.other.isFirst) {
        this.navForm.departmentID = '';
      }
      this.other.isFirst = false;
      this.array.departmentList = [];
      this.$http.get(this.$location.sysUserInfoloadDept, {
        params: {
          hospitalID: this.navForm.hospitalID
        }
      }).then(function (data) {
        var res = data.returnContent;
        if (data.returnCode == '1') {
          _this2.array.departmentList = res || [];
        }
      });
    },

    //加载用户
    loadUser: function loadUser() {
      var _this3 = this;

      this.navForm.userInfoID = '';
      this.array.userList = [];
      this.$http.get(this.$location.sysUserInfoloadUser, {
        params: {
          hospitalID: this.navForm.hospitalID,
          departmentID: this.navForm.departmentID
        }
      }).then(function (data) {
        var res = data.returnContent;
        if (data.returnCode == '1') {
          _this3.array.userList = res.sysUserInfoList || [];
        }
      });
    },

    //删除
    deleted: function deleted(logID) {
      var _this4 = this;

      this.$confirm('是否确认删除该条信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this4.$http.get(_this4.$location.sysServerLogdelete, {
          params: {
            logID: logID
          }
        }).then(function (data) {
          var message = data.returnContent;
          if (data.returnCode == '1') {
            _this4.$message({
              type: 'success',
              message: message,
              duration: 1000
            });
            _this4.queryData(true);
          }
        });
      }).catch(function () {});
    },

    //form重置
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
});

/***/ })

});
//# sourceMappingURL=12.c73f3c2e12ed5580cb22.js.map