(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],{31:function(e,t,n){e.exports=n(43)},36:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"ADD",(function(){return V})),n.d(a,"SUB",(function(){return Z})),n.d(a,"CHENG",(function(){return ee})),n.d(a,"add",(function(){return te})),n.d(a,"sub",(function(){return ne})),n.d(a,"cheng",(function(){return ae}));var r=n(0),c=n.n(r),o=n(19),u=n.n(o),l=(n(36),n(15)),i=n(13);var m=function(){return c.a.createElement("div",null,"jsx")};var s=function(){return c.a.createElement("div",null,"\u5143\u7d20\u6e32\u67d3")};function p(e){return c.a.createElement("h1",null,"hello,",e.name)}var f=function(){return c.a.createElement("div",null,c.a.createElement(p,{name:"Components"}),c.a.createElement(p,{name:"Props"}))},h=n(4),d=n(5),v=n(7),E=n(6),b=n(8),O=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(v.a)(this,Object(E.a)(t).call(this,e))).state={date:1},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"tick",value:function(){this.setState((function(e,t){return console.log(e,t),{date:e.date+1}}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("h1",null,"Hello, world!"),c.a.createElement("h2",null,"It is ",this.state.date),c.a.createElement("button",{onClick:function(){return e.tick()}},"\u70b9\u51fb+1"))}}]),t}(c.a.Component),j=n(2);var g=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1];return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){a(!n)}},"\u70b9\u51fb\u663e\u793a/\u9690\u85cf"),n&&c.a.createElement("a",{href:"https://baidu.com",onClick:function(e){e.preventDefault(),alert("123")}},"\u70b9\u51fb-\u963b\u6b62\u9ed8\u8ba4\u4e8b\u4ef6"))},y=[1,2,3,4,5];var k=function(){return c.a.createElement("ol",null,y.map((function(e,t){return c.a.createElement("li",{key:t},"\u6570\u7ec4\u5143\u7d20",e,"\uff0c\u4e0b\u6807",t)})))};var C=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1];return c.a.createElement("form",{onSubmit:function(e){alert("\u63d0\u4ea4\u7684\u540d\u5b57: "+n),e.preventDefault()}},c.a.createElement("label",null,"\u540d\u5b57:",c.a.createElement("input",{type:"text",name:"name",value:n,onChange:function(e){console.log(e.target.value),a(e.target.value)}})),c.a.createElement("input",{type:"submit",value:"\u63d0\u4ea4"}))};function x(e){return c.a.createElement("div",{style:{color:e.color}},c.a.createElement("div",null,"\u5de6\uff1a",e.left),c.a.createElement("div",null,"\u53f3\uff1a",e.right))}function w(){return c.a.createElement("h1",null,"\u4fa7\u8fb9\u680f")}function S(){return c.a.createElement("h2",null,"\u5185\u5bb9\u533a")}var D=function(){return c.a.createElement("div",null,c.a.createElement(x,{color:"red",left:c.a.createElement(w,null),right:c.a.createElement(S,null)}))},R=Object(r.createContext)();function _(e){var t=Object(r.useContext)(R);return console.log(t),c.a.createElement("div",null,c.a.createElement("p",null,t.p.a),c.a.createElement("button",{onClick:t.c},"555"))}function I(e){return c.a.createElement("button",{onClick:e.cc},"\u70b9\u51fb")}var M={a:1,b:2};var N=function(){var e=function e(){M.a+=1,o({p:M,c:e})},t=Object(r.useState)({p:M,c:e}),n=Object(j.a)(t,2),a=n[0],o=n[1];return c.a.createElement(R.Provider,{value:a},c.a.createElement(_,null),c.a.createElement(I,{cc:e}))};var A=function(){var e=c.a.createRef();return c.a.createElement("p",{ref:e,onClick:function(){console.log(e)}},"\u70b9\u51fb")};var F=function(){return c.a.createElement("div",null,c.a.createElement(c.a.Fragment,null,"\u5360\u4f4d\u7b26\uff0c\u4ec5\u6e32\u67d3\u5b50\u5143\u7d20"),c.a.createElement("div",null,"\u6b63\u5e38\u6e32\u67d3div\u6807\u7b7e"),c.a.createElement(c.a.Fragment,null,"\u7b80\u5199"))},P=n(14),T=function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.mouse;return c.a.createElement("img",{src:"http://c565784135.gitee.io/react-demo/static/media/logo.5d5d9eef.svg",alt:"0",style:{width:100,height:100,position:"absolute",left:e.x-50,top:e.y-50}})}}]),t}(c.a.Component),U=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(v.a)(this,Object(E.a)(t).call(this,e))).handleMouseMove=n.handleMouseMove.bind(Object(P.a)(n)),n.state={x:300,y:200},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"handleMouseMove",value:function(e){console.log(e.clientX,e.clientY),this.setState({x:e.clientX,y:e.clientY})}},{key:"render",value:function(){return c.a.createElement("div",{style:{height:"100%"},onMouseMove:this.handleMouseMove},this.props.render(this.state))}}]),t}(c.a.Component);var B=[{path:"/Jsx",component:m,_name:"Jsx"},{path:"/RenderEle",component:s,_name:"\u5143\u7d20\u6e32\u67d3"},{path:"/Props",component:f,_name:"\u7ec4\u4ef6\u4f20\u503c"},{path:"/StateLifecycle",component:O,_name:"State & \u751f\u547d\u5468\u671f"},{path:"/Events",component:g,_name:"\u4e8b\u4ef6\u5904\u7406-\u5224\u65ad"},{path:"/List",component:k,_name:"\u5217\u8868\u5faa\u73af"},{path:"/Form",component:C,_name:"\u8868\u5355"},{path:"/CompositionInheritance",component:D,_name:"\u7ec4\u5408-\u7ee7\u627f"},{path:"/Context",component:N,_name:"\u5d4c\u5957\u7ec4\u4ef6\u9759\u9ed8\u4f20\u503c"},{path:"/Ref",component:A,_name:"Ref\u8f6c\u53d1"},{path:"/Fragments",component:F,_name:"\u5360\u4f4d\u7b26\u6807\u7b7e"},{path:"/Render",component:function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"\u79fb\u52a8\u9f20\u6807!"),c.a.createElement(U,{render:function(e){return c.a.createElement(T,{mouse:e})}}))}}]),t}(c.a.Component),_name:"props-Render"},{path:"/Effect",component:function(){var e=Object(r.useState)(0),t=Object(j.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(0),u=Object(j.a)(o,2),l=u[0],i=u[1];return Object(r.useEffect)((function(){console.log(11111)}),[n,l]),c.a.createElement("div",null,c.a.createElement("p",null,n,"--",l),c.a.createElement("button",{onClick:function(){a(n+1),i(l+1)}},"\u70b9\u51fb+1"))},_name:"Effect"}];var H=function(e){var t=Object(i.h)(),n=Object(i.f)(),a=Object(i.g)(),r=new URLSearchParams(n.search);return console.log("location",n),console.log("params",a),console.log("query",r.get("name")),c.a.createElement(l.a,null,c.a.createElement("p",null,c.a.createElement(l.b,{to:t.url+"/a"},"\u9ed8\u8ba4\u70b9\u51fb\u8df3\u8f6c",t.url+"/a")),c.a.createElement("p",null,c.a.createElement(l.c,{to:t.url+"/b?b=2",activeClassName:"hurray"},"\u5bfc\u822a\u6807\u7b7e\u6fc0\u6d3b\u65f6\uff0c\u6dfb\u52a0\u7c7b\u540dhurray")),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:t.url+"/a"},"aaaa"),c.a.createElement(i.a,{path:t.url+"/b"},"bbbb"),c.a.createElement(i.a,{path:t.url+"/c"},"cccc")))},J=n(12),W=Object(J.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}}),Object(J.a)((function(e){e.dispatch,e.getState;return function(e){return function(t){console.log("action",t);var n=e(t);return console.log(n,"next state1",W.getState()),n}}}))),q=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(v.a)(this,Object(E.a)(t).call(this,e))).incrementAsync=n.incrementAsync.bind(Object(P.a)(n)),n.incrementIfOdd=n.incrementIfOdd.bind(Object(P.a)(n)),n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"incrementIfOdd",value:function(){this.props.value%2!==0&&(console.log("before"),this.props.onIncrement(),console.log("after"))}},{key:"incrementAsync",value:function(){setTimeout(this.props.onIncrement,1e3)}},{key:"render",value:function(){var e=this.props,t=e.value,n=e.onIncrement,a=e.onDecrement;return c.a.createElement("div",null,c.a.createElement("p",null,"Clicked: ",t," times"),c.a.createElement("p",null,c.a.createElement("button",{onClick:n},"\u70b9\u51fb+1")),c.a.createElement("p",null,c.a.createElement("button",{onClick:a},"\u70b9\u51fb-1")),c.a.createElement("p",null,c.a.createElement("button",{onClick:this.incrementIfOdd},"\u5355\u6570+1")),c.a.createElement("p",null,c.a.createElement("button",{onClick:this.incrementAsync},"1\u79d2\u540e+1")))}}]),t}(r.Component),G=function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(123),W.subscribe((function(){return e.forceUpdate()}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(q,{value:W.getState(),onIncrement:function(){return W.dispatch({type:"INCREMENT"})},onDecrement:function(){return W.dispatch({type:"DECREMENT"})}}))}}]),t}(r.Component),L=n(26),X=function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.onIncreaseClick;return c.a.createElement("div",null,c.a.createElement("span",null,t),c.a.createElement("button",{onClick:n},"\u70b9\u51fb+1"))}}]),t}(r.Component),Y={type:"increase"};var $=Object(J.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"increase":return e+1;default:return e}}));var z=Object(L.b)((function(e){return{value:e}}),(function(e){return{onIncreaseClick:function(){return e(Y)}}}))(X);var K=function(){return c.a.createElement(L.a,{store:$},c.a.createElement(z,null))},Q={num:0,str:"hello "},V="ADD",Z="SUB",ee="CHENG",te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q.num;return{type:V,num:e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q.num;return{type:Z,num:e}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q.str;return{type:ee,str:e}},re={num:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q.num,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.num;switch(n){case a.ADD:return e+r;case a.SUB:return e-r;default:return e}},str:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q.str,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.str;switch(n){case a.CHENG:return e+r;default:return e}}},ce=Object(J.c)(re);function oe(e){return c.a.createElement("button",{onClick:e.onAdd},"\u70b9\u51fb\u52a01")}function ue(e){return c.a.createElement("button",{onClick:e.onSub},"\u70b9\u51fb\u51cf2")}var le=function(){var e=Object(r.useReducer)(ce,Q),t=Object(j.a)(e,2),n=t[0],o=t[1];return c.a.createElement("div",null,c.a.createElement("p",null,n.num),c.a.createElement("p",null,c.a.createElement(oe,{onAdd:function(){return o(a.add(1))}})),c.a.createElement("p",null,c.a.createElement(ue,{onSub:function(){return o(a.sub(2))}})),c.a.createElement("p",null,"=================="),c.a.createElement("p",null,n.str),c.a.createElement("button",{onClick:function(){return o(a.cheng("redux"))}},"hello redux"),c.a.createElement("button",{onClick:function(){return o({type:"no"})}},"no,no,no"))},ie=n(16),me=n.n(ie),se=n(21),pe={stringify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=encodeURIComponent,n=Object.keys(e).map((function(n){return t(n)+"="+t(e[n])})).join("&");return n},checkStatus:function(e){if(e.ok)return e;var t=new Error("err");throw t.data=e,t},_request:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(se.a)(me.a.mark((function a(){var r,c;return me.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(e,n);case 3:return r=a.sent,a.next=6,t.checkStatus(r).json();case 6:return c=a.sent,a.abrupt("return",c);case 10:if(a.prev=10,a.t0=a.catch(0),"Error: err"===a.t0.toString()){a.next=14;break}throw a.t0;case 14:case"end":return a.stop()}}),a,null,[[0,10]])})))()},get:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(se.a)(me.a.mark((function a(){var r,c;return me.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=t.stringify(n),a.next=3,t._request(e+"?"+r);case 3:return c=a.sent,a.abrupt("return",c);case 5:case"end":return a.stop()}}),a)})))()},post:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(se.a)(me.a.mark((function a(){var r,c;return me.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=t.stringify(n),a.next=3,t._request(e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:r});case 3:return c=a.sent,a.abrupt("return",c);case 5:case"end":return a.stop()}}),a)})))()}};var fe=[{title:"react",routes:B},{title:"react-router",routes:[{to:"/Path?name=1",path:"/Path",component:H,_name:"Path"},{to:"/reduxDemo",path:"/reduxDemo",component:G,_name:"reduxDemo"},{to:"/ReactReduxDemo",path:"/ReactReduxDemo",component:K,_name:"ReactReduxDemo"},{to:"/Redux",path:"/Redux",component:le,_name:"Hook-Redux"},{to:"/Fetch",path:"/Fetch",component:function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(!1),u=Object(j.a)(o,2),l=u[0],i=u[1];return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){l||(i(!0),pe.get("http://api.jirengu.com/getWeather.php").then((function(e){a(JSON.stringify(e)),i(!1)})))}},l?"load...":"\u70b9\u51fb\u8bf7\u6c42"),c.a.createElement("p",{style:{width:600,wordWrap:"break-word"}},n))},_name:"http-Fetch"}]}],he=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(v.a)(this,Object(E.a)(t).call(this,e))).state={hasError:!1},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log("error-ui")}},{key:"render",value:function(){return this.state.hasError?c.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(c.a.Component);var de=function(){return c.a.createElement(l.a,null,c.a.createElement("div",null,c.a.createElement("div",{className:"fix left"},fe.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("h2",null,"react"),c.a.createElement("ol",null,e.routes.map((function(e,t){return c.a.createElement("li",{key:"r"+t},c.a.createElement(l.b,{to:e.path},e._name))}))))}))),c.a.createElement("div",{className:"fix"},c.a.createElement(i.c,null,fe.map((function(e){return e.routes.map((function(e,t){return c.a.createElement(i.a,{key:t,path:e.path,render:function(t){return c.a.createElement(he,null,c.a.createElement(e.component,t))}})}))}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);