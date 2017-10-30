webpackJsonp([7],{

/***/ "/qlA":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("73c/");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("3949b14a", content, true);

/***/ }),

/***/ "1kc/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_roleManagement_vue__ = __webpack_require__("QtwI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cc41f608_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_roleManagement_vue__ = __webpack_require__("3vZH");
function injectStyle (ssrContext) {
  __webpack_require__("/qlA")
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_roleManagement_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cc41f608_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_roleManagement_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "3vZH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"roleManagement"},[_c('nav',{staticClass:"pub_select"},[_c('el-form',{ref:"form",attrs:{"model":_vm.form,"label-width":"86px"}},[_c('el-row',[_c('el-col',[_c('el-form-item',{attrs:{"label":"院区:","prop":"treeValue"}},[_c('el-cascader',{attrs:{"props":_vm.obj.treeProps,"options":_vm.array.treeOptions,"change-on-select":""},on:{"change":function($event){_vm.treeArea(_vm.array.treeOptions,_vm.form.treeValue[_vm.form.treeValue.length-1])}},model:{value:(_vm.form.treeValue),callback:function ($$v) {_vm.form.treeValue=$$v},expression:"form.treeValue"}})],1)],1),_vm._v(" "),_c('el-button',{staticClass:"mlem",attrs:{"type":"primary"},on:{"click":function($event){_vm.queryData(true)}}},[_vm._v("查询")])],1)],1)],1),_vm._v(" "),_c('section',{staticClass:"pub_hr"},[_c('div',[_c('el-breadcrumb',{attrs:{"separator":"/"}},[_c('el-breadcrumb-item',[_vm._v("系统管理")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("系统设置")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("角色管理")])],1)],1),_vm._v(" "),_c('div',[_c('el-button',{staticClass:"mlem",attrs:{"type":"primary"},on:{"click":function($event){_vm.addInfo()}}},[_vm._v("新建")]),_vm._v(" "),_c('el-button',{staticClass:"mlem",on:{"click":function($event){_vm.queryData(true)}}},[_vm._v("刷新")]),_vm._v(" "),_c('span',{staticClass:"mlem"},[_vm._v("\n          角色管理共"),_c('font',{staticClass:"pub_count"},[_vm._v(_vm._s(_vm.other.totalCount))]),_vm._v("条\n      ")],1)],1)]),_vm._v(" "),_c('section',{staticClass:"main"},[_c('el-table',{directives:[{name:"scroll",rawName:"v-scroll",value:(_vm.queryData),expression:"queryData"}],attrs:{"data":_vm.array.tableData,"stripe":"","border":"","height":"100"}},[_c('el-table-column',{attrs:{"label":"操作","align":"center","width":"150"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"plain":true,"type":"success","size":"mini","icon":"edit"},on:{"click":function($event){_vm.editInfo(scope.row.roleID)}}}),_vm._v(" "),_c('el-button',{attrs:{"plain":true,"type":"danger","size":"mini","icon":"delete"},on:{"click":function($event){_vm.deleted(scope.row.roleID)}}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"角色编号","prop":"roleID","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"角色名称","prop":"roleName","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"院区","prop":"hospitalName","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"科室","prop":"departmentName","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"启用状态","align":"center","width":"150"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',{staticClass:"this_enable",on:{"click":function($event){_vm.enabledState(scope.row.roleID,scope.row.state)}}},[_vm._v(_vm._s(scope.row.stateName))])]}}])})],1)],1),_vm._v(" "),_c('section',{staticClass:"popup"},[_c('el-dialog',{attrs:{"title":_vm.other.title,"size":"small","top":"20%","visible":_vm.alert.popupVisible,"before-close":_vm.closePopup},on:{"update:visible":function($event){_vm.alert.popupVisible=$event}}},[_c('el-form',{ref:"popupForm",attrs:{"model":_vm.popupForm,"label-width":"120px"}},[_c('el-row',[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"院区:","prop":"hospitalName"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.popupForm.hospitalName),callback:function ($$v) {_vm.popupForm.hospitalName=$$v},expression:"popupForm.hospitalName"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"科室:","prop":"depName"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.popupForm.depName),callback:function ($$v) {_vm.popupForm.depName=$$v},expression:"popupForm.depName"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"角色名称:","prop":"roleName","required":""}},[_c('el-input',{model:{value:(_vm.popupForm.roleName),callback:function ($$v) {_vm.popupForm.roleName=$$v},expression:"popupForm.roleName"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":22}},[_c('el-form-item',{attrs:{"label":"角色描述:","prop":"roleDesc"}},[_c('el-input',{attrs:{"type":"textarea","rows":2,"placeholder":"请输入内容"},model:{value:(_vm.popupForm.roleDesc),callback:function ($$v) {_vm.popupForm.roleDesc=$$v},expression:"popupForm.roleDesc"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":22}},[_c('el-form-item',{attrs:{"label":"角色权限:","required":""}},[_c('el-tabs',{attrs:{"type":"border-card"},model:{value:(_vm.other.activeName),callback:function ($$v) {_vm.other.activeName=$$v},expression:"other.activeName"}},[_c('el-tab-pane',{attrs:{"label":"菜单权限","name":"first"}},[_c('div',{staticClass:"tree"},[_c('el-tree',{ref:"tree1",attrs:{"node-key":"menuID","data":_vm.array.menuArr,"show-checkbox":"","props":_vm.obj.menuProps}})],1)]),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":"功能权限","name":"second"}},[_c('div',{staticClass:"tree"},[_c('el-tree',{ref:"tree2",attrs:{"node-key":"rightID","data":_vm.array.authArr,"show-checkbox":"","props":_vm.obj.authProps}})],1)]),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":"诊断权限","name":"third"}},[_c('div',{staticClass:"tree"},[_c('el-tree',{ref:"tree3",attrs:{"node-key":"treeID","data":_vm.array.diagnArr,"show-checkbox":"","props":_vm.obj.diagnProps}})],1)]),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":"审核权限","name":"fourth"}},[_c('div',{staticClass:"tree"},[_c('el-tree',{ref:"tree4",attrs:{"node-key":"treeID","data":_vm.array.auditArr,"show-checkbox":"","props":_vm.obj.auditProps}})],1)])],1)],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer","align":"center"},slot:"footer"},[_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.other.isAdd),expression:"other.isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.addInfoSave()}}},[_vm._v("保 存")]),_vm._v(" "),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.other.isAdd),expression:"!other.isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.editInfoSave()}}},[_vm._v("保 存")]),_vm._v(" "),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.other.isAdd),expression:"other.isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.addInfoSave('1')}}},[_vm._v("保存并新建")]),_vm._v(" "),_c('el-button',{on:{"click":_vm.closePopup}},[_vm._v("取 消")])],1)],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "73c/":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".roleManagement{width:100%;padding-bottom:20px}.roleManagement,.roleManagement .main{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.roleManagement .main{border:1px solid green}.roleManagement .main,.roleManagement .main .el-table{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.roleManagement .main .el-table .el-table__empty-block,.roleManagement .main .el-table .el-table__header{width:100%!important}.roleManagement .main .el-table .el-button{margin-left:0}.roleManagement .main .el-table .this_enable{color:green;cursor:pointer}.roleManagement .popup .tree{display:inline-block;width:100%;height:200px;border:1px solid #d1dbe5;overflow:auto}.roleManagement .popup .tree .el-tree{border:none}", "", {"version":3,"sources":["D:/WEBUIS_NEW/WEBUIS/src/components/system/systems/roleManagement.vue"],"names":[],"mappings":"AACA,gBACE,WAAY,AAQZ,mBAAqB,CACtB,AACD,sCATE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,qBAAuB,CAehC,AAZD,sBAWE,sBAAwB,CACzB,AACD,sDAZE,mBAAoB,AAChB,oBAAqB,AACjB,WAAa,CActB,AAID,yGACE,oBAAsB,CACvB,AACD,2CACE,aAAe,CAChB,AACD,6CACE,YAAa,AACb,cAAgB,CACjB,AACD,6BACE,qBAAsB,AACtB,WAAY,AACZ,aAAc,AACd,yBAA0B,AAC1B,aAAe,CAChB,AACD,sCACE,WAAa,CACd","file":"roleManagement.vue","sourcesContent":["\n.roleManagement {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-bottom: 20px;\n}\n.roleManagement .main {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border: 1px solid green;\n}\n.roleManagement .main .el-table {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.roleManagement .main .el-table .el-table__header {\n  width: 100%!important;\n}\n.roleManagement .main .el-table .el-table__empty-block {\n  width: 100%!important;\n}\n.roleManagement .main .el-table .el-button {\n  margin-left: 0;\n}\n.roleManagement .main .el-table .this_enable {\n  color: green;\n  cursor: pointer;\n}\n.roleManagement .popup .tree {\n  display: inline-block;\n  width: 100%;\n  height: 200px;\n  border: 1px solid #d1dbe5;\n  overflow: auto;\n}\n.roleManagement .popup .tree .el-tree {\n  border: none;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "QtwI":
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      form: {
        treeValue: []
      },
      popupForm: {
        hospitalID: '',
        hospitalName: '',
        departmentID: '',
        departmentName: '',
        roleName: '',
        roleDesc: '',
        roleID: ''
      },
      array: {
        treeOptions: [], //树形数据
        tableData: [], //表格数据
        menuArr: [], //菜单权限
        authArr: [], //功能权限
        diagnArr: [], //诊断权限
        auditArr: [] //审核权限
      },
      obj: {
        treeProps: {
          value: 'depID',
          label: 'depName',
          children: 'childList'
        },
        menuProps: {
          id: 'menuID',
          label: 'menuName',
          children: 'childList'
        },
        authProps: {
          id: 'rightID',
          label: 'rightName',
          children: 'childList'
        },
        diagnProps: {
          id: 'treeID',
          label: 'treeName',
          children: 'childList'
        },
        auditProps: {
          id: 'treeID',
          label: 'treeName',
          children: 'childList'
        },
        tableParms: {
          hospitalID: '',
          hospitalName: '',
          depID: '',
          depName: ''
        }
      },
      other: {
        totalCount: '',
        pageStart: '0',
        title: '新建',
        isAdd: true,
        isFirst: true, //判断是否是初次加载树形，如果是给treeValue添加默认值
        activeName: 'first' //tabs默认选中第一个
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

      this.$http.get(this.$location.sysRoleManagerfindTree).then(function (data) {
        var res = data.returnContent;
        _this.array.treeOptions = res;
        //默认选中第一个
        if (_this.array.treeOptions.length > 0) {
          if (_this.other.isFirst) {
            _this.form.treeValue.push(_this.array.treeOptions[0].depID);
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
      this.$http.get(this.$location.sysRoleManagerfindPage, {
        params: {
          hospitalID: this.obj.tableParms.hospitalID,
          departmentID: this.obj.tableParms.depID,
          pageStart: this.other.pageStart
        }
      }).then(function (data) {
        var res = data.returnContent;
        var list = res.sysRoleList;
        _this2.other.totalCount = res.totalCount;
        if (can) {
          _this2.array.tableData = list;
        } else {
          var _array$tableData;

          (_array$tableData = _this2.array.tableData).push.apply(_array$tableData, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(list));
        }
      });
    },

    //新建
    addInfo: function addInfo() {
      var _this3 = this;

      if (this.form.treeValue[this.form.treeValue.length - 1] == '0') {
        this.$alert('\u8BF7\u9009\u62E9\u76F8\u5E94\u7684\u9662\u533A\u6216\u79D1\u5BA4\uFF01', '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        }).then(function () {});
      } else {
        this.$http.get(this.$location.sysRoleManagerinsertReady, {
          params: {
            hospitalID: this.obj.tableParms.hospitalID,
            departmentID: this.obj.tableParms.depID
          }
        }).then(function (data) {
          var res = data.returnContent;
          _this3.array.menuArr = res.sysMenuTree;
          _this3.array.authArr = res.authTree;
          _this3.array.diagnArr = res.assistTree;
          _this3.array.auditArr = res.assistTree;

          _this3.popupForm.hospitalID = _this3.obj.tableParms.hospitalID;
          _this3.popupForm.hospitalName = _this3.obj.tableParms.hospitalName;
          _this3.popupForm.departmentID = _this3.obj.tableParms.depID;
          _this3.popupForm.depName = _this3.obj.tableParms.depName;
        });
        this.other.title = '新建';
        this.other.isAdd = true;
        this.alert.popupVisible = true;
      }
    },

    //新建保存
    addInfoSave: function addInfoSave(type) {
      var _this4 = this;

      var mArr = this.$refs.tree1.getCheckedKeys(); //菜单权限
      var rArr = this.$refs.tree2.getCheckedKeys(); //功能权限
      var dNodes = this.$refs.tree3.getCheckedNodes(); //诊断权限
      var aNodes = this.$refs.tree4.getCheckedNodes(); //审核权限
      var dArr = '';
      var aArr = '';
      dNodes.forEach(function (k, i) {
        var hospID = k.hospitalID;
        var depID = k.departmentID;
        if (dArr == '') {
          dArr = hospID + ',' + depID;
        } else {
          dArr += ';' + hospID + ',' + depID;
        }
      });
      aNodes.forEach(function (k, i) {
        var hospID = k.hospitalID;
        var depID = k.departmentID;
        if (aArr == '') {
          aArr = hospID + ',' + depID;
        } else {
          aArr += ';' + hospID + ',' + depID;
        }
      });
      this.$http.get(this.$location.sysRoleManagerinsert, {
        params: {
          hospitalID: this.popupForm.hospitalID,
          departmentID: this.popupForm.departmentID,
          roleName: this.popupForm.roleName,
          roleDesc: this.popupForm.roleDesc,
          menuIDArray: mArr.join(','),
          rightIDArray: rArr.join(','),
          diagnosisIDArray: dArr,
          auditIDArray: aArr
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
        this.popupForm.roleName = '';
        this.popupForm.roleDesc = '';
        //清空树形勾选
        this.$refs.tree1.setCheckedKeys([]);
        this.$refs.tree2.setCheckedKeys([]);
        this.$refs.tree3.setCheckedKeys([]);
        this.$refs.tree4.setCheckedKeys([]);
      } else {
        //清空弹框数据
        this.resetForm('popupForm');
        this.array.menuArr = [];
        this.array.authArr = [];
        this.array.diagnArr = [];
        this.array.auditArr = [];
        this.popupForm.roleName = '';
        this.popupForm.roleDesc = '';
        this.alert.popupVisible = false;
      }
    },

    //编辑
    editInfo: function editInfo(roleID) {
      var _this5 = this;

      this.$http.get(this.$location.sysRoleManagerupdateQuery, {
        params: {
          roleID: roleID
        }
      }).then(function (data) {
        var res = data.returnContent;
        var role = res.sysRoleManager;
        _this5.popupForm.roleID = roleID;
        _this5.array.menuArr = res.sysMenuTree;
        _this5.array.authArr = res.authTree;
        _this5.array.diagnArr = res.assistTree;
        _this5.array.auditArr = res.assistTree;
        _this5.popupForm.hospitalID = role.hospitalID;
        _this5.popupForm.hospitalName = role.hospitalName;
        _this5.popupForm.departmentID = role.departmentID;
        _this5.popupForm.departmentName = role.departmentName;
        _this5.popupForm.roleName = role.roleName;
        _this5.popupForm.roleDesc = role.roleDesc;
        var mArr = role.menuIDArray;
        var rArr = role.rightIDArray;
        var diagn = role.diagnosisIDArray.split(';');
        var audit = role.auditIDArray.split(';');
        var dArr = '';
        var aArr = '';
        diagn.forEach(function (k, i) {
          var treeID = k.split(',')[1];
          if (dArr == '') {
            dArr = treeID;
          } else {
            dArr += ',' + treeID;
          }
        });
        audit.forEach(function (k, i) {
          var treeID = k.split(',')[1];
          if (aArr == '') {
            aArr = treeID;
          } else {
            aArr += ',' + treeID;
          }
        });
        _this5.$refs.tree1.setCheckedKeys(mArr.split(',')); //菜单权限
        _this5.$refs.tree2.setCheckedKeys(rArr.split(',')); //功能权限
        if (dArr) {
          _this5.$refs.tree3.setCheckedKeys(dArr.split(',')); //诊断权限
        }
        if (aArr) {
          _this5.$refs.tree4.setCheckedKeys(aArr.split(',')); //审核权限
        }
      });
      this.other.title = '编辑';
      this.other.isAdd = false;
      this.alert.popupVisible = true;
    },

    //编辑保存
    editInfoSave: function editInfoSave() {
      var _this6 = this;

      var mArr = this.$refs.tree1.getCheckedKeys(); //菜单权限
      var rArr = this.$refs.tree2.getCheckedKeys(); //功能权限
      var dNodes = this.$refs.tree3.getCheckedNodes(); //诊断权限
      var aNodes = this.$refs.tree4.getCheckedNodes(); //审核权限
      var dArr = '';
      var aArr = '';
      dNodes.forEach(function (k, i) {
        var hospID = k.hospitalID;
        var depID = k.departmentID;
        if (dArr == '') {
          dArr = hospID + ',' + depID;
        } else {
          dArr += ';' + hospID + ',' + depID;
        }
      });
      aNodes.forEach(function (k, i) {
        var hospID = k.hospitalID;
        var depID = k.departmentID;
        if (aArr == '') {
          aArr = hospID + ',' + depID;
        } else {
          aArr += ';' + hospID + ',' + depID;
        }
      });
      this.$http.get(this.$location.sysRoleManagerupdate, {
        params: {
          roleID: this.popupForm.roleID,
          hospitalID: this.popupForm.hospitalID,
          departmentID: this.popupForm.departmentID,
          roleName: this.popupForm.roleName,
          roleDesc: this.popupForm.roleDesc,
          menuIDArray: mArr.join(','),
          rightIDArray: rArr.join(','),
          diagnosisIDArray: dArr,
          auditIDArray: aArr
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
      this.array.menuArr = [];
      this.array.authArr = [];
      this.array.diagnArr = [];
      this.array.auditArr = [];
      this.popupForm.roleName = '';
      this.popupForm.roleDesc = '';
      this.alert.popupVisible = false;
    },

    //启用状态
    enabledState: function enabledState(roleID, state) {
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
        _this7.$http.get(_this7.$location.sysRoleManagerupdateState, {
          params: {
            roleID: roleID,
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
    deleted: function deleted(roleID) {
      var _this8 = this;

      this.$confirm('是否确认删除该条信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this8.$http.get(_this8.$location.sysRoleManagerdelete, {
          params: {
            roleID: roleID
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
          if (k.depID == thisId) {
            console.log('success');
            _this9.obj.tableParms.hospitalID = k.hospitalID;
            _this9.obj.tableParms.hospitalName = _this9.array.treeOptions[0].depName;
            _this9.obj.tableParms.depID = k.depID;
            _this9.obj.tableParms.depName = k.depName;
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
      this.array.menuArr = [];
      this.array.authArr = [];
      this.array.diagnArr = [];
      this.array.auditArr = [];
      this.popupForm.roleName = '';
      this.popupForm.roleDesc = '';
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
//# sourceMappingURL=7.5fe1bc2d44fbab365398.js.map