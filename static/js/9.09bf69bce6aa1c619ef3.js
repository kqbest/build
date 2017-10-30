webpackJsonp([9],{

/***/ "DWfE":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".pluginManagement{width:100%;overflow:auto}.pluginManagement,.pluginManagement .this_table{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.pluginManagement .this_table{padding-bottom:20px}.pluginManagement .this_table,.pluginManagement .this_table .el-table{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.pluginManagement .this_table .el-table .el-table__empty-block,.pluginManagement .this_table .el-table .el-table__header{width:100%!important}.pluginManagement .this_table .el-button--danger.is-plain{margin-left:0}", "", {"version":3,"sources":["D:/WEBUIS_NEW/WEBUIS/src/components/system/systems/pluginManagement.vue"],"names":[],"mappings":"AACA,kBAQE,WAAY,AACZ,aAAe,CAChB,AACD,gDAVE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,qBAAuB,CAgBhC,AAZD,8BAWE,mBAAqB,CACtB,AACD,sEATE,mBAAoB,AAChB,oBAAqB,AACjB,WAAa,CAWtB,AAID,yHACE,oBAAsB,CACvB,AACD,0DACE,aAAe,CAChB","file":"pluginManagement.vue","sourcesContent":["\n.pluginManagement {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  overflow: auto;\n}\n.pluginManagement .this_table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-bottom: 20px;\n}\n.pluginManagement .this_table .el-table {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.pluginManagement .this_table .el-table .el-table__header {\n  width: 100%!important;\n}\n.pluginManagement .this_table .el-table .el-table__empty-block {\n  width: 100%!important;\n}\n.pluginManagement .this_table .el-button--danger.is-plain {\n  margin-left: 0;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "cpfM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"pluginManagement"},[_c('nav',{staticClass:"pub_select"},[_c('el-form',{ref:"navForm",attrs:{"model":_vm.navForm,"label-width":"86px"}},[_c('el-row',[_c('el-col',[_c('el-form-item',{attrs:{"label":"地区目录:","prop":"treeValue"}},[_c('el-cascader',{attrs:{"props":_vm.treeProps,"options":_vm.treeOptions,"change-on-select":""},model:{value:(_vm.navForm.treeValue),callback:function ($$v) {_vm.navForm.treeValue=$$v},expression:"navForm.treeValue"}})],1)],1),_vm._v(" "),_c('el-col',[_c('el-form-item',{attrs:{"label":"地区名称:","prop":"name"}},[_c('el-input',{attrs:{"placeholder":"请输入地区名称"},model:{value:(_vm.navForm.name),callback:function ($$v) {_vm.navForm.name=$$v},expression:"navForm.name"}})],1)],1),_vm._v(" "),_c('el-button',{staticClass:"mlem",attrs:{"type":"primary"},on:{"click":function($event){_vm.findPage(true)}}},[_vm._v("查询")]),_vm._v(" "),_c('el-button',{staticClass:"mlem",on:{"click":function($event){_vm.resetForm('navForm')}}},[_vm._v("重置")])],1)],1)],1),_vm._v(" "),_c('section',{staticClass:"pub_hr"},[_c('div',[_c('el-breadcrumb',{attrs:{"separator":"/"}},[_c('el-breadcrumb-item',[_vm._v("系统管理")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("系统设置")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("地区管理")])],1)],1),_vm._v(" "),_c('div',[_c('el-button',{staticClass:"mlem",attrs:{"type":"primary"},on:{"click":function($event){_vm.addInfo()}}},[_vm._v("新建")]),_vm._v(" "),_c('el-button',{staticClass:"mlem",on:{"click":_vm.findPage}},[_vm._v("刷新")]),_vm._v(" "),_c('span',{staticClass:"mlem"},[_vm._v("\n          地区管理共"),_c('font',{staticClass:"pub_count"},[_vm._v(_vm._s(_vm.totalCount))]),_vm._v("条\n      ")],1)],1)]),_vm._v(" "),_c('section',{staticClass:"this_table"},[_c('el-table',{attrs:{"data":_vm.tableData,"stripe":"","border":"","height":"100"}},[_c('el-table-column',{attrs:{"label":"操作","width":"150","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":"编辑","disabled":true,"placement":"top-start"}},[_c('el-button',{attrs:{"size":"mini","plain":true,"type":"success","icon":"edit"},on:{"click":function($event){_vm.alert.formEditVisible = true;_vm.editInfo(scope.row)}}})],1),_vm._v(" "),_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":"删除","disabled":true,"placement":"top-start"}},[_c('el-button',{attrs:{"size":"mini","plain":true,"type":"danger","icon":"delete"},on:{"click":function($event){_vm.deleted(scope.row.areaID)}}})],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"areaCode","label":"地区代码","width":"180","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"areaName","label":"地区名称","width":"180","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"parentCode","label":"上级地区代码","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"parentName","label":"上级地区名称","align":"center","show-overflow-tooltip":""}})],1)],1),_vm._v(" "),_c('section',{staticClass:"this_add"},[_c('el-dialog',{attrs:{"title":"新增","size":"tiny","top":"30%","visible":_vm.alert.formAddVisible,"before-close":_vm.addClose},on:{"update:visible":function($event){_vm.alert.formAddVisible=$event}}},[_c('el-form',{ref:"formAdd",staticClass:"demo-ruleForm",attrs:{"model":_vm.formAdd,"label-width":"120px"}},[_c('el-row',[_c('el-col',{attrs:{"span":22}},[_c('el-form-item',{attrs:{"label":"地区代码:","prop":"code","required":""}},[_c('el-input',{attrs:{"type":"text","auto-complete":"off"},model:{value:(_vm.formAdd.code),callback:function ($$v) {_vm.formAdd.code=$$v},expression:"formAdd.code"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":22}},[_c('el-form-item',{attrs:{"label":"地区名称:","prop":"name","required":""}},[_c('el-input',{attrs:{"type":"text","auto-complete":"off"},model:{value:(_vm.formAdd.name),callback:function ($$v) {_vm.formAdd.name=$$v},expression:"formAdd.name"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":22}},[_c('el-form-item',{attrs:{"label":"上级地区代码:","prop":"pCode"}},[_c('el-input',{attrs:{"type":"text","auto-complete":"off","disabled":""},model:{value:(_vm.formAdd.pCode),callback:function ($$v) {_vm.formAdd.pCode=$$v},expression:"formAdd.pCode"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":22}},[_c('el-form-item',{attrs:{"label":"上级地区名称:","prop":"pName"}},[_c('el-input',{attrs:{"type":"text","auto-complete":"off","disabled":""},model:{value:(_vm.formAdd.pName),callback:function ($$v) {_vm.formAdd.pName=$$v},expression:"formAdd.pName"}})],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer","align":"center"},slot:"footer"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.alert.formAddVisible = false;_vm.addInfoSave();}}},[_vm._v("保 存")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.addInfoSave('1');}}},[_vm._v("保存并新建")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.alert.formAddVisible = false;_vm.resetForm('formAdd');}}},[_vm._v("取 消")])],1)],1)],1),_vm._v(" "),_c('section',{staticClass:"this_edit"},[_c('el-dialog',{attrs:{"title":"编辑","size":"tiny","top":"30%","visible":_vm.alert.formEditVisible},on:{"update:visible":function($event){_vm.alert.formEditVisible=$event}}},[_c('el-form',{ref:"formEdit",staticClass:"demo-ruleForm",attrs:{"model":_vm.formEdit,"label-width":"120px"}},[_c('el-row',[_c('el-col',{attrs:{"span":22}},[_c('el-form-item',{attrs:{"label":"地区代码:","prop":"code","required":""}},[_c('el-input',{attrs:{"type":"text","auto-complete":"off"},model:{value:(_vm.formEdit.code),callback:function ($$v) {_vm.formEdit.code=$$v},expression:"formEdit.code"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":22}},[_c('el-form-item',{attrs:{"label":"地区名称:","prop":"name","required":""}},[_c('el-input',{attrs:{"type":"text","auto-complete":"off"},model:{value:(_vm.formEdit.name),callback:function ($$v) {_vm.formEdit.name=$$v},expression:"formEdit.name"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":22}},[_c('el-form-item',{attrs:{"label":"上级地区代码:","prop":"pCode"}},[_c('el-input',{attrs:{"type":"text","auto-complete":"off","disabled":""},model:{value:(_vm.formEdit.pCode),callback:function ($$v) {_vm.formEdit.pCode=$$v},expression:"formEdit.pCode"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":22}},[_c('el-form-item',{attrs:{"label":"上级地区名称:","prop":"pName"}},[_c('el-input',{attrs:{"type":"text","auto-complete":"off","disabled":""},model:{value:(_vm.formEdit.pName),callback:function ($$v) {_vm.formEdit.pName=$$v},expression:"formEdit.pName"}})],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer","align":"center"},slot:"footer"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.alert.formEditVisible = false;_vm.editInfoSave();_vm.resetForm('formEdit');}}},[_vm._v("保 存")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.alert.formEditVisible = false;_vm.resetForm('formEdit');}}},[_vm._v("取 消")])],1)],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "f70P":
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      pageStart: '0',
      totalCount: '0',
      //nav value
      navForm: {
        treeValue: [],
        name: ''
      },
      alert: {
        formAddVisible: false,
        formEditVisible: false
      },
      //nav option
      treeProps: {
        value: 'areaID',
        label: 'areaName',
        children: 'childList'
      },
      treeOptions: [],
      //tableData
      tableData: [],
      formAdd: {
        code: '',
        name: '',
        pCode: '',
        pName: '',
        pId: ''
      },
      formEdit: {
        id: '',
        code: '',
        name: '',
        pCode: '',
        pName: '',
        pId: ''
      }
    };
  },

  computed: {},
  created: function created() {
    this.findTree();
    this.findPage(true);
  },

  methods: {
    //加载树形
    findTree: function findTree() {
      var _this = this;

      this.$http.get(this.$location.sysAreaManagerfindTree).then(function (data) {
        var res = data.returnContent;
        _this.treeOptions = res || [];
      });
    },

    //加载列表
    findPage: function findPage(can) {
      var _this2 = this;

      can ? this.pageStart = 0 : this.pageStart++;
      this.$http.get(this.$location.sysAreaManagerfindPage, {
        params: {
          parentAreaID: this.navForm.treeValue[this.navForm.treeValue.length - 1],
          pageStart: this.pageStart,
          areaName: this.navForm.user
        }
      }).then(function (data) {
        var res = data.returnContent;
        _this2.totalCount = res.totalCount;
        var sysAreaList = res.sysAreaList;
        if (can) {
          _this2.tableData = sysAreaList || [];
        } else {
          var _tableData;

          (_tableData = _this2.tableData).push.apply(_tableData, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(sysAreaList));
        }
      }).catch(function (error) {
        console.log(error);
      });
    },

    //删除
    deleted: function deleted(areaID) {
      var _this3 = this;

      this.$confirm('是否确认删除该条信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this3.$http.get(_this3.$location.sysAreaManagerdelete, {
          params: {
            areaID: areaID
          }
        }).then(function (data) {
          var message = data.returnContent;
          _this3.$message({
            type: 'success',
            message: message,
            duration: 1000
          });
          _this3.findPage(true);
          _this3.findTree();
        });
      }).catch(function () {});
    },

    //form重置
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    //递归取数据
    treeArea: function treeArea(dataList, thisId) {
      var _this4 = this;

      if (dataList.length > 0) {
        if (thisId == undefined) {
          return false;
        }
        dataList.forEach(function (k, i) {
          if (k.areaID == thisId) {
            console.log('success');
            _this4.formAdd.pName = k.areaName;
            _this4.formAdd.pCode = k.areaCode;
            return false;
          } else {
            if (k.childList.length > 0) {
              _this4.treeArea(k.childList, thisId);
              console.log('go');
            } else {
              console.log('end');
              return false;
            }
          }
        });
      }
    },

    //新建
    addInfo: function addInfo() {
      this.alert.formAddVisible = true;
      var pId = this.navForm.treeValue[this.navForm.treeValue.length - 1];
      this.formAdd.pId = pId;
      this.treeArea(this.treeOptions, pId);
    },
    addClose: function addClose() {
      this.alert.formAddVisible = false;
      this.resetForm('formAdd');
    },

    //新建保存 type=1时为保存并新建
    addInfoSave: function addInfoSave(type) {
      var _this5 = this;

      this.$http.get(this.$location.sysAreaManagerinsert, {
        params: {
          areaCode: this.formAdd.code,
          areaName: this.formAdd.name,
          parentAreaID: this.formAdd.pId
        }
      }).then(function (data) {
        var message = data.returnContent;
        _this5.$message({
          type: 'success',
          message: message,
          duration: 1000
        });
        if (type == '1') {
          _this5.formAdd.code = '';
          _this5.formAdd.name = '';
        } else {
          _this5.resetForm('formAdd');
        }
        _this5.findPage();
        _this5.findTree();
      });
    },

    //编辑
    editInfo: function editInfo(dataList) {
      this.formEdit.id = dataList.areaID;
      this.formEdit.code = dataList.areaCode;
      this.formEdit.name = dataList.areaName;
      this.formEdit.pCode = dataList.parentCode;
      this.formEdit.pName = dataList.parentName;
      this.formEdit.pId = dataList.parentAreaID;
    },

    //编辑保存
    editInfoSave: function editInfoSave() {
      var _this6 = this;

      this.$http.get(this.$location.sysAreaManagerupdate, {
        params: {
          areaID: this.formEdit.id,
          areaCode: this.formEdit.code,
          areaName: this.formEdit.name,
          parentAreaID: this.formEdit.pId
        }
      }).then(function (data) {
        var message = data.returnContent;
        _this6.$message({
          type: 'success',
          message: message,
          duration: 1000
        });
        _this6.findPage();
        _this6.findTree();
      });
    }
  }
});

/***/ }),

/***/ "hJEa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pluginManagement_vue__ = __webpack_require__("f70P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2310ae39_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_pluginManagement_vue__ = __webpack_require__("cpfM");
function injectStyle (ssrContext) {
  __webpack_require__("kf9N")
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pluginManagement_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2310ae39_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_pluginManagement_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "kf9N":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("DWfE");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("15357eb3", content, true);

/***/ })

});
//# sourceMappingURL=9.09bf69bce6aa1c619ef3.js.map