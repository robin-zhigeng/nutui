/*! NutUI v1.2.8 Mon Jun 25 2018 17:18:29 GMT+0800 (CST) */
webpackJsonpnutui([43],{1018:function(t,n,r){(t.exports=r(1)()).push([t.i,"/* .button-primary{\n    display: inline-block;\n    height: 38px;\n    padding: 0 10px;\n    color: #555;\n    text-align: center;\n    font-size: 14px;\n    line-height: 38px;\n    text-decoration: none;\n    white-space: nowrap;\n    background-color: transparent;\n    border-radius: 3px;\n    border: 1px solid #bbb;\n    cursor: pointer;\n    box-sizing: border-box;\n    &.curr{\n        background-color: #33C3F0;\n        border-color: #33C3F0; \n        color: #fff;\n    }\n}\n.staticTitle{\n    margin-top: 15px;\n}\n.drag-tip{\n    margin-bottom: 0;\n} */\n",""])},1136:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"吸边拖拽组件。",showQrCode:!0}}),t._v(" "),r("h5",[t._v("基本用法")]),t._v(" "),r("h6",[t._v("可控制移动方向，垂直移动(h)，水平移动(v)")]),t._v(" "),r("nut-codebox",{attrs:{code:t.demo1}}),t._v(" "),r("h6",[t._v("可设置距离边界的值来限制拖动范围")]),t._v(" "),r("nut-codebox",{attrs:{code:t.demo2}}),t._v(" "),r("h6",[t._v("可设置是否吸边")]),t._v(" "),r("nut-codebox",{attrs:{code:t.demo3}}),t._v(" "),r("h5",[t._v("Props")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"tbl-wrapper"},[r("table",{staticClass:"u-full-width"},[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("默认值")]),t._v(" "),r("th",[t._v("可选值")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("isSide")]),t._v(" "),r("td",[t._v("是否吸边")]),t._v(" "),r("td",[t._v("Boolean")]),t._v(" "),r("td",[t._v("true")]),t._v(" "),r("td",[t._v("true/false")])]),t._v(" "),r("tr",[r("td",[t._v("direction")]),t._v(" "),r("td",[t._v("移动方向")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v('"h"')]),t._v(" "),r("td",[t._v('"h"/"v"/"n"')])]),t._v(" "),r("tr",[r("td",[t._v("boundary")]),t._v(" "),r("td",[t._v("距边界距离")]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("{ \n                  top:20,\n                  left:0,\n                  right:20,\n                  bottom:20\n              }")]),t._v(" "),r("td",[t._v("--")])]),t._v(" "),r("tr",[r("td",[t._v("width")]),t._v(" "),r("td",[t._v("宽")]),t._v(" "),r("td",[t._v("Number,String")]),t._v(" "),r("td",[t._v("50")]),t._v(" "),r("td",[t._v("--")])]),t._v(" "),r("tr",[r("td",[t._v("height")]),t._v(" "),r("td",[t._v("高")]),t._v(" "),r("td",[t._v("Number,String")]),t._v(" "),r("td",[t._v("50")]),t._v(" "),r("td",[t._v("--")])]),t._v(" "),r("tr",[r("td",[t._v("opacity")]),t._v(" "),r("td",[t._v("透明度")]),t._v(" "),r("td",[t._v("Number,String")]),t._v(" "),r("td",[t._v("1")]),t._v(" "),r("td",[t._v("--")])]),t._v(" "),r("tr",[r("td",[t._v("unit")]),t._v(" "),r("td",[t._v("距离单位")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v('"px"')]),t._v(" "),r("td",[t._v('"px"/"rem"')])]),t._v(" "),r("tr",[r("td",[t._v("zIndex")]),t._v(" "),r("td",[t._v("样式层级")]),t._v(" "),r("td",[t._v("Number,String")]),t._v(" "),r("td",[t._v("11")]),t._v(" "),r("td",[t._v("--")])]),t._v(" "),r("tr",[r("td",[t._v("opacity")]),t._v(" "),r("td",[t._v("透明度")]),t._v(" "),r("td",[t._v("Number,String")]),t._v(" "),r("td",[t._v("1")]),t._v(" "),r("td",[t._v("--")])])])])])}]}},1223:function(t,n,r){var v=r(1018);"string"==typeof v&&(v=[[t.i,v,""]]),v.locals&&(t.exports=v.locals);r(3)("d10ed712",v,!0,{})},870:function(t,n,r){var v=r(2)(r(968),r(1136),function(t){r(1223)},"data-v-3dd570a7",null);t.exports=v.exports},968:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{direction:"h",boundary:{top:200,bottom:20,left:0,right:20},demo1:'<nut-drag \ndirection="h"\n></nut-drag>',demo2:'<nut-drag \n:boundary="{top: 20, bottom: 20}"\n></nut-drag>',demo3:'<nut-drag \n:isSide="true"\n></nut-drag>'}},methods:{changeMove:function(t,n){var r=n.currentTarget,v=r.parentElement.children;this.removeClass(v),r.classList.add("curr"),this.direction=t},changeBoundary:function(t,n){var r=n.currentTarget,v=r.parentElement.children;this.removeClass(v),r.classList.add("curr"),this.boundary="y"==t?{top:20,bottom:20,left:0,right:20}:{top:0,bottom:0,left:0,right:0}},removeClass:function(t){for(var n in t)!0===t.hasOwnProperty(n)&&(t[n].className="button-primary")}}}}});