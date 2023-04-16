import{S as Vt,i as Bt,s as Nt,C as Ot,k as g,q as I,a as w,l as p,m as v,r as D,h as m,c as L,n as s,D as bt,b as P,E as n,u as oe,g as Ae,d as Re,f as Ut,F as qt,G as Ce,H as jt,o as Pt,I as re,J as Te,K as Mt,L as zt,M as Kt,N as Ht,v as Wt,O as le,P as mt,Q as _t}from"../chunks/index.448aff83.js";import{p as Ft}from"../chunks/stores.44b739a7.js";import{j as se,k as vt}from"../chunks/singletons.63940d1f.js";import{l as Gt}from"../chunks/leaderboardmap.90637e4a.js";se.disable_scroll_handling;const Jt=se.goto;se.invalidate;se.invalidateAll;se.preload_data;se.preload_code;se.before_navigate;se.after_navigate;var $e={},Qt={get exports(){return $e},set exports(e){$e=e}};(function(e,a){function t(){var l=document.querySelector("[data-toggle-theme]"),d=l?l.getAttribute("data-key"):null;(function(b=localStorage.getItem(d||"theme")){localStorage.getItem(d||"theme")&&(document.documentElement.setAttribute("data-theme",b),l&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(c=>{c.classList.add(l.getAttribute("data-act-class"))}))})(),l&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(b=>{b.addEventListener("click",function(){var c=b.getAttribute("data-toggle-theme");if(c){var f=c.split(",");document.documentElement.getAttribute("data-theme")==f[0]?f.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem(d||"theme")):(document.documentElement.setAttribute("data-theme",f[1]),localStorage.setItem(d||"theme",f[1])):(document.documentElement.setAttribute("data-theme",f[0]),localStorage.setItem(d||"theme",f[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach(i=>{i.classList.toggle(this.getAttribute("data-act-class"))})})})}function o(){var l=document.querySelector("[data-set-theme='']"),d=l?l.getAttribute("data-key"):null;(function(b=localStorage.getItem(d||"theme")){if(b!=null&&b!="")if(localStorage.getItem(d||"theme")&&localStorage.getItem(d||"theme")!=""){document.documentElement.setAttribute("data-theme",b);var c=document.querySelector("[data-set-theme='"+b.toString()+"']");c&&([...document.querySelectorAll("[data-set-theme]")].forEach(f=>{f.classList.remove(f.getAttribute("data-act-class"))}),c.getAttribute("data-act-class")&&c.classList.add(c.getAttribute("data-act-class")))}else{var c=document.querySelector("[data-set-theme='']");c.getAttribute("data-act-class")&&c.classList.add(c.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(b=>{b.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem(d||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(c=>{c.classList.remove(c.getAttribute("data-act-class"))}),b.getAttribute("data-act-class")&&b.classList.add(b.getAttribute("data-act-class"))})})}function u(){var l=document.querySelector("select[data-choose-theme]"),d=l?l.getAttribute("data-key"):null;(function(b=localStorage.getItem(d||"theme")){if(localStorage.getItem(d||"theme")){document.documentElement.setAttribute("data-theme",b);var c=document.querySelector("select[data-choose-theme] [value='"+b.toString()+"']");c&&[...document.querySelectorAll("select[data-choose-theme] [value='"+b.toString()+"']")].forEach(f=>{f.selected=!0})}})(),l&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(b=>{b.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem(d||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem(d||"theme")+"']")].forEach(c=>{c.selected=!0})})})}function h(l=!0){l===!0?document.addEventListener("DOMContentLoaded",function(d){t(),u(),o()}):(t(),u(),o())}e.exports={themeChange:h}})(Qt);function gt(e,a,t){const o=e.slice();return o[28]=a[t],o}function pt(e,a,t){const o=e.slice();return o[28]=a[t],o}function kt(e,a,t){const o=e.slice();return o[28]=a[t],o}function Et(e,a,t){const o=e.slice();return o[28]=a[t],o}function yt(e){let a,t,o=e[28]+"",u,h,l,d,b;function c(){return e[14](e[28])}function f(){return e[15](e[28])}return{c(){a=g("li"),t=g("div"),u=I(o),l=w(),this.h()},l(i){a=p(i,"LI",{});var r=v(a);t=p(r,"DIV",{class:!0});var _=v(t);u=D(_,o),_.forEach(m),l=L(r),r.forEach(m),this.h()},h(){s(t,"class",h=e[1]===e[28]?"active":"")},m(i,r){P(i,a,r),n(a,t),n(t,u),n(a,l),d||(b=[re(t,"click",c),re(t,"keypress",f)],d=!0)},p(i,r){e=i,r[0]&2&&h!==(h=e[1]===e[28]?"active":"")&&s(t,"class",h)},d(i){i&&m(a),d=!1,Te(b)}}}function wt(e){let a,t,o=(e[0]?e[0]:"Category")+"",u,h,l,d=Object.keys(e[5][e[1]]),b=[];for(let c=0;c<d.length;c+=1)b[c]=Lt(kt(e,d,c));return{c(){a=g("div"),t=g("label"),u=I(o),h=w(),l=g("ul");for(let c=0;c<b.length;c+=1)b[c].c();this.h()},l(c){a=p(c,"DIV",{class:!0});var f=v(a);t=p(f,"LABEL",{tabindex:!0,class:!0});var i=v(t);u=D(i,o),i.forEach(m),h=L(f),l=p(f,"UL",{tabindex:!0,class:!0});var r=v(l);for(let _=0;_<b.length;_+=1)b[_].l(r);r.forEach(m),f.forEach(m),this.h()},h(){s(t,"tabindex","0"),s(t,"class","btn btn-xs md:btn-sm m-1"),s(l,"tabindex","0"),s(l,"class","dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 left-1/2 -translate-x-1/2 overflow-auto no-scrollbar min-h-24 flex-nowrap"),s(a,"class","dropdown")},m(c,f){P(c,a,f),n(a,t),n(t,u),n(a,h),n(a,l);for(let i=0;i<b.length;i+=1)b[i]&&b[i].m(l,null)},p(c,f){if(f[0]&1&&o!==(o=(c[0]?c[0]:"Category")+"")&&oe(u,o),f[0]&291){d=Object.keys(c[5][c[1]]);let i;for(i=0;i<d.length;i+=1){const r=kt(c,d,i);b[i]?b[i].p(r,f):(b[i]=Lt(r),b[i].c(),b[i].m(l,null))}for(;i<b.length;i+=1)b[i].d(1);b.length=d.length}},d(c){c&&m(a),Ce(b,c)}}}function Lt(e){let a,t,o=e[28]+"",u,h,l,d,b;function c(){return e[16](e[28])}function f(){return e[17](e[28])}return{c(){a=g("li"),t=g("div"),u=I(o),l=w(),this.h()},l(i){a=p(i,"LI",{});var r=v(a);t=p(r,"DIV",{class:!0});var _=v(t);u=D(_,o),_.forEach(m),l=L(r),r.forEach(m),this.h()},h(){s(t,"class",h=e[0]===e[28]?"active":"")},m(i,r){P(i,a,r),n(a,t),n(t,u),n(a,l),d||(b=[re(t,"click",c),re(t,"keypress",f)],d=!0)},p(i,r){e=i,r[0]&2&&o!==(o=e[28]+"")&&oe(u,o),r[0]&3&&h!==(h=e[0]===e[28]?"active":"")&&s(t,"class",h)},d(i){i&&m(a),d=!1,Te(b)}}}function It(e){let a,t,o=(e[2]?e[2]:"Sub Category")+"",u,h,l,d,b=Object.keys(e[5][e[1]][e[0]]),c=[];for(let f=0;f<b.length;f+=1)c[f]=Dt(pt(e,b,f));return{c(){a=g("div"),t=g("label"),u=I(o),h=w(),l=g("ul");for(let f=0;f<c.length;f+=1)c[f].c();this.h()},l(f){a=p(f,"DIV",{class:!0});var i=v(a);t=p(i,"LABEL",{tabindex:!0,class:!0});var r=v(t);u=D(r,o),r.forEach(m),h=L(i),l=p(i,"UL",{tabindex:!0,class:!0});var _=v(l);for(let y=0;y<c.length;y+=1)c[y].l(_);_.forEach(m),i.forEach(m),this.h()},h(){s(t,"tabindex","0"),s(t,"class","btn btn-xs md:btn-sm"),s(l,"tabindex","0"),s(l,"class",d="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 overflow-auto no-scrollbar min-h-24 flex-nowrap "+(e[2]?"left-1/2 -translate-x-1/2":"dropdown-end")),s(a,"class","dropdown dropdown-end")},m(f,i){P(f,a,i),n(a,t),n(t,u),n(a,h),n(a,l);for(let r=0;r<c.length;r+=1)c[r]&&c[r].m(l,null)},p(f,i){if(i[0]&4&&o!==(o=(f[2]?f[2]:"Sub Category")+"")&&oe(u,o),i[0]&295){b=Object.keys(f[5][f[1]][f[0]]);let r;for(r=0;r<b.length;r+=1){const _=pt(f,b,r);c[r]?c[r].p(_,i):(c[r]=Dt(_),c[r].c(),c[r].m(l,null))}for(;r<c.length;r+=1)c[r].d(1);c.length=b.length}i[0]&4&&d!==(d="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 overflow-auto no-scrollbar min-h-24 flex-nowrap "+(f[2]?"left-1/2 -translate-x-1/2":"dropdown-end"))&&s(l,"class",d)},d(f){f&&m(a),Ce(c,f)}}}function Dt(e){let a,t,o=e[28]+"",u,h,l,d,b;function c(){return e[18](e[28])}function f(){return e[19](e[28])}return{c(){a=g("li"),t=g("div"),u=I(o),l=w(),this.h()},l(i){a=p(i,"LI",{});var r=v(a);t=p(r,"DIV",{class:!0});var _=v(t);u=D(_,o),_.forEach(m),l=L(r),r.forEach(m),this.h()},h(){s(t,"class",h=e[2]===e[28]?"active":"")},m(i,r){P(i,a,r),n(a,t),n(t,u),n(a,l),d||(b=[re(t,"click",c),re(t,"keypress",f)],d=!0)},p(i,r){e=i,r[0]&3&&o!==(o=e[28]+"")&&oe(u,o),r[0]&7&&h!==(h=e[2]===e[28]?"active":"")&&s(t,"class",h)},d(i){i&&m(a),d=!1,Te(b)}}}function St(e){let a,t,o,u,h,l,d;function b(_,y){var k,S;return y[0]&28&&(u=null),y[0]&28&&(h=null),u==null&&(u=!!(_[4]&&((k=_[3].find(_[12]))==null?void 0:k.DisplayName)===_[2])),u?Xt:(h==null&&(h=!!(_[4]&&((S=_[3].find(_[13]))==null?void 0:S.DisplayName)!==_[2])),h?$t:Rt)}let c=b(e,[-1,-1]),f=c(e),i=Object.values(e[3]),r=[];for(let _=0;_<i.length;_+=1)r[_]=Ct(gt(e,i,_));return{c(){a=g("div"),t=g("label"),o=g("div"),f.c(),l=w(),d=g("ul");for(let _=0;_<r.length;_+=1)r[_].c();this.h()},l(_){a=p(_,"DIV",{class:!0});var y=v(a);t=p(y,"LABEL",{tabindex:!0,class:!0});var k=v(t);o=p(k,"DIV",{class:!0});var S=v(o);f.l(S),S.forEach(m),k.forEach(m),l=L(y),d=p(y,"UL",{tabindex:!0,class:!0});var z=v(d);for(let Q=0;Q<r.length;Q+=1)r[Q].l(z);z.forEach(m),y.forEach(m),this.h()},h(){s(o,"class","flex flex-col"),s(t,"tabindex","0"),s(t,"class","btn btn-xs md:btn-sm m-1"),s(d,"tabindex","0"),s(d,"class","dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 dropdown-end overflow-auto no-scrollbar min-h-24 flex-nowrap"),s(a,"class","dropdown dropdown-end relative")},m(_,y){P(_,a,y),n(a,t),n(t,o),f.m(o,null),n(a,l),n(a,d);for(let k=0;k<r.length;k+=1)r[k]&&r[k].m(d,null)},p(_,y){if(c===(c=b(_,y))&&f?f.p(_,y):(f.d(1),f=c(_),f&&(f.c(),f.m(o,null))),y[0]&280){i=Object.values(_[3]);let k;for(k=0;k<i.length;k+=1){const S=gt(_,i,k);r[k]?r[k].p(S,y):(r[k]=Ct(S),r[k].c(),r[k].m(d,null))}for(;k<r.length;k+=1)r[k].d(1);r.length=i.length}},d(_){_&&m(a),f.d(),Ce(r,_)}}}function Rt(e){let a;return{c(){a=I("Leaderboards")},l(t){a=D(t,"Leaderboards")},m(t,o){P(t,a,o)},p:le,d(t){t&&m(a)}}}function $t(e){var o;let a=((o=e[3].find(e[22]))==null?void 0:o.DisplayName)+"",t;return{c(){t=I(a)},l(u){t=D(u,a)},m(u,h){P(u,t,h)},p(u,h){var l;h[0]&24&&a!==(a=((l=u[3].find(u[22]))==null?void 0:l.DisplayName)+"")&&oe(t,a)},d(u){u&&m(t)}}}function Xt(e){var u,h;let a,t=(u=e[3].find(e[20]))!=null&&u.CharacterLeaderboard?"Character":(h=e[3].find(e[21]))!=null&&h.CompanyLeaderboard?"Company":"",o;return{c(){a=g("div"),o=I(t),this.h()},l(l){a=p(l,"DIV",{class:!0});var d=v(a);o=D(d,t),d.forEach(m),this.h()},h(){s(a,"class","")},m(l,d){P(l,a,d),n(a,o)},p(l,d){var b,c;d[0]&24&&t!==(t=(b=l[3].find(l[20]))!=null&&b.CharacterLeaderboard?"Character":(c=l[3].find(l[21]))!=null&&c.CompanyLeaderboard?"Company":"")&&oe(o,t)},d(l){l&&m(a)}}}function At(e){let a,t,o,u;return{c(){a=g("div"),t=mt("svg"),o=mt("path"),this.h()},l(h){a=p(h,"DIV",{class:!0,"data-tip":!0});var l=v(a);t=_t(l,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var d=v(t);o=_t(d,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),v(o).forEach(m),d.forEach(m),l.forEach(m),this.h()},h(){s(o,"stroke-linecap","round"),s(o,"stroke-linejoin","round"),s(o,"stroke-width","2"),s(o,"d","M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),s(t,"xmlns","http://www.w3.org/2000/svg"),s(t,"fill","none"),s(t,"viewBox","0 0 24 24"),s(t,"class","w-4 h-4 stroke-current"),s(a,"class","tooltip px-0"),s(a,"data-tip",u=e[28].CharacterLeaderboard?"Character":e[28].CompanyLeaderboard?"Company":"")},m(h,l){P(h,a,l),n(a,t),n(t,o)},p(h,l){l[0]&8&&u!==(u=h[28].CharacterLeaderboard?"Character":h[28].CompanyLeaderboard?"Company":"")&&s(a,"data-tip",u)},d(h){h&&m(a)}}}function Ct(e){let a,t,o,u=e[28].DisplayName+"",h,l,d,b,c,f,i=(e[28].CharacterLeaderboard||e[28].CompanyLeaderboard)&&At(e);function r(){return e[23](e[28])}function _(){return e[24](e[28])}return{c(){a=g("li"),t=g("div"),o=g("div"),h=I(u),l=w(),i&&i.c(),b=w(),this.h()},l(y){a=p(y,"LI",{});var k=v(a);t=p(k,"DIV",{class:!0});var S=v(t);o=p(S,"DIV",{class:!0});var z=v(o);h=D(z,u),z.forEach(m),l=L(S),i&&i.l(S),S.forEach(m),b=L(k),k.forEach(m),this.h()},h(){s(o,"class","flex"),s(t,"class",d=e[4]===e[28].LeaderboardDefinitionId?"active":"")},m(y,k){P(y,a,k),n(a,t),n(t,o),n(o,h),n(t,l),i&&i.m(t,null),n(a,b),c||(f=[re(t,"click",r),re(t,"keypress",_)],c=!0)},p(y,k){e=y,k[0]&8&&u!==(u=e[28].DisplayName+"")&&oe(h,u),e[28].CharacterLeaderboard||e[28].CompanyLeaderboard?i?i.p(e,k):(i=At(e),i.c(),i.m(t,null)):i&&(i.d(1),i=null),k[0]&24&&d!==(d=e[4]===e[28].LeaderboardDefinitionId?"active":"")&&s(t,"class",d)},d(y){y&&m(a),i&&i.d(),c=!1,Te(f)}}}function Tt(e){let a,t;const o=e[11].default,u=Mt(o,e,e[10],null);return{c(){a=g("div"),u&&u.c(),this.h()},l(h){a=p(h,"DIV",{class:!0});var l=v(a);u&&u.l(l),l.forEach(m),this.h()},h(){s(a,"class","border-2 border-base-100 rounded-box p-2 my-2 sticky top-52 min-h-fit")},m(h,l){P(h,a,l),u&&u.m(a,null),t=!0},p(h,l){u&&u.p&&(!t||l[0]&1024)&&zt(u,o,h,h[10],t?Ht(o,h[10],l,null):Kt(h[10]),null)},i(h){t||(Ae(u,h),t=!0)},o(h){Re(u,h),t=!1},d(h){h&&m(a),u&&u.d(h)}}}function Yt(e){return{c:le,l:le,m:le,p:le,d:le}}function Zt(e){let a,t,o,u,h,l,d=e[27].data[0].count+"",b;return{c(){a=g("div"),t=g("div"),o=g("div"),u=I("Unique Players"),h=w(),l=g("div"),b=I(d),this.h()},l(c){a=p(c,"DIV",{class:!0});var f=v(a);t=p(f,"DIV",{class:!0});var i=v(t);o=p(i,"DIV",{class:!0});var r=v(o);u=D(r,"Unique Players"),r.forEach(m),h=L(i),l=p(i,"DIV",{class:!0});var _=v(l);b=D(_,d),_.forEach(m),i.forEach(m),f.forEach(m),this.h()},h(){s(o,"class","stat-title"),s(l,"class","stat-value text-secondary"),s(t,"class","stat place-items-center"),s(a,"class","stats btn btn-sm shadow h-fit mb-2")},m(c,f){P(c,a,f),n(a,t),n(t,o),n(o,u),n(t,h),n(t,l),n(l,b)},p:le,d(c){c&&m(a)}}}function xt(e){let a,t,o;return{c(){a=g("div"),t=g("button"),o=I("Loading"),this.h()},l(u){a=p(u,"DIV",{class:!0});var h=v(a);t=p(h,"BUTTON",{class:!0});var l=v(t);o=D(l,"Loading"),l.forEach(m),h.forEach(m),this.h()},h(){s(t,"class","btn btn-xs loading"),s(a,"class","footer")},m(u,h){P(u,a,h),n(a,t),n(t,o)},p:le,d(u){u&&m(a)}}}function ea(e){let a,t,o,u,h,l,d,b,c,f,i,r,_,y,k,S,z,Q,W,fe,be,F,me,_e,G,ve,ge,J,E,ne,M,pe,Ve,$,Be,Ne,X,Oe,Ue,Y,qe,je,Z,Pe,Me,x,ze,Ke,K,ie,R,ye,He,j,ee,de,ke=(e[1]?e[1]:"Main Section")+"",we,We,te,Fe,Le,Ie,Ge,Je,ce,ue=Object.keys(e[5]),N=[];for(let V=0;V<ue.length;V+=1)N[V]=yt(Et(e,ue,V));let O=e[1]&&wt(e),U=e[1]&&e[0]&&It(e),q=e[1]&&e[0]&&e[2]&&e[3]&&e[3].length>1&&St(e),T=e[1]&&e[0]&&e[2]&&e[4]&&Tt(e),H={ctx:e,current:null,token:null,hasCatch:!1,pending:xt,then:Zt,catch:Yt,value:27};return Ot(ta(),H),{c(){a=g("div"),t=g("div"),o=g("a"),u=I("New World Leaderboards"),h=w(),l=g("div"),d=g("div"),b=g("span"),c=I("Theme"),f=w(),i=g("div"),r=g("div"),_=g("button"),y=I("Default"),k=w(),S=g("button"),z=I("Light"),Q=w(),W=g("button"),fe=I("Dark"),be=w(),F=g("button"),me=I("Pastel"),_e=w(),G=g("button"),ve=I("Bumblebee"),ge=w(),J=g("button"),E=I("Lofi"),ne=w(),M=g("button"),pe=I("Emerald"),Ve=w(),$=g("button"),Be=I("Cupcake"),Ne=w(),X=g("button"),Oe=I("Halloween"),Ue=w(),Y=g("button"),qe=I("Black"),je=w(),Z=g("button"),Pe=I("Autumn"),Me=w(),x=g("button"),ze=I("Coffee"),Ke=w(),K=g("div"),ie=g("div"),R=g("img"),He=w(),j=g("div"),ee=g("div"),de=g("label"),we=I(ke),We=w(),te=g("ul");for(let V=0;V<N.length;V+=1)N[V].c();Fe=w(),O&&O.c(),Le=w(),U&&U.c(),Ie=w(),q&&q.c(),Ge=w(),T&&T.c(),Je=w(),H.block.c(),this.h()},l(V){a=p(V,"DIV",{class:!0});var B=v(a);t=p(B,"DIV",{class:!0});var C=v(t);o=p(C,"A",{href:!0,class:!0});var Ee=v(o);u=D(Ee,"New World Leaderboards"),Ee.forEach(m),h=L(C),l=p(C,"DIV",{class:!0});var De=v(l);d=p(De,"DIV",{tabindex:!0,class:!0});var Xe=v(d);b=p(Xe,"SPAN",{});var Ye=v(b);c=D(Ye,"Theme"),Ye.forEach(m),Xe.forEach(m),f=L(De),i=p(De,"DIV",{class:!0});var Ze=v(i);r=p(Ze,"DIV",{class:!0});var A=v(r);_=p(A,"BUTTON",{class:!0,"data-set-theme":!0,"data-theme":!0});var xe=v(_);y=D(xe,"Default"),xe.forEach(m),k=L(A),S=p(A,"BUTTON",{class:!0,"data-set-theme":!0,"data-theme":!0});var et=v(S);z=D(et,"Light"),et.forEach(m),Q=L(A),W=p(A,"BUTTON",{class:!0,"data-set-theme":!0,"data-theme":!0});var tt=v(W);fe=D(tt,"Dark"),tt.forEach(m),be=L(A),F=p(A,"BUTTON",{class:!0,"data-set-theme":!0,"data-theme":!0});var at=v(F);me=D(at,"Pastel"),at.forEach(m),_e=L(A),G=p(A,"BUTTON",{class:!0,"data-set-theme":!0,"data-theme":!0});var lt=v(G);ve=D(lt,"Bumblebee"),lt.forEach(m),ge=L(A),J=p(A,"BUTTON",{class:!0,"data-set-theme":!0,"data-theme":!0});var rt=v(J);E=D(rt,"Lofi"),rt.forEach(m),ne=L(A),M=p(A,"BUTTON",{class:!0,"data-set-theme":!0,"data-theme":!0});var ot=v(M);pe=D(ot,"Emerald"),ot.forEach(m),Ve=L(A),$=p(A,"BUTTON",{class:!0,"data-set-theme":!0,"data-theme":!0});var st=v($);Be=D(st,"Cupcake"),st.forEach(m),Ne=L(A),X=p(A,"BUTTON",{class:!0,"data-set-theme":!0,"data-theme":!0});var nt=v(X);Oe=D(nt,"Halloween"),nt.forEach(m),Ue=L(A),Y=p(A,"BUTTON",{class:!0,"data-set-theme":!0,"data-theme":!0});var dt=v(Y);qe=D(dt,"Black"),dt.forEach(m),je=L(A),Z=p(A,"BUTTON",{class:!0,"data-set-theme":!0,"data-theme":!0});var it=v(Z);Pe=D(it,"Autumn"),it.forEach(m),Me=L(A),x=p(A,"BUTTON",{class:!0,"data-set-theme":!0,"data-theme":!0});var ct=v(x);ze=D(ct,"Coffee"),ct.forEach(m),A.forEach(m),Ze.forEach(m),De.forEach(m),C.forEach(m),Ke=L(B),K=p(B,"DIV",{class:!0});var he=v(K);ie=p(he,"DIV",{class:!0});var ut=v(ie);R=p(ut,"IMG",{src:!0,alt:!0,class:!0}),ut.forEach(m),He=L(he),j=p(he,"DIV",{class:!0});var ae=v(j);ee=p(ae,"DIV",{class:!0});var Se=v(ee);de=p(Se,"LABEL",{tabindex:!0,class:!0});var ht=v(de);we=D(ht,ke),ht.forEach(m),We=L(Se),te=p(Se,"UL",{tabindex:!0,class:!0});var ft=v(te);for(let Qe=0;Qe<N.length;Qe+=1)N[Qe].l(ft);ft.forEach(m),Se.forEach(m),Fe=L(ae),O&&O.l(ae),Le=L(ae),U&&U.l(ae),Ie=L(ae),q&&q.l(ae),ae.forEach(m),Ge=L(he),T&&T.l(he),he.forEach(m),Je=L(B),H.block.l(B),B.forEach(m),this.h()},h(){s(o,"href","./leaderboards"),s(o,"class","btn btn-ghost normal-case text-xl"),s(d,"tabindex","0"),s(d,"class","btn gap-1 btn-ghost"),s(_,"class","btn outline-base-content"),s(_,"data-set-theme",""),s(_,"data-theme",e[6]?"dark":"light"),s(S,"class","btn outline-base-content"),s(S,"data-set-theme","light"),s(S,"data-theme","light"),s(W,"class","btn outline-base-content"),s(W,"data-set-theme","dark"),s(W,"data-theme","dark"),s(F,"class","btn outline-base-content"),s(F,"data-set-theme","pastel"),s(F,"data-theme","pastel"),s(G,"class","btn outline-base-content"),s(G,"data-set-theme","bumblebee"),s(G,"data-theme","bumblebee"),s(J,"class","btn outline-base-content"),s(J,"data-set-theme","lofi"),s(J,"data-theme","lofi"),s(M,"class","btn outline-base-content"),s(M,"data-set-theme","emerald"),s(M,"data-theme","emerald"),s($,"class","btn outline-base-content"),s($,"data-set-theme","cupcake"),s($,"data-theme","cupcake"),s(X,"class","btn outline-base-content"),s(X,"data-set-theme","halloween"),s(X,"data-theme","halloween"),s(Y,"class","btn outline-base-content"),s(Y,"data-set-theme","black"),s(Y,"data-theme","black"),s(Z,"class","btn outline-base-content"),s(Z,"data-set-theme","autumn"),s(Z,"data-theme","autumn"),s(x,"class","btn outline-base-content"),s(x,"data-set-theme","coffee"),s(x,"data-theme","coffee"),s(r,"class","flex flex-col gap-2 min-w-fit w-36"),s(i,"class","dropdown-content bg-base-200 text-base-content rounded-t-box rounded-box max-h-96 overflow-y-auto shadow-2xl no-scrollbar justify-between p-4"),s(l,"class","dropdown dropdown-end"),s(t,"class","navbar bg-base-100 sticky top-0 z-50 justify-between"),bt(R.src,ye=`${vt}${e[7][e[1]||"Mutated Expeditions"]}`)||s(R,"src",ye),s(R,"alt",""),s(R,"class","object-cover object-top border-2 border-base-100 rounded-box bg-black"),s(ie,"class","flex place-content-center h-56 w-full place-self-stretch mt-4 border-2 p-2 border-base-100 rounded-box"),s(de,"tabindex","0"),s(de,"class","btn btn-xs md:btn-sm m-1"),s(te,"tabindex","0"),s(te,"class","dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 overflow-scroll no-scrollbar min-h-24 flex-nowrap"),s(ee,"class","dropdown"),s(j,"class","flex place-content-center gap-0 place-items-center mt-4 sticky top-0 z-50 bg-base-300 py-2"),s(K,"class","flex flex-col align-middle grow bg-base-300 min-w-fit px-4 h-full overflow-y-auto rounded-box no-scrollbar z-20"),s(a,"class","container flex flex-col mx-auto gap-4 h-screen overflow-y-hidden no-scrollbar")},m(V,B){P(V,a,B),n(a,t),n(t,o),n(o,u),n(t,h),n(t,l),n(l,d),n(d,b),n(b,c),n(l,f),n(l,i),n(i,r),n(r,_),n(_,y),n(r,k),n(r,S),n(S,z),n(r,Q),n(r,W),n(W,fe),n(r,be),n(r,F),n(F,me),n(r,_e),n(r,G),n(G,ve),n(r,ge),n(r,J),n(J,E),n(r,ne),n(r,M),n(M,pe),n(r,Ve),n(r,$),n($,Be),n(r,Ne),n(r,X),n(X,Oe),n(r,Ue),n(r,Y),n(Y,qe),n(r,je),n(r,Z),n(Z,Pe),n(r,Me),n(r,x),n(x,ze),n(a,Ke),n(a,K),n(K,ie),n(ie,R),n(K,He),n(K,j),n(j,ee),n(ee,de),n(de,we),n(ee,We),n(ee,te);for(let C=0;C<N.length;C+=1)N[C]&&N[C].m(te,null);n(j,Fe),O&&O.m(j,null),n(j,Le),U&&U.m(j,null),n(j,Ie),q&&q.m(j,null),n(K,Ge),T&&T.m(K,null),n(a,Je),H.block.m(a,H.anchor=null),H.mount=()=>a,H.anchor=null,ce=!0},p(V,B){if(e=V,(!ce||B[0]&2&&!bt(R.src,ye=`${vt}${e[7][e[1]||"Mutated Expeditions"]}`))&&s(R,"src",ye),(!ce||B[0]&2)&&ke!==(ke=(e[1]?e[1]:"Main Section")+"")&&oe(we,ke),B[0]&290){ue=Object.keys(e[5]);let C;for(C=0;C<ue.length;C+=1){const Ee=Et(e,ue,C);N[C]?N[C].p(Ee,B):(N[C]=yt(Ee),N[C].c(),N[C].m(te,null))}for(;C<N.length;C+=1)N[C].d(1);N.length=ue.length}e[1]?O?O.p(e,B):(O=wt(e),O.c(),O.m(j,Le)):O&&(O.d(1),O=null),e[1]&&e[0]?U?U.p(e,B):(U=It(e),U.c(),U.m(j,Ie)):U&&(U.d(1),U=null),e[1]&&e[0]&&e[2]&&e[3]&&e[3].length>1?q?q.p(e,B):(q=St(e),q.c(),q.m(j,null)):q&&(q.d(1),q=null),e[1]&&e[0]&&e[2]&&e[4]?T?(T.p(e,B),B[0]&23&&Ae(T,1)):(T=Tt(e),T.c(),Ae(T,1),T.m(K,null)):T&&(Wt(),Re(T,1,1,()=>{T=null}),Ut()),qt(H,e,B)},i(V){ce||(Ae(T),ce=!0)},o(V){Re(T),ce=!1},d(V){V&&m(a),Ce(N,V),O&&O.d(),U&&U.d(),q&&q.d(),T&&T.d(),H.block.d(),H.token=null,H=null}}}async function ta(){const e=await fetch("https://lb.jakel.rocks/users");if(e.status!==200)throw new Error("Unique users not found");return await e.json()}function aa(e,a,t){let o,u,h,l,d;jt(e,Ft,E=>t(9,d=E));let{$$slots:b={},$$scope:c}=a;const f=Gt,i=window.matchMedia("(prefers-color-scheme: dark)").matches;console.log(i);let r=[];const _={"Mutated Expeditions":"/lyshineui/images/leaderboards/leaderboard_cat_bg_expeditions.png","Faction War":"/lyshineui/images/leaderboards/leaderboard_cat_bg_faction_convenant.png","Vs. Environment":"/lyshineui/images/leaderboards/leaderboard_cat_bg_environment.png","Vs. Players":"/lyshineui/images/leaderboards/leaderboard_cat_bg_player.png","Trade Skills":"/lyshineui/images/leaderboards/leaderboard_cat_bg_trade.png"},y={firstlevelcategory:["category","subcategory","regions","leaderboardid"],category:["subcategory","regions","leaderboardid"],subcategory:["regions","leaderboardid"]};function k(E,ne){const M=new URLSearchParams(d.url.searchParams);y[E]&&y[E].forEach(pe=>M.delete(pe)),E==="subcategory"&&f[o][u][ne].length===1&&M.set("leaderboardid",f[o][u][ne][0].LeaderboardDefinitionId),M.set(E,ne),Jt(`${d.url.pathname}?${M}`)}Pt(()=>{$e.themeChange(!1)});const S=E=>E.LeaderboardDefinitionId===l,z=E=>E.LeaderboardDefinitionId===l,Q=E=>k("firstlevelcategory",E),W=E=>k("firstlevelcategory",E),fe=E=>k("category",E),be=E=>k("category",E),F=E=>k("subcategory",E),me=E=>k("subcategory",E),_e=E=>E.LeaderboardDefinitionId===l,G=E=>E.LeaderboardDefinitionId===l,ve=E=>E.LeaderboardDefinitionId===l,ge=E=>k("leaderboardid",E.LeaderboardDefinitionId),J=E=>k("leaderboardid",E.LeaderboardDefinitionId);return e.$$set=E=>{"$$scope"in E&&t(10,c=E.$$scope)},e.$$.update=()=>{e.$$.dirty[0]&512&&t(1,o=d.url.searchParams.get("firstlevelcategory")),e.$$.dirty[0]&512&&t(0,u=d.url.searchParams.get("category")),e.$$.dirty[0]&512&&t(2,h=d.url.searchParams.get("subcategory")),e.$$.dirty[0]&512&&d.url.searchParams.get("regions"),e.$$.dirty[0]&512&&t(4,l=d.url.searchParams.get("leaderboardid")),e.$$.dirty[0]&7&&o&&h&&u&&f[o][u]&&t(3,r=f[o][u][h])},[u,o,h,r,l,f,i,_,k,d,c,b,S,z,Q,W,fe,be,F,me,_e,G,ve,ge,J]}class na extends Vt{constructor(a){super(),Bt(this,a,aa,ea,Nt,{},null,[-1,-1])}}export{na as default};
