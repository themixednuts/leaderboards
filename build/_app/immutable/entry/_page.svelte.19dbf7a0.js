import{S as ge,i as ye,s as Te,k as v,q as D,a as H,l as k,m as h,r as w,c as L,h as c,n as b,b as m,E as _,u as F,F as Y,J as Ee,K as Ne,C as ue,D as ce,e as J,L as R,M as we,g as Z,d as x,f as Be,G as fe,I as Oe,v as Se,y as Ue,z as Pe,A as Ae,B as Ie}from"../chunks/index.a295b005.js";import{p as De}from"../chunks/stores.4a6808c6.js";import{l as je}from"../chunks/leaderboardmap.90637e4a.js";function _e(a,e,n){const t=a.slice();return t[29]=e[n],t}function be(a,e,n){const t=a.slice();return t[29]=e[n],t}function de(a){let e,n,t,l;return{c(){e=v("div"),n=ue("svg"),t=ue("path"),this.h()},l(r){e=k(r,"DIV",{class:!0,"data-tip":!0});var i=h(e);n=ce(i,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var s=h(n);t=ce(s,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),h(t).forEach(c),s.forEach(c),i.forEach(c),this.h()},h(){b(t,"stroke-linecap","round"),b(t,"stroke-linejoin","round"),b(t,"stroke-width","2"),b(t,"d","M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),b(n,"xmlns","http://www.w3.org/2000/svg"),b(n,"fill","none"),b(n,"viewBox","0 0 24 24"),b(n,"class","w-4 h-4 stroke-current"),b(e,"class","tooltip tooltip-info"),b(e,"data-tip",l=a[4].CategoryAdditionalHeader.replace(/<[^>]*>/g,""))},m(r,i){m(r,e,i),_(e,n),_(n,t)},p(r,i){i[0]&16&&l!==(l=r[4].CategoryAdditionalHeader.replace(/<[^>]*>/g,""))&&b(e,"data-tip",l)},d(r){r&&c(e)}}}function he(a){let e,n,t=a[8][a[29]]+"",l,r,i,s=(a[4].Value==="Time"?ve(a[0][a[29]].value):a[0][a[29]].value.toLocaleString())+"",o,g,V,j=a[0][a[29]].server+"",I,z;return{c(){e=v("tr"),n=v("td"),l=D(t),r=H(),i=v("td"),o=D(s),g=H(),V=v("td"),I=D(j),z=H()},l(y){e=k(y,"TR",{});var p=h(e);n=k(p,"TD",{});var B=h(n);l=w(B,t),B.forEach(c),r=L(p),i=k(p,"TD",{});var E=h(i);o=w(E,s),E.forEach(c),g=L(p),V=k(p,"TD",{});var M=h(V);I=w(M,j),M.forEach(c),z=L(p),p.forEach(c)},m(y,p){m(y,e,p),_(e,n),_(n,l),_(e,r),_(e,i),_(i,o),_(e,g),_(e,V),_(V,I),_(e,z)},p(y,p){p[0]&8&&t!==(t=y[8][y[29]]+"")&&F(l,t),p[0]&25&&s!==(s=(y[4].Value==="Time"?ve(y[0][y[29]].value):y[0][y[29]].value.toLocaleString())+"")&&F(o,s),p[0]&9&&j!==(j=y[0][y[29]].server+"")&&F(I,j)},d(y){y&&c(e)}}}function me(a){let e,n=a[0][a[29]]&&he(a);return{c(){n&&n.c(),e=J()},l(t){n&&n.l(t),e=J()},m(t,l){n&&n.m(t,l),m(t,e,l)},p(t,l){t[0][t[29]]?n?n.p(t,l):(n=he(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&c(e)}}}function Ve(a){let e,n=a[7],t=[];for(let l=0;l<n.length;l+=1)t[l]=pe(_e(a,n,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=J()},l(l){for(let r=0;r<t.length;r+=1)t[r].l(l);e=J()},m(l,r){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(l,r);m(l,e,r)},p(l,r){if(r[0]&644){n=l[7];let i;for(i=0;i<n.length;i+=1){const s=_e(l,n,i);t[i]?t[i].p(s,r):(t[i]=pe(s),t[i].c(),t[i].m(e.parentNode,e))}for(;i<t.length;i+=1)t[i].d(1);t.length=n.length}},d(l){Ee(t,l),l&&c(e)}}}function ze(a){let e,n=a[7][0]+"",t,l,r,i,s,o,g,V,j,I,z;function y(u,T){return u[2]-1>2&&u[2]-1<=u[6]-3?Le:u[2]-1>=u[6]-3?He:Ce}let p=y(a),B=p(a);function E(u,T){return u[2]>3&&u[2]<u[6]-1?$e:u[2]>=1&&u[2]<4?Re:Me}let M=E(a),S=M(a);function q(u,T){return u[2]+1<u[6]-1&&u[2]+1>u[7][2]?Ge:u[2]+1<=u[7][2]?Fe:qe}let C=q(a),P=C(a);return{c(){e=v("button"),t=D(n),r=H(),B.c(),i=H(),S.c(),s=H(),P.c(),o=H(),g=v("button"),V=D(a[6]),this.h()},l(u){e=k(u,"BUTTON",{class:!0});var T=h(e);t=w(T,n),T.forEach(c),r=L(u),B.l(u),i=L(u),S.l(u),s=L(u),P.l(u),o=L(u),g=k(u,"BUTTON",{class:!0});var K=h(g);V=w(K,a[6]),K.forEach(c),this.h()},h(){b(e,"class",l="btn btn-sm "+(a[2]===a[7][0]?"btn-active":"")),b(g,"class",j="btn btn-sm "+(a[2]===a[6]?"btn-active":""))},m(u,T){m(u,e,T),_(e,t),m(u,r,T),B.m(u,T),m(u,i,T),S.m(u,T),m(u,s,T),P.m(u,T),m(u,o,T),m(u,g,T),_(g,V),I||(z=[R(e,"click",a[14]),R(g,"click",a[24])],I=!0)},p(u,T){T[0]&4&&l!==(l="btn btn-sm "+(u[2]===u[7][0]?"btn-active":""))&&b(e,"class",l),p===(p=y(u))&&B?B.p(u,T):(B.d(1),B=p(u),B&&(B.c(),B.m(i.parentNode,i))),M===(M=E(u))&&S?S.p(u,T):(S.d(1),S=M(u),S&&(S.c(),S.m(s.parentNode,s))),C===(C=q(u))&&P?P.p(u,T):(P.d(1),P=C(u),P&&(P.c(),P.m(o.parentNode,o))),T[0]&4&&j!==(j="btn btn-sm "+(u[2]===u[6]?"btn-active":""))&&b(g,"class",j)},d(u){u&&c(e),u&&c(r),B.d(u),u&&c(i),S.d(u),u&&c(s),P.d(u),u&&c(o),u&&c(g),I=!1,we(z)}}}function pe(a){let e,n=a[29]+"",t,l,r,i;return{c(){e=v("button"),t=D(n),this.h()},l(s){e=k(s,"BUTTON",{class:!0});var o=h(e);t=w(o,n),o.forEach(c),this.h()},h(){b(e,"class",l="btn btn-sm "+(a[2]===a[29]?"btn-active":""))},m(s,o){m(s,e,o),_(e,t),r||(i=R(e,"click",a[25]),r=!0)},p(s,o){o[0]&4&&l!==(l="btn btn-sm "+(s[2]===s[29]?"btn-active":""))&&b(e,"class",l)},d(s){s&&c(e),r=!1,i()}}}function Ce(a){let e,n=a[7][1]+"",t,l,r,i;return{c(){e=v("button"),t=D(n),this.h()},l(s){e=k(s,"BUTTON",{class:!0});var o=h(e);t=w(o,n),o.forEach(c),this.h()},h(){b(e,"class",l="btn btn-sm "+(a[2]===a[7][1]?"btn-active":""))},m(s,o){m(s,e,o),_(e,t),r||(i=R(e,"click",a[17]),r=!0)},p(s,o){o[0]&4&&l!==(l="btn btn-sm "+(s[2]===s[7][1]?"btn-active":""))&&b(e,"class",l)},d(s){s&&c(e),r=!1,i()}}}function He(a){let e,n=a[6]-3+"",t,l,r,i;return{c(){e=v("button"),t=D(n),this.h()},l(s){e=k(s,"BUTTON",{class:!0});var o=h(e);t=w(o,n),o.forEach(c),this.h()},h(){b(e,"class",l="btn btn-sm "+(a[2]===a[6]-3?"btn-active":""))},m(s,o){m(s,e,o),_(e,t),r||(i=R(e,"click",a[16]),r=!0)},p(s,o){o[0]&4&&l!==(l="btn btn-sm "+(s[2]===s[6]-3?"btn-active":""))&&b(e,"class",l)},d(s){s&&c(e),r=!1,i()}}}function Le(a){let e,n=a[2]-1+"",t,l,r,i;return{c(){e=v("button"),t=D(n),this.h()},l(s){e=k(s,"BUTTON",{class:!0});var o=h(e);t=w(o,n),o.forEach(c),this.h()},h(){b(e,"class",l="btn btn-sm "+(a[2]===a[2]-1?"btn-active":""))},m(s,o){m(s,e,o),_(e,t),r||(i=R(e,"click",a[15]),r=!0)},p(s,o){o[0]&4&&n!==(n=s[2]-1+"")&&F(t,n),o[0]&4&&l!==(l="btn btn-sm "+(s[2]===s[2]-1?"btn-active":""))&&b(e,"class",l)},d(s){s&&c(e),r=!1,i()}}}function Me(a){let e,n=a[6]-2+"",t,l,r,i;return{c(){e=v("button"),t=D(n),this.h()},l(s){e=k(s,"BUTTON",{class:!0});var o=h(e);t=w(o,n),o.forEach(c),this.h()},h(){b(e,"class",l="btn btn-sm "+(a[2]===a[6]-2?"btn-active":""))},m(s,o){m(s,e,o),_(e,t),r||(i=R(e,"click",a[20]),r=!0)},p(s,o){o[0]&4&&l!==(l="btn btn-sm "+(s[2]===s[6]-2?"btn-active":""))&&b(e,"class",l)},d(s){s&&c(e),r=!1,i()}}}function Re(a){let e,n=a[7][2]+"",t,l,r,i;return{c(){e=v("button"),t=D(n),this.h()},l(s){e=k(s,"BUTTON",{class:!0});var o=h(e);t=w(o,n),o.forEach(c),this.h()},h(){b(e,"class",l="btn btn-sm "+(a[2]===a[7][2]?"btn-active":""))},m(s,o){m(s,e,o),_(e,t),r||(i=R(e,"click",a[19]),r=!0)},p(s,o){o[0]&4&&l!==(l="btn btn-sm "+(s[2]===s[7][2]?"btn-active":""))&&b(e,"class",l)},d(s){s&&c(e),r=!1,i()}}}function $e(a){let e,n,t,l,r;return{c(){e=v("button"),n=D(a[2]),this.h()},l(i){e=k(i,"BUTTON",{class:!0});var s=h(e);n=w(s,a[2]),s.forEach(c),this.h()},h(){b(e,"class",t="btn btn-sm "+(a[2]===a[2]?"btn-active":""))},m(i,s){m(i,e,s),_(e,n),l||(r=R(e,"click",a[18]),l=!0)},p(i,s){s[0]&4&&F(n,i[2]),s[0]&4&&t!==(t="btn btn-sm "+(i[2]===i[2]?"btn-active":""))&&b(e,"class",t)},d(i){i&&c(e),l=!1,r()}}}function qe(a){let e,n=a[6]-1+"",t,l,r,i;return{c(){e=v("button"),t=D(n),this.h()},l(s){e=k(s,"BUTTON",{class:!0});var o=h(e);t=w(o,n),o.forEach(c),this.h()},h(){b(e,"class",l="btn btn-sm "+(a[2]===a[6]-1?"btn-active":""))},m(s,o){m(s,e,o),_(e,t),r||(i=R(e,"click",a[23]),r=!0)},p(s,o){o[0]&4&&l!==(l="btn btn-sm "+(s[2]===s[6]-1?"btn-active":""))&&b(e,"class",l)},d(s){s&&c(e),r=!1,i()}}}function Fe(a){let e,n=a[7][3]+"",t,l,r,i;return{c(){e=v("button"),t=D(n),this.h()},l(s){e=k(s,"BUTTON",{class:!0});var o=h(e);t=w(o,n),o.forEach(c),this.h()},h(){b(e,"class",l="btn btn-sm "+(a[2]===a[7][3]?"btn-active":""))},m(s,o){m(s,e,o),_(e,t),r||(i=R(e,"click",a[22]),r=!0)},p(s,o){o[0]&4&&l!==(l="btn btn-sm "+(s[2]===s[7][3]?"btn-active":""))&&b(e,"class",l)},d(s){s&&c(e),r=!1,i()}}}function Ge(a){let e,n=a[2]+1+"",t,l,r,i;return{c(){e=v("button"),t=D(n),this.h()},l(s){e=k(s,"BUTTON",{class:!0});var o=h(e);t=w(o,n),o.forEach(c),this.h()},h(){b(e,"class",l="btn btn-sm "+(a[2]===a[2]+1?"btn-active":""))},m(s,o){m(s,e,o),_(e,t),r||(i=R(e,"click",a[21]),r=!0)},p(s,o){o[0]&4&&n!==(n=s[2]+1+"")&&F(t,n),o[0]&4&&l!==(l="btn btn-sm "+(s[2]===s[2]+1?"btn-active":""))&&b(e,"class",l)},d(s){s&&c(e),r=!1,i()}}}function Je(a){let e,n=(isNaN(Number(a[4].DisplayName))?a[4].DisplayName:`${a[1]}, ${a[4].DisplayName}`)+"",t,l,r,i,s,o,g,V,j,I,z=a[4].Value+"",y,p,B,E,M,S,q,C,P,u,T,K=Ye(a[5])+"",W,A=a[4].CategoryAdditionalHeader&&de(a),G=a[3],U=[];for(let f=0;f<G.length;f+=1)U[f]=me(be(a,G,f));function ee(f,N){return f[6]>5?ze:Ve}let $=ee(a)(a);return{c(){e=v("div"),t=D(n),l=H(),A&&A.c(),r=H(),i=v("table"),s=v("thead"),o=v("tr"),g=v("th"),V=D("Rank"),j=H(),I=v("th"),y=D(z),p=H(),B=v("th"),E=D("Server"),M=H(),S=v("tbody");for(let f=0;f<U.length;f+=1)U[f].c();q=H(),C=v("div"),$.c(),P=H(),u=v("div"),T=D("Date Pulled: "),W=D(K),this.h()},l(f){e=k(f,"DIV",{class:!0});var N=h(e);t=w(N,n),l=L(N),A&&A.l(N),N.forEach(c),r=L(f),i=k(f,"TABLE",{class:!0});var O=h(i);s=k(O,"THEAD",{});var X=h(s);o=k(X,"TR",{});var Q=h(o);g=k(Q,"TH",{});var ne=h(g);V=w(ne,"Rank"),ne.forEach(c),j=L(Q),I=k(Q,"TH",{});var se=h(I);y=w(se,z),se.forEach(c),p=L(Q),B=k(Q,"TH",{});var re=h(B);E=w(re,"Server"),re.forEach(c),Q.forEach(c),X.forEach(c),M=L(O),S=k(O,"TBODY",{});var ie=h(S);for(let le=0;le<U.length;le+=1)U[le].l(ie);ie.forEach(c),O.forEach(c),q=L(f),C=k(f,"DIV",{class:!0});var oe=h(C);$.l(oe),oe.forEach(c),P=L(f),u=k(f,"DIV",{class:!0});var te=h(u);T=w(te,"Date Pulled: "),W=w(te,K),te.forEach(c),this.h()},h(){b(e,"class","flex justify-center capitalize sticky top-10 z-50 bg-base-300 py-4 w-full"),b(i,"class","table table-zebra w-full table-compact md:table-normal table-fixed overflow-clip"),b(C,"class","flex justify-center btn-group place-self-center py-2 my-0"),b(u,"class","flex justify-center text-sm md:text-base")},m(f,N){m(f,e,N),_(e,t),_(e,l),A&&A.m(e,null),m(f,r,N),m(f,i,N),_(i,s),_(s,o),_(o,g),_(g,V),_(o,j),_(o,I),_(I,y),_(o,p),_(o,B),_(B,E),_(i,M),_(i,S);for(let O=0;O<U.length;O+=1)U[O]&&U[O].m(S,null);m(f,q,N),m(f,C,N),$.m(C,null),m(f,P,N),m(f,u,N),_(u,T),_(u,W)},p(f,N){if(N[0]&18&&n!==(n=(isNaN(Number(f[4].DisplayName))?f[4].DisplayName:`${f[1]}, ${f[4].DisplayName}`)+"")&&F(t,n),f[4].CategoryAdditionalHeader?A?A.p(f,N):(A=de(f),A.c(),A.m(e,null)):A&&(A.d(1),A=null),N[0]&16&&z!==(z=f[4].Value+"")&&F(y,z),N[0]&281){G=f[3];let O;for(O=0;O<G.length;O+=1){const X=be(f,G,O);U[O]?U[O].p(X,N):(U[O]=me(X),U[O].c(),U[O].m(S,null))}for(;O<U.length;O+=1)U[O].d(1);U.length=G.length}$.p(f,N)},i:Y,o:Y,d(f){f&&c(e),A&&A.d(),f&&c(r),f&&c(i),Ee(U,f),f&&c(q),f&&c(C),$.d(),f&&c(P),f&&c(u)}}}let ae=10;function Ke(a){let e=1,n=2,t=[];for(let l=0;l<a.length;l++)l!==0&&a[l-1].value!==a[l].value&&(e=n),t.push(e),n++;return t}function ve(a){const e=Math.floor(a/60),n=a%60;return`${e.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`}function Ye(a){const e=new Date(a),n={year:"2-digit",month:"numeric",day:"numeric"},t={hour:"numeric",minute:"numeric"};return`${e.toLocaleDateString("en-US",n)} ${e.toLocaleTimeString("en-US",t)}`}function Qe(a,e,n){let t,l,r,i,s,o;Ne(a,De,d=>n(13,o=d));let{table:g}=e;const V=je,j=g[0].date,I=Math.ceil(g.length/10),z=Array.from({length:I},(d,$)=>$+1);let y=1;const p=Array(ae).fill(0);for(let d=0;d<p.length;d++)p[d]=d;const B=Ke(g);function E(d){const $=d.target;n(2,y=parseInt($.innerText)),M(y)}function M(d){const $=(d-1)*ae;for(let f=0;f<ae;f++){const N=$+f;N<g.length?n(3,p[f]=N,p):n(3,p[f]=null,p)}}const S=d=>E(d),q=d=>E(d),C=d=>E(d),P=d=>E(d),u=d=>E(d),T=d=>E(d),K=d=>E(d),W=d=>E(d),A=d=>E(d),G=d=>E(d),U=d=>E(d),ee=d=>E(d);return a.$$set=d=>{"table"in d&&n(0,g=d.table)},a.$$.update=()=>{a.$$.dirty[0]&8192&&n(12,t=o.url.searchParams.get("firstlevelcategory")),a.$$.dirty[0]&8192&&n(1,l=o.url.searchParams.get("category")),a.$$.dirty[0]&8192&&n(11,r=o.url.searchParams.get("subcategory")),a.$$.dirty[0]&8192&&o.url.searchParams.get("regions"),a.$$.dirty[0]&8192&&n(10,i=o.url.searchParams.get("leaderboardid")),a.$$.dirty[0]&7170&&n(4,s=V[t][l][r].find(d=>d.LeaderboardDefinitionId===i))},[g,l,y,p,s,j,I,z,B,E,i,r,t,o,S,q,C,P,u,T,K,W,A,G,U,ee]}class We extends ge{constructor(e){super(),ye(this,e,Qe,Je,Te,{table:0},null,[-1,-1])}}function ke(a){let e,n,t,l={ctx:a,current:null,token:null,hasCatch:!0,pending:xe,then:Ze,catch:Xe,value:4,error:5,blocks:[,,,]};return fe(n=a[1](a[0]),l),{c(){e=J(),l.block.c()},l(r){e=J(),l.block.l(r)},m(r,i){m(r,e,i),l.block.m(r,l.anchor=i),l.mount=()=>e.parentNode,l.anchor=e,t=!0},p(r,i){a=r,l.ctx=a,i&1&&n!==(n=a[1](a[0]))&&fe(n,l)||Oe(l,a,i)},i(r){t||(Z(l.block),t=!0)},o(r){for(let i=0;i<3;i+=1){const s=l.blocks[i];x(s)}t=!1},d(r){r&&c(e),l.block.d(r),l.token=null,l=null}}}function Xe(a){let e,n=a[5].message+"",t;return{c(){e=v("div"),t=D(n),this.h()},l(l){e=k(l,"DIV",{class:!0});var r=h(e);t=w(r,n),r.forEach(c),this.h()},h(){b(e,"class","flex justify-center text-2xl")},m(l,r){m(l,e,r),_(e,t)},p(l,r){r&1&&n!==(n=l[5].message+"")&&F(t,n)},i:Y,o:Y,d(l){l&&c(e)}}}function Ze(a){let e,n;return e=new We({props:{table:a[4].data}}),{c(){Ue(e.$$.fragment)},l(t){Pe(e.$$.fragment,t)},m(t,l){Ae(e,t,l),n=!0},p(t,l){const r={};l&1&&(r.table=t[4].data),e.$set(r)},i(t){n||(Z(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){Ie(e,t)}}}function xe(a){let e,n,t;return{c(){e=v("div"),n=v("button"),t=D("loading"),this.h()},l(l){e=k(l,"DIV",{class:!0});var r=h(e);n=k(r,"BUTTON",{class:!0});var i=h(n);t=w(i,"loading"),i.forEach(c),r.forEach(c),this.h()},h(){b(n,"class","btn loading"),b(e,"class","flex justify-center text-2xl")},m(l,r){m(l,e,r),_(e,n),_(n,t)},p:Y,i:Y,o:Y,d(l){l&&c(e)}}}function et(a){let e,n,t=a[0]&&ke(a);return{c(){t&&t.c(),e=J()},l(l){t&&t.l(l),e=J()},m(l,r){t&&t.m(l,r),m(l,e,r),n=!0},p(l,[r]){l[0]?t?(t.p(l,r),r&1&&Z(t,1)):(t=ke(l),t.c(),Z(t,1),t.m(e.parentNode,e)):t&&(Se(),x(t,1,1,()=>{t=null}),Be())},i(l){n||(Z(t),n=!0)},o(l){x(t),n=!1},d(l){t&&t.d(l),l&&c(e)}}}function tt(a,e,n){let t,l,r;Ne(a,De,s=>n(2,r=s));async function i(s){const o=await fetch(`https://lb.jakel.rocks/json/${s}/${l}?size=1000`);if(o.status!==200)throw new Error("Leaderboard not found");return await o.json()}return a.$$.update=()=>{a.$$.dirty&4&&n(0,t=r.url.searchParams.get("leaderboardid")),a.$$.dirty&4&&(l=r.url.searchParams.get("bracket")||"s1")},[t,i,r]}class st extends ge{constructor(e){super(),ye(this,e,tt,et,Te,{})}}export{st as default};
