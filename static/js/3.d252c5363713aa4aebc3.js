webpackJsonp([3],{

/***/ "4Zhq":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Awqr");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("298eeebd", content, true);

/***/ }),

/***/ "AVRA":
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
        treeValue: [],
        hospitalID: '',
        departmentID: '',
        parentKeyWordID: '0',
        examineType: 'US'
      },
      popupForm: {
        examineType: '',
        keyWordName: '',
        parentKeyWordID: '',
        parentKeyWordName: '',
        keyWordID: ''
      },
      rules: {
        keyWordName: [{ required: true, message: '请输入短语分类名称', trrgger: 'blur' }]
      },
      array: {
        treeOptions: [], //左侧树形数据
        tableData: [] //表格数据
      },
      obj: {
        treeProps: {
          value: 'treeName',
          label: 'treeName',
          children: 'childList'
        }
      },
      other: {
        pageStart: 0,
        totalCount: 0,
        isFirst: true,
        title: '新建',
        isAdd: true
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

      this.$http.get(this.$location.sysKeyWordfindTree).then(function (data) {
        var res = data.returnContent;
        _this.array.treeOptions = res || [];
        //默认选中第一个
        if (_this.array.treeOptions.length > 0) {
          if (_this.other.isFirst) {
            _this.navForm.treeValue.push(_this.array.treeOptions[0].treeName);
            _this.other.isFirst = false;
            _this.queryData(true);
          }
        }
      });
    },

    //加载列表
    queryData: function queryData(can) {
      var _this2 = this;

      can ? this.other.pageStart = 0 : this.other.pageStart++;
      var len = this.navForm.treeValue.length;
      this.$http.get(this.$location.sysKeyWordfindPage, {
        params: {
          examineType: this.navForm.examineType,
          parentKeyWordID: this.navForm.parentKeyWordID,
          pageStart: this.other.pageStart
        }
      }).then(function (data) {
        var res = data.returnContent;
        _this2.other.totalCount = res.totalCount;
        var list = res.sysKeyWordList;
        if (can) {
          _this2.array.tableData = list || [];
        } else {
          var _array$tableData;

          (_array$tableData = _this2.array.tableData).push.apply(_array$tableData, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(list));
        }
        _this2.navForm.hospitalID = res.hospitalID;
        _this2.navForm.departmentID = res.departmentID;
        _this2.navForm.parentKeyWordID = res.parentKeyWordID;
        _this2.navForm.examineType = res.examineType;
      });
    },

    //新建
    addInfo: function addInfo() {
      this.other.title = '新建';
      this.other.isAdd = true;
      this.alert.popupVisible = true;
      this.popupForm.examineType = this.navForm.examineType;
      this.popupForm.parentKeyWordID = this.navForm.parentKeyWordID;
      this.popupForm.parentKeyWordName = this.navForm.treeValue[this.navForm.treeValue.length - 1];
    },

    //新建保存
    addInfoSave: function addInfoSave(type) {
      var _this3 = this;

      this.$http.get(this.$location.sysKeyWordinsert, {
        params: {
          hospitalID: this.navForm.hospitalID,
          departmentID: this.navForm.departmentID,
          examineType: this.popupForm.examineType,
          keyWordName: this.popupForm.keyWordName,
          parentKeyWordID: this.popupForm.parentKeyWordID
        }
      }).then(function (data) {
        var msg = data.returnContent;
        _this3.$message({
          type: 'success',
          message: msg,
          duration: 1000
        });
        _this3.queryData(true);
        if (type == '1') {
          _this3.popupForm.keyWordName = '';
        } else {
          _this3.resetForm('popupForm');
          _this3.alert.popupVisible = false;
        }
      });
    },

    //编辑
    editInfo: function editInfo(list) {
      this.other.title = '编辑';
      this.other.isAdd = false;
      this.alert.popupVisible = true;
      this.popupForm.examineType = list.examineType;
      this.popupForm.keyWordName = list.keyWordName;
      this.popupForm.parentKeyWordID = list.parentKeyWordID;
      this.popupForm.parentKeyWordName = list.parentKeyWordName;
      this.popupForm.keyWordID = list.keyWordID;
    },

    //编辑保存
    editInfoSave: function editInfoSave() {
      var _this4 = this;

      this.$http.get(this.$location.sysKeyWordupdate, {
        params: {
          hospitalID: this.navForm.hospitalID,
          departmentID: this.navForm.departmentID,
          examineType: this.popupForm.examineType,
          keyWordName: this.popupForm.keyWordName,
          keyWordID: this.popupForm.keyWordID
        }
      }).then(function (data) {
        var msg = data.returnContent;
        _this4.$message({
          type: 'success',
          message: msg,
          duration: 1000
        });
        _this4.queryData(true);
        _this4.resetForm('popupForm');
        _this4.alert.popupVisible = false;
      });
    },

    //启用状态
    enabledState: function enabledState(keyWordID, state) {
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
        _this5.$http.get(_this5.$location.sysKeyWordupdateState, {
          params: {
            keyWordID: keyWordID,
            state: state
          }
        }).then(function (data) {
          var msg = data.returnContent;
          _this5.$message({
            type: 'success',
            message: msg,
            duration: 1000
          });
          _this5.queryData(true);
        });
      }).catch(function () {});
    },

    //删除
    deleted: function deleted(keyWordID) {
      var _this6 = this;

      this.$confirm('是否确认删除该条信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this6.$http.get(_this6.$location.sysKeyWorddelete, {
          params: {
            keyWordID: keyWordID
          }
        }).then(function (data) {
          var msg = data.returnContent;
          _this6.$message({
            type: 'success',
            message: msg,
            duration: 1000
          });
          _this6.queryData(true);
        });
      }).catch(function () {});
    },

    //关闭弹框并清空form表单
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

