import{u as ht,r as t,n as mt,j as l,d as S,l as _,C as ar,p as or,g as le,h as sr,m as Ee,s as lr,t as P,i as vt,M as xt,k as gt,q as Ye,v as yt,w as k,x as bt,y as $t,L as ir,z as ye,A as wt,D as ur,E as Et,F as St,G as Nt,S as Ct,I as cr,H as dr,O as Ot,J as Mt,K as we,N as jt,P as kt,Q as It,R as At,U as Dt,V as Bt,W as Pt}from"./index-CgTqJ2ri.js";function _t(e,r){const s=ht(r),d=s.getQueryCache();return t.useSyncExternalStore(t.useCallback(c=>d.subscribe(mt.batchCalls(c)),[d]),()=>s.isFetching(e),()=>s.isFetching(e))}const fr=t.createContext(null),pr=()=>t.useContext(fr),Lt=({children:e,...r})=>l.jsx(fr.Provider,{value:r,children:e}),Vt=t.createContext(null),hr=()=>t.useContext(Vt),Z=35,Ze=4,mr=S.div`
  width: ${Z}px;
  height: 24px;
`,Rt=S.div`
  display: flex;
  width: ${Z}px;
  visibility: hidden;
  [data-show-count] & {
    visibility: visible;
  }
  > * {
    width: ${Z}px;
    border-radius: 16px;
    // Убирает действие inline-block
    display: flex;
  }
`,Tt=S(ar)`
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  padding: 4px 0;
  cursor: pointer;
`,Ft=S.div`
  max-width: 488px;

  @media (max-width: 768px) {
    max-width: 250px;
  }
`,Kt=_`
  // оставлено, чтоб обрабатывался onClick
  pointer-events: auto;
  &:hover {
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  }
`,Wt=S(ar)`
  margin-right: 4px;
  // Убирает пробел от inline-flex
  display: flex;
  ${({disabled:e})=>e&&Kt};

  min-width: ${Z}px;
  @media (max-width: 768px) {
    max-width: 140px;
  }

  // По дизайну при наведении цвет самого чипса меняться не должен, но т.к. есть обработчик onClick для stopPropagation,
  // то крестик чипса получается clickable и при ховере меняет цвет
  // disabled и readOnly чипсы не меняют цвет при ховере (в readOnly в целом отсутствует кнопка крестика)
  &:hover {
    ${({theme:e,disabled:r})=>{if(!r)return`background-color: var(--admiral-color-Opacity_Neutral8, ${e.color["Opacity/Neutral 8"]})`}}
  }
`,be=({value:e,disabled:r,renderChip:s,...d},c)=>{const i=s(),p={};return or(d,p,"data",!1),(o=>typeof o=="object"&&o!==null&&!t.isValidElement(o))(i)?{...i,onClose:()=>{var o;return(o=i.onClose)==null?void 0:o.call(i,{value:e,disabled:r,...p})}}:{disabled:r,onClose:()=>c(e),children:i}},er=({className:e,option:r,disabled:s,readOnly:d,onClick:c,onChipRemove:i})=>{const p=t.useCallback(o=>()=>l.jsx(Ft,{children:o}),[]);return l.jsx(Wt,{className:e,tabIndex:-1,dimension:"s",appearance:"filled",onClick:c,onClose:d?void 0:be(r,i).onClose,disabled:be(r,i).disabled||s,renderContentTooltip:p(be(r,i).children),children:be(r,i).children})},Ut=({count:e,disabled:r,onClick:s})=>{const d=t.useRef(null),c=t.useRef(null);return e?l.jsx(Rt,{onClick:s,ref:d,className:"counter",children:l.jsxs(Tt,{ref:c,"data-visible":!0,tabIndex:-1,dimension:"s",appearance:"filled",disabled:r,children:["+",e]})}):l.jsx(mr,{})},Ht=S.div`
  display: flex;
`,zt=t.forwardRef(({option:e,childrenOptions:r,containerRef:s,shouldShowCount:d,disabled:c,readOnly:i,onChipClick:p,onChipRemove:o},a)=>{const w=t.useRef(null),[b,E]=t.useState(!1);return t.useLayoutEffect(()=>{const m=new IntersectionObserver(function(v){if(v[0].isIntersecting&&!b){E(!0),v[0].target.setAttribute("data-visible","true");const y=v[0].target.previousElementSibling,$=v[0].target.nextElementSibling;return y&&y.removeAttribute("data-show-count"),void($&&!$.getAttribute("data-visible")&&v[0].target.setAttribute("data-show-count",""))}if(b&&!v[0].isIntersecting){E(!1),v[0].target.removeAttribute("data-visible"),v[0].target.removeAttribute("data-show-count");const y=v[0].target.previousElementSibling;y&&y.getAttribute("data-visible")&&y.setAttribute("data-show-count","true")}},{root:s.current,threshold:[0,1]});return s.current&&w.current&&m.observe(w.current),()=>m.disconnect()},[b]),l.jsxs(Ht,{ref:le(a,w),onMouseDown:m=>m.preventDefault(),children:[l.jsx(er,{className:"chip",option:e,disabled:c,readOnly:i,onClick:p,onChipRemove:o}),d&&r.length>0&&l.jsx(Ut,{count:r.length,disabled:c,children:r.map(m=>l.jsx(er,{option:m,disabled:c,readOnly:i,onClick:p,onChipRemove:o},m.value))}),!d&&l.jsx(mr,{})]},e.value)}),qt=({options:e,isOptionsListOpen:r,containerRef:s,hasMaxHeight:d,...c})=>{const i=sr(r);return t.useEffect(()=>{var p,o,a;d&&e.length!==0&&(i&&!r&&((p=s.current)==null||p.scrollTo({top:0,left:0,behavior:"smooth"})),!i&&r&&setTimeout(()=>{var w,b,E;(w=s.current)==null||w.scrollTo({top:0,left:0,behavior:"instant"}),(E=s.current)==null||E.scrollTo({top:(b=s.current)==null?void 0:b.scrollHeight,left:0,behavior:"smooth"})}),r&&i&&((a=s.current)==null||a.scrollTo({top:(o=s.current)==null?void 0:o.scrollHeight,left:0,behavior:"smooth"})))},[r,e,d]),l.jsx(l.Fragment,{children:e.map((p,o)=>l.jsx(zt,{option:p,childrenOptions:o<e.length-1?e.slice(o+1):[],containerRef:s,...c},p.value))})},F=S.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border-width: 1px;
  border-style: solid;
  border-radius: inherit;
