(this.webpackJsonpalgovis=this.webpackJsonpalgovis||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),s=a.n(r),c=a(9),i=a.n(c),l=a(2),o=a(3),d=a(5),j=a(4),u=a(7),b=(a(8),"#ffbd69"),h="#ee4540",O="#fcdab7",m=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={array:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.init_array()}},{key:"init_array",value:function(){for(var e=[],t=0;t<20;t++)e.push(Math.floor(700*Math.random()+1));this.setState({array:e})}},{key:"bubbleSort",value:function(e){for(var t=[],a=document.getElementsByClassName("arrayComponent"),n=0;n<e.length;n++)for(var r=0;r<e.length-n-1;r++){if(t.push([r,r+1]),e[r]>e[r+1]){var s=e[r];e[r]=e[r+1],e[r+1]=s}t.push([e[r],e[r+1]])}console.log(t.length);for(var c=function(e){var n=Object(u.a)(t[e],2),r=n[0],s=n[1],c=Object(u.a)(t[e+1],2),i=c[0],l=c[1];setTimeout((function(){a[r].style.backgroundColor=O,a[s].style.backgroundColor=O}),250*e),setTimeout((function(){if(a[r].style.height===i+"px")return console.log("no swap"),a[r].style.backgroundColor=h,a[s].style.background=b,void(e===t.length-2&&(a[r].style.backgroundColor=b));a[r].style.backgroundColor=h,e===t.length-2&&(a[r].style.backgroundColor=b),a[r].style.height=i+"px",a[s].style.background=b,a[s].style.height=l+"px"}),250*(e+1))},i=0;i<t.length-1;i+=2)c(i)}},{key:"reset_array",value:function(){for(var e=document.getElementsByClassName("arrayComponent"),t=0;t<e.length;t++)e[t].style.background=h;this.init_array()}},{key:"render",value:function(){var e=this,t=this.state.array,a=t.map((function(e,a){return Object(n.jsx)("div",{className:"arrayComponent",style:{height:e+"px",width:100/t.length+"%"}},a)}));return Object(n.jsxs)("div",{className:"appContainer",children:[Object(n.jsx)("div",{className:"arrayContainer",children:a}),Object(n.jsxs)("div",{className:"displayMenu",children:[Object(n.jsxs)("div",{className:"displayMenuLog",children:[Object(n.jsx)("div",{className:"logtag",children:"Log"}),Object(n.jsx)("p",{children:"TO DO: Add log functionality"})]}),Object(n.jsx)("div",{className:"displayMenuItem",onClick:function(){return e.bubbleSort(e.state.array)},children:"START"}),Object(n.jsx)("div",{className:"displayMenuItem",onClick:function(){return e.reset_array()},children:"RESET"})]})]})}}]),a}(s.a.Component),v=(a(15),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){for(var e=[],t=0;t<625;t++)e.push(Object(n.jsx)("div",{className:"nodeBox",style:{background:"#ee4540"},children:"1"}));return Object(n.jsxs)("div",{className:"appContainer",children:[Object(n.jsx)("div",{className:"mainDisplay",children:e}),Object(n.jsx)("div",{className:"displayMenu",children:"test"})]})}}]),a}(s.a.Component)),p=(a(16),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={app:"None"},n}return Object(o.a)(a,[{key:"displayed_app",value:function(){switch(this.state.app){case"None":return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:" Please Select an Algorithm from the left sidebar"})});case"BubbleSort":return Object(n.jsx)(m,{});case"BFS":return Object(n.jsx)(v,{});default:return Object(n.jsx)(n.Fragment,{})}}},{key:"render",value:function(){var e=this;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"mainContainer",children:[Object(n.jsx)("div",{className:"topBar",children:Object(n.jsx)("h1",{children:"AlgoVis"})}),Object(n.jsxs)("div",{className:"leftBar",children:[Object(n.jsx)("div",{class:"leftbarItem",onClick:function(){return e.setState({app:"BubbleSort"})},children:Object(n.jsx)("h4",{children:"BUBBLE SORT"})}),Object(n.jsx)("div",{class:"leftbarItem",onClick:function(){return e.setState({app:"BFS"})},children:Object(n.jsx)("h4",{children:"BFS"})}),Object(n.jsx)("div",{class:"leftbarItem",children:Object(n.jsx)("h4",{children:"MERGE SORT"})}),Object(n.jsx)("div",{class:"leftbarItem",children:Object(n.jsx)("h4",{children:"QUICK SORT"})}),Object(n.jsx)("div",{class:"leftbarItem",children:Object(n.jsx)("h4",{children:"COUNT SORT"})})]}),Object(n.jsx)("div",{className:"midBar",children:this.displayed_app()}),Object(n.jsx)("div",{className:"rightBar"}),Object(n.jsx)("div",{className:"bottomBar"})]})})}}]),a}(s.a.Component));i.a.render(Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(p,{})}),document.getElementById("root"))},8:function(e,t,a){}},[[17,1,2]]]);
//# sourceMappingURL=main.9af8fc95.chunk.js.map