(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),u=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,u=e.hasQuery;return n||o&&(void 0!==u&&u)}t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(u.AmpStateContext))}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),u=r(n("Xuae")),a=n("lwAK"),i=n("FYa8"),c=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var s=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var u=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?u=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?u=!1:t.add(o.type);break;case"meta":for(var i=0,c=s.length;i<c;i++){var l=s[i];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?u=!1:n.add(l);else{var f=o.props[l],p=r[l]||new Set;p.has(f)?u=!1:(p.add(f),r[l]=p)}}}return u}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var d=u.default();function y(e){var t=e.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}y.rewind=d.rewind,t.default=y},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.HeadManagerContext=o.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),u=n("Bnag");e.exports=function(e){return r(e)||o(e)||u()}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),u=n("8Kt/"),a=n.n(u),i=o.a.createElement,c=function(){return i(o.a.Fragment,null,i("div",{className:"min-h-screen w-1/6 bg-gray-200"},i("div",{className:"flex flex-col h-full text-center text-2xl text-gray-900 font-semibold items-center justify-center"},i("div",{className:"px-10 py-20"},i("div",null," Home "),i("div",null," Players "),i("div",null," Trophies "),i("div",null," About ")))))};function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=o.a.createElement,s=function(e){return f(o.a.Fragment,null,f("div",l({},e,{className:"min-h-screen w-5/6 bg-gray-900"})))},p=o.a.createElement;var d=function(){return p("div",{className:"p-4 h-300 w-100"},p("img",{className:"object-scale-down object-cover w-full",src:"/images/mufc_team_2020.jpg",alt:"MUFC Men's team 2020"}))},y=o.a.createElement;t.default=function(){return y("div",{className:"mx-auto"},y(a.a,null,y("title",null,"Manchester United")),y("div",{className:"flex flex-row"},y(c,null),y(s,null,y("div",{className:"text-center text-5xl font-bold text-gray-200"},y("div",{className:"m-4 px-5 py-5"},"Manchester United")),y(d,null))))}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),u=n("W8MJ"),a=n("a1gu"),i=n("Nsbk"),c=n("7W2i"),l=n("RIqP");function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){c(y,l);var s,d=(s=y,function(){var e,t=i(s);if(f()){var n=i(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return a(this,e)});function y(e){var u;return r(this,y),u=d.call(this,e),p&&(t.add(o(u)),n(o(u))),u}return u(y,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),u(y,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),y}(s.Component)}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);