import{S as ke,i as Ie,s as De,k as m,q as N,a as M,l as w,m as g,r as U,h as p,c as P,n as h,C as ne,b as F,D as _,u as G,g as Y,d as ae,f as Ce,E as Z,F as Ve,G as x,H as je,I as Me,J as Pe,K as Se,v as Oe,L as ie,M as de}from"../chunks/index.772edb29.js";import{p as Ae}from"../chunks/stores.2b239ae2.js";import{j as $,k as fe}from"../chunks/singletons.1b0d7a8e.js";import{l as Be}from"../chunks/leaderboardmap.90637e4a.js";$.disable_scroll_handling;const Ne=$.goto;$.invalidate;$.invalidateAll;$.preload_data;$.preload_code;$.before_navigate;$.after_navigate;function ue(e,a,t){const s=e.slice();return s[16]=a[t],s}function ce(e,a,t){const s=e.slice();return s[16]=a[t],s}function he(e,a,t){const s=e.slice();return s[16]=a[t],s}function _e(e,a,t){const s=e.slice();return s[16]=a[t],s}function be(e){let a,t,s=e[16]+"",f,i,o,c,n;function u(){return e[10](e[16])}return{c(){a=m("li"),t=m("div"),f=N(s),o=M(),this.h()},l(r){a=w(r,"LI",{});var l=g(a);t=w(l,"DIV",{class:!0});var d=g(t);f=U(d,s),d.forEach(p),o=P(l),l.forEach(p),this.h()},h(){h(t,"class",i=e[1]===e[16]?"active":"")},m(r,l){F(r,a,l),_(a,t),_(t,f),_(a,o),c||(n=x(t,"pointerdown",u),c=!0)},p(r,l){e=r,l&2&&i!==(i=e[1]===e[16]?"active":"")&&h(t,"class",i)},d(r){r&&p(a),c=!1,n()}}}function ve(e){let a,t,s=(e[0]?e[0]:"Category")+"",f,i,o,c=Object.keys(e[4][e[1]]),n=[];for(let u=0;u<c.length;u+=1)n[u]=pe(he(e,c,u));return{c(){a=m("div"),t=m("label"),f=N(s),i=M(),o=m("ul");for(let u=0;u<n.length;u+=1)n[u].c();this.h()},l(u){a=w(u,"DIV",{class:!0});var r=g(a);t=w(r,"LABEL",{tabindex:!0,class:!0});var l=g(t);f=U(l,s),l.forEach(p),i=P(r),o=w(r,"UL",{tabindex:!0,class:!0});var d=g(o);for(let v=0;v<n.length;v+=1)n[v].l(d);d.forEach(p),r.forEach(p),this.h()},h(){h(t,"tabindex","0"),h(t,"class","btn m-1"),h(o,"tabindex","0"),h(o,"class","dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 left-1/2 -translate-x-1/2"),h(a,"class","dropdown")},m(u,r){F(u,a,r),_(a,t),_(t,f),_(a,i),_(a,o);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(o,null)},p(u,r){if(r&1&&s!==(s=(u[0]?u[0]:"Category")+"")&&G(f,s),r&83){c=Object.keys(u[4][u[1]]);let l;for(l=0;l<c.length;l+=1){const d=he(u,c,l);n[l]?n[l].p(d,r):(n[l]=pe(d),n[l].c(),n[l].m(o,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=c.length}},d(u){u&&p(a),Z(n,u)}}}function pe(e){let a,t,s=e[16]+"",f,i,o,c,n;function u(){return e[11](e[16])}return{c(){a=m("li"),t=m("div"),f=N(s),o=M(),this.h()},l(r){a=w(r,"LI",{});var l=g(a);t=w(l,"DIV",{class:!0});var d=g(t);f=U(d,s),d.forEach(p),o=P(l),l.forEach(p),this.h()},h(){h(t,"class",i=e[0]===e[16]?"active":"")},m(r,l){F(r,a,l),_(a,t),_(t,f),_(a,o),c||(n=x(t,"pointerdown",u),c=!0)},p(r,l){e=r,l&2&&s!==(s=e[16]+"")&&G(f,s),l&3&&i!==(i=e[0]===e[16]?"active":"")&&h(t,"class",i)},d(r){r&&p(a),c=!1,n()}}}function ge(e){let a,t,s=(e[3]?e[3]:"Sub Category")+"",f,i,o,c,n=Object.keys(e[4][e[1]][e[0]]),u=[];for(let r=0;r<n.length;r+=1)u[r]=me(ce(e,n,r));return{c(){a=m("div"),t=m("label"),f=N(s),i=M(),o=m("ul");for(let r=0;r<u.length;r+=1)u[r].c();this.h()},l(r){a=w(r,"DIV",{class:!0});var l=g(a);t=w(l,"LABEL",{tabindex:!0,class:!0});var d=g(t);f=U(d,s),d.forEach(p),i=P(l),o=w(l,"UL",{tabindex:!0,class:!0});var v=g(o);for(let E=0;E<u.length;E+=1)u[E].l(v);v.forEach(p),l.forEach(p),this.h()},h(){h(t,"tabindex","0"),h(t,"class","btn"),h(o,"tabindex","0"),h(o,"class",c="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 "+(e[3]?"left-1/2 -translate-x-1/2":"dropdown-end")),h(a,"class","dropdown dropdown-end")},m(r,l){F(r,a,l),_(a,t),_(t,f),_(a,i),_(a,o);for(let d=0;d<u.length;d+=1)u[d]&&u[d].m(o,null)},p(r,l){if(l&8&&s!==(s=(r[3]?r[3]:"Sub Category")+"")&&G(f,s),l&91){n=Object.keys(r[4][r[1]][r[0]]);let d;for(d=0;d<n.length;d+=1){const v=ce(r,n,d);u[d]?u[d].p(v,l):(u[d]=me(v),u[d].c(),u[d].m(o,null))}for(;d<u.length;d+=1)u[d].d(1);u.length=n.length}l&8&&c!==(c="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 "+(r[3]?"left-1/2 -translate-x-1/2":"dropdown-end"))&&h(o,"class",c)},d(r){r&&p(a),Z(u,r)}}}function me(e){let a,t,s=e[16]+"",f,i,o,c,n;function u(){return e[12](e[16])}return{c(){a=m("li"),t=m("div"),f=N(s),o=M(),this.h()},l(r){a=w(r,"LI",{});var l=g(a);t=w(l,"DIV",{class:!0});var d=g(t);f=U(d,s),d.forEach(p),o=P(l),l.forEach(p),this.h()},h(){h(t,"class",i=e[3]===e[16]?"active":"")},m(r,l){F(r,a,l),_(a,t),_(t,f),_(a,o),c||(n=x(t,"pointerdown",u),c=!0)},p(r,l){e=r,l&3&&s!==(s=e[16]+"")&&G(f,s),l&11&&i!==(i=e[3]===e[16]?"active":"")&&h(t,"class",i)},d(r){r&&p(a),c=!1,n()}}}function we(e){var u;let a,t,s=(e[2]?(u=e[4][e[1]][e[0]][e[3]].find(e[13]))==null?void 0:u.DisplayName:"Leaderboards")+"",f,i,o,c=Object.values(e[4][e[1]][e[0]][e[3]]),n=[];for(let r=0;r<c.length;r+=1)n[r]=ye(ue(e,c,r));return{c(){a=m("div"),t=m("label"),f=N(s),i=M(),o=m("ul");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){a=w(r,"DIV",{class:!0});var l=g(a);t=w(l,"LABEL",{tabindex:!0,class:!0});var d=g(t);f=U(d,s),d.forEach(p),i=P(l),o=w(l,"UL",{tabindex:!0,class:!0});var v=g(o);for(let E=0;E<n.length;E+=1)n[E].l(v);v.forEach(p),l.forEach(p),this.h()},h(){h(t,"tabindex","0"),h(t,"class","btn m-1"),h(o,"tabindex","0"),h(o,"class","dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 dropdown-end"),h(a,"class","dropdown dropdown-end")},m(r,l){F(r,a,l),_(a,t),_(t,f),_(a,i),_(a,o);for(let d=0;d<n.length;d+=1)n[d]&&n[d].m(o,null)},p(r,l){var d;if(l&15&&s!==(s=(r[2]?(d=r[4][r[1]][r[0]][r[3]].find(r[13]))==null?void 0:d.DisplayName:"Leaderboards")+"")&&G(f,s),l&95){c=Object.values(r[4][r[1]][r[0]][r[3]]);let v;for(v=0;v<c.length;v+=1){const E=ue(r,c,v);n[v]?n[v].p(E,l):(n[v]=ye(E),n[v].c(),n[v].m(o,null))}for(;v<n.length;v+=1)n[v].d(1);n.length=c.length}},d(r){r&&p(a),Z(n,r)}}}function Ee(e){let a,t,s,f;return{c(){a=m("div"),t=ie("svg"),s=ie("path"),this.h()},l(i){a=w(i,"DIV",{class:!0,"data-tip":!0});var o=g(a);t=de(o,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var c=g(t);s=de(c,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),g(s).forEach(p),c.forEach(p),o.forEach(p),this.h()},h(){h(s,"stroke-linecap","round"),h(s,"stroke-linejoin","round"),h(s,"stroke-width","2"),h(s,"d","M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),h(t,"xmlns","http://www.w3.org/2000/svg"),h(t,"fill","none"),h(t,"viewBox","0 0 24 24"),h(t,"class","w-4 h-4 stroke-current"),h(a,"class","tooltip px-0"),h(a,"data-tip",f=e[16].CharacterLeaderboard?"Character":e[16].CompanyLeaderboard?"Company":"")},m(i,o){F(i,a,o),_(a,t),_(t,s)},p(i,o){o&11&&f!==(f=i[16].CharacterLeaderboard?"Character":i[16].CompanyLeaderboard?"Company":"")&&h(a,"data-tip",f)},d(i){i&&p(a)}}}function ye(e){let a,t,s,f=e[16].DisplayName+"",i,o,c,n,u,r,l=(e[16].CharacterLeaderboard||e[16].CompanyLeaderboard)&&Ee(e);function d(){return e[14](e[16])}return{c(){a=m("li"),t=m("div"),s=m("div"),i=N(f),o=M(),l&&l.c(),n=M(),this.h()},l(v){a=w(v,"LI",{});var E=g(a);t=w(E,"DIV",{class:!0});var A=g(t);s=w(A,"DIV",{class:!0});var q=g(s);i=U(q,f),q.forEach(p),o=P(A),l&&l.l(A),A.forEach(p),n=P(E),E.forEach(p),this.h()},h(){h(s,"class","flex"),h(t,"class",c=e[2]===e[16].LeaderboardDefinitionId?"active":"")},m(v,E){F(v,a,E),_(a,t),_(t,s),_(s,i),_(t,o),l&&l.m(t,null),_(a,n),u||(r=x(t,"pointerdown",d),u=!0)},p(v,E){e=v,E&11&&f!==(f=e[16].DisplayName+"")&&G(i,f),e[16].CharacterLeaderboard||e[16].CompanyLeaderboard?l?l.p(e,E):(l=Ee(e),l.c(),l.m(t,null)):l&&(l.d(1),l=null),E&15&&c!==(c=e[2]===e[16].LeaderboardDefinitionId?"active":"")&&h(t,"class",c)},d(v){v&&p(a),l&&l.d(),u=!1,r()}}}function Le(e){let a,t;const s=e[9].default,f=je(s,e,e[8],null);return{c(){a=m("div"),f&&f.c(),this.h()},l(i){a=w(i,"DIV",{class:!0});var o=g(a);f&&f.l(o),o.forEach(p),this.h()},h(){h(a,"class","border-2 border-base-100 rounded-box p-2 my-2 sticky top-52 min-h-fit")},m(i,o){F(i,a,o),f&&f.m(a,null),t=!0},p(i,o){f&&f.p&&(!t||o&256)&&Me(f,s,i,i[8],t?Se(s,i[8],o,null):Pe(i[8]),null)},i(i){t||(Y(f,i),t=!0)},o(i){ae(f,i),t=!1},d(i){i&&p(a),f&&f.d(i)}}}function Ue(e){let a,t,s,f,i,o,c,n,u,r,l,d,v,E=(e[1]?e[1]:"Main Section")+"",A,q,B,y,z,O,Q,S,H,ee,J,K=Object.keys(e[4]),D=[];for(let b=0;b<K.length;b+=1)D[b]=be(_e(e,K,b));let C=e[1]&&ve(e),V=e[1]&&e[0]&&ge(e),j=e[1]&&e[0]&&e[3]&&e[4][e[1]][e[0]][e[3]].length>1&&we(e),L=e[1]&&e[0]&&e[3]&&e[2]&&Le(e);return{c(){a=m("div"),t=m("div"),s=m("a"),f=N("New World Leaderboards"),i=M(),o=m("div"),c=m("div"),n=m("img"),r=M(),l=m("div"),d=m("div"),v=m("label"),A=N(E),q=M(),B=m("ul");for(let b=0;b<D.length;b+=1)D[b].c();y=M(),C&&C.c(),z=M(),V&&V.c(),O=M(),j&&j.c(),Q=M(),L&&L.c(),S=M(),H=m("div"),ee=N("Footer"),this.h()},l(b){a=w(b,"DIV",{class:!0});var I=g(a);t=w(I,"DIV",{class:!0});var k=g(t);s=w(k,"A",{href:!0,class:!0});var T=g(s);f=U(T,"New World Leaderboards"),T.forEach(p),k.forEach(p),i=P(I),o=w(I,"DIV",{class:!0});var R=g(o);c=w(R,"DIV",{class:!0});var te=g(c);n=w(te,"IMG",{src:!0,alt:!0,class:!0}),te.forEach(p),r=P(R),l=w(R,"DIV",{class:!0});var W=g(l);d=w(W,"DIV",{class:!0});var X=g(d);v=w(X,"LABEL",{tabindex:!0,class:!0});var re=g(v);A=U(re,E),re.forEach(p),q=P(X),B=w(X,"UL",{tabindex:!0,class:!0});var se=g(B);for(let le=0;le<D.length;le+=1)D[le].l(se);se.forEach(p),X.forEach(p),y=P(W),C&&C.l(W),z=P(W),V&&V.l(W),O=P(W),j&&j.l(W),W.forEach(p),Q=P(R),L&&L.l(R),R.forEach(p),S=P(I),H=w(I,"DIV",{class:!0});var oe=g(H);ee=U(oe,"Footer"),oe.forEach(p),I.forEach(p),this.h()},h(){h(s,"href","./leaderboards"),h(s,"class","btn btn-ghost normal-case text-xl"),h(t,"class","navbar bg-base-100 sticky top-0 z-50"),ne(n.src,u=`${fe}${e[5][e[1]||"Mutated Expeditions"]}`)||h(n,"src",u),h(n,"alt",""),h(n,"class","object-cover border-2 border-base-100 min-h-full rounded-box"),h(c,"class","flex justify-center w-full place-self-stretch h-56 min-h-56 mt-4 border-2 p-2 border-base-100 rounded-box svelte-cnk0g2"),h(v,"tabindex","0"),h(v,"class","btn m-1"),h(B,"tabindex","0"),h(B,"class","dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"),h(d,"class","dropdown"),h(l,"class","flex place-content-center gap-4 place-items-center mt-4 sticky top-0 z-50 bg-base-300 py-2"),h(o,"class","flex flex-col grow gap-2 bg-base-300 min-w-fit px-4 h-full overflow-y-auto rounded-box no-scrollbar"),h(H,"class","footer"),h(a,"class","container flex flex-col mx-auto gap-4 h-screen overflow-hidden")},m(b,I){F(b,a,I),_(a,t),_(t,s),_(s,f),_(a,i),_(a,o),_(o,c),_(c,n),_(o,r),_(o,l),_(l,d),_(d,v),_(v,A),_(d,q),_(d,B);for(let k=0;k<D.length;k+=1)D[k]&&D[k].m(B,null);_(l,y),C&&C.m(l,null),_(l,z),V&&V.m(l,null),_(l,O),j&&j.m(l,null),_(o,Q),L&&L.m(o,null),_(a,S),_(a,H),_(H,ee),J=!0},p(b,[I]){if((!J||I&2&&!ne(n.src,u=`${fe}${b[5][b[1]||"Mutated Expeditions"]}`))&&h(n,"src",u),(!J||I&2)&&E!==(E=(b[1]?b[1]:"Main Section")+"")&&G(A,E),I&82){K=Object.keys(b[4]);let k;for(k=0;k<K.length;k+=1){const T=_e(b,K,k);D[k]?D[k].p(T,I):(D[k]=be(T),D[k].c(),D[k].m(B,null))}for(;k<D.length;k+=1)D[k].d(1);D.length=K.length}b[1]?C?C.p(b,I):(C=ve(b),C.c(),C.m(l,z)):C&&(C.d(1),C=null),b[1]&&b[0]?V?V.p(b,I):(V=ge(b),V.c(),V.m(l,O)):V&&(V.d(1),V=null),b[1]&&b[0]&&b[3]&&b[4][b[1]][b[0]][b[3]].length>1?j?j.p(b,I):(j=we(b),j.c(),j.m(l,null)):j&&(j.d(1),j=null),b[1]&&b[0]&&b[3]&&b[2]?L?(L.p(b,I),I&15&&Y(L,1)):(L=Le(b),L.c(),Y(L,1),L.m(o,null)):L&&(Oe(),ae(L,1,1,()=>{L=null}),Ce())},i(b){J||(Y(L),J=!0)},o(b){ae(L),J=!1},d(b){b&&p(a),Z(D,b),C&&C.d(),V&&V.d(),j&&j.d(),L&&L.d()}}}function Fe(e,a,t){let s,f,i,o,c;Ve(e,Ae,y=>t(7,c=y));let{$$slots:n={},$$scope:u}=a;const r=Be,l={"Mutated Expeditions":"/lyshineui/images/leaderboards/leaderboard_cat_bg_expeditions.png","Faction War":"/lyshineui/images/leaderboards/leaderboard_cat_bg_faction_convenant.png","Vs. Environment":"/lyshineui/images/leaderboards/leaderboard_cat_bg_environment.png","Vs. Players":"/lyshineui/images/leaderboards/leaderboard_cat_bg_player.png","Trade Skills":"/lyshineui/images/leaderboards/leaderboard_cat_bg_trade.png"};function d(y,z){const O=new URLSearchParams(c.url.searchParams);O.forEach((Q,S)=>{y==="firstlevelcategory"&&S!=="firstlevelcategory"&&O.delete(S),y==="category"&&S!=="category"&&S!=="firstlevelcategory"&&O.delete(S),y==="subcategory"&&(S!=="subcategory"&&S!=="category"&&S!=="firstlevelcategory"&&O.delete(S),r[s][f][z].length===1&&O.set("leaderboardid",r[s][f][z][0].LeaderboardDefinitionId))}),O.set(y,z),Ne(`${c.url.pathname}?${O}`)}const v=y=>d("firstlevelcategory",y),E=y=>d("category",y),A=y=>d("subcategory",y),q=y=>y.LeaderboardDefinitionId===o,B=y=>d("leaderboardid",y.LeaderboardDefinitionId);return e.$$set=y=>{"$$scope"in y&&t(8,u=y.$$scope)},e.$$.update=()=>{e.$$.dirty&128&&t(1,s=c.url.searchParams.get("firstlevelcategory")),e.$$.dirty&128&&t(0,f=c.url.searchParams.get("category")),e.$$.dirty&128&&t(3,i=c.url.searchParams.get("subcategory")),e.$$.dirty&128&&c.url.searchParams.get("regions"),e.$$.dirty&128&&t(2,o=c.url.searchParams.get("leaderboardid"))},[f,s,o,i,r,l,d,c,u,n,v,E,A,q,B]}class Ge extends ke{constructor(a){super(),Ie(this,a,Fe,Ue,De,{})}}export{Ge as default};