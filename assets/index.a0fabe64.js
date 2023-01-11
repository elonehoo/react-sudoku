import{j as H,r as p,h as x,a as oe}from"./vendor.ad34e39e.js";const ce=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}};ce();const o=H.exports.jsx,k=H.exports.jsxs,ue=H.exports.Fragment,fe=e=>k("header",{className:"header",children:[k("h1",{children:["Su",o("span",{className:"header__group-one",children:"do"}),o("span",{className:"header__group-two",children:"ku"})]}),o("h2",{onClick:e.onClick,children:"New Game"})]}),O=p.exports.createContext({numberSelected:"0",setNumberSelected:()=>{},gameArray:[],setGameArray:()=>{},difficulty:"Easy",setDifficulty:()=>{},timeGameStarted:x(),setTimeGameStarted:()=>{},fastMode:!1,setFastMode:()=>{},cellSelected:-1,setCellSelected:()=>{},initArray:[],setInitArray:()=>{},won:!1,setWon:()=>{}}),_e=({children:e})=>{let[t,r]=p.exports.useState("0"),[n,a]=p.exports.useState([]),[s,c]=p.exports.useState("Easy"),[i,m]=p.exports.useState(x()),[_,u]=p.exports.useState(!1),[f,h]=p.exports.useState(-1),[d,N]=p.exports.useState([]),[g,w]=p.exports.useState(!1);return o(O.Provider,{value:{numberSelected:t,setNumberSelected:r,gameArray:n,setGameArray:a,difficulty:s,setDifficulty:c,timeGameStarted:i,setTimeGameStarted:m,fastMode:_,setFastMode:u,cellSelected:f,setCellSelected:h,initArray:d,setInitArray:N,won:g,setWon:w},children:e})},I=()=>p.exports.useContext(O),he=e=>{const t=[0,1,2,3,4,5,6,7,8];let{numberSelected:r,gameArray:n,fastMode:a,cellSelected:s,initArray:c}=I();function i(u,f){if(a)return r===n[u*9+f];if(s===u*9+f)return!0;if(n[s]==="0")return!1;if(n[s]===n[u*9+f])return!0}function m(u,f,h){return f!=="0"?c[u]==="0"?o("td",{className:`game__cell game__cell--userfilled game__cell--${h}selected`,onClick:()=>e.onClick(u),children:f},u):o("td",{className:`game__cell game__cell--filled game__cell--${h}selected`,onClick:()=>e.onClick(u),children:f},u):o("td",{className:`game__cell game__cell--${h}selected`,onClick:()=>e.onClick(u),children:f},u)}function _(u,f){return f!=="0"?c[u]==="0"?o("td",{className:"game__cell game__cell--userfilled",onClick:()=>e.onClick(u),children:f},u):o("td",{className:"game__cell game__cell--filled",onClick:()=>e.onClick(u),children:f},u):o("td",{className:"game__cell",onClick:()=>e.onClick(u),children:f},u)}return o("section",{className:"game",children:o("table",{className:"game__board",children:o("tbody",{children:t.map(u=>o("tr",{className:"game__row",children:t.map(f=>{const h=u*9+f,d=n[h];return s===h?m(h,d,"highlight"):a?r!=="0"&&i(u,f)?m(h,d,""):_(h,d):s!==-1&&i(u,f)?m(h,d,""):_(h,d)})},u))})})})},me=e=>{let{difficulty:t}=I();return k("div",{className:"status__difficulty",children:[o("span",{className:"status__difficulty-text",children:"Difficulty:\xA0\xA0"}),k("select",{name:"status__difficulty-select",className:"status__difficulty-select",defaultValue:t,onChange:e.onChange,children:[o("option",{value:"Easy",children:"Easy"}),o("option",{value:"Medium",children:"Medium"}),o("option",{value:"Hard",children:"Hard"})]})]})},de=()=>{let[e,t]=p.exports.useState(x()),{timeGameStarted:r,won:n}=I();p.exports.useEffect(()=>{n||setTimeout(()=>a(),1e3)});function a(){t(x())}function s(){let c=e.diff(r,"seconds");if(c<=0)return"00:00";let i=x.duration(c,"seconds"),m=i.hours(),_=i.minutes(),u=i.seconds(),f="";return f+=m?""+m+":":"",f+=_?(_<10?"0":"")+_+":":"00:",f+=u<10?"0"+u:u,f}return o("div",{className:"status__time",children:s()})},ve=({onClickNumber:e})=>{let{numberSelected:t}=I();return o("div",{className:"status__numbers",children:[1,2,3,4,5,6,7,8,9].map(r=>t===r.toString()?o("div",{className:"status__number status__number--selected",onClick:()=>e(r.toString()),children:r},r):o("div",{className:"status__number",onClick:()=>e(r.toString()),children:r},r))})},ge=e=>e.action==="undo"?k("svg",{className:"status__action-svg",height:"512pt",viewBox:"0 0 512 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg",children:[o("path",{d:"m154.667969 213.332031h-138.667969c-8.832031 0-16-7.167969-16-16v-138.664062c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v122.664062h122.667969c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0",fill:"hsl(213, 30%, 59%)"}),o("path",{d:"m256 512c-68.351562 0-132.628906-26.644531-180.96875-75.03125-6.253906-6.25-6.253906-16.382812 0-22.632812 6.269531-6.273438 16.402344-6.230469 22.632812 0 42.304688 42.347656 98.515626 65.664062 158.335938 65.664062 123.519531 0 224-100.480469 224-224s-100.480469-224-224-224c-105.855469 0-200.257812 71.148438-224.449219 169.171875-2.132812 8.597656-10.75 13.824219-19.371093 11.714844-8.574219-2.132813-13.800782-10.796875-11.710938-19.371094 27.691406-112.148437 135.148438-193.515625 255.53125-193.515625 141.164062 0 256 114.835938 256 256s-114.835938 256-256 256zm0 0",fill:"hsl(213, 30%, 59%)"})]}):e.action==="erase"?o("svg",{className:"status__action-svg",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 512.001 512.001",children:o("path",{d:"M505.922,476.567L285.355,256L505.92,35.435c8.106-8.105,8.106-21.248,0-29.354c-8.105-8.106-21.248-8.106-29.354,0L256.001,226.646L35.434,6.081c-8.105-8.106-21.248-8.106-29.354,0c-8.106,8.105-8.106,21.248,0,29.354L226.646,256L6.08,476.567c-8.106,8.106-8.106,21.248,0,29.354c8.105,8.105,21.248,8.106,29.354,0l220.567-220.567l220.567,220.567c8.105,8.105,21.248,8.106,29.354,0S514.028,484.673,505.922,476.567z",fill:"hsl(213, 30%, 59%)"})}):e.action==="hint"?k("svg",{className:"status__action-svg",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 432.4 432.4",children:[o("path",{d:"M216.529,93.2c-61.2,0-111.2,50-111.2,111.2c0,32,14,62.8,37.6,83.6c17.6,17.6,16,55.2,15.6,55.6c0,2,0.4,3.6,2,5.2c1.2,1.2,3.2,2,4.8,2h102c2,0,3.6-0.8,4.8-2c1.2-1.2,2-3.2,2-5.2c0-0.4-2-38,15.6-55.6c0.4-0.4,0.8-0.8,1.2-1.2c23.2-21.2,36.8-51.2,36.8-82.4C327.729,143.2,277.729,93.2,216.529,93.2zM280.529,277.6c-0.4,0.4-1.2,1.2-1.2,1.6c-15.6,16.8-18.4,44.4-18.8,57.6h-88.4c-0.4-13.2-3.2-42-20-59.2c-21.2-18.4-33.6-45.2-33.6-73.6c0-54,43.6-97.6,97.6-97.6s97.6,43.6,97.6,97.6C313.729,232.4,301.729,259.2,280.529,277.6z",fill:"hsl(213, 30%, 59%)"}),o("path",{d:"M216.129,121.6c-3.6,0-6.8,3.2-6.8,6.8c0,3.6,3.2,6.8,6.8,6.8c40.4,0,72.8,32.8,72.8,72.8c0,3.6,3.2,6.8,6.8,6.8c3.6,0,6.8-3.2,6.8-6.8C302.929,160.4,264.129,121.6,216.129,121.6z",fill:"hsl(213, 30%, 59%)"}),o("path",{d:"M260.529,358.4h-88.8c-9.2,0-16.8,7.6-16.8,16.8s7.6,16.8,16.8,16.8h88.4c9.6-0.4,17.2-7.6,17.2-16.8C277.329,366,269.729,358.4,260.529,358.4zM260.529,378h-88.8c-1.6,0-3.2-1.2-3.2-3.2s1.2-3.2,3.2-3.2h88.4c1.6,0,3.2,1.2,3.2,3.2S262.129,378,260.529,378z",fill:"hsl(213, 30%, 59%)"}),o("path",{d:"M247.329,398.8h-62.4c-9.2,0-16.8,7.6-16.8,16.8s7.6,16.8,16.8,16.8h62.4c9.2,0,16.8-7.6,16.8-16.8C264.129,406,256.529,398.8,247.329,398.8zM247.329,418.4h-62.4c-1.6,0-3.2-1.2-3.2-3.2s1.2-3.2,3.2-3.2h62.4c1.6,0,3.2,1.2,3.2,3.2S248.929,418.4,247.329,418.4z",fill:"hsl(213, 30%, 59%)"}),o("path",{d:"M216.129,60c4,0,6.8-3.2,6.8-6.8V6.8c0-3.6-3.2-6.8-6.8-6.8c-3.6,0-6.8,3.2-6.8,6.8v46.4C209.329,56.8,212.529,60,216.129,60z",fill:"hsl(213, 30%, 59%)"}),o("path",{d:"M329.329,34.4c-3.2-2.4-7.2-1.2-9.2,1.6l-25.6,38.4c-2.4,3.2-1.6,7.6,1.6,9.6c1.2,0.8,2.4,1.2,3.6,1.2c2.4,0,4.4-1.2,5.6-3.2l25.6-38.4C333.329,40.8,332.529,36.4,329.329,34.4z",fill:"hsl(213, 30%, 59%)"}),o("path",{d:"M134.929,83.6c1.2,0,2.4-0.4,3.6-1.2c3.2-2,4-6.4,2-9.6l-24.8-38.8c-2-3.2-6.4-4-9.6-2s-4,6.4-2,9.6l24.8,38.8C130.529,82.8,132.529,83.6,134.929,83.6z",fill:"hsl(213, 30%, 59%)"}),o("path",{d:"M86.529,126l-40.4-22c-3.2-1.6-7.6-0.4-9.2,2.8c-2,3.2-0.8,7.6,2.8,9.2l40.4,22c1.2,0.4,2,0.8,3.2,0.8c2.4,0,4.8-1.2,6-3.6C90.929,132,89.729,127.6,86.529,126z",fill:"hsl(213, 30%, 59%)"}),o("path",{d:"M395.729,106.8c-1.6-3.2-6-4.4-9.2-2.8l-40.8,22c-3.2,1.6-4.4,6-2.8,9.2c1.2,2.4,3.6,3.6,6,3.6c1.2,0,2.4-0.4,3.2-0.8l40.8-22C396.129,114.4,397.329,110,395.729,106.8z",fill:"hsl(213, 30%, 59%)"})]}):null,B=e=>k("div",{className:e.action==="undo"?"status__action-undo":e.action==="erase"?"status__action-erase":e.action==="hint"?"status__action-hint":"",onClick:e.onClickAction,children:[o(ge,{action:e.action}),o("p",{className:"status__action-text",children:e.action==="undo"?"Undo":e.action==="erase"?"Erase":e.action==="hint"?"Hint":""})]}),V=e=>k("div",{className:e.mode==="mistakes"?"status__action-mistakes-mode":"status__action-fast-mode",children:[k("label",{className:e.mode==="mistakes"?"status__action-mistakes-mode-switch":"status__action-fast-mode-switch",children:[o("input",{type:"checkbox"}),o("span",{className:e.mode==="mistakes"?"status__action-mistakes-mode-slider":"status__action-fast-mode-slider",onClick:e.onClickMode})]}),o("p",{className:"status__action-text",children:e.mode==="mistakes"?"Mistakes Mode":"Fast Mode"})]}),pe=e=>k("section",{className:"status",children:[o(me,{onChange:e.onChange}),o(de,{}),o(ve,{onClickNumber:t=>e.onClickNumber(t)}),k("div",{className:"status__actions",children:[o(B,{action:"undo",onClickAction:e.onClickUndo}),o(B,{action:"erase",onClickAction:e.onClickErase}),o(B,{action:"hint",onClickAction:e.onClickHint}),o(V,{mode:"mistakes",onClickMode:e.onClickMistakesMode}),o(V,{mode:"fast",onClickMode:e.onClickFastMode})]})]}),Ce=()=>o("footer",{className:"footer",children:k("p",{children:["\xA9 2022 Elone Hoo - source code on ",o("a",{href:"https://github.com/xiaoxunyao/react-sudoku",children:"Github"})]})});var l={};l.DIGITS="123456789";var J="ABCDEFGHI",Q=l.DIGITS,C=null,W=null,E=null,z=null,F=17,L=81,$={easy:62,medium:53,hard:44,"very-hard":35,insane:26,inhuman:17};l.BLANK_CHAR=".";l.BLANK_BOARD=".................................................................................";function ke(){C=l._cross(J,Q),W=l._get_all_units(J,Q),E=l._get_square_units_map(C,W),z=l._get_square_peers_map(C,E)}l.generate=function(e,t){(typeof e=="string"||typeof e=="undefined")&&(e=$[e]||$.easy),e=l._force_range(e,L+1,F);for(var r="",n=0;n<L;++n)r+=".";var a=l._get_candidates_map(r),s=l._shuffle(C);for(var c in s){var i=s[c],m=l._rand_range(a[i].length),_=a[i][m];if(!l._assign(a,i,_))break;var u=[];for(c in C)i=C[c],a[i].length===1&&u.push(a[i]);if(u.length>=e&&l._strip_dups(u).length>=8){var f="",h=[];for(n in C)i=C[n],a[i].length===1?(f+=a[i],h.push(n)):f+=l.BLANK_CHAR;var d=h.length;if(d>e)for(h=l._shuffle(h),n=0;n<d-e;++n){var N=parseInt(h[n]);f=f.substr(0,N)+l.BLANK_CHAR+f.substr(N+1)}if(l.solve(f))return f}}return l.generate(e)};l.solve=function(e,t){var r=l.validate_board(e);if(r!==!0)throw r;var n=0;for(var a in e)e[a]!==l.BLANK_CHAR&&l._in(e[a],l.DIGITS)&&++n;if(n<F)throw"Too few givens. Minimum givens is "+F;t=t||!1;var s=l._get_candidates_map(e),c=l._search(s,t);if(c){var i="";for(var m in c)i+=c[m];return i}return!1};l.get_candidates=function(e){var t=l.validate_board(e);if(t!==!0)throw t;var r=l._get_candidates_map(e);if(!r)return!1;var n=[],a=[],s=0;for(var c in r){var i=r[c];a.push(i),s%9==8&&(n.push(a),a=[]),++s}return n};l._get_candidates_map=function(e){var t=l.validate_board(e);if(t!==!0)throw t;var r={},n=l._get_square_vals_map(e);for(var a in C)r[C[a]]=l.DIGITS;for(var s in n){var c=n[s];if(l._in(c,l.DIGITS)){var i=l._assign(r,s,c);if(!i)return!1}}return r};l._search=function(e,t){if(!e)return!1;t=t||!1;var r=0;for(var n in C){var a=C[n],s=e[a].length;s>r&&(r=s)}if(r===1)return e;var c=10,i=null;for(n in C)a=C[n],s=e[a].length,s<c&&s>1&&(c=s,i=a);var m=e[i];if(t){for(_=m.length-1;_>=0;--_)if(u=m[_],f=JSON.parse(JSON.stringify(e)),h=l._search(l._assign(f,i,u),t),h)return h}else for(var _ in m){var u=m[_],f=JSON.parse(JSON.stringify(e)),h=l._search(l._assign(f,i,u));if(h)return h}return!1};l._assign=function(e,t,r){var n=e[t].replace(r,"");for(var a in n){var s=n[a],c=l._eliminate(e,t,s);if(!c)return!1}return e};l._eliminate=function(e,t,r){if(!l._in(r,e[t]))return e;e[t]=e[t].replace(r,"");var n=e[t].length;if(n===1){var a=e[t];for(var s in z[t]){var c=z[t][s],i=l._eliminate(e,c,a);if(!i)return!1}}if(n===0)return!1;for(var m in E[t]){var _=E[t][m],u=[];for(var f in _){var h=_[f];l._in(r,e[h])&&u.push(h)}if(u.length===0)return!1;if(u.length===1&&(i=l._assign(e,u[0],r),!i))return!1}return e};l._get_square_vals_map=function(e){var t={};if(e.length!==C.length)throw"Board/squares length mismatch.";for(var r in C)t[C[r]]=e[r];return t};l._get_square_units_map=function(e,t){var r={};for(var n in e){var a=e[n],s=[];for(var c in t){var i=t[c];i.indexOf(a)!==-1&&s.push(i)}r[a]=s}return r};l._get_square_peers_map=function(e,t){var r={};for(var n in e){var a=e[n],s=t[a],c=[];for(var i in s){var m=s[i];for(var _ in m){var u=m[_];c.indexOf(u)===-1&&u!==a&&c.push(u)}}r[a]=c}return r};l._get_all_units=function(e,t){var r=[];for(var n in e)r.push(l._cross(e[n],t));for(var a in t)r.push(l._cross(e,t[a]));var s=["ABC","DEF","GHI"],c=["123","456","789"];for(var i in s)for(var m in c)r.push(l._cross(s[i],c[m]));return r};l.board_string_to_grid=function(e){var t=[],r=[];for(var n in e)r.push(e[n]),n%9==8&&(t.push(r),r=[]);return t};l.board_grid_to_string=function(e){for(var t="",r=0;r<9;++r)for(var n=0;n<9;++n)t+=e[r][n];return t};l.print_board=function(e){var t=l.validate_board(e);if(t!==!0)throw t;var r=" ",n=`
`,a="  ",s=`
`,c="";for(var i in e){var m=e[i];c+=m+r,i%3==2&&(c+=a),i%9==8&&(c+=n),i%27==26&&(c+=s)}console.log(c)};l.validate_board=function(e){if(!e)return"Empty board";if(e.length!==L)return"Invalid board size. Board must be exactly "+L+" squares.";for(var t in e)if(!l._in(e[t],l.DIGITS)&&e[t]!==l.BLANK_CHAR)return"Invalid board character encountered at index "+t+": "+e[t];return!0};l._cross=function(e,t){var r=[];for(var n in e)for(var a in t)r.push(e[n]+t[a]);return r};l._in=function(e,t){return t.indexOf(e)!==-1};l._first_true=function(e){for(var t in e)if(e[t])return e[t];return!1};l._shuffle=function(e){for(var t=[],r=0;r<e.length;++r)t.push(!1);for(r in e){for(var n=l._rand_range(e.length);t[n];)n=n+1>e.length-1?0:n+1;t[n]=e[r]}return t};l._rand_range=function(e,t){if(t=t||0,e)return Math.floor(Math.random()*(e-t))+t;throw"Range undefined"};l._strip_dups=function(e){var t=[],r={};for(var n in e){var a=e[n];r[a]||(t.push(a),r[a]=!0)}return t};l._force_range=function(e,t,r){return r=r||0,e=e||0,e<r?r:e>t?t:e};ke();const Se=()=>l;let R=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];function Ne(e){switch(e){case 0:return[1,1];case 1:return[1,4];case 2:return[1,7];case 3:return[4,1];case 4:return[4,4];case 5:return[4,7];case 6:return[7,1];case 7:return[7,4];default:return[7,7]}}function U(e,t){let[r,n]=Ne(e);switch(t){case 0:{r--,n--;break}case 1:{r--;break}case 2:{r--,n++;break}case 3:{n--;break}case 4:break;case 5:{n++;break}case 6:{r++,n--;break}case 7:{r++;break}case 8:{r++,n++;break}}return r*9+n}function y(e,t,r){return e[U(t,r)]==="0"?0:1}function ye(e,t,r){let n=t,a,s,c,i,m,_=R.slice(),u=[0,0,0,0,0,0,0,0,0],f=[],h=[];r&&(n=r.target.value),n==="Easy"?(a=3,s=7,c=45):n==="Medium"?(a=2,s=6,c=40):(a=1,s=5,c=30);for(let d=0;d<9;d++)u[d]=y(_,d,0)+y(_,d,1)+y(_,d,2)+y(_,d,3)+y(_,d,4)+y(_,d,5)+y(_,d,6)+y(_,d,7)+y(_,d,8);for(let d=0;d<c;d++){f=[];for(let g=0;g<9;g++)u[g]<a&&f.push(g);if(f)for(let g=0;g<9;g++)u[g]<s&&f.push(g);i=f[Math.random()*f.length|0],h=[];for(let g=0;g<9;g++)_[U(i,g)]==="0"&&h.push(g);m=h[Math.random()*h.length|0];let N=U(i,m);_[N]=e[N],u[i]++}return _}const Ae=(e,t)=>{let r=R.slice(),n=R.slice(),a=Se(),s=a.generate(60);return[...s].forEach((c,i)=>{r[i]=c==="."?"0":c}),s=a.solve(s),[...s].forEach((c,i)=>{n[i]=c}),r=ye(n,e,t),[r,n]},Me=()=>{let{numberSelected:e,setNumberSelected:t,gameArray:r,setGameArray:n,difficulty:a,setDifficulty:s,setTimeGameStarted:c,fastMode:i,setFastMode:m,cellSelected:_,setCellSelected:u,initArray:f,setInitArray:h,setWon:d}=I(),[N,g]=p.exports.useState(!1),[w,T]=p.exports.useState([]),[b,X]=p.exports.useState([]),[j,P]=p.exports.useState(!1);function G(v){let[S,A]=Ae(a,v);h(S),n(S),X(A),t("0"),c(x()),u(-1),T([]),d(!1)}function Y(v,S){return!!r.every((A,M)=>M===v?S===b[M]:A===b[M])}function D(v,S){if(f[v]==="0"){let A=r.slice(),M=w.slice();M.push(r.slice()),T(M),A[v]=S,n(A),Y(v,S)&&(P(!0),d(!0))}}function K(v,S){N?S===b[v]&&D(v,S):D(v,S)}function Z(){G()}function q(v){i&&e!=="0"&&K(v,e),u(v)}function ee(v){s(v.target.value),G(v)}function te(v){i?t(v):_!==-1&&K(_,v)}function re(){if(w.length){let v=w.slice(),S=v.pop();T(v),S!==void 0&&n(S)}}function ne(){_!==-1&&r[_]!=="0"&&D(_,"0")}function ae(){_!==-1&&D(_,b[_])}function le(){g(!N)}function se(){i&&t("0"),u(-1),m(!i)}function ie(){P(!1),G()}return p.exports.useEffect(()=>{G()},[]),k(ue,{children:[k("div",{className:j?"container blur":"container",children:[o(fe,{onClick:Z}),k("div",{className:"innercontainer",children:[o(he,{onClick:v=>q(v)}),o(pe,{onClickNumber:v=>te(v),onChange:v=>ee(v),onClickUndo:re,onClickErase:ne,onClickHint:ae,onClickMistakesMode:le,onClickFastMode:se})]}),o(Ce,{})]}),o("div",{className:j?"overlay overlay--visible":"overlay",onClick:ie,children:k("h2",{className:"overlay__text",children:["You ",o("span",{className:"overlay__textspan1",children:"solved"})," ",o("span",{className:"overlay__textspan2",children:"it!"})]})})]})};const xe=()=>o(_e,{children:o(Me,{})});oe.exports.render(o(xe,{}),document.getElementById("root"));