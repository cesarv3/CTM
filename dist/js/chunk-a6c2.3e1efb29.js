(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a6c2"],{"3c8e":function(e,t,r){"use strict";var a=r("77ad"),i=r.n(a);i.a},4127:function(e,t,r){"use strict";var a=r("d233"),i=r("b313"),o=Object.prototype.hasOwnProperty,n={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,s=Array.prototype.push,l=function(e,t){s.apply(e,c(t)?t:[t])},d=Date.prototype.toISOString,u={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:a.encode,encodeValuesOnly:!1,formatter:i.formatters[i["default"]],indices:!1,serializeDate:function(e){return d.call(e)},skipNulls:!1,strictNullHandling:!1},p=function e(t,r,i,o,n,s,d,p,f,m,v,b,h){var g=t;if("function"===typeof d?g=d(r,g):g instanceof Date?g=m(g):"comma"===i&&c(g)&&(g=g.join(",")),null===g){if(o)return s&&!b?s(r,u.encoder,h):r;g=""}if("string"===typeof g||"number"===typeof g||"boolean"===typeof g||a.isBuffer(g)){if(s){var y=b?r:s(r,u.encoder,h);return[v(y)+"="+v(s(g,u.encoder,h))]}return[v(r)+"="+v(String(g))]}var A,x=[];if("undefined"===typeof g)return x;if(c(d))A=d;else{var C=Object.keys(g);A=p?C.sort(p):C}for(var w=0;w<A.length;++w){var O=A[w];n&&null===g[O]||(c(g)?l(x,e(g[O],"function"===typeof i?i(r,O):r,i,o,n,s,d,p,f,m,v,b,h)):l(x,e(g[O],r+(f?"."+O:"["+O+"]"),i,o,n,s,d,p,f,m,v,b,h)))}return x},f=function(e){if(!e)return u;if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||u.charset;if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=i["default"];if("undefined"!==typeof e.format){if(!o.call(i.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var a=i.formatters[r],n=u.filter;return("function"===typeof e.filter||c(e.filter))&&(n=e.filter),{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:u.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?u.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:u.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?u.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:u.encode,encoder:"function"===typeof e.encoder?e.encoder:u.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:u.encodeValuesOnly,filter:n,formatter:a,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:u.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:u.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:u.strictNullHandling}};e.exports=function(e,t){var r,a,i=e,o=f(t);"function"===typeof o.filter?(a=o.filter,i=a("",i)):c(o.filter)&&(a=o.filter,r=a);var s,d=[];if("object"!==typeof i||null===i)return"";s=t&&t.arrayFormat in n?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var u=n[s];r||(r=Object.keys(i)),o.sort&&r.sort(o.sort);for(var m=0;m<r.length;++m){var v=r[m];o.skipNulls&&null===i[v]||l(d,p(i[v],v,u,o.strictNullHandling,o.skipNulls,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.formatter,o.encodeValuesOnly,o.charset))}var b=d.join(o.delimiter),h=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&("iso-8859-1"===o.charset?h+="utf8=%26%2310003%3B&":h+="utf8=%E2%9C%93&"),b.length>0?h+b:""}},4328:function(e,t,r){"use strict";var a=r("4127"),i=r("9e6a"),o=r("b313");e.exports={formats:o,parse:i,stringify:a}},"77ad":function(e,t,r){},"9a57":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[r("v-layout",{attrs:{"justify-center":"",wrap:""}},[r("v-flex",{attrs:{m12:""}},[r("material-card",{attrs:{color:"orange",title:"Panel de Actividades",text:"Actividades por obra"}},[r("div",[r("v-autocomplete",{staticClass:"selector",attrs:{items:e.obras,label:"Seleccione una obra",outlined:"","item-value":"id","item-text":"nombre"},on:{input:function(t){e.cargarActividades()}},model:{value:e.obra,callback:function(t){e.obra=t},expression:"obra"}})],1),r("v-text-field",{staticClass:"busqueda",attrs:{label:"Buscar","append-icon":"mdi-magnify","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),r("v-data-table",{attrs:{headers:e.headers,items:e.actividades,"items-per-page":5,search:e.search},scopedSlots:e._u([{key:"headerCell",fn:function(t){var a=t.header;return[r("span",{staticClass:"subheading font-weight-bold text-black text--darken-3",domProps:{textContent:e._s(a.text)}})]}},{key:"items",fn:function(t){var a=t.item;return[r("td",{staticClass:"tdLarge"},[e._v(e._s(a.descripcion))]),r("td",{staticClass:"tdLarge"},[a.progreso<100?r("div",[r("v-slider",{attrs:{"thumb-size":20,"thumb-label":"always",color:e.enProgreso.color},on:{change:function(t){e.modificarProgreso(a.descripcion,a.id,a.progreso)}},model:{value:a.progreso,callback:function(t){e.$set(a,"progreso",t)},expression:"item.progreso"}})],1):e._e(),100===a.progreso?r("div",[r("v-slider",{attrs:{"thumb-size":20,"thumb-label":"always",color:e.completada.color},on:{change:function(t){e.modificarProgreso(a.descripcion,a.id,a.progreso)}},model:{value:a.progreso,callback:function(t){e.$set(a,"progreso",t)},expression:"item.progreso"}})],1):e._e()]),r("td",[r("v-btn",{attrs:{color:"orange",fab:"","x-small":"",dark:"",small:""},on:{click:function(t){e.eliminarActividad(a.id)}}},[e._v("x\n              ")]),r("v-btn",{attrs:{color:"orange",fab:"","x-small":"",dark:"",small:"","data-toggle":"modal","data-target":"#modificarActividad"},on:{click:function(t){e.cargarActividadModificar(a.descripcion,a.progreso,a.id)}}},[e._v("Editar\n              ")])],1)]}}])}),r("v-layout",{attrs:{"justify-center":""}},[r("v-btn",{attrs:{id:"btAgregarActividad",color:"orange","x-small":"",small:"","data-toggle":"modal","data-target":"#crearActividad"}},[e._v("\n              Nueva Actividad\n            ")])],1)],1)],1)],1)],1),r("div",{staticClass:"modal fade",attrs:{id:"crearActividad",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[e._m(0),r("div",{staticClass:"modal-body"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"inputNombre"}},[e._v("Descripcion")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.descripcionActividad,expression:"descripcionActividad"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Descripcion"},domProps:{value:e.descripcionActividad},on:{input:function(t){t.target.composing||(e.descripcionActividad=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"inputNombre"}},[e._v("Progreso ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.progreso,expression:"progreso"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Progreso",required:""},domProps:{value:e.progreso},on:{input:function(t){t.target.composing||(e.progreso=t.target.value)}}})])]),r("div",{staticClass:"modal-footer"},[r("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Cerrar")]),r("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){e.crearActividad()}}},[e._v("Crear Actividad")])])])])]),r("div",{staticClass:"modal fade",attrs:{id:"modificarActividad",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[e._m(1),r("div",{staticClass:"modal-body"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"inputNombre"}},[e._v("Descripcion")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.descripcionActividad,expression:"descripcionActividad"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Descripcion"},domProps:{value:e.descripcionActividad},on:{input:function(t){t.target.composing||(e.descripcionActividad=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"inputNombre"}},[e._v("Progreso ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.progreso,expression:"progreso"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Progreso",required:""},domProps:{value:e.progreso},on:{input:function(t){t.target.composing||(e.progreso=t.target.value)}}})])]),r("div",{staticClass:"modal-footer"},[r("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Cerrar")]),r("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){e.modificarActividad()}}},[e._v("Aceptar")])])])])])],1)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e._v("Agregar Actividad")]),r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e._v("Modificar Actividad")]),r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])}],o=r("bc3a"),n=r.n(o),c=r("4328"),s=r.n(c),l={data:function(){return{headers:[{sortable:!1,text:"Descripción",value:"descripcion"},{sortable:!1,text:"Progreso",value:"progreso"}],search:"",enProgreso:{color:"orange"},completada:{color:"green"},obras:[],obra:"",actividades:[],descripcionActividad:"",progreso:""}},mounted:function(){this.mostrarObras()},methods:{mostrarObras:function(){var e=this;n.a.get("https://ctmbackend.herokuapp.com/:3000/api/obras").then(function(t){e.obras=t.data})},modificarProgreso:function(e,t,r){console.log("a"),n.a.put("https://ctmbackend.herokuapp.com/api/actividades/".concat(t,"}"),s.a.stringify({id:t,descripcion:e,progreso:r})).then(function(e){console.log("Hecho")}).catch(function(e){alert("Error: No fue posible actualizar la actividad!")})},cargarActividadModificar:function(e,t,r){this.idActividad=r,this.descripcionActividad=e,this.progreso=t},cargarActividades:function(){var e=this;n.a.get("https://ctmbackend.herokuapp.com/api/actividades/".concat(this.obra)).then(function(t){e.actividades=t.data}).catch(function(e){console.error(e)})},modificarActividad:function(){var e=this;n.a.put("https://ctmbackend.herokuapp.com/api/actividades/".concat(this.idActividad),s.a.stringify({id:this.idActividad,descripcion:this.descripcionActividad,progreso:this.progreso})).then(function(t){e.descripcionActividad="",e.progresoActividad="",e.cargarActividades(e.idObraActividad),alert("Actividad actualizada!")}).catch(function(e){alert("Error: No fue posible actualizar la actividad!")})},crearActividad:function(){var e=this;n.a.post("https://ctmbackend.herokuapp.com/api/actividades",s.a.stringify({idObra:this.obra,descripcion:this.descripcionActividad,progreso:this.progreso})).then(function(t){e.descripcionActividad="",e.progreso="",e.cargarActividades()}).catch(function(e){alert("Error: No fue posible crear la actividad")})},eliminarActividad:function(e){var t=this;n.a.delete("https://ctmbackend.herokuapp.com/api/actividades/".concat(e)).then(function(e){t.cargarActividades()}).catch(function(e){alert("Error: No fue posible eliminar la actividad")})}}},d=l,u=(r("3c8e"),r("2877")),p=Object(u["a"])(d,a,i,!1,null,null,null);t["default"]=p.exports},"9e6a":function(e,t,r){"use strict";var a=r("d233"),i=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:a.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},n=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},c="utf8=%26%2310003%3B",s="utf8=%E2%9C%93",l=function(e,t){var r,l={},d=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,u=t.parameterLimit===1/0?void 0:t.parameterLimit,p=d.split(t.delimiter,u),f=-1,m=t.charset;if(t.charsetSentinel)for(r=0;r<p.length;++r)0===p[r].indexOf("utf8=")&&(p[r]===s?m="utf-8":p[r]===c&&(m="iso-8859-1"),f=r,r=p.length);for(r=0;r<p.length;++r)if(r!==f){var v,b,h=p[r],g=h.indexOf("]="),y=-1===g?h.indexOf("="):g+1;-1===y?(v=t.decoder(h,o.decoder,m),b=t.strictNullHandling?null:""):(v=t.decoder(h.slice(0,y),o.decoder,m),b=t.decoder(h.slice(y+1),o.decoder,m)),b&&t.interpretNumericEntities&&"iso-8859-1"===m&&(b=n(b)),b&&t.comma&&b.indexOf(",")>-1&&(b=b.split(",")),i.call(l,v)?l[v]=a.combine(l[v],b):l[v]=b}return l},d=function(e,t,r){for(var a=t,i=e.length-1;i>=0;--i){var o,n=e[i];if("[]"===n&&r.parseArrays)o=[].concat(a);else{o=r.plainObjects?Object.create(null):{};var c="["===n.charAt(0)&&"]"===n.charAt(n.length-1)?n.slice(1,-1):n,s=parseInt(c,10);r.parseArrays||""!==c?!isNaN(s)&&n!==c&&String(s)===c&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(o=[],o[s]=a):o[c]=a:o={0:a}}a=o}return a},u=function(e,t,r){if(e){var a=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,n=/(\[[^[\]]*])/g,c=o.exec(a),s=c?a.slice(0,c.index):a,l=[];if(s){if(!r.plainObjects&&i.call(Object.prototype,s)&&!r.allowPrototypes)return;l.push(s)}var u=0;while(null!==(c=n.exec(a))&&u<r.depth){if(u+=1,!r.plainObjects&&i.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(c[1])}return c&&l.push("["+a.slice(c.index)+"]"),d(l,t,r)}},p=function(e){if(!e)return o;if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.");if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t="undefined"===typeof e.charset?o.charset:e.charset;return{allowDots:"undefined"===typeof e.allowDots?o.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:o.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:o.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:o.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:o.comma,decoder:"function"===typeof e.decoder?e.decoder:o.decoder,delimiter:"string"===typeof e.delimiter||a.isRegExp(e.delimiter)?e.delimiter:o.delimiter,depth:"number"===typeof e.depth?e.depth:o.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:o.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:o.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:o.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:o.strictNullHandling}};e.exports=function(e,t){var r=p(t);if(""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var i="string"===typeof e?l(e,r):e,o=r.plainObjects?Object.create(null):{},n=Object.keys(i),c=0;c<n.length;++c){var s=n[c],d=u(s,i[s],r);o=a.merge(o,d,r)}return a.compact(o)}},b313:function(e,t,r){"use strict";var a=String.prototype.replace,i=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return a.call(e,i,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},d233:function(e,t,r){"use strict";var a=Object.prototype.hasOwnProperty,i=Array.isArray,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),n=function(e){while(e.length>1){var t=e.pop(),r=t.obj[t.prop];if(i(r)){for(var a=[],o=0;o<r.length;++o)"undefined"!==typeof r[o]&&a.push(r[o]);t.obj[t.prop]=a}}},c=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},a=0;a<e.length;++a)"undefined"!==typeof e[a]&&(r[a]=e[a]);return r},s=function e(t,r,o){if(!r)return t;if("object"!==typeof r){if(i(t))t.push(r);else{if(!t||"object"!==typeof t)return[t,r];(o&&(o.plainObjects||o.allowPrototypes)||!a.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!==typeof t)return[t].concat(r);var n=t;return i(t)&&!i(r)&&(n=c(t,o)),i(t)&&i(r)?(r.forEach(function(r,i){if(a.call(t,i)){var n=t[i];n&&"object"===typeof n&&r&&"object"===typeof r?t[i]=e(n,r,o):t.push(r)}else t[i]=r}),t):Object.keys(r).reduce(function(t,i){var n=r[i];return a.call(t,i)?t[i]=e(t[i],n,o):t[i]=n,t},n)},l=function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},d=function(e,t,r){var a=e.replace(/\+/g," ");if("iso-8859-1"===r)return a.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(a)}catch(e){return a}},u=function(e,t,r){if(0===e.length)return e;var a="string"===typeof e?e:String(e);if("iso-8859-1"===r)return escape(a).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var i="",n=0;n<a.length;++n){var c=a.charCodeAt(n);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?i+=a.charAt(n):c<128?i+=o[c]:c<2048?i+=o[192|c>>6]+o[128|63&c]:c<55296||c>=57344?i+=o[224|c>>12]+o[128|c>>6&63]+o[128|63&c]:(n+=1,c=65536+((1023&c)<<10|1023&a.charCodeAt(n)),i+=o[240|c>>18]+o[128|c>>12&63]+o[128|c>>6&63]+o[128|63&c])}return i},p=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],a=0;a<t.length;++a)for(var i=t[a],o=i.obj[i.prop],c=Object.keys(o),s=0;s<c.length;++s){var l=c[s],d=o[l];"object"===typeof d&&null!==d&&-1===r.indexOf(d)&&(t.push({obj:o,prop:l}),r.push(d))}return n(t),e},f=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},m=function(e){return!(!e||"object"!==typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},v=function(e,t){return[].concat(e,t)};e.exports={arrayToObject:c,assign:l,combine:v,compact:p,decode:d,encode:u,isBuffer:m,isRegExp:f,merge:s}}}]);
//# sourceMappingURL=chunk-a6c2.3e1efb29.js.map