`,Gt=_`
  min-height: ${({$multiple:e,$minRowCount:r,$dimension:s})=>e?r?24*r+4*(r-1)+"px":"24px":(s==="s"?20:24)+"px"};

  max-height: ${({$multiple:e,$maxRowCount:r,$opened:s,$idleHeight:d})=>e?r?24*r+4*(r-1)+"px":s||d!=="fixed"?"none":"24px":"none"};
`,Qt=_`
  > * {
    margin-left: ${`-${Z+Ze}px`};
  }

  padding-left: ${`${Z+Ze}px`};
`,vr=S.div`
  flex: 1 1 auto;
  display: flex;
  overflow: hidden;

  ${({$multiple:e,$isEmpty:r})=>e&&!r&&Qt}

  gap: 4px;
  flex-wrap: ${({$multiple:e})=>e?"wrap":"unset"};
  align-items: center;
  align-content: flex-start;

  ${e=>e.$dimension==="s"?P["Body/Body 2 Long"]:P["Body/Body 1 Long"]}
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});

  ${Gt}
  [data-disabled='true'] &&& {
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  }
`,Jt=S.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Xt=_`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,Yt=S.input`
  outline: none;
  appearance: none;

  box-sizing: border-box;
  flex: 1 1 auto;
  width: 1px;
  border: none;
  background: transparent;
  text-overflow: ellipsis;
  padding: 0;

  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});

  ${({$dimension:e})=>e==="s"?P["Body/Body 2 Long"]:P["Body/Body 1 Long"]}
  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  }

  &:read-only {
    cursor: inherit;
  }

  &:disabled,
  &:disabled::placeholder {
    cursor: inherit;
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  height: ${({$dimension:e,$isMultiple:r})=>{return s=r,(e!=="s"||s?24:20)+"px";var s}};

  ${Xt};
`,Zt=_`
  pointer-events: none;
  cursor: default;
`,en=_`
  && > *:not(${vr}) {
    pointer-events: none;
  }

  & ${F} {
    border-color: transparent;
  }
`,rn=_`
  ${F} {
    border-width: 2px;
  }
`,tn=S.div`
  flex: 0 0 auto;

  display: flex;
  align-items: center;

  padding: ${({$dimension:e,$multiple:r})=>e==="s"&&r?"2px 0":"0"};

  & > * {
    margin-left: 8px;
    display: block;
    width: ${({$dimension:e})=>e==="s"?20:24}px;
    height: ${({$dimension:e})=>e==="s"?20:24}px;
  }

  [data-disabled='true'] &&& {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
`,nn=S.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: ${e=>e.$multiple?"flex-start":"center"};
  cursor: ${({disabled:e,$readonly:r,$isLoading:s})=>e?"not-allowed":r||s?"default":"pointer"};

  padding: ${({$dimension:e,$multiple:r})=>{switch(e){case"xl":return"16px 16px";case"s":return r?"4px 12px":"6px 12px";default:return"8px 16px"}}};

  background: ${({theme:e,disabled:r,$readonly:s})=>r||s?`var(--admiral-color-Neutral_Neutral10, ${e.color["Neutral/Neutral 10"]})`:`var(--admiral-color-Neutral_Neutral00, ${e.color["Neutral/Neutral 00"]})`};

  ${({disabled:e,$readonly:r})=>r||e?en:""};
  ${({$focused:e,$readonly:r,$isLoading:s})=>!e||r||s?"":rn};

  & ${F} {
    border-color: ${e=>e.disabled||e.$readonly?"transparent":e.$focused&&!e.$isLoading?`var(--admiral-color-Primary_Primary60Main, ${e.theme.color["Primary/Primary 60 Main"]})`:`var(--admiral-color-Neutral_Neutral40, ${e.theme.color["Neutral/Neutral 40"]})`};
  }

  &:hover ${F} {
    ${e=>!e.disabled&&!e.$readonly&&!e.$focused&&!e.$isLoading&&`
      border-color: var(--admiral-color-Neutral_Neutral60, ${e.theme.color["Neutral/Neutral 60"]});
    `};
  }

  &[data-status='success'] {
    ${e=>!e.disabled&&!e.$readonly&&!e.$isLoading&&`
      ${F} {
      border-color: var(--admiral-color-Success_Success50Main, ${e.theme.color["Success/Success 50 Main"]});
      }
      &:hover ${F} {
        border-color: var(--admiral-color-Success_Success60, ${e.theme.color["Success/Success 60"]});
      }
    `}
  }

  &[data-status='error'],
  &:user-invalid {
    ${e=>!e.disabled&&!e.$readonly&&!e.$isLoading&&`
      ${F} {
        border-color: var(--admiral-color-Error_Error60Main, ${e.theme.color["Error/Error 60 Main"]});
      }
  
      &:hover ${F} {
        border-color: var(--admiral-color-Error_Error70, ${e.theme.color["Error/Error 70"]});
      }
    `}
  }

  border-radius: ${e=>e.$skeleton?0:`var(--admiral-border-radius-Medium, ${Ee(e.theme.shape)})`};

  ${({$skeleton:e})=>e&&lr};
  ${({$skeleton:e})=>e&&Zt};
