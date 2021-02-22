var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function l(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function u(t,n,e,o,r,l,c){const u=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,l);if(u){const r=i(n,e,o,c);t.p(r,u)}}function s(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function f(t,n){t.appendChild(n)}function d(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function h(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function p(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function m(){return g(" ")}function v(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function b(t,n){t.value=null==n?"":n}let w;function _(t){w=t}const k=[],E=[],B=[],C=[],A=Promise.resolve();let j=!1;function M(t){B.push(t)}let T=!1;const N=new Set;function O(){if(!T){T=!0;do{for(let t=0;t<k.length;t+=1){const n=k[t];_(n),I(n.$$)}for(_(null),k.length=0;E.length;)E.pop()();for(let t=0;t<B.length;t+=1){const n=B[t];N.has(n)||(N.add(n),n())}B.length=0}while(k.length);for(;C.length;)C.pop()();j=!1,T=!1,N.clear()}}function I(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(M)}}const L=new Set;function P(t,n){t&&t.i&&(L.delete(t),t.i(n))}function S(t,n,e,o){if(t&&t.o){if(L.has(t))return;L.add(t),undefined.c.push((()=>{L.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function R(t){t&&t.c()}function q(t,n,o){const{fragment:c,on_mount:i,on_destroy:u,after_update:s}=t.$$;c&&c.m(n,o),M((()=>{const n=i.map(e).filter(l);u?u.push(...n):r(n),t.$$.on_mount=[]})),s.forEach(M)}function z(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function G(t,n){-1===t.$$.dirty[0]&&(k.push(t),j||(j=!0,A.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function H(n,e,l,c,i,u,s=[-1]){const f=w;_(n);const d=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:s,skip_bound:!1};let h=!1;if(d.ctx=l?l(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&G(n,t)),e})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(a)}else d.fragment&&d.fragment.c();e.intro&&P(n.$$.fragment),q(n,e.target,e.anchor),O()}_(f)}class W{$destroy(){z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function D(t){let n,e;return{c(){n=$("title"),e=g(t[0])},m(t,o){d(t,n,o),f(n,e)},p(t,n){1&n&&x(e,t[0])},d(t){t&&a(n)}}}function F(t){let n,e,o,r=t[0]&&D(t);const l=t[3].default,c=function(t,n,e,o){if(t){const r=i(t,n,e,o);return t[0](r)}}(l,t,t[2],null);return{c(){n=$("svg"),r&&r.c(),e=g(""),c&&c.c(),y(n,"xmlns","http://www.w3.org/2000/svg"),y(n,"viewBox",t[1]),y(n,"class","svelte-c8tyih")},m(t,l){d(t,n,l),r&&r.m(n,null),f(n,e),c&&c.m(n,null),o=!0},p(t,[i]){t[0]?r?r.p(t,i):(r=D(t),r.c(),r.m(n,e)):r&&(r.d(1),r=null),c&&c.p&&4&i&&u(c,l,t,t[2],i,null,null),(!o||2&i)&&y(n,"viewBox",t[1])},i(t){o||(P(c,t),o=!0)},o(t){S(c,t),o=!1},d(t){t&&a(n),r&&r.d(),c&&c.d(t)}}}function J(t,n,e){let{$$slots:o={},$$scope:r}=n,{title:l=null}=n,{viewBox:c}=n;return t.$$set=t=>{"title"in t&&e(0,l=t.title),"viewBox"in t&&e(1,c=t.viewBox),"$$scope"in t&&e(2,r=t.$$scope)},[l,c,r,o]}class K extends W{constructor(t){super(),H(this,t,J,F,c,{title:0,viewBox:1})}}function Q(t){let n;return{c(){n=$("path"),y(n,"d","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z")},m(t,e){d(t,n,e)},d(t){t&&a(n)}}}function U(t){let e,o;const r=[{viewBox:"0 0 16 16"},t[0]];let l={$$slots:{default:[Q]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)l=n(l,r[t]);return e=new K({props:l}),{c(){R(e.$$.fragment)},m(t,n){q(e,t,n),o=!0},p(t,[n]){const o=1&n?function(t,n){const e={},o={},r={$$scope:1};let l=t.length;for(;l--;){const c=t[l],i=n[l];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[l]=i}else for(const t in c)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}(r,[r[0],(l=t[0],"object"==typeof l&&null!==l?l:{})]):{};var l;2&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(P(e.$$.fragment,t),o=!0)},o(t){S(e.$$.fragment,t),o=!1},d(t){z(e,t)}}}function V(t,e,o){return t.$$set=t=>{o(0,e=n(n({},e),s(t)))},[e=s(e)]}class X extends W{constructor(t){super(),H(this,t,V,U,c,{})}}function Y(t,n,e){const o=t.slice();return o[15]=n[e],o[17]=e,o}function Z(t,n,e){const o=t.slice();return o[18]=n[e],o[19]=n,o[17]=e,o}function tt(t,n,e){const o=t.slice();return o[20]=n[e],o[21]=n,o[17]=e,o}function nt(t){let n,e,o,l,c,i,u;function s(){return t[9](t[17])}function f(){t[10].call(o,t[17])}function h(...n){return t[11](t[17],...n)}return{c(){n=p("button"),n.textContent="x",e=m(),o=p("input"),l=m(),c=p("br"),y(n,"class","rm svelte-ids0iu"),y(o,"id","player"+t[17])},m(r,a){d(r,n,a),d(r,e,a),d(r,o,a),b(o,t[1][t[17]]),d(r,l,a),d(r,c,a),i||(u=[v(n,"click",s),v(o,"input",f),v(o,"keypress",h)],i=!0)},p(n,e){t=n,2&e&&o.value!==t[1][t[17]]&&b(o,t[1][t[17]])},d(t){t&&a(n),t&&a(e),t&&a(o),t&&a(l),t&&a(c),i=!1,r(u)}}}function et(t){let n,e,o,l,c,i,u;function s(){return t[12](t[17])}function f(){t[13].call(o,t[17])}function h(...n){return t[14](t[17],...n)}return{c(){n=p("button"),n.textContent="x",e=m(),o=p("input"),l=m(),c=p("br"),y(n,"class","rm svelte-ids0iu"),y(o,"id","role"+t[17])},m(r,a){d(r,n,a),d(r,e,a),d(r,o,a),b(o,t[0][t[17]]),d(r,l,a),d(r,c,a),i||(u=[v(n,"click",s),v(o,"input",f),v(o,"keypress",h)],i=!0)},p(n,e){t=n,1&e&&o.value!==t[0][t[17]]&&b(o,t[0][t[17]])},d(t){t&&a(n),t&&a(e),t&&a(o),t&&a(l),t&&a(c),i=!1,r(u)}}}function ot(t){let n,e,o,r,l,c,i,u=t[15]+"",s=t[2][t[17]]+"";return{c(){n=p("tr"),e=p("td"),o=g(u),r=m(),l=p("td"),c=g(s),i=m(),y(e,"class","svelte-ids0iu"),y(l,"class","svelte-ids0iu")},m(t,u){d(t,n,u),f(n,e),f(e,o),f(n,r),f(n,l),f(l,c),f(n,i)},p(t,n){2&n&&u!==(u=t[15]+"")&&x(o,u),4&n&&s!==(s=t[2][t[17]]+"")&&x(c,s)},d(t){t&&a(n)}}}function rt(t){let n,e,o,l,c,i,u,s,$,g,x,b,w,_,k,E,B,C,A,j,M,T,N,O,I,L,G,H;c=new X({});let W=t[1],D=[];for(let n=0;n<W.length;n+=1)D[n]=nt(tt(t,W,n));let F=t[0],J=[];for(let n=0;n<F.length;n+=1)J[n]=et(Z(t,F,n));let K=t[1],Q=[];for(let n=0;n<K.length;n+=1)Q[n]=ot(Y(t,K,n));return{c(){n=p("main"),e=p("nav"),o=p("div"),l=p("a"),R(c.$$.fragment),i=m(),u=p("h1"),u.textContent="Werwolf Online Generator",s=m(),$=p("div"),g=p("div"),x=p("h3"),x.textContent="Players",b=m();for(let t=0;t<D.length;t+=1)D[t].c();w=m(),_=p("button"),_.textContent="Add player",k=m(),E=p("div"),B=p("h3"),B.textContent="Roles",C=m();for(let t=0;t<J.length;t+=1)J[t].c();A=m(),j=p("button"),j.textContent="Add role",M=m(),T=p("div"),N=p("table"),O=p("tr"),O.innerHTML='<th class="svelte-ids0iu">Player</th> \n\t\t\t<th class="svelte-ids0iu">Role</th>',I=m();for(let t=0;t<Q.length;t+=1)Q[t].c();y(l,"href","https://github.com/jmbuhr/werwolf-app"),y(o,"class","icon svelte-ids0iu"),y(u,"class","svelte-ids0iu"),y(_,"class","svelte-ids0iu"),y(j,"class","svelte-ids0iu"),y($,"class","controls svelte-ids0iu"),y(N,"class","svelte-ids0iu"),y(T,"class","result svelte-ids0iu")},m(r,a){d(r,n,a),f(n,e),f(e,o),f(o,l),q(c,l,null),f(n,i),f(n,u),f(n,s),f(n,$),f($,g),f(g,x),f(g,b);for(let t=0;t<D.length;t+=1)D[t].m(g,null);f(g,w),f(g,_),f($,k),f($,E),f(E,B),f(E,C);for(let t=0;t<J.length;t+=1)J[t].m(E,null);f(E,A),f(E,j),f(n,M),f(n,T),f(T,N),f(N,O),f(N,I);for(let t=0;t<Q.length;t+=1)Q[t].m(N,null);L=!0,G||(H=[v(_,"click",t[5]),v(j,"click",t[7])],G=!0)},p(t,[n]){if(74&n){let e;for(W=t[1],e=0;e<W.length;e+=1){const o=tt(t,W,e);D[e]?D[e].p(o,n):(D[e]=nt(o),D[e].c(),D[e].m(g,w))}for(;e<D.length;e+=1)D[e].d(1);D.length=W.length}if(273&n){let e;for(F=t[0],e=0;e<F.length;e+=1){const o=Z(t,F,e);J[e]?J[e].p(o,n):(J[e]=et(o),J[e].c(),J[e].m(E,A))}for(;e<J.length;e+=1)J[e].d(1);J.length=F.length}if(6&n){let e;for(K=t[1],e=0;e<K.length;e+=1){const o=Y(t,K,e);Q[e]?Q[e].p(o,n):(Q[e]=ot(o),Q[e].c(),Q[e].m(N,null))}for(;e<Q.length;e+=1)Q[e].d(1);Q.length=K.length}},i(t){L||(P(c.$$.fragment,t),L=!0)},o(t){S(c.$$.fragment,t),L=!1},d(t){t&&a(n),z(c),h(D,t),h(J,t),h(Q,t),G=!1,r(H)}}}function lt(t,n,e){let o,r=[""],l=[""];function c(t,n){"Enter"===t.key&&(u(),setTimeout((()=>document.getElementById(`player${n+1}`).focus())))}function i(t,n){"Enter"===t.key&&(f(),setTimeout((()=>document.getElementById(`role${n+1}`).focus())))}function u(){e(1,r=[...r,""])}function s(t){e(1,r=r.filter(((n,e)=>e!=t)))}function f(){e(0,l=[...l,""])}function d(t){e(0,l=l.filter(((n,e)=>e!=t)))}return t.$$.update=()=>{1&t.$$.dirty&&e(2,o=function(t){for(let n=(t=t.slice(0)).length-1;n>0;n--){const e=Math.floor(Math.random()*(n+1));[t[n],t[e]]=[t[e],t[n]]}return t}(l))},[l,r,o,c,i,u,s,f,d,t=>s(t),function(t){r[t]=this.value,e(1,r)},(t,n)=>c(n,t),t=>d(t),function(t){l[t]=this.value,e(0,l)},(t,n)=>i(n,t)]}class ct extends W{constructor(t){super(),H(this,t,lt,rt,c,{})}}const it=(t,n)=>new ct({target:document.getElementById(t),props:n});return window["svelte-app"]=it,it}();
//# sourceMappingURL=bundle.js.map
