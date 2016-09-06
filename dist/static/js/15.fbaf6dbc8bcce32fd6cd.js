webpackJsonp([15,31],{2:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.Mark=void 0;var d=c(7),f=function(h){return h&&h.__esModule?h:{"default":h}}(d);b.Mark=f["default"]},3:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=function(d){var f=document.createElement("div");return f.innerHTML=d,f.innerText||f.textContent};b["default"]={data:function(){return{mark:""}},ready:function(){this.mark=window.marked(c(this.$el.getElementsByClassName("ex-mark-text")[0].innerHTML))}}},4:function(a,b,c){b=a.exports=c(9)(),b.push([a.id,".ex-mark-text{display:none}.marked p{max-width:40rem}.marked code{background:#f7f7f7;color:#ff5722}.marked pre code{display:block;background:#f7f7f7;padding:1rem;color:#999;font-size:.8rem;line-height:1.2;overflow-x:auto}.marked pre{line-height:1.5em;margin:1rem 0}.marked{font-size:.9rem;line-height:1.8;color:#666;max-width:40rem}.marked h1{font-size:1.6rem}.marked h2{font-size:1.2rem}.marked h2,.marked h3{position:relative}.marked h3:before{content:\"#\";color:#00bcd4;font-size:1.2em;font-weight:700;margin-right:.5rem}.marked blockquote{position:relative;font-size:90%;color:#404040;border-left:4px solid #67cdfb;padding-left:.8em;margin:1em 0;background:#f8f8f8;padding:1rem}.marked blockquote p{margin:0}.marked blockquote:before{position:absolute;top:14px;left:-12px;background-color:#67cdfb;color:#fff;content:\"!\";width:20px;height:20px;border-radius:100%;text-align:center;line-height:20px;font-weight:700;font-family:Dosis,Source Sans Pro,Helvetica Neue,Arial,sans-serif;font-size:14px}.marked ul,ol{padding:0 2rem;list-style:inherit}.marked table{width:100%;max-width:100%;text-align:left;border-radius:6px}.marked thead{background:#e0f5ff}.marked th{color:rgba(0,0,0,.870588);height:3rem;border-bottom:1px solid #e9e9e9}.marked tr>td:first-child,.marked tr>th:first-child{padding-left:.5rem}.marked tr>td:last-child,.marked tr>th:last-child{padding-right:.5rem}.marked tr>td{height:2rem;line-height:1rem;border-bottom:1px solid #ececec}@media screen and (max-width:768px){.ex-card{margin:0}}","",{version:3,sources:["/./docs/views/mark.vue"],names:[],mappings:"AACA,cACI,YAAc,CACjB,AACD,UACI,eAAiB,CACpB,AACD,aACI,mBAAoB,AACpB,aAAe,CAClB,AACD,iBACI,cAAe,AACf,mBAAoB,AACpB,aAAc,AACd,WAAY,AACZ,gBAAiB,AACjB,gBAAiB,AACjB,eAAiB,CACpB,AACD,YACI,kBAAmB,AACnB,aAAe,CAClB,AACD,QACI,gBAAiB,AACjB,gBAAiB,AACjB,WAAY,AACZ,eAAiB,CACpB,AACD,WACI,gBAAkB,CACrB,AACD,WACI,gBAAkB,CAErB,AACD,sBAFI,iBAAmB,CAItB,AACD,kBACI,YAAa,AACb,cAAe,AACf,gBAAiB,AACjB,gBAAkB,AAClB,kBAAoB,CACvB,AACD,mBACI,kBAAmB,AACnB,cAAe,AACf,cAAe,AACf,8BAA+B,AAC/B,kBAAmB,AACnB,aAAc,AACd,mBAAoB,AACpB,YAAc,CACjB,AACD,qBACI,QAAU,CACb,AACD,0BACI,kBAAmB,AACnB,SAAU,AACV,WAAY,AACZ,yBAA0B,AAC1B,WAAY,AACZ,YAAa,AACb,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,gBAAkB,AAClB,kEAA6E,AAC7E,cAAgB,CACnB,AACD,cACI,eAAgB,AAChB,kBAAoB,CACvB,AACD,cACI,WAAY,AACZ,eAAgB,AAChB,gBAAiB,AACjB,iBAAmB,CACtB,AACD,cACI,kBAAoB,CACvB,AACD,WACI,0BAA2B,AAC3B,YAAa,AACb,+BAAiC,CACpC,AACD,oDACI,kBAAmB,CACtB,AACD,kDACI,mBAAoB,CACvB,AACD,cACI,YAAa,AACb,iBAAkB,AAClB,+BAAiC,CACpC,AACD,oCACI,SACI,QAAU,CACb,CACJ",file:"mark.vue",sourcesContent:["\n.ex-mark-text {\n    display: none;\n}\n.marked p{\n    max-width: 40rem;\n}\n.marked code {\n    background: #f7f7f7;\n    color: #FF5722;\n}\n.marked pre code {\n    display: block;\n    background: #f7f7f7;\n    padding: 1rem;\n    color: #999;\n    font-size: .8rem;\n    line-height: 1.2;\n    overflow-x: auto;\n}\n.marked pre {\n    line-height: 1.5em;\n    margin: 1rem 0;\n}\n.marked {\n    font-size: .9rem;\n    line-height: 1.8;\n    color: #666;\n    max-width: 40rem;\n}\n.marked h1 {\n    font-size: 1.6rem;\n}\n.marked h2 {\n    font-size: 1.2rem;\n    position: relative;\n}\n.marked h3 {\n    position: relative;\n}\n.marked h3::before {\n    content: \"#\";\n    color: #00BCD4;\n    font-size: 1.2em;\n    font-weight: bold;\n    margin-right: .5rem;\n}\n.marked blockquote {\n    position: relative;\n    font-size: 90%;\n    color: #404040;\n    border-left: 4px solid #67cdfb;\n    padding-left: .8em;\n    margin: 1em 0;\n    background: #f8f8f8;\n    padding: 1rem;\n}\n.marked blockquote p {\n    margin: 0;\n}\n.marked blockquote::before {\n    position: absolute;\n    top: 14px;\n    left: -12px;\n    background-color: #67cdfb;\n    color: #fff;\n    content: \"!\";\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    text-align: center;\n    line-height: 20px;\n    font-weight: bold;\n    font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;\n    font-size: 14px;\n}\n.marked ul, ol {\n    padding: 0 2rem;\n    list-style: inherit;\n}\n.marked table {\n    width: 100%;\n    max-width: 100%;\n    text-align: left;\n    border-radius: 6px;\n}\n.marked thead {\n    background: #e0f5ff;\n}\n.marked th {\n    color: rgba(0,0,0,.870588);\n    height: 3rem;\n    border-bottom: 1px solid #e9e9e9;\n}\n.marked tr > td:first-child, .marked tr > th:first-child {\n    padding-left: .5rem\n}\n.marked tr > td:last-child, .marked tr > th:last-child {\n    padding-right: .5rem\n}\n.marked tr > td {\n    height: 2rem;\n    line-height: 1rem;\n    border-bottom: 1px solid #ececec;\n}\n@media screen and (max-width: 768px) {\n    .ex-card {\n        margin: 0;\n    }\n}\n"],sourceRoot:"webpack://"}])},5:function(a,b,c){var d=c(4);"string"==typeof d&&(d=[[a.id,d,""]]),c(10)(d,{}),d.locals&&(a.exports=d.locals)},6:function(a,b){a.exports="<div class=marked> <div> {{{mark}}} </div> <slot></slot> </div>"},7:function(a,b,c){var d,f;c(5),d=c(3),f=c(6),a.exports=d||{},a.exports.__esModule&&(a.exports=a.exports["default"]),f&&(("function"==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports).template=f)},333:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(2),f=c(8);b["default"]={data:function(){return{form:{selectProvince:{key:"selectProvince",value:{},options:[]},selectCity:{multiple:!0,key:"selectCity",value:[],options:[{selected:!0,disabled:!1,value:"成都",id:1},{selected:!0,disabled:!1,value:"北京",id:2},{selected:!1,disabled:!1,value:"深圳",id:3},{selected:!1,disabled:!0,value:"上海",id:4}]},selectArriveCity:{key:"selectCity",value:{},options:[]}}}},components:{rdSelect:f.rdSelect,Mark:d.Mark},ready:function(){var g=this;this.form.selectProvince.options=[{selected:!0,disabled:!1,value:"四川",id:1},{selected:!1,disabled:!1,value:"北京",id:2},{selected:!1,disabled:!1,value:"广东",text:"广东",id:3}],setTimeout(function(){g.form.selectArriveCity.options=[{selected:!1,disabled:!1,value:"成都",id:1},{selected:!0,disabled:!1,value:"北京",id:2},{selected:!1,disabled:!1,value:"深圳",id:3},{selected:!1,disabled:!0,value:"上海",id:4}]},0)},methods:{changeAction:function(g,h){console.log(this.form.selectProvince.value.value),console.log(g.value.value===this.form.selectProvince.value.value)}}}},576:function(a,b){a.exports="<div class=ex-content> <div class=ex-card> <mark> <textarea class=ex-mark-text>\n# Select 选择器\n > 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器\n\n## 示例\n        </textarea> </mark> <p class=demo-content> <rd-select :select=form.selectProvince @change=changeAction></rd-select> </p> <p class=demo-content> <rd-select :select=form.selectCity @change=changeAction></rd-select> </p> <p> <rd-select :select=form.selectArriveCity @change=changeAction></rd-select> </p> <mark> <textarea class=ex-mark-text>\n## API\n\n### select\n```html\n<rd-select :select=form.selectProvince></rd-select>\n```\n```javascript\n\nselectProvince: {\n    // 获取select选择的对象, 多选时为Array, 单选时为Object\n    value   :Object || :Array,\n\n    // 提供待选对象集合\n    options :Array\n\n    options: [{\n        // 是否为多选 :Boolean, 默认为false\n        multiple: false,\n        // 选中状态 :Boolean\n        selected: false,\n        // 可用状态 :Boolean\n        disabled: false,\n        // 展示值 :String\n        value: '四川',\n\n        // 其他自定义属性\n        id: 1 \n    }]\n}\n```\n## 代码\n```javascript\nexport default {\n    template: '<rd-select :select=form.selectProvince @change=changeAction></rd-select>',\n    data () {\n        return {\n            form: {\n                selectProvince: {\n                    multiple: false,\n                    key: 'selectProvince',\n                    value: {},\n                    options: [{\n                        selected: true,\n                        disabled: false,\n                        value: '成都',\n                        id: 1\n                    }, {\n                        selected: false,\n                        disabled: false,\n                        value: '北京',\n                        id: 2\n                    }, {\n                        selected: false,\n                        disabled: false,\n                        value: '深圳',\n                        id: 3\n                    }]\n                }\n            }\n        }\n    },\n    components: {\n        rdSelect\n    },\n    methods: {\n        changeAction (select, value) {\n            console.log(this.form.selectProvince.value.value)\n            console.log(select.value.value === this.form.selectProvince.value.value) // true\n        }\n    }\n}\n```\n        </textarea> </mark> </div> </div>"},610:function(a,b,c){var d,f;d=c(333),f=c(576),a.exports=d||{},a.exports.__esModule&&(a.exports=a.exports["default"]),f&&(("function"==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports).template=f)}});