`,xr=S.div`
  flex: 0 0 auto;

  word-break: break-word;
  display: flex;
  align-items: center;
  padding: ${({$dimension:e})=>{switch(e){case"xl":return"12px 16px";case"s":return"6px 12px";default:return"8px 16px"}}};

  background-color: transparent;

  ${({$dimension:e})=>{switch(e){case"xl":return P["Body/Body 1 Long"];case"s":return P["Body/Body 2 Long"];default:return P["Body/Body 1 Short"]}}}
`,an=_`
  ${P["Body/Body 1 Short"]}
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
  background-color: var(--admiral-color-Special_ElevatedBG, ${e=>e.theme.color["Special/Elevated BG"]});
  border-radius: var(--admiral-border-radius-Medium, ${e=>Ee(e.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${e=>vt(e.theme.shadow["Shadow 08"])});
  overflow: auto;
`,on=S(xt)`
  ${an}
`,sn=S.div`
  user-select: none;
`,ln=S(gt)`
  justify-content: flex-start;
  flex-wrap: nowrap;
  white-space: pre-wrap;
  ${e=>e.$selected&&!e.$hovered&&!e.$preselected&&e.$multiple&&"background-color: transparent;"}
`,un=({visibleValue:e,isSearchPanelOpen:r,targetRef:s,forceHideOverflowTooltip:d})=>{const c=t.useRef(null),[i,p]=t.useState(!1),[o,a]=t.useState(!1);t.useEffect(()=>{c.current&&Ye(c.current)!==i&&p(Ye(c.current))},[o,p]),t.useEffect(()=>{function b(){a(!0)}function E(){a(!1)}const m=c.current;if(m)return m.addEventListener("mouseenter",b),m.addEventListener("mouseleave",E),()=>{m.removeEventListener("mouseenter",b),m.removeEventListener("mouseleave",E)}},[a]);const w=!d&&!r&&o&&i;return l.jsxs(l.Fragment,{children:[l.jsx(Jt,{ref:c,children:e}),w&&l.jsx(yt,{renderContent:()=>e,targetElement:s.current})]})},cn=e=>e.stopPropagation(),dn=S.select`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border: none;
  pointer-events: none;
`,fn=t.forwardRef(({options:e,...r},s)=>{const d=t.useRef(null);return t.useEffect(()=>{var i;function c(p){const o=k.getCode(p);o&&[k[" "],k.Enter,k.ArrowDown,k.ArrowUp].includes(o)&&p.preventDefault()}return(i=d.current)==null||i.addEventListener("keydown",c),()=>{var p;return(p=d.current)==null?void 0:p.removeEventListener("keydown",c)}},[]),l.jsxs(dn,{ref:le(s,d),...r,onClick:cn,children:[l.jsx("option",{value:""}),e.map(c=>l.jsx("option",{value:c.value,disabled:c.disabled,children:c.value},c.value))]})}),gr=t.createContext(null),pn=()=>t.useContext(gr),hn=({children:e,...r})=>l.jsx(gr.Provider,{value:r,children:e}),mn=(e="",r="",s="wholly")=>{const d=(s==="word"?r.split(" "):[r]).filter(Boolean).map(o=>o.toLowerCase()),c=["[","]","\\","^","$",".","|","?","*","+","(",")"],i=d.map(o=>`(${o.split("").map(a=>c.includes(a)?`\\${a}`:a).join("")})?`).join(""),p=e.split(new RegExp(i,"gi")).filter(Boolean);return!r||p.some(o=>d.includes(o.toLowerCase()))};S(xr)`
  background-color: ${({active:e,selected:r,theme:s})=>r?`var(--admiral-color-Opacity_Focus, ${s.color["Opacity/Focus"]})`:e?`var(--admiral-color-Opacity_Hover, ${s.color["Opacity/Hover"]})`:"transparent"};

  color: ${({disabled:e,theme:r})=>e?`var(--admiral-color-Neutral_Neutral30, ${r.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${r.color["Neutral/Neutral 90"]})`};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  & > * {
    pointer-events: ${({disabled:e})=>e?"none":"all"};
  }
`;const vn=S(bt)`
  margin-right: 8px;
  flex-shrink: 0;
`,xn=e=>pr()?l.jsx(gn,{...e}):null,gn=({disabled:e=!1,id:r,value:s,children:d,renderOption:c,renderChip:i,...p})=>{const o=pr(),a=hr(),w=(a==null?void 0:a.disabled)||e,b=t.useCallback(()=>d,[d]),E=i||b,m=t.useMemo(()=>c?c({disabled:e}):d,[c,e,s,d]),v={};or(p,v,"data",!1);const y=t.useMemo(()=>({id:r,value:s,disabled:w,children:m,renderChip:E,...v}),[r,s,w,m,E]);return t.useEffect(()=>{var $;return($=o==null?void 0:o.onConstantOptionMount)==null||$.call(o,y),()=>{var x;return(x=o==null?void 0:o.onConstantOptionUnMount)==null?void 0:x.call(o,y)}},[o==null?void 0:o.onConstantOptionMount,o==null?void 0:o.onConstantOptionUnMount,y]),null},yn=({id:e,disabled:r=!1,readOnly:s=!1,value:d,children:c,renderOption:i,renderChip:p,...o})=>{const a=pn(),w=hr(),b=(w==null?void 0:w.disabled)||r,E=m=>a!=null&&a.multiple?(({selected:v=!1,hovered:y=!1})=>l.jsxs(l.Fragment,{children:[(a==null?void 0:a.showCheckbox)&&l.jsx(vn,{checked:v,hovered:y,dimension:(a==null?void 0:a.dimension)==="s"?"s":"m",disabled:r,onChange:()=>!1}),c]}))(m):c;return t.useEffect(()=>{var y;const m=e||d,v={id:d,value:d,render:$=>{return i?i($):t.createElement(ln,{...$,dimension:(x=a==null?void 0:a.dimension,x==="xl"?"l":x),key:m,...o,$selected:$.selected,$hovered:$.hovered,$preselected:$.preselected,$multiple:a==null?void 0:a.multiple},E({selected:$.selected,hovered:$.hovered}));var x},disabled:b,readOnly:s};return(y=a==null?void 0:a.onDropDownOptionMount)==null||y.call(a,v),()=>{var $;return($=a==null?void 0:a.onDropDownOptionUnMount)==null?void 0:$.call(a,v)}},[a==null?void 0:a.onDropDownOptionMount,a==null?void 0:a.onDropDownOptionUnMount,a==null?void 0:a.dimension,a==null?void 0:a.multiple]),null},bn=e=>l.jsxs(l.Fragment,{children:[l.jsx(xn,{...e}),l.jsx(yn,{...e})]}),$n=S(xr)`
  color: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
`,rr=e=>e.stopPropagation(),tr=()=>{},yr=t.forwardRef(({value:e,isLoading:r,className:s,style:d,status:c,icons:i,portalTargetRef:p,targetElement:o,inputTargetRef:a,disabled:w,readOnly:b,placeholder:E,defaultValue:m,dimension:v="m",idleHeight:y="fixed",minRowCount:$="none",maxRowCount:x="none",mode:g="select",multiple:f=!1,showCheckbox:j=!0,displayClearIcon:ie=!1,onClearIconClick:Se,onInputChange:U,inputValue:q,defaultInputValue:ue,renderSelectValue:ee,onFocus:re,onBlur:A,children:L,alignDropdown:Er="stretch",alignSelf:Sr="stretch",skeleton:Ve=!1,locale:Ne,dropContainerCssMixin:Nr,dropContainerClassName:Cr,dropContainerStyle:Or,renderDropDownTopPanel:Mr,renderDropDownBottomPanel:jr,renderTopPanel:kr,renderBottomPanel:Ir,forcedOpen:ce=!1,onChangeDropDownState:Ce,onInputKeyDown:Ar,onInputKeyUp:Dr,onInputKeyUpCapture:Br,onInputKeyDownCapture:Pr,searchFormat:_r="wholly",onFilterItem:Lr=mn,virtualScroll:Vr,title:Rr,forceHideOverflowTooltip:Tr=!1,onSelectedChange:Oe,moveSelectedOnTop:Me,clearInputValueAfterSelect:Fr=!0,openButtonPropsConfig:Kr=tr,clearButtonPropsConfig:Wr=tr,...H},Ur)=>{const Re=$t()||ir,Hr=(Ne==null?void 0:Ne.emptyMessage)||l.jsx($n,{$dimension:v,children:Re.locales[Re.currentLocale].select.emptyMessage}),[C,Te]=t.useState(e??m),[zr,qr]=t.useState(""),I=q===void 0?zr:q,[de,fe]=t.useState(!1),[K,G]=t.useState(),[te,Fe]=t.useState([]),[pe,Ke]=t.useState([]),[N,V]=t.useState(ce),[Q,je]=t.useState(!1),[ke,he]=t.useState(void 0),Ie=e===void 0,R=g==="select",Gr=t.useMemo(()=>x!=="none"&&x>0?x:y==="fixed"?1:"none",[x,y])!=="none",We=e??m,J=t.useRef(Array.isArray(We)?We:[]),me=t.useRef(!1),T=t.useRef([]);t.useEffect(()=>{Array.isArray(e)&&(J.current=e)},[e]);const Ae=t.useMemo(()=>f?null:te.find(n=>n.value===C),[f,te,C]),X=t.useMemo(()=>f&&Array.isArray(C)?C.reduce((n,h)=>{const u=te.find(O=>O.value===h);return u&&n.push(u),n},[]):[],[te,C,f]),Qr=sr(N),[ve,Ue]=t.useState([]);t.useEffect(()=>{if(f&&Me||!(ve.length>0)||Ue([]),f&&Me&&Qr!==N&&N){const n=X.map(u=>u.value),h=n.length>0?n.reduce((u,O)=>{const M=pe.find(se=>se.value===O);return M&&u.push(M),u},[]):[];Ue(h)}},[pe,N,X,f,Me]);const De=t.useMemo(()=>{const n=ve.map(u=>u.value),h=pe.filter(u=>Lr(u.value,I,_r)).reduce((u,O)=>(n.includes(O.value)||u.push(O),u),[...ve]);return h.length?h:[{id:"emptyMessage",render:()=>l.jsx(sn,{children:Hr},"empty"),disabled:!0}]},[r,pe,v,I,ve]);t.useEffect(()=>{K&&(De.find(n=>n.id===K)||G(void 0))},[De,K]);const D=a??t.useRef(null),Y=t.useRef(null),B=t.useRef(null),Jr=o||(p==null?void 0:p.current)||B.current,He=t.useRef(null),ne=t.useRef(null),Be=t.useRef({shouldExtendInputValue:!1}),Xr=n=>{Fe(h=>[...h,n]),T.current.includes(n.value)&&(T.current=T.current.filter(h=>h!==n.value))},Yr=n=>{J.current.includes(n.value)&&(T.current=[...T.current,n.value]),Fe(h=>h.filter(u=>u.value!==n.value))},Zr=t.useCallback(n=>{Ke(h=>[...h,n])},[]),et=t.useCallback(n=>{Ke(h=>h.filter(u=>u.id!==n.id))},[]),Pe=t.useCallback(()=>{V(!1),D.current&&ye(D.current,{value:""}),fe(!0)},[C]),ae=t.useCallback(n=>{const h=Y.current;if(!h)return;const u=Array.from(h.options),O=u.find(M=>M.value===n);if(O&&(f||u.forEach(M=>M.selected=!1),O.selected=!f||!O.selected,h.dispatchEvent(new Event("change",{bubbles:!0})),f||Pe(),I&&D.current&&Fr)){ye(D.current,{value:"",selectionEnd:0,selectionStart:0});const M=K;G(""),setTimeout(()=>G(M))}},[Pe,f,I,K]),rt=t.useCallback(()=>{const n=Y.current;n&&(n.selectedIndex=-1,n.dispatchEvent(new Event("change",{bubbles:!0})))},[]);t.useEffect(()=>{ce!==N&&V(ce)},[ce]),t.useEffect(()=>{var n;Ce==null||Ce(N),!N&&Q&&document.activeElement!==B.current&&((n=Y.current)==null||n.focus())},[N,Q]);const tt=Se||rt,ze=Gr&&!N,nt=t.useCallback(()=>l.jsx(qt,{containerRef:He,options:X,shouldShowCount:ze,disabled:w,readOnly:b,onChipRemove:ae,onChipClick:rr,isOptionsListOpen:N,hasMaxHeight:!!x&&x!=="none"}),[X,ze,w,b,ae,N,x]),_e=(f?!(C!=null&&C.length):!C)&&!!E&&!I,at=ee==null?void 0:ee(C,I),ot=Ae==null?void 0:Ae.children,st=f?nt():ot,oe=at||st||C||null,xe=typeof oe=="string",lt=xe?l.jsx(un,{visibleValue:oe,isSearchPanelOpen:N,targetRef:B,forceHideOverflowTooltip:Tr}):oe,qe=()=>{V(n=>!n)},it=()=>{if(!I&&C)return f?void(()=>{var u;const n=(h=[...X].reverse(),(u=h.find(({disabled:O})=>!O))==null?void 0:u.value);var h;n&&ae(n)})():fe(!1)};t.useEffect(()=>{var h;if(!b&&!w)return(h=B.current)==null||h.addEventListener("keydown",n),()=>{var u;(u=B.current)==null||u.removeEventListener("keydown",n)};function n(u){const O=k.getCode(u);O===k[" "]&&(!R&&I?u.stopPropagation():N||(u.preventDefault(),V(!0),u.stopPropagation())),O!==k.Enter||N||(u.preventDefault(),V(!0),u.stopPropagation()),O!==k.ArrowDown&&O!==k.ArrowUp||N||(V(!0),u.stopPropagation());const M=u.ctrlKey||u.metaKey||u.altKey;u.key.length!==1||M||xe&&!I&&de&&(Be.current.shouldExtendInputValue=!0),O!==k.Backspace||u.repeat||it(),O===k.Backspace&&((se=>{if(!xe||!D.current||I||!de||!C)return;se.preventDefault();const z=oe.slice(0,-1);ye(D.current,{value:z,selectionEnd:z.length,selectionStart:z.length})})(u),V(!0)),O===k.Escape&&N&&(V(!1),u.preventDefault(),u.stopPropagation())}},[b,w,R,I,N,X]),t.useEffect(()=>{var h;function n(){me.current=!1}return(h=B.current)==null||h.addEventListener("keyup",n),()=>{var u;(u=B.current)==null||u.removeEventListener("keyup",n)}},[]),t.useEffect(()=>{(!Q&&!f||f)&&(D.current&&ye(D.current,{value:""}),fe(!0))},[f,Q]),t.useEffect(()=>{var n,h;N&&(R?(n=Y.current)==null||n.focus():(h=D.current)==null||h.focus(),he(""))},[N,R]),t.useEffect(()=>{ke&&G("")},[ke]),t.useEffect(()=>{K&&he("")},[K]),t.useEffect(()=>{if(N){const n=C&&!Array.isArray(C)?C:void 0;G(n)}},[N]),t.useEffect(()=>{Ie||Te(e)},[e,Ie]),wt([B,ne],n=>{var h;n.target&&((h=B.current)!=null&&h.contains(n.target))||(je(!1),Pe())});const ut=de&&(f?!!(C!=null&&C.length):!!C),ge=t.useMemo(()=>t.Children.map(L,n=>t.isValidElement(n)?t.cloneElement(n,{key:ur(),...n.props}):null),[L]),ct=t.useMemo(()=>l.jsx(hn,{onDropDownOptionMount:Zr,onDropDownOptionUnMount:et,dimension:v,multiple:f,showCheckbox:j,children:ge}),[ge,v,j]),dt=t.useMemo(()=>l.jsx(Lt,{onConstantOptionMount:Xr,onConstantOptionUnMount:Yr,children:ge}),[ge]),ft=Et(H),pt=St(H),Ge={icon:dr,id:"searchSelectClearIcon",onClick:tt,"aria-hidden":!0},Qe={$isOpen:N,onClick:qe,"aria-hidden":!0};return l.jsxs(nn,{className:s,style:d,$focused:Q,$multiple:f,disabled:w,"data-disabled":w,$readonly:b,$isLoading:r,$dimension:v,ref:B,"data-status":c,onClick:w||b||r?void 0:n=>{var h;n.target&&((h=ne.current)!=null&&h.contains(n.target))||!R&&N||qe()},onFocus:n=>{Q||(je(!0),re==null||re(n))},$skeleton:Ve,onBlur:n=>{var h,u;n.currentTarget.contains(n.relatedTarget)||(h=ne.current)!=null&&h.contains(n.relatedTarget)||(je(!1),V(!1),(u=Y.current)==null||u.blur(),A==null||A(n),me.current=!1)},title:Rr,children:[dt,ct,l.jsx(fn,{ref:le(Ur,Y),value:C,multiple:f,disabled:w,options:te,...H,onChange:n=>{var O;if(me.current&&R)return void he(n.target.value);const h=f?Array.from(n.target.selectedOptions).map(M=>M.value):n.target.value;let u=[];if(f&&Array.isArray(h)){const M=h.filter(W=>!J.current.includes(W)&&!T.current.includes(W)),se=J.current.filter(W=>!h.includes(W)&&!T.current.includes(W));u=[...J.current,...M];const z=[...T.current];se.forEach(W=>{const Je=u.findIndex(Le=>W===Le);Je>-1&&u.splice(Je,1);const Xe=z.findIndex(Le=>W===Le);Xe>-1&&z.splice(Xe,1)}),J.current=u,T.current=z}Ie&&Te(f?u:h),(O=H.onChange)==null||O.call(H,n),Oe==null||Oe(f?u:h)}}),l.jsx(F,{}),l.jsxs(vr,{tabIndex:-1,ref:He,className:"selectValueWrapper",$dimension:v,$multiple:f,$minRowCount:$!=="none"?$:void 0,$maxRowCount:x!=="none"?x:void 0,$idleHeight:y,$opened:N,$isEmpty:_e,children:[de&&lt,(E&&_e||!R)&&l.jsx(Yt,{"data-id":H.id,placeholder:_e?E:"",tabIndex:-1,ref:D,disabled:w,readOnly:b||R,value:I,defaultValue:ue,$isMultiple:f,$dimension:v,onChange:n=>{f||fe(!1),(h=>{Be.current.shouldExtendInputValue&&xe&&(h.target.value=`${oe}${h.target.value}`,Be.current.shouldExtendInputValue=!1)})(n),q===void 0&&qr(n.target.value),U==null||U(n)},onKeyDown:Ar,onKeyUp:Dr,onKeyUpCapture:Br,onKeyDownCapture:Pr})]}),N&&!Ve&&l.jsx(Nt,{ref:ne,tabIndex:-1,targetElement:Jr,"data-dimension":v,alignSelf:Er||Sr,dropContainerCssMixin:Nr,className:Cr,style:Or,...ft,children:l.jsx(on,{dimension:v==="xl"?"l":v,active:K,selected:C,onActivateItem:n=>G(n),onSelectItem:ae,onDeselectItem:ae,multiSelection:f,model:De,renderTopPanel:Mr||kr,renderBottomPanel:jr||Ir,containerRef:ne,virtualScroll:Vr,preventFocusSteal:!0,preselectedModeActive:R,preselected:ke,onPreselectItem:he,onMenuKeyDown:()=>{me.current=!0},...pt})}),l.jsxs(tn,{$multiple:f,$dimension:v,onClick:rr,onMouseDown:n=>n.preventDefault(),children:[r&&l.jsx(Ct,{dimension:v==="s"?"ms":"m"}),ie&&!b&&ut&&l.jsx(cr,{...Ge,...Wr(Ge)}),i,!b&&l.jsx(Ot,{"data-disabled":!!w||void 0,"data-loading":!!r||void 0,...Qe,...Kr(Qe)})]})]})});yr.displayName="Select";const wn=_`
  padding: ${({$dimension:e})=>{switch(e){case"xl":return"16px 16px";case"s":return"6px 12px";default:return"8px 16px"}}};
`,En=_`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,Sn=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-right: 4px;
  flex-grow: 1;
`,br=S.div`
  display: flex;
  align-items: flex-start;

  & > svg {
    border-radius: var(--admiral-border-radius-Medium, ${e=>Ee(e.theme.shape)});
    display: block;
    width: ${e=>{switch(e.$dimension){case"xl":default:return 24;case"s":return 20}}}px;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline-offset: 2px;
      outline: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]}) solid 2px;
    }
  }
