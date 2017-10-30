webpackJsonp([4],{

/***/ "B+1T":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("YTYA");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("4cd8c188", content, true);

/***/ }),

/***/ "YTYA":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".commonSymbols{width:100%;overflow:auto}.commonSymbols,.commonSymbols .this_table{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.commonSymbols .this_table{padding-bottom:20px}.commonSymbols .this_table,.commonSymbols .this_table .el-table{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.commonSymbols .this_table .el-table .el-button{margin-left:0}.commonSymbols .this_table .el-table .el-table__empty-block,.commonSymbols .this_table .el-table .el-table__header{width:100%!important}.commonSymbols .this_enable{color:green;cursor:pointer}", "", {"version":3,"sources":["D:/WEBUIS_NEW/WEBUIS/src/components/system/template/commonSymbol.vue"],"names":[],"mappings":"AACA,eAQE,WAAY,AACZ,aAAe,CAChB,AACD,0CAVE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,qBAAuB,CAgBhC,AAZD,2BAWE,mBAAqB,CACtB,AACD,gEATE,mBAAoB,AAChB,oBAAqB,AACjB,WAAa,CAWtB,AACD,gDACE,aAAe,CAChB,AAID,mHACE,oBAAsB,CACvB,AACD,4BACE,YAAa,AACb,cAAgB,CACjB","file":"commonSymbol.vue","sourcesContent":["\n.commonSymbols {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  overflow: auto;\n}\n.commonSymbols .this_table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-bottom: 20px;\n}\n.commonSymbols .this_table .el-table {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.commonSymbols .this_table .el-table .el-button {\n  margin-left: 0;\n}\n.commonSymbols .this_table .el-table .el-table__header {\n  width: 100%!important;\n}\n.commonSymbols .this_table .el-table .el-table__empty-block {\n  width: 100%!important;\n}\n.commonSymbols .this_enable {\n  color: green;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "nxi5":
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      navForm: {
        examineType: ''
      },
      popupForm: {
        hospitalID: '',
        departmentID: '',
        examineType: '',
        signID: '',
        signName: ''
      },
      rules: {
        signName: [{ required: true, message: '请输入符号名称', trigger: 'blur'
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        }]
      },
      array: {
        examineTypeList: [], //左侧树形数据
        tableData: [] //表格数据
      },
      obj: {},
      other: {
        pageStart: 0,
        totalCount: 0,
        isAdd: true,
        title: '新建'
      },
      alert: {
        popupVisible: false
      }
    };
  },

  computed: {},
  created: function created() {
    this.findTree();
  },

  methods: {
    //加载左侧树形
    findTree: function findTree() {
      var _this = this;

      this.$http.get(this.$location.sysCommonSignfindTree).then(function (data) {
        var res = data.returnContent;
        _this.array.examineTypeList = res || [];
        _this.navForm.examineType = res[0].treeName;
        _this.queryData(true);
      });
      console.log(this.$location.sysCommonSignfindTree);
    },

    //加载列表
    queryData: function queryData(can) {
      var _this2 = this;

      can ? this.other.pageStart = 0 : this.other.pageStart++;
      this.$http.get(this.$location.sysCommonSignfindPage, {
        params: {
          examineType: this.navForm.examineType,
          pageStart: this.other.pageStart
        }
      }).then(function (data) {
        var list = data.returnContent.sysCommonSignList;
        _this2.other.totalCount = data.returnContent.totalCount;
        _this2.popupForm.hospitalID = data.returnContent.hospitalID;
        _this2.popupForm.departmentID = data.returnContent.departmentID;
        if (can) {
          _this2.array.tableData = list || [];
        } else {
          var _array$tableData;

          (_array$tableData = _this2.array.tableData).push.apply(_array$tableData, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(list));
        }
      });
    },

    //新建
    addInfo: function addInfo() {
      this.other.isAdd = true;
      this.other.title = '新建';
      this.popupForm.examineType = this.navForm.examineType;
      this.alert.popupVisible = true;
    },

    //新建保存
    addInfoSave: function addInfoSave(type) {
      var _this3 = this;

      this.$http.get(this.$location.sysCommonSigninsert, {
        params: {
          hospitalID: this.popupForm.hospitalID,
          departmentID: this.popupForm.departmentID,
          examineType: this.popupForm.examineType,
          signName: this.popupForm.signName
        }
      }).then(function (data) {
        var msg = data.returnContent;
        _this3.$message({
          type: 'success',
          message: msg,
          duration: 1000
        });
        _this3.queryData(true);
      });
      if (type == '1') {
        this.popupForm.signName = '';
      } else {
        this.resetForm('popupForm');
        this.alert.popupVisible = false;
      }
    },

    //编辑
    editInfo: function editInfo(list) {
      this.other.isAdd = false;
      this.other.title = '编辑';
      this.popupForm.examineType = this.navForm.examineType;
      this.popupForm.signID = list.signID;
      this.popupForm.signName = list.signName;
      this.alert.popupVisible = true;
    },

    //编辑保存
    editInfoSave: function editInfoSave() {
      var _this4 = this;

      this.$http.get(this.$location.sysCommonSignupdate, {
        params: {
          hospitalID: this.popupForm.hospitalID,
          departmentID: this.popupForm.departmentID,
          examineType: this.popupForm.examineType,
          signName: this.popupForm.signName,
          signID: this.popupForm.signID
        }
      }).then(function (data) {
        var msg = data.returnContent;
        _this4.$message({
          type: 'success',
          message: msg,
          duration: 1000
        });
        _this4.queryData(true);
      });
      this.resetForm('popupForm');
      this.alert.popupVisible = false;
    },

    //启用状态
    enabledState: function enabledState(signID, state) {
      var _this5 = this;

      var stateName = void 0;
      if (state == '0') {
        state = '1';
        stateName = '启用';
      } else if (state == '1') {
        state = '0';
        stateName = '停用';
      }
      this.$confirm('\u662F\u5426\u786E\u8BA4' + stateName + '?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this5.$http.get(_this5.$location.sysCommonSignupdateState, {
          params: {
            signID: signID,
            state: state
          }
        }).then(function (data) {
          var message = data.returnContent;
          _this5.$message({
            type: 'success',
            message: message,
            duration: 1000
          });
          _this5.queryData(true);
        });
      }).catch(function () {});
    },

    //删除
    deleted: function deleted(signID) {
      var _this6 = this;

      this.$confirm('是否确认删除该条信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this6.$http.get(_this6.$location.sysCommonSigndelete, {
          params: {
            signID: signID
          }
        }).then(function (data) {
          var message = data.returnContent;
          _this6.$message({
            type: 'success',
            message: message,
            duration: 1000
          });
          _this6.queryData(true);
        });
      }).catch(function () {});
    },

    //清除弹框form
    closePopup: function closePopup() {
      this.alert.popupVisible = false;
      this.resetForm('popupForm');
    },

    //form重置
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
});

