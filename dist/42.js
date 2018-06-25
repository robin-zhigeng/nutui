/*! NutUI v1.2.8 Mon Jun 25 2018 17:18:29 GMT+0800 (CST) */
webpackJsonpnutui([42],{1077:function(t,v,_){(t.exports=_(1)()).push([t.i,"",""])},1173:function(t,v){t.exports={render:function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",[_("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"电梯楼层组件。",showQrCode:!0}}),t._v(" "),_("h5",[t._v("示例")]),t._v(" "),_("h6",[t._v("默认用法")]),t._v(" "),_("nut-codebox",{attrs:{code:t.demo1,imgUrl:"../asset/img/demo/elevator.png"}}),t._v(" "),_("h6",[t._v("数据类型")]),t._v(" "),_("nut-codebox",{attrs:{code:t.demo2}}),t._v(" "),_("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),_("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"tbl-wrapper"},[_("table",{staticClass:"u-full-width"},[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("可选值")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("dataArray")]),t._v(" "),_("td",[t._v("渲染楼层数据，为必填项")]),t._v(" "),_("td",[t._v("Array")]),t._v(" "),_("td",[t._v("[]")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("showIndicator")]),t._v(" "),_("td",[t._v("是否显示索引值提示符")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("--")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("hiddenTime")]),t._v(" "),_("td",[t._v("索引值提示符显示的时间，单位ms")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("500")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("navHeight")]),t._v(" "),_("td",[t._v("索引栏每个索引区域的高度，单位rem")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("0.8")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("initIndex")]),t._v(" "),_("td",[t._v("进入页面后，当前定位到的索引值")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("--")])])])])])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"tbl-wrapper"},[_("table",{staticClass:"u-full-width"},[_("thead",[_("tr",[_("th",[t._v("事件名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("回调参数")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("clickNav")]),t._v(" "),_("td",[t._v("点击/离开索引栏时的回调函数")]),t._v(" "),_("td",[t._v("返回点击的索引值和title")])]),t._v(" "),_("tr",[_("td",[t._v("clickList")]),t._v(" "),_("td",[t._v("点击左侧列表时的回调函数")]),t._v(" "),_("td",[t._v("返回点击的对象数据和所在区域的对象数据")])])])])])}]}},1282:function(t,v,_){var e=_(1077);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);_(3)("3d1a4b69",e,!0,{})},871:function(t,v,_){var e=_(2)(_(969),_(1173),function(t){_(1282)},null,null);t.exports=e.exports},969:function(t,v,_){"use strict";Object.defineProperty(v,"__esModule",{value:!0});var e,n=_(20);(e=n)&&e.__esModule;v.default={data:function(){return{demo1:'<nut-elevator \n        :dataArray="dataList"  \n        :showIndicator="true"\n        :navHeight="0.8"\n        :initIndex="0" \n        :hiddenTime=\'500\'\n        @clickNav="clickNav"\n        @clickList="clickList"\n></nut-elevator>',demo2:"dataList:[\n    {\n      title:\"A\",\n      list:[//可以为空数组\n        {\n          name:'安其拉',\n          id:'a1'//id字段可以没有\n        },\n        {\n          name:'安琪',\n          id:'a2'\n        }\n      ]\n    }    \n]"}},methods:{}}}});