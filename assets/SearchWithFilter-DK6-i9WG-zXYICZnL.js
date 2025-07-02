import{v as t,N as o,U as ht,X as vt,k as N,b as ft,z as xt,D as lr,c as bt,p as $t,E as or,K as gt,P as yt,d as oe,e as wt,q as Ct,A as ar,g as $e,s as S,h as Nt,W as Et,J as kt,i as Ot,j as jt,m as sr,n as ir,I as St,x as we,o as Ye,r as Mt,t as Ce,w as dr,G as B,C as Rt,y as L,B as Dt,L as ur,M as cr,O as It,Q as Bt,S as Lt}from"./index-Bhzfcokq.js";function Pt(e,r){const l=bt(r),c=l.getQueryCache();return t.useSyncExternalStore(t.useCallback(u=>c.subscribe($t.batchCalls(u)),[c]),()=>l.isFetching(e),()=>l.isFetching(e))}const pr=t.createContext(null),mr=()=>t.useContext(pr),At=({children:e,...r})=>o.jsx(pr.Provider,{value:r,children:e}),_t=t.createContext(null),hr=()=>t.useContext(_t),W=35,We=4,vr=N.div`
  width: ${W}px;
  height: 24px;
`,Tt=N.div`
  display: flex;
  width: ${W}px;
  visibility: hidden;
  [data-show-count] & {
    visibility: visible;
  }
  > * {
    width: ${W}px;
    border-radius: 16px;
    // Убирает действие inline-block
    display: flex;
  }
`,Vt=N(cr)`
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  padding: 4px 0;
  cursor: pointer;
`,Ft=N.div`
  max-width: 488px;

  @media (max-width: 768px) {
    max-width: 250px;
  }
`,Kt=L`
  // оставлено, чтоб обрабатывался onClick
  pointer-events: auto;
  &:hover {
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  }
`,Ut=N(cr)`
  margin-right: 4px;
  // Убирает пробел от inline-flex
  display: flex;
  ${({disabled:e})=>e&&Kt};

  min-width: ${W}px;
  @media (max-width: 768px) {
    max-width: 140px;
  }

  // По дизайну при наведении цвет самого чипса меняться не должен, но т.к. есть обработчик onClick для stopPropagation,
  // то крестик чипса получается clickable и при ховере меняет цвет
  // disabled и readOnly чипсы не меняют цвет при ховере (в readOnly в целом отсутствует кнопка крестика)
  &:hover {
    ${({theme:e,disabled:r})=>{if(!r)return`background-color: var(--admiral-color-Opacity_Neutral8, ${e.color["Opacity/Neutral 8"]})`}}
  }
`,ge=({value:e,disabled:r,renderChip:l,...c},u)=>{const i=l(),m={};return ur(c,m,"data",!1),(a=>typeof a=="object"&&a!==null&&!t.isValidElement(a))(i)?{...i,onClose:()=>{var a;return(a=i.onClose)==null?void 0:a.call(i,{value:e,disabled:r,...m})}}:{disabled:r,onClose:()=>u(e),children:i}},er=({className:e,option:r,disabled:l,readOnly:c,onClick:u,onChipRemove:i})=>{const m=t.useCallback(a=>()=>o.jsx(Ft,{children:a}),[]);return o.jsx(Ut,{className:e,tabIndex:-1,dimension:"s",appearance:"filled",onClick:u,onClose:c?void 0:ge(r,i).onClose,disabled:ge(r,i).disabled||l,renderContentTooltip:m(ge(r,i).children),children:ge(r,i).children})},Ht=({count:e,disabled:r,onClick:l})=>{const c=t.useRef(null),u=t.useRef(null);return e?o.jsx(Tt,{onClick:l,ref:c,className:"counter",children:o.jsxs(Vt,{ref:u,"data-visible":!0,tabIndex:-1,dimension:"s",appearance:"filled",disabled:r,children:["+",e]})}):o.jsx(vr,{})},zt=N.div`
  display: flex;
`,qt=t.forwardRef(({option:e,childrenOptions:r,containerRef:l,shouldShowCount:c,disabled:u,readOnly:i,onChipClick:m,onChipRemove:a},s)=>{const w=t.useRef(null),[y,C]=t.useState(!1);return t.useLayoutEffect(()=>{const h=new IntersectionObserver(function(f){if(f[0].isIntersecting&&!y){C(!0),f[0].target.setAttribute("data-visible","true");const x=f[0].target.previousElementSibling,v=f[0].target.nextElementSibling;return x&&x.removeAttribute("data-show-count"),void(v&&!v.getAttribute("data-visible")&&f[0].target.setAttribute("data-show-count",""))}if(y&&!f[0].isIntersecting){C(!1),f[0].target.removeAttribute("data-visible"),f[0].target.removeAttribute("data-show-count");const x=f[0].target.previousElementSibling;x&&x.getAttribute("data-visible")&&x.setAttribute("data-show-count","true")}},{root:l.current,threshold:[0,1]});return l.current&&w.current&&h.observe(w.current),()=>h.disconnect()},[y]),o.jsxs(zt,{ref:oe(s,w),onMouseDown:h=>h.preventDefault(),children:[o.jsx(er,{className:"chip",option:e,disabled:u,readOnly:i,onClick:m,onChipRemove:a}),c&&r.length>0&&o.jsx(Ht,{count:r.length,disabled:u,children:r.map(h=>o.jsx(er,{option:h,disabled:u,readOnly:i,onClick:m,onChipRemove:a},h.value))}),!c&&o.jsx(vr,{})]},e.value)}),Gt=({options:e,isOptionsListOpen:r,containerRef:l,hasMaxHeight:c,...u})=>{const i=ar(r);return t.useEffect(()=>{var m,a,s;c&&e.length!==0&&(i&&!r&&((m=l.current)==null||m.scrollTo({top:0,left:0,behavior:"smooth"})),!i&&r&&setTimeout(()=>{var w,y,C;(w=l.current)==null||w.scrollTo({top:0,left:0,behavior:"instant"}),(C=l.current)==null||C.scrollTo({top:(y=l.current)==null?void 0:y.scrollHeight,left:0,behavior:"smooth"})}),r&&i&&((s=l.current)==null||s.scrollTo({top:(a=l.current)==null?void 0:a.scrollHeight,left:0,behavior:"smooth"})))},[r,e,c]),o.jsx(o.Fragment,{children:e.map((m,a)=>o.jsx(qt,{option:m,childrenOptions:a<e.length-1?e.slice(a+1):[],containerRef:l,...u},m.value))})},F=N.div`
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
`,Jt=L`
  min-height: ${({$multiple:e,$minRowCount:r,$dimension:l})=>e?r?24*r+4*(r-1)+"px":"24px":(l==="s"?20:24)+"px"};

  max-height: ${({$multiple:e,$maxRowCount:r,$opened:l,$idleHeight:c})=>e?r?24*r+4*(r-1)+"px":l||c!=="fixed"?"none":"24px":"none"};
`,Xt=L`
  > * {
    margin-left: ${`-${W+We}px`};
  }

  padding-left: ${`${W+We}px`};
`,fr=N.div`
  flex: 1 1 auto;
  display: flex;
  overflow: hidden;

  ${({$multiple:e,$isEmpty:r})=>e&&!r&&Xt}

  gap: 4px;
  flex-wrap: ${({$multiple:e})=>e?"wrap":"unset"};
  align-items: center;
  align-content: flex-start;

  ${e=>e.$dimension==="s"?B["Body/Body 2 Long"]:B["Body/Body 1 Long"]}
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});

  ${Jt}
  [data-disabled='true'] &&& {
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  }
`,Qt=N.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Zt=L`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,Yt=N.input`
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

  ${({$dimension:e})=>e==="s"?B["Body/Body 2 Long"]:B["Body/Body 1 Long"]}
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

  height: ${({$dimension:e,$isMultiple:r})=>{return l=r,(e!=="s"||l?24:20)+"px";var l}};

  ${Zt};
