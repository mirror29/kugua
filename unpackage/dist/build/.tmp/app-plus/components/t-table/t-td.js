(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/t-table/t-td"],{"3a32":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"4f15":function(t,e,n){"use strict";n.r(e);var r=n("3a32"),a=n("fccd");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("d637");var o=n("2877"),c=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=c.exports},aa1b:function(t,e,n){},d637:function(t,e,n){"use strict";var r=n("aa1b"),a=n.n(r);a.a},ead0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{align:String},data:function(){return{thBorder:"1",borderColor:"#d0dee5",fontSize:"14",color:"#555c60",tdAlign:"center"}},inject:["table","tr"],created:function(){this.thBorder=this.table.border,this.borderColor=this.table.borderColor,this.fontSize=this.tr.fontSize,this.color=this.tr.color,this.align?this.tdAlign=this.align:this.tdAlign=this.tr.align},computed:{tdAlignCpd:function(){var t="";switch(this.tdAlign){case"left":t="flex-start";break;case"center":t="center";break;case"right":t="flex-end";break;default:t="center";break}return t}}};e.default=r},fccd:function(t,e,n){"use strict";n.r(e);var r=n("ead0"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/t-table/t-td-create-component',
    {
        'components/t-table/t-td-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("4f15"))
        })
    },
    [['components/t-table/t-td-create-component']]
]);                