`,Nn=S.div`
  position: relative;
  display: flex;
  column-gap: 8px;
  align-items: stretch;
  overflow: hidden;
  border: none;
  border-radius: ${e=>e.$skeleton?0:`var(--admiral-border-radius-Medium, ${Ee(e.theme.shape)})`};

  background-color: var(--admiral-color-Neutral_Neutral00, ${e=>e.theme.color["Neutral/Neutral 00"]});

  &[data-read-only],
  &[data-disabled] {
    background-color: var(--admiral-color-Neutral_Neutral10, ${e=>e.theme.color["Neutral/Neutral 10"]});
  }

  ${({disabled:e})=>e?"cursor: not-allowed;":""}
  ${({$skeleton:e})=>e&&lr};
  ${wn};
  ${Mt}
`,Cn=S.input`
  outline: none;
  appearance: none;
  border-radius: inherit;
  box-sizing: border-box;
  flex: 1 1 48px;
  min-width: 10px;
  border: none;
  background: transparent;
  text-overflow: ellipsis;
  padding: 0;

  ${e=>e.$dimension==="s"?P["Body/Body 2 Long"]:P["Body/Body 1 Long"]}
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});

  &&&:disabled {
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    cursor: not-allowed;
  }

  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  }

  &:disabled::placeholder {
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  &&&:user-invalid + ${we} {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${e=>e.theme.color["Error/Error 60 Main"]});
  }

  &&&:user-invalid:hover:not(:disabled) + ${we} {
    border: 1px solid var(--admiral-color-Error_Error70, ${e=>e.theme.color["Error/Error 70"]});
  }

  &&&:user-invalid:focus:not(:disabled) + ${we} {
    border: 2px solid var(--admiral-color-Error_Error60Main, ${e=>e.theme.color["Error/Error 60 Main"]});
  }

  ${En}