/***/ }),

/***/ "uA4M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_commonSymbol_vue__ = __webpack_require__("nxi5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_765ecfb0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_commonSymbol_vue__ = __webpack_require__("vD5r");
function injectStyle (ssrContext) {
  __webpack_require__("B+1T")
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_commonSymbol_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_765ecfb0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_commonSymbol_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "vD5r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"commonSymbols"},[_c('nav',{staticClass:"pub_select"},[_c('el-form',{ref:"navForm",attrs:{"model":_vm.navForm,"label-width":"86px"}},[_c('el-row',[_c('el-col',[_c('el-form-item',{attrs:{"label":"检查类型:","prop":"examineType"}},[_c('el-select',{attrs:{"placeholder":"请选择","clearable":""},model:{value:(_vm.navForm.examineType),callback:function ($$v) {_vm.navForm.examineType=$$v},expression:"navForm.examineType"}},_vm._l((_vm.array.examineTypeList),function(item){return _c('el-option',{key:item.treeID,attrs:{"value":item.treeName,"label":item.treeName}})}))],1)],1),_vm._v(" "),_c('el-button',{staticClass:"mlem",attrs:{"type":"primary"},on:{"click":function($event){_vm.queryData(true)}}},[_vm._v("查询")]),_vm._v(" "),_c('el-button',{staticClass:"mlem",on:{"click":function($event){_vm.resetForm('navForm')}}},[_vm._v("重置")])],1)],1)],1),_vm._v(" "),_c('section',{staticClass:"pub_hr"},[_c('div',[_c('el-breadcrumb',{attrs:{"separator":"/"}},[_c('el-breadcrumb-item',[_vm._v("系统管理")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("模板设置")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("常用符号")])],1)],1),_vm._v(" "),_c('div',[_c('el-button',{staticClass:"mlem",attrs:{"type":"primary"},on:{"click":_vm.addInfo}},[_vm._v("新建")]),_vm._v(" "),_c('el-button',{staticClass:"mlem",on:{"click":_vm.queryData}},[_vm._v("刷新")]),_vm._v(" "),_c('span',{staticClass:"mlem"},[_vm._v("\n          常用符号共"),_c('font',{staticClass:"pub_count"},[_vm._v(_vm._s(_vm.other.totalCount))]),_vm._v("条\n      ")],1)],1)]),_vm._v(" "),_c('section',{staticClass:"this_table"},[_c('el-table',{directives:[{name:"scroll",rawName:"v-scroll",value:(_vm.queryData),expression:"queryData"}],attrs:{"data":_vm.array.tableData,"stripe":"","border":"","height":"100"}},[_c('el-table-column',{attrs:{"label":"操作","width":"150","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":"编辑","disabled":true,"placement":"top-start"}},[_c('el-button',{attrs:{"size":"mini","plain":true,"type":"success","icon":"edit"},on:{"click":function($event){_vm.editInfo(scope.row)}}})],1),_vm._v(" "),_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":"删除","disabled":true,"placement":"top-start"}},[_c('el-button',{attrs:{"size":"mini","plain":true,"type":"danger","icon":"delete"},on:{"click":function($event){_vm.deleted(scope.row.signID)}}})],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"signID","label":"符号编码","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"signName","label":"符号名称","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"examineType","label":"符号类型","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"启用状态","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',{staticClass:"this_enable",on:{"click":function($event){_vm.enabledState(scope.row.signID,scope.row.state)}}},[_vm._v(_vm._s(scope.row.stateName))])]}}])})],1)],1),_vm._v(" "),_c('section',{staticClass:"this_popup"},[_c('el-dialog',{attrs:{"title":_vm.other.title,"size":"tiny","top":"35%","visible":_vm.alert.popupVisible,"before-close":_vm.closePopup},on:{"update:visible":function($event){_vm.alert.popupVisible=$event}}},[_c('el-form',{ref:"popupForm",attrs:{"model":_vm.popupForm,"label-width":"90px","rules":_vm.rules}},[_c('el-row',[_c('el-col',{attrs:{"span":22}},[_c('el-form-item',{attrs:{"label":"检查类型:","prop":"examineType"}},[_c('span',[_vm._v(_vm._s(_vm.popupForm.examineType))])])],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":22}},[_c('el-form-item',{attrs:{"label":"符号名称:","prop":"signName"}},[_c('el-input',{model:{value:(_vm.popupForm.signName),callback:function ($$v) {_vm.popupForm.signName=$$v},expression:"popupForm.signName"}})],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer","align":"center"},slot:"footer"},[_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.other.isAdd),expression:"other.isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('popupForm',_vm.addInfoSave)}}},[_vm._v("保 存")]),_vm._v(" "),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.other.isAdd),expression:"!other.isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('popupForm',_vm.editInfoSave)}}},[_vm._v("保 存")]),_vm._v(" "),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.other.isAdd),expression:"other.isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('popupForm',_vm.addInfoSave('1'))}}},[_vm._v("保存并新建")]),_vm._v(" "),_c('el-button',{on:{"click":_vm.closePopup}},[_vm._v("取 消")])],1)],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=4.0915a1c06c3a73d85e29.js.map