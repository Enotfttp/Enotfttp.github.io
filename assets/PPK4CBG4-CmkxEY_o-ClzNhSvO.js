import{b as ke,d as B,o as Ft,p as j,e as G,c as q,a as y,P as Po,S as U,t as z,r as an,i as C,f as V,h as F,s as Vn,m as Nn,j as dt,k as T,l as ml,n as rr,u as $e,q as bl,v as He,w as xl,x as zt,y as Rt,z as wl,A as kl,B as wn,F as $l,C as Br,D as Bt,E as Sl,$ as Ko,G as Cl,H as _,I as Hr,J as El,K as ql,L as or,M as Ml,N as Tl,O as Kn,Q as Fl,R as Ll,T as re,U as Dl,V as Al}from"./production-DD1N6ugQ-COXG3C7Z.js";var Ol=Object.defineProperty,Il=(e,t,n)=>t in e?Ol(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ve=(e,t,n)=>Il(e,typeof t!="symbol"?t+"":t,n),zl=e=>e!=null,Pl=e=>e.filter(zl);function Kl(e){return(...t)=>{for(const n of e)n&&n(...t)}}var E=e=>typeof e=="function"&&!e.length?e():e,jn=e=>Array.isArray(e)?e:e?[e]:[];function Rl(e,...t){return typeof e=="function"?e(...t):e}var Bl=j;function Hl(e,t,n,r){const o=e.length,l=t.length;let s=0;if(!l){for(;s<o;s++)n(e[s]);return}if(!o){for(;s<l;s++)r(t[s]);return}for(;s<l&&t[s]===e[s];s++);let a,i;t=t.slice(s),e=e.slice(s);for(a of t)e.includes(a)||r(a);for(i of e)t.includes(i)||n(i)}function Ul(e){const[t,n]=B(),r=e!=null&&e.throw?(f,g)=>{throw n(f instanceof Error?f:new Error(g)),f}:(f,g)=>{n(f instanceof Error?f:new Error(g))},o=e!=null&&e.api?Array.isArray(e.api)?e.api:[e.api]:[globalThis.localStorage].filter(Boolean),l=e!=null&&e.prefix?`${e.prefix}.`:"",s=new Map,a=new Proxy({},{get(f,g){let d=s.get(g);d||(d=B(void 0,{equals:!1}),s.set(g,d)),d[0]();const h=o.reduce((v,m)=>{if(v!==null||!m)return v;try{return m.getItem(`${l}${g}`)}catch(b){return r(b,`Error reading ${l}${g} from ${m.name}`),null}},null);return h!==null&&e!=null&&e.deserializer?e.deserializer(h,g,e.options):h}}),i=(f,g,d)=>{const h=e!=null&&e.serializer?e.serializer(g,f,d??e.options):g,v=`${l}${f}`;o.forEach(b=>{try{b.getItem(v)!==h&&b.setItem(v,h)}catch(x){r(x,`Error setting ${l}${f} to ${h} in ${b.name}`)}});const m=s.get(f);m&&m[1]()},u=f=>o.forEach(g=>{try{g.removeItem(`${l}${f}`)}catch(d){r(d,`Error removing ${l}${f} from ${g.name}`)}}),c=()=>o.forEach(f=>{try{f.clear()}catch(g){r(g,`Error clearing ${f.name}`)}}),p=()=>{const f={},g=(d,h)=>{if(!f.hasOwnProperty(d)){const v=h&&e!=null&&e.deserializer?e.deserializer(h,d,e.options):h;v&&(f[d]=v)}};return o.forEach(d=>{if(typeof d.getAll=="function"){let h;try{h=d.getAll()}catch(v){r(v,`Error getting all values from in ${d.name}`)}for(const v of h)g(v,h[v])}else{let h=0,v;try{for(;v=d.key(h++);)f.hasOwnProperty(v)||g(v,d.getItem(v))}catch(m){r(m,`Error getting all values from ${d.name}`)}}}),f};return(e==null?void 0:e.sync)!==!1&&Ft(()=>{const f=g=>{var d;let h=!1;o.forEach(v=>{try{v!==g.storageArea&&g.key&&g.newValue!==v.getItem(g.key)&&(g.newValue?v.setItem(g.key,g.newValue):v.removeItem(g.key),h=!0)}catch(m){r(m,`Error synching api ${v.name} from storage event (${g.key}=${g.newValue})`)}}),h&&g.key&&((d=s.get(g.key))==null||d[1]())};"addEventListener"in globalThis?(globalThis.addEventListener("storage",f),j(()=>globalThis.removeEventListener("storage",f))):(o.forEach(g=>{var d;return(d=g.addEventListener)==null?void 0:d.call(g,"storage",f)}),j(()=>o.forEach(g=>{var d;return(d=g.removeEventListener)==null?void 0:d.call(g,"storage",f)})))}),[a,i,{clear:c,error:t,remove:u,toJSON:p}]}var t0=Ul,Gl=e=>(typeof e.clear=="function"||(e.clear=()=>{let t;for(;t=e.key(0);)e.removeItem(t)}),e),Ur=e=>{if(!e)return"";let t="";for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n];t+=r instanceof Date?`; ${n}=${r.toUTCString()}`:typeof r=="boolean"?`; ${n}`:`; ${n}=${r}`}return t},ze=Gl({_cookies:[globalThis.document,"cookie"],getItem:e=>{var t;return((t=ze._cookies[0][ze._cookies[1]].match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)"))==null?void 0:t.pop())??null},setItem:(e,t,n)=>{const r=ze.getItem(e);ze._cookies[0][ze._cookies[1]]=`${e}=${t}${Ur(n)}`;const o=Object.assign(new Event("storage"),{key:e,oldValue:r,newValue:t,url:globalThis.document.URL,storageArea:ze});window.dispatchEvent(o)},removeItem:e=>{ze._cookies[0][ze._cookies[1]]=`${e}=deleted${Ur({expires:new Date(0)})}`},key:e=>{let t=null,n=0;return ze._cookies[0][ze._cookies[1]].replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,(r,o)=>(!t&&o&&n++===e&&(t=o),"")),t},get length(){let e=0;return ze._cookies[0][ze._cookies[1]].replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g,t=>(e+=t?1:0,"")),e}}),Vl=1024,qt=796,ir=700,Nl="bottom-right",Qn="bottom",n0="system",jl=!1,Ro=500,Ql=500,Bo=500,Wl=Object.keys(Vn)[0],Gr=1,_l=Object.keys(Nn)[0],Zl=ke({client:void 0,onlineManager:void 0,queryFlavor:"",version:"",shadowDOMTarget:void 0});function H(){return $e(Zl)}var Ho=ke(void 0),r0=e=>{const[t,n]=B(null),r=()=>{const s=t();s!=null&&(s.close(),n(null))},o=(s,a)=>{if(t()!=null)return;const i=window.open("","TSQD-Devtools-Panel",`width=${s},height=${a},popup`);if(!i)throw new Error("Failed to open popup. Please allow popups for this site to view the devtools in picture-in-picture mode.");i.document.head.innerHTML="",i.document.body.innerHTML="",ml(i.document),i.document.title="TanStack Query Devtools",i.document.body.style.margin="0",i.addEventListener("pagehide",()=>{e.setLocalStore("pip_open","false"),n(null)}),[...(H().shadowDOMTarget||document).styleSheets].forEach(u=>{try{const c=[...u.cssRules].map(d=>d.cssText).join(""),p=document.createElement("style"),f=u.ownerNode;let g="";f&&"id"in f&&(g=f.id),g&&p.setAttribute("id",g),p.textContent=c,i.document.head.appendChild(p)}catch{const c=document.createElement("link");if(u.href==null)return;c.rel="stylesheet",c.type=u.type,c.media=u.media.toString(),c.href=u.href,i.document.head.appendChild(c)}}),rr(["focusin","focusout","pointermove","keydown","pointerdown","pointerup","click","mousedown","input"],i.document),e.setLocalStore("pip_open","true"),n(i)};G(()=>{(e.localStore.pip_open??"false")==="true"&&!e.disabled&&o(Number(window.innerWidth),Number(e.localStore.height||Ql))}),G(()=>{const s=(H().shadowDOMTarget||document).querySelector("#_goober"),a=t();if(s&&a){const i=new MutationObserver(()=>{const u=(H().shadowDOMTarget||a.document).querySelector("#_goober");u&&(u.textContent=s.textContent)});i.observe(s,{childList:!0,subtree:!0,characterDataOldValue:!0}),j(()=>{i.disconnect()})}});const l=q(()=>({pipWindow:t(),requestPipWindow:o,closePipWindow:r,disabled:e.disabled??!1}));return y(Ho.Provider,{value:l,get children(){return e.children}})},lr=()=>q(()=>{const e=$e(Ho);if(!e)throw new Error("usePiPWindow must be used within a PiPProvider");return e()}),Yl=ke(()=>"dark");function xe(){return $e(Yl)}var Uo={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},Xl=Object.keys(Uo).join("|"),Jl=new RegExp(Xl,"g");function es(e){return e.replace(Jl,t=>Uo[t])}var Te={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};function Vr(e,t,n){var r;if(n=n||{},n.threshold=(r=n.threshold)!=null?r:Te.MATCHES,!n.accessors){const s=Nr(e,t,n);return{rankedValue:e,rank:s,accessorIndex:-1,accessorThreshold:n.threshold,passed:s>=n.threshold}}const o=os(e,n.accessors),l={rankedValue:e,rank:Te.NO_MATCH,accessorIndex:-1,accessorThreshold:n.threshold,passed:!1};for(let s=0;s<o.length;s++){const a=o[s];let i=Nr(a.itemValue,t,n);const{minRanking:u,maxRanking:c,threshold:p=n.threshold}=a.attributes;i<u&&i>=Te.MATCHES?i=u:i>c&&(i=c),i=Math.min(i,c),i>=p&&i>l.rank&&(l.rank=i,l.passed=!0,l.accessorIndex=s,l.accessorThreshold=p,l.rankedValue=a.itemValue)}return l}function Nr(e,t,n){return e=jr(e,n),t=jr(t,n),t.length>e.length?Te.NO_MATCH:e===t?Te.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase(),t=t.toLowerCase(),e===t?Te.EQUAL:e.startsWith(t)?Te.STARTS_WITH:e.includes(` ${t}`)?Te.WORD_STARTS_WITH:e.includes(t)?Te.CONTAINS:t.length===1?Te.NO_MATCH:ts(e).includes(t)?Te.ACRONYM:ns(e,t))}function ts(e){let t="";return e.split(" ").forEach(n=>{n.split("-").forEach(r=>{t+=r.substr(0,1)})}),t}function ns(e,t){let n=0,r=0;function o(i,u,c){for(let p=c,f=u.length;p<f;p++)if(u[p]===i)return n+=1,p+1;return-1}function l(i){const u=1/i,c=n/t.length;return Te.MATCHES+c*u}const s=o(t[0],e,0);if(s<0)return Te.NO_MATCH;r=s;for(let i=1,u=t.length;i<u;i++){const c=t[i];if(r=o(c,e,r),!(r>-1))return Te.NO_MATCH}const a=r-s;return l(a)}function jr(e,t){let{keepDiacritics:n}=t;return e=`${e}`,n||(e=es(e)),e}function rs(e,t){let n=t;typeof t=="object"&&(n=t.accessor);const r=n(e);return r==null?[]:Array.isArray(r)?r:[String(r)]}function os(e,t){const n=[];for(let r=0,o=t.length;r<o;r++){const l=t[r],s=is(l),a=rs(e,l);for(let i=0,u=a.length;i<u;i++)n.push({itemValue:a[i],attributes:s})}return n}var Qr={maxRanking:1/0,minRanking:-1/0};function is(e){return typeof e=="function"?Qr:{...Qr,...e}}var ls={data:""},ss=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ls,as=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,us=/\/\*[^]*?\*\/|  +/g,Wr=/\n+/g,Et=(e,t)=>{let n="",r="",o="";for(let l in e){let s=e[l];l[0]=="@"?l[1]=="i"?n=l+" "+s+";":r+=l[1]=="f"?Et(s,l):l+"{"+Et(s,l[1]=="k"?"":t)+"}":typeof s=="object"?r+=Et(s,t?t.replace(/([^,])+/g,a=>l.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,i=>/&/.test(i)?i.replace(/&/g,a):a?a+" "+i:i)):l):s!=null&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=Et.p?Et.p(l,s):l+":"+s+";")}return n+(t&&o?t+"{"+o+"}":o)+r},st={},Go=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Go(e[n]);return t}return e},ds=(e,t,n,r,o)=>{let l=Go(e),s=st[l]||(st[l]=(i=>{let u=0,c=11;for(;u<i.length;)c=101*c+i.charCodeAt(u++)>>>0;return"go"+c})(l));if(!st[s]){let i=l!==e?e:(u=>{let c,p,f=[{}];for(;c=as.exec(u.replace(us,""));)c[4]?f.shift():c[3]?(p=c[3].replace(Wr," ").trim(),f.unshift(f[0][p]=f[0][p]||{})):f[0][c[1]]=c[2].replace(Wr," ").trim();return f[0]})(e);st[s]=Et(o?{["@keyframes "+s]:i}:i,n?"":"."+s)}let a=n&&st.g?st.g:null;return n&&(st.g=st[s]),((i,u,c,p)=>{p?u.data=u.data.replace(p,i):u.data.indexOf(i)===-1&&(u.data=c?i+u.data:u.data+i)})(st[s],t,r,a),s},cs=(e,t,n)=>e.reduce((r,o,l)=>{let s=t[l];if(s&&s.call){let a=s(n),i=a&&a.props&&a.props.className||/^go/.test(a)&&a;s=i?"."+i:a&&typeof a=="object"?a.props?"":Et(a,""):a===!1?"":a}return r+o+(s??"")},"");function Z(e){let t=this||{},n=e.call?e(t.p):e;return ds(n.unshift?n.raw?cs(n,[].slice.call(arguments,1),t.p):n.reduce((r,o)=>Object.assign(r,o&&o.call?o(t.p):o),{}):n,ss(t.target),t.g,t.o,t.k)}Z.bind({g:1});Z.bind({k:1});function Vo(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Vo(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function A(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Vo(e))&&(r&&(r+=" "),r+=t);return r}function fs(e,t){const n=Bt(e),{onChange:r}=t;let o=new Set(t.appear?void 0:n);const l=new WeakSet,[s,a]=B([],{equals:!1}),[i]=Sl(),u=p=>{a(f=>(f.push.apply(f,p),f));for(const f of p)l.delete(f)},c=(p,f,g)=>p.splice(g,0,f);return q(p=>{const f=s(),g=e();if(g[Ko],Bt(i))return i(),p;if(f.length){const d=p.filter(h=>!f.includes(h));return f.length=0,r({list:d,added:[],removed:[],unchanged:d,finishRemoved:u}),d}return Bt(()=>{const d=new Set(g),h=g.slice(),v=[],m=[],b=[];for(const w of g)(o.has(w)?b:v).push(w);let x=!v.length;for(let w=0;w<p.length;w++){const S=p[w];d.has(S)||(l.has(S)||(m.push(S),l.add(S)),c(h,S,w)),x&&S!==h[w]&&(x=!1)}return!m.length&&x?p:(r({list:h,added:v,removed:m,unchanged:b,finishRemoved:u}),o=d,h)})},t.appear?[]:n.slice())}function qe(...e){return Kl(e)}var _r=e=>e instanceof Element;function Wn(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return Wn(e(),t);if(Array.isArray(e)){const n=[];for(const r of e){const o=Wn(r,t);o&&(Array.isArray(o)?n.push.apply(n,o):n.push(o))}return n.length?n:null}return null}function gs(e,t=_r,n=_r){const r=q(e),o=q(()=>Wn(r(),t));return o.toArray=()=>{const l=o();return Array.isArray(l)?l:l?[l]:[]},o}function ps(e){return q(()=>{const t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}})}function No(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function hs(e,t,n,r){const{onBeforeEnter:o,onEnter:l,onAfterEnter:s}=t;o==null||o(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{n.parentNode&&(l==null||l(n,()=>a()))}),No(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!l||l.length<2)&&(n.addEventListener("transitionend",a),n.addEventListener("animationend",a))});function a(i){(!i||i.target===n)&&(n.removeEventListener("transitionend",a),n.removeEventListener("animationend",a),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),s==null||s(n))}}function ys(e,t,n,r){const{onBeforeExit:o,onExit:l,onAfterExit:s}=t;if(!n.parentNode)return r==null?void 0:r();o==null||o(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),l==null||l(n,()=>a()),No(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!l||l.length<2)&&(n.addEventListener("transitionend",a),n.addEventListener("animationend",a))});function a(i){(!i||i.target===n)&&(r==null||r(),n.removeEventListener("transitionend",a),n.removeEventListener("animationend",a),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),s==null||s(n))}}var Zr=e=>{const t=ps(e);return fs(gs(()=>e.children).toArray,{appear:e.appear,onChange({added:n,removed:r,finishRemoved:o,list:l}){const s=t();for(const i of n)hs(s,e,i);const a=[];for(const i of l)i.isConnected&&(i instanceof HTMLElement||i instanceof SVGElement)&&a.push({el:i,rect:i.getBoundingClientRect()});queueMicrotask(()=>{const i=[];for(const{el:u,rect:c}of a)if(u.isConnected){const p=u.getBoundingClientRect(),f=c.left-p.left,g=c.top-p.top;(f||g)&&(u.style.transform=`translate(${f}px, ${g}px)`,u.style.transitionDuration="0s",i.push(u))}document.body.offsetHeight;for(const u of i){let c=function(p){(p.target===u||/transform$/.test(p.propertyName))&&(u.removeEventListener("transitionend",c),u.classList.remove(...s.move))};u.classList.add(...s.move),u.style.transform=u.style.transitionDuration="",u.addEventListener("transitionend",c)}});for(const i of r)ys(s,e,i,()=>o([i]))}})},Rn=Symbol("fallback");function Yr(e){for(const t of e)t.dispose()}function vs(e,t,n,r={}){const o=new Map;return j(()=>Yr(o.values())),()=>{const s=e()||[];return s[Ko],Bt(()=>{var a,i;if(!s.length)return Yr(o.values()),o.clear(),r.fallback?[Hr(f=>(o.set(Rn,{dispose:f}),r.fallback()))]:[];const u=new Array(s.length),c=o.get(Rn);if(!o.size||c){c==null||c.dispose(),o.delete(Rn);for(let f=0;f<s.length;f++){const g=s[f],d=t(g,f);l(u,g,f,d)}return u}const p=new Set(o.keys());for(let f=0;f<s.length;f++){const g=s[f],d=t(g,f);p.delete(d);const h=o.get(d);h?(u[f]=h.mapped,(a=h.setIndex)==null||a.call(h,f),h.setItem(()=>g)):l(u,g,f,d)}for(const f of p)(i=o.get(f))==null||i.dispose(),o.delete(f);return u})};function l(s,a,i,u){Hr(c=>{const[p,f]=B(a),g={setItem:f,dispose:c};if(n.length>1){const[d,h]=B(i);g.setIndex=h,g.mapped=n(p,d)}else g.mapped=n(p);o.set(u,g),s[i]=g.mapped})}}function kn(e){const{by:t}=e;return q(vs(()=>e.each,typeof t=="function"?t:n=>n[t],e.children,"fallback"in e?{fallback:()=>e.fallback}:void 0))}function ms(e,t,n,r){return e.addEventListener(t,n,r),Bl(e.removeEventListener.bind(e,t,n,r))}function bs(e,t,n,r){const o=()=>{jn(E(e)).forEach(l=>{l&&jn(E(t)).forEach(s=>ms(l,s,n,r))})};typeof e=="function"?G(o):V(o)}function xs(e,t){const n=new ResizeObserver(e);return j(n.disconnect.bind(n)),{observe:r=>n.observe(r,t),unobserve:n.unobserve.bind(n)}}function jo(e,t,n){const r=new WeakMap,{observe:o,unobserve:l}=xs(s=>{for(const a of s){const{contentRect:i,target:u}=a,c=Math.round(i.width),p=Math.round(i.height),f=r.get(u);(!f||f.width!==c||f.height!==p)&&(t(i,u,a),r.set(u,{width:c,height:p}))}},n);G(s=>{const a=Pl(jn(E(e)));return Hl(a,s,o,l),a},[])}var ws=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function Xr(e){const t={};let n;for(;n=ws.exec(e);)t[n[1]]=n[2];return t}function Tn(e,t){if(typeof e=="string"){if(typeof t=="string")return`${e};${t}`;e=Xr(e)}else typeof t=="string"&&(t=Xr(t));return{...e,...t}}function ks(e,t,n=-1){return n in e?[...e.slice(0,n),t,...e.slice(n)]:[...e,t]}function _n(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function $s(e){return typeof e=="number"}function Pt(e){return Object.prototype.toString.call(e)==="[object String]"}function Ss(e){return typeof e=="function"}function un(e){return t=>`${e()}-${t}`}function Re(e,t){return e?e===t||e.contains(t):!1}function en(e,t=!1){const{activeElement:n}=Je(e);if(!(n!=null&&n.nodeName))return null;if(Qo(n)&&n.contentDocument)return en(n.contentDocument.body,t);if(t){const r=n.getAttribute("aria-activedescendant");if(r){const o=Je(n).getElementById(r);if(o)return o}}return n}function Cs(e){return Je(e).defaultView||window}function Je(e){return e?e.ownerDocument||e:document}function Qo(e){return e.tagName==="IFRAME"}var sr=(e=>(e.Escape="Escape",e.Enter="Enter",e.Tab="Tab",e.Space=" ",e.ArrowDown="ArrowDown",e.ArrowLeft="ArrowLeft",e.ArrowRight="ArrowRight",e.ArrowUp="ArrowUp",e.End="End",e.Home="Home",e.PageDown="PageDown",e.PageUp="PageUp",e))(sr||{});function ar(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)==null?void 0:t.platform)||window.navigator.platform):!1}function Fn(){return ar(/^Mac/i)}function Es(){return ar(/^iPhone/i)}function qs(){return ar(/^iPad/i)||Fn()&&navigator.maxTouchPoints>1}function Ms(){return Es()||qs()}function Ts(){return Fn()||Ms()}function de(e,t){return t&&(Ss(t)?t(e):t[0](t[1],e)),e==null?void 0:e.defaultPrevented}function be(e){return t=>{for(const n of e)de(t,n)}}function Fs(e){return Fn()?e.metaKey&&!e.ctrlKey:e.ctrlKey&&!e.metaKey}function Ce(e){if(e)if(Ls())e.focus({preventScroll:!0});else{const t=Ds(e);e.focus(),As(t)}}var mn=null;function Ls(){if(mn==null){mn=!1;try{document.createElement("div").focus({get preventScroll(){return mn=!0,!0}})}catch{}}return mn}function Ds(e){let t=e.parentNode;const n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}function As(e){for(const{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}var Wo=["input:not([type='hidden']):not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","[tabindex]","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]:not([contenteditable='false'])"],Os=[...Wo,'[tabindex]:not([tabindex="-1"]):not([disabled])'],ur=Wo.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])",Is=Os.join(':not([hidden]):not([tabindex="-1"]),');function _o(e,t){const n=Array.from(e.querySelectorAll(ur)).filter(Jr);return t&&Jr(e)&&n.unshift(e),n.forEach((r,o)=>{if(Qo(r)&&r.contentDocument){const l=r.contentDocument.body,s=_o(l,!1);n.splice(o,1,...s)}}),n}function Jr(e){return Zo(e)&&!zs(e)}function Zo(e){return e.matches(ur)&&dr(e)}function zs(e){return parseInt(e.getAttribute("tabindex")||"0",10)<0}function dr(e,t){return e.nodeName!=="#comment"&&Ps(e)&&Ks(e,t)&&(!e.parentElement||dr(e.parentElement,e))}function Ps(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;const{display:t,visibility:n}=e.style;let r=t!=="none"&&n!=="hidden"&&n!=="collapse";if(r){if(!e.ownerDocument.defaultView)return r;const{getComputedStyle:o}=e.ownerDocument.defaultView,{display:l,visibility:s}=o(e);r=l!=="none"&&s!=="hidden"&&s!=="collapse"}return r}function Ks(e,t){return!e.hasAttribute("hidden")&&(e.nodeName==="DETAILS"&&t&&t.nodeName!=="SUMMARY"?e.hasAttribute("open"):!0)}function Rs(e,t,n){const r=t!=null&&t.tabbable?Is:ur,o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(l){var s;return(s=t==null?void 0:t.from)!=null&&s.contains(l)?NodeFilter.FILTER_REJECT:l.matches(r)&&dr(l)&&(!(t!=null&&t.accept)||t.accept(l))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t!=null&&t.from&&(o.currentNode=t.from),o}function eo(e){for(;e&&!Bs(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function Bs(e){const t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function Hs(){}function Us(e,t){const[n,r]=e;let o=!1;const l=t.length;for(let s=l,a=0,i=s-1;a<s;i=a++){const[u,c]=t[a],[p,f]=t[i],[,g]=t[i===0?s-1:i-1]||[0,0],d=(c-f)*(n-u)-(u-p)*(r-c);if(f<c){if(r>=f&&r<c){if(d===0)return!0;d>0&&(r===f?r>g&&(o=!o):o=!o)}}else if(c<f){if(r>c&&r<=f){if(d===0)return!0;d<0&&(r===f?r<g&&(o=!o):o=!o)}}else if(r==c&&(n>=p&&n<=u||n>=u&&n<=p))return!0}return o}function X(e,t){return _(e,t)}var Yt=new Map,to=new Set;function no(){if(typeof window>"u")return;const e=n=>{if(!n.target)return;let r=Yt.get(n.target);r||(r=new Set,Yt.set(n.target,r),n.target.addEventListener("transitioncancel",t)),r.add(n.propertyName)},t=n=>{if(!n.target)return;const r=Yt.get(n.target);if(r&&(r.delete(n.propertyName),r.size===0&&(n.target.removeEventListener("transitioncancel",t),Yt.delete(n.target)),Yt.size===0)){for(const o of to)o();to.clear()}};document.body.addEventListener("transitionrun",e),document.body.addEventListener("transitionend",t)}typeof document<"u"&&(document.readyState!=="loading"?no():document.addEventListener("DOMContentLoaded",no));function Zn(e,t){const n=ro(e,t,"left"),r=ro(e,t,"top"),o=t.offsetWidth,l=t.offsetHeight;let s=e.scrollLeft,a=e.scrollTop;const i=s+e.offsetWidth,u=a+e.offsetHeight;n<=s?s=n:n+o>i&&(s+=n+o-i),r<=a?a=r:r+l>u&&(a+=r+l-u),e.scrollLeft=s,e.scrollTop=a}function ro(e,t,n){const r=n==="left"?"offsetLeft":"offsetTop";let o=0;for(;t.offsetParent&&(o+=t[r],t.offsetParent!==e);){if(t.offsetParent.contains(e)){o-=e[r];break}t=t.offsetParent}return o}function Gs(e,t){var n,r;if(document.contains(e)){const o=document.scrollingElement||document.documentElement;if(window.getComputedStyle(o).overflow==="hidden"){let l=eo(e);for(;e&&l&&e!==o&&l!==o;)Zn(l,e),e=l,l=eo(e)}else{const{left:l,top:s}=e.getBoundingClientRect();(n=e==null?void 0:e.scrollIntoView)==null||n.call(e,{block:"nearest"});const{left:a,top:i}=e.getBoundingClientRect();(Math.abs(l-a)>1||Math.abs(s-i)>1)&&((r=e.scrollIntoView)==null||r.call(e,{block:"nearest"}))}}}var Yo={border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:"0",position:"absolute",width:"1px","white-space":"nowrap"};function Be(e){return t=>(e(t),()=>e(void 0))}function Ln(e,t){const[n,r]=B(oo(t==null?void 0:t()));return G(()=>{var o;r(((o=e())==null?void 0:o.tagName.toLowerCase())||oo(t==null?void 0:t()))}),n}function oo(e){return Pt(e)?e:void 0}function ce(e){const[t,n]=re(e,["as"]);if(!t.as)throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");return y(Dl,_(n,{get component(){return t.as}}))}var Vs=["id","name","validationState","required","disabled","readOnly"];function Ns(e){const t=`form-control-${He()}`,n=X({id:t},e),[r,o]=B(),[l,s]=B(),[a,i]=B(),[u,c]=B(),p=(d,h,v)=>{const m=v!=null||r()!=null;return[v,r(),m&&h!=null?d:void 0].filter(Boolean).join(" ")||void 0},f=d=>[a(),u(),d].filter(Boolean).join(" ")||void 0,g=q(()=>({"data-valid":E(n.validationState)==="valid"?"":void 0,"data-invalid":E(n.validationState)==="invalid"?"":void 0,"data-required":E(n.required)?"":void 0,"data-disabled":E(n.disabled)?"":void 0,"data-readonly":E(n.readOnly)?"":void 0}));return{formControlContext:{name:()=>E(n.name)??E(n.id),dataset:g,validationState:()=>E(n.validationState),isRequired:()=>E(n.required),isDisabled:()=>E(n.disabled),isReadOnly:()=>E(n.readOnly),labelId:r,fieldId:l,descriptionId:a,errorMessageId:u,getAriaLabelledBy:p,getAriaDescribedBy:f,generateId:un(()=>E(n.id)),registerLabel:Be(o),registerField:Be(s),registerDescription:Be(i),registerErrorMessage:Be(c)}}}var Xo=ke();function dn(){const e=$e(Xo);if(e===void 0)throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");return e}function Jo(e){const t=dn(),n=X({id:t.generateId("description")},e);return G(()=>j(t.registerDescription(n.id))),y(ce,_({as:"div"},()=>t.dataset(),n))}function ei(e){const t=dn(),n=X({id:t.generateId("error-message")},e),[r,o]=re(n,["forceMount"]),l=()=>t.validationState()==="invalid";return G(()=>{l()&&j(t.registerErrorMessage(o.id))}),y(U,{get when(){return r.forceMount||l()},get children(){return y(ce,_({as:"div"},()=>t.dataset(),o))}})}function js(e){let t;const n=dn(),r=X({id:n.generateId("label")},e),[o,l]=re(r,["ref"]),s=Ln(()=>t,()=>"label");return G(()=>j(n.registerLabel(l.id))),y(ce,_({as:"label",ref(a){const i=qe(u=>t=u,o.ref);typeof i=="function"&&i(a)},get for(){return q(()=>s()==="label")()?n.fieldId():void 0}},()=>n.dataset(),l))}function Qs(e,t){G(dt(e,n=>{if(n==null)return;const r=Ws(n);r!=null&&(r.addEventListener("reset",t,{passive:!0}),j(()=>{r.removeEventListener("reset",t)}))}))}function Ws(e){return _s(e)?e.form:e.closest("form")}function _s(e){return e.matches("textarea, input, select, button")}function cn(e){var t;const[n,r]=B((t=e.defaultValue)==null?void 0:t.call(e)),o=q(()=>{var s;return((s=e.value)==null?void 0:s.call(e))!==void 0}),l=q(()=>{var s;return o()?(s=e.value)==null?void 0:s.call(e):n()});return[l,s=>{Bt(()=>{var a;const i=Rl(s,l());return Object.is(i,l())||(o()||r(i),(a=e.onChange)==null||a.call(e,i)),i})}]}function ti(e){const[t,n]=cn(e);return[()=>t()??!1,n]}function Zs(e){const[t,n]=cn(e);return[()=>t()??[],n]}function Ys(e={}){const[t,n]=ti({value:()=>E(e.isSelected),defaultValue:()=>!!E(e.defaultIsSelected),onChange:r=>{var o;return(o=e.onSelectedChange)==null?void 0:o.call(e,r)}});return{isSelected:t,setIsSelected:r=>{!E(e.isReadOnly)&&!E(e.isDisabled)&&n(r)},toggle:()=>{!E(e.isReadOnly)&&!E(e.isDisabled)&&n(!t())}}}var Xs=Object.defineProperty,Dn=(e,t)=>{for(var n in t)Xs(e,n,{get:t[n],enumerable:!0})},ni=ke();function ri(){return $e(ni)}function Js(){const e=ri();if(e===void 0)throw new Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");return e}function oi(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}function ea(e,t){var n;const r=t.ref();if(!r)return-1;let o=e.length;if(!o)return-1;for(;o--;){const l=(n=e[o])==null?void 0:n.ref();if(l&&oi(l,r))return o+1}return 0}function ta(e){const t=e.map((r,o)=>[o,r]);let n=!1;return t.sort(([r,o],[l,s])=>{const a=o.ref(),i=s.ref();return a===i||!a||!i?0:oi(a,i)?(r>l&&(n=!0),-1):(r<l&&(n=!0),1)}),n?t.map(([r,o])=>o):e}function ii(e,t){const n=ta(e);e!==n&&t(n)}function na(e){var t,n;const r=e[0],o=(t=e[e.length-1])==null?void 0:t.ref();let l=(n=r==null?void 0:r.ref())==null?void 0:n.parentElement;for(;l;){if(o&&l.contains(o))return l;l=l.parentElement}return Je(l).body}function ra(e,t){G(()=>{const n=setTimeout(()=>{ii(e(),t)});j(()=>clearTimeout(n))})}function oa(e,t){if(typeof IntersectionObserver!="function"){ra(e,t);return}let n=[];G(()=>{const r=()=>{const s=!!n.length;n=e(),s&&ii(e(),t)},o=na(e()),l=new IntersectionObserver(r,{root:o});for(const s of e()){const a=s.ref();a&&l.observe(a)}j(()=>l.disconnect())})}function ia(e={}){const[t,n]=Zs({value:()=>E(e.items),onChange:o=>{var l;return(l=e.onItemsChange)==null?void 0:l.call(e,o)}});oa(t,n);const r=o=>(n(l=>{const s=ea(l,o);return ks(l,o,s)}),()=>{n(l=>{const s=l.filter(a=>a.ref()!==o.ref());return l.length===s.length?l:s})});return{DomCollectionProvider:o=>y(ni.Provider,{value:{registerItem:r},get children(){return o.children}})}}function la(e){const t=Js(),n=X({shouldRegisterItem:!0},e);G(()=>{if(!n.shouldRegisterItem)return;const r=t.registerItem(n.getItem());j(r)})}function li(e){let t=e.startIndex??0;const n=e.startLevel??0,r=[],o=i=>{if(i==null)return"";const u=e.getKey??"key",c=Pt(u)?i[u]:u(i);return c!=null?String(c):""},l=i=>{if(i==null)return"";const u=e.getTextValue??"textValue",c=Pt(u)?i[u]:u(i);return c!=null?String(c):""},s=i=>{if(i==null)return!1;const u=e.getDisabled??"disabled";return(Pt(u)?i[u]:u(i))??!1},a=i=>{var u;if(i!=null)return Pt(e.getSectionChildren)?i[e.getSectionChildren]:(u=e.getSectionChildren)==null?void 0:u.call(e,i)};for(const i of e.dataSource){if(Pt(i)||$s(i)){r.push({type:"item",rawValue:i,key:String(i),textValue:String(i),disabled:s(i),level:n,index:t}),t++;continue}if(a(i)!=null){r.push({type:"section",rawValue:i,key:"",textValue:"",disabled:!1,level:n,index:t}),t++;const u=a(i)??[];if(u.length>0){const c=li({dataSource:u,getKey:e.getKey,getTextValue:e.getTextValue,getDisabled:e.getDisabled,getSectionChildren:e.getSectionChildren,startIndex:t,startLevel:n+1});r.push(...c),t+=c.length}}else r.push({type:"item",rawValue:i,key:o(i),textValue:l(i),disabled:s(i),level:n,index:t}),t++}return r}function sa(e,t=[]){return q(()=>{const n=li({dataSource:E(e.dataSource),getKey:E(e.getKey),getTextValue:E(e.getTextValue),getDisabled:E(e.getDisabled),getSectionChildren:E(e.getSectionChildren)});for(let r=0;r<t.length;r++)t[r]();return e.factory(n)})}var aa=new Set(["Avst","Arab","Armi","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),ua=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function da(e){if(Intl.Locale){const n=new Intl.Locale(e).maximize().script??"";return aa.has(n)}const t=e.split("-")[0];return ua.has(t)}function ca(e){return da(e)?"rtl":"ltr"}function si(){let e=typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";return{locale:e,direction:ca(e)}}var Yn=si(),tn=new Set;function io(){Yn=si();for(const e of tn)e(Yn)}function fa(){const[e,t]=B(Yn),n=q(()=>e());return Ft(()=>{tn.size===0&&window.addEventListener("languagechange",io),tn.add(t),j(()=>{tn.delete(t),tn.size===0&&window.removeEventListener("languagechange",io)})}),{locale:()=>n().locale,direction:()=>n().direction}}var ga=ke();function kt(){const e=fa();return $e(ga)||e}var Bn=new Map;function pa(e){const{locale:t}=kt(),n=q(()=>t()+(e?Object.entries(e).sort((r,o)=>r[0]<o[0]?-1:1).join():""));return q(()=>{const r=n();let o;return Bn.has(r)&&(o=Bn.get(r)),o||(o=new Intl.Collator(t(),e),Bn.set(r,o)),o})}var at=class ai extends Set{constructor(t,n,r){super(t),Ve(this,"anchorKey"),Ve(this,"currentKey"),t instanceof ai?(this.anchorKey=n||t.anchorKey,this.currentKey=r||t.currentKey):(this.anchorKey=n,this.currentKey=r)}};function ha(e){const[t,n]=cn(e);return[()=>t()??new at,n]}function ui(e){return Ts()?e.altKey:e.ctrlKey}function Kt(e){return Fn()?e.metaKey:e.ctrlKey}function lo(e){return new at(e)}function ya(e,t){if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0}function va(e){const t=X({selectionMode:"none",selectionBehavior:"toggle"},e),[n,r]=B(!1),[o,l]=B(),s=q(()=>{const h=E(t.selectedKeys);return h!=null?lo(h):h}),a=q(()=>{const h=E(t.defaultSelectedKeys);return h!=null?lo(h):new at}),[i,u]=ha({value:s,defaultValue:a,onChange:h=>{var v;return(v=t.onSelectionChange)==null?void 0:v.call(t,h)}}),[c,p]=B(E(t.selectionBehavior)),f=()=>E(t.selectionMode),g=()=>E(t.disallowEmptySelection)??!1,d=h=>{(E(t.allowDuplicateSelectionEvents)||!ya(h,i()))&&u(h)};return G(()=>{const h=i();E(t.selectionBehavior)==="replace"&&c()==="toggle"&&typeof h=="object"&&h.size===0&&p("replace")}),G(()=>{p(E(t.selectionBehavior)??"toggle")}),{selectionMode:f,disallowEmptySelection:g,selectionBehavior:c,setSelectionBehavior:p,isFocused:n,setFocused:r,focusedKey:o,setFocusedKey:l,selectedKeys:i,setSelectedKeys:d}}function ma(e){const[t,n]=B(""),[r,o]=B(-1);return{typeSelectHandlers:{onKeyDown:l=>{var s;if(E(e.isDisabled))return;const a=E(e.keyboardDelegate),i=E(e.selectionManager);if(!a.getKeyForSearch)return;const u=ba(l.key);if(!u||l.ctrlKey||l.metaKey)return;u===" "&&t().trim().length>0&&(l.preventDefault(),l.stopPropagation());let c=n(f=>f+u),p=a.getKeyForSearch(c,i.focusedKey())??a.getKeyForSearch(c);p==null&&xa(c)&&(c=c[0],p=a.getKeyForSearch(c,i.focusedKey())??a.getKeyForSearch(c)),p!=null&&(i.setFocusedKey(p),(s=e.onTypeSelect)==null||s.call(e,p)),clearTimeout(r()),o(window.setTimeout(()=>n(""),500))}}}}function ba(e){return e.length===1||!/^[A-Z]/i.test(e)?e:""}function xa(e){return e.split("").every(t=>t===e[0])}function wa(e,t,n){const r=_({selectOnFocus:()=>E(e.selectionManager).selectionBehavior()==="replace"},e),o=()=>t(),{direction:l}=kt();let s={top:0,left:0};bs(()=>E(r.isVirtualized)?void 0:o(),"scroll",()=>{const d=o();d&&(s={top:d.scrollTop,left:d.scrollLeft})});const{typeSelectHandlers:a}=ma({isDisabled:()=>E(r.disallowTypeAhead),keyboardDelegate:()=>E(r.keyboardDelegate),selectionManager:()=>E(r.selectionManager)}),i=()=>E(r.orientation)??"vertical",u=d=>{var h,v,m,b,x,w,S,K;de(d,a.onKeyDown),d.altKey&&d.key==="Tab"&&d.preventDefault();const P=t();if(!(P!=null&&P.contains(d.target)))return;const I=E(r.selectionManager),k=E(r.selectOnFocus),L=R=>{R!=null&&(I.setFocusedKey(R),d.shiftKey&&I.selectionMode()==="multiple"?I.extendSelection(R):k&&!ui(d)&&I.replaceSelection(R))},O=E(r.keyboardDelegate),N=E(r.shouldFocusWrap),Q=I.focusedKey();switch(d.key){case(i()==="vertical"?"ArrowDown":"ArrowRight"):{if(O.getKeyBelow){d.preventDefault();let R;Q!=null?R=O.getKeyBelow(Q):R=(h=O.getFirstKey)==null?void 0:h.call(O),R==null&&N&&(R=(v=O.getFirstKey)==null?void 0:v.call(O,Q)),L(R)}break}case(i()==="vertical"?"ArrowUp":"ArrowLeft"):{if(O.getKeyAbove){d.preventDefault();let R;Q!=null?R=O.getKeyAbove(Q):R=(m=O.getLastKey)==null?void 0:m.call(O),R==null&&N&&(R=(b=O.getLastKey)==null?void 0:b.call(O,Q)),L(R)}break}case(i()==="vertical"?"ArrowLeft":"ArrowUp"):{if(O.getKeyLeftOf){d.preventDefault();const R=l()==="rtl";let Y;Q!=null?Y=O.getKeyLeftOf(Q):Y=R?(x=O.getFirstKey)==null?void 0:x.call(O):(w=O.getLastKey)==null?void 0:w.call(O),L(Y)}break}case(i()==="vertical"?"ArrowRight":"ArrowDown"):{if(O.getKeyRightOf){d.preventDefault();const R=l()==="rtl";let Y;Q!=null?Y=O.getKeyRightOf(Q):Y=R?(S=O.getLastKey)==null?void 0:S.call(O):(K=O.getFirstKey)==null?void 0:K.call(O),L(Y)}break}case"Home":if(O.getFirstKey){d.preventDefault();const R=O.getFirstKey(Q,Kt(d));R!=null&&(I.setFocusedKey(R),Kt(d)&&d.shiftKey&&I.selectionMode()==="multiple"?I.extendSelection(R):k&&I.replaceSelection(R))}break;case"End":if(O.getLastKey){d.preventDefault();const R=O.getLastKey(Q,Kt(d));R!=null&&(I.setFocusedKey(R),Kt(d)&&d.shiftKey&&I.selectionMode()==="multiple"?I.extendSelection(R):k&&I.replaceSelection(R))}break;case"PageDown":if(O.getKeyPageBelow&&Q!=null){d.preventDefault();const R=O.getKeyPageBelow(Q);L(R)}break;case"PageUp":if(O.getKeyPageAbove&&Q!=null){d.preventDefault();const R=O.getKeyPageAbove(Q);L(R)}break;case"a":Kt(d)&&I.selectionMode()==="multiple"&&E(r.disallowSelectAll)!==!0&&(d.preventDefault(),I.selectAll());break;case"Escape":d.defaultPrevented||(d.preventDefault(),E(r.disallowEmptySelection)||I.clearSelection());break;case"Tab":if(!E(r.allowsTabNavigation)){if(d.shiftKey)P.focus();else{const R=Rs(P,{tabbable:!0});let Y,ee;do ee=R.lastChild(),ee&&(Y=ee);while(ee);Y&&!Y.contains(document.activeElement)&&Ce(Y)}break}}},c=d=>{var h,v;const m=E(r.selectionManager),b=E(r.keyboardDelegate),x=E(r.selectOnFocus);if(m.isFocused()){d.currentTarget.contains(d.target)||m.setFocused(!1);return}if(d.currentTarget.contains(d.target)){if(m.setFocused(!0),m.focusedKey()==null){const w=K=>{K!=null&&(m.setFocusedKey(K),x&&m.replaceSelection(K))},S=d.relatedTarget;S&&d.currentTarget.compareDocumentPosition(S)&Node.DOCUMENT_POSITION_FOLLOWING?w(m.lastSelectedKey()??((h=b.getLastKey)==null?void 0:h.call(b))):w(m.firstSelectedKey()??((v=b.getFirstKey)==null?void 0:v.call(b)))}else if(!E(r.isVirtualized)){const w=o();if(w){w.scrollTop=s.top,w.scrollLeft=s.left;const S=w.querySelector(`[data-key="${m.focusedKey()}"]`);S&&(Ce(S),Zn(w,S))}}}},p=d=>{const h=E(r.selectionManager);d.currentTarget.contains(d.relatedTarget)||h.setFocused(!1)},f=d=>{o()===d.target&&d.preventDefault()},g=()=>{var d,h;const v=E(r.autoFocus);if(!v)return;const m=E(r.selectionManager),b=E(r.keyboardDelegate);let x;v==="first"&&(x=(d=b.getFirstKey)==null?void 0:d.call(b)),v==="last"&&(x=(h=b.getLastKey)==null?void 0:h.call(b));const w=m.selectedKeys();w.size&&(x=w.values().next().value),m.setFocused(!0),m.setFocusedKey(x);const S=t();S&&x==null&&!E(r.shouldUseVirtualFocus)&&Ce(S)};return Ft(()=>{r.deferAutoFocus?setTimeout(g,0):g()}),G(dt([o,()=>E(r.isVirtualized),()=>E(r.selectionManager).focusedKey()],d=>{var h;const[v,m,b]=d;if(m)b&&((h=r.scrollToKey)==null||h.call(r,b));else if(b&&v){const x=v.querySelector(`[data-key="${b}"]`);x&&Zn(v,x)}})),{tabIndex:q(()=>{if(!E(r.shouldUseVirtualFocus))return E(r.selectionManager).focusedKey()==null?0:-1}),onKeyDown:u,onMouseDown:f,onFocusIn:c,onFocusOut:p}}function di(e,t){const n=()=>E(e.selectionManager),r=()=>E(e.key),o=()=>E(e.shouldUseVirtualFocus),l=b=>{n().selectionMode()!=="none"&&(n().selectionMode()==="single"?n().isSelected(r())&&!n().disallowEmptySelection()?n().toggleSelection(r()):n().replaceSelection(r()):b!=null&&b.shiftKey?n().extendSelection(r()):n().selectionBehavior()==="toggle"||Kt(b)||"pointerType"in b&&b.pointerType==="touch"?n().toggleSelection(r()):n().replaceSelection(r()))},s=()=>n().isSelected(r()),a=()=>E(e.disabled)||n().isDisabled(r()),i=()=>!a()&&n().canSelectItem(r());let u=null;const c=b=>{i()&&(u=b.pointerType,b.pointerType==="mouse"&&b.button===0&&!E(e.shouldSelectOnPressUp)&&l(b))},p=b=>{i()&&b.pointerType==="mouse"&&b.button===0&&E(e.shouldSelectOnPressUp)&&E(e.allowsDifferentPressOrigin)&&l(b)},f=b=>{i()&&(E(e.shouldSelectOnPressUp)&&!E(e.allowsDifferentPressOrigin)||u!=="mouse")&&l(b)},g=b=>{!i()||!["Enter"," "].includes(b.key)||(ui(b)?n().toggleSelection(r()):l(b))},d=b=>{a()&&b.preventDefault()},h=b=>{const x=t();o()||a()||!x||b.target===x&&n().setFocusedKey(r())},v=q(()=>{if(!(o()||a()))return r()===n().focusedKey()?0:-1}),m=q(()=>E(e.virtualized)?void 0:r());return G(dt([t,r,o,()=>n().focusedKey(),()=>n().isFocused()],([b,x,w,S,K])=>{b&&x===S&&K&&!w&&document.activeElement!==b&&(e.focus?e.focus():Ce(b))})),{isSelected:s,isDisabled:a,allowsSelection:i,tabIndex:v,dataKey:m,onPointerDown:c,onPointerUp:p,onClick:f,onKeyDown:g,onMouseDown:d,onFocus:h}}var ka=class{constructor(e,t){Ve(this,"collection"),Ve(this,"state"),this.collection=e,this.state=t}selectionMode(){return this.state.selectionMode()}disallowEmptySelection(){return this.state.disallowEmptySelection()}selectionBehavior(){return this.state.selectionBehavior()}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}isFocused(){return this.state.isFocused()}setFocused(e){this.state.setFocused(e)}focusedKey(){return this.state.focusedKey()}setFocusedKey(e){(e==null||this.collection().getItem(e))&&this.state.setFocusedKey(e)}selectedKeys(){return this.state.selectedKeys()}isSelected(e){if(this.state.selectionMode()==="none")return!1;const t=this.getKey(e);return t==null?!1:this.state.selectedKeys().has(t)}isEmpty(){return this.state.selectedKeys().size===0}isSelectAll(){if(this.isEmpty())return!1;const e=this.state.selectedKeys();return this.getAllSelectableKeys().every(t=>e.has(t))}firstSelectedKey(){let e;for(const t of this.state.selectedKeys()){const n=this.collection().getItem(t),r=(n==null?void 0:n.index)!=null&&(e==null?void 0:e.index)!=null&&n.index<e.index;(!e||r)&&(e=n)}return e==null?void 0:e.key}lastSelectedKey(){let e;for(const t of this.state.selectedKeys()){const n=this.collection().getItem(t),r=(n==null?void 0:n.index)!=null&&(e==null?void 0:e.index)!=null&&n.index>e.index;(!e||r)&&(e=n)}return e==null?void 0:e.key}extendSelection(e){if(this.selectionMode()==="none")return;if(this.selectionMode()==="single"){this.replaceSelection(e);return}const t=this.getKey(e);if(t==null)return;const n=this.state.selectedKeys(),r=n.anchorKey||t,o=new at(n,r,t);for(const l of this.getKeyRange(r,n.currentKey||t))o.delete(l);for(const l of this.getKeyRange(t,r))this.canSelectItem(l)&&o.add(l);this.state.setSelectedKeys(o)}getKeyRange(e,t){const n=this.collection().getItem(e),r=this.collection().getItem(t);return n&&r?n.index!=null&&r.index!=null&&n.index<=r.index?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){const n=[];let r=e;for(;r!=null;){const o=this.collection().getItem(r);if(o&&o.type==="item"&&n.push(r),r===t)return n;r=this.collection().getKeyAfter(r)}return[]}getKey(e){const t=this.collection().getItem(e);return t?!t||t.type!=="item"?null:t.key:e}toggleSelection(e){if(this.selectionMode()==="none")return;if(this.selectionMode()==="single"&&!this.isSelected(e)){this.replaceSelection(e);return}const t=this.getKey(e);if(t==null)return;const n=new at(this.state.selectedKeys());n.has(t)?n.delete(t):this.canSelectItem(t)&&(n.add(t),n.anchorKey=t,n.currentKey=t),!(this.disallowEmptySelection()&&n.size===0)&&this.state.setSelectedKeys(n)}replaceSelection(e){if(this.selectionMode()==="none")return;const t=this.getKey(e);if(t==null)return;const n=this.canSelectItem(t)?new at([t],t,t):new at;this.state.setSelectedKeys(n)}setSelectedKeys(e){if(this.selectionMode()==="none")return;const t=new at;for(const n of e){const r=this.getKey(n);if(r!=null&&(t.add(r),this.selectionMode()==="single"))break}this.state.setSelectedKeys(t)}selectAll(){this.selectionMode()==="multiple"&&this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()))}clearSelection(){const e=this.state.selectedKeys();!this.disallowEmptySelection()&&e.size>0&&this.state.setSelectedKeys(new at)}toggleSelectAll(){this.isSelectAll()?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode()!=="none"&&(this.selectionMode()==="single"?this.isSelected(e)&&!this.disallowEmptySelection()?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior()==="toggle"||t&&t.pointerType==="touch"?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys())return!0;const t=this.selectedKeys();if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;for(const n of t)if(!e.has(n))return!1;return!0}canSelectItem(e){if(this.state.selectionMode()==="none")return!1;const t=this.collection().getItem(e);return t!=null&&!t.disabled}isDisabled(e){const t=this.collection().getItem(e);return!t||t.disabled}getAllSelectableKeys(){const e=[];return(t=>{for(;t!=null;){if(this.canSelectItem(t)){const n=this.collection().getItem(t);if(!n)continue;n.type==="item"&&e.push(t)}t=this.collection().getKeyAfter(t)}})(this.collection().getFirstKey()),e}},so=class{constructor(e){Ve(this,"keyMap",new Map),Ve(this,"iterable"),Ve(this,"firstKey"),Ve(this,"lastKey"),this.iterable=e;for(const r of e)this.keyMap.set(r.key,r);if(this.keyMap.size===0)return;let t,n=0;for(const[r,o]of this.keyMap)t?(t.nextKey=r,o.prevKey=t.key):(this.firstKey=r,o.prevKey=void 0),o.type==="item"&&(o.index=n++),t=o,t.nextKey=void 0;this.lastKey=t.key}*[Symbol.iterator](){yield*this.iterable}getSize(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){var t;return(t=this.keyMap.get(e))==null?void 0:t.prevKey}getKeyAfter(e){var t;return(t=this.keyMap.get(e))==null?void 0:t.nextKey}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){const t=[...this.getKeys()];return this.getItem(t[e])}};function $a(e){const t=va(e),n=sa({dataSource:()=>E(e.dataSource),getKey:()=>E(e.getKey),getTextValue:()=>E(e.getTextValue),getDisabled:()=>E(e.getDisabled),getSectionChildren:()=>E(e.getSectionChildren),factory:o=>e.filter?new so(e.filter(o)):new so(o)},[()=>e.filter]),r=new ka(n,t);return Al(()=>{const o=t.focusedKey();o!=null&&!n().getItem(o)&&t.setFocusedKey(void 0)}),{collection:n,selectionManager:()=>r}}var Se=e=>typeof e=="function"?e():e,Sa=e=>{const t=q(()=>{const s=Se(e.element);if(s)return getComputedStyle(s)}),n=()=>{var s;return((s=t())==null?void 0:s.animationName)??"none"},[r,o]=B(Se(e.show)?"present":"hidden");let l="none";return G(s=>{const a=Se(e.show);return Bt(()=>{var i;if(s===a)return a;const u=l,c=n();a?o("present"):c==="none"||((i=t())==null?void 0:i.display)==="none"?o("hidden"):o(s===!0&&u!==c?"hiding":"hidden")}),a}),G(()=>{const s=Se(e.element);if(!s)return;const a=u=>{u.target===s&&(l=n())},i=u=>{const c=n().includes(u.animationName);u.target===s&&c&&r()==="hiding"&&o("hidden")};s.addEventListener("animationstart",a),s.addEventListener("animationcancel",i),s.addEventListener("animationend",i),j(()=>{s.removeEventListener("animationstart",a),s.removeEventListener("animationcancel",i),s.removeEventListener("animationend",i)})}),{present:()=>r()==="present"||r()==="hiding",state:r}},Ca=Sa,ci=Ca,$n="data-kb-top-layer",fi,Xn=!1,ct=[];function rn(e){return ct.findIndex(t=>t.node===e)}function Ea(e){return ct[rn(e)]}function qa(e){return ct[ct.length-1].node===e}function gi(){return ct.filter(e=>e.isPointerBlocking)}function Ma(){return[...gi()].slice(-1)[0]}function cr(){return gi().length>0}function pi(e){var t;const n=rn((t=Ma())==null?void 0:t.node);return rn(e)<n}function Ta(e){ct.push(e)}function Fa(e){const t=rn(e);t<0||ct.splice(t,1)}function La(){for(const{node:e}of ct)e.style.pointerEvents=pi(e)?"none":"auto"}function Da(e){if(cr()&&!Xn){const t=Je(e);fi=document.body.style.pointerEvents,t.body.style.pointerEvents="none",Xn=!0}}function Aa(e){if(cr())return;const t=Je(e);t.body.style.pointerEvents=fi,t.body.style.length===0&&t.body.removeAttribute("style"),Xn=!1}var Fe={layers:ct,isTopMostLayer:qa,hasPointerBlockingLayer:cr,isBelowPointerBlockingLayer:pi,addLayer:Ta,removeLayer:Fa,indexOf:rn,find:Ea,assignPointerEventToLayers:La,disableBodyPointerEvents:Da,restoreBodyPointerEvents:Aa},Oa={};Dn(Oa,{Button:()=>Pa,Root:()=>fr});var Ia=["button","color","file","image","reset","submit"];function za(e){const t=e.tagName.toLowerCase();return t==="button"?!0:t==="input"&&e.type?Ia.indexOf(e.type)!==-1:!1}function fr(e){let t;const n=X({type:"button"},e),[r,o]=re(n,["ref","type","disabled"]),l=Ln(()=>t,()=>"button"),s=q(()=>{const u=l();return u==null?!1:za({tagName:u,type:r.type})}),a=q(()=>l()==="input"),i=q(()=>l()==="a"&&(t==null?void 0:t.getAttribute("href"))!=null);return y(ce,_({as:"button",ref(u){const c=qe(p=>t=p,r.ref);typeof c=="function"&&c(u)},get type(){return s()||a()?r.type:void 0},get role(){return!s()&&!i()?"button":void 0},get tabIndex(){return!s()&&!i()&&!r.disabled?0:void 0},get disabled(){return s()||a()?r.disabled:void 0},get"aria-disabled"(){return!s()&&!a()&&r.disabled?!0:void 0},get"data-disabled"(){return r.disabled?"":void 0}},o))}var Pa=fr,Ka=["top","right","bottom","left"],Xe=Math.min,De=Math.max,Sn=Math.round,bn=Math.floor,bt=e=>({x:e,y:e}),Ra={left:"right",right:"left",bottom:"top",top:"bottom"},Ba={start:"end",end:"start"};function Jn(e,t,n){return De(e,Xe(t,n))}function Lt(e,t){return typeof e=="function"?e(t):e}function xt(e){return e.split("-")[0]}function Gt(e){return e.split("-")[1]}function hi(e){return e==="x"?"y":"x"}function gr(e){return e==="y"?"height":"width"}function Mt(e){return["top","bottom"].includes(xt(e))?"y":"x"}function pr(e){return hi(Mt(e))}function Ha(e,t,n){n===void 0&&(n=!1);const r=Gt(e),o=pr(e),l=gr(o);let s=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[l]>t.floating[l]&&(s=Cn(s)),[s,Cn(s)]}function Ua(e){const t=Cn(e);return[er(e),t,er(t)]}function er(e){return e.replace(/start|end/g,t=>Ba[t])}function Ga(e,t,n){const r=["left","right"],o=["right","left"],l=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?l:s;default:return[]}}function Va(e,t,n,r){const o=Gt(e);let l=Ga(xt(e),n==="start",r);return o&&(l=l.map(s=>s+"-"+o),t&&(l=l.concat(l.map(er)))),l}function Cn(e){return e.replace(/left|right|bottom|top/g,t=>Ra[t])}function Na(e){return{top:0,right:0,bottom:0,left:0,...e}}function yi(e){return typeof e!="number"?Na(e):{top:e,right:e,bottom:e,left:e}}function En(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function ao(e,t,n){let{reference:r,floating:o}=e;const l=Mt(t),s=pr(t),a=gr(s),i=xt(t),u=l==="y",c=r.x+r.width/2-o.width/2,p=r.y+r.height/2-o.height/2,f=r[a]/2-o[a]/2;let g;switch(i){case"top":g={x:c,y:r.y-o.height};break;case"bottom":g={x:c,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-o.width,y:p};break;default:g={x:r.x,y:r.y}}switch(Gt(t)){case"start":g[s]-=f*(n&&u?-1:1);break;case"end":g[s]+=f*(n&&u?-1:1);break}return g}var ja=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:l=[],platform:s}=n,a=l.filter(Boolean),i=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:c,y:p}=ao(u,r,i),f=r,g={},d=0;for(let h=0;h<a.length;h++){const{name:v,fn:m}=a[h],{x:b,y:x,data:w,reset:S}=await m({x:c,y:p,initialPlacement:r,placement:f,strategy:o,middlewareData:g,rects:u,platform:s,elements:{reference:e,floating:t}});c=b??c,p=x??p,g={...g,[v]:{...g[v],...w}},S&&d<=50&&(d++,typeof S=="object"&&(S.placement&&(f=S.placement),S.rects&&(u=S.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):S.rects),{x:c,y:p}=ao(u,f,i)),h=-1)}return{x:c,y:p,placement:f,strategy:o,middlewareData:g}};async function on(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:l,rects:s,elements:a,strategy:i}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:p="floating",altBoundary:f=!1,padding:g=0}=Lt(t,e),d=yi(g),h=a[f?p==="floating"?"reference":"floating":p],v=En(await l.getClippingRect({element:(n=await(l.isElement==null?void 0:l.isElement(h)))==null||n?h:h.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(a.floating)),boundary:u,rootBoundary:c,strategy:i})),m=p==="floating"?{x:r,y:o,width:s.floating.width,height:s.floating.height}:s.reference,b=await(l.getOffsetParent==null?void 0:l.getOffsetParent(a.floating)),x=await(l.isElement==null?void 0:l.isElement(b))?await(l.getScale==null?void 0:l.getScale(b))||{x:1,y:1}:{x:1,y:1},w=En(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:m,offsetParent:b,strategy:i}):m);return{top:(v.top-w.top+d.top)/x.y,bottom:(w.bottom-v.bottom+d.bottom)/x.y,left:(v.left-w.left+d.left)/x.x,right:(w.right-v.right+d.right)/x.x}}var Qa=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:l,platform:s,elements:a,middlewareData:i}=t,{element:u,padding:c=0}=Lt(e,t)||{};if(u==null)return{};const p=yi(c),f={x:n,y:r},g=pr(o),d=gr(g),h=await s.getDimensions(u),v=g==="y",m=v?"top":"left",b=v?"bottom":"right",x=v?"clientHeight":"clientWidth",w=l.reference[d]+l.reference[g]-f[g]-l.floating[d],S=f[g]-l.reference[g],K=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let P=K?K[x]:0;(!P||!await(s.isElement==null?void 0:s.isElement(K)))&&(P=a.floating[x]||l.floating[d]);const I=w/2-S/2,k=P/2-h[d]/2-1,L=Xe(p[m],k),O=Xe(p[b],k),N=L,Q=P-h[d]-O,R=P/2-h[d]/2+I,Y=Jn(N,R,Q),ee=!i.arrow&&Gt(o)!=null&&R!==Y&&l.reference[d]/2-(R<N?L:O)-h[d]/2<0,ie=ee?R<N?R-N:R-Q:0;return{[g]:f[g]+ie,data:{[g]:Y,centerOffset:R-Y-ie,...ee&&{alignmentOffset:ie}},reset:ee}}}),Wa=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:l,rects:s,initialPlacement:a,platform:i,elements:u}=t,{mainAxis:c=!0,crossAxis:p=!0,fallbackPlacements:f,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:h=!0,...v}=Lt(e,t);if((n=l.arrow)!=null&&n.alignmentOffset)return{};const m=xt(o),b=Mt(a),x=xt(a)===a,w=await(i.isRTL==null?void 0:i.isRTL(u.floating)),S=f||(x||!h?[Cn(a)]:Ua(a)),K=d!=="none";!f&&K&&S.push(...Va(a,h,d,w));const P=[a,...S],I=await on(t,v),k=[];let L=((r=l.flip)==null?void 0:r.overflows)||[];if(c&&k.push(I[m]),p){const R=Ha(o,s,w);k.push(I[R[0]],I[R[1]])}if(L=[...L,{placement:o,overflows:k}],!k.every(R=>R<=0)){var O,N;const R=(((O=l.flip)==null?void 0:O.index)||0)+1,Y=P[R];if(Y)return{data:{index:R,overflows:L},reset:{placement:Y}};let ee=(N=L.filter(ie=>ie.overflows[0]<=0).sort((ie,le)=>ie.overflows[1]-le.overflows[1])[0])==null?void 0:N.placement;if(!ee)switch(g){case"bestFit":{var Q;const ie=(Q=L.filter(le=>{if(K){const ae=Mt(le.placement);return ae===b||ae==="y"}return!0}).map(le=>[le.placement,le.overflows.filter(ae=>ae>0).reduce((ae,he)=>ae+he,0)]).sort((le,ae)=>le[1]-ae[1])[0])==null?void 0:Q[0];ie&&(ee=ie);break}case"initialPlacement":ee=a;break}if(o!==ee)return{reset:{placement:ee}}}return{}}}};function uo(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function co(e){return Ka.some(t=>e[t]>=0)}var _a=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=Lt(e,t);switch(r){case"referenceHidden":{const l=await on(t,{...o,elementContext:"reference"}),s=uo(l,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:co(s)}}}case"escaped":{const l=await on(t,{...o,altBoundary:!0}),s=uo(l,n.floating);return{data:{escapedOffsets:s,escaped:co(s)}}}default:return{}}}}};async function Za(e,t){const{placement:n,platform:r,elements:o}=e,l=await(r.isRTL==null?void 0:r.isRTL(o.floating)),s=xt(n),a=Gt(n),i=Mt(n)==="y",u=["left","top"].includes(s)?-1:1,c=l&&i?-1:1,p=Lt(t,e);let{mainAxis:f,crossAxis:g,alignmentAxis:d}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return a&&typeof d=="number"&&(g=a==="end"?d*-1:d),i?{x:g*c,y:f*u}:{x:f*u,y:g*c}}var Ya=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:l,placement:s,middlewareData:a}=t,i=await Za(t,e);return s===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:o+i.x,y:l+i.y,data:{...i,placement:s}}}}},Xa=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:l=!0,crossAxis:s=!1,limiter:a={fn:v=>{let{x:m,y:b}=v;return{x:m,y:b}}},...i}=Lt(e,t),u={x:n,y:r},c=await on(t,i),p=Mt(xt(o)),f=hi(p);let g=u[f],d=u[p];if(l){const v=f==="y"?"top":"left",m=f==="y"?"bottom":"right",b=g+c[v],x=g-c[m];g=Jn(b,g,x)}if(s){const v=p==="y"?"top":"left",m=p==="y"?"bottom":"right",b=d+c[v],x=d-c[m];d=Jn(b,d,x)}const h=a.fn({...t,[f]:g,[p]:d});return{...h,data:{x:h.x-n,y:h.y-r}}}}},Ja=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:l}=t,{apply:s=()=>{},...a}=Lt(e,t),i=await on(t,a),u=xt(n),c=Gt(n),p=Mt(n)==="y",{width:f,height:g}=r.floating;let d,h;u==="top"||u==="bottom"?(d=u,h=c===(await(o.isRTL==null?void 0:o.isRTL(l.floating))?"start":"end")?"left":"right"):(h=u,d=c==="end"?"top":"bottom");const v=g-i.top-i.bottom,m=f-i.left-i.right,b=Xe(g-i[d],v),x=Xe(f-i[h],m),w=!t.middlewareData.shift;let S=b,K=x;if(p?K=c||w?Xe(x,m):m:S=c||w?Xe(b,v):v,w&&!c){const I=De(i.left,0),k=De(i.right,0),L=De(i.top,0),O=De(i.bottom,0);p?K=f-2*(I!==0||k!==0?I+k:De(i.left,i.right)):S=g-2*(L!==0||O!==0?L+O:De(i.top,i.bottom))}await s({...t,availableWidth:K,availableHeight:S});const P=await o.getDimensions(l.floating);return f!==P.width||g!==P.height?{reset:{rects:!0}}:{}}}};function Vt(e){return vi(e)?(e.nodeName||"").toLowerCase():"#document"}function Ae(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ft(e){var t;return(t=(vi(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function vi(e){return e instanceof Node||e instanceof Ae(e).Node}function Qe(e){return e instanceof Element||e instanceof Ae(e).Element}function et(e){return e instanceof HTMLElement||e instanceof Ae(e).HTMLElement}function fo(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ae(e).ShadowRoot}function fn(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=We(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function eu(e){return["table","td","th"].includes(Vt(e))}function An(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function hr(e){const t=yr(),n=Qe(e)?We(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function tu(e){let t=wt(e);for(;et(t)&&!Ut(t);){if(hr(t))return t;if(An(t))return null;t=wt(t)}return null}function yr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ut(e){return["html","body","#document"].includes(Vt(e))}function We(e){return Ae(e).getComputedStyle(e)}function On(e){return Qe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function wt(e){if(Vt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||fo(e)&&e.host||ft(e);return fo(t)?t.host:t}function mi(e){const t=wt(e);return Ut(t)?e.ownerDocument?e.ownerDocument.body:e.body:et(t)&&fn(t)?t:mi(t)}function ln(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=mi(e),l=o===((r=e.ownerDocument)==null?void 0:r.body),s=Ae(o);return l?t.concat(s,s.visualViewport||[],fn(o)?o:[],s.frameElement&&n?ln(s.frameElement):[]):t.concat(o,ln(o,[],n))}function bi(e){const t=We(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=et(e),l=o?e.offsetWidth:n,s=o?e.offsetHeight:r,a=Sn(n)!==l||Sn(r)!==s;return a&&(n=l,r=s),{width:n,height:r,$:a}}function vr(e){return Qe(e)?e:e.contextElement}function Ht(e){const t=vr(e);if(!et(t))return bt(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:l}=bi(t);let s=(l?Sn(n.width):n.width)/r,a=(l?Sn(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}var nu=bt(0);function xi(e){const t=Ae(e);return!yr()||!t.visualViewport?nu:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ru(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Ae(e)?!1:t}function Tt(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),l=vr(e);let s=bt(1);t&&(r?Qe(r)&&(s=Ht(r)):s=Ht(e));const a=ru(l,n,r)?xi(l):bt(0);let i=(o.left+a.x)/s.x,u=(o.top+a.y)/s.y,c=o.width/s.x,p=o.height/s.y;if(l){const f=Ae(l),g=r&&Qe(r)?Ae(r):r;let d=f,h=d.frameElement;for(;h&&r&&g!==d;){const v=Ht(h),m=h.getBoundingClientRect(),b=We(h),x=m.left+(h.clientLeft+parseFloat(b.paddingLeft))*v.x,w=m.top+(h.clientTop+parseFloat(b.paddingTop))*v.y;i*=v.x,u*=v.y,c*=v.x,p*=v.y,i+=x,u+=w,d=Ae(h),h=d.frameElement}}return En({width:c,height:p,x:i,y:u})}function ou(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const l=o==="fixed",s=ft(r),a=t?An(t.floating):!1;if(r===s||a&&l)return n;let i={scrollLeft:0,scrollTop:0},u=bt(1);const c=bt(0),p=et(r);if((p||!p&&!l)&&((Vt(r)!=="body"||fn(s))&&(i=On(r)),et(r))){const f=Tt(r);u=Ht(r),c.x=f.x+r.clientLeft,c.y=f.y+r.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-i.scrollLeft*u.x+c.x,y:n.y*u.y-i.scrollTop*u.y+c.y}}function iu(e){return Array.from(e.getClientRects())}function wi(e){return Tt(ft(e)).left+On(e).scrollLeft}function lu(e){const t=ft(e),n=On(e),r=e.ownerDocument.body,o=De(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),l=De(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+wi(e);const a=-n.scrollTop;return We(r).direction==="rtl"&&(s+=De(t.clientWidth,r.clientWidth)-o),{width:o,height:l,x:s,y:a}}function su(e,t){const n=Ae(e),r=ft(e),o=n.visualViewport;let l=r.clientWidth,s=r.clientHeight,a=0,i=0;if(o){l=o.width,s=o.height;const u=yr();(!u||u&&t==="fixed")&&(a=o.offsetLeft,i=o.offsetTop)}return{width:l,height:s,x:a,y:i}}function au(e,t){const n=Tt(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,l=et(e)?Ht(e):bt(1),s=e.clientWidth*l.x,a=e.clientHeight*l.y,i=o*l.x,u=r*l.y;return{width:s,height:a,x:i,y:u}}function go(e,t,n){let r;if(t==="viewport")r=su(e,n);else if(t==="document")r=lu(ft(e));else if(Qe(t))r=au(t,n);else{const o=xi(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return En(r)}function ki(e,t){const n=wt(e);return n===t||!Qe(n)||Ut(n)?!1:We(n).position==="fixed"||ki(n,t)}function uu(e,t){const n=t.get(e);if(n)return n;let r=ln(e,[],!1).filter(a=>Qe(a)&&Vt(a)!=="body"),o=null;const l=We(e).position==="fixed";let s=l?wt(e):e;for(;Qe(s)&&!Ut(s);){const a=We(s),i=hr(s);!i&&a.position==="fixed"&&(o=null),(l?!i&&!o:!i&&a.position==="static"&&o&&["absolute","fixed"].includes(o.position)||fn(s)&&!i&&ki(e,s))?r=r.filter(u=>u!==s):o=a,s=wt(s)}return t.set(e,r),r}function du(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const l=[...n==="clippingAncestors"?An(t)?[]:uu(t,this._c):[].concat(n),r],s=l[0],a=l.reduce((i,u)=>{const c=go(t,u,o);return i.top=De(c.top,i.top),i.right=Xe(c.right,i.right),i.bottom=Xe(c.bottom,i.bottom),i.left=De(c.left,i.left),i},go(t,s,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function cu(e){const{width:t,height:n}=bi(e);return{width:t,height:n}}function fu(e,t,n){const r=et(t),o=ft(t),l=n==="fixed",s=Tt(e,!0,l,t);let a={scrollLeft:0,scrollTop:0};const i=bt(0);if(r||!r&&!l)if((Vt(t)!=="body"||fn(o))&&(a=On(t)),r){const p=Tt(t,!0,l,t);i.x=p.x+t.clientLeft,i.y=p.y+t.clientTop}else o&&(i.x=wi(o));const u=s.left+a.scrollLeft-i.x,c=s.top+a.scrollTop-i.y;return{x:u,y:c,width:s.width,height:s.height}}function Hn(e){return We(e).position==="static"}function po(e,t){return!et(e)||We(e).position==="fixed"?null:t?t(e):e.offsetParent}function $i(e,t){const n=Ae(e);if(An(e))return n;if(!et(e)){let o=wt(e);for(;o&&!Ut(o);){if(Qe(o)&&!Hn(o))return o;o=wt(o)}return n}let r=po(e,t);for(;r&&eu(r)&&Hn(r);)r=po(r,t);return r&&Ut(r)&&Hn(r)&&!hr(r)?n:r||tu(e)||n}var gu=async function(e){const t=this.getOffsetParent||$i,n=this.getDimensions,r=await n(e.floating);return{reference:fu(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function pu(e){return We(e).direction==="rtl"}var Si={convertOffsetParentRelativeRectToViewportRelativeRect:ou,getDocumentElement:ft,getClippingRect:du,getOffsetParent:$i,getElementRects:gu,getClientRects:iu,getDimensions:cu,getScale:Ht,isElement:Qe,isRTL:pu};function hu(e,t){let n=null,r;const o=ft(e);function l(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function s(a,i){a===void 0&&(a=!1),i===void 0&&(i=1),l();const{left:u,top:c,width:p,height:f}=e.getBoundingClientRect();if(a||t(),!p||!f)return;const g=bn(c),d=bn(o.clientWidth-(u+p)),h=bn(o.clientHeight-(c+f)),v=bn(u),m={rootMargin:-g+"px "+-d+"px "+-h+"px "+-v+"px",threshold:De(0,Xe(1,i))||1};let b=!0;function x(w){const S=w[0].intersectionRatio;if(S!==i){if(!b)return s();S?s(!1,S):r=setTimeout(()=>{s(!1,1e-7)},1e3)}b=!1}try{n=new IntersectionObserver(x,{...m,root:o.ownerDocument})}catch{n=new IntersectionObserver(x,m)}n.observe(e)}return s(!0),l}function yu(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:l=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:i=!1}=r,u=vr(e),c=o||l?[...u?ln(u):[],...ln(t)]:[];c.forEach(m=>{o&&m.addEventListener("scroll",n,{passive:!0}),l&&m.addEventListener("resize",n)});const p=u&&a?hu(u,n):null;let f=-1,g=null;s&&(g=new ResizeObserver(m=>{let[b]=m;b&&b.target===u&&g&&(g.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var x;(x=g)==null||x.observe(t)})),n()}),u&&!i&&g.observe(u),g.observe(t));let d,h=i?Tt(e):null;i&&v();function v(){const m=Tt(e);h&&(m.x!==h.x||m.y!==h.y||m.width!==h.width||m.height!==h.height)&&n(),h=m,d=requestAnimationFrame(v)}return n(),()=>{var m;c.forEach(b=>{o&&b.removeEventListener("scroll",n),l&&b.removeEventListener("resize",n)}),p==null||p(),(m=g)==null||m.disconnect(),g=null,i&&cancelAnimationFrame(d)}}var vu=Ya,mu=Xa,bu=Wa,xu=Ja,wu=_a,ku=Qa,$u=(e,t,n)=>{const r=new Map,o={platform:Si,...n},l={...o.platform,_c:r};return ja(e,t,{...o,platform:l})},mr=ke();function br(){const e=$e(mr);if(e===void 0)throw new Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");return e}var Su=z('<svg display="block" viewBox="0 0 30 30" style="transform:scale(1.02)"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z">'),tr=30,ho=tr/2,Cu={top:180,right:-90,bottom:0,left:90};function xr(e){const t=br(),n=X({size:tr},e),[r,o]=re(n,["ref","style","size"]),l=()=>t.currentPlacement().split("-")[0],s=Eu(t.contentRef),a=()=>{var f;return((f=s())==null?void 0:f.getPropertyValue("background-color"))||"none"},i=()=>{var f;return((f=s())==null?void 0:f.getPropertyValue(`border-${l()}-color`))||"none"},u=()=>{var f;return((f=s())==null?void 0:f.getPropertyValue(`border-${l()}-width`))||"0px"},c=()=>Number.parseInt(u())*2*(tr/r.size),p=()=>`rotate(${Cu[l()]} ${ho} ${ho}) translate(0 2)`;return y(ce,_({as:"div",ref(f){const g=qe(t.setArrowRef,r.ref);typeof g=="function"&&g(f)},"aria-hidden":"true",get style(){return Tn({position:"absolute","font-size":`${r.size}px`,width:"1em",height:"1em","pointer-events":"none",fill:a(),stroke:i(),"stroke-width":c()},r.style)}},o,{get children(){const f=Su(),g=f.firstChild;return V(()=>T(g,"transform",p())),f}}))}function Eu(e){const[t,n]=B();return G(()=>{const r=e();r&&n(Cs(r).getComputedStyle(r))}),t}function qu(e){const t=br(),[n,r]=re(e,["ref","style"]);return y(ce,_({as:"div",ref(o){const l=qe(t.setPositionerRef,n.ref);typeof l=="function"&&l(o)},"data-popper-positioner":"",get style(){return Tn({position:"absolute",top:0,left:0,"min-width":"max-content"},n.style)}},r))}function yo(e){const{x:t=0,y:n=0,width:r=0,height:o=0}=e??{};if(typeof DOMRect=="function")return new DOMRect(t,n,r,o);const l={x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:n+o,left:t};return{...l,toJSON:()=>l}}function Mu(e,t){return{contextElement:e,getBoundingClientRect:()=>{const n=t(e);return n?yo(n):e?e.getBoundingClientRect():yo()}}}function Tu(e){return/^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e)}var Fu={top:"bottom",right:"left",bottom:"top",left:"right"};function Lu(e,t){const[n,r]=e.split("-"),o=Fu[n];return r?n==="left"||n==="right"?`${o} ${r==="start"?"top":"bottom"}`:r==="start"?`${o} ${t==="rtl"?"right":"left"}`:`${o} ${t==="rtl"?"left":"right"}`:`${o} center`}function Du(e){const t=X({getAnchorRect:f=>f==null?void 0:f.getBoundingClientRect(),placement:"bottom",gutter:0,shift:0,flip:!0,slide:!0,overlap:!1,sameWidth:!1,fitViewport:!1,hideWhenDetached:!1,detachedPadding:0,arrowPadding:4,overflowPadding:8},e),[n,r]=B(),[o,l]=B(),[s,a]=B(t.placement),i=()=>{var f;return Mu((f=t.anchorRef)==null?void 0:f.call(t),t.getAnchorRect)},{direction:u}=kt();async function c(){var f,g;const d=i(),h=n(),v=o();if(!d||!h)return;const m=((v==null?void 0:v.clientHeight)||0)/2,b=typeof t.gutter=="number"?t.gutter+m:t.gutter??m;h.style.setProperty("--kb-popper-content-overflow-padding",`${t.overflowPadding}px`),d.getBoundingClientRect();const x=[vu(({placement:I})=>{const k=!!I.split("-")[1];return{mainAxis:b,crossAxis:k?void 0:t.shift,alignmentAxis:t.shift}})];if(t.flip!==!1){const I=typeof t.flip=="string"?t.flip.split(" "):void 0;if(I!==void 0&&!I.every(Tu))throw new Error("`flip` expects a spaced-delimited list of placements");x.push(bu({padding:t.overflowPadding,fallbackPlacements:I}))}(t.slide||t.overlap)&&x.push(mu({mainAxis:t.slide,crossAxis:t.overlap,padding:t.overflowPadding})),x.push(xu({padding:t.overflowPadding,apply({availableWidth:I,availableHeight:k,rects:L}){const O=Math.round(L.reference.width);I=Math.floor(I),k=Math.floor(k),h.style.setProperty("--kb-popper-anchor-width",`${O}px`),h.style.setProperty("--kb-popper-content-available-width",`${I}px`),h.style.setProperty("--kb-popper-content-available-height",`${k}px`),t.sameWidth&&(h.style.width=`${O}px`),t.fitViewport&&(h.style.maxWidth=`${I}px`,h.style.maxHeight=`${k}px`)}})),t.hideWhenDetached&&x.push(wu({padding:t.detachedPadding})),v&&x.push(ku({element:v,padding:t.arrowPadding}));const w=await $u(d,h,{placement:t.placement,strategy:"absolute",middleware:x,platform:{...Si,isRTL:()=>u()==="rtl"}});if(a(w.placement),(f=t.onCurrentPlacementChange)==null||f.call(t,w.placement),!h)return;h.style.setProperty("--kb-popper-content-transform-origin",Lu(w.placement,u()));const S=Math.round(w.x),K=Math.round(w.y);let P;if(t.hideWhenDetached&&(P=(g=w.middlewareData.hide)!=null&&g.referenceHidden?"hidden":"visible"),Object.assign(h.style,{top:"0",left:"0",transform:`translate3d(${S}px, ${K}px, 0)`,visibility:P}),v&&w.middlewareData.arrow){const{x:I,y:k}=w.middlewareData.arrow,L=w.placement.split("-")[0];Object.assign(v.style,{left:I!=null?`${I}px`:"",top:k!=null?`${k}px`:"",[L]:"100%"})}}G(()=>{const f=i(),g=n();if(!f||!g)return;const d=yu(f,g,c,{elementResize:typeof ResizeObserver=="function"});j(d)}),G(()=>{var f;const g=n(),d=(f=t.contentRef)==null?void 0:f.call(t);!g||!d||queueMicrotask(()=>{g.style.zIndex=getComputedStyle(d).zIndex})});const p={currentPlacement:s,contentRef:()=>{var f;return(f=t.contentRef)==null?void 0:f.call(t)},setPositionerRef:r,setArrowRef:l};return y(mr.Provider,{value:p,get children(){return t.children}})}var Ci=Object.assign(Du,{Arrow:xr,Context:mr,usePopperContext:br,Positioner:qu});function Au(e){const t=n=>{var r;n.key===sr.Escape&&((r=e.onEscapeKeyDown)==null||r.call(e,n))};G(()=>{var n;if(E(e.isDisabled))return;const r=((n=e.ownerDocument)==null?void 0:n.call(e))??Je();r.addEventListener("keydown",t),j(()=>{r.removeEventListener("keydown",t)})})}var vo="interactOutside.pointerDownOutside",mo="interactOutside.focusOutside";function Ou(e,t){let n,r=Hs;const o=()=>Je(t()),l=p=>{var f;return(f=e.onPointerDownOutside)==null?void 0:f.call(e,p)},s=p=>{var f;return(f=e.onFocusOutside)==null?void 0:f.call(e,p)},a=p=>{var f;return(f=e.onInteractOutside)==null?void 0:f.call(e,p)},i=p=>{var f;const g=p.target;return!(g instanceof HTMLElement)||g.closest(`[${$n}]`)||!Re(o(),g)||Re(t(),g)?!1:!((f=e.shouldExcludeElement)!=null&&f.call(e,g))},u=p=>{function f(){const g=t(),d=p.target;if(!g||!d||!i(p))return;const h=be([l,a]);d.addEventListener(vo,h,{once:!0});const v=new CustomEvent(vo,{bubbles:!1,cancelable:!0,detail:{originalEvent:p,isContextMenu:p.button===2||Fs(p)&&p.button===0}});d.dispatchEvent(v)}p.pointerType==="touch"?(o().removeEventListener("click",f),r=f,o().addEventListener("click",f,{once:!0})):f()},c=p=>{const f=t(),g=p.target;if(!f||!g||!i(p))return;const d=be([s,a]);g.addEventListener(mo,d,{once:!0});const h=new CustomEvent(mo,{bubbles:!1,cancelable:!0,detail:{originalEvent:p,isContextMenu:!1}});g.dispatchEvent(h)};G(()=>{E(e.isDisabled)||(n=window.setTimeout(()=>{o().addEventListener("pointerdown",u,!0)},0),o().addEventListener("focusin",c,!0),j(()=>{window.clearTimeout(n),o().removeEventListener("click",r),o().removeEventListener("pointerdown",u,!0),o().removeEventListener("focusin",c,!0)}))})}var Ei=ke();function Iu(){return $e(Ei)}function zu(e){let t;const n=Iu(),[r,o]=re(e,["ref","disableOutsidePointerEvents","excludedElements","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","bypassTopMostLayerCheck"]),l=new Set([]),s=i=>{l.add(i);const u=n==null?void 0:n.registerNestedLayer(i);return()=>{l.delete(i),u==null||u()}};Ou({shouldExcludeElement:i=>{var u;return t?((u=r.excludedElements)==null?void 0:u.some(c=>Re(c(),i)))||[...l].some(c=>Re(c,i)):!1},onPointerDownOutside:i=>{var u,c,p;!t||Fe.isBelowPointerBlockingLayer(t)||!r.bypassTopMostLayerCheck&&!Fe.isTopMostLayer(t)||((u=r.onPointerDownOutside)==null||u.call(r,i),(c=r.onInteractOutside)==null||c.call(r,i),i.defaultPrevented||(p=r.onDismiss)==null||p.call(r))},onFocusOutside:i=>{var u,c,p;(u=r.onFocusOutside)==null||u.call(r,i),(c=r.onInteractOutside)==null||c.call(r,i),i.defaultPrevented||(p=r.onDismiss)==null||p.call(r)}},()=>t),Au({ownerDocument:()=>Je(t),onEscapeKeyDown:i=>{var u;!t||!Fe.isTopMostLayer(t)||((u=r.onEscapeKeyDown)==null||u.call(r,i),!i.defaultPrevented&&r.onDismiss&&(i.preventDefault(),r.onDismiss()))}}),Ft(()=>{if(!t)return;Fe.addLayer({node:t,isPointerBlocking:r.disableOutsidePointerEvents,dismiss:r.onDismiss});const i=n==null?void 0:n.registerNestedLayer(t);Fe.assignPointerEventToLayers(),Fe.disableBodyPointerEvents(t),j(()=>{t&&(Fe.removeLayer(t),i==null||i(),Fe.assignPointerEventToLayers(),Fe.restoreBodyPointerEvents(t))})}),G(dt([()=>t,()=>r.disableOutsidePointerEvents],([i,u])=>{if(!i)return;const c=Fe.find(i);c&&c.isPointerBlocking!==u&&(c.isPointerBlocking=u,Fe.assignPointerEventToLayers()),u&&Fe.disableBodyPointerEvents(i),j(()=>{Fe.restoreBodyPointerEvents(i)})},{defer:!0}));const a={registerNestedLayer:s};return y(Ei.Provider,{value:a,get children(){return y(ce,_({as:"div",ref(i){const u=qe(c=>t=c,r.ref);typeof u=="function"&&u(i)}},o))}})}function qi(e={}){const[t,n]=ti({value:()=>E(e.open),defaultValue:()=>!!E(e.defaultOpen),onChange:l=>{var s;return(s=e.onOpenChange)==null?void 0:s.call(e,l)}}),r=()=>{n(!0)},o=()=>{n(!1)};return{isOpen:t,setIsOpen:n,open:r,close:o,toggle:()=>{t()?o():r()}}}var Ke={};Dn(Ke,{Description:()=>Jo,ErrorMessage:()=>ei,Item:()=>Li,ItemControl:()=>Di,ItemDescription:()=>Ai,ItemIndicator:()=>Oi,ItemInput:()=>Ii,ItemLabel:()=>zi,Label:()=>Pi,RadioGroup:()=>Pu,Root:()=>Ki});var Mi=ke();function Ti(){const e=$e(Mi);if(e===void 0)throw new Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");return e}var Fi=ke();function gn(){const e=$e(Fi);if(e===void 0)throw new Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");return e}function Li(e){const t=dn(),n=Ti(),r=`${t.generateId("item")}-${He()}`,o=X({id:r},e),[l,s]=re(o,["value","disabled","onPointerDown"]),[a,i]=B(),[u,c]=B(),[p,f]=B(),[g,d]=B(),[h,v]=B(!1),m=q(()=>n.isSelectedValue(l.value)),b=q(()=>l.disabled||t.isDisabled()||!1),x=K=>{de(K,l.onPointerDown),h()&&K.preventDefault()},w=q(()=>({...t.dataset(),"data-disabled":b()?"":void 0,"data-checked":m()?"":void 0})),S={value:()=>l.value,dataset:w,isSelected:m,isDisabled:b,inputId:a,labelId:u,descriptionId:p,inputRef:g,select:()=>n.setSelectedValue(l.value),generateId:un(()=>s.id),registerInput:Be(i),registerLabel:Be(c),registerDescription:Be(f),setIsFocused:v,setInputRef:d};return y(Fi.Provider,{value:S,get children(){return y(ce,_({as:"div",role:"group",onPointerDown:x},w,s))}})}function Di(e){const t=gn(),n=X({id:t.generateId("control")},e),[r,o]=re(n,["onClick","onKeyDown"]);return y(ce,_({as:"div",onClick:l=>{var s;de(l,r.onClick),t.select(),(s=t.inputRef())==null||s.focus()},onKeyDown:l=>{var s;de(l,r.onKeyDown),l.key===sr.Space&&(t.select(),(s=t.inputRef())==null||s.focus())}},()=>t.dataset(),o))}function Ai(e){const t=gn(),n=X({id:t.generateId("description")},e);return G(()=>j(t.registerDescription(n.id))),y(ce,_({as:"div"},()=>t.dataset(),n))}function Oi(e){const t=gn(),n=X({id:t.generateId("indicator")},e),[r,o]=re(n,["ref","forceMount"]),[l,s]=B(),{present:a}=ci({show:()=>r.forceMount||t.isSelected(),element:()=>l()??null});return y(U,{get when(){return a()},get children(){return y(ce,_({as:"div",ref(i){const u=qe(s,r.ref);typeof u=="function"&&u(i)}},()=>t.dataset(),o))}})}function Ii(e){const t=dn(),n=Ti(),r=gn(),o=X({id:r.generateId("input")},e),[l,s]=re(o,["ref","style","aria-labelledby","aria-describedby","onChange","onFocus","onBlur"]),a=()=>[l["aria-labelledby"],r.labelId(),l["aria-labelledby"]!=null&&s["aria-label"]!=null?s.id:void 0].filter(Boolean).join(" ")||void 0,i=()=>[l["aria-describedby"],r.descriptionId(),n.ariaDescribedBy()].filter(Boolean).join(" ")||void 0,[u,c]=B(!1),p=d=>{if(de(d,l.onChange),d.stopPropagation(),!u()){n.setSelectedValue(r.value());const h=d.target;h.checked=r.isSelected()}c(!1)},f=d=>{de(d,l.onFocus),r.setIsFocused(!0)},g=d=>{de(d,l.onBlur),r.setIsFocused(!1)};return G(dt([()=>r.isSelected(),()=>r.value()],d=>{if(!d[0]&&d[1]===r.value())return;c(!0);const h=r.inputRef();h==null||h.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),h==null||h.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))},{defer:!0})),G(()=>j(r.registerInput(s.id))),y(ce,_({as:"input",ref(d){const h=qe(r.setInputRef,l.ref);typeof h=="function"&&h(d)},type:"radio",get name(){return t.name()},get value(){return r.value()},get checked(){return r.isSelected()},get required(){return t.isRequired()},get disabled(){return r.isDisabled()},get readonly(){return t.isReadOnly()},get style(){return Tn({...Yo},l.style)},get"aria-labelledby"(){return a()},get"aria-describedby"(){return i()},onChange:p,onFocus:f,onBlur:g},()=>r.dataset(),s))}function zi(e){const t=gn(),n=X({id:t.generateId("label")},e);return G(()=>j(t.registerLabel(n.id))),y(ce,_({as:"label",get for(){return t.inputId()}},()=>t.dataset(),n))}function Pi(e){return y(js,_({as:"span"},e))}function Ki(e){let t;const n=`radiogroup-${He()}`,r=X({id:n,orientation:"vertical"},e),[o,l,s]=re(r,["ref","value","defaultValue","onChange","orientation","aria-labelledby","aria-describedby"],Vs),[a,i]=cn({value:()=>o.value,defaultValue:()=>o.defaultValue,onChange:d=>{var h;return(h=o.onChange)==null?void 0:h.call(o,d)}}),{formControlContext:u}=Ns(l);Qs(()=>t,()=>i(o.defaultValue??""));const c=()=>u.getAriaLabelledBy(E(l.id),s["aria-label"],o["aria-labelledby"]),p=()=>u.getAriaDescribedBy(o["aria-describedby"]),f=d=>d===a(),g={ariaDescribedBy:p,isSelectedValue:f,setSelectedValue:d=>{if(!(u.isReadOnly()||u.isDisabled())&&(i(d),t))for(const h of t.querySelectorAll("[type='radio']")){const v=h;v.checked=f(v.value)}}};return y(Xo.Provider,{value:u,get children(){return y(Mi.Provider,{value:g,get children(){return y(ce,_({as:"div",ref(d){const h=qe(v=>t=v,o.ref);typeof h=="function"&&h(d)},role:"radiogroup",get id(){return E(l.id)},get"aria-invalid"(){return u.validationState()==="invalid"||void 0},get"aria-required"(){return u.isRequired()||void 0},get"aria-disabled"(){return u.isDisabled()||void 0},get"aria-readonly"(){return u.isReadOnly()||void 0},get"aria-orientation"(){return o.orientation},get"aria-labelledby"(){return c()},get"aria-describedby"(){return p()}},()=>u.dataset(),s))}})}})}var Pu=Object.assign(Ki,{Description:Jo,ErrorMessage:ei,Item:Li,ItemControl:Di,ItemDescription:Ai,ItemIndicator:Oi,ItemInput:Ii,ItemLabel:zi,Label:Pi}),Ku=class{constructor(e,t,n){Ve(this,"collection"),Ve(this,"ref"),Ve(this,"collator"),this.collection=e,this.ref=t,this.collator=n}getKeyBelow(e){let t=this.collection().getKeyAfter(e);for(;t!=null;){const n=this.collection().getItem(t);if(n&&n.type==="item"&&!n.disabled)return t;t=this.collection().getKeyAfter(t)}}getKeyAbove(e){let t=this.collection().getKeyBefore(e);for(;t!=null;){const n=this.collection().getItem(t);if(n&&n.type==="item"&&!n.disabled)return t;t=this.collection().getKeyBefore(t)}}getFirstKey(){let e=this.collection().getFirstKey();for(;e!=null;){const t=this.collection().getItem(e);if(t&&t.type==="item"&&!t.disabled)return e;e=this.collection().getKeyAfter(e)}}getLastKey(){let e=this.collection().getLastKey();for(;e!=null;){const t=this.collection().getItem(e);if(t&&t.type==="item"&&!t.disabled)return e;e=this.collection().getKeyBefore(e)}}getItem(e){var t,n;return((n=(t=this.ref)==null?void 0:t.call(this))==null?void 0:n.querySelector(`[data-key="${e}"]`))??null}getKeyPageAbove(e){var t;const n=(t=this.ref)==null?void 0:t.call(this);let r=this.getItem(e);if(!n||!r)return;const o=Math.max(0,r.offsetTop+r.offsetHeight-n.offsetHeight);let l=e;for(;l&&r&&r.offsetTop>o;)l=this.getKeyAbove(l),r=l!=null?this.getItem(l):null;return l}getKeyPageBelow(e){var t;const n=(t=this.ref)==null?void 0:t.call(this);let r=this.getItem(e);if(!n||!r)return;const o=Math.min(n.scrollHeight,r.offsetTop-r.offsetHeight+n.offsetHeight);let l=e;for(;l&&r&&r.offsetTop<o;)l=this.getKeyBelow(l),r=l!=null?this.getItem(l):null;return l}getKeyForSearch(e,t){var n;const r=(n=this.collator)==null?void 0:n.call(this);if(!r)return;let o=t!=null?this.getKeyBelow(t):this.getFirstKey();for(;o!=null;){const l=this.collection().getItem(o);if(l){const s=l.textValue.slice(0,e.length);if(l.textValue&&r.compare(s,e)===0)return o}o=this.getKeyBelow(o)}}};function Ru(e,t,n){const r=pa({usage:"search",sensitivity:"base"}),o=q(()=>E(e.keyboardDelegate)||new Ku(e.collection,t,r));return wa({selectionManager:()=>E(e.selectionManager),keyboardDelegate:o,autoFocus:()=>E(e.autoFocus),deferAutoFocus:()=>E(e.deferAutoFocus),shouldFocusWrap:()=>E(e.shouldFocusWrap),disallowEmptySelection:()=>E(e.disallowEmptySelection),selectOnFocus:()=>E(e.selectOnFocus),disallowTypeAhead:()=>E(e.disallowTypeAhead),shouldUseVirtualFocus:()=>E(e.shouldUseVirtualFocus),allowsTabNavigation:()=>E(e.allowsTabNavigation),isVirtualized:()=>E(e.isVirtualized),scrollToKey:l=>{var s;return(s=E(e.scrollToKey))==null?void 0:s(l)},orientation:()=>E(e.orientation)},t)}var Un="focusScope.autoFocusOnMount",Gn="focusScope.autoFocusOnUnmount",bo={bubbles:!1,cancelable:!0},xo={stack:[],active(){return this.stack[0]},add(e){var t;e!==this.active()&&((t=this.active())==null||t.pause()),this.stack=_n(this.stack,e),this.stack.unshift(e)},remove(e){var t;this.stack=_n(this.stack,e),(t=this.active())==null||t.resume()}};function Bu(e,t){const[n,r]=B(!1),o={pause(){r(!0)},resume(){r(!1)}};let l=null;const s=d=>{var h;return(h=e.onMountAutoFocus)==null?void 0:h.call(e,d)},a=d=>{var h;return(h=e.onUnmountAutoFocus)==null?void 0:h.call(e,d)},i=()=>Je(t()),u=()=>{const d=i().createElement("span");return d.setAttribute("data-focus-trap",""),d.tabIndex=0,Object.assign(d.style,Yo),d},c=()=>{const d=t();return d?_o(d,!0).filter(h=>!h.hasAttribute("data-focus-trap")):[]},p=()=>{const d=c();return d.length>0?d[0]:null},f=()=>{const d=c();return d.length>0?d[d.length-1]:null},g=()=>{const d=t();if(!d)return!1;const h=en(d);return!h||Re(d,h)?!1:Zo(h)};G(()=>{const d=t();if(!d)return;xo.add(o);const h=en(d);if(!Re(d,h)){const v=new CustomEvent(Un,bo);d.addEventListener(Un,s),d.dispatchEvent(v),v.defaultPrevented||setTimeout(()=>{Ce(p()),en(d)===h&&Ce(d)},0)}j(()=>{d.removeEventListener(Un,s),setTimeout(()=>{const v=new CustomEvent(Gn,bo);g()&&v.preventDefault(),d.addEventListener(Gn,a),d.dispatchEvent(v),v.defaultPrevented||Ce(h??i().body),d.removeEventListener(Gn,a),xo.remove(o)},0)})}),G(()=>{const d=t();if(!d||!E(e.trapFocus)||n())return;const h=m=>{const b=m.target;b!=null&&b.closest(`[${$n}]`)||(Re(d,b)?l=b:Ce(l))},v=m=>{const b=m.relatedTarget??en(d);b!=null&&b.closest(`[${$n}]`)||Re(d,b)||Ce(l)};i().addEventListener("focusin",h),i().addEventListener("focusout",v),j(()=>{i().removeEventListener("focusin",h),i().removeEventListener("focusout",v)})}),G(()=>{const d=t();if(!d||!E(e.trapFocus)||n())return;const h=u();d.insertAdjacentElement("afterbegin",h);const v=u();d.insertAdjacentElement("beforeend",v);function m(x){const w=p(),S=f();x.relatedTarget===w?Ce(S):Ce(w)}h.addEventListener("focusin",m),v.addEventListener("focusin",m);const b=new MutationObserver(x=>{for(const w of x)w.previousSibling===v&&(v.remove(),d.insertAdjacentElement("beforeend",v)),w.nextSibling===h&&(h.remove(),d.insertAdjacentElement("afterbegin",h))});b.observe(d,{childList:!0,subtree:!1}),j(()=>{h.removeEventListener("focusin",m),v.removeEventListener("focusin",m),h.remove(),v.remove(),b.disconnect()})})}var Hu="data-live-announcer";function Uu(e){G(()=>{E(e.isDisabled)||j(Gu(E(e.targets),E(e.root)))})}var Xt=new WeakMap,Pe=[];function Gu(e,t=document.body){const n=new Set(e),r=new Set,o=i=>{for(const f of i.querySelectorAll(`[${Hu}], [${$n}]`))n.add(f);const u=f=>{if(n.has(f)||f.parentElement&&r.has(f.parentElement)&&f.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(const g of n)if(f.contains(g))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},c=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,{acceptNode:u}),p=u(i);if(p===NodeFilter.FILTER_ACCEPT&&l(i),p!==NodeFilter.FILTER_REJECT){let f=c.nextNode();for(;f!=null;)l(f),f=c.nextNode()}},l=i=>{const u=Xt.get(i)??0;i.getAttribute("aria-hidden")==="true"&&u===0||(u===0&&i.setAttribute("aria-hidden","true"),r.add(i),Xt.set(i,u+1))};Pe.length&&Pe[Pe.length-1].disconnect(),o(t);const s=new MutationObserver(i=>{for(const u of i)if(!(u.type!=="childList"||u.addedNodes.length===0)&&![...n,...r].some(c=>c.contains(u.target))){for(const c of u.removedNodes)c instanceof Element&&(n.delete(c),r.delete(c));for(const c of u.addedNodes)(c instanceof HTMLElement||c instanceof SVGElement)&&(c.dataset.liveAnnouncer==="true"||c.dataset.reactAriaTopLayer==="true")?n.add(c):c instanceof Element&&o(c)}});s.observe(t,{childList:!0,subtree:!0});const a={observe(){s.observe(t,{childList:!0,subtree:!0})},disconnect(){s.disconnect()}};return Pe.push(a),()=>{s.disconnect();for(const i of r){const u=Xt.get(i);if(u==null)return;u===1?(i.removeAttribute("aria-hidden"),Xt.delete(i)):Xt.set(i,u-1)}a===Pe[Pe.length-1]?(Pe.pop(),Pe.length&&Pe[Pe.length-1].observe()):Pe.splice(Pe.indexOf(a),1)}}var xn=new Map,Vu=e=>{G(()=>{const t=Se(e.style)??{},n=Se(e.properties)??[],r={};for(const l in t)r[l]=e.element.style[l];const o=xn.get(e.key);o?o.activeCount++:xn.set(e.key,{activeCount:1,originalStyles:r,properties:n.map(l=>l.key)}),Object.assign(e.element.style,e.style);for(const l of n)e.element.style.setProperty(l.key,l.value);j(()=>{var l;const s=xn.get(e.key);if(s){if(s.activeCount!==1){s.activeCount--;return}xn.delete(e.key);for(const[a,i]of Object.entries(s.originalStyles))e.element.style[a]=i;for(const a of s.properties)e.element.style.removeProperty(a);e.element.style.length===0&&e.element.removeAttribute("style"),(l=e.cleanup)==null||l.call(e)}})})},wo=Vu,Nu=(e,t)=>{switch(t){case"x":return[e.clientWidth,e.scrollLeft,e.scrollWidth];case"y":return[e.clientHeight,e.scrollTop,e.scrollHeight]}},ju=(e,t)=>{const n=getComputedStyle(e),r=t==="x"?n.overflowX:n.overflowY;return r==="auto"||r==="scroll"||e.tagName==="HTML"&&r==="visible"},Qu=(e,t,n)=>{const r=t==="x"&&window.getComputedStyle(e).direction==="rtl"?-1:1;let o=e,l=0,s=0,a=!1;do{const[i,u,c]=Nu(o,t),p=c-i-r*u;(u!==0||p!==0)&&ju(o,t)&&(l+=p,s+=u),o===(n??document.documentElement)?a=!0:o=o._$host??o.parentElement}while(o&&!a);return[l,s]},[ko,$o]=B([]),Wu=e=>ko().indexOf(e)===ko().length-1,_u=e=>{const t=_({element:null,enabled:!0,hideScrollbar:!0,preventScrollbarShift:!0,preventScrollbarShiftMode:"padding",restoreScrollPosition:!0,allowPinchZoom:!1},e),n=He();let r=[0,0],o=null,l=null;G(()=>{Se(t.enabled)&&($o(u=>[...u,n]),j(()=>{$o(u=>u.filter(c=>c!==n))}))}),G(()=>{if(!Se(t.enabled)||!Se(t.hideScrollbar))return;const{body:u}=document,c=window.innerWidth-u.offsetWidth;if(Se(t.preventScrollbarShift)){const p={overflow:"hidden"},f=[];c>0&&(Se(t.preventScrollbarShiftMode)==="padding"?p.paddingRight=`calc(${window.getComputedStyle(u).paddingRight} + ${c}px)`:p.marginRight=`calc(${window.getComputedStyle(u).marginRight} + ${c}px)`,f.push({key:"--scrollbar-width",value:`${c}px`}));const g=window.scrollY,d=window.scrollX;wo({key:"prevent-scroll",element:u,style:p,properties:f,cleanup:()=>{Se(t.restoreScrollPosition)&&c>0&&window.scrollTo(d,g)}})}else wo({key:"prevent-scroll",element:u,style:{overflow:"hidden"}})}),G(()=>{!Wu(n)||!Se(t.enabled)||(document.addEventListener("wheel",a,{passive:!1}),document.addEventListener("touchstart",s,{passive:!1}),document.addEventListener("touchmove",i,{passive:!1}),j(()=>{document.removeEventListener("wheel",a),document.removeEventListener("touchstart",s),document.removeEventListener("touchmove",i)}))});const s=u=>{r=So(u),o=null,l=null},a=u=>{const c=u.target,p=Se(t.element),f=Zu(u),g=Math.abs(f[0])>Math.abs(f[1])?"x":"y",d=g==="x"?f[0]:f[1],h=Co(c,g,d,p);let v;p&&nr(p,c)?v=!h:v=!0,v&&u.cancelable&&u.preventDefault()},i=u=>{const c=Se(t.element),p=u.target;let f;if(u.touches.length===2)f=!Se(t.allowPinchZoom);else{if(o==null||l===null){const g=So(u).map((h,v)=>r[v]-h),d=Math.abs(g[0])>Math.abs(g[1])?"x":"y";o=d,l=d==="x"?g[0]:g[1]}if(p.type==="range")f=!1;else{const g=Co(p,o,l,c);c&&nr(c,p)?f=!g:f=!0}}f&&u.cancelable&&u.preventDefault()}},Zu=e=>[e.deltaX,e.deltaY],So=e=>e.changedTouches[0]?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0],Co=(e,t,n,r)=>{const o=r!==null&&nr(r,e),[l,s]=Qu(e,t,o?r:void 0);return!(n>0&&Math.abs(l)<=1||n<0&&Math.abs(s)<1)},nr=(e,t)=>{if(e.contains(t))return!0;let n=t;for(;n;){if(n===e)return!0;n=n._$host??n.parentElement}return!1},Yu=_u,Xu=Yu,Ri=ke();function Bi(){return $e(Ri)}function gt(){const e=Bi();if(e===void 0)throw new Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");return e}var Hi=ke();function wr(){const e=$e(Hi);if(e===void 0)throw new Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");return e}var Ui=ke();function tt(){const e=$e(Ui);if(e===void 0)throw new Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");return e}function kr(e){let t;const n=tt(),r=gt(),o=X({id:n.generateId(`item-${He()}`)},e),[l,s]=re(o,["ref","textValue","disabled","closeOnSelect","checked","indeterminate","onSelect","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]),[a,i]=B(),[u,c]=B(),[p,f]=B(),g=()=>r.listState().selectionManager(),d=()=>s.id,h=()=>g().focusedKey()===d(),v=()=>{var k;(k=l.onSelect)==null||k.call(l),l.closeOnSelect&&setTimeout(()=>{r.close(!0)})};la({getItem:()=>{var k;return{ref:()=>t,type:"item",key:d(),textValue:l.textValue??((k=p())==null?void 0:k.textContent)??(t==null?void 0:t.textContent)??"",disabled:l.disabled??!1}}});const m=di({key:d,selectionManager:g,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>l.disabled},()=>t),b=k=>{de(k,l.onPointerMove),k.pointerType==="mouse"&&(l.disabled?r.onItemLeave(k):(r.onItemEnter(k),k.defaultPrevented||(Ce(k.currentTarget),r.listState().selectionManager().setFocused(!0),r.listState().selectionManager().setFocusedKey(d()))))},x=k=>{de(k,l.onPointerLeave),k.pointerType==="mouse"&&r.onItemLeave(k)},w=k=>{de(k,l.onPointerUp),!l.disabled&&k.button===0&&v()},S=k=>{if(de(k,l.onKeyDown),!k.repeat&&!l.disabled)switch(k.key){case"Enter":case" ":v();break}},K=q(()=>{if(l.indeterminate)return"mixed";if(l.checked!=null)return l.checked}),P=q(()=>({"data-indeterminate":l.indeterminate?"":void 0,"data-checked":l.checked&&!l.indeterminate?"":void 0,"data-disabled":l.disabled?"":void 0,"data-highlighted":h()?"":void 0})),I={isChecked:()=>l.checked,dataset:P,setLabelRef:f,generateId:un(()=>s.id),registerLabel:Be(i),registerDescription:Be(c)};return y(Hi.Provider,{value:I,get children(){return y(ce,_({as:"div",ref(k){const L=qe(O=>t=O,l.ref);typeof L=="function"&&L(k)},get tabIndex(){return m.tabIndex()},get"aria-checked"(){return K()},get"aria-disabled"(){return l.disabled},get"aria-labelledby"(){return a()},get"aria-describedby"(){return u()},get"data-key"(){return m.dataKey()},get onPointerDown(){return be([l.onPointerDown,m.onPointerDown])},get onPointerUp(){return be([w,m.onPointerUp])},get onClick(){return be([l.onClick,m.onClick])},get onKeyDown(){return be([S,m.onKeyDown])},get onMouseDown(){return be([l.onMouseDown,m.onMouseDown])},get onFocus(){return be([l.onFocus,m.onFocus])},onPointerMove:b,onPointerLeave:x},P,s))}})}function Gi(e){const t=X({closeOnSelect:!1},e),[n,r]=re(t,["checked","defaultChecked","onChange","onSelect"]),o=Ys({isSelected:()=>n.checked,defaultIsSelected:()=>n.defaultChecked,onSelectedChange:l=>{var s;return(s=n.onChange)==null?void 0:s.call(n,l)},isDisabled:()=>r.disabled});return y(kr,_({role:"menuitemcheckbox",get checked(){return o.isSelected()},onSelect:()=>{var l;(l=n.onSelect)==null||l.call(n),o.toggle()}},r))}var Ju=ke();function In(){return $e(Ju)}var sn={next:(e,t)=>e==="ltr"?t==="horizontal"?"ArrowRight":"ArrowDown":t==="horizontal"?"ArrowLeft":"ArrowUp",previous:(e,t)=>sn.next(e==="ltr"?"rtl":"ltr",t)},Eo={first:e=>e==="horizontal"?"ArrowDown":"ArrowRight",last:e=>e==="horizontal"?"ArrowUp":"ArrowLeft"};function Vi(e){const t=tt(),n=gt(),r=In(),{direction:o}=kt(),l=X({id:t.generateId("trigger")},e),[s,a]=re(l,["ref","id","disabled","onPointerDown","onClick","onKeyDown","onMouseOver","onFocus"]);let i=()=>t.value();r!==void 0&&(i=()=>t.value()??s.id,r.lastValue()===void 0&&r.setLastValue(i));const u=Ln(()=>n.triggerRef(),()=>"button"),c=q(()=>{var m;return u()==="a"&&((m=n.triggerRef())==null?void 0:m.getAttribute("href"))!=null});G(dt(()=>r==null?void 0:r.value(),m=>{var b;c()&&m===i()&&((b=n.triggerRef())==null||b.focus())}));const p=()=>{r!==void 0?n.isOpen()?r.value()===i()&&r.closeMenu():(r.autoFocusMenu()||r.setAutoFocusMenu(!0),n.open(!1)):n.toggle(!0)},f=m=>{de(m,s.onPointerDown),m.currentTarget.dataset.pointerType=m.pointerType,!s.disabled&&m.pointerType!=="touch"&&m.button===0&&p()},g=m=>{de(m,s.onClick),s.disabled||m.currentTarget.dataset.pointerType==="touch"&&p()},d=m=>{if(de(m,s.onKeyDown),!s.disabled){if(c())switch(m.key){case"Enter":case" ":return}switch(m.key){case"Enter":case" ":case Eo.first(t.orientation()):m.stopPropagation(),m.preventDefault(),Gs(m.currentTarget),n.open("first"),r==null||r.setAutoFocusMenu(!0),r==null||r.setValue(i);break;case Eo.last(t.orientation()):m.stopPropagation(),m.preventDefault(),n.open("last");break;case sn.next(o(),t.orientation()):if(r===void 0)break;m.stopPropagation(),m.preventDefault(),r.nextMenu();break;case sn.previous(o(),t.orientation()):if(r===void 0)break;m.stopPropagation(),m.preventDefault(),r.previousMenu();break}}},h=m=>{var b;de(m,s.onMouseOver),((b=n.triggerRef())==null?void 0:b.dataset.pointerType)!=="touch"&&!s.disabled&&r!==void 0&&r.value()!==void 0&&r.setValue(i)},v=m=>{de(m,s.onFocus),r!==void 0&&m.currentTarget.dataset.pointerType!=="touch"&&r.setValue(i)};return G(()=>j(n.registerTriggerId(s.id))),y(fr,_({ref(m){const b=qe(n.setTriggerRef,s.ref);typeof b=="function"&&b(m)},get"data-kb-menu-value-trigger"(){return t.value()},get id(){return s.id},get disabled(){return s.disabled},"aria-haspopup":"true",get"aria-expanded"(){return n.isOpen()},get"aria-controls"(){return q(()=>!!n.isOpen())()?n.contentId():void 0},get"data-highlighted"(){return i()!==void 0&&(r==null?void 0:r.value())===i()?!0:void 0},get tabIndex(){return r!==void 0?r.value()===i()||r.lastValue()===i()?0:-1:void 0},onPointerDown:f,onMouseOver:h,onClick:g,onKeyDown:d,onFocus:v,role:r!==void 0?"menuitem":void 0},()=>n.dataset(),a))}var ed=ke();function Ni(){return $e(ed)}function ji(e){let t;const n=tt(),r=gt(),o=In(),l=Ni(),{direction:s}=kt(),a=X({id:n.generateId(`content-${He()}`)},e),[i,u]=re(a,["ref","id","style","onOpenAutoFocus","onCloseAutoFocus","onEscapeKeyDown","onFocusOutside","onPointerEnter","onPointerMove","onKeyDown","onMouseDown","onFocusIn","onFocusOut"]);let c=0;const p=()=>r.parentMenuContext()==null&&o===void 0&&n.isModal(),f=Ru({selectionManager:r.listState().selectionManager,collection:r.listState().collection,autoFocus:r.autoFocus,deferAutoFocus:!0,shouldFocusWrap:!0,disallowTypeAhead:()=>!r.listState().selectionManager().isFocused(),orientation:()=>n.orientation()==="horizontal"?"vertical":"horizontal"},()=>t);Bu({trapFocus:()=>p()&&r.isOpen(),onMountAutoFocus:x=>{var w;o===void 0&&((w=i.onOpenAutoFocus)==null||w.call(i,x))},onUnmountAutoFocus:i.onCloseAutoFocus},()=>t);const g=x=>{if(Re(x.currentTarget,x.target)&&(x.key==="Tab"&&r.isOpen()&&x.preventDefault(),o!==void 0&&x.currentTarget.getAttribute("aria-haspopup")!=="true"))switch(x.key){case sn.next(s(),n.orientation()):x.stopPropagation(),x.preventDefault(),r.close(!0),o.setAutoFocusMenu(!0),o.nextMenu();break;case sn.previous(s(),n.orientation()):if(x.currentTarget.hasAttribute("data-closed"))break;x.stopPropagation(),x.preventDefault(),r.close(!0),o.setAutoFocusMenu(!0),o.previousMenu();break}},d=x=>{var w;(w=i.onEscapeKeyDown)==null||w.call(i,x),o==null||o.setAutoFocusMenu(!1),r.close(!0)},h=x=>{var w;(w=i.onFocusOutside)==null||w.call(i,x),n.isModal()&&x.preventDefault()},v=x=>{var w,S;de(x,i.onPointerEnter),r.isOpen()&&((w=r.parentMenuContext())==null||w.listState().selectionManager().setFocused(!1),(S=r.parentMenuContext())==null||S.listState().selectionManager().setFocusedKey(void 0))},m=x=>{if(de(x,i.onPointerMove),x.pointerType!=="mouse")return;const w=x.target,S=c!==x.clientX;Re(x.currentTarget,w)&&S&&(r.setPointerDir(x.clientX>c?"right":"left"),c=x.clientX)};G(()=>j(r.registerContentId(i.id)));const b={ref:qe(x=>{r.setContentRef(x),t=x},i.ref),role:"menu",get id(){return i.id},get tabIndex(){return f.tabIndex()},get"aria-labelledby"(){return r.triggerId()},onKeyDown:be([i.onKeyDown,f.onKeyDown,g]),onMouseDown:be([i.onMouseDown,f.onMouseDown]),onFocusIn:be([i.onFocusIn,f.onFocusIn]),onFocusOut:be([i.onFocusOut,f.onFocusOut]),onPointerEnter:v,onPointerMove:m,get"data-orientation"(){return n.orientation()}};return y(U,{get when(){return r.contentPresent()},get children(){return y(U,{get when(){return l===void 0||r.parentMenuContext()!=null},get fallback(){return y(ce,_({as:"div"},()=>r.dataset(),b,u))},get children(){return y(Ci.Positioner,{get children(){return y(zu,_({get disableOutsidePointerEvents(){return q(()=>!!p())()&&r.isOpen()},get excludedElements(){return[r.triggerRef]},bypassTopMostLayerCheck:!0,get style(){return Tn({"--kb-menu-content-transform-origin":"var(--kb-popper-content-transform-origin)",position:"relative"},i.style)},onEscapeKeyDown:d,onFocusOutside:h,get onDismiss(){return r.close}},()=>r.dataset(),b,u))}})}})}})}function td(e){let t;const n=tt(),r=gt(),[o,l]=re(e,["ref"]);return Xu({element:()=>t??null,enabled:()=>r.contentPresent()&&n.preventScroll()}),y(ji,_({ref(s){const a=qe(i=>{t=i},o.ref);typeof a=="function"&&a(s)}},l))}var Qi=ke();function nd(){const e=$e(Qi);if(e===void 0)throw new Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");return e}function $r(e){const t=tt(),n=X({id:t.generateId(`group-${He()}`)},e),[r,o]=B(),l={generateId:un(()=>n.id),registerLabelId:Be(o)};return y(Qi.Provider,{value:l,get children(){return y(ce,_({as:"div",role:"group",get"aria-labelledby"(){return r()}},n))}})}function Wi(e){const t=nd(),n=X({id:t.generateId("label")},e),[r,o]=re(n,["id"]);return G(()=>j(t.registerLabelId(r.id))),y(ce,_({as:"span",get id(){return r.id},"aria-hidden":"true"},o))}function _i(e){const t=gt(),n=X({children:"▼"},e);return y(ce,_({as:"span","aria-hidden":"true"},()=>t.dataset(),n))}function Zi(e){return y(kr,_({role:"menuitem",closeOnSelect:!0},e))}function Yi(e){const t=wr(),n=X({id:t.generateId("description")},e),[r,o]=re(n,["id"]);return G(()=>j(t.registerDescription(r.id))),y(ce,_({as:"div",get id(){return r.id}},()=>t.dataset(),o))}function Xi(e){const t=wr(),n=X({id:t.generateId("indicator")},e),[r,o]=re(n,["forceMount"]);return y(U,{get when(){return r.forceMount||t.isChecked()},get children(){return y(ce,_({as:"div"},()=>t.dataset(),o))}})}function Ji(e){const t=wr(),n=X({id:t.generateId("label")},e),[r,o]=re(n,["ref","id"]);return G(()=>j(t.registerLabel(r.id))),y(ce,_({as:"div",ref(l){const s=qe(t.setLabelRef,r.ref);typeof s=="function"&&s(l)},get id(){return r.id}},()=>t.dataset(),o))}function el(e){const t=gt();return y(U,{get when(){return t.contentPresent()},get children(){return y(Po,e)}})}var tl=ke();function rd(){const e=$e(tl);if(e===void 0)throw new Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");return e}function nl(e){const t=tt().generateId(`radiogroup-${He()}`),n=X({id:t},e),[r,o]=re(n,["value","defaultValue","onChange","disabled"]),[l,s]=cn({value:()=>r.value,defaultValue:()=>r.defaultValue,onChange:i=>{var u;return(u=r.onChange)==null?void 0:u.call(r,i)}}),a={isDisabled:()=>r.disabled,isSelectedValue:i=>i===l(),setSelectedValue:s};return y(tl.Provider,{value:a,get children(){return y($r,o)}})}function rl(e){const t=rd(),n=X({closeOnSelect:!1},e),[r,o]=re(n,["value","onSelect"]);return y(kr,_({role:"menuitemradio",get checked(){return t.isSelectedValue(r.value)},onSelect:()=>{var l;(l=r.onSelect)==null||l.call(r),t.setSelectedValue(r.value)}},o))}function od(e,t,n){const r=e.split("-")[0],o=n.getBoundingClientRect(),l=[],s=t.clientX,a=t.clientY;switch(r){case"top":l.push([s,a+5]),l.push([o.left,o.bottom]),l.push([o.left,o.top]),l.push([o.right,o.top]),l.push([o.right,o.bottom]);break;case"right":l.push([s-5,a]),l.push([o.left,o.top]),l.push([o.right,o.top]),l.push([o.right,o.bottom]),l.push([o.left,o.bottom]);break;case"bottom":l.push([s,a-5]),l.push([o.right,o.top]),l.push([o.right,o.bottom]),l.push([o.left,o.bottom]),l.push([o.left,o.top]);break;case"left":l.push([s+5,a]),l.push([o.right,o.bottom]),l.push([o.left,o.bottom]),l.push([o.left,o.top]),l.push([o.right,o.top]);break}return l}function id(e,t){return t?Us([e.clientX,e.clientY],t):!1}function ol(e){const t=tt(),n=ri(),r=Bi(),o=In(),l=Ni(),s=X({placement:t.orientation()==="horizontal"?"bottom-start":"right-start"},e),[a,i]=re(s,["open","defaultOpen","onOpenChange"]);let u=0,c=null,p="right";const[f,g]=B(),[d,h]=B(),[v,m]=B(),[b,x]=B(),[w,S]=B(!0),[K,P]=B(i.placement),[I,k]=B([]),[L,O]=B([]),{DomCollectionProvider:N}=ia({items:L,onItemsChange:O}),Q=qi({open:()=>a.open,defaultOpen:()=>a.defaultOpen,onOpenChange:W=>{var ye;return(ye=a.onOpenChange)==null?void 0:ye.call(a,W)}}),{present:R}=ci({show:()=>t.forceMount()||Q.isOpen(),element:()=>b()??null}),Y=$a({selectionMode:"none",dataSource:L}),ee=W=>{S(W),Q.open()},ie=(W=!1)=>{Q.close(),W&&r&&r.close(!0)},le=W=>{S(W),Q.toggle()},ae=()=>{const W=b();W&&(Ce(W),Y.selectionManager().setFocused(!0),Y.selectionManager().setFocusedKey(void 0))},he=()=>{l!=null?setTimeout(()=>ae()):ae()},Me=W=>{k(_e=>[..._e,W]);const ye=r==null?void 0:r.registerNestedMenu(W);return()=>{k(_e=>_n(_e,W)),ye==null||ye()}},ge=W=>p===(c==null?void 0:c.side)&&id(W,c==null?void 0:c.area),Ee=W=>{ge(W)&&W.preventDefault()},M=W=>{ge(W)||he()},fe=W=>{ge(W)&&W.preventDefault()};Uu({isDisabled:()=>!(r==null&&Q.isOpen()&&t.isModal()),targets:()=>[b(),...I()].filter(Boolean)}),G(()=>{const W=b();if(!W||!r)return;const ye=r.registerNestedMenu(W);j(()=>{ye()})}),G(()=>{r===void 0&&(o==null||o.registerMenu(t.value(),[b(),...I()]))}),G(()=>{var W;r!==void 0||o===void 0||(o.value()===t.value()?((W=v())==null||W.focus(),o.autoFocusMenu()&&ee(!0)):ie())}),G(()=>{r!==void 0||o===void 0||Q.isOpen()&&o.setValue(t.value())}),j(()=>{r===void 0&&(o==null||o.unregisterMenu(t.value()))});const J={dataset:q(()=>({"data-expanded":Q.isOpen()?"":void 0,"data-closed":Q.isOpen()?void 0:""})),isOpen:Q.isOpen,contentPresent:R,nestedMenus:I,currentPlacement:K,pointerGraceTimeoutId:()=>u,autoFocus:w,listState:()=>Y,parentMenuContext:()=>r,triggerRef:v,contentRef:b,triggerId:f,contentId:d,setTriggerRef:m,setContentRef:x,open:ee,close:ie,toggle:le,focusContent:he,onItemEnter:Ee,onItemLeave:M,onTriggerLeave:fe,setPointerDir:W=>p=W,setPointerGraceTimeoutId:W=>u=W,setPointerGraceIntent:W=>c=W,registerNestedMenu:Me,registerItemToParentDomCollection:n==null?void 0:n.registerItem,registerTriggerId:Be(g),registerContentId:Be(h)};return y(N,{get children(){return y(Ri.Provider,{value:J,get children(){return y(U,{when:l===void 0,get fallback(){return i.children},get children(){return y(Ci,_({anchorRef:v,contentRef:b,onCurrentPlacementChange:P},i))}})}})}})}function il(e){const{direction:t}=kt();return y(ol,_({get placement(){return t()==="rtl"?"left-start":"right-start"},flip:!0},e))}var ld={close:(e,t)=>e==="ltr"?[t==="horizontal"?"ArrowLeft":"ArrowUp"]:[t==="horizontal"?"ArrowRight":"ArrowDown"]};function ll(e){const t=gt(),n=tt(),[r,o]=re(e,["onFocusOutside","onKeyDown"]),{direction:l}=kt();return y(ji,_({onOpenAutoFocus:s=>{s.preventDefault()},onCloseAutoFocus:s=>{s.preventDefault()},onFocusOutside:s=>{var a;(a=r.onFocusOutside)==null||a.call(r,s);const i=s.target;Re(t.triggerRef(),i)||t.close()},onKeyDown:s=>{de(s,r.onKeyDown);const a=Re(s.currentTarget,s.target),i=ld.close(l(),n.orientation()).includes(s.key),u=t.parentMenuContext()!=null;a&&i&&u&&(t.close(),Ce(t.triggerRef()))}},o))}var qo=["Enter"," "],sd={open:(e,t)=>e==="ltr"?[...qo,t==="horizontal"?"ArrowRight":"ArrowDown"]:[...qo,t==="horizontal"?"ArrowLeft":"ArrowUp"]};function sl(e){let t;const n=tt(),r=gt(),o=X({id:n.generateId(`sub-trigger-${He()}`)},e),[l,s]=re(o,["ref","id","textValue","disabled","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]);let a=null;const i=()=>{a&&window.clearTimeout(a),a=null},{direction:u}=kt(),c=()=>l.id,p=()=>{const x=r.parentMenuContext();if(x==null)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");return x.listState().selectionManager()},f=()=>r.listState().collection(),g=()=>p().focusedKey()===c(),d=di({key:c,selectionManager:p,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>l.disabled},()=>t),h=x=>{de(x,l.onClick),!r.isOpen()&&!l.disabled&&r.open(!0)},v=x=>{var w;if(de(x,l.onPointerMove),x.pointerType!=="mouse")return;const S=r.parentMenuContext();if(S==null||S.onItemEnter(x),!x.defaultPrevented){if(l.disabled){S==null||S.onItemLeave(x);return}!r.isOpen()&&!a&&((w=r.parentMenuContext())==null||w.setPointerGraceIntent(null),a=window.setTimeout(()=>{r.open(!1),i()},100)),S==null||S.onItemEnter(x),x.defaultPrevented||(r.listState().selectionManager().isFocused()&&(r.listState().selectionManager().setFocused(!1),r.listState().selectionManager().setFocusedKey(void 0)),Ce(x.currentTarget),S==null||S.listState().selectionManager().setFocused(!0),S==null||S.listState().selectionManager().setFocusedKey(c()))}},m=x=>{if(de(x,l.onPointerLeave),x.pointerType!=="mouse")return;i();const w=r.parentMenuContext(),S=r.contentRef();if(S){w==null||w.setPointerGraceIntent({area:od(r.currentPlacement(),x,S),side:r.currentPlacement().split("-")[0]}),window.clearTimeout(w==null?void 0:w.pointerGraceTimeoutId());const K=window.setTimeout(()=>{w==null||w.setPointerGraceIntent(null)},300);w==null||w.setPointerGraceTimeoutId(K)}else{if(w==null||w.onTriggerLeave(x),x.defaultPrevented)return;w==null||w.setPointerGraceIntent(null)}w==null||w.onItemLeave(x)},b=x=>{de(x,l.onKeyDown),!x.repeat&&(l.disabled||sd.open(u(),n.orientation()).includes(x.key)&&(x.stopPropagation(),x.preventDefault(),p().setFocused(!1),p().setFocusedKey(void 0),r.isOpen()||r.open("first"),r.focusContent(),r.listState().selectionManager().setFocused(!0),r.listState().selectionManager().setFocusedKey(f().getFirstKey())))};return G(()=>{if(r.registerItemToParentDomCollection==null)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");const x=r.registerItemToParentDomCollection({ref:()=>t,type:"item",key:c(),textValue:l.textValue??(t==null?void 0:t.textContent)??"",disabled:l.disabled??!1});j(x)}),G(dt(()=>{var x;return(x=r.parentMenuContext())==null?void 0:x.pointerGraceTimeoutId()},x=>{j(()=>{var w;window.clearTimeout(x),(w=r.parentMenuContext())==null||w.setPointerGraceIntent(null)})})),G(()=>j(r.registerTriggerId(l.id))),j(()=>{i()}),y(ce,_({as:"div",ref(x){const w=qe(S=>{r.setTriggerRef(S),t=S},l.ref);typeof w=="function"&&w(x)},get id(){return l.id},role:"menuitem",get tabIndex(){return d.tabIndex()},"aria-haspopup":"true",get"aria-expanded"(){return r.isOpen()},get"aria-controls"(){return q(()=>!!r.isOpen())()?r.contentId():void 0},get"aria-disabled"(){return l.disabled},get"data-key"(){return d.dataKey()},get"data-highlighted"(){return g()?"":void 0},get"data-disabled"(){return l.disabled?"":void 0},get onPointerDown(){return be([l.onPointerDown,d.onPointerDown])},get onPointerUp(){return be([l.onPointerUp,d.onPointerUp])},get onClick(){return be([h,d.onClick])},get onKeyDown(){return be([b,d.onKeyDown])},get onMouseDown(){return be([l.onMouseDown,d.onMouseDown])},get onFocus(){return be([l.onFocus,d.onFocus])},onPointerMove:v,onPointerLeave:m},()=>r.dataset(),s))}function ad(e){const t=In(),n=`menu-${He()}`,r=X({id:n,modal:!0},e),[o,l]=re(r,["id","modal","preventScroll","forceMount","open","defaultOpen","onOpenChange","value","orientation"]),s=qi({open:()=>o.open,defaultOpen:()=>o.defaultOpen,onOpenChange:i=>{var u;return(u=o.onOpenChange)==null?void 0:u.call(o,i)}}),a={isModal:()=>o.modal??!0,preventScroll:()=>o.preventScroll??a.isModal(),forceMount:()=>o.forceMount??!1,generateId:un(()=>o.id),value:()=>o.value,orientation:()=>o.orientation??(t==null?void 0:t.orientation())??"horizontal"};return y(Ui.Provider,{value:a,get children(){return y(ol,_({get open(){return s.isOpen()},get onOpenChange(){return s.setIsOpen}},l))}})}var ud={};Dn(ud,{Root:()=>zn,Separator:()=>dd});function zn(e){let t;const n=X({orientation:"horizontal"},e),[r,o]=re(n,["ref","orientation"]),l=Ln(()=>t,()=>"hr");return y(ce,_({as:"hr",ref(s){const a=qe(i=>t=i,r.ref);typeof a=="function"&&a(s)},get role(){return l()!=="hr"?"separator":void 0},get"aria-orientation"(){return r.orientation==="vertical"?"vertical":void 0},get"data-orientation"(){return r.orientation}},o))}var dd=zn,pe={};Dn(pe,{Arrow:()=>xr,CheckboxItem:()=>Gi,Content:()=>al,DropdownMenu:()=>cd,Group:()=>$r,GroupLabel:()=>Wi,Icon:()=>_i,Item:()=>Zi,ItemDescription:()=>Yi,ItemIndicator:()=>Xi,ItemLabel:()=>Ji,Portal:()=>el,RadioGroup:()=>nl,RadioItem:()=>rl,Root:()=>ul,Separator:()=>zn,Sub:()=>il,SubContent:()=>ll,SubTrigger:()=>sl,Trigger:()=>Vi});function al(e){const t=tt(),n=gt(),[r,o]=re(e,["onCloseAutoFocus","onInteractOutside"]);let l=!1;return y(td,_({onCloseAutoFocus:s=>{var a;(a=r.onCloseAutoFocus)==null||a.call(r,s),l||Ce(n.triggerRef()),l=!1,s.preventDefault()},onInteractOutside:s=>{var a;(a=r.onInteractOutside)==null||a.call(r,s),(!t.isModal()||s.detail.isContextMenu)&&(l=!0)}},o))}function ul(e){const t=`dropdownmenu-${He()}`,n=X({id:t},e);return y(ad,n)}var cd=Object.assign(ul,{Arrow:xr,CheckboxItem:Gi,Content:al,Group:$r,GroupLabel:Wi,Icon:_i,Item:Zi,ItemDescription:Yi,ItemIndicator:Xi,ItemLabel:Ji,Portal:el,RadioGroup:nl,RadioItem:rl,Separator:zn,Sub:il,SubContent:ll,SubTrigger:sl,Trigger:Vi}),$={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{90:"e5",80:"cc"},font:{size:{xs:"calc(var(--tsqd-font-size) * 0.75)",sm:"calc(var(--tsqd-font-size) * 0.875)",md:"var(--tsqd-font-size)"},lineHeight:{xs:"calc(var(--tsqd-font-size) * 1)",sm:"calc(var(--tsqd-font-size) * 1.25)",md:"calc(var(--tsqd-font-size) * 1.5)"},weight:{medium:"500",semibold:"600",bold:"700"}},border:{radius:{xs:"calc(var(--tsqd-font-size) * 0.125)",sm:"calc(var(--tsqd-font-size) * 0.25)",full:"9999px"}},size:{.25:"calc(var(--tsqd-font-size) * 0.0625)",.5:"calc(var(--tsqd-font-size) * 0.125)",1:"calc(var(--tsqd-font-size) * 0.25)",1.5:"calc(var(--tsqd-font-size) * 0.375)",2:"calc(var(--tsqd-font-size) * 0.5)",2.5:"calc(var(--tsqd-font-size) * 0.625)",3:"calc(var(--tsqd-font-size) * 0.75)",3.5:"calc(var(--tsqd-font-size) * 0.875)",4:"calc(var(--tsqd-font-size) * 1)",4.5:"calc(var(--tsqd-font-size) * 1.125)",5:"calc(var(--tsqd-font-size) * 1.25)",6:"calc(var(--tsqd-font-size) * 1.5)",6.5:"calc(var(--tsqd-font-size) * 1.625)",14:"calc(var(--tsqd-font-size) * 3.5)"},shadow:{xs:(e="rgb(0 0 0 / 0.1)")=>"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:(e="rgb(0 0 0 / 0.1)")=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e="rgb(0 0 0 / 0.1)")=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e="rgb(0 0 0 / 0.1)")=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e="rgb(0 0 0 / 0.1)")=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e="rgb(0 0 0 / 0.25)")=>`0 25px 50px -12px ${e}`,inner:(e="rgb(0 0 0 / 0.05)")=>`inset 0 2px 4px 0 ${e}`,none:()=>"none"}},fd=z('<svg width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13 13L9.00007 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),gd=z('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),pd=z('<svg width=10 height=6 viewBox="0 0 10 6"fill=none xmlns=http://www.w3.org/2000/svg><path d="M1 1L5 5L9 1"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),hd=z('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 13.3333V2.66667M8 2.66667L4 6.66667M8 2.66667L12 6.66667"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),Sr=z('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),yd=z('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),vd=z('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 15.844a10.424 10.424 0 0 1-4.306.925c-5.779 0-10.463-4.684-10.463-10.462 0-1.536.33-2.994.925-4.307A10.464 10.464 0 0 0 2 11.538C2 17.316 6.684 22 12.462 22c4.243 0 7.896-2.526 9.538-6.156Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),md=z('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 21h8m-4-4v4m-5.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),bd=z('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z">'),xd=z('<svg stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"></path><path d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z">'),wd=z('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),kd=z('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),$d=z('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>'),Sd=z('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M2.5 21.4998L8.04927 19.3655C8.40421 19.229 8.58168 19.1607 8.74772 19.0716C8.8952 18.9924 9.0358 18.901 9.16804 18.7984C9.31692 18.6829 9.45137 18.5484 9.72028 18.2795L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99981C19.8955 1.89525 18.1046 1.89524 17 2.99981L5.72028 14.2795C5.45138 14.5484 5.31692 14.6829 5.20139 14.8318C5.09877 14.964 5.0074 15.1046 4.92823 15.2521C4.83911 15.4181 4.77085 15.5956 4.63433 15.9506L2.5 21.4998ZM2.5 21.4998L4.55812 16.1488C4.7054 15.7659 4.77903 15.5744 4.90534 15.4867C5.01572 15.4101 5.1523 15.3811 5.2843 15.4063C5.43533 15.4351 5.58038 15.5802 5.87048 15.8703L8.12957 18.1294C8.41967 18.4195 8.56472 18.5645 8.59356 18.7155C8.61877 18.8475 8.58979 18.9841 8.51314 19.0945C8.42545 19.2208 8.23399 19.2944 7.85107 19.4417L2.5 21.4998Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),dl=z('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Cd=z('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Ed=z('<svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 xmlns=http://www.w3.org/2000/svg><rect class=list width=20 height=20 y=2 x=2 rx=2></rect><line class=list-item y1=7 y2=7 x1=6 x2=18></line><line class=list-item y2=12 y1=12 x1=6 x2=18></line><line class=list-item y1=17 y2=17 x1=6 x2=18>'),qd=z('<svg viewBox="0 0 24 24"height=20 width=20 fill=none xmlns=http://www.w3.org/2000/svg><path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Md=z('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Td=z('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><animateTransform attributeName=transform attributeType=XML type=rotate from=0 to=360 dur=2s repeatCount=indefinite>'),Fd=z('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Ld=z('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.5 15V9M14.5 15V9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Dd=z('<svg version=1.0 viewBox="0 0 633 633"><linearGradient x1=-666.45 x2=-666.45 y1=163.28 y2=163.99 gradientTransform="matrix(633 0 0 633 422177 -103358)"gradientUnits=userSpaceOnUse><stop stop-color=#6BDAFF offset=0></stop><stop stop-color=#F9FFB5 offset=.32></stop><stop stop-color=#FFA770 offset=.71></stop><stop stop-color=#FF7373 offset=1></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5></circle><defs><filter x=-137.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=316.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=316.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=316.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=272.2 y=308 width=176.9 height=129.3 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=272.2 y=308 width=176.9 height=129.3 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><line x1=436 x2=431 y1=403.2 y2=431.8 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=291 x2=280 y1=341.5 y2=403.5 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=332.9 x2=328.6 y1=384.1 y2=411.2 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><linearGradient x1=-670.75 x2=-671.59 y1=164.4 y2=164.49 gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)"gradientUnits=userSpaceOnUse><stop stop-color=#EE2700 offset=0></stop><stop stop-color=#FF008E offset=1></stop></linearGradient><path d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd fill-rule=evenodd></path><line x1=428.2 x2=429.1 y1=384.5 y2=378 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=395.2 x2=396.1 y1=379.5 y2=373 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=362.2 x2=363.1 y1=373.5 y2=367.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=324.2 x2=328.4 y1=351.3 y2=347.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=303.2 x2=307.4 y1=331.3 y2=327.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line></g><defs><filter x=73.2 y=113.8 width=280.6 height=317.4 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=73.2 y=113.8 width=280.6 height=317.4 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-672.16 x2=-672.16 y1=165.03 y2=166.03 gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)"gradientUnits=userSpaceOnUse><stop stop-color=#A17500 offset=0></stop><stop stop-color=#5D2100 offset=1></stop></linearGradient><path d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6"clip-rule=evenodd fill-rule=evenodd></path><g stroke=#2F8A00><linearGradient x1=-660.23 x2=-660.23 y1=166.72 y2=167.72 gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-661.36 x2=-661.36 y1=164.18 y2=165.18 gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.79 x2=-656.79 y1=165.15 y2=166.15 gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-663.07 x2=-663.07 y1=165.44 y2=166.44 gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-662.57 x2=-662.57 y1=164.44 y2=165.44 gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.43 x2=-656.43 y1=163.86 y2=164.86 gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><path d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1"fill=none stroke-linecap=round stroke-width=8></path><path d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8"fill=none stroke-linecap=round stroke-width=8></path><path d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9"fill=none stroke-linecap=round stroke-width=8></path><path d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32"fill=none stroke-linecap=round stroke-width=8></path></g></g><defs><filter x=50.5 y=399 width=532 height=633 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=50.5 y=399 width=532 height=633 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-666.06 x2=-666.23 y1=163.36 y2=163.75 gradientTransform="matrix(532 0 0 633 354760 -102959)"gradientUnits=userSpaceOnUse><stop stop-color=#FFF400 offset=0></stop><stop stop-color=#3C8700 offset=1></stop></linearGradient><ellipse cx=316.5 cy=715.5 rx=266 ry=316.5></ellipse></g><defs><filter x=391 y=-24 width=288 height=283 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=391 y=-24 width=288 height=283 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-664.56 x2=-664.56 y1=163.79 y2=164.79 gradientTransform="matrix(227 0 0 227 151421 -37204)"gradientUnits=userSpaceOnUse><stop stop-color=#FFDF00 offset=0></stop><stop stop-color=#FF9D00 offset=1></stop></linearGradient><circle cx=565.5 cy=89.5 r=113.5></circle><linearGradient x1=-644.5 x2=-645.77 y1=342 y2=342 gradientTransform="matrix(30 0 0 1 19770 -253)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=427 x2=397 y1=89 y2=89 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-641.56 x2=-642.83 y1=196.02 y2=196.07 gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=430.5 x2=404 y1=55.5 y2=50 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-643.73 x2=-645 y1=185.83 y2=185.9 gradientTransform="matrix(29 0 0 8 19107 -1361)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=431 x2=402 y1=122 y2=130 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-638.94 x2=-640.22 y1=177.09 y2=177.39 gradientTransform="matrix(24 0 0 13 15783 -2145)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=442 x2=418 y1=153 y2=166 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-633.42 x2=-634.7 y1=172.41 y2=173.31 gradientTransform="matrix(20 0 0 19 13137 -3096)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=464 x2=444 y1=180 y2=199 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-619.05 x2=-619.52 y1=170.82 y2=171.82 gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=491.4 x2=477.5 y1=203 y2=225.9 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-578.5 x2=-578.63 y1=170.31 y2=171.31 gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=524.5 x2=517 y1=219.5 y2=244 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=666.5 x2=666.5 y1=170.31 y2=171.31 gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=564.5 x2=565 y1=228.5 y2=253 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12>');function Ad(){return fd()}function cl(){return gd()}function nn(){return pd()}function Mo(){return hd()}function To(){return Sr()}function Od(){return(()=>{var e=Sr();return e.style.setProperty("transform","rotate(90deg)"),e})()}function Id(){return(()=>{var e=Sr();return e.style.setProperty("transform","rotate(-90deg)"),e})()}function zd(){return yd()}function Pd(){return vd()}function Kd(){return md()}function Rd(){return bd()}function Bd(){return xd()}function Hd(){return wd()}function Ud(){return kd()}function Gd(){return $d()}function Vd(){return Sd()}function Nd(e){return(()=>{var t=dl(),n=t.firstChild;return V(()=>T(n,"stroke",e.theme==="dark"?"#12B76A":"#027A48")),t})()}function jd(){return Cd()}function Qd(){return Ed()}function Wd(e){return[y(U,{get when(){return e.checked},get children(){var t=dl(),n=t.firstChild;return V(()=>T(n,"stroke",e.theme==="dark"?"#9B8AFB":"#6938EF")),t}}),y(U,{get when(){return!e.checked},get children(){var t=qd(),n=t.firstChild;return V(()=>T(n,"stroke",e.theme==="dark"?"#9B8AFB":"#6938EF")),t}})]}function _d(){return Md()}function Zd(){return Td()}function Yd(){return Fd()}function Xd(){return Ld()}function Fo(){const e=He();return(()=>{var t=Dd(),n=t.firstChild,r=n.nextSibling,o=r.nextSibling,l=o.firstChild,s=o.nextSibling,a=s.firstChild,i=s.nextSibling,u=i.nextSibling,c=u.firstChild,p=u.nextSibling,f=p.firstChild,g=p.nextSibling,d=g.nextSibling,h=d.firstChild,v=d.nextSibling,m=v.firstChild,b=v.nextSibling,x=b.nextSibling,w=x.firstChild,S=x.nextSibling,K=S.firstChild,P=S.nextSibling,I=P.nextSibling,k=I.firstChild,L=I.nextSibling,O=L.firstChild,N=L.nextSibling,Q=N.nextSibling,R=Q.firstChild,Y=Q.nextSibling,ee=Y.firstChild,ie=Y.nextSibling,le=ie.nextSibling,ae=le.firstChild,he=le.nextSibling,Me=he.firstChild,ge=he.nextSibling,Ee=ge.firstChild,M=Ee.nextSibling,fe=M.nextSibling,J=fe.nextSibling,W=J.nextSibling,ye=ge.nextSibling,_e=ye.firstChild,Oe=ye.nextSibling,Dt=Oe.firstChild,Ie=Oe.nextSibling,pt=Ie.firstChild,$t=pt.nextSibling,nt=$t.nextSibling,Ze=nt.firstChild,rt=Ze.nextSibling,D=rt.nextSibling,te=D.nextSibling,ve=te.nextSibling,se=ve.nextSibling,oe=se.nextSibling,ue=oe.nextSibling,me=ue.nextSibling,ne=me.nextSibling,Ye=ne.nextSibling,ot=Ye.nextSibling,ht=Ie.nextSibling,St=ht.firstChild,it=ht.nextSibling,Ct=it.firstChild,lt=it.nextSibling,yt=lt.firstChild,hn=yt.nextSibling,Qt=lt.nextSibling,yn=Qt.firstChild,At=Qt.nextSibling,vn=At.firstChild,Wt=At.nextSibling,_t=Wt.firstChild,Zt=_t.nextSibling,Ot=Zt.nextSibling,Er=Ot.nextSibling,qr=Er.nextSibling,Mr=qr.nextSibling,Tr=Mr.nextSibling,Fr=Tr.nextSibling,Lr=Fr.nextSibling,Dr=Lr.nextSibling,Ar=Dr.nextSibling,Or=Ar.nextSibling,Ir=Or.nextSibling,zr=Ir.nextSibling,Pr=zr.nextSibling,Kr=Pr.nextSibling,Rr=Kr.nextSibling,vl=Rr.nextSibling;return T(n,"id",`a-${e}`),T(r,"fill",`url(#a-${e})`),T(l,"id",`am-${e}`),T(s,"id",`b-${e}`),T(a,"filter",`url(#am-${e})`),T(i,"mask",`url(#b-${e})`),T(c,"id",`ah-${e}`),T(p,"id",`k-${e}`),T(f,"filter",`url(#ah-${e})`),T(g,"mask",`url(#k-${e})`),T(h,"id",`ae-${e}`),T(v,"id",`j-${e}`),T(m,"filter",`url(#ae-${e})`),T(b,"mask",`url(#j-${e})`),T(w,"id",`ai-${e}`),T(S,"id",`i-${e}`),T(K,"filter",`url(#ai-${e})`),T(P,"mask",`url(#i-${e})`),T(k,"id",`aj-${e}`),T(L,"id",`h-${e}`),T(O,"filter",`url(#aj-${e})`),T(N,"mask",`url(#h-${e})`),T(R,"id",`ag-${e}`),T(Y,"id",`g-${e}`),T(ee,"filter",`url(#ag-${e})`),T(ie,"mask",`url(#g-${e})`),T(ae,"id",`af-${e}`),T(he,"id",`f-${e}`),T(Me,"filter",`url(#af-${e})`),T(ge,"mask",`url(#f-${e})`),T(J,"id",`m-${e}`),T(W,"fill",`url(#m-${e})`),T(_e,"id",`ak-${e}`),T(Oe,"id",`e-${e}`),T(Dt,"filter",`url(#ak-${e})`),T(Ie,"mask",`url(#e-${e})`),T(pt,"id",`n-${e}`),T($t,"fill",`url(#n-${e})`),T(Ze,"id",`r-${e}`),T(rt,"fill",`url(#r-${e})`),T(D,"id",`s-${e}`),T(te,"fill",`url(#s-${e})`),T(ve,"id",`q-${e}`),T(se,"fill",`url(#q-${e})`),T(oe,"id",`p-${e}`),T(ue,"fill",`url(#p-${e})`),T(me,"id",`o-${e}`),T(ne,"fill",`url(#o-${e})`),T(Ye,"id",`l-${e}`),T(ot,"fill",`url(#l-${e})`),T(St,"id",`al-${e}`),T(it,"id",`d-${e}`),T(Ct,"filter",`url(#al-${e})`),T(lt,"mask",`url(#d-${e})`),T(yt,"id",`u-${e}`),T(hn,"fill",`url(#u-${e})`),T(yn,"id",`ad-${e}`),T(At,"id",`c-${e}`),T(vn,"filter",`url(#ad-${e})`),T(Wt,"mask",`url(#c-${e})`),T(_t,"id",`t-${e}`),T(Zt,"fill",`url(#t-${e})`),T(Ot,"id",`v-${e}`),T(Er,"stroke",`url(#v-${e})`),T(qr,"id",`aa-${e}`),T(Mr,"stroke",`url(#aa-${e})`),T(Tr,"id",`w-${e}`),T(Fr,"stroke",`url(#w-${e})`),T(Lr,"id",`ac-${e}`),T(Dr,"stroke",`url(#ac-${e})`),T(Ar,"id",`ab-${e}`),T(Or,"stroke",`url(#ab-${e})`),T(Ir,"id",`y-${e}`),T(zr,"stroke",`url(#y-${e})`),T(Pr,"id",`x-${e}`),T(Kr,"stroke",`url(#x-${e})`),T(Rr,"id",`z-${e}`),T(vl,"stroke",`url(#z-${e})`),t})()}var Jd=z('<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),ec=z('<button title="Copy object to clipboard">'),tc=z('<button title="Remove all items"aria-label="Remove all items">'),nc=z('<button title="Delete item"aria-label="Delete item">'),rc=z('<button title="Toggle value"aria-label="Toggle value">'),oc=z('<button title="Bulk Edit Data"aria-label="Bulk Edit Data">'),Jt=z("<div>"),ic=z("<div><button> <span></span> <span> "),lc=z("<input>"),Lo=z("<span>"),sc=z("<div><span>:"),ac=z("<div><div><button> [<!>...<!>]");function uc(e,t){let n=0;const r=[];for(;n<e.length;)r.push(e.slice(n,n+t)),n=n+t;return r}var Do=e=>{const t=xe(),n=H().shadowDOMTarget?Z.bind({target:H().shadowDOMTarget}):Z,r=q(()=>t()==="dark"?jt(n):Nt(n));return(()=>{var o=Jd();return V(()=>F(o,A(r().expander,n`
          transform: rotate(${e.expanded?90:0}deg);
        `,e.expanded&&n`
            & svg {
              top: -1px;
            }
          `))),o})()},dc=e=>{const t=xe(),n=H().shadowDOMTarget?Z.bind({target:H().shadowDOMTarget}):Z,r=q(()=>t()==="dark"?jt(n):Nt(n)),[o,l]=B("NoCopy");return(()=>{var s=ec();return Ml(s,"click",o()==="NoCopy"?()=>{navigator.clipboard.writeText(Tl(e.value)).then(()=>{l("SuccessCopy"),setTimeout(()=>{l("NoCopy")},1500)},a=>{l("ErrorCopy"),setTimeout(()=>{l("NoCopy")},1500)})}:void 0,!0),C(s,y(Fl,{get children(){return[y(Kn,{get when(){return o()==="NoCopy"},get children(){return y(Gd,{})}}),y(Kn,{get when(){return o()==="SuccessCopy"},get children(){return y(Nd,{get theme(){return t()}})}}),y(Kn,{get when(){return o()==="ErrorCopy"},get children(){return y(jd,{})}})]}})),V(a=>{var i=r().actionButton,u=`${o()==="NoCopy"?"Copy object to clipboard":o()==="SuccessCopy"?"Object copied to clipboard":"Error copying object to clipboard"}`;return i!==a.e&&F(s,a.e=i),u!==a.t&&T(s,"aria-label",a.t=u),a},{e:void 0,t:void 0}),s})()},cc=e=>{const t=xe(),n=H().shadowDOMTarget?Z.bind({target:H().shadowDOMTarget}):Z,r=q(()=>t()==="dark"?jt(n):Nt(n)),o=H().client;return(()=>{var l=tc();return l.$$click=()=>{const s=e.activeQuery.state.data,a=or(s,e.dataPath,[]);o.setQueryData(e.activeQuery.queryKey,a)},C(l,y(Qd,{})),V(()=>F(l,r().actionButton)),l})()},Ao=e=>{const t=xe(),n=H().shadowDOMTarget?Z.bind({target:H().shadowDOMTarget}):Z,r=q(()=>t()==="dark"?jt(n):Nt(n)),o=H().client;return(()=>{var l=nc();return l.$$click=()=>{const s=e.activeQuery.state.data,a=Ll(s,e.dataPath);o.setQueryData(e.activeQuery.queryKey,a)},C(l,y(cl,{})),V(()=>F(l,A(r().actionButton))),l})()},fc=e=>{const t=xe(),n=H().shadowDOMTarget?Z.bind({target:H().shadowDOMTarget}):Z,r=q(()=>t()==="dark"?jt(n):Nt(n)),o=H().client;return(()=>{var l=rc();return l.$$click=()=>{const s=e.activeQuery.state.data,a=or(s,e.dataPath,!e.value);o.setQueryData(e.activeQuery.queryKey,a)},C(l,y(Wd,{get theme(){return t()},get checked(){return e.value}})),V(()=>F(l,A(r().actionButton,n`
          width: ${$.size[3.5]};
          height: ${$.size[3.5]};
        `))),l})()};function Oo(e){return Symbol.iterator in e}function vt(e){const t=xe(),n=H().shadowDOMTarget?Z.bind({target:H().shadowDOMTarget}):Z,r=q(()=>t()==="dark"?jt(n):Nt(n)),o=H().client,[l,s]=B((e.defaultExpanded||[]).includes(e.label)),a=()=>s(d=>!d),[i,u]=B([]),c=q(()=>Array.isArray(e.value)?e.value.map((d,h)=>({label:h.toString(),value:d})):e.value!==null&&typeof e.value=="object"&&Oo(e.value)&&typeof e.value[Symbol.iterator]=="function"?e.value instanceof Map?Array.from(e.value,([d,h])=>({label:d,value:h})):Array.from(e.value,(d,h)=>({label:h.toString(),value:d})):typeof e.value=="object"&&e.value!==null?Object.entries(e.value).map(([d,h])=>({label:d,value:h})):[]),p=q(()=>Array.isArray(e.value)?"array":e.value!==null&&typeof e.value=="object"&&Oo(e.value)&&typeof e.value[Symbol.iterator]=="function"?"Iterable":typeof e.value=="object"&&e.value!==null?"object":typeof e.value),f=q(()=>uc(c(),100)),g=e.dataPath??[];return(()=>{var d=Jt();return C(d,y(U,{get when(){return f().length},get children(){return[(()=>{var h=ic(),v=h.firstChild,m=v.firstChild,b=m.nextSibling,x=b.nextSibling,w=x.nextSibling,S=w.firstChild;return v.$$click=()=>a(),C(v,y(Do,{get expanded(){return l()}}),m),C(b,()=>e.label),C(w,()=>String(p()).toLowerCase()==="iterable"?"(Iterable) ":"",S),C(w,()=>c().length,S),C(w,()=>c().length>1?"items":"item",null),C(h,y(U,{get when(){return e.editable},get children(){var K=Jt();return C(K,y(dc,{get value(){return e.value}}),null),C(K,y(U,{get when(){return e.itemsDeletable&&e.activeQuery!==void 0},get children(){return y(Ao,{get activeQuery(){return e.activeQuery},dataPath:g})}}),null),C(K,y(U,{get when(){return p()==="array"&&e.activeQuery!==void 0},get children(){return y(cc,{get activeQuery(){return e.activeQuery},dataPath:g})}}),null),C(K,y(U,{get when(){return q(()=>!!e.onEdit)()&&!El(e.value).meta},get children(){var P=oc();return P.$$click=()=>{var I;(I=e.onEdit)==null||I.call(e)},C(P,y(Vd,{})),V(()=>F(P,r().actionButton)),P}}),null),V(()=>F(K,r().actions)),K}}),null),V(K=>{var P=r().expanderButtonContainer,I=r().expanderButton,k=r().info;return P!==K.e&&F(h,K.e=P),I!==K.t&&F(v,K.t=I),k!==K.a&&F(w,K.a=k),K},{e:void 0,t:void 0,a:void 0}),h})(),y(U,{get when(){return l()},get children(){return[y(U,{get when(){return f().length===1},get children(){var h=Jt();return C(h,y(kn,{get each(){return c()},by:v=>v.label,children:v=>y(vt,{get defaultExpanded(){return e.defaultExpanded},get label(){return v().label},get value(){return v().value},get editable(){return e.editable},get dataPath(){return[...g,v().label]},get activeQuery(){return e.activeQuery},get itemsDeletable(){return p()==="array"||p()==="Iterable"||p()==="object"}})})),V(()=>F(h,r().subEntry)),h}}),y(U,{get when(){return f().length>1},get children(){var h=Jt();return C(h,y(ql,{get each(){return f()},children:(v,m)=>(()=>{var b=ac(),x=b.firstChild,w=x.firstChild,S=w.firstChild,K=S.nextSibling,P=K.nextSibling,I=P.nextSibling;return I.nextSibling,w.$$click=()=>u(k=>k.includes(m)?k.filter(L=>L!==m):[...k,m]),C(w,y(Do,{get expanded(){return i().includes(m)}}),S),C(w,m*100,K),C(w,m*100+100-1,I),C(x,y(U,{get when(){return i().includes(m)},get children(){var k=Jt();return C(k,y(kn,{get each(){return v()},by:L=>L.label,children:L=>y(vt,{get defaultExpanded(){return e.defaultExpanded},get label(){return L().label},get value(){return L().value},get editable(){return e.editable},get dataPath(){return[...g,L().label]},get activeQuery(){return e.activeQuery}})})),V(()=>F(k,r().subEntry)),k}}),null),V(k=>{var L=r().entry,O=r().expanderButton;return L!==k.e&&F(x,k.e=L),O!==k.t&&F(w,k.t=O),k},{e:void 0,t:void 0}),b})()})),V(()=>F(h,r().subEntry)),h}})]}})]}}),null),C(d,y(U,{get when(){return f().length===0},get children(){var h=sc(),v=h.firstChild,m=v.firstChild;return C(v,()=>e.label,m),C(h,y(U,{get when(){return q(()=>!!(e.editable&&e.activeQuery!==void 0))()&&(p()==="string"||p()==="number"||p()==="boolean")},get fallback(){return(()=>{var b=Lo();return C(b,()=>wn(e.value)),V(()=>F(b,r().value)),b})()},get children(){return[y(U,{get when(){return q(()=>!!(e.editable&&e.activeQuery!==void 0))()&&(p()==="string"||p()==="number")},get children(){var b=lc();return b.addEventListener("change",x=>{const w=e.activeQuery.state.data,S=or(w,g,p()==="number"?x.target.valueAsNumber:x.target.value);o.setQueryData(e.activeQuery.queryKey,S)}),V(x=>{var w=p()==="number"?"number":"text",S=A(r().value,r().editableInput);return w!==x.e&&T(b,"type",x.e=w),S!==x.t&&F(b,x.t=S),x},{e:void 0,t:void 0}),V(()=>b.value=e.value),b}}),y(U,{get when(){return p()==="boolean"},get children(){var b=Lo();return C(b,y(fc,{get activeQuery(){return e.activeQuery},dataPath:g,get value(){return e.value}}),null),C(b,()=>wn(e.value),null),V(()=>F(b,A(r().value,r().actions,r().editableInput))),b}})]}}),null),C(h,y(U,{get when(){return e.editable&&e.itemsDeletable&&e.activeQuery!==void 0},get children(){return y(Ao,{get activeQuery(){return e.activeQuery},dataPath:g})}}),null),V(b=>{var x=r().row,w=r().label;return x!==b.e&&F(h,b.e=x),w!==b.t&&F(v,b.t=w),b},{e:void 0,t:void 0}),h}}),null),V(()=>F(d,r().entry)),d})()}var fl=(e,t)=>{const{colors:n,font:r,size:o,border:l}=$,s=(a,i)=>e==="light"?a:i;return{entry:t`
      & * {
        font-size: ${r.size.xs};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      position: relative;
      outline: none;
      word-break: break-word;
    `,subEntry:t`
      margin: 0 0 0 0.5em;
      padding-left: 0.75em;
      border-left: 2px solid ${s(n.gray[300],n.darkGray[400])};
      /* outline: 1px solid ${n.teal[400]}; */
    `,expander:t`
      & path {
        stroke: ${n.gray[400]};
      }
      & svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      display: inline-flex;
      align-items: center;
      transition: all 0.1s ease;
      /* outline: 1px solid ${n.blue[400]}; */
    `,expanderButtonContainer:t`
      display: flex;
      align-items: center;
      line-height: ${o[4]};
      min-height: ${o[4]};
      gap: ${o[2]};
    `,expanderButton:t`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      height: ${o[5]};
      background: transparent;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: ${o[1]};
      position: relative;
      /* outline: 1px solid ${n.green[400]}; */

      &:focus-visible {
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }

      & svg {
        position: relative;
        left: 1px;
      }
    `,info:t`
      color: ${s(n.gray[500],n.gray[500])};
      font-size: ${r.size.xs};
      margin-left: ${o[1]};
      /* outline: 1px solid ${n.yellow[400]}; */
    `,label:t`
      color: ${s(n.gray[700],n.gray[300])};
      white-space: nowrap;
    `,value:t`
      color: ${s(n.purple[600],n.purple[400])};
      flex-grow: 1;
    `,actions:t`
      display: inline-flex;
      gap: ${o[2]};
      align-items: center;
    `,row:t`
      display: inline-flex;
      gap: ${o[2]};
      width: 100%;
      margin: ${o[.25]} 0px;
      line-height: ${o[4.5]};
      align-items: center;
    `,editableInput:t`
      border: none;
      padding: ${o[.5]} ${o[1]} ${o[.5]} ${o[1.5]};
      flex-grow: 1;
      border-radius: ${l.radius.xs};
      background-color: ${s(n.gray[200],n.darkGray[500])};

      &:hover {
        background-color: ${s(n.gray[300],n.darkGray[600])};
      }
    `,actionButton:t`
      background-color: transparent;
      color: ${s(n.gray[500],n.gray[500])};
      border: none;
      display: inline-flex;
      padding: 0px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: ${o[3]};
      height: ${o[3]};
      position: relative;
      z-index: 1;

      &:hover svg {
        color: ${s(n.gray[600],n.gray[400])};
      }

      &:focus-visible {
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
        outline-offset: 2px;
      }
    `}},Nt=e=>fl("light",e),jt=e=>fl("dark",e);rr(["click"]);var gc=z('<div><div aria-hidden=true></div><button type=button aria-label="Open Tanstack query devtools"class=tsqd-open-btn>'),pn=z("<div>"),pc=z('<aside aria-label="Tanstack query devtools"><div></div><button aria-label="Close tanstack query devtools">'),hc=z("<select name=tsqd-queries-filter-sort>"),yc=z("<select name=tsqd-mutations-filter-sort>"),vc=z("<span>Asc"),mc=z("<span>Desc"),bc=z('<button aria-label="Open in picture-in-picture mode"title="Open in picture-in-picture mode">'),xc=z("<div>Settings"),wc=z("<span>Position"),kc=z("<span>Top"),$c=z("<span>Bottom"),Sc=z("<span>Left"),Cc=z("<span>Right"),Ec=z("<span>Theme"),qc=z("<span>Light"),Mc=z("<span>Dark"),Tc=z("<span>System"),Fc=z("<div><div class=tsqd-queries-container>"),Lc=z("<div><div class=tsqd-mutations-container>"),Dc=z('<div><div><div><button aria-label="Close Tanstack query devtools"><span>TANSTACK</span><span> v</span></button></div></div><div><div><div><input aria-label="Filter queries by query key"type=text placeholder=Filter name=tsqd-query-filter-input></div><div></div><button class=tsqd-query-filter-sort-order-btn></button></div><div><button aria-label="Clear query cache"></button><button>'),Io=z("<option>Sort by "),Ac=z("<div class=tsqd-query-disabled-indicator>disabled"),gl=z("<button><div></div><code class=tsqd-query-hash>"),Oc=z("<div role=tooltip id=tsqd-status-tooltip>"),Ic=z("<span>"),zc=z("<button><span></span><span>"),Pc=z("<button><span></span> Error"),Kc=z('<div><span></span>Trigger Error<select><option value=""disabled selected>'),Rc=z('<div class="tsqd-query-details-explorer-container tsqd-query-details-data-explorer">'),Bc=z("<form><textarea name=data></textarea><div><span></span><div><button type=button>Cancel</button><button>Save"),Hc=z('<div><div>Query Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-observers-count><span>Observers:</span><span></span></div><div class=tsqd-query-details-last-updated><span>Last Updated:</span><span></span></div></div><div>Actions</div><div><button><span></span>Refetch</button><button><span></span>Invalidate</button><button><span></span>Reset</button><button><span></span>Remove</button><button><span></span> Loading</button></div><div>Data </div><div>Query Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),Uc=z("<option>"),Gc=z('<div><div>Mutation Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-last-updated><span>Submitted At:</span><span></span></div></div><div>Variables Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Context Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Mutations Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),[Le,Pn]=B(null),[mt,pl]=B(null),[je,Cr]=B(0),[It,zo]=B(!1),o0=e=>{const t=xe(),n=H().shadowDOMTarget?Z.bind({target:H().shadowDOMTarget}):Z,r=q(()=>t()==="dark"?Ge(n):Ue(n)),o=lr(),l=q(()=>H().buttonPosition||Nl),s=q(()=>e.localStore.open==="true"?!0:e.localStore.open==="false"?!1:H().initialIsOpen||jl),a=q(()=>e.localStore.position||H().position||Qn);let i;G(()=>{const c=i.parentElement,p=e.localStore.height||Ro,f=e.localStore.width||Bo,g=a();c.style.setProperty("--tsqd-panel-height",`${g==="top"?"-":""}${p}px`),c.style.setProperty("--tsqd-panel-width",`${g==="left"?"-":""}${f}px`)}),Ft(()=>{const c=()=>{const p=i.parentElement,f=getComputedStyle(p).fontSize;p.style.setProperty("--tsqd-font-size",f)};c(),window.addEventListener("focus",c),j(()=>{window.removeEventListener("focus",c)})});const u=q(()=>e.localStore.pip_open??"false");return[y(U,{get when(){return q(()=>!!o().pipWindow)()&&u()=="true"},get children(){return y(Po,{get mount(){var c;return(c=o().pipWindow)==null?void 0:c.document.body},get children(){return y(Vc,{get children(){return y(hl,e)}})}})}}),(()=>{var c=pn(),p=i;return typeof p=="function"?an(p,c):i=c,C(c,y(Zr,{name:"tsqd-panel-transition",get children(){return y(U,{get when(){return q(()=>!!(s()&&!o().pipWindow))()&&u()=="false"},get children(){return y(Nc,{get localStore(){return e.localStore},get setLocalStore(){return e.setLocalStore}})}})}}),null),C(c,y(Zr,{name:"tsqd-button-transition",get children(){return y(U,{get when(){return!s()},get children(){var f=gc(),g=f.firstChild,d=g.nextSibling;return C(g,y(Fo,{})),d.$$click=()=>e.setLocalStore("open","true"),C(d,y(Fo,{})),V(()=>F(f,A(r().devtoolsBtn,r()[`devtoolsBtn-position-${l()}`],"tsqd-open-btn-container"))),f}})}}),null),V(()=>F(c,A(n`
            & .tsqd-panel-transition-exit-active,
            & .tsqd-panel-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
            }

            & .tsqd-panel-transition-exit-to,
            & .tsqd-panel-transition-enter {
              ${a()==="top"||a()==="bottom"?"transform: translateY(var(--tsqd-panel-height));":"transform: translateX(var(--tsqd-panel-width));"}
            }

            & .tsqd-button-transition-exit-active,
            & .tsqd-button-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
              opacity: 1;
            }

            & .tsqd-button-transition-exit-to,
            & .tsqd-button-transition-enter {
              transform: ${l()==="relative"?"none;":l()==="top-left"?"translateX(-72px);":l()==="top-right"?"translateX(72px);":"translateY(72px);"};
              opacity: 0;
            }
          `,"tsqd-transitions-container"))),c})()]},Vc=e=>{const t=lr(),n=xe(),r=H().shadowDOMTarget?Z.bind({target:H().shadowDOMTarget}):Z,o=q(()=>n()==="dark"?Ge(r):Ue(r)),l=()=>{const{colors:s}=$,a=(i,u)=>n()==="dark"?u:i;return je()<qt?r`
        flex-direction: column;
        background-color: ${a(s.gray[300],s.gray[600])};
      `:r`
      flex-direction: row;
      background-color: ${a(s.gray[200],s.darkGray[900])};
    `};return G(()=>{const s=t().pipWindow,a=()=>{s&&Cr(s.innerWidth)};s&&(s.addEventListener("resize",a),a()),j(()=>{s&&s.removeEventListener("resize",a)})}),(()=>{var s=pn();return s.style.setProperty("--tsqd-font-size","16px"),s.style.setProperty("max-height","100vh"),s.style.setProperty("height","100vh"),s.style.setProperty("width","100vw"),C(s,()=>e.children),V(()=>F(s,A(o().panel,l(),{[r`
            min-width: min-content;
          `]:je()<ir},"tsqd-main-panel"))),s})()},i0=e=>{const t=xe(),n=H().shadowDOMTarget?Z.bind({target:H().shadowDOMTarget}):Z,r=q(()=>t()==="dark"?Ge(n):Ue(n));let o;Ft(()=>{jo(o,({width:s},a)=>{a===o&&Cr(s)})});const l=()=>{const{colors:s}=$,a=(i,u)=>t()==="dark"?u:i;return je()<qt?n`
        flex-direction: column;
        background-color: ${a(s.gray[300],s.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${a(s.gray[200],s.darkGray[900])};
    `};return(()=>{var s=pn(),a=o;return typeof a=="function"?an(a,s):o=s,s.style.setProperty("--tsqd-font-size","16px"),C(s,()=>e.children),V(()=>F(s,A(r().parentPanel,l(),{[n`
            min-width: min-content;
          `]:je()<ir},"tsqd-main-panel"))),s})()},Nc=e=>{const t=xe(),n=H().shadowDOMTarget?Z.bind({target:H().shadowDOMTarget}):Z,r=q(()=>t()==="dark"?Ge(n):Ue(n)),[o,l]=B(!1),s=q(()=>e.localStore.position||H().position||Qn),a=c=>{const p=c.currentTarget.parentElement;if(!p)return;l(!0);const{height:f,width:g}=p.getBoundingClientRect(),d=c.clientX,h=c.clientY;let v=0;const m=Br(3.5),b=Br(12),x=S=>{if(S.preventDefault(),s()==="left"||s()==="right"){const K=s()==="right"?d-S.clientX:S.clientX-d;v=Math.round(g+K),v<b&&(v=b),e.setLocalStore("width",String(Math.round(v)));const P=p.getBoundingClientRect().width;Number(e.localStore.width)<P&&e.setLocalStore("width",String(P))}else{const K=s()==="bottom"?h-S.clientY:S.clientY-h;v=Math.round(f+K),v<m&&(v=m,Pn(null)),e.setLocalStore("height",String(Math.round(v)))}},w=()=>{o()&&l(!1),document.removeEventListener("mousemove",x,!1),document.removeEventListener("mouseUp",w,!1)};document.addEventListener("mousemove",x,!1),document.addEventListener("mouseup",w,!1)};let i;Ft(()=>{jo(i,({width:c},p)=>{p===i&&Cr(c)})}),G(()=>{var c,p;const f=(p=(c=i.parentElement)==null?void 0:c.parentElement)==null?void 0:p.parentElement;if(!f)return;const g=e.localStore.position||Qn,d=bl("padding",g),h=e.localStore.position==="left"||e.localStore.position==="right",v=(({padding:m,paddingTop:b,paddingBottom:x,paddingLeft:w,paddingRight:S})=>({padding:m,paddingTop:b,paddingBottom:x,paddingLeft:w,paddingRight:S}))(f.style);f.style[d]=`${h?e.localStore.width:e.localStore.height}px`,j(()=>{Object.entries(v).forEach(([m,b])=>{f.style[m]=b})})});const u=()=>{const{colors:c}=$,p=(f,g)=>t()==="dark"?g:f;return je()<qt?n`
        flex-direction: column;
        background-color: ${p(c.gray[300],c.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${p(c.gray[200],c.darkGray[900])};
    `};return(()=>{var c=pc(),p=c.firstChild,f=p.nextSibling,g=i;return typeof g=="function"?an(g,c):i=c,p.$$mousedown=a,f.$$click=()=>e.setLocalStore("open","false"),C(f,y(nn,{})),C(c,y(hl,e),null),V(d=>{var h=A(r().panel,r()[`panel-position-${s()}`],u(),{[n`
            min-width: min-content;
          `]:je()<ir&&(s()==="right"||s()==="left")},"tsqd-main-panel"),v=s()==="bottom"||s()==="top"?`${e.localStore.height||Ro}px`:"auto",m=s()==="right"||s()==="left"?`${e.localStore.width||Bo}px`:"auto",b=A(r().dragHandle,r()[`dragHandle-position-${s()}`],"tsqd-drag-handle"),x=A(r().closeBtn,r()[`closeBtn-position-${s()}`],"tsqd-minimize-btn");return h!==d.e&&F(c,d.e=h),v!==d.t&&((d.t=v)!=null?c.style.setProperty("height",v):c.style.removeProperty("height")),m!==d.a&&((d.a=m)!=null?c.style.setProperty("width",m):c.style.removeProperty("width")),b!==d.o&&F(p,d.o=b),x!==d.i&&F(f,d.i=x),d},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),c})()},hl=e=>{Xc(),Jc();let t;const n=xe(),r=H().shadowDOMTarget?Z.bind({target:H().shadowDOMTarget}):Z,o=q(()=>n()==="dark"?Ge(r):Ue(r)),l=lr(),[s,a]=B("queries"),i=q(()=>e.localStore.sort||Wl),u=q(()=>Number(e.localStore.sortOrder)||Gr),c=q(()=>e.localStore.mutationSort||_l),p=q(()=>Number(e.localStore.mutationSortOrder)||Gr),f=q(()=>Vn[i()]),g=q(()=>Nn[c()]),d=q(()=>H().onlineManager),h=q(()=>H().client.getQueryCache()),v=q(()=>H().client.getMutationCache()),m=we(P=>P().getAll().length,!1),b=q(dt(()=>[m(),e.localStore.filter,i(),u()],()=>{const P=h().getAll(),I=e.localStore.filter?P.filter(k=>Vr(k.queryHash,e.localStore.filter||"").passed):[...P];return f()?I.sort((k,L)=>f()(k,L)*u()):I})),x=Ne(P=>P().getAll().length,!1),w=q(dt(()=>[x(),e.localStore.mutationFilter,c(),p()],()=>{const P=v().getAll(),I=e.localStore.mutationFilter?P.filter(k=>{const L=`${k.options.mutationKey?JSON.stringify(k.options.mutationKey)+" - ":""}${new Date(k.state.submittedAt).toLocaleString()}`;return Vr(L,e.localStore.mutationFilter||"").passed}):[...P];return g()?I.sort((k,L)=>g()(k,L)*p()):I})),S=P=>{e.setLocalStore("position",P)},K=P=>{const I=getComputedStyle(t).getPropertyValue("--tsqd-font-size");P.style.setProperty("--tsqd-font-size",I)};return[(()=>{var P=Dc(),I=P.firstChild,k=I.firstChild,L=k.firstChild,O=L.firstChild,N=O.nextSibling,Q=N.firstChild,R=I.nextSibling,Y=R.firstChild,ee=Y.firstChild,ie=ee.firstChild,le=ee.nextSibling,ae=le.nextSibling,he=Y.nextSibling,Me=he.firstChild,ge=Me.nextSibling,Ee=t;return typeof Ee=="function"?an(Ee,P):t=P,L.$$click=()=>{if(!l().pipWindow&&!e.showPanelViewOnly){e.setLocalStore("open","false");return}e.onClose&&e.onClose()},C(N,()=>H().queryFlavor,Q),C(N,()=>H().version,null),C(k,y(Ke.Root,{get class(){return A(o().viewToggle)},get value(){return s()},onChange:M=>{a(M),Pn(null),pl(null)},get children(){return[y(Ke.Item,{value:"queries",class:"tsqd-radio-toggle",get children(){return[y(Ke.ItemInput,{}),y(Ke.ItemControl,{get children(){return y(Ke.ItemIndicator,{})}}),y(Ke.ItemLabel,{title:"Toggle Queries View",children:"Queries"})]}}),y(Ke.Item,{value:"mutations",class:"tsqd-radio-toggle",get children(){return[y(Ke.ItemInput,{}),y(Ke.ItemControl,{get children(){return y(Ke.ItemIndicator,{})}}),y(Ke.ItemLabel,{title:"Toggle Mutations View",children:"Mutations"})]}})]}}),null),C(I,y(U,{get when(){return s()==="queries"},get children(){return y(Wc,{})}}),null),C(I,y(U,{get when(){return s()==="mutations"},get children(){return y(_c,{})}}),null),C(ee,y(Ad,{}),ie),ie.$$input=M=>{s()==="queries"?e.setLocalStore("filter",M.currentTarget.value):e.setLocalStore("mutationFilter",M.currentTarget.value)},C(le,y(U,{get when(){return s()==="queries"},get children(){var M=hc();return M.addEventListener("change",fe=>{e.setLocalStore("sort",fe.currentTarget.value)}),C(M,()=>Object.keys(Vn).map(fe=>(()=>{var J=Io();return J.firstChild,J.value=fe,C(J,fe,null),J})())),V(()=>M.value=i()),M}}),null),C(le,y(U,{get when(){return s()==="mutations"},get children(){var M=yc();return M.addEventListener("change",fe=>{e.setLocalStore("mutationSort",fe.currentTarget.value)}),C(M,()=>Object.keys(Nn).map(fe=>(()=>{var J=Io();return J.firstChild,J.value=fe,C(J,fe,null),J})())),V(()=>M.value=c()),M}}),null),C(le,y(nn,{}),null),ae.$$click=()=>{s()==="queries"?e.setLocalStore("sortOrder",String(u()*-1)):e.setLocalStore("mutationSortOrder",String(p()*-1))},C(ae,y(U,{get when(){return(s()==="queries"?u():p())===1},get children(){return[vc(),y(Mo,{})]}}),null),C(ae,y(U,{get when(){return(s()==="queries"?u():p())===-1},get children(){return[mc(),y(To,{})]}}),null),Me.$$click=()=>{s()==="queries"?h().clear():v().clear()},C(Me,y(cl,{})),ge.$$click=()=>{It()?(d().setOnline(!0),zo(!1)):(d().setOnline(!1),zo(!0))},C(ge,(()=>{var M=q(()=>!!It());return()=>M()?y(Bd,{}):y(Rd,{})})()),C(he,y(U,{get when(){return q(()=>!l().pipWindow)()&&!l().disabled},get children(){var M=bc();return M.$$click=()=>{l().requestPipWindow(Number(window.innerWidth),Number(e.localStore.height??500))},C(M,y(Ud,{})),V(()=>F(M,A(o().actionsBtn,"tsqd-actions-btn","tsqd-action-open-pip"))),M}}),null),C(he,y(pe.Root,{gutter:4,get children(){return[y(pe.Trigger,{get class(){return A(o().actionsBtn,"tsqd-actions-btn","tsqd-action-settings")},get children(){return y(Hd,{})}}),y(pe.Portal,{ref:M=>K(M),get mount(){return q(()=>!!l().pipWindow)()?l().pipWindow.document.body:document.body},get children(){return y(pe.Content,{get class(){return A(o().settingsMenu,"tsqd-settings-menu")},get children(){return[(()=>{var M=xc();return V(()=>F(M,A(o().settingsMenuHeader,"tsqd-settings-menu-header"))),M})(),y(U,{get when(){return!e.showPanelViewOnly},get children(){return y(pe.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[y(pe.SubTrigger,{get class(){return A(o().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[wc(),y(nn,{})]}}),y(pe.Portal,{ref:M=>K(M),get mount(){return q(()=>!!l().pipWindow)()?l().pipWindow.document.body:document.body},get children(){return y(pe.SubContent,{get class(){return A(o().settingsMenu,"tsqd-settings-submenu")},get children(){return[y(pe.Item,{onSelect:()=>{S("top")},as:"button",get class(){return A(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[kc(),y(Mo,{})]}}),y(pe.Item,{onSelect:()=>{S("bottom")},as:"button",get class(){return A(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[$c(),y(To,{})]}}),y(pe.Item,{onSelect:()=>{S("left")},as:"button",get class(){return A(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[Sc(),y(Od,{})]}}),y(pe.Item,{onSelect:()=>{S("right")},as:"button",get class(){return A(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-right")},get children(){return[Cc(),y(Id,{})]}})]}})}})]}})}}),y(pe.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[y(pe.SubTrigger,{get class(){return A(o().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[Ec(),y(nn,{})]}}),y(pe.Portal,{ref:M=>K(M),get mount(){return q(()=>!!l().pipWindow)()?l().pipWindow.document.body:document.body},get children(){return y(pe.SubContent,{get class(){return A(o().settingsMenu,"tsqd-settings-submenu")},get children(){return[y(pe.Item,{onSelect:()=>{e.setLocalStore("theme_preference","light")},as:"button",get class(){return A(o().settingsSubButton,e.localStore.theme_preference==="light"&&o().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[qc(),y(zd,{})]}}),y(pe.Item,{onSelect:()=>{e.setLocalStore("theme_preference","dark")},as:"button",get class(){return A(o().settingsSubButton,e.localStore.theme_preference==="dark"&&o().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[Mc(),y(Pd,{})]}}),y(pe.Item,{onSelect:()=>{e.setLocalStore("theme_preference","system")},as:"button",get class(){return A(o().settingsSubButton,e.localStore.theme_preference==="system"&&o().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[Tc(),y(Kd,{})]}})]}})}})]}})]}})}})]}}),null),C(P,y(U,{get when(){return s()==="queries"},get children(){var M=Fc(),fe=M.firstChild;return C(fe,y(kn,{by:J=>J.queryHash,get each(){return b()},children:J=>y(jc,{get query(){return J()}})})),V(()=>F(M,A(o().overflowQueryContainer,"tsqd-queries-overflow-container"))),M}}),null),C(P,y(U,{get when(){return s()==="mutations"},get children(){var M=Lc(),fe=M.firstChild;return C(fe,y(kn,{by:J=>J.mutationId,get each(){return w()},children:J=>y(Qc,{get mutation(){return J()}})})),V(()=>F(M,A(o().overflowQueryContainer,"tsqd-mutations-overflow-container"))),M}}),null),V(M=>{var fe=A(o().queriesContainer,je()<qt&&(Le()||mt())&&r`
              height: 50%;
              max-height: 50%;
            `,je()<qt&&!(Le()||mt())&&r`
              height: 100%;
              max-height: 100%;
            `,"tsqd-queries-container"),J=A(o().row,"tsqd-header"),W=o().logoAndToggleContainer,ye=A(o().logo,"tsqd-text-logo-container"),_e=A(o().tanstackLogo,"tsqd-text-logo-tanstack"),Oe=A(o().queryFlavorLogo,"tsqd-text-logo-query-flavor"),Dt=A(o().row,"tsqd-filters-actions-container"),Ie=A(o().filtersContainer,"tsqd-filters-container"),pt=A(o().filterInput,"tsqd-query-filter-textfield-container"),$t=A("tsqd-query-filter-textfield"),nt=A(o().filterSelect,"tsqd-query-filter-sort-container"),Ze=`Sort order ${(s()==="queries"?u():p())===-1?"descending":"ascending"}`,rt=(s()==="queries"?u():p())===-1,D=A(o().actionsContainer,"tsqd-actions-container"),te=A(o().actionsBtn,"tsqd-actions-btn","tsqd-action-clear-cache"),ve=`Clear ${s()} cache`,se=A(o().actionsBtn,It()&&o().actionsBtnOffline,"tsqd-actions-btn","tsqd-action-mock-offline-behavior"),oe=`${It()?"Unset offline mocking behavior":"Mock offline behavior"}`,ue=It(),me=`${It()?"Unset offline mocking behavior":"Mock offline behavior"}`;return fe!==M.e&&F(P,M.e=fe),J!==M.t&&F(I,M.t=J),W!==M.a&&F(k,M.a=W),ye!==M.o&&F(L,M.o=ye),_e!==M.i&&F(O,M.i=_e),Oe!==M.n&&F(N,M.n=Oe),Dt!==M.s&&F(R,M.s=Dt),Ie!==M.h&&F(Y,M.h=Ie),pt!==M.r&&F(ee,M.r=pt),$t!==M.d&&F(ie,M.d=$t),nt!==M.l&&F(le,M.l=nt),Ze!==M.u&&T(ae,"aria-label",M.u=Ze),rt!==M.c&&T(ae,"aria-pressed",M.c=rt),D!==M.w&&F(he,M.w=D),te!==M.m&&F(Me,M.m=te),ve!==M.f&&T(Me,"title",M.f=ve),se!==M.y&&F(ge,M.y=se),oe!==M.g&&T(ge,"aria-label",M.g=oe),ue!==M.p&&T(ge,"aria-pressed",M.p=ue),me!==M.b&&T(ge,"title",M.b=me),M},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),V(()=>ie.value=s()==="queries"?e.localStore.filter||"":e.localStore.mutationFilter||""),P})(),y(U,{get when(){return q(()=>s()==="queries")()&&Le()},get children(){return y(Zc,{})}}),y(U,{get when(){return q(()=>s()==="mutations")()&&mt()},get children(){return y(Yc,{})}})]},jc=e=>{const t=xe(),n=H().shadowDOMTarget?Z.bind({target:H().shadowDOMTarget}):Z,r=q(()=>t()==="dark"?Ge(n):Ue(n)),{colors:o,alpha:l}=$,s=(g,d)=>t()==="dark"?d:g,a=we(g=>{var d;return(d=g().find({queryKey:e.query.queryKey}))==null?void 0:d.state},!0,g=>g.query.queryHash===e.query.queryHash),i=we(g=>{var d;return((d=g().find({queryKey:e.query.queryKey}))==null?void 0:d.isDisabled())??!1},!0,g=>g.query.queryHash===e.query.queryHash),u=we(g=>{var d;return((d=g().find({queryKey:e.query.queryKey}))==null?void 0:d.isStale())??!1},!0,g=>g.query.queryHash===e.query.queryHash),c=we(g=>{var d;return((d=g().find({queryKey:e.query.queryKey}))==null?void 0:d.getObserversCount())??0},!0,g=>g.query.queryHash===e.query.queryHash),p=q(()=>wl({queryState:a(),observerCount:c(),isStale:u()})),f=()=>p()==="gray"?n`
        background-color: ${s(o[p()][200],o[p()][700])};
        color: ${s(o[p()][700],o[p()][300])};
      `:n`
      background-color: ${s(o[p()][200]+l[80],o[p()][900])};
      color: ${s(o[p()][800],o[p()][300])};
    `;return y(U,{get when(){return a()},get children(){var g=gl(),d=g.firstChild,h=d.nextSibling;return g.$$click=()=>Pn(e.query.queryHash===Le()?null:e.query.queryHash),C(d,c),C(h,()=>e.query.queryHash),C(g,y(U,{get when(){return i()},get children(){return Ac()}}),null),V(v=>{var m=A(r().queryRow,Le()===e.query.queryHash&&r().selectedQueryRow,"tsqd-query-row"),b=`Query key ${e.query.queryHash}`,x=A(f(),"tsqd-query-observer-count");return m!==v.e&&F(g,v.e=m),b!==v.t&&T(g,"aria-label",v.t=b),x!==v.a&&F(d,v.a=x),v},{e:void 0,t:void 0,a:void 0}),g}})},Qc=e=>{const t=xe(),n=H().shadowDOMTarget?Z.bind({target:H().shadowDOMTarget}):Z,r=q(()=>t()==="dark"?Ge(n):Ue(n)),{colors:o,alpha:l}=$,s=(f,g)=>t()==="dark"?g:f,a=Ne(f=>{const g=f().getAll().find(d=>d.mutationId===e.mutation.mutationId);return g==null?void 0:g.state}),i=Ne(f=>{const g=f().getAll().find(d=>d.mutationId===e.mutation.mutationId);return g?g.state.isPaused:!1}),u=Ne(f=>{const g=f().getAll().find(d=>d.mutationId===e.mutation.mutationId);return g?g.state.status:"idle"}),c=q(()=>Rt({isPaused:i(),status:u()})),p=()=>c()==="gray"?n`
        background-color: ${s(o[c()][200],o[c()][700])};
        color: ${s(o[c()][700],o[c()][300])};
      `:n`
      background-color: ${s(o[c()][200]+l[80],o[c()][900])};
      color: ${s(o[c()][800],o[c()][300])};
    `;return y(U,{get when(){return a()},get children(){var f=gl(),g=f.firstChild,d=g.nextSibling;return f.$$click=()=>{pl(e.mutation.mutationId===mt()?null:e.mutation.mutationId)},C(g,y(U,{get when(){return c()==="purple"},get children(){return y(Xd,{})}}),null),C(g,y(U,{get when(){return c()==="green"},get children(){return y(_d,{})}}),null),C(g,y(U,{get when(){return c()==="red"},get children(){return y(Yd,{})}}),null),C(g,y(U,{get when(){return c()==="yellow"},get children(){return y(Zd,{})}}),null),C(d,y(U,{get when(){return e.mutation.options.mutationKey},get children(){return[q(()=>JSON.stringify(e.mutation.options.mutationKey))," -"," "]}}),null),C(d,()=>new Date(e.mutation.state.submittedAt).toLocaleString(),null),V(h=>{var v=A(r().queryRow,mt()===e.mutation.mutationId&&r().selectedQueryRow,"tsqd-query-row"),m=`Mutation submitted at ${new Date(e.mutation.state.submittedAt).toLocaleString()}`,b=A(p(),"tsqd-query-observer-count");return v!==h.e&&F(f,h.e=v),m!==h.t&&T(f,"aria-label",h.t=m),b!==h.a&&F(g,h.a=b),h},{e:void 0,t:void 0,a:void 0}),f}})},Wc=()=>{const e=we(i=>i().getAll().filter(u=>zt(u)==="stale").length),t=we(i=>i().getAll().filter(u=>zt(u)==="fresh").length),n=we(i=>i().getAll().filter(u=>zt(u)==="fetching").length),r=we(i=>i().getAll().filter(u=>zt(u)==="paused").length),o=we(i=>i().getAll().filter(u=>zt(u)==="inactive").length),l=xe(),s=H().shadowDOMTarget?Z.bind({target:H().shadowDOMTarget}):Z,a=q(()=>l()==="dark"?Ge(s):Ue(s));return(()=>{var i=pn();return C(i,y(ut,{label:"Fresh",color:"green",get count(){return t()}}),null),C(i,y(ut,{label:"Fetching",color:"blue",get count(){return n()}}),null),C(i,y(ut,{label:"Paused",color:"purple",get count(){return r()}}),null),C(i,y(ut,{label:"Stale",color:"yellow",get count(){return e()}}),null),C(i,y(ut,{label:"Inactive",color:"gray",get count(){return o()}}),null),V(()=>F(i,A(a().queryStatusContainer,"tsqd-query-status-container"))),i})()},_c=()=>{const e=Ne(a=>a().getAll().filter(i=>Rt({isPaused:i.state.isPaused,status:i.state.status})==="green").length),t=Ne(a=>a().getAll().filter(i=>Rt({isPaused:i.state.isPaused,status:i.state.status})==="yellow").length),n=Ne(a=>a().getAll().filter(i=>Rt({isPaused:i.state.isPaused,status:i.state.status})==="purple").length),r=Ne(a=>a().getAll().filter(i=>Rt({isPaused:i.state.isPaused,status:i.state.status})==="red").length),o=xe(),l=H().shadowDOMTarget?Z.bind({target:H().shadowDOMTarget}):Z,s=q(()=>o()==="dark"?Ge(l):Ue(l));return(()=>{var a=pn();return C(a,y(ut,{label:"Paused",color:"purple",get count(){return n()}}),null),C(a,y(ut,{label:"Pending",color:"yellow",get count(){return t()}}),null),C(a,y(ut,{label:"Success",color:"green",get count(){return e()}}),null),C(a,y(ut,{label:"Error",color:"red",get count(){return r()}}),null),V(()=>F(a,A(s().queryStatusContainer,"tsqd-query-status-container"))),a})()},ut=e=>{const t=xe(),n=H().shadowDOMTarget?Z.bind({target:H().shadowDOMTarget}):Z,r=q(()=>t()==="dark"?Ge(n):Ue(n)),{colors:o,alpha:l}=$,s=(g,d)=>t()==="dark"?d:g;let a;const[i,u]=B(!1),[c,p]=B(!1),f=q(()=>!(Le()&&je()<Vl&&je()>qt||je()<qt));return(()=>{var g=zc(),d=g.firstChild,h=d.nextSibling,v=a;return typeof v=="function"?an(v,g):a=g,g.addEventListener("mouseleave",()=>{u(!1),p(!1)}),g.addEventListener("mouseenter",()=>u(!0)),g.addEventListener("blur",()=>p(!1)),g.addEventListener("focus",()=>p(!0)),Cl(g,_({get disabled(){return f()},get class(){return A(r().queryStatusTag,!f()&&n`
            cursor: pointer;
            &:hover {
              background: ${s(o.gray[200],o.darkGray[400])}${l[80]};
            }
          `,"tsqd-query-status-tag",`tsqd-query-status-tag-${e.label.toLowerCase()}`)}},()=>i()||c()?{"aria-describedby":"tsqd-status-tooltip"}:{}),!1,!0),C(g,y(U,{get when(){return q(()=>!f())()&&(i()||c())},get children(){var m=Oc();return C(m,()=>e.label),V(()=>F(m,A(r().statusTooltip,"tsqd-query-status-tooltip"))),m}}),d),C(g,y(U,{get when(){return f()},get children(){var m=Ic();return C(m,()=>e.label),V(()=>F(m,A(r().queryStatusTagLabel,"tsqd-query-status-tag-label"))),m}}),h),C(h,()=>e.count),V(m=>{var b=A(n`
            width: ${$.size[1.5]};
            height: ${$.size[1.5]};
            border-radius: ${$.border.radius.full};
            background-color: ${$.colors[e.color][500]};
          `,"tsqd-query-status-tag-dot"),x=A(r().queryStatusCount,e.count>0&&e.color!=="gray"&&n`
              background-color: ${s(o[e.color][100],o[e.color][900])};
              color: ${s(o[e.color][700],o[e.color][300])};
            `,"tsqd-query-status-tag-count");return b!==m.e&&F(d,m.e=b),x!==m.t&&F(h,m.t=x),m},{e:void 0,t:void 0}),g})()},Zc=()=>{const e=xe(),t=H().shadowDOMTarget?Z.bind({target:H().shadowDOMTarget}):Z,n=q(()=>e()==="dark"?Ge(t):Ue(t)),{colors:r}=$,o=(k,L)=>e()==="dark"?L:k,l=H().client,[s,a]=B(!1),[i,u]=B("view"),[c,p]=B(!1),f=q(()=>H().errorTypes||[]),g=we(k=>k().getAll().find(L=>L.queryHash===Le()),!1),d=we(k=>k().getAll().find(L=>L.queryHash===Le()),!1),h=we(k=>{var L;return(L=k().getAll().find(O=>O.queryHash===Le()))==null?void 0:L.state},!1),v=we(k=>{var L;return(L=k().getAll().find(O=>O.queryHash===Le()))==null?void 0:L.state.data},!1),m=we(k=>{const L=k().getAll().find(O=>O.queryHash===Le());return L?zt(L):"inactive"}),b=we(k=>{const L=k().getAll().find(O=>O.queryHash===Le());return L?L.state.status:"pending"}),x=we(k=>{var L;return((L=k().getAll().find(O=>O.queryHash===Le()))==null?void 0:L.getObserversCount())??0}),w=q(()=>kl(m())),S=()=>{var k;const L=(k=g())==null?void 0:k.fetch();L==null||L.catch(()=>{})},K=k=>{const L=(k==null?void 0:k.initializer(g()))??new Error("Unknown error from devtools"),O=g().options;g().setState({status:"error",error:L,fetchMeta:{...g().state.fetchMeta,__previousQueryOptions:O}})},P=()=>{const k=g(),L=k.state,O=k.state.fetchMeta?k.state.fetchMeta.__previousQueryOptions:null;k.cancel({silent:!0}),k.setState({...L,fetchStatus:"idle",fetchMeta:null}),O&&k.fetch(O)};G(()=>{m()!=="fetching"&&a(!1)});const I=()=>w()==="gray"?t`
        background-color: ${o(r[w()][200],r[w()][700])};
        color: ${o(r[w()][700],r[w()][300])};
        border-color: ${o(r[w()][400],r[w()][600])};
      `:t`
      background-color: ${o(r[w()][100],r[w()][900])};
      color: ${o(r[w()][700],r[w()][300])};
      border-color: ${o(r[w()][400],r[w()][600])};
    `;return y(U,{get when(){return q(()=>!!g())()&&h()},get children(){var k=Hc(),L=k.firstChild,O=L.nextSibling,N=O.firstChild,Q=N.firstChild,R=Q.firstChild,Y=Q.nextSibling,ee=N.nextSibling,ie=ee.firstChild,le=ie.nextSibling,ae=ee.nextSibling,he=ae.firstChild,Me=he.nextSibling,ge=O.nextSibling,Ee=ge.nextSibling,M=Ee.firstChild,fe=M.firstChild,J=M.nextSibling,W=J.firstChild,ye=J.nextSibling,_e=ye.firstChild,Oe=ye.nextSibling,Dt=Oe.firstChild,Ie=Oe.nextSibling,pt=Ie.firstChild,$t=pt.nextSibling,nt=Ee.nextSibling;nt.firstChild;var Ze=nt.nextSibling,rt=Ze.nextSibling;return C(R,()=>wn(g().queryKey,!0)),C(Y,m),C(le,x),C(Me,()=>new Date(h().dataUpdatedAt).toLocaleTimeString()),M.$$click=S,J.$$click=()=>l.invalidateQueries(g()),ye.$$click=()=>l.resetQueries(g()),Oe.$$click=()=>{l.removeQueries(g()),Pn(null)},Ie.$$click=()=>{var D;if(((D=g())==null?void 0:D.state.data)===void 0)a(!0),P();else{const te=g();if(!te)return;const ve=te.options;te.fetch({...ve,queryFn:()=>new Promise(()=>{}),gcTime:-1}),te.setState({data:void 0,status:"pending",fetchMeta:{...te.state.fetchMeta,__previousQueryOptions:ve}})}},C(Ie,()=>b()==="pending"?"Restore":"Trigger",$t),C(Ee,y(U,{get when(){return f().length===0||b()==="error"},get children(){var D=Pc(),te=D.firstChild,ve=te.nextSibling;return D.$$click=()=>{g().state.error?l.resetQueries(g()):K()},C(D,()=>b()==="error"?"Restore":"Trigger",ve),V(se=>{var oe=A(t`
                  color: ${o(r.red[500],r.red[400])};
                `,"tsqd-query-details-actions-btn","tsqd-query-details-action-error"),ue=b()==="pending",me=t`
                  background-color: ${o(r.red[500],r.red[400])};
                `;return oe!==se.e&&F(D,se.e=oe),ue!==se.t&&(D.disabled=se.t=ue),me!==se.a&&F(te,se.a=me),se},{e:void 0,t:void 0,a:void 0}),D}}),null),C(Ee,y(U,{get when(){return!(f().length===0||b()==="error")},get children(){var D=Kc(),te=D.firstChild,ve=te.nextSibling,se=ve.nextSibling;return se.firstChild,se.addEventListener("change",oe=>{const ue=f().find(me=>me.name===oe.currentTarget.value);K(ue)}),C(se,y($l,{get each(){return f()},children:oe=>(()=>{var ue=Uc();return C(ue,()=>oe.name),V(()=>ue.value=oe.name),ue})()}),null),C(D,y(nn,{}),null),V(oe=>{var ue=A(n().actionsSelect,"tsqd-query-details-actions-btn","tsqd-query-details-action-error-multiple"),me=t`
                  background-color: ${$.colors.red[400]};
                `,ne=b()==="pending";return ue!==oe.e&&F(D,oe.e=ue),me!==oe.t&&F(te,oe.t=me),ne!==oe.a&&(se.disabled=oe.a=ne),oe},{e:void 0,t:void 0,a:void 0}),D}}),null),C(nt,()=>i()==="view"?"Explorer":"Editor",null),C(k,y(U,{get when(){return i()==="view"},get children(){var D=Rc();return C(D,y(vt,{label:"Data",defaultExpanded:["Data"],get value(){return v()},editable:!0,onEdit:()=>u("edit"),get activeQuery(){return g()}})),V(te=>(te=$.size[2])!=null?D.style.setProperty("padding",te):D.style.removeProperty("padding")),D}}),Ze),C(k,y(U,{get when(){return i()==="edit"},get children(){var D=Bc(),te=D.firstChild,ve=te.nextSibling,se=ve.firstChild,oe=se.nextSibling,ue=oe.firstChild,me=ue.nextSibling;return D.addEventListener("submit",ne=>{ne.preventDefault();const Ye=new FormData(ne.currentTarget).get("data");try{const ot=JSON.parse(Ye);g().setState({...g().state,data:ot}),u("view")}catch{p(!0)}}),te.addEventListener("focus",()=>p(!1)),C(se,()=>c()?"Invalid Value":""),ue.$$click=()=>u("view"),V(ne=>{var Ye=A(n().devtoolsEditForm,"tsqd-query-details-data-editor"),ot=n().devtoolsEditTextarea,ht=c(),St=n().devtoolsEditFormActions,it=n().devtoolsEditFormError,Ct=n().devtoolsEditFormActionContainer,lt=A(n().devtoolsEditFormAction,t`
                      color: ${o(r.gray[600],r.gray[300])};
                    `),yt=A(n().devtoolsEditFormAction,t`
                      color: ${o(r.blue[600],r.blue[400])};
                    `);return Ye!==ne.e&&F(D,ne.e=Ye),ot!==ne.t&&F(te,ne.t=ot),ht!==ne.a&&T(te,"data-error",ne.a=ht),St!==ne.o&&F(ve,ne.o=St),it!==ne.i&&F(se,ne.i=it),Ct!==ne.n&&F(oe,ne.n=Ct),lt!==ne.s&&F(ue,ne.s=lt),yt!==ne.h&&F(me,ne.h=yt),ne},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),V(()=>te.value=JSON.stringify(v(),null,2)),D}}),Ze),C(rt,y(vt,{label:"Query",defaultExpanded:["Query","queryKey"],get value(){return d()}})),V(D=>{var te=A(n().detailsContainer,"tsqd-query-details-container"),ve=A(n().detailsHeader,"tsqd-query-details-header"),se=A(n().detailsBody,"tsqd-query-details-summary-container"),oe=A(n().queryDetailsStatus,I()),ue=A(n().detailsHeader,"tsqd-query-details-header"),me=A(n().actionsBody,"tsqd-query-details-actions-container"),ne=A(t`
                color: ${o(r.blue[600],r.blue[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-refetch"),Ye=m()==="fetching",ot=t`
                background-color: ${o(r.blue[600],r.blue[400])};
              `,ht=A(t`
                color: ${o(r.yellow[600],r.yellow[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-invalidate"),St=b()==="pending",it=t`
                background-color: ${o(r.yellow[600],r.yellow[400])};
              `,Ct=A(t`
                color: ${o(r.gray[600],r.gray[300])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-reset"),lt=b()==="pending",yt=t`
                background-color: ${o(r.gray[600],r.gray[400])};
              `,hn=A(t`
                color: ${o(r.pink[500],r.pink[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-remove"),Qt=m()==="fetching",yn=t`
                background-color: ${o(r.pink[500],r.pink[400])};
              `,At=A(t`
                color: ${o(r.cyan[500],r.cyan[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-loading"),vn=s(),Wt=t`
                background-color: ${o(r.cyan[500],r.cyan[400])};
              `,_t=A(n().detailsHeader,"tsqd-query-details-header"),Zt=A(n().detailsHeader,"tsqd-query-details-header"),Ot=$.size[2];return te!==D.e&&F(k,D.e=te),ve!==D.t&&F(L,D.t=ve),se!==D.a&&F(O,D.a=se),oe!==D.o&&F(Y,D.o=oe),ue!==D.i&&F(ge,D.i=ue),me!==D.n&&F(Ee,D.n=me),ne!==D.s&&F(M,D.s=ne),Ye!==D.h&&(M.disabled=D.h=Ye),ot!==D.r&&F(fe,D.r=ot),ht!==D.d&&F(J,D.d=ht),St!==D.l&&(J.disabled=D.l=St),it!==D.u&&F(W,D.u=it),Ct!==D.c&&F(ye,D.c=Ct),lt!==D.w&&(ye.disabled=D.w=lt),yt!==D.m&&F(_e,D.m=yt),hn!==D.f&&F(Oe,D.f=hn),Qt!==D.y&&(Oe.disabled=D.y=Qt),yn!==D.g&&F(Dt,D.g=yn),At!==D.p&&F(Ie,D.p=At),vn!==D.b&&(Ie.disabled=D.b=vn),Wt!==D.T&&F(pt,D.T=Wt),_t!==D.A&&F(nt,D.A=_t),Zt!==D.O&&F(Ze,D.O=Zt),Ot!==D.I&&((D.I=Ot)!=null?rt.style.setProperty("padding",Ot):rt.style.removeProperty("padding")),D},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0,T:void 0,A:void 0,O:void 0,I:void 0}),k}})},Yc=()=>{const e=xe(),t=H().shadowDOMTarget?Z.bind({target:H().shadowDOMTarget}):Z,n=q(()=>e()==="dark"?Ge(t):Ue(t)),{colors:r}=$,o=(c,p)=>e()==="dark"?p:c,l=Ne(c=>{const p=c().getAll().find(f=>f.mutationId===mt());return p?p.state.isPaused:!1}),s=Ne(c=>{const p=c().getAll().find(f=>f.mutationId===mt());return p?p.state.status:"idle"}),a=q(()=>Rt({isPaused:l(),status:s()})),i=Ne(c=>c().getAll().find(p=>p.mutationId===mt()),!1),u=()=>a()==="gray"?t`
        background-color: ${o(r[a()][200],r[a()][700])};
        color: ${o(r[a()][700],r[a()][300])};
        border-color: ${o(r[a()][400],r[a()][600])};
      `:t`
      background-color: ${o(r[a()][100],r[a()][900])};
      color: ${o(r[a()][700],r[a()][300])};
      border-color: ${o(r[a()][400],r[a()][600])};
    `;return y(U,{get when(){return i()},get children(){var c=Gc(),p=c.firstChild,f=p.nextSibling,g=f.firstChild,d=g.firstChild,h=d.firstChild,v=d.nextSibling,m=g.nextSibling,b=m.firstChild,x=b.nextSibling,w=f.nextSibling,S=w.nextSibling,K=S.nextSibling,P=K.nextSibling,I=P.nextSibling,k=I.nextSibling,L=k.nextSibling,O=L.nextSibling;return C(h,y(U,{get when(){return i().options.mutationKey},fallback:"No mutationKey found",get children(){return wn(i().options.mutationKey,!0)}})),C(v,y(U,{get when(){return a()==="purple"},children:"pending"}),null),C(v,y(U,{get when(){return a()!=="purple"},get children(){return s()}}),null),C(x,()=>new Date(i().state.submittedAt).toLocaleTimeString()),C(S,y(vt,{label:"Variables",defaultExpanded:["Variables"],get value(){return i().state.variables}})),C(P,y(vt,{label:"Context",defaultExpanded:["Context"],get value(){return i().state.context}})),C(k,y(vt,{label:"Data",defaultExpanded:["Data"],get value(){return i().state.data}})),C(O,y(vt,{label:"Mutation",defaultExpanded:["Mutation"],get value(){return i()}})),V(N=>{var Q=A(n().detailsContainer,"tsqd-query-details-container"),R=A(n().detailsHeader,"tsqd-query-details-header"),Y=A(n().detailsBody,"tsqd-query-details-summary-container"),ee=A(n().queryDetailsStatus,u()),ie=A(n().detailsHeader,"tsqd-query-details-header"),le=$.size[2],ae=A(n().detailsHeader,"tsqd-query-details-header"),he=$.size[2],Me=A(n().detailsHeader,"tsqd-query-details-header"),ge=$.size[2],Ee=A(n().detailsHeader,"tsqd-query-details-header"),M=$.size[2];return Q!==N.e&&F(c,N.e=Q),R!==N.t&&F(p,N.t=R),Y!==N.a&&F(f,N.a=Y),ee!==N.o&&F(v,N.o=ee),ie!==N.i&&F(w,N.i=ie),le!==N.n&&((N.n=le)!=null?S.style.setProperty("padding",le):S.style.removeProperty("padding")),ae!==N.s&&F(K,N.s=ae),he!==N.h&&((N.h=he)!=null?P.style.setProperty("padding",he):P.style.removeProperty("padding")),Me!==N.r&&F(I,N.r=Me),ge!==N.d&&((N.d=ge)!=null?k.style.setProperty("padding",ge):k.style.removeProperty("padding")),Ee!==N.l&&F(L,N.l=Ee),M!==N.u&&((N.u=M)!=null?O.style.setProperty("padding",M):O.style.removeProperty("padding")),N},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),c}})},qn=new Map,Xc=()=>{const e=q(()=>H().client.getQueryCache()),t=e().subscribe(n=>{xl(()=>{for(const[r,o]of qn.entries())o.shouldUpdate(n)&&o.setter(r(e))})});return j(()=>{qn.clear(),t()}),t},we=(e,t=!0,n=()=>!0)=>{const r=q(()=>H().client.getQueryCache()),[o,l]=B(e(r),t?void 0:{equals:!1});return G(()=>{l(e(r))}),qn.set(e,{setter:l,shouldUpdate:n}),j(()=>{qn.delete(e)}),o},Mn=new Map,Jc=()=>{const e=q(()=>H().client.getMutationCache()),t=e().subscribe(()=>{for(const[n,r]of Mn.entries())queueMicrotask(()=>{r(n(e))})});return j(()=>{Mn.clear(),t()}),t},Ne=(e,t=!0)=>{const n=q(()=>H().client.getMutationCache()),[r,o]=B(e(n),t?void 0:{equals:!1});return G(()=>{o(e(n))}),Mn.set(e,o),j(()=>{Mn.delete(e)}),r},yl=(e,t)=>{const{colors:n,font:r,size:o,alpha:l,shadow:s,border:a}=$,i=(u,c)=>e==="light"?u:c;return{devtoolsBtn:t`
      z-index: 100000;
      position: fixed;
      padding: 4px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      box-shadow: ${s.md()};
      overflow: hidden;

      & div {
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 9999px;

        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        filter: blur(6px) saturate(1.2) contrast(1.1);
      }

      &:focus-within {
        outline-offset: 2px;
        outline: 3px solid ${n.green[600]};
      }

      & button {
        position: relative;
        z-index: 1;
        padding: 0;
        border-radius: 9999px;
        background-color: transparent;
        border: none;
        height: 40px;
        display: flex;
        width: 40px;
        overflow: hidden;
        cursor: pointer;
        outline: none;
        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    `,panel:t`
      position: fixed;
      z-index: 9999;
      display: flex;
      gap: ${$.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${i(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${i(n.gray[400],n.darkGray[300])};
      }
    `,parentPanel:t`
      z-index: 9999;
      display: flex;
      height: 100%;
      gap: ${$.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${i(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${i(n.gray[400],n.darkGray[300])};
      }
    `,"devtoolsBtn-position-bottom-right":t`
      bottom: 12px;
      right: 12px;
    `,"devtoolsBtn-position-bottom-left":t`
      bottom: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-left":t`
      top: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-right":t`
      top: 12px;
      right: 12px;
    `,"devtoolsBtn-position-relative":t`
      position: relative;
    `,"panel-position-top":t`
      top: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-bottom":t`
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-right":t`
      bottom: 0;
      right: 0;
      top: 0;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,"panel-position-left":t`
      bottom: 0;
      left: 0;
      top: 0;
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,closeBtn:t`
      position: absolute;
      cursor: pointer;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${i(n.gray[50],n.darkGray[700])};
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline: 2px solid ${n.blue[600]};
      }
      & svg {
        color: ${i(n.gray[600],n.gray[400])};
        width: ${o[2]};
        height: ${o[2]};
      }
    `,"closeBtn-position-top":t`
      bottom: 0;
      right: ${o[2]};
      transform: translate(0, 100%);
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: none;
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px 0px ${a.radius.sm} ${a.radius.sm};
      padding: ${o[.5]} ${o[1.5]} ${o[1]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }

      & svg {
        transform: rotate(180deg);
      }
    `,"closeBtn-position-bottom":t`
      top: 0;
      right: ${o[2]};
      transform: translate(0, -100%);
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: none;
      border-radius: ${a.radius.sm} ${a.radius.sm} 0px 0px;
      padding: ${o[1]} ${o[1.5]} ${o[.5]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }
    `,"closeBtn-position-right":t`
      bottom: ${o[2]};
      left: 0;
      transform: translate(-100%, 0);
      border-right: none;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: ${a.radius.sm} 0px 0px ${a.radius.sm};
      padding: ${o[1.5]} ${o[.5]} ${o[1.5]} ${o[1]};

      &::after {
        content: ' ';
        position: absolute;
        left: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(-90deg);
      }
    `,"closeBtn-position-left":t`
      bottom: ${o[2]};
      right: 0;
      transform: translate(100%, 0);
      border-left: none;
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px ${a.radius.sm} ${a.radius.sm} 0px;
      padding: ${o[1.5]} ${o[1]} ${o[1.5]} ${o[.5]};

      &::after {
        content: ' ';
        position: absolute;
        right: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(90deg);
      }
    `,queriesContainer:t`
      flex: 1 1 700px;
      background-color: ${i(n.gray[50],n.darkGray[700])};
      display: flex;
      flex-direction: column;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
    `,dragHandle:t`
      position: absolute;
      transition: background-color 0.125s ease;
      &:hover {
        background-color: ${n.purple[400]}${i("",l[90])};
      }
      z-index: 4;
    `,"dragHandle-position-top":t`
      bottom: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-bottom":t`
      top: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-right":t`
      left: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,"dragHandle-position-left":t`
      right: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,row:t`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${$.size[2]} ${$.size[2.5]};
      gap: ${$.size[2.5]};
      border-bottom: ${i(n.gray[300],n.darkGray[500])} 1px solid;
      align-items: center;
      & > button {
        padding: 0;
        background: transparent;
        border: none;
        display: flex;
        gap: ${o[.5]};
        flex-direction: column;
      }
    `,logoAndToggleContainer:t`
      display: flex;
      gap: ${$.size[3]};
      align-items: center;
    `,logo:t`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      gap: ${$.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,tanstackLogo:t`
      font-size: ${r.size.md};
      font-weight: ${r.weight.bold};
      line-height: ${r.lineHeight.xs};
      white-space: nowrap;
      color: ${i(n.gray[600],n.gray[300])};
    `,queryFlavorLogo:t`
      font-weight: ${r.weight.semibold};
      font-size: ${r.size.xs};
      background: linear-gradient(
        to right,
        ${i("#ea4037, #ff9b11","#dd524b, #e9a03b")}
      );
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,queryStatusContainer:t`
      display: flex;
      gap: ${$.size[2]};
      height: min-content;
    `,queryStatusTag:t`
      display: flex;
      gap: ${$.size[1.5]};
      box-sizing: border-box;
      height: ${$.size[6.5]};
      background: ${i(n.gray[50],n.darkGray[500])};
      color: ${i(n.gray[700],n.gray[300])};
      border-radius: ${$.border.radius.sm};
      font-size: ${r.size.sm};
      padding: ${$.size[1]};
      padding-left: ${$.size[1.5]};
      align-items: center;
      font-weight: ${r.weight.medium};
      border: ${i("1px solid "+n.gray[300],"1px solid transparent")};
      user-select: none;
      position: relative;
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,queryStatusTagLabel:t`
      font-size: ${r.size.xs};
    `,queryStatusCount:t`
      font-size: ${r.size.xs};
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${i(n.gray[500],n.gray[400])};
      background-color: ${i(n.gray[200],n.darkGray[300])};
      border-radius: 2px;
      font-variant-numeric: tabular-nums;
      height: ${$.size[4.5]};
    `,statusTooltip:t`
      position: absolute;
      z-index: 1;
      background-color: ${i(n.gray[50],n.darkGray[500])};
      top: 100%;
      left: 50%;
      transform: translate(-50%, calc(${$.size[2]}));
      padding: ${$.size[.5]} ${$.size[2]};
      border-radius: ${$.border.radius.sm};
      font-size: ${r.size.xs};
      border: 1px solid ${i(n.gray[400],n.gray[600])};
      color: ${i(n.gray[600],n.gray[300])};

      &::before {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, -100%);
        position: absolute;
        border-color: transparent transparent
          ${i(n.gray[400],n.gray[600])} transparent;
        border-style: solid;
        border-width: 7px;
        /* transform: rotate(180deg); */
      }

      &::after {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, calc(-100% + 2px));
        position: absolute;
        border-color: transparent transparent
          ${i(n.gray[100],n.darkGray[500])} transparent;
        border-style: solid;
        border-width: 7px;
      }
    `,filtersContainer:t`
      display: flex;
      gap: ${$.size[2]};
      & > button {
        cursor: pointer;
        padding: ${$.size[.5]} ${$.size[1.5]} ${$.size[.5]}
          ${$.size[2]};
        border-radius: ${$.border.radius.sm};
        background-color: ${i(n.gray[100],n.darkGray[400])};
        border: 1px solid ${i(n.gray[300],n.darkGray[200])};
        color: ${i(n.gray[700],n.gray[300])};
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        line-height: ${r.lineHeight.sm};
        gap: ${$.size[1.5]};
        max-width: 160px;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${a.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        & svg {
          width: ${$.size[3]};
          height: ${$.size[3]};
          color: ${i(n.gray[500],n.gray[400])};
        }
      }
    `,filterInput:t`
      padding: ${o[.5]} ${o[2]};
      border-radius: ${$.border.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[400])};
      display: flex;
      box-sizing: content-box;
      align-items: center;
      gap: ${$.size[1.5]};
      max-width: 160px;
      min-width: 100px;
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      height: min-content;
      color: ${i(n.gray[600],n.gray[400])};
      & > svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      & input {
        font-size: ${r.size.xs};
        width: 100%;
        background-color: ${i(n.gray[100],n.darkGray[400])};
        border: none;
        padding: 0;
        line-height: ${r.lineHeight.sm};
        color: ${i(n.gray[700],n.gray[300])};
        &::placeholder {
          color: ${i(n.gray[700],n.gray[300])};
        }
        &:focus {
          outline: none;
        }
      }

      &:focus-within {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,filterSelect:t`
      padding: ${$.size[.5]} ${$.size[2]};
      border-radius: ${$.border.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[400])};
      display: flex;
      align-items: center;
      gap: ${$.size[1.5]};
      box-sizing: content-box;
      max-width: 160px;
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      height: min-content;
      & > svg {
        color: ${i(n.gray[600],n.gray[400])};
        width: ${$.size[2]};
        height: ${$.size[2]};
      }
      & > select {
        appearance: none;
        color: ${i(n.gray[700],n.gray[300])};
        min-width: 100px;
        line-height: ${r.lineHeight.sm};
        font-size: ${r.size.xs};
        background-color: ${i(n.gray[100],n.darkGray[400])};
        border: none;
        &:focus {
          outline: none;
        }
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsContainer:t`
      display: flex;
      gap: ${$.size[2]};
    `,actionsBtn:t`
      border-radius: ${$.border.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[400])};
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      width: ${$.size[6.5]};
      height: ${$.size[6.5]};
      justify-content: center;
      display: flex;
      align-items: center;
      gap: ${$.size[1.5]};
      max-width: 160px;
      cursor: pointer;
      padding: 0;
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      & svg {
        color: ${i(n.gray[700],n.gray[300])};
        width: ${$.size[3]};
        height: ${$.size[3]};
      }
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsBtnOffline:t`
      & svg {
        stroke: ${i(n.yellow[700],n.yellow[500])};
        fill: ${i(n.yellow[700],n.yellow[500])};
      }
    `,overflowQueryContainer:t`
      flex: 1;
      overflow-y: auto;
      & > div {
        display: flex;
        flex-direction: column;
      }
    `,queryRow:t`
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      cursor: pointer;
      color: ${i(n.gray[700],n.gray[300])};
      background-color: ${i(n.gray[50],n.darkGray[700])};
      line-height: 1;
      &:focus {
        outline: none;
      }
      &:focus-visible {
        outline-offset: -2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover .tsqd-query-hash {
        background-color: ${i(n.gray[200],n.darkGray[600])};
      }

      & .tsqd-query-observer-count {
        padding: 0 ${$.size[1]};
        user-select: none;
        min-width: ${$.size[6.5]};
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${r.size.xs};
        font-weight: ${r.weight.medium};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom: 1px solid ${i(n.gray[300],n.darkGray[700])};
      }
      & .tsqd-query-hash {
        user-select: text;
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        min-height: ${$.size[6]};
        flex: 1;
        padding: ${$.size[1]} ${$.size[2]};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        border-bottom: 1px solid ${i(n.gray[300],n.darkGray[400])};
        text-align: left;
        text-overflow: clip;
        word-break: break-word;
      }

      & .tsqd-query-disabled-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${$.size[2]};
        color: ${i(n.gray[800],n.gray[300])};
        background-color: ${i(n.gray[300],n.darkGray[600])};
        border-bottom: 1px solid ${i(n.gray[300],n.darkGray[400])};
        font-size: ${r.size.xs};
      }
    `,selectedQueryRow:t`
      background-color: ${i(n.gray[200],n.darkGray[500])};
    `,detailsContainer:t`
      flex: 1 1 700px;
      background-color: ${i(n.gray[50],n.darkGray[700])};
      color: ${i(n.gray[700],n.gray[300])};
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      display: flex;
      text-align: left;
    `,detailsHeader:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${i(n.gray[200],n.darkGray[600])};
      padding: ${$.size[1.5]} ${$.size[2]};
      font-weight: ${r.weight.medium};
      font-size: ${r.size.xs};
      line-height: ${r.lineHeight.xs};
      text-align: left;
    `,detailsBody:t`
      margin: ${$.size[1.5]} 0px ${$.size[2]} 0px;
      & > div {
        display: flex;
        align-items: stretch;
        padding: 0 ${$.size[2]};
        line-height: ${r.lineHeight.sm};
        justify-content: space-between;
        & > span {
          font-size: ${r.size.xs};
        }
        & > span:nth-child(2) {
          font-variant-numeric: tabular-nums;
        }
      }

      & > div:first-child {
        margin-bottom: ${$.size[1.5]};
      }

      & code {
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        margin: 0;
        font-size: ${r.size.xs};
        line-height: ${r.lineHeight.xs};
      }

      & pre {
        margin: 0;
        display: flex;
        align-items: center;
      }
    `,queryDetailsStatus:t`
      border: 1px solid ${n.darkGray[200]};
      border-radius: ${$.border.radius.sm};
      font-weight: ${r.weight.medium};
      padding: ${$.size[1]} ${$.size[2.5]};
    `,actionsBody:t`
      flex-wrap: wrap;
      margin: ${$.size[2]} 0px ${$.size[2]} 0px;
      display: flex;
      gap: ${$.size[2]};
      padding: 0px ${$.size[2]};
      & > button {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
        font-size: ${r.size.xs};
        padding: ${$.size[1]} ${$.size[2]};
        display: flex;
        border-radius: ${$.border.radius.sm};
        background-color: ${i(n.gray[100],n.darkGray[600])};
        border: 1px solid ${i(n.gray[300],n.darkGray[400])};
        align-items: center;
        gap: ${$.size[2]};
        font-weight: ${r.weight.medium};
        line-height: ${r.lineHeight.xs};
        cursor: pointer;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${a.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        &:hover {
          background-color: ${i(n.gray[200],n.darkGray[500])};
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        & > span {
          width: ${o[1.5]};
          height: ${o[1.5]};
          border-radius: ${$.border.radius.full};
        }
      }
    `,actionsSelect:t`
      font-size: ${r.size.xs};
      padding: ${$.size[.5]} ${$.size[2]};
      display: flex;
      border-radius: ${$.border.radius.sm};
      overflow: hidden;
      background-color: ${i(n.gray[100],n.darkGray[600])};
      border: 1px solid ${i(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${$.size[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.sm};
      color: ${i(n.red[500],n.red[400])};
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      & > span {
        width: ${o[1.5]};
        height: ${o[1.5]};
        border-radius: ${$.border.radius.full};
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      & select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        appearance: none;
        background-color: transparent;
        border: none;
        color: transparent;
        outline: none;
      }

      & svg path {
        stroke: ${$.colors.red[400]};
      }
      & svg {
        width: ${$.size[2]};
        height: ${$.size[2]};
      }
    `,settingsMenu:t`
      display: flex;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
      flex-direction: column;
      gap: ${o[.5]};
      border-radius: ${$.border.radius.sm};
      border: 1px solid ${i(n.gray[300],n.gray[700])};
      background-color: ${i(n.gray[50],n.darkGray[600])};
      font-size: ${r.size.xs};
      color: ${i(n.gray[700],n.gray[300])};
      z-index: 99999;
      min-width: 120px;
      padding: ${o[.5]};
    `,settingsSubTrigger:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${$.border.radius.xs};
      padding: ${$.size[1]} ${$.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: ${i(n.gray[700],n.gray[300])};
      & svg {
        color: ${i(n.gray[600],n.gray[400])};
        transform: rotate(-90deg);
        width: ${$.size[2]};
        height: ${$.size[2]};
      }
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
      &.data-disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,settingsMenuHeader:t`
      padding: ${$.size[1]} ${$.size[1]};
      font-weight: ${r.weight.medium};
      border-bottom: 1px solid ${i(n.gray[300],n.darkGray[400])};
      color: ${i(n.gray[500],n.gray[400])};
      font-size: ${r.size.xs};
    `,settingsSubButton:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${i(n.gray[700],n.gray[300])};
      font-size: ${r.size.xs};
      border-radius: ${$.border.radius.xs};
      padding: ${$.size[1]} ${$.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      & svg {
        color: ${i(n.gray[600],n.gray[400])};
      }
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,themeSelectedButton:t`
      background-color: ${i(n.purple[100],n.purple[900])};
      color: ${i(n.purple[700],n.purple[300])};
      & svg {
        color: ${i(n.purple[700],n.purple[300])};
      }
      &:hover {
        background-color: ${i(n.purple[100],n.purple[900])};
      }
    `,viewToggle:t`
      border-radius: ${$.border.radius.sm};
      background-color: ${i(n.gray[200],n.darkGray[600])};
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      display: flex;
      padding: 0;
      font-size: ${r.size.xs};
      color: ${i(n.gray[700],n.gray[300])};
      overflow: hidden;

      &:has(:focus-visible) {
        outline: 2px solid ${n.blue[800]};
      }

      & .tsqd-radio-toggle {
        opacity: 0.5;
        display: flex;
        & label {
          display: flex;
          align-items: center;
          cursor: pointer;
          line-height: ${r.lineHeight.md};
        }

        & label:hover {
          background-color: ${i(n.gray[100],n.darkGray[500])};
        }
      }

      & > [data-checked] {
        opacity: 1;
        background-color: ${i(n.gray[100],n.darkGray[400])};
        & label:hover {
          background-color: ${i(n.gray[100],n.darkGray[400])};
        }
      }

      & .tsqd-radio-toggle:first-child {
        & label {
          padding: 0 ${$.size[1.5]} 0 ${$.size[2]};
        }
        border-right: 1px solid ${i(n.gray[300],n.darkGray[200])};
      }

      & .tsqd-radio-toggle:nth-child(2) {
        & label {
          padding: 0 ${$.size[2]} 0 ${$.size[1.5]};
        }
      }
    `,devtoolsEditForm:t`
      padding: ${o[2]};
      & > [data-error='true'] {
        outline: 2px solid ${i(n.red[200],n.red[800])};
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
      }
    `,devtoolsEditTextarea:t`
      width: 100%;
      max-height: 500px;
      font-family: 'Fira Code', monospace;
      font-size: ${r.size.xs};
      border-radius: ${a.radius.sm};
      field-sizing: content;
      padding: ${o[2]};
      background-color: ${i(n.gray[100],n.darkGray[800])};
      color: ${i(n.gray[900],n.gray[100])};
      border: 1px solid ${i(n.gray[200],n.gray[700])};
      resize: none;
      &:focus {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${i(n.blue[200],n.blue[800])};
      }
    `,devtoolsEditFormActions:t`
      display: flex;
      justify-content: space-between;
      gap: ${o[2]};
      align-items: center;
      padding-top: ${o[1]};
      font-size: ${r.size.xs};
    `,devtoolsEditFormError:t`
      color: ${i(n.red[700],n.red[500])};
    `,devtoolsEditFormActionContainer:t`
      display: flex;
      gap: ${o[2]};
    `,devtoolsEditFormAction:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      font-size: ${r.size.xs};
      padding: ${o[1]} ${$.size[2]};
      display: flex;
      border-radius: ${a.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[600])};
      border: 1px solid ${i(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${o[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.xs};
      cursor: pointer;
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `}},Ue=e=>yl("light",e),Ge=e=>yl("dark",e);rr(["click","mousedown","input"]);export{Yl as X,Zl as Y,o0 as i,t0 as n,r0 as o,n0 as r,i0 as s,hl as y};
