_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{HcqM:function(e,t,a){e.exports={cols:"style_cols__uathq",demo:"style_demo__3eDm2"}},NKij:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/use-boolean-state",function(){return a("xZO7")}])},e4ca:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var l=a("ODXe"),n=a("mXGw");var o=a.n(n).a.createElement;function u(){var e=function(e=!1){const[t,a]=Object(n.useState)(e);return[t,Object(n.useMemo)(()=>{const e=e=>a(e);return e.toggle=()=>a(e=>!e),e.toFalse=()=>a(!1),e.toTrue=()=>a(!0),e},[])]}(),t=Object(l.a)(e,2),a=t[0],u=t[1];return o("div",null,o("button",{onClick:u.toggle},"Toggle"),a?o("div",{style:{border:"2px solid darkgreen",background:"#aaffaa"}},o("h2",null,"It is active"),o("button",{onClick:u.toFalse},"Deactivate")):o("div",{style:{border:"2px solid darkred",background:"#ffaaaa"}},o("h2",null,"It is inactive"),o("button",{onClick:u.toTrue},"Activate")))}},xZO7:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return b})),a.d(t,"default",(function(){return v}));var l=a("8Kt/"),n=a.n(l),o=a("mXGw"),u=a.n(o),s=a("vBjH"),r=a("apO0"),c=a("lm+X"),i=a("e4ca"),d=a("HcqM"),m=a.n(d),g=u.a.createElement,b=!0;function v(e){var t=e.demo,a=e.source;return g(r.a,null,g(n.a,null,g("title",null,"useBooleanState")),g("h1",null,"useBooleanState"),g("p",null,g("code",null,"useArrayBoolean")," is similar to ",g("code",null,"useState"),", but with added functionality for manipulating boolean values. It returns the same ",g("code",null,"[state, setState]")," pair as ",g("code",null,"useState"),", but there are three additional methods available on ",g("code",null,"setState"),":"),g("ul",null,g("li",null,g("code",null,"setState.toFalse()")," sets the value to false"),g("li",null,g("code",null,"setState.toTrue()")," sets the value to true"),g("li",null,g("code",null,"setState.toggle()")," changes the boolean value to the opposite")),g("a",{href:"https://github.com/ClaveConsulting/react-hooks/tree/master/hooks/use-boolean-state"},"Source code"),g("p",null),g(s.a,{language:"shell"},"npm install @clave/use-boolean-state"),g("p",null),g(c.b,null,g(c.a,{name:"Demo"},g("div",{className:m.a.cols},g("div",{className:m.a.demo},g(i.default,null)),g(c.b,null,g(c.a,{name:"TypeScript"},g(s.a,{language:"tsx"},t.ts)),g(c.a,{name:"JavaScript"},g(s.a,{language:"jsx"},t.js))))),g(c.a,{name:"Source (TS)"},g(s.a,{language:"tsx"},a.ts)),g(c.a,{name:"Source (JS)"},g(s.a,{language:"jsx"},a.js)))," ")}}},[["NKij",0,1,2,3,4]]]);