webpackJsonp([10],{

/***/ "7Lam":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("eZpp");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("b9eaf682", content, true);

/***/ }),

/***/ "eZpp":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".onCampus{width:100%;overflow:auto}.onCampus,.onCampus .this_table{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.onCampus .this_table{padding-bottom:20px}.onCampus .this_table,.onCampus .this_table .el-table{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.onCampus .this_table .el-table .el-table__empty-block,.onCampus .this_table .el-table .el-table__header{width:100%!important}.onCampus .this_table .this_enable{color:green;cursor:pointer}", "", {"version":3,"sources":["D:/WEBUIS_NEW/WEBUIS/src/components/system/systems/onCampus.vue"],"names":[],"mappings":"AACA,UAQE,WAAY,AACZ,aAAe,CAChB,AACD,gCAVE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,qBAAuB,CAgBhC,AAZD,sBAWE,mBAAqB,CACtB,AACD,sDATE,mBAAoB,AAChB,oBAAqB,AACjB,WAAa,CAWtB,AAID,yGACE,oBAAsB,CACvB,AACD,mCACE,YAAa,AACb,cAAgB,CACjB","file":"onCampus.vue","sourcesContent":["\n.onCampus {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  overflow: auto;\n}\n.onCampus .this_table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-bottom: 20px;\n}\n.onCampus .this_table .el-table {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.onCampus .this_table .el-table .el-table__header {\n  width: 100%!important;\n}\n.onCampus .this_table .el-table .el-table__empty-block {\n  width: 100%!important;\n}\n.onCampus .this_table .this_enable {\n  color: green;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "fIfN":
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
      //nav option
      treeProps: {
        value: 'menuID',
        label: 'menuName',
        children: 'childList'
      },
      treeOptions: [],
      //tableData
      tableData: []
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

      this.$http.get(this.$location.sysMenuManagerfindTree).then(function (data) {
        var res = data.returnContent;
        _this.treeOptions = res || [];
      });
    },

    //加载列表
    findPage: function findPage(can) {
      var _this2 = this;

      can ? this.pageStart = 0 : this.pageStart++;
      this.$http.get(this.$location.sysMenuManagerfindPage, {
        params: {
          parentMenuID: this.navForm.treeValue[this.navForm.treeValue.length - 1],
          pageStart: this.pageStart,
          menuName: this.navForm.name
        }
      }).then(function (data) {
        var res = data.returnContent;
        _this2.totalCount = res.totalCount;
        var sysMenuList = res.sysMenuList;
        if (can) {
          _this2.tableData = sysMenuList || [];
        } else {
          var _tableData;

          (_tableData = _this2.tableData).push.apply(_tableData, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(sysMenuList));
        }
      });
    },

    //启用状态
    enabledState: function enabledState(menuID, state) {
      var _this3 = this;

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
        _this3.$http.get(_this3.$location.sysMenuManagerupdateState, {
          params: {
            menuID: menuID,
            state: state
          }
        }).then(function (data) {
          var message = data.returnContent;
          _this3.$message({
            type: 'success',
            message: message,
            duration: 1000
          });
          _this3.findPage();
        });
      }).catch(function () {});
    },

    //form重置
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
});

/***/ }),

/***/ "iK1I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"onCampus"},[_c('nav',{staticClass:"pub_select"},[_c('el-form',{ref:"navForm",attrs:{"model":_vm.navForm,"label-width":"86px"}},[_c('el-row',[_c('el-col',[_c('el-form-item',{attrs:{"label":"菜单目录:","prop":"treeValue"}},[_c('el-cascader',{attrs:{"props":_vm.treeProps,"options":_vm.treeOptions,"change-on-select":""},model:{value:(_vm.navForm.treeValue),callback:function ($$v) {_vm.navForm.treeValue=$$v},expression:"navForm.treeValue"}})],1)],1),_vm._v(" "),_c('el-col',[_c('el-form-item',{attrs:{"label":"菜单名称:","prop":"name"}},[_c('el-input',{attrs:{"placeholder":"请输入菜单名称"},model:{value:(_vm.navForm.name),callback:function ($$v) {_vm.navForm.name=$$v},expression:"navForm.name"}})],1)],1),_vm._v(" "),_c('el-button',{staticClass:"mlem",attrs:{"type":"primary"},on:{"click":function($event){_vm.findPage(true)}}},[_vm._v("查询")]),_vm._v(" "),_c('el-button',{staticClass:"mlem",on:{"click":function($event){_vm.resetForm('navForm')}}},[_vm._v("重置")])],1)],1)],1),_vm._v(" "),_c('section',{staticClass:"pub_hr"},[_c('div',[_c('el-breadcrumb',{attrs:{"separator":"/"}},[_c('el-breadcrumb-item',[_vm._v("系统管理")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("系统设置")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("插件管理")])],1)],1),_vm._v(" "),_c('div',[_c('el-button',{staticClass:"mlem",on:{"click":_vm.findPage}},[_vm._v("刷新")]),_vm._v(" "),_c('span',{staticClass:"mlem"},[_vm._v("\n          插件管理共"),_c('font',{staticClass:"pub_count"},[_vm._v(_vm._s(_vm.totalCount))]),_vm._v("条\n      ")],1)],1)]),_vm._v(" "),_c('section',{staticClass:"this_table"},[_c('el-table',{directives:[{name:"scroll",rawName:"v-scroll",value:(_vm.findPage),expression:"findPage"}],staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData,"stripe":"","border":"","height":"100"}},[_c('el-table-column',{attrs:{"prop":"menuID","label":"菜单编码","width":"180","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"menuName","label":"菜单名称","width":"180","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"urlAdress","label":"URL","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"parentMenuID","label":"父菜单编码","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"parentMenuName","label":"父菜单名称","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"menuClassName","label":"菜单类型","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"启用状态","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',{staticClass:"this_enable",on:{"click":function($event){_vm.enabledState(scope.row.menuID,scope.row.state)}}},[_vm._v(_vm._s(scope.row.stateName))])]}}])})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "tF5R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_onCampus_vue__ = __webpack_require__("fIfN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3514a901_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_onCampus_vue__ = __webpack_require__("iK1I");
function injectStyle (ssrContext) {
  __webpack_require__("7Lam")
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_onCampus_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3514a901_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_onCampus_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=10.b4f3307c0eb0d37f9169.js.map