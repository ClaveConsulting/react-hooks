(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"5WRv":function(e,t,n){var r=n("iNmH"),a=n("Qatm"),o=n("Zhxd"),u=n("kluZ");e.exports=function(e){return r(e)||a(e)||o(e)||u()}},"5dyF":function(e,t,n){e.exports=n("9CGT")},"9CGT":function(e,t,n){"use strict";var r=n("nxTg"),a=n("vdEC");t.__esModule=!0,t.default=void 0;var o,u=a(n("mXGw")),i=n("a4i1"),c=n("bBV7"),f=new Map,s=window.IntersectionObserver,l={};var d=function(e,t){var n=o||(s?o=new s((function(e){e.forEach((function(e){if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),f.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),f.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):function(){}};function p(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=u.default.useState(),a=r(n,2),o=a[0],f=a[1],h=(0,c.useRouter)(),v=h&&h.pathname||"/",m=u.default.useMemo((function(){var t=(0,i.resolveHref)(v,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,i.resolveHref)(v,e.as):o||a}}),[v,e.href,e.as]),y=m.href,g=m.as;u.default.useEffect((function(){if(t&&s&&o&&o.tagName&&(0,i.isLocalURL)(y)&&!l[y+"%"+g])return d(o,(function(){p(h,y,g)}))}),[t,o,y,g,h]);var w=e.children,b=e.replace,M=e.shallow,_=e.scroll;"string"===typeof w&&(w=u.default.createElement("a",null,w));var C=u.Children.only(w),k={ref:function(e){e&&f(e),C&&"object"===typeof C&&C.ref&&("function"===typeof C.ref?C.ref(e):"object"===typeof C.ref&&(C.ref.current=e))},onClick:function(e){C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,y,g,b,M,_)}};return t&&(k.onMouseEnter=function(e){(0,i.isLocalURL)(y)&&(C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),p(h,y,g,{priority:!0}))}),(e.passHref||"a"===C.type&&!("href"in C.props))&&(k.href=(0,i.addBasePath)((0,i.addLocale)(g,h&&h.locale,h&&h.defaultLocale))),u.default.cloneElement(C,k)};t.default=h},"9fEB":function(e,t,n){"use strict";n("OvAC");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("mXGw")),o=(r=n("GlZI"))&&r.__esModule?r:{default:r},u=n("9rrO"),i=n("bxxT"),c=n("vI6Y");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,c=d.length;i<c;i++){var f=d[i];if(a.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?o=!1:n.add(f);else{var s=a.props[f],l=r[f]||new Set;l.has(s)?o=!1:(l.add(s),r[f]=l)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(u.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},"9rrO":function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("mXGw"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},GlZI:function(e,t,n){"use strict";var r=n("5WRv"),a=n("SDJZ"),o=n("NToG"),u=(n("T1e2"),n("eef+")),i=n("K4DB"),c=n("+IV6");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("mXGw"),l=function(e){u(n,e);var t=f(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=l},OvAC:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},Qatm:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},apO0:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("mXGw"),a=n.n(r),o=n("5dyF"),u=n.n(o),i=n("bBV7"),c=a.a.createElement;function f(e){var t=e.links;return c("nav",null,c(u.a,{href:"/"},c("a",null,c("h2",null,"Hooks"))),t.map((function(e){var t=e.name,n=e.path;return c(s,{key:n,href:"/".concat(n)},c("a",null,t))})))}function s(e){var t=e.href,n=e.children,r=Object(i.useRouter)(),o=n.props.className||"";return r.asPath===t&&(o="".concat(o," selected")),c(u.a,{href:t},a.a.cloneElement(n,{className:o}))}var l=a.a.createElement;function d(e){var t=e.children,n=e.links;return l("div",{id:"layout"},l(f,{links:n}),l("main",null,t))}},iNmH:function(e,t,n){var r=n("+Sw5");e.exports=function(e){if(Array.isArray(e))return r(e)}},kluZ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},vI6Y:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("mXGw"))&&r.__esModule?r:{default:r},o=n("9rrO");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,u=void 0!==o&&o;return n||a&&u}}}]);