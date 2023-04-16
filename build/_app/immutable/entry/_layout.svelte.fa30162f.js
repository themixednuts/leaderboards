import{S as et,i as tt,s as at,k as v,C as Oe,a as I,q as M,l as p,m as g,D as Pe,h as b,c as D,r as N,n as m,b as q,E as h,u as ee,F as y,G as Ye,y as W,z as F,H as ut,A as G,g as A,d as V,f as It,I as Ze,B as H,J as Te,K as Dt,o as St,L as he,M as ze,N as Ct,O as At,P as Vt,Q as jt,v as qt}from"../chunks/index.a295b005.js";import{p as Bt}from"../chunks/stores.eccfb9c7.js";import{j as me,k as ft}from"../chunks/singletons.b7865bcb.js";import{l as Mt}from"../chunks/leaderboardmap.90637e4a.js";me.disable_scroll_handling;const Nt=me.goto;me.invalidate;me.invalidateAll;me.preload_data;me.preload_code;me.before_navigate;me.after_navigate;var xe={},Ut={get exports(){return xe},set exports(t){xe=t}};(function(t,e){function a(){var n=document.querySelector("[data-toggle-theme]"),c=n?n.getAttribute("data-key"):null;(function(f=localStorage.getItem(c||"theme")){localStorage.getItem(c||"theme")&&(document.documentElement.setAttribute("data-theme",f),n&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(o=>{o.classList.add(n.getAttribute("data-act-class"))}))})(),n&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(f=>{f.addEventListener("click",function(){var o=f.getAttribute("data-toggle-theme");if(o){var u=o.split(",");document.documentElement.getAttribute("data-theme")==u[0]?u.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem(c||"theme")):(document.documentElement.setAttribute("data-theme",u[1]),localStorage.setItem(c||"theme",u[1])):(document.documentElement.setAttribute("data-theme",u[0]),localStorage.setItem(c||"theme",u[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach(d=>{d.classList.toggle(this.getAttribute("data-act-class"))})})})}function l(){var n=document.querySelector("[data-set-theme='']"),c=n?n.getAttribute("data-key"):null;(function(f=localStorage.getItem(c||"theme")){if(f!=null&&f!="")if(localStorage.getItem(c||"theme")&&localStorage.getItem(c||"theme")!=""){document.documentElement.setAttribute("data-theme",f);var o=document.querySelector("[data-set-theme='"+f.toString()+"']");o&&([...document.querySelectorAll("[data-set-theme]")].forEach(u=>{u.classList.remove(u.getAttribute("data-act-class"))}),o.getAttribute("data-act-class")&&o.classList.add(o.getAttribute("data-act-class")))}else{var o=document.querySelector("[data-set-theme='']");o.getAttribute("data-act-class")&&o.classList.add(o.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(f=>{f.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem(c||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(o=>{o.classList.remove(o.getAttribute("data-act-class"))}),f.getAttribute("data-act-class")&&f.classList.add(f.getAttribute("data-act-class"))})})}function r(){var n=document.querySelector("select[data-choose-theme]"),c=n?n.getAttribute("data-key"):null;(function(f=localStorage.getItem(c||"theme")){if(localStorage.getItem(c||"theme")){document.documentElement.setAttribute("data-theme",f);var o=document.querySelector("select[data-choose-theme] [value='"+f.toString()+"']");o&&[...document.querySelectorAll("select[data-choose-theme] [value='"+f.toString()+"']")].forEach(u=>{u.selected=!0})}})(),n&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(f=>{f.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem(c||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem(c||"theme")+"']")].forEach(o=>{o.selected=!0})})})}function s(n=!0){n===!0?document.addEventListener("DOMContentLoaded",function(c){a(),r(),l()}):(a(),r(),l())}t.exports={themeChange:s}})(Ut);function Ot(t){let e,a,l,r,s,n=(t[0]?t[0].charAt(0).toUpperCase()+t[0].slice(1):"Default")+"",c,f;return{c(){e=v("button"),a=v("div"),l=Oe("svg"),r=Oe("path"),s=I(),c=M(n),this.h()},l(o){e=p(o,"BUTTON",{class:!0,"data-set-theme":!0,"data-theme":!0,"data-act-class":!0});var u=g(e);a=p(u,"DIV",{class:!0});var d=g(a);l=Pe(d,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,class:!0});var i=g(l);r=Pe(i,"path",{d:!0}),g(r).forEach(b),i.forEach(b),s=D(d),c=N(d,n),d.forEach(b),u.forEach(b),this.h()},h(){m(r,"d","M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"),m(l,"xmlns","http://www.w3.org/2000/svg"),m(l,"width","16"),m(l,"height","16"),m(l,"viewBox","0 0 24 24"),m(l,"fill","currentColor"),m(l,"class","w-3 h-3 invisible"),m(a,"class","flex w-full gap-6"),m(e,"class","btn outline-base-content"),m(e,"data-set-theme",t[0]),m(e,"data-theme",f=t[0]?t[0]:t[1]?"dark":"light"),m(e,"data-act-class","[&_svg]:visible")},m(o,u){q(o,e,u),h(e,a),h(a,l),h(l,r),h(a,s),h(a,c)},p(o,[u]){u&1&&n!==(n=(o[0]?o[0].charAt(0).toUpperCase()+o[0].slice(1):"Default")+"")&&ee(c,n),u&1&&m(e,"data-set-theme",o[0]),u&1&&f!==(f=o[0]?o[0]:o[1]?"dark":"light")&&m(e,"data-theme",f)},i:y,o:y,d(o){o&&b(e)}}}function Pt(t,e,a){let{theme:l}=e;const r=window.matchMedia("(prefers-color-scheme: dark)").matches;return t.$$set=s=>{"theme"in s&&a(0,l=s.theme)},[l,r]}class Y extends et{constructor(e){super(),tt(this,e,Pt,Ot,at,{theme:0})}}async function Tt(){const t=await fetch("https://lb.jakel.rocks/users");if(t.status!==200)throw new Error("Unique users not found");return await t.json()}async function zt(){const t=await fetch("https://lb.jakel.rocks/legendaries/s1");if(t.status!==200)throw new Error("Legendary data not found");return await t.json()}async function Kt(){const t=await fetch("https://lb.jakel.rocks/breaches/s1");if(t.status!==200)throw new Error("Breaches data not found");return await t.json()}function Wt(t){let e,a;return{c(){e=v("span"),a=M("No Data")},l(l){e=p(l,"SPAN",{});var r=g(e);a=N(r,"No Data"),r.forEach(b)},m(l,r){q(l,e,r),h(e,a)},p:y,d(l){l&&b(e)}}}function Ft(t){let e;return{c(){e=M(t[1])},l(a){e=N(a,t[1])},m(a,l){q(a,e,l)},p(a,l){l&2&&ee(e,a[1])},d(a){a&&b(e)}}}function Gt(t){let e,a,l,r,s;function n(o,u){return o[1]?Ft:Wt}let c=n(t),f=c(t);return{c(){e=v("div"),a=v("div"),l=M(t[0]),r=I(),s=v("div"),f.c(),this.h()},l(o){e=p(o,"DIV",{class:!0});var u=g(e);a=p(u,"DIV",{class:!0});var d=g(a);l=N(d,t[0]),d.forEach(b),r=D(u),s=p(u,"DIV",{class:!0});var i=g(s);f.l(i),i.forEach(b),u.forEach(b),this.h()},h(){m(a,"class","stat-title text-sm md:text-base"),m(s,"class","stat-value text-secondary text-base md:text-4xl"),m(e,"class","stat place-items-center shrink")},m(o,u){q(o,e,u),h(e,a),h(a,l),h(e,r),h(e,s),f.m(s,null)},p(o,[u]){u&1&&ee(l,o[0]),c===(c=n(o))&&f?f.p(o,u):(f.d(1),f=c(o),f&&(f.c(),f.m(s,null)))},i:y,o:y,d(o){o&&b(e),f.d()}}}function Ht(t,e,a){let{title:l}=e,{value:r}=e;return t.$$set=s=>{"title"in s&&a(0,l=s.title),"value"in s&&a(1,r=s.value)},[l,r]}class lt extends et{constructor(e){super(),tt(this,e,Ht,Gt,at,{title:0,value:1})}}function ht(t,e,a){const l=t.slice();return l[30]=e[a],l}function mt(t,e,a){const l=t.slice();return l[30]=e[a],l}function bt(t,e,a){const l=t.slice();return l[30]=e[a],l}function _t(t,e,a){const l=t.slice();return l[30]=e[a],l}function gt(t){let e,a,l=t[30]+"",r,s,n,c,f;function o(){return t[13](t[30])}function u(){return t[14](t[30])}return{c(){e=v("li"),a=v("div"),r=M(l),n=I(),this.h()},l(d){e=p(d,"LI",{});var i=g(e);a=p(i,"DIV",{class:!0});var _=g(a);r=N(_,l),_.forEach(b),n=D(i),i.forEach(b),this.h()},h(){m(a,"class",s=t[1]===t[30]?"active":"")},m(d,i){q(d,e,i),h(e,a),h(a,r),h(e,n),c||(f=[he(a,"click",o),he(a,"keypress",u)],c=!0)},p(d,i){t=d,i[0]&2&&s!==(s=t[1]===t[30]?"active":"")&&m(a,"class",s)},d(d){d&&b(e),c=!1,ze(f)}}}function vt(t){let e,a,l=(t[0]?t[0]:"Category")+"",r,s,n,c=Object.keys(t[5][t[1]]),f=[];for(let o=0;o<c.length;o+=1)f[o]=pt(bt(t,c,o));return{c(){e=v("div"),a=v("label"),r=M(l),s=I(),n=v("ul");for(let o=0;o<f.length;o+=1)f[o].c();this.h()},l(o){e=p(o,"DIV",{class:!0});var u=g(e);a=p(u,"LABEL",{tabindex:!0,class:!0});var d=g(a);r=N(d,l),d.forEach(b),s=D(u),n=p(u,"UL",{tabindex:!0,class:!0});var i=g(n);for(let _=0;_<f.length;_+=1)f[_].l(i);i.forEach(b),u.forEach(b),this.h()},h(){m(a,"tabindex","0"),m(a,"class","btn btn-xs md:btn-sm m-1"),m(n,"tabindex","0"),m(n,"class","dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 left-1/2 -translate-x-1/2 overflow-auto no-scrollbar min-h-24 flex-nowrap"),m(e,"class","dropdown")},m(o,u){q(o,e,u),h(e,a),h(a,r),h(e,s),h(e,n);for(let d=0;d<f.length;d+=1)f[d]&&f[d].m(n,null)},p(o,u){if(u[0]&1&&l!==(l=(o[0]?o[0]:"Category")+"")&&ee(r,l),u[0]&163){c=Object.keys(o[5][o[1]]);let d;for(d=0;d<c.length;d+=1){const i=bt(o,c,d);f[d]?f[d].p(i,u):(f[d]=pt(i),f[d].c(),f[d].m(n,null))}for(;d<f.length;d+=1)f[d].d(1);f.length=c.length}},d(o){o&&b(e),Te(f,o)}}}function pt(t){let e,a,l=t[30]+"",r,s,n,c,f;function o(){return t[15](t[30])}function u(){return t[16](t[30])}return{c(){e=v("li"),a=v("div"),r=M(l),n=I(),this.h()},l(d){e=p(d,"LI",{});var i=g(e);a=p(i,"DIV",{class:!0});var _=g(a);r=N(_,l),_.forEach(b),n=D(i),i.forEach(b),this.h()},h(){m(a,"class",s=t[0]===t[30]?"active":"")},m(d,i){q(d,e,i),h(e,a),h(a,r),h(e,n),c||(f=[he(a,"click",o),he(a,"keypress",u)],c=!0)},p(d,i){t=d,i[0]&2&&l!==(l=t[30]+"")&&ee(r,l),i[0]&3&&s!==(s=t[0]===t[30]?"active":"")&&m(a,"class",s)},d(d){d&&b(e),c=!1,ze(f)}}}function kt(t){let e,a,l=(t[2]?t[2]:"Sub Category")+"",r,s,n,c,f=Object.keys(t[5][t[1]][t[0]]),o=[];for(let u=0;u<f.length;u+=1)o[u]=$t(mt(t,f,u));return{c(){e=v("div"),a=v("label"),r=M(l),s=I(),n=v("ul");for(let u=0;u<o.length;u+=1)o[u].c();this.h()},l(u){e=p(u,"DIV",{class:!0});var d=g(e);a=p(d,"LABEL",{tabindex:!0,class:!0});var i=g(a);r=N(i,l),i.forEach(b),s=D(d),n=p(d,"UL",{tabindex:!0,class:!0});var _=g(n);for(let w=0;w<o.length;w+=1)o[w].l(_);_.forEach(b),d.forEach(b),this.h()},h(){m(a,"tabindex","0"),m(a,"class","btn btn-xs md:btn-sm"),m(n,"tabindex","0"),m(n,"class",c="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 overflow-auto no-scrollbar min-h-24 flex-nowrap "+(t[2]?"left-1/2 -translate-x-1/2":"dropdown-end")),m(e,"class","dropdown dropdown-end")},m(u,d){q(u,e,d),h(e,a),h(a,r),h(e,s),h(e,n);for(let i=0;i<o.length;i+=1)o[i]&&o[i].m(n,null)},p(u,d){if(d[0]&4&&l!==(l=(u[2]?u[2]:"Sub Category")+"")&&ee(r,l),d[0]&167){f=Object.keys(u[5][u[1]][u[0]]);let i;for(i=0;i<f.length;i+=1){const _=mt(u,f,i);o[i]?o[i].p(_,d):(o[i]=$t(_),o[i].c(),o[i].m(n,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=f.length}d[0]&4&&c!==(c="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 overflow-auto no-scrollbar min-h-24 flex-nowrap "+(u[2]?"left-1/2 -translate-x-1/2":"dropdown-end"))&&m(n,"class",c)},d(u){u&&b(e),Te(o,u)}}}function $t(t){let e,a,l=t[30]+"",r,s,n,c,f;function o(){return t[17](t[30])}function u(){return t[18](t[30])}return{c(){e=v("li"),a=v("div"),r=M(l),n=I(),this.h()},l(d){e=p(d,"LI",{});var i=g(e);a=p(i,"DIV",{class:!0});var _=g(a);r=N(_,l),_.forEach(b),n=D(i),i.forEach(b),this.h()},h(){m(a,"class",s=t[2]===t[30]?"active":"")},m(d,i){q(d,e,i),h(e,a),h(a,r),h(e,n),c||(f=[he(a,"click",o),he(a,"keypress",u)],c=!0)},p(d,i){t=d,i[0]&3&&l!==(l=t[30]+"")&&ee(r,l),i[0]&7&&s!==(s=t[2]===t[30]?"active":"")&&m(a,"class",s)},d(d){d&&b(e),c=!1,ze(f)}}}function wt(t){let e,a,l,r,s,n,c;function f(_,w){var k,B;return w[0]&28&&(r=null),w[0]&28&&(s=null),r==null&&(r=!!(_[4]&&((k=_[3].find(_[11]))==null?void 0:k.DisplayName)===_[2])),r?Rt:(s==null&&(s=!!(_[4]&&((B=_[3].find(_[12]))==null?void 0:B.DisplayName)!==_[2])),s?Qt:Jt)}let o=f(t,[-1,-1]),u=o(t),d=Object.values(t[3]),i=[];for(let _=0;_<d.length;_+=1)i[_]=yt(ht(t,d,_));return{c(){e=v("div"),a=v("label"),l=v("div"),u.c(),n=I(),c=v("ul");for(let _=0;_<i.length;_+=1)i[_].c();this.h()},l(_){e=p(_,"DIV",{class:!0});var w=g(e);a=p(w,"LABEL",{tabindex:!0,class:!0});var k=g(a);l=p(k,"DIV",{class:!0});var B=g(l);u.l(B),B.forEach(b),k.forEach(b),n=D(w),c=p(w,"UL",{tabindex:!0,class:!0});var z=g(c);for(let te=0;te<i.length;te+=1)i[te].l(z);z.forEach(b),w.forEach(b),this.h()},h(){m(l,"class","flex flex-col"),m(a,"tabindex","0"),m(a,"class","btn btn-xs md:btn-sm m-1"),m(c,"tabindex","0"),m(c,"class","dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 dropdown-end overflow-auto no-scrollbar min-h-24 flex-nowrap"),m(e,"class","dropdown dropdown-end relative")},m(_,w){q(_,e,w),h(e,a),h(a,l),u.m(l,null),h(e,n),h(e,c);for(let k=0;k<i.length;k+=1)i[k]&&i[k].m(c,null)},p(_,w){if(o===(o=f(_,w))&&u?u.p(_,w):(u.d(1),u=o(_),u&&(u.c(),u.m(l,null))),w[0]&152){d=Object.values(_[3]);let k;for(k=0;k<d.length;k+=1){const B=ht(_,d,k);i[k]?i[k].p(B,w):(i[k]=yt(B),i[k].c(),i[k].m(c,null))}for(;k<i.length;k+=1)i[k].d(1);i.length=d.length}},d(_){_&&b(e),u.d(),Te(i,_)}}}function Jt(t){let e;return{c(){e=M("Leaderboards")},l(a){e=N(a,"Leaderboards")},m(a,l){q(a,e,l)},p:y,d(a){a&&b(e)}}}function Qt(t){var l;let e=((l=t[3].find(t[21]))==null?void 0:l.DisplayName)+"",a;return{c(){a=M(e)},l(r){a=N(r,e)},m(r,s){q(r,a,s)},p(r,s){var n;s[0]&24&&e!==(e=((n=r[3].find(r[21]))==null?void 0:n.DisplayName)+"")&&ee(a,e)},d(r){r&&b(a)}}}function Rt(t){var r,s;let e,a=(r=t[3].find(t[19]))!=null&&r.CharacterLeaderboard?"Character":(s=t[3].find(t[20]))!=null&&s.CompanyLeaderboard?"Company":"",l;return{c(){e=v("div"),l=M(a),this.h()},l(n){e=p(n,"DIV",{class:!0});var c=g(e);l=N(c,a),c.forEach(b),this.h()},h(){m(e,"class","")},m(n,c){q(n,e,c),h(e,l)},p(n,c){var f,o;c[0]&24&&a!==(a=(f=n[3].find(n[19]))!=null&&f.CharacterLeaderboard?"Character":(o=n[3].find(n[20]))!=null&&o.CompanyLeaderboard?"Company":"")&&ee(l,a)},d(n){n&&b(e)}}}function Et(t){let e,a,l,r;return{c(){e=v("div"),a=Oe("svg"),l=Oe("path"),this.h()},l(s){e=p(s,"DIV",{class:!0,"data-tip":!0});var n=g(e);a=Pe(n,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var c=g(a);l=Pe(c,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),g(l).forEach(b),c.forEach(b),n.forEach(b),this.h()},h(){m(l,"stroke-linecap","round"),m(l,"stroke-linejoin","round"),m(l,"stroke-width","2"),m(l,"d","M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),m(a,"xmlns","http://www.w3.org/2000/svg"),m(a,"fill","none"),m(a,"viewBox","0 0 24 24"),m(a,"class","w-4 h-4 stroke-current"),m(e,"class","tooltip tooltip-info px-0"),m(e,"data-tip",r=t[30].CharacterLeaderboard?"Character":t[30].CompanyLeaderboard?"Company":"")},m(s,n){q(s,e,n),h(e,a),h(a,l)},p(s,n){n[0]&8&&r!==(r=s[30].CharacterLeaderboard?"Character":s[30].CompanyLeaderboard?"Company":"")&&m(e,"data-tip",r)},d(s){s&&b(e)}}}function yt(t){let e,a,l,r=t[30].DisplayName+"",s,n,c,f,o,u,d=(t[30].CharacterLeaderboard||t[30].CompanyLeaderboard)&&Et(t);function i(){return t[22](t[30])}function _(){return t[23](t[30])}return{c(){e=v("li"),a=v("div"),l=v("div"),s=M(r),n=I(),d&&d.c(),f=I(),this.h()},l(w){e=p(w,"LI",{});var k=g(e);a=p(k,"DIV",{class:!0});var B=g(a);l=p(B,"DIV",{class:!0});var z=g(l);s=N(z,r),z.forEach(b),n=D(B),d&&d.l(B),B.forEach(b),f=D(k),k.forEach(b),this.h()},h(){m(l,"class","flex"),m(a,"class",c=t[4]===t[30].LeaderboardDefinitionId?"active":"")},m(w,k){q(w,e,k),h(e,a),h(a,l),h(l,s),h(a,n),d&&d.m(a,null),h(e,f),o||(u=[he(a,"click",i),he(a,"keypress",_)],o=!0)},p(w,k){t=w,k[0]&8&&r!==(r=t[30].DisplayName+"")&&ee(s,r),t[30].CharacterLeaderboard||t[30].CompanyLeaderboard?d?d.p(t,k):(d=Et(t),d.c(),d.m(a,null)):d&&(d.d(1),d=null),k[0]&24&&c!==(c=t[4]===t[30].LeaderboardDefinitionId?"active":"")&&m(a,"class",c)},d(w){w&&b(e),d&&d.d(),o=!1,ze(u)}}}function Lt(t){let e,a;const l=t[10].default,r=Ct(l,t,t[9],null);return{c(){e=v("div"),r&&r.c(),this.h()},l(s){e=p(s,"DIV",{class:!0});var n=g(e);r&&r.l(n),n.forEach(b),this.h()},h(){m(e,"class","border-2 border-base-100 rounded-box p-2 my-2 sticky top-52 min-h-fit")},m(s,n){q(s,e,n),r&&r.m(e,null),a=!0},p(s,n){r&&r.p&&(!a||n[0]&512)&&At(r,l,s,s[9],a?jt(l,s[9],n,null):Vt(s[9]),null)},i(s){a||(A(r,s),a=!0)},o(s){V(r,s),a=!1},d(s){s&&b(e),r&&r.d(s)}}}function Xt(t){return{c:y,l:y,m:y,p:y,i:y,o:y,d:y}}function Yt(t){let e,a;return e=new lt({props:{title:"Unique Characters",value:t[29].data[0].count}}),{c(){W(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,r){G(e,l,r),a=!0},p:y,i(l){a||(A(e.$$.fragment,l),a=!0)},o(l){V(e.$$.fragment,l),a=!1},d(l){H(e,l)}}}function Zt(t){let e,a,l;return{c(){e=v("div"),a=v("button"),l=M("Loading"),this.h()},l(r){e=p(r,"DIV",{class:!0});var s=g(e);a=p(s,"BUTTON",{class:!0});var n=g(a);l=N(n,"Loading"),n.forEach(b),s.forEach(b),this.h()},h(){m(a,"class","btn btn-xs loading"),m(e,"class","stat place-items-center")},m(r,s){q(r,e,s),h(e,a),h(a,l)},p:y,i:y,o:y,d(r){r&&b(e)}}}function xt(t){return{c:y,l:y,m:y,p:y,i:y,o:y,d:y}}function ea(t){let e,a;return e=new lt({props:{title:"Max Legendaries Crafted",value:t[28].data[0].count}}),{c(){W(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,r){G(e,l,r),a=!0},p:y,i(l){a||(A(e.$$.fragment,l),a=!0)},o(l){V(e.$$.fragment,l),a=!1},d(l){H(e,l)}}}function ta(t){let e,a,l;return{c(){e=v("div"),a=v("button"),l=M("Loading"),this.h()},l(r){e=p(r,"DIV",{class:!0});var s=g(e);a=p(s,"BUTTON",{class:!0});var n=g(a);l=N(n,"Loading"),n.forEach(b),s.forEach(b),this.h()},h(){m(a,"class","btn btn-xs loading"),m(e,"class","stat place-items-center")},m(r,s){q(r,e,s),h(e,a),h(a,l)},p:y,i:y,o:y,d(r){r&&b(e)}}}function aa(t){return{c:y,l:y,m:y,p:y,i:y,o:y,d:y}}function la(t){let e,a;return e=new lt({props:{title:"Corrupted Breaches Done",value:t[27].data[0].count}}),{c(){W(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,r){G(e,l,r),a=!0},p:y,i(l){a||(A(e.$$.fragment,l),a=!0)},o(l){V(e.$$.fragment,l),a=!1},d(l){H(e,l)}}}function ra(t){let e,a,l;return{c(){e=v("div"),a=v("button"),l=M("Loading"),this.h()},l(r){e=p(r,"DIV",{class:!0});var s=g(e);a=p(s,"BUTTON",{class:!0});var n=g(a);l=N(n,"Loading"),n.forEach(b),s.forEach(b),this.h()},h(){m(a,"class","btn btn-xs loading"),m(e,"class","stat place-items-center")},m(r,s){q(r,e,s),h(e,a),h(a,l)},p:y,i:y,o:y,d(r){r&&b(e)}}}function na(t){let e,a,l,r,s,n,c,f,o,u,d,i,_,w,k,B,z,te,ae,ye,le,Le,re,Ie,ne,De,oe,E,Z,ce,se,Ke,be,We,_e,Fe,x,ve,ie,Ae,Ge,K,de,ge,Se=(t[1]?t[1]:"Main Section")+"",Ve,He,ue,Je,je,qe,Qe,Re,pe,J,Be,Me,ke;_=new Y({props:{theme:""}}),k=new Y({props:{theme:"light"}}),z=new Y({props:{theme:"dark"}}),ae=new Y({props:{theme:"pastel"}}),le=new Y({props:{theme:"bumblebee"}}),re=new Y({props:{theme:"lofi"}}),ne=new Y({props:{theme:"emerald"}}),oe=new Y({props:{theme:"cupcake"}}),Z=new Y({props:{theme:"halloween"}}),se=new Y({props:{theme:"black"}}),be=new Y({props:{theme:"autumn"}}),_e=new Y({props:{theme:"coffee"}});let $e=Object.keys(t[5]),U=[];for(let $=0;$<$e.length;$+=1)U[$]=gt(_t(t,$e,$));let O=t[1]&&vt(t),P=t[1]&&t[0]&&kt(t),T=t[1]&&t[0]&&t[2]&&t[3]&&t[3].length>1&&wt(t),j=t[1]&&t[0]&&t[2]&&t[4]&&Lt(t),Q={ctx:t,current:null,token:null,hasCatch:!1,pending:Zt,then:Yt,catch:Xt,value:29,blocks:[,,,]};Ye(Tt(),Q);let R={ctx:t,current:null,token:null,hasCatch:!1,pending:ta,then:ea,catch:xt,value:28,blocks:[,,,]};Ye(zt(),R);let X={ctx:t,current:null,token:null,hasCatch:!1,pending:ra,then:la,catch:aa,value:27,blocks:[,,,]};return Ye(Kt(),X),{c(){e=v("div"),a=v("div"),l=v("a"),r=M("New World Leaderboards"),s=I(),n=v("div"),c=v("div"),f=v("span"),o=M("Theme"),u=I(),d=v("div"),i=v("div"),W(_.$$.fragment),w=I(),W(k.$$.fragment),B=I(),W(z.$$.fragment),te=I(),W(ae.$$.fragment),ye=I(),W(le.$$.fragment),Le=I(),W(re.$$.fragment),Ie=I(),W(ne.$$.fragment),De=I(),W(oe.$$.fragment),E=I(),W(Z.$$.fragment),ce=I(),W(se.$$.fragment),Ke=I(),W(be.$$.fragment),We=I(),W(_e.$$.fragment),Fe=I(),x=v("div"),ve=v("div"),ie=v("img"),Ge=I(),K=v("div"),de=v("div"),ge=v("label"),Ve=M(Se),He=I(),ue=v("ul");for(let $=0;$<U.length;$+=1)U[$].c();Je=I(),O&&O.c(),je=I(),P&&P.c(),qe=I(),T&&T.c(),Qe=I(),j&&j.c(),Re=I(),pe=v("div"),J=v("div"),Q.block.c(),Be=I(),R.block.c(),Me=I(),X.block.c(),this.h()},l($){e=p($,"DIV",{class:!0});var L=g(e);a=p(L,"DIV",{class:!0});var S=g(a);l=p(S,"A",{href:!0,class:!0});var Ce=g(l);r=N(Ce,"New World Leaderboards"),Ce.forEach(b),s=D(S),n=p(S,"DIV",{class:!0});var Ne=g(n);c=p(Ne,"DIV",{tabindex:!0,class:!0});var rt=g(c);f=p(rt,"SPAN",{});var nt=g(f);o=N(nt,"Theme"),nt.forEach(b),rt.forEach(b),u=D(Ne),d=p(Ne,"DIV",{class:!0});var ot=g(d);i=p(ot,"DIV",{class:!0});var C=g(i);F(_.$$.fragment,C),w=D(C),F(k.$$.fragment,C),B=D(C),F(z.$$.fragment,C),te=D(C),F(ae.$$.fragment,C),ye=D(C),F(le.$$.fragment,C),Le=D(C),F(re.$$.fragment,C),Ie=D(C),F(ne.$$.fragment,C),De=D(C),F(oe.$$.fragment,C),E=D(C),F(Z.$$.fragment,C),ce=D(C),F(se.$$.fragment,C),Ke=D(C),F(be.$$.fragment,C),We=D(C),F(_e.$$.fragment,C),C.forEach(b),ot.forEach(b),Ne.forEach(b),S.forEach(b),Fe=D(L),x=p(L,"DIV",{class:!0});var we=g(x);ve=p(we,"DIV",{class:!0});var st=g(ve);ie=p(st,"IMG",{src:!0,alt:!0,class:!0}),st.forEach(b),Ge=D(we),K=p(we,"DIV",{class:!0});var fe=g(K);de=p(fe,"DIV",{class:!0});var Ue=g(de);ge=p(Ue,"LABEL",{tabindex:!0,class:!0});var it=g(ge);Ve=N(it,Se),it.forEach(b),He=D(Ue),ue=p(Ue,"UL",{tabindex:!0,class:!0});var ct=g(ue);for(let Xe=0;Xe<U.length;Xe+=1)U[Xe].l(ct);ct.forEach(b),Ue.forEach(b),Je=D(fe),O&&O.l(fe),je=D(fe),P&&P.l(fe),qe=D(fe),T&&T.l(fe),fe.forEach(b),Qe=D(we),j&&j.l(we),we.forEach(b),Re=D(L),pe=p(L,"DIV",{class:!0});var dt=g(pe);J=p(dt,"DIV",{class:!0});var Ee=g(J);Q.block.l(Ee),Be=D(Ee),R.block.l(Ee),Me=D(Ee),X.block.l(Ee),Ee.forEach(b),dt.forEach(b),L.forEach(b),this.h()},h(){m(l,"href","./leaderboards"),m(l,"class","btn btn-ghost normal-case text-xl"),m(c,"tabindex","0"),m(c,"class","btn gap-1 btn-ghost"),m(i,"class","flex flex-col gap-2 min-w-fit w-36"),m(d,"class","dropdown-content bg-base-200 text-base-content rounded-t-box rounded-box max-h-96 overflow-y-auto shadow-2xl no-scrollbar justify-between p-4 pl-2"),m(n,"class","dropdown dropdown-end"),m(a,"class","navbar bg-base-100 sticky top-0 z-50 justify-between"),ut(ie.src,Ae=`${ft}${t[6][t[1]||"Mutated Expeditions"]}`)||m(ie,"src",Ae),m(ie,"alt",""),m(ie,"class","object-cover object-top border-2 border-base-100 rounded-box bg-black"),m(ve,"class","flex place-content-center h-56 w-full place-self-stretch mt-4 border-2 p-2 border-base-100 rounded-box"),m(ge,"tabindex","0"),m(ge,"class","btn btn-xs md:btn-sm m-1"),m(ue,"tabindex","0"),m(ue,"class","dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 overflow-scroll no-scrollbar min-h-24 flex-nowrap"),m(de,"class","dropdown"),m(K,"class","flex place-content-center gap-0 place-items-center mt-4 sticky top-0 z-50 bg-base-300 py-2"),m(x,"class","flex flex-col align-middle grow bg-base-300 min-w-fit px-4 h-full overflow-y-auto rounded-box no-scrollbar z-20"),m(J,"class","stats stats-vertical md:stats-horizontal shadow h-fit mb-2 overflow-auto no-scrollbar"),m(pe,"class","flex place-content-center"),m(e,"class","container flex flex-col mx-auto gap-4 h-screen overflow-y-hidden no-scrollbar")},m($,L){q($,e,L),h(e,a),h(a,l),h(l,r),h(a,s),h(a,n),h(n,c),h(c,f),h(f,o),h(n,u),h(n,d),h(d,i),G(_,i,null),h(i,w),G(k,i,null),h(i,B),G(z,i,null),h(i,te),G(ae,i,null),h(i,ye),G(le,i,null),h(i,Le),G(re,i,null),h(i,Ie),G(ne,i,null),h(i,De),G(oe,i,null),h(i,E),G(Z,i,null),h(i,ce),G(se,i,null),h(i,Ke),G(be,i,null),h(i,We),G(_e,i,null),h(e,Fe),h(e,x),h(x,ve),h(ve,ie),h(x,Ge),h(x,K),h(K,de),h(de,ge),h(ge,Ve),h(de,He),h(de,ue);for(let S=0;S<U.length;S+=1)U[S]&&U[S].m(ue,null);h(K,Je),O&&O.m(K,null),h(K,je),P&&P.m(K,null),h(K,qe),T&&T.m(K,null),h(x,Qe),j&&j.m(x,null),h(e,Re),h(e,pe),h(pe,J),Q.block.m(J,Q.anchor=null),Q.mount=()=>J,Q.anchor=Be,h(J,Be),R.block.m(J,R.anchor=null),R.mount=()=>J,R.anchor=Me,h(J,Me),X.block.m(J,X.anchor=null),X.mount=()=>J,X.anchor=null,ke=!0},p($,L){if(t=$,(!ke||L[0]&2&&!ut(ie.src,Ae=`${ft}${t[6][t[1]||"Mutated Expeditions"]}`))&&m(ie,"src",Ae),(!ke||L[0]&2)&&Se!==(Se=(t[1]?t[1]:"Main Section")+"")&&ee(Ve,Se),L[0]&162){$e=Object.keys(t[5]);let S;for(S=0;S<$e.length;S+=1){const Ce=_t(t,$e,S);U[S]?U[S].p(Ce,L):(U[S]=gt(Ce),U[S].c(),U[S].m(ue,null))}for(;S<U.length;S+=1)U[S].d(1);U.length=$e.length}t[1]?O?O.p(t,L):(O=vt(t),O.c(),O.m(K,je)):O&&(O.d(1),O=null),t[1]&&t[0]?P?P.p(t,L):(P=kt(t),P.c(),P.m(K,qe)):P&&(P.d(1),P=null),t[1]&&t[0]&&t[2]&&t[3]&&t[3].length>1?T?T.p(t,L):(T=wt(t),T.c(),T.m(K,null)):T&&(T.d(1),T=null),t[1]&&t[0]&&t[2]&&t[4]?j?(j.p(t,L),L[0]&23&&A(j,1)):(j=Lt(t),j.c(),A(j,1),j.m(x,null)):j&&(qt(),V(j,1,1,()=>{j=null}),It()),Ze(Q,t,L),Ze(R,t,L),Ze(X,t,L)},i($){ke||(A(_.$$.fragment,$),A(k.$$.fragment,$),A(z.$$.fragment,$),A(ae.$$.fragment,$),A(le.$$.fragment,$),A(re.$$.fragment,$),A(ne.$$.fragment,$),A(oe.$$.fragment,$),A(Z.$$.fragment,$),A(se.$$.fragment,$),A(be.$$.fragment,$),A(_e.$$.fragment,$),A(j),A(Q.block),A(R.block),A(X.block),ke=!0)},o($){V(_.$$.fragment,$),V(k.$$.fragment,$),V(z.$$.fragment,$),V(ae.$$.fragment,$),V(le.$$.fragment,$),V(re.$$.fragment,$),V(ne.$$.fragment,$),V(oe.$$.fragment,$),V(Z.$$.fragment,$),V(se.$$.fragment,$),V(be.$$.fragment,$),V(_e.$$.fragment,$),V(j);for(let L=0;L<3;L+=1){const S=Q.blocks[L];V(S)}for(let L=0;L<3;L+=1){const S=R.blocks[L];V(S)}for(let L=0;L<3;L+=1){const S=X.blocks[L];V(S)}ke=!1},d($){$&&b(e),H(_),H(k),H(z),H(ae),H(le),H(re),H(ne),H(oe),H(Z),H(se),H(be),H(_e),Te(U,$),O&&O.d(),P&&P.d(),T&&T.d(),j&&j.d(),Q.block.d(),Q.token=null,Q=null,R.block.d(),R.token=null,R=null,X.block.d(),X.token=null,X=null}}}function oa(t,e,a){let l,r,s,n,c;Dt(t,Bt,E=>a(8,c=E));let{$$slots:f={},$$scope:o}=e;const u=Mt;window.matchMedia("(prefers-color-scheme: dark)").matches;let d=[];const i={"Mutated Expeditions":"/lyshineui/images/leaderboards/leaderboard_cat_bg_expeditions.png","Faction War":"/lyshineui/images/leaderboards/leaderboard_cat_bg_faction_convenant.png","Vs. Environment":"/lyshineui/images/leaderboards/leaderboard_cat_bg_environment.png","Vs. Players":"/lyshineui/images/leaderboards/leaderboard_cat_bg_player.png","Trade Skills":"/lyshineui/images/leaderboards/leaderboard_cat_bg_trade.png"},_={firstlevelcategory:["category","subcategory","regions","leaderboardid"],category:["subcategory","regions","leaderboardid"],subcategory:["regions","leaderboardid"]};function w(E,Z){const ce=new URLSearchParams(c.url.searchParams);_[E]&&_[E].forEach(se=>ce.delete(se)),E==="subcategory"&&u[l][r][Z].length===1&&ce.set("leaderboardid",u[l][r][Z][0].LeaderboardDefinitionId),ce.set(E,Z),Nt(`${c.url.pathname}?${ce}`)}St(()=>{xe.themeChange(!1)});const k=E=>E.LeaderboardDefinitionId===n,B=E=>E.LeaderboardDefinitionId===n,z=E=>w("firstlevelcategory",E),te=E=>w("firstlevelcategory",E),ae=E=>w("category",E),ye=E=>w("category",E),le=E=>w("subcategory",E),Le=E=>w("subcategory",E),re=E=>E.LeaderboardDefinitionId===n,Ie=E=>E.LeaderboardDefinitionId===n,ne=E=>E.LeaderboardDefinitionId===n,De=E=>w("leaderboardid",E.LeaderboardDefinitionId),oe=E=>w("leaderboardid",E.LeaderboardDefinitionId);return t.$$set=E=>{"$$scope"in E&&a(9,o=E.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&256&&a(1,l=c.url.searchParams.get("firstlevelcategory")),t.$$.dirty[0]&256&&a(0,r=c.url.searchParams.get("category")),t.$$.dirty[0]&256&&a(2,s=c.url.searchParams.get("subcategory")),t.$$.dirty[0]&256&&c.url.searchParams.get("regions"),t.$$.dirty[0]&256&&a(4,n=c.url.searchParams.get("leaderboardid")),t.$$.dirty[0]&7&&l&&s&&r&&u[l][r]&&a(3,d=u[l][r][s])},[r,l,s,d,n,u,i,w,c,o,f,k,B,z,te,ae,ye,le,Le,re,Ie,ne,De,oe]}class ua extends et{constructor(e){super(),tt(this,e,oa,na,at,{},null,[-1,-1])}}export{ua as default};