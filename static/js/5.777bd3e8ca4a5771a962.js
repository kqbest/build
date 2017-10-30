webpackJsonp([5],{

/***/ "+T6y":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("uO7/");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("7a150059", content, true);

/***/ }),

/***/ "Y+CW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__("Gu7T");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        treeValue: [],
        loginName: '',
        userName: ''
      },
      popupForm: {
        hospitalID: '',
        hospitalName: '',
        departmentID: '',
        departmentName: '',
        loginName: '', //用户名
        userName: '', //姓名
        jobNumber: '', //工号
        sex: '1', //性别
        station: '', //职称
        userType: '1', //用户类型
        phone: '', //联系电话
        shortPhone: '', //短号
        password: '', //密码
        dataDicID: '', //排班岗位
        foreverState: 1, //永久性标识
        startDate: '', //开始日期
        endDate: '', //结束日期
        roleIDArray: [], //角色
        inputMethod: '', //输入法
        resume: '', //个人介绍
        cANumber: '', //CA验证码
        nameAbbr: '', //名称缩写
        userInfoID: ''
      },
      array: {
        treeOptions: [], //树形数据
        tableData: [], //表格数据
        dataDicIDList: [],
        sexList: [], //性别list
        userTypeList: [], //用户类型list
        sysRoleList: [] //角色list
      },
      obj: {
        treeProps: {
          value: 'depID',
          label: 'depName',
          children: 'childList'
        },
        tableParms: {
          hospitalID: '',
          hospitalName: '',
          depID: '',
          depName: ''
        },
        upload: {
          dialogImageUrl: '',
          dialogVisible: false
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

      this.$http.get(this.$location.sysUserInfofindTree).then(function (data) {
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
      this.$http.get(this.$location.sysUserInfofindPage, {
        params: {
          hospitalID: this.obj.tableParms.hospitalID,
          departmentID: this.obj.tableParms.depID,
          pageStart: this.other.pageStart,
          loginName: this.form.loginName,
          userName: this.form.userName
        }
      }).then(function (data) {
        var res = data.returnContent;
        var list = res.sysUserInfoList;
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
        this.$http.get(this.$location.sysUserInfoinsertReady, {
          params: {
            hospitalID: this.obj.tableParms.hospitalID,
            departmentID: this.obj.tableParms.depID
          }
        }).then(function (data) {
          var res = data.returnContent;
          _this3.array.dataDicIDList = res.dataDicIDList;
          _this3.array.sexList = res.sexList;
          _this3.array.userTypeList = res.userTypeList;
          _this3.array.sysRoleList = res.sysRoleList;

          _this3.popupForm.hospitalID = res.sysDepartmentManager.hospitalID;
          _this3.popupForm.hospitalName = res.sysDepartmentManager.hospitalName;
          _this3.popupForm.departmentID = res.sysDepartmentManager.depID;
          _this3.popupForm.departmentName = res.sysDepartmentManager.depName;
        });
        this.other.title = '新建';
        this.other.isAdd = true;
        this.alert.popupVisible = true;
      }
    },

    //新建保存
    addInfoSave: function addInfoSave(type) {
      var _this4 = this;

      var jsonData = new FormData();
      jsonData.append('cANumber', this.popupForm.cANumber);
      jsonData.append('hospitalID', this.popupForm.hospitalID);
      jsonData.append('departmentID', this.popupForm.departmentID);
      jsonData.append('loginName', this.popupForm.loginName);
      jsonData.append('userName', this.popupForm.userName);
      jsonData.append('jobNumber', this.popupForm.jobNumber);
      jsonData.append('sex', this.popupForm.sex);
      jsonData.append('station', this.popupForm.station);
      jsonData.append('userType', this.popupForm.userType);
      jsonData.append('phone', this.popupForm.phone);
      jsonData.append('shortPhone', this.popupForm.shortPhone);
      jsonData.append('password', this.popupForm.password);
      jsonData.append('dataDicID', this.popupForm.dataDicID);
      jsonData.append('foreverState', this.popupForm.foreverState);
      jsonData.append('startDate', this.popupForm.startDate);
      jsonData.append('endDate', this.popupForm.endDate);
      jsonData.append('roleIDArray', this.popupForm.roleIDArray);
      jsonData.append('inputMethod', this.popupForm.inputMethod);
      jsonData.append('resume', this.popupForm.resume);
      jsonData.append('nameAbbr', this.popupForm.nameAbbr);
      jsonData.append("inputMethod", "");
      $.ajax({
        type: 'post',
        url: this.$location.sysUserInfoinsert,
        dataType: 'json',
        data: jsonData,
        //告诉jQuery不要去处理发送的数据
        processData: false,
        //告诉jQuery不要去设置Content-Type请求头
        contentType: false,
        success: function success(data) {
          var msg = data.returnContent;
          if (data.returnCode == '1') {
            _this4.$message({
              type: 'success',
              message: msg,
              duration: 1000
            });
            _this4.queryData(true);
          }
        }
      });
      // //判断是 保存/保存并新建
      if (type == '1') {
        this.popupForm.loginName = '', //用户名
        this.popupForm.userName = '', //姓名
        this.popupForm.jobNumber = '', //工号
        this.popupForm.sex = '1', //性别
        this.popupForm.station = '', //职称
        this.popupForm.userType = '1', //用户类型
        this.popupForm.phone = '', //联系电话
        this.popupForm.shortPhone = '', //短号
        this.popupForm.password = '', //密码
        this.popupForm.dataDicID = '', //排班岗位
        this.popupForm.foreverState = '1', //永久性标识
        this.popupForm.startDate = '', //开始日期
        this.popupForm.endDate = '', //结束日期
        this.popupForm.roleIDArray = [], //角色
        this.popupForm.resume = ''; //个人介绍
      } else {
        //清空弹框数据
        this.resetForm('popupForm');
        this.array.dataDicIDList = [];
        this.array.sexList = [];
        this.array.userTypeList = [];
        this.array.sysRoleList = [];
        this.alert.popupVisible = false;
      }
    },

    //编辑
    editInfo: function editInfo(userInfoID) {
      var _this5 = this;

      this.$http.get(this.$location.sysUserInfoupdateQuery, {
        params: {
          userInfoID: userInfoID
        }
      }).then(function (data) {
        var res = data.returnContent;
        _this5.array.dataDicIDList = res.dataDicIDList;
        _this5.array.sexList = res.sexList;
        _this5.array.userTypeList = res.userTypeList;
        _this5.array.sysRoleList = res.sysRoleList;

        _this5.popupForm.hospitalID = res.sysUserInfo.hospitalID;
        _this5.popupForm.hospitalName = res.sysUserInfo.hospitalName;
        _this5.popupForm.departmentID = res.sysUserInfo.departmentID;
        _this5.popupForm.departmentName = res.sysUserInfo.departmentName;
        _this5.popupForm.loginName = res.sysUserInfo.loginName; //用户名
        _this5.popupForm.userName = res.sysUserInfo.userName; //姓名
        _this5.popupForm.jobNumber = res.sysUserInfo.jobNumber; //工号
        _this5.popupForm.sex = res.sysUserInfo.sex.toString(); //性别
        _this5.popupForm.station = res.sysUserInfo.station; //职称
        _this5.popupForm.userType = res.sysUserInfo.userType.toString(); //用户类型
        _this5.popupForm.phone = res.sysUserInfo.phone; //联系电话
        _this5.popupForm.shortPhone = res.sysUserInfo.shortPhone; //短号
        _this5.popupForm.password = res.sysUserInfo.password; //密码
        _this5.popupForm.dataDicID = res.sysUserInfo.dataDicID; //排班岗位
        _this5.popupForm.foreverStat = res.sysUserInfo.foreverStat; //永久性标识
        _this5.popupForm.startDate = res.sysUserInfo.startDate; //开始日期
        _this5.popupForm.endDate = res.sysUserInfo.endDate; //结束日期
        var sysUserInfo = [];
        res.sysUserInfo.roleIDArray.split(',').forEach(function (k, i) {
          sysUserInfo.push(parseInt(k));
        });
        _this5.popupForm.roleIDArray = sysUserInfo; //角色
        _this5.popupForm.inputMethod = res.sysUserInfo.inputMethod; //输入法
        _this5.popupForm.resume = res.sysUserInfo.resume; //个人介绍
        _this5.popupForm.cANumbe = res.sysUserInfo.cANumbe; //CA验证码
        _this5.popupForm.nameAbbr = res.sysUserInfo.nameAbbr; //名称缩写
        _this5.popupForm.userInfoID = res.sysUserInfo.userInfoID;
      });
      this.other.title = '编辑';
      this.other.isAdd = false;
      this.alert.popupVisible = true;
    },

    //编辑保存
    editInfoSave: function editInfoSave() {
      var _this6 = this;

      var jsonData = new FormData();
      jsonData.append('cANumber', this.popupForm.cANumber);
      jsonData.append('hospitalID', this.popupForm.hospitalID);
      jsonData.append('departmentID', this.popupForm.departmentID);
      jsonData.append('loginName', this.popupForm.loginName);
      jsonData.append('userName', this.popupForm.userName);
      jsonData.append('jobNumber', this.popupForm.jobNumber);
      jsonData.append('sex', this.popupForm.sex);
      jsonData.append('station', this.popupForm.station);
      jsonData.append('userType', this.popupForm.userType);
      jsonData.append('phone', this.popupForm.phone);
      jsonData.append('shortPhone', this.popupForm.shortPhone);
      jsonData.append('password', this.popupForm.password);
      jsonData.append('dataDicID', this.popupForm.dataDicID);
      jsonData.append('foreverState', this.popupForm.foreverState);
      jsonData.append('startDate', this.popupForm.startDate);
      jsonData.append('endDate', this.popupForm.endDate);
      jsonData.append('roleIDArray', this.popupForm.roleIDArray);
      jsonData.append('inputMethod', this.popupForm.inputMethod);
      jsonData.append('resume', this.popupForm.resume);
      jsonData.append('nameAbbr', this.popupForm.nameAbbr);
      jsonData.append("inputMethod", "");
      jsonData.append("userInfoID", this.popupForm.userInfoID);
      $.ajax({
        type: 'post',
        url: this.$location.sysUserInfoupdate,
        dataType: 'json',
        data: jsonData,
        //告诉jQuery不要去处理发送的数据
        processData: false,
        //告诉jQuery不要去设置Content-Type请求头
        contentType: false,
        success: function success(data) {
          var msg = data.returnContent;
          if (data.returnCode == '1') {
            _this6.$message({
              type: 'success',
              message: msg,
              duration: 1000
            });
            _this6.queryData(true);
          }
        }
      });
      //清空弹框数据
      this.resetForm('popupForm');
      this.array.dataDicIDList = [];
      this.array.sexList = [];
      this.array.userTypeList = [];
      this.array.sysRoleList = [];
      this.alert.popupVisible = false;
    },

    //启用状态
    enabledState: function enabledState(userInfoID, state) {
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
        _this7.$http.get(_this7.$location.sysUserInfoupdateState, {
          params: {
            userInfoID: userInfoID,
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
    deleted: function deleted(userInfoID) {
      var _this8 = this;

      this.$confirm('是否确认删除该条信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this8.$http.get(_this8.$location.sysUserInfodelete, {
          params: {
            userInfoID: userInfoID
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
      this.array.dataDicIDList = [];
      this.array.sexList = [];
      this.array.userTypeList = [];
      this.array.sysRoleList = [];
      this.alert.popupVisible = false;
    },

    //form重置
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRemove: function handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview: function handlePictureCardPreview(file) {
      this.obj.upload.dialogImageUrl = file.url;
      this.obj.upload.dialogVisible = true;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "fWRe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"user"},[_c('nav',{staticClass:"pub_select"},[_c('el-form',{ref:"form",attrs:{"model":_vm.form,"label-width":"86px"}},[_c('el-row',[_c('el-col',[_c('el-form-item',{attrs:{"label":"院区:","prop":"treeValue"}},[_c('el-cascader',{attrs:{"props":_vm.obj.treeProps,"options":_vm.array.treeOptions,"change-on-select":""},on:{"change":function($event){_vm.treeArea(_vm.array.treeOptions,_vm.form.treeValue[_vm.form.treeValue.length-1])}},model:{value:(_vm.form.treeValue),callback:function ($$v) {_vm.form.treeValue=$$v},expression:"form.treeValue"}})],1)],1),_vm._v(" "),_c('el-col',[_c('el-form-item',{attrs:{"label":"用户名:","prop":"userName"}},[_c('el-input',{attrs:{"placeholder":"请输入用户名"},model:{value:(_vm.form.loginName),callback:function ($$v) {_vm.form.loginName=$$v},expression:"form.loginName"}})],1)],1),_vm._v(" "),_c('el-col',[_c('el-form-item',{attrs:{"label":"姓名:","prop":"name"}},[_c('el-input',{attrs:{"placeholder":"请输入姓名"},model:{value:(_vm.form.userName),callback:function ($$v) {_vm.form.userName=$$v},expression:"form.userName"}})],1)],1),_vm._v(" "),_c('el-button',{staticClass:"mlem",attrs:{"type":"primary"},on:{"click":function($event){_vm.queryData(true)}}},[_vm._v("查询")])],1)],1)],1),_vm._v(" "),_c('section',{staticClass:"pub_hr"},[_c('div',[_c('el-breadcrumb',{attrs:{"separator":"/"}},[_c('el-breadcrumb-item',[_vm._v("系统管理")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("系统设置")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("用户管理")])],1)],1),_vm._v(" "),_c('div',[_c('el-button',{staticClass:"mlem",attrs:{"type":"primary"},on:{"click":function($event){_vm.addInfo()}}},[_vm._v("新建")]),_vm._v(" "),_c('el-button',{staticClass:"mlem",on:{"click":function($event){_vm.queryData(true)}}},[_vm._v("刷新")]),_vm._v(" "),_c('span',{staticClass:"mlem"},[_vm._v("\n          用户管理共"),_c('font',{staticClass:"pub_count"},[_vm._v(_vm._s(_vm.other.totalCount))]),_vm._v("条\n      ")],1)],1)]),_vm._v(" "),_c('section',{staticClass:"main"},[_c('el-table',{directives:[{name:"scroll",rawName:"v-scroll",value:(_vm.queryData),expression:"queryData"}],attrs:{"data":_vm.array.tableData,"stripe":"","border":"","height":"100"}},[_c('el-table-column',{attrs:{"label":"操作","align":"center","width":"150"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"plain":true,"type":"success","size":"mini","icon":"edit"},on:{"click":function($event){_vm.editInfo(scope.row.userInfoID)}}}),_vm._v(" "),_c('el-button',{attrs:{"plain":true,"type":"danger","size":"mini","icon":"delete"},on:{"click":function($event){_vm.deleted(scope.row.userInfoID)}}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"用户名","prop":"loginName","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"姓名","prop":"userName","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"用户类型","prop":"userTypeName","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"归属院区","prop":"hospitalName","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"归属科室","prop":"departmentName","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"启用状态","align":"center","width":"150"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',{staticClass:"this_enable",on:{"click":function($event){_vm.enabledState(scope.row.userInfoID,scope.row.state)}}},[_vm._v(_vm._s(scope.row.stateName))])]}}])})],1)],1),_vm._v(" "),_c('section',{staticClass:"popup"},[_c('el-dialog',{attrs:{"title":_vm.other.title,"size":"small","top":"14%","visible":_vm.alert.popupVisible,"before-close":_vm.closePopup},on:{"update:visible":function($event){_vm.alert.popupVisible=$event}}},[_c('el-form',{ref:"popupForm",attrs:{"model":_vm.popupForm,"label-width":"90px"}},[_c('el-row',[_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"归属院区:","prop":"hospitalName"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.popupForm.hospitalName),callback:function ($$v) {_vm.popupForm.hospitalName=$$v},expression:"popupForm.hospitalName"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"归属科室:","prop":"departmentName"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.popupForm.departmentName),callback:function ($$v) {_vm.popupForm.departmentName=$$v},expression:"popupForm.departmentName"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"用户名:","prop":"loginName","required":""}},[_c('el-input',{model:{value:(_vm.popupForm.loginName),callback:function ($$v) {_vm.popupForm.loginName=$$v},expression:"popupForm.loginName"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"姓名:","prop":"userName","required":""}},[_c('el-input',{model:{value:(_vm.popupForm.userName),callback:function ($$v) {_vm.popupForm.userName=$$v},expression:"popupForm.userName"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"工号:","prop":"jobNumber","required":""}},[_c('el-input',{model:{value:(_vm.popupForm.jobNumber),callback:function ($$v) {_vm.popupForm.jobNumber=$$v},expression:"popupForm.jobNumber"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"性别:","prop":"sex"}},[_c('el-select',{model:{value:(_vm.popupForm.sex),callback:function ($$v) {_vm.popupForm.sex=$$v},expression:"popupForm.sex"}},_vm._l((_vm.array.sexList),function(item){return _c('el-option',{key:item.dataDicValueCode,attrs:{"label":item.dataDicValueName,"value":item.dataDicValueCode}})}))],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"职称:","prop":"station"}},[_c('el-input',{model:{value:(_vm.popupForm.station),callback:function ($$v) {_vm.popupForm.station=$$v},expression:"popupForm.station"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"用户类型:","prop":"userType","required":""}},[_c('el-select',{model:{value:(_vm.popupForm.userType),callback:function ($$v) {_vm.popupForm.userType=$$v},expression:"popupForm.userType"}},_vm._l((_vm.array.userTypeList),function(item){return _c('el-option',{key:item.dataDicValueCode,attrs:{"label":item.dataDicValueName,"value":item.dataDicValueCode}})}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"联系电话:","prop":"phone"}},[_c('el-input',{model:{value:(_vm.popupForm.phone),callback:function ($$v) {_vm.popupForm.phone=$$v},expression:"popupForm.phone"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"短号:","prop":"shortPhone"}},[_c('el-input',{model:{value:(_vm.popupForm.shortPhone),callback:function ($$v) {_vm.popupForm.shortPhone=$$v},expression:"popupForm.shortPhone"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"密码:","prop":"password"}},[_c('el-input',{model:{value:(_vm.popupForm.password),callback:function ($$v) {_vm.popupForm.password=$$v},expression:"popupForm.password"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"排班岗位:","prop":"dataDicID"}},[_c('el-select',{attrs:{"multiple":"","placeholder":"请选择"},model:{value:(_vm.popupForm.dataDicID),callback:function ($$v) {_vm.popupForm.dataDicID=$$v},expression:"popupForm.dataDicID"}},_vm._l((_vm.array.dataDicIDList),function(item){return _c('el-option',{key:item.dataDicValueID,attrs:{"label":item.dataDicValueID,"value":item.dataDicValueID}})}))],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":"有效期:","prop":"foreverState"}},[_c('el-radio-group',{model:{value:(_vm.popupForm.foreverState),callback:function ($$v) {_vm.popupForm.foreverState=$$v},expression:"popupForm.foreverState"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("永久")]),_vm._v(" "),_c('el-radio',{attrs:{"label":0}},[_vm._v("日期范围")])],1)],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"角色:","prop":"roleIDArray","required":""}},[_c('el-select',{attrs:{"multiple":"","placeholder":"请选择"},model:{value:(_vm.popupForm.roleIDArray),callback:function ($$v) {_vm.popupForm.roleIDArray=$$v},expression:"popupForm.roleIDArray"}},_vm._l((_vm.array.sysRoleList),function(item){return _c('el-option',{key:item.roleID,attrs:{"label":item.roleName,"value":item.roleID}})}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"输入法:","prop":"inputMethod"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.popupForm.inputMethod),callback:function ($$v) {_vm.popupForm.inputMethod=$$v},expression:"popupForm.inputMethod"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"个人介绍:","prop":"resume"}},[_c('el-input',{attrs:{"type":"textarea","rows":2,"placeholder":"请输入内容"},model:{value:(_vm.popupForm.resume),callback:function ($$v) {_vm.popupForm.resume=$$v},expression:"popupForm.resume"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"手写签名:","prop":"roleDesc"}},[_c('el-upload',{attrs:{"action":"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":_vm.handlePictureCardPreview,"on-remove":_vm.handleRemove}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{attrs:{"size":"tiny"},model:{value:(_vm.obj.upload.dialogVisible),callback:function ($$v) {_vm.obj.upload.dialogVisible=$$v},expression:"obj.upload.dialogVisible"}},[_c('img',{attrs:{"width":"100%","src":_vm.obj.upload.dialogImageUrl,"alt":""}})])],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer","align":"center"},slot:"footer"},[_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.other.isAdd),expression:"other.isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.addInfoSave()}}},[_vm._v("保 存")]),_vm._v(" "),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.other.isAdd),expression:"!other.isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.editInfoSave()}}},[_vm._v("保 存")]),_vm._v(" "),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.other.isAdd),expression:"other.isAdd"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.addInfoSave('1')}}},[_vm._v("保存并新建")]),_vm._v(" "),_c('el-button',{on:{"click":_vm.closePopup}},[_vm._v("取 消")])],1)],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "jSeu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_user_vue__ = __webpack_require__("Y+CW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aa3cdfa4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_user_vue__ = __webpack_require__("fWRe");
function injectStyle (ssrContext) {
  __webpack_require__("+T6y")
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_user_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aa3cdfa4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_user_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "uO7/":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".user{width:100%;padding-bottom:20px}.user,.user .main{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.user .main{border:1px solid green}.user .main,.user .main .el-table{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.user .main .el-table .el-table__empty-block,.user .main .el-table .el-table__header{width:100%!important}.user .main .el-table .el-button{margin-left:0}.user .main .el-table .this_enable{color:green;cursor:pointer}.user .popup .el-select{width:100%}.user .popup .el-upload--picture-card,.user .popup .el-upload-list__item{width:70px;height:70px;line-height:75px}", "", {"version":3,"sources":["D:/WEBUIS_NEW/WEBUIS/src/components/system/systems/user.vue"],"names":[],"mappings":"AACA,MACE,WAAY,AAQZ,mBAAqB,CACtB,AACD,kBATE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,qBAAuB,CAehC,AAZD,YAWE,sBAAwB,CACzB,AACD,kCAZE,mBAAoB,AAChB,oBAAqB,AACjB,WAAa,CActB,AAID,qFACE,oBAAsB,CACvB,AACD,iCACE,aAAe,CAChB,AACD,mCACE,YAAa,AACb,cAAgB,CACjB,AACD,wBACE,UAAY,CACb,AACD,yEAEE,WAAY,AACZ,YAAa,AACb,gBAAkB,CACnB","file":"user.vue","sourcesContent":["\n.user {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-bottom: 20px;\n}\n.user .main {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border: 1px solid green;\n}\n.user .main .el-table {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.user .main .el-table .el-table__header {\n  width: 100%!important;\n}\n.user .main .el-table .el-table__empty-block {\n  width: 100%!important;\n}\n.user .main .el-table .el-button {\n  margin-left: 0;\n}\n.user .main .el-table .this_enable {\n  color: green;\n  cursor: pointer;\n}\n.user .popup .el-select {\n  width: 100%;\n}\n.user .popup .el-upload--picture-card,\n.user .popup .el-upload-list__item {\n  width: 70px;\n  height: 70px;\n  line-height: 75px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=5.777bd3e8ca4a5771a962.js.map