`,Wt=L`
  pointer-events: none;
  cursor: default;
`,en=L`
  && > *:not(${fr}) {
    pointer-events: none;
  }

  & ${F} {
    border-color: transparent;
  }
`,rn=L`
  ${F} {
    border-width: 2px;
  }
`,tn=N.div`
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
`,nn=N.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: ${e=>e.$multiple?"flex-start":"center"};
  cursor: ${({disabled:e,$readonly:r,$isLoading:l})=>e?"not-allowed":r||l?"default":"pointer"};

  padding: ${({$dimension:e,$multiple:r})=>{switch(e){case"xl":return"16px 16px";case"s":return r?"4px 12px":"6px 12px";default:return"8px 16px"}}};

  background: ${({theme:e,disabled:r,$readonly:l})=>r||l?`var(--admiral-color-Neutral_Neutral10, ${e.color["Neutral/Neutral 10"]})`:`var(--admiral-color-Neutral_Neutral00, ${e.color["Neutral/Neutral 00"]})`};

  ${({disabled:e,$readonly:r})=>r||e?en:""};
  ${({$focused:e,$readonly:r,$isLoading:l})=>!e||r||l?"":rn};

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

  border-radius: ${e=>e.$skeleton?0:`var(--admiral-border-radius-Medium, ${Ce(e.theme.shape)})`};

  ${({$skeleton:e})=>e&&dr};
  ${({$skeleton:e})=>e&&Wt};
`,xr=N.div`
  flex: 0 0 auto;

  word-break: break-word;
  display: flex;
  align-items: center;
  padding: ${({$dimension:e})=>{switch(e){case"xl":return"12px 16px";case"s":return"6px 12px";default:return"8px 16px"}}};

  background-color: transparent;

  ${({$dimension:e})=>{switch(e){case"xl":return B["Body/Body 1 Long"];case"s":return B["Body/Body 2 Long"];default:return B["Body/Body 1 Short"]}}}
`,ln=L`
  ${B["Body/Body 1 Short"]}
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
  background-color: var(--admiral-color-Special_ElevatedBG, ${e=>e.theme.color["Special/Elevated BG"]});
  border-radius: var(--admiral-border-radius-Medium, ${e=>Ce(e.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${e=>Dt(e.theme.shadow["Shadow 08"])});
  overflow: auto;
`,on=N(It)`
  ${ln}
`,an=N.div`
  user-select: none;
`,sn=N(Bt)`
  justify-content: flex-start;
  flex-wrap: nowrap;
  white-space: pre-wrap;
  ${e=>e.$selected&&!e.$hovered&&!e.$preselected&&e.$multiple&&"background-color: transparent;"}
`,dn=({visibleValue:e,isSearchPanelOpen:r,targetRef:l,forceHideOverflowTooltip:c})=>{const u=t.useRef(null),[i,m]=t.useState(!1),[a,s]=t.useState(!1);t.useEffect(()=>{u.current&&Ye(u.current)!==i&&m(Ye(u.current))},[a,m]),t.useEffect(()=>{function y(){s(!0)}function C(){s(!1)}const h=u.current;if(h)return h.addEventListener("mouseenter",y),h.addEventListener("mouseleave",C),()=>{h.removeEventListener("mouseenter",y),h.removeEventListener("mouseleave",C)}},[s]);const w=!c&&!r&&a&&i;return o.jsxs(o.Fragment,{children:[o.jsx(Qt,{ref:u,children:e}),w&&o.jsx(Mt,{renderContent:()=>e,targetElement:l.current})]})},un=e=>e.stopPropagation(),cn=N.select`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border: none;
  pointer-events: none;
`,pn=t.forwardRef(({options:e,...r},l)=>{const c=t.useRef(null);return t.useEffect(()=>{var u;function i(m){const a=S.getCode(m);a&&[S[" "],S.Enter,S.ArrowDown,S.ArrowUp].includes(a)&&m.preventDefault()}return(u=c.current)==null||u.addEventListener("keydown",i),()=>{var m;return(m=c.current)==null?void 0:m.removeEventListener("keydown",i)}},[]),o.jsxs(cn,{ref:oe(l,c),...r,onClick:un,children:[o.jsx("option",{value:""}),e.map(u=>o.jsx("option",{value:u.value,disabled:u.disabled,children:u.value},u.value))]})}),br=t.createContext(null),mn=()=>t.useContext(br),hn=({children:e,...r})=>o.jsx(br.Provider,{value:r,children:e}),vn=(e="",r="",l="wholly")=>{const c=(l==="word"?r.split(" "):[r]).filter(Boolean).map(a=>a.toLowerCase()),u=["[","]","\\","^","$",".","|","?","*","+","(",")"],i=c.map(a=>`(${a.split("").map(s=>u.includes(s)?`\\${s}`:s).join("")})?`).join(""),m=e.split(new RegExp(i,"gi")).filter(Boolean);return!r||m.some(a=>c.includes(a.toLowerCase()))};N(xr)`
  background-color: ${({active:e,selected:r,theme:l})=>r?`var(--admiral-color-Opacity_Focus, ${l.color["Opacity/Focus"]})`:e?`var(--admiral-color-Opacity_Hover, ${l.color["Opacity/Hover"]})`:"transparent"};

  color: ${({disabled:e,theme:r})=>e?`var(--admiral-color-Neutral_Neutral30, ${r.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${r.color["Neutral/Neutral 90"]})`};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  & > * {
    pointer-events: ${({disabled:e})=>e?"none":"all"};
  }
`;const fn=N(Lt)`
  margin-right: 8px;
  flex-shrink: 0;
`,xn=e=>mr()?o.jsx(bn,{...e}):null,bn=({disabled:e=!1,id:r,value:l,children:c,renderOption:u,renderChip:i,...m})=>{const a=mr(),s=hr(),w=(s==null?void 0:s.disabled)||e,y=t.useCallback(()=>c,[c]),C=i||y,h=t.useMemo(()=>u?u({disabled:e}):c,[u,e,l,c]),f={};ur(m,f,"data",!1);const x=t.useMemo(()=>({id:r,value:l,disabled:w,children:h,renderChip:C,...f}),[r,l,w,h,C]);return t.useEffect(()=>{var v;return(v=a==null?void 0:a.onConstantOptionMount)==null||v.call(a,x),()=>{var g;return(g=a==null?void 0:a.onConstantOptionUnMount)==null?void 0:g.call(a,x)}},[a==null?void 0:a.onConstantOptionMount,a==null?void 0:a.onConstantOptionUnMount,x]),null},$n=({id:e,disabled:r=!1,readOnly:l=!1,value:c,children:u,renderOption:i,renderChip:m,...a})=>{const s=mn(),w=hr(),y=(w==null?void 0:w.disabled)||r,C=h=>s!=null&&s.multiple?(({selected:f=!1,hovered:x=!1})=>o.jsxs(o.Fragment,{children:[(s==null?void 0:s.showCheckbox)&&o.jsx(fn,{checked:f,hovered:x,dimension:(s==null?void 0:s.dimension)==="s"?"s":"m",disabled:r,onChange:()=>!1}),u]}))(h):u;return t.useEffect(()=>{var h;const f=e||c,x={id:c,value:c,render:v=>{return i?i(v):t.createElement(sn,{...v,dimension:(g=s==null?void 0:s.dimension,g==="xl"?"l":g),key:f,...a,$selected:v.selected,$hovered:v.hovered,$preselected:v.preselected,$multiple:s==null?void 0:s.multiple},C({selected:v.selected,hovered:v.hovered}));var g},disabled:y,readOnly:l};return(h=s==null?void 0:s.onDropDownOptionMount)==null||h.call(s,x),()=>{var v;return(v=s==null?void 0:s.onDropDownOptionUnMount)==null?void 0:v.call(s,x)}},[s==null?void 0:s.onDropDownOptionMount,s==null?void 0:s.onDropDownOptionUnMount,s==null?void 0:s.dimension,s==null?void 0:s.multiple]),null},gn=e=>o.jsxs(o.Fragment,{children:[o.jsx(xn,{...e}),o.jsx($n,{...e})]}),yn=N(xr)`
  color: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
`,rr=e=>e.stopPropagation(),tr=()=>{},$r=t.forwardRef(({value:e,isLoading:r,className:l,style:c,status:u,icons:i,portalTargetRef:m,targetElement:a,inputTargetRef:s,disabled:w,readOnly:y,placeholder:C,defaultValue:h,dimension:f="m",idleHeight:x="fixed",minRowCount:v="none",maxRowCount:g="none",mode:b="select",multiple:p=!1,showCheckbox:R=!0,displayClearIcon:ae=!1,onClearIconClick:Ne,onInputChange:z,inputValue:q,defaultInputValue:se,renderSelectValue:ie,onFocus:de,onBlur:P,children:A,alignDropdown:Cr="stretch",alignSelf:Nr="stretch",skeleton:Be=!1,locale:Le,dropContainerCssMixin:Er,dropContainerClassName:kr,dropContainerStyle:Or,renderDropDownTopPanel:jr,renderDropDownBottomPanel:Sr,renderTopPanel:Mr,renderBottomPanel:Rr,forcedOpen:ue=!1,onChangeDropDownState:Pe,onInputKeyDown:Dr,onInputKeyUp:Ir,onInputKeyUpCapture:Br,onInputKeyDownCapture:Lr,searchFormat:Pr="wholly",onFilterItem:Ar=vn,virtualScroll:_r,title:Tr,forceHideOverflowTooltip:Vr=!1,onSelectedChange:Ae,moveSelectedOnTop:Ee,clearInputValueAfterSelect:Fr=!0,openButtonPropsConfig:Kr=tr,clearButtonPropsConfig:Ur=tr,...G},Hr)=>{const _e=Ct()||lr,zr=(Le==null?void 0:Le.emptyMessage)||o.jsx(yn,{$dimension:f,children:_e.locales[_e.currentLocale].select.emptyMessage}),[O,Te]=t.useState(e??h),[qr,Gr]=t.useState(""),M=q===void 0?qr:q,[ce,pe]=t.useState(!1),[K,J]=t.useState(),[ee,Ve]=t.useState([]),[me,Fe]=t.useState([]),[k,_]=t.useState(ue),[X,ke]=t.useState(!1),[Oe,he]=t.useState(void 0),je=e===void 0,T=b==="select",Jr=t.useMemo(()=>g!=="none"&&g>0?g:x==="fixed"?1:"none",[g,x])!=="none",Ke=e??h,Q=t.useRef(Array.isArray(Ke)?Ke:[]),ve=t.useRef(!1),V=t.useRef([]);t.useEffect(()=>{Array.isArray(e)&&(Q.current=e)},[e]);const Ue=t.useMemo(()=>p?null:ee.find(n=>n.value===O),[p,ee,O]),Z=t.useMemo(()=>p&&Array.isArray(O)?O.reduce((n,$)=>{const d=ee.find(E=>E.value===$);return d&&n.push(d),n},[]):[],[ee,O,p]),Xr=ar(k),[fe,He]=t.useState([]);t.useEffect(()=>{if(p&&Ee||!(fe.length>0)||He([]),p&&Ee&&Xr!==k&&k){const n=Z.map(d=>d.value),$=n.length>0?n.reduce((d,E)=>{const j=me.find(le=>le.value===E);return j&&d.push(j),d},[]):[];He($)}},[me,k,Z,p,Ee]);const Se=t.useMemo(()=>{const n=fe.map(d=>d.value),$=me.filter(d=>Ar(d.value,M,Pr)).reduce((d,E)=>(n.includes(E.value)||d.push(E),d),[...fe]);return $.length?$:[{id:"emptyMessage",render:()=>o.jsx(an,{children:zr},"empty"),disabled:!0}]},[r,me,f,M,fe]);t.useEffect(()=>{K&&(Se.find(n=>n.id===K)||J(void 0))},[Se,K]);const D=s??t.useRef(null),Y=t.useRef(null),I=t.useRef(null),Qr=a||(m==null?void 0:m.current)||I.current,ze=t.useRef(null),re=t.useRef(null),Me=t.useRef({shouldExtendInputValue:!1}),Zr=n=>{Ve($=>[...$,n]),V.current.includes(n.value)&&(V.current=V.current.filter($=>$!==n.value))},Yr=n=>{Q.current.includes(n.value)&&(V.current=[...V.current,n.value]),Ve($=>$.filter(d=>d.value!==n.value))},Wr=t.useCallback(n=>{Fe($=>[...$,n])},[]),et=t.useCallback(n=>{Fe($=>$.filter(d=>d.id!==n.id))},[]),Re=t.useCallback(()=>{_(!1),D.current&&$e(D.current,{value:""}),pe(!0)},[O]),te=t.useCallback(n=>{const $=Y.current;if(!$)return;const d=Array.from($.options),E=d.find(j=>j.value===n);if(E&&(p||d.forEach(j=>j.selected=!1),E.selected=!p||!E.selected,$.dispatchEvent(new Event("change",{bubbles:!0})),p||Re(),M&&D.current&&Fr)){$e(D.current,{value:"",selectionEnd:0,selectionStart:0});const j=K;J(""),setTimeout(()=>J(j))}},[Re,p,M,K]),rt=t.useCallback(()=>{const n=Y.current;n&&(n.selectedIndex=-1,n.dispatchEvent(new Event("change",{bubbles:!0})))},[]);t.useEffect(()=>{ue!==k&&_(ue)},[ue]),t.useEffect(()=>{var n;Pe==null||Pe(k),!k&&X&&document.activeElement!==I.current&&((n=Y.current)==null||n.focus())},[k,X]);const tt=Ne||rt,qe=Jr&&!k,nt=t.useCallback(()=>o.jsx(Gt,{containerRef:ze,options:Z,shouldShowCount:qe,disabled:w,readOnly:y,onChipRemove:te,onChipClick:rr,isOptionsListOpen:k,hasMaxHeight:!!g&&g!=="none"}),[Z,qe,w,y,te,k,g]),De=(p?!(O!=null&&O.length):!O)&&!!C&&!M,lt=ie==null?void 0:ie(O,M),ot=Ue==null?void 0:Ue.children,at=p?nt():ot,ne=lt||at||O||null,xe=typeof ne=="string",st=xe?o.jsx(dn,{visibleValue:ne,isSearchPanelOpen:k,targetRef:I,forceHideOverflowTooltip:Vr}):ne,Ge=()=>{_(n=>!n)},it=()=>{if(!M&&O)return p?void(()=>{var n;const $=(d=[...Z].reverse(),(n=d.find(({disabled:E})=>!E))==null?void 0:n.value);var d;$&&te($)})():pe(!1)};t.useEffect(()=>{var n;if(!y&&!w)return(n=I.current)==null||n.addEventListener("keydown",$),()=>{var d;(d=I.current)==null||d.removeEventListener("keydown",$)};function $(d){const E=S.getCode(d);E===S[" "]&&(!T&&M?d.stopPropagation():k||(d.preventDefault(),_(!0),d.stopPropagation())),E!==S.Enter||k||(d.preventDefault(),_(!0),d.stopPropagation()),E!==S.ArrowDown&&E!==S.ArrowUp||k||(_(!0),d.stopPropagation());const j=d.ctrlKey||d.metaKey||d.altKey;d.key.length!==1||j||xe&&!M&&ce&&(Me.current.shouldExtendInputValue=!0),E!==S.Backspace||d.repeat||it(),E===S.Backspace&&((le=>{if(!xe||!D.current||M||!ce||!O)return;le.preventDefault();const H=ne.slice(0,-1);$e(D.current,{value:H,selectionEnd:H.length,selectionStart:H.length})})(d),_(!0)),E===S.Escape&&k&&(_(!1),d.preventDefault(),d.stopPropagation())}},[y,w,T,M,k,Z]),t.useEffect(()=>{var n;function $(){ve.current=!1}return(n=I.current)==null||n.addEventListener("keyup",$),()=>{var d;(d=I.current)==null||d.removeEventListener("keyup",$)}},[]),t.useEffect(()=>{(!X&&!p||p)&&(D.current&&$e(D.current,{value:""}),pe(!0))},[p,X]),t.useEffect(()=>{var n,$;k&&(T?(n=Y.current)==null||n.focus():($=D.current)==null||$.focus(),he(""))},[k,T]),t.useEffect(()=>{Oe&&J("")},[Oe]),t.useEffect(()=>{K&&he("")},[K]),t.useEffect(()=>{if(k){const n=O&&!Array.isArray(O)?O:void 0;J(n)}},[k]),t.useEffect(()=>{je||Te(e)},[e,je]),Nt([I,re],n=>{var $;n.target&&($=I.current)!=null&&$.contains(n.target)||(ke(!1),Re())});const dt=ce&&(p?!!(O!=null&&O.length):!!O),be=t.useMemo(()=>t.Children.map(A,n=>t.isValidElement(n)?t.cloneElement(n,{key:or(),...n.props}):null),[A]),ut=t.useMemo(()=>o.jsx(hn,{onDropDownOptionMount:Wr,onDropDownOptionUnMount:et,dimension:f,multiple:p,showCheckbox:R,children:be}),[be,f,R]),ct=t.useMemo(()=>o.jsx(At,{onConstantOptionMount:Zr,onConstantOptionUnMount:Yr,children:be}),[be]),pt=Et(G),mt=kt(G),Je={icon:ir,id:"searchSelectClearIcon",onClick:tt,"aria-hidden":!0},Xe={$isOpen:k,onClick:Ge,"aria-hidden":!0};return o.jsxs(nn,{className:l,style:c,$focused:X,$multiple:p,disabled:w,"data-disabled":w,$readonly:y,$isLoading:r,$dimension:f,ref:I,"data-status":u,onClick:w||y||r?void 0:n=>{var $;n.target&&($=re.current)!=null&&$.contains(n.target)||!T&&k||Ge()},onFocus:n=>{X||(ke(!0),de==null||de(n))},$skeleton:Be,onBlur:n=>{var $,d;n.currentTarget.contains(n.relatedTarget)||($=re.current)!=null&&$.contains(n.relatedTarget)||(ke(!1),_(!1),(d=Y.current)==null||d.blur(),P==null||P(n),ve.current=!1)},title:Tr,children:[ct,ut,o.jsx(pn,{ref:oe(Hr,Y),value:O,multiple:p,disabled:w,options:ee,...G,onChange:n=>{var $;if(ve.current&&T)return void he(n.target.value);const d=p?Array.from(n.target.selectedOptions).map(j=>j.value):n.target.value;let E=[];if(p&&Array.isArray(d)){const j=d.filter(U=>!Q.current.includes(U)&&!V.current.includes(U)),le=Q.current.filter(U=>!d.includes(U)&&!V.current.includes(U));E=[...Q.current,...j];const H=[...V.current];le.forEach(U=>{const Qe=E.findIndex(Ie=>U===Ie);Qe>-1&&E.splice(Qe,1);const Ze=H.findIndex(Ie=>U===Ie);Ze>-1&&H.splice(Ze,1)}),Q.current=E,V.current=H}je&&Te(p?E:d),($=G.onChange)==null||$.call(G,n),Ae==null||Ae(p?E:d)}}),o.jsx(F,{}),o.jsxs(fr,{tabIndex:-1,ref:ze,className:"selectValueWrapper",$dimension:f,$multiple:p,$minRowCount:v!=="none"?v:void 0,$maxRowCount:g!=="none"?g:void 0,$idleHeight:x,$opened:k,$isEmpty:De,children:[ce&&st,(C&&De||!T)&&o.jsx(Yt,{"data-id":G.id,placeholder:De?C:"",tabIndex:-1,ref:D,disabled:w,readOnly:y||T,value:M,defaultValue:se,$isMultiple:p,$dimension:f,onChange:n=>{p||pe(!1),($=>{Me.current.shouldExtendInputValue&&xe&&($.target.value=`${ne}${$.target.value}`,Me.current.shouldExtendInputValue=!1)})(n),q===void 0&&Gr(n.target.value),z==null||z(n)},onKeyDown:Dr,onKeyUp:Ir,onKeyUpCapture:Br,onKeyDownCapture:Lr})]}),k&&!Be&&o.jsx(Ot,{ref:re,tabIndex:-1,targetElement:Qr,"data-dimension":f,alignSelf:Cr||Nr,dropContainerCssMixin:Er,className:kr,style:Or,...pt,children:o.jsx(on,{dimension:f==="xl"?"l":f,active:K,selected:O,onActivateItem:n=>J(n),onSelectItem:te,onDeselectItem:te,multiSelection:p,model:Se,renderTopPanel:jr||Mr,renderBottomPanel:Sr||Rr,containerRef:re,virtualScroll:_r,preventFocusSteal:!0,preselectedModeActive:T,preselected:Oe,onPreselectItem:he,onMenuKeyDown:()=>{ve.current=!0},...mt})}),o.jsxs(tn,{$multiple:p,$dimension:f,onClick:rr,onMouseDown:n=>n.preventDefault(),children:[r&&o.jsx(jt,{dimension:f==="s"?"ms":"m"}),ae&&!y&&dt&&o.jsx(sr,{...Je,...Ur(Je)}),i,!y&&o.jsx(St,{"data-disabled":!!w||void 0,"data-loading":!!r||void 0,...Xe,...Kr(Xe)})]})]})});$r.displayName="Select";const wn=L`
  padding: ${({$dimension:e})=>{switch(e){case"xl":return"16px 16px";case"s":return"6px 12px";default:return"8px 16px"}}};
`,Cn=L`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,Nn=N.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-right: 4px;
  flex-grow: 1;
`,gr=N.div`
  display: flex;
  align-items: flex-start;

  & > svg {
    border-radius: var(--admiral-border-radius-Medium, ${e=>Ce(e.theme.shape)});
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
`,En=N.div`
  position: relative;
  display: flex;
  column-gap: 8px;
  align-items: stretch;
  overflow: hidden;
  border: none;
  border-radius: ${e=>e.$skeleton?0:`var(--admiral-border-radius-Medium, ${Ce(e.theme.shape)})`};

  background-color: var(--admiral-color-Neutral_Neutral00, ${e=>e.theme.color["Neutral/Neutral 00"]});

  &[data-read-only],
  &[data-disabled] {
    background-color: var(--admiral-color-Neutral_Neutral10, ${e=>e.theme.color["Neutral/Neutral 10"]});
  }

  ${({disabled:e})=>e?"cursor: not-allowed;":""}
  ${({$skeleton:e})=>e&&dr};
  ${wn};
  ${Rt}
`,kn=N.input`
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

  ${e=>e.$dimension==="s"?B["Body/Body 2 Long"]:B["Body/Body 1 Long"]}
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

  ${Cn}
`,On=N(gr)`
  & > *:not(:last-child) {
    margin-right: 8px;
  }
`,jn=N(gr)`
  & > *:not(:first-child) {
    margin-left: 8px;
  }
`,Sn=()=>{},Mn=e=>e.preventDefault();function Rn(e,r,l){if(e&&r&&e.selectionStart===0&&e.selectionEnd===0){const c=r.querySelector(l);c==null||c.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0}))}}const yr=t.forwardRef(({style:e,status:r,children:l,className:c,skeleton:u=!1,displayClearIcon:i,containerRef:m,disableCopying:a,dimension:s="m",createActivateButtonList:w=["Enter"],onInputComplete:y,containerPropsConfig:C=Sn,onClearOptions:h,iconsBefore:f,iconsAfter:x,lastChipCloseButtonSelector:v=".wrapper-options > :has(.close-button):last-of-type .close-button",onBackspaceKeyDown:g=Rn,...b},p)=>{const R=t.useRef(null),[ae,Ne]=t.useState(null),z=t.Children.toArray(x),q=t.Children.toArray(f);!i||b.readOnly||a||z.unshift(o.jsx(sr,{icon:ir,onClick:h,"aria-hidden":!0},"close"));const se={ref:m,className:c,style:e,$skeleton:u,$status:r,disabled:b.disabled,readOnly:b.readOnly,$dimension:s,tabIndex:-1,"data-disabled":!!b.disabled||void 0,"data-read-only":!!b.readOnly||void 0,"data-status":r,"data-disable-copying":!!a||void 0,onMouseDown:a?Mn:void 0,onFocus:P=>{P.target.tagName.toLowerCase()!=="input"&&R.current&&R.current.focus()}};t.useLayoutEffect(()=>{function P(A){w.includes(A.code)&&y&&y(),A.code==="Backspace"&&g(this,ae,v)}if(!b.disabled&&!b.readOnly&&!a){const A=R.current;if(A)return A.addEventListener("keydown",P),()=>{A.removeEventListener("keydown",P)}}},[b.disabled,b.readOnly,a,ae,y,R]);const ie=q.length,de=z.length;return o.jsxs(En,{...se,...C(se),children:[ie>0&&o.jsx(On,{$dimension:s,children:q}),o.jsxs(Nn,{className:"wrapper-options",ref:P=>Ne(P),children:[l," ",o.jsx(kn,{$dimension:s,...b,ref:oe(p,R)})]}),o.jsx(we,{$status:r,disabled:b.disabled||b.readOnly}),de>0&&o.jsx(jn,{$dimension:s,children:z})]})});yr.displayName="MultiInput";const wr=t.forwardRef((e,r)=>{const l=t.useRef(null),{className:c,displayInline:u,status:i,required:m,extraText:a,label:s,id:w=or(),disabled:y,skeleton:C,...h}=e,f={className:c,extraText:a,status:i,required:m,label:s,id:w,displayInline:u,disabled:y,inputRef:l,skeleton:C,"data-field-id":w,"data-field-name":h.name};gt(h,f),yt(h,f);const x={ref:oe(r,l),id:w,status:i,disabled:y,skeleton:C,...h};return o.jsx(wt,{...f,children:o.jsx(yr,{...x})})});wr.displayName="InputExField";const Dn=e=>{const r=t.useRef(e);return t.useEffect(()=>{r.current=e},[]),r.current};function In(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}function _n(e){return e!=null&&e.length?e.map(r=>({...r,hover:!0})):[]}const Bn=({label:e="",extraText:r="",displayClearIcon:l=!0,listValue:c,setListValue:u,...i})=>{const[m,a]=t.useState(""),s=h=>{const f=h.currentTarget.value;a(f)},w=h=>{u(f=>f.filter(x=>x.id!==h))},y=()=>{const h=m.trim();h&&(u(f=>[...f,{id:In(),children:h}]),a(""))},C=()=>{u([])};return o.jsx(wr,{"data-container-id":"MultiSearchFieldId",...i,label:e,extraText:r,value:m,onInputComplete:y,onClearOptions:C,onChange:s,displayClearIcon:l&&c.length!==0,children:c.map((h,f)=>t.createElement(ft,{...h,key:f,onClose:i.readOnly||i.disableCopying?void 0:w,tabIndex:-1,dimension:"s",appearance:"filled",readOnly:i.readOnly,disabled:i.disabled}))})},ye=e=>{const r=e.split(".").reverse().join("-");return new Date(r).getTime()},nr=2,Tn=({queryKey:e,...r})=>{const l=Pt({queryKey:[e]}),[c,u]=t.useState([...r.rowList]),[i,m]=t.useState([...r.columnList]),[a,s]=t.useState(0),w=x=>{const v=[...x],g=[...v].filter(b=>!!b.sort).sort((b,p)=>(b.sortOrder||0)-(p.sortOrder||0));return g.forEach((b,p)=>{p<nr?b.sortOrder=p+1:(b.sortOrder=void 0,b.sort=void 0)}),s(g.length),v},y=x=>x.filter(v=>!!v.sort).sort((v,g)=>(v.sortOrder||0)-(g.sortOrder||0)).reduce((v,{name:g,sort:b,type:p})=>(b&&(v[g]={sort:b,type:p}),v),{}),C=({name:x,sort:v})=>{if(v==="initial"){const g=[...i].map(b=>b.name===x?{...b,sort:void 0,sortOrder:void 0}:{...b});m(w(g))}else if(v==="asc"){if(a===nr){const b=i.find(p=>p.sortOrder===1);b&&(b.sort&&(b.sort=void 0),b.sortOrder&&(b.sortOrder=void 0))}const g=[...i].map(b=>{const p={...b};return b.name===x&&(p.sort="asc",p.sortOrder=a+1),p});m(w(g))}else m([...i].map(g=>g.name===x?{...g,sort:"desc"}:{...g}))},h=(x,v,g,b,p)=>{if(b==="asc")switch(p){case"date":return ye(x[g])-ye(v[g]);case"number":default:return Number(x[g].replace(/\D/g,""))-Number(v[g].replace(/\D/g,""))}else switch(p){case"date":return ye(v[g])-ye(x[g]);case"number":default:return Number(v[g].replace(/\D/g,""))-Number(x[g].replace(/\D/g,""))}};t.useEffect(()=>{const x=y(i);if(Object.keys(x).length===0)u([...r.rowList]);else{const v=Object.keys(x),g=[...c].sort((b,p)=>{const R=h(b,p,v[0],x[v[0]].sort,x[v[0]].type);return!R&&v.length>1?h(b,p,v[1],x[v[1]].sort,x[v[1]].type):R});u(g)}},[r.rowList,i]);const f=({name:x,width:v})=>{const g=i.map(b=>b.name===x?{...b,width:v}:b);m(g)};return l?o.jsx(ht,{}):o.jsx(vt,{...r,onSortChange:C,onColumnResize:f})},Ln=({placeholder:e="",options:r,setCurOption:l,...c})=>{const u={"data-testid":"selectClearButton"},i={"data-testid":"selectOpenButton"},[m,a]=t.useState(""),s=y=>a(y.target.value),w=y=>{l(y)};return o.jsx(xt,{theme:lr,children:o.jsx($r,{...c,value:m,onChange:s,onSelectedChange:w,placeholder:e,dropContainerClassName:"dropContainerClass",clearButtonPropsConfig:()=>u,openButtonPropsConfig:()=>i,children:r.map(({key:y,value:C})=>o.jsx(gn,{value:y,children:C},y))})})};N.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
`;const Pn=N.div`
  display: grid;
  grid-template-columns: 75% 20%;
  gap: 5%;
`,Vn=({columnList:e,selectPlaceholder:r,searchPlaceholder:l,multiple:c,setFilters:u,...i})=>{const[m,a]=t.useState(""),[s,w]=t.useState([]),y=Dn(m),C=e.reduce((h,f)=>(h.push({key:f.name,value:String(f.title)}),h),[]);return t.useEffect(()=>{m&&!Array.isArray(m)&&u({[m]:s.map(h=>h==null?void 0:h.children)})},[m,s,u]),t.useEffect(()=>{y&&w([])},[y]),o.jsxs(Pn,{children:[o.jsx(Bn,{listValue:s,setListValue:w,placeholder:l,...i}),o.jsx(Ln,{setCurOption:a,options:C,placeholder:r,multiple:c})]})};export{Tn as R,Vn as T,_n as V};
