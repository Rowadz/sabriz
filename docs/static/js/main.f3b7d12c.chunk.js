(this.webpackJsonpsabriz=this.webpackJsonpsabriz||[]).push([[0],{265:function(e,t){},281:function(e,t,n){},597:function(e,t){},599:function(e,t){},709:function(e,t){},738:function(e,t){},743:function(e,t){},752:function(e,t){},759:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),c=n(128),o=n.n(c),s=(n(281),n(10)),i=n(783),l=n(15),d=n(247),u=n.n(d)()((function(e){return{codeEditorOpen:!1,db:null,metaData:{},dataFromHost:{},setMetaData:function(t){return e((function(e){return{metaData:Object(l.a)(Object(l.a)({},e.metaData),t)}}))},setDataFromHost:function(t){return e((function(e){return{dataFromHost:Object(l.a)(Object(l.a)({},e.dataFromHost),t)}}))},setCodeEditorOpen:function(t){return e({codeEditorOpen:t})},setDB:function(t){return e({db:t})}}})),b=function(e){return e.setCodeEditorOpen},j=function(e){return e.setDB},h=function(e){return e.db},O=function(e){return e.dataFromHost},x=function(e){return e.setDataFromHost},m=function(e){return e.setMetaData},f=function(e){return e.metaData},g=n(57),p=n(269),v=n(780),w=n(777),N=n(270),y=n(7),k=["node"],C=["node"],S=["node"],z=["node"],E=["node"],T=["node"],q=["node"],D=["node","inline","className","children","ref"],F=function(e){var t=e.markdown;return Object(y.jsx)(p.a,{className:"dark:text-white max-h-screen w-full",children:t,remarkPlugins:[N.a],components:{h1:function(e){e.node;var t=Object(g.a)(e,k);return Object(y.jsx)("h1",Object(l.a)(Object(l.a)({className:"text-4xl"},t),{},{"aria-hidden":!0}))},h2:function(e){e.node;var t=Object(g.a)(e,C);return Object(y.jsx)("h2",Object(l.a)(Object(l.a)({className:"text-3xl"},t),{},{"aria-hidden":!0}))},h3:function(e){e.node;var t=Object(g.a)(e,S);return Object(y.jsx)("h3",Object(l.a)(Object(l.a)({className:"text-2xl"},t),{},{"aria-hidden":!0}))},h4:function(e){e.node;var t=Object(g.a)(e,z);return Object(y.jsx)("h4",Object(l.a)(Object(l.a)({className:"text-xl"},t),{},{"aria-hidden":!0}))},h5:function(e){e.node;var t=Object(g.a)(e,E);return Object(y.jsx)("h5",Object(l.a)(Object(l.a)({className:"text-lg"},t),{},{"aria-hidden":!0}))},h6:function(e){e.node;var t=Object(g.a)(e,T);return Object(y.jsx)("h6",Object(l.a)(Object(l.a)({className:"text-base"},t),{},{"aria-hidden":!0}))},a:function(e){e.node;var t=Object(g.a)(e,q);return Object(y.jsx)("a",Object(l.a)({className:"underline text-blue-400",rel:"noreferrer"},t))},code:function(e){e.node;var t=e.inline,n=e.className,r=e.children,a=(e.ref,Object(g.a)(e,D)),c=/language-(\w+)/.exec(n||"");return!t&&c?Object(y.jsx)(v.a,Object(l.a)({children:String(r).replace(/\n$/,""),style:w.a,language:c[1],PreTag:"div"},a)):Object(y.jsx)("code",Object(l.a)(Object(l.a)({className:n},a),{},{children:r}))}}})},L=function(){var e,t=u(O),n=null===t||void 0===t||null===(e=t.question)||void 0===e?void 0:e.markdown;return Object(y.jsx)("div",{className:"channel-bar shadow-lg h-screen w-full overflow-auto",children:Object(y.jsx)("div",{className:"channel-container",children:Object(y.jsx)(F,{markdown:n})})})},P=Object(r.memo)(L),I=n(21),A=n(104),J=n(54),H=function(){var e=function(e,t){var n=Object(r.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(r){return console.log(r),t}})),a=Object(I.a)(n,2),c=a[0],o=a[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;o(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(r){console.log(r)}}]}("dark-theme"),t=Object(I.a)(e,2),n=t[0],a=t[1],c="undefined"===typeof enabledState&&n;return Object(r.useEffect)((function(){var e="dark",t=window.document.body.classList;c?t.add(e):t.remove(e)}),[n,c]),[n,a]},B=function(){var e=H(),t=Object(I.a)(e,2),n=t[0],r=t[1];return Object(y.jsx)("span",{onClick:function(){return r(!n)},children:n?Object(y.jsx)(A.d,{size:"24",className:"top-navigation-icon"}):Object(y.jsx)(A.c,{size:"24",className:"top-navigation-icon"})})},M=function(){return Object(y.jsx)(A.b,{size:"20",className:"title-hashtag"})},R=function(e){var t=e.host,n=e.peer;return Object(y.jsx)("h5",{className:"title-text text-green-500 font-extrabold",children:t?"HOST":n?"PEER":"\ud83e\uddd7\u200d\u2642\ufe0f"})},G=function(){var e=u(f),t=e.host,n=e.peer;return Object(y.jsxs)("div",{className:"top-navigation",children:[Object(y.jsx)(M,{}),Object(y.jsx)(R,{host:t,peer:n}),Object(y.jsx)(B,{}),Object(y.jsx)(J.c,{size:"24",className:"top-navigation-icon text-green-600"})]})},W=(n(567),n(568),n(569),n(570),n(571),n(85)),Q=n.n(W),_=function(){var e=Object(r.useState)(null),t=Object(I.a)(e,2),n=t[0],a=t[1];Object(i.a)((function(){var e=Q.a.fromTextArea(document.getElementById("code-editor"),{lineNumbers:!0,keyMap:"sublime",theme:"nord",mode:"python"});a(e)}));return Object(y.jsxs)("div",{className:"content-container h-screen w-full overflow-auto",children:[Object(y.jsx)(G,{}),Object(y.jsxs)("label",{className:"inline-flex items-center dark:text-white",children:[Object(y.jsx)("input",{onClick:function(){null===n||void 0===n||n.setOption("mode","python")},type:"radio",className:"form-radio text-green-500",name:"radio",value:"python",defaultChecked:!0}),Object(y.jsx)("span",{className:"ml-2",children:"Python"})]}),Object(y.jsxs)("label",{className:"inline-flex items-center dark:text-white",children:[Object(y.jsx)("input",{onClick:function(){null===n||void 0===n||n.setOption("mode","javascript")},type:"radio",className:"form-radio text-green-500",name:"radio",value:"javascript"}),Object(y.jsx)("span",{className:"ml-2",children:"JavaScript"})]}),Object(y.jsx)("textarea",{id:"code-editor"}),Object(y.jsx)("button",{onClick:function(){var e=null===n||void 0===n?void 0:n.getValue();e&&(document.getElementById("rowadz").innerHTML=e,brython())},className:"w-1/4 bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded",children:"Run Code"})]})},K=n(24),U=n.n(K),V=n(46),$=n(784),X=n(172),Y=n(40),Z=n(260),ee=n(170),te=n.n(ee),ne=n(781),re="sabriz",ae="SIGNAL_CODE",ce=n(64),oe=n(273),se=n(80),ie=se.b({title:se.c().required(),markdown:se.c().required(),testCases:se.a().of(se.b().shape({input:se.c().required(),output:se.c().required()})).required()}),le=(n(705),n(136)),de=function(e){var t=e.toogleCodeAdderOpen,a=Object(ce.e)({resolver:Object(oe.a)(ie)}),c=a.register,o=a.handleSubmit,s=a.control,i=a.formState.errors,d=Object(ce.d)({control:s,name:"testCases"}),b=d.fields,j=d.append,O=Object(r.useState)("# Title\n\n\ud83d\udc49 Changes are re-rendered as you type.\n\n\ud83d\udc48 Try writing some markdown on the left.\n\n## Overview\n\n* link to the creator github profile [here](https://github.com/MohammedAl-Rowad)\n\n## Syntax highlighting\n\n```js\nconst myFunc = (...args) => {\n  alert(3)\n  return {name: 'rowadz', age: 23}\n}\n```\n\n## Code to start with\n\n```py\nfrom collections import Counter, defaultdict\nfrom browser import alert\n\ndef soul(*args):\n  alert('u can alert here')\n  c = Counter(args)\n  d = defaultdict(lambda: ['name01', 'name02'])\n  print(c, d['names'])\n  \nsoul('d', 'c', 'a', 'a', 'a', 'w', 'c')\n```\n"),x=Object(I.a)(O,2),m=x[0],f=x[1],g=u(h),p=H(),v=Object(I.a)(p,1)[0],w=function(){var e=Object(V.a)(U.a.mark((function e(t){var r,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Promise.resolve().then(n.bind(null,136))]);case 2:r=e.sent,a=Object(I.a)(r,1),(0,a[0].toast)("Created!",{theme:v?"dark":"light"}),g.collections.sabriz.insert(Object(l.a)({id:Object(ne.a)()},t)).then((function(e){return g.collections.sabriz.findOne("50125ddf-e412-4277-a46b-f18ea6adb06f").exec()})).then(console.log).catch(console.error);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"w-screen bg-white dark:bg-gray-900 overflow-auto pl-32 pr-32",children:[Object(y.jsx)(le.ToastContainer,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(y.jsx)("div",{className:"flex justify-end mr-5 h-5 mb-2",children:Object(y.jsx)("div",{className:"sidebar-icon margin ml-0 mr-0",onClick:t,children:Object(y.jsx)(J.d,{size:"28"})})}),Object(y.jsx)("h2",{className:Object(Y.a)("text-3xl",{"text-white":!(null===i||void 0===i?void 0:i.title),"text-red-600":!!(null===i||void 0===i?void 0:i.title)}),children:"Enter Question Title"}),Object(y.jsx)("section",{className:Object(Y.a)("border-dashed border-2 border-light-blue-500 h-20 p-1",{"border-red-600":!!(null===i||void 0===i?void 0:i.title)}),children:Object(y.jsx)("input",Object(l.a)(Object(l.a)({},c("title")),{},{type:"text",className:"w-full h-full shadow appearance-none border rounded text-5xl dark:bg-gray-900 dark:text-white"}))}),Object(y.jsx)("h2",{className:Object(Y.a)("text-3xl",{"text-white":!(null===i||void 0===i?void 0:i.markdown),"text-red-600":!!(null===i||void 0===i?void 0:i.markdown)}),children:"Enter Question Text"}),Object(y.jsxs)("section",{className:"grid grid-cols-2 gap-1",children:[Object(y.jsx)("section",{className:"border-dashed border-2 border-light-blue-500  p-1",children:Object(y.jsx)("textarea",Object(l.a)(Object(l.a)({},c("markdown")),{},{value:m,onChange:function(e){var t=e.target.value;f(t)},className:"p-1 w-full h-full shadow appearance-none border rounded dark:bg-gray-900 dark:text-white border-green-500"}))}),Object(y.jsx)("section",{className:"border-dashed border-2 border-light-blue-500 p-1 overflow-auto",children:Object(y.jsx)(F,{markdown:m})})]}),b.map((function(e,t){var n,r,a,o;return Object(y.jsxs)("section",{className:"grid grid-cols-2 gap-1 mt-5 mb-5",children:[Object(y.jsx)("input",Object(l.a)(Object(l.a)({className:Object(Y.a)("w-full h-full shadow appearance-none border rounded text-5xl dark:bg-gray-900 dark:text-white",{"border-red-600":!!(null===i||void 0===i||null===(n=i.testCases)||void 0===n||null===(r=n[t])||void 0===r?void 0:r.input)})},c("testCases.".concat(t,".input"))),{},{placeholder:"Input"})),Object(y.jsx)("input",Object(l.a)(Object(l.a)({className:Object(Y.a)("w-full h-full shadow appearance-none border rounded text-5xl dark:bg-gray-900 dark:text-white",{"border-red-600":!!(null===i||void 0===i||null===(a=i.testCases)||void 0===a||null===(o=a[t])||void 0===o?void 0:o.output)})},c("testCases.".concat(t,".output"))),{},{placeholder:"Output"}))]},e.id)})),Object(y.jsx)("section",{className:"grid grid-cols-1 gap-1 mt-1 mb-1",children:Object(y.jsx)("button",{onClick:function(){j({input:"",output:""})},className:"w-1/4 bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded",children:"Add Input/Output"})}),Object(y.jsx)("section",{className:"grid grid-cols-1 gap-1 mt-1 mb-1",children:Object(y.jsx)("button",{onClick:o(w),className:"w-1/4 bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded",children:"Save"})})]})},ue=n(782),be=n(166),je=n(778),he=n(259),Oe=["title","id","testCases"],xe=function(e){var t=e.onCodeListToggle,a=u(h),c=Object(ue.a)(),o=Object(I.a)(c,2),s=o[0],d=o[1],b=d.set,j=d.filter,O=Object(r.useCallback)((function(){a.collections.sabriz.find().exec().then((function(e){return e.map((function(e){return e.toJSON()}))})).then((function(e){return b(e)}))}),[a.collections,b]),x=Object(je.a)((function(e){var t=e.target.value;t?j((function(e){return e.title.toLowerCase().includes(t.toLowerCase())})):O()}),200);Object(i.a)(O);var m=H(),f=Object(I.a)(m,1)[0],p=function(){var e=Object(V.a)(U.a.mark((function e(t){var r,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.bind(null,136));case 2:r=e.sent,c=r.toast,a.collections.sabriz.findOne(t).remove().then(O).then((function(){c.success("SOFT DELETED!",{theme:f?"dark":"light"})})).catch((function(){c.error("Something went wrong while deleting",{theme:f?"dark":"light"})}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"w-screen bg-white dark:bg-gray-900 overflow-auto pl-32 pr-32",children:[Object(y.jsx)(le.ToastContainer,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(y.jsx)("div",{className:"flex justify-end mr-5 h-5 mb-2",children:Object(y.jsx)("div",{className:"sidebar-icon margin ml-0 mr-0",onClick:t,children:Object(y.jsx)(J.d,{size:"28"})})}),Object(y.jsx)("h2",{className:"text-3xl text-white",children:"All the created questions"}),Object(y.jsx)("section",{className:"border-dashed h-20 p-1",children:Object(y.jsx)("input",{type:"text",placeholder:"filter",onChange:x,className:"w-full h-full shadow appearance-none border rounded text-5xl dark:bg-gray-900 dark:text-white"})}),Object(y.jsx)("section",{className:"grid grid-cols-3 gap-1",children:null===s||void 0===s?void 0:s.map((function(e){var t=e.title,n=e.id,r=e.testCases,a=Object(g.a)(e,Oe);return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"flex justify-end mr-5 h-5 mb-2",children:Object(y.jsx)("div",{className:"sidebar-icon margin ml-0 mr-0",onClick:function(){return p(n)},children:Object(y.jsx)(J.b,{size:"28",className:"text-red-400"})})}),Object(y.jsxs)("div",{className:"w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center",children:[Object(y.jsx)("div",{className:"mb-8",children:Object(y.jsx)("img",{className:"object-center object-cover rounded-full h-36 w-36",src:Object(be.createAvatar)(he,{seed:t,dataUri:!0}),alt:t})}),Object(y.jsxs)("div",{className:"text-center",children:[Object(y.jsx)("p",{className:"text-xl text-white font-bold mb-2",children:t}),Object(y.jsx)("div",{className:"flex justify-center items-center m-1 font-medium py-1 px-2  rounded-full text-white border border-green-300 ",children:Object(y.jsxs)("div",{className:"text-xs font-normal leading-none max-w-full flex-initial",children:["Test Cases Count ",r.length]})})]}),Object(y.jsx)("button",{onClick:function(){return function(e){var t=new CustomEvent(ae,{detail:{question:e}});document.dispatchEvent(t)}(Object(l.a)(Object(l.a)({},a),{},{id:n,title:t,testCases:r}))},className:"w-3/6 mt-4\tbg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded",children:"Send to the other peer to solve"})]})]},n)}))})]})},me=Object(r.memo)(xe),fe=function(e){var t=e.icon,n=e.text,r=void 0===n?"tooltip \ud83d\udca1":n,a=e.onClick;return Object(y.jsxs)("div",{className:"sidebar-icon group",onClick:a||null,children:[t,Object(y.jsx)("span",{className:"sidebar-tooltip group-hover:scale-100",children:r})]})},ge=function(){return Object(y.jsx)("hr",{className:"sidebar-hr"})},pe=function(){var e=Object($.a)(!1),t=Object(I.a)(e,2),n=t[0],a=t[1],c=Object($.a)(!1),o=Object(I.a)(c,2),s=o[0],i=o[1],l=Object($.a)(!1),d=Object(I.a)(l,2),j=d[0],h=d[1],O=Object(r.useState)(null),f=Object(I.a)(O,2),g=f[0],p=f[1],v=u(b),w=u(x),N=u(m),k=Object(r.useRef)(),C=H(),S=Object(I.a)(C,1)[0],z=function(){h(),v(!j),i(!1)},E=function(){h(!1),v(!s),i()};return Object(y.jsxs)("div",{className:Object(Y.a)("fixed top-0 left-0 h-screen flex flex-col bg-white dark:bg-gray-900 shadow-lg z-10",{"w-16":!n&&!j&&!s,"w-72":n&&!j&&!s,"w-screen":j||s}),children:[Object(y.jsx)("section",{className:Object(Y.a)({hidden:j||s}),children:n?Object(y.jsxs)("div",{className:"p-4",children:[Object(y.jsx)("div",{className:"flex justify-end",children:Object(y.jsx)("div",{className:"sidebar-icon margin ml-0 mr-0",onClick:a,children:Object(y.jsx)(J.d,{size:"28"})})}),Object(y.jsx)("textarea",{className:Object(Y.a)("appearance-none border-2 dark:bg-gray-900 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none",{"text-white":S,"text-black":!S}),placeholder:"Paste the offer here",rows:20,ref:k}),Object(y.jsx)("div",{className:"flex justify-end",children:Object(y.jsx)("div",{className:"sidebar-icon margin ml-0 mr-0",onClick:function(){var e;N({peer:!0});var t=null===(e=k.current)||void 0===e?void 0:e.value,n=g||new te.a({initiator:!1,trickle:!1});n.signal(JSON.parse(t)),g||(n.on("error",(function(e){return console.log("error",e)})),n.on("signal",(function(e){e.renegotiate||e.transceiverRequest||console.log("SIGNAL",JSON.stringify(e))})),n.on("connect",(function(){console.log("CONNECT")})),n.on("data",(function(e){try{var t=JSON.parse(e);w(t)}catch(n){}})))},children:Object(y.jsx)(Z.a,{})})})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(fe,{icon:Object(y.jsx)(A.a,{size:"28"}),onClick:Object(V.a)(U.a.mark((function e(){var t;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N({host:!0}),t=new te.a({initiator:!0,trickle:!1}),p(t),t.on("error",(function(e){return console.log("error",e)})),t.on("signal",(function(e){e.renegotiate||e.transceiverRequest||console.log("SIGNAL",JSON.stringify(e))})),t.on("connect",(function(){console.log("CONNECT")})),document.addEventListener(ae,(function(e){var n=e.detail;t.send(JSON.stringify({question:n.question,type:"SIGNAL_CODE"}))})),t.on("data",(function(e){console.log("data: "+e)}));case 8:case"end":return e.stop()}}),e)}))),text:"Click here to generate your id"}),Object(y.jsx)(ge,{}),Object(y.jsx)(fe,{text:"Click here to join a room",onClick:a,icon:Object(y.jsx)(X.b,{size:"32"})}),Object(y.jsx)(fe,{icon:Object(y.jsx)(X.a,{size:"20"}),onClick:z,text:"Click here to add questions"}),Object(y.jsx)(fe,{text:"Click here to see your created and saved questions",onClick:E,icon:Object(y.jsx)(J.a,{size:"20"})}),Object(y.jsx)(ge,{}),Object(y.jsx)(fe,{icon:Object(y.jsx)(J.e,{size:"22"}),text:"Disconnect"})]})}),s&&Object(y.jsx)(me,{onCodeListToggle:E}),j&&Object(y.jsx)(de,{toogleCodeAdderOpen:z})]})},ve=(n(706),n(707),n(708),n(271)),we=n(92),Ne=n(268),ye=n(779);Object(we.b)(ve.a);var ke={title:"questions schema",version:0,description:"all the questions will be here",primaryKey:"id",type:"object",properties:{id:{type:"string"},title:{type:"string"},markdown:{type:"string"},toPass:{type:"integer",default:100},testCases:{type:"array",items:{type:"object",properties:{input:{type:"string"},output:{type:"string"}}}}},required:["title","markdown","testCases"]},Ce=n(272),Se={display:"flex"},ze=function(){var e=u(j);return Object(i.a)((function(){Object(Ne.a)({name:re,storage:Object(ye.a)("idb")}).then((function(t){e(t),t.addCollections(Object(s.a)({},re,{schema:ke}))})).catch(console.error)})),Object(y.jsxs)("div",{className:"flex",children:[Object(y.jsx)(pe,{}),Object(y.jsxs)("div",{className:"w-full flex overflow-hidden",children:[Object(y.jsx)(Ce.a,{style:Se,defaultSize:{width:"50%",height:"100vh"},maxWidth:"90%",minWidth:"20%",children:Object(y.jsx)(P,{})}),Object(y.jsx)("div",{style:{minWidth:20},className:"w-full",children:Object(y.jsx)(_,{})})]})]})},Ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,785)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(ze,{})}),document.getElementById("root")),Ee()}},[[759,1,2]]]);
//# sourceMappingURL=main.f3b7d12c.chunk.js.map