`,On=S(br)`
  & > *:not(:last-child) {
    margin-right: 8px;
  }
`,Mn=S(br)`
  & > *:not(:first-child) {
    margin-left: 8px;
  }
`,jn=()=>{},kn=e=>e.preventDefault();function In(e,r,s){if(e&&r&&e.selectionStart===0&&e.selectionEnd===0){const d=r.querySelector(s);d==null||d.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0}))}}const $r=t.forwardRef(({style:e,status:r,children:s,className:d,skeleton:c=!1,displayClearIcon:i,containerRef:p,disableCopying:o,dimension:a="m",createActivateButtonList:w=["Enter"],onInputComplete:b,containerPropsConfig:E=jn,onClearOptions:m,iconsBefore:v,iconsAfter:y,lastChipCloseButtonSelector:$=".wrapper-options > :has(.close-button):last-of-type .close-button",onBackspaceKeyDown:x=In,...g},f)=>{const j=t.useRef(null),[ie,Se]=t.useState(null),U=t.Children.toArray(y),q=t.Children.toArray(v);!i||g.readOnly||o||U.unshift(l.jsx(cr,{icon:dr,onClick:m,"aria-hidden":!0},"close"));const ue={ref:p,className:d,style:e,$skeleton:c,$status:r,disabled:g.disabled,readOnly:g.readOnly,$dimension:a,tabIndex:-1,"data-disabled":!!g.disabled||void 0,"data-read-only":!!g.readOnly||void 0,"data-status":r,"data-disable-copying":!!o||void 0,onMouseDown:o?kn:void 0,onFocus:A=>{A.target.tagName.toLowerCase()!=="input"&&j.current&&j.current.focus()}};t.useLayoutEffect(()=>{function A(L){w.includes(L.code)&&b&&b(),L.code==="Backspace"&&x(this,ie,$)}if(!g.disabled&&!g.readOnly&&!o){const L=j.current;if(L)return L.addEventListener("keydown",A),()=>{L.removeEventListener("keydown",A)}}},[g.disabled,g.readOnly,o,ie,b,j]);const ee=q.length,re=U.length;return l.jsxs(Nn,{...ue,...E(ue),children:[ee>0&&l.jsx(On,{$dimension:a,children:q}),l.jsxs(Sn,{className:"wrapper-options",ref:A=>Se(A),children:[s," ",l.jsx(Cn,{$dimension:a,...g,ref:le(f,j)})]}),l.jsx(we,{$status:r,disabled:g.disabled||g.readOnly}),re>0&&l.jsx(Mn,{$dimension:a,children:U})]})});$r.displayName="MultiInput";const wr=t.forwardRef((e,r)=>{const s=t.useRef(null),{className:d,displayInline:c,status:i,required:p,extraText:o,label:a,id:w=ur(),disabled:b,skeleton:E,...m}=e,v={className:d,extraText:o,status:i,required:p,label:a,id:w,displayInline:c,disabled:b,inputRef:s,skeleton:E,"data-field-id":w,"data-field-name":m.name};jt(m,v),kt(m,v);const y={ref:le(r,s),id:w,status:i,disabled:b,skeleton:E,...m};return l.jsx(It,{...v,children:l.jsx($r,{...y})})});wr.displayName="InputExField";const An=e=>{const r=t.useRef(e);return t.useEffect(()=>{r.current=e},[]),r.current};function Dn(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}function Vn(e){return e!=null&&e.length?e.map(r=>({...r,hover:!0})):[]}const Bn=({label:e="",extraText:r="",displayClearIcon:s=!0,listValue:d,setListValue:c,...i})=>{const[p,o]=t.useState(""),a=m=>{const v=m.currentTarget.value;o(v)},w=m=>{c(v=>v.filter(y=>y.id!==m))},b=()=>{const m=p.trim();m&&(c(v=>[...v,{id:Dn(),children:m}]),o(""))},E=()=>{c([])};return l.jsx(wr,{"data-container-id":"MultiSearchFieldId",...i,label:e,extraText:r,value:p,onInputComplete:b,onClearOptions:E,onChange:a,displayClearIcon:s&&d.length!==0,children:d.map((m,v)=>t.createElement(At,{...m,key:v,onClose:i.readOnly||i.disableCopying?void 0:w,tabIndex:-1,dimension:"s",appearance:"filled",readOnly:i.readOnly,disabled:i.disabled}))})},$e=e=>{const r=e.split(".").reverse().join("-");return new Date(r).getTime()},nr=2,Rn=({queryKey:e,...r})=>{const s=_t({queryKey:[e]}),[d,c]=t.useState([...r.rowList]),[i,p]=t.useState([...r.columnList]),[o,a]=t.useState(0),w=y=>{const $=[...y],x=[...$].filter(g=>!!g.sort).sort((g,f)=>(g.sortOrder||0)-(f.sortOrder||0));return x.forEach((g,f)=>{f<nr?g.sortOrder=f+1:(g.sortOrder=void 0,g.sort=void 0)}),a(x.length),$},b=y=>y.filter(x=>!!x.sort).sort((x,g)=>(x.sortOrder||0)-(g.sortOrder||0)).reduce((x,{name:g,sort:f,type:j})=>(f&&(x[g]={sort:f,type:j}),x),{}),E=({name:y,sort:$})=>{if($==="initial"){const x=[...i].map(g=>g.name===y?{...g,sort:void 0,sortOrder:void 0}:{...g});p(w(x))}else if($==="asc"){if(o===nr){const g=i.find(f=>f.sortOrder===1);g&&(g.sort&&(g.sort=void 0),g.sortOrder&&(g.sortOrder=void 0))}const x=[...i].map(g=>{const f={...g};return g.name===y&&(f.sort="asc",f.sortOrder=o+1),f});p(w(x))}else p([...i].map(x=>x.name===y?{...x,sort:"desc"}:{...x}))},m=(y,$,x,g,f)=>{if(g==="asc")switch(f){case"date":return $e(y[x])-$e($[x]);case"number":default:return Number(y[x].replace(/\D/g,""))-Number($[x].replace(/\D/g,""))}else switch(f){case"date":return $e($[x])-$e(y[x]);case"number":default:return Number($[x].replace(/\D/g,""))-Number(y[x].replace(/\D/g,""))}};t.useEffect(()=>{const y=b(i);if(Object.keys(y).length===0)c([...r.rowList]);else{const $=Object.keys(y),x=[...d].sort((g,f)=>{const j=m(g,f,$[0],y[$[0]].sort,y[$[0]].type);return!j&&$.length>1?m(g,f,$[1],y[$[1]].sort,y[$[1]].type):j});c(x)}},[r.rowList,i]);const v=({name:y,width:$})=>{const x=i.map(g=>g.name===y?{...g,width:$}:g);p(x)};return s?l.jsx(Dt,{}):l.jsx(Bt,{...r,onSortChange:E,onColumnResize:v})},Pn=({placeholder:e="",options:r,setCurOption:s,...d})=>{const c={"data-testid":"selectClearButton"},i={"data-testid":"selectOpenButton"},[p,o]=t.useState(""),a=b=>o(b.target.value),w=b=>{s(b)};return l.jsx(Pt,{theme:ir,children:l.jsx(yr,{...d,value:p,onChange:a,onSelectedChange:w,placeholder:e,dropContainerClassName:"dropContainerClass",clearButtonPropsConfig:()=>c,openButtonPropsConfig:()=>i,children:r.map(({key:b,value:E})=>l.jsx(bn,{value:b,children:E},b))})})};S.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
`;const _n=S.div`
  display: grid;
  grid-template-columns: 75% 20%;
  gap: 5%;
`,Tn=({columnList:e,selectPlaceholder:r,searchPlaceholder:s,multiple:d,setFilters:c,...i})=>{const[p,o]=t.useState(""),[a,w]=t.useState([]),b=An(p),E=e.reduce((m,v)=>(m.push({key:v.name,value:String(v.title)}),m),[]);return t.useEffect(()=>{p&&!Array.isArray(p)&&c({[p]:a.map(m=>m==null?void 0:m.children)})},[p,a,c]),t.useEffect(()=>{b&&w([])},[b]),l.jsxs(_n,{children:[l.jsx(Bn,{listValue:a,setListValue:w,placeholder:s,...i}),l.jsx(Pn,{setCurOption:o,options:E,placeholder:r,multiple:d})]})};export{Tn as S,Rn as T,Vn as a};
