import{S as ue,i as fe,s as _e,k as v,q as D,a as L,l as k,m as T,r as B,h as u,c as M,n as y,b as p,D as h,u as F,L as $,E as be,F as he,e as Y,G as R,M as me,g as K,d as Q,f as pe,N as te,O as ve,v as ke,y as Te,z as ye,A as ge,B as Ee}from"../chunks/index.6e2e9970.js";import{p as de}from"../chunks/stores.ade4026a.js";import{l as Ne}from"../chunks/leaderboardmap.4b231009.js";function le(n,e,a){const t=n.slice();return t[27]=e[a],t}function ne(n,e,a){const t=n.slice();return t[27]=e[a],t}function ae(n){let e,a,t=n[27]+1+"",l,r,i,s=(n[4].Value==="Time"?oe(n[0][n[27]].value):n[0][n[27]].value)+"",o,N,V,U=n[0][n[27]].server+"",w,z;return{c(){e=v("tr"),a=v("td"),l=D(t),r=L(),i=v("td"),o=D(s),N=L(),V=v("td"),w=D(U),z=L()},l(m){e=k(m,"TR",{});var b=T(e);a=k(b,"TD",{});var O=T(a);l=B(O,t),O.forEach(u),r=M(b),i=k(b,"TD",{});var C=T(i);o=B(C,s),C.forEach(u),N=M(b),V=k(b,"TD",{});var I=T(V);w=B(I,U),I.forEach(u),z=M(b),b.forEach(u)},m(m,b){p(m,e,b),h(e,a),h(a,l),h(e,r),h(e,i),h(i,o),h(e,N),h(e,V),h(V,w),h(e,z)},p(m,b){b[0]&8&&t!==(t=m[27]+1+"")&&F(l,t),b[0]&25&&s!==(s=(m[4].Value==="Time"?oe(m[0][m[27]].value):m[0][m[27]].value)+"")&&F(o,s),b[0]&9&&U!==(U=m[0][m[27]].server+"")&&F(w,U)},d(m){m&&u(e)}}}function se(n){let e,a=n[0][n[27]]&&ae(n);return{c(){a&&a.c(),e=Y()},l(t){a&&a.l(t),e=Y()},m(t,l){a&&a.m(t,l),p(t,e,l)},p(t,l){t[0][t[27]]?a?a.p(t,l):(a=ae(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},d(t){a&&a.d(t),t&&u(e)}}}function De(n){let e,a=n[6],t=[];for(let l=0;l<a.length;l+=1)t[l]=re(le(n,a,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=Y()},l(l){for(let r=0;r<t.length;r+=1)t[r].l(l);e=Y()},m(l,r){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(l,r);p(l,e,r)},p(l,r){if(r[0]&196){a=l[6];let i;for(i=0;i<a.length;i+=1){const s=le(l,a,i);t[i]?t[i].p(s,r):(t[i]=re(s),t[i].c(),t[i].m(e.parentNode,e))}for(;i<t.length;i+=1)t[i].d(1);t.length=a.length}},d(l){be(t,l),l&&u(e)}}}function Be(n){let e,a=n[6][0]+"",t,l,r,i,s,o,N,V,U,w,z;function m(c,g){return c[2]-1>2&&c[2]-1<=c[5]-3?Pe:c[2]-1>=c[5]-3?Ue:Oe}let b=m(n),O=b(n);function C(c,g){return c[2]>3&&c[2]<c[5]-1?Ie:c[2]>=1&&c[2]<4?we:Se}let I=C(n),P=I(n);function j(c,g){return c[2]+1<c[5]-1&&c[2]+1>c[6][2]?Ae:c[2]+1<=c[6][2]?ze:Ve}let A=j(n),d=A(n);return{c(){e=v("button"),t=D(a),r=L(),O.c(),i=L(),P.c(),s=L(),d.c(),o=L(),N=v("button"),V=D(n[5]),this.h()},l(c){e=k(c,"BUTTON",{class:!0});var g=T(e);t=B(g,a),g.forEach(u),r=M(c),O.l(c),i=M(c),P.l(c),s=M(c),d.l(c),o=M(c),N=k(c,"BUTTON",{class:!0});var q=T(N);V=B(q,n[5]),q.forEach(u),this.h()},h(){y(e,"class",l="btn btn-sm "+(n[2]===n[6][0]?"btn-active":"")),y(N,"class",U="btn btn-sm "+(n[2]===n[5]?"btn-active":""))},m(c,g){p(c,e,g),h(e,t),p(c,r,g),O.m(c,g),p(c,i,g),P.m(c,g),p(c,s,g),d.m(c,g),p(c,o,g),p(c,N,g),h(N,V),w||(z=[R(e,"click",n[12]),R(N,"click",n[22])],w=!0)},p(c,g){g[0]&4&&l!==(l="btn btn-sm "+(c[2]===c[6][0]?"btn-active":""))&&y(e,"class",l),b===(b=m(c))&&O?O.p(c,g):(O.d(1),O=b(c),O&&(O.c(),O.m(i.parentNode,i))),I===(I=C(c))&&P?P.p(c,g):(P.d(1),P=I(c),P&&(P.c(),P.m(s.parentNode,s))),A===(A=j(c))&&d?d.p(c,g):(d.d(1),d=A(c),d&&(d.c(),d.m(o.parentNode,o))),g[0]&4&&U!==(U="btn btn-sm "+(c[2]===c[5]?"btn-active":""))&&y(N,"class",U)},d(c){c&&u(e),c&&u(r),O.d(c),c&&u(i),P.d(c),c&&u(s),d.d(c),c&&u(o),c&&u(N),w=!1,me(z)}}}function re(n){let e,a=n[27]+"",t,l,r,i;return{c(){e=v("button"),t=D(a),this.h()},l(s){e=k(s,"BUTTON",{class:!0});var o=T(e);t=B(o,a),o.forEach(u),this.h()},h(){y(e,"class",l="btn btn-sm "+(n[2]===n[27]?"btn-active":""))},m(s,o){p(s,e,o),h(e,t),r||(i=R(e,"click",n[23]),r=!0)},p(s,o){o[0]&4&&l!==(l="btn btn-sm "+(s[2]===s[27]?"btn-active":""))&&y(e,"class",l)},d(s){s&&u(e),r=!1,i()}}}function Oe(n){let e,a=n[6][1]+"",t,l,r,i;return{c(){e=v("button"),t=D(a),this.h()},l(s){e=k(s,"BUTTON",{class:!0});var o=T(e);t=B(o,a),o.forEach(u),this.h()},h(){y(e,"class",l="btn btn-sm "+(n[2]===n[6][1]?"btn-active":""))},m(s,o){p(s,e,o),h(e,t),r||(i=R(e,"click",n[15]),r=!0)},p(s,o){o[0]&4&&l!==(l="btn btn-sm "+(s[2]===s[6][1]?"btn-active":""))&&y(e,"class",l)},d(s){s&&u(e),r=!1,i()}}}function Ue(n){let e,a=n[5]-3+"",t,l,r,i;return{c(){e=v("button"),t=D(a),this.h()},l(s){e=k(s,"BUTTON",{class:!0});var o=T(e);t=B(o,a),o.forEach(u),this.h()},h(){y(e,"class",l="btn btn-sm "+(n[2]===n[5]-3?"btn-active":""))},m(s,o){p(s,e,o),h(e,t),r||(i=R(e,"click",n[14]),r=!0)},p(s,o){o[0]&4&&l!==(l="btn btn-sm "+(s[2]===s[5]-3?"btn-active":""))&&y(e,"class",l)},d(s){s&&u(e),r=!1,i()}}}function Pe(n){let e,a=n[2]-1+"",t,l,r,i;return{c(){e=v("button"),t=D(a),this.h()},l(s){e=k(s,"BUTTON",{class:!0});var o=T(e);t=B(o,a),o.forEach(u),this.h()},h(){y(e,"class",l="btn btn-sm "+(n[2]===n[2]-1?"btn-active":""))},m(s,o){p(s,e,o),h(e,t),r||(i=R(e,"click",n[13]),r=!0)},p(s,o){o[0]&4&&a!==(a=s[2]-1+"")&&F(t,a),o[0]&4&&l!==(l="btn btn-sm "+(s[2]===s[2]-1?"btn-active":""))&&y(e,"class",l)},d(s){s&&u(e),r=!1,i()}}}function Se(n){let e,a=n[5]-2+"",t,l,r,i;return{c(){e=v("button"),t=D(a),this.h()},l(s){e=k(s,"BUTTON",{class:!0});var o=T(e);t=B(o,a),o.forEach(u),this.h()},h(){y(e,"class",l="btn btn-sm "+(n[2]===n[5]-2?"btn-active":""))},m(s,o){p(s,e,o),h(e,t),r||(i=R(e,"click",n[18]),r=!0)},p(s,o){o[0]&4&&l!==(l="btn btn-sm "+(s[2]===s[5]-2?"btn-active":""))&&y(e,"class",l)},d(s){s&&u(e),r=!1,i()}}}function we(n){let e,a=n[6][2]+"",t,l,r,i;return{c(){e=v("button"),t=D(a),this.h()},l(s){e=k(s,"BUTTON",{class:!0});var o=T(e);t=B(o,a),o.forEach(u),this.h()},h(){y(e,"class",l="btn btn-sm "+(n[2]===n[6][2]?"btn-active":""))},m(s,o){p(s,e,o),h(e,t),r||(i=R(e,"click",n[17]),r=!0)},p(s,o){o[0]&4&&l!==(l="btn btn-sm "+(s[2]===s[6][2]?"btn-active":""))&&y(e,"class",l)},d(s){s&&u(e),r=!1,i()}}}function Ie(n){let e,a,t,l,r;return{c(){e=v("button"),a=D(n[2]),this.h()},l(i){e=k(i,"BUTTON",{class:!0});var s=T(e);a=B(s,n[2]),s.forEach(u),this.h()},h(){y(e,"class",t="btn btn-sm "+(n[2]===n[2]?"btn-active":""))},m(i,s){p(i,e,s),h(e,a),l||(r=R(e,"click",n[16]),l=!0)},p(i,s){s[0]&4&&F(a,i[2]),s[0]&4&&t!==(t="btn btn-sm "+(i[2]===i[2]?"btn-active":""))&&y(e,"class",t)},d(i){i&&u(e),l=!1,r()}}}function Ve(n){let e,a=n[5]-1+"",t,l,r,i;return{c(){e=v("button"),t=D(a),this.h()},l(s){e=k(s,"BUTTON",{class:!0});var o=T(e);t=B(o,a),o.forEach(u),this.h()},h(){y(e,"class",l="btn btn-sm "+(n[2]===n[5]-1?"btn-active":""))},m(s,o){p(s,e,o),h(e,t),r||(i=R(e,"click",n[21]),r=!0)},p(s,o){o[0]&4&&l!==(l="btn btn-sm "+(s[2]===s[5]-1?"btn-active":""))&&y(e,"class",l)},d(s){s&&u(e),r=!1,i()}}}function ze(n){let e,a=n[6][3]+"",t,l,r,i;return{c(){e=v("button"),t=D(a),this.h()},l(s){e=k(s,"BUTTON",{class:!0});var o=T(e);t=B(o,a),o.forEach(u),this.h()},h(){y(e,"class",l="btn btn-sm "+(n[2]===n[6][3]?"btn-active":""))},m(s,o){p(s,e,o),h(e,t),r||(i=R(e,"click",n[20]),r=!0)},p(s,o){o[0]&4&&l!==(l="btn btn-sm "+(s[2]===s[6][3]?"btn-active":""))&&y(e,"class",l)},d(s){s&&u(e),r=!1,i()}}}function Ae(n){let e,a=n[2]+1+"",t,l,r,i;return{c(){e=v("button"),t=D(a),this.h()},l(s){e=k(s,"BUTTON",{class:!0});var o=T(e);t=B(o,a),o.forEach(u),this.h()},h(){y(e,"class",l="btn btn-sm "+(n[2]===n[2]+1?"btn-active":""))},m(s,o){p(s,e,o),h(e,t),r||(i=R(e,"click",n[19]),r=!0)},p(s,o){o[0]&4&&a!==(a=s[2]+1+"")&&F(t,a),o[0]&4&&l!==(l="btn btn-sm "+(s[2]===s[2]+1?"btn-active":""))&&y(e,"class",l)},d(s){s&&u(e),r=!1,i()}}}function je(n){let e,a=(isNaN(Number(n[4].DisplayName))?n[4].DisplayName:`${n[1]}, ${n[4].DisplayName}`)+"",t,l,r,i,s,o,N,V,U,w=n[4].Value+"",z,m,b,O,C,I,P,j,A=n[3],d=[];for(let _=0;_<A.length;_+=1)d[_]=se(ne(n,A,_));function c(_,S){return _[5]>5?Be:De}let q=c(n)(n);return{c(){e=v("div"),t=D(a),l=L(),r=v("table"),i=v("thead"),s=v("tr"),o=v("th"),N=D("Rank"),V=L(),U=v("th"),z=D(w),m=L(),b=v("th"),O=D("Server"),C=L(),I=v("tbody");for(let _=0;_<d.length;_+=1)d[_].c();P=L(),j=v("div"),q.c(),this.h()},l(_){e=k(_,"DIV",{class:!0});var S=T(e);t=B(S,a),S.forEach(u),l=M(_),r=k(_,"TABLE",{class:!0});var E=T(r);i=k(E,"THEAD",{});var f=T(i);s=k(f,"TR",{});var H=T(s);o=k(H,"TH",{});var G=T(o);N=B(G,"Rank"),G.forEach(u),V=M(H),U=k(H,"TH",{});var J=T(U);z=B(J,w),J.forEach(u),m=M(H),b=k(H,"TH",{});var Z=T(b);O=B(Z,"Server"),Z.forEach(u),H.forEach(u),f.forEach(u),C=M(E),I=k(E,"TBODY",{});var x=T(I);for(let W=0;W<d.length;W+=1)d[W].l(x);x.forEach(u),E.forEach(u),P=M(_),j=k(_,"DIV",{class:!0});var ee=T(j);q.l(ee),ee.forEach(u),this.h()},h(){y(e,"class","flex justify-center capitalize sticky top-16 z-50 bg-base-300 py-4 w-full"),y(r,"class","table table-zebra w-full table-compact md:table-normal table-fixed"),y(j,"class","flex justify-center btn-group place-self-center py-2 my-0")},m(_,S){p(_,e,S),h(e,t),p(_,l,S),p(_,r,S),h(r,i),h(i,s),h(s,o),h(o,N),h(s,V),h(s,U),h(U,z),h(s,m),h(s,b),h(b,O),h(r,C),h(r,I);for(let E=0;E<d.length;E+=1)d[E]&&d[E].m(I,null);p(_,P,S),p(_,j,S),q.m(j,null)},p(_,S){if(S[0]&18&&a!==(a=(isNaN(Number(_[4].DisplayName))?_[4].DisplayName:`${_[1]}, ${_[4].DisplayName}`)+"")&&F(t,a),S[0]&16&&w!==(w=_[4].Value+"")&&F(z,w),S[0]&25){A=_[3];let E;for(E=0;E<A.length;E+=1){const f=ne(_,A,E);d[E]?d[E].p(f,S):(d[E]=se(f),d[E].c(),d[E].m(I,null))}for(;E<d.length;E+=1)d[E].d(1);d.length=A.length}q.p(_,S)},i:$,o:$,d(_){_&&u(e),_&&u(l),_&&u(r),be(d,_),_&&u(P),_&&u(j),q.d()}}}let X=10;function oe(n){const e=Math.floor(n/60),a=n%60;return`${e.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`}function He(n,e,a){let t,l,r,i,s,o;he(n,de,f=>a(11,o=f));let{table:N}=e;const V=Ne,U=Math.ceil(N.length/10),w=Array.from({length:U},(f,H)=>H+1);let z=1;const m=Array(X).fill(0);for(let f=0;f<m.length;f++)m[f]=f;function b(f){const H=f.target;a(2,z=parseInt(H.innerText)),O(z)}function O(f){const H=(f-1)*X;for(let G=0;G<X;G++){const J=H+G;J<N.length?a(3,m[G]=J,m):a(3,m[G]=null,m)}}const C=f=>b(f),I=f=>b(f),P=f=>b(f),j=f=>b(f),A=f=>b(f),d=f=>b(f),c=f=>b(f),g=f=>b(f),q=f=>b(f),_=f=>b(f),S=f=>b(f),E=f=>b(f);return n.$$set=f=>{"table"in f&&a(0,N=f.table)},n.$$.update=()=>{n.$$.dirty[0]&2048&&a(10,t=o.url.searchParams.get("firstlevelcategory")),n.$$.dirty[0]&2048&&a(1,l=o.url.searchParams.get("category")),n.$$.dirty[0]&2048&&a(9,r=o.url.searchParams.get("subcategory")),n.$$.dirty[0]&2048&&o.url.searchParams.get("regions"),n.$$.dirty[0]&2048&&a(8,i=o.url.searchParams.get("leaderboardid")),n.$$.dirty[0]&1794&&a(4,s=V[t][l][r].find(f=>f.LeaderboardDefinitionId===i))},[N,l,z,m,s,U,w,b,i,r,t,o,C,I,P,j,A,d,c,g,q,_,S,E]}class Le extends ue{constructor(e){super(),fe(this,e,He,je,_e,{table:0},null,[-1,-1])}}function ie(n){let e,a,t,l={ctx:n,current:null,token:null,hasCatch:!0,pending:Ce,then:Re,catch:Me,value:2,error:3,blocks:[,,,]};return te(a=ce(n[0]),l),{c(){e=Y(),l.block.c()},l(r){e=Y(),l.block.l(r)},m(r,i){p(r,e,i),l.block.m(r,l.anchor=i),l.mount=()=>e.parentNode,l.anchor=e,t=!0},p(r,i){n=r,l.ctx=n,i&1&&a!==(a=ce(n[0]))&&te(a,l)||ve(l,n,i)},i(r){t||(K(l.block),t=!0)},o(r){for(let i=0;i<3;i+=1){const s=l.blocks[i];Q(s)}t=!1},d(r){r&&u(e),l.block.d(r),l.token=null,l=null}}}function Me(n){let e,a=n[3].message+"",t;return{c(){e=v("div"),t=D(a)},l(l){e=k(l,"DIV",{});var r=T(e);t=B(r,a),r.forEach(u)},m(l,r){p(l,e,r),h(e,t)},p(l,r){r&1&&a!==(a=l[3].message+"")&&F(t,a)},i:$,o:$,d(l){l&&u(e)}}}function Re(n){let e,a;return e=new Le({props:{table:n[2].data}}),{c(){Te(e.$$.fragment)},l(t){ye(e.$$.fragment,t)},m(t,l){ge(e,t,l),a=!0},p(t,l){const r={};l&1&&(r.table=t[2].data),e.$set(r)},i(t){a||(K(e.$$.fragment,t),a=!0)},o(t){Q(e.$$.fragment,t),a=!1},d(t){Ee(e,t)}}}function Ce(n){let e,a;return{c(){e=v("div"),a=D("loading...")},l(t){e=k(t,"DIV",{});var l=T(e);a=B(l,"loading..."),l.forEach(u)},m(t,l){p(t,e,l),h(e,a)},p:$,i:$,o:$,d(t){t&&u(e)}}}function qe(n){let e,a,t=n[0]&&ie(n);return{c(){t&&t.c(),e=Y()},l(l){t&&t.l(l),e=Y()},m(l,r){t&&t.m(l,r),p(l,e,r),a=!0},p(l,[r]){l[0]?t?(t.p(l,r),r&1&&K(t,1)):(t=ie(l),t.c(),K(t,1),t.m(e.parentNode,e)):t&&(ke(),Q(t,1,1,()=>{t=null}),pe())},i(l){a||(K(t),a=!0)},o(l){Q(t),a=!1},d(l){t&&t.d(l),l&&u(e)}}}async function ce(n){const e=await fetch(`https://lb.jakel.rocks/json/${n}/s1?size=1000`);if(e.status!==200)throw new Error("Leaderboard not found");return await e.json()}function Fe(n,e,a){let t,l;return he(n,de,r=>a(1,l=r)),n.$$.update=()=>{n.$$.dirty&2&&a(0,t=l.url.searchParams.get("leaderboardid"))},[t,l]}class Je extends ue{constructor(e){super(),fe(this,e,Fe,qe,_e,{})}}export{Je as default};