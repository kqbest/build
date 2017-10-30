webpackJsonp([2],{

/***/ "28IA":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ngYs");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("09d505e4", content, true);

/***/ }),

/***/ "ELwM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"templateClassify"},[_c('nav',{staticClass:"pub_select"},[_c('el-form',{ref:"form",attrs:{"model":_vm.form,"label-width":"86px"}},[_c('el-row',[_c('el-col',[_c('el-form-item',{attrs:{"label":"模板分类:","prop":"treeValue"}},[_c('el-cascader',{attrs:{"props":_vm.obj.treeProps,"options":_vm.array.treeOptions,"change-on-select":""},on:{"change":function($event){_vm.treeArea(_vm.array.treeOptions,_vm.form.treeValue[_vm.form.treeValue.length-1])}},model:{value:(_vm.form.treeValue),callback:function ($$v) {_vm.form.treeValue=$$v},expression:"form.treeValue"}})],1)],1),_vm._v(" "),_c('el-button',{staticClass:"mlem",attrs:{"type":"primary"},on:{"click":function($event){_vm.queryData(true)}}},[_vm._v("查询")])],1)],1)],1),_vm._v(" "),_c('section',{staticClass:"pub_hr"},[_c('div',[_c('el-breadcrumb',{attrs:{"separator":"/"}},[_c('el-breadcrumb-item',[_vm._v("系统管理")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("模板设置")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("模板分类")])],1)],1),_vm._v(" "),_c('div',[_c('el-button',{staticClass:"mlem",attrs:{"type":"primary"},on:{"click":_vm.addInfo}},[_vm._v("新建")]),_vm._v(" "),_c('el-button',{staticClass:"mlem",on:{"click":function($event){_vm.queryData(true)}}},[_vm._v("刷新")]),_vm._v(" "),_c('span',{staticClass:"mlem"},[_vm._v("\n          模板分类共"),_c('font',{staticClass:"pub_count"},[_vm._v(_vm._s(_vm.other.totalCount))]),_vm._v("条\n      ")],1)],1)]),_vm._v(" "),_c('section',{staticClass:"main"},[_c('el-table',{directives:[{name:"scroll",rawName:"v-scroll",value:(_vm.queryData),expression:"queryData"}],attrs:{"data":_vm.array.tableData,"stripe":"","border":"","height":"100"}},[_c('el-table-column',{attrs:{"label":"操作","align":"center","width":"150"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"plain":true,"type":"success","size":"mini","icon":"edit"},on:{"click":function($event){_vm.editInfo(scope.row.templateClassID)}}}),_vm._v(" "),_c('el-button',{attrs:{"plain":true,"type":"danger","size":"mini","icon":"delete"},on:{"click":function($event){_vm.deleted(scope.row.templateClassID)}}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"模板编码","prop":"templateClassID","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"模板名称","prop":"templateClassName","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"上级编码","prop":"parentID","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"上级名称","prop":"parentName","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"检查部位","prop":"examinePartName","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"启用状态","align":"center","width":"150"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',{staticClass:"this_enable",on:{"click":function($event){_vm.enabledState(scope.row.templateClassID,scope.row.state)}}},[_vm._v(_vm._s(scope.row.stateName))])]}}])})],1)],1),_vm._v(" "),_c('section',{staticClass:"popup"},[_c('el-dialog',{attrs:{"title":_vm.other.title,"size":"small","top":"20%","visible":_vm.alert.popupVisible,"before-close":_vm.closePopup},on:{"update:visible":function($event){_vm.alert.popupVisible=$event}}},[_c('el-form',{ref:"popupForm",attrs:{"model":_vm.popupForm,"label-width":"120px","rules":_vm.rules}},[_c('el-row',[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"检查类型:","prop":"examineType"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.popupForm.examineType),callback:function ($$v) {_vm.popupForm.examineType=$$v},expression:"popupForm.examineType"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"父类编码:","prop":"treeID"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.popupForm.treeID),callback:function ($$v) {_vm.popupForm.treeID=$$v},expression:"popupForm.treeID"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"模板名称:","prop":"templateClassName","required":""}},[_c('el-input',{model:{value:(_vm.popupForm.templateClassName),callback:function ($$v) {_vm.popupForm.templateClassName=$$v},expression:"popupForm.templateClassName"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"父类模板:","prop":"treeName"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.popupForm.treeName),callback:function ($$v) {_vm.popupForm.treeName=$$v},expression:"popupForm.treeName"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":22}},[_c('el-form-item',{attrs:{"label":"检查部位:","required":""}},[_c('div',{staticClass:"tree"},[_c('el-tree',{ref:"tree1",attrs:{"node-key":"treeID","data":_vm.array.djArr,"show-checkbox":"","props":_vm.obj.djProps}})],1)])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer","align":"center"},slot:"footer"},[_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.other.isAdd),expression:"other.isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('popupForm',_vm.addInfoSave)}}},[_vm._v("保 存")]),_vm._v(" "),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.other.isAdd),expression:"!other.isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('popupForm',_vm.editInfoSave)}}},[_vm._v("保 存")]),_vm._v(" "),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.other.isAdd),expression:"other.isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('popupForm',_vm.addInfoSave('1'))}}},[_vm._v("保存并新建")]),_vm._v(" "),_c('el-button',{on:{"click":_vm.closePopup}},[_vm._v("取 消")])],1)],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "W26H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_templateClassify_vue__ = __webpack_require__("x9ME");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e23ccd2a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_templateClassify_vue__ = __webpack_require__("ELwM");
function injectStyle (ssrContext) {
  __webpack_require__("28IA")
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_templateClassify_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e23ccd2a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_templateClassify_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ngYs":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".templateClassify{width:100%;padding-bottom:20px}.templateClassify,.templateClassify .main{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.templateClassify .main{border:1px solid green}.templateClassify .main,.templateClassify .main .el-table{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.templateClassify .main .el-table .el-table__empty-block,.templateClassify .main .el-table .el-table__header{width:100%!important}.templateClassify .main .el-table .el-button{margin-left:0}.templateClassify .main .el-table .this_enable{color:green;cursor:pointer}.templateClassify .popup .tree{display:inline-block;width:100%;height:200px;border:1px solid #d1dbe5;overflow:auto}.templateClassify .popup .tree .el-tree{border:none}", "", {"version":3,"sources":["D:/WEBUIS_NEW/WEBUIS/src/components/system/template/templateClassify.vue"],"names":[],"mappings":"AACA,kBACE,WAAY,AAQZ,mBAAqB,CACtB,AACD,0CATE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,qBAAuB,CAehC,AAZD,wBAWE,sBAAwB,CACzB,AACD,0DAZE,mBAAoB,AAChB,oBAAqB,AACjB,WAAa,CActB,AAID,6GACE,oBAAsB,CACvB,AACD,6CACE,aAAe,CAChB,AACD,+CACE,YAAa,AACb,cAAgB,CACjB,AACD,+BACE,qBAAsB,AACtB,WAAY,AACZ,aAAc,AACd,yBAA0B,AAC1B,aAAe,CAChB,AACD,wCACE,WAAa,CACd","file":"templateClassify.vue","sourcesContent":["\n.templateClassify {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-bottom: 20px;\n}\n.templateClassify .main {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border: 1px solid green;\n}\n.templateClassify .main .el-table {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.templateClassify .main .el-table .el-table__header {\n  width: 100%!important;\n}\n.templateClassify .main .el-table .el-table__empty-block {\n  width: 100%!important;\n}\n.templateClassify .main .el-table .el-button {\n  margin-left: 0;\n}\n.templateClassify .main .el-table .this_enable {\n  color: green;\n  cursor: pointer;\n}\n.templateClassify .popup .tree {\n  display: inline-block;\n  width: 100%;\n  height: 200px;\n  border: 1px solid #d1dbe5;\n  overflow: auto;\n}\n.templateClassify .popup .tree .el-tree {\n  border: none;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "x9ME":
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
        templateClassName: '',
        parentID: '',
        treeID: '',
        treeName: '',
        templateClassID: ''
      },
      rules: {
        templateClassName: [{ required: true, message: '请输入模板名称', trgger: 'blur' }]
      },
      array: {
        treeOptions: [], //树形数据
        tableData: [], //表格数据
        djArr: [] //检查部位
      },
      obj: {
        treeProps: {
          value: 'treeID',
          label: 'treeName',
          children: 'childList'
        },
        djProps: {
          id: 'treeID',
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

      this.$http.get(this.$location.sysTemplateClassfindTree).then(function (data) {
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
      this.$http.get(this.$location.sysTemplateClassfindPage, {
        params: {
          examineType: this.obj.tableParms.examineType,
          parentID: this.obj.tableParms.treeParentID,
          pageStart: this.other.pageStart
        }
      }).then(function (data) {
        var res = data.returnContent;
        _this2.other.totalCount = res.totalCount;
        var list = res.sysTemplateClassList;
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

      this.$http.get(this.$location.sysTemplateClassinsertReady, {
        params: {
          hospitalID: this.obj.tableParms.hospitalID,
          departmentID: this.obj.tableParms.departmentID,
          examineType: this.obj.tableParms.examineType
        }
      }).then(function (data) {
        var res = data.returnContent;
        _this3.array.djArr = res.djTree;
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

      var djArr = this.$refs.tree1.getCheckedKeys(); //检查部位check
      this.$http.get(this.$location.sysTemplateClassinsert, {
        params: {
          hospitalID: this.popupForm.hospitalID,
          departmentID: this.popupForm.departmentID,
          examineType: this.popupForm.examineType,
          templateClassName: this.popupForm.templateClassName,
          parentID: this.popupForm.parentID,
          examinePart: djArr.join('^')
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
        this.popupForm.templateClassName = '';
        //清空树形勾选
        this.$refs.tree1.setCheckedKeys([]);
      } else {
        //清空弹框数据
        this.resetForm('popupForm');
        this.array.djArr = [];
        this.alert.popupVisible = false;
      }
    },

    //编辑
    editInfo: function editInfo(templateClassID) {
      var _this5 = this;

      this.$http.get(this.$location.sysTemplateClassupdateQuery, {
        params: {
          templateClassID: templateClassID
        }
      }).then(function (data) {
        var res = data.returnContent;
        var info = res.sysTemplateClass;
        _this5.array.djArr = res.djTree;
        _this5.popupForm.hospitalID = info.hospitalID;
        _this5.popupForm.departmentID = info.departmentID;
        _this5.popupForm.examineType = info.examineType;
        _this5.popupForm.treeID = info.parentID;
        _this5.popupForm.treeName = info.parentName;
        _this5.popupForm.templateClassName = info.templateClassName;
        if (info.examinePart != '') {
          info.examinePart = info.examinePart.split('^');
        }
        //树形勾选赋值
        _this5.$refs.tree1.setCheckedKeys(info.examinePart);
        _this5.popupForm.parentID = info.treeParentID;
        _this5.popupForm.templateClassID = info.templateClassID;
      });
      this.other.title = '编辑';
      this.other.isAdd = false;
      this.alert.popupVisible = true;
    },

    //编辑保存
    editInfoSave: function editInfoSave(type) {
      var _this6 = this;

      var djArr = this.$refs.tree1.getCheckedKeys(); //检查部位check
      this.$http.get(this.$location.sysTemplateClassupdate, {
        params: {
          hospitalID: this.popupForm.hospitalID,
          departmentID: this.popupForm.departmentID,
          examineType: this.popupForm.examineType,
          templateClassName: this.popupForm.templateClassName,
          parentID: this.popupForm.parentID,
          examinePart: djArr.join('^'),
          templateClassID: this.popupForm.templateClassID
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
      this.array.djArr = [];
      this.alert.popupVisible = false;
    },

    //启用状态
    enabledState: function enabledState(templateClassID, state) {
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
        _this7.$http.get(_this7.$location.sysTemplateClassupdateState, {
          params: {
            templateClassID: templateClassID,
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
    deleted: function deleted(templateClassID) {
      var _this8 = this;

      this.$confirm('是否确认删除该条信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this8.$http.get(_this8.$location.sysTemplateClassdelete, {
          params: {
            templateClassID: templateClassID
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

/***/ })

});
//# sourceMappingURL=2.bae016de45194f49f9d1.js.map