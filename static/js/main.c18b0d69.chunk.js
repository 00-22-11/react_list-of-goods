(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var s=n(9),o=n.n(s),r=n(2),c=n(3),a=n(5),i=n(4),u=n(1),l=n.n(u),b=n(6),d=(n(8),n(0)),j=function(t){var e=t.item;return Object(d.jsx)("ul",{className:"list-group list",children:Object(d.jsx)("li",{className:"list-group-item list-item",children:e},e)})},h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={goods:[].concat(h)},t.reverseGoods=function(){t.setState((function(t){var e=t.goods;return{goods:Object(b.a)(e).reverse()}}))},t.sortGoods=function(){t.setState((function(t){var e=t.goods;return{goods:Object(b.a)(e).sort()}}))},t.resetGoods=function(){t.setState({goods:[].concat(h)})},t.sortByLength=function(){t.setState((function(t){var e=t.goods;return{goods:Object(b.a)(e).sort((function(t,e){return t.length-e.length}))}}))},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"App",children:[this.state.goods.map((function(t){return Object(d.jsx)(j,{item:t})})),Object(d.jsxs)("div",{className:"btns",children:[Object(d.jsx)("button",{type:"button",className:"btn btn-outline-success",onClick:this.reverseGoods,children:"Reverse"}),Object(d.jsx)("button",{type:"button",className:"btn btn-outline-danger",onClick:this.sortGoods,children:"Sort"}),Object(d.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:this.resetGoods,children:"Reset"}),Object(d.jsx)("button",{type:"button",className:"btn btn-outline-info",onClick:this.sortByLength,children:"Sort by length"})]})]})})}}]),n}(l.a.Component),p=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={isReady:!0},t.start=function(){t.setState({isReady:!1})},t}return Object(c.a)(n,[{key:"render",value:function(){return this.state.isReady?Object(d.jsx)("button",{type:"button",className:"button btn btn btn-outline-primary",onClick:this.start,children:"Start"}):Object(d.jsx)(g,{})}}]),n}(u.Component);o.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))},8:function(t,e,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.c18b0d69.chunk.js.map