/***/ "Awqr":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".keyPhrase{width:100%;overflow:auto}.keyPhrase,.keyPhrase .this_table{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.keyPhrase .this_table{padding-bottom:20px}.keyPhrase .this_table,.keyPhrase .this_table .el-table{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.keyPhrase .this_table .el-table .el-button{margin-left:0}.keyPhrase .this_table .el-table .el-table__empty-block,.keyPhrase .this_table .el-table .el-table__header{width:100%!important}.keyPhrase .this_table .this_enable{color:green;cursor:pointer}", "", {"version":3,"sources":["D:/WEBUIS_NEW/WEBUIS/src/components/system/template/keyPhrase.vue"],"names":[],"mappings":"AACA,WAQE,WAAY,AACZ,aAAe,CAChB,AACD,kCAVE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,qBAAuB,CAgBhC,AAZD,uBAWE,mBAAqB,CACtB,AACD,wDATE,mBAAoB,AAChB,oBAAqB,AACjB,WAAa,CAWtB,AACD,4CACE,aAAe,CAChB,AAID,2GACE,oBAAsB,CACvB,AACD,oCACE,YAAa,AACb,cAAgB,CACjB","file":"keyPhrase.vue","sourcesContent":["\n.keyPhrase {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  overflow: auto;\n}\n.keyPhrase .this_table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-bottom: 20px;\n}\n.keyPhrase .this_table .el-table {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.keyPhrase .this_table .el-table .el-button {\n  margin-left: 0;\n}\n.keyPhrase .this_table .el-table .el-table__header {\n  width: 100%!important;\n}\n.keyPhrase .this_table .el-table .el-table__empty-block {\n  width: 100%!important;\n}\n.keyPhrase .this_table .this_enable {\n  color: green;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "U+Nx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"keyPhrase"},[_c('nav',{staticClass:"pub_select"},[_c('el-form',{ref:"navForm",attrs:{"model":_vm.navForm,"label-width":"86px"}},[_c('el-row',[_c('el-col',[_c('el-form-item',{attrs:{"label":"检查类型:","prop":"treeValue"}},[_c('el-cascader',{attrs:{"props":_vm.obj.treeProps,"options":_vm.array.treeOptions,"change-on-select":""},on:{"change":function($event){_vm.queryData(true)}},model:{value:(_vm.navForm.treeValue),callback:function ($$v) {_vm.navForm.treeValue=$$v},expression:"navForm.treeValue"}})],1)],1),_vm._v(" "),_c('el-button',{staticClass:"mlem",attrs:{"type":"primary"},on:{"click":function($event){_vm.queryData(true)}}},[_vm._v("查询")]),_vm._v(" "),_c('el-button',{staticClass:"mlem",on:{"click":function($event){_vm.resetForm('navForm')}}},[_vm._v("重置")])],1)],1)],1),_vm._v(" "),_c('section',{staticClass:"pub_hr"},[_c('div',[_c('el-breadcrumb',{attrs:{"separator":"/"}},[_c('el-breadcrumb-item',[_vm._v("系统管理")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("模板设置")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("关键短语")])],1)],1),_vm._v(" "),_c('div',[_c('el-button',{staticClass:"mlem",attrs:{"type":"primary"},on:{"click":_vm.addInfo}},[_vm._v("新建")]),_vm._v(" "),_c('el-button',{staticClass:"mlem",on:{"click":_vm.queryData}},[_vm._v("刷新")]),_vm._v(" "),_c('span',{staticClass:"mlem"},[_vm._v("\n          关键短语共"),_c('font',{staticClass:"pub_count"},[_vm._v(_vm._s(_vm.other.totalCount))]),_vm._v("条\n      ")],1)],1)]),_vm._v(" "),_c('section',{staticClass:"this_table"},[_c('el-table',{directives:[{name:"scroll",rawName:"v-scroll",value:(_vm.queryData),expression:"queryData"}],attrs:{"data":_vm.array.tableData,"stripe":"","border":"","height":"100"}},[_c('el-table-column',{attrs:{"label":"操作","width":"150","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":"编辑","disabled":true,"placement":"top-start"}},[_c('el-button',{attrs:{"size":"mini","plain":true,"type":"success","icon":"edit"},on:{"click":function($event){_vm.editInfo(scope.row)}}})],1),_vm._v(" "),_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":"删除","disabled":true,"placement":"top-start"}},[_c('el-button',{attrs:{"size":"mini","plain":true,"type":"danger","icon":"delete"},on:{"click":function($event){_vm.deleted(scope.row.keyWordID)}}})],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"keyWordID","label":"分类编码","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"keyWordName","label":"分类名称","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"parentKeyWordID","label":"上级编码","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"parentKeyWordName","label":"上级名称","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"启用状态","align":"center","width":"150"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',{staticClass:"this_enable",on:{"click":function($event){_vm.enabledState(scope.row.keyWordID,scope.row.state)}}},[_vm._v(_vm._s(scope.row.stateName))])]}}])})],1)],1),_vm._v(" "),_c('section',{staticClass:"this_popup"},[_c('el-dialog',{attrs:{"title":_vm.other.title,"size":"tiny","top":"30%","visible":_vm.alert.popupVisible,"before-close":_vm.closePopup},on:{"update:visible":function($event){_vm.alert.popupVisible=$event}}},[_c('el-form',{ref:"popupForm",attrs:{"model":_vm.popupForm,"label-width":"90px","rules":_vm.rules}},[_c('el-row',[_c('el-col',{attrs:{"span":22}},[_c('el-form-item',{attrs:{"label":"检查类型:","prop":"examineType"}},[_c('span',[_vm._v(_vm._s(_vm.popupForm.examineType))])])],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":22}},[_c('el-form-item',{attrs:{"label":"短语分类:","prop":"keyWordName","required":""}},[_c('el-input',{model:{value:(_vm.popupForm.keyWordName),callback:function ($$v) {_vm.popupForm.keyWordName=$$v},expression:"popupForm.keyWordName"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":22}},[_c('el-form-item',{attrs:{"label":"父类编码:","prop":"parentKeyWordID"}},[_c('span',[_vm._v(_vm._s(_vm.popupForm.parentKeyWordID))])])],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":22}},[_c('el-form-item',{attrs:{"label":"父类短语:","prop":"parentKeyWordName"}},[_c('span',[_vm._v(_vm._s(_vm.popupForm.parentKeyWordName))])])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer","align":"center"},slot:"footer"},[_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.other.isAdd),expression:"other.isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('popupForm',_vm.addInfoSave)}}},[_vm._v("保 存")]),_vm._v(" "),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.other.isAdd),expression:"!other.isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('popupForm',_vm.editInfoSave)}}},[_vm._v("保 存")]),_vm._v(" "),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.other.isAdd),expression:"other.isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('popupForm',_vm.addInfoSave('1'))}}},[_vm._v("保存并新建")]),_vm._v(" "),_c('el-button',{on:{"click":_vm.closePopup}},[_vm._v("取 消")])],1)],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "qngi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_keyPhrase_vue__ = __webpack_require__("AVRA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f5fecd0a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_keyPhrase_vue__ = __webpack_require__("U+Nx");
function injectStyle (ssrContext) {
  __webpack_require__("4Zhq")
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_keyPhrase_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f5fecd0a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_keyPhrase_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=3.d252c5363713aa4aebc3.js.map