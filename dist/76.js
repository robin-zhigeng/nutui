/*! NutUI v1.2.8 Mon Jun 25 2018 17:18:29 GMT+0800 (CST) */
webpackJsonpnutui([76],{1032:function(o,t,n){(o.exports=n(1)()).push([o.i,"",""])},1169:function(o,t){o.exports={render:function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",[n("nut-demoheader",{attrs:{name:o.$route.name}}),o._v(" "),n("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:o.popupDemo1}},[o._v("footer含两个操作按钮")]),o._v(" "),n("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:o.popupDemo2}},[o._v("footer仅有一个按钮")]),o._v(" "),n("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:o.popupDemo3}},[o._v("header含有两个操作按钮")]),o._v(" "),n("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:o.popupDemo4}},[o._v("仅含有关闭按钮")]),o._v(" "),n("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:o.popupDemo5}},[o._v("默认示例")]),o._v(" "),n("nut-popup",{attrs:{popupVisible:o.visible1,configItems:o.popup[0]},on:{"update:popupVisible":function(t){o.visible1=t},"cancel-btn-click":o.cancelBtnFn,"ok-btn-click":o.okBtnFn,"close-popup":o.closeMask}}),o._v(" "),n("nut-popup",{attrs:{popupVisible:o.visible2,configItems:o.popup[1]},on:{"update:popupVisible":function(t){o.visible2=t},"onlyone-btn-click":o.onlyOneBtnFn}}),o._v(" "),n("nut-popup",{attrs:{popupVisible:o.visible3,configItems:o.popup[2]},on:{"update:popupVisible":function(t){o.visible3=t},"cancel-click":o.cancelFn,"ok-click":o.okFn}}),o._v(" "),n("nut-popup",{attrs:{popupVisible:o.visible4,configItems:o.popup[3]},on:{"update:popupVisible":function(t){o.visible4=t}}}),o._v(" "),n("nut-popup",{attrs:{popupVisible:o.visible5,configItems:{}},on:{"update:popupVisible":function(t){o.visible5=t}}})],1)},staticRenderFns:[]}},1237:function(o,t,n){var i=n(1032);"string"==typeof i&&(i=[[o.i,i,""]]),i.locals&&(o.exports=i.locals);n(3)("9b5ac32e",i,!0,{})},835:function(o,t,n){var i=n(2)(n(932),n(1169),function(o){n(1237)},null,null);o.exports=i.exports},932:function(o,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{visible1:!1,visible2:!1,visible3:!1,visible4:!1,visible5:!1,popup:[{randomId:"0",hasCloseBtn:!0,btnAmount:2,popupHeight:{height:"100px"},cancelAutoClose:!1},{hasCloseBtn:!0,btnAmount:1},{hasCloseBtn:!1,popupFooterVisible:!1},{hasCloseBtn:!0,popupFooterVisible:!1}]}},methods:{popupDemo1:function(){this.visible1=!0},popupDemo2:function(){this.visible2=!0},popupDemo3:function(){this.visible3=!0},popupDemo4:function(){this.visible4=!0},popupDemo5:function(){this.visible5=!0},cancelBtnFn:function(o){console.log(o.target)},okBtnFn:function(o){console.log(o.target)},onlyOneBtnFn:function(o){console.log("onlyOneBtnFn")},cancelFn:function(o){console.log("cancelFn")},okFn:function(o){console.log("okFn")},closeMask:function(o){console.log("closePopup"),this.visible1=!1}}}}});