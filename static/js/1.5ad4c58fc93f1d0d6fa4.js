webpackJsonp([1],{

/***/ "7XPT":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("BISl");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("bdbd19b2", content, true);

/***/ }),

/***/ "BISl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".whiteLexicon{width:100%;padding-bottom:20px}.whiteLexicon,.whiteLexicon .main{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.whiteLexicon .main{border:1px solid green}.whiteLexicon .main,.whiteLexicon .main .el-table{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.whiteLexicon .main .el-table .el-table__empty-block,.whiteLexicon .main .el-table .el-table__header{width:100%!important}.whiteLexicon .main .el-table .el-button{margin-left:0}.whiteLexicon .main .el-table .this_enable{color:green;cursor:pointer}.whiteLexicon .popup .tree{display:inline-block;width:100%;height:200px;border:1px solid #d1dbe5;overflow:auto}.whiteLexicon .popup .tree .el-tree{border:none}", "", {"version":3,"sources":["D:/WEBUIS_NEW/WEBUIS/src/components/system/template/whiteLexicon.vue"],"names":[],"mappings":"AACA,cACE,WAAY,AAQZ,mBAAqB,CACtB,AACD,kCATE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,qBAAuB,CAehC,AAZD,oBAWE,sBAAwB,CACzB,AACD,kDAZE,mBAAoB,AAChB,oBAAqB,AACjB,WAAa,CActB,AAID,qGACE,oBAAsB,CACvB,AACD,yCACE,aAAe,CAChB,AACD,2CACE,YAAa,AACb,cAAgB,CACjB,AACD,2BACE,qBAAsB,AACtB,WAAY,AACZ,aAAc,AACd,yBAA0B,AAC1B,aAAe,CAChB,AACD,oCACE,WAAa,CACd","file":"whiteLexicon.vue","sourcesContent":["\n.whiteLexicon {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-bottom: 20px;\n}\n.whiteLexicon .main {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border: 1px solid green;\n}\n.whiteLexicon .main .el-table {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.whiteLexicon .main .el-table .el-table__header {\n  width: 100%!important;\n}\n.whiteLexicon .main .el-table .el-table__empty-block {\n  width: 100%!important;\n}\n.whiteLexicon .main .el-table .el-button {\n  margin-left: 0;\n}\n.whiteLexicon .main .el-table .this_enable {\n  color: green;\n  cursor: pointer;\n}\n.whiteLexicon .popup .tree {\n  display: inline-block;\n  width: 100%;\n  height: 200px;\n  border: 1px solid #d1dbe5;\n  overflow: auto;\n}\n.whiteLexicon .popup .tree .el-tree {\n  border: none;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "MX+0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"whiteLexicon"},[_c('nav',{staticClass:"pub_select"},[_c('el-form',{ref:"form",attrs:{"model":_vm.form,"label-width":"86px"}},[_c('el-row',[_c('el-col',[_c('el-form-item',{attrs:{"label":"部位分类:","prop":"treeValue"}},[_c('el-cascader',{attrs:{"props":_vm.obj.treeProps,"options":_vm.array.treeOptions,"change-on-select":""},on:{"change":function($event){_vm.treeArea(_vm.array.treeOptions,_vm.form.treeValue[_vm.form.treeValue.length-1])}},model:{value:(_vm.form.treeValue),callback:function ($$v) {_vm.form.treeValue=$$v},expression:"form.treeValue"}})],1)],1),_vm._v(" "),_c('el-button',{staticClass:"mlem",attrs:{"type":"primary"},on:{"click":function($event){_vm.queryData(true)}}},[_vm._v("查询")])],1)],1)],1),_vm._v(" "),_c('section',{staticClass:"pub_hr"},[_c('div',[_c('el-breadcrumb',{attrs:{"separator":"/"}},[_c('el-breadcrumb-item',[_vm._v("系统管理")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("模板设置")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("书写词库")])],1)],1),_vm._v(" "),_c('div',[_c('el-button',{staticClass:"mlem",attrs:{"type":"primary"},on:{"click":_vm.addInfo}},[_vm._v("新建")]),_vm._v(" "),_c('el-button',{staticClass:"mlem",on:{"click":function($event){_vm.queryData(true)}}},[_vm._v("刷新")]),_vm._v(" "),_c('span',{staticClass:"mlem"},[_vm._v("\n          书写词库共"),_c('font',{staticClass:"pub_count"},[_vm._v(_vm._s(_vm.other.totalCount))]),_vm._v("条\n      ")],1)],1)]),_vm._v(" "),_c('section',{staticClass:"main"},[_c('el-table',{directives:[{name:"scroll",rawName:"v-scroll",value:(_vm.queryData),expression:"queryData"}],attrs:{"data":_vm.array.tableData,"stripe":"","border":"","height":"100"}},[_c('el-table-column',{attrs:{"label":"操作","align":"center","width":"150"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"plain":true,"type":"success","size":"mini","icon":"edit"},on:{"click":function($event){_vm.editInfo(scope.row.wordBaseID)}}}),_vm._v(" "),_c('el-button',{attrs:{"plain":true,"type":"danger","size":"mini","icon":"delete"},on:{"click":function($event){_vm.deleted(scope.row.wordBaseID)}}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"书写词库","prop":"wordBaseName","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"词库类别","prop":"wordBaseGroupNmae","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"检查项目","prop":"examineItemName","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"父类编码","prop":"parentID","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"父类名称","prop":"parentName","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"启用状态","align":"center","width":"150"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',{staticClass:"this_enable",on:{"click":function($event){_vm.enabledState(scope.row.wordBaseID,scope.row.state)}}},[_vm._v(_vm._s(scope.row.stateName))])]}}])})],1)],1),_vm._v(" "),_c('section',{staticClass:"popup"},[_c('el-dialog',{attrs:{"title":_vm.other.title,"size":"small","top":"28%","visible":_vm.alert.popupVisible,"before-close":_vm.closePopup},on:{"update:visible":function($event){_vm.alert.popupVisible=$event}}},[_c('el-form',{ref:"popupForm",attrs:{"model":_vm.popupForm,"label-width":"120px","rules":_vm.rules}},[_c('el-row',[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"检查类型:","prop":"examineType"}},[_c('span',[_vm._v(_vm._s(_vm.popupForm.examineType))])])],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"父类编码:","prop":"treeID"}},[_c('span',[_vm._v(_vm._s(_vm.popupForm.treeID))])])],1),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"父类名称:","prop":"treeName"}},[_c('span',[_vm._v(_vm._s(_vm.popupForm.treeName))])])],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"词库类别:","prop":"wordBaseGroup"}},[_c('el-select',{attrs:{"clearable":"","placeholder":"请选择"},model:{value:(_vm.popupForm.wordBaseGroup),callback:function ($$v) {_vm.popupForm.wordBaseGroup=$$v},expression:"popupForm.wordBaseGroup"}},_vm._l((_vm.array.wordBaseGroupList),function(item){return _c('el-option',{key:item.dataDicValueName,attrs:{"label":item.dataDicValueName,"value":item.dataDicValueName}})}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"检查项目:","prop":"examineItem"}},[_c('el-select',{attrs:{"multiple":"","placeholder":"请选择"},model:{value:(_vm.popupForm.examineItem),callback:function ($$v) {_vm.popupForm.examineItem=$$v},expression:"popupForm.examineItem"}},_vm._l((_vm.array.examineItemList),function(item){return _c('el-option',{key:item.depDataDicValueName,attrs:{"label":item.depDataDicValueName,"value":item.depDataDicValueName}})}))],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":22}},[_c('el-form-item',{attrs:{"label":"书写词库:","prop":"wordBaseName","required":""}},[_c('el-input',{attrs:{"type":"textarea","rows":2,"placeholder":"请输入内容"},model:{value:(_vm.popupForm.wordBaseName),callback:function ($$v) {_vm.popupForm.wordBaseName=$$v},expression:"popupForm.wordBaseName"}})],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer","align":"center"},slot:"footer"},[_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.other.isAdd),expression:"other.isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('popupForm',_vm.addInfoSave)}}},[_vm._v("保 存")]),_vm._v(" "),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.other.isAdd),expression:"!other.isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('popupForm',_vm.editInfoSave)}}},[_vm._v("保 存")]),_vm._v(" "),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.other.isAdd),expression:"other.isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('popupForm',_vm.addInfoSave('1'))}}},[_vm._v("保存并新建")]),_vm._v(" "),_c('el-button',{on:{"click":_vm.closePopup}},[_vm._v("取 消")])],1)],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "tQsn":
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
      form: {
        treeValue: []
      },
      popupForm: {
        hospitalID: '',
        departmentID: '',
        examineType: '',
        parentID: '',
        wordBaseGroup: '',
        examineItem: [],
        wordBaseName: '',
        wordBaseID: ''
      },
      rules: {
        wordBaseName: [{ required: true, message: '请输入书写词库', trgger: 'blur' }]
      },
      array: {
        treeOptions: [], //树形数据
        tableData: [], //表格数据
        wordBaseGroupList: [], //词库类别数据
        examineItemList: [] //检查项目数据
      },
      obj: {
        treeProps: {
          value: 'treeID',
          label: 'treeName',
          children: 'childList'
        },
        tableParms: {
          hospitalID: '',
          departmentID: '',
          examineType: '',
          treeParentID: ''
        }
      },
      other: {
        totalCount: '',
        pageStart: '0',
        title: '新建',
        isAdd: true,
        isFirst: true //判断是否是初次加载树形，如果是给treeValue添加默认值
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
    //加载树形
    findTree: function findTree() {
      var _this = this;

      this.$http.get(this.$location.sysWordBasefindTree).then(function (data) {
        var res = data.returnContent;
        _this.array.treeOptions = res || [];
        //默认选中第一个
        if (_this.array.treeOptions.length > 0) {
          if (_this.other.isFirst) {
            _this.form.treeValue.push(_this.array.treeOptions[0].treeID);
            _this.other.isFirst = false;
            var len = _this.form.treeValue.length;
            _this.treeArea(_this.array.treeOptions, _this.form.treeValue[len - 1]);
            _this.queryData(true);
          }
        }
      });
    },

    //查询数据
    queryData: function queryData(can) {
      var _this2 = this;

      can ? this.other.pageStart = 0 : this.other.pageStart++;
      this.$http.get(this.$location.sysWordBasefindPage, {
        params: {
          examineType: this.obj.tableParms.examineType,
          parentID: this.obj.tableParms.treeParentID,
          pageStart: this.other.pageStart
        }
      }).then(function (data) {
        var res = data.returnContent;
        _this2.other.totalCount = res.totalCount;
        var list = res.sysWordBaseList;
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
      var _this3 = this;

      this.$http.get(this.$location.sysWordBaseinsertReady, {
        params: {
          hospitalID: this.obj.tableParms.hospitalID,
          departmentID: this.obj.tableParms.departmentID,
          examineType: this.obj.tableParms.examineType
        }
      }).then(function (data) {
        var res = data.returnContent;
        _this3.array.wordBaseGroupList = res.wordBaseGroupList;
        _this3.array.examineItemList = res.examineItemList;
        _this3.popupForm.hospitalID = _this3.obj.tableParms.hospitalID;
        _this3.popupForm.departmentID = _this3.obj.tableParms.departmentID;
        _this3.popupForm.examineType = _this3.obj.tableParms.examineType;
        _this3.popupForm.parentID = _this3.obj.tableParms.treeParentID;
      });
      this.other.title = '新建';
      this.other.isAdd = true;
      this.alert.popupVisible = true;
    },

    //新建保存
    addInfoSave: function addInfoSave(type) {
      var _this4 = this;

      this.$http.get(this.$location.sysWordBaseinsert, {
        params: {
          hospitalID: this.popupForm.hospitalID,
          departmentID: this.popupForm.departmentID,
          examineType: this.popupForm.examineType,
          parentID: this.popupForm.parentID,
          wordBaseGroup: this.popupForm.wordBaseGroup,
          examineItem: this.popupForm.examineItem.join(','),
          wordBaseName: this.popupForm.wordBaseName
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
      //判断是 保存/保存并新建
      if (type == '1') {
        this.popupForm.wordBaseName = '';
      } else {
        //清空弹框数据
        this.resetForm('popupForm');
        this.array.wordBaseGroupList = [];
        this.array.examineItemList = [];
        this.alert.popupVisible = false;
      }
    },

    //编辑
    editInfo: function editInfo(wordBaseID) {
      var _this5 = this;

      this.$http.get(this.$location.sysWordBaseupdateQuery, {
        params: {
          wordBaseID: wordBaseID
        }
      }).then(function (data) {
        var res = data.returnContent;
        _this5.array.wordBaseGroupList = res.wordBaseGroupList;
        _this5.array.examineItemList = res.examineItemList;
        var info = res.sysWordBase;
        _this5.popupForm.hospitalID = info.hospitalID;
        _this5.popupForm.departmentID = info.departmentID;
        _this5.popupForm.examineType = info.examineType;
        _this5.popupForm.parentID = info.parentID;
        _this5.popupForm.wordBaseID = info.wordBaseID;
        _this5.popupForm.wordBaseGroup = info.wordBaseGroup;
        _this5.popupForm.wordBaseName = info.wordBaseName;
        _this5.popupForm.examineItem = info.examineItem.split(',');
      });
      this.other.title = '编辑';
      this.other.isAdd = false;
      this.alert.popupVisible = true;
    },

    //编辑保存
    editInfoSave: function editInfoSave() {
      var _this6 = this;

      this.$http.get(this.$location.sysWordBaseupdate, {
        params: {
          hospitalID: this.popupForm.hospitalID,
          departmentID: this.popupForm.departmentID,
          examineType: this.popupForm.examineType,
          parentID: this.popupForm.parentID,
          wordBaseGroup: this.popupForm.wordBaseGroup,
          examineItem: this.popupForm.examineItem.join(','),
          wordBaseName: this.popupForm.wordBaseName,
          wordBaseID: this.popupForm.wordBaseID
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
      //清空弹框数据
      this.resetForm('popupForm');
      this.array.wordBaseGroupList = [];
      this.array.examineItemList = [];
      this.alert.popupVisible = false;
    },

    //启用状态
    enabledState: function enabledState(wordBaseID, state) {
      var _this7 = this;

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
        _this7.$http.get(_this7.$location.sysWordBaseupdateState, {
          params: {
            wordBaseID: wordBaseID,
            state: state
          }
        }).then(function (data) {
          var msg = data.returnContent;
          _this7.$message({
            type: 'success',
            message: msg,
            duration: 1000
          });
          _this7.queryData(true);
        });
      }).catch(function () {});
    },

    //删除
    deleted: function deleted(wordBaseID) {
      var _this8 = this;

      this.$confirm('是否确认删除该条信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this8.$http.get(_this8.$location.sysWordBasedelete, {
          params: {
            wordBaseID: wordBaseID
          }
        }).then(function (data) {
          var msg = data.returnContent;
          _this8.$message({
            type: 'success',
            message: msg,
            duration: 1000
          });
          _this8.queryData(true);
        });
      }).catch(function () {});
    },

    //递归取数据
    treeArea: function treeArea(dataList, thisId) {
      var _this9 = this;

      if (dataList.length > 0) {
        if (thisId == undefined) {
          return false;
        }
        dataList.forEach(function (k, i) {
          if (k.treeID == thisId) {
            console.log('success');
            _this9.obj.tableParms.hospitalID = k.hospitalID;
            _this9.obj.tableParms.departmentID = k.departmentID;
            _this9.obj.tableParms.examineType = k.examineType;
            if (k.treeParentID == '-1') {
              k.treeParentID = '0';
            }
            _this9.obj.tableParms.treeParentID = k.treeParentID;
            _this9.popupForm.treeID = k.treeID;
            _this9.popupForm.treeName = k.treeName;
            return false;
          } else {
            if (k.childList.length > 0) {
              _this9.treeArea(k.childList, thisId);
              console.log('go');
            } else {
              console.log('end');
              return false;
            }
          }
        });
      }
    },

    //关闭弹框清除数据
    closePopup: function closePopup() {
      //清空弹框数据
      this.resetForm('popupForm');
      this.array.djArr = [];
      this.alert.popupVisible = false;
    },

    //form重置
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
});

/***/ }),

/***/ "y+ik":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_whiteLexicon_vue__ = __webpack_require__("tQsn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8c156608_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_whiteLexicon_vue__ = __webpack_require__("MX+0");
function injectStyle (ssrContext) {
  __webpack_require__("7XPT")
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_whiteLexicon_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8c156608_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_whiteLexicon_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=1.5ad4c58fc93f1d0d6fa4.js.map