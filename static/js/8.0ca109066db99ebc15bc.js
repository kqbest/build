webpackJsonp([8],{

/***/ "Ekuz":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("qArL");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("163174ca", content, true);

/***/ }),

/***/ "Sj5n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_regionalManagement_vue__ = __webpack_require__("t5JV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54c87165_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_regionalManagement_vue__ = __webpack_require__("pUFc");
function injectStyle (ssrContext) {
  __webpack_require__("Ekuz")
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_regionalManagement_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54c87165_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_regionalManagement_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "pUFc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"regionalManagement"},[_c('nav',{staticClass:"pub_select"},[_c('el-form',{ref:"navForm",attrs:{"model":_vm.navForm,"label-width":"86px"}},[_c('el-row',[_c('el-col',[_c('el-form-item',{attrs:{"label":"院区目录:"}},[_c('el-cascader',{attrs:{"props":_vm.treeProps,"options":_vm.treeOptions,"change-on-select":""},model:{value:(_vm.navForm.treeValue),callback:function ($$v) {_vm.navForm.treeValue=$$v},expression:"navForm.treeValue"}})],1)],1),_vm._v(" "),_c('el-col',[_c('el-form-item',{attrs:{"label":"院区编号:"}},[_c('el-input',{attrs:{"placeholder":"请输入院区编号"},model:{value:(_vm.navForm.code),callback:function ($$v) {_vm.navForm.code=$$v},expression:"navForm.code"}})],1)],1),_vm._v(" "),_c('el-col',[_c('el-form-item',{attrs:{"label":"院区名称:"}},[_c('el-input',{attrs:{"placeholder":"请输入院区名称"},model:{value:(_vm.navForm.name),callback:function ($$v) {_vm.navForm.name=$$v},expression:"navForm.name"}})],1)],1),_vm._v(" "),_c('el-button',{staticClass:"mlem",attrs:{"type":"primary"},on:{"click":_vm.findPage}},[_vm._v("查询")]),_vm._v(" "),_c('el-button',{staticClass:"mlem",on:{"click":function($event){_vm.resetForm('navForm')}}},[_vm._v("重置")])],1)],1)],1),_vm._v(" "),_c('section',{staticClass:"pub_hr"},[_c('div',[_c('el-breadcrumb',{attrs:{"separator":"/"}},[_c('el-breadcrumb-item',[_vm._v("系统管理")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("系统设置")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("院区管理")])],1)],1),_vm._v(" "),_c('div',[_c('el-button',{staticClass:"mlem",attrs:{"type":"primary"},on:{"click":function($event){_vm.addInfo()}}},[_vm._v("新建")]),_vm._v(" "),_c('el-button',{staticClass:"mlem"},[_vm._v("刷新")]),_vm._v(" "),_c('span',{staticClass:"mlem"},[_vm._v("\n          院区管理共"),_c('font',{staticClass:"pub_count"},[_vm._v(_vm._s(_vm.totalCount))]),_vm._v("条\n      ")],1)],1)]),_vm._v(" "),_c('section',{staticClass:"this_table"},[_c('el-table',{directives:[{name:"scroll",rawName:"v-scroll",value:(_vm.findPage),expression:"findPage"}],attrs:{"data":_vm.tableData,"stripe":"","border":"","height":"100"}},[_c('el-table-column',{attrs:{"label":"操作","width":"150","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":"编辑","disabled":true,"placement":"top-start"}},[_c('el-button',{attrs:{"size":"mini","plain":true,"type":"success","icon":"edit"},on:{"click":function($event){_vm.editInfo(scope.row.hospitalID)}}})],1),_vm._v(" "),_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":"删除","disabled":true,"placement":"top-start"}},[_c('el-button',{attrs:{"size":"mini","plain":true,"type":"danger","icon":"delete"},on:{"click":function($event){_vm.deleted(scope.row.hospitalID)}}})],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"hospitalCode","label":"院区编号","width":"180","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"hospitalName","label":"院区名称","width":"180","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"hospitalGradeName","label":"院区等级","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"areaName","label":"地区","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"postCode","label":"邮编","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"phone","label":"联系方式","align":"center","show-overflow-tooltip":""}})],1)],1),_vm._v(" "),_c('section',{staticClass:"this_add"},[_c('el-dialog',{attrs:{"title":_vm.title,"size":"small","top":"30%","visible":_vm.alert.formAddVisible,"before-close":_vm.addClose},on:{"update:visible":function($event){_vm.alert.formAddVisible=$event}}},[_c('el-form',{ref:"formAdd",staticClass:"demo-ruleForm",attrs:{"model":_vm.formAdd,"label-width":"120px"}},[_c('el-row',[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"院区编号:","prop":"hospitalCode","required":""}},[_c('el-input',{attrs:{"type":"text"},model:{value:(_vm.formAdd.hospitalCode),callback:function ($$v) {_vm.formAdd.hospitalCode=$$v},expression:"formAdd.hospitalCode"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"院区名称:","prop":"hospitalName","required":""}},[_c('el-input',{attrs:{"type":"text"},model:{value:(_vm.formAdd.hospitalName),callback:function ($$v) {_vm.formAdd.hospitalName=$$v},expression:"formAdd.hospitalName"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"邮编:","prop":"postCode"}},[_c('el-input',{attrs:{"type":"text"},model:{value:(_vm.formAdd.postCode),callback:function ($$v) {_vm.formAdd.postCode=$$v},expression:"formAdd.postCode"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"联系电话:","prop":"phone"}},[_c('el-input',{attrs:{"type":"text"},model:{value:(_vm.formAdd.phone),callback:function ($$v) {_vm.formAdd.phone=$$v},expression:"formAdd.phone"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"院区等级:","prop":"hospitalGradeID","required":""}},[_c('el-select',{model:{value:(_vm.formAdd.hospitalGradeID),callback:function ($$v) {_vm.formAdd.hospitalGradeID=$$v},expression:"formAdd.hospitalGradeID"}},_vm._l((_vm.selectDate.hospitalGradeList),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.dataDicValueName,"value":item.dataDicValueCode}})}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"省份:","prop":"provinceID","required":""}},[_c('el-select',{on:{"change":function($event){_vm.loadArea(_vm.formAdd.provinceID,'1')}},model:{value:(_vm.formAdd.provinceID),callback:function ($$v) {_vm.formAdd.provinceID=$$v},expression:"formAdd.provinceID"}},_vm._l((_vm.selectDate.provinceList),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.areaName,"value":item.areaID}})}))],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"城市:","prop":"cityID"}},[_c('el-select',{on:{"change":function($event){_vm.loadArea(_vm.formAdd.cityID,'2')}},model:{value:(_vm.formAdd.cityID),callback:function ($$v) {_vm.formAdd.cityID=$$v},expression:"formAdd.cityID"}},_vm._l((_vm.selectDate.cityList),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.areaName,"value":item.areaID}})}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"区县:","prop":"countyID"}},[_c('el-select',{on:{"change":function($event){_vm.loadArea(_vm.formAdd.countyID,'3')}},model:{value:(_vm.formAdd.countyID),callback:function ($$v) {_vm.formAdd.countyID=$$v},expression:"formAdd.countyID"}},_vm._l((_vm.selectDate.countyList),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.areaName,"value":item.areaID}})}))],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"街道:","prop":"streetID"}},[_c('el-select',{model:{value:(_vm.formAdd.streetID),callback:function ($$v) {_vm.formAdd.streetID=$$v},expression:"formAdd.streetID"}},_vm._l((_vm.selectDate.streetList),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.areaName,"value":item.areaID}})}))],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer","align":"center"},slot:"footer"},[_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.isAdd),expression:"isAdd"}],attrs:{"type":"primary"},on:{"click":_vm.addInfoSave}},[_vm._v("保 存")]),_vm._v(" "),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.isAdd),expression:"isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.addInfoSave('1');}}},[_vm._v("保存并新建")]),_vm._v(" "),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isAdd),expression:"!isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.editInfoSave(_vm.formAdd.hospitalID)}}},[_vm._v("保 存")]),_vm._v(" "),_c('el-button',{on:{"click":_vm.addClose}},[_vm._v("取 消")])],1)],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "qArL":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".regionalManagement{width:100%;overflow:auto}.regionalManagement,.regionalManagement .this_table{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.regionalManagement .this_table{padding-bottom:20px}.regionalManagement .this_table,.regionalManagement .this_table .el-table{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.regionalManagement .this_table .el-table .el-table__empty-block,.regionalManagement .this_table .el-table .el-table__header{width:100%!important}.regionalManagement .this_table .el-button--danger.is-plain{margin-left:0}.regionalManagement .this_add .el-select{width:100%}", "", {"version":3,"sources":["D:/WEBUIS_NEW/WEBUIS/src/components/system/systems/regionalManagement.vue"],"names":[],"mappings":"AACA,oBAQE,WAAY,AACZ,aAAe,CAChB,AACD,oDAVE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,qBAAuB,CAgBhC,AAZD,gCAWE,mBAAqB,CACtB,AACD,0EATE,mBAAoB,AAChB,oBAAqB,AACjB,WAAa,CAWtB,AAID,6HACE,oBAAsB,CACvB,AACD,4DACE,aAAe,CAChB,AACD,yCACE,UAAY,CACb","file":"regionalManagement.vue","sourcesContent":["\n.regionalManagement {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  overflow: auto;\n}\n.regionalManagement .this_table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-bottom: 20px;\n}\n.regionalManagement .this_table .el-table {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.regionalManagement .this_table .el-table .el-table__header {\n  width: 100%!important;\n}\n.regionalManagement .this_table .el-table .el-table__empty-block {\n  width: 100%!important;\n}\n.regionalManagement .this_table .el-button--danger.is-plain {\n  margin-left: 0;\n}\n.regionalManagement .this_add .el-select {\n  width: 100%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "t5JV":
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
      isAdd: true,
      title: '新建',
      //nav value
      navForm: {
        treeValue: [],
        code: '',
        name: ''
      },
      alert: {
        formAddVisible: false
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
        hospitalCode: '', //院区编号
        hospitalName: '', //院区名称
        postCode: '', //邮编
        phone: '', //联系电话
        hospitalGradeID: '1', //院区等级
        provinceID: '', //省份
        cityID: '', //城市
        countyID: '', //区县
        streetID: '', //街道
        hospitalID: '' //院区id
      },
      selectDate: {
        hospitalGradeList: [],
        provinceList: [],
        cityList: [],
        countyList: [],
        streetList: []
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

      this.$http.get(this.$location.sysHospitalManagerfindTree).then(function (data) {
        var res = data.returnContent;
        _this.treeOptions = res || [];
      });
    },

    //加载列表
    findPage: function findPage(can) {
      var _this2 = this;

      can ? this.pageStart = 0 : this.pageStart++;
      var treeValueLen = this.navForm.treeValue.length;
      var param = {
        provinceID: '',
        cityID: '',
        countyID: '',
        streetID: '',
        pageStart: this.pageStart,
        hospitalCode: this.navForm.code,
        hospitalName: this.navForm.name
      };
      if (treeValueLen == 2) {
        param = {
          provinceID: this.navForm.treeValue[this.navForm.treeValue.length - 1],
          cityID: '',
          countyID: '',
          streetID: '',
          pageStart: this.pageStart,
          hospitalCode: this.navForm.code,
          hospitalName: this.navForm.name
        };
      } else if (treeValueLen == 3) {
        param = {
          provinceID: '',
          cityID: this.navForm.treeValue[this.navForm.treeValue.length - 1],
          countyID: '',
          streetID: '',
          pageStart: this.pageStart,
          hospitalCode: this.navForm.code,
          hospitalName: this.navForm.name
        };
      } else if (treeValueLen == 4) {
        param = {
          provinceID: '',
          cityID: '',
          countyID: this.navForm.treeValue[this.navForm.treeValue.length - 1],
          streetID: '',
          pageStart: this.pageStart,
          hospitalCode: this.navForm.code,
          hospitalName: this.navForm.name
        };
      } else if (treeValueLen == 5) {
        param = {
          provinceID: '',
          cityID: '',
          countyID: '',
          streetID: this.navForm.treeValue[this.navForm.treeValue.length - 1],
          pageStart: this.pageStart,
          hospitalCode: this.navForm.code,
          hospitalName: this.navForm.name
        };
      }
      this.$http.get(this.$location.sysHospitalManagerfindPage, {
        params: param
      }).then(function (data) {
        var res = data.returnContent;
        _this2.totalCount = res.totalCount;
        var sysHospitalList = res.sysHospitalList;
        if (can) {
          _this2.tableData = sysHospitalList || [];
        } else {
          var _tableData;

          (_tableData = _this2.tableData).push.apply(_tableData, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(sysHospitalList));
        }
      });
    },

    //删除
    deleted: function deleted(hospitalID) {
      var _this3 = this;

      this.$confirm('是否确认删除该条信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this3.$http.get(_this3.$location.sysHospitalManagerdelete, {
          params: {
            hospitalID: hospitalID
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
      var _this5 = this;

      this.$http.get(this.$location.sysHospitalManagerinsertReady).then(function (data) {
        var res = data.returnContent;
        var hospitalGradeList = res.hospitalGradeList;
        var sysAreaList = res.sysAreaList;
        _this5.selectDate.hospitalGradeList = hospitalGradeList || [];
        _this5.selectDate.provinceList = sysAreaList || [];
      });
      this.isAdd = true;
      this.title = '新建';
      this.alert.formAddVisible = true;
    },

    //新建保存 type=1时为保存并新建
    addInfoSave: function addInfoSave(type) {
      var _this6 = this;

      this.$http.get(this.$location.sysHospitalManagerinsert, {
        params: {
          hospitalCode: this.formAdd.hospitalCode,
          hospitalName: this.formAdd.hospitalName,
          postCode: this.formAdd.postCode,
          phone: this.formAdd.phone,
          hospitalGradeID: this.formAdd.hospitalGradeID,
          provinceID: this.formAdd.provinceID,
          cityID: this.formAdd.cityID,
          countyID: this.formAdd.countyID,
          streetID: this.formAdd.streetID
        }
      }).then(function (data) {
        var message = data.returnContent;
        _this6.$message({
          type: 'success',
          message: message,
          duration: 1000
        });
        if (type == '1') {
          _this6.formAdd.hospitalCode = '';
          _this6.formAdd.hospitalName = '';
          _this6.formAdd.postCode = '';
          _this6.formAdd.phone = '';
          _this6.formAdd.hospitalGradeID = '';
          _this6.formAdd.provinceID = '';
          _this6.formAdd.cityID = '';
          _this6.formAdd.countyID = '';
          _this6.formAdd.streetID = '';
        } else {
          _this6.resetForm('formAdd');
          _this6.alert.formAddVisible = false;
        }
        _this6.findPage(true);
      });
    },

    //编辑
    editInfo: function editInfo(hospitalID) {
      var _this7 = this;

      this.$http.get(this.$location.sysHospitalManagerupdateQuery, {
        params: {
          hospitalID: hospitalID
        }
      }).then(function (data) {
        var res = data.returnContent;
        var hospitalGradeList = res.hospitalGradeList;
        var sysAreaList = res.sysAreaList;
        var sysHospitalManager = res.sysHospitalManager;
        _this7.selectDate.hospitalGradeList = hospitalGradeList || [];
        _this7.selectDate.provinceList = sysAreaList || [];

        _this7.formAdd.hospitalCode = sysHospitalManager.hospitalCode;
        _this7.formAdd.hospitalName = sysHospitalManager.hospitalName;
        _this7.formAdd.postCode = sysHospitalManager.postCode;
        _this7.formAdd.phone = sysHospitalManager.phone;
        _this7.formAdd.hospitalGradeID = sysHospitalManager.hospitalGradeID.toString();
        _this7.formAdd.provinceID = sysHospitalManager.provinceID;
        _this7.formAdd.cityID = sysHospitalManager.cityID;
        _this7.formAdd.countyID = sysHospitalManager.countyID;
        if (sysHospitalManager.streetID == '0') {
          sysHospitalManager.streetID = '';
        }
        _this7.formAdd.streetID = sysHospitalManager.streetID;
        _this7.formAdd.hospitalID = hospitalID;
        _this7.loadArea(_this7.formAdd.provinceID, '1');
        _this7.loadArea(_this7.formAdd.cityID, '2');
        _this7.loadArea(_this7.formAdd.countyID, '3');
      });
      this.isAdd = false;
      this.title = '编辑';
      this.alert.formAddVisible = true;
    },

    //编辑保存
    editInfoSave: function editInfoSave(hospitalID) {
      var _this8 = this;

      this.$http.get(this.$location.sysHospitalManagerupdate, {
        params: {
          hospitalID: hospitalID,
          hospitalCode: this.formAdd.hospitalCode,
          hospitalName: this.formAdd.hospitalName,
          postCode: this.formAdd.postCode,
          phone: this.formAdd.phone,
          hospitalGradeID: this.formAdd.hospitalGradeID,
          provinceID: this.formAdd.provinceID,
          cityID: this.formAdd.cityID,
          countyID: this.formAdd.countyID,
          streetID: this.formAdd.streetID
        }
      }).then(function (data) {
        var message = data.returnContent;
        _this8.$message({
          type: 'success',
          message: message,
          duration: 1000
        });
        _this8.resetForm('formAdd');
        _this8.alert.formAddVisible = false;
        _this8.findPage(true);
      });
      this.formAdd.hospitalID = '';
    },

    //联动加载
    loadArea: function loadArea(now, type) {
      var _this9 = this;

      if (!now) {
        return false;
      }
      this.$http.get(this.$location.sysAreaManagerloadArea, {
        params: {
          areaID: now
        }
      }).then(function (data) {
        var res = data.returnContent;
        if (type == 1) {
          _this9.selectDate.cityList = res;
        } else if (type == 2) {
          _this9.selectDate.countyList = res;
        } else if (type == 3) {
          _this9.selectDate.streetList = res;
        }
      });
    },
    addClose: function addClose() {
      this.alert.formAddVisible = false;
      this.resetForm('formAdd');
      this.formAdd.hospitalID = '';
    }
  }
});

/***/ })

});
//# sourceMappingURL=8.0ca109066db99ebc15bc.js.map