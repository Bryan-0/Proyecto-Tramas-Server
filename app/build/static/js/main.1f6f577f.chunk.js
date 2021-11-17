(this.webpackJsonptramas=this.webpackJsonptramas||[]).push([[0],{39:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(14),r=s.n(a),l=(s(39),s(34)),n=s(3),i=s(0),d=function(){return Object(i.jsxs)("nav",{className:"flex justify-between items-center border-b-2 border-blue-400 shadow-md bg-white",children:[Object(i.jsxs)("div",{className:"flex items-center gap-1 cursor-pointer",children:[Object(i.jsx)("img",{width:"60",src:"https://icons-for-free.com/iconfiles/png/512/connection+earth+internet+network+social+world+icon-1320183955809923202.png",alt:"Network"}),Object(i.jsx)("div",{className:"cursor-pointer font-sans italic text-lg",children:"Redes de Datos I - Proyecto Tramas"})]}),Object(i.jsx)("div",{className:"mr-3 text-small text-gray-600 italic",children:"Brayan Ayala & Urias Flores"})]})},o=s(7),j=s(6),b=function(e){var t=e.modalContent,s=e.isVisible,c=Object(j.c)((function(e){return e.trama})).showResults;return Object(i.jsx)("div",{className:c?"z-10 -mt-16 fixed w-full transition-all duration-500":"z-10 fixed w-full transition-all duration-500",style:s?{transform:"translateX(0)"}:{transform:"translateX(-100%)"},children:t})},x=s(17),m=s(33),u=s(4),h=s(5),O=s(15),g=Object(O.b)({name:"trama",initialState:{content:"",result:{},showResults:!1},reducers:{setTrama:function(e,t){e.content=t.payload},setResult:function(e,t){e.result=t.payload},setShowResults:function(e,t){e.showResults=t.payload},resetAll:function(e){e.content="",e.result={},e.showResults=!1}}}),f=g.actions,p=f.setTrama,v=f.setResult,N=f.setShowResults,y=f.resetAll,w=g.reducer,I=function(e){var t=Object(c.useState)(""),s=Object(o.a)(t,2),a=s[0],r=s[1],l=Object(j.b)(),n=Object(c.useCallback)((function(e){e.forEach((function(e){var t=new FileReader;t.onabort=function(){return console.log("file reading was aborted")},t.onerror=function(){return console.log("file reading has failed")},t.onload=function(){var e=t.result;r(e.trim()),l(p(e.trim()))},t.readAsText(e)}))}),[]),d=Object(m.a)({onDrop:n}),b=d.acceptedFiles,O=d.getRootProps,g=d.getInputProps,f=b.map((function(e){return Object(i.jsxs)("li",{children:[e.path," - ",e.size," bytes"]},e.path)}));return Object(i.jsxs)("section",{children:[Object(i.jsx)("div",{className:"mt-5 border border-dashed border-blue-600 bg-gray-50",children:Object(i.jsxs)("div",Object(x.a)(Object(x.a)({},O({className:"dropzone"})),{},{children:[Object(i.jsx)("input",Object(x.a)({},g())),Object(i.jsxs)("p",{className:"px-5 py-5 text-lg text-center",children:[Object(i.jsx)(u.a,{className:"text-gray-500 text-2xl",icon:h.d})," ",f.length>=1?f:"Arrastra y suelta tu trama aqu\xed"]})]}))}),Object(i.jsx)("div",{children:f.length<1?f:Object(i.jsxs)("div",{className:"mt-3",children:[Object(i.jsx)("p",{className:"text-gray-800 font-bold italic text-lg text-center",children:" Trama Ingresada: "}),Object(i.jsx)("div",{className:"border border-gray-100 px-2 py-1",children:a})]})})]})},P=function(){var e=Object(c.useRef)(null),t=Object(j.b)(),s=Object(j.c)((function(e){return e.trama.content}));Object(c.useEffect)((function(){e.current.focus(),s&&(e.current.value=s)}),[]);return Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("div",{className:"text-lg font-sans",children:"Pegar Trama"}),Object(i.jsx)("div",{className:"mt-2",children:Object(i.jsx)("textarea",{onKeyUp:function(){t(p(e.current.value.trim()))},placeholder:"Pega tu trama aqu\xed...",ref:e,className:"w-full h-32 shadow-sm focus:outline-none border border-blue-500 px-2 py-1"})})]})},T=s(32),k=s.n(T).a.create({baseURL:""}),S=function(e){var t=e.setIsModalVisible,s=Object(j.c)((function(e){return e.trama})).result.frame,a=s.Red,r=s.Adicional,l=Object(j.c)((function(e){return e.trama})).content,n=Object(c.useState)(!1),d=Object(o.a)(n,2),b=d[0],x=d[1],m=Object(j.b)();return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"text-center text-2xl italic",children:[Object(i.jsx)(u.a,{icon:h.g,className:"text-blue-500"})," Trama Procesada",Object(i.jsx)("hr",{className:"mt-1 md:mx-16"})]}),Object(i.jsxs)("div",{className:"mt-4 grid grid-cols-1 md:grid-cols-2 text-center text-xl",children:[Object(i.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[Object(i.jsxs)("div",{className:"text-lg cursor-pointer italic",children:[Object(i.jsx)(u.a,{icon:h.b,className:"text-blue-600 text-xl"})," Ethernet"]}),Object(i.jsxs)("div",{className:"flex flex-col px-2 py-1 gap-2",children:[Object(i.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(i.jsxs)("div",{className:"font-bold",children:[Object(i.jsx)(u.a,{className:"text-sm text-blue-500",icon:h.a})," MAC Destino:"]}),Object(i.jsx)("div",{children:s["Ethernet II"]["MAC Destino"]})]}),Object(i.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(i.jsxs)("div",{className:"font-bold",children:[Object(i.jsx)(u.a,{className:"text-sm text-blue-500",icon:h.a})," MAC Origen:"]}),Object(i.jsx)("div",{children:s["Ethernet II"]["MAC Origen"]})]}),Object(i.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(i.jsxs)("div",{className:"font-bold",children:[Object(i.jsx)(u.a,{className:"text-sm text-blue-500",icon:h.a})," EtherType:"]}),Object(i.jsx)("div",{children:s["Ethernet II"].EtherType})]})]})]}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[Object(i.jsxs)("div",{className:"text-lg cursor-pointer italic",children:[Object(i.jsx)(u.a,{icon:h.l,className:"text-blue-600 text-xl"})," Paquete de Red"]}),Object(i.jsxs)("div",{className:"flex flex-col px-2 py-1 gap-2",children:[Object(i.jsxs)("div",{className:"flex justify-between gap-4",children:[Object(i.jsxs)("div",{className:"font-bold",children:[Object(i.jsx)(u.a,{className:"text-sm text-blue-500",icon:h.a})," IP Origen:"]}),Object(i.jsx)("div",{children:a["IP Origen"]})]}),Object(i.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(i.jsxs)("div",{className:"font-bold",children:[Object(i.jsx)(u.a,{className:"text-sm text-blue-500",icon:h.a})," IP Destino:"]}),Object(i.jsx)("div",{children:a["IP Destino"]})]}),Object(i.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(i.jsxs)("div",{className:"font-bold",children:[Object(i.jsx)(u.a,{className:"text-sm text-blue-500",icon:h.a})," TTL:"]}),Object(i.jsx)("div",{children:a.TLS})]}),Object(i.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(i.jsxs)("div",{className:"font-bold",children:[Object(i.jsx)(u.a,{className:"text-sm text-blue-500",icon:h.a})," Protocolo:"]}),Object(i.jsx)("div",{children:a.Protocolo})]}),Object(i.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(i.jsxs)("div",{className:"font-bold",children:[Object(i.jsx)(u.a,{className:"text-sm text-blue-500",icon:h.a})," Puerto Origen:"]}),Object(i.jsxs)("div",{className:"flex items-center gap-1 relative",children:[a["Puerto Origen"]," ",-1===String(r["Puerto Origen"]).search("aleatoriamente")?Object(i.jsx)("div",{className:"absolute -right-7 shadow-sm",children:Object(i.jsx)(u.a,{icon:h.i,className:"text-blue-600"})}):""]})]}),Object(i.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(i.jsxs)("div",{className:"font-bold",children:[Object(i.jsx)(u.a,{className:"text-sm text-blue-500",icon:h.a})," Puerto Destino:"]}),Object(i.jsxs)("div",{className:"flex items-center gap-1 relative",children:[a["Puerto Destino"]," ",-1===String(r["Puerto Destino"]).search("aleatoriamente")?Object(i.jsx)("div",{className:"absolute -right-7 shadow-sm",children:Object(i.jsx)(u.a,{icon:h.i,className:"text-blue-600"})}):""]})]})]})]})}),Object(i.jsxs)("div",{className:"col-span-2 mt-2 flex flex-col gap-2",children:[Object(i.jsxs)("div",{className:"italic",children:[Object(i.jsx)(u.a,{icon:h.f,className:"text-blue-600"})," Notas Adicionales"]}),Object(i.jsxs)("div",{className:"text-left md:mx-32 border border-gray-100 bg-gray-50 shadow-sm rounded-lg px-2 text-lg flex flex-col py-2",children:[Object(i.jsxs)("div",{children:["\u2022 ",r["Puerto Origen"]]}),Object(i.jsxs)("div",{children:["\u2022 ",r["Puerto Destino"]]})]})]})]}),Object(i.jsxs)("div",{className:"flex items-center justify-between gap-2 mt-4",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{onClick:function(){return x(!0)},className:"bg-gray-300 hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer",children:"Ver Trama Original"}),Object(i.jsxs)("div",{className:b?"opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white text-lg shadow-xl ring-2":"hidden",children:[Object(i.jsxs)("div",{className:"px-2 font-bold italic flex justify-between items-center",children:[Object(i.jsx)("div",{children:"Trama Ingresada (Hexadecimal)"}),Object(i.jsx)("div",{onClick:function(){return x(!1)},className:"mt-1 cursor-pointer",children:Object(i.jsx)(u.a,{icon:h.k,className:"text-red-500 text-xl"})})]}),Object(i.jsx)("div",{className:"px-4 py-2",children:l})]})]}),Object(i.jsxs)("div",{className:"flex items-center gap-2",children:[Object(i.jsx)("div",{onClick:function(){t(!1),setTimeout((function(){m(y())}),300)},className:"bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow-md cursor-pointer",children:"Salir"}),Object(i.jsx)("div",{onClick:function(){m(y())},className:"bg-blue-600 text-white hover:bg-blue-500 px-4 py-2 rounded-lg shadow-md cursor-pointer",children:"Nueva trama"})]})]})]})},C=function(e){var t=e.selectedMode,s=e.setSelectedMode,a=e.setIsModalVisible,r=Object(c.useState)(""),l=Object(o.a)(r,2),n=l[0],d=l[1],b=Object(c.useState)(!1),x=Object(o.a)(b,2),m=x[0],O=x[1],g=Object(j.c)((function(e){return e.trama.content})),f=Object(j.c)((function(e){return e.trama.showResults})),p=Object(j.b)();return Object(i.jsx)("div",{className:"shadow-xl mx:2 md:mx-56 my-24 p-6 bg-white rounded-lg",children:f?Object(i.jsx)(S,{setIsModalVisible:a}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"text-center text-2xl",children:"Ingrese la trama"}),Object(i.jsx)("div",{className:"flex flex-row-reverse gap-4",children:Object(i.jsxs)("div",{className:"flex border border-gray-500 rounded-lg shadow-md",children:[Object(i.jsxs)("div",{onClick:function(){return s("pegar")},className:"pegar"===t?"bg-gray-200 px-4 py-1 cursor-pointer border-r border-gray-500 rounded-tl-lg rounded-bl-lg":"hover:bg-gray-100 px-4 py-1 cursor-pointer border-r border-gray-500 rounded-tl-lg rounded-bl-lg",children:[Object(i.jsx)(u.a,{icon:h.h,className:"text-blue-600 text-lg"})," Pegar"]}),Object(i.jsxs)("div",{onClick:function(){return s("subir")},className:"subir"===t?"bg-gray-200 px-4 py-1 cursor-pointer rounded-tr-lg rounded-br-lg":"hover:bg-gray-100 px-4 py-1 cursor-pointer rounded-tr-lg rounded-br-lg",children:[Object(i.jsx)(u.a,{icon:h.e,className:"text-blue-600 text-lg"})," Subir"]})]})}),"pegar"===t?Object(i.jsx)(P,{}):Object(i.jsx)(I,{}),Object(i.jsxs)("div",{className:0!==n.length?"text-center text-red-700 font-bold mt-2":"hidden",children:[Object(i.jsx)(u.a,{icon:h.c})," ",n]}),Object(i.jsx)("div",{className:"flex flex-row-reverse mt-4",children:Object(i.jsxs)("div",{className:"mr-4",children:[Object(i.jsx)("button",{onClick:function(){a(!1),p(y())},className:"mr-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow-md",children:"Cancelar"}),Object(i.jsx)("button",{onClick:function(){g?(d(""),O(!0),k.post("/api/frame",{content:g}).then((function(e){var t=e.data;t.success?(p(v(t.data)),p(N(!0)),O(!1)):O(!1)})).catch((function(e){d("Error al procesar la trama (Asegurese de ponerla en el formato correcto)"),O(!1)}))):d("Ingrese una trama antes de continuar")},className:m?"bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md bg-opacity-80":"bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md",disabled:!!m,children:m?Object(i.jsx)(u.a,{icon:h.j,className:"text-white mx-4 text-lg",spin:!0}):"Procesar"})]})})]})})},E=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)("subir"),l=Object(o.a)(r,2),n=l[0],d=l[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(b,{isVisible:s,modalContent:Object(i.jsx)(C,{selectedMode:n,setSelectedMode:d,setIsModalVisible:a})}),Object(i.jsx)("div",{className:s?"p-8 opacity-40":"p-8",children:Object(i.jsxs)("div",{className:"flex flex-col items-center justify-center shadow-xl mt-4 py-4 px-4 gap-8 bg-white",children:[Object(i.jsx)("div",{className:"text-xl flex justify-center items-center",children:Object(i.jsx)("h1",{className:"font-mono border-b-2 border-blue-500 shadow-sm px-4 py-2 rounded-lg",children:"Proyecto Tramas - Examen Segunda Unidad"})}),Object(i.jsx)("div",{className:"text-lg",children:'Bienvenidos al "Proyecto Tramas", el cual consiste en una aplicaci\xf3n web que permite desglosar una trama a partir de una cadena de hexadecimales.'}),Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{className:"shadow-sm",width:"800",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ethernet_Type_II_Frame_format.svg/1400px-Ethernet_Type_II_Frame_format.svg.png",alt:"Ethernet Frame"}),Object(i.jsx)("div",{className:"text-sm text-center text-gray-600 font-bold hover:underline",children:Object(i.jsx)("a",{href:"https://www.wikiwand.com/en/Ethernet_frame",rel:"noreferrer",target:"_blank",children:"Estructura de una trama Ethernet II"})})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:function(){return a(!0)},className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-lg cursor-pointer shadow-md",children:"Subir Trama"})})]})})]})},R=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(d,{}),Object(i.jsx)(E,{})]})},A=function(){return Object(i.jsx)(l.a,{children:Object(i.jsxs)(n.d,{children:[Object(i.jsx)(n.b,{path:"/",element:Object(i.jsx)(n.a,{to:"/tramas"})}),Object(i.jsx)(n.b,{path:"/tramas",element:Object(i.jsx)(R,{})})]})})},M=Object(O.a)({reducer:{trama:w}});r.a.render(Object(i.jsx)(j.a,{store:M,children:Object(i.jsx)(A,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.1f6f577f.chunk.js.map