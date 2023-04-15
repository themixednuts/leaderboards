import{S as Ee,i as ye,s as Le,k as p,q as N,a as S,l as m,m as w,r as U,h as v,c as O,n as b,C as ne,b as B,D as _,u as W,g as Y,d as ae,f as Ie,E as Z,F as De,G as x,H as ke,I as Ve,J as je,K as Pe,v as Se}from"../chunks/index.6e2e9970.js";import{p as Oe}from"../chunks/stores.eca627f0.js";import{j as q,e as ie}from"../chunks/singletons.38a718ea.js";import{l as Ce}from"../chunks/leaderboardmap.4b231009.js";q.disable_scroll_handling;const Ae=q.goto;q.invalidate;q.invalidateAll;q.preload_data;q.preload_code;q.before_navigate;q.after_navigate;function de(e,t,r){const s=e.slice();return s[16]=t[r],s}function fe(e,t,r){const s=e.slice();return s[16]=t[r],s}function ce(e,t,r){const s=e.slice();return s[16]=t[r],s}function ue(e,t,r){const s=e.slice();return s[16]=t[r],s}function _e(e){let t,r,s=e[16]+"",f,c,o,u,n;function d(){return e[10](e[16])}return{c(){t=p("li"),r=p("div"),f=N(s),o=S(),this.h()},l(l){t=m(l,"LI",{});var a=w(t);r=m(a,"DIV",{class:!0});var i=w(r);f=U(i,s),i.forEach(v),o=O(a),a.forEach(v),this.h()},h(){b(r,"class",c=e[0]===e[16]?"active":"")},m(l,a){B(l,t,a),_(t,r),_(r,f),_(t,o),u||(n=x(r,"pointerdown",d),u=!0)},p(l,a){e=l,a&1&&c!==(c=e[0]===e[16]?"active":"")&&b(r,"class",c)},d(l){l&&v(t),u=!1,n()}}}function he(e){let t,r,s=(e[3]?e[3]:"Category")+"",f,c,o,u=Object.keys(e[4][e[0]]),n=[];for(let d=0;d<u.length;d+=1)n[d]=be(ce(e,u,d));return{c(){t=p("div"),r=p("label"),f=N(s),c=S(),o=p("ul");for(let d=0;d<n.length;d+=1)n[d].c();this.h()},l(d){t=m(d,"DIV",{class:!0});var l=w(t);r=m(l,"LABEL",{tabindex:!0,class:!0});var a=w(r);f=U(a,s),a.forEach(v),c=O(l),o=m(l,"UL",{tabindex:!0,class:!0});var i=w(o);for(let g=0;g<n.length;g+=1)n[g].l(i);i.forEach(v),l.forEach(v),this.h()},h(){b(r,"tabindex","0"),b(r,"class","btn m-1"),b(o,"tabindex","0"),b(o,"class","dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 left-1/2 -translate-x-1/2"),b(t,"class","dropdown")},m(d,l){B(d,t,l),_(t,r),_(r,f),_(t,c),_(t,o);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(o,null)},p(d,l){if(l&8&&s!==(s=(d[3]?d[3]:"Category")+"")&&W(f,s),l&89){u=Object.keys(d[4][d[0]]);let a;for(a=0;a<u.length;a+=1){const i=ce(d,u,a);n[a]?n[a].p(i,l):(n[a]=be(i),n[a].c(),n[a].m(o,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=u.length}},d(d){d&&v(t),Z(n,d)}}}function be(e){let t,r,s=e[16]+"",f,c,o,u,n;function d(){return e[11](e[16])}return{c(){t=p("li"),r=p("div"),f=N(s),o=S(),this.h()},l(l){t=m(l,"LI",{});var a=w(t);r=m(a,"DIV",{class:!0});var i=w(r);f=U(i,s),i.forEach(v),o=O(a),a.forEach(v),this.h()},h(){b(r,"class",c=e[3]===e[16]?"active":"")},m(l,a){B(l,t,a),_(t,r),_(r,f),_(t,o),u||(n=x(r,"pointerdown",d),u=!0)},p(l,a){e=l,a&1&&s!==(s=e[16]+"")&&W(f,s),a&9&&c!==(c=e[3]===e[16]?"active":"")&&b(r,"class",c)},d(l){l&&v(t),u=!1,n()}}}function ve(e){let t,r,s=(e[2]?e[2]:"Sub Category")+"",f,c,o,u,n=Object.keys(e[4][e[0]][e[3]]),d=[];for(let l=0;l<n.length;l+=1)d[l]=ge(fe(e,n,l));return{c(){t=p("div"),r=p("label"),f=N(s),c=S(),o=p("ul");for(let l=0;l<d.length;l+=1)d[l].c();this.h()},l(l){t=m(l,"DIV",{class:!0});var a=w(t);r=m(a,"LABEL",{tabindex:!0,class:!0});var i=w(r);f=U(i,s),i.forEach(v),c=O(a),o=m(a,"UL",{tabindex:!0,class:!0});var g=w(o);for(let I=0;I<d.length;I+=1)d[I].l(g);g.forEach(v),a.forEach(v),this.h()},h(){b(r,"tabindex","0"),b(r,"class","btn"),b(o,"tabindex","0"),b(o,"class",u="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 "+(e[2]?"left-1/2 -translate-x-1/2":"dropdown-end")),b(t,"class","dropdown dropdown-end")},m(l,a){B(l,t,a),_(t,r),_(r,f),_(t,c),_(t,o);for(let i=0;i<d.length;i+=1)d[i]&&d[i].m(o,null)},p(l,a){if(a&4&&s!==(s=(l[2]?l[2]:"Sub Category")+"")&&W(f,s),a&93){n=Object.keys(l[4][l[0]][l[3]]);let i;for(i=0;i<n.length;i+=1){const g=fe(l,n,i);d[i]?d[i].p(g,a):(d[i]=ge(g),d[i].c(),d[i].m(o,null))}for(;i<d.length;i+=1)d[i].d(1);d.length=n.length}a&4&&u!==(u="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 "+(l[2]?"left-1/2 -translate-x-1/2":"dropdown-end"))&&b(o,"class",u)},d(l){l&&v(t),Z(d,l)}}}function ge(e){let t,r,s=e[16]+"",f,c,o,u,n;function d(){return e[12](e[16])}return{c(){t=p("li"),r=p("div"),f=N(s),o=S(),this.h()},l(l){t=m(l,"LI",{});var a=w(t);r=m(a,"DIV",{class:!0});var i=w(r);f=U(i,s),i.forEach(v),o=O(a),a.forEach(v),this.h()},h(){b(r,"class",c=e[2]===e[16]?"active":"")},m(l,a){B(l,t,a),_(t,r),_(r,f),_(t,o),u||(n=x(r,"pointerdown",d),u=!0)},p(l,a){e=l,a&9&&s!==(s=e[16]+"")&&W(f,s),a&13&&c!==(c=e[2]===e[16]?"active":"")&&b(r,"class",c)},d(l){l&&v(t),u=!1,n()}}}function pe(e){var d;let t,r,s=(e[1]?(d=e[4][e[0]][e[3]][e[2]].find(e[13]))==null?void 0:d.DisplayName:"Leaderboards")+"",f,c,o,u=Object.values(e[4][e[0]][e[3]][e[2]]),n=[];for(let l=0;l<u.length;l+=1)n[l]=me(de(e,u,l));return{c(){t=p("div"),r=p("label"),f=N(s),c=S(),o=p("ul");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){t=m(l,"DIV",{class:!0});var a=w(t);r=m(a,"LABEL",{tabindex:!0,class:!0});var i=w(r);f=U(i,s),i.forEach(v),c=O(a),o=m(a,"UL",{tabindex:!0,class:!0});var g=w(o);for(let I=0;I<n.length;I+=1)n[I].l(g);g.forEach(v),a.forEach(v),this.h()},h(){b(r,"tabindex","0"),b(r,"class","btn m-1"),b(o,"tabindex","0"),b(o,"class","dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 dropdown-end"),b(t,"class","dropdown dropdown-end")},m(l,a){B(l,t,a),_(t,r),_(r,f),_(t,c),_(t,o);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(o,null)},p(l,a){var i;if(a&15&&s!==(s=(l[1]?(i=l[4][l[0]][l[3]][l[2]].find(l[13]))==null?void 0:i.DisplayName:"Leaderboards")+"")&&W(f,s),a&95){u=Object.values(l[4][l[0]][l[3]][l[2]]);let g;for(g=0;g<u.length;g+=1){const I=de(l,u,g);n[g]?n[g].p(I,a):(n[g]=me(I),n[g].c(),n[g].m(o,null))}for(;g<n.length;g+=1)n[g].d(1);n.length=u.length}},d(l){l&&v(t),Z(n,l)}}}function me(e){let t,r,s=e[16].DisplayName+"",f,c,o,u,n;function d(){return e[14](e[16])}return{c(){t=p("li"),r=p("div"),f=N(s),o=S(),this.h()},l(l){t=m(l,"LI",{});var a=w(t);r=m(a,"DIV",{class:!0});var i=w(r);f=U(i,s),i.forEach(v),o=O(a),a.forEach(v),this.h()},h(){b(r,"class",c=e[1]===e[16].LeaderboardDefinitionId?"active":"")},m(l,a){B(l,t,a),_(t,r),_(r,f),_(t,o),u||(n=x(r,"pointerdown",d),u=!0)},p(l,a){e=l,a&13&&s!==(s=e[16].DisplayName+"")&&W(f,s),a&15&&c!==(c=e[1]===e[16].LeaderboardDefinitionId?"active":"")&&b(r,"class",c)},d(l){l&&v(t),u=!1,n()}}}function we(e){let t,r;const s=e[9].default,f=ke(s,e,e[8],null);return{c(){t=p("div"),f&&f.c(),this.h()},l(c){t=m(c,"DIV",{class:!0});var o=w(t);f&&f.l(o),o.forEach(v),this.h()},h(){b(t,"class","border-2 border-base-100 rounded-box p-2 my-2 sticky top-52 min-h-fit")},m(c,o){B(c,t,o),f&&f.m(t,null),r=!0},p(c,o){f&&f.p&&(!r||o&256)&&Ve(f,s,c,c[8],r?Pe(s,c[8],o,null):je(c[8]),null)},i(c){r||(Y(f,c),r=!0)},o(c){ae(f,c),r=!1},d(c){c&&v(t),f&&f.d(c)}}}function Me(e){let t,r,s,f,c,o,u,n,d,l,a,i,g,I=(e[0]?e[0]:"Main Section")+"",$,R,M,E,z,A,Q,C,G,ee,H,J=Object.keys(e[4]),k=[];for(let h=0;h<J.length;h+=1)k[h]=_e(ue(e,J,h));let V=e[0]&&he(e),j=e[0]&&e[3]&&ve(e),P=e[0]&&e[3]&&e[2]&&pe(e),y=e[0]&&e[3]&&e[2]&&e[1]&&we(e);return{c(){t=p("div"),r=p("div"),s=p("a"),f=N("New World Leaderboards"),c=S(),o=p("div"),u=p("div"),n=p("img"),l=S(),a=p("div"),i=p("div"),g=p("label"),$=N(I),R=S(),M=p("ul");for(let h=0;h<k.length;h+=1)k[h].c();E=S(),V&&V.c(),z=S(),j&&j.c(),A=S(),P&&P.c(),Q=S(),y&&y.c(),C=S(),G=p("div"),ee=N("Footer"),this.h()},l(h){t=m(h,"DIV",{class:!0});var D=w(t);r=m(D,"DIV",{class:!0});var L=w(r);s=m(L,"A",{href:!0,class:!0});var T=w(s);f=U(T,"New World Leaderboards"),T.forEach(v),L.forEach(v),c=O(D),o=m(D,"DIV",{class:!0});var K=w(o);u=m(K,"DIV",{class:!0});var te=w(u);n=m(te,"IMG",{src:!0,alt:!0,class:!0}),te.forEach(v),l=O(K),a=m(K,"DIV",{class:!0});var F=w(a);i=m(F,"DIV",{class:!0});var X=w(i);g=m(X,"LABEL",{tabindex:!0,class:!0});var re=w(g);$=U(re,I),re.forEach(v),R=O(X),M=m(X,"UL",{tabindex:!0,class:!0});var se=w(M);for(let le=0;le<k.length;le+=1)k[le].l(se);se.forEach(v),X.forEach(v),E=O(F),V&&V.l(F),z=O(F),j&&j.l(F),A=O(F),P&&P.l(F),F.forEach(v),Q=O(K),y&&y.l(K),K.forEach(v),C=O(D),G=m(D,"DIV",{class:!0});var oe=w(G);ee=U(oe,"Footer"),oe.forEach(v),D.forEach(v),this.h()},h(){b(s,"href","./leaderboards"),b(s,"class","btn btn-ghost normal-case text-xl"),b(r,"class","navbar bg-base-100 sticky top-0 z-50"),ne(n.src,d=`${ie}${e[5][e[0]||"mutated"]}`)||b(n,"src",d),b(n,"alt",""),b(n,"class","object-cover border-2 border-base-100 min-h-full rounded-box"),b(u,"class","flex justify-center w-full place-self-stretch h-56 min-h-56 mt-4 border-2 p-2 border-base-100 rounded-box svelte-cnk0g2"),b(g,"tabindex","0"),b(g,"class","btn m-1"),b(M,"tabindex","0"),b(M,"class","dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"),b(i,"class","dropdown"),b(a,"class","flex place-content-center gap-4 place-items-center mt-4 sticky top-0 z-50 bg-base-300 py-2"),b(o,"class","flex flex-col grow gap-2 bg-base-300 min-w-fit px-4 h-full overflow-y-auto rounded-box no-scrollbar"),b(G,"class","footer"),b(t,"class","container flex flex-col mx-auto gap-4 h-screen overflow-hidden")},m(h,D){B(h,t,D),_(t,r),_(r,s),_(s,f),_(t,c),_(t,o),_(o,u),_(u,n),_(o,l),_(o,a),_(a,i),_(i,g),_(g,$),_(i,R),_(i,M);for(let L=0;L<k.length;L+=1)k[L]&&k[L].m(M,null);_(a,E),V&&V.m(a,null),_(a,z),j&&j.m(a,null),_(a,A),P&&P.m(a,null),_(o,Q),y&&y.m(o,null),_(t,C),_(t,G),_(G,ee),H=!0},p(h,[D]){if((!H||D&1&&!ne(n.src,d=`${ie}${h[5][h[0]||"mutated"]}`))&&b(n,"src",d),(!H||D&1)&&I!==(I=(h[0]?h[0]:"Main Section")+"")&&W($,I),D&81){J=Object.keys(h[4]);let L;for(L=0;L<J.length;L+=1){const T=ue(h,J,L);k[L]?k[L].p(T,D):(k[L]=_e(T),k[L].c(),k[L].m(M,null))}for(;L<k.length;L+=1)k[L].d(1);k.length=J.length}h[0]?V?V.p(h,D):(V=he(h),V.c(),V.m(a,z)):V&&(V.d(1),V=null),h[0]&&h[3]?j?j.p(h,D):(j=ve(h),j.c(),j.m(a,A)):j&&(j.d(1),j=null),h[0]&&h[3]&&h[2]?P?P.p(h,D):(P=pe(h),P.c(),P.m(a,null)):P&&(P.d(1),P=null),h[0]&&h[3]&&h[2]&&h[1]?y?(y.p(h,D),D&15&&Y(y,1)):(y=we(h),y.c(),Y(y,1),y.m(o,null)):y&&(Se(),ae(y,1,1,()=>{y=null}),Ie())},i(h){H||(Y(y),H=!0)},o(h){ae(y),H=!1},d(h){h&&v(t),Z(k,h),V&&V.d(),j&&j.d(),P&&P.d(),y&&y.d()}}}function Ne(e,t,r){let s,f,c,o,u;De(e,Oe,E=>r(7,u=E));let{$$slots:n={},$$scope:d}=t;const l=Ce,a={"Mutated Expeditions":"/lyshineui/images/leaderboards/leaderboard_cat_bg_expeditions.png","Faction War":"/lyshineui/images/leaderboards/leaderboard_cat_bg_faction_convenant.png","Vs. Environment":"/lyshineui/images/leaderboards/leaderboard_cat_bg_environment.png","Vs. Players":"/lyshineui/images/leaderboards/leaderboard_cat_bg_player.png","Trade Skills":"/lyshineui/images/leaderboards/leaderboard_cat_bg_trade.png"};function i(E,z){const A=new URLSearchParams(u.url.searchParams);A.forEach((Q,C)=>{E==="firstlevelcategory"&&C!=="firstlevelcategory"&&A.delete(C),E==="category"&&C!=="category"&&C!=="firstlevelcategory"&&A.delete(C),E==="subcategory"&&C!=="subcategory"&&C!=="category"&&C!=="firstlevelcategory"&&A.delete(C)}),A.set(E,z),Ae(`${u.url.pathname}?${A}`)}const g=E=>i("firstlevelcategory",E),I=E=>i("category",E),$=E=>i("subcategory",E),R=E=>E.LeaderboardDefinitionId===o,M=E=>i("leaderboardid",E.LeaderboardDefinitionId);return e.$$set=E=>{"$$scope"in E&&r(8,d=E.$$scope)},e.$$.update=()=>{e.$$.dirty&128&&r(0,s=u.url.searchParams.get("firstlevelcategory")),e.$$.dirty&128&&r(3,f=u.url.searchParams.get("category")),e.$$.dirty&128&&r(2,c=u.url.searchParams.get("subcategory")),e.$$.dirty&128&&u.url.searchParams.get("regions"),e.$$.dirty&128&&r(1,o=u.url.searchParams.get("leaderboardid")),e.$$.dirty&1&&s!==null&&console.log(l[s]),e.$$.dirty&129&&console.log(s,u)},[s,o,c,f,l,a,i,u,d,n,g,I,$,R,M]}class We extends Ee{constructor(t){super(),ye(this,t,Ne,Me,Le,{})}}export{We as default};
