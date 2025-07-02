import{d as l,a as u,b as d,c as p,r,e as x,j as t,T as h}from"./index-CgTqJ2ri.js";import{S as m,T as y,a as K}from"./SearchWithFilter-DK6-i9WG.js";const R=l.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,o=[{name:"client",title:"Клиент",width:"50%"},{name:"bankAccount",title:"Банковский счёт",type:"number",width:"50%"}];class f{async getRKOList(s){return(await u.post("api/rko-list",{filters:s})).data}}const g=new f,k=e=>d({queryKey:["rko-list",e],queryFn:()=>g.getRKOList(e)}),j=()=>{const e=p(),[s,a]=r.useState(),{data:i}=k(s),n=r.useCallback(c=>{e(x.service.fullPath(c))},[e]);return t.jsxs(R,{children:[t.jsx(h,{font:"Header/H1",children:"Договора РКО"}),t.jsx(m,{selectPlaceholder:"Выберите поле из выпадающего списка",columnList:o,setFilters:a,searchPlaceholder:"Введите значение для поиска"}),t.jsx(y,{columnList:o,rowList:K(i),onRowClick:n,queryKey:"rko-list"})]})};export{j as default};
