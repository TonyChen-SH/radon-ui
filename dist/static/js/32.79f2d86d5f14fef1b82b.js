webpackJsonp([32],{2:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.rdMark=void 0;var a=n(3),d=r(a);t.rdMark=d.default},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),d=r(a);t.default={functional:!0,render:function(e,t){var n="",r=!0,a=!1,i=void 0;try{for(var s,u=(0,d.default)(t.children);!(r=(s=u.next()).done);r=!0){var o=s.value;n+=o.text}}catch(e){a=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw i}}return e("div",{class:["marked"],domProps:{innerHTML:window.marked(n)}})}}},243:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=n(5);t.default={data:function(){return{code:{one:'<rd-tag value="simple tag"></rd-tag>\n<rd-tag type="info" value="simple tag"></rd-tag>\n<rd-tag type="warning" value="simple tag"></rd-tag>\n<rd-tag type="success" value="simple tag"></rd-tag>\n<rd-tag type="danger" value="simple tag"></rd-tag>'}}},components:{rdTag:a.rdTag,rdMark:r.rdMark}}},599:function(e,t,n){var r,a;r=n(243);var d=n(667);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=d.render,a.staticRenderFns=d.staticRenderFns,e.exports=r},667:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{staticClass:"ex-content"},[t("div",{staticClass:"ex-card"},[t("rd-mark",["\n# Tag 标签\n\n用于一些突出展示事物的状态、属性\n\n### 示例\n    "])," ",t("p",[t("rd-tag",{attrs:{value:"simple tag"}})," ",t("rd-tag",{attrs:{type:"info",value:"simple tag"}})," ",t("rd-tag",{attrs:{type:"warning",value:"simple tag"}})," ",t("rd-tag",{attrs:{type:"success",value:"simple tag"}})," ",t("rd-tag",{attrs:{type:"danger",value:"simple tag",icon:"ion-close-circled"}})])," ",t("rd-mark",["\n### 代码\n```html\n"+e._s(e.code.one)+"\n```\n\n### API\n\n`props`：\n\n| 参数            | 类型         | 说明           |\n| :------------- |:-------------|:--------------|\n| value          | String       | 显示文字       |\n| type           | String       | 状态 （primary， info, warning, success, danger）|\n| icon           | String       | 图标         |\n    "])])])},staticRenderFns:[]}}});